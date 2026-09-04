# Agent Takeover & Project Handoff Summary: Apprendre.io

**Date:** September 2026  
**Repository Path:** `/Users/jainamshah/apprendre-io`  
**Current Branch:** `feature/feedback-4-enhancements`  
**Architecture:** Zero-dependency, client-side static web application (HTML5, CSS3 Custom Properties, Vanilla ES6+ JavaScript, `localStorage` persistence).

---

## 1. Executive Overview & Purpose

`apprendre-io` is an evidence-based French language learning web application designed according to cognitive science principles:
- **Cognitive Load Theory (Sweller):** Visual schemas before rule explanations.
- **Desirable Difficulty (Bjork):** Hard prerequisite gating ($\ge 80\%$ score to unlock downstream topics).
- **Retrieval Practice (Roediger & Karpicke):** Stage 3 immediate active recall testing on every topic.
- **Dual Coding (Paivio):** Orthographic, IPA phonetic, audio pronunciation, and video modalities paired for every concept.

---

## 2. Tech Stack & Architectural Invariants

| Layer | Implementation | Notes |
|---|---|---|
| **Structure** | `index.html` | Semantic HTML5, accessible landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`). |
| **Styling** | `styles.css` | Tokenized CSS variables (`var(--...)`), 5 WCAG AAA themes, responsive design (desktop & mobile). |
| **Application Logic** | `app.js` | Single-Page Application (SPA) hash-router (`#/topic/:id`), dynamic DOM rendering, Web Speech API. |
| **Progression Engine** | `progress.js` | Client-side gating engine with `localStorage` persistence, prerequisite tree traversal, score recording. |
| **Curriculum Data** | `data/modules.js` & `data/topics/**/*.js` | Modular JavaScript objects loaded via regular `<script>` tags in `index.html`. |
| **Testing** | `test/*.test.js` | Headless Node.js unit and simulation tests without external test runners. |

### Architectural Invariants (DO NOT BREAK)
1. **Zero External Build Step / Dependencies:** Must run instantly via static file server or directly in the browser. No npm build, webpack, or external framework dependencies.
2. **Zero Iframes for Video (`ADR-007`):** YouTube inline iframes fail frequently with *"Video unavailable"* on external origins/localhost due to embed restrictions. Use **interactive local video cards** (`.video-card-link`) with HD thumbnails and direct watch links (`target="_blank" rel="noopener noreferrer"`).
3. **Hard Sequential Gating (`ADR-003`):** Topics are locked until prerequisite topics are completed with a score of $\ge 4/5$ ($80\%$).
4. **Resilient French Speech Synthesis (`ADR-008`):** Use `window.speechSynthesis` with asynchronous voice caching (`onvoiceschanged`), fallback matching (`fr-FR`, `fr-CA`), and visual `.speaking` ripple animation.

---

## 3. Curriculum & Content Inventory (28 Topics)

The application currently has **28 complete topics** organized into 6 modalities:

### 1. Grammar (21 Topics with Strict Prerequisites)
- **A1:**
  1. `grammar-a1-articles`: Definite & indefinite articles (*le, la, les, un, une, des*).
  2. `grammar-a1-etre-avoir-negation`: Essential verbs & standard negation (*ne... pas*).
  3. `grammar-a1-present-tense`: Regular *-er, -ir, -re* verbs in present indicative.
  4. `grammar-a1-pronouns-intro`: Subject pronouns and tonic pronouns (*moi, toi, lui*).
  5. `grammar-a1-possessive-adjectives`: Possessive adjectives agreement (*mon, ma, mes*).
  6. `grammar-a1-partitive-articles`: Expressing quantities (*du, de la, des, de*).
  7. `grammar-a1-reflexive-verbs`: Pronominal daily routine verbs (*se lever, se laver*).
  8. `grammar-a1-futur-proche`: Semi-auxiliary *aller* + infinitive.
