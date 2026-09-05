(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-food-dining"] = {
    id: "a1-food-dining",
    module: "vocabulary",
    level: "A1",
    title: "Food, Drinks & Dining",
    order: 24,
    requires: "a1-cest-il-est",
    visual: {
      kind: "card-grid",
      data: [
        { display: "le pain", speak: "le pain", gloss: "bread", ipa: "[luh pan]", tag: "" },
        { display: "le fromage", speak: "le fromage", gloss: "cheese", ipa: "[luh froh-mahzh]", tag: "" },
        { display: "les légumes / les fruits", speak: "les légumes et les fruits", gloss: "vegetables / fruit", ipa: "[lay lay-gewm / lay frwee]", tag: "accent" },
        { display: "l'eau / le vin", speak: "l'eau et le vin", gloss: "water / wine", ipa: "[loh / luh van]", tag: "accent" },
        { display: "l'addition", speak: "l'addition, s'il vous plaît", gloss: "the bill", ipa: "[lah-dee-syohn]", tag: "" },
        { display: "la carte", speak: "la carte du restaurant", gloss: "the menu", ipa: "[lah kart]", tag: "" }
      ]
    },
    content: {
      intro: "Grocery and restaurant French relies on the partitive articles (du pain, de la viande, des légumes) you already know, plus a fixed set of dining phrases (\"l'addition, s'il vous plaît\") that every learner needs before their first café visit.",
      tables: [
        {
          caption: "At the market and at the table",
          columns: ["French", "English"],
          rows: [
            ["Je voudrais du pain et du fromage.", "I would like some bread and some cheese."],
            ["Est-ce que je peux voir la carte ?", "Could I see the menu?"],
            ["Un verre d'eau, s'il vous plaît.", "A glass of water, please."],
            ["L'addition, s'il vous plaît !", "The bill, please!"]
          ]
        }
      ],
      example: { fr: "Au restaurant, je commande du poisson avec des légumes.", en: "At the restaurant, I order fish with vegetables." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"L'addition\" signifie :", opts: ["The bill", "The menu", "The waiter", "The order"], a: "The bill" },
        { q: "\"Le fromage\" signifie :", opts: ["Cheese", "Bread", "Wine", "Fruit"], a: "Cheese" },
        { q: "Comment demande-t-on le menu ?", opts: ["Est-ce que je peux voir la carte ?", "L'addition, s'il vous plaît.", "Je voudrais de l'eau.", "C'est combien ?"], a: "Est-ce que je peux voir la carte ?" },
        { q: "\"Les légumes\" signifie :", opts: ["Vegetables", "Fruit", "Meat", "Bread"], a: "Vegetables" },
        { q: "Quel article utilise-t-on avec \"pain\" pour dire \"some bread\" ?", opts: ["du pain", "le pain", "un pain", "des pain"], a: "du pain" }
      ]
    },
    reference: {
      read: [
        { title: "Bonjour de France", url: "https://www.bonjourdefrance.com/", note: "Graded reading and vocabulary exercises for food & dining" }
      ],
      watchListen: []
    }
  };
})();
