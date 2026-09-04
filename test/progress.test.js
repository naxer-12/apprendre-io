const assert = require("assert");
const { loadProgress, saveProgress, isUnlocked, recordScore, countCompleted } = require("../progress.js");

function fakeStore(){
  const data = {};
  return { getItem:(k)=> (k in data ? data[k] : null), setItem:(k,v)=>{ data[k]=v; } };
}

// 1. loadProgress returns empty defaults when nothing stored
{
  const store = fakeStore();
  const p = loadProgress(store);
  assert.deepStrictEqual(p, { completed: {} });
}

// 2. saveProgress + loadProgress round-trip
{
  const store = fakeStore();
  saveProgress(store, { completed: { "a1-alphabet": { score: 5, date: "2026-09-04" } } });
  const p = loadProgress(store);
  assert.strictEqual(p.completed["a1-alphabet"].score, 5);
}

// 3. isUnlocked: no prerequisite -> always unlocked
{
  const topic = { id: "t1", requires: null, test: { passScore: 4 } };
  assert.strictEqual(isUnlocked(topic, { completed: {} }), true);
}

// 4. isUnlocked: prerequisite not completed -> locked
{
  const topic = { id: "t2", requires: "t1", test: { passScore: 4 } };
  assert.strictEqual(isUnlocked(topic, { completed: {} }), false);
}

// 5. isUnlocked: prerequisite completed -> unlocked
{
  const topic = { id: "t2", requires: "t1", test: { passScore: 4 } };
  assert.strictEqual(isUnlocked(topic, { completed: { t1: { score: 4, date: "x" } } }), true);
}

// 6. recordScore below passScore does not mark complete
{
  const store = fakeStore();
  const topic = { id: "t1", requires: null, test: { passScore: 4 } };
  const p = recordScore(store, topic, 3);
  assert.strictEqual(p.completed["t1"], undefined);
}

// 7. recordScore at/above passScore marks complete and persists
{
  const store = fakeStore();
  const topic = { id: "t1", requires: null, test: { passScore: 4 } };
  recordScore(store, topic, 4);
  const reloaded = loadProgress(store);
  assert.strictEqual(reloaded.completed["t1"].score, 4);
}

// 8. countCompleted counts only topics present in progress.completed
{
  const topics = [{ id: "a" }, { id: "b" }, { id: "c" }];
  const progress = { completed: { a: {}, c: {} } };
  assert.strictEqual(countCompleted(topics, progress), 2);
}

console.log("progress.test.js: all assertions passed");
