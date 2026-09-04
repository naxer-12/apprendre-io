(function (root) {
  const STORAGE_KEY = "apprendre-io:progress";

  function loadProgress(store) {
    const raw = store.getItem(STORAGE_KEY);
    if (!raw) return { completed: {} };
    try {
      const parsed = JSON.parse(raw);
      return parsed && parsed.completed ? parsed : { completed: {} };
    } catch (e) {
      return { completed: {} };
    }
  }

  function saveProgress(store, progress) {
    store.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function isUnlocked(topic, progress) {
    if (!topic.requires) return true;
    return Boolean(progress.completed[topic.requires]);
  }

  function recordScore(store, topic, score) {
    const progress = loadProgress(store);
    if (score >= topic.test.passScore) {
      progress.completed[topic.id] = {
        score: score,
        date: new Date().toISOString().slice(0, 10)
      };
      saveProgress(store, progress);
    }
    return progress;
  }

  function countCompleted(topics, progress) {
    return topics.filter(function (t) { return Boolean(progress.completed[t.id]); }).length;
  }

  const api = { loadProgress, saveProgress, isUnlocked, recordScore, countCompleted, STORAGE_KEY };

  root.Progress = api;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
