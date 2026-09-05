const assert = require("assert");
const { signUp, signIn, getSession, signOut, isOnboarded, setOnboarded } = require("../auth.js");

function fakeStore() {
  const data = {};
  return {
    getItem: (k) => (k in data ? data[k] : null),
    setItem: (k, v) => { data[k] = v; },
    removeItem: (k) => { delete data[k]; }
  };
}

async function main() {
  // 1. signUp rejects a too-short username
  {
    const store = fakeStore();
    const res = await signUp(store, "ab", "password");
    assert.strictEqual(res.ok, false);
  }

  // 2. signUp rejects a too-short password
  {
    const store = fakeStore();
    const res = await signUp(store, "alice", "123");
    assert.strictEqual(res.ok, false);
  }

  // 3. signUp succeeds and starts a session
  {
    const store = fakeStore();
    const res = await signUp(store, "alice", "password1");
    assert.strictEqual(res.ok, true);
    assert.strictEqual(getSession(store), "alice");
  }

  // 4. signUp rejects a duplicate username (case-insensitive)
  {
    const store = fakeStore();
    await signUp(store, "alice", "password1");
    const res = await signUp(store, "ALICE", "password2");
    assert.strictEqual(res.ok, false);
  }

  // 5. signIn fails for unknown username
  {
    const store = fakeStore();
    const res = await signIn(store, "nobody", "whatever");
    assert.strictEqual(res.ok, false);
  }

  // 6. signIn fails with wrong password
  {
    const store = fakeStore();
    await signUp(store, "alice", "password1");
    signOut(store);
    const res = await signIn(store, "alice", "wrongpass");
    assert.strictEqual(res.ok, false);
    assert.strictEqual(getSession(store), null);
  }

  // 7. signIn succeeds with correct password and restores session
  {
    const store = fakeStore();
    await signUp(store, "alice", "password1");
    signOut(store);
    assert.strictEqual(getSession(store), null);
    const res = await signIn(store, "alice", "password1");
    assert.strictEqual(res.ok, true);
    assert.strictEqual(getSession(store), "alice");
  }

  // 8. signIn is case-insensitive on username but preserves original casing
  {
    const store = fakeStore();
    await signUp(store, "Alice", "password1");
    signOut(store);
    const res = await signIn(store, "aLICE", "password1");
    assert.strictEqual(res.ok, true);
    assert.strictEqual(getSession(store), "Alice");
  }

  // 9. onboarding flag defaults false and can be set
  {
    const store = fakeStore();
    assert.strictEqual(isOnboarded(store), false);
    setOnboarded(store);
    assert.strictEqual(isOnboarded(store), true);
  }

  // 10. signOut clears the session
  {
    const store = fakeStore();
    await signUp(store, "alice", "password1");
    signOut(store);
    assert.strictEqual(getSession(store), null);
  }

  console.log("auth.test.js: all assertions passed");
}

main().catch(e => { console.error(e); process.exit(1); });
