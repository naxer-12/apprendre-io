const assert = require("assert");
const path = require("path");

// Mock browser environment
globalThis.window = globalThis;
globalThis.TOPICS = {};
globalThis.MODULES = [];

require("../progress.js");
require("../data/modules.js");
require("../data/pathways.js");

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

const otherFiles = [
  { mod: "reading", file: "a1-reading-dialogue.js" },
  { mod: "writing", file: "a1-writing-sentences.js" },
  { mod: "speaking", file: "a1-speaking-introductions.js" },
  { mod: "listening", file: "a1-listening-comprehension.js" }
];

vocabFiles.forEach(f => require(path.join(__dirname, "../data/topics/vocabulary", f)));
grammarFiles.forEach(f => require(path.join(__dirname, "../data/topics/grammar", f)));
otherFiles.forEach(o => require(path.join(__dirname, `../data/topics/${o.mod}`, o.file)));

// 1. Verify counts
assert.strictEqual(Object.keys(window.TOPICS).length, 28, "Should have 28 total topics registered");
const grammarMod = window.MODULES.find(m => m.id === "grammar");
const vocabMod = window.MODULES.find(m => m.id === "vocabulary");
const readingMod = window.MODULES.find(m => m.id === "reading");
const writingMod = window.MODULES.find(m => m.id === "writing");
const speakingMod = window.MODULES.find(m => m.id === "speaking");
const listeningMod = window.MODULES.find(m => m.id === "listening");

assert.ok(grammarMod, "Grammar module must exist");
assert.ok(vocabMod, "Vocabulary module must exist");
assert.ok(readingMod, "Reading module must exist");
assert.ok(writingMod, "Writing module must exist");
assert.ok(speakingMod, "Speaking module must exist");
assert.ok(listeningMod, "Listening module must exist");

assert.strictEqual(grammarMod.topics.length, 21, "Grammar module must have 21 topics");
assert.strictEqual(vocabMod.topics.length, 3, "Vocabulary module must have 3 topics");
assert.strictEqual(readingMod.topics.length, 1, "Reading module must have 1 topic");
assert.strictEqual(writingMod.topics.length, 1, "Writing module must have 1 topic");
assert.strictEqual(speakingMod.topics.length, 1, "Speaking module must have 1 topic");
assert.strictEqual(listeningMod.topics.length, 1, "Listening module must have 1 topic");

// 2. Verify all topics have video embed and valid tests
for (const [id, topic] of Object.entries(window.TOPICS)) {
  assert.ok(topic.title, `Topic ${id} must have a title`);
  assert.strictEqual(topic.test.questions.length, 5, `Topic ${id} must have 5 test questions`);
  assert.strictEqual(topic.test.passScore, 4, `Topic ${id} passScore must be 4`);
  topic.test.questions.forEach((q, qi) => {
    assert.ok(q.opts.includes(q.a), `Topic ${id} Q${qi+1} answer '${q.a}' must be in opts`);
  });
  assert.ok(topic.reference.video && topic.reference.video.watchUrl && topic.reference.video.videoId, `Topic ${id} must have a video watchUrl and videoId`);

  const worksheet = topic.reference.worksheet;
  if (worksheet) {
    assert.ok(worksheet.title, `Topic ${id} worksheet must have a title`);
    assert.ok(Array.isArray(worksheet.exercises) && worksheet.exercises.length > 0, `Topic ${id} worksheet must have exercises`);
    worksheet.exercises.forEach((ex, ei) => {
      assert.ok(ex.q, `Topic ${id} worksheet exercise ${ei + 1} must have a question`);
      assert.ok(ex.answer, `Topic ${id} worksheet exercise ${ei + 1} must have an answer`);
    });
  }
}

// 3. Verify the prerequisite graph is valid: every `requires` points to a
// real topic, and there are no cycles (each chain terminates at a root).
// Topics can cross module boundaries (e.g. the Beginner pathway interleaves
// vocabulary/grammar/reading/writing/speaking/listening), so this checks
// graph validity rather than a fixed per-module order.
for (const [id, topic] of Object.entries(window.TOPICS)) {
  if (topic.requires === null) continue;
  assert.ok(window.TOPICS[topic.requires], `Topic ${id} requires unknown topic '${topic.requires}'`);

  const seen = new Set([id]);
  let cursor = topic.requires;
  while (cursor !== null) {
    assert.ok(!seen.has(cursor), `Cycle detected in prerequisite chain starting at ${id}`);
    seen.add(cursor);
    const cursorTopic = window.TOPICS[cursor];
    assert.ok(cursorTopic, `Topic ${id}'s prerequisite chain references unknown topic '${cursor}'`);
    cursor = cursorTopic.requires;
  }
}

// 4. Verify the Beginner pathway (data/pathways.js) only references real,
// unique topic IDs and matches the 20 Beginner-scoped topics exactly.
assert.ok(Array.isArray(window.PATHWAYS && window.PATHWAYS.beginner), "window.PATHWAYS.beginner must be an array");
const pathwayTopicIds = window.PATHWAYS.beginner.flatMap(u => u.topics);
assert.strictEqual(new Set(pathwayTopicIds).size, pathwayTopicIds.length, "Beginner pathway must not repeat a topic id");
pathwayTopicIds.forEach(id => {
  assert.ok(window.TOPICS[id], `Beginner pathway references unknown topic '${id}'`);
});
const beginnerScopedIds = Object.values(window.TOPICS)
  .filter(t => t.level === 'A1' || t.level === 'A2')
  .map(t => t.id)
  .sort();
assert.deepStrictEqual([...pathwayTopicIds].sort(), beginnerScopedIds, "Beginner pathway must cover exactly the A1+A2 topics");

console.log("data.test.js: All 28 topics, video references, and the prerequisite/pathway graph validated successfully!");
