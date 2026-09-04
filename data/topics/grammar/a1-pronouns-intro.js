(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-pronouns-intro"] = {
    id: "a1-pronouns-intro",
    module: "grammar",
    level: "A1",
    title: "Subject & Object Pronouns, Intro",
    order: 4,
    requires: "a1-present-tense",
    visual: {
      kind: "table",
      data: {
        columns: ["Subject", "Meaning", "Object (direct, preview)"],
        rows: [
          ["je", "I", "me"],
          ["tu", "you (informal)", "te"],
          ["il / elle", "he / she", "le / la"],
          ["nous", "we", "nous"],
          ["vous", "you (formal/plural)", "vous"],
          ["ils / elles", "they", "les"]
        ]
      }
    },
    content: {
      intro: "French object pronouns go before the verb, not after like English — this single word-order flip is worth internalizing early since it recurs in every tense you'll learn.",
      tables: [],
      example: { fr: "Je le vois.", en: "I see him/it. (literally: I him/it see.)" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which pronoun means "we"?', opts: ["nous", "vous", "ils", "on"], a: "nous" },
        { q: "Which is a plural or formal singular \"you\"?", opts: ["vous", "tu", "il", "elles"], a: "vous" },
        { q: 'How do you say "She sees him" in French?', opts: ["Elle le voit.", "Elle voit le.", "Elle lui voit.", "Le voit elle."], a: "Elle le voit." },
        { q: 'Which subject pronoun means "they" (feminine)?', opts: ["elles", "ils", "nous", "vous"], a: "elles" },
        { q: "In French, object pronouns generally go ___ the verb.", opts: ["before", "after", "either", "only in questions"], a: "before" }
      ]
    },
    reference: {
      video: {
        "title": "French Subject Pronouns Explained (je, tu, il, elle, nous, vous, ils, elles)",
        "watchUrl": "https://www.youtube.com/watch?v=rK3u_u2Q53A",
        "videoId": "rK3u_u2Q53A",
        "channel": "Learn French with Alexa",
        "note": "Pronunciation, silent endings, and the difference between tu and vous."
},
      read: [ { title: "Tex's French Grammar — pro1", url: "https://laits.utexas.edu/tex/gr/pro1.html", note: "Subject pronoun overview" } ],
      watchListen: []
    }
  };
})();
