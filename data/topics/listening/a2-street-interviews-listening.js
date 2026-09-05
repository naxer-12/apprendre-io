(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-street-interviews-listening"] = {
    id: "a2-street-interviews-listening",
    module: "listening",
    level: "A2",
    title: "Street Interviews & Simple Opinion Polls",
    order: 15,
    requires: "a2-phone-dialogues-listening",
    visual: {
      kind: "card-grid",
      data: [
        { display: "À votre avis...", speak: "À votre avis, où partez-vous en vacances ?", gloss: "In your opinion...", ipa: "[ah voh-truh ah-vee]", tag: "accent" },
        { display: "Personnellement", speak: "Personnellement, je préfère la montagne", gloss: "Personally", ipa: "[pair-soh-nell-mahn]", tag: "" },
        { display: "Ça dépend", speak: "Ça dépend du budget", gloss: "It depends", ipa: "[sah day-pahn]", tag: "" },
        { display: "En général", speak: "En général, je pars en été", gloss: "Generally / usually", ipa: "[ahn zhay-nay-rahl]", tag: "accent" }
      ]
    },
    content: {
      intro: "Street-interview segments (\"micro-trottoir\") ask several passersby the same simple question and stitch their short answers together. Each answer is short and casual, often starting with a stance marker (personnellement, en général, ça dépend). This lesson trains you to track who said what across several short answers to the same question.",
      tables: [
        {
          caption: "Audio dialogue: Micro-trottoir — Vos vacances préférées",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Journaliste", "Bonjour ! À votre avis, quelles sont les vacances idéales ?", "Hello! In your opinion, what's the ideal vacation?"],
            ["Passant 1", "Personnellement, je préfère la montagne, j'adore les randonnées.", "Personally, I prefer the mountains, I love hiking."],
            ["Passant 2", "Moi, ça dépend du budget, mais en général je pars à la mer.", "For me, it depends on the budget, but generally I go to the seaside."],
            ["Passant 3", "Je n'aime pas trop voyager loin, je préfère rester près de chez moi.", "I don't really like traveling far, I prefer staying close to home."]
          ]
        }
      ],
      example: { fr: "Personnellement, je préfère la montagne.", en: "Personally, I prefer the mountains." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Que préfère le premier passant ?", opts: ["La montagne", "La mer", "Rester chez lui", "La ville"], a: "La montagne" },
        { q: "De quoi dépend le choix du deuxième passant ?", opts: ["Du budget", "Du temps", "De la météo", "De son travail"], a: "Du budget" },
        { q: "Où part généralement le deuxième passant ?", opts: ["À la mer", "À la montagne", "À l'étranger", "Chez ses parents"], a: "À la mer" },
        { q: "Que préfère le troisième passant ?", opts: ["Rester près de chez lui", "Voyager loin", "Partir à la montagne", "Aller à la mer"], a: "Rester près de chez lui" },
        { q: "Quelle question pose la journaliste ?", opts: ["Quelles sont les vacances idéales ?", "Quel est votre métier ?", "Aimez-vous la cuisine française ?", "Où habitez-vous ?"], a: "Quelles sont les vacances idéales ?" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded opinion and street-interview listening exercises" }
      ],
      watchListen: []
    }
  };
})();
