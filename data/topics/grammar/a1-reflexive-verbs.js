(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-reflexive-verbs"] = {
    id: "a1-reflexive-verbs",
    module: "grammar",
    level: "A1",
    title: "Reflexive / Pronominal Verbs",
    order: 6,
    requires: "a1-futur-proche",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "se laver (to wash oneself)"],
        rows: [
          ["je", "me lave"], ["tu", "te laves"], ["il / elle / on", "se lave"],
          ["nous", "nous lavons"], ["vous", "vous lavez"], ["ils / elles", "se lavent"]
        ]
      }
    },
    content: {
      intro: "Reflexive verbs add a pronoun that matches the subject before the verb — used far more often in French than in English, including for everyday routines like getting up or getting dressed.",
      tables: [],
      example: { fr: "Elle se lave les mains.", en: "She washes her hands (literally: washes to-herself the hands)." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je ___ lave." (reflexive pronoun for je)', opts: ["me", "te", "se", "nous"], a: "me" },
        { q: '"Ils ___ lèvent tôt."', opts: ["se", "te", "me", "vous"], a: "se" },
        { q: 'Reflexive pronoun that goes with "nous"?', opts: ["nous", "vous", "se", "leur"], a: "nous" },
        { q: '"Se laver" means:', opts: ["to wash oneself", "to wash someone else", "to be washed by", "to want to wash"], a: "to wash oneself" },
        { q: 'Which correctly says "I wash myself"?', opts: ["Je me lave.", "Je lave.", "Je lave moi.", "Me je lave."], a: "Je me lave." }
      ]
    },
    reference: {
      video: {
        "title": "French Reflexive Verbs (Les Verbes Pronominaux)",
        "embedUrl": "https://www.youtube-nocookie.com/embed/T0mH8oE8fbc",
        "channel": "Learn French with Alexa",
        "note": "Conjugating reflexive verbs like se lever, se laver, and everyday daily routines."
},
      read: [
        { title: "Tex's French Grammar — tap4", url: "https://laits.utexas.edu/tex/gr/tap4.html", note: "Se laver, se lever, etc." },
        { title: "Easy French Step-by-Step, Chapter 12", url: null, note: "Reflexive Pronouns with Pronominal Verbs" }
      ],
      watchListen: []
    }
  };
})();
