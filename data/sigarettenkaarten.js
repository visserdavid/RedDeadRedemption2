(() => {
  const groups = () => RDR.groupsOf("cigcards");
  // Een opgestuurde set telt als compleet, ook als de losse kaarten nooit zijn afgevinkt.
  const cards = g => (RDR.get(g.finishKey) ? g.items.length : RDR.count(g.keys));
  RDR.list({
    id: "cigcards", title: "Sigarettenkaarten", order: 170,
    heading: "Sigarettenkaarten Checklist", sub: "Red Dead Redemption 2 (story mode): alle 144 sigarettenkaarten in 12 sets, voor Phineas T. Ramsbottom.", blurb: "Alle 144 sigarettenkaarten in 12 sets, voor Phineas T. Ramsbottom.",
    filter: "Verberg kaarten die je al hebt",
    tips: [
    "Kaarten vind je op vaste plekken in de wereld (de plek staat onder elke kaart) of in <strong>pakjes sigaretten</strong> uit de winkel. Elk pakje dat je opent bevat een kaart.",
    "Een complete set stuur je via een <strong>postkantoor</strong> naar Phineas T. Ramsbottom. Voor elke set krijg je een beloning. Voor de eerste set krijg je ook de <strong>Vintage Civil War Handcuffs</strong> (voor de Alligator Tooth Talisman).",
    "Heb je alle 12 sets opgestuurd? Dan krijg je nog een extra beloning van $200.",
    "De kaarten in New Austin (onder andere bij Armadillo, Tumbleweed en Fort Brennand) haal je in de epiloog, of je koopt ze in pakjes."
  ],
    sources: [
    [
      "gamers.wiki (alle 144 kaarten)",
      "https://gamers.wiki/en/games/red-dead-redemption-2/guides/rdr2-cigarette-cards-all-144-locations-and-set-rewards"
    ],
    [
      "rdr2.org (sets en beloningen)",
      "https://www.rdr2.org/guides/red-dead-redemption-2-all-cigarette-cards-location-guide/"
    ],
    [
      "GamesRadar (locaties per regio)",
      "https://www.gamesradar.com/red-dead-redemption-2-cigarette-card-locations/"
    ],
    [
      "Red Dead Wiki",
      "https://reddead.fandom.com/wiki/Cigarette_Cards"
    ]
  ],
    sections: [{
      type: "checklist", grid: true,
      groups: [
    { id: "inventions", title: "Amazing Inventions", reward: "Volatile Dynamite + $100", items: [
      ["Steam Locomotive", ""], ["Camera", ""], ["Electrical Execution Apparatus", ""], ["Typewriter", ""],
      ["Revolver", ""], ["Telegraph", ""], ["Manned Glider", ""], ["Dynamite", ""],
      ["Cylinder Phonograph", ""], ["Player Piano", ""], ["Electric Light Bulb", ""], ["Fountain Pen", ""] ] },
    { id: "artists", title: "Artists, Writers & Poets", reward: "Ginseng Elixir + $100", items: [
      ["Edith Corinne", "Braithwaite Manor"], ["Elsie Rose", "Hotel in Strawberry"], ["W. G. Hoyt", "Hani's Bethel"],
      ["Aldous Bramley", "Blackwater"], ["Preston T. Stephenson", "Kantoor in Annesburg"], ["Evelyn Miller", "Blackwater"],
      ["Slick Hutton", "Van Horn Mansion"], ["Laurence Carson", "Steegje in Saint Denis"], ["Miss Maud Delancey", "Woonboot in Bluewater Marsh"],
      ["Charles Châtenay", "Chadwick Farm"], ["George Dixie", "Guthrie Farm"], ["Richard McCullough", "Prieel in Saint Denis"] ] },
    { id: "horses", title: "Breeds of Horses", reward: "Special Horse Medicine + $50", items: [
      ["American Paint", "Katoenfabriek bij Braithwaite"], ["Appaloosa", "Haven van Saint Denis"], ["Andalusian", "Ten oosten van de stal in Strawberry"],
      ["American Standardbred", "Op een tafel in een kinderkamer"], ["Nokota", "Stal in Rhodes"], ["Ardennes", "Wallace Station"],
      ["Dutch Warmblood", "Huis ten westen van Caliban's Seat"], ["Turkoman", "Hut bij O'Creagh's Run"], ["Hungarian Halfbred", "Smid in Armadillo"],
      ["Mustang", "Schuur ten zuidwesten van Valentine"], ["Thoroughbred", "Bij de wagens in Rhodes"], ["Missouri Fox Trotter", "Huis in de buurt van Braithwaite"] ] },
    { id: "gunslingers", title: "Famous Gunslingers", reward: "Special Snake Oil + $50", items: [
      ["Frank Heck", "Kerkhof van Valentine"], ["Otis Miller Boys", "Cumberland Forest"], ["Jack Hall Gang", "Chez Porter"],
      ["Butcher Brothers", "Rond Butcher Creek"], ["Flaco Hernández", "Dak van de bank in Rhodes"], ["Slim Grant", "Fairvale Shanty"],
      ["Landon Ricketts", "Armadillo"], ["Black Belle", "Pier van Blackwater"], ["Billy Midnight", "Windmolen in Tumbleweed"],
      ["Emmet Granger", "Canebreak Manor / Fort Wallace"], ["Jim 'Boy' Calloway", "Kerkhof van Saint Denis"], ["Bart Love", "Hanging Dog Ranch"] ] },
    { id: "fauna", title: "Fauna of North America", reward: "Perfecte konijnenhuid + $50", items: [
      ["Black Widow Spider", "Hut in het noorden van West Elizabeth"], ["Bloodhound", "Ruïne in Lemoyne"], ["Blue Jay", "Boomplatform in New Hanover"],
      ["Catfish", "Haven van Saint Denis"], ["Coral Snake", "Hut in Lakay"], ["Grouper", "Boot op de Kamassa River"],
      ["Large Mouth Bass", "Hut aan Flat Iron Lake"], ["Panther", "Verlaten dorp bij Van Horn"], ["Parrot", "Pier in Lemoyne"],
      ["Pheasant", "Boomplatform in New Hanover"], ["Snapping Turtle", "Huis in Cumberland Forest"], ["Turkey", "Sheriffkantoor in Van Horn"] ] },
    { id: "flora", title: "Flora of North America", reward: "Special Miracle Tonic + $50", items: [
      ["Golden Currant", "Hut in Lakay"], ["Hummingbird Sage", "Huis ten zuiden van Butcher Creek"], ["Oleander Sage", "Begroeide reling in Saint Denis"],
      ["Yarrow", "Hut in Lakay"], ["Indian Tobacco", "Rond Lakay"], ["Black Mangrove", "Emerald Station"],
      ["Longleaf Pine", "Mijn van Annesburg"], ["Desert Fan Palm", "Huis in Tumbleweed"], ["Coastal Redwood", "Huis bij Strawberry"],
      ["Horse Crippler Cactus", "Caliga Hall"], ["Blazing Star", "Vetter's Echo"], ["Carolina Lupine", "Sheriffkantoor in Tumbleweed"] ] },
    { id: "gems", title: "Gems of Beauty", reward: "Platinum Chain Necklace + $100", items: [
      ["Leila Stetson", "Huis in New Hanover"], ["Isabelle Barlow", "Handelspost in Roanoke Valley"], ["Hattie Langtry", "Hut ten zuiden van Isabelle Barlow"],
      ["Isabelle Standish", "Mijn van Annesburg"], ["Maud Engel", "Heartland Oil Fields"], ["Sadie Russell", "Kippenhok ten zuiden van Blackwater"],
      ["Geraldine Emerson", "Schuur in West Elizabeth"], ["Agnès Guyon", "Hut in Grizzlies West"], ["Jennie Willetts", "Van Horn"],
      ["Ilga Ulmer", "Steegje in Saint Denis"], ["Fay Delaro", "Veilingschuur in Valentine"], ["Pauline Henderson", "Bacchus Station"] ] },
    { id: "travel", title: "Marvels of Travel", reward: "Aged Pirate Rum + $50", items: [
      ["Packet Ship", "Haven van Annesburg"], ["Schooner", "Pier van Van Horn"], ["Camel Caravan", "Rhodes"],
      ["Elephant Carriage", "Strawberry"], ["Goat Carriage", "Emerald Ranch"], ["Hot Air Balloon", "Saloon in Saint Denis"],
      ["U.S. Frigate", "Botenhuis in Saint Denis"], ["The Showboat", "Huis van de havenmeester in Saint Denis"], ["Balener Whaling Vessel", "Kaartjeshokje in Saint Denis"],
      ["Stagecoach", "Riggs Station"], ["Steam Locomotive", "Ruïne bij Clemens Point"], ["Velocipede", "Groen gebouw in Saint Denis"] ] },
    { id: "americans", title: "Prominent Americans", reward: "3 adelaarsveren + $50", items: [
      ["President Fisher", "Pakhuis in Jansen Mills"], ["President Hardin", "Lagras"], ["Lillian Powell", "Schuur in Lemoyne"],
      ["Leviticus Cornwall", "Rond Valentine"], ["J. D. McKnight", "Prieel in Rhodes"], ["Luther Covington", "Pakhuis in Saint Denis"],
      ["Harvey Griggs", "Station van Saint Denis"], ["Henrietta Beatrice Woods", "Rood houten huis in Saint Denis"], ["General Quincy Harris", "Heartland Oil Fields"],
      ["General Cornelius Palmer", "Boerderij bij Mattock Pond"], ["Senator Thaddeus Waxman", "Huis met stapelbedden"], ["President Alfred Macalister", "Hut in Saint Denis"] ] },
    { id: "stage", title: "Stars of the Stage", reward: "Small Jewelry Bag + $50", items: [
      ["Laurence Dunn", "Boerderij in Southfield Flats"], ["Louis Durand", "Verlaten huis ten westen van Van Horn"], ["Jesse Raymond", "Afgebrand huis in Tumbleweed"],
      ["Augusta Tremlow", "Hanging Dog Ranch"], ["Mabel Potter", "Théâtre Râleur (Saint Denis)"], ["Robin Koninsky", "Théâtre Râleur, na vijf voorstellingen"],
      ["Isadore Reid", "Reizende show in Valentine"], ["Irene Grubb", "Rond MacFarlane's Ranch"], ["Nettie Palmer", "Show in Valentine"],
      ["Jim Cobb", "Southfield Flats"], ["Mittie Comstock", "Rond Larned Sod"], ["Robert Elliot Patchen", "Verlaten huis in Lemoyne"] ] },
    { id: "vistas", title: "Vistas of America", reward: "Gold Nugget + $100", items: [
      ["New York", "Caliga Hall"], ["Saint Denis", "Bij het postkantoor van Saint Denis"], ["Blackwater", "Dak van het theater in Blackwater"],
      ["Armadillo", "Varkenshok in Armadillo"], ["Rio Bravo", "Flatneck Station"], ["The Grizzlies", "Rond Lake Don Julio"],
      ["San Francisco", "Fort Brennand"], ["Tall Trees", "Flatneck Station"], ["Valentine", "Station van Valentine"],
      ["Chicago", "Windmolen bij Emerald Ranch"], ["Rhodes", "Kerkhof van Rhodes"], ["Annesburg", "Mijnspoor in Annesburg"] ] },
    { id: "champions", title: "The World's Champions", reward: "Valerian Root + $50", items: [
      ["Percy Wood (worstelaar)", "Waterput in New Hanover"], ["Edwin A. Rowe (biljart)", "Clawson's Rest"], ["Theobaud Getzin (bokser)", "Emerald Ranch"],
      ["H. T. Slocum (roeier)", "Rond Canebreak Manor"], ["R. S. Harradon (wielrenner)", "Huis tegenover dat van Slocum"], ["E. D. Ewing (snelwandelaar)", "Old Trail Rise"],
      ["Patsey Hill (tennis)", "Reling van de achterveranda van een hut"], ["William Sleicher (gewichtheffer)", "Heartland Oil Fields"], ["Edwin Singerly (kleiduivenschieten)", "Mijntoren in Annesburg"],
      ["Felix Hawley (schaatser)", "Rond Barrow Lagoon"], ["Capt. Jack Page (kogelslingeren)", "Hut in het noorden van Ambarino"], ["Axel McCormack (knotsen zwaaien)", "Achter de Bastille Saloon (Saint Denis)"] ] }
  ].map(s => ({ ...s, finish: "Set opgestuurd naar Phineas" })),
      status: g => {
        const sent = !!RDR.get(g.finishKey), have = cards(g);
        return { done: sent, text: sent ? "✓ opgestuurd" : have === g.items.length ? "klaar om op te sturen" : `${have}/${g.items.length}` };
      }
    }],
    metrics: {
      cards: () => ({ have: RDR.sum(groups(), cards), total: RDR.sum(groups(), g => g.items.length) }),
      sets: () => RDR.ratio(groups().map(g => g.finishKey))
    },
    meters: [["cards", "Kaarten verzameld"], ["sets", "Sets opgestuurd"]],
    v1: {
      store: "rdr2-cigcards-v1",
      map: k => k.startsWith("sent:") ? RDR.part("cigcards", k.slice(5)).finishKey : RDR.v1.byIndex("cigcards")(k)
    }
  });
})();
