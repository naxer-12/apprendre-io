(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-daily-routine"] = {
    id: "a1-daily-routine",
    module: "vocabulary",
    level: "A1",
    title: "Daily Routine & Everyday Life",
    order: 13,
    requires: "a1-irregular-verbs",
    visual: {
      kind: "card-grid",
      data: [
        { display: "le matin", speak: "le matin", gloss: "morning", ipa: "[luh mah-tan]", tag: "" },
        { display: "l'après-midi", speak: "l'après-midi", gloss: "afternoon", ipa: "[lah-preh-mee-dee]", tag: "accent" },
        { display: "le soir", speak: "le soir", gloss: "evening", ipa: "[luh swahr]", tag: "" },
        { display: "le petit-déjeuner", speak: "le petit-déjeuner", gloss: "breakfast", ipa: "[luh puh-tee-day-zhuh-nay]", tag: "" },
        { display: "le déjeuner / le dîner", speak: "le déjeuner et le dîner", gloss: "lunch / dinner", ipa: "[luh day-zhuh-nay / luh dee-nay]", tag: "accent" },
        { display: "l'horaire", speak: "l'horaire de travail", gloss: "schedule", ipa: "[loh-rair]", tag: "" }
      ]
    },
    content: {
      intro: "Talking about a daily timetable in French leans on time-of-day nouns (le matin, le soir) paired with the reflexive verbs you already know (se réveiller, se coucher) plus the three meal words, which are grammatically masculine even though \"dîner\" can also be a verb meaning \"to have dinner\".",
      tables: [
        {
          caption: "A typical day",
          columns: ["French", "English"],
          rows: [
            ["Le matin, je prends le petit-déjeuner à sept heures.", "In the morning, I have breakfast at seven o'clock."],
            ["L'après-midi, je travaille au bureau.", "In the afternoon, I work at the office."],
            ["Le soir, je dîne avec ma famille.", "In the evening, I have dinner with my family."],
            ["Mon horaire change chaque semaine.", "My schedule changes every week."]
          ]
        }
      ],
      example: { fr: "D'abord le petit-déjeuner, puis le travail, et le soir le dîner.", en: "First breakfast, then work, and dinner in the evening." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Le déjeuner\" signifie :", opts: ["Lunch", "Breakfast", "Dinner", "Snack"], a: "Lunch" },
        { q: "\"L'après-midi\" signifie :", opts: ["Afternoon", "Morning", "Evening", "Night"], a: "Afternoon" },
        { q: "Quel repas prend-on normalement le matin ?", opts: ["Le petit-déjeuner", "Le déjeuner", "Le dîner", "Le goûter"], a: "Le petit-déjeuner" },
        { q: "\"L'horaire\" signifie :", opts: ["Schedule", "Hour", "Clock", "Calendar"], a: "Schedule" },
        { q: "\"Le soir\" signifie :", opts: ["Evening", "Morning", "Afternoon", "Midday"], a: "Evening" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A1 everyday-life vocabulary" }
      ],
      watchListen: []
    }
  };
})();
