(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-clothing-colors"] = {
    id: "a1-clothing-colors",
    module: "vocabulary",
    level: "A1",
    title: "Clothing, Colors & Sizes",
    order: 25,
    requires: "a1-food-dining",
    visual: {
      kind: "card-grid",
      data: [
        { display: "un pantalon", speak: "un pantalon", gloss: "pants", ipa: "[an pahn-tah-lohn]", tag: "" },
        { display: "une chemise / une robe", speak: "une chemise et une robe", gloss: "shirt / dress", ipa: "[ewn shuh-meez / ewn rohb]", tag: "" },
        { display: "des chaussures", speak: "des chaussures", gloss: "shoes", ipa: "[day shoh-sewr]", tag: "" },
        { display: "rouge / bleu(e) / noir(e)", speak: "rouge, bleu, noir", gloss: "red / blue / black", ipa: "[roozh / bluh / nwahr]", tag: "accent" },
        { display: "la taille", speak: "quelle est votre taille ?", gloss: "size", ipa: "[lah tie]", tag: "" },
        { display: "essayer", speak: "je peux essayer ?", gloss: "to try on", ipa: "[eh-say-yay]", tag: "" }
      ]
    },
    content: {
      intro: "Colors are adjectives in French and must agree in gender/number with the clothing item they describe (une chemise bleue, des chaussures noires), and \"la taille\" covers both clothing size and a person's height, so context matters.",
      tables: [
        {
          caption: "Shopping for clothes",
          columns: ["French", "English"],
          rows: [
            ["Je cherche un pantalon noir.", "I'm looking for black pants."],
            ["Quelle taille faites-vous ?", "What size are you (clothing)?"],
            ["Est-ce que je peux essayer cette robe ?", "Can I try on this dress?"],
            ["Elle porte des chaussures rouges.", "She's wearing red shoes."]
          ]
        }
      ],
      example: { fr: "Il porte une chemise bleue et un pantalon noir.", en: "He is wearing a blue shirt and black pants." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment accorde-t-on \"bleu\" avec \"une chemise\" ?", opts: ["bleue", "bleu", "bleus", "bleues"], a: "bleue" },
        { q: "\"La taille\" peut signifier :", opts: ["Size (clothing)", "Color", "Price", "Shoe brand"], a: "Size (clothing)" },
        { q: "\"Essayer\" signifie :", opts: ["To try on", "To buy", "To wear", "To wash"], a: "To try on" },
        { q: "\"Des chaussures\" signifie :", opts: ["Shoes", "Pants", "Shirts", "Dresses"], a: "Shoes" },
        { q: "Comment dit-on \"black pants\" ?", opts: ["un pantalon noir", "une chemise noire", "des chaussures noires", "un pantalon rouge"], a: "un pantalon noir" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons", url: "https://en.wikibooks.org/wiki/French/Lessons", note: "Clothing and color adjective vocabulary" }
      ],
      watchListen: []
    }
  };
})();
