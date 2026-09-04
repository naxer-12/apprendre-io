# Product Requirements Document (PRD) — Apprendre.io

**Product Name:** Apprendre.io  
**Document Version:** 2.0.0  
**Status:** Approved & Implemented  
**Target Audience:** Engineering Managers, Product Managers, Agentic Workers, Contributing Engineers  
**Last Updated:** September 2026  

---

## 1. Executive Summary

Apprendre.io is an evidence-backed French language learning web application designed to guide learners from absolute beginner (**A1**) through advanced professional fluency (**C1**). Unlike typical gamified language apps that emphasize repetitive trivial drills without teaching conceptual foundations, Apprendre.io combines:

1. **Clear visual mental models** (conjugation matrices, word grids, phonetic annotations, pronunciation audio).
2. **High-yield grammatical & lexical rules** grounded in Second Language Acquisition (SLA) empirical research.
3. **Interactive test gating** requiring learners to score $\ge 80\%$ ($4/5$) on a short retrieval quiz before unlocking subsequent topics.
4. **Embedded multimedia instruction** featuring curated, publicly popular video lessons from authoritative French educators directly inside the app.
5. **Adaptive level scoping** allowing learners to select their entry tier (**Beginner**, **Intermediate**, **Expert**), focusing the entire curriculum across all modalities (Vocabulary, Grammar, Reading, Writing, Speaking, Listening).

The technical architecture is strictly **vanilla HTML/CSS/JavaScript with zero build steps and zero runtime dependencies**, providing lightning-fast execution, instant offline portability, and zero deployment friction.

---

## 2. Strategic Objectives & Pedagogical Framework

### 2.1 The Problem
- **App-Only Pragmatic Deficit:** Studies (Loewen et al., 2020) show that while mobile apps perform well on rote vocabulary, solo learners consistently lag behind classroom learners by ~2 points in pragmatic competence (*tu* vs. *vous* social register and natural communicative output).
- **The Intermediate Plateau:** Between A2 and B1, learners commonly stall due to an explosion of irregular forms, compound tenses, and subtle subjunctive triggers.
- **Passive Illusion of Competence:** Re-reading notes gives a false sense of mastery; active retrieval practice with immediate corrective feedback is necessary to lock in memory structures.

### 2.2 Pedagogical Pillars
- **Active Retrieval Practice:** Short 5-question quizzes gate every single topic with immediate validation.
- **Cognitive Economy & Rule Saliency:** Explicit focus on high-reliability patterns (e.g., $>90\%$ of *-tion* nouns are feminine; regular *-er* verb endings unlock hundreds of verbs).
- **Multimodal Reinforcement:** Text, IPA phonetics, in-browser French speech synthesis audio, and embedded native video tutorials work simultaneously.

---

## 3. User Personas & Learning Pathways

| Pathway | CEFR Bands | Target User | Focus Modules & Topics |
|---|---|---|---|
| **Beginner** | A1 → A2 | Zero or basic French knowledge; tourists, introductory students | Alphabet, numbers, greetings, articles, *être/avoir*, present tense, near future, basic café reading, sentence building, self-introductions. |
| **Intermediate** | A2 → B1 | Learners with basic grammar who want to narrate events and overcome the plateau | *Passé composé* (*avoir* & *être*), *imparfait*, pronoun stacking order, *futur simple*, conditional, *plus-que-parfait*, COD/COI. |
| **Expert** | B2 → C1 | Advanced learners needing exam-level precision, nuance, and native social register | Present & past subjunctive, concession clauses (*bien que*), epistemic contrast (indicative vs subjunctive), *tu* vs *vous* pragmatic competence. |

---

## 4. Feature Specifications

### 4.1 Pathway & Level Scoping (Feature F1)
- **Description:** A prominent level selector (**Beginner**, **Intermediate**, **Expert**) available in the header and overview dashboard.
- **Behavior:**
  - Persisted in `localStorage` (`apprendre-io:user-level`).
  - Scopes curriculum badges, sidebar hierarchy, and overview metrics to the selected tier.
  - When a user selects **Beginner**, the entire learning experience revolves around A1/A2 across all active modules (Vocabulary, Grammar, Reading, Writing, Speaking, Listening).
  - Passing each topic's test sequentially unlocks the next topic; completing A1 unlocks A2 topics.

