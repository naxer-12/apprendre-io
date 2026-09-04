(function () {
  const ICONS = {
    vocab: '<svg viewBox="0 0 24 24" width="16" height="16"><rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 10.5h8M8 14h5" stroke="currentColor" stroke-width="1.4"/></svg>',
    grammar: '<svg viewBox="0 0 24 24" width="16" height="16"><rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 10h16M4 15h16M10 4v16M15 4v16" stroke="currentColor" stroke-width="1.2"/></svg>',
    reading: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 5c3-1.5 6-1.5 8 0v14c-2-1.5-5-1.5-8 0V5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 5c-3-1.5-6-1.5-8 0v14c2-1.5 5-1.5 8 0V5z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    writing: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M14 7l3 3" stroke="currentColor" stroke-width="1.6"/></svg>',
    speaking: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 5h16v11H9l-4 4v-4H4V5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 9h8M8 12h5" stroke="currentColor" stroke-width="1.4"/></svg>',
    listening: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 14v-2a8 8 0 0116 0v2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="4.5" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="16.5" y="14" width="4.5" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'
  };

  const speakIcon = '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 9.5a4 4 0 010 5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';
  const checkIcon = '<svg viewBox="0 0 24 24"><path d="M4 8l3 3 5-6" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const lockIcon = '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  const dotIcon = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>';
  const chevIcon = '<svg class="chev" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const LEVEL_KEY = 'apprendre-io:user-level';
  const THEME_KEY = 'apprendre-io:theme';

  function getUserLevel() {
    try {
      return localStorage.getItem(LEVEL_KEY) || 'beginner';
    } catch (e) {
      return 'beginner';
    }
  }

  function setUserLevel(lvl) {
    try {
      localStorage.setItem(LEVEL_KEY, lvl);
    } catch (e) {}
    render();
  }
  window.setUserLevel = setUserLevel;

  function speak(text) {
    try {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {}
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

  function getLevelLabel(levelCode) {
    if (levelCode === 'beginner') return 'Beginner (A1 → A2)';
    if (levelCode === 'intermediate') return 'Intermediate (A2 → B1)';
    if (levelCode === 'expert') return 'Expert (B2 → C1)';
    return 'Beginner (A1 → A2)';
  }

  function filterTopicsByLevel(topics, userLevel) {
    if (userLevel === 'beginner') {
      return topics.filter(t => t.level === 'A1' || t.level === 'A2');
    } else if (userLevel === 'intermediate') {
      return topics.filter(t => t.level === 'A2' || t.level === 'B1');
    } else if (userLevel === 'expert') {
      return topics.filter(t => t.level === 'B1' || t.level === 'B2-C1');
    }
    return topics;
  }

  function renderCardGrid(items) {
    return '<div class="tile-grid">' + items.map(it => `
      <div class="tile ${it.tag === 'accent' ? 'tag-accent' : ''}">
        <div class="tile-dot"></div>
        <div class="tile-big">${it.display}</div>
        <div class="tile-gloss">${it.gloss || ''}</div>
        <div class="tile-ipa">${it.ipa || ''}</div>
        <button class="speak-btn" onclick="speak(${JSON.stringify(it.speak || it.display)})" aria-label="Play ${it.display}">${speakIcon}</button>
      </div>`).join('') + '</div>';
  }

  function renderTable(t) {
    if (!t) return '';
    const caption = t.caption ? `<caption>${t.caption}</caption>` : '';
    const head = '<tr>' + (t.columns || []).map(c => `<th>${c}</th>`).join('') + '</tr>';
    const body = (t.rows || []).map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('');
    return `<div class="table-wrap"><table class="ref-table">${caption}<thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  function renderVisual(topic) {
    if (!topic || !topic.visual) return '';
    if (topic.visual.kind === 'card-grid') return renderCardGrid(topic.visual.data);
    if (topic.visual.kind === 'table') return renderTable(topic.visual.data);
    return '';
  }

  function renderRefGrid(items) {
    if (!items || !items.length) return '';
    return '<div class="ref-grid">' + items.map(r => {
      const inner = `<b>${r.title}</b><span>${r.note || ''}</span>`;
      return r.url
        ? `<a class="ref-card" href="${r.url}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="ref-card">${inner}</div>`;
    }).join('') + '</div>';
  }

  function renderVideoEmbed(video) {
    if (!video || !video.embedUrl) return '';
    return `
      <div class="video-section">
        <div class="video-card">
          <div class="video-header">
            <div class="video-title">Featured Video: ${video.title}</div>
            <div class="video-channel">${video.channel}</div>
          </div>
          <div class="video-wrapper">
            <iframe src="${video.embedUrl}" title="${video.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="video-note">${video.note || ''}</div>
        </div>
      </div>
    `;
  }

  function renderQuiz(topic, onGraded) {
    const qs = topic.test.questions;
    let answered = 0, correct = 0;
    const el = document.createElement('div');
    el.className = 'quiz-card';
    el.innerHTML = qs.map((item, i) => `
      <div style="margin-bottom:18px">
        <div class="quiz-q">${i + 1}. ${item.q}</div>
        <div class="quiz-opts">${item.opts.map(o => `<button class="opt" data-q="${i}" data-val="${o}">${o}</button>`).join('')}</div>
      </div>`).join('') + `
      <div class="quiz-footer">
        <div class="score mono">Score: <span class="scoreVal">0</span>/${qs.length}</div>
        <button class="btn ghost resetBtn">Retry</button>
      </div>
      <div class="gate gateMsg">Answer all ${qs.length} questions to pass this topic and unlock the next.</div>`;

    const scoreEl = el.querySelector('.scoreVal');
    const gateEl = el.querySelector('.gateMsg');

    function reset() {
      answered = 0; correct = 0; scoreEl.textContent = '0';
      gateEl.textContent = `Answer all ${qs.length} questions to pass this topic and unlock the next.`;
      gateEl.classList.remove('unlocked');
      el.querySelectorAll('.opt').forEach(b => {
        b.disabled = false;
        b.classList.remove('correct', 'wrong');
      });
    }
    el.querySelector('.resetBtn').addEventListener('click', reset);

    el.addEventListener('click', (e) => {
      const btn = e.target.closest('.opt');
      if (!btn || btn.disabled) return;
      const qi = Number(btn.dataset.q);
      const correctAns = qs[qi].a;
      el.querySelectorAll(`.opt[data-q="${qi}"]`).forEach(b => {
        b.disabled = true;
        if (b.dataset.val === correctAns) b.classList.add('correct');
        else if (b === btn) b.classList.add('wrong');
      });
      answered++;
      if (btn.dataset.val === correctAns) correct++;
      scoreEl.textContent = String(correct);
      if (answered === qs.length) {
        const passed = correct >= topic.test.passScore;
        if (passed) {
          gateEl.textContent = `Passed! Unlocked the next step — score ${correct}/${qs.length}.`;
          gateEl.classList.add('unlocked');
        } else {
          gateEl.textContent = `Score ${correct}/${qs.length} — need ${topic.test.passScore}/${qs.length} to pass and unlock the next topic. Try again.`;
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

    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="crumb">${mod.name.toUpperCase()} · ${topic.level} · TOPIC ${idx + 1} OF ${modTopics.length}</div>
      <h1 class="lesson-title">${topic.title}</h1>
      <p class="lesson-sub">Pass this topic's short test with ${topic.test.passScore}/${topic.test.questions.length} or higher to unlock the next topic.</p>
      
      <div class="stage">
        <div class="stage-kicker">1 · Visual Reference</div>
        <h2>Visual guide &amp; key forms</h2>
        <div id="visualMount"></div>
      </div>
      
      <div class="stage">
        <div class="stage-kicker">2 · Content &amp; Rules</div>
        <h2>Core learning</h2>
        <p class="stage-desc">${topic.content.intro}</p>
        ${(topic.content.tables || []).map(renderTable).join('')}
        ${topic.content.example ? `<p class="stage-desc"><strong>In-context example:</strong> <em>${topic.content.example.fr}</em> — ${topic.content.example.en}</p>` : ''}
        ${(topic.content.callouts || []).map(c => `
          <div class="callout" style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-top:16px;">
            <h3 style="margin:0 0 6px;">${c.label}</h3>
            <p style="margin:0;color:var(--ink-soft);line-height:1.5;">${c.body}${c.cite ? ` — <cite style="font-weight:700;color:var(--accent);">${c.cite}</cite>` : ''}</p>
          </div>`).join('')}
      </div>

      <div class="stage">
        <div class="stage-kicker">3 · Short Test</div>
        <h2>Check your knowledge</h2>
        <p class="stage-desc">${topic.test.questions.length} questions. Score ${topic.test.passScore}/${topic.test.questions.length} to pass.</p>
        <div id="quizMount"></div>
      </div>

      <div class="stage">
        <div class="stage-kicker">4 · Reference &amp; Video</div>
        <h2>Watch, listen &amp; read</h2>
        ${topic.reference && topic.reference.video ? renderVideoEmbed(topic.reference.video) : ''}
        ${topic.reference && topic.reference.read && topic.reference.read.length ? `<div class="section-label">Reading references</div>${renderRefGrid(topic.reference.read)}` : ''}
        ${topic.reference && topic.reference.watchListen && topic.reference.watchListen.length ? `<div class="section-label">External resources</div>${renderRefGrid(topic.reference.watchListen)}` : ''}
      </div>

      <div class="prevnext">
        <button class="pn-btn" ${prev ? '' : 'disabled'} id="prevBtn">
          <div class="lbl">← Previous Topic</div>
          <div class="t">${prev ? prev.title : '—'}</div>
        </button>
        <button class="pn-btn" ${next && window.Progress.isUnlocked(next, progress) ? '' : 'disabled'} id="nextBtn">
          <div class="lbl">Next Topic →</div>
          <div class="t">${next ? next.title : '—'}</div>
        </button>
      </div>
      <footer class="foot">Apprendre.io — French language learning platform.</footer>
    `;

    document.getElementById('visualMount').appendChild(strToNode(renderVisual(topic)));
    document.getElementById('quizMount').appendChild(renderQuiz(topic, (score) => {
      window.Progress.recordScore(localStorage, topic, score);
      renderSidebar();
      const updatedProgress = window.Progress.loadProgress(localStorage);
      const nextBtn = document.getElementById('nextBtn');
      if (next && nextBtn && window.Progress.isUnlocked(next, updatedProgress)) {
        nextBtn.disabled = false;
      }
    }));

    if (prev) {
      document.getElementById('prevBtn').addEventListener('click', () => {
        location.hash = `#/${prev.module}/${prev.id}`;
      });
    }
    if (next) {
      document.getElementById('nextBtn').addEventListener('click', () => {
        if (!document.getElementById('nextBtn').disabled) {
          location.hash = `#/${next.module}/${next.id}`;
        }
      });
    }
  }

  function strToNode(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild || div;
  }

  function renderOverview() {
    const progress = window.Progress.loadProgress(localStorage);
    const userLevel = getUserLevel();
    const main = document.getElementById('main');

    const all = allTopics();
    const levelTopics = filterTopicsByLevel(all, userLevel);
    const completedInLevel = levelTopics.filter(t => Boolean(progress.completed[t.id])).length;

    main.innerHTML = `
      <div class="hero">
        <h1>Learn French systematically from beginner to expert</h1>
        <p>Pick a curriculum level below or explore modules in the sidebar. Each topic includes clear visual references, core explanations, an embedded video lesson, and a short test that gates your progression.</p>
        
        <div class="hero-level-box">
          <div>
            <h3>Active Pathway: <span style="color:var(--accent);">${getLevelLabel(userLevel)}</span></h3>
            <p>Your modules and progress are tailored to this proficiency tier. Pass tests to advance sequentially.</p>
          </div>
          <div class="level-picker">
            <button class="lvl-btn ${userLevel === 'beginner' ? 'active' : ''}" data-lvl="beginner">Beginner</button>
            <button class="lvl-btn ${userLevel === 'intermediate' ? 'active' : ''}" data-lvl="intermediate">Intermediate</button>
            <button class="lvl-btn ${userLevel === 'expert' ? 'active' : ''}" data-lvl="expert">Expert</button>
          </div>
        </div>

        <div class="cta-row">
          <button class="btn" id="startGrammarBtn">Start Grammar Course</button>
          <button class="btn ghost" id="startVocabBtn">Start Vocabulary</button>
          <button class="btn ghost" id="practiceQuickBtn">Practice Flashcards</button>
        </div>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:40px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-size:1.4rem;">Curriculum Modules (${getLevelLabel(userLevel)})</h2>
        <div style="font-family:'IBM Plex Mono';font-size:0.85rem;color:var(--ink-soft);font-weight:700;">
          Pathway Completion: ${completedInLevel} / ${levelTopics.length} topics
        </div>
      </div>

      <div class="module-grid" id="moduleGrid"></div>
      <footer class="foot">Apprendre.io — Built for mastery. No build step, no accounts required; your progress stays in your browser.</footer>
    `;

    main.querySelectorAll('.lvl-btn').forEach(b => {
      b.addEventListener('click', () => {
        setUserLevel(b.dataset.lvl);
      });
    });

    document.getElementById('startGrammarBtn').addEventListener('click', () => {
      if (userLevel === 'expert') location.hash = '#/grammar/b2c1-present-subjunctive';
      else if (userLevel === 'intermediate') location.hash = '#/grammar/b1-futur-simple';
      else location.hash = '#/grammar/a1-articles';
    });
    document.getElementById('startVocabBtn').addEventListener('click', () => {
      location.hash = '#/vocabulary/a1-alphabet';
    });
    document.getElementById('practiceQuickBtn').addEventListener('click', () => {
      location.hash = '#/practice';
    });

    const grid = document.getElementById('moduleGrid');
    window.MODULES.forEach(mod => {
      const allModTopics = topicsForModule(mod.id);
      const scopedTopics = filterTopicsByLevel(allModTopics, userLevel);
      const displayTopics = scopedTopics.length ? scopedTopics : allModTopics;
      const done = displayTopics.filter(t => Boolean(progress.completed[t.id])).length;

      const card = document.createElement('button');
      card.className = 'module-card';
      card.innerHTML = `
        <div class="top">
          <div class="ico">${ICONS[mod.icon] || ''}</div>
          <span class="frac">${displayTopics.length ? `${done}/${displayTopics.length}` : '0/0'}</span>
        </div>
        <b>${mod.name}</b>
        <div class="sub">${mod.description}</div>
      `;
      card.addEventListener('click', () => {
        if (!displayTopics.length) return;
        const first = displayTopics.find(t => !progress.completed[t.id]) || displayTopics[0];
        location.hash = `#/${mod.id}/${first.id}`;
      });
      grid.appendChild(card);
    });
  }

  function renderPractice() {
    const progress = window.Progress.loadProgress(localStorage);
    const completedIds = Object.keys(progress.completed);
    const main = document.getElementById('main');

    const cards = [
      { front: 'Bonjour', back: 'Hello / Good day [bon-zhoor]' },
      { front: 'Merci beaucoup', back: 'Thank you very much [mair-see boh-koo]' },
      { front: "S'il vous plaît", back: 'Please (formal) [seel voo pleh]' },
      { front: 'le café / la table', back: 'Definite articles (le = masc, la = fem)' },
      { front: 'du pain / de la salade', back: 'Partitive articles (some / unspecified quantity)' },
      { front: 'qui vs. que', back: 'qui = subject (follows noun), que = direct object' },
      { front: 'Passé Composé (avoir)', back: 'avoir (present) + past participle (-é, -i, -u)' },
      { front: 'DR & MRS VANDERTRAMP', back: 'Motion/state verbs using ÊTRE with subject agreement' },
      { front: 'Imparfait', back: 'nous-form without -ons + -ais, -ais, -ait, -ions, -iez, -aient' },
      { front: 'Futur Simple', back: 'Infinitive + -ai, -as, -a, -ons, -ez, -ont' },
      { front: 'Conditionnel Présent', back: 'Future stem + Imparfait endings (politeness & hypotheses)' },
      { front: 'Plus-que-parfait', back: 'Imparfait of avoir/être + past participle (had done)' },
      { front: 'COD vs. COI', back: 'COD: le/la/les (direct). COI: lui/leur (indirect: to him/her/them)' },
      { front: 'dont & où', back: "dont = object of 'de'; où = place or moment in time" },
      { front: 'Subjonctif Présent', back: 'ils-stem + -e, -es, -e, -ions, -iez, -ent (expresses necessity/doubt)' },
      { front: 'Tu vs. Vous', back: 'Tu = informal/close; Vous = formal/polite/strangers/plural' }
    ];

    main.innerHTML = `
      <div class="practice-head">
        <h1>Active Recall Practice</h1>
        <p>Flip flashcards to test your knowledge of essential vocabulary, verb tenses, and grammatical structures. Active recall strengthens long-term neural consolidation.</p>
        <div class="queue-note">
          <span>Completed curriculum topics: <b>${completedIds.length} / 28</b></span>
        </div>
      </div>

      <div class="flash-grid" id="flashGrid"></div>
      <footer class="foot">Apprendre.io — Active retrieval practice. Tap any card to flip and verify your recall.</footer>
    `;

    const grid = document.getElementById('flashGrid');
    cards.forEach(c => {
      const el = document.createElement('div');
      el.className = 'flash';
      el.innerHTML = `
        <div class="front">${c.front}</div>
        <div class="back">${c.back}</div>
        <div class="hint">Tap to flip</div>
      `;
      el.addEventListener('click', () => el.classList.toggle('flipped'));
      grid.appendChild(el);
    });
  }

  function renderSidebar() {
    const progress = window.Progress.loadProgress(localStorage);
    const userLevel = getUserLevel();
    const [, currentTopicId] = currentRoute();
    const sidebar = document.getElementById('sidebar');
    
    sidebar.innerHTML = `
      <div class="side-title">
        <span>Curriculum</span>
        <span class="level-badge">${userLevel.toUpperCase()}</span>
      </div>
    `;

    window.MODULES.forEach(mod => {
      const allModTopics = topicsForModule(mod.id);
      const scopedTopics = filterTopicsByLevel(allModTopics, userLevel);
      const displayTopics = scopedTopics.length ? scopedTopics : allModTopics;
      const done = displayTopics.filter(t => Boolean(progress.completed[t.id])).length;
      const isCurrentMod = displayTopics.some(t => t.id === currentTopicId);

      const wrap = document.createElement('div');
      wrap.className = 'mod' + (isCurrentMod || mod.id === 'grammar' || mod.id === 'vocabulary' ? ' open' : '');
      
      const head = document.createElement('button');
      head.className = 'mod-head';
      head.innerHTML = `
        ${ICONS[mod.icon] || ''}
        <span>${mod.name}</span>
        <span class="mod-frac">${displayTopics.length ? `${done}/${displayTopics.length}` : '—'}</span>
        ${displayTopics.length ? chevIcon : ''}
      `;
      wrap.appendChild(head);

      const body = document.createElement('div');
      body.className = 'mod-body';
      if (!isCurrentMod && mod.id !== 'grammar' && mod.id !== 'vocabulary') {
        body.hidden = true;
      }

      if (displayTopics.length) {
        const byLevel = {};
        displayTopics.forEach(t => {
          (byLevel[t.level] = byLevel[t.level] || []).push(t);
        });

        Object.keys(byLevel).forEach(level => {
          const block = document.createElement('div');
          block.className = 'lvl-block';
          const levelDone = byLevel[level].filter(t => Boolean(progress.completed[t.id])).length;
          block.innerHTML = `<div class="lvl-head">${level} <span>${levelDone}/${byLevel[level].length}</span></div>`;

          byLevel[level].forEach(t => {
            const unlocked = window.Progress.isUnlocked(t, progress);
            const isDone = Boolean(progress.completed[t.id]);
            const isCurrent = t.id === currentTopicId;

            const btn = document.createElement('button');
            btn.className = 'topic-item ' + (isDone ? 'done' : isCurrent ? 'current' : unlocked ? '' : 'locked');
            btn.innerHTML = `
              <span class="dot">${isDone ? checkIcon : isCurrent ? dotIcon : unlocked ? '' : lockIcon}</span>
              <span>${t.title}</span>
            `;
            if (unlocked) {
              btn.addEventListener('click', () => {
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
        const stub = document.createElement('div');
        stub.style.padding = '8px 10px';
        stub.style.fontSize = '0.78rem';
        stub.style.color = 'var(--ink-soft)';
        stub.textContent = 'No topics in this level.';
        body.appendChild(stub);
      }

      head.addEventListener('click', () => {
        if (!displayTopics.length) return;
        wrap.classList.toggle('open');
        body.hidden = !wrap.classList.contains('open');
      });

      sidebar.appendChild(wrap);
      sidebar.appendChild(body);
    });

    const stat = document.createElement('div');
    stat.className = 'stat-card';
    const totalDone = Object.keys(progress.completed).length;
    stat.innerHTML = `
      <div class="stat-row"><span class="k">Completed Topics</span><span class="v">${totalDone} / 28</span></div>
      <div class="stat-row"><span class="k">Curriculum Track</span><span class="v">${userLevel.toUpperCase()}</span></div>
    `;
    sidebar.appendChild(stat);
  }

  function renderHeader() {
    const userLevel = getUserLevel();
    const currentTheme = getStoredTheme() || 'light';
    const header = document.getElementById('header');
    
    header.innerHTML = `
      <div class="brand" id="brandBtn">
        <div class="brand-mark">A</div>
        <div class="brand-name">Apprendre.io</div>
      </div>
      
      <div class="header-nav">
        <button class="nav-tab on" id="navLearn">Learn</button>
        <button class="nav-tab" id="navPractice">Practice</button>
      </div>

      <div class="header-right">
        <div class="level-picker">
          <button class="lvl-btn ${userLevel === 'beginner' ? 'active' : ''}" data-lvl="beginner" title="Beginner: A1 to A2">Beginner</button>
          <button class="lvl-btn ${userLevel === 'intermediate' ? 'active' : ''}" data-lvl="intermediate" title="Intermediate: A2 to B1">Intermediate</button>
          <button class="lvl-btn ${userLevel === 'expert' ? 'active' : ''}" data-lvl="expert" title="Expert: B2 to C1">Expert</button>
        </div>

        <div class="theme-selector-wrap">
          <select class="theme-select" id="themeSelect" aria-label="Select theme">
            <option value="light" ${currentTheme === 'light' ? 'selected' : ''}>Light</option>
            <option value="dark" ${currentTheme === 'dark' ? 'selected' : ''}>Dark</option>
            <option value="sepia" ${currentTheme === 'sepia' ? 'selected' : ''}>Sepia</option>
            <option value="nordic" ${currentTheme === 'nordic' ? 'selected' : ''}>Nordic</option>
            <option value="matcha" ${currentTheme === 'matcha' ? 'selected' : ''}>Matcha</option>
          </select>
        </div>
      </div>
    `;

    document.getElementById('brandBtn').addEventListener('click', () => {
      location.hash = '#/overview';
    });
    document.getElementById('navLearn').addEventListener('click', () => {
      location.hash = '#/overview';
    });
    document.getElementById('navPractice').addEventListener('click', () => {
      location.hash = '#/practice';
    });

    header.querySelectorAll('.lvl-btn').forEach(b => {
      b.addEventListener('click', () => {
        setUserLevel(b.dataset.lvl);
      });
    });

    const themeSelect = document.getElementById('themeSelect');
    themeSelect.addEventListener('change', (e) => {
      setTheme(e.target.value);
    });

    applyTheme(currentTheme);
  }

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function setTheme(t) {
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    applyTheme(t);
  }
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }

  function currentRoute() {
    const h = location.hash.replace(/^#\/?/, '');
    return h ? h.split('/') : [];
  }

  function updateNavState() {
    const [route] = currentRoute();
    const navLearn = document.getElementById('navLearn');
    const navPractice = document.getElementById('navPractice');
    if (!navLearn || !navPractice) return;

    if (route === 'practice') {
      navPractice.classList.add('on');
      navLearn.classList.remove('on');
    } else {
      navLearn.classList.add('on');
      navPractice.classList.remove('on');
    }
  }

  function render() {
    renderHeader();
    renderSidebar();
    updateNavState();
    const [moduleId, topicId] = currentRoute();

    if (moduleId === 'practice') {
      renderPractice();
    } else if (topicId && window.TOPICS && window.TOPICS[topicId]) {
      renderLesson(window.TOPICS[topicId]);
    } else {
      renderOverview();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.render = render;

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', () => {
    render();
  });
})();
