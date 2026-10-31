// Gold bars: fixed locations plus the treasure hunts from the treasure maps.
(() => {
  const PRICE = 500;
  // [id, name, count, where, when, tags]
  const fixed = [
    ["train",      "Derailed train",         2, "An upright train car at Cotorra Springs, in northern Ambarino (rdr2.org says Granite Pass)", "From chapter 2", []],
    ["statues",    "Strange Statues",        3, "In a cave northeast of Bacchus Station (Ambarino). Solve the statue puzzle. According to GameSkinny you press the statues with the prime numbers 2, 3, 5 and 7.", "From chapter 2", ["Puzzle"]],
    ["limpany",    "Limpany sheriff's office", 1, "The burned-down town of Limpany (New Hanover). In a drawer or small box behind the desk, left of the entrance.", "From chapter 2", []],
    ["braithwaite","Braithwaite Manor",      1, "The burned-down main house, south of Rhodes. In a chest next to Catherine Braithwaite's body.", "From chapter 4, after the manor has burned down", []]
  ];
  const hunts = () => RDR.groupsOf("treasure").filter(h => h.gold > 0);
  const found = h => RDR.lists.treasure.found(h);
  const bars = () => {
    const f = RDR.itemsOf("gold", "fixed");
    return {
      have: RDR.sum(f.filter(c => RDR.get(c.checks[0].key)), c => c.bars) + RDR.sum(hunts().filter(found), h => h.gold),
      total: RDR.sum(f, c => c.bars) + RDR.sum(hunts(), h => h.gold)
    };
  };

  RDR.list({
    id: "gold", title: "Gold bars", nav: "Gold", order: 200, group: "Challenges & treasure",
    sub: "Red Dead Redemption 2 (story mode): every gold bar, from treasure hunts, a puzzle and fixed locations.", blurb: "Every gold bar in story mode: from treasure hunts, a puzzle and fixed locations. $500 per bar at a Fence.",
    filter: "Hide locations you have found",
    tips: [
    "A gold bar is worth <strong>$500</strong>. It is stolen goods, so you can only sell it to a <strong>Fence</strong>, for example in Saint Denis, Rhodes, Emerald Ranch or Van Horn.",
    "A lot of gold is already within reach in chapter 2. It easily pays for camp upgrades, weapons and a good horse.",
    "The treasure hunts count here <strong>automatically</strong> as soon as you have checked off the treasure on <a href=\"#/treasure\">Treasure maps</a>. You check off the fixed locations below yourself.",
    "<em>Le Trésor des Morts</em> is only in the Special/Ultimate Edition or was a pre-order bonus. <em>Landmarks of Riches</em> came with the PC version and later also on PS4 and Xbox One. So you may not have both."
  ],
    sources: [
    [
      "GIGA (all gold bars, German)",
      "https://www.giga.de/tipp/red-dead-redemption-2-alle-22-goldbarren-fundorte/"
    ],
    [
      "rdr2.org (selling gold)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-finding-and-selling-gold-bars-guide/"
    ],
    [
      "GameSkinny (locations)",
      "https://www.gameskinny.com/tips/red-dead-redemption-2-gold-bar-locations-guide/"
    ],
    [
      "rdr2.org (Landmarks of Riches)",
      "https://www.rdr2.org/guides/landmark-of-riches-treasure-hunt/"
    ],
    [
      "PowerPyx (treasure maps)",
      "https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/"
    ]
  ],
    sections: () => [
      { type: "table", id: "hunts", title: "From treasure hunts", check: false,
        rows: hunts().map(h => ({ id: h.id, name: h.title, h })),
        rowDone: r => found(r.h),
        columns: [["Treasure hunt", r => `<a href="#/treasure">${r.name}</a>`], ["Bars", r => r.h.gold, "num"],
          ["When", r => r.h.meta, "small"],
          ["Status", r => found(r.h) ? "✓ found" : `${RDR.count(r.h.keys)}/${r.h.items.length} steps`, "small"]] },
      { type: "cards", id: "fixed", title: "Fixed locations", checkLabel: "<strong>Found</strong>",
        items: fixed.map(([id, name, n, where, when, tags]) => ({ id, name, bars: n, tags: tags.length ? tags : null, desc: where, note: when })),
        status: it => `${it.bars} ${it.bars === 1 ? "bar" : "bars"}` }
    ],
    metrics: {
      places: () => ({
        have: RDR.count(RDR.keysOf("gold", "fixed")) + hunts().filter(found).length,
        total: RDR.keysOf("gold", "fixed").length + hunts().length
      }),
      bars,
      value: () => { const b = bars(); return { have: b.have * PRICE, total: b.total * PRICE }; }
    },
    meters: [["places", "Locations"], ["bars", "Gold bars found"], ["value", "Value at the Fence ($)"]]
  });
})();