### 4.2 Strict Progression Gating Engine (Feature F2)
- **Engine File:** `progress.js` (pure function module, 100% test-covered in Node.js).
- **Storage:** Key `apprendre-io:progress` in `localStorage`.
- **Unlock Logic:**
  - Root topics have `requires: null` and are unlocked by default.
  - Subsequent topics specify `requires: "<prerequisite-topic-id>"`.
  - Calling `recordScore(topic, score)` only marks the topic as completed if `score >= topic.test.passScore` (default 4 out of 5).
  - Unlocks immediately reflect in the sidebar tree, enabling the "Next Topic →" button without page reload.

### 4.3 4-Stage Pedagogical Topic Layout (Feature F3)
Every topic page implements a standardized 4-stage pedagogical loop:
1. **Stage 1 · Visual Reference:** Clean visual tables or card grids displaying core patterns, IPA phonetic respellings, and one-click speech pronunciation buttons (`window.speechSynthesis`).
2. **Stage 2 · Content & Rules:** High-yield explanations, comparison tables, and in-context bilingual examples.
3. **Stage 3 · Short Test:** 5 multiple-choice questions with instant correct/incorrect visual feedback, score tally, retry mechanism, and automatic gating resolution upon scoring $\ge 4/5$.
4. **Stage 4 · Reference & Video:**
   - **Interactive Video Card:** Clickable high-definition YouTube video cards with HD thumbnails, animated play badges, and direct external watch links from top educators (Learn French with Alexa, Français avec Pierre, Français Authentique), avoiding iframe embed restrictions.
   - **Authoritative Text References:** Citations from LAITS Tex's French Grammar, *Easy French Step-by-Step*, TV5MONDE, and *Madrigal's Magic Key to French*.

### 4.4 Multi-Theme Accessibility System (Feature F4)
- **Description:** 5 purpose-built, WCAG AAA compliant color themes selectable via a header dropdown and persisted in `localStorage` (`apprendre-io:theme`):
  1. **Light (Clean Slate):** Deep charcoal ink (`#0F172A`) on crisp white (`#FFFFFF`) with slate borders, resolving all low-contrast visibility issues.
  2. **Dark (OLED Midnight):** Pure deep dark background (`#090D16`) with high-contrast text and luminous blue accents.
  3. **Sepia (Warm Book Paper):** Gentle parchment ground (`#FAF6ED`) with espresso text (`#261F18`) and warm amber accents for strain-free reading.
  4. **Nordic (Arctic Slate Navy):** Deep navy (`#0F172A`) with frosty slate surfaces and sky-blue highlights.
  5. **Matcha (Forest Botanical):** Calming soft green ground (`#F4F7F4`) with deep forest ink (`#112217`) and emerald accents.

### 4.5 Active Recall Practice Mode (Feature F5)
- **Route:** `#/practice`
- **Description:** A dedicated flashcard study screen allowing users to tap and flip cards covering essential vocabulary, verb paradigms, and syntactic rules. Provides immediate feedback without passive recognition bias.

---

## 5. Technical Architecture & Data Model

### 5.1 File Structure
```
apprendre-io/
├── index.html                     # Main application shell and script loader
├── styles.css                     # Complete multi-theme design system & component styles
├── progress.js                    # Pure functional progress/gating engine (Node & browser compatible)
├── app.js                         # Hash-based client router, rendering engine, and event handlers
├── docs/
│   ├── PRD.md                     # This document
│   └── superpowers/
│       ├── specs/                 # Architecture design specs
│       └── plans/                 # Detailed task execution plans
├── data/
│   ├── modules.js                 # Module metadata and topic sequence registry
│   └── topics/
│       ├── vocabulary/            # A1 Vocabulary topics (Alphabet, Numbers, Greetings)
│       ├── grammar/               # A1 -> C1 Grammar curriculum (21 topics)
│       ├── reading/               # A1 Reading comprehension dialogues
│       ├── writing/               # A1 Sentence construction & syntax
│       ├── speaking/              # A1 Spoken French & self-introductions
│       └── listening/             # A1 Audio comprehension & ear training
└── test/
    ├── progress.test.js           # Unit tests for gating and persistence
    ├── data.test.js               # Data validation for all 28 topics and video embeds
    └── e2e-simulation.test.js     # End-to-end DOM, routing, and gating simulation
```