- **A2:**
  9. `grammar-a2-passe-compose-avoir`: Past tense with *avoir* & regular/irregular past participles.
  10. `grammar-a2-passe-compose-etre`: DR MRS VANDERTRAMP motion verbs & agreement.
  11. `grammar-a2-imparfait`: Imperfect tense for descriptions, habits, states.
  12. `grammar-a2-object-pronoun-order`: Direct (*le/la/les*) & indirect (*lui/leur*) pronouns.
  13. `grammar-a2-relative-pronouns-qui-que`: Connecting clauses with subject *qui* vs object *que*.
- **B1:**
  14. `grammar-b1-futur-simple`: Simple future tense endings (*-ai, -as, -a, -ons, -ez, -ont*).
  15. `grammar-b1-conditional`: Present conditional expressing politeness, wishes, hypotheses.
  16. `grammar-b1-plus-que-parfait-futur-anterieur`: Compound past before past & prior future.
  17. `grammar-b1-direct-indirect-object-pronouns`: Advanced dual-pronoun replacement & positioning.
  18. `grammar-b1-relative-pronouns-dont-ou`: Relative pronouns replacing *de* and place/time.
- **B2 / C1:**
  19. `grammar-b2c1-present-subjunctive`: Necessity, doubt, emotion (*Il faut que...*).
  20. `grammar-b2c1-past-subjunctive-recap`: Past subjunctive (*aie parlé / sois venu*) & sequence of tenses.
  21. `grammar-b2c1-register-tu-vous`: Sociolinguistic register nuances (*tu* vs *vous*, formal inversion, slang).

### 2. Vocabulary (3 Topics)
- `vocab-a1-alphabet`: French alphabet, accent marks (*é, è, ê, ë, ç*), pronunciation guide.
- `vocab-a1-numbers`: Cardinal numbers 0-100, vigesimal system (70s, 80s, 90s).
- `vocab-a1-greetings`: Everyday greetings, polite formalities, parting expressions.

### 3. Multi-Skill A1 Modules (4 Topics)
- `reading-a1-reading-dialogue`: Reading comprehension of daily café & market dialogues.
- `writing-a1-writing-sentences`: Sentence composition & word order mechanics.
- `speaking-a1-speaking-introductions`: Spoken self-introductions, nationality, profession.
- `listening-a1-listening-comprehension`: Auditory discrimination & listening comprehension.

---

## 4. Topic Page Structure: The 4-Stage Layout

Every topic view (`renderTopicDetail`) is partitioned into 4 distinct pedagogical stages:
1. **Stage 1 · Visual Reference (`#stage-reference`):**
   - Visual summary card or table.
   - IPA phonetic guide.
   - Interactive speaker buttons (`.speak-btn`) invoking speech synthesis.
2. **Stage 2 · Content & Rules (`#stage-content`):**
   - High-yield grammatical rules and structural paradigms.
   - Example sentences with bilingual translation and speech buttons.
   - **Deep-Dive Link Card:** Dedicated callout linking to Stage 4 (*"The content above covers the core essentials. Discover where you can get more details for further topic and study ↓"*), smooth-scrolling to `#stage-reference` with `.highlight-pulse` animation.
3. **Stage 3 · Short Test (`#stage-quiz`):**
   - 5 targeted multiple-choice questions.
   - Immediate feedback on answer selection (`.correct` in green, `.wrong` in red).
   - Dynamic score calculation; scoring $\ge 4/5$ ($80\%$) triggers `recordScore()`, unlocking the next topic and displaying celebratory feedback.
