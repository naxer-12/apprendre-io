(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-question-formation"] = {
    id: "a1-question-formation",
    module: "grammar",
    level: "A1",
    title: "Simple Questions & Interrogation",
    order: 20,
    requires: "a1-housing-furniture",
    visual: {
      kind: "table",
      data: {
        columns: ["Method", "Structure", "Example"],
        rows: [
          ["Intonation", "statement + rising tone", "Tu viens ? (spoken, informal)"],
          ["Est-ce que", "Est-ce que + statement", "Est-ce que tu viens ?"],
          ["Inversion", "Verb-subject + ?", "Viens-tu ? (formal/written)"]
        ]
      }
    },
    content: {
      intro: "The easiest way to turn any French statement into a question is to simply raise your intonation at the end — no word order changes needed, and it's very common in speech. Est-ce que placed at the front of a statement is the safest all-purpose method, spoken or written. Inversion (swapping verb and subject) is more formal and mostly used in writing or with common expressions. To ask for specific information rather than yes/no, add a question word before est-ce que.",
      tables: [
        {
          caption: "Core question words",
          columns: ["French", "English", "Example"],
          rows: [
            ["où", "where", "Où est-ce que tu habites ?"],
            ["quand", "when", "Quand est-ce que tu pars ?"],
            ["comment", "how", "Comment est-ce que tu t'appelles ?"],
            ["qui", "who", "Qui est-ce que tu attends ?"],
            ["pourquoi", "why", "Pourquoi est-ce que tu ris ?"],
            ["qu'est-ce que", "what", "Qu'est-ce que tu fais ?"]
          ]
        }
      ],
      example: { fr: "Pourquoi est-ce que tu apprends le français ?", en: "Why are you learning French?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which question word asks about location?', opts: ["où", "quand", "qui", "pourquoi"], a: "où" },
        { q: 'Turn "Tu habites ici" into a question using est-ce que.', opts: ["Est-ce que tu habites ici ?", "Habites tu ici est-ce que ?", "Tu est-ce que habites ici ?", "Est ici tu habites que ?"], a: "Est-ce que tu habites ici ?" },
        { q: 'Which method is most common in casual spoken French?', opts: ["Rising intonation", "Inversion", "Adding \"ne...pas\"", "Adding \"ne\" only"], a: "Rising intonation" },
        { q: 'What does "qu\'est-ce que" ask for?', opts: ["What", "Who", "When", "Where"], a: "What" },
        { q: 'Which is the most formal/written question style?', opts: ["Inversion (Viens-tu ?)", "Intonation (Tu viens ?)", "Adding \"pas\"", "There is no formal style"], a: "Inversion (Viens-tu ?)" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — Verb Overview", url: "https://laits.utexas.edu/tex/gr/overview.html", note: "General French grammar reference site" }
      ],
      watchListen: []
    }
  };
})();
