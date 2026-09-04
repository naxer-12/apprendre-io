const assert = require("assert");
const path = require("path");

// Mock browser environment
globalThis.window = globalThis;
globalThis.TOPICS = {};
globalThis.MODULES = [];

require("../progress.js");
require("../data/modules.js");

const vocabFiles = [
  "a1-alphabet.js", "a1-numbers.js", "a1-greetings.js"
];

const grammarFiles = [
  "a1-articles.js", "a1-etre-avoir-negation.js", "a1-present-tense.js", "a1-pronouns-intro.js",
  "a1-futur-proche.js", "a1-reflexive-verbs.js", "a1-possessive-adjectives.js", "a1-partitive-articles.js",
  "a2-relative-pronouns-qui-que.js", "a2-passe-compose-avoir.js", "a2-passe-compose-etre.js",
  "a2-imparfait.js", "a2-object-pronoun-order.js", "b1-futur-simple.js", "b1-conditional.js",
  "b1-plus-que-parfait-futur-anterieur.js", "b1-direct-indirect-object-pronouns.js",
  "b1-relative-pronouns-dont-ou.js", "b2c1-present-subjunctive.js", "b2c1-past-subjunctive-recap.js",
  "b2c1-register-tu-vous.js"
];

vocabFiles.forEach(f => require(path.join(__dirname, "../data/topics/vocabulary", f)));
grammarFiles.forEach(f => require(path.join(__dirname, "../data/topics/grammar", f)));

// 1. Verify counts
assert.strictEqual(Object.keys(window.TOPICS).length, 24, "Should have 24 total topics registered");
const grammarMod = window.MODULES.find(m => m.id === "grammar");
const vocabMod = window.MODULES.find(m => m.id === "vocabulary");
assert.ok(grammarMod, "Grammar module must exist");
assert.ok(vocabMod, "Vocabulary module must exist");
assert.strictEqual(grammarMod.topics.length, 21, "Grammar module must have 21 topics");
assert.strictEqual(vocabMod.topics.length, 3, "Vocabulary module must have 3 topics");

// 2. Verify prerequisite chain for Vocabulary
let prevVocabId = null;
for (const topicId of vocabMod.topics) {
  const topic = window.TOPICS[topicId];
  assert.ok(topic, `Vocabulary topic ${topicId} must exist`);
  assert.strictEqual(topic.requires, prevVocabId, `Topic ${topicId} requires should be ${prevVocabId}`);
  assert.strictEqual(topic.test.questions.length, 5, `Topic ${topicId} must have 5 questions`);
  assert.strictEqual(topic.test.passScore, 4, `Topic ${topicId} passScore must be 4`);
  topic.test.questions.forEach((q, qi) => {
    assert.ok(q.opts.includes(q.a), `Topic ${topicId} Q${qi+1} answer \"${q.a}\" must be in options`);
  });
  prevVocabId = topicId;
}

// 3. Verify prerequisite chain for Grammar
let prevGrammarId = null;
for (const topicId of grammarMod.topics) {
  const topic = window.TOPICS[topicId];
  assert.ok(topic, `Grammar topic ${topicId} must exist`);
  assert.strictEqual(topic.requires, prevGrammarId, `Topic ${topicId} requires should be ${prevGrammarId}`);
  assert.strictEqual(topic.test.questions.length, 5, `Topic ${topicId} must have 5 questions`);
  assert.strictEqual(topic.test.passScore, 4, `Topic ${topicId} passScore must be 4`);
  topic.test.questions.forEach((q, qi) => {
    assert.ok(q.opts.includes(q.a), `Topic ${topicId} Q${qi+1} answer \"${q.a}\" must be in options`);
  });
  prevGrammarId = topicId;
}

console.log("data.test.js: All 24 topics validated successfully!");
