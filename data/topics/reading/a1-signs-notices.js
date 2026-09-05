(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-signs-notices"] = {
    id: "a1-signs-notices",
    module: "reading",
    level: "A1",
    title: "Signs, Posters & Public Notices",
    order: 29,
    requires: "a1-reading-dialogue",
    visual: {
      kind: "table",
      data: {
        columns: ["Sign (French)", "English Meaning"],
        rows: [
          ["Défense de fumer", "No smoking"],
          ["Sortie de secours", "Emergency exit"],
          ["Entrée interdite", "No entry"],
          ["Poussez / Tirez", "Push / Pull"],
          ["Stationnement interdit", "No parking"],
          ["Ouvert / Fermé", "Open / Closed"]
        ]
      }
    },
    content: {
      intro: "Public signs use short, fixed phrases rather than full sentences — the challenge is recognizing set formulas quickly (défense de + infinitive, interdit(e), sortie/entrée) rather than translating word by word.",
      tables: [
        {
          caption: "Common sign patterns",
          columns: ["Pattern", "Example", "Meaning"],
          rows: [
            ["Défense de + infinitive", "Défense de fumer", "It is forbidden to smoke"],
            ["Noun + interdit(e)", "Stationnement interdit", "Parking forbidden"],
            ["Simple imperative", "Poussez", "Push"]
          ]
        }
      ],
      example: { fr: "Attention : sortie de secours, ne pas bloquer.", en: "Caution: emergency exit, do not block." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Que signifie « Défense de fumer » ?", opts: ["Interdiction de fumer", "On peut fumer ici", "Sortie du bâtiment", "Entrée réservée"], a: "Interdiction de fumer" },
        { q: "Où doit-on aller en cas d'urgence ?", opts: ["Sortie de secours", "Entrée interdite", "Stationnement interdit", "Fermé"], a: "Sortie de secours" },
        { q: "Que veut dire « Poussez » sur une porte ?", opts: ["Push (pousser la porte)", "Tirer la porte", "Frapper la porte", "Sonner"], a: "Push (pousser la porte)" },
        { q: "Un panneau indique « Stationnement interdit ». Peut-on garer sa voiture ici ?", opts: ["Non", "Oui", "Seulement le dimanche", "Seulement la nuit"], a: "Non" },
        { q: "« Entrée interdite » signifie :", opts: ["On ne peut pas entrer", "On peut entrer librement", "C'est la sortie", "C'est fermé pour travaux"], a: "On ne peut pas entrer" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded reading exercises for everyday signs and notices" }
      ],
      watchListen: []
    }
  };
})();
