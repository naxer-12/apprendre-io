const assert = require("assert");
const { loadProgress, saveProgress, isUnlocked, recordScore, countCompleted, recordActivity } = require("../progress.js");

function fakeStore(){
  const data = {};
  return { getItem:(k)=> (k in data ? data[k] : null), setItem:(k,v)=>{ data[k]=v; } };
}

// 1. loadProgress returns empty defaults when nothing stored
{
  const store = fakeStore();
  const p = loadProgress(store);
  assert.deepStrictEqual(p, { completed: {}, streak: { current: 0, longest: 0, lastActiveDate: null, history: {} } });
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

// 9. recordActivity starts a streak of 1 on first activity
{
  const store = fakeStore();
  const p = recordActivity(store, new Date("2026-09-01T10:00:00Z"));
  assert.strictEqual(p.streak.current, 1);
  assert.strictEqual(p.streak.longest, 1);
  assert.strictEqual(p.streak.lastActiveDate, "2026-09-01");
}

// 10. recordActivity on the following day extends the streak
{
  const store = fakeStore();
  recordActivity(store, new Date("2026-09-01T10:00:00Z"));
  const p = recordActivity(store, new Date("2026-09-02T09:00:00Z"));
  assert.strictEqual(p.streak.current, 2);
  assert.strictEqual(p.streak.longest, 2);
}

// 11. recordActivity again on the same day does not double-count
{
  const store = fakeStore();
  recordActivity(store, new Date("2026-09-01T10:00:00Z"));
  const p = recordActivity(store, new Date("2026-09-01T22:00:00Z"));
  assert.strictEqual(p.streak.current, 1);
}

// 12. recordActivity after a missed day resets current but keeps longest
{
  const store = fakeStore();
  recordActivity(store, new Date("2026-09-01T10:00:00Z"));
  recordActivity(store, new Date("2026-09-02T10:00:00Z"));
  recordActivity(store, new Date("2026-09-03T10:00:00Z")); // longest now 3
  const p = recordActivity(store, new Date("2026-09-06T10:00:00Z")); // gap of 2 days
  assert.strictEqual(p.streak.current, 1);
  assert.strictEqual(p.streak.longest, 3);
}

// 13. recordActivity records each active date in streak.history
{
  const store = fakeStore();
  recordActivity(store, new Date("2026-09-01T10:00:00Z"));
  recordActivity(store, new Date("2026-09-02T10:00:00Z"));
  const p = loadProgress(store);
  assert.deepStrictEqual(Object.keys(p.streak.history).sort(), ["2026-09-01", "2026-09-02"]);
}

console.log("progress.test.js: all assertions passed");
