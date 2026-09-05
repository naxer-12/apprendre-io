(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-comparatives-superlatives"] = {
    id: "a2-comparatives-superlatives",
    module: "grammar",
    level: "A2",
    title: "Comparative & Superlative Forms",
    order: 28,
    requires: "a2-y-en-pronouns",
    visual: {
      kind: "table",
      data: {
        columns: ["Structure", "Meaning", "Example"],
        rows: [
          ["plus ... que", "more ... than", "Elle est plus grande que moi."],
          ["moins ... que", "less ... than", "Il est moins rapide que toi."],
          ["aussi ... que", "as ... as", "Ce livre est aussi intéressant que l'autre."],
          ["le/la/les plus ...", "the most ...", "C'est le plus grand bâtiment."],
          ["le/la/les moins ...", "the least ...", "C'est la moins chère des options."]
        ]
      }
    },
    content: {
      intro: "Comparatives sandwich an adjective between plus/moins/aussi and que. Superlatives add the definite article (le/la/les) in front of plus/moins, agreeing with the noun being described. Two adjectives break the regular pattern completely: bon (good) becomes meilleur (better) rather than \"plus bon,\" and its adverb equivalent bien (well) becomes mieux (better) rather than \"plus bien\" — these irregular forms are used constantly, so they're worth memorizing outright.",
      tables: [
        {
          caption: "Irregular: meilleur vs. mieux",
          columns: ["French", "English", "Note"],
          rows: [
            ["Ce gâteau est meilleur.", "This cake is better.", "meilleur = adjective, describes a noun"],
            ["Elle chante mieux que moi.", "She sings better than me.", "mieux = adverb, describes a verb"],
            ["C'est le meilleur restaurant.", "It's the best restaurant.", "superlative of meilleur"]
          ]
        }
      ],
      example: { fr: "Ce restaurant est meilleur que l'autre, et le service est aussi plus rapide.", en: "This restaurant is better than the other one, and the service is also faster." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Taller than" translates to:', opts: ["plus grand que", "plus grand de", "grand plus que", "que plus grand"], a: "plus grand que" },
        { q: 'What is the irregular comparative of "bon" (good)?', opts: ["meilleur", "plus bon", "bonneur", "mieux"], a: "meilleur" },
        { q: '"She sings better" (adverb) is:', opts: ["Elle chante mieux.", "Elle chante meilleur.", "Elle est mieux chante.", "Elle chante plus bien."], a: "Elle chante mieux." },
        { q: '"As fast as" translates to:', opts: ["aussi rapide que", "plus rapide que", "moins rapide que", "rapide aussi que"], a: "aussi rapide que" },
        { q: '"The most expensive option" translates to:', opts: ["l'option la plus chère", "l'option plus chère", "la plus chère de l'option", "l'option la meilleur chère"], a: "l'option la plus chère" }
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
