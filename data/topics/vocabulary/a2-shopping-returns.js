(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-shopping-returns"] = {
    id: "a2-shopping-returns",
    module: "vocabulary",
    level: "A2",
    title: "Shopping, Specialized Stores & Simple Returns",
    order: 20,
    requires: "a2-reflexive-verbs-past",
    visual: {
      kind: "card-grid",
      data: [
        { display: "le paiement", speak: "le mode de paiement", gloss: "payment", ipa: "[luh pay-mahn]", tag: "" },
        { display: "les soldes", speak: "les soldes d'hiver", gloss: "the sales", ipa: "[lay sohld]", tag: "" },
        { display: "échanger", speak: "je voudrais échanger cet article", gloss: "to exchange", ipa: "[ay-shahn-zhay]", tag: "accent" },
        { display: "rembourser", speak: "être remboursé", gloss: "to refund", ipa: "[rahm-boor-say]", tag: "" },
        { display: "la carte bancaire", speak: "payer par carte bancaire", gloss: "debit/credit card", ipa: "[lah kart bahn-kair]", tag: "" },
        { display: "le reçu / une réclamation", speak: "le reçu et une réclamation", gloss: "receipt / complaint", ipa: "[luh ruh-sew / ewn ray-klah-mah-syohn]", tag: "" }
      ]
    },
    content: {
      intro: "Handling a store return in French means being able to state the problem (une réclamation), name your original payment method (par carte, en espèces), and ask specifically for an exchange (échanger) versus a refund (rembourser) — two verbs that are often confused by learners.",
      tables: [
        {
          caption: "Returning or exchanging an item",
          columns: ["French", "English"],
          rows: [
            ["Je voudrais échanger cet article, il ne me va pas.", "I'd like to exchange this item, it doesn't fit me."],
            ["Est-ce que je peux être remboursé ?", "Can I get a refund?"],
            ["Avez-vous le reçu ?", "Do you have the receipt?"],
            ["J'ai payé par carte bancaire.", "I paid by debit card."]
          ]
        }
      ],
      example: { fr: "Pendant les soldes, j'ai acheté un pull, mais je veux le rembourser.", en: "During the sales, I bought a sweater, but I want to return it for a refund." },
      callouts: [
        { label: "échanger vs. rembourser", body: "\"Échanger\" means to swap for a different item; \"rembourser\" means to get your money back — a French shop assistant will usually ask which one you want.", cite: "" }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Rembourser\" signifie :", opts: ["To refund", "To exchange", "To pay", "To sell"], a: "To refund" },
        { q: "\"Les soldes\" signifie :", opts: ["The sales", "The receipt", "The payment", "The complaint"], a: "The sales" },
        { q: "\"Le reçu\" signifie :", opts: ["The receipt", "The refund", "The sale", "The card"], a: "The receipt" },
        { q: "\"Échanger\" signifie :", opts: ["To exchange", "To refund", "To buy", "To complain"], a: "To exchange" },
        { q: "Comment dit-on \"I paid by card\" ?", opts: ["J'ai payé par carte bancaire.", "Je voudrais échanger.", "J'ai un reçu.", "Je fais les soldes."], a: "J'ai payé par carte bancaire." }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 shopping & customer-service vocabulary" }
      ],
      watchListen: []
    }
  };
})();
