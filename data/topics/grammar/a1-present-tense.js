(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-present-tense"] = {
    id: "a1-present-tense",
    module: "grammar",
    level: "A1",
    title: "Present Tense: Regular -er/-ir/-re Verbs",
    order: 3,
    requires: "a1-etre-avoir-negation",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "parler (-er)", "finir (-ir)", "vendre (-re)"],
        rows: [
          ["je", "parle", "finis", "vends"],
          ["tu", "parles", "finis", "vends"],
          ["il / elle / on", "parle", "finit", "vend"],
          ["nous", "parlons", "finissons", "vendons"],
          ["vous", "parlez", "finissez", "vendez"],
          ["ils / elles", "parlent", "finissent", "vendent"]
        ]
      }
    },
    content: {
      intro: "Almost every French verb belongs to one of three regular families by its infinitive ending — learn the pattern once per family and you can conjugate hundreds of verbs.",
      tables: [],
      example: { fr: "Nous finissons le travail.", en: "We are finishing the work." },
      callouts: [
        {
          label: "-er is the biggest family",
          body: "The vast majority of French verbs are regular -er verbs, so this pattern alone unlocks the most new verbs per hour of study.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je ___ français." (parler)', opts: ["parle", "parles", "parlons", "parlent"], a: "parle" },
        { q: '-ir verb "nous" ending?', opts: ["-issons", "-ons", "-issez", "-ent"], a: "-issons" },
        { q: '-re verb "il" form of vendre?', opts: ["vend", "vends", "vendons", "vendent"], a: "vend" },
        { q: 'Which verb group is "manger"?', opts: ["-er", "-ir", "-re", "irregular"], a: "-er" },
        { q: '"Vous ___ (finir) vos devoirs."', opts: ["finissez", "finissons", "finis", "finit"], a: "finissez" }
      ]
    },
    reference: {
      video: {
        "title": "Regular -ER, -IR, -RE Verbs in the Present Tense",
        "embedUrl": "https://www.youtube-nocookie.com/embed/9w_v0w0Kzfg",
        "channel": "Learn French with Alexa",
        "note": "Learn regular verb conjugation endings step-by-step with examples."
},
      read: [
        { title: "Tex's French Grammar — tapr1", url: "https://laits.utexas.edu/tex/gr/tapr1.html", note: "Regular verb conjugation patterns" },
        { title: "Easy French Step-by-Step, Chapters 3–5", url: null, note: "Regular -er, -ir, and -re verbs in the present tense" }
      ],
      watchListen: []
    }
  };
})();
