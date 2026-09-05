(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-phone-dialogues-listening"] = {
    id: "a2-phone-dialogues-listening",
    module: "listening",
    level: "A2",
    title: "Phone Dialogues & Schedule Confirmations",
    order: 14,
    requires: "a2-practical-instructions-listening",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Je confirme notre rendez-vous", speak: "Je confirme notre rendez-vous de jeudi", gloss: "I'm confirming our appointment", ipa: "[zhuh kohn-feerm]", tag: "accent" },
        { display: "Est-ce que ça vous convient ?", speak: "Est-ce que ça vous convient ?", gloss: "Does that work for you?", ipa: "[ess kuh sah voo kohn-vyahn]", tag: "" },
        { display: "Je dois décaler", speak: "Je dois décaler le rendez-vous", gloss: "I need to reschedule", ipa: "[zhuh dwah day-kah-lay]", tag: "" },
        { display: "C'est noté", speak: "C'est noté, à jeudi", gloss: "Noted / got it", ipa: "[say noh-tay]", tag: "accent" }
      ]
    },
    content: {
      intro: "Phone calls to confirm or change an appointment follow a predictable shape: someone states the current plan, proposes a change, checks it works, and closes with a confirmation. At A2 you should be able to catch the original time, the proposed new time, and whether it was accepted.",
      tables: [
        {
          caption: "Audio dialogue: Décaler un rendez-vous",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Secrétaire", "Bonjour, je vous appelle pour confirmer votre rendez-vous de jeudi à quatorze heures.", "Hello, I'm calling to confirm your appointment on Thursday at 2 PM."],
            ["Client", "Justement, est-ce qu'il serait possible de le décaler ? Jeudi ne m'arrange plus.", "Actually, would it be possible to reschedule? Thursday doesn't work for me anymore."],
            ["Secrétaire", "Bien sûr. Est-ce que vendredi matin à dix heures vous conviendrait ?", "Of course. Would Friday morning at 10 AM work for you?"],
            ["Client", "Oui, parfait, ça me convient très bien.", "Yes, perfect, that works very well for me."],
            ["Secrétaire", "Très bien, c'est noté. À vendredi, dix heures !", "Great, noted. See you Friday at ten!"]
          ]
        }
      ],
      example: { fr: "Est-ce qu'il serait possible de décaler le rendez-vous ?", en: "Would it be possible to reschedule the appointment?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel était le rendez-vous initial ?", opts: ["Jeudi à 14 h", "Vendredi à 10 h", "Jeudi à 10 h", "Vendredi à 14 h"], a: "Jeudi à 14 h" },
        { q: "Pourquoi le client appelle-t-il en réalité ?", opts: ["Pour décaler le rendez-vous", "Pour annuler définitivement", "Pour se plaindre", "Pour prendre un nouveau rendez-vous ailleurs"], a: "Pour décaler le rendez-vous" },
        { q: "Quel nouveau créneau est proposé ?", opts: ["Vendredi matin à 10 h", "Vendredi après-midi à 14 h", "Samedi à 10 h", "Jeudi soir à 18 h"], a: "Vendredi matin à 10 h" },
        { q: "Le client accepte-t-il le nouveau créneau ?", opts: ["Oui, ça lui convient très bien", "Non, il refuse", "Il ne répond pas", "Il demande un autre jour"], a: "Oui, ça lui convient très bien" },
        { q: "Comment la secrétaire termine-t-elle l'appel ?", opts: ["C'est noté, à vendredi dix heures.", "Au revoir, bonne chance.", "Rappelez-moi demain.", "Je ne suis pas disponible."], a: "C'est noté, à vendredi dix heures." }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded phone-dialogue listening exercises" }
      ],
      watchListen: []
    }
  };
})();
