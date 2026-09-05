(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-career-interview-speaking"] = {
    id: "a2-career-interview-speaking",
    module: "speaking",
    level: "A2",
    title: "Guided Interview: Career Background & Future Projects",
    order: 16,
    requires: "a2-street-interviews-listening",
    visual: {
      kind: "card-grid",
      data: [
        { display: "J'ai étudié...", speak: "J'ai étudié le commerce", gloss: "I studied...", ipa: "[zhay ay-tew-dyay]", tag: "accent" },
        { display: "Je travaille comme...", speak: "Je travaille comme comptable", gloss: "I work as...", ipa: "[zhuh trah-vye kom]", tag: "" },
        { display: "Je voudrais devenir...", speak: "Je voudrais devenir manager", gloss: "I would like to become...", ipa: "[zhuh voo-dray duhv-neer]", tag: "accent" },
        { display: "Mon projet, c'est de...", speak: "Mon projet, c'est de changer de métier", gloss: "My plan is to...", ipa: "[mohn pro-zheh]", tag: "" }
      ]
    },
    content: {
      intro: "This ~1.5-minute guided interview walks through your schooling, your current or past work, and where you're headed next. Answer each question in full sentences rather than one word — the examiner is listening for verb variety (studied, work as, would like to) and confident past/future forms, not just vocabulary.",
      tables: [
        {
          caption: "Guided interview: schooling, career, aspirations",
          columns: ["Prompt / Question", "Natural Spoken Response", "English Meaning"],
          rows: [
            ["Qu'est-ce que vous avez étudié ?", "J'ai étudié le commerce à l'université de Lyon.", "What did you study? — I studied business at the University of Lyon."],
            ["Quel est votre métier actuel ?", "Je travaille comme comptable dans une petite entreprise.", "What's your current job? — I work as an accountant in a small company."],
            ["Qu'est-ce qui vous plaît dans ce travail ?", "J'aime le contact avec les clients et le travail d'équipe.", "What do you like about this job? — I like client contact and teamwork."],
            ["Quels sont vos projets pour l'avenir ?", "Mon projet, c'est de devenir manager dans deux ans.", "What are your plans for the future? — My plan is to become a manager in two years."]
          ]
        }
      ],
      example: { fr: "J'ai étudié le commerce, je travaille comme comptable, et mon projet, c'est de devenir manager.", en: "I studied business, I work as an accountant, and my plan is to become a manager." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment parle-t-on de ses études passées ?", opts: ["J'ai étudié...", "Je travaille...", "Je voudrais...", "J'aime..."], a: "J'ai étudié..." },
        { q: "Comment décrit-on son métier actuel ?", opts: ["Je travaille comme...", "J'ai étudié...", "Mon projet, c'est de...", "Je viens de..."], a: "Je travaille comme..." },
        { q: "Comment exprime-t-on un projet futur ?", opts: ["Mon projet, c'est de...", "J'ai fait...", "Je suis né...", "J'étais..."], a: "Mon projet, c'est de..." },
        { q: "\"Je voudrais devenir manager\" exprime...", opts: ["une aspiration future", "un fait passé", "une habitude", "une obligation"], a: "une aspiration future" },
        { q: "Réponse complète attendue à \"Quel est votre métier ?\" :", opts: ["Je travaille comme comptable dans une petite entreprise.", "Comptable.", "Oui.", "J'ai vingt-cinq ans."], a: "Je travaille comme comptable dans une petite entreprise." }
      ]
    },
    reference: {
      read: [
        { title: "Français Authentique", url: "https://www.francaisauthentique.com/", note: "Natural spoken patterns for talking about work and career" }
      ],
      watchListen: []
    }
  };
})();
