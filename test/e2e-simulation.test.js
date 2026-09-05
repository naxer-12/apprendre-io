const assert = require("assert");
const fs = require("fs");
const path = require("path");

// Mock browser DOM
globalThis.window = globalThis;
globalThis.addEventListener = () => {};
globalThis.localStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = String(v); },
  clear() { this.data = {}; }
};
globalThis.location = { hash: "" };
globalThis.scrollTo = () => {};

// Mock document
const elements = {};
function mockElement(id) {
  return {
    id,
    innerHTML: "",
    className: "",
    classList: {
      add(c) { this._classes = this._classes || new Set(); this._classes.add(c); },
      remove(c) { if (this._classes) this._classes.delete(c); },
      contains(c) { return Boolean(this._classes && this._classes.has(c)); },
      toggle(c) { if (this.contains(c)) this.remove(c); else this.add(c); }
    },
    dataset: {},
    setAttribute(k, v) { this[k] = v; },
    removeAttribute(k) { delete this[k]; },
    style: {},
    appendChild(child) { (this.children = this.children || []).push(child); },
    querySelectorAll(selector) { return []; },
    querySelector(selector) { return mockElement("sub"); },
    addEventListener(evt, fn) { (this.listeners = this.listeners || {})[evt] = fn; }
  };
}

globalThis.document = {
  documentElement: mockElement("html"),
  getElementById(id) {
    if (!elements[id]) elements[id] = mockElement(id);
    return elements[id];
  },
  createElement(tag) { return mockElement(tag); },
  addEventListener() {}
};

// 1. Load progress and auth
require("../progress.js");
require("../auth.js");

// 2. Load all topics
["vocabulary", "grammar", "reading", "writing", "speaking", "listening"].forEach(dir => {
  const files = fs.readdirSync(path.join(__dirname, `../data/topics/${dir}`));
  files.forEach(f => require(path.join(__dirname, `../data/topics/${dir}`, f)));
});

// 3. Load modules & worksheets datasource
require("../data/modules.js");
require("../data/pathways.js");
require("../datasource/worksheets/index.js");

// 4. Load app
require("../app.js");

// Test overview render
globalThis.location.hash = "#/overview";
window.render();
assert.ok(elements.main.innerHTML.includes("Learn French"), "Overview must render hero headline");
assert.ok(!elements.main.innerHTML.includes("hero-level-box"), "Overview must not render the removed pathway box");

// Test level switching
window.setUserLevel("intermediate");
assert.strictEqual(localStorage.getItem("apprendre-io:user-level"), "intermediate");
window.setUserLevel("beginner");
assert.strictEqual(localStorage.getItem("apprendre-io:user-level"), "beginner");

// Test practice removal and redirection to overview
globalThis.location.hash = "#/practice";
window.render();
assert.strictEqual(globalThis.location.hash, "#/overview", "Routing to #/practice must redirect to #/overview");
assert.ok(!elements.header.innerHTML.includes("navPractice"), "Header must not render navPractice tab");

// Test lesson render with clean video link card (A1 Articles)
globalThis.location.hash = "#/grammar/a1-articles";
window.render();
assert.ok(elements.main.innerHTML.includes("Articles & Gender of Nouns"), "Lesson must render topic title");
assert.ok(elements.main.innerHTML.includes("video-link-card"), "Lesson must render clean video link card");
assert.ok(elements.main.innerHTML.includes("https://www.youtube.com/watch?v=OCs_5X5c0YA"), "Video card link must point to verified YouTube watch URL");
assert.ok(!elements.main.innerHTML.includes("video-thumb-wrap"), "Must not render simulated iframe player wrapper");

// Test deep-dive / further study link in Stage 2
assert.ok(elements.main.innerHTML.includes("where you can get more details for further topic and study"), "Stage 2 must include further study link");
assert.ok(elements.main.innerHTML.includes('id="stage-reference"'), "Stage 4 must have id stage-reference");

// Test Practice Worksheet System in lesson view
assert.ok(elements.main.innerHTML.includes("worksheet-section-card"), "Lesson must render curated practice worksheets section card");
assert.ok(elements.main.innerHTML.includes("3 Sheets · 60 Questions"), "Card must display 3 sheets and 60 questions badge");
assert.ok(elements.main.innerHTML.includes("#/worksheet/a1-articles/1"), "Card must link to Sheet 1");

// Test routing to Practice Worksheet Sheet 1 view
globalThis.location.hash = "#/worksheet/a1-articles/1";
window.render();
assert.ok(elements.main.innerHTML.includes("worksheet-page-wrap"), "Worksheet route must render worksheet page container");
assert.ok(elements.main.innerHTML.includes("Practice Sheet 1 of 3"), "Must render Sheet 1 kicker");
assert.ok(elements.main.innerHTML.includes("Q20"), "Must render all 20 questions in Sheet 1");
assert.ok(elements.main.innerHTML.includes("toggleAllAnswersBtn"), "Must render toggle all answers button");

// Test routing to Practice Worksheet Sheet 2 view
globalThis.location.hash = "#/worksheet/a1-articles/2";
window.render();
assert.ok(elements.main.innerHTML.includes("Practice Sheet 2 of 3"), "Must render Sheet 2 kicker");

// Test routing to Practice Worksheet Sheet 3 view
globalThis.location.hash = "#/worksheet/a1-articles/3";
window.render();
assert.ok(elements.main.innerHTML.includes("Practice Sheet 3 of 3"), "Must render Sheet 3 kicker");

// Test speech synthesis pronunciation engine
assert.strictEqual(typeof window.speak, "function", "window.speak must be exported as a function");

// Test gating progression along the Beginner pathway's actual root chain
// (a1-greetings -> a1-speaking-introductions), not the old per-module order.
const t1 = window.TOPICS["a1-greetings"];
const t2 = window.TOPICS["a1-speaking-introductions"];
assert.strictEqual(window.Progress.isUnlocked(t1, window.Progress.loadProgress(localStorage)), true, "Topic 1 (a1-greetings, the pathway root) is initially unlocked");
assert.strictEqual(window.Progress.isUnlocked(t2, window.Progress.loadProgress(localStorage)), false, "Topic 2 is initially locked");

// Passing topic 1 with score 4 unlocks topic 2
window.Progress.recordScore(localStorage, t1, 4);
assert.strictEqual(window.Progress.isUnlocked(t2, window.Progress.loadProgress(localStorage)), true, "Topic 2 is unlocked after passing Topic 1");

console.log("e2e-simulation.test.js: All end-to-end simulations passed!");
