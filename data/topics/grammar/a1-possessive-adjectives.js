(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-possessive-adjectives"] = {
    id: "a1-possessive-adjectives",
    module: "grammar",
    level: "A1",
    title: "Possessive Adjectives",
    order: 7,
    requires: "a1-reflexive-verbs",
    visual: {
      kind: "table",
      data: {
        columns: ["Owner", "Masculine", "Feminine", "Before a vowel", "Plural"],
        rows: [
          ["my", "mon", "ma", "mon", "mes"],
          ["your (informal)", "ton", "ta", "ton", "tes"],
          ["his / her", "son", "sa", "son", "ses"],
          ["our", "notre", "notre", "notre", "nos"],
          ["your (formal/pl.)", "votre", "votre", "votre", "vos"],
          ["their", "leur", "leur", "leur", "leurs"]
        ]
      }
    },
    content: {
      intro: "Possessive adjectives agree with the noun they describe, not with the owner's gender — a common trap for English speakers. A special rule: the masculine form (mon/ton/son) is used even with feminine nouns that start with a vowel sound.",
      tables: [],
      example: { fr: "Voici mon amie.", en: "Here's my (female) friend. — \"mon\" because \"amie\" starts with a vowel, even though the friend is female." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"___ livre" (my, masculine noun)', opts: ["mon", "ma", "mes", "son"], a: "mon" },
        { q: '"___ amie" (my, feminine noun starting with a vowel)', opts: ["mon", "ma", "mes", "ton"], a: "mon" },
        { q: 'Which is the plural of "leur"?', opts: ["leurs", "leures", "leur", "leures"], a: "leurs" },
        { q: '"votre" is used for:', opts: ["formal \"your\" or plural \"your\"", "informal \"your\" only", "\"his\" only", "\"their\" only"], a: "formal \"your\" or plural \"your\"" },
        { q: '"C\'est ___ (his) chat."', opts: ["son", "sa", "ses", "leur"], a: "son" }
      ]
    },
    reference: {
      video: {
        "title": "French Possessive Adjectives (mon, ma, mes, ton, ta, tes, etc.)",
        "embedUrl": "https://www.youtube-nocookie.com/embed/tM0N5vE1A6k",
        "channel": "Learn French with Alexa",
        "note": "Understand how possessive adjectives match the noun's gender rather than the owner."
},
      read: [
        { title: "Easy French Step-by-Step, Chapter 10", url: null, note: "Possessive Adjectives and Pronouns" },
        { title: "The French Experiment — Possessive Adjectives", url: "https://www.thefrenchexperiment.com/learn-french", note: "Beginner-focused lesson on possession" }
      ],
      watchListen: []
    }
  };
})();
