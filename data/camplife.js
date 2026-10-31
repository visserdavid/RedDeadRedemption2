(() => {
  // Camp ledger upgrades (rdr2.org): [name, where, price, note].
  const upgrades = [
    ["Lodging Tier 2", "Lodging", 220, "Gang members donate more to the tithing box. Buy this one first."],
    ["Lodging Tier 3", "Lodging", 325, "Unlocks fast travel from camp."],
    ["Lodging Tier 4", "Lodging", 300, "Improves the mood in camp."],
    ["Improve Our Offense", "Arthur's wagon (ammo)", 60, ""],
    ["Some Real Firepower", "Arthur's wagon (ammo)", 90, ""],
    ["Let's Have Some Fun", "Arthur's wagon (ammo)", 110, "Special ammo."],
    ["Less Bland", "Pearson's wagon (provisions)", 30, ""],
    ["Some Real Variety", "Pearson's wagon (provisions)", 45, ""],
    ["Treat Ourselves", "Pearson's wagon (provisions)", 55, ""],
    ["Leather Working Tools", "Pearson's wagon", 225, "Needed for the <a href=\"#/satchels\">satchels</a> and <a href=\"#/camp\">camp decorations</a>; the same checkbox as there."],
    ["Sharpen The Senses", "Strauss' wagon (medicine)", 30, ""],
    ["Something With Kick", "Strauss' wagon (medicine)", 50, ""],
    ["The Good Stuff", "Strauss' wagon (medicine)", 75, ""],
    ["Chicken Coop", "Camp", 175, "Eating the camp stew also restores Dead Eye."],
    ["Horse Station", "Camp", 300, "Fetch your stabled horses at camp."],
    ["Camp Boat", "Camp", 360, "Only from chapter 3, in the camp by the water."]
  ];
  // Item requests from gang members (rdr2.org): [member, item, reward, tag].
  const requests = [
    ["Abigail Roberts", "$5", "Small Honor boost"],
    ["Bill Williamson", "Hair Pomade", "Repeater ammo"],
    ["Charles Smith", "Moonshine", "Arrows or a Horse Reviver"],
    ["Charles Smith", "Oleander", "Arrows or a Horse Reviver"],
    ["Charles Smith", "Eagle Feather", "Arrows or a Horse Reviver", "Epilogue"],
    ["Dutch van der Linde", "Pipe", "Spurs"],
    ["Hosea Matthews", "American Ginseng (x2)", "Potent Medicine"],
    ["Hosea Matthews", "Shrew in the Fog (book)", "Predator Bait"],
    ["Jack Marston", "Abigail's Thimble", "A drawing"],
    ["Jack Marston", "Penny Dreadful comic book", "Chocolate bar"],
    ["Javier Escuella", "Oleander", "Poison Throwing Knives"],
    ["Kieran Duffy", "Burdock Root (x2)", "Horse Medicine"],
    ["Lenny Summers", "Silver Pocket Watch", "Dynamite"],
    ["Mary-Beth Gaskill", "Fountain Pen", "A ring"],
    ["Molly O'Shea", "Pocket Mirror", "Cigar"],
    ["Simon Pearson", "Naval Compass", "Rum and Nutritious Stew"],
    ["Simon Pearson", "Rabbit", "Rum and Nutritious Stew"],
    ["Sadie Adler", "Harmonica", "Gun Oil"],
    ["Sean MacGuire", "Kentucky Bourbon", "Fire Bottle"],
    ["Susan Grimshaw", "Oregano (x2)", "Potent Miracle Tonic"],
    ["Tilly Jackson", "Necklace", "Medicine"],
    ["Uncle", "Medicinal Cream", "A set of clothes", "Epilogue"]
  ];
  RDR.list({
    id: "camplife", title: "Camp upgrades & requests", nav: "Camp life", order: 22, group: "Hunting & camp",
    sub: "Red Dead Redemption 2 (story mode): every camp ledger upgrade and every item request from the gang.",
    blurb: "The 16 camp ledger upgrades and the 22 item requests from gang members. Mostly missable after chapter 4.",
    filter: "Hide what is already done",
    tips: [
      "Upgrades are bought from the <strong>ledger</strong> in Dutch's tent with the gang's money, so donate to the tithing box first. From the second part of the epilogue the ledger is gone.",
      "<strong>Item requests:</strong> talk to gang members in camp, usually between 8:00 and 20:00. Some only ask after a related story moment; if nothing shows up, sleep and come back later. Finding the item is not enough: hand it over while the request is open.",
      "Five delivered requests give the trophy <em>Errand Boy</em>, but only during chapters 2 to 4 (PowerPyx). Apart from Charles and Uncle in the epilogue, the requests are gone after chapter 4.",
      "Donate $250 yourself to the tithing box for the trophy <em>Give to the Poor</em>; the box disappears after chapter 4. See <a href=\"#/trophies\">Trophies</a>."
    ],
    sources: [
      ["rdr2.org (camp upgrades)", "https://www.rdr2.org/guides/camp-upgrades-guide/"],
      ["PowerPyx (camp upgrades)", "https://powerpyx.com/red-dead-redemption-2-how-to-upgrade-camp"],
      ["rdr2.org (item requests)", "https://www.rdr2.org/guides/item-requests-guide/"],
      ["PowerPyx (Errand Boy timing)", "https://powerpyx.com/red-dead-redemption-2-trophy-guide-roadmap"]
    ],
    sections: [
      { type: "table", id: "ledger", title: "Camp upgrades (ledger)",
        rows: upgrades.map(([name, where, price, note]) => ({ name, where, price, note, key: name === "Leather Working Tools" ? "satchels.leather" : undefined })),
        columns: [["Upgrade", r => r.name], ["Where", r => r.where, "small muted"], ["Price", r => `$${r.price}`, "num"], ["Note", r => r.note || "–", "small"]] },
      { type: "checklist", title: "Item requests", columns: true, groups: [{ id: "requests", title: "Gang members",
        items: requests.map(([who, item, reward, tag]) => ({ id: RDR.slug(`${who} ${item}`), name: `${who}: ${item}`, where: `Reward: ${reward}`, tag })) }] }
    ],
    metrics: {
      upgrades: () => RDR.ratio(RDR.keysOf("camplife", "ledger")),
      requests: () => RDR.ratio(RDR.keysOf("camplife", "requests"))
    },
    meters: [["upgrades", "Upgrades bought"], ["requests", "Requests delivered"]]
  });
})();
