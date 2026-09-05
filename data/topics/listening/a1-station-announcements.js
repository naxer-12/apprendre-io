(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-station-announcements"] = {
    id: "a1-station-announcements",
    module: "listening",
    level: "A1",
    title: "Station & Public Space Announcements",
    order: 41,
    requires: "a1-numbers-prices-listening",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Attention", speak: "Attention, attention", gloss: "Attention (heads up)", ipa: "[ah-tahn-syohn]", tag: "accent" },
        { display: "En provenance de", speak: "En provenance de Lyon", gloss: "Arriving from...", ipa: "[ahn prov-nahns duh]", tag: "" },
        { display: "À destination de", speak: "À destination de Marseille", gloss: "Departing for...", ipa: "[ah dess-tee-nah-syohn duh]", tag: "" },
        { display: "Voie numéro", speak: "Voie numéro deux", gloss: "Platform / track number", ipa: "[vwah new-may-roh]", tag: "" }
      ]
    },
    content: {
      intro: "Public announcements in French train stations and airports follow a fixed template, so once you recognize the pattern words (attention, en provenance de, à destination de, voie), you can extract the key facts even at native speed. Click each phrase to hear it, then listen for the same pattern in the announcement below.",
      tables: [
        {
          caption: "Audio dialogue: Annonce en gare",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Haut-parleur", "Attention, attention. Le train en provenance de Lyon entre en gare, voie numéro deux.", "Attention, attention. The train arriving from Lyon is entering the station, platform two."],
            ["Haut-parleur", "Le train à destination de Marseille partira voie numéro cinq à quinze heures dix.", "The train to Marseille will depart from platform five at 3:10 PM."],
            ["Haut-parleur", "Attention à la marche en descendant du train.", "Mind the step when getting off the train."],
            ["Haut-parleur", "Nous vous rappelons qu'il est interdit de fumer dans l'enceinte de la gare.", "We remind you that smoking is prohibited within the station."]
          ]
        }
      ],
      example: { fr: "Le train à destination de Marseille partira voie numéro cinq.", en: "The train to Marseille will depart from platform five." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "D'où vient le train qui entre en gare ?", opts: ["De Lyon", "De Marseille", "De Paris", "De Nice"], a: "De Lyon" },
        { q: "À quelle heure part le train pour Marseille ?", opts: ["15 h 10", "14 h 10", "16 h 00", "13 h 10"], a: "15 h 10" },
        { q: "Sur quelle voie arrive le train de Lyon ?", opts: ["Voie numéro 2", "Voie numéro 5", "Voie numéro 1", "Voie numéro 3"], a: "Voie numéro 2" },
        { q: "Que faut-il faire en descendant du train ?", opts: ["Attention à la marche", "Courir vite", "Attendre le contrôleur", "Fermer la porte"], a: "Attention à la marche" },
        { q: "Qu'est-ce qui est interdit dans la gare ?", opts: ["Fumer", "Parler", "Marcher", "Manger"], a: "Fumer" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded listening exercises with authentic public-announcement style audio" }
      ],
      watchListen: []
    }
  };
})();
