(() => {
  const keys = () => RDR.keysOf("shacks", "shacks");
  RDR.list({
    id: "shacks", title: "Shacks", order: 107, group: "The world",
    heading: "Shacks Checklist",
    sub: "Red Dead Redemption 2 (story mode): the 19 abandoned shacks, each with its own (often grim) story and some loot.",
    blurb: "The 19 abandoned shacks with their own story and loot. 5 are needed for 100%.",
    filter: "Hide shacks you have already visited",
    tips: [
      "A shack is a remote cabin with its own story: you find notes, bodies or other clues about what happened there, and usually some loot (cigarette cards, jewelry, provisions).",
      "For 100% you need <strong>5</strong>; you can see your count in the game under <em>Progress → Total Completion → Shacks</em>. According to GamingBolt a shack counts as soon as you go inside; PowerPyx names the first five the game leads you to. The count here goes automatically to the <a href=\"#/hundred\">100%</a> page.",
      "None of the shacks are missable. Three shacks are only built after the story, so you visit them in the epilogue.",
      "Search cupboards, drawers and chests: many shacks contain a <a href=\"#/cigcards\">cigarette card</a>."
    ],
    sources: [
      ["SegmentNext (all 19 shacks)", "https://segmentnext.com/red-dead-redemption-2-shacks-locations-guide/"],
      ["GosuNoob (stories)", "https://www.gosunoob.com/red-dead-redemption-2/shacks-locations-map/"],
      ["Game Rant (notable shacks)", "https://gamerant.com/red-dead-redemption-2-best-shacks-locations/"],
      ["PowerPyx (count and 100%)", "https://www.powerpyx.com/red-dead-redemption-2-all-shack-locations/"],
      ["GamingBolt (what counts)", "https://gamingbolt.com/red-dead-redemption-2-guide-shacks-for-100-completion-and-fence-locations"]
    ],
    sections: [{ type: "checklist", columns: true, groups: [{ id: "shacks", title: "Shacks (19)", items: [
      ["Dormin Crest", "In the icy northwest, west of Spider Gorge. Cigarette card and provisions."],
      ["Fairvale Shanty", "East of Calumet Ravine, north of O'Creagh's Run. Bodies, a gold nugget, a platinum pocket watch and jewelry."],
      ["Snowfield", "South of Dormin Crest, west of Lake Isabella. A locked drawer holds a note with a cheat code."],
      ["Dodd's Bluff", "South of Window Rock, by the river. Two bloodied bodies, a crowbar and the gold nugget they fought over."],
      ["Clawson's Rest", "West of Valentine, past the Dakota River and the railway. Several bodies, a dime novel and cigarette cards."],
      ["Martha's Swain", "Between Annesburg and Moonstone Pond, near Three Sisters. Provisions and jewelry."],
      ["Hani's Bethel", "Directly north of Emerald Ranch, by a small lake. Beds with human remains and the note <em>Mysterious Sermon</em>."],
      ["Vetter's Echo", "Big Valley, east of Pronghorn Ranch. Cigarette card and money. Watch out for a grizzly."],
      ["Shepherd's Rise", "Southeast of Wallace Station, by the railway. Only built after the story.", "Epilogue"],
      ["Ridge View", "East of Emerald Station. Full of herbs. Only built after the story.", "Epilogue"],
      ["Osman Grove", "Southwest of Ridge View. Bodies, a book and provisions."],
      ["Lenora View", "Blue cottage on the eastern slope of Mount Shann, north of Strawberry. Flowers and a letter from a man going to collect his new wife."],
      ["Old Trail Rise", "The Heartlands, east of Dewberry Creek. Burned down; the cellar holds Valerian Root, a cigarette card and money."],
      ["Robard Farm", "North of Rhodes. Cigarette card, money and provisions."],
      ["Bayall Edge", "In the west of the Bayou, by the Kamassa River. One of the creepiest: rhymes and stories about Arthur on the walls."],
      ["Bear Claw Camp", "Southwest of Blackwater. Several buildings; the dry well holds a small box of money."],
      ["Argil Rise", "Southeast of Rhodes. Only built after the story.", "Epilogue"],
      ["Crawdad Willies", "East of Shady Belle. A trail of blood leads to escaped prisoners."],
      ["Old Harry Fen", "The southernmost tip of Lemoyne, south of Braithwaite Manor and Bolger Glade. A photo of an enslaved family and a newspaper clipping about a reward for a runaway slave."]
    ] }] }],
    metrics: {
      visited: () => RDR.ratio(keys()),
      counted: () => RDR.capped(RDR.ratio(keys()), 5)
    },
    meters: [["visited", "Shacks visited"], ["counted", "For 100% (5 needed)"]]
  });
})();
