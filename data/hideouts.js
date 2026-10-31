(() => {
  const hideouts = [
    ["sixpoint",  "Six Point Cabin",   "O'Driscoll Boys", "Cumberland Forest, northeast of Valentine", "Chapter 2 (story)", true, ["Story"],
      "A stealthy approach with bow and hunting knife works well here, before the gunfight starts."],
    ["shadybelle","Shady Belle",       "Lemoyne Raiders", "Southwest of Saint Denis", "Chapter 3 (story)", true, ["Story"],
      "Becomes the gang's camp afterwards. Both a stealthy and a direct attack work."],
    ["beaver",    "Beaver Hollow",     "Murfree Brood",   "A cave west of Annesburg", "Chapter 5 (story)", true, ["Story"],
      "A cave with two entrances. A stealthy approach at the main entrance is nearly impossible."],
    ["hangingdog","Hanging Dog Ranch", "O'Driscoll Boys (epilogue: Laramie Gang)", "West of Valentine, near Little Creek River", "Chapter 6 (story)", true, ["Story"],
      "Take out the man on the Maxim gun in the barn first."],
    ["thieves",   "Thieves' Landing",  "Del Lobo Gang",   "The village of Thieves' Landing", "Epilogue", true, ["Epilogue"],
      "One of the hardest: a lot of enemies. Kill them all, or it does not count."],
    ["mercer",    "Fort Mercer",       "Del Lobo Gang",   "South of Mercer Station (New Austin)", "Epilogue", true, ["Epilogue"],
      "Clear the gate first and find cover, so you are not attacked from the side. Kill everyone."],
    ["twinrocks", "Twin Rocks",        "Del Lobo Gang",   "Northwest of Armadillo (New Austin)", "Epilogue", false, ["Epilogue", "Version"],
      "Only in the Special/Ultimate Edition."],
    ["solomon",   "Solomon's Folly",   "Del Lobo Gang",   "An abandoned farm south of Benedict Point (Gaptooth Ridge)", "Epilogue", false, ["Epilogue", "Version"],
      "Came with the PC version."]
  ];
  const gangs = [
    ["odriscoll", "O'Driscoll Boys",  "Mainly New Hanover and Ambarino, up to and including chapter 6"],
    ["raiders",   "Lemoyne Raiders",  "Lemoyne, including Scarlett Meadows and Bluewater Marsh"],
    ["murfree",   "Murfree Brood",    "Roanoke Ridge, in the woods and caves"],
    ["nightfolk", "Night Folk",       "Bayou Nwa, mostly at night"],
    ["skinner",   "Skinner Brothers", "Tall Trees (West Elizabeth)"],
    ["dellobo",   "Del Lobo Gang",    "West Elizabeth and New Austin"],
    ["laramie",   "Laramie Gang",     "Only in the epilogue, including at Hanging Dog Ranch"]
  ];
  const cards = () => RDR.itemsOf("hideouts", "hideouts");
  RDR.list({
    id: "hideouts", title: "Gang hideouts", nav: "Hideouts", order: 140, group: "Missions",
    sub: "Red Dead Redemption 2 (story mode): the gang hideouts to clear out, and the gangs for the compendium.", blurb: "The gang hideouts and the 7 gangs for the compendium. 6 hideouts are needed for 100%.",
    filter: "Hide what you have already done",
    tips: [
    "For 100% you need <strong>6 hideouts</strong>, and only those tagged <em>100%</em> count. Four of them happen in the story. The other two, Thieves' Landing and Fort Mercer, you clear in the epilogue. The count goes automatically to the <a href=\"#/hundred\">100%</a> page.",
    "A hideout only counts once you have killed <strong>every enemy</strong>. After that you can search the loot: chests, lockboxes and bodies.",
    "A cleared hideout fills up again after a while, so you can do it again later for more loot.",
    "For the compendium you need to discover <strong>6 gangs</strong>. A gang counts as soon as you run into them, for example in an ambush or at their hideout."
  ],
    sources: [
    [
      "rdr2.org (gang hideouts)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-gang-hideouts-guide/"
    ],
    [
      "PowerPyx (100%)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-gang-hideout-locations/"
    ],
    [
      "eXputer",
      "https://exputer.com/guides/all-rd2-gang-hideout-locations/"
    ],
    [
      "GTABase (gangs)",
      "https://gtabase.com/red-dead-redemption-2/gangs"
    ]
  ],
    sections: [
      { type: "cards", id: "hideouts", title: "Hideouts", checkLabel: "<strong>Cleared</strong>", doneText: "✓ cleared",
        items: hideouts.map(([id, name, gang, where, when, counts, tags, tip]) => ({
          id, name, counts, tags: [counts ? "100%" : "does not count", ...tags],
          fields: [["Gang", gang], ["Where", where], ["When", when]], note: tip
        })) },
      { type: "checklist", title: "Gangs (compendium)", fields: ["id", "name", "where"], columns: true,
        groups: [{ id: "gangs", title: "Gangs", items: gangs }] }
    ],
    metrics: {
      done: () => RDR.ratio(RDR.keysOf("hideouts", "hideouts")),
      counted: () => RDR.capped(RDR.ratio(cards().filter(c => c.counts).map(c => c.checks[0].key)), 6),
      gangs: () => RDR.ratio(RDR.keysOf("hideouts", "gangs"))
    },
    meters: [["done", "Hideouts cleared"], ["counted", "For 100% (6 needed)"], ["gangs", "Gangs discovered"]]
  });
})();
