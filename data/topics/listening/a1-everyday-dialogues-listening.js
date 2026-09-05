(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-everyday-dialogues-listening"] = {
    id: "a1-everyday-dialogues-listening",
    module: "listening",
    level: "A1",
    title: "Everyday Short Dialogues",
    order: 43,
    requires: "a1-voicemail-messages",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Bonjour, ça va ?", speak: "Bonjour, ça va ?", gloss: "Hi, how's it going?", ipa: "[bohn-zhoor sah vah]", tag: "accent" },
        { display: "Je voudrais...", speak: "Je voudrais une baguette", gloss: "I would like...", ipa: "[zhuh voo-dray]", tag: "" },
        { display: "Ça sera tout ?", speak: "Ça sera tout ?", gloss: "Will that be all?", ipa: "[sah suh-rah too]", tag: "" },
        { display: "À plus tard !", speak: "À plus tard !", gloss: "See you later!", ipa: "[ah plew tar]", tag: "accent" }
      ]
    },
    content: {
      intro: "Everyday spoken exchanges are shorter and more elliptical than written French — greetings get compressed, and shopkeepers often drop full sentences for quick fragments (\"Et avec ça ?\" instead of a full question). This lesson trains you to follow a fast, natural bakery exchange from greeting to goodbye.",
      tables: [
        {
          caption: "Audio dialogue: À la boulangerie",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Boulangère", "Bonjour ! Vous désirez ?", "Hello! What would you like?"],
            ["Client", "Bonjour, je voudrais une baguette et deux croissants, s'il vous plaît.", "Hello, I'd like a baguette and two croissants, please."],
            ["Boulangère", "Et avec ça ?", "Anything else?"],
            ["Client", "Non merci, ça sera tout.", "No thanks, that will be all."],
            ["Boulangère", "Ça fait quatre euros dix. Bonne journée !", "That's four euros ten. Have a good day!"]
          ]
        }
      ],
      example: { fr: "Je voudrais une baguette et deux croissants, s'il vous plaît.", en: "I'd like a baguette and two croissants, please." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Que commande le client ?", opts: ["Une baguette et deux croissants", "Un pain au chocolat", "Une tarte", "Trois baguettes"], a: "Une baguette et deux croissants" },
        { q: "Combien coûte la commande ?", opts: ["4,10 €", "5,00 €", "3,50 €", "4,50 €"], a: "4,10 €" },
        { q: "Que demande la boulangère après la commande ?", opts: ["Et avec ça ?", "Quel est votre nom ?", "Vous venez d'où ?", "C'est pour quelle heure ?"], a: "Et avec ça ?" },
        { q: "Comment le client refuse-t-il poliment d'ajouter autre chose ?", opts: ["Non merci, ça sera tout.", "Non, jamais.", "Je ne sais pas.", "Pas maintenant."], a: "Non merci, ça sera tout." },
        { q: "Comment la boulangère salue-t-elle le client au départ ?", opts: ["Bonne journée !", "Bonne nuit !", "À l'année prochaine !", "Salut, à jamais."], a: "Bonne journée !" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded everyday-dialogue listening exercises" }
      ],
      watchListen: []
    }
  };
})();
