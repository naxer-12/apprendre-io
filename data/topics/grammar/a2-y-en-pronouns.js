(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-y-en-pronouns"] = {
    id: "a2-y-en-pronouns",
    module: "grammar",
    level: "A2",
    title: "Adverbial Pronouns Y & EN",
    order: 27,
    requires: "a2-relative-pronouns-qui-que",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Replaces", "Example"],
        rows: [
          ["y", "à/en/dans/sur + place, or à + thing", "Tu vas à Paris ? → Oui, j'y vais."],
          ["en", "de + thing, or a quantity", "Tu veux du café ? → Oui, j'en veux."]
        ]
      }
    },
    content: {
      intro: "Y and en are small but essential pronouns that stand in for a whole prepositional phrase, avoiding repetition. Y replaces a location (à, dans, sur, chez + place) or à + a thing/idea (je pense à mon travail → j'y pense). En replaces de + a thing, or any quantity expression (du, de la, des, un, deux, beaucoup de). Both are placed directly before the conjugated verb, just like other object pronouns.",
      tables: [
        {
          caption: "More examples",
          columns: ["Question", "Answer with y/en", "English"],
          rows: [
            ["Tu habites à Lyon ?", "Oui, j'y habite.", "Yes, I live there."],
            ["Il a combien de frères ?", "Il en a deux.", "He has two (of them)."],
            ["Vous pensez à vos vacances ?", "Oui, j'y pense.", "Yes, I'm thinking about it."],
            ["Tu manges de la salade ?", "Non, je n'en mange pas.", "No, I don't eat any."]
          ]
        }
      ],
      example: { fr: "Des croissants ? Oui, j'en achète toujours quand j'y vais.", en: "Croissants? Yes, I always buy some when I go there." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which pronoun replaces "à Paris" (a place)?', opts: ["y", "en", "le", "lui"], a: "y" },
        { q: 'Which pronoun replaces "du pain" (a quantity)?', opts: ["en", "y", "le", "la"], a: "en" },
        { q: 'Complete: "Tu vas chez Marc ? — Oui, j\'___ vais."', opts: ["y", "en", "le", "lui"], a: "y" },
        { q: 'Complete: "Elle a des enfants ? — Oui, elle ___ a trois."', opts: ["en", "y", "les", "leur"], a: "en" },
        { q: 'Where are y and en placed in the sentence?', opts: ["Right before the conjugated verb", "At the end of the sentence", "Right after the subject noun only", "After the past participle only"], a: "Right before the conjugated verb" }
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
