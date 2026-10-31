(() => {
  const groups = [
    { id: "prep", title: "Voorbereiding", short: "Voorbereiding",
      intro: "Jeremy Gill geeft je een kaart met alle visplekken. Daarna kun je de speciale lokazen kopen.",
      items: [
        ["Jeremy Gill gesproken", "Start van de stranger-missie <em>A Fisher of Fish</em>"],
        ["Special Lake Lure gekocht", "Bait Shop in Lagras"],
        ["Special River Lure gekocht", "Bait Shop in Lagras"],
        ["Special Swamp Lure gekocht", "Bait Shop in Lagras"]
      ] },
    { id: "fish", title: "De 13 legendarische vissen", short: "Vissen gevangen",
      intro: "Alle 13 zijn nodig voor 100% en voor de afsluiting van Jeremy's missie.",
      finish: "Alle 13 via het postkantoor naar Jeremy Gill gestuurd",
      items: [
        ["Legendary Bluegill", "Flat Iron Lake (Lemoyne), oostkant van het meer, recht ten westen van Rhodes", "Lake"],
        ["Legendary Perch", "Elysian Pool (New Hanover), aan de Kamassa River, ten zuidwesten van Annesburg", "Lake"],
        ["Legendary Muskie", "Lannahechee River bij de Van Horn Trading Post (New Hanover)", "River"],
        ["Legendary Bullhead Catfish", "Lannahechee River, westelijke inham bij het eiland van Sisika Penitentiary", "River"],
        ["Legendary Steelhead Trout", "Kamassa River bij Brandywine Drop (Roanoke Ridge)", "River"],
        ["Legendary Lake Sturgeon", "Waar de Kamassa River in de Lannahechee uitkomt, ten westen van Saint Denis", "River"],
        ["Legendary Longnose Gar", "Lake Lagras (Bluewater Marsh, Lemoyne), ten oosten van de Kamassa River", "Swamp"],
        ["Legendary Chain Pickerel", "Dakota River, ten noordwesten van Flatneck Station (Heartlands)", "River"],
        ["Legendary Sockeye Salmon", "Lake Isabella (Ambarino), waar Beartooth Beck in het meer uitkomt", "Lake"],
        ["Legendary Smallmouth Bass", "Owanjila Lake (West Elizabeth), bij de Upper Montana River", "Lake"],
        ["Legendary Rock Bass", "Lower Montana River in Aurora Basin (West Elizabeth)", "Lake"],
        ["Legendary Redfin Pickerel", "Stillwater Creek, ten oosten van MacFarlane's Ranch (Great Plains)", "Lake"],
        ["Legendary Largemouth Bass", "San Luis River, ten westen van Lake Don Julio (New Austin, epiloog). De gidsen noemen hier zowel het Lake- als het River-lokaas, dus neem beide mee.", "Lake/River"]
      ] },
    { id: "bonus", title: "Bonus: Legendary Channel Catfish", short: "Bonus",
      intro: "Niet nodig voor 100%. Een of twee dagen nadat je alle 13 vissen hebt opgestuurd, krijgt John een uitnodiging van Jeremy Gill voor Rio Bravo (New Austin, epiloog).",
      items: [
        ["Uitnodiging van Jeremy Gill ontvangen", "Na het opsturen van alle 13 vissen"],
        ["Legendary Channel Catfish gevangen", "San Luis River bij Rio Bravo (New Austin)"]
      ] }
  ];
  RDR.list({
    id: "fish", title: "Legendarische vissen", nav: "Vissen", order: 110,
    heading: "Legendarische Vissen Checklist", sub: "Red Dead Redemption 2 (story mode): de 13 legendarische vissen voor Jeremy Gill (stranger-missie <em>A Fisher of Fish</em>), plus de bonusvis in de epiloog.", blurb: "De 13 legendarische vissen voor Jeremy Gill, plus de bonusvis in de epiloog.",
    filter: "Verberg wat je al hebt gevangen",
    tips: [
    "Legendarische vissen bijten <strong>alleen op een speciaal lokaas</strong>, niet op aas. Een lokaas gaat niet op, je hebt er dus maar één van elk nodig.",
    "Op de plek staat een blauwe cirkel op de kaart (die zie je na de kaart van Jeremy Gill). Werp uit in het midden en draai langzaam in tot je beet hebt.",
    "Haal de lijn binnen wanneer de vis moe is en niet trekt. Trekt hij hard, geef dan wat lijn, anders breekt die. Het duurt meestal een paar minuten.",
    "Je kunt de vis direct opsturen of meenemen. Ze tellen pas mee voor Jeremy als je ze <strong>via een postkantoor</strong> naar hem verstuurt.",
    "De <strong>Largemouth Bass</strong> zit in New Austin. Als Arthur word je daar doodgeschoten, dus die vang je in de epiloog. De Redfin Pickerel in Stillwater Creek ligt nog net buiten New Austin."
  ],
    sources: [
    [
      "Shacknews (vislocaties)",
      "https://www.shacknews.com/article/108180/all-legendary-fish-locations-in-red-dead-redemption-2"
    ],
    [
      "rdr2.org (legendarische vissen)",
      "https://www.rdr2.org/guides/legendary-fish-locations-guide/"
    ],
    [
      "PowerPyx (vissen en lokaas)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-legendary-fish-locations/"
    ]
  ],
    sections: [
      // Het lokaas als tag tonen, bijv. "Lake Lure".
      { type: "checklist", columns: true, groups: groups.map(g => ({ ...g, items: g.items.map(([n, w, t]) => [n, w, t && `${t} Lure`]) })) },
      { type: "html", title: "Lokaas per watertype", html: "<div class=\"card table-wrap\"> <table> <thead><tr><th>Lokaas</th><th>Voor</th><th>Waar te koop</th></tr></thead> <tbody> <tr><td><strong>Special Lake Lure</strong></td><td>Meren en rustig water</td><td rowspan=\"3\">Bait Shop in Lagras (Bayou Nwa), $20 per stuk. Komt vrij zodra je Jeremy Gill hebt gesproken.</td></tr> <tr><td><strong>Special River Lure</strong></td><td>Rivieren en stromend water</td></tr> <tr><td><strong>Special Swamp Lure</strong></td><td>Moerassen</td></tr> </tbody> </table> </div>" }
    ],
    metrics: {
      prep: () => RDR.ratio(RDR.keysOf("fish", "prep")),
      fish: () => RDR.ratio(RDR.keysOf("fish", "fish")),
      bonus: () => RDR.ratio(RDR.keysOf("fish", "bonus"))
    },
    meters: [["prep", "Voorbereiding"], ["fish", "Vissen gevangen"], ["bonus", "Bonus"]],
    v1: { store: "rdr2-fish-v1", map: RDR.v1.byIndex("fish") }
  });
})();
