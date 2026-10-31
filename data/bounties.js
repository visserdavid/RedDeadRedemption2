(() => {
  const offices = [
    { id: "valentine", title: "Valentine (sheriff)", items: [
      ["swan",      "Ellie Anne Swan",     "East of Wallace Station", "From chapter 2", ["Alive"]],
      ["allbright", "Benedict Allbright",  "Along the Dakota River, north of Valentine", "From chapter 2", ["Alive"]]
    ] },
    { id: "strawberry", title: "Strawberry (jail)", items: [
      ["brown",     "Joshua Brown",        "A mine northwest of Strawberry", "After the mission <em>Blessed are the Meek?</em> (chapter 2)", ["Alive"]],
      ["cavanaugh", "Bart Cavanaugh",      "The Laramie Gang camp, where he lies sleeping drunk", "", ["Version"]]
    ] },
    { id: "rhodes", title: "Rhodes (sheriff and post office)", items: [
      ["johnson",   "Mark Johnson",        "Northeast of Rhodes station", "After the mission <em>The Joys of Civilization</em> (chapter 4)", ["Alive"]],
      ["laidlaw",   "Robbie Laidlaw",      "A shack southeast of Braithwaite Manor", "After Mark Johnson", ["Alive"]],
      ["millemont", "Camille de Millemont","Catfish Jackson's", "Poster at the Rhodes post office", ["Version"]]
    ] },
    { id: "saintdenis", title: "Saint Denis (police)", items: [
      ["woffard",   "Lindsay Woffard",     "East of Emerald Ranch, by the Kamassa River", "From chapter 2", []],
      ["foreman",   "Anthony Foreman",     "Doyle's Tavern in Saint Denis", "Epilogue, if you did not kill him in chapter 4", ["Alive", "Epilogue"]]
    ] },
    { id: "blackwater", title: "Blackwater (police)", items: [
      ["green",     "Elias Green",         "West of Beecher's Hope, near Blackwater", "Epilogue", ["Epilogue"]],
      ["skinner",   "Otis Skinner",        "Southwest of Manzanita Post", "Epilogue", ["Epilogue"]],
      ["zizendorf", "Herman Zizendorf",    "Somewhere in Blackwater; search at night. Chief Dunbar wants him alive.", "Epilogue", ["Epilogue", "Version"]]
    ] },
    { id: "tumbleweed", title: "Tumbleweed (jail)", items: [
      ["cortez",    "Esteban Cortez",      "A mine southwest of Tumbleweed", "Epilogue, after the Del Lobo execution in Tumbleweed", ["Epilogue"]],
      ["arroyo",    "Joaquin Arroyo",      "By the railway southwest of Benedict Point", "Epilogue, after the Del Lobo execution in Tumbleweed", ["Alive", "Epilogue"]]
    ] }
  ];
  const keys = () => RDR.groupsOf("bounties").flatMap(g => g.keys);
  RDR.list({
    id: "bounties", title: "Bounties", order: 130, group: "Missions",
    sub: "Red Dead Redemption 2 (story mode): every bounty from the sheriff's offices, with where to find the target.", blurb: "All 14 bounties from the sheriff's offices. 5 completed bounties are needed for 100%.",
    filter: "Hide completed bounties",
    tips: [
    "Bounty hunting unlocks after the chapter 2 mission <em>Good, Honest, Snake Oil</em>. After that, <strong>bounty posters</strong> hang at sheriff's offices and post offices. Take the poster to start the job.",
    "Deliver the target to the office that put up the poster. <strong>Alive</strong> always pays more than dead. Hogtie the target and put them on your horse.",
    "Targets tagged <strong>Alive</strong> must be delivered alive.",
    "For 100% you need <strong>5 bounties</strong>. That count goes automatically to the <a href=\"#/hundred\">100%</a> page. The bounties in chapters 2 through 4 are already enough.",
    "Bounties tagged <strong>Version</strong> came with the PC version and may not be in your version of the game.",
    "Is there a bounty on your own head? Pay it off at a post office."
  ],
    sources: [
    [
      "rdr2.org (all bounties)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-bounty-hunting-missions-guide/"
    ],
    [
      "PowerPyx (offices and 100%)",
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
    meters: [["done", "Bounties completed"], ["counted", "For 100% (5 needed)"]]
  });
})();
