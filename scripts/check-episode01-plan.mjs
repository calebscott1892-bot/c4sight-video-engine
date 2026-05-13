#!/usr/bin/env node

import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {
  formatList,
  parseAssetManifest,
  readAvailability,
  repoRoot,
} from './c4sight-qa-utils.mjs';

const scriptPath = join(
  repoRoot,
  'src/episodes/episode01/episode01.script.ts',
);
const beatsPath = join(
  repoRoot,
  'src/episodes/episode01/episode01.beats.ts',
);
const assetNeedsPath = join(
  repoRoot,
  'src/episodes/episode01/episode01.assetNeeds.ts',
);

const forbiddenPhrases = [
  'future is now',
  'buckle up',
  'unlock the power',
  'supercharge',
  'game-changing',
  'revolutionary',
  'in today\'s fast-paced world',
  'leverage ai',
  '10x',
  'the future of',
  'at your fingertips',
];

const read = (path) => readFileSync(path, 'utf8');

const scriptSource = read(scriptPath);
const beatsSource = read(beatsPath);
const assetNeedsSource = read(assetNeedsPath);
const manifestAssets = parseAssetManifest();
const manifestIds = new Set(manifestAssets.map((asset) => asset.id));
const availability = readAvailability();

const scriptBlocks = [
  ...scriptSource.matchAll(
    /\{\s*id:\s*'([^']+)'[\s\S]*?mode:\s*'([^']+)'[\s\S]*?voiceoverDraft:\s*`([\s\S]*?)`,[\s\S]*?notes:/g,
  ),
].map((match) => ({
  id: match[1],
  mode: match[2],
  voiceoverDraft: match[3],
}));

const scriptBlockIds = new Set(scriptBlocks.map((block) => block.id));

const beats = [
  ...beatsSource.matchAll(
    /\{\s*id:\s*'([^']+)'[\s\S]*?scriptBlockId:\s*'([^']+)'[\s\S]*?visualMode:\s*'([^']+)'[\s\S]*?requiredAssets:\s*\[([\s\S]*?)\][\s\S]*?transitionIn:\s*'([^']+)'[\s\S]*?transitionOut:\s*'([^']+)'/g,
  ),
].map((match) => ({
  id: match[1],
  scriptBlockId: match[2],
  visualMode: match[3],
  requiredAssets: [...match[4].matchAll(/'([^']+)'/g)].map(
    (assetMatch) => assetMatch[1],
  ),
  transitionIn: match[5],
  transitionOut: match[6],
}));

const assetNeedIds = [
  ...assetNeedsSource.matchAll(/assetId:\s*'([^']+)'/g),
].map((match) => match[1]);
const assetNeedIdSet = new Set(assetNeedIds);

const unknownBeatScriptBlocks = beats.filter(
  (beat) => !scriptBlockIds.has(beat.scriptBlockId),
);

const beatAssetIds = [...new Set(beats.flatMap((beat) => beat.requiredAssets))];
const unknownBeatAssets = beatAssetIds.filter((assetId) => !manifestIds.has(assetId));
const unknownAssetNeeds = [...new Set(assetNeedIds)].filter(
  (assetId) => !manifestIds.has(assetId),
);
const beatAssetsNotListedInNeeds = beatAssetIds.filter(
  (assetId) => !assetNeedIdSet.has(assetId),
);

const forbiddenPhraseHits = forbiddenPhrases.filter((phrase) =>
  scriptSource.toLowerCase().includes(phrase),
);

const blackboardScriptBlocks = scriptBlocks.filter(
  (block) => block.mode === 'blackboard_mode',
);
const hasRitualLine = scriptBlocks.some((block) =>
  block.voiceoverDraft.toLowerCase().includes('take it to the blackboard'),
);
const blackboardBeatsWithoutRitual = beats.filter(
  (beat) =>
    beat.visualMode === 'blackboard_mode' &&
    !beat.transitionIn.includes('blackboard_ritual') &&
    !hasRitualLine,
);

