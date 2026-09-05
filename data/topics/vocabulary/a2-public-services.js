(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-public-services"] = {
    id: "a2-public-services",
    module: "vocabulary",
    level: "A2",
    title: "Public Services: Post Office, Bank & City Hall",
    order: 21,
    requires: "a2-shopping-returns",
    visual: {
      kind: "card-grid",
      data: [
        { display: "la poste", speak: "aller à la poste", gloss: "the post office", ipa: "[lah pohst]", tag: "" },
        { display: "un colis", speak: "envoyer un colis", gloss: "a parcel", ipa: "[an koh-lee]", tag: "accent" },
        { display: "un compte bancaire", speak: "ouvrir un compte bancaire", gloss: "a bank account", ipa: "[an kohnt bahn-kair]", tag: "" },
        { display: "la mairie", speak: "à la mairie", gloss: "city hall", ipa: "[lah may-ree]", tag: "accent" },
        { display: "un formulaire", speak: "remplir un formulaire", gloss: "a form", ipa: "[an for-mew-lair]", tag: "" },
        { display: "une pièce d'identité", speak: "une pièce d'identité", gloss: "an ID document", ipa: "[ewn pyess dee-dahn-tee-tay]", tag: "" }
      ]
    },
    content: {
      intro: "French administrative life runs on a handful of official nouns and verbs — envoyer un colis at la poste, ouvrir un compte at the bank, remplir un formulaire at la mairie — and almost always requires une pièce d'identité, so that phrase is worth memorizing on its own.",
      tables: [
        {
          caption: "Getting things done at official offices",
          columns: ["French", "English"],
          rows: [
            ["Je voudrais envoyer ce colis en Espagne.", "I'd like to send this parcel to Spain."],
            ["Je souhaite ouvrir un compte bancaire.", "I would like to open a bank account."],
            ["Il faut remplir ce formulaire à la mairie.", "You need to fill out this form at city hall."],
            ["Avez-vous une pièce d'identité ?", "Do you have an ID document?"]
          ]
        }
      ],
      example: { fr: "À la poste, j'ai envoyé un colis et acheté des timbres.", en: "At the post office, I sent a parcel and bought stamps." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Un colis\" signifie :", opts: ["A parcel", "A form", "An account", "An ID document"], a: "A parcel" },
        { q: "\"La mairie\" signifie :", opts: ["City hall", "Post office", "Bank", "Pharmacy"], a: "City hall" },
        { q: "\"Remplir un formulaire\" signifie :", opts: ["To fill out a form", "To send a parcel", "To open an account", "To pay a bill"], a: "To fill out a form" },
        { q: "\"Une pièce d'identité\" signifie :", opts: ["An ID document", "A bank account", "A receipt", "A parcel"], a: "An ID document" },
        { q: "Où ouvre-t-on un compte bancaire ?", opts: ["à la banque", "à la poste", "à la mairie", "à la pharmacie"], a: "à la banque" }
      ]
    },
    reference: {
      read: [
        { title: "Service-Public.fr", url: "https://www.service-public.fr/", note: "Official French administrative vocabulary and procedures" }
      ],
      watchListen: []
    }
  };
})();
