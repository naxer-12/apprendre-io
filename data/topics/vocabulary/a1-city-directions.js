(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-city-directions"] = {
    id: "a1-city-directions",
    module: "vocabulary",
    level: "A1",
    title: "The City, Public Places & Directions",
    order: 22,
    requires: "a1-prepositions-place-time",
    visual: {
      kind: "card-grid",
      data: [
        { display: "la gare", speak: "la gare", gloss: "train station", ipa: "[lah gahr]", tag: "" },
        { display: "la banque / la pharmacie", speak: "la banque et la pharmacie", gloss: "bank / pharmacy", ipa: "[lah bahnk / lah far-mah-see]", tag: "" },
        { display: "le musée", speak: "le musée", gloss: "museum", ipa: "[luh mew-zay]", tag: "accent" },
        { display: "tout droit", speak: "allez tout droit", gloss: "straight ahead", ipa: "[too drwah]", tag: "" },
        { display: "à gauche / à droite", speak: "à gauche, à droite", gloss: "left / right", ipa: "[ah gohsh / ah drwaht]", tag: "accent" },
        { display: "près de / loin de", speak: "près de la gare", gloss: "near / far from", ipa: "[preh duh / lwan duh]", tag: "" }
      ]
    },
    content: {
      intro: "Giving and understanding directions in French uses imperative verb forms (allez, tournez, continuez) together with the place prepositions you've already studied (à, dans, près de) — this vocabulary set names the destinations, the previous grammar topic supplies the connecting words.",
      tables: [
        {
          caption: "Asking for and giving directions",
          columns: ["French", "English"],
          rows: [
            ["Excusez-moi, où est la gare ?", "Excuse me, where is the train station?"],
            ["Allez tout droit, puis tournez à gauche.", "Go straight ahead, then turn left."],
            ["La pharmacie est en face du musée.", "The pharmacy is across from the museum."],
            ["C'est loin d'ici ?", "Is it far from here?"]
          ]
        }
      ],
      example: { fr: "La banque est près de la gare, à droite.", en: "The bank is near the train station, on the right." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Tout droit\" signifie :", opts: ["Straight ahead", "To the left", "To the right", "Nearby"], a: "Straight ahead" },
        { q: "\"La gare\" signifie :", opts: ["Train station", "Museum", "Bank", "Pharmacy"], a: "Train station" },
        { q: "\"Loin de\" est l'opposé de :", opts: ["près de", "à gauche", "tout droit", "en face de"], a: "près de" },
        { q: "\"À droite\" signifie :", opts: ["To the right", "To the left", "Straight ahead", "Behind"], a: "To the right" },
        { q: "Comment demande-t-on son chemin poliment ?", opts: ["Excusez-moi, où est... ?", "Je voudrais...", "C'est combien ?", "Quelle heure est-il ?"], a: "Excusez-moi, où est... ?" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A1 directions and public-places vocabulary" }
      ],
      watchListen: []
    }
  };
})();
