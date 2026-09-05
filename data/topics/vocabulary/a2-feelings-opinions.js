(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-feelings-opinions"] = {
    id: "a2-feelings-opinions",
    module: "vocabulary",
    level: "A2",
    title: "Feelings, Emotions & Basic Opinions",
    order: 30,
    requires: "a2-negation-connectors",
    visual: {
      kind: "card-grid",
      data: [
        { display: "content(e) / déçu(e)", speak: "content ou déçu", gloss: "happy / disappointed", ipa: "[kohn-tahn / day-sew]", tag: "" },
        { display: "surpris(e)", speak: "je suis surpris", gloss: "surprised", ipa: "[sewr-pree]", tag: "accent" },
        { display: "je suis d'accord", speak: "je suis d'accord avec toi", gloss: "I agree", ipa: "[zhuh swee dah-kor]", tag: "" },
        { display: "je ne suis pas d'accord", speak: "je ne suis pas d'accord", gloss: "I disagree", ipa: "[zhuh nuh swee pah dah-kor]", tag: "" },
        { display: "je pense que...", speak: "je pense que c'est vrai", gloss: "I think that...", ipa: "[zhuh pahns kuh]", tag: "" },
        { display: "à mon avis", speak: "à mon avis", gloss: "in my opinion", ipa: "[ah mohn nah-vee]", tag: "accent" }
      ]
    },
    content: {
      intro: "Expressing feelings and opinions in French pairs être with emotion adjectives (content, déçu, surpris) and uses fixed opinion-starters (je pense que, à mon avis) that let you agree or politely disagree without sounding blunt.",
      tables: [
        {
          caption: "Sharing feelings and opinions",
          columns: ["French", "English"],
          rows: [
            ["Je suis très content de te voir.", "I'm very happy to see you."],
            ["Elle a été déçue par le film.", "She was disappointed by the movie."],
            ["À mon avis, c'est une bonne idée.", "In my opinion, it's a good idea."],
            ["Je ne suis pas tout à fait d'accord.", "I don't entirely agree."]
          ]
        }
      ],
      example: { fr: "Je pense que c'est une bonne idée, mais je suis un peu surpris.", en: "I think it's a good idea, but I'm a little surprised." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Déçu(e)\" signifie :", opts: ["Disappointed", "Happy", "Surprised", "Angry"], a: "Disappointed" },
        { q: "\"À mon avis\" signifie :", opts: ["In my opinion", "I agree", "I disagree", "I'm surprised"], a: "In my opinion" },
        { q: "Comment exprime-t-on un désaccord poliment ?", opts: ["Je ne suis pas d'accord.", "Je suis d'accord.", "À mon avis, oui.", "Je pense que oui."], a: "Je ne suis pas d'accord." },
        { q: "\"Surpris(e)\" signifie :", opts: ["Surprised", "Disappointed", "Content", "Serious"], a: "Surprised" },
        { q: "\"Je pense que...\" introduit :", opts: ["Une opinion", "Un accord total", "Un refus", "Une question"], a: "Une opinion" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 opinion & feelings expressions" }
      ],
      watchListen: []
    }
  };
})();
