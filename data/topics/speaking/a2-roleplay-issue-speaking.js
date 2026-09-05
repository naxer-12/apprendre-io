(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-roleplay-issue-speaking"] = {
    id: "a2-roleplay-issue-speaking",
    module: "speaking",
    level: "A2",
    title: "Interactive Role-Play: Resolving an Unexpected Issue",
    order: 18,
    requires: "a2-prepared-monologue-speaking",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Il y a un problème...", speak: "Il y a un problème avec ma commande", gloss: "There's a problem with...", ipa: "[eel yah uhn pro-blem]", tag: "accent" },
        { display: "Je voudrais être remboursé(e)", speak: "Je voudrais être remboursé", gloss: "I would like a refund", ipa: "[zhuh voo-dray etr rahn-boor-say]", tag: "" },
        { display: "Est-ce qu'on peut échanger ?", speak: "Est-ce qu'on peut échanger cet article ?", gloss: "Can we exchange this?", ipa: "[es-kohn puh ay-shahn-zhay]", tag: "accent" },
        { display: "Je comprends, mais...", speak: "Je comprends, mais ce n'est pas ma faute", gloss: "I understand, but...", ipa: "[zhuh kohn-prahn may]", tag: "" }
      ]
    },
    content: {
      intro: "This ~3-minute role-play puts you on both sides of a small dispute — a damaged product, a booking mix-up — and asks you to negotiate to a resolution. Stay polite even when firm: state the problem clearly, propose a solution, and acknowledge the other side's point before insisting.",
      tables: [
        {
          caption: "Negotiating a resolution, politely but firmly",
          columns: ["Prompt / Question", "Natural Spoken Response", "English Meaning"],
          rows: [
            ["Bonjour, je peux vous aider ?", "Bonjour, il y a un problème avec ma commande : elle est arrivée cassée.", "Hello, can I help you? — Hello, there's a problem with my order: it arrived broken."],
            ["Je suis désolé, on va regarder ça.", "Je voudrais être remboursé, ou échanger l'article.", "I'm sorry, we'll look into it. — I'd like a refund, or to exchange the item."],
            ["On ne peut pas rembourser sans le reçu.", "Je comprends, mais j'ai la confirmation par e-mail.", "We can't refund without the receipt. — I understand, but I have the email confirmation."],
            ["D'accord, on va faire un geste commercial.", "Merci, j'apprécie votre aide.", "Alright, we'll make an exception. — Thank you, I appreciate your help."]
          ]
        }
      ],
      example: { fr: "Il y a un problème avec ma réservation. Je comprends, mais est-ce qu'on peut trouver une solution ?", en: "There's a problem with my booking. I understand, but can we find a solution?" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment signale-t-on un problème poliment ?", opts: ["Il y a un problème avec...", "Je voudrais devenir...", "Je vais vous parler de...", "Bonne journée !"], a: "Il y a un problème avec..." },
        { q: "Comment demande-t-on un remboursement ?", opts: ["Je voudrais être remboursé(e).", "Je voudrais devenir manager.", "J'ai étudié le commerce.", "C'est tout droit."], a: "Je voudrais être remboursé(e)." },
        { q: "\"Est-ce qu'on peut échanger cet article ?\" propose...", opts: ["un échange", "un remboursement", "une plainte formelle", "une nouvelle commande"], a: "un échange" },
        { q: "Quelle formule reconnaît le point de l'autre tout en insistant ?", opts: ["Je comprends, mais...", "C'est combien ?", "Je vais vous parler de...", "D'abord..."], a: "Je comprends, mais..." },
        { q: "Le ton attendu dans ce jeu de rôle est...", opts: ["poli mais ferme", "agressif", "indifférent", "muet"], a: "poli mais ferme" }
      ]
    },
    reference: {
      read: [
        { title: "Français Authentique", url: "https://www.francaisauthentique.com/", note: "Natural spoken negotiation and complaint-resolution phrasing" }
      ],
      watchListen: []
    }
  };
})();
