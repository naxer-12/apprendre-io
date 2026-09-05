(function () {
  // Cross-module recommended sequences, replacing the raw per-skill module
  // tree with an order grounded in common A1 course structures (greetings
  // & introductions first, then naming/articles, pronouns, core verbs,
  // numbers, applied skills practice, then A2 past tenses). Only the
  // topic IDs are listed here — each topic's own `requires` field (in its
  // data file) is what actually enforces the unlock order; this file is
  // purely the recommended reading/display order for the sidebar.
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
        desc: "Pronouns and possession — my, your, his, hers.",
        topics: ["a1-pronouns-intro", "a1-possessive-adjectives"]
      },
      {
        unit: "Everyday Actions",
        desc: "Regular verbs and daily-routine reflexive verbs.",
        topics: ["a1-present-tense", "a1-reflexive-verbs"]
      },
      {
        unit: "Numbers & Plans",
        desc: "Counting, and talking about the near future.",
        topics: ["a1-numbers", "a1-futur-proche"]
      },
      {
        unit: "Put It All Together",
        desc: "Apply the basics across reading, writing, and listening.",
        topics: ["a1-reading-dialogue", "a1-writing-sentences", "a1-listening-comprehension"]
      },
      {
        unit: "Narrating the Past",
        desc: "Passé composé (avoir & être) and imparfait for stories and habits.",
        topics: ["a2-passe-compose-avoir", "a2-passe-compose-etre", "a2-imparfait"]
      },
      {
        unit: "Connecting Ideas",
        desc: "Object pronoun order and relative clauses with qui/que.",
        topics: ["a2-object-pronoun-order", "a2-relative-pronouns-qui-que"]
      }
    ]
  };
})();
