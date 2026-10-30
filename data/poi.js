(() => {
  const keys = () => RDR.groupsOf("poi").flatMap(g => g.keys);
  RDR.list({
    id: "poi", title: "Points of interest", nav: "POI", order: 105,
    heading: "Points of Interest Checklist",
    sub: "Red Dead Redemption 2 (story mode): alle 50 bijzondere plekken die Arthur in zijn dagboek tekent.",
    blurb: "De 50 bijzondere plekken die Arthur in zijn dagboek schetst. Eén is genoeg voor 100%.",
    filter: "Verberg plekken die je al hebt gevonden",
    tips: [
      "Een point of interest is een vreemde of bijzondere plek, zoals een meteorietkrater, een mammoetskelet of een verlaten kerk. <strong>Bekijk</strong> de plek (de knop verschijnt als je dichtbij bent), dan maakt Arthur een schets in zijn dagboek.",
      "Voor 100% heb je er maar <strong>één</strong> nodig. Dat gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>. Een snelle eerste is de <em>Mysterious Hill Home</em>, ten noordoosten van Bacchus Station.",
      "De vier plekken in <strong>New Austin</strong> doe je in de epiloog. Als Arthur word je daar doodgeschoten.",
      "Veel plekken liggen dicht bij andere verzamelobjecten. Bij Annesburg liggen er een stuk of acht bij elkaar, en de Strange Statues horen bij een puzzel met <a href=\"#/gold\">goudstaven</a>.",
      "De omschrijvingen helpen je de plek te herkennen. Exacte punten op de kaart vind je in de gidsen bij de bronnen."
    ],
    sources: [
      ["PixelTwelve (alle 50 per regio)", "https://pixeltwelve.com/articles/red-dead-redemption-2-points-of-interest"],
      ["rdr2.org (locaties)", "https://rdr2.org/guides/points-of-interest-guide"],
      ["GIGA (interessante Orte)", "https://www.giga.de/spiele/red-dead-redemption-2/gallery/red-dead-redemption-2-alle-interessanten-orte-fundorte-auf-der-karte/"],
      ["PowerPyx (100%)", "https://www.powerpyx.com/red-dead-redemption-2-100-guide-checklist/"]
    ],
    sections: [{ type: "checklist", columns: true, groups: [
      { id: "newhanover", title: "New Hanover (17)", items: [
        ["Abandoned Trading Post", "Ten noorden van Roanoke Valley"],
        ["Brush Fire", "De Heartlands, ten zuiden van Valentine"],
        ["Fossilized Man", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Manmade Mutant", "In de buurt van de Van Horn Trading Post"],
        ["Meteor House", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Meteorite", "Roanoke Valley, een inslagkrater"],
        ["Oil Derrick", "De Heartlands, iets ten zuiden van de A en R van Heartlands op de kaart"],
        ["Old Tomb", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Old World Scripts", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Register Rock", "De Heartlands, bij de Heartland Oil Fields"],
        ["Serpent Mound", "In de buurt van de Van Horn Trading Post"],
        ["Trading Post", "Ten oosten van Flatneck Station"],
        ["Trail Trees I", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Trail Trees II", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Trail Trees III", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Trail Trees IV", "Roanoke Ridge, in de buurt van Annesburg"],
        ["Warped Tree", "Op een heuvel ten zuiden van Larned Sod, niet ver van Emerald Ranch"]
      ] },
      { id: "lemoyne", title: "Lemoyne (9)", items: [
        ["Abandoned Church", "Ten zuiden van Rhodes"],
        ["Bolger Glade", "Scarlett Meadows, het oude slagveld"],
        ["Braithwaites' Secret", "Braithwaite Manor, ten zuiden van Rhodes"],
        ["Gray's Secret", "Volgens GIGA bij Caliga Hall"],
        ["Painting in Cabin", "Een schilderij in een hut in Lemoyne"],
        ["Phonograph", "Op een woonboot in Bluewater Marsh"],
        ["Pleasance", "Een spookdorp in Lemoyne"],
        ["Tiny Church", "Bayou Nwa, ten noorden van Saint Denis"],
        ["Withered Arm", "In de buurt van Saint Denis"]
      ] },
      { id: "ambarino", title: "Ambarino (9)", items: [
        ["Barrel Rider", "Ten noorden van Bacchus Station, aan de voet van een waterval"],
        ["Defaced Grave", "Grizzlies West"],
        ["Face in Cliff", "Een gezicht uitgehouwen in een bergwand in de Grizzlies"],
        ["Frozen Settler", "Grizzlies West, in de sneeuw"],
        ["Mammoth", "Grizzlies West, een mammoetskelet"],
        ["Meditating Monk", "Grizzlies East, op een klif"],
        ["Mysterious Hill Home", "Ten noordoosten van Bacchus Station. Een snelle eerste voor 100%."],
        ["Strange Statues", "In een grot ten noordoosten van Bacchus Station (zie <a href=\"#/gold\">Goudstaven</a>)"],
        ["Strange Statues Cave Painting", "Een rotstekening die bij de Strange Statues-puzzel hoort, volgens GIGA bij Window Rock"]
      ] },
      { id: "westelizabeth", title: "West Elizabeth (11)", items: [
        ["Circus Wagons", "Tall Trees, in de buurt van Manzanita Post"],
        ["Faces in Trees", "Ten westen van Strawberry, rond Owanjila"],
        ["Flying Machine", "PixelTwelve zet hem in West Elizabeth, rdr2.org in Cholla Springs (New Austin)"],
        ["Giant Remains", "Big Valley, een gigantisch skelet"],
        ["Hermit Woman", "Big Valley, bij de hut van een kluizenares"],
        ["Hidden Tunnel", "Big Valley"],
        ["Native Burial", "Ten westen van Strawberry, rond Owanjila"],
        ["Obelisk", "Ten noordwesten van Strawberry (ook de start van <a href=\"#/treasure\">Landmarks of Riches</a>)"],
        ["Pagan Ritual", "Ten westen van Strawberry, rond Owanjila"],
        ["Whale Bones", "Ten westen van Strawberry, rond Owanjila"],
        ["Wickiup", "Tall Trees"]
      ] },
      { id: "newaustin", title: "New Austin (4)", items: [
        ["Crashed Airship", "PixelTwelve zet hem in New Austin, rdr2.org in Big Valley (West Elizabeth)", "Epiloog"],
        ["Donkey Lady", "Cholla Springs", "Epiloog"],
        ["Jesuit Missionary", "Gaptooth Ridge", "Epiloog"],
        ["Sperm Whale Bones", "Rio Bravo, ten zuiden van Tumbleweed", "Epiloog"]
      ] }
    ] }],
    metrics: {
      found: () => RDR.ratio(keys()),
      counted: () => RDR.capped(RDR.ratio(keys()), 1)
    },
    meters: [["found", "Plekken gevonden"], ["counted", "Voor 100% (1 nodig)"]]
  });
})();