const blackboardModeWithoutScriptRitual =
  blackboardScriptBlocks.length > 0 && !hasRitualLine;

const missingProductionFiles = beatAssetIds
  .filter((assetId) => {
    const asset = manifestAssets.find((entry) => entry.id === assetId);
    return asset && availability[asset.filePath] !== true;
  })
  .map((assetId) => {
    const asset = manifestAssets.find((entry) => entry.id === assetId);
    return `${assetId} - ${asset?.filePath ?? 'unknown path'}`;
  });

const approvalDocPath = join(repoRoot, 'docs/C4Sight-Episode01-Script.md');
const accidentalGate3ApprovalDocExists = existsSync(approvalDocPath);

const errors = [
  ...unknownBeatScriptBlocks.map(
    (beat) =>
      `Beat ${beat.id} references missing scriptBlockId ${beat.scriptBlockId}.`,
  ),
  ...unknownBeatAssets.map(
    (assetId) =>
      `Beat required asset ${assetId} does not exist in c4sightAssetManifest.`,
  ),
  ...unknownAssetNeeds.map(
    (assetId) =>
      `Episode 1 asset need ${assetId} does not exist in c4sightAssetManifest.`,
  ),
  ...forbiddenPhraseHits.map(
    (phrase) => `Forbidden phrase appears in script draft: "${phrase}".`,
  ),
  ...blackboardBeatsWithoutRitual.map(
    (beat) =>
      `Blackboard beat ${beat.id} does not appear to be tied to the blackboard ritual.`,
  ),
  ...(blackboardModeWithoutScriptRitual
    ? ['Blackboard script block exists without the phrase "take it to the blackboard".']
    : []),
  ...(accidentalGate3ApprovalDocExists
    ? [
        'docs/C4Sight-Episode01-Script.md exists. That filename marks Gate 3 as approved in the gate checker; use a different draft filename until approval.',
      ]
    : []),
];

const warnings = [
  ...(beatAssetsNotListedInNeeds.length > 0
    ? [
        `${beatAssetsNotListedInNeeds.length} beat asset IDs are not listed in episode01.assetNeeds.ts.`,
      ]
    : []),
  ...(missingProductionFiles.length > 0
    ? [
        `${missingProductionFiles.length} beat asset files are not present yet. This is expected until Gate 5 is ready.`,
      ]
    : []),
];

console.log('C4Sight Episode 1 Plan Check');
console.log('============================');
console.log(`Script blocks: ${scriptBlocks.length}`);
console.log(`Visual beats: ${beats.length}`);
console.log(`Unique beat asset IDs: ${beatAssetIds.length}`);
console.log(`Asset needs listed: ${new Set(assetNeedIds).size}`);
console.log(`Unknown script block references: ${unknownBeatScriptBlocks.length}`);
console.log(`Unknown beat asset IDs: ${unknownBeatAssets.length}`);
console.log(`Unknown asset-needs IDs: ${unknownAssetNeeds.length}`);
console.log(`Forbidden phrase hits: ${forbiddenPhraseHits.length}`);
console.log(
  `Blackboard ritual present: ${hasRitualLine && !blackboardModeWithoutScriptRitual ? 'yes' : 'no'}`,
);
console.log(`Missing production files for beat assets: ${missingProductionFiles.length}`);

if (warnings.length > 0) {
  console.log('\nWarnings:');
  console.log(formatList(warnings));
}

if (missingProductionFiles.length > 0) {
  console.log('\nMissing production files referenced by beats:');
  console.log(formatList(missingProductionFiles));
}

if (errors.length > 0) {
  console.log('\nErrors:');
  console.log(formatList(errors));
  process.exitCode = 1;
} else {
  console.log('\nEpisode 1 planning data is internally valid.');
  console.log('Gate 3 is still not approved by this check.');
}
