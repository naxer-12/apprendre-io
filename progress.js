(function (root) {
  const STORAGE_KEY = "apprendre-io:progress";

  function emptyStreak() {
    return { current: 0, longest: 0, lastActiveDate: null, history: {} };
  }

  function loadProgress(store) {
    const raw = store.getItem(STORAGE_KEY);
    if (!raw) return { completed: {}, streak: emptyStreak() };
    try {
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.completed) return { completed: {}, streak: emptyStreak() };
      return { completed: parsed.completed, streak: parsed.streak || emptyStreak() };
    } catch (e) {
      return { completed: {}, streak: emptyStreak() };
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

  function todayStr(now) {
    return (now || new Date()).toISOString().slice(0, 10);
  }

  function daysBetween(dateA, dateB) {
    const msPerDay = 86400000;
    return Math.round((new Date(dateB + "T00:00:00Z") - new Date(dateA + "T00:00:00Z")) / msPerDay);
  }

  // Records a day of practice (any completed quiz attempt, pass or fail).
  // Extends the streak if practiced yesterday, resets it if a day was
  // missed, and always tracks the personal-best (longest) streak.
  function recordActivity(store, now) {
    const progress = loadProgress(store);
    const today = todayStr(now);
    const streak = progress.streak || emptyStreak();

    if (streak.lastActiveDate === today) {
      // Already recorded today — no-op, but still persist in case this is
      // the very first write for a brand-new progress object.
    } else if (streak.lastActiveDate && daysBetween(streak.lastActiveDate, today) === 1) {
      streak.current += 1;
    } else {
      streak.current = 1;
    }
    streak.lastActiveDate = today;
    streak.longest = Math.max(streak.longest, streak.current);
    streak.history[today] = true;

    progress.streak = streak;
    saveProgress(store, progress);
    return progress;
  }

  const api = { loadProgress, saveProgress, isUnlocked, recordScore, countCompleted, recordActivity, STORAGE_KEY };

  root.Progress = api;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
