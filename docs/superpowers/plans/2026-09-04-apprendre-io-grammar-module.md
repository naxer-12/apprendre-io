# Apprendre.io Grammar Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the working Apprendre.io site — sidebar-driven French course with a fully gated 21-topic Grammar curriculum (A1→C1) plus the 3 existing Vocabulary A1 topics, all data-driven, no build step, no backend.

**Architecture:** Plain HTML/CSS/JS. `progress.js` holds pure, Node-testable gating/state functions operating on an injected storage object. `app.js` is a hash-router that renders sidebar/overview/lesson/practice screens from data. Every topic is one small JS file assigning into a global `window.TOPICS` registry, loaded via a `<script>` tag in `index.html` — no bundler, no ES modules.

**Tech Stack:** Vanilla HTML/CSS/JS, `window.speechSynthesis` for pronunciation, `localStorage` for persistence, Node's built-in `assert` for the one unit-testable module (`progress.js`). No npm, no dependencies.

**Spec:** `/Users/jainamshah/apprendre-io/docs/superpowers/specs/2026-09-04-apprendre-io-grammar-module-design.md`

## Global Constraints

- No build step, no bundler, no package manager, no backend — everything runs by opening `index.html` or `python3 -m http.server`.
- Progress persists only via `localStorage`, key `apprendre-io:progress`. Theme choice persists via key `apprendre-io:theme`.
- Pass score to unlock the next topic is 4 out of 5 (`topic.test.passScore`).
- UI copy is English; French learning content (words, tables, examples) is French with English glosses.
- Pronunciation buttons call `window.speechSynthesis` with `lang: 'fr-FR'`, wrapped in try/catch, never throwing if unsupported.
- One data file per topic under `data/topics/<module>/<id>.js`; each assigns to `window.TOPICS[id]`, never overwrites the whole registry.
- Reference entries never fabricate a URL. Book sources (Easy French Step-by-Step, Madrigal's Magic Key) use `url: null` and are rendered as plain text, not a link.
- Every grammar topic's `requires` field chains to the previous topic in its own module (Vocabulary and Grammar each start their own chain at `requires: null`).

---

## Task 1: Project scaffold + README

**Files:**
- Create: `README.md`
- Create: `index.html` (skeleton only — head, empty `<body>` mounts, script tags for files that will exist by end of Task 4)
- Create: `.gitignore`

**Interfaces:**
- Produces: the file layout every later task adds to. No functions yet.

- [ ] **Step 1: Write the README**

```markdown
# Apprendre.io

A French-learning site: pick a module, work through CEFR-leveled topics
(A1 → C1), pass each topic's test to unlock the next.

## Run it

No build step. Either:

- Open `index.html` directly in a browser, or
- `python3 -m http.server` from this directory, then visit `http://localhost:8000`

## Run the tests

`node test/progress.test.js`

## Project layout

- `index.html` — app shell, loads every script below
- `styles.css` — all styling, light/dark theme tokens
- `progress.js` — pure gating/progress-state functions (Node-testable)
- `app.js` — hash router + rendering
- `data/modules.js` — module metadata and topic ordering
- `data/topics/<module>/<id>.js` — one file per topic's content
```

- [ ] **Step 2: Write `.gitignore`**

```
.DS_Store
```

- [ ] **Step 3: Write the `index.html` skeleton**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Apprendre.io</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app">
    <div class="header" id="header"></div>
    <aside class="sidebar" id="sidebar"></aside>
    <main class="main" id="main"></main>
  </div>

  <!-- data: modules + topics (order matters: topics before modules before app) -->
  <script src="data/topics/vocabulary/a1-alphabet.js"></script>
  <script src="data/modules.js"></script>

  <!-- engine -->
  <script src="progress.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

- [ ] **Step 4: Commit**

```bash
git add README.md .gitignore index.html
git commit -m "Scaffold project layout"
```

---

## Task 2: Design tokens & static app shell (styles.css)

**Files:**
- Create: `styles.css`
- Modify: `index.html:8` (already links `styles.css`, no change needed — verify link present)

**Interfaces:**
- Produces: CSS custom properties (`--ground`, `--surface`, `--ink`, `--ink-soft`, `--accent`, `--accent-soft`, `--success`, `--success-soft`, `--danger`, `--danger-soft`, `--border`) and the class names every later rendering task assumes: `.app`, `.header`, `.sidebar`, `.main`, `.mod`, `.mod-head`, `.mod-body`, `.topic-item`, `.stat-card`, `.segmented`, `.segbtn`, `.module-grid`, `.module-card`, `.crumb`, `.lesson-title`, `.stage`, `.tile-grid`, `.tile`, `.speak-btn`, `.ref-table`, `.callout`, `.quiz-card`, `.opt`, `.gate`, `.ref-grid`, `.ref-card`, `.prevnext`, `.pn-btn`, `.flash-grid`, `.flash`.

- [ ] **Step 1: Write `styles.css`**

This is the approved Apprendre.io mockup's stylesheet, ported as-is (same tokens, same component classes) minus the inline `<style>` wrapper:

```css
:root{
  --ground:#FFFFFF; --surface:#FAFAFA; --ink:#0A0A0A; --ink-soft:#68686E;
  --accent:#3E4DB8; --accent-soft:#EEEFFB;
  --success:#2F8F5B; --success-soft:#E9F6EF;
  --danger:#C4432B; --danger-soft:#FBEBE6;
  --border:#E3E3E3;
  --shadow:0 1px 2px rgba(0,0,0,.04), 0 10px 22px -18px rgba(0,0,0,.3);
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --ground:#0A0A0A; --surface:#151515; --ink:#F2F2F2; --ink-soft:#9C9CA3;
    --accent:#8C94E8; --accent-soft:#1C1E3A; --success:#5FBA88; --success-soft:#132A1E;
    --danger:#E28270; --danger-soft:#331F1A; --border:#262626;
  }
}
:root[data-theme="dark"]{
  --ground:#0A0A0A; --surface:#151515; --ink:#F2F2F2; --ink-soft:#9C9CA3;
  --accent:#8C94E8; --accent-soft:#1C1E3A; --success:#5FBA88; --success-soft:#132A1E;
  --danger:#E28270; --danger-soft:#331F1A; --border:#262626;
}
*{box-sizing:border-box;}
body{ margin:0; background:var(--ground); color:var(--ink); font-family:'IBM Plex Sans',system-ui,sans-serif; }
h1,h2,h3{ font-family:'Manrope',system-ui,sans-serif; margin:0; }
.mono{ font-family:'IBM Plex Mono',ui-monospace,monospace; font-variant-numeric:tabular-nums; }
a{ color:inherit; }
[hidden]{ display:none !important; }
button{ font-family:inherit; }

.app{ display:grid; grid-template-columns:270px 1fr; min-height:100vh; max-width:1220px; margin:0 auto; }
.header{ grid-column:1/-1; display:flex; align-items:center; justify-content:space-between; padding:14px 22px; border-bottom:1px solid var(--border); gap:14px; flex-wrap:wrap; }
.brand{ display:flex; align-items:center; gap:9px; }
.brand-mark{ width:26px;height:26px;border-radius:7px; background:var(--ink); color:var(--ground); display:flex; align-items:center; justify-content:center; font-weight:700; font-size:.78rem; }
.brand-name{ font-family:'Manrope'; font-weight:700; font-size:1.02rem; }
.header-nav{ display:flex; gap:20px; font-size:.86rem; color:var(--ink-soft); font-weight:500; }
.header-nav button{ background:none; border:none; color:inherit; cursor:pointer; font:inherit; padding:0; }
.header-nav .on{ color:var(--ink); }
.header-right{ display:flex; align-items:center; gap:12px; }
.theme-btn{ width:32px;height:32px; border-radius:8px; border:1px solid var(--border); background:var(--surface); color:var(--ink-soft); display:flex; align-items:center; justify-content:center; cursor:pointer; }
.theme-btn svg{ width:16px;height:16px; }

.sidebar{ border-right:1px solid var(--border); padding:16px 10px; overflow-y:auto; display:flex; flex-direction:column; gap:16px; }
.side-title{ font-size:.7rem; text-transform:uppercase; letter-spacing:.07em; color:var(--ink-soft); font-weight:600; padding:6px 10px 2px; }
.mod-head{ display:flex; align-items:center; gap:8px; width:100%; padding:8px 10px; border-radius:7px; background:none; border:none; text-align:left; cursor:pointer; color:var(--ink-soft); font-size:.87rem; font-weight:600; }
.mod-head:hover{ background:var(--surface); }
.mod.open > .mod-head{ color:var(--ink); }
.mod-frac{ font-family:'IBM Plex Mono'; font-size:.72rem; color:var(--ink-soft); margin-left:auto; }
.mod-body{ padding-left:14px; }
.lvl-block{ margin:6px 0 10px; }
.lvl-head{ display:flex; align-items:center; justify-content:space-between; padding:5px 10px; font-family:'IBM Plex Mono'; font-size:.72rem; color:var(--ink-soft); }
.topic-item{ display:flex; align-items:center; gap:8px; padding:7px 10px; border-radius:7px; font-size:.85rem; color:var(--ink-soft); cursor:pointer; border:none; background:none; width:100%; text-align:left; }
.topic-item:hover{ background:var(--surface); }
.topic-item.current{ background:var(--accent-soft); color:var(--accent); font-weight:600; }
.topic-item.locked{ cursor:default; opacity:.5; }
.topic-item .dot{ width:15px;height:15px; flex:none; }
.topic-item.done .dot{ color:var(--success); }
.topic-item.current .dot{ color:var(--accent); }
.stat-card{ margin-top:auto; border:1px solid var(--border); border-radius:11px; padding:13px; background:var(--surface); display:flex; flex-direction:column; gap:6px; }
.stat-row{ display:flex; justify-content:space-between; font-size:.78rem; }
.stat-row .k{ color:var(--ink-soft); }
.stat-row .v{ font-family:'IBM Plex Mono'; font-weight:600; }

.main{ padding:26px 34px 70px; min-width:0; }
.topline{ display:flex; align-items:center; justify-content:space-between; gap:14px; margin-bottom:18px; flex-wrap:wrap; }
.segmented{ display:flex; gap:4px; background:var(--surface); border:1px solid var(--border); border-radius:9px; padding:3px; }
.segbtn{ font-weight:600; font-size:.8rem; padding:7px 14px; border-radius:7px; border:none; background:none; color:var(--ink-soft); cursor:pointer; }
.segbtn.active{ background:var(--ink); color:var(--ground); }
.btn{ font-weight:600; border:none; border-radius:9px; padding:10px 20px; background:var(--ink); color:var(--ground); cursor:pointer; font-size:.88rem; }
.btn.ghost{ background:none; border:1px solid var(--border); color:var(--ink); }

.module-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:12px; margin-top:20px; }
.module-card{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:15px; display:flex; flex-direction:column; gap:8px; cursor:pointer; text-align:left; color:inherit; }
.module-card .frac{ font-family:'IBM Plex Mono'; font-size:.72rem; color:var(--ink-soft); }

.crumb{ font-size:.78rem; color:var(--ink-soft); }
.lesson-title{ font-size:1.7rem; margin-top:8px; }
.lesson-sub{ color:var(--ink-soft); margin-top:6px; max-width:62ch; line-height:1.6; font-size:.95rem; }
.stage{ margin-top:38px; }
.stage-kicker{ font-family:'IBM Plex Mono'; font-size:.7rem; letter-spacing:.06em; color:var(--accent); text-transform:uppercase; font-weight:600; }
.stage h2{ font-size:1.2rem; margin-top:5px; }
.stage-desc{ color:var(--ink-soft); margin-top:5px; max-width:64ch; line-height:1.6; font-size:.92rem; }

.tile-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(88px,1fr)); gap:8px; margin-top:16px; }
.tile{ background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:10px 6px 8px; text-align:center; }
.tile-big{ font-family:'Manrope'; font-weight:700; font-size:1.3rem; }
.tile-gloss{ font-size:.62rem; color:var(--ink-soft); }
.tile-ipa{ font-family:'IBM Plex Mono'; font-size:.68rem; color:var(--accent); margin-top:2px; }
.tile-dot{ width:6px;height:6px;border-radius:50%; margin:0 auto 6px; background:var(--border); }
.tile.tag-accent .tile-dot{ background:var(--accent); }
.speak-btn{ margin-top:5px; width:22px;height:22px; border-radius:50%; border:1px solid var(--border); background:var(--ground); color:var(--ink-soft); display:inline-flex; align-items:center; justify-content:center; cursor:pointer; }
.speak-btn:hover{ border-color:var(--accent); color:var(--accent); }
.speak-btn svg{ width:12px;height:12px; }

table.ref-table{ width:100%; border-collapse:collapse; font-size:.86rem; background:var(--surface); border:1px solid var(--border); border-radius:10px; overflow:hidden; margin-top:14px; }
table.ref-table th{ text-align:left; color:var(--ink-soft); font-size:.7rem; text-transform:uppercase; letter-spacing:.04em; padding:9px 12px; border-bottom:1px solid var(--border); background:var(--ground); }
table.ref-table td{ padding:10px 12px; border-bottom:1px solid var(--border); vertical-align:middle; }
table.ref-table tr:last-child td{ border-bottom:none; }
.table-wrap{ overflow-x:auto; }

.callout{ background:var(--accent-soft); border-radius:11px; padding:14px 16px; margin-top:14px; }
.callout h3{ font-size:.88rem; }
.callout p{ color:var(--ink-soft); font-size:.83rem; line-height:1.55; margin-top:3px; }
.callout cite{ font-style:normal; font-weight:600; color:var(--accent); }

.quiz-card{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:18px 20px; margin-top:14px; }
.quiz-q{ font-weight:600; font-size:.92rem; margin-bottom:10px; }
.quiz-opts{ display:grid; grid-template-columns:repeat(auto-fit,minmax(130px,1fr)); gap:8px; }
.opt{ font-weight:600; font-size:.86rem; padding:9px 12px; border-radius:8px; border:1px solid var(--border); background:var(--ground); cursor:pointer; color:var(--ink); }
.opt.correct{ background:var(--success-soft); border-color:var(--success); color:var(--success); }
.opt.wrong{ background:var(--danger-soft); border-color:var(--danger); color:var(--danger); }
.opt:disabled{ cursor:default; }
.quiz-footer{ display:flex; align-items:center; justify-content:space-between; margin-top:18px; flex-wrap:wrap; gap:10px; }
.gate{ margin-top:14px; padding:11px 14px; border-radius:9px; background:var(--ground); border:1px solid var(--border); font-size:.82rem; color:var(--ink-soft); }
.gate.unlocked{ background:var(--success-soft); border-color:var(--success); color:var(--success); }

