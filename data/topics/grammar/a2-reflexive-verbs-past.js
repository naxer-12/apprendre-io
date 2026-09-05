(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-reflexive-verbs-past"] = {
    id: "a2-reflexive-verbs-past",
    module: "grammar",
    level: "A2",
    title: "Reflexive Verbs in Past Tense",
    order: 19,
    requires: "a2-health-pharmacy",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "se réveiller (past)", "English"],
        rows: [
          ["je", "me suis réveillé(e)", "I woke up"],
          ["tu", "t'es réveillé(e)", "you woke up"],
          ["il / elle", "s'est réveillé(e)", "he/she woke up"],
          ["nous", "nous sommes réveillé(e)s", "we woke up"],
          ["vous", "vous êtes réveillé(e)(s)", "you woke up"],
          ["ils / elles", "se sont réveillé(e)s", "they woke up"]
        ]
      }
    },
    content: {
      intro: "All reflexive verbs (se réveiller, se souvenir, se laver, s'habiller) use être — not avoir — as their auxiliary in the passé composé. The reflexive pronoun (me/te/se/nous/vous/se) still goes right before the auxiliary. Because the auxiliary is être, the past participle agrees in gender and number with the subject, just like other être-verbs: elle s'est réveillée (with an extra -e for feminine).",
      tables: [
        {
          caption: "Agreement in practice",
          columns: ["Subject", "Past participle form", "Full sentence"],
          rows: [
            ["il (masc.)", "réveillé", "Il s'est réveillé tôt."],
            ["elle (fem.)", "réveillée", "Elle s'est réveillée tôt."],
            ["ils (masc. pl.)", "réveillés", "Ils se sont réveillés tôt."],
            ["elles (fem. pl.)", "réveillées", "Elles se sont réveillées tôt."]
          ]
        }
      ],
      example: { fr: "Ce matin, je me suis levé tôt et je me suis souvenu de notre rendez-vous.", en: "This morning, I got up early and I remembered our appointment." },
      callouts: [
        {
          label: "The one exception",
          body: "Agreement is skipped if the reflexive pronoun is an indirect object rather than a direct object — e.g. \"elle s'est lavé les mains\" (no extra -e, because \"les mains\" is the direct object, not \"se\"). At this stage, just recognize this exception exists; the default rule covers most everyday sentences.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which auxiliary do reflexive verbs use in passé composé?', opts: ["être", "avoir", "aller", "faire"], a: "être" },
        { q: 'Complete: "Elle ___ réveillée à sept heures."', opts: ["s'est", "s'a", "se sont", "s'ai"], a: "s'est" },
        { q: 'Complete for "ils" (masc. plural): "Ils se sont lav___."', opts: ["és", "é", "ée", "ées"], a: "és" },
        { q: 'Complete for "elles": "Elles se sont habill___."', opts: ["ées", "é", "és", "ée"], a: "ées" },
        { q: 'Where does the reflexive pronoun go in the passé composé?', opts: ["Right before the auxiliary (être)", "After the past participle", "At the end of the sentence", "It disappears in the past tense"], a: "Right before the auxiliary (être)" }
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
