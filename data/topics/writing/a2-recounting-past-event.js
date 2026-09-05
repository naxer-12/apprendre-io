(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-recounting-past-event"] = {
    id: "a2-recounting-past-event",
    module: "writing",
    level: "A2",
    title: "Recounting a Past Event or Trip (60-80 words)",
    order: 9,
    requires: "a2-news-briefs",
    visual: {
      kind: "table",
      data: {
        columns: ["Role", "Tense", "Example"],
        rows: [
          ["Background / description", "Imparfait", "Il faisait beau et j'étais content."],
          ["Main events (plot)", "Passé composé", "Nous sommes arrivés à midi et avons visité le musée."],
          ["Sequencing", "Connectors", "D'abord... ensuite... finalement..."]
        ]
      }
    },
    content: {
      intro: "Recounting a past trip or event in 60-80 words means combining two past tenses: imparfait sets the scene (weather, feelings, ongoing states) while passé composé narrates the specific things that happened. Chronological connectors keep the story flowing.",
      tables: [
        {
          caption: "Model recount",
          columns: ["French", "English"],
          rows: [
            ["L'été dernier, je suis parti(e) en Bretagne avec des amis. Il faisait beau et la mer était calme. D'abord, nous avons visité un petit village. Ensuite, nous avons mangé des crêpes dans un restaurant local. Finalement, nous nous sommes reposés sur la plage. C'était un voyage inoubliable !", "Last summer, I went to Brittany with friends. The weather was nice and the sea was calm. First, we visited a small village. Then, we ate crepes at a local restaurant. Finally, we relaxed on the beach. It was an unforgettable trip!"]
          ]
        }
      ],
      example: { fr: "Il faisait beau quand nous sommes arrivés à la plage.", en: "The weather was nice when we arrived at the beach." },
      callouts: [
        {
          label: "Which tense sets the scene?",
          body: "Use imparfait for descriptions and ongoing background states (il faisait beau, j'étais fatigué), and passé composé for the specific actions that moved the story forward (nous sommes arrivés, j'ai visité).",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel temps décrit le contexte (météo, sentiments) dans un récit au passé ?", opts: ["l'imparfait", "le passé composé", "le futur simple", "le présent"], a: "l'imparfait" },
        { q: "Quel temps raconte les événements précis d'un récit ?", opts: ["le passé composé", "l'imparfait", "le conditionnel", "le subjonctif"], a: "le passé composé" },
        { q: "\"Il faisait beau\" veut dire :", opts: ["The weather was nice", "The weather will be nice", "The weather is nice", "It rained"], a: "The weather was nice" },
        { q: "Quelle phrase combine correctement les deux temps du passé ?", opts: ["Il faisait beau quand nous sommes arrivés.", "Il a fait beau quand nous arrivions.", "Il faisait beau quand nous arrivons.", "Il fait beau quand nous étions arrivés."], a: "Il faisait beau quand nous sommes arrivés." },
        { q: "Quel connecteur introduit la dernière étape d'un récit ?", opts: ["finalement", "d'abord", "quand", "pendant que"], a: "finalement" }
      ]
    },
    reference: {
      read: [],
      watchListen: []
    }
  };
})();
