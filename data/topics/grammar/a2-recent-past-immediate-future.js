(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-recent-past-immediate-future"] = {
    id: "a2-recent-past-immediate-future",
    module: "grammar",
    level: "A2",
    title: "Recent Past & Immediate Future",
    order: 14,
    requires: "a2-memories-biography",
    visual: {
      kind: "table",
      data: {
        columns: ["Structure", "Pattern", "Example"],
        rows: [
          ["venir de + infinitive", "just did something", "Je viens de manger. (I just ate.)"],
          ["être sur le point de + infinitive", "about to do something", "Il est sur le point de partir. (He's about to leave.)"]
        ]
      }
    },
    content: {
      intro: "You already know futur proche (aller + infinitive) for the near future. Two more everyday structures round out how French talks about time close to now. Venir de + infinitive describes something that JUST happened — conjugate venir in the present and add the infinitive. Être sur le point de + infinitive means someone is on the verge of doing something, right before it happens.",
      tables: [
        {
          caption: "Full conjugation of venir de",
          columns: ["Pronoun", "venir de + infinitive"],
          rows: [
            ["je", "viens de finir"],
            ["tu", "viens de finir"],
            ["il / elle", "vient de finir"],
            ["nous", "venons de finir"],
            ["vous", "venez de finir"],
            ["ils / elles", "viennent de finir"]
          ]
        }
      ],
      example: { fr: "Je viens de recevoir ton message, je suis sur le point de te répondre.", en: "I just received your message, I'm about to reply to you." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"I just arrived" translates to:', opts: ["Je viens d'arriver.", "Je vais arriver.", "J'arrive de venir.", "Je suis arrivé de venir."], a: "Je viens d'arriver." },
        { q: 'Complete: "Nous ___ de manger." (just ate)', opts: ["venons", "allons", "sommes", "voulons"], a: "venons" },
        { q: '"He is about to leave" translates to:', opts: ["Il est sur le point de partir.", "Il vient de partir.", "Il va partir bientôt de venir.", "Il part sur le point."], a: "Il est sur le point de partir." },
        { q: 'Which verb do you conjugate for "venir de + infinitive"?', opts: ["venir", "aller", "être", "avoir"], a: "venir" },
        { q: 'Complete: "Elles ___ de sortir." (they just went out)', opts: ["viennent", "vont", "sont", "font"], a: "viennent" }
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
