(function () {
  // Each pathway is a self-contained, single-CEFR-level cross-module
  // sequence — only the topic IDs are listed here — each topic's own
  // `requires` field (in its data file) is what actually enforces the
  // unlock order; this file is purely the recommended reading/display
  // order for the sidebar. Picking Beginner / Intermediate / Expert jumps
  // straight into that pathway's own level (A1 / A2 / B1→B2-C1) — none of
  // them depend on finishing an earlier level first.
  window.PATHWAYS = {
    beginner: [
      {
        unit: "First Contact",
        desc: "Say hello, introduce yourself, and name what you are (or aren't).",
        topics: ["a1-greetings", "a1-speaking-introductions", "a1-etre-avoir-negation"]
      },
      {
        unit: "Naming the World",
        desc: "Spell things out and learn how French nouns take gender & articles.",
        topics: ["a1-alphabet", "a1-articles", "a1-partitive-articles"]
      },
      {
        unit: "Talking About People",
        desc: "Pronouns, possession, demonstratives, and describing who you are.",
        topics: ["a1-pronouns-intro", "a1-possessive-adjectives", "a1-demonstrative-adjectives", "a1-personal-identity"]
      },
      {
        unit: "Everyday Actions",
        desc: "Regular and common irregular verbs, plus daily-routine vocabulary.",
        topics: ["a1-present-tense", "a1-reflexive-verbs", "a1-irregular-verbs", "a1-daily-routine"]
      },
      {
        unit: "Numbers & Plans",
        desc: "Counting, and talking about the near future.",
        topics: ["a1-numbers", "a1-futur-proche"]
      },
      {
        unit: "Describing People & Places",
        desc: "Adjective agreement, and vocabulary for appearance, family & home.",
        topics: ["a1-adjective-agreement", "a1-appearance-character", "a1-family", "a1-housing-furniture"]
      },
      {
        unit: "Asking & Locating",
        desc: "Questions, prepositions of place & time, and finding your way around.",
        topics: ["a1-question-formation", "a1-prepositions-place-time", "a1-city-directions", "a1-cest-il-est"]
      },
      {
        unit: "Daily Life Essentials",
        desc: "Food, dining, clothing, and the human body.",
        topics: ["a1-food-dining", "a1-clothing-colors", "a1-body-health"]
      },
      {
        unit: "Reading in Real Life",
        desc: "Signs, menus, timetables, postcards & forms.",
        topics: ["a1-reading-dialogue", "a1-signs-notices", "a1-menus-receipts", "a1-travel-timetables", "a1-postcards-reading", "a1-registration-forms"]
      },
      {
        unit: "Writing in Real Life",
        desc: "Simple sentences, forms, postcards, notes & routines.",
        topics: ["a1-writing-sentences", "a1-form-filling", "a1-postcard-writing", "a1-invitation-notes", "a1-daily-routine-writing"]
      },
      {
        unit: "Listening in Real Life",
        desc: "Numbers, announcements, voicemail & everyday exchanges.",
        topics: ["a1-listening-comprehension", "a1-numbers-prices-listening", "a1-station-announcements", "a1-voicemail-messages", "a1-everyday-dialogues-listening"]
      },
      {
        unit: "Speaking in Real Life",
        desc: "Asking questions, and a shopping & dining role-play.",
        topics: ["a1-question-asking-speaking", "a1-roleplay-shopping-dining"]
      }
    ],

    intermediate: [
      {
        unit: "Narrating the Past",
        desc: "Passé composé (avoir & être) and imparfait for stories and habits.",
        topics: ["a2-passe-compose-avoir", "a2-passe-compose-etre", "a2-imparfait", "a2-memories-biography"]
      },
      {
        unit: "Recent & Near Future",
        desc: "What just happened, what's about to happen, and formal predictions.",
        topics: ["a2-recent-past-immediate-future", "b1-futur-simple", "b1-conditional"]
      },
      {
        unit: "Habits & Health",
        desc: "Leisure vocabulary, health & pharmacy, and reflexive verbs in the past.",
        topics: ["a2-habits-leisure", "a2-health-pharmacy", "a2-reflexive-verbs-past"]
      },
      {
        unit: "Shopping & Services",
        desc: "Returns, public services, and the core modal verbs.",
        topics: ["a2-shopping-returns", "a2-public-services", "a2-modal-verbs"]
      },
      {
        unit: "Travel & Work",
        desc: "Vacations, professions, and housing & neighborhood life.",
        topics: ["a2-vacations-travel", "a2-work-professions", "a2-housing-neighborhood"]
      },
      {
        unit: "Connecting Ideas",
        desc: "Object pronoun order, relative clauses, and the pronouns y & en.",
        topics: ["a2-object-pronoun-order", "a2-relative-pronouns-qui-que", "a2-y-en-pronouns"]
      },
      {
        unit: "Comparing & Opining",
        desc: "Comparatives, negation, connectors, and everyday social vocabulary.",
        topics: ["a2-comparatives-superlatives", "a2-negation-connectors", "a2-feelings-opinions", "a2-celebrations-invitations", "a2-weather-landscapes"]
      },
      {
        unit: "Reading the World",
        desc: "Emails, brochures, classified ads & news briefs.",
        topics: ["a2-emails-messages", "a2-tourist-brochures", "a2-classified-ads", "a2-news-briefs"]
      },
      {
        unit: "Writing & Responding",
        desc: "Recounting the past, replying to messages, and comparing things.",
        topics: ["a2-recounting-past-event", "a2-replying-messages", "a2-comparing-places"]
      },
      {
        unit: "Listening Beyond Basics",
        desc: "Weather bulletins, instructions, phone calls & street interviews.",
        topics: ["a2-weather-news-listening", "a2-practical-instructions-listening", "a2-phone-dialogues-listening", "a2-street-interviews-listening"]
      },
      {
        unit: "Speaking with Confidence",
        desc: "Career interviews, a prepared monologue, and resolving a problem.",
        topics: ["a2-career-interview-speaking", "a2-prepared-monologue-speaking", "a2-roleplay-issue-speaking"]
      }
    ],

    // Expert is intentionally partial today: it's built from the advanced
    // grammar (B1 → B2/C1) that already exists. Vocabulary, reading,
    // writing, listening & speaking content at this level is a follow-up.
    expert: [
      {
        unit: "Advanced Grammar Deep-Dive (B1 → B2/C1)",
        desc: "Compound tenses, object pronouns, relative clauses, subjunctive & register — full B1/B2 skills coverage is coming soon.",
        topics: [
          "b1-plus-que-parfait-futur-anterieur",
          "b1-direct-indirect-object-pronouns",
          "b1-relative-pronouns-dont-ou",
          "b2c1-present-subjunctive",
          "b2c1-past-subjunctive-recap",
          "b2c1-register-tu-vous"
        ]
      }
    ]
  };
})();
