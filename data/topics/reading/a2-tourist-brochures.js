(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-tourist-brochures"] = {
    id: "a2-tourist-brochures",
    module: "reading",
    level: "A2",
    title: "Tourist Brochures & Activity Schedules",
    order: 6,
    requires: "a2-emails-messages",
    visual: {
      kind: "table",
      data: {
        columns: ["Activité", "Durée", "Prix", "Public"],
        rows: [
          ["Visite guidée du vieux port", "1h30", "8 €", "Familles"],
          ["Randonnée en montagne", "Journée entière", "25 €", "Adultes sportifs"],
          ["Atelier de cuisine régionale", "2h", "35 €", "Tous niveaux"],
          ["Croisière au coucher du soleil", "1h", "20 €", "Couples"]
        ]
      }
    },
    content: {
      intro: "Tourist brochures compare several options side by side: duration, price, and target audience. Practice reading to select the activity that best fits a given budget, amount of time, and type of traveler.",
      tables: [
        {
          caption: "Brochure vocabulary",
          columns: ["French", "English"],
          rows: [
            ["Durée", "Duration"],
            ["Tarif / Prix", "Rate / Price"],
            ["Public", "Target audience"],
            ["Réservation conseillée", "Booking recommended"]
          ]
        }
      ],
      example: { fr: "La randonnée en montagne dure toute la journée et coûte vingt-cinq euros.", en: "The mountain hike lasts the whole day and costs twenty-five euros." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Combien de temps dure la visite guidée du vieux port ?", opts: ["1h30", "2h", "1h", "Journée entière"], a: "1h30" },
        { q: "Quelle activité coûte 25 € ?", opts: ["La randonnée en montagne", "La croisière", "L'atelier de cuisine", "La visite guidée"], a: "La randonnée en montagne" },
        { q: "À qui s'adresse la croisière au coucher du soleil ?", opts: ["Aux couples", "Aux familles", "Aux sportifs", "Aux enfants seuls"], a: "Aux couples" },
        { q: "Quelle activité convient à tous les niveaux ?", opts: ["L'atelier de cuisine régionale", "La randonnée en montagne", "La croisière", "La visite guidée"], a: "L'atelier de cuisine régionale" },
        { q: "Quelle est l'activité la moins chère ?", opts: ["La visite guidée (8 €)", "La croisière (20 €)", "La randonnée (25 €)", "L'atelier (35 €)"], a: "La visite guidée (8 €)" }
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