.ref-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:10px; margin-top:14px; }
.ref-card{ background:var(--surface); border:1px solid var(--border); border-radius:11px; padding:13px 14px; display:block; text-decoration:none; color:inherit; }
.ref-card b{ font-size:.85rem; display:block; }
.ref-card span{ display:block; font-size:.76rem; color:var(--ink-soft); margin-top:2px; }
.section-label{ font-weight:700; margin-top:22px; font-size:.9rem; }

.prevnext{ display:flex; justify-content:space-between; margin-top:44px; padding-top:18px; border-top:1px solid var(--border); gap:12px; }
.pn-btn{ border:1px solid var(--border); border-radius:10px; padding:11px 16px; background:var(--surface); font-size:.84rem; max-width:46%; cursor:pointer; text-align:left; color:inherit; }
.pn-btn .lbl{ color:var(--ink-soft); font-size:.7rem; text-transform:uppercase; }
.pn-btn:disabled{ opacity:.5; cursor:default; }

.flash-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(160px,1fr)); gap:12px; margin-top:20px; }
.flash{ background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:16px; text-align:center; cursor:pointer; }
.flash .front{ font-family:'Manrope'; font-weight:700; font-size:1.4rem; }
.flash .back{ font-size:.78rem; color:var(--ink-soft); margin-top:8px; display:none; }
.flash.flipped .back{ display:block; }

footer.foot{ margin-top:34px; color:var(--ink-soft); font-size:.75rem; }

@media (max-width:820px){ .app{ grid-template-columns:1fr; } .sidebar{ display:none; } }
```

- [ ] **Step 2: Manual verify**

Open `index.html` in a browser. Expected: blank header/sidebar/main regions render with no console errors (nothing populates them yet — that's Task 4).

- [ ] **Step 3: Commit**

```bash
git add styles.css
git commit -m "Add design tokens and component styles"
```

---

## Task 3: progress.js — pure gating/state engine + Node tests

**Files:**
- Create: `progress.js`
- Create: `test/progress.test.js`

**Interfaces:**
- Produces (used by every later task): `Progress.loadProgress(store)`, `Progress.saveProgress(store, progress)`, `Progress.isUnlocked(topic, progress)`, `Progress.recordScore(store, topic, score)`, `Progress.countCompleted(topics, progress)`. `store` is any object with `getItem(key)`/`setItem(key, value)` (matches `window.localStorage`'s interface, and a fake object in tests).
- A `topic` here only needs `{ id, requires, test: { passScore } }` — the full topic shape is defined in Task 4, but progress.js depends on nothing beyond these three fields.

- [ ] **Step 1: Write the failing test**

```js
// test/progress.test.js
const assert = require('assert');
const { loadProgress, saveProgress, isUnlocked, recordScore, countCompleted } = require('../progress.js');

function fakeStore(){
  const data = {};
  return { getItem:(k)=> (k in data ? data[k] : null), setItem:(k,v)=>{ data[k]=v; } };
}

// 1. loadProgress returns empty defaults when nothing stored
{
  const store = fakeStore();
  const p = loadProgress(store);
  assert.deepStrictEqual(p, { completed: {} });
}

// 2. saveProgress + loadProgress round-trip
{
  const store = fakeStore();
  saveProgress(store, { completed: { 'a1-alphabet': { score: 5, date: '2026-09-04' } } });
  const p = loadProgress(store);
  assert.strictEqual(p.completed['a1-alphabet'].score, 5);
}

// 3. isUnlocked: no prerequisite -> always unlocked
{
  const topic = { id: 't1', requires: null, test: { passScore: 4 } };
  assert.strictEqual(isUnlocked(topic, { completed: {} }), true);
}

// 4. isUnlocked: prerequisite not completed -> locked
{
  const topic = { id: 't2', requires: 't1', test: { passScore: 4 } };
  assert.strictEqual(isUnlocked(topic, { completed: {} }), false);
}

// 5. isUnlocked: prerequisite completed -> unlocked
{
  const topic = { id: 't2', requires: 't1', test: { passScore: 4 } };
  assert.strictEqual(isUnlocked(topic, { completed: { t1: { score: 4, date: 'x' } } }), true);
}

// 6. recordScore below passScore does not mark complete
{
  const store = fakeStore();
  const topic = { id: 't1', requires: null, test: { passScore: 4 } };
  const p = recordScore(store, topic, 3);
  assert.strictEqual(p.completed['t1'], undefined);
}

// 7. recordScore at/above passScore marks complete and persists
{
  const store = fakeStore();
  const topic = { id: 't1', requires: null, test: { passScore: 4 } };
  recordScore(store, topic, 4);
  const reloaded = loadProgress(store);
  assert.strictEqual(reloaded.completed['t1'].score, 4);
}

// 8. countCompleted counts only topics present in progress.completed
{
  const topics = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const progress = { completed: { a: {}, c: {} } };
  assert.strictEqual(countCompleted(topics, progress), 2);
}

