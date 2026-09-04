(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-imparfait"] = {
    id: "a2-imparfait",
    module: "grammar",
    level: "A2",
    title: "Imparfait: Formation & Use",
    order: 12,
    requires: "a2-passe-compose-etre",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "parler → imparfait"],
        rows: [["je", "parlais"], ["tu", "parlais"], ["il / elle / on", "parlait"], ["nous", "parlions"], ["vous", "parliez"], ["ils / elles", "parlaient"]]
      }
    },
    content: {
      intro: "Take the nous-form of the present tense, drop -ons, and add the imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient). Unlike passé composé, imparfait describes ongoing states or habitual past actions rather than one completed event.",
      tables: [
        { caption: "One irregular stem to know", columns: ["Verb", "Imparfait stem"], rows: [["être", "ét-"]] }
      ],
      example: { fr: "Quand j'étais petit, je jouais dehors.", en: "When I was little, I used to play outside." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "The imparfait stem comes from the ___ form of the present tense.", opts: ["nous", "je", "ils", "tu"], a: "nous" },
        { q: '"Je ___ (parler, imparfait)."', opts: ["parlais", "parlerai", "parlé", "parle"], a: "parlais" },
        { q: "Imparfait typically describes:", opts: ["an ongoing or habitual past action", "a single completed past action", "a future plan", "a polite request"], a: "an ongoing or habitual past action" },
        { q: "Irregular imparfait stem for être:", opts: ["ét-", "êt-", "suis-", "fu-"], a: "ét-" },
        { q: '"Nous ___ (finir, imparfait)."', opts: ["finissions", "finirons", "finissons", "finis"], a: "finissions" }
      ]
    },
    reference: {
      video: {
        "title": "L'Imparfait en Fran\u00e7ais : Formation et Utilisation",
        "embedUrl": "https://www.youtube-nocookie.com/embed/hJqg6iPqj9A",
        "channel": "Fran\u00e7ais avec Pierre",
        "note": "Forming the imperfect tense and contrasting it with pass\u00e9 compos\u00e9."
},
      read: [
        { title: "Tex's French Grammar — tap5/tap7", url: "https://laits.utexas.edu/tex/gr/tap5.html", note: "Formation, then idiomatic uses vs. passé composé" },
        { title: "Easy French Step-by-Step, Chapter 14", url: null, note: "The imparfait and past narration" }
      ],
      watchListen: []
    }
  };
})();
