(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-form-filling"] = {
    id: "a1-form-filling",
    module: "writing",
    level: "A1",
    title: "Filling Out a Personal Information Form",
    order: 34,
    requires: "a1-writing-sentences",
    visual: {
      kind: "table",
      data: {
        columns: ["Field (Champ)", "What to write", "Example"],
        rows: [
          ["Nom", "Family name", "Dupont"],
          ["Prénom", "First name", "Claire"],
          ["Date de naissance", "Date of birth (jj/mm/aaaa)", "12/04/1990"],
          ["Adresse", "Street address", "15 rue des Fleurs"],
          ["Ville", "City", "Lyon"],
          ["Code postal", "Postal code", "69003"],
          ["Téléphone", "Phone number", "06 12 34 56 78"],
          ["Nationalité", "Nationality", "canadienne"],
          ["Profession", "Occupation", "infirmière"],
          ["Signature", "Signature", "(your signature)"]
        ]
      }
    },
    content: {
      intro: "Registration forms for a hotel, library, or sports club all ask for the same core set of personal details. Writing them correctly means using the right word order for French addresses and dates, and knowing the difference between nom (family name) and prénom (first name) — a common mix-up for English speakers.",
      tables: [
        {
          caption: "Common form instructions",
          columns: ["French Instruction", "English Meaning"],
          rows: [
            ["Merci de compléter en majuscules", "Please complete in capital letters"],
            ["Champs obligatoires", "Required fields"],
            ["Cochez la case correspondante", "Check the corresponding box"],
            ["Date et signature", "Date and signature"]
          ]
        }
      ],
      example: { fr: "Nom : Dupont — Prénom : Claire — Né(e) le 12/04/1990 à Lyon.", en: "Family name: Dupont — First name: Claire — Born on 12/04/1990 in Lyon." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Sur un formulaire français, que signifie \"Nom\" ?", opts: ["Nom de famille", "Prénom", "Adresse", "Profession"], a: "Nom de famille" },
        { q: "Comment écrit-on une date de naissance en français ?", opts: ["jour/mois/année", "mois/jour/année", "année/mois/jour", "jour/année/mois"], a: "jour/mois/année" },
        { q: "Quelle phrase complète correctement un formulaire : \"___ : Dupont\" pour le nom de famille ?", opts: ["Nom", "Prénom", "Ville", "Signature"], a: "Nom" },
        { q: "Que signifie \"Champs obligatoires\" ?", opts: ["Required fields", "Optional fields", "Signature here", "Please wait"], a: "Required fields" },
        { q: "Quel mot désigne le code à 5 chiffres d'une ville française ?", opts: ["code postal", "numéro de téléphone", "date de naissance", "nationalité"], a: "code postal" }
      ]
    },
    reference: {
      read: [
        { title: "Service-Public.fr", url: "https://www.service-public.fr/", note: "Official French administrative forms and vocabulary" }
      ],
      watchListen: []
    }
  };
})();
