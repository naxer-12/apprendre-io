# Apprendre.io — Grammar Module (A1→C1) Design

Status: approved by user, ready for implementation planning
Date: 2026-09-04

## 1. Purpose

Build the first real (non-mockup) working version of Apprendre.io: a French-learning
site where students pick a module, work through a CEFR-leveled curriculum of topic
pages, and cannot advance past a topic until they pass its test. This build delivers
one module completely — **Grammar, A1 → C1** — since the source material available
(French_50_Sources_A1_to_C1.md, plus the two full textbooks *Easy French Step-by-Step*
and *Madrigal's Magic Key to French*) is overwhelmingly grammar-shaped past the A1
band. Vocabulary keeps its 3 existing A1 topics (Alphabet, Numbers, Greetings) from
the mockup phase; the other 4 modules (Reading, Writing, Speaking, Listening) exist in
the sidebar as locked/"coming soon" stubs. Each of those becomes its own follow-up
build with its own spec.

Visual/UX design is the already-approved "Apprendre.io" mockup: sidebar curriculum
tree, Learn/Practice nav split, breadcrumb + prev/next lesson nav, working light/dark
toggle, pronunciation-speaker buttons, and the lesson template Visual → Content → Test
→ Reference.

## 2. Non-goals (explicitly out of scope for this build)

- Accounts, login, or any backend — progress lives in `localStorage` only.
- Reading, Writing, Speaking, Listening module content — stubs only.
- Vocabulary topics beyond the 3 already built (e.g. cognate-conversion technique from
  Madrigal's book is a strong candidate for the *next* Vocabulary topic, not this one).
- Scraping or reproducing copyrighted lesson text from any external site. Content is
  written original, grounded in the (uncopyrightable) grammar facts themselves, and
  external sites are linked as citations/"go deeper" reference, the same pattern the
  50-sources file already uses.
- A build step, bundler, or package manager. Plain HTML/CSS/JS, no npm install needed
  to run it.

## 3. Architecture

**Vanilla, data-driven, no build step.** One HTML app shell renders everything at
runtime from JS data files. Rationale: content (21 topics × visual/content/test/
reference) is the actual bulk of the work here, not app logic; a framework or build
step would add real setup and maintenance cost for no corresponding benefit while
there's no backend and no per-page routing need. Revisit this choice if/when the site
grows real interactivity a framework would meaningfully help with (e.g. accounts).

### File structure

```
apprendre-io/
  index.html              # app shell: header, sidebar mount point, main mount point
  styles.css              # all styling (light/dark tokens, components)
  app.js                  # rendering, routing (client-side, hash-based), state/progress
  data/
    modules.js            # module metadata: id, name, icon, description, topic order
    topics/
      grammar/
        a1-articles.js
        a1-etre-avoir-negation.js
        a1-present-tense.js
        a1-pronouns-intro.js
        a1-futur-proche.js
        a1-reflexive-verbs.js
        a1-possessive-adjectives.js
        a1-partitive-articles.js
        a2-relative-pronouns-qui-que.js
        a2-passe-compose-avoir.js
        a2-passe-compose-etre.js
        a2-imparfait.js
        a2-object-pronoun-order.js
        b1-futur-simple.js
        b1-conditional.js
        b1-plus-que-parfait-futur-anterieur.js
        b1-direct-indirect-object-pronouns.js
        b1-relative-pronouns-dont-ou.js
        b2c1-present-subjunctive.js
        b2c1-past-subjunctive-recap.js
        b2c1-register-tu-vous.js
      vocabulary/
        a1-alphabet.js
        a1-numbers.js
        a1-greetings.js
  README.md                # how to run it (open index.html, or `python3 -m http.server`)
```

One file per topic keeps each file small and independently readable/editable — adding
topic 22 is "add a file, add one line to modules.js," never an edit to shared code.

### Data model

Each topic file exports one object:

```js
{
  id: "a2-passe-compose-avoir",
  module: "grammar",
  level: "A2",
  title: "Passé Composé with avoir",
  order: 8,                       // position within the module's full sequence
  requires: "a1-reflexive-verbs", // id of the topic that must be passed first (or null)
  visual: { kind: "conjugation-table" | "letter-grid" | "timeline" | ..., data: [...] },
  content: {
    intro: "…",
    tables: [ { caption, columns, rows } ],
    example: { fr: "…", en: "…" },   // short in-context line, Easy French–style
    callouts: [ { label, body, cite } ]  // strategy tie-ins, e.g. retrieval+feedback
  },
  test: {
    passScore: 4,
    questions: [ { q, options: [...], answer: "…" } ]  // 5 per topic
  },
  reference: {
    read: [ { title, url, note } ],
    watchListen: [ { title, url, note } ]
  }
}
```

`visual.kind` is a small fixed set of renderer types (conjugation table, letter/number
grid, pronoun-order diagram, timeline for tense sequencing) — new topics reuse one of
these rather than inventing bespoke layout each time.

### State & progress

A single `localStorage` key (`apprendre-io:progress`) holds:

```js
{ completed: { "<topicId>": { score: 5, date: "2026-09-04" } }, streak: 4, lastVisit: "…" }
```

`app.js` exposes `isUnlocked(topicId)` (true if `requires` is null or already
completed) and `recordScore(topicId, score)` (writes to localStorage, unlocks the next
topic if score ≥ `passScore`). The sidebar tree, lesson gating, and prev/next nav all
read from this same function — one source of truth, no duplicated unlock logic.

### Rendering

`app.js` reads `location.hash` (e.g. `#/grammar/a2-passe-compose-avoir`) to decide what
to render into the main mount point — sidebar overview, practice queue, or a lesson —
using plain template-literal functions per section (no virtual DOM needed at this
scale). The sidebar tree is generated once from `modules.js` + each topic's `requires`
chain, re-rendered whenever progress changes.

### Pronunciation

Reuses the mockup's `speak(text)` wrapper around `window.speechSynthesis` with
`lang: 'fr-FR'`, wrapped in try/catch, silently doing nothing if unsupported.

### Theming

Reuses the mockup's token-based light/dark CSS (`:root`, `prefers-color-scheme`,
`[data-theme]`) and the working toggle button that persists choice to
`localStorage`.

## 4. Curriculum: Grammar, A1 → C1 (21 topics)

| # | Level | Topic | Primary source(s) |
|---|---|---|---|
| 1 | A1 | Articles & Gender of Nouns | Tex's Grammar *det2*; Easy French ch.1 |
| 2 | A1 | Être, Avoir & Negation | Tex's Grammar *virr1*; Easy French ch.2 |
| 3 | A1 | Present Tense: -er/-ir/-re Verbs | Tex's Grammar *tapr1*; Easy French ch.3–5 |
| 4 | A1 | Subject & Object Pronouns, Intro | Tex's Grammar *pro1* |
| 5 | A1 | Futur Proche (aller + infinitive) | Tex's Grammar *taf1*; Easy French ch.6 |
| 6 | A1 | Reflexive / Pronominal Verbs | Tex's Grammar *tap4*; Easy French ch.12 |
| 7 | A1 | Possessive Adjectives | Easy French ch.10; The French Experiment |
| 8 | A1 | Partitive Articles (du/de la/des) | Easy French ch.9; The French Experiment |
| 9 | A2 | Relative Pronouns: qui / que | Tex's Grammar *pror1* |
| 10 | A2 | Passé Composé with avoir | Tex's Grammar *tap2*; Easy French ch.13 |
| 11 | A2 | Passé Composé with être | Tex's Grammar *tap3*; Easy French ch.13 |
| 12 | A2 | Imparfait: Formation & Use | Tex's Grammar *tap5/tap7*; Easy French ch.14 |
| 13 | A2 | Object Pronoun Order | Tex's Grammar *pro9*; Easy French ch.14 |
| 14 | B1 | Futur Simple | Tex's Grammar *taf2/taf3*; Easy French ch.15 |
| 15 | B1 | Conditional | Tex's Grammar *tac1*; Easy French ch.15 |
| 16 | B1 | Plus-que-parfait & Futur Antérieur | Tex's Grammar *tap9/taf5*; Easy French ch.15 |
| 17 | B1 | Direct & Indirect Object Pronouns (COD/COI) | Global Exam; Lawless French; Learn to French |
| 18 | B1 | Relative Pronouns: dont, où | Tex's Grammar *pror3* |
| 19 | B2–C1 | Present Subjunctive | Tex's Grammar *tas1/tas5*; Easy French ch.16 |
| 20 | B2–C1 | Past Subjunctive & Recap | Tex's Grammar *tas6/tas7*; Lippmann series |
| 21 | B2–C1 | Register & Social Nuance: tu vs. vous | strategies.md finding #6; Français Authentique |

Every topic's `requires` field points at the previous row's id, making the whole
module one linear chain (matches "the student should only progress once the topic is
done," and matches how both textbooks structure their own chapter order).

Around topic 17–18 (start of B1's back half), the Content section for one topic
includes a short, low-key acknowledgment of the "intermediate plateau" (The French
Experiment's term) — this is where learners commonly stall — tying to the strategies
doc's autonomous-motivation finding rather than presenting it as a warning.

## 5. Reference-citation policy

Each topic cites the sources that actually informed it — never a copy-pasted generic
set. Where more than one of the five source materials (50-sources file, Easy French,
Madrigal's, Lawless French's grammar index, The French Experiment) covers the same
topic, the Reference section lists more than one, each with a one-line note on what
that source specifically adds (matches the pattern already used for the Alphabet/
Numbers lessons in the mockup). Lawless French is cited only via the URL already
verified in the 50-sources file (`lawlessfrench.com/grammar/`) — the site blocks
automated crawling, so deeper page-level URLs are not fabricated.

## 6. Testing approach

No automated test framework for this build (a static content site with no backend
has little to unit-test). Verification is manual: open `index.html`, walk the full
chain from topic 1 through at least topic 3 confirming gating, score persistence
across a reload, and theme toggle persistence. The implementation plan should include
a manual QA checklist covering: gating blocks a locked topic, passing at 4/5 unlocks
the next, failing does not, progress survives a page reload, theme choice survives a
reload, pronunciation buttons don't throw in a browser without speech synthesis.

## 7. Open items for the next module builds (not this spec)

- Vocabulary module full build, starting with Madrigal's cognate-conversion technique.
- Reading module, likely leaning on Easy French's per-chapter reading passages and
  RFI/TV5MONDE for authentic graded text, once Grammar is live to link from.
- Whether Practice's flashcard queue needs real FSRS-interval math or a simpler fixed
  schedule is deferred until there's enough completed content to make the difference
  visible.
