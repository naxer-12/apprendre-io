(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-conditional"] = {
    id: "b1-conditional",
    module: "grammar",
    level: "B1",
    title: "Conditionnel Présent",
    order: 15,
    requires: "b1-futur-simple",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Future Stem", "Imparfait Ending", "Conditional Form (aimer)"],
        rows: [
          ["je", "aimer-", "-ais", "j'aimerais"],
          ["tu", "aimer-", "-ais", "tu aimerais"],
          ["il / elle", "aimer-", "-ait", "il aimerait"],
          ["nous", "aimer-", "-ions", "nous aimerions"],
          ["vous", "aimer-", "-iez", "vous aimeriez"],
          ["ils / elles", "aimer-", "-aient", "ils aimeraient"]
        ]
      }
    },
    content: {
      intro: "The conditionnel présent uses the exact same stem as the futur simple, but adds the imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient). It expresses polite requests, hypothetical outcomes, and advice.",
      tables: [
        {
          caption: "Polite expressions using conditional",
          columns: ["French", "English meaning", "Usage note"],
          rows: [
            ["J'aimerais / Je voudrais", "I would like", "Polite request (restaurant, hotel)"],
            ["Pourriez-vous m'aider ?", "Could you help me?", "Polite question with pouvoir"],
            ["Tu devrais te reposer.", "You should rest.", "Gentle advice with devoir"]
          ]
        }
      ],
      example: { fr: "Si j'avais de l'argent, j'achèterais une maison.", en: "If I had money, I would buy a house." },
      callouts: [
        {
          label: "Formula for conditional",
          body: "Conditional = Future stem + Imparfait endings. If you know future stems and imparfait endings, you already know the conditional 100%.",
          cite: "Easy French Step-by-Step ch.15"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "The conditional is formed using the future stem plus endings from which tense?", opts: ["imparfait", "présent", "passé composé", "subjonctif"], a: "imparfait" },
        { q: '"Je ___ (vouloir) un café, s\'il vous plaît."', opts: ["voudrais", "voudrai", "voulais", "veut"], a: "voudrais" },
        { q: '"Nous ___ (être) ravis de venir."', opts: ["serions", "serons", "étions", "soyons"], a: "serions" },
        { q: 'Which sentence demonstrates a hypothetical condition ("si" clause)?', opts: ["Si j'avais le temps, je viendrais.", "Quand j'aurai le temps, je viendrai.", "Puisque j'ai le temps, je viens.", "J'ai le temps donc je viens."], a: "Si j'avais le temps, je viendrais." },
        { q: 'Conditional ending for "ils / elles":', opts: ["-aient", "-ont", "-iez", "-ent"], a: "-aient" }
      ]
    },
    reference: {
      video: {
        "title": "Comparing French Tenses: Conditional VS Imperfect",
        "watchUrl": "https://www.youtube.com/watch?v=fOmO3b4chW0",
        "videoId": "fOmO3b4chW0",
        "channel": "Learn French with Alexa",
        "note": "Formation of conditionnel présent using future stems with imperfect endings."
      },
      read: [
        { title: "Tex's French Grammar — tac1", url: "https://laits.utexas.edu/tex/gr/tac1.html", note: "Conditionnel formation, politeness, and hypothetical si clauses" },
        { title: "Easy French Step-by-Step, Chapter 15", url: null, note: "Conditional sentences" }
      ],
      watchListen: []
    }
  };
})();
