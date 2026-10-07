const stops = window.STOPS;
const photos = window.PHOTOS || {};

const KEY = "anz-stars";
let stars = new Set();
try { stars = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify([...stars])); } catch (e) {} };

// The other person's picks arrive as a #picks=... link and are kept until a newer link replaces them
const THEIRS_KEY = "anz-theirs";
let theirs = new Set();
try { theirs = new Set(JSON.parse(localStorage.getItem(THEIRS_KEY) || "[]")); } catch (e) {}
const shared = new URLSearchParams(location.hash.slice(1)).get("picks");
if (shared !== null) {
  theirs = new Set(shared.split("|").filter(Boolean));
  try { localStorage.setItem(THEIRS_KEY, JSON.stringify([...theirs])); } catch (e) {}
  history.replaceState(null, "", location.pathname + location.search);
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const more = (name, stop) => "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(name + " " + stop);
const activityId = (stop, activity) => stop.id + ":" + activity.name;
// A merged card shows the photos of the cards it replaced, taking turns between them
function photosFor(stop, activity) {
  const lists = (activity.photosOf || [activityId(stop, activity)]).map(id => photos[id] || []);
  const merged = [];
  for (let i = 0; i < Math.max(0, ...lists.map(l => l.length)); i++)
    lists.forEach(l => { if (l[i]) merged.push(l[i]); });
  const exclude = new Set(activity.exclude || []);
  return merged.filter(p => !exclude.has(p.id));
}
const cardPhotos = {};

const TAGS = { dnb: "DnB", surf: "Surf", food: "Food", drinks: "Drinks", cars: "Cars", party: "Party" };

// Food sections are not stops on the route, so they get an icon instead of a number
let stopNum = 0;
document.getElementById("main").innerHTML = stops.map(s => `
<section id="${s.id}" class="${s.country === "New Zealand" ? "nz" : ""} ${s.kind === "food" ? "food" : ""}">
  <h2><span class="stopnum">${s.kind === "food" ? "🍴" : ++stopNum}</span>${esc(s.name)} <small>${esc(s.note)}${s.country === "New Zealand" && s.kind !== "food" ? ", New Zealand" : ""}</small></h2>
  ${s.intro ? `<p class="intro">${esc(s.intro)}</p>` : ""}
  <ul>${s.activities.map(a => {
    const id = activityId(s, a);
    const list = cardPhotos[id] = photosFor(s, a);
    const cover = list.length
      ? `<img src="${esc(list[0].src)}" alt="" loading="lazy">${list.length > 1 ? `<span class="n">📷 ${list.length}</span>` : ""}`
      : a.emoji;
    return `
    <li data-id="${esc(id)}" class="${stars.has(id) ? "picked" : ""} ${theirs.has(id) ? "theirs" : ""}">
      <button class="ph" ${list.length ? "" : "disabled"} aria-label="Show photos of ${esc(a.name)}">${cover}</button>
      ${theirs.has(id) ? `<span class="friend">Friend ✓</span>` : ""}
      <div class="body"><span class="name">${esc(a.name)}</span>${a.tag ? `<span class="tag ${a.tag}">${TAGS[a.tag]}</span>` : ""}
        <div class="desc">${esc(a.description)} <a href="${more(a.name, s.name)}" target="_blank" rel="noopener">More photos</a></div></div>
      <button class="star" aria-pressed="${stars.has(id)}" aria-label="Star ${esc(a.name)}">★</button>
    </li>`;
  }).join("")}</ul>
</section>`).join("");

const allIds = new Set([...document.querySelectorAll("#main li")].map(li => li.dataset.id));
theirs = new Set([...theirs].filter(id => allIds.has(id)));
const count = () => {
  const both = [...stars].filter(id => theirs.has(id)).length;
  document.getElementById("count").textContent = stars.size + " starred"
    + (theirs.size ? ` · friend picked ${theirs.size} · ${both} in common` : "");
};
count();
document.getElementById("bothBtn").hidden = !theirs.size;
const visible = id =>
  (!document.body.classList.contains("only") || stars.has(id)) &&
  (!document.body.classList.contains("both") || (stars.has(id) && theirs.has(id)));

// Map: one dot per place, starred ones in yellow. Food lists have no location.
const markers = {};
const dotStyle = (stop, starred) => ({
  radius: starred ? 9 : 6, weight: 2, color: "#fff", fillOpacity: .95,
  fillColor: starred ? "#F2B134" : stop.country === "New Zealand" ? "#2E8C8C" : "#1F5673",
});
let map = null;
if (window.L) {
  map = L.map("map", { scrollWheelZoom: false });
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  stops.forEach(s => s.activities.forEach(a => {
    if (!a.coords) return;
    const id = activityId(s, a);
    markers[id] = { stop: s, marker: L.circleMarker(a.coords, dotStyle(s, stars.has(id)))
      .bindTooltip(esc(a.name))
      .bindPopup(`<b>${esc(a.name)}</b><br>${esc(s.name)}<br><a href="#" data-goto="${esc(id)}">Show the card</a>`)
      .addTo(map) };
  }));
  map.fitBounds(L.featureGroup(Object.values(markers).map(m => m.marker)).getBounds(), { padding: [20, 20] });
  document.getElementById("map").addEventListener("click", e => {
    const id = e.target.dataset.goto;
    if (!id) return;
    e.preventDefault();
    const li = [...document.querySelectorAll("#main li")].find(li => li.dataset.id === id);
    li.scrollIntoView({ behavior: "smooth", block: "center" });
    li.classList.add("flash");
    setTimeout(() => li.classList.remove("flash"), 1600);
  });
} else {
  document.getElementById("map").hidden = true;
}
function updateMarkers() {
  if (!map) return;
  for (const [id, m] of Object.entries(markers)) {
    m.marker.setStyle(dotStyle(m.stop, stars.has(id)));
    m.marker.setRadius(stars.has(id) ? 9 : 6);
    const show = visible(id);
    if (show !== map.hasLayer(m.marker)) show ? m.marker.addTo(map) : m.marker.remove();
  }
}

const filterButton = (buttonId, bodyClass) => {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", () => {
    const on = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", on);
    document.body.classList.toggle(bodyClass, on);
    updateMarkers();
  });
};
filterButton("onlyBtn", "only");
filterButton("bothBtn", "both");

