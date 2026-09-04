(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-greetings"] = {
    id: "a1-greetings",
    module: "vocabulary",
    level: "A1",
    title: "Greetings & Politeness",
    order: 3,
    requires: "a1-numbers",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Bonjour", speak: "Bonjour", gloss: "Hello / Good day", ipa: "[bon-zhoor]", tag: "accent" },
        { display: "Bonsoir", speak: "Bonsoir", gloss: "Good evening", ipa: "[bon-swahr]", tag: "" },
        { display: "Salut", speak: "Salut", gloss: "Hi / Bye (informal)", ipa: "[sah-lew]", tag: "" },
        { display: "Au revoir", speak: "Au revoir", gloss: "Goodbye", ipa: "[oh ruh-vwahr]", tag: "" },
        { display: "Bonne nuit", speak: "Bonne nuit", gloss: "Good night", ipa: "[bun nwee]", tag: "" },
        { display: "Merci", speak: "Merci", gloss: "Thank you", ipa: "[mair-see]", tag: "accent" },
        { display: "S'il vous plaît", speak: "S'il vous plaît", gloss: "Please (formal)", ipa: "[seel voo pleh]", tag: "" },
        { display: "Pardon", speak: "Pardon", gloss: "Excuse me / Sorry", ipa: "[par-don]", tag: "" },
        { display: "Ça va ?", speak: "Ça va", gloss: "How's it going? (informal)", ipa: "[sah vah]", tag: "" },
        { display: "Comment allez-vous ?", speak: "Comment allez-vous", gloss: "How are you? (formal)", ipa: "[ko-mahn tah-lay voo]", tag: "" }
      ]
    },
    content: {
      intro: "French greetings split along the same formal/informal line you'll meet again in the Grammar module's tu/vous topic — Salut and Ça va are for people you know; Bonjour and Comment allez-vous are the safe default with strangers.",
      tables: [
        {
          caption: "",
          columns: ["Phrase", "Register", "Used when"],
          rows: [
            ["Salut", "Informal", "Friends, peers, casual settings"],
            ["Bonjour / Bonsoir", "Neutral / formal", "Shops, strangers, most daytime situations"],
            ["S'il vous plaît", "Formal", "\"Please\" to someone you don't know well"],
            ["Comment allez-vous ?", "Formal", "\"How are you?\" to an elder, boss, or stranger"]
          ]
        }
      ],
      example: { fr: "Bonjour, comment allez-vous ?", en: "Hello, how are you? (formal)" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which greeting is informal, used with friends?", opts: ["Salut", "Bonjour", "Comment allez-vous ?", "S'il vous plaît"], a: "Salut" },
        { q: "How do you say \"Good evening\"?", opts: ["Bonsoir", "Bonne nuit", "Bonjour", "Au revoir"], a: "Bonsoir" },
        { q: "\"Merci\" means:", opts: ["Thank you", "Please", "Sorry", "Goodbye"], a: "Thank you" },
        { q: "Which is the formal way to say \"please\"?", opts: ["S'il vous plaît", "Salut", "Pardon", "Ça va"], a: "S'il vous plaît" },
        { q: "What does \"Pardon\" mean?", opts: ["Excuse me / Sorry", "Goodbye", "Please", "Hello"], a: "Excuse me / Sorry" }
      ]
    },
    reference: {
      video: {
        "title": "Basic French Greetings & Politeness",
        "embedUrl": "https://www.youtube-nocookie.com/embed/k8PBXEWH7Co",
        "channel": "Learn French with Alexa",
        "note": "Master Bonjour, Salut, Merci, and the crucial distinction between formal and informal greetings."
},
      read: [
        { title: "Wikibooks — French/Lessons/Greetings", url: "https://en.wikibooks.org/wiki/French/Lessons/Greetings", note: "IPA transcription per phrase" },
        { title: "Wikivoyage — French phrasebook", url: "https://en.wikivoyage.org/wiki/French_phrasebook", note: "English respelling, e.g. \"Bonjour (bon-zhoor)\"" }
      ],
      watchListen: [
        { title: "LanguageGuide.org", url: "https://www.languageguide.org/french/vocabulary/", note: "Click-to-hear audio for common phrases" }
      ]
    }
  };
})();
