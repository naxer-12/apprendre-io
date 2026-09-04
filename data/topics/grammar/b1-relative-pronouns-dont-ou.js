(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-relative-pronouns-dont-ou"] = {
    id: "b1-relative-pronouns-dont-ou",
    module: "grammar",
    level: "B1",
    title: "Relative Pronouns: dont, où",
    order: 18,
    requires: "b1-direct-indirect-object-pronouns",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Function", "Key Rule", "Short Example"],
        rows: [
          ["qui", "Subject", "Followed by a verb", "La femme qui parle"],
          ["que (qu')", "Direct object", "Followed by subject + verb", "Le livre que je lis"],
          ["dont", "Object of 'de'", "Replaces noun after verb + de", "Le livre dont je parle (parler de)"],
          ["où", "Place or Time", "Refers to location or moment", "La ville où j'habite / Le jour où..."]
        ]
      }
    },
    content: {
      intro: "While qui and que connect subjects and direct objects, dont replaces any phrase introduced by 'de' (avoir besoin de, parler de, avoir peur de). Où refers to a place ('where') or a point in time ('when').",
      tables: [
        {
          caption: "Common 'de' triggers requiring 'dont'",
          columns: ["Expression", "Combined with 'dont'"],
          rows: [
            ["avoir besoin de (to need)", "C'est l'outil dont j'ai besoin."],
            ["avoir peur de (to be afraid of)", "C'est le chien dont j'ai peur."],
            ["être fier de (to be proud of)", "Ce sont les résultats dont il est fier."],
            ["parler de (to speak of)", "C'est le projet dont nous parlons."]
          ]
        }
      ],
      example: { fr: "Voici la ville où je suis né, et l'ami dont je t'ai parlé.", en: "Here is the town where I was born, and the friend whom I spoke to you about." },
      callouts: [
        {
          label: "The Intermediate Plateau & Autonomous Motivation",
          body: "Reaching B1 is where language learners frequently encounter the 'intermediate plateau' — the rapid early gains slow down as grammar nuances multiply. Meta-analyses across 24,470 language learners confirm that autonomous motivation (learning for personal meaning and curiosity, r = .23) sustains long-term achievement, whereas external pressure has no positive relationship (r = -.03). Connect this material to genuine French books, podcasts, or conversations you care about.",
          cite: "Alamer et al., Educ Psychol Rev 2025; The French Experiment"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"C\'est le restaurant ___ je t\'ai parlé (parler de)."', opts: ["dont", "que", "où", "qui"], a: "dont" },
        { q: '"Le jour ___ nous sommes arrivés, il pleuvait."', opts: ["où", "quand", "dont", "que"], a: "où" },
        { q: '"Voici le livre ___ j\'ai besoin (avoir besoin de)."', opts: ["dont", "que", "qui", "lequel"], a: "dont" },
        { q: '"Paris est la ville ___ elle habite."', opts: ["où", "dont", "qui", "que"], a: "où" },
        { q: 'Which relative pronoun replaces a phrase starting with "de"?', opts: ["dont", "que", "qui", "où"], a: "dont" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — pror3", url: "https://laits.utexas.edu/tex/gr/pror3.html", note: "Relative pronouns dont and où" },
        { title: "The French Experiment — Best way to learn French", url: "https://www.thefrenchexperiment.com/best-way-to-learn-french", note: "The intermediate plateau and staying motivated" }
      ],
      watchListen: []
    }
  };
})();
