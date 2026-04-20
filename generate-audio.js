#!/usr/bin/env node
/**
 * generate-audio.js
 * Generates MP3 pronunciation files for all verbs in verbs.js
 * using Microsoft Edge TTS (free, no API key needed, natural voice)
 *
 * Usage:
 *   npm install edge-tts-node
 *   node generate-audio.js
 *
 * Or with npx (no install needed):
 *   npx edge-tts --voice en-US-JennyNeural ...  (see manual mode below)
 *
 * Output: audio/ folder with one MP3 per word form
 */

const { execSync, exec } = require('child_process');
const fs   = require('fs');
const path = require('path');

// ── CONFIG ──────────────────────────────────────────
const VOICE     = 'en-US-JennyNeural';   // Microsoft neural voice (clear, natural)
const RATE      = '-5%';                 // Slightly slower for children
const AUDIO_DIR = path.join(__dirname, 'audio');
const VERBS_JS  = path.join(__dirname, 'verbs.js');
// ────────────────────────────────────────────────────

// Load verbs from verbs.js
function loadVerbs() {
  const src = fs.readFileSync(VERBS_JS, 'utf8');
  // Extract the array using eval in a sandboxed way
  const match = src.match(/const VERBS\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) throw new Error('Could not parse VERBS from verbs.js');
  return JSON.parse(match[1].replace(/,\s*\]/g, ']').replace(/,\s*\}/g, '}'));
}

// Collect all unique word forms needed
function collectWords(verbs) {
  const words = new Set();
  verbs.forEach(v => {
    words.add(v.present);
    words.add(v.past);
    words.add(v.pp);
    if (v.pastAlt) words.add(v.pastAlt);
    if (v.ppAlt)   words.add(v.ppAlt);
  });
  return [...words].sort();
}

// Check if edge-tts is available
function checkEdgeTts() {
  try {
    execSync('edge-tts --version', { stdio: 'pipe' });
    return 'edge-tts';
  } catch {}
  try {
    execSync('python3 -c "import edge_tts"', { stdio: 'pipe' });
    return 'python3';
  } catch {}
  return null;
}

// Generate a single MP3 file
function generateMp3(word, outputPath, tool) {
  const escaped = word.replace(/'/g, "\\'");
  let cmd;
  if (tool === 'edge-tts') {
    cmd = `edge-tts --voice "${VOICE}" --rate "${RATE}" --text "${escaped}" --write-media "${outputPath}"`;
  } else {
    cmd = `python3 -m edge_tts --voice "${VOICE}" --rate "${RATE}" --text "${escaped}" --write-media "${outputPath}"`;
  }
  execSync(cmd, { stdio: 'pipe', timeout: 15000 });
}

async function main() {
  console.log('🔊 TensesPlay Audio Generator');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Check edge-tts
  const tool = checkEdgeTts();
  if (!tool) {
    console.error('❌ edge-tts not found. Please install it:\n');
    console.error('   pip install edge-tts\n');
    console.error('Then run this script again.');
    process.exit(1);
  }
  console.log(`✅ Using: ${tool} | Voice: ${VOICE}\n`);

  // Create audio directory
  if (!fs.existsSync(AUDIO_DIR)) {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
    console.log(`📁 Created: audio/\n`);
  }

  // Load verbs and collect words
  let verbs;
  try {
    verbs = loadVerbs();
  } catch (e) {
    // Fallback: parse differently
    const src = fs.readFileSync(VERBS_JS, 'utf8');
    // Use a simple regex to extract present/past/pp
    const words = new Set();
    const presMatch = src.matchAll(/present:\s*"([^"]+)"/g);
    const pastMatch = src.matchAll(/past:\s*"([^"]+)"/g);
    const ppMatch   = src.matchAll(/pp:\s*"([^"]+)"/g);
    for (const m of presMatch) words.add(m[1]);
    for (const m of pastMatch) words.add(m[1]);
    for (const m of ppMatch)   words.add(m[1]);
    verbs = null;
    console.log(`📝 Loaded ${words.size} unique word forms via regex fallback`);
    const wordList = [...words].sort();
    await generateList(wordList, tool);
    return;
  }

  const words = collectWords(verbs);
  console.log(`📝 Found ${verbs.length} verbs → ${words.length} unique word forms to generate\n`);

  await generateList(words, tool);
}

async function generateList(words, tool) {
  let generated = 0, skipped = 0, failed = 0;

  for (const word of words) {
    const fileName   = word.toLowerCase().replace(/\s+/g, '_') + '.mp3';
    const outputPath = path.join(AUDIO_DIR, fileName);

    if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 1000) {
      process.stdout.write(`  ⏭  ${word.padEnd(20)} (already exists)\n`);
      skipped++;
      continue;
    }

    process.stdout.write(`  🔊 Generating: ${word.padEnd(20)}`);
    try {
      generateMp3(word, outputPath, tool);
      const size = fs.statSync(outputPath).size;
      process.stdout.write(`✅ (${Math.round(size/1024)}KB)\n`);
      generated++;
      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      process.stdout.write(`❌ ${err.message.split('\n')[0]}\n`);
      failed++;
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Generated: ${generated}`);
  console.log(`⏭  Skipped:   ${skipped} (already existed)`);
  if (failed > 0) console.log(`❌ Failed:    ${failed}`);
  console.log('\n📁 Audio files saved to: audio/');
  console.log('🚀 Now commit and push to GitHub:');
  console.log('   git add audio/');
  console.log('   git commit -m "Add pronunciation audio files"');
  console.log('   git push');
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});
