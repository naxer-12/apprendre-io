(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-body-health"] = {
    id: "a1-body-health",
    module: "vocabulary",
    level: "A1",
    title: "The Human Body & Basic Health",
    order: 26,
    requires: "a1-clothing-colors",
    visual: {
      kind: "card-grid",
      data: [
        { display: "la tête", speak: "j'ai mal à la tête", gloss: "head", ipa: "[lah teht]", tag: "" },
        { display: "le ventre", speak: "j'ai mal au ventre", gloss: "stomach", ipa: "[luh vahn-truh]", tag: "" },
        { display: "le bras / la jambe", speak: "le bras et la jambe", gloss: "arm / leg", ipa: "[luh brah / lah zhahnb]", tag: "" },
        { display: "j'ai mal à...", speak: "j'ai mal à la gorge", gloss: "I have a pain in...", ipa: "[zhay mahl ah]", tag: "accent" },
        { display: "j'ai faim / j'ai soif", speak: "j'ai faim et j'ai soif", gloss: "I'm hungry / I'm thirsty", ipa: "[zhay fan / zhay swahf]", tag: "" },
        { display: "je suis malade", speak: "je suis malade", gloss: "I am sick", ipa: "[zhuh swee mah-lahd]", tag: "" }
      ]
    },
    content: {
      intro: "French uses avoir, not être, to describe most physical sensations — \"j'ai faim\" (I have hunger), \"j'ai froid\" (I have cold) — and the pattern \"j'ai mal à + body part\" is the single most useful phrase for describing pain anywhere on the body.",
      tables: [
        {
          caption: "Describing how you feel",
          columns: ["French", "English"],
          rows: [
            ["J'ai mal à la tête.", "I have a headache."],
            ["J'ai mal au ventre.", "My stomach hurts."],
            ["J'ai très faim, on mange bientôt ?", "I'm very hungry, are we eating soon?"],
            ["Je suis malade depuis hier.", "I've been sick since yesterday."]
          ]
        }
      ],
      example: { fr: "J'ai mal à la gorge et je suis fatigué.", en: "My throat hurts and I'm tired." },
      callouts: [
        { label: "avoir, not être", body: "Hunger, thirst, cold, heat, and pain all use avoir in French (j'ai faim, j'ai froid, j'ai mal), unlike English \"I am hungry\" with to be.", cite: "" }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment dit-on \"I'm hungry\" ?", opts: ["J'ai faim.", "Je suis faim.", "J'ai chaud.", "Je suis affamé."], a: "J'ai faim." },
        { q: "\"J'ai mal à la tête\" signifie :", opts: ["I have a headache", "I have a stomachache", "I am tired", "I am hungry"], a: "I have a headache" },
        { q: "\"Le bras\" signifie :", opts: ["Arm", "Leg", "Head", "Stomach"], a: "Arm" },
        { q: "Quel verbe utilise-t-on pour la faim et la soif ?", opts: ["avoir", "être", "faire", "aller"], a: "avoir" },
        { q: "\"Je suis malade\" signifie :", opts: ["I am sick", "I am tired", "I am hungry", "I am cold"], a: "I am sick" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons", url: "https://en.wikibooks.org/wiki/French/Lessons", note: "Body-part and health vocabulary lists" }
      ],
      watchListen: []
    }
  };
})();
