(() => {
  // Ranters, ravers and campaigners (rdr2.org): [name, where and when, tag].
  const characters = [
    ["Agnes Dowd", "The Bayou, 9 PM–3 AM; wait 48 hours between encounters. From chapter 2."],
    ["Anders Helgerson", "Saint Denis, 8 AM–6 PM. From chapter 2."],
    ["Armadillo Town Crier", "Armadillo, 8 AM–7 PM.", "Epilogue"],
    ["Blind Man Cassidy", "Blackwater, Annesburg, Cumberland and Tumbleweed. From chapter 2."],
    ["Cave Hermit", "Caves west of Hanging Dog Ranch; wait 3 in-game days between visits. From chapter 2."],
    ["Chelonian Master", "The cliff where you saved Jamie (<em>We Loved Once and True</em>).", "After the story"],
    ["Captain Russell", "Under the V of New Hanover on the map, all day. From chapter 2."],
    ["Constipated Man", "Valentine hotel, near room 2A. After <em>Polite Society, Valentine Style</em>."],
    ["Dorothea", "Saint Denis, 8 AM–6 PM; more encounters after a full day. From chapter 2."],
    ["Dr. Macintosh", "Annesburg; wait a full day for the next talk. After chapter 2."],
    ["Eugenics Proponent", "Saint Denis, 8 AM–6 PM; later encounters after a day. From chapter 2."],
    ["Giant", "North of O'Creagh's Run, 8 AM–8 PM in clear weather, after studying 30 animal species. From chapter 2."],
    ["Hermit", "A cabin north of Annesburg. From chapter 2."],
    ["Homeless Vet Mickey", "Valentine: 6 encounters 3 days apart, the 7th in the epilogue. From chapter 2."],
    ["Joe Butler", "Outside the general store in Rhodes: 3 encounters 3 days apart, the 4th in the epilogue."],
    ["Jon", "Smithfield's Saloon in Valentine, 12 PM–6 AM. From chapter 2."],
    ["Lillian Powell", "Saint Denis, 9 AM–9 PM: 4 encounters 3 days apart. From chapter 2."],
    ["Mad Preacher", "Rivers southwest of Strawberry, west of Annesburg and west of Valentine; the 4th southwest of Tumbleweed in the epilogue."],
    ["Nicholas Timmins", "Strawberry, 8 AM–8 PM; 3 days between encounters. From chapter 2."],
    ["Poor Joe", "By his tree north of Annesburg: 3 encounters 3 days apart, the 4th in the epilogue."],
    ["Reverend", "Strawberry, 8 AM–7 PM: 2 encounters 24 hours apart. From chapter 2."],
    ["Robot", "The mountain directly above the A of Ambarino on the map. After the stranger mission <em>A Bright Bouncing Boy</em>."],
    ["Sonny", "A cabin southeast of Lakay, Bayou Nwa. From chapter 2."],
    ["Soothsayer", "Between the Bayou and Bluewater Marsh (the spot changes): 15 meetings, 10 in chapter 2 and 5 in the epilogue, 3 days apart."],
    ["Sun Worshiper", "Hennigan's Stead, Cholla Springs, Rio Bravo and Gaptooth Ridge: 12 meetings, 3 days apart.", "Epilogue"],
    ["Thomas Downes", "Opposite the stables in Valentine: 2 encounters, before <em>Sodom? Back to Gomorrah</em> (chapter 3)."],
    ["Timothy Donahue", "Near the barber in Saint Denis: buy his $50 book, then wait 2 days. From chapter 2."],
    ["Tumbleweed Sheriff", "Tumbleweed: 3 encounters a day apart.", "Epilogue"]
  ];
  const keys = () => RDR.keysOf("characters", "people");
  RDR.list({
    id: "characters", title: "Special characters", nav: "Characters", order: 109, group: "The world",
    sub: "Red Dead Redemption 2 (story mode): the ranters, ravers and campaigners you can meet, with where and when.",
    blurb: "The 28 ranters, ravers and campaigners, with where and when to meet them. 5 are needed for 100%.",
    filter: "Hide characters you have met",
    tips: [
      "These recurring characters show up as a white dot on your minimap, often talking loudly. For 100% you need to interact with <strong>5</strong> of them; that count goes automatically to the <a href=\"#/hundred\">100%</a> page.",
      "Many have several meetings with a few in-game days in between, and some finish their story only in the epilogue. Check one off as soon as you have met them once.",
      "The Robot belongs to <em>A Bright Bouncing Boy</em> (see <a href=\"#/strangers\">Strangers</a>) and gives the trophy <em>Artificial Intelligence</em>."
    ],
    sources: [
      ["rdr2.org (special characters)", "https://www.rdr2.org/guides/special-characters-guide/"],
      ["PowerPyx (100%)", "https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/"]
    ],
    sections: [{ type: "checklist", columns: true, groups: [{ id: "people", title: "Characters (28)", items: characters }] }],
    metrics: {
      met: () => RDR.ratio(keys()),
      counted: () => RDR.capped(RDR.ratio(keys()), 5)
    },
    meters: [["met", "Characters met"], ["counted", "For 100% (5 needed)"]]
  });
})();
