(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-adjective-agreement"] = {
    id: "a1-adjective-agreement",
    module: "grammar",
    level: "A1",
    title: "Qualifying Adjectives: Agreement & Placement",
    order: 16,
    requires: "a1-futur-proche",
    visual: {
      kind: "table",
      data: {
        columns: ["Masculine sg.", "Feminine sg.", "Masculine pl.", "Feminine pl.", "Pattern"],
        rows: [
          ["grand", "grande", "grands", "grandes", "add -e / -s / -es"],
          ["heureux", "heureuse", "heureux", "heureuses", "-eux → -euse"],
          ["beau", "belle", "beaux", "belles", "irregular"],
          ["sympathique", "sympathique", "sympathiques", "sympathiques", "no change (already ends in -e)"]
        ]
      }
    },
    content: {
      intro: "French adjectives agree in gender and number with the noun they describe — almost always by adding -e for feminine and -s for plural (grand → grande → grands → grandes). Most adjectives are placed after the noun (un livre intéressant), but a small, high-frequency set goes before the noun instead. These are easy to remember with the acronym BANGS: Beauty (beau, joli), Age (jeune, vieux, nouveau), Number (premier, deux), Goodness (bon, mauvais), and Size (grand, petit, gros).",
      tables: [
        {
          caption: "BANGS: adjectives that come before the noun",
          columns: ["Category", "Example adjectives", "Sample phrase"],
          rows: [
            ["Beauty", "beau, joli", "une belle maison"],
            ["Age", "jeune, vieux, nouveau", "un nouveau téléphone"],
            ["Number", "premier, deuxième", "la première fois"],
            ["Goodness", "bon, mauvais", "un bon restaurant"],
            ["Size", "grand, petit, gros", "un petit chat"]
          ]
        }
      ],
      example: { fr: "C'est une belle voiture rouge et très rapide.", en: "It's a beautiful, red, and very fast car." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Feminine form of "un ami intelligent" (describing a friend, "une amie ___")', opts: ["intelligente", "intelligent", "intelligents", "intelligentes"], a: "intelligente" },
        { q: 'Where does "grand" (BANGS: size) normally go?', opts: ["Before the noun", "After the noun", "Never with a noun", "Only with être"], a: "Before the noun" },
        { q: 'Where does "intéressant" normally go?', opts: ["After the noun", "Before the noun", "At the start of the sentence", "Only after être"], a: "After the noun" },
        { q: 'Plural of "une petite maison"', opts: ["des petites maisons", "des petite maisons", "des petits maisons", "des petite maison"], a: "des petites maisons" },
        { q: 'What does BANGS help you remember?', opts: ["Adjectives placed before the noun", "Irregular verbs", "Question words", "Negation rules"], a: "Adjectives placed before the noun" }
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
