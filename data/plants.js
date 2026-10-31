(() => {
  const herbs = [
    ["alaskanginseng", "Alaskan Ginseng",      "Forests and damp spots in Ambarino and northwestern West Elizabeth. Recognisable by its red berries.", "Potent Miracle Tonic"],
    ["americanginseng","American Ginseng",     "Forests and damp spots in West Elizabeth and on the edges of New Hanover. Red berries.", "Potent Miracle Tonic"],
    ["baybolete",      "Bay Bolete",           "Mushroom. Tall Trees (West Elizabeth) and by the river around Caliban's Seat.", "Potent Predator Bait"],
    ["blackberry",     "Blackberry",           "Bushes near hills and forests, almost everywhere.", "Potent Herbivore Bait"],
    ["blackcurrant",   "Blackcurrant",         "Sunny spots in Gaptooth Ridge and Cholla Springs.", "Special Snake Oil", "Epilogue"],
    ["burdock",        "Burdock Root",         "Great Plains, along riverbanks and the railway.", "Special Bitters"],
    ["chanterelles",   "Chanterelles",         "Yellow mushrooms in the grasslands and forests of Lemoyne and eastern New Hanover.", "Potent Herbivore Bait"],
    ["bulrush",        "Common Bulrush",       "Along creeks and lakes in every region.", "Horse Ointment"],
    ["thyme",          "Creeping Thyme",       "Everywhere, on sandy soil near rocks and riverbanks.", "Seasoning for meat"],
    ["desertsage",     "Desert Sage",          "Only in western Gaptooth Ridge. Purple flowers.", "Horse Ointment", "Epilogue"],
    ["englishmace",    "English Mace",         "East of O'Creagh's Run. In the epilogue also near Rio Bravo. Yellow flowers.", "Special Health Cure"],
    ["huckleberry",    "Evergreen Huckleberry","All along the Kamassa River, through Lemoyne and New Hanover.", "Potent Predator Bait"],
    ["goldencurrant",  "Golden Currant",       "Along creeks in West Elizabeth and northeastern New Hanover. Golden berries.", "Special Snake Oil"],
    ["hummingbird",    "Hummingbird Sage",     "Dense vegetation in Lemoyne, western West Elizabeth and along the Kamassa River.", "Seasoning for meat"],
    ["tobacco",        "Indian Tobacco",       "Forests and savannas in West Elizabeth, Ambarino and Lemoyne. A tall plant, visible from afar.", "Potent Miracle Tonic"],
    ["milkweed",       "Milkweed",             "Lemoyne: Bayou Nwa, Dewberry Creek and the swamps around Saint Denis.", "Restores your Health core"],
    ["oleander",       "Oleander Sage",        "Around Saint Denis and along the banks in Bayou Nwa. Pink flowers.", "Poison arrows and poison throwing knives"],
    ["oregano",        "Oregano",              "Dry grasslands, almost everywhere.", "Seasoning for meat"],
    ["parasol",        "Parasol Mushroom",     "Forests with well-drained soil, spread across the map. A pale mushroom.", "Special Horse Reviver"],
    ["poppy",          "Prairie Poppy",        "Great Plains (West Elizabeth), mainly along the railway. Yellow flowers.", "Special Snake Oil"],
    ["ramshead",       "Ram's Head",           "Mushroom at the foot of trees in the forests of West Elizabeth and Ambarino.", "Potent Herbivore Bait"],
    ["raspberry",      "Red Raspberry",        "Large bushes, almost everywhere.", "Herbivore and Predator Bait"],
    ["redsage",        "Red Sage",             "Only near Rio Bravo (New Austin). Red flowers.", "Seasoning for meat", "Epilogue"],
    ["vanilla",        "Vanilla Flower",       "On tree bark along the banks in Bayou Nwa (Lemoyne).", "Potent Herbivore Bait"],
    ["snowdrops",      "Violet Snowdrop",      "Northern Ambarino, near the snow but not in it. Rare.", "Potent Herbivore Bait"],
    ["carrot",         "Wild Carrot",          "Almost everywhere, especially on the plains. White flower clusters.", "Restores your horse, Horse Meal"],
    ["feverfew",       "Wild Feverfew",        "Cholla Springs (New Austin). Small white petals.", "Restores your Stamina core", "Epilogue"],
    ["mint",           "Wild Mint",            "Near creeks, swamps and damp meadows, everywhere. For example along the road heading northwest from Strawberry.", "Seasoning for meat"],
    ["wintergreen",    "Wintergreen Berry",    "The coldest areas of northeastern Ambarino and New Hanover. Red berries.", "Potent Predator Bait"],
    ["yarrow",         "Yarrow",               "Grasslands and open forests in New Hanover and Lemoyne. Red flowers.", "Potent Health Cure"]
  ];
  // The 13 orchids come from the Exotics requests.
  const orchids = () => RDR.lists.exotics.requests.flatMap(r => r.items.filter(it => /Orchid/.test(it[1])).map(it => [r, it]));
  RDR.list({
    id: "plants", title: "Plants", order: 80, group: "Gear",
    sub: "Red Dead Redemption 2 (story mode): all 43 plant species, the 30 herbs and the 13 orchids, with locations and uses.", blurb: "All 43 plant species: 30 herbs for Herbalist 9 and 13 orchids. 20 species are needed for 100%.",
    filter: "Hide plants you have already picked",
    tips: [
    "For 100% you need <strong>20 of the 43 species</strong> in the compendium. That count goes automatically to the <a href=\"#/hundred\">100%</a> page.",
    "<strong>Herbalist 9</strong> (see <a href=\"#/challenges\">Challenges</a>) asks for one of each of the <strong>30 herbs</strong>, without orchids. Plants you picked <em>before</em> you had that challenge do not count. Four herbs only grow in New Austin, so you finish Herbalist 9 in the epilogue.",
    "What each herb is used for is listed with it. The full recipes are on <a href=\"#/recipes\">Recipes</a>.",
    "Plants light up in <strong>Eagle Eye</strong>. Picked plants grow back over time.",
    "With the <a href=\"#/trinkets\">Ram Horn Trinket</a> (from the legendary bighorn ram) you pick double from some herbs.",
    "You also need the orchids for Algernon Wasp's <a href=\"#/exotics\">Exotics</a>. How many you already have there is shown per orchid below."
  ],
    sources: [
    [
      "rdr2.org (herbs and orchids)",
      "https://www.rdr2.org/guides/herbs-and-orchids-guide/"
    ],
    [
      "rdr2.org (Herbalist)",
      "https://www.rdr2.org/guides/herbalist-challenge-guide/"
    ],
    [
      "PowerPyx (all 43 plants)",
      "https://www.powerpyx.com/red-dead-redemption-2-plants-locations/"
    ]
  ],
    sections: () => [
      { type: "checklist", title: "Herbs (30)", columns: true, groups: [{ id: "herbs", title: "Herbs",
        items: herbs.map(([id, name, where, use, tag]) => ({ id, name, where, note: `<em>Use:</em> ${use}`, tag })) }] },
      { type: "checklist", title: "Orchids (13)", columns: true,
        intro: "Orchids grow mainly in the swamps of Lemoyne (Bayou Nwa, Bluewater Marsh) and in Roanoke Ridge, on trees or on the ground (see the tag). How many you already have for the <a href=\"#/exotics\">Exotics</a> is shown with each one.",
        groups: [{ id: "orchids", title: "Orchids", items: orchids().map(([r, [id, name, need, tag]]) => ({
          id, name, tag, where: `Exotics ${r.name.toLowerCase()}: <span data-exotic="${r.id}.${id}"></span> / ${need}`
        })) }] }
    ],
    // Live count from the Exotics list for each orchid.
    refresh: view => view.querySelectorAll("[data-exotic]").forEach(el => {
      const [rid, id] = el.dataset.exotic.split(".");
      el.textContent = RDR.lists.exotics.value(rid, id);
    }),
    metrics: {
      herbs: () => RDR.ratio(RDR.keysOf("plants", "herbs")),
      orchids: () => RDR.ratio(RDR.keysOf("plants", "orchids")),
      species: () => RDR.capped(RDR.ratio(RDR.keysOf("plants", "herbs", "orchids")), 20)
    },
    meters: [["herbs", "Herbs picked"], ["orchids", "Orchids picked"], ["species", "Species for 100% (20 needed)"]]
  });
})();
