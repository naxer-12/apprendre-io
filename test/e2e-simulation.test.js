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
const vocabFiles = fs.readdirSync(path.join(__dirname, "../data/topics/vocabulary"));
vocabFiles.forEach(f => require(path.join(__dirname, "../data/topics/vocabulary", f)));

const grammarFiles = fs.readdirSync(path.join(__dirname, "../data/topics/grammar"));
grammarFiles.forEach(f => require(path.join(__dirname, "../data/topics/grammar", f)));

// 3. Load modules
require("../data/modules.js");

// 4. Load app
require("../app.js");

// Test overview render
globalThis.location.hash = "#/overview";
window.render();
assert.ok(elements.main.innerHTML.includes("Learn French"), "Overview must render hero headline");

// Test practice render
globalThis.location.hash = "#/practice";
window.render();
assert.ok(elements.main.innerHTML.includes("Active Recall Practice"), "Practice must render header");

// Test lesson render (A1 Articles)
globalThis.location.hash = "#/grammar/a1-articles";
window.render();
assert.ok(elements.main.innerHTML.includes("Articles & Gender of Nouns"), "Lesson must render topic title");
assert.ok(elements.main.innerHTML.includes("Visual reference"), "Lesson must render stage 1");
assert.ok(elements.main.innerHTML.includes("What actually matters here"), "Lesson must render stage 2");
assert.ok(elements.main.innerHTML.includes("Check your memory"), "Lesson must render stage 3");
assert.ok(elements.main.innerHTML.includes("Go further"), "Lesson must render stage 4");

// Test gating progression
const t1 = window.TOPICS["a1-articles"];
const t2 = window.TOPICS["a1-etre-avoir-negation"];
assert.strictEqual(window.Progress.isUnlocked(t1, window.Progress.loadProgress(localStorage)), true, "Topic 1 is initially unlocked");
assert.strictEqual(window.Progress.isUnlocked(t2, window.Progress.loadProgress(localStorage)), false, "Topic 2 is initially locked");

// Passing topic 1 with score 4 unlocks topic 2
window.Progress.recordScore(localStorage, t1, 4);
assert.strictEqual(window.Progress.isUnlocked(t2, window.Progress.loadProgress(localStorage)), true, "Topic 2 is unlocked after passing Topic 1");

console.log("e2e-simulation.test.js: End-to-end routing, rendering, and gating simulation passed!");
