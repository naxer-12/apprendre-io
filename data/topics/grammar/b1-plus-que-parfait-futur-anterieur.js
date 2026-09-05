(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-plus-que-parfait-futur-anterieur"] = {
    id: "b1-plus-que-parfait-futur-anterieur",
    module: "grammar",
    level: "B1",
    title: "Plus-que-parfait & Futur Antérieur",
    order: 16,
    requires: null,
    visual: {
      kind: "table",
      data: {
        columns: ["Compound Tense", "Auxiliary Tense (avoir/être)", "Past Participle", "Timeline Meaning"],
        rows: [
          ["Passé Composé", "Présent", "fini", "Action completed in the past"],
          ["Plus-que-parfait", "Imparfait", "fini", "Action completed BEFORE another past event (had done)"],
          ["Futur Antérieur", "Futur Simple", "fini", "Action that WILL BE completed before a future point (will have done)"]
        ]
      }
    },
    content: {
      intro: "Compound tenses in French follow a uniform formula: auxiliary (avoir or être) + past participle. By shifting the auxiliary to the imparfait, you get the plus-que-parfait ('had done'). By shifting it to the futur simple, you get the futur antérieur ('will have done').",
      tables: [
        {
          caption: "Comparing auxiliary forms for 'finir'",
          columns: ["Pronoun", "Plus-que-parfait (had finished)", "Futur antérieur (will have finished)"],
          rows: [
            ["j'", "avais fini", "aurai fini"],
            ["tu", "avais fini", "auras fini"],
            ["il/elle", "avait fini", "aura fini"],
            ["nous", "avions fini", "aurons fini"],
            ["vous", "aviez fini", "aurez fini"],
            ["ils/elles", "avaient fini", "auront fini"]
          ]
        }
      ],
      example: { fr: "Quand il est arrivé, j'avais déjà mangé.", en: "When he arrived, I had already eaten." },
      callouts: [
        {
          label: "DR & MRS VANDERTRAMP still applies",
          body: "Verbs that take être in passé composé also take être in the plus-que-parfait and futur antérieur (e.g., 'elle était partie', 'elle sera partie'), with gender/number agreement on the participle.",
          cite: "Easy French Step-by-Step ch.15"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "How is the plus-que-parfait formed?", opts: ["auxiliary in imparfait + past participle", "auxiliary in present + past participle", "auxiliary in future + infinitive", "infinitive + imparfait endings"], a: "auxiliary in imparfait + past participle" },
        { q: '"Quand tu as téléphoné, nous ___ (déjà / partir)."', opts: ["étions déjà partis", "sommes déjà partis", "serons déjà partis", "partions déjà"], a: "étions déjà partis" },
        { q: 'What does the futur antérieur describe?', opts: ["an action that will be completed before a future point", "a past habitual event", "a present continuous action", "a hypothetical wish"], a: "an action that will be completed before a future point" },
        { q: '"Dès que j\'___ (finir) mes devoirs, je sortirai."', opts: ["aurai fini", "avais fini", "ai fini", "aurais fini"], a: "aurai fini" },
        { q: '"Elle avait mangé" translates to:', opts: ["She had eaten", "She has eaten", "She was eating", "She will have eaten"], a: "She had eaten" }
      ]
    },
    reference: {
      video: {
        "title": "How and When to use the PLUS-QUE-PARFAIT in French",
        "watchUrl": "https://www.youtube.com/watch?v=jaDCV37skV0",
        "videoId": "jaDCV37skV0",
        "channel": "Learn French with Alexa",
        "note": "Using imperfect auxiliary with past participle to express actions prior to other past events."
      },
      read: [
        { title: "Tex's French Grammar — tap9", url: "https://laits.utexas.edu/tex/gr/tap9.html", note: "Plus-que-parfait formation and timeline" },
        { title: "Tex's French Grammar — taf5", url: "https://laits.utexas.edu/tex/gr/taf5.html", note: "Futur antérieur formation and use after quand/dès que" },
        { title: "Easy French Step-by-Step, Chapter 15", url: null, note: "Compound tenses" }
      ],
      watchListen: []
    }
  };
})();
