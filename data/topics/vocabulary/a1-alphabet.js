(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-alphabet"] = {
    id: "a1-alphabet",
    module: "vocabulary",
    level: "A1",
    title: "The French Alphabet",
    order: 1,
    requires: null,
    visual: {
      kind: "card-grid",
      data: [
        { display: "A", speak: "a", gloss: "a", ipa: "[ah]", tag: "accent" },
        { display: "B", speak: "bé", gloss: "bé", ipa: "[bay]", tag: "" },
        { display: "C", speak: "cé", gloss: "cé", ipa: "[say]", tag: "" },
        { display: "D", speak: "dé", gloss: "dé", ipa: "[day]", tag: "" },
        { display: "E", speak: "e", gloss: "e", ipa: "[euh]", tag: "accent" },
        { display: "F", speak: "effe", gloss: "effe", ipa: "[ef]", tag: "" },
        { display: "G", speak: "gé", gloss: "gé", ipa: "[zhay]", tag: "" },
        { display: "H", speak: "hache", gloss: "hache", ipa: "[ahsh]", tag: "" },
        { display: "I", speak: "i", gloss: "i", ipa: "[ee]", tag: "accent" },
        { display: "J", speak: "ji", gloss: "ji", ipa: "[zhee]", tag: "" },
        { display: "K", speak: "ka", gloss: "ka", ipa: "[kah]", tag: "" },
        { display: "L", speak: "elle", gloss: "elle", ipa: "[el]", tag: "" },
        { display: "M", speak: "emme", gloss: "emme", ipa: "[em]", tag: "" },
        { display: "N", speak: "enne", gloss: "enne", ipa: "[en]", tag: "" },
        { display: "O", speak: "o", gloss: "o", ipa: "[oh]", tag: "accent" },
        { display: "P", speak: "pé", gloss: "pé", ipa: "[pay]", tag: "" },
        { display: "Q", speak: "qu", gloss: "qu", ipa: "[kew]", tag: "" },
        { display: "R", speak: "erre", gloss: "erre", ipa: "[air]", tag: "" },
        { display: "S", speak: "esse", gloss: "esse", ipa: "[ess]", tag: "" },
        { display: "T", speak: "té", gloss: "té", ipa: "[tay]", tag: "" },
        { display: "U", speak: "u", gloss: "u", ipa: "[ew]", tag: "accent" },
        { display: "V", speak: "vé", gloss: "vé", ipa: "[vay]", tag: "" },
        { display: "W", speak: "double-vé", gloss: "double-vé", ipa: "[doo-bluh-vay]", tag: "" },
        { display: "X", speak: "ixe", gloss: "ixe", ipa: "[eeks]", tag: "" },
        { display: "Y", speak: "i grec", gloss: "i grec", ipa: "[ee-grek]", tag: "accent" },
        { display: "Z", speak: "zède", gloss: "zède", ipa: "[zed]", tag: "" }
      ]
    },
    content: {
      intro: "Same 26 letters as English, very different names when spoken. Four letters worth extra attention:",
      tables: [
        {
          caption: "",
          columns: ["Letter", "French name", "Sound", "Note"],
          rows: [
            ["H", "hache", "[ahsh]", "Always silent at the start of a word"],
            ["E", "e", "[euh]", "The most common sound in French, often dropped at word-end"],
            ["W", "double-vé", "[doo-bluh-vay]", "Rare in native French words, common in borrowings"],
            ["Y", "i grec", "[ee-grek]", "Literally \"Greek i\" — said as one two-word name"]
          ]
        }
      ],
      example: { fr: "Ça s'écrit C-A-F-É.", en: "It's spelled C-A-F-E." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which letter is pronounced [ah]?", opts: ["A", "H", "E", "I"], a: "A" },
        { q: "How is the letter \"H\" pronounced in French?", opts: ["[ahsh]", "[ha]", "[eff]", "[aitch]"], a: "[ahsh]" },
        { q: "Which letter is silent at the start of most French words?", opts: ["H", "W", "Y", "K"], a: "H" },
        { q: "Which letter is pronounced [zhay]?", opts: ["J", "G", "Y", "Q"], a: "G" },
        { q: "How is \"Y\" literally named in French?", opts: ["i grec", "double i", "ygrec-e", "ipsilon"], a: "i grec" }
      ]
    },
    reference: {
      video: {
        "title": "The French Alphabet (L'alphabet fran\u00e7ais)",
        "watchUrl": "https://www.youtube.com/watch?v=5auM5n_x9qU",
        "videoId": "5auM5n_x9qU",
        "channel": "Learn French with Alexa",
        "note": "Listen to the complete French alphabet with standard pronunciation and mouth shapes."
},
      read: [
        { title: "Wikibooks — French/Lessons/Alphabet", url: "https://en.wikibooks.org/wiki/French/Lessons/Alphabet", note: "3-column table: letter, name, IPA + simplified respelling" },
        { title: "About-France.com (PDF)", url: "https://about-france.com/tourism/french-phrases.pdf", note: "English respellings, e.g. \"Merci (mair-see)\"" },
        { title: "Wikivoyage — French phrasebook", url: "https://en.wikivoyage.org/wiki/French_phrasebook", note: "English respelling, e.g. \"Bonjour (bon-zhoor)\"" }
      ],
      watchListen: [
        { title: "LanguageGuide.org", url: "https://www.languageguide.org/french/vocabulary/", note: "Click-to-hear audio for every letter and word" },
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "4,000+ graded video exercises, A1 to B2" }
      ]
    }
  };
})();
