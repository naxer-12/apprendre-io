(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-invitation-notes"] = {
    id: "a1-invitation-notes",
    module: "writing",
    level: "A1",
    title: "Composing Short Invitation & Appointment Notes",
    order: 36,
    requires: "a1-postcard-writing",
    visual: {
      kind: "table",
      data: {
        columns: ["Function", "French phrase", "English meaning"],
        rows: [
          ["Inviting", "Tu es libre samedi soir ?", "Are you free Saturday evening?"],
          ["Proposing", "On se retrouve à 20h chez moi.", "Let's meet at 8pm at my place."],
          ["Accepting", "Avec plaisir, à samedi !", "With pleasure, see you Saturday!"],
          ["Declining politely", "Désolé(e), je ne suis pas libre.", "Sorry, I'm not free."],
          ["Apologizing", "Je suis vraiment désolé(e).", "I'm really sorry."]
        ]
      }
    },
    content: {
      intro: "Short notes for invitations and appointments follow a simple pattern: propose a time and place, then either accept, decline, or apologize politely. French softens refusals with désolé(e) (sorry) rather than a blunt \"non\".",
      tables: [
        {
          caption: "Model invitation note",
          columns: ["French", "English"],
          rows: [
            ["Salut Léa, tu es libre samedi soir ? On se retrouve à 20h chez moi pour dîner. Réponds-moi vite ! Bises, Paul", "Hi Léa, are you free Saturday evening? Let's meet at 8pm at my place for dinner. Reply quickly! Kisses, Paul"],
            ["Merci pour l'invitation, mais je suis désolé(e), je ne suis pas libre samedi. On se voit une autre fois ?", "Thanks for the invitation, but I'm sorry, I'm not free Saturday. Can we see each other another time?"]
          ]
        }
      ],
      example: { fr: "Tu es libre samedi soir pour dîner chez moi ?", en: "Are you free Saturday evening for dinner at my place?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment inviter poliment un ami en français ?", opts: ["Tu es libre samedi soir ?", "Tu dois venir samedi.", "Viens ou pars.", "Il faut venir."], a: "Tu es libre samedi soir ?" },
        { q: "Comment refuser poliment une invitation ?", opts: ["Désolé(e), je ne suis pas libre.", "Non.", "Jamais.", "Je ne veux pas."], a: "Désolé(e), je ne suis pas libre." },
        { q: "\"On se retrouve à 20h chez moi\" veut dire :", opts: ["Let's meet at 8pm at my place", "Let's meet at 8am at your place", "I'll call you at 8pm", "See you never"], a: "Let's meet at 8pm at my place" },
        { q: "Quelle expression accepte une invitation avec enthousiasme ?", opts: ["Avec plaisir !", "Peut-être un jour.", "Je ne sais pas.", "C'est impossible."], a: "Avec plaisir !" },
        { q: "Quel mot exprime des excuses en français ?", opts: ["désolé(e)", "content(e)", "libre", "occupé(e) seulement"], a: "désolé(e)" }
      ]
    },
    reference: {
      read: [],
      watchListen: []
    }
  };
})();
