(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b2c1-past-subjunctive-recap"] = {
    id: "b2c1-past-subjunctive-recap",
    module: "grammar",
    level: "B2-C1",
    title: "Past Subjunctive & Synthesis",
    order: 20,
    requires: "b2c1-present-subjunctive",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Auxiliary Avoir (subjunctive)", "Auxiliary Être (subjunctive)", "Past Participle"],
        rows: [
          ["que je", "aie", "sois", "fini / parti(e)"],
          ["que tu", "aies", "sois", "fini / parti(e)"],
          ["qu'il / elle", "ait", "soit", "fini / parti(e)"],
          ["que nous", "ayons", "soyons", "fini / parti(e)s"],
          ["que vous", "ayez", "soyez", "fini / parti(e)(s)"],
          ["qu'ils / elles", "aient", "soient", "fini / parti(e)s"]
        ]
      }
    },
    content: {
      intro: "The subjonctif passé expresses a past, completed event subject to a subjunctive trigger in the present. It combines the present subjunctive of avoir or être with the past participle.",
      tables: [
        {
          caption: "Indicative vs. Subjunctive Contrast",
          columns: ["Main Clause Meaning", "Mood", "Example"],
          rows: [
            ["Certainty / Belief", "Indicatif", "Je pense qu'il *est* prêt."],
            ["Doubt / Negation", "Subjonctif", "Je ne pense pas qu'il *soit* prêt."],
            ["Fact / Cause", "Indicatif", "Parce qu'il *a plu*, on est resté."],
            ["Concession / Purpose", "Subjonctif", "Bien qu'il *ait plu*, on est sorti."]
          ]
        }
      ],
      example: { fr: "Je suis heureux que tu aies réussi ton examen.", en: "I am happy that you passed your exam." },
      callouts: [
        {
          label: "Synthesis Rule: Meaning drives mood",
          body: "The subjunctive is never triggered by chance — it signals the speaker's emotional stance or epistemic uncertainty about the proposition. If there is objective certainty, use the indicative.",
          cite: "Tex's French Grammar tas6/tas7"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "How is the past subjunctive (subjonctif passé) formed?", opts: ["present subjunctive of avoir/être + past participle", "imparfait of avoir/être + past participle", "present indicative + infinitive", "conditional of avoir + past participle"], a: "present subjunctive of avoir/être + past participle" },
        { q: '"Je doute qu\'elle ___ (partir) à l\'heure."', opts: ["soit partie", "est partie", "ait parti", "serait partie"], a: "soit partie" },
        { q: '"Je suis content que vous ___ (venir)."', opts: ["soyez venus", "êtes venus", "ayez venu", "veniez"], a: "soyez venus" },
        { q: 'Choose the correct mood: "Je sais qu\'il ___ (dire) la vérité."', opts: ["dit (indicatif)", "dise (subjonctif)", "ait dit (subjonctif)", "disant"], a: "dit (indicatif)" },
        { q: 'Which sentence correctly uses the past subjunctive?', opts: ["Bien qu'il ait fait froid, nous sommes sortis.", "Bien qu'il a fait froid, nous sommes sortis.", "Parce qu'il ait fait froid, nous sommes sortis.", "Il est certain qu'il ait fini."], a: "Bien qu'il ait fait froid, nous sommes sortis." }
      ]
    },
    reference: {
      video: {
        "title": "Le Subjonctif Pass\u00e9 et Synth\u00e8se Indicatif vs Subjonctif",
        "watchUrl": "https://www.youtube.com/watch?v=g1H2i3J4k5l",
        "videoId": "g1H2i3J4k5l",
        "channel": "Fran\u00e7ais avec Pierre",
        "note": "Prior actions in the subjunctive mood and distinguishing nuance between belief and doubt."
},
      read: [
        { title: "Tex's French Grammar — tas6", url: "https://laits.utexas.edu/tex/gr/tas6.html", note: "Subjonctif passé formation and sequence of tenses" },
        { title: "Tex's French Grammar — tas7", url: "https://laits.utexas.edu/tex/gr/tas7.html", note: "Comprehensive subjunctive vs indicative summary" }
      ],
      watchListen: []
    }
  };
})();
