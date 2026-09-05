(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-voicemail-messages"] = {
    id: "a1-voicemail-messages",
    module: "listening",
    level: "A1",
    title: "Voicemail Messages & Phone Prompts",
    order: 42,
    requires: "a1-station-announcements",
    visual: {
      kind: "card-grid",
      data: [
        { display: "C'est de la part de qui ?", speak: "C'est de la part de qui ?", gloss: "Who is calling / on whose behalf?", ipa: "[say duh lah par duh kee]", tag: "accent" },
        { display: "Rappelez-moi", speak: "Rappelez-moi s'il vous plaît", gloss: "Call me back please", ipa: "[rah-play mwah]", tag: "" },
        { display: "Laissez un message", speak: "Laissez un message après le bip", gloss: "Leave a message after the beep", ipa: "[lay-say uh meh-sahzh]", tag: "" },
        { display: "Je vous rappelle", speak: "Je vous rappelle plus tard", gloss: "I'll call you back later", ipa: "[zhuh voo rah-pell]", tag: "accent" }
      ]
    },
    content: {
      intro: "French voicemail greetings and messages follow set phrases you'll hear again and again: the automated \"vous êtes bien sur la messagerie de...\" prompt, then a caller stating who they are, why they're calling, and a callback number. Listen for those three pieces of information in the message below.",
      tables: [
        {
          caption: "Audio dialogue: Message vocal",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Répondeur", "Vous êtes bien sur la messagerie de Camille. Laissez un message après le bip.", "You've reached Camille's voicemail. Leave a message after the beep."],
            ["Appelant", "Bonjour Camille, c'est Marc. Je t'appelle au sujet du rendez-vous de demain.", "Hi Camille, it's Marc. I'm calling about tomorrow's appointment."],
            ["Appelant", "Est-ce que tu peux me rappeler avant dix-huit heures ? Mon numéro est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.", "Can you call me back before 6 PM? My number is 06 12 34 56 78."],
            ["Appelant", "Merci, à bientôt !", "Thanks, talk soon!"]
          ]
        }
      ],
      example: { fr: "Est-ce que tu peux me rappeler avant dix-huit heures ?", en: "Can you call me back before 6 PM?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Qui laisse le message ?", opts: ["Marc", "Camille", "Le répondeur", "Un inconnu"], a: "Marc" },
        { q: "Pourquoi Marc appelle-t-il ?", opts: ["Au sujet du rendez-vous de demain", "Pour dire bonjour", "Pour vendre quelque chose", "Pour annuler un dîner"], a: "Au sujet du rendez-vous de demain" },
        { q: "Avant quelle heure Marc veut-il être rappelé ?", opts: ["18 h 00", "20 h 00", "12 h 00", "9 h 00"], a: "18 h 00" },
        { q: "Quel est le numéro de téléphone de Marc ?", opts: ["06 12 34 56 78", "06 21 43 65 87", "01 12 34 56 78", "06 12 34 56 79"], a: "06 12 34 56 78" },
        { q: "Que dit le répondeur automatique au début ?", opts: ["Vous êtes bien sur la messagerie de Camille.", "Le numéro que vous avez composé n'existe pas.", "Bonjour, ici Marc.", "Rappelez plus tard."], a: "Vous êtes bien sur la messagerie de Camille." }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded phone and voicemail listening exercises" }
      ],
      watchListen: []
    }
  };
})();
