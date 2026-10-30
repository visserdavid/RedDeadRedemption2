(() => {
  const hideouts = [
    ["sixpoint",  "Six Point Cabin",   "O'Driscoll Boys", "Cumberland Forest, ten noordoosten van Valentine", "Hoofdstuk 2 (verhaal)", true, ["Verhaal"],
      "Een stille aanpak met boog en jachtmes werkt hier goed, voordat het vuurgevecht begint."],
    ["shadybelle","Shady Belle",       "Lemoyne Raiders", "Ten zuidwesten van Saint Denis", "Hoofdstuk 3 (verhaal)", true, ["Verhaal"],
      "Wordt daarna het kamp van de bende. Stil of direct aanvallen kan allebei."],
    ["beaver",    "Beaver Hollow",     "Murfree Brood",   "Een grot ten westen van Annesburg", "Hoofdstuk 5 (verhaal)", true, ["Verhaal"],
      "Grot met twee ingangen. Bij de hoofdingang is een stille aanpak bijna onmogelijk."],
    ["hangingdog","Hanging Dog Ranch", "O'Driscoll Boys (epiloog: Laramie Gang)", "Ten westen van Valentine, bij Little Creek River", "Hoofdstuk 6 (verhaal)", true, ["Verhaal"],
      "Schakel eerst de man achter het Maxim-machinegeweer in de schuur uit."],
    ["thieves",   "Thieves' Landing",  "Del Lobo Gang",   "Het dorp Thieves' Landing", "Epiloog", true, ["Epiloog"],
      "Een van de lastigste: heel veel vijanden. Dood ze allemaal, anders telt het niet."],
    ["mercer",    "Fort Mercer",       "Del Lobo Gang",   "Ten zuiden van Mercer Station (New Austin)", "Epiloog", true, ["Epiloog"],
      "Ruim eerst de poort op en zoek dekking, zodat je niet van opzij wordt aangevallen. Dood iedereen."],
    ["twinrocks", "Twin Rocks",        "Del Lobo Gang",   "Ten noordwesten van Armadillo (New Austin)", "Epiloog", false, ["Epiloog", "Versie"],
      "Alleen in de Special/Ultimate Edition."],
    ["solomon",   "Solomon's Folly",   "Del Lobo Gang",   "Een verlaten boerderij ten zuiden van Benedict Point (Gaptooth Ridge)", "Epiloog", false, ["Epiloog", "Versie"],
      "Kwam met de pc-versie."]
  ];
  const gangs = [
    ["odriscoll", "O'Driscoll Boys",  "Vooral New Hanover en Ambarino, tot en met hoofdstuk 6"],
    ["raiders",   "Lemoyne Raiders",  "Lemoyne, onder andere Scarlett Meadows en Bluewater Marsh"],
    ["murfree",   "Murfree Brood",    "Roanoke Ridge, in de bossen en grotten"],
    ["nightfolk", "Night Folk",       "Bayou Nwa, vooral 's nachts"],
    ["skinner",   "Skinner Brothers", "Tall Trees (West Elizabeth)"],
    ["dellobo",   "Del Lobo Gang",    "West Elizabeth en New Austin"],
    ["laramie",   "Laramie Gang",     "Pas in de epiloog, onder andere bij Hanging Dog Ranch"]
  ];
  const cards = () => RDR.itemsOf("hideouts", "hideouts");
  RDR.list({
    id: "hideouts", title: "Gang hideouts", nav: "Hideouts", order: 140,
    heading: "Gang Hideouts Checklist", sub: "Red Dead Redemption 2 (story mode): de schuilplaatsen van de bendes om op te ruimen, en de bendes voor het compendium.", blurb: "De schuilplaatsen van de bendes en de 7 bendes voor het compendium. 6 schuilplaatsen zijn nodig voor 100%.",
    filter: "Verberg wat je al hebt gedaan",
    tips: [
    "Voor 100% heb je <strong>6 schuilplaatsen</strong> nodig, en alleen die met de tag <em>100%</em> tellen mee. Vier ervan doe je vanzelf in het verhaal. De andere twee, Thieves' Landing en Fort Mercer, ruim je in de epiloog op. Het aantal gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>.",
    "Een schuilplaats telt pas als je <strong>alle vijanden</strong> hebt gedood. Daarna kun je de buit doorzoeken: kisten, lockboxes en lijken.",
    "Een opgeruimde schuilplaats raakt na een tijdje weer bewoond, dus je kunt hem later opnieuw doen voor meer buit.",
    "Voor het compendium moet je <strong>6 bendes</strong> ontdekken. Een bende telt zodra je ze tegenkomt, bijvoorbeeld bij een hinderlaag of in hun schuilplaats."
  ],
    sources: [
    [
      "rdr2.org (gang hideouts)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-gang-hideouts-guide/"
    ],
    [
      "PowerPyx (100%)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-gang-hideout-locations/"
    ],
    [
      "eXputer",
      "https://exputer.com/guides/all-rd2-gang-hideout-locations/"
    ],
    [
      "GTABase (bendes)",
      "https://gtabase.com/red-dead-redemption-2/gangs"
    ]
  ],
    sections: [
      { type: "cards", id: "hideouts", title: "Schuilplaatsen", checkLabel: "<strong>Opgeruimd</strong>", doneText: "✓ opgeruimd",
        items: hideouts.map(([id, name, gang, where, when, counts, tags, tip]) => ({
          id, name, counts, tags: [counts ? "100%" : "telt niet", ...tags],
          fields: [["Bende", gang], ["Waar", where], ["Wanneer", when]], note: tip
        })) },
      { type: "checklist", title: "Bendes (compendium)", fields: ["id", "name", "where"], columns: true,
        groups: [{ id: "gangs", title: "Bendes", items: gangs }] }
    ],
    metrics: {
      done: () => RDR.ratio(RDR.keysOf("hideouts", "hideouts")),
      counted: () => RDR.capped(RDR.ratio(cards().filter(c => c.counts).map(c => c.checks[0].key)), 6),
      gangs: () => RDR.ratio(RDR.keysOf("hideouts", "gangs"))
    },
    meters: [["done", "Schuilplaatsen opgeruimd"], ["counted", "Voor 100% (6 nodig)"], ["gangs", "Bendes ontdekt"]],
    v1: {
      store: "rdr2-hideouts-v1",
      map: k => k.startsWith("h:") ? RDR.v1.byId("hideouts", "hideouts")(k.slice(2))
        : k.startsWith("g:") ? RDR.v1.byId("hideouts", "gangs")(k.slice(2)) : null
    }
  });
})();
