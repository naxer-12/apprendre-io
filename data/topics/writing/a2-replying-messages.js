(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-replying-messages"] = {
    id: "a2-replying-messages",
    module: "writing",
    level: "A2",
    title: "Replying to Messages: Inviting, Thanking, Apologizing",
    order: 10,
    requires: "a2-recounting-past-event",
    visual: {
      kind: "table",
      data: {
        columns: ["Function", "French phrase", "English meaning"],
        rows: [
          ["Thanking", "Merci beaucoup pour ton message.", "Thank you very much for your message."],
          ["Inviting", "Ça te dirait de venir dîner ?", "Would you like to come for dinner?"],
          ["Apologizing", "Je suis désolé(e) du retard.", "I'm sorry for the delay."],
          ["Confirming", "C'est noté, à bientôt !", "Noted, see you soon!"]
        ]
      }
    },
    content: {
      intro: "Replying to everyday messages requires the right register: warm thanks, casual invitations, and sincere apologies each have their own set phrases. Keep replies short but acknowledge what the other person wrote before adding your own point.",
      tables: [
        {
          caption: "Model reply email",
          columns: ["French", "English"],
          rows: [
            ["Salut Marc, merci beaucoup pour ton invitation ! Ça te dirait qu'on se retrouve vendredi plutôt que jeudi ? Je suis désolé(e), j'ai un rendez-vous jeudi soir. Dis-moi si ça te va. À bientôt, Sophie", "Hi Marc, thanks so much for your invitation! Would it work to meet Friday instead of Thursday? I'm sorry, I have an appointment Thursday evening. Let me know if that works. See you soon, Sophie"]
          ]
        }
      ],
      example: { fr: "Ça te dirait de venir dîner vendredi soir ?", en: "Would you like to come for dinner Friday evening?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Ça te dirait de venir dîner ?\" veut dire :", opts: ["Would you like to come for dinner?", "Did you already have dinner?", "I don't want dinner.", "What did you eat for dinner?"], a: "Would you like to come for dinner?" },
        { q: "Quelle phrase exprime des excuses ?", opts: ["Je suis désolé(e) du retard.", "Merci beaucoup.", "C'est noté.", "À bientôt !"], a: "Je suis désolé(e) du retard." },
        { q: "Quelle phrase confirme poliment un rendez-vous ?", opts: ["C'est noté, à bientôt !", "Je ne sais pas.", "Peut-être jamais.", "Non merci."], a: "C'est noté, à bientôt !" },
        { q: "Comment remercier quelqu'un pour un message ?", opts: ["Merci beaucoup pour ton message.", "Désolé pour ton message.", "C'est ton message.", "Envoie ton message."], a: "Merci beaucoup pour ton message." },
        { q: "Dans une réponse polie, que doit-on faire avant d'ajouter son propre point ?", opts: ["Reconnaître ce que la personne a écrit", "Ignorer le message précédent", "Changer complètement de sujet", "Ne rien dire"], a: "Reconnaître ce que la personne a écrit" }
      ]
    },
    reference: {
      read: [],
      watchListen: []
    }
  };
})();
