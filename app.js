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

  function renderVideoEmbed(video) {
    if (!video) return '';
    const videoId = video.videoId || extractYouTubeId(video.embedUrl || video.watchUrl);
    const watchUrl = video.watchUrl || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : (video.embedUrl || '#'));
    const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

    return `
      <div class="video-section">
        <a class="video-card-link" href="${watchUrl}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${video.title} on YouTube">
          <div class="video-thumb-wrap">
            ${thumbUrl ? `<img src="${thumbUrl}" class="video-thumb-img" alt="${video.title} thumbnail" loading="lazy" onerror="this.style.display='none'">` : ''}
            <div class="video-thumb-overlay"></div>
            <div class="video-play-badge">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"/>
              </svg>
            </div>
            <div class="video-badge-pill">Watch on YouTube ↗</div>
          </div>
          <div class="video-info">
            <div class="video-meta-top">
              <span class="video-channel-tag">${video.channel}</span>
              <span class="video-featured-tag">Featured Video Lesson</span>
            </div>
            <h3 class="video-card-title">${video.title}</h3>
            ${video.note ? `<p class="video-card-desc">${video.note}</p>` : ''}
            <div class="video-card-footer">
              <span class="video-click-prompt">Click to open video lesson on YouTube in a new tab ↗</span>
            </div>
          </div>
        </a>
      </div>
    `;
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
      </div>

      <div class="stage" id="stage-reference">
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
