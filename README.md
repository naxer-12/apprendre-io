# Apprendre.io

A French-learning site: pick a module, work through CEFR-leveled topics (A1 → C1), pass each topic's test to unlock the next.

## Run it

No build step required. Either:

- Open `index.html` directly in any modern web browser, or
- Run `python3 -m http.server` from this directory, then visit `http://localhost:8000`

## Run the tests

Run the test suite with Node.js:

```bash
node test/progress.test.js
node test/data.test.js
```

## Project layout

- `index.html` — App shell and entry point, loads styles, scripts, and topic data
- `styles.css` — All layout, design tokens, light/dark theme variables, and components
- `progress.js` — Pure gating and progress-state engine (unit-testable in Node)
- `app.js` — Hash-based client router, rendering engine, and UI handlers
- `data/modules.js` — Module registry, metadata, and topic sequencing
- `data/topics/vocabulary/` — Vocabulary topic data files (A1)
- `data/topics/grammar/` — Grammar curriculum topic data files (A1 → C1, 21 topics)
