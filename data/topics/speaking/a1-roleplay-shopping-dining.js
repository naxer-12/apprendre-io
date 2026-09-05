(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-roleplay-shopping-dining"] = {
    id: "a1-roleplay-shopping-dining",
    module: "speaking",
    level: "A1",
    title: "Simulated Role-Play: Everyday Shopping & Dining",
    order: 45,
    requires: "a1-question-asking-speaking",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Je voudrais...", speak: "Je voudrais un croissant", gloss: "I would like...", ipa: "[zhuh voo-dray]", tag: "accent" },
        { display: "Vous avez... ?", speak: "Vous avez du pain complet ?", gloss: "Do you have... ?", ipa: "[voo zah-vay]", tag: "" },
        { display: "L'addition, svp", speak: "L'addition, s'il vous plaît", gloss: "The bill, please", ipa: "[lah-dee-syohn]", tag: "accent" },
        { display: "Je paie comment ?", speak: "Je peux payer par carte ?", gloss: "Can I pay by card?", ipa: "[zhuh puh pay-yay]", tag: "" }
      ]
    },
    content: {
      intro: "This role-play strings together the polite formulas from earlier topics into one live exchange: greeting the seller, asking for an item with \"je voudrais\", asking the price, and paying. Keep it short and formulaic — the examiner is listening for fluency of set phrases, not improvisation.",
      tables: [
        {
          caption: "Shopping & café role-play script",
          columns: ["Prompt / Question", "Natural Spoken Response", "English Meaning"],
          rows: [
            ["Bonjour, vous désirez ?", "Bonjour, je voudrais deux croissants, s'il vous plaît.", "Hello, what would you like? — I'd like two croissants, please."],
            ["Autre chose ?", "Oui, vous avez du jus d'orange ?", "Anything else? — Yes, do you have orange juice?"],
            ["Ça fait sept euros.", "Voilà. Je peux payer par carte ?", "That's seven euros. — Here you go. Can I pay by card?"],
            ["Bien sûr.", "Merci, l'addition était correcte. Bonne journée !", "Of course. — Thanks, the bill was right. Have a nice day!"]
          ]
        }
      ],
      example: { fr: "Bonjour, je voudrais un café et un croissant, s'il vous plaît. Ça fait combien ?", en: "Hello, I'd like a coffee and a croissant, please. How much is that?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment demande-t-on poliment un article ?", opts: ["Je voudrais...", "Je suis...", "J'ai...", "Je fais..."], a: "Je voudrais..." },
        { q: "Comment demande-t-on la note à la fin d'un repas ?", opts: ["L'addition, s'il vous plaît.", "Le menu, s'il vous plaît.", "La carte, s'il vous plaît.", "Le pain, s'il vous plaît."], a: "L'addition, s'il vous plaît." },
        { q: "\"Vous avez du pain complet ?\" demande...", opts: ["si un article est disponible", "le prix", "l'heure", "le nom du serveur"], a: "si un article est disponible" },
        { q: "Comment demande-t-on si on peut payer par carte ?", opts: ["Je peux payer par carte ?", "Je voudrais une carte ?", "Vous avez une carte ?", "C'est une carte ?"], a: "Je peux payer par carte ?" },
        { q: "Réponse polie à \"Bonne journée !\" en partant :", opts: ["Merci, à vous aussi !", "Ça fait combien ?", "Je voudrais ça.", "Vous avez du pain ?"], a: "Merci, à vous aussi !" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded shopping and café role-play exercises, A1" }
      ],
      watchListen: []
    }
  };
})();
