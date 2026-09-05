(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-speaking-introductions"] = {
    id: "a1-speaking-introductions",
    module: "speaking",
    level: "A1",
    title: "Self-Introductions & Spoken French",
    order: 1,
    requires: "a1-greetings",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Je m'appelle...", speak: "Je m'appelle", gloss: "My name is...", ipa: "[zhuh mah-pel]", tag: "accent" },
        { display: "Enchanté(e) !", speak: "Enchanté", gloss: "Pleased to meet you!", ipa: "[ahn-shahn-tay]", tag: "" },
        { display: "J'ai ... ans", speak: "J'ai vingt ans", gloss: "I am ... years old", ipa: "[zhay ... ahn]", tag: "" },
        { display: "Je viens de...", speak: "Je viens de", gloss: "I come from...", ipa: "[zhuh vyan duh]", tag: "accent" },
        { display: "J'habite à...", speak: "J'habite à Paris", gloss: "I live in...", ipa: "[zhah-beet ah]", tag: "" },
        { display: "Je suis ravi(e)", speak: "Je suis ravi de vous rencontrer", gloss: "Delighted to meet you", ipa: "[zhuh swee rah-vee]", tag: "" }
      ]
    },
    content: {
      intro: "Spoken French requires smooth syllable connection and rhythm. In introductions, the French use \"Je m'appelle\" (literally \"I call myself\") and \"J'ai ... ans\" with avoir (to have years), rather than être.",
      tables: [
        {
          caption: "Core self-introduction dialogue template",
          columns: ["Prompt / Question", "Natural Spoken Response", "English Meaning"],
          rows: [
            ["Comment vous vous appelez ?", "Je m'appelle Sophie.", "My name is Sophie."],
            ["Vous venez d'où ?", "Je viens du Canada.", "I come from Canada."],
            ["Quel âge avez-vous ?", "J'ai vingt-cinq ans.", "I am 25 years old."],
            ["Vous faites quoi dans la vie ?", "Je suis étudiant(e).", "I am a student."]
          ]
        }
      ],
      example: { fr: "Bonjour ! Je m'appelle Thomas, je suis canadien et j'habite à Montréal.", en: "Hello! My name is Thomas, I am Canadian and I live in Montreal." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment dit-on \"My name is Alex\" en français ?", opts: ["Je m'appelle Alex.", "Mon nom est être Alex.", "Je suis appelé de Alex.", "Moi nom Alex."], a: "Je m'appelle Alex." },
        { q: "Quel verbe utilise-t-on pour donner son âge ?", opts: ["avoir (J'ai ... ans)", "être (Je suis ... ans)", "faire (Je fais ... ans)", "vivre (Je vis ... ans)"], a: "avoir (J'ai ... ans)" },
        { q: "Que répond-on poliment après une présentation ?", opts: ["Enchanté(e) !", "Bonne nuit !", "Pardon !", "Au revoir !"], a: "Enchanté(e) !" },
        { q: "Comment dit-on \"I live in Paris\" ?", opts: ["J'habite à Paris.", "J'habite de Paris.", "Je vis en Paris.", "J'habite sur Paris."], a: "J'habite à Paris." },
        { q: "Quelle formule correspond à \"Pleased to meet you\" ?", opts: ["Ravi(e) de faire votre connaissance.", "Je m'en vais maintenant.", "Quel temps fait-il ?", "Je ne sais pas."], a: "Ravi(e) de faire votre connaissance." }
      ]
    },
    reference: {
      video: {
        "title": "GCSE French Speaking: Talk About Yourself",
        "watchUrl": "https://www.youtube.com/watch?v=7Z69tpPjqGk",
        "videoId": "7Z69tpPjqGk",
        "channel": "Language Tuition Online",
        "note": "Guided spoken phrases for introducing your name, age, origin, and interests."
      },
      read: [
        { title: "Français Authentique — Se présenter naturellement", url: "https://www.francaisauthentique.com/", note: "Spoken conversational rhythm and everyday self-introductions" }
      ],
      watchListen: []
    }
  };
})();
