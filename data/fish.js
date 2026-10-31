(() => {
  const groups = [
    { id: "prep", title: "Preparation", short: "Preparation",
      intro: "Jeremy Gill gives you a map with every fishing spot. After that you can buy the special lures.",
      items: [
        ["Spoke to Jeremy Gill", "Start of the stranger mission <em>A Fisher of Fish</em>"],
        ["Bought Special Lake Lure", "Bait Shop in Lagras"],
        ["Bought Special River Lure", "Bait Shop in Lagras"],
        ["Bought Special Swamp Lure", "Bait Shop in Lagras"]
      ] },
    { id: "fish", title: "The 13 legendary fish", short: "Fish caught",
      intro: "All 13 are needed for 100% and to complete Jeremy's mission.",
      finish: "All 13 sent to Jeremy Gill from a post office",
      items: [
        ["Legendary Bluegill", "Flat Iron Lake (Lemoyne), east side of the lake, due west of Rhodes", "Lake"],
        ["Legendary Perch", "Elysian Pool (New Hanover), on the Kamassa River, southwest of Annesburg", "Lake"],
        ["Legendary Muskie", "Lannahechee River at the Van Horn Trading Post (New Hanover)", "River"],
        ["Legendary Bullhead Catfish", "Lannahechee River, western inlet by the Sisika Penitentiary island", "River"],
        ["Legendary Steelhead Trout", "Kamassa River at Brandywine Drop (Roanoke Ridge)", "River"],
        ["Legendary Lake Sturgeon", "Where the Kamassa River flows into the Lannahechee, west of Saint Denis", "River"],
        ["Legendary Longnose Gar", "Lake Lagras (Bluewater Marsh, Lemoyne), east of the Kamassa River", "Swamp"],
        ["Legendary Chain Pickerel", "Dakota River, northwest of Flatneck Station (Heartlands)", "River"],
        ["Legendary Sockeye Salmon", "Lake Isabella (Ambarino), where Beartooth Beck flows into the lake", "Lake"],
        ["Legendary Smallmouth Bass", "Owanjila Lake (West Elizabeth), at the Upper Montana River", "Lake"],
        ["Legendary Rock Bass", "Lower Montana River in Aurora Basin (West Elizabeth)", "Lake"],
        ["Legendary Redfin Pickerel", "Stillwater Creek, east of MacFarlane's Ranch (Great Plains)", "Lake"],
        ["Legendary Largemouth Bass", "San Luis River, west of Lake Don Julio (New Austin, epilogue). The guides list both the Lake and the River lure here, so bring both.", "Lake/River"]
      ] },
    { id: "bonus", title: "Bonus: Legendary Channel Catfish", short: "Bonus",
      intro: "Not needed for 100%. A day or two after you have sent in all 13 fish, John gets an invitation from Jeremy Gill to Rio Bravo (New Austin, epilogue).",
      items: [
        ["Received Jeremy Gill's invitation", "After sending in all 13 fish"],
        ["Caught the Legendary Channel Catfish", "San Luis River near Rio Bravo (New Austin)"]
      ] }
  ];
  RDR.list({
    id: "fish", title: "Legendary fish", nav: "Fish", order: 110, group: "The world",
    heading: "Legendary Fish Checklist", sub: "Red Dead Redemption 2 (story mode): the 13 legendary fish for Jeremy Gill (stranger mission <em>A Fisher of Fish</em>), plus the bonus fish in the epilogue.", blurb: "The 13 legendary fish for Jeremy Gill, plus the bonus fish in the epilogue.",
    filter: "Hide what you have already caught",
    tips: [
    "Legendary fish <strong>only bite on a special lure</strong>, not on bait. A lure is not used up, so you only need one of each.",
    "The spot is marked with a blue circle on the map (you see it after Jeremy Gill's map). Cast into the middle and reel in slowly until you get a bite.",
    "Reel in when the fish is tired and not pulling. If it pulls hard, give it some line, or the line snaps. It usually takes a few minutes.",
    "You can mail the fish right away or carry it. They only count for Jeremy once you send them to him <strong>from a post office</strong>.",
    "The <strong>Largemouth Bass</strong> is in New Austin. As Arthur you get shot there, so catch it in the epilogue. The Redfin Pickerel in Stillwater Creek is just outside New Austin."
  ],
    sources: [
    [
      "Shacknews (fish locations)",
      "https://www.shacknews.com/article/108180/all-legendary-fish-locations-in-red-dead-redemption-2"
    ],
    [
      "rdr2.org (legendary fish)",
      "https://www.rdr2.org/guides/legendary-fish-locations-guide/"
    ],
    [
      "PowerPyx (fish and lures)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-legendary-fish-locations/"
    ]
  ],
    sections: [
      // Show the lure as a tag, e.g. "Lake Lure".
      { type: "checklist", columns: true, groups: groups.map(g => ({ ...g, items: g.items.map(([n, w, t]) => [n, w, t && `${t} Lure`]) })) },
      { type: "html", title: "Lure by water type", html: "<div class=\"card table-wrap\"> <table> <thead><tr><th>Lure</th><th>For</th><th>Where to buy</th></tr></thead> <tbody> <tr><td><strong>Special Lake Lure</strong></td><td>Lakes and still water</td><td rowspan=\"3\">Bait Shop in Lagras (Bayou Nwa), $20 each. Available once you have spoken to Jeremy Gill.</td></tr> <tr><td><strong>Special River Lure</strong></td><td>Rivers and running water</td></tr> <tr><td><strong>Special Swamp Lure</strong></td><td>Swamps</td></tr> </tbody> </table> </div>" }
    ],
    metrics: {
      prep: () => RDR.ratio(RDR.keysOf("fish", "prep")),
      fish: () => RDR.ratio(RDR.keysOf("fish", "fish")),
      bonus: () => RDR.ratio(RDR.keysOf("fish", "bonus"))
    },
    meters: [["prep", "Preparation"], ["fish", "Fish caught"], ["bonus", "Bonus"]]
  });
})();
