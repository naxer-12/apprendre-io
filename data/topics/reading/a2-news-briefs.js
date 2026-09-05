(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-news-briefs"] = {
    id: "a2-news-briefs",
    module: "reading",
    level: "A2",
    title: "News Briefs & Everyday Incident Reports",
    order: 8,
    requires: "a2-classified-ads",
    visual: {
      kind: "table",
      data: {
        columns: ["French", "English"],
        rows: [
          ["Hier soir, un violent orage a traversé la région de Toulouse.", "Last night, a violent storm passed through the Toulouse region."],
          ["Les pompiers sont intervenus à plusieurs reprises pour des chutes d'arbres.", "Firefighters intervened several times for fallen trees."],
          ["Aucun blessé n'a été signalé.", "No injuries were reported."],
          ["La circulation a été rétablie ce matin.", "Traffic was restored this morning."]
        ]
      }
    },
    content: {
      intro: "Short news items follow a chronological structure: what happened, when, the consequences, and the current situation. Watch for time markers (hier soir, ce matin) and the passé composé used to narrate the event.",
      tables: [
        {
          caption: "News-brief vocabulary",
          columns: ["French", "English"],
          rows: [
            ["Un orage / une tempête", "A storm"],
            ["Les pompiers sont intervenus", "Firefighters intervened"],
            ["Aucun blessé", "No injuries"],
            ["La circulation a été rétablie", "Traffic was restored"]
          ]
        }
      ],
      example: { fr: "Un orage a traversé la région hier soir.", en: "A storm passed through the region last night." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Que s'est-il passé hier soir ?", opts: ["Un violent orage", "Une grève", "Un accident de voiture", "Une manifestation"], a: "Un violent orage" },
        { q: "Pourquoi les pompiers sont-ils intervenus ?", opts: ["Pour des chutes d'arbres", "Pour un incendie", "Pour un cambriolage", "Pour un accident"], a: "Pour des chutes d'arbres" },
        { q: "Y a-t-il eu des blessés ?", opts: ["Non, aucun blessé", "Oui, plusieurs blessés", "Un seul blessé grave", "L'article ne le dit pas"], a: "Non, aucun blessé" },
        { q: "Quand la circulation a-t-elle été rétablie ?", opts: ["Ce matin", "Hier soir", "La semaine prochaine", "Elle ne l'est pas encore"], a: "Ce matin" },
        { q: "Dans quelle région l'orage a-t-il eu lieu ?", opts: ["Toulouse", "Paris", "Lyon", "Nice"], a: "Toulouse" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded reading exercises, A1 to B2" }
      ],
      watchListen: []
    }
  };
})();