console.log('progress.test.js: all assertions passed');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node test/progress.test.js`
Expected: throws `Error: Cannot find module '../progress.js'` (file doesn't exist yet).

- [ ] **Step 3: Write `progress.js`**

```js
(function (root) {
  const STORAGE_KEY = 'apprendre-io:progress';

  function loadProgress(store) {
    const raw = store.getItem(STORAGE_KEY);
    if (!raw) return { completed: {} };
    try {
      const parsed = JSON.parse(raw);
      return parsed && parsed.completed ? parsed : { completed: {} };
    } catch (e) {
      return { completed: {} };
    }
  }

  function saveProgress(store, progress) {
    store.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function isUnlocked(topic, progress) {
    if (!topic.requires) return true;
    return Boolean(progress.completed[topic.requires]);
  }

  function recordScore(store, topic, score) {
    const progress = loadProgress(store);
    if (score >= topic.test.passScore) {
      progress.completed[topic.id] = {
        score: score,
        date: new Date().toISOString().slice(0, 10)
      };
      saveProgress(store, progress);
    }
    return progress;
  }

  function countCompleted(topics, progress) {
    return topics.filter(function (t) { return Boolean(progress.completed[t.id]); }).length;
  }

  const api = { loadProgress, saveProgress, isUnlocked, recordScore, countCompleted, STORAGE_KEY };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.Progress = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node test/progress.test.js`
Expected: prints `progress.test.js: all assertions passed` with no errors.

- [ ] **Step 5: Add `progress.js` to `index.html`**

`index.html` already has `<script src="progress.js"></script>` from Task 1's skeleton — verify it's present before `app.js`'s script tag; no edit needed if Task 1 was followed exactly.

- [ ] **Step 6: Commit**

```bash
git add progress.js test/progress.test.js
git commit -m "Add progress.js gating engine with passing tests"
```

---

## Task 4: Data schema + modules.js + rendering engine (app.js) + Alphabet topic wired end-to-end

**Files:**
- Create: `data/modules.js`
- Create: `data/topics/vocabulary/a1-alphabet.js`
- Create: `app.js`
- Modify: `index.html` (already references both script tags from Task 1; no change needed)

**Interfaces:**
- Consumes: `Progress.*` from Task 3.
- Produces: the topic object shape every content task (5 onward) must match exactly:

```js
{
  id: "string, matches the key it's assigned under in window.TOPICS",
  module: "vocabulary" | "grammar",
  level: "A1" | "A2" | "B1" | "B2-C1",
  title: "string",
  order: 1,                    // position within its module, 1-based
  requires: "id-of-prior-topic-in-same-module" | null,
  visual: {
    kind: "card-grid" | "table",
    // card-grid data: Array<{ display, speak, gloss, ipa, tag }>
    //   display: large text shown on the card
    //   speak: text passed to speechSynthesis (often same as display or a fuller form)
    //   gloss: small caption text (English meaning or French name)
    //   ipa: bracketed pronunciation string, or "" if not applicable
    //   tag: "accent" to tint the card's top dot, or "" for none
    // table data: { columns: string[], rows: string[][] }
    data: [ /* ... */ ]
  },
  content: {
    intro: "string, one paragraph",
    tables: [ { caption: "string", columns: string[], rows: string[][] } ],
    example: { fr: "string", en: "string" },
    callouts: [ { label: "string", body: "string", cite: "string or ''" } ]
  },
  test: {
    passScore: 4,
    questions: [ { q: "string", opts: string[4], a: "string, must equal one of opts" } ]
    // exactly 5 questions per topic
  },
  reference: {
    read: [ { title: "string", url: "string or null", note: "string" } ],
    watchListen: [ { title: "string", url: "string or null", note: "string" } ]
  }
}
```

- `window.TOPICS` is a plain object keyed by `id`, built up incrementally as each topic's script tag runs (each topic file does `window.TOPICS = window.TOPICS || {}; window.TOPICS["<id>"] = {...};`).
- `window.MODULES` (from `data/modules.js`) is `Array<{ id, name, icon, description, topics: string[] }>` — `topics` is the ordered list of topic ids in that module.
- Produces (for later tasks and manual QA): `render()` (re-render whatever `location.hash` points at), `speak(text)`.

- [ ] **Step 1: Write `data/modules.js`**

```js
(function () {
  window.MODULES = [
    {
      id: "vocabulary",
      name: "Vocabulary",
      icon: "vocab",
      description: "Words, chunks & mnemonics",
      topics: ["a1-alphabet"]
    },
    {
      id: "grammar",
      name: "Grammar",
      icon: "grammar",
      description: "Tables & conjugation",
      topics: []
    },
    { id: "reading", name: "Reading", icon: "reading", description: "Graded texts A1 → C1", topics: [] },
    { id: "writing", name: "Writing", icon: "writing", description: "Sentences to essays", topics: [] },
    { id: "speaking", name: "Speaking", icon: "speaking", description: "Output & social register", topics: [] },
    { id: "listening", name: "Listening", icon: "listening", description: "Audio comprehension", topics: [] }
  ];
})();
```

- [ ] **Step 2: Write `data/topics/vocabulary/a1-alphabet.js`**

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-alphabet"] = {
    id: "a1-alphabet",
    module: "vocabulary",
    level: "A1",
    title: "The French Alphabet",
    order: 1,
    requires: null,
    visual: {
      kind: "card-grid",
      data: [
        { display: "A", speak: "a", gloss: "a", ipa: "[ah]", tag: "accent" },
        { display: "B", speak: "bé", gloss: "bé", ipa: "[bay]", tag: "" },
        { display: "C", speak: "cé", gloss: "cé", ipa: "[say]", tag: "" },
        { display: "D", speak: "dé", gloss: "dé", ipa: "[day]", tag: "" },
        { display: "E", speak: "e", gloss: "e", ipa: "[euh]", tag: "accent" },
        { display: "F", speak: "effe", gloss: "effe", ipa: "[ef]", tag: "" },
        { display: "G", speak: "gé", gloss: "gé", ipa: "[zhay]", tag: "" },
        { display: "H", speak: "hache", gloss: "hache", ipa: "[ahsh]", tag: "" },
        { display: "I", speak: "i", gloss: "i", ipa: "[ee]", tag: "accent" },
        { display: "J", speak: "ji", gloss: "ji", ipa: "[zhee]", tag: "" },
        { display: "K", speak: "ka", gloss: "ka", ipa: "[kah]", tag: "" },
        { display: "L", speak: "elle", gloss: "elle", ipa: "[el]", tag: "" },
        { display: "M", speak: "emme", gloss: "emme", ipa: "[em]", tag: "" },
        { display: "N", speak: "enne", gloss: "enne", ipa: "[en]", tag: "" },
        { display: "O", speak: "o", gloss: "o", ipa: "[oh]", tag: "accent" },
        { display: "P", speak: "pé", gloss: "pé", ipa: "[pay]", tag: "" },
        { display: "Q", speak: "qu", gloss: "qu", ipa: "[kew]", tag: "" },
        { display: "R", speak: "erre", gloss: "erre", ipa: "[air]", tag: "" },
        { display: "S", speak: "esse", gloss: "esse", ipa: "[ess]", tag: "" },
        { display: "T", speak: "té", gloss: "té", ipa: "[tay]", tag: "" },
        { display: "U", speak: "u", gloss: "u", ipa: "[ew]", tag: "accent" },
        { display: "V", speak: "vé", gloss: "vé", ipa: "[vay]", tag: "" },
        { display: "W", speak: "double-vé", gloss: "double-vé", ipa: "[doo-bluh-vay]", tag: "" },
        { display: "X", speak: "ixe", gloss: "ixe", ipa: "[eeks]", tag: "" },
        { display: "Y", speak: "i grec", gloss: "i grec", ipa: "[ee-grek]", tag: "accent" },
        { display: "Z", speak: "zède", gloss: "zède", ipa: "[zed]", tag: "" }
      ]
    },
    content: {
      intro: "Same 26 letters as English, very different names when spoken. Four letters worth extra attention:",
      tables: [
        {
          caption: "",
          columns: ["Letter", "French name", "Sound", "Note"],
          rows: [
            ["H", "hache", "[ahsh]", "Always silent at the start of a word"],
            ["E", "e", "[euh]", "The most common sound in French, often dropped at word-end"],
            ["W", "double-vé", "[doo-bluh-vay]", "Rare in native French words, common in borrowings"],
            ["Y", "i grec", "[ee-grek]", "Literally \"Greek i\" — said as one two-word name"]
          ]
        }
      ],
      example: { fr: "Ça s'écrit C-A-F-É.", en: "It's spelled C-A-F-E." },
      callouts: [
        {
          label: "Why the test below works",
          body: "Retrieval practice only beats simple re-reading when you see the correct answer immediately after each try.",
          cite: "Cortex, 2022"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which letter is pronounced [ah]?", opts: ["A", "H", "E", "I"], a: "A" },
        { q: 'How is the letter "H" pronounced in French?', opts: ["[ahsh]", "[ha]", "[eff]", "[aitch]"], a: "[ahsh]" },
        { q: "Which letter is silent at the start of most French words?", opts: ["H", "W", "Y", "K"], a: "H" },
        { q: "Which letter is pronounced [zhay]?", opts: ["J", "G", "Y", "Q"], a: "G" },
        { q: 'How is "Y" literally named in French?', opts: ["i grec", "double i", "ygrec-e", "ipsilon"], a: "i grec" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons/Alphabet", url: "https://en.wikibooks.org/wiki/French/Lessons/Alphabet", note: "3-column table: letter, name, IPA + simplified respelling" },
        { title: "About-France.com (PDF)", url: "https://about-france.com/tourism/french-phrases.pdf", note: 'English respellings, e.g. "Merci (mair-see)"' },
        { title: "Wikivoyage — French phrasebook", url: "https://en.wikivoyage.org/wiki/French_phrasebook", note: 'English respelling, e.g. "Bonjour (bon-zhoor)"' }
      ],
      watchListen: [
        { title: "LanguageGuide.org", url: "https://www.languageguide.org/french/vocabulary/", note: "Click-to-hear audio for every letter and word" },
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "4,000+ graded video exercises, A1 to B2" }
      ]
    }
  };
})();
```

- [ ] **Step 3: Write `app.js`**

```js
(function () {
  const ICONS = {
    vocab: '<rect x="4" y="6" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 10.5h8M8 14h5" stroke="currentColor" stroke-width="1.4"/>',
    grammar: '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4 10h16M4 15h16M10 4v16M15 4v16" stroke="currentColor" stroke-width="1.2"/>',
    reading: '<path d="M4 5c3-1.5 6-1.5 8 0v14c-2-1.5-5-1.5-8 0V5z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 5c-3-1.5-6-1.5-8 0v14c2-1.5 5-1.5 8 0V5z" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    writing: '<path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    speaking: '<path d="M4 5h16v11H9l-4 4v-4H4V5z" fill="none" stroke="currentColor" stroke-width="1.6"/>',
    listening: '<path d="M4 14v-2a8 8 0 0116 0v2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="4.5" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="16.5" y="14" width="4.5" height="6" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" width="16" height="16">${ICONS[name] || ''}</svg>`;
  const speakIcon = '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 9.5a4 4 0 010 5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>';
  const checkIcon = '<svg viewBox="0 0 24 24"><path d="M4 8l3 3 5-6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const lockIcon = '<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V8a4 4 0 018 0v3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  const dotIcon = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>';

  function speak(text) {
    try {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'fr-FR';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) { /* no-op: pronunciation is a progressive enhancement */ }
  }
  window.speak = speak;

  function allTopics() {
    return Object.values(window.TOPICS || {});
  }
  function topicsForModule(moduleId) {
    const mod = window.MODULES.find(m => m.id === moduleId);
    if (!mod) return [];
    return mod.topics.map(id => window.TOPICS[id]).filter(Boolean);
  }

  function renderCardGrid(items) {
    return '<div class="tile-grid">' + items.map(it => `
      <div class="tile ${it.tag === 'accent' ? 'tag-accent' : ''}">
        <div class="tile-dot"></div>
        <div class="tile-big">${it.display}</div>
        <div class="tile-gloss">${it.gloss}</div>
        <div class="tile-ipa">${it.ipa}</div>
        <button class="speak-btn" onclick="speak(${JSON.stringify(it.speak)})" aria-label="Play ${it.display}">${speakIcon}</button>
      </div>`).join('') + '</div>';
  }

  function renderTable(t) {
    const head = '<tr>' + t.columns.map(c => `<th>${c}</th>`).join('') + '</tr>';
    const body = t.rows.map(r => '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>').join('');
    return `<div class="table-wrap"><table class="ref-table"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  function renderVisual(topic) {
    if (topic.visual.kind === 'card-grid') return renderCardGrid(topic.visual.data);
    if (topic.visual.kind === 'table') return renderTable(topic.visual.data);
    return '';
  }

  function renderRefGrid(items) {
    return '<div class="ref-grid">' + items.map(r => {
      const inner = `<b>${r.title}</b><span>${r.note}</span>`;
      return r.url
        ? `<a class="ref-card" href="${r.url}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="ref-card">${inner}</div>`;
    }).join('') + '</div>';
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
      <div class="gate gateMsg">Answer all ${qs.length} questions to unlock the next topic.</div>`;

    const scoreEl = el.querySelector('.scoreVal');
    const gateEl = el.querySelector('.gateMsg');

    function reset() {
      answered = 0; correct = 0; scoreEl.textContent = '0';
      gateEl.textContent = `Answer all ${qs.length} questions to unlock the next topic.`;
      gateEl.classList.remove('unlocked');
      el.querySelectorAll('.opt').forEach(b => { b.disabled = false; b.classList.remove('correct', 'wrong'); });
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
          gateEl.textContent = `Unlocked the next topic — score ${correct}/${qs.length}.`;
          gateEl.classList.add('unlocked');
        } else {
          gateEl.textContent = `Score ${correct}/${qs.length} — need ${topic.test.passScore}/${qs.length} to unlock the next topic. Try again.`;
        }
        onGraded(correct, passed);
      }
    });
    return el;
  }

  function renderLesson(topic) {
    const mod = window.MODULES.find(m => m.id === topic.module);
    const modTopics = topicsForModule(topic.module);
    const idx = modTopics.findIndex(t => t.id === topic.id);
    const prev = idx > 0 ? modTopics[idx - 1] : null;
    const next = idx < modTopics.length - 1 ? modTopics[idx + 1] : null;
    const progress = Progress.loadProgress(localStorage);

    const main = document.getElementById('main');
    main.innerHTML = `
      <div class="crumb">${mod.name.toUpperCase()} · ${topic.level} · TOPIC ${idx + 1} OF ${modTopics.length}</div>
      <h1 class="lesson-title">${topic.title}</h1>
      <div class="stage">
        <div class="stage-kicker">1 · Visual</div>
        <h2>Visual reference</h2>
        <div id="visualMount"></div>
      </div>
      <div class="stage">
        <div class="stage-kicker">2 · Content</div>
        <h2>What actually matters here</h2>
        <p class="stage-desc">${topic.content.intro}</p>
        ${topic.content.tables.map(renderTable).join('')}
        <p class="stage-desc"><em>${topic.content.example.fr}</em> — ${topic.content.example.en}</p>
        ${topic.content.callouts.map(c => `
          <div class="callout"><h3>${c.label}</h3><p>${c.body}${c.cite ? ` — <cite>${c.cite}</cite>` : ''}</p></div>`).join('')}
      </div>
      <div class="stage">
        <div class="stage-kicker">3 · Test</div>
        <h2>Check your memory</h2>
        <p class="stage-desc">${topic.test.questions.length} questions. Score ${topic.test.passScore}/${topic.test.questions.length} or higher to unlock ${next ? `"${next.title}"` : 'the next module'}.</p>
        <div id="quizMount"></div>
      </div>
      <div class="stage">
        <div class="stage-kicker">4 · Reference</div>
        <h2>Go further</h2>
        <div class="section-label">Read</div>
        ${renderRefGrid(topic.reference.read)}
        ${topic.reference.watchListen.length ? `<div class="section-label">Watch &amp; listen</div>${renderRefGrid(topic.reference.watchListen)}` : ''}
      </div>
      <div class="prevnext">
        <button class="pn-btn" ${prev ? '' : 'disabled'} id="prevBtn"><div class="lbl">← Previous</div><div>${prev ? prev.title : '—'}</div></button>
        <button class="pn-btn" ${next && Progress.isUnlocked(next, progress) ? '' : 'disabled'} id="nextBtn"><div class="lbl">Next →</div><div>${next ? next.title : '—'}</div></button>
      </div>
      <footer class="foot">Apprendre.io — content grounded in the project's cited sources.</footer>
    `;
    document.getElementById('visualMount').appendChild(strToNode(renderVisual(topic)));
    document.getElementById('quizMount').appendChild(renderQuiz(topic, (score) => {
      Progress.recordScore(localStorage, topic, score);
      renderSidebar();
      const nextBtn = document.getElementById('nextBtn');
      if (next && Progress.isUnlocked(next, Progress.loadProgress(localStorage))) nextBtn.disabled = false;
    }));
    if (prev) document.getElementById('prevBtn').addEventListener('click', () => { location.hash = `#/${prev.module}/${prev.id}`; });
    if (next) document.getElementById('nextBtn').addEventListener('click', () => { if (!document.getElementById('nextBtn').disabled) location.hash = `#/${next.module}/${next.id}`; });
  }

  function strToNode(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild || div;
  }

  function renderOverview() {
    const progress = Progress.loadProgress(localStorage);
    const main = document.getElementById('main');
    main.innerHTML = `
      <h1>Learn French, one evidence-backed step at a time</h1>
      <p class="stage-desc">Pick a module in the sidebar. Every topic runs the same loop — visual, content, test, reference — and stays locked until you pass the one before it.</p>
      <div class="module-grid" id="moduleGrid"></div>
    `;
    const grid = document.getElementById('moduleGrid');
    window.MODULES.forEach(mod => {
      const topics = topicsForModule(mod.id);
      const done = Progress.countCompleted(topics, progress);
      const card = document.createElement('button');
      card.className = 'module-card';
      card.innerHTML = `<div>${icon(mod.icon)}</div><b>${mod.name}</b><span class="frac">${topics.length ? `${done}/${topics.length}` : 'coming soon'}</span><span>${mod.description}</span>`;
      card.addEventListener('click', () => {
        if (!topics.length) return;
        const first = topics.find(t => !progress.completed[t.id]) || topics[0];
        location.hash = `#/${mod.id}/${first.id}`;
      });
      grid.appendChild(card);
    });
  }

  function renderSidebar() {
    const progress = Progress.loadProgress(localStorage);
    const [, currentTopicId] = currentRoute();
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '<div class="side-title">Curriculum</div>';
    window.MODULES.forEach(mod => {
      const topics = topicsForModule(mod.id);
      const done = Progress.countCompleted(topics, progress);
      const wrap = document.createElement('div');
      wrap.innerHTML = `<button class="mod-head">${icon(mod.icon)}${mod.name}<span class="mod-frac">${topics.length ? `${done}/${topics.length}` : '—'}</span></button>`;
      const body = document.createElement('div');
      body.className = 'mod-body';
      const byLevel = {};
      topics.forEach(t => { (byLevel[t.level] = byLevel[t.level] || []).push(t); });
      Object.keys(byLevel).forEach(level => {
        const block = document.createElement('div');
        block.className = 'lvl-block';
        block.innerHTML = `<div class="lvl-head">${level}</div>`;
        byLevel[level].forEach(t => {
          const unlocked = Progress.isUnlocked(t, progress);
          const isDone = Boolean(progress.completed[t.id]);
          const isCurrent = t.id === currentTopicId;
          const btn = document.createElement('button');
          btn.className = 'topic-item ' + (isDone ? 'done' : isCurrent ? 'current' : unlocked ? '' : 'locked');
          btn.innerHTML = `<span class="dot">${isDone ? checkIcon : isCurrent ? dotIcon : unlocked ? '' : lockIcon}</span>${t.title}`;
          if (unlocked) btn.addEventListener('click', () => { location.hash = `#/${mod.id}/${t.id}`; });
          else btn.disabled = true;
          block.appendChild(btn);
        });
        body.appendChild(block);
      });
      wrap.querySelector('.mod-head').addEventListener('click', () => { body.hidden = !body.hidden; });
      sidebar.appendChild(wrap);
      sidebar.appendChild(body);
    });
    const stat = document.createElement('div');
    stat.className = 'stat-card';
    const totalDone = Object.keys(progress.completed).length;
    stat.innerHTML = `<div class="stat-row"><span class="k">Completed</span><span class="v">${totalDone}</span></div>`;
    sidebar.appendChild(stat);
  }

  function renderHeader() {
    document.getElementById('header').innerHTML = `
      <div class="brand"><div class="brand-mark">A</div><div class="brand-name">Apprendre.io</div></div>
      <div class="header-right">
        <button class="theme-btn" id="themeBtn" aria-label="Toggle light/dark theme">☾</button>
      </div>`;
    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    applyTheme(getStoredTheme());
  }

  const THEME_KEY = 'apprendre-io:theme';
  function getStoredTheme() { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } }
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* no-op */ }
    applyTheme(next);
  }

  function currentRoute() {
    const h = location.hash.replace(/^#\/?/, '');
    return h ? h.split('/') : [];
  }

  function render() {
    renderSidebar();
    const [moduleId, topicId] = currentRoute();
    if (topicId && window.TOPICS[topicId]) {
      renderLesson(window.TOPICS[topicId]);
    } else {
      renderOverview();
    }
  }
  window.render = render;

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', () => { renderHeader(); render(); });
})();
```

- [ ] **Step 4: Manual verify**

Open `index.html` in a browser (or `python3 -m http.server` then visit `http://localhost:8000`). Expected:
- Sidebar shows "Vocabulary 0/1" with "The French Alphabet" listed under A1, unlocked (no lock icon).
- Main area shows the overview with a Vocabulary module card reading "0/1".
- Clicking the Vocabulary card or the sidebar topic navigates to `#/vocabulary/a1-alphabet` and renders all four stages: 26-letter card grid (each with a working speaker button), the content table, the 5-question quiz, and two reference cards linking out.
- Answering all 5 quiz questions with ≥4 correct shows "Unlocked the next topic" and the sidebar's Vocabulary fraction becomes "1/1"; reloading the page preserves that (progress survived the reload via localStorage).
- The theme button toggles light/dark and the choice survives a reload.

- [ ] **Step 5: Commit**

```bash
git add data/modules.js data/topics/vocabulary/a1-alphabet.js app.js
git commit -m "Add rendering engine and wire up the Alphabet topic end-to-end"
```

---

## Task 5: Numbers 0–20 topic (Vocabulary #2)

**Files:**
- Create: `data/topics/vocabulary/a1-numbers.js`
- Modify: `data/modules.js:8` — vocabulary module's `topics` array: `["a1-alphabet", "a1-numbers"]`
- Modify: `index.html` — add `<script src="data/topics/vocabulary/a1-numbers.js"></script>` immediately after the alphabet script tag

**Interfaces:**
- Consumes: topic shape from Task 4.
- Produces: `window.TOPICS["a1-numbers"]`.

