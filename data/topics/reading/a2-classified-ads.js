(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-classified-ads"] = {
    id: "a2-classified-ads",
    module: "reading",
    level: "A2",
    title: "Classified Ads & Job Postings",
    order: 7,
    requires: "a2-tourist-brochures",
    visual: {
      kind: "table",
      data: {
        columns: ["Champ", "Détail"],
        rows: [
          ["Poste", "Assistant(e) administratif(ve)"],
          ["Lieu", "Lyon, centre-ville"],
          ["Type de contrat", "CDI, temps plein"],
          ["Profil recherché", "Bon niveau en anglais, maîtrise de Word/Excel"],
          ["Salaire", "1 900 € brut / mois"]
        ]
      }
    },
    content: {
      intro: "Job postings and rental ads use standardized fields (position, location, contract type, required profile, price/salary) that let readers scan quickly for whether the offer matches their needs.",
      tables: [
        {
          caption: "Ad vocabulary",
          columns: ["French", "English"],
          rows: [
            ["CDI / CDD", "Permanent contract / Fixed-term contract"],
            ["Temps plein / Temps partiel", "Full-time / Part-time"],
            ["Profil recherché", "Sought-after profile"],
            ["Charges comprises", "Utilities included (for rentals)"]
          ]
        }
      ],
      example: { fr: "Le poste est un CDI à temps plein à Lyon.", en: "The position is a full-time permanent contract in Lyon." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Quel poste est proposé ?", opts: ["Assistant(e) administratif(ve)", "Ingénieur", "Serveur", "Professeur"], a: "Assistant(e) administratif(ve)" },
        { q: "Où se trouve le poste ?", opts: ["Lyon, centre-ville", "Paris", "Marseille", "Bordeaux"], a: "Lyon, centre-ville" },
        { q: "Quel type de contrat est proposé ?", opts: ["CDI, temps plein", "CDD, temps partiel", "Stage", "Intérim"], a: "CDI, temps plein" },
        { q: "Quelle compétence est demandée ?", opts: ["Bon niveau en anglais", "Permis de conduire", "Diplôme d'ingénieur", "Expérience à l'étranger"], a: "Bon niveau en anglais" },
        { q: "Quel est le salaire proposé ?", opts: ["1 900 € brut / mois", "2 500 € brut / mois", "1 500 € net / mois", "Non précisé"], a: "1 900 € brut / mois" }
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
