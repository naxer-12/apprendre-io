(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-object-pronoun-order"] = {
    id: "a2-object-pronoun-order",
    module: "grammar",
    level: "A2",
    title: "Object Pronoun Order",
    order: 13,
    requires: "a2-imparfait",
    visual: {
      kind: "table",
      data: {
        columns: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"],
        rows: [["me / te / se / nous / vous", "le / la / les", "lui / leur", "y", "en"]]
      }
    },
    content: {
      intro: "When a sentence has more than one object pronoun, they stack in a fixed order before the verb — group 1 before group 2, and so on left to right.",
      tables: [],
      example: { fr: "Je le lui donne.", en: "I give it to him/her. (le before lui, per the order above)" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "me/te/se/nous/vous come ___ le/la/les in the stacking order.", opts: ["before", "after", "never together", "randomly"], a: "before" },
        { q: '"Il ___ ___ donne." (fill with me, le, in order)', opts: ["me le", "le me", "lui le", "le lui"], a: "me le" },
        { q: 'Where does "y" go relative to "en"?', opts: ["before en", "after en", "they can\'t combine", "same position"], a: "before en" },
        { q: '"Je le lui donne" means:', opts: ["I give it to him/her.", "I give him to it.", "He gives it to me.", "I give them to him."], a: "I give it to him/her." },
        { q: "Object pronoun stacking order is:", opts: ["fixed", "flexible, speaker's choice", "reversed in questions", "only for written French"], a: "fixed" }
      ]
    },
    reference: {
      video: {
        "title": "L'Ordre des Pronoms Compl\u00e9ments en Fran\u00e7ais",
        "watchUrl": "https://www.youtube.com/watch?v=M3XoVb5_x4Q",
        "videoId": "M3XoVb5_x4Q",
        "channel": "Fran\u00e7ais avec Pierre",
        "note": "Visual rules for placing multiple pronouns (me le, lui en, etc.) before the verb."
},
      read: [
        { title: "Tex's French Grammar — pro9", url: "https://laits.utexas.edu/tex/gr/pro9.html", note: "Pronoun stacking order" },
        { title: "Easy French Step-by-Step, Chapter 14", url: null, note: "More about object pronouns" }
      ],
      watchListen: []
    }
  };
})();
