(function (root) {
  const grammarA1Worksheets = {
    "a1-articles": [
      {
        id: "a1-articles-s1",
        sheetNum: 1,
        title: "Sheet 1: Definite & Indefinite Article Recognition",
        subtitle: "20 Questions · Distinguishing specific (le, la, les) from non-specific (un, une, des) articles",
        exercises: [
          { q: "1. Fill in the definite article for 'livre' (m.): ___ livre.", answer: "le livre" },
          { q: "2. Fill in the definite article for 'table' (f.): ___ table.", answer: "la table" },
          { q: "3. Fill in the elided definite article for 'hôtel' (m.): ___ hôtel.", answer: "l'hôtel (elision before silent h)" },
          { q: "4. Fill in the elided definite article for 'université' (f.): ___ université.", answer: "l'université (elision before vowel u)" },
          { q: "5. Fill in the plural definite article for 'journaux' (m. pl.): ___ journaux.", answer: "les journaux" },
          { q: "6. Fill in the indefinite article for 'stylo' (m.): ___ stylo.", answer: "un stylo" },
          { q: "7. Fill in the indefinite article for 'voiture' (f.): ___ voiture.", answer: "une voiture" },
          { q: "8. Fill in the plural indefinite article for 'chaises' (f. pl.): ___ chaises.", answer: "des chaises" },
          { q: "9. Identify the gender of 'problème': un problème or une problème?", answer: "un problème (masculine despite ending in -e, derived from Greek)" },
          { q: "10. Identify the gender of 'nation': le nation or la nation?", answer: "la nation (nouns ending in -tion are >95% feminine)" },
          { q: "11. Identify the gender of 'café': un café or une café?", answer: "un café (masculine)" },
          { q: "12. Identify the gender of 'bureau': le bureau or la bureau?", answer: "le bureau (nouns ending in -eau are masculine)" },
          { q: "13. Fill in: J'aime ___ chocolat (general category: definite article).", answer: "le chocolat" },
          { q: "14. Fill in: Je voudrais acheter ___ croissant (single item: indefinite).", answer: "un croissant" },
          { q: "15. Fill in: Regardez ___ étoiles ce soir (plural specific).", answer: "les étoiles" },
          { q: "16. Fill in: Il y a ___ étudiants dans la salle (indefinite plural).", answer: "des étudiants" },
          { q: "17. What is the plural form of 'le journal'?", answer: "les journaux" },
          { q: "18. What is the plural form of 'un bureau'?", answer: "des bureaux (adds -x, not -s)" },
          { q: "19. Which article elides before a vowel: 'un', 'le', or both?", answer: "Only 'le' and 'la' elide to 'l''; 'un' and 'une' never elide." },
          { q: "20. Complete: C'est ___ amie de Sophie (f. sing. indefinite).", answer: "une amie" }
        ]
      },
      {
        id: "a1-articles-s2",
        sheetNum: 2,
        title: "Sheet 2: Gender of Nouns & Plural Regularities",
        subtitle: "20 Questions · Suffix clues, gender patterns and irregular plural formations",
        exercises: [
          { q: "1. Are nouns ending in '-age' (e.g. voyage, fromage, garage) typically masculine or feminine?", answer: "Masculine (exceptions: plage, cage, image, page, rage)" },
          { q: "2. Are nouns ending in '-tion' / '-sion' (e.g. réservation, décision) typically masculine or feminine?", answer: "Feminine (>95%)" },
          { q: "3. What is the gender of 'système'?", answer: "Masculine (le système — Greek origin)" },
          { q: "4. What is the gender of 'maison'?", answer: "Feminine (la maison)" },
          { q: "5. What is the gender of 'ville'?", answer: "Feminine (la ville)" },
          { q: "6. What is the gender of 'soleil'?", answer: "Masculine (le soleil)" },
          { q: "7. What is the gender of 'lune'?", answer: "Feminine (la lune)" },
          { q: "8. Form the plural of 'un prix' (price).", answer: "des prix (words ending in -x or -s do not change in the plural)" },
          { q: "9. Form the plural of 'le pays' (country).", answer: "les pays (invariable in plural)" },
          { q: "10. Form the plural of 'un travail' (work/job).", answer: "des travaux (irregular plural -ail → -aux)" },
          { q: "11. Form the plural of 'le chapeau' (hat).", answer: "les chapeaux (-eau adds -x)" },
          { q: "12. Form the plural of 'un œil' (eye).", answer: "des yeux (highly irregular plural)" },
          { q: "13. What is the gender of days of the week and months (lundi, janvier)?", answer: "All days, months, and seasons in French are masculine (le lundi, le printemps)." },
          { q: "14. What is the gender of languages (français, anglais, espagnol)?", answer: "Masculine (le français, l'anglais)." },
          { q: "15. Choose correct: (Le / La) restaurant où nous dînons ce soir.", answer: "Le restaurant (masculine)" },
          { q: "16. Choose correct: (Le / La) clé de la chambre 204.", answer: "La clé (feminine)" },
          { q: "17. Choose correct: (Un / Une) passeport biométrique.", answer: "Un passeport (masculine)" },
          { q: "18. Choose correct: (Un / Une) valise cabine.", answer: "Une valise (feminine)" },
          { q: "19. Choose correct: (Le / La) musée du Louvre.", answer: "Le musée (masculine despite ending in -ée)" },
          { q: "20. Choose correct: (Le / La) gare de Lyon.", answer: "La gare (feminine)" }
        ]
      },
      {
        id: "a1-articles-s3",
        sheetNum: 3,
        title: "Sheet 3: Contextual Sentence Completion & Gender Exceptions",
        subtitle: "20 Questions · Applied workplace, travel, and conversational sentence challenges",
        exercises: [
          { q: "1. Translate into French: 'The hotel is near the train station.'", answer: "L'hôtel est près de la gare." },
          { q: "2. Translate into French: 'I need a ticket and a receipt.'", answer: "J'ai besoin d'un billet et d'un reçu (or ticket de caisse)." },
          { q: "3. Choose correct: C'est (un / une) bel après-midi.", answer: "un bel après-midi (après-midi can be m. or f., but m. is standard in France)" },
          { q: "4. Correct the error: 'C'est la problème de l'équipe.'", answer: "Correction: 'C'est LE problème de l'équipe.'" },
          { q: "5. Correct the error: 'J'ai réservé une chambre dans le hôtel.'", answer: "Correction: 'J'ai réservé une chambre dans L'hôtel.' (elision required)" },
          { q: "6. Complete with the appropriate article: Où sont ___ clés de la voiture ?", answer: "les clés" },
          { q: "7. Complete: Nous cherchons ___ bon restaurant pour ce soir.", answer: "un bon restaurant" },
          { q: "8. Complete: ___ café est trop chaud pour moi.", answer: "Le café" },
          { q: "9. Complete: Il a acheté ___ croissants pour ses collègues.", answer: "des croissants" },
          { q: "10. In French, do country names take articles (e.g. France, Canada)?", answer: "Yes, standard French requires articles before countries: la France, le Canada, les États-Unis." },
          { q: "11. Which article precedes feminine countries starting with a consonant: '___ France'?", answer: "La France" },
          { q: "12. Which article precedes masculine countries starting with a consonant: '___ Japon'?", answer: "Le Japon" },
          { q: "13. Which article precedes countries starting with a vowel: '___ Italie'?", answer: "L'Italie" },
          { q: "14. Which article precedes plural countries: '___ Pays-Bas'?", answer: "Les Pays-Bas" },
          { q: "15. Complete: ___ vie à Paris est chère mais stimulante.", answer: "La vie" },
          { q: "16. Complete: J'ai commandé ___ salade et ___ carafe d'eau.", answer: "une salade et une carafe d'eau" },
          { q: "17. What is the gender of 'silence' (le or la)?", answer: "Le silence (masculine)" },
          { q: "18. What is the gender of 'différence' (le or la)?", answer: "La différence (feminine)" },
          { q: "19. Form the plural: 'un animal' → ___", answer: "des animaux" },
          { q: "20. Form the plural: 'le festival' → ___", answer: "les festivals (regular plural in -s for festival)" }
        ]
      }
    ],

    "a1-etre-avoir-negation": [
      {
        id: "a1-etre-avoir-negation-s1",
        sheetNum: 1,
        title: "Sheet 1: Conjugation Drills for Être & Avoir",
        subtitle: "20 Questions · Mastering the present indicative of French's two most essential auxiliary verbs",
        exercises: [
          { q: "1. Conjugate ÊTRE with 'Je': Je ___", answer: "suis (Je suis)" },
          { q: "2. Conjugate ÊTRE with 'Tu': Tu ___", answer: "es (Tu es)" },
          { q: "3. Conjugate ÊTRE with 'Il / Elle / On': Il ___", answer: "est (Il est)" },
          { q: "4. Conjugate ÊTRE with 'Nous': Nous ___", answer: "sommes (Nous sommes)" },
          { q: "5. Conjugate ÊTRE with 'Vous': Vous ___", answer: "êtes (Vous êtes)" },
          { q: "6. Conjugate ÊTRE with 'Ils / Elles': Ils ___", answer: "sont (Ils sont)" },
          { q: "7. Conjugate AVOIR with 'J'': J'___", answer: "ai (J'ai)" },
          { q: "8. Conjugate AVOIR with 'Tu': Tu ___", answer: "as (Tu as)" },
          { q: "9. Conjugate AVOIR with 'Il / Elle / On': Elle ___", answer: "a (Elle a)" },
          { q: "10. Conjugate AVOIR with 'Nous': Nous ___", answer: "avons (Nous avons)" },
          { q: "11. Conjugate AVOIR with 'Vous': Vous ___", answer: "avez (Vous avez)" },
          { q: "12. Conjugate AVOIR with 'Ils / Elles': Elles ___", answer: "ont (Elles ont)" },
          { q: "13. What is the liaison sound in 'Vous êtes' [voo-zet]?", answer: "[z] sound" },
          { q: "14. What is the phonetic difference between 'Ils sont' (être) and 'Ils ont' (avoir)?", answer: "'Ils sont' has a soft [s] sound: [eel-son]; 'Ils ont' has a voiced [z] liaison: [eel-zon]." },
          { q: "15. Complete with ÊTRE: Marc et Pierre ___ à Paris.", answer: "sont (Marc et Pierre sont...)" },
          { q: "16. Complete with AVOIR: Marie et toi ___ une réunion.", answer: "avez (Marie et toi = vous, so avez)" },
          { q: "17. Complete with ÊTRE: Paul et moi ___ prêts.", answer: "sommes (Paul et moi = nous, so sommes)" },
          { q: "18. Complete with AVOIR: Les étudiants ___ des questions.", answer: "ont (Les étudiants = ils, so ont)" },
          { q: "19. Which auxiliary is used to state one's age in French ('I am 30 years old')?", answer: "AVOIR (J'ai 30 ans — never être)" },
          { q: "20. Which auxiliary is used to state one's profession ('I am an architect')?", answer: "ÊTRE (Je suis architecte — without an article)" }
        ]
      },
      {
        id: "a1-etre-avoir-negation-s2",
        sheetNum: 2,
        title: "Sheet 2: Standard Negation Structure (Ne... pas & N')",
        subtitle: "20 Questions · Transforming affirmative statements into negative sentences with proper elision",
        exercises: [
          { q: "1. What are the two framing words that form standard French negation?", answer: "'ne' (or n') before the verb and 'pas' after the verb." },
          { q: "2. Make negative: 'Je suis fatigué.'", answer: "Je ne suis pas fatigué." },
          { q: "3. Make negative: 'Tu es prêt.'", answer: "Tu n'es pas prêt. (n' before vowel e)" },
          { q: "4. Make negative: 'Il est d'accord.'", answer: "Il n'est pas d'accord." },
          { q: "5. Make negative: 'Nous sommes en retard.'", answer: "Nous ne sommes pas en retard." },
          { q: "6. Make negative: 'Vous êtes disponible.'", answer: "Vous n'êtes pas disponible." },
          { q: "7. Make negative: 'Ils sont contents.'", answer: "Ils ne sont pas contents." },
          { q: "8. Make negative: 'J'ai le temps.'", answer: "Je n'ai pas le temps." },
          { q: "9. Make negative: 'Elle a une question.' (Note rule for indefinite articles in negation)", answer: "Elle n'a pas de question. (un/une/des become 'de' after negation)" },
          { q: "10. Make negative: 'Nous avons des collègues à Lyon.'", answer: "Nous n'avons pas de collègues à Lyon. (des becomes de)" },
          { q: "11. Make negative: 'Il a un passeport valide.'", answer: "Il n'a pas de passeport valide." },
          { q: "12. Make negative: 'J'ai de la monnaie.'", answer: "Je n'ai pas de monnaie." },
          { q: "13. Does 'un / une / des' turn into 'de' with the verb ÊTRE in the negative? (e.g. 'C'est un problème')", answer: "NO. With ÊTRE, the article does NOT change: 'Ce n'est pas un problème.'" },
          { q: "14. Make negative: 'C'est une bonne idée.'", answer: "Ce n'est pas une bonne idée." },
          { q: "15. Make negative: 'Ce sont des touristes.'", answer: "Ce ne sont pas des touristes." },
          { q: "16. In casual spoken French, what word is frequently dropped in negation?", answer: "The 'ne' is frequently dropped: 'Je sais pas' instead of 'Je ne sais pas'." },
          { q: "17. Make negative: 'Elle est française.'", answer: "Elle n'est pas française." },
          { q: "18. Make negative: 'Vous avez rendez-vous.'", answer: "Vous n'avez pas rendez-vous." },
          { q: "19. Make negative: 'Ils ont une voiture.'", answer: "Ils n'ont pas de voiture." },
          { q: "20. Make negative: 'On est fatigués.'", answer: "On n'est pas fatigués." }
        ]
      },
      {
        id: "a1-etre-avoir-negation-s3",
        sheetNum: 3,
        title: "Sheet 3: Age, Identity, Physical States & Common Idioms",
        subtitle: "20 Questions · Pragmatic distinctions between avoir idioms and être descriptors",
        exercises: [
          { q: "1. Translate: 'I am hungry.'", answer: "J'ai faim. (uses avoir)" },
          { q: "2. Translate: 'I am thirsty.'", answer: "J'ai soif. (uses avoir)" },
          { q: "3. Translate: 'Are you hot?' (formal)", answer: "Avez-vous chaud ? (uses avoir, never être)" },
          { q: "4. Translate: 'She is cold.'", answer: "Elle a froid. (uses avoir)" },
          { q: "5. Translate: 'We are in a hurry.'", answer: "Nous sommes pressés (or 'Nous avons hâte')." },
          { q: "6. Translate: 'He is 42 years old.'", answer: "Il a quarante-deux ans (Il a 42 ans)." },
          { q: "7. Translate: 'You are right.' (informal)", answer: "Tu as raison." },
          { q: "8. Translate: 'I am wrong.'", answer: "J'ai tort." },
          { q: "9. Translate: 'I am afraid.'", answer: "J'ai peur." },
          { q: "10. Translate: 'He is sleepy.'", answer: "Il a sommeil." },
          { q: "11. Translate: 'I need a coffee.'", answer: "J'ai besoin d'un café." },
          { q: "12. Translate: 'She wants / feels like a croissant.'", answer: "Elle a envie d'un croissant." },
          { q: "13. Translate: 'I am sick.'", answer: "Je suis malade. (uses être for health states)" },
          { q: "14. Translate: 'We are on time.'", answer: "Nous sommes à l'heure." },
          { q: "15. Translate: 'The train is delayed.'", answer: "Le train est en retard." },
          { q: "16. Translate: 'Are you ready?' (to a woman, singular)", answer: "Êtes-vous prête ? (agreement with feminine)" },
          { q: "17. Translate: 'We are not American, we are Canadian.' (m. pl.)", answer: "Nous ne sommes pas américains, nous sommes canadiens." },
          { q: "18. Translate: 'She does not have a reservation.'", answer: "Elle n'a pas de réservation." },
          { q: "19. Correct the error: 'Je suis 25 ans.'", answer: "Correction: 'J'ai 25 ans.' (avoir is required for age)" },
          { q: "20. Correct the error: 'Je suis chaud.' (Warning: false friend with sexual connotation)", answer: "Correction: 'J'ai chaud.' ('Être chaud' means horny or keen/excited in slang, not physically warm!)" }
        ]
      }
    ],

    "a1-present-tense": [
      {
        id: "a1-present-tense-s1",
        sheetNum: 1,
        title: "Sheet 1: Regular -ER Verb Endings & Stems",
        subtitle: "20 Questions · Applying the fundamental endings (-e, -es, -e, -ons, -ez, -ent)",
        exercises: [
          { q: "1. What are the six present tense endings for regular -ER verbs in order (je, tu, il, nous, vous, ils)?", answer: "-e, -es, -e, -ons, -ez, -ent" },
          { q: "2. Conjugate 'parler' with 'Je'.", answer: "Je parle" },
          { q: "3. Conjugate 'parler' with 'Tu'.", answer: "Tu parles" },
          { q: "4. Conjugate 'parler' with 'Il'.", answer: "Il parle" },
          { q: "5. Conjugate 'parler' with 'Nous'.", answer: "Nous parlons" },
          { q: "6. Conjugate 'parler' with 'Vous'.", answer: "Vous parlez" },
          { q: "7. Conjugate 'parler' with 'Ils'.", answer: "Ils parlent" },
          { q: "8. In spoken French, how many of the six forms of 'parler' sound identical [parl]?", answer: "Four forms: je parle, tu parles, il parle, ils parlent (the -ent is completely silent!)." },
          { q: "9. Conjugate 'habiter' with 'J'' (I live).", answer: "J'habite (elision with silent h)" },
          { q: "10. Conjugate 'habiter' with 'Nous'.", answer: "Nous habitons" },
          { q: "11. Conjugate 'travailler' with 'Elle'.", answer: "Elle travaille" },
          { q: "12. Conjugate 'travailler' with 'Vous'.", answer: "Vous travaillez" },
          { q: "13. Conjugate 'aimer' with 'J''.", answer: "J'aime" },
          { q: "14. Conjugate 'aimer' with 'Ils'.", answer: "Ils aiment" },
          { q: "15. Conjugate 'écouter' with 'Tu'.", answer: "Tu écoutes" },
          { q: "16. Conjugate 'chercher' with 'Nous'.", answer: "Nous cherchons" },
          { q: "17. Conjugate 'trouver' with 'Je'.", answer: "Je trouve" },
          { q: "18. Conjugate 'demander' with 'Vous'.", answer: "Vous demandez" },
          { q: "19. Conjugate 'regarder' with 'Ils'.", answer: "Ils regardent" },
          { q: "20. Conjugate 'dîner' with 'Nous'.", answer: "Nous dînons" }
        ]
      },
      {
        id: "a1-present-tense-s2",
        sheetNum: 2,
        title: "Sheet 2: Spelling Changes in -ER Verbs (-cer, -ger, -eler, -eter)",
        subtitle: "20 Questions · Managing stem modifications to preserve soft consonant pronunciations",
        exercises: [
          { q: "1. Why does 'manger' become 'nous mangeons' with an extra 'e'?", answer: "To preserve the soft [zh] sound of G before the letter O." },
          { q: "2. Conjugate 'manger' with 'Nous'.", answer: "Nous mangeons" },
          { q: "3. Conjugate 'voyager' with 'Nous'.", answer: "Nous voyageons" },
          { q: "4. Conjugate 'partager' with 'Nous'.", answer: "Nous partageons" },
          { q: "5. Why does 'commencer' become 'nous commençons' with a cédille (ç)?", answer: "To preserve the soft [s] sound of C before the letter O." },
          { q: "6. Conjugate 'commencer' with 'Nous'.", answer: "Nous commençons" },
          { q: "7. Conjugate 'avancer' with 'Nous'.", answer: "Nous avançons" },
          { q: "8. How does 'acheter' change its stem in the boot forms (je, tu, il, ils)?", answer: "It takes a grave accent: j'achète, tu achètes, il achète, ils achètent." },
          { q: "9. Conjugate 'acheter' with 'J''.", answer: "J'achète" },
          { q: "10. Conjugate 'acheter' with 'Nous'.", answer: "Nous achetons (no accent because the following syllable has an active vowel -ons)" },
          { q: "11. Conjugate 'préférer' with 'Je'.", answer: "Je préfère (the second accent flips to grave before silent e)" },
          { q: "12. Conjugate 'préférer' with 'Nous'.", answer: "Nous préférons" },
          { q: "13. Conjugate 'appeler' with 'J''.", answer: "J'appelle (doubles the 'l' in the boot forms: j'appelle, nous appelons)" },
          { q: "14. Conjugate 'appeler' with 'Nous'.", answer: "Nous appelons (single 'l')" },
          { q: "15. Conjugate 'appeler' with 'Ils'.", answer: "Ils appellent (double 'l')" },
          { q: "16. Conjugate 'payer' with 'Je' (both spellings permitted).", answer: "Je paie (or je paye)" },
          { q: "17. Conjugate 'envoyer' with 'Tu'.", answer: "Tu envoies (y changes to i before silent e)" },
          { q: "18. Conjugate 'envoyer' with 'Nous'.", answer: "Nous envoyons (retains y)" },
          { q: "19. Conjugate 'nager' with 'Nous'.", answer: "Nous nageons" },
          { q: "20. Conjugate 'espérer' with 'Ils'.", answer: "Ils espèrent" }
        ]
      },
      {
        id: "a1-present-tense-s3",
        sheetNum: 3,
        title: "Sheet 3: Daily Routine & Work Context Sentences",
        subtitle: "20 Questions · Complete communicative sentences in the present tense",
        exercises: [
          { q: "1. Translate: 'I work in an office in Paris.'", answer: "Je travaille dans un bureau à Paris." },
          { q: "2. Translate: 'Do you speak French?' (formal)", answer: "Parlez-vous français ? (or 'Vous parlez français ?')" },
          { q: "3. Translate: 'We eat at 1:00 PM.'", answer: "Nous mangeons à treize heures (or à une heure)." },
          { q: "4. Translate: 'She lives near the station.'", answer: "Elle habite près de la gare." },
          { q: "5. Translate: 'They (m.) study marketing.'", answer: "Ils étudient le marketing." },
          { q: "6. Translate: 'He is looking for an apartment.'", answer: "Il cherche un appartement." },
          { q: "7. Translate: 'We do not watch television.'", answer: "Nous ne regardons pas la télévision." },
          { q: "8. Translate: 'I love listening to music.'", answer: "J'aime écouter de la musique. (second verb in infinitive)" },
          { q: "9. Translate: 'What are you buying?' (formal)", answer: "Qu'est-ce que vous achetez ? (or 'Vous achetez quoi ?')" },
          { q: "10. Translate: 'The meeting starts at 9:30.'", answer: "La réunion commence à neuf heures et demie." },
          { q: "11. Translate: 'I prefer this hotel.'", answer: "Je préfère cet hôtel." },
          { q: "12. Translate: 'We travel for business.'", answer: "Nous voyageons pour les affaires." },
          { q: "13. Translate: 'They (f.) arrive tomorrow.'", answer: "Elles arrivent demain." },
          { q: "14. Translate: 'Do you prepare the presentation?' (informal)", answer: "Tu prépares la présentation ?" },
          { q: "15. Translate: 'I pay the bill.'", answer: "Je paie (or paye) l'addition." },
          { q: "16. Complete: Chaque matin, nous (déguster) ___ un café.", answer: "dégustons" },
          { q: "17. Complete: Les clients (demander) ___ des informations.", answer: "demandent" },
          { q: "18. Complete: Sophie (fermer) ___ son ordinateur à 18h.", answer: "ferme" },
          { q: "19. Complete: Vous (visiter) ___ le musée aujourd'hui ?", answer: "visitez" },
          { q: "20. Complete: Tu (téléphoner) ___ à ton collègue ?", answer: "téléphones" }
        ]
      }
    ]
  };

  root.GRAMMAR_A1_WORKSHEETS = grammarA1Worksheets;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = grammarA1Worksheets;
  }
})(typeof window !== "undefined" ? window : globalThis);
