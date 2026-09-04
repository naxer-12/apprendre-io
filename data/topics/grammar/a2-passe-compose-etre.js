(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-passe-compose-etre"] = {
    id: "a2-passe-compose-etre",
    module: "grammar",
    level: "A2",
    title: "Passé Composé with être",
    order: 11,
    requires: "a2-passe-compose-avoir",
    visual: {
      kind: "table",
      data: {
        columns: ["Subject", "aller (to go)", "partir (to leave)"],
        rows: [["il", "est allé", "est parti"], ["elle", "est allée", "est partie"], ["ils", "sont allés", "sont partis"], ["elles", "sont allées", "sont parties"]]
      }
    },
    content: {
      intro: "A small set of mostly motion/state-change verbs (often taught via the mnemonic \"Dr & Mrs Vandertramp\": Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir) take être instead of avoir — and their past participle must agree in gender and number with the subject.",
      tables: [],
      example: { fr: "Elle est allée au marché.", en: "She went to the market." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which verb takes être in passé composé?", opts: ["aller", "parler", "manger", "finir"], a: "aller" },
        { q: '"Elle est ___ (aller)."', opts: ["allée", "allé", "allés", "allées"], a: "allée" },
        { q: '"Ils sont ___ (partir)."', opts: ["partis", "parti", "partie", "parties"], a: "partis" },
        { q: "The mnemonic for être-verbs is nicknamed:", opts: ["Dr & Mrs Vandertramp", "COD/COI", "SNIP verbs", "Tex's Fourteen"], a: "Dr & Mrs Vandertramp" },
        { q: "With être, the past participle agrees with:", opts: ["the subject", "the object", "nothing, it never agrees", "the indirect object"], a: "the subject" }
      ]
    },
    reference: {
      video: {
        "title": "Le Pass\u00e9 Compos\u00e9 avec \u00caTRE (DR & MRS VANDERTRAMP)",
        "embedUrl": "https://www.youtube-nocookie.com/embed/N-0wXqU5Hl8",
        "channel": "Learn French with Alexa",
        "note": "Motion and state-change verbs that take \u00eatre with subject agreement."
},
      read: [
        { title: "Tex's French Grammar — tap3", url: "https://laits.utexas.edu/tex/gr/tap3.html", note: "The \"Dr & Mrs Vandertramp\" verb set" },
        { title: "Easy French Step-by-Step, Chapter 13", url: null, note: "The passé composé with être" }
      ],
      watchListen: []
    }
  };
})();
