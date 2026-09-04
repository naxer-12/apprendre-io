(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-numbers"] = {
    id: "a1-numbers",
    module: "vocabulary",
    level: "A1",
    title: "Numbers 0–20",
    order: 2,
    requires: "a1-alphabet",
    visual: {
      kind: "card-grid",
      data: [
        { display: "0", speak: "zéro", gloss: "zéro", ipa: "[zay-ro]", tag: "" },
        { display: "1", speak: "un", gloss: "un", ipa: "[uñ]", tag: "accent" },
        { display: "2", speak: "deux", gloss: "deux", ipa: "[duh]", tag: "" },
        { display: "3", speak: "trois", gloss: "trois", ipa: "[twah]", tag: "" },
        { display: "4", speak: "quatre", gloss: "quatre", ipa: "[katr]", tag: "" },
        { display: "5", speak: "cinq", gloss: "cinq", ipa: "[sank]", tag: "" },
        { display: "6", speak: "six", gloss: "six", ipa: "[sees]", tag: "" },
        { display: "7", speak: "sept", gloss: "sept", ipa: "[set]", tag: "" },
        { display: "8", speak: "huit", gloss: "huit", ipa: "[weet]", tag: "" },
        { display: "9", speak: "neuf", gloss: "neuf", ipa: "[nuhf]", tag: "" },
        { display: "10", speak: "dix", gloss: "dix", ipa: "[dees]", tag: "" },
        { display: "11", speak: "onze", gloss: "onze", ipa: "[ohnz]", tag: "" },
        { display: "12", speak: "douze", gloss: "douze", ipa: "[dooz]", tag: "" },
        { display: "13", speak: "treize", gloss: "treize", ipa: "[trez]", tag: "" },
        { display: "14", speak: "quatorze", gloss: "quatorze", ipa: "[ka-torz]", tag: "" },
        { display: "15", speak: "quinze", gloss: "quinze", ipa: "[kanz]", tag: "" },
        { display: "16", speak: "seize", gloss: "seize", ipa: "[sez]", tag: "" },
        { display: "17", speak: "dix-sept", gloss: "dix-sept", ipa: "[dee-set]", tag: "" },
        { display: "18", speak: "dix-huit", gloss: "dix-huit", ipa: "[dee-zweet]", tag: "" },
        { display: "19", speak: "dix-neuf", gloss: "dix-neuf", ipa: "[dee-znuhf]", tag: "" },
        { display: "20", speak: "vingt", gloss: "vingt", ipa: "[van]", tag: "accent" }
      ]
    },
    content: {
      intro: "Counting words are simple; what trips learners up is that six, dix, and huit change pronunciation depending on what follows them:",
      tables: [
        {
          caption: "",
          columns: ["Number", "Alone / before a vowel", "Before a consonant"],
          rows: [
            ["six", "[sees]", "[see] — six pommes"],
            ["dix", "[dees]", "[dee] — dix pommes"],
            ["huit", "[weet]", "[wee] — huit pommes"]
          ]
        }
      ],
      example: { fr: "J'ai vingt ans.", en: "I am twenty years old." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which number is trois?", opts: ["2", "3", "4", "6"], a: "3" },
        { q: "Which number is pronounced [sank]?", opts: ["5", "6", "7", "9"], a: "5" },
        { q: "How do you say 15?", opts: ["quinze", "quatorze", "seize", "cinq"], a: "quinze" },
        { q: "\"Dix-huit\" means:", opts: ["18", "17", "19", "8"], a: "18" },
        { q: "Which number drops its final sound before a consonant, e.g. \"six pommes\"?", opts: ["six", "deux", "cinq", "quatre"], a: "six" }
      ]
    },
    reference: {
      video: {
        "title": "French Numbers 1-100 (Learn French With Alexa)",
        "watchUrl": "https://www.youtube.com/watch?v=Mt00FUPzLPc",
        "videoId": "Mt00FUPzLPc",
        "channel": "Learn French with Alexa",
        "note": "Pronunciation and counting patterns from 0 to 100, including 70s, 80s, and 90s."
      },
      read: [
        { title: "Wikibooks — French/Lessons/Numbers", url: "https://en.wikibooks.org/wiki/French/Lessons/Numbers", note: "IPA transcription for every number 0–20" },
        { title: "Wikibooks — Print version (compiled)", url: "https://en.wikibooks.org/wiki/French/Lessons/Print_version", note: "Same numbers lesson as one fetchable page" }
      ],
      watchListen: [
        { title: "LanguageGuide.org", url: "https://www.languageguide.org/french/vocabulary/", note: "Click-to-hear audio, image-based number vocabulary" },
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "4,000+ graded video exercises, A1 to B2" }
      ]
    }
  };
})();
