const assert = require("assert");
const path = require("path");

const practiceWorksheets = require("../datasource/worksheets/index.js");

// 1. Verify all 28 curriculum topics are covered
const topicKeys = Object.keys(practiceWorksheets);
assert.strictEqual(topicKeys.length, 28, "Must have practice sheets for all 28 curriculum topics");

let totalQuestions = 0;
let totalSheets = 0;

topicKeys.forEach(topicId => {
  const sheets = practiceWorksheets[topicId];
  assert.ok(Array.isArray(sheets), `Topic ${topicId} must have an array of practice sheets`);
  assert.strictEqual(sheets.length, 3, `Topic ${topicId} must have exactly 3 practice sheets`);

  sheets.forEach((sheet, idx) => {
    totalSheets++;
    assert.strictEqual(sheet.sheetNum, idx + 1, `Topic ${topicId} Sheet ${idx + 1} must have sheetNum ${idx + 1}`);
    assert.ok(sheet.id, `Topic ${topicId} Sheet ${idx + 1} must have an id`);
    assert.ok(sheet.title && sheet.title.trim().length > 0, `Topic ${topicId} Sheet ${idx + 1} must have a title`);
    assert.ok(sheet.subtitle && sheet.subtitle.trim().length > 0, `Topic ${topicId} Sheet ${idx + 1} must have a subtitle`);
    assert.ok(Array.isArray(sheet.exercises), `Topic ${topicId} Sheet ${idx + 1} must have an exercises array`);
    assert.strictEqual(sheet.exercises.length, 20, `Topic ${topicId} Sheet ${idx + 1} must have exactly 20 exercises`);

    sheet.exercises.forEach((ex, exIdx) => {
      totalQuestions++;
      assert.ok(ex.q && ex.q.trim().length > 0, `Topic ${topicId} Sheet ${idx + 1} Q${exIdx + 1} must have question text`);
      assert.ok(ex.answer && ex.answer.trim().length > 0, `Topic ${topicId} Sheet ${idx + 1} Q${exIdx + 1} must have an answer`);
    });
  });
});

assert.strictEqual(totalSheets, 84, "Must have exactly 84 practice sheets (28 topics * 3 sheets)");
assert.strictEqual(totalQuestions, 1680, "Must have exactly 1680 questions (84 sheets * 20 questions)");

console.log(`worksheets.test.js: Validated ${totalSheets} sheets and ${totalQuestions} questions across all 28 topics successfully!`);