- [ ] **Step 1: Write `data/topics/vocabulary/a1-numbers.js`**

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-numbers"] = {
    id: "a1-numbers",
    module: "vocabulary",
    level: "A1",
    title: "Numbers 0–20",
    order: 2,
    requires: "a1-alphabet",
    visual: {
      kind: "card-grid",
      data: [
        { display: "0", speak: "zéro", gloss: "zéro", ipa: "[zay-ro]", tag: "" },
        { display: "1", speak: "un", gloss: "un", ipa: "[uñ]", tag: "accent" },
        { display: "2", speak: "deux", gloss: "deux", ipa: "[duh]", tag: "" },
        { display: "3", speak: "trois", gloss: "trois", ipa: "[twah]", tag: "" },
        { display: "4", speak: "quatre", gloss: "quatre", ipa: "[katr]", tag: "" },
        { display: "5", speak: "cinq", gloss: "cinq", ipa: "[sank]", tag: "" },
        { display: "6", speak: "six", gloss: "six", ipa: "[sees]", tag: "" },
        { display: "7", speak: "sept", gloss: "sept", ipa: "[set]", tag: "" },
        { display: "8", speak: "huit", gloss: "huit", ipa: "[weet]", tag: "" },
        { display: "9", speak: "neuf", gloss: "neuf", ipa: "[nuhf]", tag: "" },
        { display: "10", speak: "dix", gloss: "dix", ipa: "[dees]", tag: "" },
        { display: "11", speak: "onze", gloss: "onze", ipa: "[ohnz]", tag: "" },
        { display: "12", speak: "douze", gloss: "douze", ipa: "[dooz]", tag: "" },
        { display: "13", speak: "treize", gloss: "treize", ipa: "[trez]", tag: "" },
        { display: "14", speak: "quatorze", gloss: "quatorze", ipa: "[ka-torz]", tag: "" },
        { display: "15", speak: "quinze", gloss: "quinze", ipa: "[kanz]", tag: "" },
        { display: "16", speak: "seize", gloss: "seize", ipa: "[sez]", tag: "" },
        { display: "17", speak: "dix-sept", gloss: "dix-sept", ipa: "[dee-set]", tag: "" },
        { display: "18", speak: "dix-huit", gloss: "dix-huit", ipa: "[dee-zweet]", tag: "" },
        { display: "19", speak: "dix-neuf", gloss: "dix-neuf", ipa: "[dee-znuhf]", tag: "" },
        { display: "20", speak: "vingt", gloss: "vingt", ipa: "[van]", tag: "accent" }
      ]
    },
    content: {
      intro: "Counting words are simple; what trips learners up is that six, dix, and huit change pronunciation depending on what follows them:",
      tables: [
        {
          caption: "",
          columns: ["Number", "Alone / before a vowel", "Before a consonant"],
          rows: [
            ["six", "[sees]", "[see] — six pommes"],
            ["dix", "[dees]", "[dee] — dix pommes"],
            ["huit", "[weet]", "[wee] — huit pommes"]
          ]
        }
      ],
      example: { fr: "J'ai vingt ans.", en: "I am twenty years old." },
      callouts: [
        {
          label: "Why the test below works",
          body: "Retrieval practice only beats simple re-reading when you see the correct answer immediately after each try.",
          cite: "Cortex, 2022"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which number is trois?", opts: ["2", "3", "4", "6"], a: "3" },
        { q: "Which number is pronounced [sank]?", opts: ["5", "6", "7", "9"], a: "5" },
        { q: "How do you say 15?", opts: ["quinze", "quatorze", "seize", "cinq"], a: "quinze" },
        { q: '"Dix-huit" means:', opts: ["18", "17", "19", "8"], a: "18" },
        { q: 'Which number drops its final sound before a consonant, e.g. "six pommes"?', opts: ["six", "deux", "cinq", "quatre"], a: "six" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons/Numbers", url: "https://en.wikibooks.org/wiki/French/Lessons/Numbers", note: "IPA transcription for every number 0–20" },
        { title: "Wikibooks — Print version (compiled)", url: "https://en.wikibooks.org/wiki/French/Lessons/Print_version", note: "Same numbers lesson as one fetchable page" }
      ],
      watchListen: [
        { title: "LanguageGuide.org", url: "https://www.languageguide.org/french/vocabulary/", note: "Click-to-hear audio, image-based number vocabulary" },
        { title: "TV5MONDE — Apprendre", url: "https://apprendre.tv5monde.com/", note: "4,000+ graded video exercises, A1 to B2" }
      ]
    }
  };
})();
```

- [ ] **Step 2: Modify `data/modules.js`**

Change the vocabulary module's `topics` line from:
```js
      topics: ["a1-alphabet"]
```
to:
```js
      topics: ["a1-alphabet", "a1-numbers"]
```

- [ ] **Step 3: Modify `index.html`**

Add this line right after the alphabet script tag:
```html
<script src="data/topics/vocabulary/a1-numbers.js"></script>
```

- [ ] **Step 4: Manual verify**

Reload the site. Expected: sidebar shows "Vocabulary 1/2" (Alphabet already completed from Task 4's QA), "Numbers 0–20" listed as the current/unlocked topic. Visit `#/vocabulary/a1-numbers`: 21-tile card grid renders with working speak buttons, content table with the six/dix/huit liaison note, 5-question quiz gates correctly at 4/5.

- [ ] **Step 5: Commit**

```bash
git add data/topics/vocabulary/a1-numbers.js data/modules.js index.html
git commit -m "Add Numbers 0-20 topic"
```

---

## Task 6: Greetings & Politeness topic (Vocabulary #3, completes the module)

**Files:**
- Create: `data/topics/vocabulary/a1-greetings.js`
- Modify: `data/modules.js` — vocabulary `topics`: `["a1-alphabet", "a1-numbers", "a1-greetings"]`
- Modify: `index.html` — add its script tag after the numbers script tag

**Interfaces:**
- Consumes: topic shape from Task 4.
- Produces: `window.TOPICS["a1-greetings"]`.

- [ ] **Step 1: Write `data/topics/vocabulary/a1-greetings.js`**

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-greetings"] = {
    id: "a1-greetings",
    module: "vocabulary",
    level: "A1",
    title: "Greetings & Politeness",
    order: 3,
    requires: "a1-numbers",
    visual: {
      kind: "card-grid",
      data: [
        { display: "Bonjour", speak: "Bonjour", gloss: "Hello / Good day", ipa: "[bon-zhoor]", tag: "accent" },
        { display: "Bonsoir", speak: "Bonsoir", gloss: "Good evening", ipa: "[bon-swahr]", tag: "" },
        { display: "Salut", speak: "Salut", gloss: "Hi / Bye (informal)", ipa: "[sah-lew]", tag: "" },
        { display: "Au revoir", speak: "Au revoir", gloss: "Goodbye", ipa: "[oh ruh-vwahr]", tag: "" },
        { display: "Bonne nuit", speak: "Bonne nuit", gloss: "Good night", ipa: "[bun nwee]", tag: "" },
        { display: "Merci", speak: "Merci", gloss: "Thank you", ipa: "[mair-see]", tag: "accent" },
        { display: "S'il vous plaît", speak: "S'il vous plaît", gloss: "Please (formal)", ipa: "[seel voo pleh]", tag: "" },
        { display: "Pardon", speak: "Pardon", gloss: "Excuse me / Sorry", ipa: "[par-don]", tag: "" },
        { display: "Ça va ?", speak: "Ça va", gloss: "How's it going? (informal)", ipa: "[sah vah]", tag: "" },
        { display: "Comment allez-vous ?", speak: "Comment allez-vous", gloss: "How are you? (formal)", ipa: "[ko-mahn tah-lay voo]", tag: "" }
      ]
    },
    content: {
      intro: "French greetings split along the same formal/informal line you'll meet again in the Grammar module's tu/vous topic — Salut and Ça va are for people you know; Bonjour and Comment allez-vous are the safe default with strangers.",
      tables: [
        {
          caption: "",
          columns: ["Phrase", "Register", "Used when"],
          rows: [
            ["Salut", "Informal", "Friends, peers, casual settings"],
            ["Bonjour / Bonsoir", "Neutral / formal", "Shops, strangers, most daytime situations"],
            ["S'il vous plaît", "Formal", "\"Please\" to someone you don't know well"],
            ["Comment allez-vous ?", "Formal", "\"How are you?\" to an elder, boss, or stranger"]
          ]
        }
      ],
      example: { fr: "Bonjour, comment allez-vous ?", en: "Hello, how are you? (formal)" },
      callouts: [
        {
          label: "Why register matters early",
          body: "A 16-week university comparison found app-only learners matched classroom learners on vocabulary and grammar, but fell about 2 points behind specifically on choosing tu vs. vous correctly — the one place real interaction beat solo app use.",
          cite: "Cambridge Core, Studies in SLA"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which greeting is informal, used with friends?", opts: ["Salut", "Bonjour", "Comment allez-vous ?", "S'il vous plaît"], a: "Salut" },
        { q: 'How do you say "Good evening"?', opts: ["Bonsoir", "Bonne nuit", "Bonjour", "Au revoir"], a: "Bonsoir" },
        { q: '"Merci" means:', opts: ["Thank you", "Please", "Sorry", "Goodbye"], a: "Thank you" },
        { q: 'Which is the formal way to say "please"?', opts: ["S'il vous plaît", "Salut", "Pardon", "Ça va"], a: "S'il vous plaît" },
        { q: 'What does "Pardon" mean?', opts: ["Excuse me / Sorry", "Goodbye", "Please", "Hello"], a: "Excuse me / Sorry" }
      ]
    },
    reference: {
      read: [
        { title: "Wikibooks — French/Lessons/Greetings", url: "https://en.wikibooks.org/wiki/French/Lessons/Greetings", note: "IPA transcription per phrase" },
        { title: "Wikivoyage — French phrasebook", url: "https://en.wikivoyage.org/wiki/French_phrasebook", note: 'English respelling, e.g. "Bonjour (bon-zhoor)"' }
      ],
      watchListen: [
        { title: "LanguageGuide.org", url: "https://www.languageguide.org/french/vocabulary/", note: "Click-to-hear audio for common phrases" }
      ]
    }
  };
})();
```

- [ ] **Step 2: Modify `data/modules.js`**

Change vocabulary `topics` to:
```js
      topics: ["a1-alphabet", "a1-numbers", "a1-greetings"]
```

- [ ] **Step 3: Modify `index.html`**

Add after the numbers script tag:
```html
<script src="data/topics/vocabulary/a1-greetings.js"></script>
```

- [ ] **Step 4: Manual verify**

Reload. Sidebar shows "Vocabulary 2/3", Greetings listed as current/unlocked. Visit `#/vocabulary/a1-greetings`, confirm all 4 stages render and the quiz gates correctly. Passing it should show the module now fully complete (3/3) — there's no next topic in this module, so the "Next →" button on this last topic should render disabled with "—".

- [ ] **Step 5: Commit**

```bash
git add data/topics/vocabulary/a1-greetings.js data/modules.js index.html
git commit -m "Add Greetings & Politeness topic, completing Vocabulary module"
```

---

## Grammar module: Tasks 7–27

Each task below follows the identical pattern established in Tasks 5–6: create one
`data/topics/grammar/<id>.js` file, append its id to `data/modules.js`'s `grammar.topics`
array, add its `<script>` tag to `index.html` after the previous grammar topic's tag (or
as the first grammar `<script>` tag for Task 7), verify by visiting `#/grammar/<id>` and
checking gating, then commit. `requires` chains to the previous grammar topic in this
list (`null` only for Task 7, the first).

To avoid repeating that boilerplate 21 times, each task below gives only the topic id,
the `data/modules.js` array's new state, and the full topic object — apply the same
3-file pattern (create data file, update `modules.js`, add script tag) and the same
verify/commit steps each time, substituting the new id.

---

### Task 7: Articles & Gender of Nouns (Grammar #1, A1)

**Files:** Create `data/topics/grammar/a1-articles.js` · Modify `data/modules.js` grammar `topics: ["a1-articles"]` · Modify `index.html` (first grammar script tag, placed after the greetings script tag)

