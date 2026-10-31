(() => {
  const keys = () => RDR.groupsOf("poi").flatMap(g => g.keys);
  RDR.list({
    id: "poi", title: "Points of interest", nav: "POI", order: 105, group: "The world",
    heading: "Points of Interest Checklist",
    sub: "Red Dead Redemption 2 (story mode): all 50 remarkable places Arthur sketches in his journal.",
    blurb: "The 50 remarkable places Arthur sketches in his journal. One is enough for 100%.",
    filter: "Hide places you have already found",
    tips: [
      "A point of interest is a strange or remarkable place, such as a meteorite crater, a mammoth skeleton or an abandoned church. <strong>Inspect</strong> the place (the prompt appears when you are close), and Arthur makes a sketch in his journal.",
      "For 100% you only need <strong>one</strong>. That goes automatically to the <a href=\"#/hundred\">100%</a> page. A quick first one is the <em>Mysterious Hill Home</em>, northeast of Bacchus Station.",
      "The four places in <strong>New Austin</strong> are for the epilogue. As Arthur you get shot there.",
      "Many places are close to other collectibles. Near Annesburg there are about eight close together, and the Strange Statues belong to a puzzle with <a href=\"#/gold\">gold bars</a>.",
      "The descriptions help you recognise the place. Exact map markers are in the guides listed under sources."
    ],
    sources: [
      ["PixelTwelve (all 50 by region)", "https://pixeltwelve.com/articles/red-dead-redemption-2-points-of-interest"],
      ["rdr2.org (locations)", "https://rdr2.org/guides/points-of-interest-guide"],
      ["GIGA (interessante Orte, German)", "https://www.giga.de/spiele/red-dead-redemption-2/gallery/red-dead-redemption-2-alle-interessanten-orte-fundorte-auf-der-karte/"],
      ["PowerPyx (100%)", "https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/"]
    ],
    sections: [{ type: "checklist", columns: true, groups: [
      { id: "newhanover", title: "New Hanover (17)", items: [
        ["Abandoned Trading Post", "North of Roanoke Valley"],
        ["Brush Fire", "The Heartlands, south of Valentine"],
        ["Fossilized Man", "Roanoke Ridge, near Annesburg"],
        ["Manmade Mutant", "Near the Van Horn Trading Post"],
        ["Meteor House", "Roanoke Ridge, near Annesburg"],
        ["Meteorite", "Roanoke Valley, an impact crater"],
        ["Oil Derrick", "The Heartlands, just south of the A and R of Heartlands on the map"],
        ["Old Tomb", "Roanoke Ridge, near Annesburg"],
        ["Old World Scripts", "Roanoke Ridge, near Annesburg"],
        ["Register Rock", "The Heartlands, at the Heartland Oil Fields"],
        ["Serpent Mound", "Near the Van Horn Trading Post"],
        ["Trading Post", "East of Flatneck Station"],
        ["Trail Trees I", "Roanoke Ridge, near Annesburg"],
        ["Trail Trees II", "Roanoke Ridge, near Annesburg"],
        ["Trail Trees III", "Roanoke Ridge, near Annesburg"],
        ["Trail Trees IV", "Roanoke Ridge, near Annesburg"],
        ["Warped Tree", "On a hill south of Larned Sod, not far from Emerald Ranch"]
      ] },
      { id: "lemoyne", title: "Lemoyne (9)", items: [
        ["Abandoned Church", "South of Rhodes"],
        ["Bolger Glade", "Scarlett Meadows, the old battlefield"],
        ["Braithwaites' Secret", "Braithwaite Manor, south of Rhodes"],
        ["Gray's Secret", "According to GIGA at Caliga Hall"],
        ["Painting in Cabin", "A painting in a cabin in Lemoyne"],
        ["Phonograph", "On a houseboat in Bluewater Marsh"],
        ["Pleasance", "A ghost town in Lemoyne"],
        ["Tiny Church", "Bayou Nwa, north of Saint Denis"],
        ["Withered Arm", "Near Saint Denis"]
      ] },
      { id: "ambarino", title: "Ambarino (9)", items: [
        ["Barrel Rider", "North of Bacchus Station, at the foot of a waterfall"],
        ["Defaced Grave", "Grizzlies West"],
        ["Face in Cliff", "A face carved into a mountainside in the Grizzlies"],
        ["Frozen Settler", "Grizzlies West, in the snow"],
        ["Mammoth", "Grizzlies West, a mammoth skeleton"],
        ["Meditating Monk", "Grizzlies East, on a cliff"],
        ["Mysterious Hill Home", "Northeast of Bacchus Station. A quick first one for 100%."],
        ["Strange Statues", "In a cave northeast of Bacchus Station (see <a href=\"#/gold\">Gold bars</a>)"],
        ["Strange Statues Cave Painting", "A rock painting that belongs to the Strange Statues puzzle, according to GIGA at Window Rock"]
      ] },
      { id: "westelizabeth", title: "West Elizabeth (11)", items: [
        ["Circus Wagons", "Tall Trees, near Manzanita Post"],
        ["Faces in Trees", "West of Strawberry, around Owanjila"],
        ["Flying Machine", "PixelTwelve puts it in West Elizabeth, rdr2.org in Cholla Springs (New Austin)"],
        ["Giant Remains", "Big Valley, a giant skeleton"],
        ["Hermit Woman", "Big Valley, at a hermit woman's cabin"],
        ["Hidden Tunnel", "Big Valley"],
        ["Native Burial", "West of Strawberry, around Owanjila"],
        ["Obelisk", "Northwest of Strawberry (also the start of <a href=\"#/treasure\">Landmarks of Riches</a>)"],
        ["Pagan Ritual", "West of Strawberry, around Owanjila"],
        ["Whale Bones", "West of Strawberry, around Owanjila"],
        ["Wickiup", "Tall Trees"]
      ] },
      { id: "newaustin", title: "New Austin (4)", items: [
        ["Crashed Airship", "PixelTwelve puts it in New Austin, rdr2.org in Big Valley (West Elizabeth)", "Epilogue"],
        ["Donkey Lady", "Cholla Springs", "Epilogue"],
        ["Jesuit Missionary", "Gaptooth Ridge", "Epilogue"],
        ["Sperm Whale Bones", "Rio Bravo, south of Tumbleweed", "Epilogue"]
      ] }
    ] }],
    metrics: {
      found: () => RDR.ratio(keys()),
      counted: () => RDR.capped(RDR.ratio(keys()), 1)
    },
    meters: [["found", "Places found"], ["counted", "For 100% (1 needed)"]]
  });
})();
