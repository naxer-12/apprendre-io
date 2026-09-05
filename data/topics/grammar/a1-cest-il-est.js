(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-cest-il-est"] = {
    id: "a1-cest-il-est",
    module: "grammar",
    level: "A1",
    title: "Presenters: C'est vs. Il est / Voici / Voilà",
    order: 23,
    requires: "a1-city-directions",
    visual: {
      kind: "table",
      data: {
        columns: ["Pattern", "Followed by", "Example"],
        rows: [
          ["C'est", "article + noun (identifying who/what)", "C'est un professeur. / C'est Marie."],
          ["Il est / Elle est", "adjective or profession alone (describing)", "Il est grand. / Elle est professeure."],
          ["Voici / Voilà", "pointing something out (here is / there is)", "Voici mon frère. / Voilà la gare."]
        ]
      }
    },
    content: {
      intro: "C'est and Il est / Elle est both translate as \"he/she/it is\" in English, but French uses them for two different jobs. Use c'est to identify or introduce someone or something (always followed by an article: c'est un, c'est une, c'est le) — it never takes an adjective alone. Use il est / elle est to describe someone with a bare adjective, or to state a profession without an article. Voici and voilà simply point something out physically or in conversation, with no verb needed.",
      tables: [
        {
          caption: "Common mistake to avoid",
          columns: ["Correct", "Incorrect"],
          rows: [
            ["Il est médecin.", "Il est un médecin. (no article with il est + profession)"],
            ["C'est un médecin.", "Est médecin. (c'est needs the article)"],
            ["Elle est sympathique.", "C'est sympathique elle. (adjective alone takes elle est)"]
          ]
        }
      ],
      example: { fr: "Voici Paul. C'est mon collègue, il est très gentil.", en: "Here's Paul. He's my colleague, he's very kind." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Complete: "___ un étudiant."', opts: ["C'est", "Il est", "Voici", "Elle"], a: "C'est" },
        { q: 'Complete: "___ très intelligente." (describing her with an adjective)', opts: ["Elle est", "C'est", "Voici", "Voilà"], a: "Elle est" },
        { q: 'Which is correct for stating a profession without an article?', opts: ["Il est ingénieur.", "Il est un ingénieur.", "C'est ingénieur.", "Voici ingénieur."], a: "Il est ingénieur." },
        { q: 'How do you say "Here is my sister" while pointing her out?', opts: ["Voici ma sœur.", "C'est ma sœur ici.", "Elle est ma sœur.", "Il est ma sœur."], a: "Voici ma sœur." },
        { q: 'Complete: "___ le professeur de français."', opts: ["C'est", "Il est", "Elle", "Voici le"], a: "C'est" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — Verb Overview", url: "https://laits.utexas.edu/tex/gr/overview.html", note: "Reference on identification vs. description structures" }
      ],
      watchListen: []
    }
  };
})();
