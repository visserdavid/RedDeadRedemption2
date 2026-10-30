(() => {
  const offices = [
    { id: "valentine", title: "Valentine (sheriff)", items: [
      ["swan",      "Ellie Anne Swan",     "Ten oosten van Wallace Station", "Vanaf hoofdstuk 2", ["Levend"]],
      ["allbright", "Benedict Allbright",  "Langs de Dakota River, ten noorden van Valentine", "Vanaf hoofdstuk 2", ["Levend"]]
    ] },
    { id: "strawberry", title: "Strawberry (gevangenis)", items: [
      ["brown",     "Joshua Brown",        "Een mijn ten noordwesten van Strawberry", "Na de missie <em>Blessed are the Meek?</em> (hoofdstuk 2)", ["Levend"]],
      ["cavanaugh", "Bart Cavanaugh",      "Het kamp van de Laramie Gang, waar hij dronken ligt te slapen", "", ["Versie"]]
    ] },
    { id: "rhodes", title: "Rhodes (sheriff en postkantoor)", items: [
      ["johnson",   "Mark Johnson",        "Ten noordoosten van het station van Rhodes", "Na de missie <em>The Joys of Civilization</em> (hoofdstuk 4)", ["Levend"]],
      ["laidlaw",   "Robbie Laidlaw",      "Een hut ten zuidoosten van Braithwaite Manor", "Na Mark Johnson", ["Levend"]],
      ["millemont", "Camille de Millemont","Catfish Jackson's", "Poster bij het postkantoor van Rhodes", ["Versie"]]
    ] },
    { id: "saintdenis", title: "Saint Denis (politie)", items: [
      ["woffard",   "Lindsay Woffard",     "Ten oosten van Emerald Ranch, bij de Kamassa River", "Vanaf hoofdstuk 2", []],
      ["foreman",   "Anthony Foreman",     "Doyle's Tavern in Saint Denis", "Epiloog, als je hem in hoofdstuk 4 niet hebt gedood", ["Levend", "Epiloog"]]
    ] },
    { id: "blackwater", title: "Blackwater (politie)", items: [
      ["green",     "Elias Green",         "Ten westen van Beecher's Hope, bij Blackwater", "Epiloog", ["Epiloog"]],
      ["skinner",   "Otis Skinner",        "Ten zuidwesten van Manzanita Post", "Epiloog", ["Epiloog"]],
      ["zizendorf", "Herman Zizendorf",    "Ergens in Blackwater, 's nachts zoeken. Chief Dunbar wil hem levend.", "Epiloog", ["Epiloog", "Versie"]]
    ] },
    { id: "tumbleweed", title: "Tumbleweed (gevangenis)", items: [
      ["cortez",    "Esteban Cortez",      "Een mijn ten zuidwesten van Tumbleweed", "Epiloog, na de executie van de Del Lobo in Tumbleweed", ["Epiloog"]],
      ["arroyo",    "Joaquin Arroyo",      "Bij het spoor ten zuidwesten van Benedict Point", "Epiloog, na de executie van de Del Lobo in Tumbleweed", ["Levend", "Epiloog"]]
    ] }
  ];
  const keys = () => RDR.groupsOf("bounties").flatMap(g => g.keys);
  RDR.list({
    id: "bounties", title: "Bounties", order: 130,
    heading: "Bounties Checklist", sub: "Red Dead Redemption 2 (story mode): alle premiejachten van de sheriffkantoren, met waar je het doelwit vindt.", blurb: "Alle 14 premiejachten van de sheriffkantoren. 5 ingeleverde bounties zijn nodig voor 100%.",
    filter: "Verberg ingeleverde bounties",
    tips: [
    "Premiejagen komt vrij na de hoofdstuk 2-missie <em>Good, Honest, Snake Oil</em>. Daarna hangen er <strong>premieposters</strong> bij sheriffkantoren en postkantoren. Pak de poster om de opdracht te starten.",
    "Je levert het doelwit af bij het kantoor dat de poster heeft opgehangen. <strong>Levend</strong> levert altijd meer op dan dood. Bind het doelwit vast (hogtie) en leg het op je paard.",
    "Doelwitten met de tag <strong>Levend</strong> moeten levend worden afgeleverd.",
    "Voor 100% heb je <strong>5 bounties</strong> nodig. Dat aantal gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>. De bounties in hoofdstuk 2 tot en met 4 zijn al genoeg.",
    "Bounties met de tag <strong>Versie</strong> kwamen met de pc-versie en zitten misschien niet in jouw versie van de game.",
    "Staat er zelf een premie op je hoofd? Die betaal je af bij een postkantoor."
  ],
    sources: [
    [
      "rdr2.org (alle bounties)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-bounty-hunting-missions-guide/"
    ],
    [
      "PowerPyx (kantoren en 100%)",
      "https://www.powerpyx.com/red-dead-redemption-2-bounty-locations/"
    ],
    [
      "SegmentNext",
      "https://segmentnext.com/2018/10/28/red-dead-redemption-2-bounty-hunting-locations"
    ]
  ],
    sections: [{ type: "checklist", grid: true, groups: offices.map(o => ({ ...o, items: o.items.map(([id, name, where, req, tags]) =>
      ({ id, name, strong: true, where, note: req && `<em>${req}</em>`, tags })) })) }],
    metrics: {
      done: () => RDR.ratio(keys()),
      counted: () => RDR.capped(RDR.ratio(keys()), 5)
    },
    meters: [["done", "Bounties ingeleverd"], ["counted", "Voor 100% (5 nodig)"]],
    v1: {
      store: "rdr2-bounties-v1",
      map: k => { const it = RDR.groupsOf("bounties").flatMap(g => g.items).find(i => `b:${i.id}` === k); return it ? it.key : null; }
    }
  });
})();
