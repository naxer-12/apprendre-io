(function () {
  const ICONS = {
    vocab: `<svg viewBox="0 0 24 24" width="16" height="16"><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 10.5h8M8 14h5" stroke="currentColor" stroke-width="1.4"/></svg>`,
    grammar: `<svg viewBox="0 0 24 24" width="16" height="16"><rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 10h16M4 15h16M10 4v16M15 4v16" stroke="currentColor" stroke-width="1.2"/></svg>`,
    reading: `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 5c3-1.5 6-1.5 8 0v14c-2-1.5-5-1.5-8 0V5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 5c-3-1.5-6-1.5-8 0v14c2-1.5 5-1.5 8 0V5z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
    writing: `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M14 7l3 3" stroke="currentColor" stroke-width="1.6"/></svg>`,
    speaking: `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 5h16v11H9l-4 4v-4H4V5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 9h8M8 12h5" stroke="currentColor" stroke-width="1.4"/></svg>`,
    listening: `<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 14v-2a8 8 0 0116 0v2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="4.5" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="16.5" y="14" width="4.5" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`
  };

  const speakIcon = `<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 9.5a4 4 0 010 5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`;
  const checkIcon = `<svg viewBox="0 0 24 24"><path d="M4 8l3 3 5-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const lockIcon = `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`;
  const dotIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>`;
  const chevIcon = `<svg class="chev" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const sunIcon = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`;

  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "fr-FR";
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {
      /* pronunciation is progressive enhancement */
    }
  }
  window.speak = speak;

  function allTopics() {
    return Object.values(window.TOPICS || {});
  }

  function topicsForModule(moduleId) {
    const mod = (window.MODULES || []).find(m => m.id === moduleId);
    if (!mod) return [];
    return mod.topics.map(id => window.TOPICS[id]).filter(Boolean);
  }

  function renderCardGrid(items) {
    return `<div class="tile-grid">` + items.map(it => `
      <div class="tile ${it.tag === "accent" ? "tag-accent" : ""}">
        <div class="tile-dot"></div>
        <div class="tile-big">${it.display}</div>
        <div class="tile-gloss">${it.gloss || ""}</div>
        <div class="tile-ipa">${it.ipa || ""}</div>
        <button class="speak-btn" onclick="speak(${JSON.stringify(it.speak || it.display)})" aria-label="Play ${it.display}">${speakIcon}</button>
      </div>`).join("") + `</div>`;
  }

  function renderTable(t) {
    if (!t) return "";
    const caption = t.caption ? `<caption>${t.caption}</caption>` : "";
    const head = "<tr>" + (t.columns || []).map(c => `<th>${c}</th>`).join("") + "</tr>";
    const body = (t.rows || []).map(r => "<tr>" + r.map(c => `<td>${c}</td>`).join("") + "</tr>").join("");
    return `<div class="table-wrap"><table class="ref-table">${caption}<thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  function renderVisual(topic) {
    if (!topic || !topic.visual) return "";
    if (topic.visual.kind === "card-grid") return renderCardGrid(topic.visual.data);
    if (topic.visual.kind === "table") return renderTable(topic.visual.data);
    return "";
  }

  function renderRefGrid(items) {
    if (!items || !items.length) return "";
    return `<div class="ref-grid">` + items.map(r => {
      const inner = `<b>${r.title}</b><span>${r.note || ""}</span>`;
      return r.url
        ? `<a class="ref-card" href="${r.url}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="ref-card">${inner}</div>`;
    }).join("") + `</div>`;
  }

  function renderQuiz(topic, onGraded) {
    const qs = topic.test.questions;
    let answered = 0, correct = 0;
    const el = document.createElement("div");
    el.className = "quiz-card";
    el.innerHTML = qs.map((item, i) => `
      <div style="margin-bottom:18px">
        <div class="quiz-q">${i + 1}. ${item.q}</div>
        <div class="quiz-opts">${item.opts.map(o => `<button class="opt" data-q="${i}" data-val="${o}">${o}</button>`).join("")}</div>
      </div>`).join("") + `
      <div class="quiz-footer">
        <div class="score mono">Score: <span class="scoreVal">0</span>/${qs.length}</div>
        <button class="btn ghost resetBtn">Retry</button>
      </div>
      <div class="gate gateMsg">Answer all ${qs.length} questions to unlock the next topic.</div>`;

    const scoreEl = el.querySelector(".scoreVal");
    const gateEl = el.querySelector(".gateMsg");

    function reset() {
      answered = 0; correct = 0; scoreEl.textContent = "0";
      gateEl.textContent = `Answer all ${qs.length} questions to unlock the next topic.`;
      gateEl.classList.remove("unlocked");
      el.querySelectorAll(".opt").forEach(b => {
        b.disabled = false;
        b.classList.remove("correct", "wrong");
      });
    }
    el.querySelector(".resetBtn").addEventListener("click", reset);

    el.addEventListener("click", (e) => {
      const btn = e.target.closest(".opt");
      if (!btn || btn.disabled) return;
      const qi = Number(btn.dataset.q);
      const correctAns = qs[qi].a;
      el.querySelectorAll(`.opt[data-q="${qi}"]`).forEach(b => {
        b.disabled = true;
        if (b.dataset.val === correctAns) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
      });
      answered++;
      if (btn.dataset.val === correctAns) correct++;
      scoreEl.textContent = String(correct);
      if (answered === qs.length) {
        const passed = correct >= topic.test.passScore;
        if (passed) {
          gateEl.textContent = `Unlocked the next topic — score ${correct}/${qs.length}.`;
          gateEl.classList.add("unlocked");
        } else {
          gateEl.textContent = `Score ${correct}/${qs.length} — need ${topic.test.passScore}/${qs.length} to unlock the next topic. Try again.`;
        }
        onGraded(correct, passed);
      }
    });
    return el;
  }

  function renderLesson(topic) {
    const mod = (window.MODULES || []).find(m => m.id === topic.module) || { name: topic.module, id: topic.module };
    const modTopics = topicsForModule(topic.module);
    const idx = modTopics.findIndex(t => t.id === topic.id);
    const prev = idx > 0 ? modTopics[idx - 1] : null;
    const next = idx < modTopics.length - 1 ? modTopics[idx + 1] : null;
    const progress = window.Progress.loadProgress(localStorage);

    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="crumb">${mod.name.toUpperCase()} · ${topic.level} · TOPIC ${idx + 1} OF ${modTopics.length}</div>
      <h1 class="lesson-title">${topic.title}</h1>
      <p class="lesson-sub">Pass this topic's test with ${topic.test.passScore}/${topic.test.questions.length} to unlock the next step in the curriculum.</p>
      
      <div class="stage">
        <div class="stage-kicker">1 · Visual</div>
        <h2>Visual reference</h2>
        <div id="visualMount"></div>
      </div>
      
      <div class="stage">
        <div class="stage-kicker">2 · Content</div>
        <h2>What actually matters here</h2>
        <p class="stage-desc">${topic.content.intro}</p>
        ${(topic.content.tables || []).map(renderTable).join("")}
        ${topic.content.example ? `<p class="stage-desc"><em>${topic.content.example.fr}</em> — ${topic.content.example.en}</p>` : ""}
        ${(topic.content.callouts || []).map(c => `
          <div class="callout">
            <h3>${c.label}</h3>
            <p>${c.body}${c.cite ? ` — <cite>${c.cite}</cite>` : ""}</p>
          </div>`).join("")}
      </div>

      <div class="stage">
        <div class="stage-kicker">3 · Test</div>
        <h2>Check your memory</h2>
        <p class="stage-desc">${topic.test.questions.length} questions. Score ${topic.test.passScore}/${topic.test.questions.length} or higher to unlock ${next ? `"${next.title}"` : "the next module"}.</p>
        <div id="quizMount"></div>
      </div>

      <div class="stage">
        <div class="stage-kicker">4 · Reference</div>
        <h2>Go further</h2>
        ${topic.reference && topic.reference.read && topic.reference.read.length ? `<div class="section-label">Read</div>${renderRefGrid(topic.reference.read)}` : ""}
        ${topic.reference && topic.reference.watchListen && topic.reference.watchListen.length ? `<div class="section-label">Watch &amp; listen</div>${renderRefGrid(topic.reference.watchListen)}` : ""}
      </div>

      <div class="prevnext">
        <button class="pn-btn" ${prev ? "" : "disabled"} id="prevBtn">
          <div class="lbl">← Previous</div>
          <div class="t">${prev ? prev.title : "—"}</div>
        </button>
        <button class="pn-btn" ${next && window.Progress.isUnlocked(next, progress) ? "" : "disabled"} id="nextBtn">
          <div class="lbl">Next →</div>
          <div class="t">${next ? next.title : "—"}</div>
        </button>
      </div>
      <footer class="foot">Apprendre.io — French language learning platform grounded in empirical SLA research.</footer>
    `;

    document.getElementById("visualMount").appendChild(strToNode(renderVisual(topic)));
    document.getElementById("quizMount").appendChild(renderQuiz(topic, (score) => {
      window.Progress.recordScore(localStorage, topic, score);
      renderSidebar();
      const updatedProgress = window.Progress.loadProgress(localStorage);
      const nextBtn = document.getElementById("nextBtn");
      if (next && nextBtn && window.Progress.isUnlocked(next, updatedProgress)) {
        nextBtn.disabled = false;
      }
    }));

    if (prev) {
      document.getElementById("prevBtn").addEventListener("click", () => {
        location.hash = `#/${prev.module}/${prev.id}`;
      });
    }
    if (next) {
      document.getElementById("nextBtn").addEventListener("click", () => {
        if (!document.getElementById("nextBtn").disabled) {
          location.hash = `#/${next.module}/${next.id}`;
        }
      });
    }
  }

  function strToNode(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.firstElementChild || div;
  }

  function renderOverview() {
    const progress = window.Progress.loadProgress(localStorage);
    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="hero">
        <h1>Learn French, one evidence-backed step at a time</h1>
        <p>Pick a module in the sidebar or below. Every topic runs the same loop — visual reference, focused content, active retrieval test, and primary citations — and stays locked until you pass the prerequisite before it.</p>
        <div class="cta-row">
          <button class="btn" id="startBtn">Start Grammar A1</button>
          <button class="btn ghost" id="vocabBtn">Start Vocabulary</button>
        </div>
      </div>

      <div class="strategy-strip">
        <div class="strategy-card">
          <div class="k">Retrieval Practice</div>
          <h3>Test-First Gating</h3>
          <p>Retrieval practice only outperforms passive re-reading when combined with immediate feedback. Tests gate every transition.</p>
        </div>
        <div class="strategy-card">
          <div class="k">Autonomous Motivation</div>
          <h3>Intrinsic Meaning</h3>
          <p>Meta-analysis across 24,470 learners shows autonomous motivation predicts long-term proficiency (r = .23) while external pressure does not.</p>
        </div>
        <div class="strategy-card">
          <div class="k">Cognitive Economy</div>
          <h3>Rule Saliency &amp; Chunks</h3>
          <p>Over 90% of -tion nouns are feminine; -er verbs unlock hundreds of stems. We teach the high-yield rules that accelerate mastery.</p>
        </div>
      </div>

      <h2 style="margin-top:36px;font-size:1.3rem;">Curriculum Modules</h2>
      <div class="module-grid" id="moduleGrid"></div>
      <footer class="foot">Apprendre.io — French language learning platform. Plain HTML/CSS/JS, no build step, no backend required.</footer>
    `;

    document.getElementById("startBtn").addEventListener("click", () => {
      location.hash = "#/grammar/a1-articles";
    });
    document.getElementById("vocabBtn").addEventListener("click", () => {
      location.hash = "#/vocabulary/a1-alphabet";
    });

    const grid = document.getElementById("moduleGrid");
    window.MODULES.forEach(mod => {
      const topics = topicsForModule(mod.id);
      const done = window.Progress.countCompleted(topics, progress);
      const card = document.createElement("button");
      card.className = "module-card";
      card.innerHTML = `
        <div class="top">
          <div class="ico">${ICONS[mod.icon] || ""}</div>
          <span class="frac">${topics.length ? `${done}/${topics.length}` : "coming soon"}</span>
        </div>
        <b>${mod.name}</b>
        <div class="sub">${mod.description}</div>
      `;
      card.addEventListener("click", () => {
        if (!topics.length) return;
        const first = topics.find(t => !progress.completed[t.id]) || topics[0];
        location.hash = `#/${mod.id}/${first.id}`;
      });
      grid.appendChild(card);
    });
  }

  function renderPractice() {
    const progress = window.Progress.loadProgress(localStorage);
    const completedIds = Object.keys(progress.completed);
    const main = document.getElementById("main");

    // Gather flashcards from completed topics or default to Alphabet + Numbers
    const cards = [
      { front: "Bonjour", back: "Hello / Good day [bon-zhoor]" },
      { front: "Merci", back: "Thank you [mair-see]" },
      { front: "S'il vous plaît", back: "Please (formal) [seel voo pleh]" },
      { front: "le / la", back: "Definite articles (masculine / feminine)" },
      { front: "du / de la / des", back: "Partitive articles (some / any)" },
      { front: "qui vs. que", back: "qui = subject, que = direct object" },
      { front: "Passé Composé (avoir)", back: "avoir (present) + past participle (-é, -i, -u)" },
      { front: "Passé Composé (être)", back: "DR & MRS VANDERTRAMP motion/state verbs (agrees with subject)" },
      { front: "Imparfait stem", back: "nous-form of present tense without -ons + -ais, -ais, -ait..." },
      { front: "Futur Simple", back: "Infinitive + -ai, -as, -a, -ons, -ez, -ont" },
      { front: "Conditionnel", back: "Future stem + Imparfait endings (-ais, -ais, -ait...)" },
      { front: "Plus-que-parfait", back: "Imparfait of avoir/être + past participle (had done)" },
      { front: "COD vs. COI", back: "COD: le/la/les (direct). COI: lui/leur (to him/her/them)." },
      { front: "dont", back: "Relative pronoun replacing phrases with 'de'" },
      { front: "Subjonctif Présent", back: "ils-stem + -e, -es, -e, -ions, -iez, -ent (expresses subjectivity/doubt)" },
      { front: "tutoyer vs. vouvoyer", back: "tu = familiar/intimate; vous = formal/respectful/plural" }
    ];

    main.innerHTML = `
      <div class="practice-head">
        <h1>Active Recall Practice</h1>
        <p>Strengthen retention through spaced retrieval. Tap any flashcard to flip it and test your memory before checking the answer.</p>
        <div class="queue-note">
          <span>Completed curriculum topics: <b>${completedIds.length}</b></span>
        </div>
      </div>

      <div class="flash-grid" id="flashGrid"></div>
      <footer class="foot">Spaced repetition and active retrieval practice maximize long-term vocabulary and grammar consolidation.</footer>
    `;

    const grid = document.getElementById("flashGrid");
    cards.forEach(c => {
      const el = document.createElement("div");
      el.className = "flash";
      el.innerHTML = `
        <div class="front">${c.front}</div>
        <div class="back">${c.back}</div>
        <div class="hint">Tap to flip</div>
      `;
      el.addEventListener("click", () => el.classList.toggle("flipped"));
      grid.appendChild(el);
    });
  }

  function renderSidebar() {
    const progress = window.Progress.loadProgress(localStorage);
    const [, currentTopicId] = currentRoute();
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = `<div class="side-title">Curriculum</div>`;

    window.MODULES.forEach(mod => {
      const topics = topicsForModule(mod.id);
      const done = window.Progress.countCompleted(topics, progress);
      const isCurrentMod = topics.some(t => t.id === currentTopicId);

      const wrap = document.createElement("div");
      wrap.className = "mod" + (isCurrentMod || mod.id === "grammar" || mod.id === "vocabulary" ? " open" : "");
      
      const head = document.createElement("button");
      head.className = "mod-head";
      head.innerHTML = `
        ${ICONS[mod.icon] || ""}
        <span>${mod.name}</span>
        <span class="mod-frac">${topics.length ? `${done}/${topics.length}` : "—"}</span>
        ${topics.length ? chevIcon : ""}
      `;
      wrap.appendChild(head);

      const body = document.createElement("div");
      body.className = "mod-body";
      if (!isCurrentMod && mod.id !== "grammar" && mod.id !== "vocabulary") {
        body.hidden = true;
      }

      if (topics.length) {
        const byLevel = {};
        topics.forEach(t => {
          (byLevel[t.level] = byLevel[t.level] || []).push(t);
        });

        Object.keys(byLevel).forEach(level => {
          const block = document.createElement("div");
          block.className = "lvl-block";
          const levelDone = byLevel[level].filter(t => Boolean(progress.completed[t.id])).length;
          block.innerHTML = `<div class="lvl-head">${level} <span>${levelDone}/${byLevel[level].length}</span></div>`;

          byLevel[level].forEach(t => {
            const unlocked = window.Progress.isUnlocked(t, progress);
            const isDone = Boolean(progress.completed[t.id]);
            const isCurrent = t.id === currentTopicId;

            const btn = document.createElement("button");
            btn.className = "topic-item " + (isDone ? "done" : isCurrent ? "current" : unlocked ? "" : "locked");
            btn.innerHTML = `
              <span class="dot">${isDone ? checkIcon : isCurrent ? dotIcon : unlocked ? "" : lockIcon}</span>
              <span>${t.title}</span>
            `;
            if (unlocked) {
              btn.addEventListener("click", () => {
                location.hash = `#/${mod.id}/${t.id}`;
              });
            } else {
              btn.disabled = true;
            }
            block.appendChild(btn);
          });
          body.appendChild(block);
        });
      } else {
        const stub = document.createElement("div");
        stub.style.padding = "8px 10px";
        stub.style.fontSize = "0.78rem";
        stub.style.color = "var(--ink-soft)";
        stub.textContent = "Module locked — planned for future release.";
        body.appendChild(stub);
      }

      head.addEventListener("click", () => {
        if (!topics.length) return;
        wrap.classList.toggle("open");
        body.hidden = !wrap.classList.contains("open");
      });

      sidebar.appendChild(wrap);
      sidebar.appendChild(body);
    });

    const stat = document.createElement("div");
    stat.className = "stat-card";
    const totalDone = Object.keys(progress.completed).length;
    stat.innerHTML = `
      <div class="stat-row"><span class="k">Completed Topics</span><span class="v">${totalDone} / 24</span></div>
      <div class="stat-row"><span class="k">Active Streak</span><span class="v">1 day</span></div>
    `;
    sidebar.appendChild(stat);
  }

  function renderHeader() {
    const header = document.getElementById("header");
    header.innerHTML = `
      <div class="brand" id="brandBtn">
        <div class="brand-mark">A</div>
        <div class="brand-name">Apprendre.io</div>
      </div>
      <div class="header-nav">
        <button class="on" id="navLearn">Learn</button>
        <button id="navPractice">Practice</button>
      </div>
      <div class="header-right">
        <span class="lang-note">Site: English · Content: French</span>
        <button class="theme-btn" id="themeBtn" aria-label="Toggle light/dark theme">${moonIcon}</button>
      </div>
    `;

    document.getElementById("brandBtn").addEventListener("click", () => {
      location.hash = "#/overview";
    });
    document.getElementById("navLearn").addEventListener("click", () => {
      location.hash = "#/overview";
    });
    document.getElementById("navPractice").addEventListener("click", () => {
      location.hash = "#/practice";
    });
    document.getElementById("themeBtn").addEventListener("click", toggleTheme);

    applyTheme(getStoredTheme());
  }

  const THEME_KEY = "apprendre-io:theme";
  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
    const themeBtn = document.getElementById("themeBtn");
    if (themeBtn) {
      const isDark = (t === "dark") || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches);
      themeBtn.innerHTML = isDark ? sunIcon : moonIcon;
    }
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* no-op */ }
    applyTheme(next);
  }

  function currentRoute() {
    const h = location.hash.replace(/^#\/?/, "");
    return h ? h.split("/") : [];
  }

  function updateNavState() {
    const [route] = currentRoute();
    const navLearn = document.getElementById("navLearn");
    const navPractice = document.getElementById("navPractice");
    if (!navLearn || !navPractice) return;

    if (route === "practice") {
      navPractice.classList.add("on");
      navLearn.classList.remove("on");
    } else {
      navLearn.classList.add("on");
      navPractice.classList.remove("on");
    }
  }

  function render() {
    renderSidebar();
    updateNavState();
    const [moduleId, topicId] = currentRoute();

    if (moduleId === "practice") {
      renderPractice();
    } else if (topicId && window.TOPICS && window.TOPICS[topicId]) {
      renderLesson(window.TOPICS[topicId]);
    } else {
      renderOverview();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.render = render;

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    render();
  });
})();
