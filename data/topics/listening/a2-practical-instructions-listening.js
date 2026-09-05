(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-practical-instructions-listening"] = {
    id: "a2-practical-instructions-listening",
    module: "listening",
    level: "A2",
    title: "Practical Instructions & Counter Guidance",
    order: 13,
    requires: "a2-weather-news-listening",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Vous devez d'abord...", speak: "Vous devez d'abord remplir ce formulaire", gloss: "You must first...", ipa: "[voo duh-vay dah-bor]", tag: "accent" },
        { display: "Prenez un ticket", speak: "Prenez un ticket et patientez", gloss: "Take a number (ticket) and wait", ipa: "[pruh-nay uh tee-kay]", tag: "" },
        { display: "Guichet numéro", speak: "Guichet numéro quatre", gloss: "Counter/window number", ipa: "[gee-shay new-may-roh]", tag: "" },
        { display: "Munissez-vous de", speak: "Munissez-vous d'une pièce d'identité", gloss: "Make sure you have (bring) ...", ipa: "[mew-nee-say voo]", tag: "accent" }
      ]
    },
    content: {
      intro: "At a French pharmacy, post office, or administrative counter, instructions come as a short chain of steps, often with imperatives (prenez, munissez-vous, remplissez) and a redirect to a specific counter or window number. This lesson trains you to follow a multi-step spoken instruction and extract exactly what to do next.",
      tables: [
        {
          caption: "Audio dialogue: Au bureau de poste",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Agent d'accueil", "Bonjour, pour envoyer un colis à l'étranger, prenez d'abord un ticket là-bas.", "Hello, to send a package abroad, first take a number over there."],
            ["Agent d'accueil", "Ensuite, munissez-vous d'une pièce d'identité et remplissez ce formulaire.", "Then, make sure you have an ID and fill out this form."],
            ["Agent d'accueil", "Une fois le formulaire complété, présentez-vous au guichet numéro quatre.", "Once the form is completed, go to counter number four."],
            ["Client", "D'accord, merci beaucoup pour ces informations.", "Okay, thank you very much for the information."]
          ]
        }
      ],
      example: { fr: "Munissez-vous d'une pièce d'identité et remplissez ce formulaire.", en: "Make sure you have an ID and fill out this form." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Que doit faire le client en premier ?", opts: ["Prendre un ticket", "Payer directement", "Aller au guichet 4", "Téléphoner"], a: "Prendre un ticket" },
        { q: "De quoi le client doit-il se munir ?", opts: ["D'une pièce d'identité", "D'un parapluie", "D'un passeport uniquement", "D'un stylo rouge"], a: "D'une pièce d'identité" },
        { q: "Que doit-il faire après avoir rempli le formulaire ?", opts: ["Se présenter au guichet numéro quatre", "Rentrer chez lui", "Reprendre un ticket", "Appeler un agent"], a: "Se présenter au guichet numéro quatre" },
        { q: "Pourquoi le client est-il venu à la poste ?", opts: ["Pour envoyer un colis à l'étranger", "Pour ouvrir un compte", "Pour acheter des timbres", "Pour récupérer une lettre"], a: "Pour envoyer un colis à l'étranger" },
        { q: "Comment le client remercie-t-il l'agent ?", opts: ["Merci beaucoup pour ces informations.", "Au revoir, à bientôt.", "Ce n'est pas grave.", "Je reviendrai demain."], a: "Merci beaucoup pour ces informations." }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded listening exercises for everyday administrative situations" }
      ],
      watchListen: []
    }
  };
})();
