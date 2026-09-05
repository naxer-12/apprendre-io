(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-celebrations-invitations"] = {
    id: "a2-celebrations-invitations",
    module: "vocabulary",
    level: "A2",
    title: "Social Life, Celebrations & Invitations",
    order: 31,
    requires: "a2-feelings-opinions",
    visual: {
      kind: "card-grid",
      data: [
        { display: "une fête", speak: "organiser une fête", gloss: "a party", ipa: "[ewn feht]", tag: "" },
        { display: "un anniversaire", speak: "joyeux anniversaire", gloss: "a birthday", ipa: "[an nah-nee-vair-sair]", tag: "accent" },
        { display: "inviter", speak: "je t'invite", gloss: "to invite", ipa: "[an-vee-tay]", tag: "" },
        { display: "accepter / refuser", speak: "accepter ou refuser", gloss: "to accept / to decline", ipa: "[ahk-sep-tay / ruh-few-zay]", tag: "" },
        { display: "avec plaisir", speak: "avec plaisir !", gloss: "with pleasure (yes!)", ipa: "[ah-vek play-zeer]", tag: "" },
        { display: "malheureusement", speak: "malheureusement, je ne peux pas", gloss: "unfortunately", ipa: "[mah-luh-ruhz-mahn]", tag: "" }
      ]
    },
    content: {
      intro: "Accepting or declining a French invitation politely relies on set phrases: \"avec plaisir\" for a warm yes, and \"malheureusement, je ne peux pas\" for a soft, apologetic no — bluntly saying just \"non\" can come across as rude.",
      tables: [
        {
          caption: "Inviting and responding",
          columns: ["French", "English"],
          rows: [
            ["Je t'invite à ma fête d'anniversaire samedi.", "I'm inviting you to my birthday party on Saturday."],
            ["Avec plaisir, j'y serai !", "With pleasure, I'll be there!"],
            ["Malheureusement, je ne suis pas disponible ce soir-là.", "Unfortunately, I'm not available that evening."],
            ["Merci de l'invitation, mais je dois refuser.", "Thanks for the invitation, but I have to decline."]
          ]
        }
      ],
      example: { fr: "Merci pour l'invitation à ta fête, j'accepte avec plaisir !", en: "Thanks for the invitation to your party, I gladly accept!" },
      callouts: [
        { label: "Polite refusal", body: "French softens a \"no\" with \"malheureusement\" (unfortunately) plus a reason — a bare \"non\" to an invitation can sound abrupt.", cite: "" }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "\"Avec plaisir\" signifie :", opts: ["With pleasure (yes)", "Unfortunately (no)", "A party", "A birthday"], a: "With pleasure (yes)" },
        { q: "\"Malheureusement\" signifie :", opts: ["Unfortunately", "Happily", "Immediately", "Rarely"], a: "Unfortunately" },
        { q: "\"Inviter\" signifie :", opts: ["To invite", "To refuse", "To celebrate", "To accept"], a: "To invite" },
        { q: "\"Un anniversaire\" signifie :", opts: ["A birthday", "A party", "An invitation", "A holiday"], a: "A birthday" },
        { q: "Quelle phrase décline poliment une invitation ?", opts: ["Malheureusement, je ne peux pas.", "Avec plaisir !", "J'accepte.", "Bonne fête !"], a: "Malheureusement, je ne peux pas." }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A2 social invitations vocabulary" }
      ],
      watchListen: []
    }
  };
})();
