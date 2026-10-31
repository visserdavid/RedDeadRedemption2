(() => {
  // The 34 story-mode trophies/achievements (GTABase). auto: [metric, max] counts from another list; otherwise a checkbox.
  const total = m => RDR.metric(m).total;
  const T = (id, name, hint, link, auto, max) => ({ id, name, hint, link, auto, max: max || (auto ? total(auto) : 1) });
  const groups = () => [
    { id: "story", title: "Story", items: [
      T("mud", "Back in the Mud", "Complete Chapter 1.", "#/missions", "missions.ch1"),
      T("scratch", "Just a Scratch", "Complete <em>Enter, Pursued by a Memory</em>.", "#/missions", "missions.enter"),
      T("pastures", "To Greener Pastures", "Complete Chapter 2.", "#/missions", "missions.ch2"),
      T("feuds", "Settling Feuds", "Complete Chapter 3.", "#/missions", "missions.ch3"),
      T("ashore", "Washed Ashore", "Complete Chapter 4.", "#/missions", "missions.ch4"),
      T("traitors", "No Traitors", "Complete Chapter 5.", "#/missions", "missions.ch5"),
      T("lucky", "Third Time Lucky", "Complete <em>Goodbye, Dear Friend</em>.", "#/missions", "missions.goodbye"),
      T("redemption", "Redemption", "Complete <em>Red Dead Redemption</em>.", "#/missions", "missions.redemption"),
      T("builder", "Cowboy Builder", "Complete <em>A New Jerusalem</em>.", "#/missions", "missions.jerusalem"),
      T("summer", "Endless Summer", "Complete the Epilogue.", "#/missions", "missions.epilogue"),
      T("hand", "Lending a Hand", "Complete all optional Honor story missions, in one playthrough. Missable.", "#/missions"),
      T("gold", "Gold Rush", "Earn 70 Gold Medals in Story missions.", "#/missions", "missions.gold", 70)
    ] },
    { id: "completion", title: "Completion", items: [
      T("best", "Best in the West", "Attain 100% completion.", "#/hundred", "hundred.parts"),
      T("stranger", "Western Stranger", "Complete 10 Stranger mission strands.", "#/strangers", "strangers.counted"),
      T("collector", "Collector's Item", "Complete one of the Collectable strands (a cigarette card set, the dinosaur bones, dreamcatchers, rock carvings, legendary fish or exotics).", "", "trophies.collector"),
      T("respects", "Paying Respects", "Find the graves of each of your fallen companions.", "#/collectibles", "collectibles.graves"),
      T("art", "It's Art", "Find a permanent home for the squirrel statue.", "#/hunting", "hunting.art"),
      T("ai", "Artificial Intelligence", "Discover the fate of Marko Dragic.", "#/characters")
    ] },
    { id: "camp", title: "Camp and gang", items: [
      T("friends", "Friends With Benefits", "Complete a Companion Activity in each camp (chapters 2, 3 and 4). Missable.", ""),
      T("errand", "Errand Boy", "Deliver 5 camp companion item requests (chapters 2–4). Missable.", "#/camplife", "camplife.requests", 5),
      T("poor", "Give to the Poor", "Donate $250 to the gang tithing box (box gone after chapter 4). Missable.", "#/camplife"),
      T("break", "Breaking and Entering", "Recover the stash from 4 homesteads.", "#/homesteads", "homesteads.found", 4)
    ] },
    { id: "outlaw", title: "Outlaw life", items: [
      T("hobby", "Hobby Horse", "Play all mini games: poker, blackjack, dominoes and Five Finger Fillet.", ""),
      T("rich", "Take From the Rich", "Rob or loot $250.", ""),
      T("pony", "Pony Up", "Spend $5000 across all shops.", ""),
      T("extreme", "Extreme Personality", "Reach maximum or minimum Honor level.", ""),
      T("bountiful", "Bountiful", "Survive 3 days holding a bounty of $250 in all states.", ""),
      T("locked", "Locked and Loaded", "Upgrade each available component for a single sidearm or longarm weapon.", "#/weapons")
    ] },
    { id: "wild", title: "Hunting, fishing and horses", items: [
      T("self", "Self Sufficient", "Craft 30 unique items in Story Mode.", "#/recipes"),
      T("skin", "Skin Deep", "Skin every species of animal in Story Mode.", ""),
      T("zoo", "Zoologist", "Study every animal across all states in Story Mode.", ""),
      T("big", "It Was THIS Big!", "Catch a fish weighing at least 16 lbs (7.3 kg).", "#/fish"),
      T("bear", "Grin and Bear It", "Survive 18 bear attacks and kill the bear each time in Story Mode.", ""),
      T("steed", "Trusty Steed", "Reach max bonding level with a horse.", "#/horses", "horses.bond")
    ] }
  ];
  const all = () => RDR.groupsOf("trophies").flatMap(g => g.items);
  const value = it => it.auto ? Math.min(RDR.metric(it.auto).have, it.max) : Math.min(RDR.get(it.key) || 0, it.max);
  // Collectable strands: a finished set or chain on one of the collection pages.
  const strandDone = () => [
    ...RDR.groupsOf("cigcards").map(g => g.finishKey),
    ...["bones", "dream", "carvings"].map(id => RDR.part("collectibles", id).finishKey),
    RDR.part("fish", "fish").finishKey
  ].some(k => RDR.get(k)) || RDR.metric("exotics.turnedIn").have === RDR.metric("exotics.turnedIn").total;

  RDR.list({
    id: "trophies", title: "Trophies", order: 220, group: "Completion",
    heading: "Trophies & Achievements", sub: "Red Dead Redemption 2: the 34 story-mode trophies and achievements, with progress from the other lists where possible.",
    blurb: "The 34 story-mode trophies and achievements. Many count automatically from the other lists.",
    tips: [
      "Trophies with a counter fill in <strong>automatically</strong> from the linked list; tick the others yourself. Red Dead Online trophies are not included.",
      "<strong>Missable:</strong> <em>Lending a Hand</em>, <em>Friends With Benefits</em>, <em>Errand Boy</em> and <em>Give to the Poor</em> must be done before the end of chapter 4 or within one playthrough (PowerPyx). Keep a manual save at the start of each chapter.",
      "<em>Skin Deep</em> and <em>Zoologist</em> only count animals in the compendium; Guarma-only animals are not needed.",
      "On PlayStation the Platinum, <em>Legend of the West</em>, also needs the Red Dead Online trophies."
    ],
    sources: [
      ["GTABase (all trophies)", "https://www.gtabase.com/red-dead-redemption-2/guides/red-dead-redemption-2-achievements-trophies-full-list-ps4-xbox-one"],
      ["PowerPyx (trophy roadmap)", "https://powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap"]
    ],
    sections: () => [{ type: "counters", groups: groups() }],
    metrics: {
      collector: () => ({ have: strandDone() ? 1 : 0, total: 1 }),
      earned: () => ({ have: all().filter(it => value(it) >= it.max).length, total: all().length })
    },
    meters: [["earned", "Trophies earned"]]
  });
})();
