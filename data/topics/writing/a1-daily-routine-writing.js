(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-daily-routine-writing"] = {
    id: "a1-daily-routine-writing",
    module: "writing",
    level: "A1",
    title: "Describing Daily Routine in Simple Sentences",
    order: 37,
    requires: "a1-invitation-notes",
    visual: {
      kind: "table",
      data: {
        columns: ["Connector", "English meaning", "Position"],
        rows: [
          ["D'abord", "First", "Start of sentence"],
          ["Puis", "Then", "Mid-sequence"],
          ["Ensuite", "Next", "Mid-sequence"],
          ["Enfin", "Finally", "Last action"]
        ]
      }
    },
    content: {
      intro: "Chaining 4-5 daily actions with chronological connectors turns a list of verbs into a readable paragraph. Use reflexive verbs (se lever, se laver) in the present tense and link each action with d'abord, puis, ensuite, and enfin.",
      tables: [
        {
          caption: "Model routine paragraph",
          columns: ["French", "English"],
          rows: [
            ["D'abord, je me lève à sept heures. Puis, je me douche et je m'habille. Ensuite, je prends le petit-déjeuner. Enfin, je pars au travail à huit heures.", "First, I get up at seven o'clock. Then, I shower and get dressed. Next, I have breakfast. Finally, I leave for work at eight o'clock."]
          ]
        }
      ],
      example: { fr: "D'abord, je me réveille, puis je prends une douche.", en: "First, I wake up, then I take a shower." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel connecteur signifie \"First\" ?", opts: ["D'abord", "Puis", "Enfin", "Ensuite"], a: "D'abord" },
        { q: "Quel connecteur ferme une séquence d'actions ?", opts: ["Enfin", "D'abord", "Puis", "Et"], a: "Enfin" },
        { q: "\"Je me lève à sept heures\" veut dire :", opts: ["I get up at seven o'clock", "I go to bed at seven o'clock", "I eat at seven o'clock", "I leave at seven o'clock"], a: "I get up at seven o'clock" },
        { q: "Quelle phrase utilise correctement un verbe réfléchi ?", opts: ["Je me douche le matin.", "Je douche le matin.", "Je me douches le matin.", "Douche je le matin."], a: "Je me douche le matin." },
        { q: "Quel ordre de connecteurs est logique pour raconter une routine ?", opts: ["D'abord, puis, ensuite, enfin", "Enfin, d'abord, puis, ensuite", "Puis, enfin, d'abord, ensuite", "Ensuite, enfin, puis, d'abord"], a: "D'abord, puis, ensuite, enfin" }
      ]
    },
    reference: {
      read: [],
      watchListen: []
    }
  };
})();
