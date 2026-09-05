(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-health-pharmacy"] = {
    id: "a2-health-pharmacy",
    module: "vocabulary",
    level: "A2",
    title: "Health, Doctor Visits & Pharmacy",
    order: 18,
    requires: "a2-habits-leisure",
    visual: {
      kind: "card-grid",
      data: [
        { display: "la fièvre", speak: "j'ai de la fièvre", gloss: "fever", ipa: "[lah fyehvr]", tag: "accent" },
        { display: "la toux / le rhume", speak: "la toux et le rhume", gloss: "cough / cold", ipa: "[lah too / luh rewm]", tag: "" },
        { display: "une ordonnance", speak: "une ordonnance", gloss: "prescription", ipa: "[ewn or-doh-nahns]", tag: "accent" },
        { display: "le médecin", speak: "aller chez le médecin", gloss: "the doctor", ipa: "[luh mayd-san]", tag: "" },
        { display: "la pharmacie", speak: "la pharmacie", gloss: "pharmacy", ipa: "[lah far-mah-see]", tag: "" },
        { display: "un médicament", speak: "prendre un médicament", gloss: "medicine", ipa: "[an may-dee-kah-mahn]", tag: "" }
      ]
    },
    content: {
      intro: "A doctor's-visit vocabulary set builds on the earlier \"j'ai mal à...\" pattern with more specific symptoms (fièvre, toux, rhume) and the two key institutions — le médecin (who writes une ordonnance) and la pharmacie (where you fill it).",
      tables: [
        {
          caption: "At the doctor and pharmacy",
          columns: ["French", "English"],
          rows: [
            ["J'ai de la fièvre et je tousse beaucoup.", "I have a fever and I'm coughing a lot."],
            ["Le médecin m'a donné une ordonnance.", "The doctor gave me a prescription."],
            ["Je dois aller à la pharmacie chercher mes médicaments.", "I need to go to the pharmacy to get my medicine."],
            ["Prenez ce médicament deux fois par jour.", "Take this medicine twice a day."]
          ]
        }
      ],
      example: { fr: "J'ai un rhume, alors je vais chez le médecin.", en: "I have a cold, so I'm going to the doctor." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Une ordonnance\" signifie :", opts: ["A prescription", "A pharmacy", "A fever", "A cold"], a: "A prescription" },
        { q: "\"La fièvre\" signifie :", opts: ["Fever", "Cough", "Cold", "Headache"], a: "Fever" },
        { q: "Où va-t-on chercher des médicaments ?", opts: ["à la pharmacie", "chez le médecin", "à l'école", "à la banque"], a: "à la pharmacie" },
        { q: "\"Le rhume\" signifie :", opts: ["A cold (illness)", "A fever", "A cough", "A prescription"], a: "A cold (illness)" },
        { q: "Qui écrit une ordonnance ?", opts: ["le médecin", "le pharmacien", "le professeur", "le voisin"], a: "le médecin" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 health & pharmacy vocabulary" }
      ],
      watchListen: []
    }
  };
})();
