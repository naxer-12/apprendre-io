(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-articles"] = {
    id: "a1-articles",
    module: "grammar",
    level: "A1",
    title: "Articles & Gender of Nouns",
    order: 1,
    requires: null,
    visual: {
      kind: "card-grid",
      data: [
        { display: "le café", speak: "le café", gloss: "the coffee (masculine)", ipa: "", tag: "accent" },
        { display: "la table", speak: "la table", gloss: "the table (feminine)", ipa: "", tag: "" },
        { display: "l'ami", speak: "l'ami", gloss: "the friend (before a vowel)", ipa: "", tag: "accent" },
        { display: "l'école", speak: "l'école", gloss: "the school (before a vowel)", ipa: "", tag: "" },
        { display: "les tables", speak: "les tables", gloss: "the tables (plural, either gender)", ipa: "", tag: "" }
      ]
    },
    content: {
      intro: "Every French noun is masculine or feminine, and the article in front of it has to agree. Gender is often unpredictable from meaning alone, but noun endings are a reliable shortcut:",
      tables: [
        {
          caption: "",
          columns: ["Form", "Used for", "Example"],
          rows: [
            ["le", "Masculine, singular", "le livre"],
            ["la", "Feminine, singular", "la maison"],
            ["l'", "Either gender, before a vowel or mute h", "l'ami / l'heure"],
            ["les", "Plural, either gender", "les livres"]
          ]
        },
        {
          caption: "Ending patterns worth learning",
          columns: ["Ending", "Usual gender", "Reliability"],
          rows: [
            ["-tion / -sion", "Feminine", "Over 90% of the time"],
            ["-eau / -isme", "Masculine", "Similarly high"]
          ]
        }
      ],
      example: { fr: "La maison est grande.", en: "The house is big." },
      callouts: [
        {
          label: "Learn the article with the noun",
          body: "Native speakers lean on ending patterns as a secondary cue for gender, and learners who do the same close much of the gap — but always study the noun with its article (\"la maison\", not \"maison\"), since the article-noun pair is what gets learned, not the noun alone.",
          cite: "Canadian Journal of Applied Linguistics"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which article goes with "café" (masculine)?', opts: ["le", "la", "l'", "les"], a: "le" },
        { q: 'Which article goes with "maison" (feminine)?', opts: ["la", "le", "les", "l'"], a: "la" },
        { q: 'Which article is used before a vowel sound, e.g. "ami"?', opts: ["l'", "le", "la", "les"], a: "l'" },
        { q: "What is the plural definite article for both genders?", opts: ["les", "le", "la", "l'"], a: "les" },
        { q: "Which of these endings is reliably feminine over 90% of the time?", opts: ["-tion", "-eau", "-isme", "-age"], a: "-tion" }
      ]
    },
    reference: {
      video: {
        "title": "Le La Les (L') - French Definite Articles // French Grammar Course // Lesson 6",
        "watchUrl": "https://www.youtube.com/watch?v=OCs_5X5c0YA",
        "videoId": "OCs_5X5c0YA",
        "channel": "Learn French with Alexa",
        "note": "Master French definite articles, gender agreement, and elision before vowel sounds."
      },
      read: [
        { title: "Tex's French Grammar — det2 (Definite articles)", url: "https://laits.utexas.edu/tex/gr/det2.html", note: "le/la/les/l' article table" },
        { title: "Easy French Step-by-Step, Chapter 1", url: null, note: "Nouns, Articles, and Descriptive Adjectives" }
      ],
      watchListen: []
    }
  };
})();
