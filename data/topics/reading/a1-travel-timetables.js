(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-travel-timetables"] = {
    id: "a1-travel-timetables",
    module: "reading",
    level: "A1",
    title: "Travel Timetables & Tickets",
    order: 31,
    requires: "a1-menus-receipts",
    visual: {
      kind: "table",
      data: {
        columns: ["Destination", "Départ", "Voie", "Correspondance"],
        rows: [
          ["Lyon", "09h15", "Voie 3", "Aucune"],
          ["Marseille", "10h40", "Voie 7", "Changement à Lyon"],
          ["Bordeaux", "11h05", "Voie 2", "Aucune"],
          ["Nice", "13h20", "Voie 5", "Changement à Marseille"]
        ]
      }
    },
    content: {
      intro: "Timetables and tickets are read as tables, not sentences: match the destination, departure time (written on the 24-hour clock), platform number (voie), and whether a connection (correspondance) is needed.",
      tables: [
        {
          caption: "Ticket vocabulary",
          columns: ["French", "English"],
          rows: [
            ["Départ / Arrivée", "Departure / Arrival"],
            ["Voie", "Platform / track"],
            ["Correspondance", "Connection / transfer"],
            ["Aller simple / Aller-retour", "One-way / Round-trip"]
          ]
        }
      ],
      example: { fr: "Le train pour Marseille part à dix heures quarante, voie sept.", en: "The train to Marseille leaves at 10:40, platform 7." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "À quelle heure part le train pour Lyon ?", opts: ["09h15", "10h40", "11h05", "13h20"], a: "09h15" },
        { q: "Quelle voie faut-il pour Bordeaux ?", opts: ["Voie 2", "Voie 3", "Voie 5", "Voie 7"], a: "Voie 2" },
        { q: "Faut-il changer de train pour aller à Nice ?", opts: ["Oui, changement à Marseille", "Non, trajet direct", "Oui, changement à Lyon", "Le train est annulé"], a: "Oui, changement à Marseille" },
        { q: "Quel train n'a pas de correspondance ?", opts: ["Le train pour Lyon", "Le train pour Marseille", "Le train pour Nice", "Aucun"], a: "Le train pour Lyon" },
        { q: "Que signifie « aller-retour » ?", opts: ["Billet aller ET retour", "Billet aller seulement", "Un changement de voie", "Un retard"], a: "Billet aller ET retour" }
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