4. **Stage 4 · Reference & Video (`#stage-reference`):**
   - **Interactive Video Card (`.video-card-link`):** Clickable YouTube video card with HD thumbnail (`img.youtube.com/vi/<ID>/hqdefault.jpg`), animated pulsing play button, channel tag, and direct watch URL in a new tab. Gracefully handles thumbnail errors via `onerror="this.style.display='none'"`.
   - **Authoritative Text Citations:** Curated reference links (Tex's French Grammar, TV5MONDE, Lawless French, etc.).

---

## 5. Theme & Accessibility System

The platform includes 5 WCAG AAA high-contrast themes selectable via the top header dropdown:
1. **Light (`light`):** Clean white ground (`#FFFFFF`), high-contrast slate ink (`#0F172A`).
2. **Dark (`dark`):** Midnight navy/black (`#090D16`), crisp white/cyan text.
3. **Sepia (`sepia`):** Warm reading parchment (`#FAF6ED`), deep espresso ink (`#261F18`).
4. **Nordic (`nordic`):** Arctic navy (`#0F172A`), frosty slate panels, sky-blue accents.
5. **Matcha (`matcha`):** Botanical green (`#F4F7F4`), deep forest ink (`#112217`).

Persistence key in `localStorage`: `apprendre-io:theme`.

---

## 6. Feedback & Decision History

- **Feedback 1 & 2:** Established core A1-C1 curriculum, prerequisite tree, and client-side gating.
- **Feedback 3:**
  - Added 5 WCAG AAA themes to eliminate washed-out light mode contrast issues.
  - Removed repetitive static retrieval-practice motivational callouts from vocabulary pages.
  - Created git branch tracking.
- **Feedback 4:**
  - Replaced problematic inline YouTube iframes with interactive clickable video cards (`ADR-007`).
  - Added UI animations (stage entrance, card hover elevation, score pulses).
  - Fixed Web Speech API voice loading with asynchronous caching and visual wave animations (`ADR-008`).
  - Added Stage 2 deep-dive link smoothly jumping to Stage 4 references (`ADR-009`).
  - Removed Practice tab from header and dashboard quick CTA.
- **Feedback 5 & Rollback:**
  - User inquired about fullstack backend/auth, but immediately instructed: *"please rollback this changes"*.
  - Clean rollback completed: experimental backend branch was deleted, returning repository to pure static client-side architecture.
  - Finalized clean removal of all legacy iframe CSS, hardened thumbnail degradation, and documented takeover handoff.

---

## 7. Directory Map

```text
/Users/jainamshah/apprendre-io/
├── index.html                   # Shell HTML: header, theme picker, level selector, sidebar, main area
├── styles.css                   # Tokenized CSS, theme palettes, animations, video card styles
├── app.js                       # SPA router, UI view rendering, speech synthesis engine
├── progress.js                  # State manager: progress, scores, unlock predicates, reset
├── AGENT_TAKEOVER_SUMMARY.md    # This file
├── README.md                    # Project overview and pedagogical rationale
├── data/
│   ├── modules.js               # Curriculum manifest (levels, modalities, topic order, prerequisites)
│   └── topics/
│       ├── grammar/             # 21 grammar topic files (A1 to C1)
│       ├── vocabulary/          # 3 vocabulary topic files
│       ├── reading/             # 1 reading topic file
│       ├── writing/             # 1 writing topic file
│       ├── speaking/            # 1 speaking topic file
│       └── listening/           # 1 listening topic file
├── docs/
│   ├── PRD.md                   # Product Requirements Document & ADR log (ADR-001 to ADR-009)
│   └── superpowers/             # Design specs and implementation plans
└── test/
    ├── progress.test.js         # Gating logic and prerequisite dependency tests
    ├── data.test.js             # Schema validation for all 28 topics & video structures
    └── e2e-simulation.test.js   # End-to-end user progression simulation
```

---

## 8. Verification & Running Commands

### Run Static Server:
```bash
python3 -m http.server 8085
# Open http://localhost:8085 in your browser
```

### Run Automated Tests:
```bash
node test/progress.test.js && node test/data.test.js && node test/e2e-simulation.test.js
```
Expected output:
```text
progress.test.js: all assertions passed
data.test.js: All 28 topics and video references validated successfully!
e2e-simulation.test.js: All end-to-end simulations passed!
```

---

## 9. Recommended Next Steps for Successor Agent

1. **Keep Architecture Pure Client-Side:** Unless the user explicitly requests a database/backend again, keep the app 100% static, fast, and dependency-free.
2. **Additional Multi-Skill Content:** Multi-skill modules (Reading, Writing, Speaking, Listening) currently have 1 starter topic each in A1; can be expanded to A2 and B1 levels following the established schema.
3. **PWA / Offline Support:** Adding a lightweight `service-worker.js` and `manifest.json` would allow full offline operation without adding third-party build tools.
