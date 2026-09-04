(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-writing-sentences"] = {
    id: "a1-writing-sentences",
    module: "writing",
    level: "A1",
    title: "Building Simple Sentences: Subject + Verb + Object",
    order: 1,
    requires: null,
    visual: {
      kind: "table",
      data: {
        columns: ["Subject (Sujet)", "Verb (Verbe)", "Object / Modifier (Complément)", "Complete Sentence"],
        rows: [
          ["Je", "parle", "français", "Je parle français."],
          ["Marie", "habite", "à Paris", "Marie habite à Paris."],
          ["Nous", "aimons", "le chocolat", "Nous aimons le chocolat."],
          ["Ils", "étudient", "à l'université", "Ils étudient à l'université."]
        ]
      }
    },
    content: {
      intro: "French affirmative sentences follow the standard SVO (Subject-Verb-Object) order just like English. To write accurately in French, always match the subject pronoun to the verb ending and ensure the noun's gender agrees with its article.",
      tables: [
        {
          caption: "Writing affirmative vs. negative sentences",
          columns: ["Pattern", "Structure", "Written Example"],
          rows: [
            ["Affirmative", "Subject + Verb + Object", "J'apprends le français."],
            ["Negative", "Subject + ne + Verb + pas + Object", "Je n'apprends pas l'allemand."],
            ["Question (est-ce que)", "Est-ce que + Subject + Verb ?", "Est-ce que tu habites ici ?"]
          ]
        }
      ],
      example: { fr: "J'écris une phrase en français chaque jour.", en: "I write a sentence in French every day." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel est l'ordre standard des mots dans une phrase affirmative en français ?", opts: ["Sujet + Verbe + Objet", "Verbe + Sujet + Objet", "Objet + Sujet + Verbe", "Sujet + Objet + Verbe"], a: "Sujet + Verbe + Objet" },
        { q: "Quelle phrase est correctement construite ?", opts: ["Nous habitons à Lyon.", "Nous habite à Lyon.", "Habitons nous à Lyon.", "À Lyon nous habite."], a: "Nous habitons à Lyon." },
        { q: "Comment écrit-on la négation de \"Il parle anglais\" ?", opts: ["Il ne parle pas anglais.", "Il pas parle anglais.", "Il non parle anglais.", "Il parle non anglais."], a: "Il ne parle pas anglais." },
        { q: "Dans \"Je mange une pomme\", quel mot est le complément d'objet ?", opts: ["une pomme", "Je", "mange", "est"], a: "une pomme" },
        { q: "Quelle phrase interrogative est correcte ?", opts: ["Est-ce que tu aimes le café ?", "Aimes tu est-ce que le café ?", "Que est-ce tu aimes café ?", "Tu est-ce que aimes café ?"], a: "Est-ce que tu aimes le café ?" }
      ]
    },
    reference: {
      video: {
        title: "How to Form French Sentences (SVO Word Order)",
        embedUrl: "https://www.youtube-nocookie.com/embed/5aLhU7Gvhj8",
        channel: "Français avec Pierre",
        note: "Learn sentence structure, connecting words, and common beginner writing mistakes."
      },
      read: [
        { title: "Tex's French Grammar — Sentence Structure", url: "https://laits.utexas.edu/tex/gr/overview.html", note: "Basic French syntax and punctuation" }
      ],
      watchListen: []
    }
  };
})();