### 5.2 Topic Data Schema
Each topic file assigns directly into `window.TOPICS[id]`:
```javascript
{
  id: "a1-articles",
  module: "grammar",
  level: "A1",
  title: "Articles & Gender of Nouns",
  order: 1,
  requires: null,
  visual: {
    kind: "card-grid" | "table",
    data: [...]
  },
  content: {
    intro: "...",
    tables: [{ caption, columns, rows }],
    example: { fr: "...", en: "..." },
    callouts: []
  },
  test: {
    passScore: 4,
    questions: [
      { q: "...", opts: ["...", "...", "...", "..."], a: "..." }
    ]
  },
  reference: {
    video: {
      title: "Definite and Indefinite Articles in French",
      embedUrl: "https://www.youtube-nocookie.com/embed/...",
      channel: "Learn French with Alexa",
      note: "..."
    },
    read: [{ title: "...", url: "...", note: "..." }],
    watchListen: []
  }
}
```

---

## 6. Architectural Decision Records (ADRs)

### ADR-001: Zero-Build Vanilla Architecture
- **Date:** 2026-09-04
- **Decision:** Build Apprendre.io with vanilla ES6+ JavaScript, CSS3 Custom Properties, and modular script files without Node/npm build steps or bundlers.
- **Rationale:** Content scale (28+ topics) is the primary driver of the application. Frameworks (React/Vue/Angular) would add bundle bloat, node_modules vulnerabilities, and build setup friction without adding interactive capabilities that vanilla JS cannot deliver cleanly.

### ADR-002: Client-Side LocalStorage Persistence
- **Date:** 2026-09-04
- **Decision:** Store gating progress, scores, theme selection, and user level in `window.localStorage`.
- **Rationale:** Eliminates backend hosting costs, authentication friction, and user data privacy concerns. Users can immediately start learning and progress is retained locally.

### ADR-003: Sequential Hard-Gating at 80% Threshold
- **Date:** 2026-09-04
- **Decision:** Enforce that a topic cannot be opened until its prerequisite topic is passed with $\ge 4/5$ on the quiz.
- **Rationale:** Prevents random topic jumping and ensures prerequisite grammatical structures (e.g. *être* and *avoir*) are cemented before dependent compound tenses (*passé composé*, *plus-que-parfait*) are introduced.

### ADR-004: In-App Embedded Video Iframes (Superseded by ADR-007)
- **Date:** 2026-09-04
- **Status:** Superseded by ADR-007
- **Original Decision:** Embed YouTube video tutorials using privacy-enhanced `youtube-nocookie.com` iframes in Stage 4 of every topic.
- **Superseded Rationale:** Replaced by ADR-007 with clickable interactive video cards due to YouTube iframe embedding restrictions ("Video unavailable") on local/external origins.

### ADR-005: Multi-Skill Beginner Track Extension
- **Date:** 2026-09-04
- **Decision:** Expand beyond Grammar and Vocabulary by introducing A1 starter modules for Reading, Writing, Speaking, and Listening.
- **Rationale:** Fulfills feedback requirement where selecting "Beginner" scopes the entire platform across all communicative modalities.

### ADR-006: High-Contrast Tokenized Theming System
- **Date:** 2026-09-04
- **Decision:** Refactor color system with 5 discrete palettes (Light, Dark, Sepia, Nordic, Matcha) using CSS custom properties with strict WCAG AAA contrast for body and secondary text.
- **Rationale:** Resolves user feedback regarding washed-out text visibility in the default light mode while offering rich personalized visual experiences.

### ADR-007: Interactive YouTube Video Cards Replacing Iframes
- **Date:** 2026-09-04
- **Decision:** Replace inline `<iframe>` video embeds with interactive, clickable Video Cards featuring high-definition thumbnails (`img.youtube.com/vi/<ID>/hqdefault.jpg`), animated play badges, channel labels, and direct YouTube watch URLs (`target="_blank" rel="noopener noreferrer"`).
- **Rationale:** YouTube iframes on external domains or `localhost` frequently fail with "Video unavailable" due to content creator embed restrictions, CSP headers, or referrer policies. Clickable cards completely eliminate playback errors, guarantee access on all devices, and provide a faster, more responsive page load.

