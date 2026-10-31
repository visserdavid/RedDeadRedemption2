(() => {
  const groups = [
    { id: "prep", title: "Preparation",
      intro: "Jeremy Gill gives you a map with every fishing spot. After that you can buy the special lures.",
      items: [
        ["Spoke to Jeremy Gill", "Start of the stranger mission <em>A Fisher of Fish</em>"],
        ["Bought Special Lake Lure", "Bait Shop in Lagras"],
        ["Bought Special River Lure", "Bait Shop in Lagras"],
        ["Bought Special Swamp Lure", "Bait Shop in Lagras"]
      ] },
    { id: "fish", title: "The 13 legendary fish",
      intro: "All 13 are needed for 100% and to complete Jeremy's mission.",
      finish: "All 13 sent to Jeremy Gill from a post office",
      items: [
        ["Legendary Bluegill", "Flat Iron Lake (Lemoyne), east side of the lake, due west of Rhodes", "Lake Lure"],
        ["Legendary Perch", "Elysian Pool (New Hanover), on the Kamassa River, southwest of Annesburg", "Lake Lure"],
        ["Legendary Muskie", "Lannahechee River at the Van Horn Trading Post (New Hanover)", "River Lure"],
        ["Legendary Bullhead Catfish", "Lannahechee River, western inlet by the Sisika Penitentiary island", "River Lure"],
        ["Legendary Steelhead Trout", "Kamassa River at Brandywine Drop (Roanoke Ridge)", "River Lure"],
        ["Legendary Lake Sturgeon", "Where the Kamassa River flows into the Lannahechee, west of Saint Denis", "River Lure"],
        ["Legendary Longnose Gar", "Lake Lagras (Bluewater Marsh, Lemoyne), east of the Kamassa River", "Swamp Lure"],
        ["Legendary Chain Pickerel", "Dakota River, northwest of Flatneck Station (Heartlands)", "River Lure"],
        ["Legendary Sockeye Salmon", "Lake Isabella (Ambarino), where Beartooth Beck flows into the lake", "Lake Lure"],
        ["Legendary Smallmouth Bass", "Owanjila Lake (West Elizabeth), at the Upper Montana River", "Lake Lure"],
        ["Legendary Rock Bass", "Lower Montana River in Aurora Basin (West Elizabeth)", "Lake Lure"],
        ["Legendary Redfin Pickerel", "Stillwater Creek, east of MacFarlane's Ranch (Great Plains)", "Lake Lure"],
        ["Legendary Largemouth Bass", "San Luis River, west of Lake Don Julio (New Austin, epilogue). The guides list both the Lake and the River lure here, so bring both.", "Lake/River Lure"]
      ] },
    { id: "bonus", title: "Bonus: Legendary Channel Catfish",
      intro: "Not needed for 100%. A day or two after you have sent in all 13 fish, John gets an invitation from Jeremy Gill to Rio Bravo (New Austin, epilogue).",
      items: [
        ["Received Jeremy Gill's invitation", "After sending in all 13 fish"],
        ["Caught the Legendary Channel Catfish", "San Luis River near Rio Bravo (New Austin)"]
      ] }
  ];
  // Regular fish species (rdr2.org): [name, habitat, most active, bait].
  const species = [
    ["Bluegill", "Lakes and rivers everywhere", "rain", "Cheese"],
    ["Chain Pickerel", "Lakes, rivers and swamps", "sunny weather", "Corn"],
    ["Redfin Pickerel", "Southern rivers", "warm, sunny days", "Bread"],
    ["Rock Bass", "Clear water across the map", "sunny days", "Cheese or other natural bait"],
    ["Smallmouth Bass", "Northern rivers", "rain", "Any natural bait"],
    ["Bullhead Catfish", "Swamps", "rain", "Cheese or corn"],
    ["Perch", "Rivers and lakes across the map", "sunny weather", "Bread"],
    ["Lake Sturgeon", "Southern lakes and swamps", "overcast weather", "Lake lure"],
    ["Largemouth Bass", "Waters throughout the south", "rain", "Crayfish"],
    ["Steelhead Trout", "Mostly southern lakes", "rain", "Worms"],
    ["Muskie", "Northern lakes", "overcast days", "Lake lure"],
    ["Sockeye Salmon", "Northern rivers", "overcast weather", "River lure"],
    ["Northern Pike", "Northern rivers", "sunny weather", "River lure"],
    ["Channel Catfish", "Muddy swamp water", "rain", "Swamp lure"],
    ["Longnose Gar", "Swamp water", "rain", "Swamp lure"]
  ];
  RDR.list({
    id: "fish", title: "Legendary fish", nav: "Fish", order: 110, group: "The world",
    sub: "Red Dead Redemption 2 (story mode): the 13 legendary fish for Jeremy Gill (stranger mission <em>A Fisher of Fish</em>), plus the bonus fish in the epilogue.", blurb: "The 13 legendary fish for Jeremy Gill, plus the bonus fish in the epilogue.",
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
      { type: "checklist", columns: true, groups },
      { type: "checklist", title: "Fish species (compendium)", columns: true,
        intro: "For 100% you need <strong>10 species</strong> in the compendium; that count goes automatically to the <a href=\"#/hundred\">100%</a> page. The challenge Survivalist 10 asks for every species, including the legendary fish above. Regular bait comes from the general store or the Bait Shop in Lagras.",
        groups: [{ id: "species", title: "Regular species (15)",
          items: species.map(([name, where, when, bait]) => ({ name, where: `${where}; most active in ${when}`, note: `<em>Bait:</em> ${bait}` })) }] },
      { type: "html", title: "Lure by water type", html: "<div class=\"card table-wrap\"> <table> <thead><tr><th>Lure</th><th>For</th><th>Where to buy</th></tr></thead> <tbody> <tr><td><strong>Special Lake Lure</strong></td><td>Lakes and still water</td><td rowspan=\"3\">Bait Shop in Lagras (Bayou Nwa), $20 each. Available once you have spoken to Jeremy Gill.</td></tr> <tr><td><strong>Special River Lure</strong></td><td>Rivers and running water</td></tr> <tr><td><strong>Special Swamp Lure</strong></td><td>Swamps</td></tr> </tbody> </table> </div>" }
    ],
    metrics: {
      prep: () => RDR.ratio(RDR.keysOf("fish", "prep")),
      fish: () => RDR.ratio(RDR.keysOf("fish", "fish")),
      bonus: () => RDR.ratio(RDR.keysOf("fish", "bonus")),
      species: () => RDR.capped(RDR.ratio(RDR.keysOf("fish", "species")), 10)
    },
    meters: [["prep", "Preparation"], ["fish", "Fish caught"], ["bonus", "Bonus"], ["species", "Species for 100% (10 needed)"]]
  });
})();
