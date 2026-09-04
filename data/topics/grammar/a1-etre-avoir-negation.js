(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-etre-avoir-negation"] = {
    id: "a1-etre-avoir-negation",
    module: "grammar",
    level: "A1",
    title: "Être, Avoir & Negation",
    order: 2,
    requires: "a1-articles",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "être (to be)", "avoir (to have)"],
        rows: [
          ["je", "suis", "ai"],
          ["tu", "es", "as"],
          ["il / elle / on", "est", "a"],
          ["nous", "sommes", "avons"],
          ["vous", "êtes", "avez"],
          ["ils / elles", "sont", "ont"]
        ]
      }
    },
    content: {
      intro: "être and avoir are the two most common verbs in French and both are irregular — worth memorizing outright before any other verb. Negation wraps ne...pas around the conjugated verb.",
      tables: [
        {
          caption: "Negation",
          columns: ["Affirmative", "Negative"],
          rows: [
            ["Je suis fatigué.", "Je ne suis pas fatigué."],
            ["Il a faim.", "Il n'a pas faim."]
          ]
        }
      ],
      example: { fr: "Nous sommes étudiants.", en: "We are students." },
      callouts: [
        {
          label: "Drill these two first",
          body: "être and avoir appear inside almost every other tense you'll learn next (passé composé, for one) — getting these six-times-two forms automatic now pays off across the rest of the module.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Complete: "Je ___ étudiant."', opts: ["suis", "es", "est", "sommes"], a: "suis" },
        { q: 'Complete: "Ils ___ trois enfants."', opts: ["ont", "avons", "a", "avez"], a: "ont" },
        { q: "How do you negate a verb in French?", opts: ["ne...pas", "pas...ne", "non...pas", "ne...non"], a: "ne...pas" },
        { q: '"Vous ___ français ?"', opts: ["êtes", "es", "est", "sont"], a: "êtes" },
        { q: 'Negative of "J\'ai faim":', opts: ["Je n'ai pas faim.", "Je ne suis pas faim.", "J'ai ne pas faim.", "Non j'ai faim."], a: "Je n'ai pas faim." }
      ]
    },
    reference: {
      video: {
        "title": "The Verbs \u00caTRE and AVOIR in Present Tense + Negation",
        "watchUrl": "https://www.youtube.com/watch?v=Jc6zH1m9qZg",
        "videoId": "Jc6zH1m9qZg",
        "channel": "Learn French with Alexa",
        "note": "Conjugation of \u00eatre & avoir, and how to form standard negation using ne...pas."
},
      read: [
        { title: "Tex's French Grammar — virr1 (Être)", url: "https://laits.utexas.edu/tex/gr/virr1.html", note: "Full être conjugation table" },
        { title: "Easy French Step-by-Step, Chapter 2", url: null, note: "The Verbs être and avoir, Subject Pronouns, and Negation" }
      ],
      watchListen: []
    }
  };
})();