const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", async () => {
  const url = location.origin + location.pathname + "#picks=" + encodeURIComponent([...stars].join("|"));
  try {
    await navigator.clipboard.writeText(url);
    shareBtn.textContent = "Link copied!";
    setTimeout(() => shareBtn.textContent = "Share my picks", 2000);
  } catch (e) {
    prompt("Copy this link and send it:", url);
  }
});

// Before-we-go checklist
const CHECK_KEY = "anz-checks";
let checks = new Set();
try { checks = new Set(JSON.parse(localStorage.getItem(CHECK_KEY) || "[]")); } catch (e) {}
const checklist = window.CHECKLIST || [];
const checkTotal = checklist.reduce((n, g) => n + g.items.length, 0);

document.getElementById("prepList").innerHTML = checklist.map(g => `
<h3>${esc(g.title)}</h3>
<div class="checks">${g.items.map(item => {
  const id = g.title + ":" + item.text;
  return `
  <label class="check">
    <input type="checkbox" data-id="${esc(id)}" ${checks.has(id) ? "checked" : ""}>
    <span><b>${esc(item.text)}</b><span class="desc">${esc(item.detail)}${item.link ? ` <a href="${esc(item.link)}" target="_blank" rel="noopener">Official site</a>` : ""}</span></span>
  </label>`;
}).join("")}</div>`).join("");

const prepCount = () => document.getElementById("prepCount").textContent = `${checks.size} / ${checkTotal} done`;
prepCount();
document.getElementById("prepList").addEventListener("change", e => {
  const id = e.target.dataset.id;
  e.target.checked ? checks.add(id) : checks.delete(id);
  try { localStorage.setItem(CHECK_KEY, JSON.stringify([...checks])); } catch (e) {}
  prepCount();
});

// Photo viewer
const viewer = document.getElementById("viewer");
const vImg = document.getElementById("vImg");
const vThumbs = document.getElementById("vThumbs");
let current = [];
let index = 0;

function credit(p) {
  const by = p.artist ? `Photo: ${esc(p.artist)}` : "Photo";
  const license = p.license ? `, ${esc(p.license)}` : "";
  return `${by}${license} · <a href="${esc(p.page)}" target="_blank" rel="noopener">source</a>`;
}

function show(i) {
  index = (i + current.length) % current.length;
  const p = current[index];
  vImg.src = p.src;
  document.getElementById("vCount").textContent = `${index + 1} / ${current.length}`;
  document.getElementById("vCredit").innerHTML = credit(p);
  vThumbs.querySelectorAll("button").forEach((b, n) => {
    b.setAttribute("aria-current", n === index);
    if (n === index) b.scrollIntoView({ block: "nearest", inline: "nearest" });
  });
  const next = current[(index + 1) % current.length];
  if (next) new Image().src = next.src;
}

function open(id, name) {
  current = cardPhotos[id] || [];
  if (!current.length) return;
  document.getElementById("vName").textContent = name;
  vThumbs.innerHTML = current.map((p, n) =>
    `<button data-n="${n}" aria-label="Photo ${n + 1}"><img src="${esc(p.src)}" alt="" loading="lazy"></button>`).join("");
  const single = current.length < 2;
  document.getElementById("vPrev").hidden = single;
  document.getElementById("vNext").hidden = single;
  vThumbs.hidden = single;
  viewer.showModal();
  show(0);
}

document.getElementById("main").addEventListener("click", e => {
  const li = e.target.closest("li");
  if (!li) return;
  const id = li.dataset.id;
  if (e.target.closest(".star")) {
    stars.has(id) ? stars.delete(id) : stars.add(id);
    const on = stars.has(id);
    li.querySelector(".star").setAttribute("aria-pressed", on);
    li.classList.toggle("picked", on);
    save();
    count();
    updateMarkers();
  } else if (e.target.closest(".ph")) {
    open(id, li.querySelector(".name").textContent);
  }
});

document.getElementById("vPrev").addEventListener("click", () => show(index - 1));
document.getElementById("vNext").addEventListener("click", () => show(index + 1));
document.getElementById("vClose").addEventListener("click", () => viewer.close());
vThumbs.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) show(Number(b.dataset.n));
});
viewer.addEventListener("click", e => { if (e.target === viewer) viewer.close(); });
viewer.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") show(index - 1);
  if (e.key === "ArrowRight") show(index + 1);
});
viewer.addEventListener("close", () => { vImg.removeAttribute("src"); });

let touchX = null;
const stage = document.getElementById("vStage");
stage.addEventListener("pointerdown", e => { touchX = e.clientX; });
stage.addEventListener("pointerup", e => {
  if (touchX === null) return;
  const dx = e.clientX - touchX;
  touchX = null;
  if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
});
