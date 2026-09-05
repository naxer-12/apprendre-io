(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-modal-verbs"] = {
    id: "a2-modal-verbs",
    module: "grammar",
    level: "A2",
    title: "Modal & Semi-Auxiliary Verbs",
    order: 22,
    requires: "a2-public-services",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "devoir (must)", "pouvoir (can)", "vouloir (want)", "savoir (know how to)"],
        rows: [
          ["je", "dois", "peux", "veux", "sais"],
          ["tu", "dois", "peux", "veux", "sais"],
          ["il / elle", "doit", "peut", "veut", "sait"],
          ["nous", "devons", "pouvons", "voulons", "savons"],
          ["vous", "devez", "pouvez", "voulez", "savez"],
          ["ils / elles", "doivent", "peuvent", "veulent", "savent"]
        ]
      }
    },
    content: {
      intro: "Devoir, pouvoir, vouloir, and savoir are always followed directly by an infinitive with no linking preposition, and each carries a distinct shade of meaning: devoir expresses obligation (must/have to) or, in context, probability (\"it must be...\"); pouvoir expresses ability or permission (can/may); vouloir expresses desire (want to); and savoir specifically means knowing HOW to do something (a learned skill), which is different from pouvoir's general \"is able to.\"",
      tables: [
        {
          caption: "savoir vs. pouvoir — a common confusion",
          columns: ["French", "English", "Why"],
          rows: [
            ["Je sais nager.", "I know how to swim.", "A learned skill → savoir"],
            ["Je peux nager aujourd'hui.", "I can swim today.", "Circumstantially able to → pouvoir"],
            ["Il sait parler japonais.", "He can speak Japanese.", "Learned ability → savoir"]
          ]
        }
      ],
      example: { fr: "Je dois partir, mais je veux rester — je sais que je ne peux pas faire les deux.", en: "I have to leave, but I want to stay — I know I can't do both." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which verb means "know how to" (a learned skill)?', opts: ["savoir", "pouvoir", "vouloir", "devoir"], a: "savoir" },
        { q: 'Complete: "Nous ___ partir avant midi." (must)', opts: ["devons", "pouvons", "voulons", "savons"], a: "devons" },
        { q: '"I can speak French" (learned skill) is best translated:', opts: ["Je sais parler français.", "Je dois parler français.", "Je veux parler français.", "Je peux parler français seulement."], a: "Je sais parler français." },
        { q: 'Complete: "Ils ___ voyager cet été." (want to)', opts: ["veulent", "doivent", "savent", "peut"], a: "veulent" },
        { q: 'What always follows devoir, pouvoir, vouloir, and savoir?', opts: ["An infinitive verb directly", "à + infinitive", "de + infinitive", "A conjugated verb"], a: "An infinitive verb directly" }
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
