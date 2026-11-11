// Week plans for New Zealand, 8–15 Dec, drawn on the map one at a time.
// stops: numbered pins. legs: [from, to, rough drive time, day trip?]; day trips are dashed.
// Drive times are rough Google Maps estimates without stops.
const AKL_AIRPORT = [-37.0082, 174.7850], HAMPTON = [-37.3570, 175.0610], AUCKLAND = [-36.8485, 174.7633],
  MEREMERE = [-37.3170, 175.0700], WAIHEKE = [-36.7850, 175.0120];
const AUCKLAND_DAYS = [
  ["Fri 11", "Drive to Auckland, rest, Bushbaby 21:00", "Auckland"],
  ["Sat 12", "Sleep in. Afternoon: drift Round 3 at Meremere, or Piha + Lion Rock", "Auckland"],
  ["Sun 13", "Drift Round 4 final at Meremere", "Auckland"],
  ["Mon 14", "Waiheke or Rangitoto by ferry", "Auckland"],
  ["Tue 15", "Leave ~06:30, return the car, JQ 214 at 09:40", ""],
];

window.NZ_PLANS = [
  {
    id: "taupo", label: "A · Taupō + Auckland", color: "#D7263D",
    summary: "Volcanoes and geothermal, then the Auckland weekend. 2 bookings: Taupō 3 nights, Auckland 4.",
    stops: [
      { n: 1, at: AKL_AIRPORT, name: "Auckland Airport", when: "Tue 8: land 11:35, pick up the car. Tue 15: fly out 09:40" },
      { n: 2, at: HAMPTON, name: "Hampton Downs", when: "Tue 8: coffee and Mad Mike's MADLAB" },
      { n: 3, at: [-38.6491, 176.0899], name: "Huka Falls", when: "Tue 8: evening" },
      { n: 4, at: [-38.6857, 176.0702], name: "Taupō", when: "Base for 3 nights: Tue 8 to Thu 10" },
      { n: 5, at: [-38.2609, 175.1036], name: "Waitomo", when: "Wed 9: black water rafting" },
      { n: 6, at: [-39.2007, 175.5408], name: "Whakapapa (Mt Ruapehu)", when: "Thu 10: Taranaki Falls, Tama Lakes as far as you like, Sky Waka gondola" },
      { n: 7, at: [-38.3576, 176.3696], name: "Wai-O-Tapu + Kerosene Creek", when: "Fri 11: geyser 10:15, hot stream" },
      { n: 8, at: AUCKLAND, name: "Auckland", when: "Base for 4 nights: Fri 11 to Mon 14" },
      { n: 9, at: MEREMERE, name: "Meremere Drift Park", when: "Sat 12 and Sun 13: drift double final" },
      { n: 10, at: WAIHEKE, name: "Waiheke or Rangitoto", when: "Mon 14: ferry day" },
    ],
    legs: [
      [1, 2, "40 min"], [2, 3, "2 h 40"], [3, 4, ""], [4, 7, "35 min"], [7, 8, "3 h"], [8, 1, "30 min"],
      [4, 5, "2 h each way", true], [4, 6, "1 h 15 each way", true], [8, 9, "50 min each way", true], [8, 10, "40 min ferry", true],
    ],
    days: [
      ["Tue 8", "Land, MADLAB at Hampton Downs, drive to Taupō, Huka Falls", "Taupō"],
      ["Wed 9", "Day trip to Waitomo: black water rafting", "Taupō"],
      ["Thu 10", "Day trip to Whakapapa: Taranaki Falls, Tama Lakes, Sky Waka (swap with Wed for weather)", "Taupō"],
      ["Fri 11", "Wai-O-Tapu + Kerosene Creek, drive to Auckland, Bushbaby 21:00", "Auckland"],
      ...AUCKLAND_DAYS.slice(1),
    ],
  },
  {
    id: "rotorua", label: "B · Rotorua + Auckland", color: "#7B3FA0",
    summary: "More Māori culture and geothermal, Hobbiton, less mountain. 2 bookings: Rotorua 3 nights, Auckland 4.",
    stops: [
      { n: 1, at: AKL_AIRPORT, name: "Auckland Airport", when: "Tue 8: land 11:35, pick up the car. Tue 15: fly out 09:40" },
      { n: 2, at: HAMPTON, name: "Hampton Downs", when: "Tue 8: coffee and Mad Mike's MADLAB" },
      { n: 3, at: [-37.8721, 175.6829], name: "Hobbiton", when: "Tue 8: afternoon tour (book ahead)" },
      { n: 4, at: [-38.1368, 176.2497], name: "Rotorua", when: "Base for 3 nights: Tue 8 to Thu 10. Redwoods night walk, Te Puia, Māori evening with hāngī" },
      { n: 5, at: [-38.2609, 175.1036], name: "Waitomo", when: "Wed 9: black water rafting" },
      { n: 6, at: [-38.3576, 176.3696], name: "Wai-O-Tapu + Kerosene Creek", when: "Thu 10: geyser 10:15, hot stream" },
      { n: 7, at: [-38.6491, 176.0899], name: "Huka Falls + Taupō", when: "Thu 10: falls, lunch by the lake" },
      { n: 8, at: AUCKLAND, name: "Auckland", when: "Base for 4 nights: Fri 11 to Mon 14" },
      { n: 9, at: MEREMERE, name: "Meremere Drift Park", when: "Sat 12 and Sun 13: drift double final" },
      { n: 10, at: WAIHEKE, name: "Waiheke or Rangitoto", when: "Mon 14: ferry day" },
    ],
    legs: [
      [1, 2, "40 min"], [2, 3, "1 h 10"], [3, 4, "1 h"], [4, 8, "3 h"], [8, 1, "30 min"],
      [4, 5, "1 h 45 each way", true], [4, 6, "30 min", true], [6, 7, "35 min", true], [7, 4, "1 h", true],
      [8, 9, "50 min each way", true], [8, 10, "40 min ferry", true],
    ],
    days: [
      ["Tue 8", "Land, MADLAB at Hampton Downs, Hobbiton, Rotorua. Redwoods lit up at night", "Rotorua"],
      ["Wed 9", "Day trip to Waitomo: black water rafting. Evening: Māori cultural evening with hāngī", "Rotorua"],
      ["Thu 10", "Loop: Wai-O-Tapu, Kerosene Creek, Huka Falls and Taupō, back via Te Puia", "Rotorua"],
      ["Fri 11", "Drive to Auckland, rest, Bushbaby 21:00", "Auckland"],
      ...AUCKLAND_DAYS.slice(1),
    ],
  },
  {
    id: "coromandel", label: "C · Coromandel + Auckland", color: "#2A9D5C",
    summary: "Beaches, coastal walks and the Pinnacles hike; no geothermal or Waitomo. 2 bookings: Hahei 3 nights, Auckland 4.",
    stops: [
      { n: 1, at: AKL_AIRPORT, name: "Auckland Airport", when: "Tue 8: land 11:35, pick up the car. Tue 15: fly out 09:40" },
      { n: 2, at: HAMPTON, name: "Hampton Downs", when: "Tue 8: coffee and Mad Mike's MADLAB" },
      { n: 3, at: [-36.8400, 175.8000], name: "Hahei", when: "Base for 3 nights: Tue 8 to Thu 10. Cathedral Cove, Hot Water Beach at low tide" },
      { n: 4, at: [-37.0440, 175.6870], name: "The Pinnacles", when: "Wed 9 or Thu 10: 6–8 h hike with ladders near the top (or a kayak trip to Cathedral Cove instead)" },
      { n: 5, at: [-37.4253, 175.7167], name: "Karangahake Gorge", when: "Fri 11: mining tunnels and the Windows Walk, on the way back" },
      { n: 6, at: AUCKLAND, name: "Auckland", when: "Base for 4 nights: Fri 11 to Mon 14" },
      { n: 7, at: MEREMERE, name: "Meremere Drift Park", when: "Sat 12 and Sun 13: drift double final" },
      { n: 8, at: WAIHEKE, name: "Waiheke or Rangitoto", when: "Mon 14: ferry day" },
    ],
    legs: [
      [1, 2, "40 min"], [2, 3, "2 h 20"], [3, 5, "1 h 30"], [5, 6, "1 h 30"], [6, 1, "30 min"],
      [3, 4, "1 h 15 each way", true], [6, 7, "50 min each way", true], [6, 8, "40 min ferry", true],
    ],
    days: [
      ["Tue 8", "Land, MADLAB at Hampton Downs, drive to Hahei", "Hahei"],
      ["Wed 9", "Cathedral Cove walk, Hot Water Beach at low tide, kayak or boat trip", "Hahei"],
      ["Thu 10", "Day trip to the Pinnacles hike, or a lazy beach day", "Hahei"],
      ["Fri 11", "Karangahake Gorge on the way, Auckland, Bushbaby 21:00", "Auckland"],
      ...AUCKLAND_DAYS.slice(1),
    ],
  },
  {
    id: "wellington", label: "D · Down to Wellington", color: "#E07A1F",
    summary: "The whole North Island top to bottom: volcano views on the Desert Road and two nights in Wellington (Te Papa, Wētā Workshop, Cuba Street, craft beer). Lots of driving, and Friday is a long day back. 3 bookings: Taupō 1 night, Wellington 2, Auckland 4.",
    stops: [
      { n: 1, at: AKL_AIRPORT, name: "Auckland Airport", when: "Tue 8: land 11:35, pick up the car. Tue 15: fly out 09:40" },
      { n: 2, at: HAMPTON, name: "Hampton Downs", when: "Tue 8: coffee and Mad Mike's MADLAB" },
      { n: 3, at: [-38.6491, 176.0899], name: "Huka Falls", when: "Tue 8: evening" },
      { n: 4, at: [-38.6857, 176.0702], name: "Taupō", when: "Tue 8: night" },
      { n: 5, at: [-39.2500, 175.7500], name: "Desert Road", when: "Wed 9: the road past Ruapehu, Ngauruhoe and Tongariro, with lookouts on the volcanoes" },
      { n: 6, at: [-41.2865, 174.7762], name: "Wellington", when: "Base for 2 nights: Wed 9 and Thu 10. Te Papa, Wētā Workshop, cable car, Mt Victoria, Cuba Street, craft beer" },
      { n: 7, at: AUCKLAND, name: "Auckland", when: "Base for 4 nights: Fri 11 to Mon 14" },
      { n: 8, at: MEREMERE, name: "Meremere Drift Park", when: "Sat 12 and Sun 13: drift double final" },
      { n: 9, at: WAIHEKE, name: "Waiheke or Rangitoto", when: "Mon 14: ferry day" },
    ],
    legs: [
      [1, 2, "40 min"], [2, 3, "2 h 40"], [3, 4, ""], [4, 5, "45 min"], [5, 6, "3 h 45"], [6, 7, "8 h"], [7, 1, "30 min"],
      [7, 8, "50 min each way", true], [7, 9, "40 min ferry", true],
    ],
    days: [
      ["Tue 8", "Land, MADLAB at Hampton Downs, drive to Taupō, Huka Falls", "Taupō"],
      ["Wed 9", "Desert Road past the volcanoes, on to Wellington (~4 h 30). Evening on Cuba Street", "Wellington"],
      ["Thu 10", "Wellington: Te Papa, Wētā Workshop, cable car and Mt Victoria lookout, craft beer", "Wellington"],
      ["Fri 11", "Leave ~07:00, drive to Auckland (~8 h), Bushbaby 21:00", "Auckland"],
      ...AUCKLAND_DAYS.slice(1),
    ],
  },
];
