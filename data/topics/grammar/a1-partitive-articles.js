(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-partitive-articles"] = {
    id: "a1-partitive-articles",
    module: "grammar",
    level: "A1",
    title: "Partitive Articles (du/de la/des)",
    order: 8,
    requires: "a1-possessive-adjectives",
    visual: {
      kind: "table",
      data: {
        columns: ["Form", "Used before", "Example"],
        rows: [
          ["du", "Masculine singular", "du pain"],
          ["de la", "Feminine singular", "de la salade"],
          ["de l'", "Either, before a vowel", "de l'eau"],
          ["des", "Plural", "des pommes"]
        ]
      }
    },
    content: {
      intro: "Partitive articles express \"some\" or \"any\" — an unspecified quantity — and are required in French even where English would drop the word entirely (\"I'm eating bread\" still needs du pain).",
      tables: [
        {
          caption: "After a negation",
          columns: ["Affirmative", "Negative"],
          rows: [["Je mange du pain.", "Je ne mange pas de pain."], ["Il y a des pommes.", "Il n'y a pas de pommes."]]
        }
      ],
      example: { fr: "Elle boit de l'eau.", en: "She's drinking (some) water." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je bois ___ café."', opts: ["du", "de la", "des", "de l'"], a: "du" },
        { q: '"Elle mange ___ salade."', opts: ["de la", "du", "des", "de l'"], a: "de la" },
        { q: 'After "ne...pas", du/de la/des usually become:', opts: ["de", "des", "le/la/les", "no change"], a: "de" },
        { q: '"___ eau" (before a vowel)', opts: ["de l'", "du", "de la", "des"], a: "de l'" },
        { q: "Partitive articles express:", opts: ["\"some/any\", an unspecified quantity", "possession", "location", "a completed action"], a: "\"some/any\", an unspecified quantity" }
      ]
    },
    reference: {
      video: {
        "title": "Partitive Articles in French (du, de la, de l', des)",
        "watchUrl": "https://www.youtube.com/watch?v=yF-4vR7gC18",
        "videoId": "yF-4vR7gC18",
        "channel": "Learn French with Alexa",
        "note": "How to say 'some' or express unspecified food and drink quantities."
},
      read: [
        { title: "Easy French Step-by-Step, Chapter 9", url: null, note: "The Partitive Article" },
        { title: "The French Experiment — Partitive Articles", url: "https://www.thefrenchexperiment.com/learn-french", note: "Beginner-focused lesson on du/de la/des" }
      ],
      watchListen: []
    }
  };
})();
