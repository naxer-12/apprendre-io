# Agent Takeover & Project Handoff Summary: Apprendre.io

**Date:** September 2026
**Repository Path:** `/Users/jainamshah/apprendre-io`
**Current Branch:** `feature/feedback-4-enhancements`
**Architecture:** Zero-dependency, client-side static web application (HTML5, CSS3 Custom Properties, Vanilla ES6+ JavaScript, `localStorage` persistence). A simulated local auth gate was added in Feedback 8 — **there is still no server or database.**

---

## 1. Executive Overview & Purpose

`apprendre-io` is an evidence-based French language learning web application designed according to cognitive science principles:
- **Cognitive Load Theory (Sweller):** Visual schemas before rule explanations.
- **Desirable Difficulty (Bjork):** Hard prerequisite gating ($\ge 80\%$ score to unlock downstream topics).
- **Retrieval Practice (Roediger & Karpicke):** Stage 3 immediate active recall testing on every topic, plus original adult-level worksheets for select topics.
- **Dual Coding (Paivio):** Orthographic, IPA phonetic, audio pronunciation, and video modalities paired for every concept.

---

## 2. Tech Stack & Architectural Invariants

| Layer | Implementation | Notes |
|---|---|---|
| **Structure** | `index.html` | Semantic HTML5, accessible landmarks. Loads `authRoot` (auth/onboarding screens) as a sibling of the main `#app` shell. |
| **Styling** | `styles.css` | Tokenized CSS variables (`var(--...)`), 5 WCAG AAA themes, responsive design. Type system: **Fraunces** (headings), **Inter** (body/UI), **Source Code Pro** (mono/phonetics). |
| **Application Logic** | `app.js` | SPA hash-router (`#/module/topic`, `#/worksheet/:topicId`, `#/overview`), dynamic DOM rendering, Web Speech API, auth-gated `boot()` bootstrap. |
| **Auth** | `auth.js` | **Simulated local auth only** — sign-up/sign-in against `localStorage`-stored, hashed (SHA-256 via Web Crypto, non-crypto fallback off-`https`) credentials. Not real security. |
| **Progression Engine** | `progress.js` | Client-side gating engine: `localStorage` persistence, prerequisite tree traversal, score recording, **and streak tracking** (`recordActivity`). |
| **Curriculum Data** | `data/modules.js`, `data/pathways.js`, `data/topics/**/*.js` | Modules = per-skill topic lists (unchanged order, used for module-tree sidebar & module cards). Pathways = the cross-module recommended Beginner unit sequence (sidebar display order only — see §3). |
| **Testing** | `test/*.test.js` | Headless Node.js unit and simulation tests, no external test runner. Run via `npm test`. |

### Architectural Invariants (DO NOT BREAK)
1. **Zero External Build Step / Dependencies:** Must run instantly via static file server or directly in the browser. No npm build, webpack, or external framework dependencies. `package.json` exists only for a `test`/`start` script convenience — it has no `dependencies`.
2. **No Real Backend:** Feedback 5 added and then rolled back a real backend/DB. Feedback 8 added sign-in/sign-up but explicitly as **simulated local-only auth** (`localStorage`, no server). Don't quietly upgrade this to a real backend without an explicit, unambiguous user request — this exact oscillation has happened twice already.
3. **Zero Iframes and Zero Unavailable Content (`ADR-007`):** Use **clean video resource link cards** (`.video-link-card`) with verified, reachable (HTTP 200) `watchUrl`s. Never insert fake, deleted, or unverified YouTube IDs.
4. **Hard Sequential Gating (`ADR-003`):** Topics are locked until prerequisite topics (`topic.requires`) are completed with a score of $\ge 4/5$ ($80\%$). As of Feedback 8, `requires` chains can cross module boundaries (see §3) — the gating *engine* in `progress.js` is unchanged, only the *data* now interleaves.
5. **Resilient French Speech Synthesis (`ADR-008`):** Use `window.speechSynthesis` with asynchronous voice caching, fallback matching (`fr-FR`, `fr-CA`), and visual `.speaking` ripple animation.
6. **Original Worksheet Content:** Vocabulary's 3 topics link to in-app worksheet pages (`#/worksheet/:topicId`) with exercises authored for adult learners (not tracing/coloring), each with a toggleable answer key. This is original content, not an external download — do not silently replace it with an external kid-oriented worksheet link (this was explicitly corrected once already).

