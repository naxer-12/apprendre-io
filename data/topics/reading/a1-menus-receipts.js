(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-menus-receipts"] = {
    id: "a1-menus-receipts",
    module: "reading",
    level: "A1",
    title: "Restaurant Menus & Receipts",
    order: 30,
    requires: "a1-signs-notices",
    visual: {
      kind: "table",
      data: {
        columns: ["Menu (French)", "English Meaning", "Prix"],
        rows: [
          ["Plat du jour : Poulet-frites", "Dish of the day: chicken & fries", "12,50 €"],
          ["Salade de tomates", "Tomato salad", "6,00 €"],
          ["Soupe à l'oignon", "Onion soup", "7,50 €"],
          ["Eau minérale", "Mineral water", "3,00 €"],
          ["Café", "Coffee", "2,50 €"]
        ]
      }
    },
    content: {
      intro: "French menus and receipts pack a lot of information into short lines: dish names, prices in euros with a comma as the decimal separator, and a final total. Practice scanning for the total and matching item names to prices.",
      tables: [
        {
          caption: "Reading a receipt (l'addition)",
          columns: ["Line", "Meaning"],
          rows: [
            ["1 Plat du jour ... 12,50 €", "1 dish of the day ... 12.50 €"],
            ["1 Eau minérale ... 3,00 €", "1 mineral water ... 3.00 €"],
            ["Total : 15,50 €", "Total: 15.50 €"]
          ]
        }
      ],
      example: { fr: "Le plat du jour coûte douze euros cinquante.", en: "The dish of the day costs twelve euros fifty." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Combien coûte le plat du jour ?", opts: ["12,50 €", "6,00 €", "7,50 €", "3,00 €"], a: "12,50 €" },
        { q: "Quel est le prix de la soupe à l'oignon ?", opts: ["7,50 €", "12,50 €", "2,50 €", "6,00 €"], a: "7,50 €" },
        { q: "Qu'est-ce que « le plat du jour » ?", opts: ["Le menu spécial du jour", "La carte des vins", "L'addition", "Le pourboire"], a: "Le menu spécial du jour" },
        { q: "Combien coûte un café ?", opts: ["2,50 €", "3,00 €", "6,00 €", "12,50 €"], a: "2,50 €" },
        { q: "Sur un ticket de caisse, que veut dire « Total » ?", opts: ["La somme à payer", "Le nom du restaurant", "L'adresse", "L'heure"], a: "La somme à payer" }
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
