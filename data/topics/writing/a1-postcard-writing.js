(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-postcard-writing"] = {
    id: "a1-postcard-writing",
    module: "writing",
    level: "A1",
    title: "Writing a Holiday Postcard (40+ words)",
    order: 35,
    requires: "a1-form-filling",
    visual: {
      kind: "table",
      data: {
        columns: ["Part of the postcard", "French phrase", "English meaning"],
        rows: [
          ["Opening", "Salut !", "Hi!"],
          ["Where you are", "Je suis en vacances à Nice.", "I'm on vacation in Nice."],
          ["Weather", "Il fait très beau.", "The weather is very nice."],
          ["Activity", "Je nage tous les jours.", "I swim every day."],
          ["Closing", "Grosses bises,", "Big kisses / love,"]
        ]
      }
    },
    content: {
      intro: "A holiday postcard is short, informal, and present-tense: where you are, what the weather is like, and what you're doing right now. Keep sentences simple and connect them loosely — no need for complex grammar, just clear present-tense statements.",
      tables: [
        {
          caption: "Model postcard (40+ words)",
          columns: ["French", "English"],
          rows: [
            ["Salut Marc ! Je suis en vacances à Nice avec ma famille. Il fait très beau et chaud. Le matin, je nage à la plage et l'après-midi, je visite la vieille ville. La nourriture est délicieuse ! On rentre samedi. Grosses bises, Julie", "Hi Marc! I'm on vacation in Nice with my family. The weather is very nice and warm. In the morning, I swim at the beach and in the afternoon, I visit the old town. The food is delicious! We're coming back Saturday. Big hugs, Julie"]
          ]
        }
      ],
      example: { fr: "Il fait beau et je me repose sur la plage.", en: "The weather is nice and I'm relaxing on the beach." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel temps verbal utilise-t-on principalement pour écrire une carte postale ?", opts: ["le présent", "le passé composé", "le futur simple", "l'imparfait"], a: "le présent" },
        { q: "Comment dit-on \"The weather is very nice\" ?", opts: ["Il fait très beau.", "Il fait très mauvais.", "Il fait froid.", "Il pleut beaucoup."], a: "Il fait très beau." },
        { q: "Quelle formule est une salutation informelle pour commencer une carte postale ?", opts: ["Salut !", "Cher Monsieur,", "Veuillez agréer,", "Madame,"], a: "Salut !" },
        { q: "Quelle formule ferme une carte postale de façon amicale ?", opts: ["Grosses bises,", "Cordialement,", "Veuillez agréer mes salutations distinguées,", "Signature légale"], a: "Grosses bises," },
        { q: "\"Je nage tous les jours\" veut dire :", opts: ["I swim every day", "I swam yesterday", "I will swim tomorrow", "I don't like swimming"], a: "I swim every day" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A1 writing model texts" }
      ],
      watchListen: []
    }
  };
})();
