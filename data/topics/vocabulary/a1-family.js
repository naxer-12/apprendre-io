(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-family"] = {
    id: "a1-family",
    module: "vocabulary",
    level: "A1",
    title: "Family & Close Relationships",
    order: 18,
    requires: "a1-appearance-character",
    visual: {
      kind: "card-grid",
      data: [
        { display: "le père / la mère", speak: "le père et la mère", gloss: "father / mother", ipa: "[luh pair / lah mair]", tag: "" },
        { display: "le frère / la sœur", speak: "le frère et la sœur", gloss: "brother / sister", ipa: "[luh frair / lah sur]", tag: "accent" },
        { display: "le fils / la fille", speak: "le fils et la fille", gloss: "son / daughter", ipa: "[luh feess / lah fee]", tag: "" },
        { display: "le mari / la femme", speak: "le mari et la femme", gloss: "husband / wife", ipa: "[luh mah-ree / lah fahm]", tag: "" },
        { display: "marié(e)", speak: "il est marié", gloss: "married", ipa: "[mah-ree-ay]", tag: "accent" },
        { display: "célibataire", speak: "elle est célibataire", gloss: "single", ipa: "[say-lee-bah-tair]", tag: "" }
      ]
    },
    content: {
      intro: "French family vocabulary pairs a masculine and feminine word for almost every relationship (frère/sœur, fils/fille), and \"les parents\" means parents (mother and father), not relatives in general — a common false-friend trap for English speakers.",
      tables: [
        {
          caption: "Talking about family",
          columns: ["French", "English"],
          rows: [
            ["J'ai deux frères et une sœur.", "I have two brothers and one sister."],
            ["Mes parents habitent à Lyon.", "My parents live in Lyon."],
            ["Elle est mariée avec deux enfants.", "She is married with two children."],
            ["Il est célibataire, sans enfants.", "He is single, with no children."]
          ]
        }
      ],
      example: { fr: "Ma famille : mon père, ma mère, mon frère et moi.", en: "My family: my father, my mother, my brother, and me." },
      callouts: [
        { label: "False friend", body: "\"Les parents\" usually means your mother and father, not extended relatives — for that, French says \"la famille\" or \"les proches\".", cite: "" }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Les parents\" signifie généralement :", opts: ["Mother and father", "All relatives", "Grandparents", "Cousins"], a: "Mother and father" },
        { q: "\"La sœur\" signifie :", opts: ["Sister", "Brother", "Daughter", "Mother"], a: "Sister" },
        { q: "Comment dit-on \"married\" ?", opts: ["marié(e)", "célibataire", "divorcé(e)", "fiancé(e)"], a: "marié(e)" },
        { q: "\"Le fils\" signifie :", opts: ["Son", "Daughter", "Husband", "Brother"], a: "Son" },
        { q: "Quel mot signifie \"single\" (non marié) ?", opts: ["célibataire", "marié", "père", "épouse"], a: "célibataire" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A1 family & relationships vocabulary" }
      ],
      watchListen: []
    }
  };
})();
