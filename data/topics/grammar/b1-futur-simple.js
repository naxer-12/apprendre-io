(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-futur-simple"] = {
    id: "b1-futur-simple",
    module: "grammar",
    level: "B1",
    title: "Futur Simple",
    order: 14,
    requires: "a2-object-pronoun-order",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Ending", "Regular (-er: parler)", "Irregular Stem (être: ser-)"],
        rows: [
          ["je", "-ai", "je parlerai", "je serai"],
          ["tu", "-as", "tu parleras", "tu seras"],
          ["il / elle", "-a", "il parlera", "il sera"],
          ["nous", "-ons", "nous parlerons", "nous serons"],
          ["vous", "-ez", "vous parlerez", "vous serez"],
          ["ils / elles", "-ont", "ils parleront", "ils seront"]
        ]
      }
    },
    content: {
      intro: "Futur simple expresses actions further ahead or formal predictions. Form it from the infinitive (dropping -e for -re verbs) plus future endings: -ai, -as, -a, -ons, -ez, -ont (notice they mirror present avoir).",
      tables: [
        {
          caption: "High-frequency irregular future stems",
          columns: ["Infinitive", "Future Stem", "Example (je)"],
          rows: [
            ["avoir", "aur-", "j'aurai"],
            ["être", "ser-", "je serai"],
            ["aller", "ir-", "j'irai"],
            ["faire", "fer-", "je ferai"],
            ["pouvoir", "pourr-", "je pourrai"],
            ["vouloir", "voudr-", "je voudrai"]
          ]
        }
      ],
      example: { fr: "Demain, nous voyagerons en France et nous aurons du temps libre.", en: "Tomorrow, we will travel to France and we will have free time." },
      callouts: [
        {
          label: "Memory trick: avoir endings",
          body: "The future endings (-ai, -as, -a, -ons, -ez, -ont) are identical to the present tense of avoir (j'ai, tu as, il a, nous avons -> -ons, vous avez -> -ez, ils ont).",
          cite: "Tex's French Grammar taf2"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'What is the future ending for "je"?', opts: ["-ai", "-as", "-ais", "-e"], a: "-ai" },
        { q: 'What is the irregular future stem for "faire"?', opts: ["fer-", "fair-", "fais-", "fass-"], a: "fer-" },
        { q: '"Demain, j\'___ (avoir) vingt ans."', opts: ["aurai", "avais", "aurais", "auras"], a: "aurai" },
        { q: 'For regular -re verbs (e.g. attendre), what do you do before adding future endings?', opts: ["drop the final -e", "drop -re", "double the r", "keep infinitive unchanged"], a: "drop the final -e" },
        { q: '"Ils ___ (partir) à huit heures."', opts: ["partiront", "partirons", "partiriez", "partent"], a: "partiront" }
      ]
    },
    reference: {
      video: {
        "title": "Le Futur Simple : R\u00e8gle, Terminaisons et Verbes Irr\u00e9guliers",
        "watchUrl": "https://www.youtube.com/watch?v=F4qGg0X1v7o",
        "videoId": "F4qGg0X1v7o",
        "channel": "Fran\u00e7ais avec Pierre",
        "note": "Forming the simple future with stem modifications for high-frequency irregular verbs."
},
      read: [
        { title: "Tex's French Grammar — taf2/taf3", url: "https://laits.utexas.edu/tex/gr/taf2.html", note: "Regular future formation & irregular stems" },
        { title: "Easy French Step-by-Step, Chapter 15", url: null, note: "Future tenses and predictions" }
      ],
      watchListen: []
    }
  };
})();
