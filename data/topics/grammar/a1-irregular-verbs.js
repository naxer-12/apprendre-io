(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-irregular-verbs"] = {
    id: "a1-irregular-verbs",
    module: "grammar",
    level: "A1",
    title: "Common Irregular Verbs in Present",
    order: 22,
    requires: "a1-reflexive-verbs",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "aller (go)", "faire (do/make)", "venir (come)", "prendre (take)", "pouvoir (can)", "vouloir (want)", "devoir (must)"],
        rows: [
          ["je", "vais", "fais", "viens", "prends", "peux", "veux", "dois"],
          ["tu", "vas", "fais", "viens", "prends", "peux", "veux", "dois"],
          ["il / elle / on", "va", "fait", "vient", "prend", "peut", "veut", "doit"],
          ["nous", "allons", "faisons", "venons", "prenons", "pouvons", "voulons", "devons"],
          ["vous", "allez", "faites", "venez", "prenez", "pouvez", "voulez", "devez"],
          ["ils / elles", "vont", "font", "viennent", "prennent", "peuvent", "veulent", "doivent"]
        ]
      }
    },
    content: {
      intro: "These seven verbs are irregular — their stems change unpredictably across persons — but they are also the most frequent verbs in spoken French, so memorizing them now pays off immediately. Notice the recurring pattern: the nous/vous forms usually keep a regular-looking stem (nous faisons, vous faites), while the ils/elles form often doubles a consonant or shifts the vowel (ils viennent, ils prennent).",
      tables: [
        {
          caption: "Everyday uses",
          columns: ["Verb + example", "English"],
          rows: [
            ["Je vais au marché.", "I'm going to the market."],
            ["Elle fait la cuisine.", "She's cooking (making the food)."],
            ["Tu viens avec nous ?", "Are you coming with us?"],
            ["Nous prenons le bus.", "We're taking the bus."],
            ["Vous pouvez répéter ?", "Can you repeat that?"],
            ["Ils veulent partir.", "They want to leave."],
            ["Je dois travailler.", "I have to work."]
          ]
        }
      ],
      example: { fr: "Je dois aller au travail, mais je veux prendre un café d'abord.", en: "I have to go to work, but I want to grab a coffee first." },
      callouts: [
        {
          label: "aller + infinitive later becomes futur proche",
          body: "You already know je vais from this list — that exact form is what builds the near-future tense (je vais manger, \"I'm going to eat\"). Getting aller solid here makes that next step automatic.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Complete: "Nous ___ au cinéma ce soir." (aller)', opts: ["allons", "vont", "va", "allez"], a: "allons" },
        { q: 'Complete: "Elles ___ leurs devoirs." (faire)', opts: ["font", "faisons", "fait", "faites"], a: "font" },
        { q: 'Complete: "Tu ___ de Paris ?" (venir)', opts: ["viens", "vient", "venons", "venez"], a: "viens" },
        { q: 'Complete: "Je ne ___ pas venir ce soir." (pouvoir)', opts: ["peux", "peut", "pouvons", "veux"], a: "peux" },
        { q: 'Complete: "Il ___ finir avant midi." (devoir)', opts: ["doit", "dois", "devons", "doivent"], a: "doit" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — Verb Overview", url: "https://laits.utexas.edu/tex/gr/overview.html", note: "General reference for French verb conjugation patterns" }
      ],
      watchListen: []
    }
  };
})();