- [ ] **Step 1: Write the data file**

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-articles"] = {
    id: "a1-articles",
    module: "grammar",
    level: "A1",
    title: "Articles & Gender of Nouns",
    order: 1,
    requires: null,
    visual: {
      kind: "card-grid",
      data: [
        { display: "le café", speak: "le café", gloss: "the coffee (masculine)", ipa: "", tag: "accent" },
        { display: "la table", speak: "la table", gloss: "the table (feminine)", ipa: "", tag: "" },
        { display: "l'ami", speak: "l'ami", gloss: "the friend (before a vowel)", ipa: "", tag: "accent" },
        { display: "l'école", speak: "l'école", gloss: "the school (before a vowel)", ipa: "", tag: "" },
        { display: "les tables", speak: "les tables", gloss: "the tables (plural, either gender)", ipa: "", tag: "" }
      ]
    },
    content: {
      intro: "Every French noun is masculine or feminine, and the article in front of it has to agree. Gender is often unpredictable from meaning alone, but noun endings are a reliable shortcut:",
      tables: [
        {
          caption: "",
          columns: ["Form", "Used for", "Example"],
          rows: [
            ["le", "Masculine, singular", "le livre"],
            ["la", "Feminine, singular", "la maison"],
            ["l'", "Either gender, before a vowel or mute h", "l'ami / l'heure"],
            ["les", "Plural, either gender", "les livres"]
          ]
        },
        {
          caption: "Ending patterns worth learning",
          columns: ["Ending", "Usual gender", "Reliability"],
          rows: [
            ["-tion / -sion", "Feminine", "Over 90% of the time"],
            ["-eau / -isme", "Masculine", "Similarly high"]
          ]
        }
      ],
      example: { fr: "La maison est grande.", en: "The house is big." },
      callouts: [
        {
          label: "Learn the article with the noun",
          body: "Native speakers lean on ending patterns as a secondary cue for gender, and learners who do the same close much of the gap — but always study the noun with its article (\"la maison\", not \"maison\"), since the article-noun pair is what gets learned, not the noun alone.",
          cite: "Canadian Journal of Applied Linguistics"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Which article goes with "café" (masculine)?', opts: ["le", "la", "l'", "les"], a: "le" },
        { q: 'Which article goes with "maison" (feminine)?', opts: ["la", "le", "les", "l'"], a: "la" },
        { q: 'Which article is used before a vowel sound, e.g. "ami"?', opts: ["l'", "le", "la", "les"], a: "l'" },
        { q: "What is the plural definite article for both genders?", opts: ["les", "le", "la", "l'"], a: "les" },
        { q: "Which of these endings is reliably feminine over 90% of the time?", opts: ["-tion", "-eau", "-isme", "-age"], a: "-tion" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — det2 (Definite articles)", url: "https://laits.utexas.edu/tex/gr/det2.html", note: "le/la/les/l' article table" },
        { title: "Easy French Step-by-Step, Chapter 1", url: null, note: "Nouns, Articles, and Descriptive Adjectives" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** Update `data/modules.js` (`grammar.topics: ["a1-articles"]`), add the script tag in `index.html`, visit `#/grammar/a1-articles` and confirm it renders unlocked (Grammar module's first topic), pass its quiz, commit as `git commit -m "Add Articles & Gender of Nouns topic"`.

---

### Task 8: Être, Avoir & Negation (Grammar #2, A1)

**Files:** Create `data/topics/grammar/a1-etre-avoir-negation.js` · `modules.js` grammar `topics: ["a1-articles", "a1-etre-avoir-negation"]`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-etre-avoir-negation"] = {
    id: "a1-etre-avoir-negation",
    module: "grammar",
    level: "A1",
    title: "Être, Avoir & Negation",
    order: 2,
    requires: "a1-articles",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "être (to be)", "avoir (to have)"],
        rows: [
          ["je", "suis", "ai"],
          ["tu", "es", "as"],
          ["il / elle / on", "est", "a"],
          ["nous", "sommes", "avons"],
          ["vous", "êtes", "avez"],
          ["ils / elles", "sont", "ont"]
        ]
      }
    },
    content: {
      intro: "être and avoir are the two most common verbs in French and both are irregular — worth memorizing outright before any other verb. Negation wraps ne...pas around the conjugated verb.",
      tables: [
        {
          caption: "Negation",
          columns: ["Affirmative", "Negative"],
          rows: [
            ["Je suis fatigué.", "Je ne suis pas fatigué."],
            ["Il a faim.", "Il n'a pas faim."]
          ]
        }
      ],
      example: { fr: "Nous sommes étudiants.", en: "We are students." },
      callouts: [
        {
          label: "Drill these two first",
          body: "être and avoir appear inside almost every other tense you'll learn next (passé composé, for one) — getting these six-times-two forms automatic now pays off across the rest of the module.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Complete: "Je ___ étudiant."', opts: ["suis", "es", "est", "sommes"], a: "suis" },
        { q: 'Complete: "Ils ___ trois enfants."', opts: ["ont", "avons", "a", "avez"], a: "ont" },
        { q: "How do you negate a verb in French?", opts: ["ne...pas", "pas...ne", "non...pas", "ne...non"], a: "ne...pas" },
        { q: '"Vous ___ français ?"', opts: ["êtes", "es", "est", "sont"], a: "êtes" },
        { q: 'Negative of "J\'ai faim":', opts: ["Je n'ai pas faim.", "Je ne suis pas faim.", "J'ai ne pas faim.", "Non j'ai faim."], a: "Je n'ai pas faim." }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — virr1 (Être)", url: "https://laits.utexas.edu/tex/gr/virr1.html", note: "Full être conjugation table" },
        { title: "Easy French Step-by-Step, Chapter 2", url: null, note: "The Verbs être and avoir, Subject Pronouns, and Negation" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update `modules.js`, add script tag after `a1-articles`, verify `#/grammar/a1-etre-avoir-negation` is locked until Task 7's quiz is passed and then unlocks, commit as `git commit -m "Add Être, Avoir & Negation topic"`.

---

### Task 9: Present Tense: Regular -er/-ir/-re Verbs (Grammar #3, A1)

**Files:** Create `data/topics/grammar/a1-present-tense.js` · `modules.js` grammar `topics: [..., "a1-present-tense"]`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-present-tense"] = {
    id: "a1-present-tense",
    module: "grammar",
    level: "A1",
    title: "Present Tense: Regular -er/-ir/-re Verbs",
    order: 3,
    requires: "a1-etre-avoir-negation",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "parler (-er)", "finir (-ir)", "vendre (-re)"],
        rows: [
          ["je", "parle", "finis", "vends"],
          ["tu", "parles", "finis", "vends"],
          ["il / elle / on", "parle", "finit", "vend"],
          ["nous", "parlons", "finissons", "vendons"],
          ["vous", "parlez", "finissez", "vendez"],
          ["ils / elles", "parlent", "finissent", "vendent"]
        ]
      }
    },
    content: {
      intro: "Almost every French verb belongs to one of three regular families by its infinitive ending — learn the pattern once per family and you can conjugate hundreds of verbs.",
      tables: [],
      example: { fr: "Nous finissons le travail.", en: "We are finishing the work." },
      callouts: [
        {
          label: "-er is the biggest family",
          body: "The vast majority of French verbs are regular -er verbs, so this pattern alone unlocks the most new verbs per hour of study.",
          cite: ""
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je ___ français." (parler)', opts: ["parle", "parles", "parlons", "parlent"], a: "parle" },
        { q: '-ir verb "nous" ending?', opts: ["-issons", "-ons", "-issez", "-ent"], a: "-issons" },
        { q: '-re verb "il" form of vendre?', opts: ["vend", "vends", "vendons", "vendent"], a: "vend" },
        { q: 'Which verb group is "manger"?', opts: ["-er", "-ir", "-re", "irregular"], a: "-er" },
        { q: '"Vous ___ (finir) vos devoirs."', opts: ["finissez", "finissons", "finis", "finit"], a: "finissez" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tapr1", url: "https://laits.utexas.edu/tex/gr/tapr1.html", note: "Regular verb conjugation patterns" },
        { title: "Easy French Step-by-Step, Chapters 3–5", url: null, note: "Regular -er, -ir, and -re verbs in the present tense" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update `modules.js`, add script tag, verify gating, commit as `git commit -m "Add Present Tense: Regular -er/-ir/-re Verbs topic"`.

---

### Task 10: Subject & Object Pronouns, Intro (Grammar #4, A1)

**Files:** Create `data/topics/grammar/a1-pronouns-intro.js`

```js
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
      read: [ { title: "Tex's French Grammar — pro1", url: "https://laits.utexas.edu/tex/gr/pro1.html", note: "Subject pronoun overview" } ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update `modules.js`, add script tag, verify, commit as `git commit -m "Add Subject & Object Pronouns, Intro topic"`.

---

### Task 11: Futur Proche (Grammar #5, A1)

**Files:** Create `data/topics/grammar/a1-futur-proche.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-futur-proche"] = {
    id: "a1-futur-proche",
    module: "grammar",
    level: "A1",
    title: "Futur Proche (aller + infinitive)",
    order: 5,
    requires: "a1-pronouns-intro",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "aller (conjugated)", "+ infinitive"],
        rows: [
          ["je", "vais", "manger"],
          ["tu", "vas", "manger"],
          ["il / elle / on", "va", "manger"],
          ["nous", "allons", "manger"],
          ["vous", "allez", "manger"],
          ["ils / elles", "vont", "manger"]
        ]
      }
    },
    content: {
      intro: "The easiest way to talk about the future in French: conjugate aller, then add any infinitive — no new verb endings to learn.",
      tables: [],
      example: { fr: "Elle va partir demain.", en: "She's going to leave tomorrow." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je ___ (aller) manger."', opts: ["vais", "va", "vas", "allons"], a: "vais" },
        { q: "Futur proche = aller (conjugated) + ___?", opts: ["infinitive", "past participle", "present participle", "gerund"], a: "infinitive" },
        { q: '"Ils ___ (aller) arriver bientôt."', opts: ["vont", "va", "allez", "allons"], a: "vont" },
        { q: "Futur proche typically expresses a ___ future.", opts: ["near, planned", "distant, uncertain", "hypothetical", "past"], a: "near, planned" },
        { q: '"Nous allons voyager" means:', opts: ["We are going to travel.", "We traveled.", "We would travel.", "We travel."], a: "We are going to travel." }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — taf1", url: "https://laits.utexas.edu/tex/gr/taf1.html", note: "Near-future construction" },
        { title: "Easy French Step-by-Step, Chapter 6", url: null, note: "Expressing the Future with aller" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Futur Proche topic"`.

---

### Task 12: Reflexive / Pronominal Verbs (Grammar #6, A1 — completes A1)

**Files:** Create `data/topics/grammar/a1-reflexive-verbs.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-reflexive-verbs"] = {
    id: "a1-reflexive-verbs",
    module: "grammar",
    level: "A1",
    title: "Reflexive / Pronominal Verbs",
    order: 6,
    requires: "a1-futur-proche",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "se laver (to wash oneself)"],
        rows: [
          ["je", "me lave"], ["tu", "te laves"], ["il / elle / on", "se lave"],
          ["nous", "nous lavons"], ["vous", "vous lavez"], ["ils / elles", "se lavent"]
        ]
      }
    },
    content: {
      intro: "Reflexive verbs add a pronoun that matches the subject before the verb — used far more often in French than in English, including for everyday routines like getting up or getting dressed.",
      tables: [],
      example: { fr: "Elle se lave les mains.", en: "She washes her hands (literally: washes to-herself the hands)." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je ___ lave." (reflexive pronoun for je)', opts: ["me", "te", "se", "nous"], a: "me" },
        { q: '"Ils ___ lèvent tôt."', opts: ["se", "te", "me", "vous"], a: "se" },
        { q: 'Reflexive pronoun that goes with "nous"?', opts: ["nous", "vous", "se", "leur"], a: "nous" },
        { q: '"Se laver" means:', opts: ["to wash oneself", "to wash someone else", "to be washed by", "to want to wash"], a: "to wash oneself" },
        { q: 'Which correctly says "I wash myself"?', opts: ["Je me lave.", "Je lave.", "Je lave moi.", "Me je lave."], a: "Je me lave." }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tap4", url: "https://laits.utexas.edu/tex/gr/tap4.html", note: "Se laver, se lever, etc." },
        { title: "Easy French Step-by-Step, Chapter 12", url: null, note: "Reflexive Pronouns with Pronominal Verbs" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Reflexive/Pronominal Verbs topic"`.

---

### Task 13: Possessive Adjectives (Grammar #7, A1)

**Files:** Create `data/topics/grammar/a1-possessive-adjectives.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-possessive-adjectives"] = {
    id: "a1-possessive-adjectives",
    module: "grammar",
    level: "A1",
    title: "Possessive Adjectives",
    order: 7,
    requires: "a1-reflexive-verbs",
    visual: {
      kind: "table",
      data: {
        columns: ["Owner", "Masculine", "Feminine", "Before a vowel", "Plural"],
        rows: [
          ["my", "mon", "ma", "mon", "mes"],
          ["your (informal)", "ton", "ta", "ton", "tes"],
          ["his / her", "son", "sa", "son", "ses"],
          ["our", "notre", "notre", "notre", "nos"],
          ["your (formal/pl.)", "votre", "votre", "votre", "vos"],
          ["their", "leur", "leur", "leur", "leurs"]
        ]
      }
    },
    content: {
      intro: "Possessive adjectives agree with the noun they describe, not with the owner's gender — a common trap for English speakers. A special rule: the masculine form (mon/ton/son) is used even with feminine nouns that start with a vowel sound.",
      tables: [],
      example: { fr: "Voici mon amie.", en: "Here's my (female) friend. — \"mon\" because \"amie\" starts with a vowel, even though the friend is female." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"___ livre" (my, masculine noun)', opts: ["mon", "ma", "mes", "son"], a: "mon" },
        { q: '"___ amie" (my, feminine noun starting with a vowel)', opts: ["mon", "ma", "mes", "ton"], a: "mon" },
        { q: 'Which is the plural of "leur"?', opts: ["leurs", "leures", "leur", "leures"], a: "leurs" },
        { q: '"votre" is used for:', opts: ["formal \"your\" or plural \"your\"", "informal \"your\" only", "\"his\" only", "\"their\" only"], a: "formal \"your\" or plural \"your\"" },
        { q: '"C\'est ___ (his) chat."', opts: ["son", "sa", "ses", "leur"], a: "son" }
      ]
    },
    reference: {
      read: [
        { title: "Easy French Step-by-Step, Chapter 10", url: null, note: "Possessive Adjectives and Pronouns" },
        { title: "The French Experiment — Possessive Adjectives", url: "https://www.thefrenchexperiment.com/learn-french", note: "Beginner-focused lesson on possession" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Possessive Adjectives topic"`.

---

### Task 14: Partitive Articles (Grammar #8, A1 — completes A1)

**Files:** Create `data/topics/grammar/a1-partitive-articles.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a1-partitive-articles"] = {
    id: "a1-partitive-articles",
    module: "grammar",
    level: "A1",
    title: "Partitive Articles (du/de la/des)",
    order: 8,
    requires: "a1-possessive-adjectives",
    visual: {
      kind: "table",
      data: {
        columns: ["Form", "Used before", "Example"],
        rows: [
          ["du", "Masculine singular", "du pain"],
          ["de la", "Feminine singular", "de la salade"],
          ["de l'", "Either, before a vowel", "de l'eau"],
          ["des", "Plural", "des pommes"]
        ]
      }
    },
    content: {
      intro: "Partitive articles express \"some\" or \"any\" — an unspecified quantity — and are required in French even where English would drop the word entirely (\"I'm eating bread\" still needs du pain).",
      tables: [
        {
          caption: "After a negation",
          columns: ["Affirmative", "Negative"],
          rows: [["Je mange du pain.", "Je ne mange pas de pain."], ["Il y a des pommes.", "Il n'y a pas de pommes."]]
        }
      ],
      example: { fr: "Elle boit de l'eau.", en: "She's drinking (some) water." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Je bois ___ café."', opts: ["du", "de la", "des", "de l'"], a: "du" },
        { q: '"Elle mange ___ salade."', opts: ["de la", "du", "des", "de l'"], a: "de la" },
        { q: 'After "ne...pas", du/de la/des usually become:', opts: ["de", "des", "le/la/les", "no change"], a: "de" },
        { q: '"___ eau" (before a vowel)', opts: ["de l'", "du", "de la", "des"], a: "de l'" },
        { q: "Partitive articles express:", opts: ["\"some/any\", an unspecified quantity", "possession", "location", "a completed action"], a: "\"some/any\", an unspecified quantity" }
      ]
    },
    reference: {
      read: [
        { title: "Easy French Step-by-Step, Chapter 9", url: null, note: "The Partitive Article" },
        { title: "The French Experiment — Partitive Articles", url: "https://www.thefrenchexperiment.com/learn-french", note: "Beginner-focused lesson on du/de la/des" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify (A1 band of Grammar should now show 8/8), commit as `git commit -m "Add Partitive Articles topic, completing A1"`.

---

### Task 15: Relative Pronouns qui/que (Grammar #9, A2)

**Files:** Create `data/topics/grammar/a2-relative-pronouns-qui-que.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-relative-pronouns-qui-que"] = {
    id: "a2-relative-pronouns-qui-que",
    module: "grammar",
    level: "A2",
    title: "Relative Pronouns: qui / que",
    order: 9,
    requires: "a1-partitive-articles",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Replaces", "Example"],
        rows: [["qui", "the subject of the clause", "L'homme qui parle..."], ["que", "the object of the clause", "Le livre que je lis..."]]
      }
    },
    content: {
      intro: "qui and que both mean \"who/which/that\" in English, but French picks between them based on the grammatical role inside the relative clause, not on whether the antecedent is a person or thing.",
      tables: [],
      example: { fr: "Le livre que je lis est intéressant.", en: "The book that I'm reading is interesting." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"qui" replaces the ___ of the clause.', opts: ["subject", "object", "verb", "adjective"], a: "subject" },
        { q: '"que" replaces the ___.', opts: ["object", "subject", "verb", "adjective"], a: "object" },
        { q: '"La femme ___ chante."', opts: ["qui", "que", "dont", "où"], a: "qui" },
        { q: '"Le film ___ j\'ai vu."', opts: ["que", "qui", "dont", "où"], a: "que" },
        { q: 'Before a vowel, "que" becomes:', opts: ["qu'", "qui", "qu", "que"], a: "qu'" }
      ]
    },
    reference: { read: [ { title: "Tex's French Grammar — pror1", url: "https://laits.utexas.edu/tex/gr/pror1.html", note: "Basic relative clauses" } ], watchListen: [] }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Relative Pronouns qui/que topic"`.

---

### Task 16: Passé Composé with avoir (Grammar #10, A2)

**Files:** Create `data/topics/grammar/a2-passe-compose-avoir.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-passe-compose-avoir"] = {
    id: "a2-passe-compose-avoir",
    module: "grammar",
    level: "A2",
    title: "Passé Composé with avoir",
    order: 10,
    requires: "a2-relative-pronouns-qui-que",
    visual: {
      kind: "table",
      data: {
        columns: ["Infinitive group", "Ending", "Example"],
        rows: [["-er", "-é", "parlé"], ["-ir", "-i", "fini"], ["-re", "-u", "vendu"]]
      }
    },
    content: {
      intro: "Most French verbs form their past tense with a conjugated avoir plus a past participle. The participle ending depends on the verb's infinitive group.",
      tables: [],
      example: { fr: "Nous avons fini le projet.", en: "We finished the project." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"J\'ai ___ (parler)."', opts: ["parlé", "parlée", "parler", "parlant"], a: "parlé" },
        { q: 'Past participle of "finir"?', opts: ["fini", "finu", "finé", "finit"], a: "fini" },
        { q: 'Past participle of "vendre"?', opts: ["vendu", "vendé", "vendi", "vendre"], a: "vendu" },
        { q: "Passé composé with avoir = avoir (present) + ___?", opts: ["past participle", "infinitive", "present participle", "imperative"], a: "past participle" },
        { q: '"Elle a mangé" means:', opts: ["She ate / has eaten.", "She eats.", "She was eating.", "She will eat."], a: "She ate / has eaten." }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tap2", url: "https://laits.utexas.edu/tex/gr/tap2.html", note: "Formation + agreement rules" },
        { title: "Easy French Step-by-Step, Chapter 13", url: null, note: "Forms and Uses of the passé composé" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Passé Composé with avoir topic"`.

---

### Task 17: Passé Composé with être (Grammar #11, A2)

**Files:** Create `data/topics/grammar/a2-passe-compose-etre.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-passe-compose-etre"] = {
    id: "a2-passe-compose-etre",
    module: "grammar",
    level: "A2",
    title: "Passé Composé with être",
    order: 11,
    requires: "a2-passe-compose-avoir",
    visual: {
      kind: "table",
      data: {
        columns: ["Subject", "aller (to go)", "partir (to leave)"],
        rows: [["il", "est allé", "est parti"], ["elle", "est allée", "est partie"], ["ils", "sont allés", "sont partis"], ["elles", "sont allées", "sont parties"]]
      }
    },
    content: {
      intro: "A small set of mostly motion/state-change verbs (often taught via the mnemonic \"Dr & Mrs Vandertramp\": Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir) take être instead of avoir — and their past participle must agree in gender and number with the subject.",
      tables: [],
      example: { fr: "Elle est allée au marché.", en: "She went to the market." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "Which verb takes être in passé composé?", opts: ["aller", "parler", "manger", "finir"], a: "aller" },
        { q: '"Elle est ___ (aller)."', opts: ["allée", "allé", "allés", "allées"], a: "allée" },
        { q: '"Ils sont ___ (partir)."', opts: ["partis", "parti", "partie", "parties"], a: "partis" },
        { q: "The mnemonic for être-verbs is nicknamed:", opts: ["Dr & Mrs Vandertramp", "COD/COI", "SNIP verbs", "Tex's Fourteen"], a: "Dr & Mrs Vandertramp" },
        { q: "With être, the past participle agrees with:", opts: ["the subject", "the object", "nothing, it never agrees", "the indirect object"], a: "the subject" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tap3", url: "https://laits.utexas.edu/tex/gr/tap3.html", note: "The \"Dr & Mrs Vandertramp\" verb set" },
        { title: "Easy French Step-by-Step, Chapter 13", url: null, note: "The passé composé with être" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Passé Composé with être topic"`.

---

### Task 18: Imparfait: Formation & Use (Grammar #12, A2)

**Files:** Create `data/topics/grammar/a2-imparfait.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-imparfait"] = {
    id: "a2-imparfait",
    module: "grammar",
    level: "A2",
    title: "Imparfait: Formation & Use",
    order: 12,
    requires: "a2-passe-compose-etre",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "parler → imparfait"],
        rows: [["je", "parlais"], ["tu", "parlais"], ["il / elle / on", "parlait"], ["nous", "parlions"], ["vous", "parliez"], ["ils / elles", "parlaient"]]
      }
    },
    content: {
      intro: "Take the nous-form of the present tense, drop -ons, and add the imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient). Unlike passé composé, imparfait describes ongoing states or habitual past actions rather than one completed event.",
      tables: [
        { caption: "One irregular stem to know", columns: ["Verb", "Imparfait stem"], rows: [["être", "ét-"]] }
      ],
      example: { fr: "Quand j'étais petit, je jouais dehors.", en: "When I was little, I used to play outside." },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "The imparfait stem comes from the ___ form of the present tense.", opts: ["nous", "je", "ils", "tu"], a: "nous" },
        { q: '"Je ___ (parler, imparfait)."', opts: ["parlais", "parlerai", "parlé", "parle"], a: "parlais" },
        { q: "Imparfait typically describes:", opts: ["an ongoing or habitual past action", "a single completed past action", "a future plan", "a polite request"], a: "an ongoing or habitual past action" },
        { q: "Irregular imparfait stem for être:", opts: ["ét-", "êt-", "suis-", "fu-"], a: "ét-" },
        { q: '"Nous ___ (finir, imparfait)."', opts: ["finissions", "finirons", "finissons", "finis"], a: "finissions" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tap5/tap7", url: "https://laits.utexas.edu/tex/gr/tap5.html", note: "Formation, then idiomatic uses vs. passé composé" },
        { title: "Easy French Step-by-Step, Chapter 14", url: null, note: "The imparfait and past narration" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Imparfait topic"`.

---

### Task 19: Object Pronoun Order (Grammar #13, A2 — completes A2)

**Files:** Create `data/topics/grammar/a2-object-pronoun-order.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["a2-object-pronoun-order"] = {
    id: "a2-object-pronoun-order",
    module: "grammar",
    level: "A2",
    title: "Object Pronoun Order",
    order: 13,
    requires: "a2-imparfait",
    visual: {
      kind: "table",
      data: {
        columns: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"],
        rows: [["me / te / se / nous / vous", "le / la / les", "lui / leur", "y", "en"]]
      }
    },
    content: {
      intro: "When a sentence has more than one object pronoun, they stack in a fixed order before the verb — group 1 before group 2, and so on left to right.",
      tables: [],
      example: { fr: "Je le lui donne.", en: "I give it to him/her. (le before lui, per the order above)" },
      callouts: []
    },
    test: {
      passScore: 4,
      questions: [
        { q: "me/te/se/nous/vous come ___ le/la/les in the stacking order.", opts: ["before", "after", "never together", "randomly"], a: "before" },
        { q: '"Il ___ ___ donne." (fill with me, le, in order)', opts: ["me le", "le me", "lui le", "le lui"], a: "me le" },
        { q: 'Where does "y" go relative to "en"?', opts: ["before en", "after en", "they can\'t combine", "same position"], a: "before en" },
        { q: '"Je le lui donne" means:', opts: ["I give it to him/her.", "I give him to it.", "He gives it to me.", "I give them to him."], a: "I give it to him/her." },
        { q: "Object pronoun stacking order is:", opts: ["fixed", "flexible, speaker's choice", "reversed in questions", "only for written French"], a: "fixed" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — pro9", url: "https://laits.utexas.edu/tex/gr/pro9.html", note: "Pronoun stacking order" },
        { title: "Easy French Step-by-Step, Chapter 14", url: null, note: "More about object pronouns" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify (A2 band should show 5/5), commit as `git commit -m "Add Object Pronoun Order topic, completing A2"`.

---

### Task 20: Futur Simple (Grammar #14, B1)

**Files:** Create `data/topics/grammar/b1-futur-simple.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-futur-simple"] = {
    id: "b1-futur-simple",
    module: "grammar",
    level: "B1",
    title: "Futur Simple",
    order: 14,
    requires: "a2-object-pronoun-order",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Ending", "Regular (-er: parler)", "Irregular Stem (être: ser-)"],
        rows: [
          ["je", "-ai", "je parlerai", "je serai"],
          ["tu", "-as", "tu parleras", "tu seras"],
          ["il / elle", "-a", "il parlera", "il sera"],
          ["nous", "-ons", "nous parlerons", "nous serons"],
          ["vous", "-ez", "vous parlerez", "vous serez"],
          ["ils / elles", "-ont", "ils parleront", "ils seront"]
        ]
      }
    },
    content: {
      intro: "Futur simple expresses actions further ahead or formal predictions. Form it from the infinitive (dropping -e for -re verbs) plus future endings: -ai, -as, -a, -ons, -ez, -ont (notice they mirror present avoir).",
      tables: [
        {
          caption: "High-frequency irregular future stems",
          columns: ["Infinitive", "Future Stem", "Example (je)"],
          rows: [
            ["avoir", "aur-", "j'aurai"],
            ["être", "ser-", "je serai"],
            ["aller", "ir-", "j'irai"],
            ["faire", "fer-", "je ferai"],
            ["pouvoir", "pourr-", "je pourrai"],
            ["vouloir", "voudr-", "je voudrai"]
          ]
        }
      ],
      example: { fr: "Demain, nous voyagerons en France et nous aurons du temps libre.", en: "Tomorrow, we will travel to France and we will have free time." },
      callouts: [
        {
          label: "Memory trick: avoir endings",
          body: "The future endings (-ai, -as, -a, -ons, -ez, -ont) are identical to the present tense of avoir (j'ai, tu as, il a, nous avons -> -ons, vous avez -> -ez, ils ont).",
          cite: "Tex's French Grammar taf2"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'What is the future ending for "je"?', opts: ["-ai", "-as", "-ais", "-e"], a: "-ai" },
        { q: 'What is the irregular future stem for "faire"?', opts: ["fer-", "fair-", "fais-", "fass-"], a: "fer-" },
        { q: '"Demain, j\'___ (avoir) vingt ans."', opts: ["aurai", "avais", "aurais", "auras"], a: "aurai" },
        { q: 'For regular -re verbs (e.g. attendre), what do you do before adding future endings?', opts: ["drop the final -e", "drop -re", "double the r", "keep infinitive unchanged"], a: "drop the final -e" },
        { q: '"Ils ___ (partir) à huit heures."', opts: ["partiront", "partirons", "partiriez", "partent"], a: "partiront" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — taf2/taf3", url: "https://laits.utexas.edu/tex/gr/taf2.html", note: "Regular future formation & irregular stems" },
        { title: "Easy French Step-by-Step, Chapter 15", url: null, note: "Future tenses and predictions" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Futur Simple topic"`.

---

### Task 21: Conditional (Grammar #15, B1)

**Files:** Create `data/topics/grammar/b1-conditional.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-conditional"] = {
    id: "b1-conditional",
    module: "grammar",
    level: "B1",
    title: "Conditionnel Présent",
    order: 15,
    requires: "b1-futur-simple",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Future Stem", "Imparfait Ending", "Conditional Form (aimer)"],
        rows: [
          ["je", "aimer-", "-ais", "j'aimerais"],
          ["tu", "aimer-", "-ais", "tu aimerais"],
          ["il / elle", "aimer-", "-ait", "il aimerait"],
          ["nous", "aimer-", "-ions", "nous aimerions"],
          ["vous", "aimer-", "-iez", "vous aimeriez"],
          ["ils / elles", "aimer-", "-aient", "ils aimeraient"]
        ]
      }
    },
    content: {
      intro: "The conditionnel présent uses the exact same stem as the futur simple, but adds the imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient). It expresses polite requests, hypothetical outcomes, and advice.",
      tables: [
        {
          caption: "Polite expressions using conditional",
          columns: ["French", "English meaning", "Usage note"],
          rows: [
            ["J'aimerais / Je voudrais", "I would like", "Polite request (restaurant, hotel)"],
            ["Pourriez-vous m'aider ?", "Could you help me?", "Polite question with pouvoir"],
            ["Tu devrais te reposer.", "You should rest.", "Gentle advice with devoir"]
          ]
        }
      ],
      example: { fr: "Si j'avais de l'argent, j'achèterais une maison.", en: "If I had money, I would buy a house." },
      callouts: [
        {
          label: "Formula for conditional",
          body: "Conditional = Future stem + Imparfait endings. If you know future stems and imparfait endings, you already know the conditional 100%.",
          cite: "Easy French Step-by-Step ch.15"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "The conditional is formed using the future stem plus endings from which tense?", opts: ["imparfait", "présent", "passé composé", "subjonctif"], a: "imparfait" },
        { q: '"Je ___ (vouloir) un café, s\'il vous plaît."', opts: ["voudrais", "voudrai", "voulais", "veut"], a: "voudrais" },
        { q: '"Nous ___ (être) ravis de venir."', opts: ["serions", "serons", "étions", "soyons"], a: "serions" },
        { q: 'Which sentence demonstrates a hypothetical condition ("si" clause)?', opts: ["Si j'avais le temps, je viendrais.", "Quand j'aurai le temps, je viendrai.", "Puisque j'ai le temps, je viens.", "J'ai le temps donc je viens."], a: "Si j'avais le temps, je viendrais." },
        { q: 'Conditional ending for "ils / elles":', opts: ["-aient", "-ont", "-iez", "-ent"], a: "-aient" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tac1", url: "https://laits.utexas.edu/tex/gr/tac1.html", note: "Conditionnel formation, politeness, and hypothetical si clauses" },
        { title: "Easy French Step-by-Step, Chapter 15", url: null, note: "Conditional sentences" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Conditional topic"`.

---

### Task 22: Plus-que-parfait & Futur Antérieur (Grammar #16, B1)

**Files:** Create `data/topics/grammar/b1-plus-que-parfait-futur-anterieur.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-plus-que-parfait-futur-anterieur"] = {
    id: "b1-plus-que-parfait-futur-anterieur",
    module: "grammar",
    level: "B1",
    title: "Plus-que-parfait & Futur Antérieur",
    order: 16,
    requires: "b1-conditional",
    visual: {
      kind: "table",
      data: {
        columns: ["Compound Tense", "Auxiliary Tense (avoir/être)", "Past Participle", "Timeline Meaning"],
        rows: [
          ["Passé Composé", "Présent", "fini", "Action completed in the past"],
          ["Plus-que-parfait", "Imparfait", "fini", "Action completed BEFORE another past event (had done)"],
          ["Futur Antérieur", "Futur Simple", "fini", "Action that WILL BE completed before a future point (will have done)"]
        ]
      }
    },
    content: {
      intro: "Compound tenses in French follow a uniform formula: auxiliary (avoir or être) + past participle. By shifting the auxiliary to the imparfait, you get the plus-que-parfait ('had done'). By shifting it to the futur simple, you get the futur antérieur ('will have done').",
      tables: [
        {
          caption: "Comparing auxiliary forms for 'finir'",
          columns: ["Pronoun", "Plus-que-parfait (had finished)", "Futur antérieur (will have finished)"],
          rows: [
            ["j'", "avais fini", "aurai fini"],
            ["tu", "avais fini", "auras fini"],
            ["il/elle", "avait fini", "aura fini"],
            ["nous", "avions fini", "aurons fini"],
            ["vous", "aviez fini", "aurez fini"],
            ["ils/elles", "avaient fini", "auront fini"]
          ]
        }
      ],
      example: { fr: "Quand il est arrivé, j'avais déjà mangé.", en: "When he arrived, I had already eaten." },
      callouts: [
        {
          label: "DR & MRS VANDERTRAMP still applies",
          body: "Verbs that take être in passé composé also take être in the plus-que-parfait and futur antérieur (e.g., 'elle était partie', 'elle sera partie'), with gender/number agreement on the participle.",
          cite: "Easy French Step-by-Step ch.15"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "How is the plus-que-parfait formed?", opts: ["auxiliary in imparfait + past participle", "auxiliary in present + past participle", "auxiliary in future + infinitive", "infinitive + imparfait endings"], a: "auxiliary in imparfait + past participle" },
        { q: '"Quand tu as téléphoné, nous ___ (déjà / partir)."', opts: ["étions déjà partis", "sommes déjà partis", "serons déjà partis", "partions déjà"], a: "étions déjà partis" },
        { q: 'What does the futur antérieur describe?', opts: ["an action that will be completed before a future point", "a past habitual event", "a present continuous action", "a hypothetical wish"], a: "an action that will be completed before a future point" },
        { q: '"Dès que j\'___ (finir) mes devoirs, je sortirai."', opts: ["aurai fini", "avais fini", "ai fini", "aurais fini"], a: "aurai fini" },
        { q: '"Elle avait mangé" translates to:', opts: ["She had eaten", "She has eaten", "She was eating", "She will have eaten"], a: "She had eaten" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tap9", url: "https://laits.utexas.edu/tex/gr/tap9.html", note: "Plus-que-parfait formation and timeline" },
        { title: "Tex's French Grammar — taf5", url: "https://laits.utexas.edu/tex/gr/taf5.html", note: "Futur antérieur formation and use after quand/dès que" },
        { title: "Easy French Step-by-Step, Chapter 15", url: null, note: "Compound tenses" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Plus-que-parfait & Futur Antérieur topic"`.

---

### Task 23: Direct & Indirect Object Pronouns (COD/COI) (Grammar #17, B1)

**Files:** Create `data/topics/grammar/b1-direct-indirect-object-pronouns.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-direct-indirect-object-pronouns"] = {
    id: "b1-direct-indirect-object-pronouns",
    module: "grammar",
    level: "B1",
    title: "Direct & Indirect Object Pronouns (COD/COI)",
    order: 17,
    requires: "b1-plus-que-parfait-futur-anterieur",
    visual: {
      kind: "table",
      data: {
        columns: ["Person", "Direct (COD: who/what)", "Indirect (COI: to whom)"],
        rows: [
          ["1st sing (me)", "me (m')", "me (m')"],
          ["2nd sing (you)", "te (t')", "te (t')"],
          ["3rd sing masc/fem (him/her/it)", "le / la (l')", "lui (to him/her)"],
          ["1st plur (us)", "nous", "nous"],
          ["2nd plur (you)", "vous", "vous"],
          ["3rd plur (them)", "les", "leur (to them)"]
        ]
      }
    },
    content: {
      intro: "A direct object (COD) answers 'who?' or 'what?' without a preposition (aimer quelqu'un). An indirect object (COI) answers 'to whom?' introduced by 'à' (parler à quelqu'un). In the 3rd person, they diverge: le/la/les for COD, lui/leur for COI.",
      tables: [
        {
          caption: "Common verbs with indirect objects (à)",
          columns: ["French Verb", "English Meaning", "Example with COI"],
          rows: [
            ["téléphoner à", "to call (phone)", "Je lui téléphone (I call him/her)"],
            ["parler à", "to speak to", "Tu leur parles (You speak to them)"],
            ["donner ... à", "to give ... to", "Il lui donne le livre (He gives him/her the book)"],
            ["répondre à", "to answer", "Elle lui répond (She answers him/her)"]
          ]
        }
      ],
      example: { fr: "Je vois Marie (COD) -> Je la vois. Je parle à Marie (COI) -> Je lui parle.", en: "I see Marie -> I see her. I speak to Marie -> I speak to her." },
      callouts: [
        {
          label: "Lui and Leur are gender-neutral",
          body: "Unlike direct pronouns (le vs. la), indirect 'lui' means 'to him' OR 'to her', and 'leur' means 'to them' (masculine or feminine).",
          cite: "Lawless French — Indirect Objects"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: 'Replace with a pronoun: "J\'écris une lettre à Paul."', opts: ["Je lui écris une lettre.", "Je le écris une lettre.", "Je leur écris une lettre.", "J'y écris une lettre."], a: "Je lui écris une lettre." },
        { q: 'Replace with a pronoun: "Je regarde le film."', opts: ["Je le regarde.", "Je lui regarde.", "Je la regarde.", "Je leur regarde."], a: "Je le regarde." },
        { q: 'What does the indirect pronoun "lui" mean?', opts: ["to him OR to her", "to him only", "to them", "to it"], a: "to him OR to her" },
        { q: 'Replace with a pronoun: "Nous téléphonons à nos parents."', opts: ["Nous leur téléphonons.", "Nous les téléphonons.", "Nous lui téléphonons.", "Nous y téléphonons."], a: "Nous leur téléphonons." },
        { q: 'In "Tu ___ aides" (You help me), which pronoun fits?', opts: ["m'", "lui", "à moi", "moi"], a: "m'" }
      ]
    },
    reference: {
      read: [
        { title: "Global Exam — Direct and Indirect Object Explainer", url: "https://global-exam.com/blog/en/french-grammar-direct-and-indirect-object/", note: "COD vs COI, verbs that take à" },
        { title: "Lawless French — Indirect Objects", url: "https://www.lawlessfrench.com/grammar/indirect-objects/", note: "Me, te, lui, nous, vous, leur syntax" },
        { title: "Learn to French — Master COD and COI", url: "https://learntofrench.com/master-cod-and-coi-in-french-explained/", note: "Step-by-step diagnostic guide" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add COD and COI topic"`.

---

### Task 24: Relative Pronouns: dont, où (Grammar #18, B1 — completes B1)

**Files:** Create `data/topics/grammar/b1-relative-pronouns-dont-ou.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b1-relative-pronouns-dont-ou"] = {
    id: "b1-relative-pronouns-dont-ou",
    module: "grammar",
    level: "B1",
    title: "Relative Pronouns: dont, où",
    order: 18,
    requires: "b1-direct-indirect-object-pronouns",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Function", "Key Rule", "Short Example"],
        rows: [
          ["qui", "Subject", "Followed by a verb", "La femme qui parle"],
          ["que (qu')", "Direct object", "Followed by subject + verb", "Le livre que je lis"],
          ["dont", "Object of 'de'", "Replaces noun after verb + de", "Le livre dont je parle (parler de)"],
          ["où", "Place or Time", "Refers to location or moment", "La ville où j'habite / Le jour où..."]
        ]
      }
    },
    content: {
      intro: "While qui and que connect subjects and direct objects, dont replaces any phrase introduced by 'de' (avoir besoin de, parler de, avoir peur de). Où refers to a place ('where') or a point in time ('when').",
      tables: [
        {
          caption: "Common 'de' triggers requiring 'dont'",
          columns: ["Expression", "Combined with 'dont'"],
          rows: [
            ["avoir besoin de (to need)", "C'est l'outil dont j'ai besoin."],
            ["avoir peur de (to be afraid of)", "C'est le chien dont j'ai peur."],
            ["être fier de (to be proud of)", "Ce sont les résultats dont il est fier."],
            ["parler de (to speak of)", "C'est le projet dont nous parlons."]
          ]
        }
      ],
      example: { fr: "Voici la ville où je suis né, et l'ami dont je t'ai parlé.", en: "Here is the town where I was born, and the friend whom I spoke to you about." },
      callouts: [
        {
          label: "The Intermediate Plateau & Autonomous Motivation",
          body: "Reaching B1 is where language learners frequently encounter the 'intermediate plateau' — the rapid early gains slow down as grammar nuances multiply. Meta-analyses across 24,470 language learners confirm that autonomous motivation (learning for personal meaning and curiosity, r = .23) sustains long-term achievement, whereas external pressure has no positive relationship (r = -.03). Connect this material to genuine French books, podcasts, or conversations you care about.",
          cite: "Alamer et al., Educ Psychol Rev 2025; The French Experiment"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"C\'est le restaurant ___ je t\'ai parlé (parler de)."', opts: ["dont", "que", "où", "qui"], a: "dont" },
        { q: '"Le jour ___ nous sommes arrivés, il pleuvait."', opts: ["où", "quand", "dont", "que"], a: "où" },
        { q: '"Voici le livre ___ j\'ai besoin (avoir besoin de)."', opts: ["dont", "que", "qui", "lequel"], a: "dont" },
        { q: '"Paris est la ville ___ elle habite."', opts: ["où", "dont", "qui", "que"], a: "où" },
        { q: 'Which relative pronoun replaces a phrase starting with "de"?', opts: ["dont", "que", "qui", "où"], a: "dont" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — pror3", url: "https://laits.utexas.edu/tex/gr/pror3.html", note: "Relative pronouns dont and où" },
        { title: "The French Experiment — Best way to learn French", url: "https://www.thefrenchexperiment.com/best-way-to-learn-french", note: "The intermediate plateau and staying motivated" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify (B1 band should show 5/5), commit as `git commit -m "Add Relative Pronouns dont and où topic, completing B1"`.

---

### Task 25: Present Subjunctive (Grammar #19, B2–C1)

**Files:** Create `data/topics/grammar/b2c1-present-subjunctive.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b2c1-present-subjunctive"] = {
    id: "b2c1-present-subjunctive",
    module: "grammar",
    level: "B2-C1",
    title: "Present Subjunctive",
    order: 19,
    requires: "b1-relative-pronouns-dont-ou",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Regular Ending (ils-stem)", "parler (ils parlent)", "finir (ils finissent)", "attendre (ils attendent)"],
        rows: [
          ["que je", "-e", "que je parle", "que je finisse", "que j'attende"],
          ["que tu", "-es", "que tu parles", "que tu finisses", "que tu attendes"],
          ["qu'il / elle", "-e", "qu'il parle", "qu'elle finisse", "qu'il attende"],
          ["que nous", "-ions", "que nous parlions", "que nous finissions", "que nous attendions"],
          ["que vous", "-iez", "que vous parliez", "que vous finissiez", "que vous attendiez"],
          ["qu'ils / elles", "-ent", "qu'ils parlent", "qu'elles finissent", "qu'ils attendent"]
        ]
      }
    },
    content: {
      intro: "The subjunctive is a mood expressing subjectivity, doubt, necessity, emotion, or will. Regular formation takes the 3rd person plural (ils) present indicative stem, dropping -ent, and adds: -e, -es, -e, -ions, -iez, -ent.",
      tables: [
        {
          caption: "Common irregular subjunctive stems",
          columns: ["Infinitive", "que je...", "que nous..."],
          rows: [
            ["être", "que je sois", "que nous soyons"],
            ["avoir", "que j'aie", "que nous ayons"],
            ["faire", "que je fasse", "que nous fassions"],
            ["aller", "que j'aille", "que nous allions"],
            ["pouvoir", "que je puisse", "que nous puissions"],
            ["savoir", "que je sache", "que nous sachions"]
          ]
        }
      ],
      example: { fr: "Il faut que tu fasses attention et qu'elle vienne demain.", en: "It is necessary that you pay attention and that she come tomorrow." },
      callouts: [
        {
          label: "Subjunctive trigger formula",
          body: "Subjunctive requires: 1) Two different subjects, 2) Linked by 'que', 3) Main clause expressing necessity (il faut que), emotion (je suis content que), desire (je veux que), or doubt (je doute que).",
          cite: "Tex's French Grammar tas1/tas5; Easy French ch.16"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: '"Il faut que tu ___ (faire) tes devoirs."', opts: ["fasses", "fais", "feras", "fasse"], a: "fasses" },
        { q: "Regular subjunctive endings for nous and vous are identical to which tense?", opts: ["imparfait", "présent", "futur simple", "conditionnel"], a: "imparfait" },
        { q: '"Je veux qu\'il ___ (être) à l\'heure."', opts: ["soit", "est", "sera", "sois"], a: "soit" },
        { q: 'Which conjunction triggers the subjunctive?', opts: ["bien que", "parce que", "pendant que", "dès que"], a: "bien que" },
        { q: '"Il est possible que nous ___ (venir)."', opts: ["venions", "venons", "viendrons", "veniez"], a: "venions" }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tas1/tas5", url: "https://laits.utexas.edu/tex/gr/tas1.html", note: "Present subjunctive formation and conjunction triggers" },
        { title: "Jane Lippmann Subjunctive Series (LAITS)", url: "https://laits.utexas.edu/jnl/subjunctive/index.html", note: "3-part deep dive on regular, irregular, and triggers" },
        { title: "Easy French Step-by-Step, Chapter 16", url: null, note: "The subjunctive mood" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Present Subjunctive topic"`.

---

### Task 26: Past Subjunctive & Recap (Grammar #20, B2–C1)

**Files:** Create `data/topics/grammar/b2c1-past-subjunctive-recap.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b2c1-past-subjunctive-recap"] = {
    id: "b2c1-past-subjunctive-recap",
    module: "grammar",
    level: "B2-C1",
    title: "Past Subjunctive & Synthesis",
    order: 20,
    requires: "b2c1-present-subjunctive",
    visual: {
      kind: "table",
      data: {
        columns: ["Pronoun", "Auxiliary Avoir (subjunctive)", "Auxiliary Être (subjunctive)", "Past Participle"],
        rows: [
          ["que je", "aie", "sois", "fini / parti(e)"],
          ["que tu", "aies", "sois", "fini / parti(e)"],
          ["qu'il / elle", "ait", "soit", "fini / parti(e)"],
          ["que nous", "ayons", "soyons", "fini / parti(e)s"],
          ["que vous", "ayez", "soyez", "fini / parti(e)(s)"],
          ["qu'ils / elles", "aient", "soient", "fini / parti(e)s"]
        ]
      }
    },
    content: {
      intro: "The subjonctif passé expresses a past, completed event subject to a subjunctive trigger in the present. It combines the present subjunctive of avoir or être with the past participle.",
      tables: [
        {
          caption: "Indicative vs. Subjunctive Contrast",
          columns: ["Main Clause Meaning", "Mood", "Example"],
          rows: [
            ["Certainty / Belief", "Indicatif", "Je pense qu'il *est* prêt."],
            ["Doubt / Negation", "Subjonctif", "Je ne pense pas qu'il *soit* prêt."],
            ["Fact / Cause", "Indicatif", "Parce qu'il *a plu*, on est resté."],
            ["Concession / Purpose", "Subjonctif", "Bien qu'il *ait plu*, on est sorti."]
          ]
        }
      ],
      example: { fr: "Je suis heureux que tu aies réussi ton examen.", en: "I am happy that you passed your exam." },
      callouts: [
        {
          label: "Synthesis Rule: Meaning drives mood",
          body: "The subjunctive is never triggered by chance — it signals the speaker's emotional stance or epistemic uncertainty about the proposition. If there is objective certainty, use the indicative.",
          cite: "Tex's French Grammar tas6/tas7"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "How is the past subjunctive (subjonctif passé) formed?", opts: ["present subjunctive of avoir/être + past participle", "imparfait of avoir/être + past participle", "present indicative + infinitive", "conditional of avoir + past participle"], a: "present subjunctive of avoir/être + past participle" },
        { q: '"Je doute qu\'elle ___ (partir) à l\'heure."', opts: ["soit partie", "est partie", "ait parti", "serait partie"], a: "soit partie" },
        { q: '"Je suis content que vous ___ (venir)."', opts: ["soyez venus", "êtes venus", "ayez venu", "veniez"], a: "soyez venus" },
        { q: 'Choose the correct mood: "Je sais qu\'il ___ (dire) la vérité."', opts: ["dit (indicatif)", "dise (subjonctif)", "ait dit (subjonctif)", "disant"], a: "dit (indicatif)" },
        { q: 'Which sentence correctly uses the past subjunctive?', opts: ["Bien qu'il ait fait froid, nous sommes sortis.", "Bien qu'il a fait froid, nous sommes sortis.", "Parce qu'il ait fait froid, nous sommes sortis.", "Il est certain qu'il ait fini."], a: "Bien qu'il ait fait froid, nous sommes sortis." }
      ]
    },
    reference: {
      read: [
        { title: "Tex's French Grammar — tas6", url: "https://laits.utexas.edu/tex/gr/tas6.html", note: "Subjonctif passé formation and sequence of tenses" },
        { title: "Tex's French Grammar — tas7", url: "https://laits.utexas.edu/tex/gr/tas7.html", note: "Comprehensive subjunctive vs indicative summary" }
      ],
      watchListen: []
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify, commit as `git commit -m "Add Past Subjunctive & Synthesis topic"`.

---

### Task 27: Register & Social Nuance: tu vs. vous (Grammar #21, B2–C1 — completes Grammar)

**Files:** Create `data/topics/grammar/b2c1-register-tu-vous.js`

```js
(function () {
  window.TOPICS = window.TOPICS || {};
  window.TOPICS["b2c1-register-tu-vous"] = {
    id: "b2c1-register-tu-vous",
    module: "grammar",
    level: "B2-C1",
    title: "Register & Social Nuance: tu vs. vous",
    order: 21,
    requires: "b2c1-past-subjunctive-recap",
    visual: {
      kind: "table",
      data: {
        columns: ["Dimension", "Tutoiement (tu)", "Vouvoiement (vous)"],
        rows: [
          ["Social distance", "Intimacy, solidarity, informal", "Respect, distance, hierarchy, professional"],
          ["Whom to address", "Family, friends, children, fellow students", "Strangers, superiors, service workers, doctors, elders"],
          ["Default verb for changing", "On peut se tutoyer ? (Can we use tu?)", "Vouloir vouvoyer (to keep formal distance)"],
          ["Spoken subject shift", "'on' often replaces 'nous' in conversation", "'vous' remains strictly formal or plural"]
        ]
      }
    },
    content: {
      intro: "Grammar mastery at B2-C1 culminates in pragmatic competence: knowing not just what is grammatically correct, but socially appropriate. Tutoiement (using tu) and vouvoiement (using vous) reflect relational distance, power balance, and cultural context.",
      tables: [
        {
          caption: "Real-world social interaction rules",
          columns: ["Scenario", "Safe Default", "Nuance / Transition Rule"],
          rows: [
            ["Boutique / Café / Bakery", "Vous", "Always greet with 'Bonjour monsieur/madame' and vous"],
            ["Workplace (Tech / Startups)", "Tu (often)", "Follow the team culture; start with vous in interviews"],
            ["Workplace (Corporate / Gov)", "Vous", "Wait for the senior colleague to propose tutoiement"],
            ["Online communities / Gaming", "Tu", "Informal peer norms dominate online French spaces"]
          ]
        }
      ],
      example: { fr: "On peut se tutoyer si vous voulez ? — Avec plaisir !", en: "Can we use 'tu' with each other if you like? — With pleasure!" },
      callouts: [
        {
          label: "Pragmatic Competence & Output Finding",
          body: "Empirical studies comparing classroom instruction and mobile apps showed that while apps match classroom gains on grammar and vocabulary tests, app-only learners scored 2 points lower on pragmatic competence (the tu vs. vous register test). Real interactive output and communicative awareness are essential to bridge the gap from textbook accuracy to native social nuance.",
          cite: "Loewen et al., 2020; french-learning-strategies.md finding #6"
        }
      ]
    },
    test: {
      passScore: 4,
      questions: [
        { q: "What is the verb for addressing someone using 'tu'?", opts: ["tutoyer", "vouvoyer", "parler", "tutoie"], a: "tutoyer" },
        { q: "Entering a bakery in Lyon to order bread, which register should you use with the baker?", opts: ["vous (vouvoiement)", "tu (tutoiement)", "either is equally fine", "neither, use third person"], a: "vous (vouvoiement)" },
        { q: "How do you politely ask a colleague if you can switch to 'tu'?", opts: ["On peut se tutoyer ?", "Tu peux me parler ?", "Voulez-vous tu ?", "Tu es mon ami ?"], a: "On peut se tutoyer ?" },
        { q: "In modern informal spoken French, which pronoun overwhelmingly replaces 'nous' as the subject?", opts: ["on", "ils", "vous", "soi"], a: "on" },
        { q: "Why did empirical studies find app-only language learners scored lower on pragmatic competence?", opts: ["apps rarely simulate social stakes and nuanced conversational output", "apps don't teach grammar rules", "apps only teach slang", "classroom students spend more hours"], a: "apps rarely simulate social stakes and nuanced conversational output" }
      ]
    },
    reference: {
      read: [
        { title: "Français Authentique — Les registres de langue", url: "https://www.francaisauthentique.com/", note: "Natural spoken French, social register, and conversational nuances" },
        { title: "Loewen et al. (2020) — Pragmatic Competence in Mobile Learning", url: null, note: "Empirical comparison of tu/vous acquisition between classroom and apps" }
      ],
      watchListen: [
        { title: "Français Authentique Podcast", url: "https://www.francaisauthentique.com/podcast/", note: "Native French explanations of cultural etiquette and conversational rules" }
      ]
    }
  };
})();
```

- [ ] **Steps 2–5:** update, add tag, verify (Grammar module should show 21/21 in curriculum), commit as `git commit -m "Add Register and Social Nuance topic, completing Grammar module"`.

---

### Task 28: Full-chain integration verification & manual testing checklist

**Files:**
- Modify: `data/modules.js` (verify all 21 grammar topics and 3 vocabulary topics are registered in order)
- Modify: `index.html` (verify all 24 topic script tags are included in order)
- Create: `test/data.test.js` (automated consistency verification)

- [ ] **Step 1: Write `test/data.test.js`**

```js
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Simulate browser environment
globalThis.window = globalThis;
globalThis.TOPICS = {};
globalThis.MODULES = [];

// Load modules and topics
require('../progress.js');
require('../data/modules.js');

const grammarFiles = [
  'a1-articles.js', 'a1-etre-avoir-negation.js', 'a1-present-tense.js', 'a1-pronouns-intro.js',
  'a1-futur-proche.js', 'a1-reflexive-verbs.js', 'a1-possessive-adjectives.js', 'a1-partitive-articles.js',
  'a2-relative-pronouns-qui-que.js', 'a2-passe-compose-avoir.js', 'a2-passe-compose-etre.js',
  'a2-imparfait.js', 'a2-object-pronoun-order.js', 'b1-futur-simple.js', 'b1-conditional.js',
  'b1-plus-que-parfait-futur-anterieur.js', 'b1-direct-indirect-object-pronouns.js',
  'b1-relative-pronouns-dont-ou.js', 'b2c1-present-subjunctive.js', 'b2c1-past-subjunctive-recap.js',
  'b2c1-register-tu-vous.js'
];

const vocabFiles = [
  'a1-alphabet.js', 'a1-numbers.js', 'a1-greetings.js'
];

vocabFiles.forEach(f => require(path.join(__dirname, '../data/topics/vocabulary', f)));
grammarFiles.forEach(f => require(path.join(__dirname, '../data/topics/grammar', f)));

// 1. Verify counts
assert.strictEqual(Object.keys(window.TOPICS).length, 24, "Should have 24 total topics");
const grammarMod = window.MODULES.find(m => m.id === 'grammar');
const vocabMod = window.MODULES.find(m => m.id === 'vocabulary');
assert.strictEqual(grammarMod.topics.length, 21, "Grammar module must have 21 topics");
assert.strictEqual(vocabMod.topics.length, 3, "Vocabulary module must have 3 topics");

// 2. Verify prerequisite chain for Grammar
let prevId = null;
for (const topicId of grammarMod.topics) {
  const topic = window.TOPICS[topicId];
  assert.ok(topic, `Topic ${topicId} must exist`);
  assert.strictEqual(topic.requires, prevId, `Topic ${topicId} requires should be ${prevId}`);
  assert.strictEqual(topic.test.questions.length, 5, `Topic ${topicId} must have exactly 5 questions`);
  assert.strictEqual(topic.test.passScore, 4, `Topic ${topicId} passScore must be 4`);
  topic.test.questions.forEach((q, qi) => {
    assert.ok(q.opts.includes(q.a), `Topic ${topicId} Q${qi+1} answer '${q.a}' must be in opts`);
  });
  prevId = topicId;
}

console.log("data.test.js: All 24 topics validated successfully!");
```

- [ ] **Step 2: Run tests**
`node test/progress.test.js`
`node test/data.test.js`

- [ ] **Step 3: End-to-end browser verification checklist**
1. Gating blocks locked topic (clicking topic 2 before passing topic 1 is disabled).
2. Passing topic 1 with score 4/5 or 5/5 unlocks topic 2 immediately in sidebar and activates Next button.
3. Progress persists across page reload (`localStorage` retains completed scores).
4. Light/dark theme toggle works and choice persists across reload.
5. Pronunciation speak button works smoothly.
6. Responsive design renders properly on both desktop and mobile viewports.
