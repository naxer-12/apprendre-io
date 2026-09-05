(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-postcards-reading"] = {
    id: "a1-postcards-reading",
    module: "reading",
    level: "A1",
    title: "Postcards & Friendly Notes",
    order: 32,
    requires: "a1-travel-timetables",
    visual: {
      kind: "table",
      data: {
        columns: ["French", "English"],
        rows: [
          ["Coucou de Nice !", "Hi from Nice!"],
          ["Il fait très beau ici.", "The weather is very nice here."],
          ["Je nage tous les jours.", "I swim every day."],
          ["La nourriture est délicieuse.", "The food is delicious."],
          ["À bientôt !", "See you soon!"]
        ]
      }
    },
    content: {
      intro: "Holiday postcards are short and informal: a greeting, a comment on the weather, one or two present-tense activities, and a friendly sign-off. Look for present-tense verbs describing what the writer is doing right now.",
      tables: [
        {
          caption: "Full postcard example",
          columns: ["French", "English"],
          rows: [
            ["Coucou de Nice ! Il fait très beau ici et je nage tous les jours. La nourriture est délicieuse. À bientôt ! Léa", "Hi from Nice! The weather is very nice here and I swim every day. The food is delicious. See you soon! Léa"]
          ]
        }
      ],
      example: { fr: "Il fait beau et je nage tous les jours.", en: "The weather is nice and I swim every day." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "D'où vient la carte postale ?", opts: ["De Nice", "De Lyon", "De Paris", "De Marseille"], a: "De Nice" },
        { q: "Quel temps fait-il ?", opts: ["Il fait très beau", "Il pleut", "Il fait froid", "Il neige"], a: "Il fait très beau" },
        { q: "Que fait Léa tous les jours ?", opts: ["Elle nage", "Elle travaille", "Elle étudie", "Elle dort"], a: "Elle nage" },
        { q: "Comment Léa trouve-t-elle la nourriture ?", opts: ["Délicieuse", "Mauvaise", "Chère", "Simple"], a: "Délicieuse" },
        { q: "Comment se termine la carte postale ?", opts: ["À bientôt !", "Au revoir pour toujours.", "Bonne nuit.", "Merci beaucoup."], a: "À bientôt !" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded reading exercises for everyday French documents" }
      ],
      watchListen: []
    }
  };
})();
