(function (root) {
  // In Node.js environment, load individual modules if not already in root
  if (typeof module !== "undefined" && module.exports) {
    const vocab = require("./vocabulary.js");
    const gA1 = require("./grammar_a1.js");
    const gA1Ext = require("./grammar_a1_ext.js");
    const gA2 = require("./grammar_a2.js");
    const gB1 = require("./grammar_b1.js");
    const gB2 = require("./grammar_b2c1.js");
    const skills = require("./skills_a1.js");

    root.PRACTICE_WORKSHEETS = Object.assign(
      {},
      vocab,
      gA1,
      gA1Ext,
      gA2,
      gB1,
      gB2,
      skills
    );
    module.exports = root.PRACTICE_WORKSHEETS;
    return;
  }

  // Browser environment
  root.PRACTICE_WORKSHEETS = Object.assign(
    {},
    root.VOCABULARY_WORKSHEETS || {},
    root.GRAMMAR_A1_WORKSHEETS || {},
    root.GRAMMAR_A1_EXT_WORKSHEETS || {},
    root.GRAMMAR_A2_WORKSHEETS || {},
    root.GRAMMAR_B1_WORKSHEETS || {},
    root.GRAMMAR_B2C1_WORKSHEETS || {},
    root.SKILLS_A1_WORKSHEETS || {}
  );

  // Attach to TOPICS if available in runtime
  if (root.TOPICS) {
    for (const [topicId, sheets] of Object.entries(root.PRACTICE_WORKSHEETS)) {
      if (root.TOPICS[topicId]) {
        if (!root.TOPICS[topicId].reference) root.TOPICS[topicId].reference = {};
        root.TOPICS[topicId].reference.worksheets = sheets;
        if (!root.TOPICS[topicId].reference.worksheet && sheets.length > 0) {
          root.TOPICS[topicId].reference.worksheet = sheets[0];
        }
      }
    }
  }
})(typeof window !== "undefined" ? window : globalThis);
