#!/usr/bin/env python3
"""Find photos for every activity in activities.js.

Two sources, fetched independently:
  commons    Wikipedia / Wikimedia Commons (the cover photo comes from here)
  openverse  Openverse, openly licensed photos from Flickr and other sites

Writes photos.js, which the page loads: per photo its public image URL (the page
links straight to Wikimedia and Flickr, nothing is downloaded) and its credit. An activity is only fetched from a source it has no
photos from yet, unless named with --force.

Per activity in activities.js:
  wiki     Wikipedia article whose lead image becomes the cover photo
  search   search terms for the gallery photos (both sources)
  pin      optional list of Commons file titles ("File:...") shown first
  exclude  optional list of photo ids to never use (the "id" field in photos.js)
  photosOf optional list of other cards ("stop:name") whose photos this card shows; not fetched

Entries of removed or merged cards are never deleted; they stay in photos.js, unused.

Usage:
  python3 fetch_photos.py                       # fetch what's missing
  python3 fetch_photos.py --force "Roys Peak"   # refetch one activity
  python3 fetch_photos.py --source openverse    # only one source
  python3 fetch_photos.py --count 8             # photos per source (default 6)
  python3 fetch_photos.py --jobs 4              # activities fetched in parallel (default 6)
"""

import argparse
import html
import json
import re
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from itertools import zip_longest
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MANIFEST = ROOT / "photos.js"
UA = "TripIdeasPhotoFetcher/1.0 (personal trip planner)"
# A standard Wikimedia thumbnail width (https://w.wiki/GHai); other widths get rate-limited much harder
COMMONS_WIDTH = 1280
SKIP_TITLE = re.compile(r"map|logo|diagram|chart|plan\b|flag|coat of arms|\.(pdf|svg|tif|tiff|djvu|gif|webm|ogv)$", re.I)
SKIP_TAGS = {"secondlife", "second life", "sl", "virtual world", "screenshot", "poster", "flyer",
             "template", "illustration", "drawing", "painting", "postcard"}
# Minimum seconds between requests per host, shared by all threads.
# Openverse allows 20 anonymous searches a minute; Wikimedia throttles bursts on all its hosts.
HOST_INTERVAL = {"api.openverse.org": 3.5, "en.wikipedia.org": 1.0, "commons.wikimedia.org": 1.0}
_host_lock = threading.Lock()
_next_slot = {}
_print_lock = threading.Lock()


def log(*args):
    with _print_lock:
        print(*args, flush=True)


def throttle(host, backoff=0):
    """Wait for this host's next free slot; backoff pushes the slot back for every thread."""
    with _host_lock:
        now = time.monotonic()
        if backoff:
            _next_slot[host] = max(_next_slot.get(host, 0), now + backoff)
            return
        gap = HOST_INTERVAL.get(host)
        if not gap:
            return
        slot = max(now, _next_slot.get(host, 0))
        _next_slot[host] = slot + gap
    time.sleep(slot - now)


def get(url, attempts=8):
    host = urllib.parse.urlsplit(url).hostname
    for attempt in range(attempts):
        throttle(host)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            return urllib.request.urlopen(req, timeout=30).read()
        except Exception as e:
            if attempt == attempts - 1:
                raise
            if isinstance(e, urllib.error.HTTPError) and e.code in (400, 401, 403, 404):
                raise
            wait = 5 * (attempt + 1)
            if isinstance(e, urllib.error.HTTPError) and e.code == 429:
                wait = max(wait, int(e.headers.get("Retry-After") or 0), 30)
                throttle(host, backoff=wait)
            log(f"    retry {host} in {wait}s ({e})")
            time.sleep(wait)


def strip_tags(text):
    return html.unescape(re.sub(r"<[^>]+>", "", text or "")).strip()


def good_shape(width, height):
    if not width or not height:
        return True
    return min(width, height) >= 500 and 0.6 <= width / height <= 2.4


# --- Wikimedia Commons ---

def wiki_api(host, **params):
    params = {"format": "json", "formatversion": "2", **params}
    return json.loads(get(f"https://{host}/w/api.php?" + urllib.parse.urlencode(params)))


def commons_infos(titles):
    """Photo info + credit for Commons file titles, in the given order."""
    data = wiki_api("commons.wikimedia.org", action="query", titles="|".join(titles),
                    prop="imageinfo", iiprop="url|size|mime|extmetadata", iiurlwidth=COMMONS_WIDTH)
    by_title = {p["title"]: p for p in data["query"]["pages"]}
    normalized = {n["from"]: n["to"] for n in data["query"].get("normalized", [])}
    infos = []
    for t in titles:
        page = by_title.get(normalized.get(t, t))
        if not page or "imageinfo" not in page:
            continue
        ii = page["imageinfo"][0]
        meta = ii.get("extmetadata", {})
        infos.append({
            "id": page["title"],
            "url": ii.get("thumburl") or ii["url"],
            "page": ii["descriptionurl"],
            "artist": strip_tags(meta.get("Artist", {}).get("value")),
            "license": strip_tags(meta.get("LicenseShortName", {}).get("value")),
            "usable": ii["mime"] in ("image/jpeg", "image/png")
                      and not SKIP_TITLE.search(page["title"])
                      and min(ii["width"], ii["height"]) >= 600
                      and good_shape(ii["width"], ii["height"]),
        })
    return infos


