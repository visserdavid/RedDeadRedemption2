(() => {
  const keys = () => RDR.keysOf("shacks", "shacks");
  RDR.list({
    id: "shacks", title: "Shacks", order: 107,
    heading: "Shacks Checklist",
    sub: "Red Dead Redemption 2 (story mode): de 19 verlaten hutten, elk met een eigen (vaak somber) verhaal en wat buit.",
    blurb: "De 19 verlaten hutten met een eigen verhaal en buit. 5 zijn nodig voor 100%.",
    filter: "Verberg hutten die je al hebt bezocht",
    tips: [
      "Een shack is een afgelegen hut met een eigen verhaal: je vindt er briefjes, lichamen of andere aanwijzingen over wat er is gebeurd, en meestal wat buit (sigarettenkaarten, sieraden, proviand).",
      "Voor 100% heb je er <strong>5</strong> nodig; je ziet je stand in de game onder <em>Progress → Total Completion → Shacks</em>. Volgens GamingBolt telt een hut zodra je naar binnen gaat; PowerPyx noemt de eerste vijf waar de game je naartoe leidt. Het aantal hier gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>.",
      "Geen enkele hut is missable. Drie hutten worden pas na het verhaal gebouwd en bezoek je dus in de epiloog.",
      "Doorzoek kasten, lades en kisten: in veel hutten ligt een <a href=\"#/cigcards\">sigarettenkaart</a>."
    ],
    sources: [
      ["SegmentNext (alle 19 hutten)", "https://segmentnext.com/red-dead-redemption-2-shacks-locations-guide/"],
      ["GosuNoob (verhalen)", "https://www.gosunoob.com/red-dead-redemption-2/shacks-locations-map/"],
      ["Game Rant (bijzondere hutten)", "https://gamerant.com/red-dead-redemption-2-best-shacks-locations/"],
      ["PowerPyx (aantal en 100%)", "https://www.powerpyx.com/red-dead-redemption-2-all-shack-locations/"],
      ["GamingBolt (wat telt)", "https://gamingbolt.com/red-dead-redemption-2-guide-shacks-for-100-completion-and-fence-locations"]
    ],
    sections: [{ type: "checklist", columns: true, groups: [{ id: "shacks", title: "Shacks (19)", items: [
      ["Dormin Crest", "In het ijzige noordwesten, ten westen van Spider Gorge. Sigarettenkaart en proviand."],
      ["Fairvale Shanty", "Ten oosten van Calumet Ravine, ten noorden van O'Creagh's Run. Lijken, een gouden klompje, een platina zakhorloge en sieraden."],
      ["Snowfield", "Ten zuiden van Dormin Crest, ten westen van Lake Isabella. In een afgesloten la ligt een briefje met een cheatcode."],
      ["Dodd's Bluff", "Ten zuiden van Window Rock, bij de rivier. Twee bebloede lichamen, een koevoet en het gouden klompje waar ze om vochten."],
      ["Clawson's Rest", "Ten westen van Valentine, voorbij de Dakota River en het spoor. Meerdere lichamen, een stuiversroman en sigarettenkaarten."],
      ["Martha's Swain", "Tussen Annesburg en Moonstone Pond, bij Three Sisters. Proviand en sieraden."],
      ["Hani's Bethel", "Direct ten noorden van Emerald Ranch, bij een klein meer. Bedden met menselijke resten en het briefje <em>Mysterious Sermon</em>."],
      ["Vetter's Echo", "Big Valley, ten oosten van Pronghorn Ranch. Sigarettenkaart en geld. Pas op voor een grizzly."],
      ["Shepherd's Rise", "Ten zuidoosten van Wallace Station, bij het spoor. Wordt pas na het verhaal gebouwd.", "Epiloog"],
      ["Ridge View", "Ten oosten van Emerald Station. Vol kruiden. Wordt pas na het verhaal gebouwd.", "Epiloog"],
      ["Osman Grove", "Ten zuidwesten van Ridge View. Lichamen, een boek en proviand."],
      ["Lenora View", "Blauw huisje op de oostflank van Mount Shann, ten noorden van Strawberry. Bloemen en een brief van een man die zijn nieuwe vrouw gaat ophalen."],
      ["Old Trail Rise", "De Heartlands, ten oosten van Dewberry Creek. Afgebrand; in de kelder liggen Valerian Root, een sigarettenkaart en geld."],
      ["Robard Farm", "Ten noorden van Rhodes. Sigarettenkaart, geld en proviand."],
      ["Bayall Edge", "In het westen van de Bayou, bij de Kamassa River. Een van de griezeligste: rijmpjes en verhalen over Arthur op de muren."],
      ["Bear Claw Camp", "Ten zuidwesten van Blackwater. Meerdere gebouwen; in de droge put ligt een kistje met geld."],
      ["Argil Rise", "Ten zuidoosten van Rhodes. Wordt pas na het verhaal gebouwd.", "Epiloog"],
      ["Crawdad Willies", "Ten oosten van Shady Belle. Een bloedspoor leidt naar ontsnapte gevangenen."],
      ["Old Harry Fen", "Het zuidelijkste puntje van Lemoyne, ten zuiden van Braithwaite Manor en Bolger Glade. Een foto van een slavenfamilie en een krantenknipsel over een beloning voor een gevluchte slaaf."]
    ] }] }],
    metrics: {
      visited: () => RDR.ratio(keys()),
      counted: () => RDR.capped(RDR.ratio(keys()), 5)
    },
    meters: [["visited", "Hutten bezocht"], ["counted", "Voor 100% (5 nodig)"]]
  });
})();
