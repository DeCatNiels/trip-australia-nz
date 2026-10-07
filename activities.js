// The trip ideas. Edit freely, then run `python3 fetch_photos.py` to get photos for new activities.
// Keep the part after "window.STOPS =" valid JSON (double quotes, no trailing commas).
window.STOPS = [
  {
    "id": "sydney",
    "name": "Sydney",
    "country": "Australia",
    "note": "New South Wales",
    "activities": [
      {
        "name": "Opera House and Harbour Bridge",
        "emoji": "🎭",
        "description": "Walk across the bridge for free or climb the arch. The Opera House has a 1-hour tour inside the sails.",
        "link": "https://www.sydneyoperahouse.com/",
        "maps": "Sydney Opera House",
        "tags": [
          "sights"
        ],
        "wiki": "Sydney Opera House",
        "search": "Sydney Opera House Harbour Bridge",
        "photosOf": [
          "sydney:Opera House guided tour",
          "sydney:Harbour Bridge"
        ],
        "coords": [
          -33.8568,
          151.2153
        ]
      },
      {
        "name": "The Rocks",
        "emoji": "🍺",
        "description": "Old sandstone quarter with pubs and weekend markets.",
        "tags": [
          "sights"
        ],
        "wiki": "The Rocks, New South Wales",
        "search": "The Rocks Sydney",
        "coords": [
          -33.8599,
          151.209
        ]
      },
      {
        "name": "Bondi to Coogee coastal walk",
        "emoji": "🌊",
        "description": "6 km of cliffs, rock pools and beaches.",
        "tags": [
          "hike",
          "beach"
        ],
        "wiki": "Bondi to Coogee coastal walk",
        "search": "Bondi Tamarama Bronte coastal walk",
        "coords": [
          -33.8986,
          151.27
        ]
      },
      {
        "name": "Taronga Zoo",
        "emoji": "🦘",
        "description": "Kangaroos and koalas, with skyline views. Go by ferry.",
        "link": "https://taronga.org.au/sydney-zoo",
        "tags": [
          "nature"
        ],
        "wiki": "Taronga Zoo Sydney",
        "search": "Taronga Zoo",
        "coords": [
          -33.8434,
          151.2412
        ],
        "pin": [
          "File:Sydney taronga zoo.jpg"
        ]
      },
      {
        "name": "Learn to surf",
        "emoji": "🏄",
        "description": "A lesson at Manly (easy beginner waves), a 2–3 day surf camp south of Sydney, or a lesson in Torquay on the Great Ocean Road.",
        "link": "https://www.manlysurfschool.com/",
        "maps": "Manly Surf School, Manly NSW",
        "tags": [
          "surf",
          "beach"
        ],
        "wiki": "Surfing",
        "search": "surf lesson beginners beach",
        "photosOf": [
          "sydney:Surf lessons at Manly",
          "sydney:2–3 day surf camp",
          "gor:Surf lesson in Torquay or Anglesea"
        ],
        "coords": [
          -33.7969,
          151.2878
        ]
      },
      {
        "name": "BASSIC at Chinese Laundry",
        "emoji": "🎧",
        "description": "Weekly bass night every Friday, 7 pm to 1 am, about $10–25. Drum & bass mixed with other bass styles.",
        "link": "https://merivale.com/whatson/nightlife/chinese-laundry/",
        "maps": "Chinese Laundry, Sydney",
        "tags": [
          "dnb"
        ],
        "wiki": "Drum and bass",
        "search": "drum and bass DJ nightclub",
        "exclude": [
          "openverse:5c5c3796-2cdf-462d-921e-3f3afb50c2c4",
          "File:Ladánybene 27, 2011 (1).jpg",
          "File:Árokszállási Ras Tamás, Ladánybene 27, 2011 (4).jpg",
          "openverse:eec7c938-4601-4c29-bdaa-b362e3f642c1",
          "openverse:c8678a7c-94eb-4c2f-b30b-1bb8363d8df1",
          "openverse:35f9d724-bf76-447b-8924-985e956d991b",
          "File:Dextrous Switzerland.jpg"
        ],
        "coords": [
          -33.87,
          151.2045
        ],
        "pin": [
          "File:DJ Hype, Matrix, and Futurebound at Egg.jpg",
          "openverse:b65de474-b0df-414e-9af8-681d3a568083"
        ]
      },
      {
        "name": "Dizzee Rascal on the Opera House steps",
        "emoji": "🎤",
        "description": "Sat 5 Dec 2026 from 6 pm, outdoors on the Opera House forecourt. Grime and bass with Example and ArrDee; Swaglord Savannah opens with a drum & bass and jungle set. Ticketmaster / Live Nation.",
        "link": "https://www.sydneyoperahouse.com/whats-on",
        "maps": "Sydney Opera House forecourt",
        "tags": [
          "dnb"
        ],
        "wiki": "Dizzee Rascal",
        "search": "Dizzee Rascal live concert",
        "coords": [
          -33.858,
          151.214
        ]
      },
      {
        "name": "Sydney Fish Market",
        "emoji": "🦐",
        "description": "Prawns and Sydney rock oysters by the water. December is peak Christmas seafood season.",
        "link": "https://www.sydneyfishmarket.com.au/",
        "tags": [
          "food"
        ],
        "wiki": "Sydney Fish Market",
        "search": "Sydney Fish Market seafood",
        "coords": [
          -33.873,
          151.1925
        ]
      },
      {
        "name": "Inner West brewery crawl",
        "emoji": "🍺",
        "description": "A cluster of taprooms around Marrickville and St Peters. Young Henrys in Newtown is the classic.",
        "link": "https://younghenrys.com/",
        "maps": "Young Henrys, Newtown NSW",
        "tags": [
          "drinks"
        ],
        "wiki": "Young Henrys",
        "search": "Young Henrys brewery",
        "exclude": [
          "openverse:4278f871-29d4-4020-a5f6-aa5a9d590950",
          "File:Henry Havelock Cornish (young).jpg",
          "openverse:a4a9f3f3-7abd-42e8-9637-306a493b9d46",
          "File:Young Henry Friendly Clerk 1927.png",
          "openverse:0302be76-2f04-40fd-b60c-b93e876928da",
          "File:Young Henry.jpg",
          "File:Young Henry Ade.jpg",
          "openverse:19e0eefd-cf10-4f15-8527-fdfaf7d57942",
          "File:Young, Henry. Richmond. To Brigadier General Morgan (NYPL b11868620-5376490).jpg",
          "openverse:4776c528-5a55-4fea-a618-44bb9ff73c5d"
        ],
        "coords": [
          -33.8976,
          151.1789
        ]
      },
      {
        "name": "Drift nights at Sydney Dragway",
        "emoji": "🏎️",
        "description": "Australian Drift Club nights in Eastern Creek: Fri 4 and Sat 5 Dec from 6 pm, also Wed 9 Dec. Check spectator tickets and \"ride with a pro\" passenger laps on their site.",
        "link": "https://www.australiandriftclub.com.au/",
        "maps": "Sydney Dragway",
        "tags": [
          "cars"
        ],
        "wiki": "Drifting (motorsport)",
        "search": "drifting car smoke motorsport",
        "coords": [
          -33.8085,
          150.871
        ]
      },
      {
        "name": "Harbour party boat",
        "emoji": "🛥️",
        "description": "HarbourCat's under-35s beach party: 3 hours with free-flowing drinks and a BBQ, anchored at a harbour beach with paddleboards, about $159. Yeah Buoy runs cheaper sunset boat parties from about $20.",
        "link": "https://www.yeahbuoy.com.au/",
        "maps": "Man O'War Steps, Sydney",
        "tags": [
          "party",
          "beach"
        ],
        "wiki": "Port Jackson",
        "search": "boat party",
        "exclude": [
          "File:Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg",
          "File:Pierre-Auguste-Renoir-The-Boating-Party-Lunch.jpg",
          "File:Mary Cassatt - The Boating Party - Google Art Project.jpg",
          "File:Suzumibune gomai-e; Ni-A Party of Geisha in a Suzumi-bune, i.e. \"cooling-off boat.\" (Second Scene of a Boating Party) MET DP114881.jpg",
          "File:Sydney(from air) V2.jpg",
          "File:Cassatt Mary The Boating Party 1893-94.jpg",
          "File:Luncheon of the Boating Party - The Phillips Collection.jpg"
        ],
        "coords": [
          -33.8679,
          151.2019
        ],
        "pin": [
          "File:Sydney (AU), Harbour Bridge -- 2019 -- 2190.jpg"
        ]
      },
      {
        "name": "Eastern Creek Karts",
        "emoji": "🏁",
        "description": "Outdoor karting with three tracks up to 1 km, 40 minutes west of the CBD. The fast 13 HP karts reach 80 km/h, about $45 for 10 minutes plus a one-off licence. Next to Sydney Dragway, where the drift nights are.",
        "link": "https://www.easterncreekkarts.com.au/",
        "tags": [
          "cars"
        ],
        "wiki": "Kart racing",
        "search": "outdoor go kart racing track",
        "coords": [
          -33.7995,
          150.859
        ]
      }
    ]
  },
  {
    "id": "blue",
    "name": "Blue Mountains",
    "country": "Australia",
    "note": "New South Wales, 2 hours west of Sydney",
    "activities": [
      {
        "name": "Three Sisters lookout",
        "emoji": "⛰️",
        "description": "The famous rock formation over a huge valley.",
        "maps": "Echo Point Lookout, Katoomba",
        "tags": [
          "nature",
          "sights"
        ],
        "wiki": "Three Sisters (Australia)",
        "search": "Three Sisters Echo Point Katoomba",
        "coords": [
          -33.732,
          150.312
        ]
      },
      {
        "name": "Scenic World",
        "emoji": "🚡",
        "description": "Cable cars and the world's steepest railway.",
        "link": "https://www.scenicworld.com.au/",
        "maps": "Scenic World, Katoomba",
        "tags": [
          "nature",
          "sights"
        ],
        "wiki": "Scenic World",
        "search": "Scenic World Katoomba",
        "coords": [
          -33.728,
          150.301
        ],
        "pin": [
          "File:Katoomba (AU), Scenic World, Scenic Skyway -- 2019 -- 1872.jpg"
        ]
      },
      {
        "name": "Grand Canyon walking track",
        "emoji": "🌿",
        "description": "Ferny gorge loop, about 3 hours.",
        "maps": "Grand Canyon Walking Track, Blackheath",
        "tags": [
          "hike",
          "nature"
        ],
        "wiki": "Grand Canyon walking track Blue Mountains",
        "search": "Grand Canyon track Blackheath",
        "coords": [
          -33.663,
          150.326
        ]
      }
    ]
  },
  {
    "id": "melb",
    "name": "Melbourne",
    "country": "Australia",
    "note": "Victoria",
    "activities": [
      {
        "name": "Laneways and street art",
        "emoji": "🎨",
        "description": "Hosier Lane and the café alleys.",
        "maps": "Hosier Lane, Melbourne",
        "tags": [
          "sights"
        ],
        "wiki": "Hosier Lane",
        "search": "Hosier Lane street art",
        "coords": [
          -37.8166,
          144.969
        ]
      },
      {
        "name": "Queen Victoria Market",
        "emoji": "🛍️",
        "description": "Food market; night market on Wednesdays in summer.",
        "link": "https://qvm.com.au/",
        "tags": [
          "food"
        ],
        "wiki": "Queen Victoria Market",
        "search": "Queen Victoria Market Melbourne",
        "coords": [
          -37.8076,
          144.9568
        ],
        "pin": [
          "openverse:1c140bfb-bd41-4623-8e69-adc636c6e882"
        ]
      },
      {
        "name": "St Kilda penguins",
        "emoji": "🐧",
        "description": "Little penguins on the pier at dusk.",
        "maps": "St Kilda Pier, Melbourne",
        "tags": [
          "nature"
        ],
        "wiki": "St Kilda Pier",
        "search": "St Kilda pier penguins",
        "coords": [
          -37.864,
          144.969
        ],
        "exclude": [
          "File:St Kilda Pier and Kiosk with Catani Gardens in foreground - panoramio.jpg",
          "openverse:19b95753-e251-4a0c-8fb6-e10aee918fe5",
          "File:St kilda Beach.jpg",
          "openverse:68b50082-a67d-46f9-8705-9e6c51d23957",
          "File:Melbourne New Year 2014 (11669464283).jpg"
        ]
      },
      {
        "name": "Phillip Island penguin parade",
        "emoji": "🐧",
        "description": "Hundreds of penguins coming ashore at sunset.",
        "link": "https://www.penguins.org.au/",
        "maps": "Penguin Parade, Phillip Island",
        "tags": [
          "nature"
        ],
        "wiki": "Little penguin",
        "search": "Phillip Island penguins",
        "coords": [
          -38.51,
          145.15
        ]
      },
      {
        "name": "Yarra Valley wine day",
        "emoji": "🍷",
        "description": "Vineyards an hour outside the city.",
        "maps": "Yarra Valley, Victoria",
        "tags": [
          "drinks"
        ],
        "wiki": "Yarra Valley",
        "search": "Yarra Valley winery vineyard",
        "coords": [
          -37.66,
          145.45
        ]
      },
      {
        "name": "Drum n Bass Mondays",
        "emoji": "🎧",
        "description": "Free weekly DnB night at Radio Bar in Fitzroy, running since 2016.",
        "maps": "Radio Bar, Fitzroy",
        "tags": [
          "dnb"
        ],
        "wiki": "Rave",
        "search": "drum and bass DJ nightclub crowd",
        "exclude": [
          "openverse:a0062bed-c76e-45cc-af17-55da99d54ee1",
          "openverse:2c33d283-f9e7-4d80-a974-ca3b87bfc43a",
          "openverse:8915f175-5bd7-4e2f-b100-f4bfafee1776",
          "openverse:afd3e570-3438-4437-82e8-b807936b57d0",
          "openverse:93ecf431-96ba-434d-8583-0a5fd073cd2f",
          "openverse:5e2330f5-8e60-40b1-bf97-3193151d0ee2"
        ],
        "coords": [
          -37.7838,
          144.983
        ]
      },
      {
        "name": "Brewery taprooms",
        "emoji": "🍺",
        "description": "Collingwood, Abbotsford and Brunswick are full of them. Moon Dog World in Preston is a huge beer hall.",
        "link": "https://moondogbrewing.com.au/",
        "maps": "Moon Dog World, Preston",
        "tags": [
          "drinks"
        ],
        "wiki": "Moon Dog Craft Brewery",
        "search": "Melbourne craft brewery taproom",
        "coords": [
          -37.802,
          144.99
        ],
        "pin": [
          "openverse:eedb06b8-3f92-4518-be61-1916a6b3cb1d"
        ]
      },
      {
        "name": "Four Pillars gin, Healesville",
        "emoji": "🍸",
        "description": "Gin tastings at a distillery in the Yarra Valley, among the wineries.",
        "link": "https://www.fourpillarsgin.com/",
        "maps": "Four Pillars Distillery, Healesville",
        "tags": [
          "drinks"
        ],
        "wiki": "Healesville",
        "search": "Four Pillars gin distillery Healesville",
        "coords": [
          -37.6545,
          145.5155
        ],
        "pin": [
          "openverse:da05a6ed-5318-44b3-b3ef-72c7b0419b2e",
          "openverse:812c0ee0-d09c-4406-8a44-7e7dd153427e"
        ],
        "exclude": [
          "File:Healesville Grand Hotel.JPG"
        ]
      },
      {
        "name": "Rooftop bars",
        "emoji": "🍸",
        "description": "Rooftop Bar on top of Curtin House (Swanston St) has skyline views and an outdoor cinema in summer. Siglo on Spring St does classic cocktails until 3 am.",
        "link": "https://rooftopbar.co/",
        "maps": "Rooftop Bar, Curtin House, Melbourne",
        "tags": [
          "drinks"
        ],
        "wiki": "Curtin House",
        "search": "Melbourne rooftop bar",
        "coords": [
          -37.8118,
          144.9658
        ],
        "exclude": [
          "File:Melbourne 2013-Aug 057c.jpg",
          "openverse:8831ee9f-59d9-4ff9-95c9-225d3afa0740",
          "File:Southbank pano from Fleet Rooftop Bar.jpg"
        ]
      },
      {
        "name": "Meredith Music Festival",
        "emoji": "🎪",
        "description": "Fri 11 to Sun 13 Dec 2026, a camping festival in a natural amphitheatre 1.5 hours from Melbourne. A cult favourite with a no-dickheads rule. Tickets go by ballot and sell out, so look for official resale.",
        "link": "https://mmf.com.au/",
        "maps": "Meredith Supernatural Amphitheatre",
        "tags": [
          "party"
        ],
        "wiki": "Meredith Music Festival",
        "search": "Meredith Music Festival",
        "coords": [
          -37.848,
          144.077
        ]
      },
      {
        "name": "Go karts at the Phillip Island GP circuit",
        "emoji": "🏁",
        "description": "A 720 m scale replica of the MotoGP circuit, right next to the real one, with ocean views. On Phillip Island, like the penguin parade.",
        "link": "https://www.phillipislandcircuit.com.au/",
        "maps": "Phillip Island Go Karts",
        "tags": [
          "cars"
        ],
        "wiki": "Phillip Island Grand Prix Circuit",
        "search": "Phillip Island Grand Prix Circuit",
        "coords": [
          -38.498,
          145.234
        ],
        "pin": [
          "openverse:086d7b5e-8fde-44cf-8c11-35719cac3b54",
          "openverse:e77e1892-af2c-4e73-b655-49a41c96d029"
        ],
        "exclude": [
          "File:Mathew Radisich indycar phillip island 1.jpg"
        ]
      }
    ]
  },
  {
    "id": "gor",
    "name": "Great Ocean Road",
    "country": "Australia",
    "note": "Victoria, coast road west of Melbourne",
    "activities": [
      {
        "name": "Bells Beach",
        "emoji": "👀",
        "description": "Legendary pro wave. Watch, don't surf.",
        "maps": "Bells Beach, Victoria",
        "tags": [
          "beach",
          "surf"
        ],
        "wiki": "Bells Beach, Victoria",
        "search": "Bells Beach Victoria",
        "coords": [
          -38.37,
          144.283
        ]
      },
      {
        "name": "Kennett River koalas",
        "emoji": "🐨",
        "description": "Wild koalas in the gum trees by the road.",
        "maps": "Kennett River, Victoria",
        "tags": [
          "nature"
        ],
        "wiki": "Koala",
        "search": "Kennett River koala",
        "coords": [
          -38.668,
          143.862
        ]
      },
      {
        "name": "Great Otway rainforest",
        "emoji": "💧",
        "description": "Waterfalls and fern gullies.",
        "maps": "Great Otway National Park",
        "tags": [
          "nature",
          "hike"
        ],
        "wiki": "Great Otway National Park",
        "search": "Great Otway National Park waterfall",
        "coords": [
          -38.756,
          143.56
        ]
      },
      {
        "name": "Twelve Apostles and Loch Ard Gorge",
        "emoji": "🪨",
        "description": "Sea stacks at sunset, or by helicopter.",
        "maps": "Twelve Apostles, Victoria",
        "tags": [
          "sights",
          "nature"
        ],
        "wiki": "The Twelve Apostles (Victoria)",
        "search": "Twelve Apostles Loch Ard Gorge",
        "coords": [
          -38.665,
          143.105
        ]
      },
      {
        "name": "Timboon distillery and food trail",
        "emoji": "🥃",
        "description": "Whisky tasting in an old railway shed near the Twelve Apostles. The 12 Apostles food trail around it adds cheese, chocolate and ice cream.",
        "link": "https://www.timboondistillery.com.au/",
        "maps": "Timboon Railway Shed Distillery",
        "tags": [
          "drinks"
        ],
        "wiki": "Timboon, Victoria",
        "search": "Timboon railway shed distillery",
        "coords": [
          -38.484,
          142.978
        ],
        "pin": [
          "File:Timboon Distillery 001.JPG",
          "openverse:1914b936-dac8-43fb-9936-6ae8b7c915a6"
        ],
        "exclude": [
          "File:Timboon Shops 002.JPG"
        ]
      },
      {
        "name": "Forrest Brewing",
        "emoji": "🍺",
        "description": "Small brewery with food in an Otways village, close to the rainforest.",
        "link": "https://forrestbrewing.com.au/",
        "maps": "Forrest Brewing Company, Forrest VIC",
        "tags": [
          "drinks"
        ],
        "wiki": "Forrest, Victoria",
        "search": "Forrest Otways Victoria",
        "coords": [
          -38.522,
          143.713
        ]
      }
    ]
  },
  {
    "id": "tas",
    "name": "Tasmania",
    "country": "Australia",
    "note": "Island state south of Melbourne",
    "activities": [
      {
        "name": "MONA",
        "emoji": "🖼️",
        "description": "Wild underground art museum, reached by ferry.",
        "link": "https://mona.net.au/",
        "maps": "MONA, Hobart",
        "tags": [
          "museum"
        ],
        "wiki": "Museum of Old and New Art",
        "search": "Museum of Old and New Art Hobart",
        "coords": [
          -42.8125,
          147.26
        ]
      },
      {
        "name": "Salamanca Market",
        "emoji": "🧺",
        "description": "Big Saturday market in Hobart.",
        "link": "https://www.salamancamarket.com.au/",
        "maps": "Salamanca Market, Hobart",
        "tags": [
          "food"
        ],
        "wiki": "Salamanca Market",
        "search": "Salamanca Market Hobart",
        "coords": [
          -42.886,
          147.331
        ]
      },
      {
        "name": "Mount Wellington",
        "emoji": "🏔️",
        "description": "Drive up for views over Hobart.",
        "link": "https://wellingtonpark.org.au/",
        "maps": "kunanyi / Mount Wellington summit",
        "tags": [
          "nature"
        ],
        "wiki": "Mount Wellington (Tasmania)",
        "search": "kunanyi Mount Wellington Hobart",
        "coords": [
          -42.896,
          147.237
        ]
      },
      {
        "name": "Wineglass Bay",
        "emoji": "🏖️",
        "description": "Hike to the lookout or down to the beach.",
        "maps": "Wineglass Bay Lookout, Freycinet",
        "tags": [
          "hike",
          "beach"
        ],
        "wiki": "Wineglass Bay",
        "search": "Wineglass Bay Freycinet",
        "coords": [
          -42.15,
          148.3
        ]
      },
      {
        "name": "Port Arthur",
        "emoji": "🏚️",
        "description": "Convict-era ruins and history.",
        "link": "https://portarthur.org.au/",
        "maps": "Port Arthur Historic Site",
        "tags": [
          "sights",
          "museum"
        ],
        "wiki": "Port Arthur, Tasmania",
        "search": "Port Arthur Historic Site",
        "coords": [
          -43.146,
          147.851
        ]
      },
      {
        "name": "Bruny Island",
        "emoji": "🦪",
        "description": "Food tour: oysters, cheese, wildlife.",
        "maps": "Bruny Island, Tasmania",
        "tags": [
          "food",
          "nature"
        ],
        "wiki": "Bruny Island",
        "search": "Bruny Island",
        "coords": [
          -43.29,
          147.35
        ]
      },
      {
        "name": "Cradle Mountain",
        "emoji": "🐾",
        "description": "Alpine lakes and wombats.",
        "maps": "Dove Lake, Cradle Mountain",
        "tags": [
          "hike",
          "nature"
        ],
        "wiki": "Cradle Mountain",
        "search": "Cradle Mountain Dove Lake",
        "coords": [
          -41.685,
          145.95
        ]
      },
      {
        "name": "Cascade Brewery tour",
        "emoji": "🍺",
        "description": "Australia's oldest working brewery (1824), at the foot of Mount Wellington.",
        "link": "https://www.cascadebreweryco.com.au/",
        "maps": "Cascade Brewery, Hobart",
        "tags": [
          "drinks"
        ],
        "wiki": "Cascade Brewery",
        "search": "Cascade Brewery Hobart",
        "coords": [
          -42.895,
          147.296
        ]
      },
      {
        "name": "Tasmanian whisky tasting",
        "emoji": "🥃",
        "description": "Tasmania makes some of the world's best single malts. Lark's cellar door is on the Hobart waterfront.",
        "link": "https://larkdistillery.com/",
        "maps": "Lark Distillery Cellar Door, Hobart",
        "tags": [
          "drinks"
        ],
        "wiki": "Lark Distillery",
        "search": "Tasmania whisky distillery",
        "coords": [
          -42.883,
          147.332
        ]
      },
      {
        "name": "Bruny Island oysters and cheese",
        "emoji": "🦪",
        "description": "Oysters straight from the bay at Get Shucked, plus the Bruny Island Cheese & Beer Co.",
        "link": "https://www.getshucked.com.au/",
        "maps": "Get Shucked, Bruny Island",
        "tags": [
          "food"
        ],
        "wiki": "Bruny Island",
        "search": "Bruny Island oysters",
        "coords": [
          -43.22,
          147.36
        ],
        "pin": [
          "openverse:35c867ea-d605-4c5a-8644-17da8102c952",
          "openverse:6631c358-6bba-4970-ad53-2a17a0561b8b"
        ]
      },
      {
        "name": "Huon Valley cider",
        "emoji": "🍏",
        "description": "Tasmania is the \"Apple Isle\". Willie Smith's apple shed does cider tastings south of Hobart.",
        "link": "https://williesmiths.com.au/",
        "maps": "Willie Smith's Apple Shed, Grove",
        "tags": [
          "drinks"
        ],
        "wiki": "Huon Valley",
        "search": "Huon Valley apple orchard Tasmania",
        "coords": [
          -42.985,
          147.075
        ],
        "pin": [
          "openverse:80c739a4-0165-4b24-91fc-5dabf46daff9",
          "File:Huon Valley Apple Museum.jpg",
          "File:Apple cider and apple display in Tasmania.jpg"
        ]
      }
    ]
  },
  {
    "id": "eat-au",
    "name": "Eat & drink: Australia",
    "country": "Australia",
    "kind": "food",
    "note": "Staples to try anywhere",
    "intro": "Alcohol is sold in bottle shops (\"bottle-o\"), not in supermarkets. Many restaurants are BYO: bring your own wine for a small corkage fee. Beer sizes change by state: order a schooner in Sydney, a pot in Melbourne.",
    "activities": [
      {
        "name": "Meat pie",
        "emoji": "🥧",
        "description": "The national snack, from any bakery or petrol station. Comes with tomato sauce (ketchup).",
        "tags": [
          "food"
        ],
        "wiki": "Meat pie (Australia and New Zealand)",
        "search": "Australian meat pie"
      },
      {
        "name": "Sausage sizzle",
        "emoji": "🌭",
        "description": "A sausage on a slice of white bread with fried onions. Outside Bunnings hardware stores on weekends, for charity.",
        "tags": [
          "food"
        ],
        "wiki": "Sausage sizzle",
        "search": "sausage sizzle"
      },
      {
        "name": "Chicken parmi",
        "emoji": "🍗",
        "description": "The pub classic: schnitzel with tomato sauce and melted cheese, chips and salad. Called a parma in Melbourne.",
        "tags": [
          "food"
        ],
        "wiki": "Chicken parmesan",
        "search": "chicken parmigiana pub Australia"
      },
      {
        "name": "Barramundi and Moreton Bay bugs",
        "emoji": "🐟",
        "description": "Barramundi is the go-to local fish. Bugs are a flat lobster-like shellfish, great grilled.",
        "tags": [
          "food"
        ],
        "wiki": "Barramundi",
        "search": "barramundi fillet dish",
        "pin": [
          "openverse:1ac4bb7b-3141-420f-b8c9-f2a8eb8494f8"
        ]
      },
      {
        "name": "Kangaroo steak",
        "emoji": "🦘",
        "description": "Lean red meat, on lots of pub and restaurant menus. Best cooked rare.",
        "tags": [
          "food"
        ],
        "wiki": "Kangaroo meat",
        "search": "kangaroo meat steak"
      },
      {
        "name": "Vegemite on toast",
        "emoji": "🍞",
        "description": "Thick butter, very thin Vegemite. Not like Nutella.",
        "tags": [
          "food"
        ],
        "wiki": "Vegemite",
        "search": "Vegemite toast"
      },
      {
        "name": "Lamingtons and Tim Tams",
        "emoji": "🍰",
        "description": "Sponge cake in chocolate and coconut from any bakery. Try a Tim Tam slam: bite off both ends and drink hot chocolate through it.",
        "tags": [
          "food"
        ],
        "wiki": "Lamington",
        "search": "lamington cake"
      },
      {
        "name": "Australian beer",
        "emoji": "🍺",
        "description": "Pubs pour VB, Carlton Draught and Coopers. For craft, look for Little Creatures and Stone & Wood.",
        "tags": [
          "drinks"
        ],
        "wiki": "Beer in Australia",
        "search": "Australian pub beer",
        "exclude": [
          "File:The Pub With No Beer Sign - Taken on the Wednesday, 21st April 2010 at 12-47pm. - panoramio.jpg",
          "File:The Picnic Area at the Pub with No Beer - Taken on the Wednesday, 21st April 2010 at 12-59pm. - panoramio.jpg",
          "File:The Pub with No Beer Sign Post (Closer Verison) - Taken on the Wednesday, 21st April 2010 at 12-33pm. - panoramio.jpg",
          "File:The Pub with No Beer Sign Post (Further Verison) - Taken on the Wednesday, 21st April 2010 at 12-27pm. - panoramio.jpg"
        ]
      },
      {
        "name": "Australian wine",
        "emoji": "🍷",
        "description": "Barossa shiraz, Yarra Valley pinot noir and chardonnay, Tasmanian sparkling.",
        "tags": [
          "drinks"
        ],
        "wiki": "Australian wine",
        "search": "Australian vineyard wine tasting"
      },
      {
        "name": "Bundy rum",
        "emoji": "🥃",
        "description": "Bundaberg rum and Coke is the classic Aussie mix. Bundaberg ginger beer is the alcohol-free one.",
        "tags": [
          "drinks"
        ],
        "wiki": "Bundaberg Rum",
        "search": "Bundaberg rum"
      }
    ]
  },
  {
    "id": "qt",
    "name": "Queenstown",
    "country": "New Zealand",
    "note": "South Island",
    "activities": [
      {
        "name": "Kawarau Bridge bungee",
        "emoji": "🪢",
        "description": "The world's first commercial bungee.",
        "link": "https://www.bungy.co.nz/",
        "maps": "Kawarau Gorge Suspension Bridge bungy",
        "tags": [
          "adventure"
        ],
        "wiki": "Kawarau Gorge Suspension Bridge",
        "search": "Kawarau bridge bungy",
        "coords": [
          -45.009,
          168.898
        ],
        "pin": [
          "openverse:03843ebf-4a3e-4a47-8618-12a4ed191980"
        ]
      },
      {
        "name": "Shotover jet boat",
        "emoji": "🚤",
        "description": "High-speed spins through a narrow canyon.",
        "link": "https://www.shotoverjet.com/",
        "maps": "Shotover Jet, Queenstown",
        "tags": [
          "adventure"
        ],
        "wiki": "Shotover Jet",
        "search": "Shotover Jet",
        "coords": [
          -44.997,
          168.692
        ]
      },
      {
        "name": "Skyline gondola and luge",
        "emoji": "🚠",
        "description": "Views over the lake, then race down.",
        "link": "https://www.skyline.co.nz/en/queenstown/",
        "maps": "Skyline Queenstown",
        "tags": [
          "adventure",
          "sights"
        ],
        "wiki": "Skyline Queenstown",
        "search": "Skyline gondola Queenstown luge",
        "coords": [
          -45.031,
          168.653
        ],
        "pin": [
          "openverse:fe0a1d51-1d17-4260-9865-7659f8f2f5ce",
          "openverse:e645dbc4-bf5c-4e9c-957f-9dc233e61c99"
        ]
      },
      {
        "name": "Arrowtown",
        "emoji": "⛏️",
        "description": "Small gold-rush village.",
        "maps": "Arrowtown, New Zealand",
        "tags": [
          "sights"
        ],
        "wiki": "Arrowtown",
        "search": "Arrowtown",
        "coords": [
          -44.941,
          168.831
        ]
      },
      {
        "name": "Glenorchy drive",
        "emoji": "🚗",
        "description": "Lakeside road into Lord of the Rings scenery.",
        "maps": "Glenorchy, New Zealand",
        "tags": [
          "nature"
        ],
        "wiki": "Glenorchy, New Zealand",
        "search": "Glenorchy Lake Wakatipu",
        "coords": [
          -44.851,
          168.388
        ]
      },
      {
        "name": "Bass nights at The London",
        "emoji": "🎧",
        "description": "Bar and club with DnB, reggae and bass DJs most weekends in summer. No fixed DnB night, so check their listings.",
        "maps": "The London, Queenstown",
        "tags": [
          "dnb"
        ],
        "wiki": "Queenstown, New Zealand",
        "search": "Queenstown New Zealand night",
        "coords": [
          -45.032,
          168.66
        ],
        "pin": [
          "openverse:9c7bba80-fc11-4671-b050-9e765ea2f202",
          "openverse:f22bf5ad-db07-4ecc-895f-747d4a96f733"
        ],
        "exclude": [
          "File:Queenstown 1 (8168013172).jpg"
        ]
      },
      {
        "name": "Fergburger",
        "emoji": "🍔",
        "description": "Queenstown's famous burger. Expect a queue. Fergbaker next door does good pies.",
        "link": "https://www.fergburger.com/",
        "maps": "Fergburger, Queenstown",
        "tags": [
          "food"
        ],
        "wiki": "Fergburger",
        "search": "Fergburger Queenstown",
        "coords": [
          -45.033,
          168.659
        ]
      },
      {
        "name": "Gibbston Valley wineries",
        "emoji": "🍷",
        "description": "Central Otago pinot noir, 25 minutes from town. Gibbston Valley has a wine cave, and you can bike between cellar doors.",
        "link": "https://www.gibbstonvalley.com/",
        "maps": "Gibbston Valley Winery",
        "tags": [
          "drinks"
        ],
        "wiki": "Central Otago wine region",
        "search": "Gibbston Valley vineyard",
        "coords": [
          -45.014,
          168.95
        ],
        "exclude": [
          "File:RipponVineyard.jpg"
        ]
      },
      {
        "name": "Kiwi Crawl bar crawl",
        "emoji": "🍻",
        "description": "About 5 bars with free pizza and drink discounts for the rest of your stay. Tue, Thu and Sat about NZ$30. The Wed and Fri version (about NZ$40) adds the Minus 5 Ice Bar.",
        "link": "https://www.kiwicrawl.co.nz/",
        "tags": [
          "party"
        ],
        "wiki": "Queenstown, New Zealand",
        "search": "Queenstown nightlife bar",
        "coords": [
          -45.0315,
          168.6615
        ],
        "pin": [
          "openverse:3be391ab-6793-47f0-9520-6d896b49ca1a"
        ],
        "exclude": [
          "File:Queenstown 1 (8168013172).jpg"
        ]
      },
      {
        "name": "Highlands Motorsport Park",
        "emoji": "🏎️",
        "description": "In Cromwell, 45 minutes from Queenstown. Race karts on a 650 m track (about NZ$54 for 10 minutes), or ride hot laps on the real circuit in a Ferrari or Porsche with a pro driver.",
        "link": "https://www.highlands.co.nz/",
        "maps": "Highlands Motorsport Park, Cromwell",
        "tags": [
          "cars"
        ],
        "wiki": "Highlands Motorsport Park",
        "search": "Highlands Motorsport Park Cromwell",
        "coords": [
          -45.037,
          169.19
        ],
        "exclude": [
          "File:Highlands Motorsport Park (Full Course).png",
          "openverse:bbb233e3-e582-4569-a518-de17d41d02e1",
          "File:Lexus LC 500 & LC 500h interior (cropped).jpg",
          "openverse:863e3873-5dc4-4568-8244-0bbc3395f8e0",
          "File:Lexus LC 500 & LC 500h interior.jpg",
          "openverse:a54c505e-135f-42cc-b170-e5c21ef3d183"
        ]
      }
    ]
  },
  {
    "id": "mil",
    "name": "Milford Sound",
    "country": "New Zealand",
    "note": "South Island, Fiordland",
    "activities": [
      {
        "name": "Fjord cruise or scenic flight",
        "emoji": "🛳️",
        "description": "Waterfalls and cliffs straight out of the sea.",
        "maps": "Milford Sound",
        "tags": [
          "nature"
        ],
        "wiki": "Milford Sound",
        "search": "Milford Sound",
        "coords": [
          -44.641,
          167.897
        ]
      }
    ]
  },
  {
    "id": "wan",
    "name": "Wanaka",
    "country": "New Zealand",
    "note": "South Island, 1 hour from Queenstown",
    "activities": [
      {
        "name": "Roys Peak",
        "emoji": "🥾",
        "description": "Tough hike, epic ridge views.",
        "maps": "Roys Peak Track car park, Wanaka",
        "tags": [
          "hike",
          "nature"
        ],
        "wiki": "Roys Peak",
        "search": "Roys Peak Wanaka",
        "coords": [
          -44.697,
          169.052
        ]
      },
      {
        "name": "That Wanaka Tree",
        "emoji": "🌳",
        "description": "Lone willow in the lake, best at sunrise.",
        "maps": "That Wanaka Tree",
        "tags": [
          "nature"
        ],
        "wiki": "That Wanaka Tree",
        "search": "Wanaka tree",
        "coords": [
          -44.697,
          169.117
        ]
      },
      {
        "name": "Cardrona Distillery",
        "emoji": "🥃",
        "description": "Single malt and gin tastings on the Crown Range road between Queenstown and Wanaka.",
        "link": "https://www.cardronadistillery.com/",
        "maps": "The Cardrona Distillery",
        "tags": [
          "drinks"
        ],
        "wiki": "Cardrona, New Zealand",
        "search": "Cardrona valley distillery",
        "coords": [
          -44.864,
          169.004
        ]
      },
      {
        "name": "Rippon vineyard",
        "emoji": "🍷",
        "description": "Lakeside vineyard with one of the best views in the country. Rhyme & Reason in town if you'd rather have beer.",
        "link": "https://www.rippon.co.nz/",
        "maps": "Rippon Winery, Wanaka",
        "tags": [
          "drinks"
        ],
        "wiki": "Rippon Vineyard",
        "search": "Rippon vineyard Wanaka",
        "coords": [
          -44.7,
          169.106
        ]
      }
    ]
  },
  {
    "id": "mtc",
    "name": "Mount Cook + Tekapo",
    "country": "New Zealand",
    "note": "South Island, Mackenzie Country",
    "activities": [
      {
        "name": "Hooker Valley Track",
        "emoji": "🧊",
        "description": "Easy 3-hour walk to a glacier lake.",
        "maps": "Hooker Valley Track, Aoraki Mount Cook",
        "tags": [
          "hike",
          "nature"
        ],
        "wiki": "Hooker Valley",
        "search": "Hooker Valley Aoraki",
        "coords": [
          -43.718,
          170.096
        ]
      },
      {
        "name": "Church of the Good Shepherd",
        "emoji": "⛪",
        "description": "Tiny stone church on Lake Tekapo.",
        "maps": "Church of the Good Shepherd, Lake Tekapo",
        "tags": [
          "sights"
        ],
        "wiki": "Church of the Good Shepherd, Lake Tekapo",
        "search": "Church of the Good Shepherd Tekapo",
        "coords": [
          -44.005,
          170.481
        ]
      },
      {
        "name": "Stargazing tour",
        "emoji": "✨",
        "description": "Dark Sky Reserve, Milky Way overhead.",
        "link": "https://www.darkskyproject.co.nz/",
        "maps": "Dark Sky Project, Lake Tekapo",
        "tags": [
          "nature"
        ],
        "wiki": "Aoraki Mackenzie International Dark Sky Reserve",
        "search": "Lake Tekapo night sky stars",
        "coords": [
          -43.986,
          170.465
        ]
      },
      {
        "name": "Alpine salmon at Lake Pukaki",
        "emoji": "🐟",
        "description": "Salmon farmed in glacier-fed canals. Get sashimi at the Mt Cook Alpine Salmon shop, with the mountain behind you.",
        "link": "https://alpinesalmon.co.nz/",
        "maps": "Mt Cook Alpine Salmon Shop, Lake Pukaki",
        "tags": [
          "food"
        ],
        "search": "Mt Cook Alpine Salmon",
        "pin": [
          "File:Salmon Sashimi (38284471226).jpg",
          "File:Salmon Sashimi 02.jpg",
          "File:Salmon sashimi slices.jpg"
        ],
        "coords": [
          -44.1885,
          170.135
        ]
      }
    ]
  },
  {
    "id": "akl",
    "name": "Auckland",
    "country": "New Zealand",
    "note": "North Island",
    "intro": "Queenstown to Auckland is a 2-hour flight, and Auckland has the most flights home. By car: Auckland to Coromandel or Rotorua is about 3 hours, Rotorua to Taupō 1 hour, Taupō to Wellington about 5 hours.",
    "activities": [
      {
        "name": "Sky Tower and SkyJump",
        "emoji": "🗼",
        "description": "328 m tower with views over the harbour. The SkyJump is a 192 m cable-controlled jump off the side.",
        "link": "https://www.bungy.co.nz/auckland/sky-tower/skyjump/",
        "maps": "Sky Tower, Auckland",
        "tags": [
          "sights",
          "adventure"
        ],
        "wiki": "Sky Tower (Auckland)",
        "search": "SkyJump Sky Tower",
        "pin": [
          "File:NZL-Auckl-Skytower-Basejumping.jpg"
        ],
        "exclude": [
          "File:SkyJump Las Vegas.jpg",
          "File:Bergiselschanze Restaurant 1.JPG",
          "File:Bergiselschanze Restaurant 2.JPG",
          "openverse:0b60d042-f68a-4f33-9c07-a08067acb8b1",
          "File:Tower (160702997).jpeg",
          "File:Westminster tube roundel and Elizabeth Tower 2006-10-30.jpg",
          "File:Sky Soldier, New York City Native, Reflects on 9-11 (9290220).jpg"
        ],
        "coords": [
          -36.8485,
          174.7622
        ]
      },
      {
        "name": "Waiheke Island wineries",
        "emoji": "🍷",
        "description": "Vineyard island 40 minutes from the city by ferry. A hop-on bus links the cellar doors and beaches, so nobody has to drive.",
        "maps": "Waiheke Island",
        "tags": [
          "drinks"
        ],
        "wiki": "Waiheke Island",
        "search": "Waiheke Island vineyard",
        "coords": [
          -36.8,
          175.1
        ]
      },
      {
        "name": "Ponsonby Road and K Road",
        "emoji": "🪩",
        "description": "Ponsonby Road for bars and restaurants. Karangahape Road (K Road) is the late-night strip with clubs and live music.",
        "maps": "Karangahape Road, Auckland",
        "tags": [
          "party"
        ],
        "wiki": "Karangahape Road",
        "search": "Karangahape Road Auckland",
        "coords": [
          -36.858,
          174.756
        ],
        "exclude": [
          "File:Karangahape Road Motorway Bridge.jpg",
          "openverse:1bb0897b-5c3d-4945-a283-7b9ba34cba04",
          "openverse:d4cacf2c-6f61-4c15-99fc-429fee1a76a5"
        ]
      },
      {
        "name": "Pointers",
        "emoji": "🎧",
        "description": "Auckland's drum & bass club, on Lower Hobson Street in the CBD, with DnB nights most weekends. Check their page for the December line-ups.",
        "link": "https://dropthebass.co/venues/pointers",
        "maps": "Pointers, Lower Hobson Street, Auckland",
        "tags": [
          "dnb"
        ],
        "wiki": "Drum and bass",
        "search": "drum and bass club crowd DJ",
        "coords": [
          -36.8435,
          174.765
        ],
        "exclude": [
          "File:Dextrous Switzerland.jpg",
          "openverse:acff3b68-b576-4b97-8396-76ab9ab62f12",
          "openverse:b400a4eb-47aa-40c9-b562-0c4c74261201"
        ]
      },
      {
        "name": "Piha beach",
        "emoji": "🏄",
        "description": "Black-sand surf beach on the wild west coast, 45 minutes from the city. Strong rips: swim between the flags.",
        "maps": "Piha Beach",
        "tags": [
          "surf",
          "beach"
        ],
        "wiki": "Piha",
        "search": "Piha beach Lion Rock",
        "coords": [
          -36.954,
          174.471
        ]
      }
    ]
  },
  {
    "id": "cor",
    "name": "Coromandel",
    "country": "New Zealand",
    "note": "North Island",
    "activities": [
      {
        "name": "Cathedral Cove",
        "emoji": "⛰️",
        "description": "Huge rock arch on a white beach. The walking track was damaged by storms, so check if it's open; boat and kayak tours go there too.",
        "maps": "Cathedral Cove, Coromandel",
        "tags": [
          "beach",
          "nature"
        ],
        "wiki": "Cathedral Cove",
        "search": "Cathedral Cove Coromandel",
        "coords": [
          -36.828,
          175.79
        ]
      },
      {
        "name": "Hot Water Beach",
        "emoji": "♨️",
        "description": "Dig your own hot pool in the sand around low tide. Rent a spade at the café.",
        "maps": "Hot Water Beach, Coromandel",
        "tags": [
          "beach"
        ],
        "wiki": "Hot Water Beach",
        "search": "Hot Water Beach Coromandel",
        "coords": [
          -36.889,
          175.825
        ]
      }
    ]
  },
  {
    "id": "rot",
    "name": "Rotorua + Taupō",
    "country": "New Zealand",
    "note": "North Island",
    "activities": [
      {
        "name": "Geysers at Te Puia",
        "emoji": "♨️",
        "description": "Pōhutu geyser erupts several times an hour, next to bubbling mud pools and a Māori arts and crafts school.",
        "link": "https://www.tepuia.com/",
        "maps": "Te Puia, Rotorua",
        "tags": [
          "nature",
          "sights"
        ],
        "wiki": "Whakarewarewa",
        "search": "Pohutu geyser Rotorua",
        "coords": [
          -38.164,
          176.251
        ],
        "pin": [
          "openverse:2261e1cf-dddf-4cf3-b354-301b9e77221a"
        ]
      },
      {
        "name": "Wai-O-Tapu thermal park",
        "emoji": "🌋",
        "description": "Bright orange and green pools, including the Champagne Pool. 30 minutes south of Rotorua.",
        "link": "https://www.waiotapu.co.nz/",
        "maps": "Wai-O-Tapu Thermal Wonderland",
        "tags": [
          "nature"
        ],
        "wiki": "Wai-O-Tapu",
        "search": "Wai-O-Tapu Champagne Pool",
        "coords": [
          -38.357,
          176.369
        ]
      },
      {
        "name": "Māori cultural evening and hāngī",
        "emoji": "🔥",
        "description": "An evening with a pōwhiri welcome, haka, and a hāngī dinner cooked in an earth oven.",
        "link": "https://te-pa-tu.com/",
        "maps": "Te Pā Tū, Rotorua",
        "tags": [
          "museum",
          "food"
        ],
        "wiki": "Māori culture",
        "search": "Maori cultural performance haka Rotorua",
        "coords": [
          -38.244,
          176.214
        ]
      },
      {
        "name": "Redwoods Treewalk",
        "emoji": "🌲",
        "description": "Suspension bridges between giant redwoods, lit with lanterns at night.",
        "link": "https://www.treewalk.co.nz/",
        "maps": "Redwoods Treewalk, Rotorua",
        "tags": [
          "nature"
        ],
        "wiki": "Whakarewarewa Forest",
        "search": "Redwoods Whakarewarewa Forest Rotorua",
        "coords": [
          -38.161,
          176.274
        ]
      },
      {
        "name": "Hobbiton movie set",
        "emoji": "🧙",
        "description": "The Shire from Lord of the Rings, with a drink at the Green Dragon Inn at the end. About 1 hour from Rotorua.",
        "link": "https://www.hobbitontours.com/",
        "maps": "Hobbiton Movie Set",
        "tags": [
          "sights"
        ],
        "wiki": "Hobbiton Movie Set",
        "search": "Hobbiton movie set",
        "coords": [
          -37.872,
          175.683
        ]
      },
      {
        "name": "Waitomo glowworm caves",
        "emoji": "✨",
        "description": "Boat ride under a ceiling of glowworms. Black-water rafting on tubes through the caves for more adventure.",
        "link": "https://www.waitomo.com/",
        "maps": "Waitomo Glowworm Caves",
        "tags": [
          "nature",
          "adventure"
        ],
        "wiki": "Waitomo Glowworm Caves",
        "search": "Waitomo glowworm cave",
        "coords": [
          -38.261,
          175.104
        ]
      },
      {
        "name": "Tongariro Alpine Crossing",
        "emoji": "🥾",
        "description": "19 km past volcanoes and emerald crater lakes, often called the best day hike in NZ. Book a shuttle; go only in good weather.",
        "maps": "Tongariro Alpine Crossing, Mangatepopo car park",
        "tags": [
          "hike",
          "nature"
        ],
        "wiki": "Tongariro Alpine Crossing",
        "search": "Tongariro Alpine Crossing Emerald Lakes",
        "coords": [
          -39.135,
          175.65
        ]
      },
      {
        "name": "Huka Falls and Taupō skydive",
        "emoji": "🪂",
        "description": "Thundering blue river falls just outside Taupō. Taupō is one of the cheapest places in the world to skydive, over the lake.",
        "link": "https://www.skydivetaupo.co.nz/",
        "maps": "Huka Falls, Taupō",
        "tags": [
          "nature",
          "adventure"
        ],
        "wiki": "Huka Falls",
        "search": "Huka Falls Taupo",
        "coords": [
          -38.649,
          176.09
        ]
      }
    ]
  },
  {
    "id": "wlg",
    "name": "Wellington",
    "country": "New Zealand",
    "note": "North Island",
    "activities": [
      {
        "name": "Craft beer capital",
        "emoji": "🍺",
        "description": "Garage Project's taproom in Aro Valley is the famous one; the city is full of small brewery bars.",
        "link": "https://garageproject.co.nz/",
        "maps": "Garage Project Taproom, Aro Valley, Wellington",
        "tags": [
          "drinks"
        ],
        "wiki": "Garage Project",
        "search": "Wellington craft beer bar",
        "coords": [
          -41.295,
          174.769
        ],
        "exclude": [
          "openverse:038eecd5-62ed-4848-a639-04fdb030f98f",
          "openverse:b97c87b7-ac8a-4af7-957c-9f30e52b47cb"
        ],
        "pin": [
          "openverse:84dca96f-9e5d-4d3c-ba21-4b53b82f5918"
        ]
      },
      {
        "name": "Cuba Street nights",
        "emoji": "🪩",
        "description": "The bohemian strip with bars, live music and late clubs. Courtenay Place is the louder, busier party street.",
        "maps": "Cuba Street, Wellington",
        "tags": [
          "party"
        ],
        "wiki": "Cuba Street",
        "search": "Cuba Street Wellington",
        "coords": [
          -41.294,
          174.775
        ]
      },
      {
        "name": "Te Papa museum",
        "emoji": "🏛️",
        "description": "Free national museum, with a colossal squid and great Māori collections.",
        "link": "https://www.tepapa.govt.nz/",
        "maps": "Te Papa, Wellington",
        "tags": [
          "museum"
        ],
        "wiki": "Museum of New Zealand Te Papa Tongarewa",
        "search": "Te Papa museum Wellington",
        "coords": [
          -41.2905,
          174.782
        ]
      },
      {
        "name": "Wētā Workshop",
        "emoji": "🎬",
        "description": "Tour of the studio that made the props and creatures for Lord of the Rings.",
        "link": "https://www.wetaworkshop.com/tours/wellington",
        "maps": "Wētā Workshop, Miramar, Wellington",
        "tags": [
          "museum"
        ],
        "wiki": "Wētā Workshop",
        "search": "Weta Workshop Wellington",
        "coords": [
          -41.305,
          174.827
        ],
        "pin": [
          "File:Weta Workshop Gandalf.jpg"
        ]
      }
    ]
  },
  {
    "id": "eat-nz",
    "name": "Eat & drink: New Zealand",
    "country": "New Zealand",
    "kind": "food",
    "note": "Staples to try anywhere",
    "intro": "Supermarkets sell beer and wine, but spirits only come from liquor stores. Tipping is not expected.",
    "activities": [
      {
        "name": "Hāngī",
        "emoji": "🔥",
        "description": "Māori feast of meat and vegetables slow-cooked in an earth oven. Look for one at a cultural evening or market.",
        "tags": [
          "food"
        ],
        "wiki": "Hāngī",
        "search": "hangi Maori food"
      },
      {
        "name": "Steak and cheese pie",
        "emoji": "🥧",
        "description": "NZ has a serious pie culture. Steak and cheese or mince and cheese are the classics.",
        "tags": [
          "food"
        ],
        "wiki": "Meat pie (Australia and New Zealand)",
        "search": "New Zealand pie bakery"
      },
      {
        "name": "NZ lamb",
        "emoji": "🐑",
        "description": "Roast, chops or rack of lamb. On most menus and very good.",
        "tags": [
          "food"
        ],
        "wiki": "Lamb and mutton",
        "search": "roast lamb dish"
      },
      {
        "name": "Green-lipped mussels",
        "emoji": "🦪",
        "description": "Big local mussels, steamed in white wine or in fritters.",
        "tags": [
          "food"
        ],
        "wiki": "Perna canaliculus",
        "search": "green-lipped mussels"
      },
      {
        "name": "Cheese rolls",
        "emoji": "🧀",
        "description": "\"Southland sushi\": toasted bread rolled around a cheesy filling. A South Island café thing.",
        "tags": [
          "food"
        ],
        "wiki": "Cheese roll",
        "search": "Southland cheese roll"
      },
      {
        "name": "Hokey pokey ice cream",
        "emoji": "🍦",
        "description": "Vanilla with crunchy honeycomb toffee. Also try Whittaker's chocolate.",
        "tags": [
          "food"
        ],
        "wiki": "Hokey pokey (ice cream)",
        "search": "hokey pokey ice cream"
      },
      {
        "name": "Pavlova",
        "emoji": "🍰",
        "description": "Meringue with cream and fruit. Both countries claim to have invented it.",
        "tags": [
          "food"
        ],
        "wiki": "Pavlova (food)",
        "search": "pavlova dessert"
      },
      {
        "name": "L&P",
        "emoji": "🥤",
        "description": "Lemon & Paeroa, the lemony soft drink that is \"world famous in New Zealand\".",
        "tags": [
          "drinks"
        ],
        "wiki": "L&P",
        "search": "L&P Lemon Paeroa"
      },
      {
        "name": "NZ wine",
        "emoji": "🍷",
        "description": "Marlborough sauvignon blanc is everywhere. Central Otago pinot noir comes from around Queenstown and Wanaka.",
        "tags": [
          "drinks"
        ],
        "wiki": "New Zealand wine",
        "search": "Central Otago vineyard"
      },
      {
        "name": "NZ beer",
        "emoji": "🍺",
        "description": "Speight's is the southern pub classic. For craft, look for Garage Project, Emerson's and Altitude (Queenstown).",
        "tags": [
          "drinks"
        ],
        "wiki": "Beer in New Zealand",
        "search": "New Zealand craft beer"
      }
    ]
  }
];
