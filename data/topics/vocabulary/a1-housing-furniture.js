(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-housing-furniture"] = {
    id: "a1-housing-furniture",
    module: "vocabulary",
    level: "A1",
    title: "Housing, Rooms & Furniture",
    order: 19,
    requires: "a1-family",
    visual: {
      kind: "card-grid",
      data: [
        { display: "la maison", speak: "la maison", gloss: "house", ipa: "[lah may-zohn]", tag: "" },
        { display: "l'appartement", speak: "l'appartement", gloss: "apartment", ipa: "[lah-par-tuh-mahn]", tag: "accent" },
        { display: "la chambre", speak: "la chambre", gloss: "bedroom", ipa: "[lah shahm-br]", tag: "" },
        { display: "la cuisine", speak: "la cuisine", gloss: "kitchen", ipa: "[lah kwee-zeen]", tag: "" },
        { display: "le salon", speak: "le salon", gloss: "living room", ipa: "[luh sah-lohn]", tag: "" },
        { display: "le canapé / le lit", speak: "le canapé et le lit", gloss: "sofa / bed", ipa: "[luh kah-nah-pay / luh lee]", tag: "accent" }
      ]
    },
    content: {
      intro: "French housing vocabulary makes a firm distinction between \"une maison\" (a standalone house) and \"un appartement\" (a flat), and room names are almost always used with the definite article (la cuisine, le salon) when talking about your own home's layout.",
      tables: [
        {
          caption: "Describing a home",
          columns: ["French", "English"],
          rows: [
            ["J'habite dans un appartement au troisième étage.", "I live in an apartment on the third floor."],
            ["Il y a trois chambres et une salle de bain.", "There are three bedrooms and one bathroom."],
            ["Le salon a un grand canapé.", "The living room has a big sofa."],
            ["Le réfrigérateur est dans la cuisine.", "The fridge is in the kitchen."]
          ]
        }
      ],
      example: { fr: "Notre maison a un salon, une cuisine et deux chambres.", en: "Our house has a living room, a kitchen, and two bedrooms." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"L'appartement\" signifie :", opts: ["Apartment", "House", "Room", "Kitchen"], a: "Apartment" },
        { q: "Où se trouve normalement le réfrigérateur ?", opts: ["Dans la cuisine", "Dans le salon", "Dans la chambre", "Dans la salle de bain"], a: "Dans la cuisine" },
        { q: "\"Le lit\" signifie :", opts: ["Bed", "Sofa", "Table", "Chair"], a: "Bed" },
        { q: "\"La chambre\" signifie :", opts: ["Bedroom", "Bathroom", "Living room", "Kitchen"], a: "Bedroom" },
        { q: "Quel mot décrit une maison individuelle (non un appartement) ?", opts: ["la maison", "l'appartement", "le salon", "l'étage"], a: "la maison" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons", url: "https://en.wikibooks.org/wiki/French/Lessons", note: "Housing & furniture vocabulary lists" }
      ],
      watchListen: []
    }
  };
})();
