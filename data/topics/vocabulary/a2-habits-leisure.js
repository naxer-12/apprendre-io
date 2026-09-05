(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-habits-leisure"] = {
    id: "a2-habits-leisure",
    module: "vocabulary",
    level: "A2",
    title: "Habits, Daily Life & Extended Leisure",
    order: 17,
    requires: "b1-conditional",
    visual: {
      kind: "card-grid",
      data: [
        { display: "souvent / parfois / rarement", speak: "souvent, parfois, rarement", gloss: "often / sometimes / rarely", ipa: "[soo-vahn / par-fwah / rar-mahn]", tag: "accent" },
        { display: "faire du sport", speak: "je fais du sport", gloss: "to do sports/exercise", ipa: "[fair dew spor]", tag: "" },
        { display: "aller au cinéma", speak: "aller au cinéma", gloss: "to go to the movies", ipa: "[ah-lay oh see-nay-mah]", tag: "accent" },
        { display: "le théâtre", speak: "aller au théâtre", gloss: "theater", ipa: "[luh tay-ah-truh]", tag: "" },
        { display: "le week-end", speak: "le week-end", gloss: "the weekend", ipa: "[luh week-end]", tag: "" },
        { display: "se détendre", speak: "je me détends", gloss: "to relax", ipa: "[suh day-tahndr]", tag: "" }
      ]
    },
    content: {
      intro: "Frequency adverbs (souvent, parfois, rarement, ne...jamais) are the key to describing habits accurately in French, and they typically sit right after the conjugated verb — a different position than in English.",
      tables: [
        {
          caption: "Talking about habits and leisure",
          columns: ["French", "English"],
          rows: [
            ["Je vais souvent au cinéma le week-end.", "I often go to the movies on weekends."],
            ["Elle fait du sport trois fois par semaine.", "She exercises three times a week."],
            ["Nous allons parfois au théâtre.", "We sometimes go to the theater."],
            ["Il ne sort presque jamais le soir.", "He almost never goes out at night."]
          ]
        }
      ],
      example: { fr: "Le week-end, je fais souvent du sport et je me détends.", en: "On weekends, I often exercise and relax." },
      callouts: [
        { label: "Word order", body: "Frequency adverbs like souvent and parfois usually go right after the conjugated verb: \"Je vais souvent\", not \"Souvent je vais\".", cite: "" }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Parfois\" signifie :", opts: ["Sometimes", "Often", "Rarely", "Never"], a: "Sometimes" },
        { q: "Où place-t-on normalement \"souvent\" dans la phrase ?", opts: ["Après le verbe conjugué", "Avant le sujet", "En fin de phrase toujours", "Avant l'infinitif seulement"], a: "Après le verbe conjugué" },
        { q: "\"Faire du sport\" signifie :", opts: ["To exercise", "To relax", "To go out", "To study"], a: "To exercise" },
        { q: "\"Se détendre\" signifie :", opts: ["To relax", "To exercise", "To work", "To travel"], a: "To relax" },
        { q: "\"Le week-end\" signifie :", opts: ["The weekend", "The evening", "The morning", "The holiday"], a: "The weekend" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 leisure & habits vocabulary" }
      ],
      watchListen: []
    }
  };
})();
