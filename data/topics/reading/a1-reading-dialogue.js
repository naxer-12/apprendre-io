(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-reading-dialogue"] = {
    id: "a1-reading-dialogue",
    module: "reading",
    level: "A1",
    title: "Au Café: Reading & Dialogue Comprehension",
    order: 1,
    requires: null,
    visual: {
      kind: "table",
      data: {
        columns: ["Personnage", "Réplique (French)", "Traduction (English)"],
        rows: [
          ["Serveur", "Bonjour monsieur, vous désirez ?", "Hello sir, what would you like?"],
          ["Lucas", "Bonjour ! Un café et un croissant, s'il vous plaît.", "Hello! A coffee and a croissant, please."],
          ["Serveur", "Très bien. Avec du sucre ?", "Very well. With sugar?"],
          ["Lucas", "Oui, avec du sucre, merci.", "Yes, with sugar, thank you."],
          ["Serveur", "Et voici. Ça fait trois euros cinquante.", "And here you go. That is three euros fifty."],
          ["Lucas", "Merci beaucoup, bonne journée !", "Thank you very much, have a nice day!"]
        ]
      }
    },
    content: {
      intro: "Reading authentic dialogue is the fastest bridge from isolated grammar rules to natural French. Notice how greetings, polite requests, and partitive articles connect in a single café interaction.",
      tables: [
        {
          caption: "Key phrases to spot in restaurant & café readings",
          columns: ["French Phrase", "English Meaning", "Context"],
          rows: [
            ["Vous désirez ?", "What would you like?", "Server asking for your order"],
            ["Je voudrais...", "I would like...", "Polite way to order"],
            ["Ça fait...", "That comes to...", "Announcing the price"],
            ["L'addition, s'il vous plaît", "The bill, please", "Asking to pay"]
          ]
        }
      ],
      example: { fr: "Lucas commande un café au comptoir.", en: "Lucas orders a coffee at the counter." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Que commande Lucas au café ?", opts: ["Un café et un croissant", "Un thé et un sandwich", "Une salade", "De l'eau minérale"], a: "Un café et un croissant" },
        { q: "Combien coûte la commande de Lucas ?", opts: ["3,50 €", "5,00 €", "2,50 €", "10,00 €"], a: "3,50 €" },
        { q: "Que demande le serveur après la commande ?", opts: ["Avec du sucre ?", "Où habitez-vous ?", "Quel est votre nom ?", "Vous partez quand ?"], a: "Avec du sucre ?" },
        { q: "Comment Lucas dit-il au revoir au serveur ?", opts: ["Bonne journée !", "Bonne nuit !", "À l'année prochaine !", "Salut"], a: "Bonne journée !" },
        { q: "Quelle formule de politesse Lucas utilise-t-il ?", opts: ["s'il vous plaît", "au revoir", "pardon", "de rien"], a: "s'il vous plaît" }
      ]
    },
    reference: {
      video: {
        title: "Ordering Food & Drinks at a French Café",
        "watchUrl": "https://www.youtube.com/watch?v=g_y6P51T3l0",
        "videoId": "g_y6P51T3l0",
        channel: "Learn French with Alexa",
        note: "Real café vocabulary, authentic dialogue pronunciation, and cultural etiquette."
      },
      read: [
        { title: "TV5MONDE — Au restaurant (A1)", url: "https://apprendre.tv5monde.com/", note: "Graded dialogue and comprehension reading exercises" }
      ],
      watchListen: []
    }
  };
})();
