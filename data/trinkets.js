// Trinkets and talismans. The "crafted" checkboxes use the same keys as the Legendary animals page.
(() => {
  // Extra ingredients for the talismans, with where to find them.
  const INGREDIENTS = {
    "Silver Chain Bracelet":       "Random loot from bodies and small chests. Tip: make a save and reload it if you cannot find one.",
    "Quartz Chunk":                "Reward from Deborah MacGuiness once you send in the first dinosaur bone location (see <a href=\"#/collectibles\">Collectibles</a>).",
    "Gold Earring":                "Loot from bodies, and sometimes found in drawers.",
    "Cobalt Petrified Wood":       "In a broken-down stagecoach under a cliff at Lake Isabella (Grizzlies West).",
    "Vintage Civil War Handcuffs": "Reward for your first complete set of <a href=\"#/cigcards\">cigarette cards</a>.",
    "Gold Jointed Bracelet":       "Loot from bodies, and found in chests and lockboxes around the map.",
    "Abalone Shell Fragment":      "There is only one! In a boarded-up house on the northern edge of Rhodes, on the workbench in the southern room.",
    "Silver Earring":              "Loot from bodies. If you loot a lot, you probably already have one.",
    "Old Brass Compass":           "At Francis Sinclair's cabin, after all 10 <a href=\"#/collectibles\">rock carvings</a>."
  };
  const ingKey = name => `trinkets.ingredients.${RDR.slug(name)}`;
  // Items you do not craft at the Fence, but receive directly.
  const GIFTS = ["owl", "iguana", "eagle", "crow"];
  const EXTRA_INGREDIENTS = { raven: ["Old Brass Compass"] };

  const L = () => RDR.lists.legendary;
  const all = () => [
    ...L().legends.map(l => ({
      id: l.id, name: l.fence.name, type: l.fence.type, effect: l.fence.effect, legend: l,
      part: "Legendary " + l.fence.name.replace(/ (Trinket|Talisman)$/, ""),
      extras: l.fence.extra ? l.fence.extra.split(" + ") : [], key: L().animalKey(l.id, "fence")
    })),
    ...L().extras.map(x => ({
      id: x.id, name: x.name, type: x.type, effect: x.effect, how: x.how, gift: GIFTS.includes(x.id),
      extras: EXTRA_INGREDIENTS[x.id] || [], key: `legendary.extras.${x.id}`
    }))
  ];
  const card = t => ({
    id: t.id, name: t.name, t, note: t.effect,
    desc: t.legend ? `${t.part}<span class="where" data-part="${t.legend.id}"></span>` : !t.extras.length ? t.how : "",
    checks: [
      ...t.extras.map(n => ({ id: RDR.slug(n), label: `${n}<span class="where">${INGREDIENTS[n]}</span>`, key: ingKey(n) })),
      { id: "made", label: `<strong>${t.gift ? "Owned" : "Crafted at the Fence"}</strong>`, key: t.key }
    ]
  });
  const status = (it, done) => {
    const t = it.t;
    if (done) return "✓ done";
    if (t.gift || (t.how && !t.extras.length)) return "";
    const partOk = !t.legend || !!RDR.get(L().animalKey(t.legend.id, "kill"));
    return partOk && t.extras.every(n => RDR.get(ingKey(n))) ? "ready to craft" : "ingredients needed";
  };
  const of = type => all().filter(t => t.type === type).map(t => t.key);

  RDR.list({
    id: "trinkets", title: "Trinkets & talismans", nav: "Trinkets", order: 40, group: "Hunting & camp",
    heading: "Trinkets &amp; Talismans Checklist", sub: "Red Dead Redemption 2 (story mode): all 16 trinkets and 6 talismans, from the Fence and elsewhere, with their ingredients and effects.", blurb: "All 16 trinkets and 6 talismans, with their ingredients and effects.",
    filter: "Hide what you already have",
    tips: [
    "A <strong>Fence</strong> (for example at Emerald Ranch, in Saint Denis, Lagras or Van Horn) crafts trinkets and talismans in his crafting menu. You pay a small fee plus the ingredients.",
    "They work <strong>immediately and permanently</strong> once you own them. You do not need to equip them.",
    "Most parts come from <a href=\"#/legendary\">legendary animals</a>. As soon as you have killed and skinned an animal, it shows up here automatically. A \"crafted\" check here also appears on that page, and vice versa.",
    "Besides the animal part, talismans also need <strong>jewelry or rare items</strong>. Where to find them is listed at the bottom."
  ],
    sources: [
    [
      "PowerPyx (trinkets)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-trinkets/"
    ],
    [
      "Shacknews (trinkets and talismans)",
      "https://www.shacknews.com/article/108291/all-talismans-and-trinkets-in-red-dead-redemption-2"
    ],
    [
      "ProdigyGamers (talismans)",
      "https://prodigygamers.com/2018/10/29/red-dead-redemption-2-how-to-get-all-six-talismans"
    ],
    [
      "rdr2.org (Abalone Shell Fragment)",
      "https://www.rdr2.org/guides/abalone-shell-fragment-guide/"
    ],
    [
      "Hold To Reset (recipes)",
      "https://holdtoreset.com/fence-trinkets-and-talismans-in-red-dead-redemption-2/"
    ]
  ],
    sections: () => [
      { type: "cards", id: "talismans", title: "Talismans", status, items: all().filter(t => t.type === "talisman").map(card) },
      { type: "cards", id: "fromlegends", title: "Trinkets from legendary animals", status,
        items: all().filter(t => t.type === "trinket" && t.legend).map(card) },
      { type: "cards", id: "others", title: "Other trinkets", status, items: all().filter(t => t.type === "trinket" && !t.legend).map(card) },
      { type: "table", id: "ingredients", title: "Where to find the extra ingredients",
        rows: Object.entries(INGREDIENTS).map(([name, where]) => ({ id: RDR.slug(name), name, where, key: ingKey(name) })),
        columns: [["Ingredient", r => r.name], ["Where", r => r.where, "small"],
          ["For", r => all().filter(t => t.extras.includes(r.name)).map(t => t.name.replace(/ (Trinket|Talisman)$/, "")).join(", "), "small muted"]] }
    ],
    // Whether the part from the legendary animal is already in hand.
    refresh: view => view.querySelectorAll("[data-part]").forEach(el => {
      const l = L().legends.find(x => x.id === el.dataset.part);
      el.innerHTML = RDR.get(L().animalKey(l.id, "kill")) ? "✓ owned (animal killed)"
        : `From the ${l.name}: not killed yet, see <a href="#/legendary">Legendary animals</a>`;
    }),
    metrics: {
      trinkets: () => RDR.ratio(of("trinket")),
      talismans: () => RDR.ratio(of("talisman")),
      ingredients: () => RDR.ratio(Object.keys(INGREDIENTS).map(ingKey))
    },
    meters: [["trinkets", "Trinkets crafted"], ["talismans", "Talismans crafted"], ["ingredients", "Extra ingredients"]]
  });
})();