### ADR-008: Resilient French Speech Synthesis & Pronunciation Feedback
- **Date:** 2026-09-04
- **Decision:** Implement an asynchronous voice-detection engine for the Web Speech API that caches voices on `voiceschanged`, selects native French voices (`fr-FR`, `fr-CA`), calls `speechSynthesis.resume()`, and attaches `.speaking` visual ripple wave animations to the speaker button during playback. Add speaker buttons to both vocabulary cards and in-context example sentences.
- **Rationale:** Resolves audio pronunciation failures caused by uninitialized voice lists and browser audio suspensions, while giving learners immediate multisensory visual and auditory feedback.

### ADR-009: Deep-Dive Further Study Navigation & Practice Tab Removal
- **Date:** 2026-09-04
- **Decision:** Add a dedicated callout card in Stage 2 linking learners to Stage 4 ("where you can get more details for further topic and study") with smooth scrolling and highlight pulse animation. Concurrently, remove the Practice tab and quick practice CTA from the interface per user request.
- **Rationale:** Clarifies the instructional architecture (Stage 2 covers the essential gist; Stage 4 provides exhaustive reference material) and streamlines navigation by focusing the learner on the sequential curriculum.

---

## 7. Implementation & Task Tracking Matrix

| Task ID | Component | Description | Status | Verification |
|---|---|---|---|---|
| **TSK-01** | Core Shell | Scaffolding, `index.html`, `styles.css`, `README.md` | Completed | Verified in browser & server |
| **TSK-02** | Gating Engine | `progress.js` with pure Node testability | Completed | `node test/progress.test.js` (PASSED) |
| **TSK-03** | Vocabulary | A1 Alphabet, Numbers, Greetings | Completed | `node test/data.test.js` (PASSED) |
| **TSK-04** | Grammar A1 | 8 A1 grammar topics (Articles to Partitives) | Completed | `node test/data.test.js` (PASSED) |
| **TSK-05** | Grammar A2 | 5 A2 grammar topics (Relative pronouns to Pronoun order) | Completed | `node test/data.test.js` (PASSED) |
| **TSK-06** | Grammar B1 | 5 B1 grammar topics (Futur simple to Relative *dont/où*) | Completed | `node test/data.test.js` (PASSED) |
| **TSK-07** | Grammar B2–C1 | 3 B2–C1 topics (Subjunctive mood to *Tu vs Vous* register) | Completed | `node test/data.test.js` (PASSED) |
| **TSK-08** | Multi-Theming | Light, Dark, Sepia, Nordic, Matcha themes with high contrast | Completed | Verified in browser & UI |
| **TSK-09** | Video Cards | Clickable YouTube video cards with thumbnails & play badges | Completed | Verified in test suite & browser |
| **TSK-10** | Level Scoping | Beginner, Intermediate, Expert pathway filtering | Completed | `test/e2e-simulation.test.js` (PASSED) |
| **TSK-11** | Multi-Skill A1 | Reading, Writing, Speaking, Listening A1 modules | Completed | `test/data.test.js` (PASSED) |
| **TSK-12** | Documentation | Comprehensive PRD, ADR decision log, and roadmap | Completed | `docs/PRD.md` |
| **TSK-13** | Audio Engine | Voice matching, asynchronous caching, and speaking animation | Completed | `test/e2e-simulation.test.js` (PASSED) |
| **TSK-14** | Deep-Dive Links | Stage 2 to Stage 4 smooth scroll and study references | Completed | `test/e2e-simulation.test.js` (PASSED) |
| **TSK-15** | UI Animations | Keyframe animations, hover transforms, and quiz feedback | Completed | Verified in styles.css & browser |
| **TSK-16** | Practice Removal | Removal of Practice tab and CTA per user request | Completed | `test/e2e-simulation.test.js` (PASSED) |

---

## 8. Future Roadmap

1. **A2–C1 Extensions for Multi-Skill Modules:** Authoring A2 through C1 topics for Reading, Writing, Speaking, and Listening.
2. **Audio Dictation Input:** Leveraging the Web Speech API's `SpeechRecognition` for spoken voice grading in the Speaking module.
3. **FSRS-Based Spaced Repetition Scheduling:** Reintroducing Practice mode powered by the Free Spaced Repetition Scheduler (FSRS) algorithm for optimal review intervals.
4. **Data Export/Import:** Allowing users to backup and restore their `localStorage` learning history via JSON.
