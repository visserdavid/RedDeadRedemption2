(() => {
  // [id, description, count, link, hint]
  const SECTIONS = [
    { title: "Missions and Events", items: [
      ["story",     "Complete all story missions, including the epilogue", 1, "", ""],
      ["strangers", "Stranger mission strands completed", 10, "#/strangers", ""],
      ["bounties",  "Bounties completed", 5, "#/bounties", ""],
      ["chance",    "Chance encounters", 25, "#/encounters", ""],
      ["bush",      "Bushwhacked (survived a gang ambush)", 1, "", ""],
      ["hideouts",  "Gang hideouts cleared", 6, "#/hideouts", ""]
    ] },
    { title: "Collectibles", items: [
      ["poi",       "Points of interest", 1, "#/poi", ""],
      ["graves",    "Graves visited", 9, "#/collectibles", "Epilogue"],
      ["cards",     "Cigarette cards", 144, "#/cigcards", ""],
      ["bones",     "Dinosaur bones", 30, "#/collectibles", ""],
      ["fish",      "Legendary fish", 13, "#/fish", ""],
      ["exotics",   "Exotics requests for Algernon Wasp", 5, "#/exotics", ""],
      ["carvings",  "Rock carvings", 10, "#/collectibles", ""],
      ["hunting",   "All hunting requests from the train stations", 1, "", ""],
      ["treasure",  "One treasure hunt completed", 1, "#/treasure", ""],
      ["dream",     "Dreamcatchers", 20, "#/collectibles", ""]
    ] },
    { title: "Compendium", items: [
      ["c-animals", "Animals discovered (of 178)", 50, "", "Studying with binoculars already counts"],
      ["c-equip",   "Equipment obtained (of 72)", 10, "", ""],
      ["c-fish",    "Fish species caught (of 30)", 10, "", ""],
      ["c-gangs",   "Gangs discovered", 6, "#/hideouts", ""],
      ["c-horses",  "Horse breeds discovered (of 19)", 10, "#/horses", ""],
      ["c-plants",  "Plant types collected (of 43)", 20, "#/plants", ""],
      ["c-weapons", "Weapon types used", 48, "#/weapons", ""]
    ] },
    { title: "Player", items: [
      ["cores",     "Health, Stamina and Dead Eye at maximum level", 3, "", ""],
      ["bond",      "Horse bonding level 4", 4, "#/horses", ""],
      ["challenges","Challenge categories up to rank 10", 9, "#/challenges", ""]
    ] },
    { title: "Miscellaneous", items: [
      ["shacks",    "Shacks found", 5, "#/shacks", ""],
      ["legend",    "Legendary animals killed", 5, "#/legendary", ""],
      ["games",     "Table games played", 4, "", "Poker, blackjack, dominoes and Five Finger Fillet"],
      ["ranters",   "Ranters, ravers and campaigners interacted with", 5, "", ""],
      ["bath",      "Bath taken (at a hotel)", 1, "", ""],
      ["show",      "Show watched", 1, "", ""],
      ["theater",   "Theater visited (Théâtre Râleur, Saint Denis)", 1, "", ""],
      ["recipes",   "Recipes crafted", 6, "#/recipes", ""],
      ["robberies", "Robberies committed", 4, "", "Coach, home, shop and train robbery"]
    ] }
  ];
  // Parts that come automatically from another list: id → metric.
  const AUTO = {
    graves: "collectibles.graves", bones: "collectibles.bones", dream: "collectibles.dream", carvings: "collectibles.carvings",
    cards: "cigcards.cards", fish: "fish.fish", exotics: "exotics.turnedIn", treasure: "treasure.found",
    challenges: "challenges.categories", legend: "legendary.kills", "c-horses": "horses.breeds", bond: "horses.bond",
    "c-weapons": "weapons.used", strangers: "strangers.counted", "c-plants": "plants.species", bounties: "bounties.counted",
    hideouts: "hideouts.counted", "c-gangs": "hideouts.gangs", chance: "encounters.counted", recipes: "recipes.counted",
    poi: "poi.counted", shacks: "shacks.counted"
  };
  const groups = SECTIONS.map(s => ({
    id: RDR.slug(s.title), title: s.title,
    items: s.items.map(([id, name, max, link, hint]) => ({ id, name, max, link, hint, auto: AUTO[id] }))
  }));
  const value = it => it.auto ? Math.min(RDR.metric(it.auto).have, it.max) : Math.min(RDR.get(it.key) || 0, it.max);

  RDR.list({
    id: "hundred", title: "100%", order: 210, group: "Completion",
    heading: "100% Checklist", sub: "Red Dead Redemption 2 (story mode): everything that counts towards 100% completion and the trophy/achievement <em>Best in the West</em>.", blurb: "Everything that counts towards 100% completion. Parts with their own list count automatically.",
    tips: [
    "Your current percentage and the official checklist are in the pause menu under <em>Progress</em>. Many parts only become visible once you have finished the story (including the epilogue).",
    "You do not need everything: the game asks for only 5 of the 16 legendary animals and 10 of the 30 fish species, for example. Those requirements are listed below.",
    "Parts with their own list (graves, bones, cards, fish, challenges…) count <strong>automatically</strong>: check them off on that page, the link is next to each one. Track the rest here with the counters (− / +)."
  ],
    sources: [
    [
      "PowerPyx (100% checklist)",
      "https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/"
    ],
    [
      "rdr2.org (100% guide)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-100-completion-guide/"
    ],
    [
      "GTABase",
      "https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-100-completion-guide-checklist"
    ]
  ],
    sections: [{ type: "counters", groups }],
    metrics: {
      parts: () => {
        const items = RDR.groupsOf("hundred").flatMap(g => g.items);
        return { have: items.filter(it => value(it) >= it.max).length, total: items.length };
      }
    },
    meters: [["parts", "Parts complete"]]
  });
})();
