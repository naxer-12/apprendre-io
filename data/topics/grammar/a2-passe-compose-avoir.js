(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-passe-compose-avoir"] = {
    id: "a2-passe-compose-avoir",
    module: "grammar",
    level: "A2",
    title: "Passé Composé with avoir",
    order: 10,
    requires: "a2-relative-pronouns-qui-que",
    visual: {
      kind: "table",
      data: {
        columns: ["Infinitive group", "Ending", "Example"],
        rows: [["-er", "-é", "parlé"], ["-ir", "-i", "fini"], ["-re", "-u", "vendu"]]
      }
    },
    content: {
      intro: "Most French verbs form their past tense with a conjugated avoir plus a past participle. The participle ending depends on the verb's infinitive group.",
      tables: [],
      example: { fr: "Nous avons fini le projet.", en: "We finished the project." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"J\'ai ___ (parler)."', opts: ["parlé", "parlée", "parler", "parlant"], a: "parlé" },
        { q: 'Past participle of "finir"?', opts: ["fini", "finu", "finé", "finit"], a: "fini" },
        { q: 'Past participle of "vendre"?', opts: ["vendu", "vendé", "vendi", "vendre"], a: "vendu" },
        { q: "Passé composé with avoir = avoir (present) + ___?", opts: ["past participle", "infinitive", "present participle", "imperative"], a: "past participle" },
        { q: '"Elle a mangé" means:', opts: ["She ate / has eaten.", "She eats.", "She was eating.", "She will eat."], a: "She ate / has eaten." }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tap2", url: "https://laits.utexas.edu/tex/gr/tap2.html", note: "Formation + agreement rules" },
        { title: "Easy French Step-by-Step, Chapter 13", url: null, note: "Forms and Uses of the passé composé" }
      ],
      watchListen: []
    }
  };
})();
