import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import {dirname, extname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptsDir = dirname(fileURLToPath(import.meta.url));

export const repoRoot = resolve(scriptsDir, '..');

export const manifestPath = join(
  repoRoot,
  'src/design-system/c4sightAssetManifest.ts',
);

export const availabilityPath = join(
  repoRoot,
  'src/design-system/c4sightAssetAvailability.generated.ts',
);

export const showBiblePath = join(repoRoot, 'docs/C4Sight-Show-Bible.md');
export const productionGatesPath = join(
  repoRoot,
  'docs/C4Sight-Production-Gates.md',
);

export const requiredAssetFolders = [
  'audio-identity',
  'blackboard-mode',
  'cards',
  'characters',
  'characters/alien-wizard',
  'characters/mascot',
  'effects',
  'host',
  'human-judgement-mode',
  'icons',
  'interface-mode',
  'main-world',
  'props',
  'recurring-devices',
  'scene-keyframes',
  'textures',
  'transitions',
];

export const showBiblePalette = {
  SLATE: '#1A1F1C',
  CHALK: '#F4EDE0',
  PAPER: '#EFE7D6',
  RED: '#D7382C',
  LAVENDER: '#B9A8C7',
  INK: '#221F1F',
};

export const readText = (path) => readFileSync(path, 'utf8');

const extractField = (source, fieldName) => {
  const stringMatch = source.match(
    new RegExp(`${fieldName}:\\s*'([^']*)'`, 'm'),
  );

  if (stringMatch) {
    return stringMatch[1];
  }

  const booleanMatch = source.match(
    new RegExp(`${fieldName}:\\s*(true|false)`, 'm'),
  );

  if (booleanMatch) {
    return booleanMatch[1] === 'true';
  }

  return undefined;
};

export const parseAssetManifest = () => {
  const source = readText(manifestPath);
  const manifestMatch = source.match(
    /export const c4sightAssetManifest = \[([\s\S]*?)\]\s+as const/,
  );

  if (!manifestMatch) {
    throw new Error(`Could not find c4sightAssetManifest in ${manifestPath}`);
  }

  const objectSources = [
    ...manifestMatch[1].matchAll(
      /\{\s*id:\s*'[^']+'[\s\S]*?fallbackComponent:\s*'[^']+',?\s*\}/g,
    ),
  ].map((match) => match[0]);

  return objectSources.map((objectSource) => ({
    id: extractField(objectSource, 'id'),
    displayName: extractField(objectSource, 'displayName'),
    category: extractField(objectSource, 'category'),
    filePath: extractField(objectSource, 'filePath'),
    preferredFormat: extractField(objectSource, 'preferredFormat'),
    required: extractField(objectSource, 'required') === true,
    episode1Minimum: extractField(objectSource, 'episode1Minimum') === true,
    fallbackComponent: extractField(objectSource, 'fallbackComponent'),
    source: objectSource,
  }));
};

export const readAvailability = () => {
  if (!existsSync(availabilityPath)) {
    return {};
  }

  const source = readText(availabilityPath);
  const match = source.match(
    /export const c4sightAssetAvailability = (\{[\s\S]*?\}) as const;/,
  );

  if (!match) {
    return {};
  }

  return JSON.parse(match[1]);
};

export const assetFilePathToDiskPath = (filePath) =>
  join(repoRoot, 'public', filePath.replace(/^\//, ''));

export const assetExists = (asset) => existsSync(assetFilePathToDiskPath(asset.filePath));

export const countBy = (items, getKey) =>
  items.reduce((counts, item) => {
    const key = getKey(item);
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});

export const summarizeAssets = (assets, availability = undefined) => {
  const isReady = (asset) =>
    availability && Object.hasOwn(availability, asset.filePath)
      ? availability[asset.filePath] === true
      : assetExists(asset);

  const required = assets.filter((asset) => asset.required);
  const optional = assets.filter((asset) => !asset.required);
  const episode1Minimum = assets.filter((asset) => asset.episode1Minimum);
  const ready = assets.filter(isReady);
  const missing = assets.filter((asset) => !isReady(asset));
  const requiredReady = required.filter(isReady);
  const requiredMissing = required.filter((asset) => !isReady(asset));
  const episode1Ready = episode1Minimum.filter(isReady);
  const episode1Missing = episode1Minimum.filter((asset) => !isReady(asset));

  return {
    total: assets.length,
    ready: ready.length,
    missing: missing.length,
    required: required.length,
    requiredReady: requiredReady.length,
    requiredMissing: requiredMissing.length,
    optional: optional.length,
    episode1Minimum: episode1Minimum.length,
    episode1Ready: episode1Ready.length,
    episode1Missing: episode1Missing.length,
    byCategory: Object.fromEntries(
      Object.entries(countBy(assets, (asset) => asset.category)).sort(),
    ),
    missingByCategory: Object.fromEntries(
      Object.entries(countBy(missing, (asset) => asset.category)).sort(),
    ),
  };
};

export const findDuplicateValues = (items, getValue) => {
  const grouped = new Map();

  for (const item of items) {
    const value = getValue(item);

    if (!grouped.has(value)) {
      grouped.set(value, []);
    }

    grouped.get(value).push(item);
  }

  return [...grouped.entries()]
    .filter(([, group]) => group.length > 1)
    .map(([value, group]) => ({value, items: group}));
};

const isDirectoryEmpty = (path) => {
  const entries = readdirSync(path);

  if (entries.length === 0) {
    return true;
  }

  return entries.every((entry) => {
    const childPath = join(path, entry);
    const stats = statSync(childPath);
    return stats.isDirectory() && isDirectoryEmpty(childPath);
  });
};

export const findEmptyAssetFolders = () => {
  const assetRoot = join(repoRoot, 'public/c4sight/assets');

  if (!existsSync(assetRoot)) {
    return [];
  }

  const emptyFolders = [];

  const walk = (currentPath) => {
    const entries = readdirSync(currentPath);

    if (entries.length === 0 || isDirectoryEmpty(currentPath)) {
      emptyFolders.push(relative(assetRoot, currentPath) || '.');
      return;
    }

    for (const entry of entries) {
      const childPath = join(currentPath, entry);

      if (statSync(childPath).isDirectory()) {
        walk(childPath);
      }
    }
  };

  walk(assetRoot);

  return [...new Set(emptyFolders)].sort();
};

export const ensureDirectory = (path) => {
  mkdirSync(path, {recursive: true});
};

export const formatList = (items, limit = 12) => {
  if (items.length === 0) {
    return 'None';
  }

  const visible = items.slice(0, limit);
  const suffix =
    items.length > limit ? `\n- ...and ${items.length - limit} more` : '';
  return `- ${visible.join('\n- ')}${suffix}`;
};

export const markdownTable = (headers, rows) => {
  const divider = headers.map(() => '---');
  const allRows = [headers, divider, ...rows];
  return allRows.map((row) => `| ${row.join(' | ')} |`).join('\n');
};

export const preferredExtensionFor = (asset) => `.${asset.preferredFormat}`;

export const actualExtensionFor = (asset) =>
  extname(asset.filePath).toLowerCase();
