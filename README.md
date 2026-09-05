# Apprendre.io

An evidence-backed French-learning web application: sign in, pick a proficiency tier (**Beginner**, **Intermediate**, **Expert**), work through CEFR-leveled topics (A1 → C1) across Vocabulary, Grammar, Reading, Writing, Speaking, and Listening, watch curated video lessons, practice with original adult-level worksheets, and pass each topic's short test to unlock the next.

## Documentation

- **Product Requirements Document (PRD):** [docs/PRD.md](docs/PRD.md) — Comprehensive product requirements, feature specifications, architecture decision records (ADRs), and task tracking matrix for engineering managers and agents.
- **Agent handoff summary:** [AGENT_TAKEOVER_SUMMARY.md](AGENT_TAKEOVER_SUMMARY.md) — architecture invariants and feedback-round-by-round history for anyone (human or agent) picking up this repo.

## Key Features

- **Simulated Local Auth:** Basic sign-up/sign-in gate (username + password), stored and checked entirely in `localStorage` — no server, no real backend. See [Architecture](#architecture) below.
- **Guided Beginner Pathway:** New Beginner accounts pick a level during onboarding, then see a sidebar organized into 8 recommended units (First Contact, Naming the World, Everyday Actions, …) that interleave Vocabulary, Grammar, Reading, Writing, Speaking, and Listening in a research-grounded order, rather than by-skill silos. Intermediate/Expert keep the classic per-module tree.
- **Sequential Test Gating:** Each topic requires scoring ≥80% (4/5) on its short test before the next topic unlocks.
- **Learning Streaks:** A header badge and an overview-page 7-day activity strip track your current and longest daily practice streak.
- **4-Stage Pedagogical Loop:**
  1. *Visual Reference:* Interactive card grids, conjugation tables, IPA phonetics, and native pronunciation audio (`SpeechSynthesis`) with active voice detection and speaking pulse animations.
  2. *Core Content & Gist:* High-yield grammatical rules, audio-enabled examples, and deep-dive links to comprehensive references.
  3. *Short Test:* Active retrieval practice with instant feedback, micro-interaction animations, and gating resolution — followed by an original, adult-level practice worksheet (with answer key) for select topics.
  4. *Reference & Video:* Clickable video resource cards with direct external watch links from top educators, avoiding iframe embed restrictions.
- **Multi-Skill Modules:** Full A1 to C1 Grammar curriculum (21 topics), Vocabulary, plus A1 foundational modules for Reading, Writing, Speaking, and Listening.
- **Multi-Theme Customization:** 5 WCAG AAA accessible themes (Light — warm cream/amber, Dark, Sepia, Nordic, Matcha) with high-contrast text and instant persistence.
- **Design System:** Fraunces (headings), Inter (body/UI), and Source Code Pro (phonetics/mono) — a warm, editorial type system.
- **Zero Dependencies / No Build Step:** Pure vanilla HTML5, CSS3 Custom Properties, and ES6+ JavaScript. Runs anywhere without `npm install`.

## Architecture

Still a **zero-dependency static site** — nothing here talks to a server. `auth.js` is a self-contained module that stores accounts (SHA-256-hashed passwords via Web Crypto, falling back to a non-cryptographic hash on `file://`) directly in `localStorage`. This is a UX gate and personalization mechanism, **not real security** — anyone with access to the browser's dev tools can read or bypass it. Don't reuse this pattern for anything that needs actual protection.

## Run it

Either:

- Open `index.html` directly in any web browser, or
- Run `python3 -m http.server 8085` from this directory, then visit `http://localhost:8085`

## Run the Automated Tests

```bash
npm test
```

Or run each suite individually with Node.js:

```bash
node test/progress.test.js
node test/auth.test.js
node test/data.test.js
node test/e2e-simulation.test.js
```
