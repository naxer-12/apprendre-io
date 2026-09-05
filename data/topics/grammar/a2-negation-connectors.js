(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-negation-connectors"] = {
    id: "a2-negation-connectors",
    module: "grammar",
    level: "A2",
    title: "Expanded Negations & Chronological Connectors",
    order: 29,
    requires: "a2-comparatives-superlatives",
    visual: {
      kind: "table",
      data: {
        columns: ["Negation", "Meaning", "Example"],
        rows: [
          ["ne ... plus", "no longer / not anymore", "Je ne fume plus."],
          ["ne ... jamais", "never", "Il ne voyage jamais seul."],
          ["ne ... rien", "nothing", "Je ne vois rien."],
          ["ne ... personne", "nobody", "Elle ne connaît personne ici."]
        ]
      }
    },
    content: {
      intro: "Beyond ne...pas, French has a full family of negations that wrap around the verb the same way: ne...plus (no longer), ne...jamais (never), ne...rien (nothing), and ne...personne (nobody). In the passé composé, most of these place the second word right after the auxiliary (je n'ai rien vu), except personne, which goes after the past participle instead (je n'ai vu personne). To organize a story or explanation, chronological connectors like d'abord (first), ensuite (next), and alors/donc (so/then) link ideas in order.",
      tables: [
        {
          caption: "Connectors for sequencing ideas",
          columns: ["French", "English", "Position"],
          rows: [
            ["d'abord", "first", "Start of the first action"],
            ["ensuite / puis", "then / next", "Between steps"],
            ["alors", "so / then", "Consequence or result"],
            ["donc", "therefore / so", "Logical conclusion"]
          ]
        }
      ],
      example: { fr: "D'abord, je ne connaissais personne ici ; ensuite, je n'ai plus jamais été seul.", en: "At first, I knew nobody here; then, I was never alone again." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"I don\'t smoke anymore" translates to:', opts: ["Je ne fume plus.", "Je ne fume jamais.", "Je ne fume rien.", "Je fume plus."], a: "Je ne fume plus." },
        { q: '"He sees nobody" translates to:', opts: ["Il ne voit personne.", "Il ne voit rien.", "Il ne voit jamais.", "Il ne voit plus."], a: "Il ne voit personne." },
        { q: 'In passé composé, where does "personne" go?', opts: ["After the past participle", "Right after the auxiliary", "Before ne", "At the very start of the sentence"], a: "After the past participle" },
        { q: 'Which connector introduces the very first step?', opts: ["d'abord", "ensuite", "donc", "alors"], a: "d'abord" },
        { q: '"Nothing" in a negative sentence is:', opts: ["rien", "personne", "jamais", "plus"], a: "rien" }
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
