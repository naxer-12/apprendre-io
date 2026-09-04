(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-listening-comprehension"] = {
    id: "a1-listening-comprehension",
    module: "listening",
    level: "A1",
    title: "First French Conversations: Audio Comprehension",
    order: 1,
    requires: null,
    visual: {
      kind: "card-grid",
      data: [
        { display: "Écoutez", speak: "Écoutez attentivement", gloss: "Listen", ipa: "[ay-koo-tay]", tag: "accent" },
        { display: "Répétez", speak: "Répétez après moi", gloss: "Repeat", ipa: "[ray-pay-tay]", tag: "" },
        { display: "Comprenez ?", speak: "Est-ce que vous comprenez ?", gloss: "Do you understand?", ipa: "[kohn-pruh-nay]", tag: "" },
        { display: "Plus lentement", speak: "Plus lentement s'il vous plaît", gloss: "More slowly please", ipa: "[plew lahnt-mahn]", tag: "accent" }
      ]
    },
    content: {
      intro: "Listening to spoken French requires training your ear for liaison (connecting word boundaries) and silent final consonants. Click any speaker icon below to hear the sentence spoken, then test your comprehension.",
      tables: [
        {
          caption: "Audio dialogue: Rencontre à la gare",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Claire", "Pardon monsieur, le train pour Lyon part à quelle heure ?", "Excuse me sir, what time does the train to Lyon leave?"],
            ["Agent", "Le train part à quatorze heures trente, voie numéro trois.", "The train leaves at 2:30 PM, track number three."],
            ["Claire", "Merci bien ! Est-ce qu'il y a du retard ?", "Thanks a lot! Is there any delay?"],
            ["Agent", "Non, aucun retard, il est parfaitement à l'heure.", "No, no delay at all, it is perfectly on time."]
          ]
        }
      ],
      example: { fr: "Le train pour Lyon part à quatorze heures trente.", en: "The train to Lyon leaves at 2:30 PM." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quelle est la destination du train dans le dialogue ?", opts: ["Lyon", "Paris", "Marseille", "Bordeaux"], a: "Lyon" },
        { q: "À quelle heure part le train ?", opts: ["14 h 30 (quatorze heures trente)", "12 h 00", "15 h 45", "16 h 30"], a: "14 h 30 (quatorze heures trente)" },
        { q: "Sur quelle voie le train arrive-t-il ?", opts: ["Voie numéro 3", "Voie numéro 1", "Voie numéro 7", "Voie numéro 12"], a: "Voie numéro 3" },
        { q: "Le train a-t-il du retard ?", opts: ["Non, aucun retard (il est à l'heure)", "Oui, 10 minutes", "Oui, 1 heure", "Le train est annulé"], a: "Non, aucun retard (il est à l'heure)" },
        { q: "Quelle question permet de demander si le train n'est pas à l'heure ?", opts: ["Est-ce qu'il y a du retard ?", "Où est le billet ?", "Quel est le prix ?", "Est-ce qu'il fait beau ?"], a: "Est-ce qu'il y a du retard ?" }
      ]
    },
    reference: {
      video: {
        "title": "Having Breakfast in Slow French | Super Easy French 152",
        "watchUrl": "https://www.youtube.com/watch?v=40IAXVvjSDA",
        "videoId": "40IAXVvjSDA",
        "channel": "Easy French",
        "note": "Slow, clear spoken French with subtitles for beginner A1 listening practice."
      },
      read: [
        { title: "TV5MONDE — Exercices d'écoute A1", url: "https://apprendre.tv5monde.com/", note: "Graded authentic French audio exercises" }
      ],
      watchListen: []
    }
  };
})();
