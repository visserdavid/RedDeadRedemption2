(() => {
  const hunts = () => RDR.groupsOf("treasure");
  const found = h => !!RDR.get(h.keys[h.keys.length - 1]);
  RDR.list({
    id: "treasure", title: "Treasure maps", nav: "Treasure", order: 180, group: "Challenges & treasure",
    heading: "Treasure Maps Checklist", sub: "Red Dead Redemption 2 (story mode): the treasure hunts with gold bars, step by step.", blurb: "The treasure hunts with gold bars, step by step.",
    tips: [
    "Each map is a drawing of a place, with a short text. At that place you find the next map, and at the last one lies the treasure.",
    "You sell a gold bar for <strong>$500</strong> at a Fence. All gold bars, including those outside the treasure hunts, are on <a href=\"#/gold\">Gold bars</a>. They already help a lot in chapter 2, for example for camp upgrades and weapons.",
    "One treasure hunt is enough for 100%. These three hunts (Jack Hall Gang, Poisonous Trail and High Stakes) also give you all 10 <a href=\"#/explorer\">Explorer ranks</a>."
  ],
    sources: [
    [
      "PowerPyx (all treasure maps)",
      "https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/"
    ],
    [
      "rdr2.org (Jack Hall Gang)",
      "https://www.rdr2.org/guides/jack-hall-gang-treasure-hunt-guide/"
    ],
    [
      "Push Square (High Stakes)",
      "https://pushsquare.com/guides/red-dead-redemption-2-all-high-stakes-treasure-map-locations"
    ]
  ],
    sections: [{
      type: "checklist", groupHeadings: true, goalLast: true,
      // The last step of each hunt is the treasure itself.
      groups: [
    { id: "jackhall", title: "Jack Hall Gang", gold: 2, when: "From chapter 2",
      intro: "Reward: 2 gold bars ($1000).",
      items: [
        ["Map 1 bought", "From Maximo at Flatneck Station (stranger mission <em>All That Glitters</em>), for $10, or $5 if you haggle"],
        ["Map 2 found at Caliban's Seat", "Follow the ledges on the right-hand side to a crack in the rock face"],
        ["Map 3 found at Cotorra Springs", "Piles of stones in a rectangle between the geysers. Dig under the middle pile."],
        ["Treasure found at O'Creagh's Run", "On a small island in the lake, under a small rock"]
      ] },
    { id: "poison", title: "Poisonous Trail", gold: 4, when: "From chapter 2",
      intro: "Reward: 4 gold bars ($2000).",
      items: [
        ["Map 1 found in Cairn Lodge", "In the snowy northwest. The map is in a small box under the bed."],
        ["Map 2 found", "A hill with a fallen tree and a dead tree still standing. The map is in the dead tree."],
        ["Map 3 found", "On top of a hill with a rock formation, in a hole in the middle"],
        ["Treasure found", "In a cave behind the waterfall at Elysian Pool. Bring a lantern, keep right and look for the hidden passages."]
      ] },
    { id: "highstakes", title: "High Stakes", gold: 3, when: "From chapter 3",
      intro: "Reward: 3 gold bars ($1500).",
      items: [
        ["Map 1 from the treasure hunter", "A random encounter with a treasure hunter. Catch him with your lasso and hogtie him to get the map."],
        ["Map 2 found at Cumberland Falls", "Behind the waterfall, along the tree trunk on the right-hand side"],
        ["Map 3 found at Barrow Lagoon", "A broken tree stump among the rocks on a small hill"],
        ["Treasure found at Bacchus Station", "Climb down the rock plateaus above the river until you reach a crack in the rocks"]
      ] },
    { id: "tresor", title: "Le Trésor des Morts", gold: 6, when: "Special/Ultimate Edition or pre-order bonus only",
      intro: "Reward: 6 gold bars ($3000). PowerPyx says 5, other guides say 6.",
      items: [
        ["Map 1 found", "In the only building among the ruins that did not burn down, next to a body"],
        ["Map 2 found under the Saint Denis rail yard", "In the underground passage, in the wall next to a wooden crate"],
        ["Map 3 found in the Saint Denis cemetery", "In a building in the cemetery"],
        ["Treasure found", "The gold bars are in the cemetery"]
      ] },
    { id: "landmarks", title: "Landmarks of Riches", gold: 6, when: "From chapter 2. Came with the PC version, later also on PS4 and Xbox One.",
      intro: "Reward: 6 gold bars ($3000); together with Le Trésor des Morts the biggest treasure.",
      items: [
        ["Map 1 found at the Obelisk", "Northwest of Strawberry (West Elizabeth). Inspect the picture on the back of the obelisk."],
        ["Map 2 found at the Tiny Church", "Bayou Nwa, north of Saint Denis. In the small bell tower on the roof."],
        ["Map 3 found at the Mysterious Hill Home", "Grizzlies East (Ambarino). Through a broken window with loose planks on the roof."],
        ["Map 4 found at Bolger Glade", "Scarlett Meadows (Lemoyne). In a hole at the bottom of a tree near a broken cannon."],
        ["Treasure found on Mount Shann", "At the large sundial on top of Mount Shann (West Elizabeth). Inspect the marked stone."]
      ] },
    { id: "elemental", title: "Elemental Trail", gold: 0, when: "Epilogue. Came with the PC version.",
      intro: "Reward: the <a href=\"#/trinkets\">Crow Beak Trinket</a> (+10% ammo when looting).",
      items: [
        ["Map 1 found", "In the far west of New Austin, by the Sea of Coronado. Shoot the rope of a hanged body and search it."],
        ["Map 2 found", "A burned-down house east of Lake Don Julio, south of Armadillo. In the chimney."],
        ["Map 3 found", "The old aqueduct at Benedict Point, south of Tumbleweed. Between two planks."],
        ["Treasure found at Coot's Chapel", "In the graveyard to the left of the church, southeast of Armadillo. Inspect the stone next to a grave with a wooden cross."]
      ] },
    { id: "mended", title: "Mended Treasure Map (Otis Miller)", gold: 0, when: "Pieces from chapter 2, treasure only in the epilogue",
      intro: "Reward: Otis Miller's Revolver and a set of photographs. No gold, but a unique revolver.",
      items: [
        ["Map piece 1 found", "In a drawer in a wooden cabin at the start of Little Creek River"],
        ["Map piece 2 found", "In a drawer in a house at Manito Glade. Together the pieces form the Mended Treasure Map."],
        ["Treasure found", "In a small cave west of Twin Rocks (New Austin, epilogue)"]
      ] },
    { id: "chick", title: "Chick's Treasure Map", gold: 0, when: "Chapter 2 (mission <em>Money Lending and Other Sins</em>)",
      intro: "Reward: $35. <strong>Missable:</strong> you have to get there before Chick Matthews.",
      items: [
        ["Map received", "During the mission <em>Money Lending and Other Sins</em>"],
        ["Treasure found", "Go there right away, before Chick arrives"]
      ] }
  ].map(h => ({ ...h, meta: h.when })),
      status: (h, have) => ({ done: found(h), text: found(h) ? "✓ found" : `${have}/${h.items.length} steps` })
    }],
    found,
    metrics: {
      steps: () => RDR.ratio(hunts().flatMap(h => h.keys)),
      found: () => ({ have: hunts().filter(found).length, total: hunts().length }),
      gold: () => ({ have: RDR.sum(hunts().filter(found), h => h.gold), total: RDR.sum(hunts(), h => h.gold) })
    },
    meters: [["steps", "Steps done"], ["found", "Treasures found"], ["gold", "Gold bars"]]
  });
})();
