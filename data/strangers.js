(() => {
  const chapters = [
    { id: "c2", title: "Hoofdstuk 2", items: [
      { id: "noblest",  name: "The Noblest of Men, and a Woman", who: "Theodore Levin", where: "Saloon in Valentine", counts: true,
        note: "Duels met vier legendarische gunslingers. Raap na elk duel het unieke wapen op, anders is het weg.", link: ["#/weapons", "Wapens"] },
      { id: "glitters", name: "All That Glitters", who: "Maximo Cristobal Valdespino", where: "Ten westen van Flatneck Station", counts: false,
        note: "Verkoopt je de schatkaart van de Jack Hall Gang.", link: ["#/treasure", "Schatkaarten"] },
      { id: "grease",   name: "The Smell of the Grease Paint", where: "Bij de Van Horn Trading Post", counts: true },
      { id: "arcadia",  name: "Arcadia for Amateurs", who: "Evelyn Miller", where: "Ten zuidoosten van Strawberry", counts: true },
      { id: "fundraiser", name: "Fundraiser", where: "Saint Denis", counts: false,
        note: "<strong>Missable:</strong> alleen beschikbaar tot en met hoofdstuk 6." },
      { id: "dreams",   name: "American Dreams", where: "Begint bij een van de plaatsen delict (onder andere bij Valentine)", counts: true,
        note: "Onderzoek drie plaatsen delict en vind de seriemoordenaar." },
      { id: "night",    name: "A Fine Night For It", where: "'s Nachts op de weg bij Lagras (Bayou Nwa)", counts: true },
      { id: "geology",  name: "Geology for Beginners", who: "Francis Sinclair", where: "Ten noordwesten van Strawberry", counts: true,
        note: "De 10 rotstekeningen.", link: ["#/collectibles", "Verzamelobjecten"] },
      { id: "faith",    name: "A Test of Faith", who: "Deborah MacGuiness", where: "Ten noordoosten van Flatneck Station", counts: true,
        note: "De 30 dinosaurusbotten. Kan pas helemaal in de epiloog.", link: ["#/collectibles", "Verzamelobjecten"] },
      { id: "smoking",  name: "Smoking and Other Hobbies", who: "Phineas T. Ramsbottom", where: "Flatneck Station", counts: true,
        note: "De 144 sigarettenkaarten.", link: ["#/cigcards", "Sigarettenkaarten"] }
    ] },
    { id: "c3", title: "Hoofdstuk 3", items: [
      { id: "british",  name: "He's British, of Course", who: "Margaret", where: "Ten zuiden van Emerald Ranch", counts: true,
        note: "Ontsnapte circusdieren vangen. Beloning: de Lion's Paw.", link: ["#/trinkets", "Trinkets"] },
      { id: "fisher",   name: "A Fisher of Fish", who: "Jeremy Gill", where: "Flat Iron Lake", counts: true,
        note: "De 13 legendarische vissen.", link: ["#/fish", "Vissen"] },
      { id: "iniquities", name: "The Iniquities of History", who: "Jeremiah Compson", where: "Rhodes, bij het station", counts: true },
      { id: "gooddeed", name: "No Good Deed", where: "Rhodes", counts: true }
    ] },
    { id: "c4", title: "Hoofdstuk 4", items: [
      { id: "brother",  name: "Oh, Brother", who: "Proetus en Acrisius", where: "Valentine", counts: true },
      { id: "bouncing", name: "A Bright Bouncing Boy", who: "Marko Dragic", where: "Saint Denis", counts: true,
        note: "Beloning: de Electric Lantern." },
      { id: "mercies",  name: "The Mercies of Knowledge", where: "Saint Denis", counts: true },
      { id: "artist",   name: "The Artist's Way", who: "Charles Châtenay", where: "Saint Denis", counts: true },
      { id: "ties",     name: "The Ties That Bind Us", where: "Rhodes", counts: true },
      { id: "helpbro",  name: "Help a Brother Out", who: "Brother Dorkins", where: "Saint Denis", counts: false,
        note: "<strong>Missable:</strong> optionele honor-missie, alleen in hoofdstuk 4." },
      { id: "duchesses", name: "Duchesses and Other Animals", who: "Algernon Wasp", where: "Ten noorden van Saint Denis", counts: true,
        note: "De exotics. Beloning: Algernon's Revolver.", link: ["#/exotics", "Exotics"] },
      { id: "idealism", name: "Idealism and Pragmatism for Beginners", where: "Saint Denis", counts: true }
    ] },
    { id: "c5", title: "Hoofdstuk 5", items: [
      { id: "elders",   name: "The Wisdom of the Elders", where: "Ten westen van Van Horn", counts: true },
      { id: "widow",    name: "The Widow of Willard's Rest", who: "Charlotte Balfour", where: "Willard's Rest, ten noorden van Annesburg", counts: false,
        note: "<strong>Missable:</strong> alleen beschikbaar tot en met hoofdstuk 6." }
    ] },
    { id: "c6", title: "Hoofdstuk 6", items: [
      { id: "veteran",  name: "The Veteran", who: "Hamish Sinclair", where: "O'Creagh's Run", counts: true,
        note: "Beloning: Buell, de Cremello Gold Dutch Warmblood.", link: ["#/horses", "Paarden"] }
    ] },
    { id: "ep", title: "Epiloog", items: [
      { id: "inferno",  name: "The American Inferno, Burnt Out", where: "Ten westen van Blackwater", counts: true }
    ] }
  ];
  const items = () => RDR.groupsOf("strangers").flatMap(g => g.items);
  const MISSABLE = ["fundraiser", "helpbro", "widow"];
  RDR.list({
    id: "strangers", title: "Stranger-missies", nav: "Strangers", order: 120,
    heading: "Stranger-missies Checklist", sub: "Red Dead Redemption 2 (story mode): alle verhaallijnen van de vreemden (<em>Strangers</em>), per hoofdstuk waarin ze vrijkomen.", blurb: "Alle 26 verhaallijnen van de vreemden (vraagteken-iconen op de kaart). 10 afgeronde lijnen zijn nodig voor 100%.",
    filter: "Verberg afgeronde verhaallijnen",
    tips: [
    "Strangers staan als een wit <strong>vraagteken</strong> op de kaart. Sommige verschijnen pas als je dichtbij bent. Een verhaallijn bestaat vaak uit meerdere delen, met soms een paar dagen in de game ertussen.",
    "Voor 100% heb je <strong>10 afgeronde verhaallijnen</strong> nodig, en alleen lijnen met de tag <em>100%</em> tellen mee. Dat aantal gaat automatisch naar de pagina <a href=\"#/hundred\">100%</a>.",
    "Je voortgang zie je in de game onder <em>Progress → Total Completion → Strangers</em>.",
    "Bijna alle verhaallijnen kun je ook na het verhaal nog afmaken. Er zijn drie uitzonderingen, die hieronder bij <em>Let op: missable</em> staan."
  ],
    sources: [
    [
      "PowerPyx (alle verhaallijnen)",
      "https://www.powerpyx.com/red-dead-redemption-2-stranger-missions-walkthrough/"
    ],
    [
      "PowerPyx (startlocaties)",
      "https://www.powerpyx.com/red-dead-redemption-2-all-stranger-locations-map/"
    ],
    [
      "SegmentNext (personages en beloningen)",
      "https://segmentnext.com/red-dead-redemption-2-stranger-missions-guide/"
    ],
    [
      "Push Square (100%)",
      "https://www.pushsquare.com/guides/red-dead-redemption-2-how-to-complete-10-stranger-mission-strands"
    ]
  ],
    sections: [
      { type: "html", title: "Let op: missable", html: "<div class=\"card\"> <ul class=\"tips\"> <li><strong>Fundraiser</strong> en <strong>The Widow of Willard's Rest</strong> zijn alleen beschikbaar tot en met hoofdstuk 6.</li> <li><strong>Help a Brother Out</strong> kun je alleen in hoofdstuk 4 doen.</li> <li>Deze drie tellen niet mee voor 100%. Mis je ze, dan mis je alleen het verhaal.</li> </ul> </div> <div id=\"hideFilter\" style=\"margin-top:24px\"></div> <div id=\"chapters\"></div>" },
      { type: "checklist", columns: true, groups: chapters.map(c => ({ ...c, items: c.items.map(s => ({
        id: s.id, name: s.name, strong: true, counts: s.counts,
        tag: s.counts ? "100%" : "telt niet",
        where: `${s.who ? `${s.who} · ` : ""}${s.where}`,
        note: s.note,
        link: s.link && [s.link[0], `Afvinklijst: ${s.link[1]}`]
      })) })) }
    ],
    metrics: {
      done: () => RDR.ratio(items().map(i => i.key)),
      counted: () => RDR.capped(RDR.ratio(items().filter(i => i.counts).map(i => i.key)), 10),
      missable: () => RDR.ratio(items().filter(i => MISSABLE.includes(i.id)).map(i => i.key))
    },
    meters: [["done", "Verhaallijnen afgerond"], ["counted", "Tellend voor 100% (10 nodig)"], ["missable", "Missable gedaan"]],
    v1: {
      store: "rdr2-strangers-v1",
      map: k => { const it = items().find(i => `s:${i.id}` === k); return it ? it.key : null; }
    }
  });
})();
