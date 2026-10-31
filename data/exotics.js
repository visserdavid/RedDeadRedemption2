(() => {
  const requests = [
    { id: "r1", name: "Request 1", reward: "$110", items: [
      ["littleegret",  "Little Egret Plume",       5,  "feather"],
      ["reddishegret", "Reddish Egret Plume",      5,  "feather"],
      ["snowyegret",   "Snowy Egret Plume",        5,  "feather"],
      ["ladynight",    "Lady of the Night Orchid", 15, "tree"] ] },
    { id: "r2", name: "Request 2", reward: "$125", items: [
      ["heron",        "Heron Plume",              20, "feather"],
      ["ladyslipper",  "Lady Slipper Orchid",      7,  "ground"],
      ["moccasin",     "Moccasin Flower Orchid",   10, "ground"] ] },
    { id: "r3", name: "Request 3", reward: "$150", items: [
      ["gatoregg",     "Gator Egg",                25, "nest"],
      ["acuna",        "Acuna's Star Orchid",      3,  "tree"],
      ["cigar",        "Cigar Orchid",             7,  "tree"],
      ["ghost",        "Ghost Orchid",             5,  "tree"] ] },
    { id: "r4", name: "Request 4", reward: "$175", items: [
      ["spoonbill",    "Spoonbill Plume",          30, "feather"],
      ["rattail",      "Rat Tail Orchid",          10, "tree"],
      ["spider",       "Spider Orchid",            5,  "tree"],
      ["nightscent",   "Night Scented Orchid",     5,  "tree"] ] },
    { id: "r5", name: "Request 5", reward: "$200 + Algernon's Revolver + Exotic Hat", items: [
      ["clamshell",    "Clamshell Orchid",         5,  "tree"],
      ["queens",       "Queen's Orchid",           5,  "ground"],
      ["sparrow",      "Sparrow's Egg Orchid",     10, "ground"],
      ["dragon",       "Dragon's Mouth Orchid",    5,  "ground"] ] }
  ];
  const groups = () => RDR.groupsOf("exotics").filter(g => g.id !== "prep");
  // A request that has been turned in counts as complete, even if its counters were never filled in.
  const value = (g, it) => RDR.get(g.finishKey) ? it.max : Math.min(RDR.get(it.key) || 0, it.max);
  RDR.list({
    id: "exotics", title: "Exotics", order: 70, group: "Gear",
    sub: "Red Dead Redemption 2 (story mode): all plumes, eggs and orchids for Algernon Wasp (stranger mission <em>Duchesses and Other Animals</em>).", blurb: "Plumes, gator eggs and orchids for Algernon Wasp in Saint Denis.",
    tips: [
    "<strong>Egrets and herons</strong> live in the west of the Bayou, around Lagras and Bluewater Marsh. Most are around at midday. Mark them in Dead Eye before they fly off. Any weapon kills them in one shot, and the quality of the plume does not matter.",
    "<strong>Spoonbills</strong> have their own area east of the Kamassa River, by the railway. About five spawn per visit.",
    "Run out of birds? Reload a save, or travel away for a bit (for example to Rhodes) and sleep a few hours. Then they spawn again.",
    "<strong>Gator eggs</strong> lie in nests of 3 to 5 eggs in the swamps north and south of Shady Belle and on the islets east of it. With Eagle Eye they glow gold. There are almost always adult alligators nearby.",
    "<strong>Orchids</strong> grow in fixed spots, mainly in the swamps of Lemoyne (Bayou Nwa, Bluewater Marsh) and in Roanoke Ridge. They grow on trees or on the ground (see the tag) and light up in Eagle Eye. A map of every spot is in the PowerPyx guide (see sources).",
    "Picked plants grow back over time. If you are a few short, go back to the same spot after a few in-game days."
  ],
    sources: [
    [
      "rdr2.org (exotics)",
      "https://www.rdr2.org/guides/duchesses-and-other-animals-exotics-guide/"
    ],
    [
      "PowerPyx (exotics locations and maps)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-exotics-locations/"
    ],
    [
      "GamerGuides",
      "https://www.gamerguides.com/red-dead-redemption-2/side-missions/stranger-missions/duchesses-and-other-animals"
    ]
  ],
    requests,
    value: (rid, id) => { const g = RDR.part("exotics", rid); return value(g, g.items.find(i => i.id === id)); },
    sections: [
      { type: "checklist", title: "Needed first", groups: [{ id: "prep", title: "Algernon Wasp",
        intro: "There are 5 requests, which you turn in in order. You can collect everything in advance. After the last request you get <strong>Algernon's Revolver</strong> and the <strong>Exotic Hat</strong>, plus $760 in total.",
        items: [{ id: "start", name: "<strong>Spoke to Algernon Wasp</strong> in northern Saint Denis. He appears in chapter 4, after the mission <em>The Gilded Cage</em>." }] }] },
      { type: "counters", title: "Per request", override: value,
        groups: requests.map(r => ({ id: r.id, title: r.name, items: r.items,
          finish: `<strong>Turned in to Algernon</strong> <span class="muted small">(${r.reward})</span>` })),
        status: (g, full, done) => done ? "✓ turned in" : full === g.items.length ? "ready to turn in" : `${full}/${g.items.length} complete` }
    ],
    metrics: {
      items: () => ({
        have: RDR.sum(groups(), g => RDR.sum(g.items, it => value(g, it))),
        total: RDR.sum(groups(), g => RDR.sum(g.items, it => it.max))
      }),
      turnedIn: () => RDR.ratio(groups().map(g => g.finishKey))
    },
    meters: [["items", "Items collected"], ["turnedIn", "Requests turned in"]]
  });
})();
