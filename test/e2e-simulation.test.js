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

// 1. Load progress
require("../progress.js");

// 2. Load all topics
["vocabulary", "grammar", "reading", "writing", "speaking", "listening"].forEach(dir => {
  const files = fs.readdirSync(path.join(__dirname, `../data/topics/${dir}`));
  files.forEach(f => require(path.join(__dirname, `../data/topics/${dir}`, f)));
});

// 3. Load modules
require("../data/modules.js");

// 4. Load app
require("../app.js");

// Test overview render
globalThis.location.hash = "#/overview";
window.render();
assert.ok(elements.main.innerHTML.includes("Learn French"), "Overview must render hero headline");
assert.ok(elements.main.innerHTML.includes("Active Pathway"), "Overview must render pathway box");

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

// Test lesson render with interactive video card (A1 Articles)
globalThis.location.hash = "#/grammar/a1-articles";
window.render();
assert.ok(elements.main.innerHTML.includes("Articles & Gender of Nouns"), "Lesson must render topic title");
assert.ok(elements.main.innerHTML.includes("video-card-link"), "Lesson must render interactive video card link");
assert.ok(elements.main.innerHTML.includes("https://www.youtube.com/watch?v=8w1b8p0E9j4"), "Video card link must point to YouTube watch URL");
assert.ok(elements.main.innerHTML.includes("img.youtube.com"), "Video card must render YouTube thumbnail image");

// Test deep-dive / further study link in Stage 2
assert.ok(elements.main.innerHTML.includes("where you can get more details for further topic and study"), "Stage 2 must include further study link");
assert.ok(elements.main.innerHTML.includes('id="stage-reference"'), "Stage 4 must have id stage-reference");

// Test speech synthesis pronunciation engine
assert.strictEqual(typeof window.speak, "function", "window.speak must be exported as a function");

// Test gating progression
const t1 = window.TOPICS["a1-articles"];
const t2 = window.TOPICS["a1-etre-avoir-negation"];
assert.strictEqual(window.Progress.isUnlocked(t1, window.Progress.loadProgress(localStorage)), true, "Topic 1 is initially unlocked");
assert.strictEqual(window.Progress.isUnlocked(t2, window.Progress.loadProgress(localStorage)), false, "Topic 2 is initially locked");

// Passing topic 1 with score 4 unlocks topic 2
window.Progress.recordScore(localStorage, t1, 4);
assert.strictEqual(window.Progress.isUnlocked(t2, window.Progress.loadProgress(localStorage)), true, "Topic 2 is unlocked after passing Topic 1");

console.log("e2e-simulation.test.js: All end-to-end simulations passed!");
