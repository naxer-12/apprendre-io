(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-appearance-character"] = {
    id: "a1-appearance-character",
    module: "vocabulary",
    level: "A1",
    title: "Physical Appearance & Basic Character Traits",
    order: 17,
    requires: "a1-adjective-agreement",
    visual: {
      kind: "card-grid",
      data: [
        { display: "grand(e)", speak: "il est grand", gloss: "tall", ipa: "[grahn / grahnd]", tag: "" },
        { display: "petit(e)", speak: "elle est petite", gloss: "short", ipa: "[puh-tee / puh-teet]", tag: "" },
        { display: "les cheveux", speak: "les cheveux bruns", gloss: "hair", ipa: "[lay shuh-vuh]", tag: "" },
        { display: "les yeux", speak: "les yeux bleus", gloss: "eyes", ipa: "[lay-zyuh]", tag: "accent" },
        { display: "sympathique", speak: "il est sympathique", gloss: "nice, friendly", ipa: "[sam-pah-teek]", tag: "" },
        { display: "timide", speak: "elle est timide", gloss: "shy", ipa: "[tee-meed]", tag: "" }
      ]
    },
    content: {
      intro: "Describing appearance and personality in French means putting these adjectives to work right after the topic you just learned: gender and number agreement (grand/grande, sympathique stays the same for both). Most physical and character adjectives follow être directly, e.g. \"Il est grand\" (not \"Il a grand\").",
      tables: [
        {
          caption: "Describing someone",
          columns: ["French", "English", "Note"],
          rows: [
            ["Elle a les cheveux bruns et les yeux verts.", "She has brown hair and green eyes.", "avoir is used for hair/eye color"],
            ["Il est grand et sympathique.", "He is tall and nice.", "être is used for build & character"],
            ["Elle est plutôt timide.", "She is rather shy.", "plutôt softens a description"]
          ]
        }
      ],
      example: { fr: "Mon frère est petit, drôle et il a les cheveux roux.", en: "My brother is short, funny, and has red hair." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel verbe utilise-t-on pour la couleur des cheveux ?", opts: ["avoir", "être", "faire", "aller"], a: "avoir" },
        { q: "\"Timide\" signifie :", opts: ["Shy", "Tall", "Funny", "Serious"], a: "Shy" },
        { q: "Comment dit-on \"He is tall\" ?", opts: ["Il est grand.", "Il a grand.", "Il fait grand.", "Il grand est."], a: "Il est grand." },
        { q: "\"Les yeux\" signifie :", opts: ["Eyes", "Hair", "Ears", "Hands"], a: "Eyes" },
        { q: "Quel adjectif décrit une personnalité amicale ?", opts: ["sympathique", "petit", "brun", "grand"], a: "sympathique" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons", url: "https://en.wikibooks.org/wiki/French/Lessons", note: "Adjective vocabulary lists for describing people" }
      ],
      watchListen: []
    }
  };
})();