def from_commons(activity, count):
    pinned = activity.get("pin", [])
    candidates = list(pinned)
    if activity.get("wiki"):
        data = wiki_api("en.wikipedia.org", action="query", titles=activity["wiki"], redirects=1,
                        prop="pageimages", piprop="name")
        pages = data["query"]["pages"]
        if pages and pages[0].get("pageimage"):
            candidates.append("File:" + pages[0]["pageimage"].replace("_", " "))
    query = activity.get("search") or activity["wiki"]
    data = wiki_api("commons.wikimedia.org", action="query", list="search", srnamespace=6,
                    srlimit=40, srsearch=f"{query} filetype:bitmap")
    candidates += [r["title"] for r in data["query"]["search"]]

    exclude = set(activity.get("exclude", []))
    ordered = [t for t in dict.fromkeys(candidates) if t not in exclude]
    picked = []
    for i in range(0, len(ordered), 25):
        for info in commons_infos(ordered[i:i + 25]):
            if info["id"] in pinned or info["usable"]:
                picked.append(info)
            if len(picked) == count:
                return picked
    return picked


# --- Openverse ---

def openverse_license(r):
    name = r.get("license", "")
    if name == "pdm":
        return "Public domain"
    if name == "cc0":
        return "CC0"
    return f"CC {name.upper()} {r.get('license_version') or ''}".strip()


def from_openverse(activity, count):
    params = {"q": activity.get("search") or activity["wiki"], "page_size": 20,
              "excluded_source": "wikimedia", "mature": "false"}
    data = json.loads(get("https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(params)))
    exclude = set(activity.get("exclude", []))
    picked, seen_titles = [], set()
    for r in data.get("results", []):
        pid = "openverse:" + r["id"]
        title = (r.get("title") or "").strip().lower()
        if pid in exclude or (title and title in seen_titles):
            continue
        tags = {t["name"].lower() for t in r.get("tags") or []}
        if not good_shape(r.get("width"), r.get("height")) or SKIP_TITLE.search(title) or tags & SKIP_TAGS:
            continue
        seen_titles.add(title)
        picked.append({
            "id": pid,
            "url": r["url"],
            "page": r.get("foreign_landing_url") or r["url"],
            "artist": r.get("creator") or "",
            "license": openverse_license(r),
        })
        if len(picked) == count:
            break
    return picked


SOURCES = {"commons": from_commons, "openverse": from_openverse}


# --- manifest ---

def load_stops():
    text = (ROOT / "activities.js").read_text()
    return json.loads(text[text.index("= [") + 2:text.rindex("]") + 1])


def load_manifest():
    if not MANIFEST.exists():
        return {}
    text = MANIFEST.read_text()
    manifest = json.loads(text[text.index("{"):text.rindex("}") + 1])
    for entries in manifest.values():
        for e in entries:
            e.setdefault("source", "commons")
            e.setdefault("id", e.pop("title", e["src"]))
    return manifest


def write_manifest(manifest):
    MANIFEST.write_text(
        "// Generated by fetch_photos.py, do not edit by hand.\n"
        "window.PHOTOS = " + json.dumps(manifest, indent=1, ensure_ascii=False) + ";\n"
    )


def interleave(entries):
    """Commons first (it holds the cover photo), then alternate between sources."""
    by_source = {s: [e for e in entries if e["source"] == s] for s in SOURCES}
    return [e for group in zip_longest(*by_source.values()) for e in group if e]


def fetch(activity, source, count):
    return [{
        "src": info["url"],
        "source": source,
        "id": info["id"],
        "artist": info["artist"],
        "license": info["license"],
        "page": info["page"],
    } for info in SOURCES[source](activity, count)]


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--force", nargs="*", metavar="NAME",
                        help="activity names to refetch (no names = refetch all)")
    parser.add_argument("--source", choices=SOURCES, action="append",
                        help="only fetch from this source (repeatable, default all)")
    parser.add_argument("--count", type=int, default=6, help="photos per source")
    parser.add_argument("--jobs", type=int, default=6, help="activities fetched in parallel")
    args = parser.parse_args()
    force_all = args.force == []
    force = set(args.force or [])
    sources = args.source or list(SOURCES)

    stops = load_stops()
    manifest = load_manifest()

    jobs = []
    for stop in stops:
        for activity in stop["activities"]:
            if activity.get("photosOf"):
                continue
            entries = manifest.get(f"{stop['id']}:{activity['name']}", [])
            refetch = force_all or activity["name"] in force
            for source in sources:
                if refetch or not any(e["source"] == source for e in entries):
                    jobs.append((stop, activity, source))
    log(f"{len(jobs)} fetches to do")

    manifest_lock = threading.Lock()

    def run(stop, activity, source):
        key = f"{stop['id']}:{activity['name']}"
        new = fetch(activity, source, args.count)
        with manifest_lock:
            kept = [e for e in manifest.get(key, []) if e["source"] != source]
            manifest[key] = interleave(kept + new)
            write_manifest(manifest)
        return len(new)

    with ThreadPoolExecutor(max_workers=args.jobs) as pool:
        futures = {pool.submit(run, *job): job for job in jobs}
        for done, future in enumerate(as_completed(futures), 1):
            stop, activity, source = futures[future]
            try:
                result = f"{future.result()} photos"
            except Exception as e:
                result = f"failed ({e})"
            log(f"[{done}/{len(jobs)}] {stop['name']} / {activity['name']} [{source}]: {result}")

    write_manifest(manifest)


if __name__ == "__main__":
    main()
