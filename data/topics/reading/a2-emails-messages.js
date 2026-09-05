(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-emails-messages"] = {
    id: "a2-emails-messages",
    module: "reading",
    level: "A2",
    title: "Personal & Professional Short Emails",
    order: 5,
    requires: "a2-weather-landscapes",
    visual: {
      kind: "table",
      data: {
        columns: ["Section", "French", "English"],
        rows: [
          ["Objet", "Confirmation de votre commande n°4521", "Confirmation of your order #4521"],
          ["Corps", "Bonjour Madame Dubois, nous vous confirmons que votre commande a bien été enregistrée et sera livrée sous 5 jours ouvrés. En cas de question, contactez notre service client.", "Hello Mrs. Dubois, we confirm that your order has been registered and will be delivered within 5 business days. If you have any questions, contact our customer service."],
          ["Formule finale", "Cordialement, le service commercial", "Best regards, the sales department"]
        ]
      }
    },
    content: {
      intro: "Everyday French emails follow a predictable shape: a subject line, a polite opening (Bonjour + name), the main information in one or two sentences, and a closing formula (cordialement). Look for the concrete facts — order numbers, deadlines, requested actions — rather than every word.",
      tables: [
        {
          caption: "Common email formulas",
          columns: ["French", "English"],
          rows: [
            ["Bonjour, je vous écris au sujet de...", "Hello, I am writing to you regarding..."],
            ["Merci de bien vouloir confirmer...", "Please kindly confirm..."],
            ["Dans l'attente de votre réponse,", "Looking forward to your reply,"],
            ["Cordialement", "Best regards"]
          ]
        }
      ],
      example: { fr: "Votre commande sera livrée sous cinq jours ouvrés.", en: "Your order will be delivered within five business days." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel est le numéro de la commande ?", opts: ["4521", "5421", "1245", "2145"], a: "4521" },
        { q: "Sous combien de jours la commande sera-t-elle livrée ?", opts: ["5 jours ouvrés", "10 jours ouvrés", "2 jours ouvrés", "1 mois"], a: "5 jours ouvrés" },
        { q: "Que doit faire Madame Dubois si elle a une question ?", opts: ["Contacter le service client", "Retourner le produit", "Annuler la commande", "Payer un supplément"], a: "Contacter le service client" },
        { q: "Quelle formule termine cet e-mail ?", opts: ["Cordialement", "Bises", "À plus", "Salut"], a: "Cordialement" },
        { q: "Quel est l'objet principal de cet e-mail ?", opts: ["Confirmer une commande", "Annuler un rendez-vous", "Demander un remboursement", "Proposer un emploi"], a: "Confirmer une commande" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded reading exercises, A1 to B2" }
      ],
      watchListen: []
    }
  };
})();
