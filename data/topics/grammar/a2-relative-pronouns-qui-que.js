(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-relative-pronouns-qui-que"] = {
    id: "a2-relative-pronouns-qui-que",
    module: "grammar",
    level: "A2",
    title: "Relative Pronouns: qui / que",
    order: 9,
    requires: "a1-partitive-articles",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Replaces", "Example"],
        rows: [["qui", "the subject of the clause", "L'homme qui parle..."], ["que", "the object of the clause", "Le livre que je lis..."]]
      }
    },
    content: {
      intro: "qui and que both mean \"who/which/that\" in English, but French picks between them based on the grammatical role inside the relative clause, not on whether the antecedent is a person or thing.",
      tables: [],
      example: { fr: "Le livre que je lis est intéressant.", en: "The book that I'm reading is interesting." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"qui" replaces the ___ of the clause.', opts: ["subject", "object", "verb", "adjective"], a: "subject" },
        { q: '"que" replaces the ___.', opts: ["object", "subject", "verb", "adjective"], a: "object" },
        { q: '"La femme ___ chante."', opts: ["qui", "que", "dont", "où"], a: "qui" },
        { q: '"Le film ___ j\'ai vu."', opts: ["que", "qui", "dont", "où"], a: "que" },
        { q: 'Before a vowel, "que" becomes:', opts: ["qu'", "qui", "qu", "que"], a: "qu'" }
      ]
    },
    reference: {
      video: {
        "title": "QUI ou QUE ? Les Pronoms Relatifs Simples",
        "watchUrl": "https://www.youtube.com/watch?v=o0C5bI8Uq6Q",
        "videoId": "o0C5bI8Uq6Q",
        "channel": "Fran\u00e7ais avec Pierre",
        "note": "The definitive guide to distinguishing between subject qui and direct object que."
},
      read: [ { title: "Tex's French Grammar — pror1", url: "https://laits.utexas.edu/tex/gr/pror1.html", note: "Basic relative clauses" } ], watchListen: [] }
  };
})();
