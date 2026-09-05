(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-housing-neighborhood"] = {
    id: "a2-housing-neighborhood",
    module: "vocabulary",
    level: "A2",
    title: "Housing, Neighborhood & Moving",
    order: 25,
    requires: "a2-work-professions",
    visual: {
      kind: "card-grid",
      data: [
        { display: "une annonce immobilière", speak: "une annonce immobilière", gloss: "a real-estate listing", ipa: "[ewn ah-nohns ee-moh-bee-lyair]", tag: "accent" },
        { display: "le loyer", speak: "payer le loyer", gloss: "the rent", ipa: "[luh lwah-yay]", tag: "" },
        { display: "les charges", speak: "charges comprises", gloss: "utilities/fees", ipa: "[lay sharzh]", tag: "" },
        { display: "un(e) voisin(e)", speak: "un voisin sympathique", gloss: "a neighbor", ipa: "[an vwah-zan]", tag: "" },
        { display: "déménager", speak: "déménager en ville", gloss: "to move (house)", ipa: "[day-may-nah-zhay]", tag: "accent" },
        { display: "louer", speak: "louer un appartement", gloss: "to rent", ipa: "[loo-ay]", tag: "" }
      ]
    },
    content: {
      intro: "Reading a French rental listing (une annonce immobilière) means decoding standard abbreviations for loyer and charges (utilities/service fees, often listed separately from rent), and being able to talk politely about neighbors and the process of déménager.",
      tables: [
        {
          caption: "Renting and moving",
          columns: ["French", "English"],
          rows: [
            ["Le loyer est de 800 euros, charges comprises.", "The rent is 800 euros, utilities included."],
            ["Nous allons déménager le mois prochain.", "We're going to move next month."],
            ["Mon voisin est très sympathique.", "My neighbor is very nice."],
            ["Je voudrais louer un appartement de deux pièces.", "I'd like to rent a two-room apartment."]
          ]
        }
      ],
      example: { fr: "J'ai trouvé une annonce pour un appartement pas cher, loyer et charges compris.", en: "I found a listing for an inexpensive apartment, rent and utilities included." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Le loyer\" signifie :", opts: ["The rent", "The utilities", "The neighbor", "The listing"], a: "The rent" },
        { q: "\"Les charges\" désigne :", opts: ["Utilities/service fees", "The rent", "The move", "The neighbor"], a: "Utilities/service fees" },
        { q: "\"Déménager\" signifie :", opts: ["To move (house)", "To rent", "To sell", "To visit"], a: "To move (house)" },
        { q: "\"Un voisin\" signifie :", opts: ["A neighbor", "A landlord", "A tenant", "An agent"], a: "A neighbor" },
        { q: "\"Charges comprises\" signifie :", opts: ["Utilities included", "Rent excluded", "Furnished", "For sale"], a: "Utilities included" }
      ]
    },
    reference: {
      read: [
        { title: "Service-Public.fr", url: "https://www.service-public.fr/", note: "French rental and housing vocabulary and procedures" }
      ],
      watchListen: []
    }
  };
})();
