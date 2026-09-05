(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-numbers-prices-listening"] = {
    id: "a1-numbers-prices-listening",
    module: "listening",
    level: "A1",
    title: "Recognizing Numbers, Prices, Times & Phone Numbers",
    order: 40,
    requires: "a1-listening-comprehension",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Ça fait combien ?", speak: "Ça fait combien ?", gloss: "How much is it?", ipa: "[sah fay kohn-byan]", tag: "accent" },
        { display: "Un numéro", speak: "Quel est votre numéro ?", gloss: "A (phone) number", ipa: "[uh new-may-roh]", tag: "" },
        { display: "Il est... heures", speak: "Il est dix heures", gloss: "It is ... o'clock", ipa: "[eel ay dee-zuhr]", tag: "accent" },
        { display: "Vingt euros", speak: "Ça fait vingt euros", gloss: "Twenty euros", ipa: "[van uh-roh]", tag: "" }
      ]
    },
    content: {
      intro: "French numbers change shape fast in fast speech — liaison links digits together (\"vingt euros\" sounds like \"van-tuh-roh\", not four separate words). This lesson trains your ear to isolate digits, prices, times, and phone numbers from a spoken stream. Click any speaker icon to hear it, then listen for the digits inside the dialogue below.",
      tables: [
        {
          caption: "Audio dialogue: Au marché",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Cliente", "Bonjour, c'est combien les tomates ?", "Hello, how much are the tomatoes?"],
            ["Vendeur", "Trois euros vingt le kilo, madame.", "Three euros twenty per kilo, ma'am."],
            ["Cliente", "D'accord, j'en prends un kilo. Et les pommes ?", "Okay, I'll take a kilo. And the apples?"],
            ["Vendeur", "Deux euros cinquante. Ça fait cinq euros soixante-dix en tout.", "Two euros fifty. That's five seventy in total."]
          ]
        }
      ],
      example: { fr: "Ça fait cinq euros soixante-dix en tout.", en: "That comes to five euros seventy in total." },
      callouts: [
        {
          label: "Listen for liaison",
          body: "\"Vingt euros\" and \"deux euros\" both link the final consonant of the number onto the vowel of \"euros\" — the digit and the noun blend into one sound block, which is why spoken prices sound faster than written ones.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Combien coûtent les tomates au kilo ?", opts: ["3,20 €", "2,50 €", "5,70 €", "10,00 €"], a: "3,20 €" },
        { q: "Combien coûtent les pommes ?", opts: ["2,50 €", "3,20 €", "1,50 €", "4,00 €"], a: "2,50 €" },
        { q: "Quel est le total de la commande ?", opts: ["5,70 €", "3,20 €", "6,50 €", "5,50 €"], a: "5,70 €" },
        { q: "Que demande la cliente au début ?", opts: ["C'est combien les tomates ?", "Où sont les pommes ?", "Quelle heure est-il ?", "Avez-vous un stylo ?"], a: "C'est combien les tomates ?" },
        { q: "Quelle quantité de tomates la cliente prend-elle ?", opts: ["Un kilo", "Deux kilos", "Un demi-kilo", "Trois kilos"], a: "Un kilo" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded listening exercises for numbers and everyday transactions" }
      ],
      watchListen: []
    }
  };
})();
