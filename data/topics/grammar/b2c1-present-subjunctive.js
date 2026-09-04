(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b2c1-present-subjunctive"] = {
    id: "b2c1-present-subjunctive",
    module: "grammar",
    level: "B2-C1",
    title: "Present Subjunctive",
    order: 19,
    requires: "b1-relative-pronouns-dont-ou",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Regular Ending (ils-stem)", "parler (ils parlent)", "finir (ils finissent)", "attendre (ils attendent)"],
        rows: [
          ["que je", "-e", "que je parle", "que je finisse", "que j'attende"],
          ["que tu", "-es", "que tu parles", "que tu finisses", "que tu attendes"],
          ["qu'il / elle", "-e", "qu'il parle", "qu'elle finisse", "qu'il attende"],
          ["que nous", "-ions", "que nous parlions", "que nous finissions", "que nous attendions"],
          ["que vous", "-iez", "que vous parliez", "que vous finissiez", "que vous attendiez"],
          ["qu'ils / elles", "-ent", "qu'ils parlent", "qu'elles finissent", "qu'ils attendent"]
        ]
      }
    },
    content: {
      intro: "The subjunctive is a mood expressing subjectivity, doubt, necessity, emotion, or will. Regular formation takes the 3rd person plural (ils) present indicative stem, dropping -ent, and adds: -e, -es, -e, -ions, -iez, -ent.",
      tables: [
        {
          caption: "Common irregular subjunctive stems",
          columns: ["Infinitive", "que je...", "que nous..."],
          rows: [
            ["être", "que je sois", "que nous soyons"],
            ["avoir", "que j'aie", "que nous ayons"],
            ["faire", "que je fasse", "que nous fassions"],
            ["aller", "que j'aille", "que nous allions"],
            ["pouvoir", "que je puisse", "que nous puissions"],
            ["savoir", "que je sache", "que nous sachions"]
          ]
        }
      ],
      example: { fr: "Il faut que tu fasses attention et qu'elle vienne demain.", en: "It is necessary that you pay attention and that she come tomorrow." },
      callouts: [
        {
          label: "Subjunctive trigger formula",
          body: "Subjunctive requires: 1) Two different subjects, 2) Linked by 'que', 3) Main clause expressing necessity (il faut que), emotion (je suis content que), desire (je veux que), or doubt (je doute que).",
          cite: "Tex's French Grammar tas1/tas5; Easy French ch.16"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Il faut que tu ___ (faire) tes devoirs."', opts: ["fasses", "fais", "feras", "fasse"], a: "fasses" },
        { q: "Regular subjunctive endings for nous and vous are identical to which tense?", opts: ["imparfait", "présent", "futur simple", "conditionnel"], a: "imparfait" },
        { q: '"Je veux qu\'il ___ (être) à l\'heure."', opts: ["soit", "est", "sera", "sois"], a: "soit" },
        { q: 'Which conjunction triggers the subjunctive?', opts: ["bien que", "parce que", "pendant que", "dès que"], a: "bien que" },
        { q: '"Il est possible que nous ___ (venir)."', opts: ["venions", "venons", "viendrons", "veniez"], a: "venions" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tas1/tas5", url: "https://laits.utexas.edu/tex/gr/tas1.html", note: "Present subjunctive formation and conjunction triggers" },
        { title: "Jane Lippmann Subjunctive Series (LAITS)", url: "https://laits.utexas.edu/jnl/subjunctive/index.html", note: "3-part deep dive on regular, irregular, and triggers" },
        { title: "Easy French Step-by-Step, Chapter 16", url: null, note: "The subjunctive mood" }
      ],
      watchListen: []
    }
  };
})();
