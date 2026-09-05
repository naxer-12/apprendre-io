(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-question-asking-speaking"] = {
    id: "a1-question-asking-speaking",
    module: "speaking",
    level: "A1",
    title: "Information Exchange: Asking Questions",
    order: 44,
    requires: "a1-everyday-dialogues-listening",
    visual: {
      kind: "card-grid",
      data: [
        { display: "C'est combien ?", speak: "C'est combien ?", gloss: "How much is it?", ipa: "[say kohn-byan]", tag: "accent" },
        { display: "Quelle heure est-il ?", speak: "Quelle heure est-il ?", gloss: "What time is it?", ipa: "[kel euhr eh-teel]", tag: "" },
        { display: "Où est... ?", speak: "Où est la gare ?", gloss: "Where is... ?", ipa: "[oo eh]", tag: "accent" },
        { display: "C'est quand ?", speak: "C'est quand, le concert ?", gloss: "When is it?", ipa: "[say kahn]", tag: "" }
      ]
    },
    content: {
      intro: "Spoken questions in French are usually built with rising intonation on an otherwise-normal statement, or with \"Est-ce que\" at the front — both are easier to produce on the fly than inversion. Given a stimulus card (a price tag, a clock, a map), your job is to turn it into a natural spoken question and understand a natural spoken answer.",
      tables: [
        {
          caption: "Turning a stimulus into a spoken question",
          columns: ["Prompt / Question", "Natural Spoken Response", "English Meaning"],
          rows: [
            ["(Stimulus: a price tag) → C'est combien, s'il vous plaît ?", "C'est douze euros.", "How much is it, please? — It's twelve euros."],
            ["(Stimulus: a clock) → Quelle heure est-il ?", "Il est trois heures et demie.", "What time is it? — It's half past three."],
            ["(Stimulus: a map) → Où est la pharmacie ?", "C'est tout droit, puis à gauche.", "Where is the pharmacy? — It's straight ahead, then left."],
            ["(Stimulus: a poster) → C'est quand, le concert ?", "C'est samedi soir.", "When is it, the concert? — It's Saturday evening."]
          ]
        }
      ],
      example: { fr: "Pardon, c'est combien, le café ?", en: "Excuse me, how much is the coffee?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment demande-t-on le prix d'un objet ?", opts: ["C'est combien ?", "C'est quand ?", "C'est qui ?", "C'est où ?"], a: "C'est combien ?" },
        { q: "Quelle question convient pour un stimulus \"horloge\" ?", opts: ["Quelle heure est-il ?", "C'est combien ?", "Où est-ce ?", "C'est qui ?"], a: "Quelle heure est-il ?" },
        { q: "\"Où est la gare ?\" demande...", opts: ["un lieu", "un prix", "une heure", "une date"], a: "un lieu" },
        { q: "Réponse naturelle à \"C'est combien ?\" :", opts: ["C'est douze euros.", "C'est samedi.", "C'est tout droit.", "C'est trois heures."], a: "C'est douze euros." },
        { q: "Pour demander une date orale simple, on dit :", opts: ["C'est quand ?", "C'est combien ?", "C'est où ?", "Qui est-ce ?"], a: "C'est quand ?" }
      ]
    },
    reference: {
      read: [
        { title: "Français Authentique", url: "https://www.francaisauthentique.com/", note: "Natural spoken question patterns and everyday exchanges" }
      ],
      watchListen: []
    }
  };
})();
