(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b2c1-register-tu-vous"] = {
    id: "b2c1-register-tu-vous",
    module: "grammar",
    level: "B2-C1",
    title: "Register & Social Nuance: tu vs. vous",
    order: 21,
    requires: "b2c1-past-subjunctive-recap",
    visual: {
      kind: "table",
      data: {
        columns: ["Dimension", "Tutoiement (tu)", "Vouvoiement (vous)"],
        rows: [
          ["Social distance", "Intimacy, solidarity, informal", "Respect, distance, hierarchy, professional"],
          ["Whom to address", "Family, friends, children, fellow students", "Strangers, superiors, service workers, doctors, elders"],
          ["Default verb for changing", "On peut se tutoyer ? (Can we use tu?)", "Vouloir vouvoyer (to keep formal distance)"],
          ["Spoken subject shift", "'on' often replaces 'nous' in conversation", "'vous' remains strictly formal or plural"]
        ]
      }
    },
    content: {
      intro: "Grammar mastery at B2-C1 culminates in pragmatic competence: knowing not just what is grammatically correct, but socially appropriate. Tutoiement (using tu) and vouvoiement (using vous) reflect relational distance, power balance, and cultural context.",
      tables: [
        {
          caption: "Real-world social interaction rules",
          columns: ["Scenario", "Safe Default", "Nuance / Transition Rule"],
          rows: [
            ["Boutique / Café / Bakery", "Vous", "Always greet with 'Bonjour monsieur/madame' and vous"],
            ["Workplace (Tech / Startups)", "Tu (often)", "Follow the team culture; start with vous in interviews"],
            ["Workplace (Corporate / Gov)", "Vous", "Wait for the senior colleague to propose tutoiement"],
            ["Online communities / Gaming", "Tu", "Informal peer norms dominate online French spaces"]
          ]
        }
      ],
      example: { fr: "On peut se tutoyer si vous voulez ? — Avec plaisir !", en: "Can we use 'tu' with each other if you like? — With pleasure!" },
      callouts: [
        {
          label: "Pragmatic Competence & Output Finding",
          body: "Empirical studies comparing classroom instruction and mobile apps showed that while apps match classroom gains on grammar and vocabulary tests, app-only learners scored 2 points lower on pragmatic competence (the tu vs. vous register test). Real interactive output and communicative awareness are essential to bridge the gap from textbook accuracy to native social nuance.",
          cite: "Loewen et al., 2020; french-learning-strategies.md finding #6"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "What is the verb for addressing someone using 'tu'?", opts: ["tutoyer", "vouvoyer", "parler", "tutoie"], a: "tutoyer" },
        { q: "Entering a bakery in Lyon to order bread, which register should you use with the baker?", opts: ["vous (vouvoiement)", "tu (tutoiement)", "either is equally fine", "neither, use third person"], a: "vous (vouvoiement)" },
        { q: "How do you politely ask a colleague if you can switch to 'tu'?", opts: ["On peut se tutoyer ?", "Tu peux me parler ?", "Voulez-vous tu ?", "Tu es mon ami ?"], a: "On peut se tutoyer ?" },
        { q: "In modern informal spoken French, which pronoun overwhelmingly replaces 'nous' as the subject?", opts: ["on", "ils", "vous", "soi"], a: "on" },
        { q: "Why did empirical studies find app-only language learners scored lower on pragmatic competence?", opts: ["apps rarely simulate social stakes and nuanced conversational output", "apps don't teach grammar rules", "apps only teach slang", "classroom students spend more hours"], a: "apps rarely simulate social stakes and nuanced conversational output" }
      ]
    },
    reference: {
      video: {
        "title": "When to use 'Tu' or 'Vous' in French (formal vs. informal You)",
        "watchUrl": "https://www.youtube.com/watch?v=x_FgtR0pI7E",
        "videoId": "x_FgtR0pI7E",
        "channel": "Comme une Française",
        "note": "Cultural nuances, social registers, professional workplace norms, and politeness levels."
      },
      read: [
        { title: "Français Authentique — Les registres de langue", url: "https://www.francaisauthentique.com/", note: "Natural spoken French, social register, and conversational nuances" },
        { title: "Loewen et al. (2020) — Pragmatic Competence in Mobile Learning", url: null, note: "Empirical comparison of tu/vous acquisition between classroom and apps" }
      ],
      watchListen: [
        { title: "Français Authentique Podcast", url: "https://www.francaisauthentique.com/podcast/", note: "Native French explanations of cultural etiquette and conversational rules" }
      ]
    }
  };
})();
