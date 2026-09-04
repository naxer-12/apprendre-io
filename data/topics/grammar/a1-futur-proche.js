(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-futur-proche"] = {
    id: "a1-futur-proche",
    module: "grammar",
    level: "A1",
    title: "Futur Proche (aller + infinitive)",
    order: 5,
    requires: "a1-pronouns-intro",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "aller (conjugated)", "+ infinitive"],
        rows: [
          ["je", "vais", "manger"],
          ["tu", "vas", "manger"],
          ["il / elle / on", "va", "manger"],
          ["nous", "allons", "manger"],
          ["vous", "allez", "manger"],
          ["ils / elles", "vont", "manger"]
        ]
      }
    },
    content: {
      intro: "The easiest way to talk about the future in French: conjugate aller, then add any infinitive — no new verb endings to learn.",
      tables: [],
      example: { fr: "Elle va partir demain.", en: "She's going to leave tomorrow." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je ___ (aller) manger."', opts: ["vais", "va", "vas", "allons"], a: "vais" },
        { q: "Futur proche = aller (conjugated) + ___?", opts: ["infinitive", "past participle", "present participle", "gerund"], a: "infinitive" },
        { q: '"Ils ___ (aller) arriver bientôt."', opts: ["vont", "va", "allez", "allons"], a: "vont" },
        { q: "Futur proche typically expresses a ___ future.", opts: ["near, planned", "distant, uncertain", "hypothetical", "past"], a: "near, planned" },
        { q: '"Nous allons voyager" means:', opts: ["We are going to travel.", "We traveled.", "We would travel.", "We travel."], a: "We are going to travel." }
      ]
    },
    reference: {
      video: {
        "title": "Le Futur Proche (Near Future Tense in French)",
        "watchUrl": "https://www.youtube.com/watch?v=7X8m-M4_f8E",
        "videoId": "7X8m-M4_f8E",
        "channel": "Learn French with Alexa",
        "note": "How to talk about upcoming plans easily using aller + infinitive."
},
      read: [
        { title: "Tex's French Grammar — taf1", url: "https://laits.utexas.edu/tex/gr/taf1.html", note: "Near-future construction" },
        { title: "Easy French Step-by-Step, Chapter 6", url: null, note: "Expressing the Future with aller" }
      ],
      watchListen: []
    }
  };
})();
