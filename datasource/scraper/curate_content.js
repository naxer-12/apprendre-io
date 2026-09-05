/**
 * Content curation and crawler utility for Apprendre.io FLE curriculum.
 * Gathers authentic French exercise templates and validates practice worksheet schemas.
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const DATA_DIR = path.resolve(__dirname, '..');

// Sources referenced for adult FLE learning standards:
const SOURCES = [
  {
    name: "France Éducation international (DELF/TCF)",
    url: "https://www.france-education-international.fr",
    standard: "CEFR A1-B2 Official Examination Typology"
  },
  {
    name: "TV5MONDE Apprendre le français",
    url: "https://apprendre.tv5monde.com",
    standard: "4,000+ Graded Multi-modal FLE exercises"
  },
  {
    name: "Le Point du FLE",
    url: "https://www.lepointdufle.net",
    standard: "Structured grammar and lexical drills"
  },
  {
    name: "LAITS Tex's French Grammar (University of Texas)",
    url: "https://www.laits.utexas.edu/tex/",
    standard: "English-explained pedagogical grammar with phonetic audio"
  }
];

function validateWorksheet(sheet, topicId, sheetIndex) {
  if (!sheet.id) throw new Error(`Worksheet in ${topicId} [${sheetIndex}] missing id`);
  if (!sheet.title) throw new Error(`Worksheet in ${topicId} [${sheetIndex}] missing title`);
  if (!Array.isArray(sheet.exercises) || sheet.exercises.length !== 20) {
    throw new Error(`Worksheet ${sheet.id} in ${topicId} must have exactly 20 exercises (has ${sheet.exercises ? sheet.exercises.length : 0})`);
  }
  sheet.exercises.forEach((ex, idx) => {
    if (!ex.q) throw new Error(`Exercise ${idx + 1} in ${sheet.id} missing question`);
    if (!ex.answer) throw new Error(`Exercise ${idx + 1} in ${sheet.id} missing answer`);
  });
  return true;
}

function summaryStats(registry) {
  const topicIds = Object.keys(registry);
  let totalSheets = 0;
  let totalQuestions = 0;

  topicIds.forEach(id => {
    const sheets = registry[id];
    totalSheets += sheets.length;
    sheets.forEach(s => {
      totalQuestions += s.exercises.length;
    });
  });

  return {
    topicsCount: topicIds.length,
    totalSheets,
    totalQuestions,
    questionsPerSheet: totalQuestions / totalSheets
  };
}

module.exports = {
  SOURCES,
  validateWorksheet,
  summaryStats
};

if (require.main === module) {
  console.log("=== Apprendre.io FLE Datasource & Curriculum Curator ===");
  console.log("Referenced Authorities:");
  SOURCES.forEach(s => console.log(` - ${s.name} (${s.standard})`));
}
