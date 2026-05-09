#!/usr/bin/env node

import {existsSync} from 'node:fs';
import {join} from 'node:path';
import {
  actualExtensionFor,
  assetExists,
  assetFilePathToDiskPath,
  findDuplicateValues,
  findEmptyAssetFolders,
  formatList,
  parseAssetManifest,
  preferredExtensionFor,
  repoRoot,
  requiredAssetFolders,
  summarizeAssets,
} from './c4sight-qa-utils.mjs';

const jsonMode = process.argv.includes('--json');

const assets = parseAssetManifest();
const summary = summarizeAssets(assets);

const duplicateIds = findDuplicateValues(assets, (asset) => asset.id);
const duplicateFilePaths = findDuplicateValues(assets, (asset) => asset.filePath);

const extensionMismatches = assets.filter(
  (asset) => actualExtensionFor(asset) !== preferredExtensionFor(asset),
);

const missingRequiredCategoryFolders = requiredAssetFolders.filter(
  (folder) => !existsSync(join(repoRoot, 'public/c4sight/assets', folder)),
);

const emptyAssetFolders = findEmptyAssetFolders();

const invalidPaths = assets.filter(
  (asset) =>
    !asset.filePath.startsWith('/c4sight/assets/') ||
    asset.filePath.includes('\\') ||
    asset.filePath.includes(' ') ||
    /[A-Z]/.test(asset.filePath),
);

const manifestCategoryFolders = assets
  .map((asset) => asset.filePath.replace(/^\/c4sight\/assets\//, '').split('/')[0])
  .filter(Boolean);

const categoryFolderWarnings = assets.filter((asset) => {
  const firstFolder = asset.filePath
    .replace(/^\/c4sight\/assets\//, '')
    .split('/')[0];

  const allowedByCategory = {
    audio_identity: ['audio-identity'],
    blackboard_mode: ['blackboard-mode', 'effects', 'props', 'scene-keyframes'],
    host: ['host', 'characters'],
    human_judgement_mode: ['human-judgement-mode', 'icons', 'scene-keyframes'],
    interface_mode: ['interface-mode', 'cards', 'icons', 'scene-keyframes'],
    main_world: ['main-world', 'icons', 'props', 'scene-keyframes'],
    mascot_wizard: ['characters', 'recurring-devices'],
    recurring_devices: ['recurring-devices', 'effects', 'props'],
    transitions: ['transitions'],
  };

  return !allowedByCategory[asset.category]?.includes(firstFolder);
});

const requiredMissing = assets.filter(
  (asset) => asset.required && !assetExists(asset),
);

const optionalMissing = assets.filter(
  (asset) => !asset.required && !assetExists(asset),
);

const episode1Missing = assets.filter(
  (asset) => asset.episode1Minimum && !assetExists(asset),
);

const warnings = [];

if (duplicateFilePaths.length > 0) {
  warnings.push(
    `${duplicateFilePaths.length} duplicate file path groups found. Some are legacy aliases; verify they are intentional.`,
  );
}

if (emptyAssetFolders.length > 0) {
  warnings.push(
    `${emptyAssetFolders.length} asset folders are empty. This is expected while waiting for Character System v2, but blocks production asset readiness.`,
  );
}

if (requiredMissing.length > 0) {
  warnings.push(
    'Required assets are missing. Any production scene using these entries would fall back to placeholder components.',
  );
}

const result = {
  ok:
    duplicateIds.length === 0 &&
    extensionMismatches.length === 0 &&
    missingRequiredCategoryFolders.length === 0 &&
    invalidPaths.length === 0 &&
    categoryFolderWarnings.length === 0,
  productionAssetsReady: requiredMissing.length === 0,
  summary,
  duplicateIds: duplicateIds.map((group) => ({
    id: group.value,
    count: group.items.length,
  })),
  duplicateFilePaths: duplicateFilePaths.map((group) => ({
    filePath: group.value,
    count: group.items.length,
    ids: group.items.map((asset) => asset.id),
  })),
  extensionMismatches: extensionMismatches.map((asset) => ({
    id: asset.id,
    filePath: asset.filePath,
    preferredFormat: asset.preferredFormat,
    actualExtension: actualExtensionFor(asset),
  })),
  invalidPaths: invalidPaths.map((asset) => ({
    id: asset.id,
    filePath: asset.filePath,
  })),
  categoryFolderWarnings: categoryFolderWarnings.map((asset) => ({
    id: asset.id,
    category: asset.category,
    filePath: asset.filePath,
  })),
  missingRequiredCategoryFolders,
  emptyAssetFolders,
  requiredMissing: requiredMissing.map((asset) => ({
    id: asset.id,
    displayName: asset.displayName,
    category: asset.category,
    filePath: asset.filePath,
    diskPath: assetFilePathToDiskPath(asset.filePath),
  })),
  optionalMissing: optionalMissing.map((asset) => ({
    id: asset.id,
    category: asset.category,
    filePath: asset.filePath,
  })),
  episode1Missing: episode1Missing.map((asset) => ({
    id: asset.id,
    category: asset.category,
    filePath: asset.filePath,
  })),
  manifestCategoryFolders: [...new Set(manifestCategoryFolders)].sort(),
  warnings,
  limitations: [
    'Image dimension checking is not enforced yet. Add a lightweight PNG/SVG metadata pass later if production exports need automated size gates.',
  ],
};

if (jsonMode) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log('C4Sight Asset Validation');
  console.log('========================');
  console.log(
    `Assets: ${summary.ready}/${summary.total} ready (${summary.requiredReady}/${summary.required} required, ${summary.episode1Ready}/${summary.episode1Minimum} Episode 1 minimum)`,
  );
  console.log(`Required missing: ${summary.requiredMissing}`);
  console.log(`Optional missing: ${optionalMissing.length}`);
  console.log(`Duplicate IDs: ${duplicateIds.length}`);
  console.log(`Duplicate file path groups: ${duplicateFilePaths.length}`);
  console.log(`Extension mismatches: ${extensionMismatches.length}`);
  console.log(`Invalid path names: ${invalidPaths.length}`);
  console.log(`Category/folder warnings: ${categoryFolderWarnings.length}`);
  console.log(
    `Missing required category folders: ${missingRequiredCategoryFolders.length}`,
  );
  console.log(`Empty asset folders: ${emptyAssetFolders.length}`);

  if (warnings.length > 0) {
    console.log('\nWarnings:');
    console.log(formatList(warnings));
  }

  if (requiredMissing.length > 0) {
    console.log('\nMissing required assets:');
    console.log(formatList(requiredMissing.map((asset) => asset.filePath)));
  }

  console.log('\nLimitations:');
  console.log(formatList(result.limitations));
}

if (!jsonMode && !result.ok) {
  process.exitCode = 1;
}
