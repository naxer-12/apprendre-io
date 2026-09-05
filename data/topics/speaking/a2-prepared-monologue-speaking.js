(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-prepared-monologue-speaking"] = {
    id: "a2-prepared-monologue-speaking",
    module: "speaking",
    level: "A2",
    title: "Prepared Monologue: Presenting an Event or Plan",
    order: 17,
    requires: "a2-career-interview-speaking",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Je vais vous parler de...", speak: "Je vais vous parler de mon week-end", gloss: "I'm going to tell you about...", ipa: "[zhuh vay voo pahr-lay duh]", tag: "accent" },
        { display: "D'abord...", speak: "D'abord, nous sommes arrivés vendredi", gloss: "First...", ipa: "[dah-bor]", tag: "" },
        { display: "Ensuite...", speak: "Ensuite, nous avons visité le musée", gloss: "Then...", ipa: "[ahn-sweet]", tag: "accent" },
        { display: "Pour conclure...", speak: "Pour conclure, c'était un week-end formidable", gloss: "To conclude...", ipa: "[poor kohn-klewr]", tag: "" }
      ]
    },
    content: {
      intro: "Given a random topic prompt (a trip, a party, a project), you speak continuously for about 2 minutes with no interruption. Structure carries you here: announce the topic, walk through it chronologically with connectors (d'abord, ensuite, puis, enfin), and close with a one-line conclusion — a clear shape beats perfect grammar.",
      tables: [
        {
          caption: "Monologue skeleton with chronological connectors",
          columns: ["Prompt / Question", "Natural Spoken Response", "English Meaning"],
          rows: [
            ["Announce the topic", "Je vais vous parler d'un événement récent : le mariage de ma sœur.", "I'm going to tell you about a recent event: my sister's wedding."],
            ["First stage", "D'abord, toute la famille est arrivée la veille.", "First, the whole family arrived the day before."],
            ["Middle stage", "Ensuite, il y a eu la cérémonie, puis un grand repas.", "Then there was the ceremony, then a big meal."],
            ["Conclusion", "Pour conclure, c'était une journée inoubliable.", "To conclude, it was an unforgettable day."]
          ]
        }
      ],
      example: { fr: "Je vais vous parler de mon dernier voyage. D'abord... Ensuite... Pour conclure, c'était formidable.", en: "I'm going to tell you about my last trip. First... Then... To conclude, it was great." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment annonce-t-on le sujet d'un monologue ?", opts: ["Je vais vous parler de...", "Pour conclure...", "Ensuite...", "D'abord..."], a: "Je vais vous parler de..." },
        { q: "Quel connecteur introduit la première étape ?", opts: ["D'abord", "Enfin", "Pour conclure", "Cependant"], a: "D'abord" },
        { q: "Quel connecteur relie les étapes intermédiaires ?", opts: ["Ensuite", "Je vais vous parler de", "Pour conclure", "Bonjour"], a: "Ensuite" },
        { q: "Comment termine-t-on un monologue préparé ?", opts: ["Pour conclure...", "D'abord...", "Je vais vous parler de...", "Vous désirez ?"], a: "Pour conclure..." },
        { q: "Un monologue préparé de 2 minutes exige surtout...", opts: ["une structure chronologique claire", "des réponses d'un mot", "un dialogue avec l'examinateur", "un texte mémorisé mot pour mot"], a: "une structure chronologique claire" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded speaking practice for narrating events and plans" }
      ],
      watchListen: []
    }
  };
})();
