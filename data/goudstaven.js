// Goudstaven: vaste vindplaatsen plus de schattenjachten uit de schatkaarten.
(() => {
  const PRICE = 500;
  // [id, naam, aantal, waar, wanneer, tags]
  const fixed = [
    ["train",      "Ontspoorde trein",       2, "Een rechtopstaande treinwagon bij Cotorra Springs, in het noorden van Ambarino (rdr2.org noemt Granite Pass)", "Vanaf hoofdstuk 2", []],
    ["statues",    "Strange Statues",        3, "In een grot ten noordoosten van Bacchus Station (Ambarino). Los het raadsel van de beelden op. Volgens GameSkinny druk je op de beelden met de priemgetallen 2, 3, 5 en 7.", "Vanaf hoofdstuk 2", ["Puzzel"]],
    ["limpany",    "Sheriffkantoor van Limpany", 1, "Het afgebrande dorp Limpany (New Hanover). In een la of kistje achter het bureau, links van de ingang.", "Vanaf hoofdstuk 2", []],
    ["braithwaite","Braithwaite Manor",      1, "Het afgebrande hoofdgebouw, ten zuiden van Rhodes. In een kist naast het lichaam van Catherine Braithwaite.", "Vanaf hoofdstuk 4, nadat het landhuis is afgebrand", []]
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
    id: "gold", title: "Goudstaven", order: 200,
    heading: "Goudstaven Checklist", sub: "Red Dead Redemption 2 (story mode): alle goudstaven, uit schattenjachten, een puzzel en vaste vindplaatsen.", blurb: "Alle goudstaven in story mode: uit schattenjachten, een puzzel en vaste vindplaatsen. $500 per staaf bij een Fence.",
    filter: "Verberg gevonden vindplaatsen",
    tips: [
    "Een goudstaaf is <strong>$500</strong> waard. Het is gestolen waar, dus je verkoopt hem alleen bij een <strong>Fence</strong>, bijvoorbeeld in Saint Denis, Rhodes, Emerald Ranch of Van Horn.",
    "Veel goud ligt al in hoofdstuk 2 binnen bereik. Daarmee betaal je makkelijk kampupgrades, wapens en een goed paard.",
    "De schattenjachten tellen hier <strong>automatisch</strong> mee zodra je de schat hebt afgevinkt op <a href=\"#/treasure\">Schatkaarten</a>. De vaste vindplaatsen vink je hieronder zelf af.",
    "<em>Le Trésor des Morts</em> zit alleen in de Special/Ultimate Edition of was een pre-orderbonus. <em>Landmarks of Riches</em> kwam met de pc-versie en later ook op PS4 en Xbox One. Mogelijk heb je ze dus niet allebei."
  ],
    sources: [
    [
      "GIGA (alle goudstaven)",
      "https://www.giga.de/tipp/red-dead-redemption-2-alle-22-goldbarren-fundorte/"
    ],
    [
      "rdr2.org (goud verkopen)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-finding-and-selling-gold-bars-guide/"
    ],
    [
      "GameSkinny (vindplaatsen)",
      "https://www.gameskinny.com/tips/red-dead-redemption-2-gold-bar-locations-guide/"
    ],
    [
      "rdr2.org (Landmarks of Riches)",
      "https://www.rdr2.org/guides/landmark-of-riches-treasure-hunt/"
    ],
    [
      "PowerPyx (schatkaarten)",
      "https://www.powerpyx.com/red-dead-redemption-2-treasure-map-locations-solutions/"
    ]
  ],
    sections: () => [
      { type: "table", id: "hunts", title: "Uit schattenjachten", check: false,
        rows: hunts().map(h => ({ id: h.id, name: h.title, h })),
        rowDone: r => found(r.h),
        columns: [["Schattenjacht", r => `<a href="#/treasure">${r.name}</a>`], ["Staven", r => r.h.gold, "num"],
          ["Wanneer", r => r.h.when, "small"],
          ["Status", r => found(r.h) ? "✓ gevonden" : `${RDR.count(r.h.keys)}/${r.h.items.length} stappen`, "small"]] },
      { type: "cards", id: "fixed", title: "Vaste vindplaatsen", checkLabel: "<strong>Gevonden</strong>",
        items: fixed.map(([id, name, n, where, when, tags]) => ({ id, name, bars: n, tags: tags.length ? tags : null, desc: where, note: when })),
        status: it => `${it.bars} ${it.bars === 1 ? "staaf" : "staven"}` }
    ],
    metrics: {
      places: () => ({
        have: RDR.count(RDR.keysOf("gold", "fixed")) + hunts().filter(found).length,
        total: RDR.keysOf("gold", "fixed").length + hunts().length
      }),
      bars,
      value: () => { const b = bars(); return { have: b.have * PRICE, total: b.total * PRICE }; }
    },
    meters: [["places", "Vindplaatsen"], ["bars", "Goudstaven gevonden"], ["value", "Waarde bij de Fence ($)"]],
    v1: { store: "rdr2-gold-v1", map: k => k.startsWith("f:") ? `gold.fixed.${k.slice(2)}` : null }
  });
})();
