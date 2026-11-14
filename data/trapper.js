(() => {
  // The Trapper's shop: regular clothing, saddles and feather accessories, plus his 16 outfits.
  // The legendary clothing lives in data/legendary.js (keys legendary.trapper.<id>) and is shown here with the same keys.
  // Materials use the ids of RDR.MATS (data/animals.js): [[material, count], ...].
  const CATS = [
    { id: "hats", title: "Hats", items: [
      ["Badger Mountain Hat",         [["badger", 1]], 26],
      ["Bear Grenadier Hat",          [["blackbear", 1]], 24],
      ["Beaver Drifter Hat",          [["beaver", 2]], 20],
      ["Beaver Mountain Hat",         [["beaver", 1]], 28],
      ["Bison Gambler's Hat",         [["bison", 1], ["robin", 4], ["oriole", 4]], 18],
      ["Coyote Gambler's Hat",        [["coyote", 2]], 16],
      ["Deer Cavalry Hat",            [["deer", 1], ["raven", 10]], 20],
      ["Elk Flop Hat",                [["elk", 1]], 12],
      ["Fox Mountain Hat",            [["fox", 1]], 30],
      ["Gila Monster Gambler's Hat",  [["elk", 1], ["gila", 1]], 16],
      ["Goat Flop Hat",               [["pronghorn", 1], ["goat", 1]], 12],
      ["Grenadier Hat",               [["muskrat", 1], ["beaver", 1]], 24],
      ["Iguana Big Valley Hat",       [["cow", 1], ["iguana", 1]], 14],
      ["Muskrat Cavalry Hat",         [["rabbit", 4], ["muskrat", 1]], 15],
      ["Plantation Slouch Hat",       [["bison", 1]], 15],
      ["Pronghorn Flop Hat",          [["pronghorn", 1], ["opossum", 4]], 12],
      ["Raccoon Mountain Hat",        [["raccoon", 1], ["beaver", 1], ["hawk", 2]], 21],
      ["Ram Sombrero",                [["ram", 1]], 10],
      ["Rat Flat Cap",                [["rat", 10]], 12],
      ["Rat Infantry Hardee Hat",     [["goat", 1], ["rat", 6]], 17],
      ["Skunk Mountain Hat",          [["skunk", 1]], 23],
      ["Snake Bulldogger Hat",        [["sheep", 1], ["snake", 1]], 23],
      ["Squirrel Flat Cap",           [["squirrel", 6]], 16]
    ] },
    { id: "coats", title: "Coats and jackets", items: [
      ["Beaver Hunting Jacket",       [["cow", 1], ["beaver", 2]], 21],
      ["Cougar Cutaway Coat",         [["cougar", 2], ["blackbear", 1]], 39],
      ["Coyote Scout Jacket",         [["ox", 1], ["coyote", 1]], 20],
      ["Ram Shotgun Coat",            [["ram", 2]], 45],
      ["Trapper's Cloak",             [["sheep", 1]], 32],
      ["Wolf Coat",                   [["ram", 1], ["wolf", 1]], 25]
    ] },
    { id: "vests", title: "Vests", items: [
      ["Billy Vest",                  [["armadillo", 2], ["goat", 1]], 32],
      ["Country Vest",                [["buck", 1], ["beaver", 1]], 25],
      ["Hinterland Vest",             [["ram", 1]], 21],
      ["Huntsman Vest",               [["sheep", 1], ["deer", 1]], 25],
      ["No-Man's Vest",               [["panther", 1], ["goat", 1]], 27],
      ["Outdoorsmen Vest",            [["pronghorn", 1]], 22],
      ["Principal Vest",              [["cow", 1], ["deer", 1]], 18],
      ["Rugged Wrangler Vest",        [["pig", 1]], 23],
      ["Rustic Vest",                 [["cougar", 1]], 23],
      ["Sheepskin Vest",              [["sheep", 2]], 20],
      ["Wilderness Vest",             [["wolf", 1], ["panther", 1]], 28]
    ] },
    { id: "chaps", title: "Chaps", items: [
      ["Batwing Chaps",               [["deer", 1]], 12],
      ["Bear Batwing Chaps",          [["bear", 1]], 27],
      ["Bear Fringed Shotgun Chaps",  [["blackbear", 1]], 38],
      ["Boar Fringed Shotgun Chaps",  [["boar", 2]], 25],
      ["Bull Fringed Shotgun Chaps",  [["bull", 1]], 18],
      ["Deer Pelt Half Chaps",        [["deer", 1]], 9],
      ["Elk Fringed Shotgun Chaps",   [["elk", 1]], 21],
      ["Javelina Half Chaps",         [["peccary", 1], ["snake", 1]], 18],
      ["Moose Batwing Chaps",         [["moose", 1]], 10],
      ["Moose Half Chaps",            [["moose", 1]], 10],
      ["Muskrat Half Chaps",          [["muskrat", 2]], 5],
      ["Ox Fringed Shotgun Chaps",    [["ox", 1]], 15],
      ["Pronghorn Half Chaps",        [["pronghorn", 1]], 7],
      ["Sheep Batwing Chaps",         [["sheep", 2]], 35]
    ] },
    { id: "gloves", title: "Gloves", items: [
      ["Badger Rifleman Gloves",      [["badger", 1]], 10],
      ["Boar Riding Gloves",          [["boar", 1], ["rabbit", 2]], 15],
      ["Buck Riding Gloves",          [["buck", 1]], 5],
      ["Elk Riding Gloves",           [["elk", 1]], 12],
      ["Iguana Range Gloves",         [["peccary", 1], ["iguana", 2]], 27],
      ["Moose Range Gloves",          [["moose", 1]], 22],
      ["Pigskin Rifleman Gloves",     [["pig", 1]], 8],
      ["Snake Skin Cavalry Gloves",   [["boar", 1], ["snake", 1]], 26],
      ["Winter Cavalry Gloves",       [["rabbit", 1], ["muskrat", 2]], 25]
    ] },
    { id: "boots", title: "Boots and moccasins", items: [
      ["Boar & Bull Fowler Boots",    [["ox", 1], ["boar", 1]], 31],
      ["Bull Fowler Boots",           [["boar", 1], ["bull", 1]], 29],
      ["Javelina Moccasins",          [["peccary", 2]], 33],
      ["Moccasins",                   [["buck", 1]], 17],
      ["Skunk Trapper Boots",         [["skunk", 2]], 39],
      ["Two Toned Moccasins",         [["buck", 1]], 15],
      ["Workman's Pride Boots",       [["cow", 1], ["goat", 1]], 28]
    ] },
    { id: "saddles", title: "Saddles", intro: "Saddles are fitted at a stable once you have bought them.", items: [
      ["Alligator Ranch Cutter Saddle", [["alligator", 1]], 107],
      ["Bear Dakota Saddle",          [["bear", 1]], 98],
      ["Beaver Roping Saddle",        [["beaver", 1]], 96],
      ["Boar Mother Hubbard Saddle",  [["boar", 1]], 90],
      ["Cougar McClelland Saddle",    [["cougar", 1]], 110],
      ["Panther Trail Saddle",        [["panther", 1]], 102],
      ["Rattlesnake Vaquero Saddle",  [["snake", 10]], 120]
    ] },
    { id: "accessories", title: "Hat accessories", intro: "Feathers and trimmings for your hats. Feathers have no quality, so any feather will do.", items: [
      ["Glorious Accessory",          [["oriole", 1], ["woodpecker", 4]], 10],
      ["Homestead Accessory",         [["chicken", 1], ["goose", 2]], 10],
      ["Huntsman Accessory",          [["boar", 1], ["hawk", 1], ["quail", 2]], 10],
      ["Judicious Accessory",         [["pheasant", 1], ["owl", 1]], 10],
      ["Majestic Accessory",          [["rooster", 4], ["woodpecker", 2], ["songbird", 2]], 15],
      ["Native Accessory",            [["pheasant", 1], ["sparrow", 4], ["robin", 3]], 10],
      ["Pilgrim Accessory",           [["turkey", 1], ["waxwing", 2], ["bluejay", 3]], 11],
      ["Pioneer Accessory",           [["turkey", 3], ["duck", 3], ["chicken", 3]], 11],
      ["Pursuer Accessory",           [["eagle", 2], ["pigeon", 2]], 13],
      ["Rococo Accessory",            [["crow", 2], ["cardinal", 2]], 15],
      ["Scavenger Accessory",         [["vulture", 1], ["seagull", 1]], 11],
      ["Stalker Accessory",           [["loon", 2], ["condor", 1], ["raven", 3]], 13]
    ] }
  ];

  // The Trapper's outfits; pieces are item names from CATS or from the legendary clothing.
  const OUTFITS = [
    ["The Bear Hunter",    ["Legendary Bear Head Hat", "Legendary Bear Coat", "Legendary Bear Roper", "Boar Riding Gloves"]],
    ["The Beast of Prey",  ["Legendary Cougar Flop Hat", "Legendary Cougar/Wolf Vest", "Legendary Wolf Batwing Chaps", "Bull Fowler Boots", "Legendary Cougar Riding Gloves"]],
    ["The Bounty Hunter",  ["Plantation Slouch Hat", "Beaver Hunting Jacket", "Sheepskin Vest", "Pronghorn Half Chaps", "Buck Riding Gloves"]],
    ["The Bronco Buster",  ["Elk Flop Hat", "Coyote Scout Jacket", "Huntsman Vest", "Boar Fringed Shotgun Chaps", "Pigskin Rifleman Gloves"]],
    ["The Death Roll",     ["Legendary Alligator Gambler's Hat", "Legendary Panther Cloak", "Legendary Alligator Vest", "Legendary Alligator Fowlers", "Legendary Panther Range Gloves"]],
    ["The Desperado",      ["Beaver Drifter Hat", "Wolf Coat", "Billy Vest", "Boar & Bull Fowler Boots", "Winter Cavalry Gloves"]],
    ["The Dreamcatcher",   ["Legendary Beaver Flop Hat", "Legendary Bison Vest", "Legendary Bison Batwing Chaps", "Legendary Boar & Bison Fowlers", "Legendary Beaver Cavalry Gloves"]],
    ["The Ghost Bison",    ["Legendary White Bison Hat", "Legendary White Bison Coat", "Legendary Elk Half Chaps", "Legendary Elk Moccasins", "Legendary Elk Range Gloves"]],
    ["The Huntsman",       ["Legendary Coyote Mountain Hat", "Legendary Pronghorn Coat", "Legendary Coyote Half Chaps", "Workman's Pride Boots", "Legendary Pronghorn Range Gloves"]],
    ["The Marauder",       ["Muskrat Cavalry Hat", "Principal Vest", "Bull Fringed Shotgun Chaps", "Snake Skin Cavalry Gloves"]],
    ["The Mountain Man",   ["Grenadier Hat", "Ram Shotgun Coat", "Country Vest", "Elk Riding Gloves"]],
    ["The Night Wrangler", ["Coyote Gambler's Hat", "Cougar Cutaway Coat", "Wilderness Vest", "Moose Half Chaps", "Badger Rifleman Gloves"]],
    ["The Rattler",        ["Ram Sombrero", "Outdoorsmen Vest", "Javelina Half Chaps", "Iguana Range Gloves"]],
    ["The Stalker",        ["Legendary Ram Hat", "Legendary Moose Hunting Jacket", "Legendary Ram Batwing Chaps", "Legendary Moose Moccasins", "Legendary Ram Rifleman Gloves"]],
    ["The Trophy Buck",    ["Raccoon Mountain Hat", "Legendary Buck Vest", "Legendary Fox Moccasins", "Legendary Buck & Fox Range Gloves"]],
    ["The Wrangler",       ["Goat Flop Hat", "Trapper's Cloak", "No-Man's Vest", "Two Toned Moccasins", "Moose Range Gloves"]]
  ];

  const L = () => RDR.lists.legendary;
  // Every item in the shop, as { id, name, key, mats, price, cat, legs? }; computed lazily because legendary.js may load later.
  let catalog = null;
  const all = () => catalog || (catalog = [
    ...CATS.flatMap(c => c.items.map(([name, mats, price]) =>
      ({ id: RDR.slug(name), name, key: `trapper.${c.id}.${RDR.slug(name)}`, mats, price, cat: c.id }))),
    ...L().trapper.map(([id, name, legs, mats, price, cat]) =>
      ({ id, name, key: `legendary.trapper.${id}`, mats, price, cat, legs }))
  ]);
  const byName = () => Object.fromEntries(all().map(it => [it.name, it]));
  const legend = id => L().legends.find(l => l.id === id);
  const animalOf = m => RDR.ANIMALS[RDR.MATS[m][1]];
  // Epilogue only: a legendary animal from New Austin, or a material that lives only there.
  const epilogue = it => (it.legs || []).some(l => /Epilogue/.test(legend(l).req || ""))
    || it.mats.some(([m]) => (animalOf(m) || {}).epilogue);
  const tagsOf = it => `${it.legs ? RDR.tag("Legendary") : ""}${epilogue(it) ? RDR.tag("Epilogue") : ""}`;
  const matsHTML = it => [...(it.legs || []).map(l => `${legend(l).name} pelt`), RDR.matsText(it.mats)].filter(Boolean).join(", ");
  const piece = name => {
    const it = byName()[name];
    if (!it) console.error(`Trapper outfit piece not found: ${name}`);
    return it;
  };
  const outfitPieces = pieces => pieces.map(piece).filter(Boolean);

  // Materials still needed for everything not yet bought: { material: [[item, count], ...] }.
  const stillNeeded = () => {
    const need = {};
    all().filter(it => !RDR.get(it.key)).forEach(it => it.mats.forEach(([m, q]) => (need[m] = need[m] || []).push([it, q])));
    return need;
  };
  const forText = list => list.map(([it, q]) => `${it.name}${q > 1 ? ` (×${q})` : ""}`).join(", ");
  const byTotal = (need, feathers) => Object.keys(need).filter(m => RDR.isFeather(m) === feathers)
    .map(m => [m, RDR.sum(need[m], ([, q]) => q)]).sort((a, b) => b[1] - a[1] || RDR.MATS[a[0]][0].localeCompare(RDR.MATS[b[0]][0]));
  const nothingLeft = what => `<div class="card"><p class="small muted">Nothing left: you have bought everything that needs ${what}.</p></div>`;
  // One card per pelt, hide or skin, with where to find the animal and the weapon for a perfect pelt.
  const peltCards = () => {
    const need = stillNeeded();
    const mats = byTotal(need, false);
    if (!mats.length) return nothingLeft("pelts, hides or skins");
    return `<div class="grid">${mats.map(([m, total]) => {
      const a = animalOf(m);
      return `
        <section class="card">
          <div class="card-head"><h3>${RDR.MATS[m][0]}</h3><span class="status">${total} needed</span></div>
          <p class="small">${RDR.tag(a.size)}${a.epilogue ? RDR.tag("Epilogue") : ""}</p>
          <dl class="small fields">
            <dt>Animal</dt><dd>${a.name}</dd>
            <dt>Where</dt><dd>${a.where}</dd>
            <dt>Weapon</dt><dd><strong>${a.weapon}</strong></dd>
            <dt>For</dt><dd>${forText(need[m])}</dd>
          </dl>
        </section>`;
    }).join("")}</div>`;
  };
  const featherTable = () => {
    const need = stillNeeded();
    const mats = byTotal(need, true);
    if (!mats.length) return nothingLeft("feathers");
    return `<div class="card table-wrap"><table>
      <thead><tr><th>Feather</th><th class="num">Still needed</th><th>For</th></tr></thead>
      <tbody>${mats.map(([m, total]) => `<tr><td>${RDR.MATS[m][0]}</td><td class="num">${total}</td><td class="small">${forText(need[m])}</td></tr>`).join("")}</tbody>
    </table></div>`;
  };

  RDR.list({
    id: "trapper", title: "Trapper", order: 35, group: "Hunting & camp",
    heading: "Trapper Checklist",
    sub: "Red Dead Redemption 2 (story mode): everything the Trapper makes from pelts and feathers, including his 16 outfits.",
    blurb: "All Trapper clothing, saddles and hat accessories, his 16 outfits, and a shopping list of the pelts you still need.",
    filter: "Hide what you have already bought",
    tips: [
    "The Trapper has shops in <strong>Saint Denis</strong>, <strong>Riggs Station</strong> and <strong>Tumbleweed</strong>. He makes his clothing from the pelts, hides, skins and feathers you <strong>sell to him</strong>: sell the required materials first, and the item becomes available in his shop.",
    "Pelts, hides and skins must be <strong>perfect</strong> (three stars). See <a href=\"#/satchels\">Satchels</a> for how to keep a pelt perfect. Feathers have no quality. The shopping list at the bottom says where to find each animal and which weapon to use.",
    "Armadillos, Gila monsters and collared peccaries live only in <strong>New Austin</strong>, so the pieces that need them (tagged Epilogue) can only be made in the epilogue.",
    "The <strong>legendary</strong> pieces need a legendary pelt; those animals are on <a href=\"#/legendary\">Legendary animals</a>. A checkbox for a legendary piece here is the same as the one there.",
    "An <strong>outfit</strong> is complete once you own all of its pieces. Each piece you buy is checked in its outfit and in its category below, and the shopping list at the bottom only counts what you have not bought yet.",
    "The Trapper is not needed for 100%. Selling animals to a Trapper does count for the <a href=\"#/challenges\">Survivalist challenges</a>."
  ],
    sources: [
    ["rdr2.org (Trapper)", "https://www.rdr2.org/guides/trapper-crafting-materials-guide/"],
    ["rdr2.org (outfits)", "https://www.rdr2.org/wiki/outfits/"],
    ["RankedBoost (Trapper)", "https://rankedboost.com/red-dead-redemption-2/trapper/"],
    ["TPose Gaming (Trapper outfits)", "https://tposegaming.com/?p=3769"],
    ["rdr2.org (animal locations)", "https://www.rdr2.org/guides/all-animal-locations-guide/"],
    ["PowerPyx (animal locations)", "https://www.powerpyx.com/red-dead-redemption-2-all-animal-locations-zoologist-skin-deep/"],
    ["PowerPyx (weapon per animal size)", "https://www.powerpyx.com/red-dead-redemption-2-how-to-get-perfect-pelts/"],
    ["rdr2.org (beavers)", "https://www.rdr2.org/guides/story-mode/best-north-american-beaver-locations-for-perfect-pelts/"],
    ["GosuNoob (opossum)", "https://www.gosunoob.com/?p=125682"],
    ["Gamepressure (Gila monster)", "https://www.gamepressure.com/red-dead-redemption-2/gila-monster-where-to-find/ze1044e"]
  ],
    // A function, so the legendary list is read only when the page is first used.
    sections: () => [
      { type: "cards", id: "outfits", title: "Outfits", all: true,
        intro: "The Trapper's outfits: each one is a set of his pieces. Check a piece once you have bought it.",
        status: (it, done) => done ? "✓ complete" : "",
        items: OUTFITS.map(([name, pieces]) => {
          const its = outfitPieces(pieces);
          return {
            name, tags: [...(its.some(it => it.legs) ? ["Legendary"] : []), ...(its.some(epilogue) ? ["Epilogue"] : [])],
            note: `Total price: $${RDR.sum(its, it => it.price)}`,
            checks: its.map(it => ({ id: it.id, key: it.key, label: `${it.name} <span class="muted">$${it.price}</span>` }))
          };
        }) },
      ...CATS.map(c => ({
        type: "table", id: c.id, title: c.title, intro: c.intro,
        // Regular rows get their key from the table (the same trapper.<category>.<slug>); legendary rows keep the shared key.
        rows: all().filter(it => it.cat === c.id).sort((a, b) => a.name.localeCompare(b.name)).map(it => ({ ...it, key: it.legs ? it.key : undefined })),
        columns: [["Item", r => `${r.name}${tagsOf(r)}`], ["Materials", matsHTML, "small"], ["Price", r => `$${r.price}`, "num"]]
      })),
      { type: "custom", title: "Shopping list: pelts, hides and skins",
        intro: "Everything still needed for the items you have not bought yet, legendary pieces included (only their extra materials; the legendary pelts are on <a href=\"#/legendary\">Legendary animals</a>).",
        render: () => `<div data-need="pelts"></div>`,
        refresh: (def, el) => { el.querySelector("[data-need]").innerHTML = peltCards(); } },
      { type: "custom", title: "Shopping list: feathers",
        render: () => `<div data-need="feathers"></div>`,
        intro: "Feathers have no quality: shoot or pick up any bird of the right kind.",
        refresh: (def, el) => { el.querySelector("[data-need]").innerHTML = featherTable(); } }
    ],
    metrics: {
      items: () => RDR.ratio(all().map(it => it.key)),
      outfits: () => ({ have: OUTFITS.filter(([, p]) => outfitPieces(p).every(it => RDR.get(it.key))).length, total: OUTFITS.length }),
      clothing: () => RDR.ratio(all().filter(it => !["saddles", "accessories"].includes(it.cat)).map(it => it.key))
    },
    meters: [["outfits", "Outfits complete"], ["clothing", "Clothing bought"], ["items", "Everything in the shop"]]
  });
})();
