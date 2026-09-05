(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-comparing-places"] = {
    id: "a2-comparing-places",
    module: "writing",
    level: "A2",
    title: "Comparing Two Places, Homes, or Products",
    order: 11,
    requires: "a2-replying-messages",
    visual: {
      kind: "table",
      data: {
        columns: ["Structure", "Formation", "Example"],
        rows: [
          ["Superiority", "plus + adjectif + que", "Paris est plus grand que Lyon."],
          ["Inferiority", "moins + adjectif + que", "Lyon est moins cher que Paris."],
          ["Equality", "aussi + adjectif + que", "Nice est aussi joli que Cannes."],
          ["Irregular", "meilleur(e) que (bon → better)", "Ce restaurant est meilleur que l'autre."]
        ]
      }
    },
    content: {
      intro: "Comparing two places, homes, or products in writing relies on three comparative structures — plus...que, moins...que, aussi...que — plus the irregular meilleur(e) que for \"better than\". Keep the comparison balanced: name both items and the specific quality being compared.",
      tables: [
        {
          caption: "Model comparison paragraph",
          columns: ["French", "English"],
          rows: [
            ["Mon appartement à Lyon est plus petit que ma maison à la campagne, mais il est aussi plus pratique. Le loyer est moins cher que celui de mes amis à Paris. Pour moi, la vie en ville est meilleure que la vie à la campagne, parce qu'il y a plus de transports.", "My apartment in Lyon is smaller than my house in the countryside, but it's also more practical. The rent is cheaper than my friends' rent in Paris. For me, city life is better than country life, because there is more transport."]
          ]
        }
      ],
      example: { fr: "Cet appartement est plus grand que l'autre, mais moins lumineux.", en: "This apartment is bigger than the other one, but less bright." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment forme-t-on le comparatif de supériorité en français ?", opts: ["plus + adjectif + que", "moins + adjectif + que", "aussi + adjectif + que", "très + adjectif"], a: "plus + adjectif + que" },
        { q: "Quel est le comparatif irrégulier de \"bon\" ?", opts: ["meilleur", "plus bon", "bonnier", "le plus bon"], a: "meilleur" },
        { q: "\"Lyon est moins cher que Paris\" veut dire :", opts: ["Lyon is less expensive than Paris", "Lyon is more expensive than Paris", "Lyon is as expensive as Paris", "Lyon has no prices"], a: "Lyon is less expensive than Paris" },
        { q: "Quelle structure exprime l'égalité ?", opts: ["aussi...que", "plus...que", "moins...que", "le plus...de"], a: "aussi...que" },
        { q: "Quelle phrase est grammaticalement correcte ?", opts: ["Ce restaurant est meilleur que l'autre.", "Ce restaurant est plus bon que l'autre.", "Ce restaurant est bon que l'autre.", "Ce restaurant est le bon que l'autre."], a: "Ce restaurant est meilleur que l'autre." }
      ]
    },
    reference: {
      read: [],
      watchListen: []
    }
  };
})();