---

## 3. Curriculum, Pathways & Content Inventory (28 Topics)

The application has **28 complete topics** across 6 modalities. Grammar (21), Vocabulary (3), and one A1 topic each for Reading/Writing/Speaking/Listening. See `data/modules.js` for the full per-module topic lists (unchanged in Feedback 8) and `docs/PRD.md` for the full topic-by-topic breakdown.

**Beginner pathway (Feedback 8):** For `userLevel === 'beginner'`, the sidebar renders `data/pathways.js`'s `PATHWAYS.beginner` — 8 thematic units covering exactly the 20 A1+A2 topics, in an order grounded in common A1 course sequencing (greetings/intro first → naming/articles → pronouns → core verbs → numbers → applied skills → A2 past tenses), rather than the raw per-skill module tree. **This is a real change to each topic's `requires` field**, not just a display reorder — completing topics out of the new pathway order will show them as locked even from a different module's own page. Intermediate and Expert still see the original per-module tree (`renderModuleTreeSidebar`); only Beginner uses `renderPathwaySidebar`. If you extend the pathway concept to Intermediate/Expert, update `data/pathways.js` and the `data.test.js` pathway-coverage assertion together.

---

## 4. Topic Page Structure: The 4-Stage Layout (+ Worksheet)

Every topic view (`renderLesson`) is partitioned into 4 pedagogical stages, with an optional worksheet link after Stage 3:
1. **Stage 1 · Visual Reference:** Card grid or table, IPA phonetic guide, `.speak-btn` pronunciation buttons.
2. **Stage 2 · Content & Rules:** High-yield rules, bilingual examples, and a deep-dive callout jumping to Stage 4.
3. **Stage 3 · Short Test:** 5 MCQs, instant feedback, `recordScore()` + `recordActivity()` (streak) on completion. **If the topic has `reference.worksheet`, a `.worksheet-link-card` appears immediately after the quiz**, linking to `#/worksheet/:topicId` (`renderWorksheet`) — an in-app page with numbered exercises and a toggleable answer key. Currently wired for the 3 Vocabulary topics only.
4. **Stage 4 · Reference & Video:** `.video-link-card` + curated text citations.

---

## 5. Theme & Design System

5 WCAG AAA themes, selectable via the header dropdown, persisted at `localStorage["apprendre-io:theme"]`:
1. **Light (`light`, default):** Warm cream ground (`#FFFBF5`), amber accent (`#B45309`) — redesigned in Feedback 6 from a cool blue/white "documentation" look to a warmer, Brilliant.org-inspired editorial feel.
2. **Dark (`dark`):** Midnight navy/black (`#090D16`).
3. **Sepia (`sepia`):** Warm reading parchment (`#FAF6ED`) — now close in tone to Light; kept as a distinct deeper/parchment option.
4. **Nordic (`nordic`):** Arctic navy (`#0F172A`), sky-blue accents.
5. **Matcha (`matcha`):** Botanical green (`#F4F7F4`).

Typography (all themes): **Fraunces** for headings/brand, **Inter** for body/UI, **Source Code Pro** for mono/phonetics/code.

---

## 6. Feedback & Decision History

