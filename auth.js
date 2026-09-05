(function (root) {
  const USERS_KEY = "apprendre-io:users";
  const SESSION_KEY = "apprendre-io:session";
  const ONBOARDED_KEY = "apprendre-io:onboarded";

  function loadUsers(store) {
    try {
      const raw = store.getItem(USERS_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function saveUsers(store, users) {
    store.setItem(USERS_KEY, JSON.stringify(users));
  }

  // Non-cryptographic fallback for insecure contexts (e.g. opening index.html
  // via file://, where window.crypto.subtle is unavailable). This is a
  // simulated local-only auth gate, not real security either way.
  function fallbackHash(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
  }

  async function hashPassword(password) {
    if (typeof crypto !== "undefined" && crypto.subtle && crypto.subtle.digest) {
      try {
        const enc = new TextEncoder().encode(password);
        const buf = await crypto.subtle.digest("SHA-256", enc);
        return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
      } catch (e) {
        return fallbackHash(password);
      }
    }
    return fallbackHash(password);
  }

  async function signUp(store, username, password) {
    const uname = String(username || "").trim();
    if (uname.length < 3) return { ok: false, error: "Username must be at least 3 characters." };
    if (!password || password.length < 4) return { ok: false, error: "Password must be at least 4 characters." };

    const users = loadUsers(store);
    const key = uname.toLowerCase();
    if (users[key]) return { ok: false, error: "That username is already taken." };

    const hash = await hashPassword(password);
    users[key] = { username: uname, hash, createdAt: new Date().toISOString() };
    saveUsers(store, users);
    store.setItem(SESSION_KEY, uname);
    return { ok: true };
  }

  async function signIn(store, username, password) {
    const uname = String(username || "").trim();
    const users = loadUsers(store);
    const record = users[uname.toLowerCase()];
    if (!record) return { ok: false, error: "No account with that username. Try signing up." };

    const hash = await hashPassword(password);
    if (hash !== record.hash) return { ok: false, error: "Incorrect password." };

    store.setItem(SESSION_KEY, record.username);
    return { ok: true };
  }

  function getSession(store) {
    try { return store.getItem(SESSION_KEY); } catch (e) { return null; }
  }

  function signOut(store) {
    try { store.removeItem(SESSION_KEY); } catch (e) {}
  }

  function isOnboarded(store) {
    try { return store.getItem(ONBOARDED_KEY) === "1"; } catch (e) { return false; }
  }

  function setOnboarded(store) {
    try { store.setItem(ONBOARDED_KEY, "1"); } catch (e) {}
  }

  const api = { signUp, signIn, getSession, signOut, isOnboarded, setOnboarded, USERS_KEY, SESSION_KEY, ONBOARDED_KEY };
  root.Auth = api;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
