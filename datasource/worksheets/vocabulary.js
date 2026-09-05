(function (root) {
  const vocabularyWorksheets = {
    "a1-alphabet": [
      {
        id: "a1-alphabet-s1",
        sheetNum: 1,
        title: "Sheet 1: Core Letter Recognition, Vowel Sounds & Accents",
        subtitle: "20 Questions · Foundational letter names, diacritics and phonetics for adult learners",
        exercises: [
          { q: "1. What is the French letter name for the vowel 'A'?", answer: "[ah] (spelled 'a')" },
          { q: "2. How is the letter 'E' pronounced when unaccented at the end of a syllable?", answer: "[uh] (schwa sound, as in 'le')" },
          { q: "3. What is the letter name of 'H' in French?", answer: "[ahsh] (spelled 'hache')" },
          { q: "4. Name the diacritical accent found in the letter 'é' (e.g. in 'café').", answer: "L'accent aigu (acute accent)" },
          { q: "5. Name the diacritical accent found in 'è' (e.g. in 'mère').", answer: "L'accent grave (grave accent)" },
          { q: "6. Name the diacritical accent found in 'ê' or 'ô' (e.g. in 'fête', 'hôtel').", answer: "L'accent circonflexe (circumflex accent)" },
          { q: "7. What is the hook under the letter 'ç' in 'français' called?", answer: "La cédille (makes the C sound like [s] before A, O, or U)" },
          { q: "8. What are the two dots over the vowel in 'Noël' called?", answer: "Le tréma (dieresis — separates two consecutive vowel sounds)" },
          { q: "9. How is the letter 'G' named in French?", answer: "[zhay] (soft G, spelled 'gé')" },
          { q: "10. How is the letter 'J' named in French?", answer: "[zhee] (spelled 'ji')" },
          { q: "11. How is the letter 'K' named in French?", answer: "[kah] (spelled 'ka')" },
          { q: "12. How is the letter 'Q' named in French?", answer: "[kew] (rounded U sound, spelled 'qu')" },
          { q: "13. How is the letter 'W' named in French?", answer: "double-vé [doo-bluh-vay]" },
          { q: "14. How is the letter 'Y' named in French?", answer: "i grec [ee-grek] (literally 'Greek i')" },
          { q: "15. True or false: The letter 'H' is always silent at the beginning of French words.", answer: "True — whether 'h muet' (permits elision) or 'h aspiré' (prevents elision), H is never voiced." },
          { q: "16. Which vowel sound does 'I' make in standard French?", answer: "[ee] as in 'machine' (never the English diphthong in 'pie')" },
          { q: "17. Spell out the French letter names for the word 'L-I-R-E'.", answer: "elle – i – erre – e" },
          { q: "18. Spell out the French letter names for 'P-A-R-I-S'.", answer: "pé – a – erre – i – esse" },
          { q: "19. Which accent changes 'ou' (or) to 'où' (where)?", answer: "L'accent grave (grave accent on the U)" },
          { q: "20. How is the French letter 'U' pronounced compared to 'OU'?", answer: "U is produced with lips rounded as for 'oo' while holding tongue in position for 'ee' [y]; OU is standard [u]." }
        ]
      },
      {
        id: "a1-alphabet-s2",
        sheetNum: 2,
        title: "Sheet 2: Contextual Business & Travel Spelling",
        subtitle: "20 Questions · Spelling surnames, business emails and airline codes over the phone",
        exercises: [
          { q: "1. A hotel receptionist asks: 'Comment ça s'écrit ?' for the name 'DUPONT'. Write the exact French letter names.", answer: "dé – u – pé – o – enne – té" },
          { q: "2. Decode this hotel reservation code: 'effe – erre – a – enne – cé – e'.", answer: "FRANCE" },
          { q: "3. Spell the common French surname 'MARTIN' letter by letter in French.", answer: "emme – a – erre – té – i – enne" },
          { q: "4. Spell the city name 'LYON' letter by letter in French.", answer: "elle – i grec – o – enne" },
          { q: "5. A colleague spells their email username: 'emme – o – erre – e – a – u'. What is the name?", answer: "MOREAU" },
          { q: "6. How do you spell 'B-O-R-D-E-A-U-X' using French letter names?", answer: "bé – o – erre – dé – e – a – u – ics" },
          { q: "7. How is the '@' symbol commonly said in a French email address (e.g. contact@societe.fr)?", answer: "arobase (or arobase / at)" },
          { q: "8. How is the '.' (dot) pronounced in a French website address?", answer: "point (e.g. societe point fr)" },
          { q: "9. Decode this flight booking reference: 'a – effe – sept – quatre'.", answer: "AF74" },
          { q: "10. Write the letter-by-letter French spelling for 'G-A-R-E'.", answer: "gé – a – erre – e" },
          { q: "11. Write the letter-by-letter French spelling for 'M-E-R-C-I'.", answer: "emme – e – erre – cé – i" },
          { q: "12. A car rental agent says: 'Votre plaque : cé – ash – un – deux – té'. Write the license plate code.", answer: "CH-12-T" },
          { q: "13. Spell the word 'H-Ô-T-E-L' with explicit mention of the accent.", answer: "ash – o accent circonflexe – té – e – elle" },
          { q: "14. Spell the word 'É-C-O-L-E' with explicit mention of the accent.", answer: "e accent aigu – cé – o – elle – e" },
          { q: "15. How do you dictate a hyphen in a French compound name like 'Jean-Paul'?", answer: "trait d'union (e.g. Jean trait d'union Paul)" },
          { q: "16. Decode this client name: 'elle – e – cé – elle – e – erre – cé'.", answer: "LECLERC" },
          { q: "17. Spell the word 'B-I-L-L-E-T' (ticket) letter by letter in French.", answer: "bé – i – deux elle (or elle – elle) – e – té" },
          { q: "18. How do you express double letters aloud in French (e.g. 'LL' in 'Ville')?", answer: "Either 'deux elle' or 'elle, elle'." },
          { q: "19. Decode this street name: 'erre – u – e  dé – e  elle – a  pé – a – i – ics'.", answer: "RUE DE LA PAIX" },
          { q: "20. What is the letter name of 'Z' in French?", answer: "[zèd] (spelled 'zède')" }
        ]
      },
      {
        id: "a1-alphabet-s3",
        sheetNum: 3,
        title: "Sheet 3: Phone Spelling & Oral Discrimination Challenges",
        subtitle: "20 Questions · Minimal pairs, acoustic confusions and pragmatic telephone dictation",
        exercises: [
          { q: "1. Distinguish between 'G' [zhay] and 'J' [zhee]: Which letter begins 'Journal'?", answer: "J [zhee]" },
          { q: "2. Distinguish between 'G' [zhay] and 'J' [zhee]: Which letter begins 'Gare'?", answer: "G [zhay]" },
          { q: "3. When listening over static, English speakers often confuse French 'I' and 'E'. Which letter sounds like English 'E'?", answer: "I sounds like [ee]; E sounds like [uh]." },
          { q: "4. When hearing 'bé', which consonant is being spelled ('B' or 'P')?", answer: "B (P is pronounced 'pé')." },
          { q: "5. When hearing 'té', which consonant is being spelled ('T' or 'D')?", answer: "T (D is pronounced 'dé')." },
          { q: "6. Decode the company acronym 'S-N-C-F' into its spoken French letter names.", answer: "esse – enne – cé – effe" },
          { q: "7. Decode the broadcaster acronym 'R-F-I' into its spoken French letter names.", answer: "erre – effe – i" },
          { q: "8. Decode the airport code 'C-D-G' (Charles de Gaulle).", answer: "cé – dé – gé" },
          { q: "9. Decode the high-speed train acronym 'T-G-V'.", answer: "té – gé – vé" },
          { q: "10. In French, what does 'majuscule' mean when dictating a password?", answer: "Capital letter (uppercase)" },
          { q: "11. In French, what does 'minuscule' mean when dictating a password?", answer: "Lowercase letter" },
          { q: "12. In a password 'Paris2026!', how do you describe the '!' in French?", answer: "Point d'exclamation" },
          { q: "13. How do you describe the underscore '_' symbol in French email dictation?", answer: "Tiret du bas (or underscore / tiret bas)" },
          { q: "14. A caller says: 'Mon nom est Bernard : bé – e – erre – enne – a – erre – dé'. Write the name in standard letters.", answer: "BERNARD" },
          { q: "15. A caller says: 'Prénom : Céline, cé – e accent aigu – elle – i – enne – e'. Write the name with correct accent.", answer: "CÉLINE" },
          { q: "16. Why does the word 'garçon' require a cédille (ç)?", answer: "Because without the cédille, C before O makes a hard [k] sound; ç preserves the soft [s] sound." },
          { q: "17. In the word 'maïs' (corn), what is the function of the tréma (ï)?", answer: "It forces 'a' and 'i' to be pronounced separately [ma-ees], rather than blending into [ay] as in 'mais' (but)." },
          { q: "18. What French word means 'to spell'?", answer: "Épeler (e.g. 'Pouvez-vous épeler votre nom ?')" },
          { q: "19. Translate into French: 'Could you spell that, please?' (formal)", answer: "Pouvez-vous épeler, s'il vous plaît ?" },
          { q: "20. How do you say 'with an accent' in French?", answer: "Avec un accent (e.g. 'e avec accent aigu')" }
        ]
      }
    ],

    "a1-numbers": [
      {
        id: "a1-numbers-s1",
        sheetNum: 1,
        title: "Sheet 1: Cardinal Numbers 0–69 & Basic Arithmetic",
        subtitle: "20 Questions · Number formation, spelling and basic practical quantities",
        exercises: [
          { q: "1. Write in French words: 0, 1, 2, 3.", answer: "zéro, un, deux, trois" },
          { q: "2. Write in French words: 4, 5, 6, 7.", answer: "quatre, cinq, six, sept" },
          { q: "3. Write in French words: 8, 9, 10.", answer: "huit, neuf, dix" },
          { q: "4. Write in French words: 11, 12, 13, 14.", answer: "onze, douze, treize, quatorze" },
          { q: "5. Write in French words: 15, 16.", answer: "quinze, seize" },
          { q: "6. Write in French words: 17, 18, 19, 20.", answer: "dix-sept, dix-huit, dix-neuf, vingt" },
          { q: "7. Why is 21 written 'vingt et un' while 22 is written 'vingt-deux'?", answer: "'Et un' is used for the first digit after 20, 30, 40, 50, 60; other compounds use a hyphen." },
          { q: "8. Write in French words: 30, 31.", answer: "trente, trente et un" },
          { q: "9. Write in French words: 40, 45.", answer: "quarante, quarante-cinq" },
          { q: "10. Write in French words: 50, 58.", answer: "cinquante, cinquante-huit" },
          { q: "11. Write in French words: 60, 69.", answer: "soixante, soixante-neuf" },
          { q: "12. Calculate and write in French: 12 + 8 = ?", answer: "vingt (20)" },
          { q: "13. Calculate and write in French: 25 + 15 = ?", answer: "quarante (40)" },
          { q: "14. Calculate and write in French: 50 - 15 = ?", answer: "trente-cinq (35)" },
          { q: "15. How do you pronounce the final consonant of 'six' and 'dix' in isolation?", answer: "Pronounced with a [s] sound ([sees], [dees])." },
          { q: "16. How do you pronounce 'six' in 'six personnes' (before a consonant)?", answer: "The final consonant is silent: [see]." },
          { q: "17. How do you pronounce 'dix' in 'dix euros' (before a vowel)?", answer: "Linked with a [z] liaison: [dee-zuh-ro]." },
          { q: "18. Translate into French: 'Room 34'.", answer: "Chambre trente-quatre (chambre 34)" },
          { q: "19. Translate into French: 'Table for 4 people'.", answer: "Une table pour quatre personnes" },
          { q: "20. What is 100 in French?", answer: "Cent" }
        ]
      },
      {
        id: "a1-numbers-s2",
        sheetNum: 2,
        title: "Sheet 2: The Complex Decades (70–99), Prices & Time",
        subtitle: "20 Questions · Base-20 vigesimal counting, euro prices and telling time",
        exercises: [
          { q: "1. How is 70 constructed in standard French? Write in words.", answer: "soixante-dix (literally '60 + 10')" },
          { q: "2. How is 71 constructed? Write in words.", answer: "soixante et onze ('60 and 11')" },
          { q: "3. Write in French words: 72, 75.", answer: "soixante-douze, soixante-quinze" },
          { q: "4. How is 80 constructed in standard French? Write in words.", answer: "quatre-vingts (literally 'four twenties', with plural -s)" },
          { q: "5. Write in French words: 81 (Note: does it take 'et' or '-s'?).", answer: "quatre-vingt-un (No 'et', and 'vingt' drops the plural -s when followed by a number)" },
          { q: "6. Write in French words: 88.", answer: "quatre-vingt-huit" },
          { q: "7. How is 90 constructed in standard French? Write in words.", answer: "quatre-vingt-dix ('four-twenty-ten')" },
          { q: "8. Write in French words: 91.", answer: "quatre-vingt-onze" },
          { q: "9. Write in French words: 95.", answer: "quatre-vingt-quinze" },
          { q: "10. Write in French words: 99.", answer: "quatre-vingt-dix-neuf" },
          { q: "11. How do you say '€15.50' in French?", answer: "Quinze euros cinquante (15 € 50)" },
          { q: "12. How do you say '€78.20' in French?", answer: "Soixante-dix-huit euros vingt" },
          { q: "13. How do you say '€99.90' in French?", answer: "Quatre-vingt-dix-neuf euros quatre-vingt-dix" },
          { q: "14. How do you ask 'How much does it cost?' in French?", answer: "Combien ça coûte ? (or 'C'est combien ?')" },
          { q: "15. How do you say 'It is 8:00 AM' in French?", answer: "Il est huit heures (du matin)" },
          { q: "16. How do you say 'It is 2:30 PM' in French?", answer: "Il est deux heures et demie (or 'Il est quatorze heures trente')" },
          { q: "17. How do you say 'It is quarter to four' (3:45) in French?", answer: "Il est quatre heures moins le quart (or 'Il est trois heures quarante-cinq')" },
          { q: "18. How do you say 'Noon' and 'Midnight' in French?", answer: "Midi (12:00 PM) and Minuit (12:00 AM)" },
          { q: "19. In Switzerland and Belgium, what alternate words are used for 70 and 90?", answer: "Septante (70) and Nonante (90)" },
          { q: "20. In Switzerland, what alternate word is used for 80?", answer: "Huitante (or octante in regional use)" }
        ]
      },
      {
        id: "a1-numbers-s3",
        sheetNum: 3,
        title: "Sheet 3: Real-World Scenarios: Phone Numbers, Dates & Receipts",
        subtitle: "20 Questions · Grouping digits by pairs, calendar dates and bill itemization",
        exercises: [
          { q: "1. How are French phone numbers (10 digits) traditionally spoken?", answer: "In pairs of two digits (e.g. 06 12 34 56 78 → zéro six, douze, trente-quatre...)" },
          { q: "2. Read aloud this French mobile number: 06 70 82 91 15.", answer: "zéro six, soixante-dix, quatre-vingt-deux, quatre-vingt-onze, quinze" },
          { q: "3. Read aloud this Parisian phone number: 01 45 67 89 20.", answer: "zéro un, quarante-cinq, soixante-sept, quatre-vingt-neuf, vingt" },
          { q: "4. What is the emergency medical service number (SAMU) in France?", answer: "Le 15 (le quinze)" },
          { q: "5. What is the police emergency number in France?", answer: "Le 17 (le dix-sept)" },
          { q: "6. What is the fire department emergency number in France?", answer: "Le 18 (le dix-huit)" },
          { q: "7. How do you state the date 'July 14' in French?", answer: "Le 14 juillet (le quatorze juillet)" },
          { q: "8. How do you state the date 'May 1st' in French (Note: special ordinal for the 1st)?", answer: "Le premier mai (le 1er mai — 'premier' is used, never 'un mai')" },
          { q: "9. Translate: 'I was born in 1995'.", answer: "Je suis né(e) en 1995 (mille neuf cent quatre-vingt-quinze)" },
          { q: "10. Translate: 'The bill is €42'.", answer: "L'addition est de quarante-deux euros (or 'Ça fait quarante-deux euros')" },
          { q: "11. Calculate the change: You give a €50 note for a €38 purchase.", answer: "Il reste douze euros (50 - 38 = 12 €)" },
          { q: "12. In a bakery: 'Deux baguettes à 1 € 20'. What is the total?", answer: "Deux euros quarante (2 € 40)" },
          { q: "13. In a café: 'Un café à 2 € 50 et un croissant à 1 € 50'. What is the total?", answer: "Quatre euros (4 € 00)" },
          { q: "14. State the French postal code for central Paris: 75001.", answer: "Soixante-quinze mille un" },
          { q: "15. Translate: 'Train departing at 17:42 from platform 8'.", answer: "Train au départ à dix-sept heures quarante-deux, voie huit" },
          { q: "16. Translate: 'My address is 28 Rue de la République'.", answer: "Mon adresse est le vingt-huit, rue de la République" },
          { q: "17. Write in French: '31 days in January'.", answer: "Trente et un jours en janvier" },
          { q: "18. Translate: 'Fifty percent discount' (50%).", answer: "Cinquante pour cent de réduction (cinquante pour cent)" },
          { q: "19. A taxi meter reads '37,60 €'. How does the driver say this?", answer: "Trente-sept euros soixante" },
          { q: "20. How do you say 'zero point five' (0.5) in French?", answer: "Zéro virgule cinq (French uses a comma 'virgule' for decimals)" }
        ]
      }
    ],

    "a1-greetings": [
      {
        id: "a1-greetings-s1",
        sheetNum: 1,
        title: "Sheet 1: Core Salutations & Basic Politeness",
        subtitle: "20 Questions · Standard daytime, evening and parting greetings for everyday encounters",
        exercises: [
          { q: "1. What is the universal standard greeting used from morning until late afternoon in France?", answer: "Bonjour" },
          { q: "2. At approximately what time do French speakers switch from 'Bonjour' to 'Bonsoir'?", answer: "Late afternoon / early evening (around 5:00 PM to 6:00 PM)" },
          { q: "3. What is the standard greeting used when wishing someone a restful night before bed?", answer: "Bonne nuit" },
          { q: "4. What is the most standard formal phrase for 'Goodbye'?", answer: "Au revoir" },
          { q: "5. How do you say 'See you soon' in French?", answer: "À bientôt" },
          { q: "6. How do you say 'See you tomorrow' in French?", answer: "À demain" },
          { q: "7. How do you say 'See you later (today)' in French?", answer: "À plus tard (or 'À tout à l'heure' for earlier today)" },
          { q: "8. How do you say 'Have a nice day' in French?", answer: "Bonne journée" },
          { q: "9. How do you say 'Have a nice evening' in French?", answer: "Bonne soirée" },
          { q: "10. How do you say 'Have a nice weekend' in French?", answer: "Bon week-end" },
          { q: "11. What is the formal way to say 'Please' in French?", answer: "S'il vous plaît" },
          { q: "12. What is the informal way to say 'Please' to a friend or child?", answer: "S'il te plaît" },
          { q: "13. What is the universal word for 'Thank you' in French?", answer: "Merci" },
          { q: "14. How do you say 'Thank you very much' in French?", answer: "Merci beaucoup" },
          { q: "15. How do you formally reply 'You are welcome' in French?", answer: "Je vous en prie" },
          { q: "16. How do you casually reply 'You're welcome / It's nothing' to a peer?", answer: "De rien (or 'Je t'en prie')" },
          { q: "17. What word do you use to get someone's attention or apologize politely?", answer: "Pardon (or 'Excusez-moi')" },
          { q: "18. What is the casual, informal greeting equivalent to 'Hi / Bye' among friends?", answer: "Salut" },
          { q: "19. How do you ask 'How are you?' casually in three letters?", answer: "Ça va ?" },
          { q: "20. How do you answer 'I'm doing well, thank you' in French?", answer: "Ça va bien, merci" }
        ]
      },
      {
        id: "a1-greetings-s2",
        sheetNum: 2,
        title: "Sheet 2: Register Discrimination: Tu vs. Vous in Daily Life",
        subtitle: "20 Questions · Determining social distance, hierarchy and professional etiquette",
        exercises: [
          { q: "1. Which pronoun is used for speaking to one stranger in a shop: 'tu' or 'vous'?", answer: "'Vous' (polite singular / vouvoiement)" },
          { q: "2. Which pronoun is used when addressing an adult doctor or lawyer: 'tu' or 'vous'?", answer: "'Vous'" },
          { q: "3. Which pronoun is used when addressing a young child: 'tu' or 'vous'?", answer: "'Tu' (tutoiement)" },
          { q: "4. Which pronoun is used when addressing a pet or animal: 'tu' or 'vous'?", answer: "'Tu'" },
          { q: "5. When addressing a group of two or more friends, which pronoun is mandatory?", answer: "'Vous' (plural is always 'vous', even for close friends)" },
          { q: "6. How do you ask 'How are you?' formally to a business client?", answer: "Comment allez-vous ?" },
          { q: "7. How do you ask 'How are you?' informally to a close friend using 'tu'?", answer: "Comment vas-tu ? (or 'Comment tu vas ?')" },
          { q: "8. How do you ask 'What is your name?' formally?", answer: "Comment vous appelez-vous ?" },
          { q: "9. How do you ask 'What is your name?' informally?", answer: "Comment tu t'appelles ?" },
          { q: "10. What does the verb 'vouvoyer' mean?", answer: "To address someone using the formal 'vous'" },
          { q: "11. What does the verb 'tutoyer' mean?", answer: "To address someone using the informal 'tu'" },
          { q: "12. What does the polite invitation 'On peut se tutoyer ?' mean?", answer: "'Can we use 'tu' with each other?' (transitioning from formal to informal register)" },
          { q: "13. In a bakery, the baker says: 'Bonjour Madame, vous désirez ?'. How should you address her back?", answer: "Using 'vous' (e.g. 'Bonjour, je voudrais une baguette, s'il vous plaît.')" },
          { q: "14. True or false: In French corporate culture, junior employees always start with 'vous' with senior managers.", answer: "True — 'vous' is default until explicitly invited to use 'tu'." },
          { q: "15. How do you greet a police officer or administrative clerk politely upon arrival?", answer: "Bonjour Monsieur / Bonjour Madame (adding the title adds necessary French courtesy)." },
          { q: "16. How do you politely say 'Pardon me, do you speak English?' formally?", answer: "Excusez-moi, parlez-vous anglais ?" },
          { q: "17. What is the difference in usage between 'Enchanté(e)' and 'Ravi(e) de faire votre connaissance'?", answer: "'Enchanté(e)' is the concise 'Pleased to meet you'; the longer phrase is slightly more formal and polite." },
          { q: "18. Which greeting is inappropriate when walking into a bank for a mortgage meeting: 'Salut' or 'Bonjour'?", answer: "'Salut' is inappropriate (too casual/familiar); 'Bonjour Monsieur/Madame' is required." },
          { q: "19. When entering an elevator in an office building with strangers, what is expected in French etiquette?", answer: "A brief 'Bonjour' upon entering and 'Bonne journée / Au revoir' upon leaving." },
          { q: "20. When entering a small boutique or shop in France, what must you say immediately to the shopkeeper?", answer: "'Bonjour' — failing to say 'Bonjour' upon entering a boutique is considered very rude in France." }
        ]
      },
      {
        id: "a1-greetings-s3",
        sheetNum: 3,
        title: "Sheet 3: Professional & Social Interaction Challenges",
        subtitle: "20 Questions · Role-plays, written email openings and closing etiquette formulas",
        exercises: [
          { q: "1. What is the standard opening salutation for a formal business email when you know the recipient's name?", answer: "Bonjour Monsieur Dupont, / Bonjour Madame Martin," },
          { q: "2. What is the formal email salutation when you do not know the recipient's gender or identity?", answer: "Madame, Monsieur," },
          { q: "3. What is a standard professional email closing formula in French?", answer: "Cordialement, / Bien cordialement," },
          { q: "4. What is an appropriate email closing for a close work colleague whom you know well?", answer: "Bien à toi, / Cordialement," },
          { q: "5. What is the traditional social greeting accompanied by cheek kisses among friends called in France?", answer: "Faire la bise" },
          { q: "6. In a professional business meeting between adults meeting for the first time, what is the greeting gesture?", answer: "Une poignée de main (a firm handshake)" },
          { q: "7. When raising glasses to toast before drinking, what do French speakers say?", answer: "Santé ! (or 'À votre santé !' / 'À ta santé !' / 'Tchin-tchin !')" },
          { q: "8. What do you say to someone who is about to eat a meal?", answer: "Bon appétit !" },
          { q: "9. What do you say to someone who is celebrating their birthday?", answer: "Joyeux anniversaire ! (or 'Bon anniversaire !')" },
          { q: "10. What do you say to someone who is setting off on a vacation trip?", answer: "Bon voyage ! (or 'Bonnes vacances !')" },
          { q: "11. When someone sneezes, what do French speakers politely say (first sneeze)?", answer: "À vos souhaits ! (formal) or 'À tes souhaits !' (informal)" },
          { q: "12. When you accidentally bump into someone on the subway, what do you immediately say?", answer: "Pardon ! (or 'Excusez-moi !')" },
          { q: "13. In a restaurant, how do you politely call the waiter (Note: 'Garçon' is obsolete and rude)?", answer: "'S'il vous plaît !' or 'Excusez-moi, Monsieur !'" },
          { q: "14. How do you introduce a colleague formally: 'This is Mr. Laurent, our director.'?", answer: "Je vous présente Monsieur Laurent, notre directeur." },
          { q: "15. How do you reply when someone introduces themselves to you at a networking event?", answer: "Enchanté(e), je m'appelle [Votre Nom]." },
          { q: "16. What is the polite way to say 'Excuse me, I would like to pay' in a café?", answer: "L'addition, s'il vous plaît." },
          { q: "17. Translate: 'I wish you a pleasant stay in Paris.' (formal)", answer: "Je vous souhaite un agréable séjour à Paris." },
          { q: "18. When saying goodbye to someone on Friday afternoon, what is the best formula?", answer: "Bon week-end et à lundi !" },
          { q: "19. How do you ask someone politely if they can help you?", answer: "Excusez-moi, pouvez-vous m'aider, s'il vous plaît ?" },
          { q: "20. What is the essential difference between 'Bonne journée' and 'Bonjour'?", answer: "'Bonjour' is a greeting on arrival; 'Bonne journée' is a parting wish on departure." }
        ]
      }
    ]
  };

  root.VOCABULARY_WORKSHEETS = vocabularyWorksheets;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = vocabularyWorksheets;
  }
})(typeof window !== "undefined" ? window : globalThis);
