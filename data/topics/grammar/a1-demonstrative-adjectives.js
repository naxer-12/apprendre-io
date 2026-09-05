(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-demonstrative-adjectives"] = {
    id: "a1-demonstrative-adjectives",
    module: "grammar",
    level: "A1",
    title: "Demonstrative Adjectives (ce, cet, cette, ces)",
    order: 8,
    requires: "a1-possessive-adjectives",
    visual: {
      kind: "table",
      data: {
        columns: ["Form", "Used with", "Example"],
        rows: [
          ["ce", "masculine singular noun", "ce livre"],
          ["cet", "masculine singular noun starting with a vowel/mute h", "cet homme, cet ami"],
          ["cette", "feminine singular noun", "cette table"],
          ["ces", "any plural noun", "ces livres, ces tables"]
        ]
      }
    },
    content: {
      intro: "Demonstrative adjectives mean \"this/that\" (singular) or \"these/those\" (plural) and, like all French adjectives, they agree with the noun. The only twist is cet: it replaces ce specifically before a masculine noun that starts with a vowel sound, purely so the pronunciation flows (ce homme would create an awkward gap, so French uses cet homme instead).",
      tables: [
        {
          caption: "This vs. that — adding -ci / -là when it matters",
          columns: ["French", "English", "Note"],
          rows: [
            ["ce livre-ci", "this book (here)", "-ci marks the closer one"],
            ["ce livre-là", "that book (there)", "-là marks the farther one"],
            ["cette semaine", "this week", "no -ci needed when context is obvious"]
          ]
        }
      ],
      example: { fr: "Cet appartement est petit, mais cette vue est magnifique.", en: "This apartment is small, but this view is magnificent." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Complete: "___ homme est mon voisin." (masculine, vowel sound)', opts: ["Cet", "Ce", "Cette", "Ces"], a: "Cet" },
        { q: 'Complete: "___ voiture est neuve." (feminine)', opts: ["Cette", "Ce", "Cet", "Ces"], a: "Cette" },
        { q: 'Complete: "___ enfants jouent dehors." (plural)', opts: ["Ces", "Ce", "Cette", "Cet"], a: "Ces" },
        { q: 'Complete: "___ livre est intéressant." (masculine, consonant)', opts: ["Ce", "Cet", "Cette", "Ces"], a: "Ce" },
        { q: 'Why does French use "cet" instead of "ce" before "ami"?', opts: ["To avoid a vowel clash in pronunciation", "Because ami is feminine", "Because ami is plural", "There is no rule, it's random"], a: "To avoid a vowel clash in pronunciation" }
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
