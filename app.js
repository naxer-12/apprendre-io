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
  const flameIcon = '<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2c1 3-2 4-2 7a3 3 0 0 0 6 0c1 1 2 3 2 5a6 6 0 1 1-12 0c0-4 3-6 4-9 .5-1.5.7-2.3 2-3z"/></svg>';

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

  let cachedVoices = [];
  function loadVoices() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    }
  }
  loadVoices();
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  function getFrenchVoice() {
    if (!cachedVoices.length) loadVoices();
    return (
      cachedVoices.find(v => v.lang === 'fr-FR' && (v.name.includes('Google') || v.name.includes('Thomas') || v.name.includes('Amélie') || v.name.includes('Audrey') || v.name.includes('Natural') || v.name.includes('Siri'))) ||
      cachedVoices.find(v => v.lang === 'fr-FR') ||
      cachedVoices.find(v => v.lang && v.lang.toLowerCase().startsWith('fr')) ||
      null
    );
  }

  function speak(text, btnElement) {
    if (!text || typeof window === 'undefined') return;
    try {
      if (!('speechSynthesis' in window)) return;
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      window.speechSynthesis.cancel();

      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.88;
      u.pitch = 1.0;

      const voice = getFrenchVoice();
      if (voice) u.voice = voice;

      if (btnElement && btnElement.classList) {
        btnElement.classList.add('speaking');
        u.onend = () => btnElement.classList.remove('speaking');
        u.onerror = () => btnElement.classList.remove('speaking');
      }

      window.speechSynthesis.speak(u);
    } catch (e) {
      if (btnElement && btnElement.classList) {
        btnElement.classList.remove('speaking');
      }
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
        <button class="speak-btn" onclick="speak(${JSON.stringify(it.speak || it.display)}, this)" aria-label="Listen to pronunciation of ${it.display}" title="Pronounce">${speakIcon}</button>
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

  function extractYouTubeId(url) {
    if (!url) return '';
    const m = String(url).match(/(?:embed\/|v=|vi\/|youtu\.be\/|\/v\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : '';
  }

  function renderVideoCard(video) {
    if (!video || !video.watchUrl) return '';
    const watchUrl = video.watchUrl;
    const channel = video.channel || 'YouTube';
    const title = video.title || 'Video Lesson';

    return `
      <div class="video-section">
        <a class="video-link-card" href="${watchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${title} on YouTube">
          <div class="video-card-icon-wrap">
            <div class="video-card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"/>
              </svg>
            </div>
          </div>
          <div class="video-card-content">
            <div class="video-card-meta">
              <span class="video-channel-pill">${channel}</span>
              <span class="video-type-label">Video Lesson</span>
            </div>
            <h3 class="video-card-title">${title}</h3>
            ${video.note ? `<p class="video-card-desc">${video.note}</p>` : ''}
          </div>
          <div class="video-card-cta">
            <span class="video-cta-btn">
              <span>Watch on YouTube</span>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>
      </div>
    `;
  }

  function renderWorksheetCard(worksheet, topicId) {
    if (!worksheet || !worksheet.exercises || !worksheet.exercises.length) return '';
    return `
      <a class="worksheet-link-card" href="#/worksheet/${topicId}" aria-label="Open practice worksheet: ${worksheet.title}">
        <div class="worksheet-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="8" y1="13" x2="16" y2="13"></line>
            <line x1="8" y1="17" x2="13" y2="17"></line>
          </svg>
        </div>
        <div class="worksheet-card-content">
          <span class="worksheet-card-label">Practice worksheet</span>
          <h3 class="worksheet-card-title">${worksheet.title}</h3>
          ${worksheet.subtitle ? `<p class="worksheet-card-desc">${worksheet.subtitle}</p>` : ''}
        </div>
        <span class="worksheet-cta-btn">Open worksheet →</span>
      </a>
    `;
  }

  function renderWorksheet(topic) {
    const worksheet = topic.reference && topic.reference.worksheet;
    const main = document.getElementById('main');
    if (!worksheet) {
      location.hash = `#/${topic.module}/${topic.id}`;
      return;
    }

    main.innerHTML = `
      <a class="worksheet-back" href="#/${topic.module}/${topic.id}">← Back to ${topic.title}</a>
      <div class="crumb">PRACTICE WORKSHEET</div>
      <h1 class="lesson-title">${worksheet.title}</h1>
      ${worksheet.subtitle ? `<p class="lesson-sub worksheet-subtitle">${worksheet.subtitle}</p>` : ''}
      ${worksheet.intro ? `<p class="stage-desc worksheet-intro">${worksheet.intro}</p>` : ''}

      <ol class="worksheet-exercise-list">
        ${worksheet.exercises.map(ex => `<li>${ex.q}</li>`).join('')}
      </ol>

      <div class="worksheet-answer-key">
        <button class="btn ghost" id="toggleAnswerKey">Show answer key</button>
        <ol class="worksheet-answer-list" id="answerList" hidden>
          ${worksheet.exercises.map(ex => `<li>${ex.answer}</li>`).join('')}
        </ol>
      </div>

      <footer class="foot">Original practice material written for this course — not an external download.</footer>
    `;

    document.getElementById('toggleAnswerKey').addEventListener('click', (e) => {
      const list = document.getElementById('answerList');
      list.hidden = !list.hidden;
      e.target.textContent = list.hidden ? 'Show answer key' : 'Hide answer key';
    });
  }

  function scrollToReference(e) {
    if (e && e.preventDefault) e.preventDefault();
    const refStage = document.getElementById('stage-reference');
    if (refStage) {
      refStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
      refStage.classList.add('highlight-pulse');
      setTimeout(() => refStage.classList.remove('highlight-pulse'), 1600);
    }
  }
  window.scrollToReference = scrollToReference;

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
        ${topic.content.example ? `
          <div class="example-box">
            <span class="example-tag">In-context example:</span>
            <span class="example-fr">${topic.content.example.fr}</span>
            <button class="speak-btn mini" onclick="speak(${JSON.stringify(topic.content.example.fr)}, this)" aria-label="Listen to example sentence" title="Pronounce">${speakIcon}</button>
            <span class="example-en">— ${topic.content.example.en}</span>
          </div>` : ''}
        ${(topic.content.callouts || []).map(c => `
          <div class="callout" style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;margin-top:16px;">
            <h3 style="margin:0 0 6px;">${c.label}</h3>
            <p style="margin:0;color:var(--ink-soft);line-height:1.5;">${c.body}${c.cite ? ` — <cite style="font-weight:700;color:var(--accent);">${c.cite}</cite>` : ''}</p>
          </div>`).join('')}
        
        <div class="deep-dive-card">
          <div class="deep-dive-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          </div>
          <div class="deep-dive-text">
            <span class="deep-dive-label">Looking for greater depth?</span>
            <span class="deep-dive-desc">The content above covers the core essentials. Discover <a href="#stage-reference" class="deep-dive-link" onclick="scrollToReference(event)">where you can get more details for further topic and study ↓</a></span>
          </div>
        </div>
      </div>

      <div class="stage">
        <div class="stage-kicker">3 · Short Test</div>
        <h2>Check your knowledge</h2>
        <p class="stage-desc">${topic.test.questions.length} questions. Score ${topic.test.passScore}/${topic.test.questions.length} to pass.</p>
        <div id="quizMount"></div>
        ${topic.reference && topic.reference.worksheet ? renderWorksheetCard(topic.reference.worksheet, topic.id) : ''}
      </div>

      <div class="stage" id="stage-reference">
        <div class="stage-kicker">4 · Reference &amp; Video</div>
        <h2>Watch, listen &amp; read</h2>
        ${topic.reference && topic.reference.video ? renderVideoCard(topic.reference.video) : ''}
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
      window.Progress.recordActivity(localStorage);
      renderSidebar();
      renderHeader();
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

  function renderStreakPanel(streak) {
    const days = [];
    const todayD = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(todayD);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      days.push({
        active: Boolean(streak.history[key]),
        isToday: i === 0,
        label: d.toLocaleDateString('en-US', { weekday: 'narrow' })
      });
    }
    return `
      <div class="streak-panel">
        <div class="streak-panel-head">
          <div class="streak-panel-count">${flameIcon}<span>${streak.current}</span><b>day${streak.current === 1 ? '' : 's'} streak</b></div>
          <div class="streak-panel-best">Longest streak: ${streak.longest} day${streak.longest === 1 ? '' : 's'}</div>
        </div>
        <div class="streak-strip">
          ${days.map(d => `
            <div class="streak-day ${d.active ? 'active' : ''} ${d.isToday ? 'is-today' : ''}" title="${d.active ? 'Practiced' : 'No activity'}">
              <span class="streak-day-label">${d.label}</span>
              <span class="streak-day-dot">${d.active ? flameIcon : ''}</span>
            </div>
          `).join('')}
        </div>
        <p class="streak-hint">Complete any topic's short test to keep your streak alive — even a retry counts.</p>
      </div>
    `;
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
        <p>You're on the <b style="color:var(--accent);">${getLevelLabel(userLevel)}</b> pathway — switch levels anytime from the header. Each topic includes clear visual references, core explanations, a curated video lesson card, and a short test that gates your progression.</p>

        <div class="cta-row">
          ${userLevel === 'beginner'
            ? `<button class="btn" id="startPathwayBtn">Start Learning</button>`
            : `<button class="btn" id="startGrammarBtn">Start Grammar Course</button>
               <button class="btn ghost" id="startVocabBtn">Start Vocabulary</button>`}
        </div>
      </div>

      ${renderStreakPanel(progress.streak)}

      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:40px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-size:1.4rem;">Curriculum Modules (${getLevelLabel(userLevel)})</h2>
        <div class="mono" style="font-size:0.85rem;color:var(--ink-soft);font-weight:700;">
          Pathway Completion: ${completedInLevel} / ${levelTopics.length} topics
        </div>
      </div>

      <div class="module-grid" id="moduleGrid"></div>
      <footer class="foot">Apprendre.io — Built for mastery. No build step, no server; your account and progress stay in this browser.</footer>
    `;

    if (userLevel === 'beginner') {
      document.getElementById('startPathwayBtn').addEventListener('click', () => {
        const firstTopicId = window.PATHWAYS.beginner[0].topics[0];
        const firstTopic = window.TOPICS[firstTopicId];
        location.hash = `#/${firstTopic.module}/${firstTopic.id}`;
      });
    } else {
      document.getElementById('startGrammarBtn').addEventListener('click', () => {
        location.hash = userLevel === 'expert' ? '#/grammar/b2c1-present-subjunctive' : '#/grammar/b1-futur-simple';
      });
      document.getElementById('startVocabBtn').addEventListener('click', () => {
        location.hash = '#/vocabulary/a1-alphabet';
      });
    }

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

  function makeTopicItemBtn(t, mod, progress, currentTopicId, extraLabel) {
    const unlocked = window.Progress.isUnlocked(t, progress);
    const isDone = Boolean(progress.completed[t.id]);
    const isCurrent = t.id === currentTopicId;

    const btn = document.createElement('button');
    btn.className = 'topic-item ' + (isDone ? 'done' : isCurrent ? 'current' : unlocked ? '' : 'locked');
    btn.innerHTML = `
      <span class="dot">${isDone ? checkIcon : isCurrent ? dotIcon : unlocked ? '' : lockIcon}</span>
      ${extraLabel ? `<span class="topic-mod-ico" title="${mod.name}">${ICONS[mod.icon] || ''}</span>` : ''}
      <span>${t.title}</span>
    `;
    if (unlocked) {
      btn.addEventListener('click', () => {
        location.hash = `#/${mod.id}/${t.id}`;
      });
    } else {
      btn.disabled = true;
    }
    return btn;
  }

  function renderModuleTreeSidebar(sidebar, userLevel, progress, currentTopicId) {
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
            block.appendChild(makeTopicItemBtn(t, mod, progress, currentTopicId, false));
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
  }

  function renderPathwaySidebar(sidebar, units, progress, currentTopicId) {
    const note = document.createElement('div');
    note.className = 'pathway-note';
    note.textContent = 'Recommended order — blends vocabulary, grammar & skills practice.';
    sidebar.appendChild(note);

    units.forEach((unit, ui) => {
      const unitTopics = unit.topics.map(id => window.TOPICS[id]).filter(Boolean);
      const done = unitTopics.filter(t => Boolean(progress.completed[t.id])).length;
      const isCurrentUnit = unitTopics.some(t => t.id === currentTopicId);

      const wrap = document.createElement('div');
      wrap.className = 'mod' + (isCurrentUnit || ui === 0 ? ' open' : '');

      const head = document.createElement('button');
      head.className = 'mod-head';
      head.title = unit.desc || '';
      head.innerHTML = `
        <span class="unit-num">${ui + 1}</span>
        <span>${unit.unit}</span>
        <span class="mod-frac">${done}/${unitTopics.length}</span>
        ${chevIcon}
      `;
      wrap.appendChild(head);

      const body = document.createElement('div');
      body.className = 'mod-body';
      if (!isCurrentUnit && ui !== 0) body.hidden = true;

      unitTopics.forEach(t => {
        const mod = window.MODULES.find(m => m.id === t.module) || { id: t.module, name: t.module, icon: '' };
        body.appendChild(makeTopicItemBtn(t, mod, progress, currentTopicId, true));
      });

      head.addEventListener('click', () => {
        wrap.classList.toggle('open');
        body.hidden = !wrap.classList.contains('open');
      });

      sidebar.appendChild(wrap);
      sidebar.appendChild(body);
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

    if (userLevel === 'beginner' && window.PATHWAYS && window.PATHWAYS.beginner) {
      renderPathwaySidebar(sidebar, window.PATHWAYS.beginner, progress, currentTopicId);
    } else {
      renderModuleTreeSidebar(sidebar, userLevel, progress, currentTopicId);
    }

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
    const session = window.Auth.getSession(localStorage);
    const streak = window.Progress.loadProgress(localStorage).streak;
    const streakActiveToday = streak.lastActiveDate === new Date().toISOString().slice(0, 10);
    const header = document.getElementById('header');

    header.innerHTML = `
      <div class="brand" id="brandBtn">
        <div class="brand-mark">A</div>
        <div class="brand-name">Apprendre.io</div>
      </div>

      <button class="streak-badge ${streakActiveToday ? 'active' : ''}" id="streakBadge" title="${streak.current} day${streak.current === 1 ? '' : 's'} streak · longest ${streak.longest}">
        ${flameIcon}
        <span>${streak.current}</span>
      </button>
      
      <div class="header-nav">
        <button class="nav-tab on" id="navLearn">Learn</button>
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

        <div class="auth-chip">
          <span class="auth-chip-name">${session || ''}</span>
          <button class="auth-signout" id="signOutBtn" title="Sign out">Sign out</button>
        </div>
      </div>
    `;

    document.getElementById('brandBtn').addEventListener('click', () => {
      location.hash = '#/overview';
    });
    document.getElementById('navLearn').addEventListener('click', () => {
      location.hash = '#/overview';
    });
    document.getElementById('streakBadge').addEventListener('click', () => {
      location.hash = '#/overview';
    });
    document.getElementById('signOutBtn').addEventListener('click', () => {
      window.Auth.signOut(localStorage);
      boot();
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
    const navLearn = document.getElementById('navLearn');
    if (navLearn) navLearn.classList.add('on');
  }

  function render() {
    renderHeader();
    renderSidebar();
    updateNavState();
    const [moduleId, topicId] = currentRoute();

    if (moduleId === 'practice') {
      location.hash = '#/overview';
      return;
    } else if (moduleId === 'worksheet' && topicId && window.TOPICS && window.TOPICS[topicId]) {
      renderWorksheet(window.TOPICS[topicId]);
    } else if (topicId && window.TOPICS && window.TOPICS[topicId]) {
      renderLesson(window.TOPICS[topicId]);
    } else {
      renderOverview();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.render = render;

  function renderAuthScreen(mode) {
    const authRoot = document.getElementById('authRoot');
    const isSignup = mode === 'signup';
    authRoot.innerHTML = `
      <div class="auth-wrap">
        <div class="auth-card">
          <div class="auth-brand">
            <div class="brand-mark">A</div>
            <div class="brand-name">Apprendre.io</div>
          </div>
          <h1 class="display">${isSignup ? 'Create your account' : 'Welcome back'}</h1>
          <p class="auth-sub">${isSignup
            ? 'A simple local account to save your level and progress on this device.'
            : 'Sign in to continue your French pathway.'}</p>
          <form id="authForm" class="auth-form" novalidate>
            <label>Username
              <input type="text" id="authUsername" autocomplete="username" minlength="3" required />
            </label>
            <label>Password
              <input type="password" id="authPassword" autocomplete="${isSignup ? 'new-password' : 'current-password'}" minlength="4" required />
            </label>
            <div class="auth-error" id="authError" hidden></div>
            <button type="submit" class="btn auth-submit">${isSignup ? 'Sign up' : 'Sign in'}</button>
          </form>
          <p class="auth-switch">
            ${isSignup ? "Already have an account?" : "New here?"}
            <button type="button" class="linklike" id="authSwitch">${isSignup ? 'Sign in' : 'Create an account'}</button>
          </p>
          <p class="auth-note">Local demo authentication — your username &amp; password are stored only in this browser (not on a server).</p>
        </div>
      </div>
    `;

    document.getElementById('authSwitch').addEventListener('click', () => {
      renderAuthScreen(isSignup ? 'signin' : 'signup');
    });

    document.getElementById('authForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('authUsername').value;
      const password = document.getElementById('authPassword').value;
      const errorEl = document.getElementById('authError');
      const submitBtn = e.target.querySelector('.auth-submit');
      submitBtn.disabled = true;
      const result = isSignup
        ? await window.Auth.signUp(localStorage, username, password)
        : await window.Auth.signIn(localStorage, username, password);
      submitBtn.disabled = false;

      if (!result.ok) {
        errorEl.textContent = result.error;
        errorEl.hidden = false;
        return;
      }
      boot();
    });
  }

  function completeOnboarding(level) {
    setUserLevel(level);
    window.Auth.setOnboarded(localStorage);
    boot();
  }
  window.completeOnboarding = completeOnboarding;

  function renderOnboardingScreen() {
    const authRoot = document.getElementById('authRoot');
    const session = window.Auth.getSession(localStorage);
    authRoot.innerHTML = `
      <div class="auth-wrap">
        <div class="auth-card onboarding-card">
          <h1 class="display">Welcome${session ? ', ' + session : ''}. What's your French level?</h1>
          <p class="auth-sub">Pick a starting point — you can change this anytime from the header.</p>
          <div class="onboard-options">
            <button class="onboard-card" data-lvl="beginner">
              <b>Beginner</b>
              <span>A1 → A2 · New to French, or shaky basics</span>
            </button>
            <button class="onboard-card" data-lvl="intermediate">
              <b>Intermediate</b>
              <span>A2 → B1 · Comfortable with basics, ready to narrate</span>
            </button>
            <button class="onboard-card" data-lvl="expert">
              <b>Expert</b>
              <span>B2 → C1 · Exam-level precision &amp; nuance</span>
            </button>
          </div>
        </div>
      </div>
    `;
    authRoot.querySelectorAll('.onboard-card').forEach(btn => {
      btn.addEventListener('click', () => completeOnboarding(btn.dataset.lvl));
    });
  }

  function boot() {
    const authRoot = document.getElementById('authRoot');
    const appEl = document.getElementById('app');
    const session = window.Auth.getSession(localStorage);

    if (!session) {
      appEl.hidden = true;
      renderAuthScreen('signin');
      return;
    }
    if (!window.Auth.isOnboarded(localStorage)) {
      appEl.hidden = true;
      renderOnboardingScreen();
      return;
    }
    appEl.hidden = false;
    authRoot.innerHTML = '';
    render();
  }
  window.boot = boot;

  window.addEventListener('hashchange', () => {
    if (window.Auth.getSession(localStorage) && window.Auth.isOnboarded(localStorage)) render();
  });
  window.addEventListener('DOMContentLoaded', () => {
    boot();
  });
})();
