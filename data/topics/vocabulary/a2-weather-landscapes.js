(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-weather-landscapes"] = {
    id: "a2-weather-landscapes",
    module: "vocabulary",
    level: "A2",
    title: "Detailed Weather, Climate & Landscapes",
    order: 32,
    requires: "a2-celebrations-invitations",
    visual: {
      kind: "card-grid",
      data: [
        { display: "un orage", speak: "il y a un orage", gloss: "a thunderstorm", ipa: "[an noh-rahzh]", tag: "accent" },
        { display: "la neige", speak: "il neige", gloss: "snow", ipa: "[lah nehzh]", tag: "" },
        { display: "la mer / la montagne", speak: "la mer et la montagne", gloss: "the sea / the mountain", ipa: "[lah mair / lah mohn-tahn-yuh]", tag: "" },
        { display: "la campagne", speak: "à la campagne", gloss: "the countryside", ipa: "[lah kahm-pahn-yuh]", tag: "accent" },
        { display: "le climat", speak: "le climat change", gloss: "the climate", ipa: "[luh klee-mah]", tag: "" },
        { display: "il fait beau / il pleut", speak: "il fait beau, il pleut", gloss: "it's nice out / it's raining", ipa: "[eel feh boh / eel pluh]", tag: "" }
      ]
    },
    content: {
      intro: "Beyond basic weather phrases, A2 vocabulary adds specific phenomena (un orage, la neige) and the four classic French landscape settings — la mer, la montagne, la campagne, la ville — which come up constantly in vacation and lifestyle conversations.",
      tables: [
        {
          caption: "Weather and landscapes",
          columns: ["French", "English"],
          rows: [
            ["Il y a eu un gros orage hier soir.", "There was a big thunderstorm last night."],
            ["On préfère la montagne à la mer.", "We prefer the mountains to the sea."],
            ["Le climat est plus doux à la campagne.", "The climate is milder in the countryside."],
            ["Il neige beaucoup en hiver là-bas.", "It snows a lot there in winter."]
          ]
        }
      ],
      example: { fr: "En hiver, il neige à la montagne, mais il pleut souvent à la mer.", en: "In winter, it snows in the mountains, but it often rains at the sea." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Un orage\" signifie :", opts: ["A thunderstorm", "Snow", "Fog", "Wind"], a: "A thunderstorm" },
        { q: "\"La campagne\" signifie :", opts: ["The countryside", "The mountain", "The sea", "The city"], a: "The countryside" },
        { q: "\"Le climat\" signifie :", opts: ["The climate", "The weather (today)", "The season", "The temperature"], a: "The climate" },
        { q: "\"Il neige\" signifie :", opts: ["It's snowing", "It's raining", "It's sunny", "It's windy"], a: "It's snowing" },
        { q: "\"La montagne\" signifie :", opts: ["The mountain", "The sea", "The countryside", "The valley"], a: "The mountain" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 weather and landscape vocabulary" }
      ],
      watchListen: []
    }
  };
})();
