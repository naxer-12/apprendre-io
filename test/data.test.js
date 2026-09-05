const assert = require("assert");
const path = require("path");
const fs = require("fs");

// Mock browser environment
globalThis.window = globalThis;
globalThis.TOPICS = {};
globalThis.MODULES = [];

require("../progress.js");
require("../data/modules.js");
require("../data/pathways.js");

const MODULE_IDS = ["vocabulary", "grammar", "reading", "writing", "speaking", "listening"];

MODULE_IDS.forEach(mod => {
  const dir = path.join(__dirname, "../data/topics", mod);
  fs.readdirSync(dir)
    .filter(f => f.endsWith(".js"))
    .forEach(f => require(path.join(dir, f)));
});

// 1. Verify counts
const EXPECTED_MODULE_COUNTS = {
  vocabulary: 23,
  grammar: 33,
  reading: 10,
  writing: 8,
  speaking: 6,
  listening: 9
};
const expectedTotal = Object.values(EXPECTED_MODULE_COUNTS).reduce((a, b) => a + b, 0);
assert.strictEqual(Object.keys(window.TOPICS).length, expectedTotal, `Should have ${expectedTotal} total topics registered`);

MODULE_IDS.forEach(modId => {
  const mod = window.MODULES.find(m => m.id === modId);
  assert.ok(mod, `${modId} module must exist`);
  assert.strictEqual(mod.topics.length, EXPECTED_MODULE_COUNTS[modId], `${modId} module must have ${EXPECTED_MODULE_COUNTS[modId]} topics`);
});

// 2. Verify every topic has a title, a valid 5-question test, and — when a
// video reference IS present — that it carries both a watchUrl and a
// videoId. Topics are NOT required to have a video: fabricating a YouTube
// link we can't verify is worse than omitting the field.
for (const [id, topic] of Object.entries(window.TOPICS)) {
  assert.ok(topic.title, `Topic ${id} must have a title`);
  assert.strictEqual(topic.test.questions.length, 5, `Topic ${id} must have 5 test questions`);
  assert.strictEqual(topic.test.passScore, 4, `Topic ${id} passScore must be 4`);
  topic.test.questions.forEach((q, qi) => {
    assert.ok(q.opts.includes(q.a), `Topic ${id} Q${qi + 1} answer '${q.a}' must be in opts`);
  });

  const video = topic.reference && topic.reference.video;
  if (video) {
    assert.ok(video.watchUrl && video.videoId, `Topic ${id} has a video reference but is missing watchUrl/videoId`);
  }

  const worksheet = topic.reference && topic.reference.worksheet;
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
// Topics can cross module boundaries (e.g. each pathway interleaves
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

// 4. Verify each pathway (Beginner=A1, Intermediate=A2, Expert=B1/B2-C1
// partial) only references real, unique topic IDs, matches its level's
// topics exactly (Beginner/Intermediate), and that each pathway's own
// prerequisite chain matches its flattened unit order — every pathway is
// a real, independent shortcut into its own slice of the curriculum, not
// dependent on finishing an earlier level first.
const PATHWAY_LEVELS = {
  beginner: ["A1"],
  intermediate: ["A2"],
  expert: ["B1", "B2-C1"]
};

Object.keys(PATHWAY_LEVELS).forEach(levelKey => {
  const units = window.PATHWAYS && window.PATHWAYS[levelKey];
  assert.ok(Array.isArray(units) && units.length, `window.PATHWAYS.${levelKey} must be a non-empty array`);

  const flat = units.flatMap(u => u.topics);
  assert.strictEqual(new Set(flat).size, flat.length, `${levelKey} pathway must not repeat a topic id`);

  flat.forEach((id, i) => {
    assert.ok(window.TOPICS[id], `${levelKey} pathway references unknown topic '${id}'`);
    const expectedRequires = i === 0 ? null : flat[i - 1];
    assert.strictEqual(window.TOPICS[id].requires, expectedRequires, `${levelKey} pathway position ${i} (${id}) requires mismatch`);
  });

  if (levelKey !== "expert") {
    const levelScopedIds = Object.values(window.TOPICS)
      .filter(t => PATHWAY_LEVELS[levelKey].includes(t.level))
      .map(t => t.id)
      .sort();
    assert.deepStrictEqual([...flat].sort(), levelScopedIds, `${levelKey} pathway must cover exactly its level's topics`);
  }
});

console.log(`data.test.js: All ${expectedTotal} topics, and the prerequisite/pathway graphs for all three levels, validated successfully!`);