- **Feedback 1 & 2:** Established core A1-C1 curriculum, prerequisite tree, and client-side gating.
- **Feedback 3:** Added 5 WCAG AAA themes; removed repetitive motivational callouts from vocabulary pages; git branch tracking.
- **Feedback 4:** Replaced iframes with clickable video cards (`ADR-007`); UI animations; Web Speech reliability (`ADR-008`); Stage 2 deep-dive link (`ADR-009`); removed Practice tab.
- **Feedback 5 & Rollback:** User asked for a backend/auth, then immediately asked to roll it back. Backend branch deleted; returned to pure static architecture. Finalized removal of legacy iframe CSS/embeds.
- **Feedback 6:**
  - Full visual redesign inspired by brilliant.org: Fraunces/Inter/Source Code Pro type system, warm cream/amber default palette, softer rounded cards.
  - Removed the redundant "Active Pathway" card from the overview page (duplicated the header's level picker).
  - Added practice-worksheet links (external, at the time) after the quiz for the 3 Vocabulary topics.
- **Feedback 8:**
  - Added **simulated local auth** (sign-up/sign-in, `auth.js`) — explicitly *not* a real backend; user re-confirmed "no backend" after the Feedback 5 history, this is local-only by design.
  - Added an onboarding level-picker screen shown once per account after sign-up.
  - Reorganized the **Beginner** sidebar into a cross-module recommended pathway (`data/pathways.js`), with the underlying `requires` chain updated to match (20 A1+A2 topics re-sequenced; Intermediate/Expert untouched).
  - **Rewrote all 3 vocabulary worksheets from scratch** as original, adult-appropriate content (the previous external links were tracing/coloring-style worksheets aimed at children — flagged by the user as inappropriate for adult learners with prior language experience). Now rendered in-app at `#/worksheet/:topicId` with an answer key.
  - Added **streak tracking** (`progress.js: recordActivity`) — a header flame badge and a 7-day activity strip on the overview page.
  - Repo cleanup: removed stale `.DS_Store` files, removed the fully-shipped `docs/superpowers/{specs,plans}/2026-09-04-*` Grammar-module planning docs (superseded by shipped code + this file — still recoverable from git history), added `package.json` with a `test` script.

---

## 7. Directory Map

```text
/Users/jainamshah/apprendre-io/
├── index.html                   # Shell HTML: authRoot + app (header, sidebar, main)
├── styles.css                   # Tokenized CSS, theme palettes, animations, auth/streak/worksheet styles
├── app.js                       # SPA router, UI rendering, auth-gated boot(), speech synthesis
├── auth.js                      # Simulated local auth (localStorage only — see §2 invariant 2)
├── progress.js                  # State manager: progress, scores, unlock predicates, streaks
├── package.json                 # `npm test` / `npm start` convenience scripts, zero dependencies
├── AGENT_TAKEOVER_SUMMARY.md    # This file
├── README.md                    # Project overview and pedagogical rationale
├── data/
│   ├── modules.js               # Per-skill module → topic lists (unchanged structure)
│   ├── pathways.js              # Beginner cross-module recommended sidebar sequence
│   └── topics/
│       ├── grammar/             # 21 grammar topic files (A1 to C1)
│       ├── vocabulary/          # 3 vocabulary topic files (each has an original worksheet)
│       ├── reading/             # 1 reading topic file
│       ├── writing/             # 1 writing topic file
│       ├── speaking/            # 1 speaking topic file
│       └── listening/           # 1 listening topic file
├── docs/
│   └── PRD.md                   # Product Requirements Document & ADR log
└── test/
    ├── progress.test.js         # Gating + streak logic tests
    ├── auth.test.js             # Simulated auth sign-up/sign-in/session tests
    ├── data.test.js             # Schema validation for all 28 topics, prerequisite DAG, pathway coverage
    └── e2e-simulation.test.js   # End-to-end user progression simulation
```

---

## 8. Verification & Running Commands

### Run Static Server:
```bash
npm start   # or: python3 -m http.server 8085
# Open http://localhost:8085 in your browser
```

### Run Automated Tests:
```bash
npm test
```
Expected output:
```text
progress.test.js: all assertions passed
auth.test.js: all assertions passed
data.test.js: All 28 topics, video references, and the prerequisite/pathway graph validated successfully!
e2e-simulation.test.js: All end-to-end simulations passed!
```

---

## 9. Recommended Next Steps for Successor Agent

1. **Keep Architecture Pure Client-Side:** No real backend/database unless the user gives an explicit, unambiguous request — and even then, confirm scope carefully given the Feedback 5 / Feedback 8 history of asking then immediately declining.
2. **Extend the pathway concept:** Intermediate/Expert still use the old per-module tree. If asked, mirror the Beginner treatment in `data/pathways.js` and update `requires` chains + `data.test.js` accordingly.
3. **Additional Multi-Skill Content:** Reading/Writing/Speaking/Listening still have 1 starter topic each in A1; could expand to A2/B1 following the established schema (and would need pathway placement too).
4. **PWA / Offline Support:** A lightweight `service-worker.js` + `manifest.json` would allow offline operation without build tools.
5. **Considered and declined (Feedback 8 cleanup):** moving `app.js`/`auth.js`/`progress.js` into a `src/` subdirectory. For a ~4-file zero-build static site this added path-churn risk without a clear benefit — revisit only if the flat root actually becomes unwieldy.
