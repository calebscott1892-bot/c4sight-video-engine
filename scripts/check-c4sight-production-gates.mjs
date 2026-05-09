#!/usr/bin/env node

import {existsSync} from 'node:fs';
import {join} from 'node:path';
import {
  formatList,
  parseAssetManifest,
  productionGatesPath,
  readAvailability,
  readText,
  repoRoot,
  showBiblePath,
  summarizeAssets,
} from './c4sight-qa-utils.mjs';

const jsonMode = process.argv.includes('--json');

const assets = parseAssetManifest();
const availability = readAvailability();
const summary = summarizeAssets(assets, availability);
const showBibleExists = existsSync(showBiblePath);
const gatesDocExists = existsSync(productionGatesPath);
const showBible = showBibleExists ? readText(showBiblePath) : '';
const gatesDoc = gatesDocExists ? readText(productionGatesPath) : '';

const episodeQuestion =
  'Is AI actually magic, or are we just bad at understanding it?';

const styleframeAssets = assets.filter(
  (asset) =>
    asset.id.includes('style_frame') ||
    asset.id.includes('styleframe') ||
    asset.displayName.toLowerCase().includes('style frame') ||
    asset.displayName.toLowerCase().includes('styleframe'),
);

const styleframesReady = styleframeAssets.filter(
  (asset) => availability[asset.filePath] === true,
);

const requiredAssetsReady =
  summary.required > 0 && summary.requiredMissing === 0;

const approvedScriptPath = join(repoRoot, 'docs/C4Sight-Episode01-Script.md');
const animaticApprovalPath = join(
  repoRoot,
  'docs/C4Sight-Episode01-Animatic-Approval.md',
);
const finalAnimationPath = join(
  repoRoot,
  'out/c4sight-episode01-final.mp4',
);
const finalQaPath = join(repoRoot, 'docs/C4Sight-Episode01-Final-QA.md');

const gateRows = [
  {
    id: 1,
    name: 'Show Bible locked',
    status: showBibleExists && gatesDocExists ? 'pass' : 'fail',
    evidence: showBibleExists
      ? 'Show Bible document exists.'
      : 'Show Bible document is missing.',
    nextAction: showBibleExists
      ? 'Keep Show Bible as the creative source of truth.'
      : 'Add docs/C4Sight-Show-Bible.md before continuing.',
  },
  {
    id: 2,
    name: 'Episode question locked',
    status:
      showBible.includes(episodeQuestion) || gatesDoc.includes(episodeQuestion)
        ? 'pass'
        : 'fail',
    evidence:
      showBible.includes(episodeQuestion) || gatesDoc.includes(episodeQuestion)
        ? `Episode 1 question is present: "${episodeQuestion}"`
        : 'Episode 1 question was not found in the Show Bible or production gates doc.',
    nextAction:
      'Keep Episode 1 scoped to the locked question before approving scripts.',
  },
  {
    id: 3,
    name: 'Script locked',
    status: existsSync(approvedScriptPath) ? 'pass' : 'blocked',
    evidence: existsSync(approvedScriptPath)
      ? 'Approved Episode 1 script doc exists.'
      : 'No approved Episode 1 script doc found at docs/C4Sight-Episode01-Script.md.',
    nextAction:
      'Create and approve the Episode 1 script before styleframe-dependent animation planning.',
  },
  {
    id: 4,
    name: 'Styleframes approved',
    status:
      styleframeAssets.length > 0 &&
      styleframesReady.length === styleframeAssets.length
        ? 'pass'
        : 'blocked',
    evidence: `${styleframesReady.length}/${styleframeAssets.length} styleframe assets are present.`,
    nextAction:
      'Wait for approved Character System v2/styleframes, then place exports at manifest paths and rerun QA.',
  },
  {
    id: 5,
    name: 'Required assets present',
    status: requiredAssetsReady ? 'pass' : 'blocked',
    evidence: `${summary.requiredReady}/${summary.required} required manifest assets are present; ${summary.episode1Ready}/${summary.episode1Minimum} Episode 1 minimum assets are present.`,
    nextAction:
      'Import approved production assets into public/c4sight/assets and rerun npm run c4sight:qa.',
  },
  {
    id: 6,
    name: 'Animatic approved',
    status: existsSync(animaticApprovalPath) ? 'pass' : 'blocked',
    evidence: existsSync(animaticApprovalPath)
      ? 'Animatic approval doc exists.'
      : 'No animatic approval doc found at docs/C4Sight-Episode01-Animatic-Approval.md.',
    nextAction:
      'Build and approve a voice-led animatic only after Gates 4 and 5 pass.',
  },
  {
    id: 7,
    name: 'Final animation',
    status: existsSync(finalAnimationPath) ? 'pass' : 'blocked',
    evidence: existsSync(finalAnimationPath)
      ? 'Final Episode 1 render exists.'
      : 'No final Episode 1 render exists. This is expected while production is blocked.',
    nextAction:
      'Do not build final animation until approved animatic and production assets are available.',
  },
  {
    id: 8,
    name: 'QA/export',
    status: existsSync(finalQaPath) ? 'pass' : 'blocked',
    evidence: existsSync(finalQaPath)
      ? 'Final QA/export doc exists.'
      : 'No final QA/export approval doc exists.',
    nextAction:
      'Run final export QA only after final animation exists.',
  },
];

const gate4 = gateRows.find((gate) => gate.id === 4);
const gate5 = gateRows.find((gate) => gate.id === 5);
const productionBlocked = gate4.status !== 'pass' || gate5.status !== 'pass';

const result = {
  ok: !productionBlocked,
  productionBlocked,
  animationBlockedReason: productionBlocked
    ? 'Animation is blocked until Gate 4 Styleframes approved and Gate 5 Required assets present pass.'
    : 'Gate 4 and Gate 5 pass. Continue checking downstream approvals before animation.',
  gates: gateRows,
  assetSummary: summary,
  missingRequiredAssets: assets
    .filter((asset) => asset.required && availability[asset.filePath] !== true)
    .map((asset) => ({
      id: asset.id,
      category: asset.category,
      filePath: asset.filePath,
    })),
  missingStyleframes: styleframeAssets
    .filter((asset) => availability[asset.filePath] !== true)
    .map((asset) => ({
      id: asset.id,
      category: asset.category,
      filePath: asset.filePath,
    })),
};

if (jsonMode) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log('C4Sight Production Gates');
  console.log('========================');

  for (const gate of gateRows) {
    const label = gate.status.toUpperCase().padEnd(7);
    console.log(`Gate ${gate.id}: ${label} ${gate.name}`);
    console.log(`  Evidence: ${gate.evidence}`);
    console.log(`  Next: ${gate.nextAction}`);
  }

  console.log('\nProduction status:');
  console.log(result.animationBlockedReason);

  if (result.missingStyleframes.length > 0) {
    console.log('\nMissing styleframes:');
    console.log(
      formatList(result.missingStyleframes.map((asset) => asset.filePath)),
    );
  }

  if (result.missingRequiredAssets.length > 0) {
    console.log('\nMissing required assets:');
    console.log(
      formatList(result.missingRequiredAssets.map((asset) => asset.filePath)),
    );
  }
}

if (!jsonMode && productionBlocked) {
  process.exitCode = 1;
}
