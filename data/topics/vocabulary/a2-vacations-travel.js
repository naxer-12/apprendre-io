(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-vacations-travel"] = {
    id: "a2-vacations-travel",
    module: "vocabulary",
    level: "A2",
    title: "Vacations, Long-Distance Travel & Lodging",
    order: 23,
    requires: "a2-modal-verbs",
    visual: {
      kind: "card-grid",
      data: [
        { display: "l'hôtel / le camping", speak: "l'hôtel et le camping", gloss: "hotel / campsite", ipa: "[loh-tel / luh kahm-peeng]", tag: "accent" },
        { display: "le gîte", speak: "louer un gîte", gloss: "a rural cottage rental", ipa: "[luh zheet]", tag: "" },
        { display: "réserver", speak: "réserver une chambre", gloss: "to book", ipa: "[ray-zair-vay]", tag: "" },
        { display: "le vol", speak: "le vol pour Paris", gloss: "the flight", ipa: "[luh vohl]", tag: "" },
        { display: "le retard", speak: "le vol a du retard", gloss: "the delay", ipa: "[luh ruh-tar]", tag: "" },
        { display: "les bagages", speak: "les bagages", gloss: "luggage", ipa: "[lay bah-gahzh]", tag: "" }
      ]
    },
    content: {
      intro: "Vacation vocabulary splits lodging into three common categories — l'hôtel, le camping, and le gîte (a self-catering countryside rental) — and airport/travel-paperwork words like le vol, le retard, and les bagages come up constantly when things don't go to plan.",
      tables: [
        {
          caption: "Planning and dealing with travel",
          columns: ["French", "English"],
          rows: [
            ["J'ai réservé un gîte à la campagne.", "I booked a cottage in the countryside."],
            ["Notre vol a deux heures de retard.", "Our flight is two hours delayed."],
            ["Où sont mes bagages ?", "Where is my luggage?"],
            ["On préfère le camping à l'hôtel.", "We prefer camping to a hotel."]
          ]
        }
      ],
      example: { fr: "Nous avons réservé une chambre d'hôtel, mais le vol a du retard.", en: "We booked a hotel room, but the flight is delayed." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Le gîte\" désigne :", opts: ["A rural cottage rental", "A hotel", "An airport", "A campsite"], a: "A rural cottage rental" },
        { q: "\"Le retard\" signifie :", opts: ["The delay", "The flight", "The luggage", "The booking"], a: "The delay" },
        { q: "\"Réserver\" signifie :", opts: ["To book", "To cancel", "To pack", "To fly"], a: "To book" },
        { q: "\"Les bagages\" signifie :", opts: ["Luggage", "Tickets", "Hotels", "Flights"], a: "Luggage" },
        { q: "\"Le vol\" dans un contexte de voyage signifie :", opts: ["The flight", "The theft", "The delay", "The hotel"], a: "The flight" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 travel & vacation vocabulary" }
      ],
      watchListen: []
    }
  };
})();
