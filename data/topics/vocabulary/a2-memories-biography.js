(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-memories-biography"] = {
    id: "a2-memories-biography",
    module: "vocabulary",
    level: "A2",
    title: "Memories, Biography & Past Events",
    order: 13,
    requires: "a2-imparfait",
    visual: {
      kind: "card-grid",
      data: [
        { display: "l'enfance", speak: "pendant mon enfance", gloss: "childhood", ipa: "[lahn-fahns]", tag: "accent" },
        { display: "grandir", speak: "j'ai grandi à Nice", gloss: "to grow up", ipa: "[grahn-deer]", tag: "" },
        { display: "l'école primaire", speak: "l'école primaire", gloss: "elementary school", ipa: "[lay-kohl pree-mair]", tag: "accent" },
        { display: "le lycée", speak: "au lycée", gloss: "high school", ipa: "[luh lee-say]", tag: "" },
        { display: "le diplôme", speak: "obtenir un diplôme", gloss: "diploma, degree", ipa: "[luh dee-plohm]", tag: "" },
        { display: "un souvenir", speak: "un bon souvenir", gloss: "a memory", ipa: "[an soo-vuh-neer]", tag: "" }
      ]
    },
    content: {
      intro: "Narrating your life story in French naturally uses the imparfait for ongoing childhood states (j'habitais, j'étais) and the passé composé for milestone events (j'ai obtenu mon diplôme) — this vocabulary set gives you the biographical nouns and verbs to hang those tenses on.",
      tables: [
        {
          caption: "Talking about your past",
          columns: ["French", "English"],
          rows: [
            ["J'ai grandi dans une petite ville.", "I grew up in a small town."],
            ["Pendant mon enfance, on jouait dehors tous les jours.", "During my childhood, we played outside every day."],
            ["J'ai obtenu mon diplôme en 2015.", "I got my degree in 2015."],
            ["J'ai de bons souvenirs du lycée.", "I have good memories of high school."]
          ]
        }
      ],
      example: { fr: "Quand j'étais enfant, j'habitais près de la mer.", en: "When I was a child, I lived near the sea." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Grandir\" signifie :", opts: ["To grow up", "To study", "To remember", "To graduate"], a: "To grow up" },
        { q: "\"Le lycée\" correspond à :", opts: ["High school", "Elementary school", "University", "Kindergarten"], a: "High school" },
        { q: "Quel temps utilise-t-on pour un état habituel dans l'enfance ?", opts: ["l'imparfait", "le futur simple", "le conditionnel", "le subjonctif"], a: "l'imparfait" },
        { q: "\"Un souvenir\" signifie :", opts: ["A memory", "A diploma", "A childhood", "A school"], a: "A memory" },
        { q: "\"J'ai obtenu mon diplôme\" utilise :", opts: ["le passé composé", "l'imparfait", "le présent", "le futur"], a: "le passé composé" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 biographical narrative exercises" }
      ],
      watchListen: []
    }
  };
})();
