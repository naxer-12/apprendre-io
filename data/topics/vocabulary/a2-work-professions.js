(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-work-professions"] = {
    id: "a2-work-professions",
    module: "vocabulary",
    level: "A2",
    title: "The World of Work & Professions",
    order: 24,
    requires: "a2-vacations-travel",
    visual: {
      kind: "card-grid",
      data: [
        { display: "le bureau", speak: "au bureau", gloss: "the office", ipa: "[luh bew-roh]", tag: "" },
        { display: "un(e) collègue", speak: "un collègue", gloss: "a colleague", ipa: "[an koh-leg]", tag: "accent" },
        { display: "une tâche", speak: "une tâche urgente", gloss: "a task", ipa: "[ewn tahsh]", tag: "accent" },
        { display: "le CV", speak: "envoyer son CV", gloss: "the resume/CV", ipa: "[luh say-vay]", tag: "" },
        { display: "un entretien", speak: "un entretien d'embauche", gloss: "a job interview", ipa: "[an ahn-truh-tyan]", tag: "" },
        { display: "le salaire", speak: "négocier le salaire", gloss: "the salary", ipa: "[luh sah-lair]", tag: "" }
      ]
    },
    content: {
      intro: "Office-life vocabulary in French centers on the routine of un bureau shared with des collègues, punctuated by des tâches to complete — and the job-search cluster (le CV, un entretien d'embauche, le salaire) is essential for anyone discussing career plans.",
      tables: [
        {
          caption: "Talking about work",
          columns: ["French", "English"],
          rows: [
            ["Je travaille au bureau avec mes collègues.", "I work at the office with my colleagues."],
            ["J'ai un entretien d'embauche demain.", "I have a job interview tomorrow."],
            ["J'ai beaucoup de tâches à finir aujourd'hui.", "I have a lot of tasks to finish today."],
            ["Le salaire est négociable.", "The salary is negotiable."]
          ]
        }
      ],
      example: { fr: "J'ai envoyé mon CV pour un poste au bureau.", en: "I sent my resume for a position at the office." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Un entretien\" (dans ce contexte) signifie :", opts: ["A job interview", "A task", "A colleague", "A salary"], a: "A job interview" },
        { q: "\"Une tâche\" signifie :", opts: ["A task", "An office", "A salary", "A colleague"], a: "A task" },
        { q: "\"Un(e) collègue\" signifie :", opts: ["A colleague", "A manager", "A client", "An interviewer"], a: "A colleague" },
        { q: "\"Le salaire\" signifie :", opts: ["The salary", "The task", "The office", "The interview"], a: "The salary" },
        { q: "Que faut-il envoyer pour postuler à un emploi ?", opts: ["son CV", "son salaire", "sa tâche", "son bureau"], a: "son CV" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 workplace vocabulary" }
      ],
      watchListen: []
    }
  };
})();
