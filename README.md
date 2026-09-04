# Apprendre.io

An evidence-backed French-learning web application: pick a proficiency tier (**Beginner**, **Intermediate**, **Expert**), work through CEFR-leveled topics (A1 → C1) across Vocabulary, Grammar, Reading, Writing, Speaking, and Listening, watch embedded native video lessons, and pass each topic's short test to unlock the next.

## Documentation

- **Product Requirements Document (PRD):** [docs/PRD.md](docs/PRD.md) — Comprehensive product requirements, feature specifications, architecture decision records (ADRs), and task tracking matrix for engineering managers and agents.
- **Design Spec:** [docs/superpowers/specs/2026-09-04-apprendre-io-grammar-module-design.md](docs/superpowers/specs/2026-09-04-apprendre-io-grammar-module-design.md)
- **Implementation Plan:** [docs/superpowers/plans/2026-09-04-apprendre-io-grammar-module.md](docs/superpowers/plans/2026-09-04-apprendre-io-grammar-module.md)

## Key Features

- **Adaptive Level Scoping:** Select **Beginner** (A1/A2), **Intermediate** (A2/B1), or **Expert** (B2/C1). The entire curriculum, sidebar, and dashboard focus on your chosen tier.
- **Sequential Test Gating:** Each topic requires scoring $\ge 80\%$ (4/5) on its short test before the next topic unlocks.
- **4-Stage Pedagogical Loop:**
  1. *Visual Reference:* Interactive card grids, conjugation tables, IPA phonetics, and native pronunciation audio (`SpeechSynthesis`).
  2. *Core Content:* High-yield grammatical rules and bilingual examples.
  3. *Short Test:* Active retrieval practice with instant feedback and gating resolution.
  4. *Reference & Video:* Embedded responsive 16:9 YouTube video lessons from top educators (*Learn French with Alexa*, *Français avec Pierre*, *Français Authentique*) and primary textbook citations.
- **Multi-Skill Modules:** Full A1 to C1 Grammar curriculum (21 topics), Vocabulary, plus A1 foundational modules for Reading, Writing, Speaking, and Listening.
- **Multi-Theme Customization:** 5 WCAG AAA accessible themes (Light, Dark, Sepia, Nordic, Matcha) with high-contrast text and instant persistence.
- **Active Recall Flashcards (`#/practice`):** Dedicated flashcard practice queue with flip-to-recall interactions.
- **Zero Dependencies / No Build Step:** Pure vanilla HTML5, CSS3 Custom Properties, and ES6+ JavaScript. Runs anywhere without `npm install`.

## Run it

Either:

- Open `index.html` directly in any web browser, or
- Run `python3 -m http.server 8085` from this directory, then visit `http://localhost:8085`

## Run the Automated Tests

Run the test suite with Node.js:

```bash
node test/progress.test.js
node test/data.test.js
node test/e2e-simulation.test.js
```
