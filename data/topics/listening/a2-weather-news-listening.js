(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-weather-news-listening"] = {
    id: "a2-weather-news-listening",
    module: "listening",
    level: "A2",
    title: "Weather Bulletins & Brief News Flashes",
    order: 12,
    requires: "a2-comparing-places",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Des averses", speak: "Des averses sont prévues", gloss: "Showers (are expected)", ipa: "[day zah-vairs]", tag: "accent" },
        { display: "Un ralentissement", speak: "Un ralentissement sur l'autoroute", gloss: "A slowdown / traffic jam", ipa: "[uh rah-lahn-tees-mahn]", tag: "" },
        { display: "En légère hausse", speak: "Les températures sont en légère hausse", gloss: "Slightly rising", ipa: "[ahn lay-zhair ohss]", tag: "" },
        { display: "Selon les prévisions", speak: "Selon les prévisions météo", gloss: "According to the forecast", ipa: "[suh-lohn lay pray-vee-zyohn]", tag: "accent" }
      ]
    },
    content: {
      intro: "Radio weather and news flashes move fast and pack numbers, regions, and cause-effect connectors into a short block of speech. At A2 you're expected to catch the gist plus 2-3 specific details (temperature, region, cause of a disruption) without understanding every word. Click each phrase, then listen for how the bulletin below links cause to consequence.",
      tables: [
        {
          caption: "Audio dialogue: Flash info et météo",
          columns: ["Speaker", "Spoken Dialogue (Click to hear)", "Meaning"],
          rows: [
            ["Présentateur", "Il est midi, voici les titres. Un accident a provoqué un important ralentissement sur l'autoroute A6, dans le sens Paris-Lyon.", "It's noon, here are the headlines. An accident has caused a major slowdown on the A6 motorway, heading from Paris to Lyon."],
            ["Présentateur", "Les automobilistes sont invités à la prudence, la circulation devrait rester difficile jusqu'en fin d'après-midi.", "Motorists are advised to be careful; traffic should remain difficult until late afternoon."],
            ["Présentateur", "Côté météo maintenant : des averses sont prévues sur la moitié nord du pays, avec des températures en légère hausse.", "Now for the weather: showers are expected over the northern half of the country, with temperatures slightly rising."],
            ["Présentateur", "Dans le sud, le soleil devrait dominer toute la journée.", "In the south, sunshine should dominate all day."]
          ]
        }
      ],
      example: { fr: "Un accident a provoqué un important ralentissement sur l'autoroute.", en: "An accident has caused a major slowdown on the motorway." },
      callouts: [
        {
          label: "Listen for cause → consequence",
          body: "News bulletins constantly link a cause (\"un accident\") to its consequence (\"un ralentissement\") without always using an explicit connector — train your ear to infer the link from context and word order.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Qu'est-ce qui a causé le ralentissement sur l'A6 ?", opts: ["Un accident", "Des travaux", "La neige", "Une grève"], a: "Un accident" },
        { q: "Dans quel sens la circulation est-elle difficile ?", opts: ["Paris-Lyon", "Lyon-Paris", "Paris-Marseille", "Bordeaux-Paris"], a: "Paris-Lyon" },
        { q: "Jusqu'à quand la circulation devrait-elle rester difficile ?", opts: ["Fin d'après-midi", "Toute la nuit", "Une heure", "Le lendemain matin"], a: "Fin d'après-midi" },
        { q: "Quel temps est prévu dans le nord ?", opts: ["Des averses", "Du soleil", "De la neige", "Du brouillard"], a: "Des averses" },
        { q: "Quel temps est prévu dans le sud ?", opts: ["Le soleil devrait dominer", "Des orages", "Du vent fort", "De la grêle"], a: "Le soleil devrait dominer" }
      ]
    },
    reference: {
      read: [
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "Graded news and weather listening exercises" }
      ],
      watchListen: []
    }
  };
})();
