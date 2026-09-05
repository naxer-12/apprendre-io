(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-prepositions-place-time"] = {
    id: "a1-prepositions-place-time",
    module: "grammar",
    level: "A1",
    title: "Prepositions of Place & Time",
    order: 21,
    requires: "a1-question-formation",
    visual: {
      kind: "table",
      data: {
        columns: ["Preposition", "Use", "Example"],
        rows: [
          ["à", "at/to a city, or a specific point", "à Paris, à midi"],
          ["en", "in a country (feminine) or month/season", "en France, en hiver"],
          ["chez", "at someone's place", "chez moi, chez le médecin"],
          ["dans", "inside something", "dans la maison"],
          ["sur", "on top of", "sur la table"],
          ["sous", "underneath", "sous le lit"]
        ]
      }
    },
    content: {
      intro: "À, en, chez, dans, sur, and sous are the essential building blocks for saying where something is. À combines with cities and precise moments in time; en is used with feminine countries and with months/seasons (en janvier, en été); chez is unique to French — it means \"at [someone]'s place\" and only ever comes before a person, not a location. For time spans, de...à frames a start and end point (du lundi au vendredi).",
      tables: [
        {
          caption: "Time expressions",
          columns: ["French", "English"],
          rows: [
            ["de neuf heures à midi", "from nine o'clock to noon"],
            ["en septembre", "in September"],
            ["au printemps", "in spring"],
            ["en été / en automne / en hiver", "in summer / autumn / winter"]
          ]
        }
      ],
      example: { fr: "Je travaille de neuf heures à dix-sept heures, et le soir je vais chez mes parents.", en: "I work from nine to five, and in the evening I go to my parents' place." },
      callouts: [
        {
          label: "au printemps is the exception",
          body: "Every other season uses en (en été, en automne, en hiver) but spring alone uses au: au printemps. Worth memorizing as a one-off exception.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Complete: "J\'habite ___ Lyon."', opts: ["à", "en", "chez", "sur"], a: "à" },
        { q: 'Complete: "Elle habite ___ France."', opts: ["en", "à", "chez", "dans"], a: "en" },
        { q: 'Complete: "Ce soir je vais ___ mon ami."', opts: ["chez", "à", "en", "sur"], a: "chez" },
        { q: 'Which preposition means "underneath"?', opts: ["sous", "sur", "dans", "chez"], a: "sous" },
        { q: 'Complete the seasonal exception: "___ printemps"', opts: ["au", "en", "à", "dans"], a: "au" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — Verb Overview", url: "https://laits.utexas.edu/tex/gr/overview.html", note: "General French grammar reference site" }
      ],
      watchListen: []
    }
  };
})();
