(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-personal-identity"] = {
    id: "a1-personal-identity",
    module: "vocabulary",
    level: "A1",
    title: "Personal Identity & Civil Status",
    order: 4,
    requires: "a1-demonstrative-adjectives",
    visual: {
      kind: "card-grid",
      data: [
        { display: "le nom", speak: "le nom", gloss: "last name", ipa: "[luh nohm]", tag: "" },
        { display: "le prénom", speak: "le prénom", gloss: "first name", ipa: "[luh pray-nohm]", tag: "accent" },
        { display: "la nationalité", speak: "la nationalité", gloss: "nationality", ipa: "[lah nah-syoh-nah-lee-tay]", tag: "" },
        { display: "la profession", speak: "la profession", gloss: "occupation", ipa: "[lah proh-fes-yohn]", tag: "" },
        { display: "l'adresse", speak: "l'adresse", gloss: "address", ipa: "[lah-dress]", tag: "accent" },
        { display: "le numéro de téléphone", speak: "le numéro de téléphone", gloss: "phone number", ipa: "[luh new-may-roh duh tay-lay-fohn]", tag: "" }
      ]
    },
    content: {
      intro: "Beyond a name and age, everyday French asks for a small fixed set of civil-status details — nationality, profession, and contact information — almost always with the same handful of question patterns. Learning these as fixed chunks makes any registration form or first meeting far easier.",
      tables: [
        {
          caption: "Asking for and giving identity details",
          columns: ["Question", "Typical Answer", "English"],
          rows: [
            ["Quel est votre nom ?", "Je m'appelle Dubois.", "What is your last name? — My name is Dubois."],
            ["Quelle est votre nationalité ?", "Je suis française.", "What is your nationality? — I am French."],
            ["Que faites-vous dans la vie ?", "Je suis infirmier.", "What do you do for a living? — I am a nurse."],
            ["Quelle est votre adresse ?", "J'habite au 12 rue Victor Hugo.", "What is your address? — I live at 12 Victor Hugo Street."]
          ]
        }
      ],
      example: { fr: "Je m'appelle Léa Martin, je suis française et je suis professeure.", en: "My name is Léa Martin, I am French, and I am a teacher." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Comment demande-t-on la profession de quelqu'un ?", opts: ["Que faites-vous dans la vie ?", "Où habitez-vous ?", "Quel âge avez-vous ?", "Comment allez-vous ?"], a: "Que faites-vous dans la vie ?" },
        { q: "\"Le prénom\" signifie :", opts: ["First name", "Last name", "Nickname", "Full name"], a: "First name" },
        { q: "Quelle phrase donne une adresse ?", opts: ["J'habite au 12 rue Victor Hugo.", "Je suis française.", "J'ai trente ans.", "Je m'appelle Léa."], a: "J'habite au 12 rue Victor Hugo." },
        { q: "\"Quelle est votre nationalité ?\" demande :", opts: ["Where you are from / your nationality", "Your job", "Your phone number", "Your age"], a: "Where you are from / your nationality" },
        { q: "Comment dit-on \"phone number\" en français ?", opts: ["le numéro de téléphone", "l'adresse", "le nom", "la profession"], a: "le numéro de téléphone" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded A1 vocabulary and comprehension exercises" }
      ],
      watchListen: []
    }
  };
})();
