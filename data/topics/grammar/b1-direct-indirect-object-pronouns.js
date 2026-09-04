(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-direct-indirect-object-pronouns"] = {
    id: "b1-direct-indirect-object-pronouns",
    module: "grammar",
    level: "B1",
    title: "Direct & Indirect Object Pronouns (COD/COI)",
    order: 17,
    requires: "b1-plus-que-parfait-futur-anterieur",
    visual: {
      kind: "table",
      data: {
        columns: ["Person", "Direct (COD: who/what)", "Indirect (COI: to whom)"],
        rows: [
          ["1st sing (me)", "me (m')", "me (m')"],
          ["2nd sing (you)", "te (t')", "te (t')"],
          ["3rd sing masc/fem (him/her/it)", "le / la (l')", "lui (to him/her)"],
          ["1st plur (us)", "nous", "nous"],
          ["2nd plur (you)", "vous", "vous"],
          ["3rd plur (them)", "les", "leur (to them)"]
        ]
      }
    },
    content: {
      intro: "A direct object (COD) answers 'who?' or 'what?' without a preposition (aimer quelqu'un). An indirect object (COI) answers 'to whom?' introduced by 'à' (parler à quelqu'un). In the 3rd person, they diverge: le/la/les for COD, lui/leur for COI.",
      tables: [
        {
          caption: "Common verbs with indirect objects (à)",
          columns: ["French Verb", "English Meaning", "Example with COI"],
          rows: [
            ["téléphoner à", "to call (phone)", "Je lui téléphone (I call him/her)"],
            ["parler à", "to speak to", "Tu leur parles (You speak to them)"],
            ["donner ... à", "to give ... to", "Il lui donne le livre (He gives him/her the book)"],
            ["répondre à", "to answer", "Elle lui répond (She answers him/her)"]
          ]
        }
      ],
      example: { fr: "Je vois Marie (COD) -> Je la vois. Je parle à Marie (COI) -> Je lui parle.", en: "I see Marie -> I see her. I speak to Marie -> I speak to her." },
      callouts: [
        {
          label: "Lui and Leur are gender-neutral",
          body: "Unlike direct pronouns (le vs. la), indirect 'lui' means 'to him' OR 'to her', and 'leur' means 'to them' (masculine or feminine).",
          cite: "Lawless French — Indirect Objects"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Replace with a pronoun: "J\'écris une lettre à Paul."', opts: ["Je lui écris une lettre.", "Je le écris une lettre.", "Je leur écris une lettre.", "J'y écris une lettre."], a: "Je lui écris une lettre." },
        { q: 'Replace with a pronoun: "Je regarde le film."', opts: ["Je le regarde.", "Je lui regarde.", "Je la regarde.", "Je leur regarde."], a: "Je le regarde." },
        { q: 'What does the indirect pronoun "lui" mean?', opts: ["to him OR to her", "to him only", "to them", "to it"], a: "to him OR to her" },
        { q: 'Replace with a pronoun: "Nous téléphonons à nos parents."', opts: ["Nous leur téléphonons.", "Nous les téléphonons.", "Nous lui téléphonons.", "Nous y téléphonons."], a: "Nous leur téléphonons." },
        { q: 'In "Tu ___ aides" (You help me), which pronoun fits?', opts: ["m'", "lui", "à moi", "moi"], a: "m'" }
      ]
    },
    reference: {
      video: {
        "title": "COD et COI : Ne faites plus l'erreur !",
        "embedUrl": "https://www.youtube-nocookie.com/embed/k5J6h7G8f9e",
        "channel": "Fran\u00e7ais avec Pierre",
        "note": "Direct vs indirect pronouns, identifying verbs with \u00e0, and pronoun substitution."
},
      read: [
        { title: "Global Exam — Direct and Indirect Object Explainer", url: "https://global-exam.com/blog/en/french-grammar-direct-and-indirect-object/", note: "COD vs COI, verbs that take à" },
        { title: "Lawless French — Indirect Objects", url: "https://www.lawlessfrench.com/grammar/indirect-objects/", note: "Me, te, lui, nous, vous, leur syntax" },
        { title: "Learn to French — Master COD and COI", url: "https://learntofrench.com/master-cod-and-coi-in-french-explained/", note: "Step-by-step diagnostic guide" }
      ],
      watchListen: []
    }
  };
})();
