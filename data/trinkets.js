// Trinkets en talismannen. De vinkjes "gemaakt" zijn dezelfde sleutels als op de pagina Legendarische dieren.
(() => {
  // Extra ingrediënten voor de talismannen, met vindplaats.
  const INGREDIENTS = {
    "Silver Chain Bracelet":       "Willekeurige buit van lijken en uit kistjes. Tip: maak een save en laad die opnieuw als je hem niet vindt.",
    "Quartz Chunk":                "Beloning van Deborah MacGuiness zodra je de eerste dinosaurusbot-locatie opstuurt (zie <a href=\"#/collectibles\">Verzamelobjecten</a>).",
    "Gold Earring":                "Buit van lijken, en soms te vinden in lades.",
    "Cobalt Petrified Wood":       "In een kapotte koets onder een rotswand bij Lake Isabella (Grizzlies West).",
    "Vintage Civil War Handcuffs": "Beloning voor je eerste complete set <a href=\"#/cigcards\">sigarettenkaarten</a>.",
    "Gold Jointed Bracelet":       "Buit van lijken, en te vinden in kistjes en lockboxes op de kaart.",
    "Abalone Shell Fragment":      "Er bestaat er maar één! In een dichtgetimmerd huis aan de noordrand van Rhodes, op de werkbank in de zuidelijke kamer.",
    "Silver Earring":              "Buit van lijken. Plunder je vaak, dan heb je er waarschijnlijk al een.",
    "Old Brass Compass":           "Bij de hut van Francis Sinclair, na alle 10 <a href=\"#/collectibles\">rotstekeningen</a>."
  };
  const ingKey = name => `trinkets.ingredients.${RDR.slug(name)}`;
  // Items die je niet bij de Fence maakt, maar direct krijgt.
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
      { id: "made", label: `<strong>${t.gift ? "In bezit" : "Gemaakt bij de Fence"}</strong>`, key: t.key }
    ]
  });
  const status = (it, done) => {
    const t = it.t;
    if (done) return "✓ klaar";
    if (t.gift || (t.how && !t.extras.length)) return "";
    const partOk = !t.legend || !!RDR.get(L().animalKey(t.legend.id, "kill"));
    return partOk && t.extras.every(n => RDR.get(ingKey(n))) ? "klaar om te maken" : "ingrediënten nodig";
  };
  const of = type => all().filter(t => t.type === type).map(t => t.key);

  RDR.list({
    id: "trinkets", title: "Trinkets & talismannen", nav: "Trinkets", order: 40,
    heading: "Trinkets &amp; Talismannen Checklist", sub: "Red Dead Redemption 2 (story mode): alle 16 trinkets en 6 talismannen, van de Fence en daarbuiten, met hun ingrediënten en effecten.", blurb: "Alle 16 trinkets en 6 talismannen, met hun ingrediënten en effecten.",
    filter: "Verberg wat je al hebt",
    tips: [
    "Een <strong>Fence</strong> (bijvoorbeeld bij Emerald Ranch, in Saint Denis, Lagras of Van Horn) maakt trinkets en talismannen in zijn craftingmenu. Je betaalt een klein bedrag plus de ingrediënten.",
    "Ze werken <strong>meteen en permanent</strong> zodra je ze hebt. Je hoeft ze niet uit te rusten.",
    "De meeste onderdelen komen van <a href=\"#/legendary\">legendarische dieren</a>. Zodra je een dier hebt gedood en gevild, zie je dat hier vanzelf. Een vinkje bij \"gemaakt\" staat ook op die pagina, en andersom.",
    "Talismannen vragen naast het dierlijke onderdeel ook <strong>sieraden of zeldzame items</strong>. Waar je die vindt, staat onderaan."
  ],
    sources: [
    [
      "PowerPyx (trinkets)",
      "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-trinkets/"
    ],
    [
      "Shacknews (trinkets en talismannen)",
      "https://www.shacknews.com/article/108291/all-talismans-and-trinkets-in-red-dead-redemption-2"
    ],
    [
      "ProdigyGamers (talismannen)",
      "https://prodigygamers.com/2018/10/29/red-dead-redemption-2-how-to-get-all-six-talismans"
    ],
    [
      "rdr2.org (Abalone Shell Fragment)",
      "https://www.rdr2.org/guides/abalone-shell-fragment-guide/"
    ],
    [
      "Hold To Reset (recepten)",
      "https://holdtoreset.com/fence-trinkets-and-talismans-in-red-dead-redemption-2/"
    ]
  ],
    sections: () => [
      { type: "cards", id: "talismans", title: "Talismannen", status, items: all().filter(t => t.type === "talisman").map(card) },
      { type: "cards", id: "fromlegends", title: "Trinkets van legendarische dieren", status,
        items: all().filter(t => t.type === "trinket" && t.legend).map(card) },
      { type: "cards", id: "others", title: "Overige trinkets", status, items: all().filter(t => t.type === "trinket" && !t.legend).map(card) },
      { type: "table", id: "ingredients", title: "Waar vind je de extra ingrediënten?",
        rows: Object.entries(INGREDIENTS).map(([name, where]) => ({ id: RDR.slug(name), name, where, key: ingKey(name) })),
        columns: [["Ingrediënt", r => r.name], ["Waar", r => r.where, "small"],
          ["Voor", r => all().filter(t => t.extras.includes(r.name)).map(t => t.name.replace(/ (Trinket|Talisman)$/, "")).join(", "), "small muted"]] }
    ],
    // Of het onderdeel van het legendarische dier al binnen is.
    refresh: view => view.querySelectorAll("[data-part]").forEach(el => {
      const l = L().legends.find(x => x.id === el.dataset.part);
      el.innerHTML = RDR.get(L().animalKey(l.id, "kill")) ? "✓ in bezit (dier gedood)"
        : `Van de ${l.name}: nog niet gedood, zie <a href="#/legendary">Legendarische dieren</a>`;
    }),
    metrics: {
      trinkets: () => RDR.ratio(of("trinket")),
      talismans: () => RDR.ratio(of("talisman")),
      ingredients: () => RDR.ratio(Object.keys(INGREDIENTS).map(ingKey))
    },
    meters: [["trinkets", "Trinkets gemaakt"], ["talismans", "Talismannen gemaakt"], ["ingredients", "Extra ingrediënten"]],
    v1: { store: "rdr2-legendary-v1", prefs: [["trinkets-hide", "hide"]] }
  });
})();
