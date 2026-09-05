(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-registration-forms"] = {
    id: "a1-registration-forms",
    module: "reading",
    level: "A1",
    title: "Registration Forms & Informational Cards",
    order: 33,
    requires: "a1-postcards-reading",
    visual: {
      kind: "table",
      data: {
        columns: ["Champ (French)", "English Meaning"],
        rows: [
          ["Nom", "Last name"],
          ["Prénom", "First name"],
          ["Date de naissance", "Date of birth"],
          ["Nationalité", "Nationality"],
          ["Profession", "Occupation"],
          ["Adresse", "Address"],
          ["Numéro de téléphone", "Phone number"]
        ]
      }
    },
    content: {
      intro: "Registration and membership forms use single-word or short-phrase field labels rather than full questions. Recognizing the field label tells you exactly what kind of information belongs on that line.",
      tables: [
        {
          caption: "Filled-in example",
          columns: ["Champ", "Réponse"],
          rows: [
            ["Nom", "Girard"],
            ["Prénom", "Camille"],
            ["Date de naissance", "14/03/1998"],
            ["Nationalité", "Belge"],
            ["Profession", "Infirmière"]
          ]
        }
      ],
      example: { fr: "Nom : Girard — Prénom : Camille — Nationalité : Belge.", en: "Last name: Girard — First name: Camille — Nationality: Belgian." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel champ demande le nom de famille ?", opts: ["Nom", "Prénom", "Adresse", "Profession"], a: "Nom" },
        { q: "Que signifie « Date de naissance » ?", opts: ["Date of birth", "Wedding date", "Today's date", "Departure date"], a: "Date of birth" },
        { q: "Camille Girard est de quelle nationalité ?", opts: ["Belge", "Française", "Suisse", "Canadienne"], a: "Belge" },
        { q: "Quelle est la profession de Camille ?", opts: ["Infirmière", "Étudiante", "Professeure", "Serveuse"], a: "Infirmière" },
        { q: "Où écrit-on son métier sur le formulaire ?", opts: ["Profession", "Nom", "Nationalité", "Date de naissance"], a: "Profession" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded reading exercises for everyday French documents" }
      ],
      watchListen: []
    }
  };
})();
