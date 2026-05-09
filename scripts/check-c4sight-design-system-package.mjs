#!/usr/bin/env node

import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {repoRoot, showBiblePalette} from './c4sight-qa-utils.mjs';

const jsonMode = process.argv.includes('--json');

const packageDir = join(repoRoot, 'packages/c4sight-design-system');
const packageJsonPath = join(packageDir, 'package.json');
const rootPackageJsonPath = join(repoRoot, 'package.json');

const checks = [];

const addCheck = (name, pass, detail) => {
  checks.push({name, pass, detail});
};

const runBuild = (packageJson) => {
  if (!packageJson?.scripts?.build) {
    return {
      attempted: false,
      pass: true,
      stdout: '',
      stderr: '',
      detail: 'No build script is defined.',
    };
  }

  const result = spawnSync('npm', ['--prefix', packageDir, 'run', 'build'], {
    cwd: repoRoot,
    encoding: 'utf8',
  });

  return {
    attempted: true,
    pass: result.status === 0,
    stdout: result.stdout.trim(),
    stderr: result.stderr.trim(),
    detail:
      result.status === 0
        ? 'Package build script passed.'
        : `Package build script failed with exit code ${result.status}.`,
  };
};

let packageJson = null;
let rootPackageJson = null;
let buildResult = {
  attempted: false,
  pass: false,
  stdout: '',
  stderr: '',
  detail: 'Package build was not attempted.',
};
let importResult = {
  pass: false,
  detail: 'Import check was not attempted.',
  exports: {
    Wizard: false,
    Host: false,
    C4SIGHT_PALETTE: false,
  },
  paletteMatches: false,
  paletteMismatches: [],
};

addCheck(
  'Package directory exists',
  existsSync(packageDir),
  existsSync(packageDir)
    ? 'packages/c4sight-design-system exists.'
    : 'packages/c4sight-design-system is missing.',
);

addCheck(
  'Package package.json exists',
  existsSync(packageJsonPath),
  existsSync(packageJsonPath)
    ? 'Package package.json exists.'
    : 'Package package.json is missing.',
);

if (existsSync(packageJsonPath)) {
  packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
}

if (existsSync(rootPackageJsonPath)) {
  rootPackageJson = JSON.parse(readFileSync(rootPackageJsonPath, 'utf8'));
}

const configuredDependency =
  rootPackageJson?.dependencies?.['@c4sight/design-system'] ??
  rootPackageJson?.devDependencies?.['@c4sight/design-system'];

addCheck(
  'Root local package dependency configured',
  configuredDependency === 'file:packages/c4sight-design-system',
  configuredDependency
    ? `Root package uses @c4sight/design-system = ${configuredDependency}.`
    : 'Root package does not declare @c4sight/design-system.',
);

if (packageJson) {
  addCheck(
    'Package name is correct',
    packageJson.name === '@c4sight/design-system',
    `Package name is ${packageJson.name ?? 'missing'}.`,
  );

  buildResult = runBuild(packageJson);
  addCheck('Package build', buildResult.pass, buildResult.detail);
}

const distIndexPath = join(packageDir, 'dist/index.js');

addCheck(
  'Built package entry exists',
  existsSync(distIndexPath),
  existsSync(distIndexPath)
    ? 'dist/index.js exists.'
    : 'dist/index.js is missing after build.',
);

if (existsSync(distIndexPath)) {
  try {
    const packageExports = await import(`${pathToFileURL(distIndexPath).href}?t=${Date.now()}`);
    const palette = packageExports.C4SIGHT_PALETTE;
    const paletteMismatches = Object.entries(showBiblePalette)
      .filter(([key, value]) => palette?.[key] !== value)
      .map(([key, expected]) => ({
        key,
        expected,
        actual: palette?.[key],
      }));

    importResult = {
      pass:
        typeof packageExports.Wizard === 'function' &&
        typeof packageExports.Host === 'function' &&
        Boolean(palette) &&
        paletteMismatches.length === 0,
      detail: 'Imported package dist/index.js directly.',
      exports: {
        Wizard: typeof packageExports.Wizard === 'function',
        Host: typeof packageExports.Host === 'function',
        C4SIGHT_PALETTE: Boolean(palette),
      },
      paletteMatches: paletteMismatches.length === 0,
      paletteMismatches,
    };
  } catch (error) {
    importResult = {
      pass: false,
      detail: error instanceof Error ? error.message : String(error),
      exports: {
        Wizard: false,
        Host: false,
        C4SIGHT_PALETTE: false,
      },
      paletteMatches: false,
      paletteMismatches: [],
    };
  }
}

addCheck(
  'Wizard export available',
  importResult.exports.Wizard,
  importResult.exports.Wizard
    ? 'Wizard export is available.'
    : 'Wizard export is missing or not a component function.',
);
addCheck(
  'Host export available',
  importResult.exports.Host,
  importResult.exports.Host
    ? 'Host export is available.'
    : 'Host export is missing or not a component function.',
);
addCheck(
  'C4SIGHT_PALETTE export available',
  importResult.exports.C4SIGHT_PALETTE,
  importResult.exports.C4SIGHT_PALETTE
    ? 'C4SIGHT_PALETTE export is available.'
    : 'C4SIGHT_PALETTE export is missing.',
);
addCheck(
  'Palette matches Show Bible',
  importResult.paletteMatches,
  importResult.paletteMatches
    ? 'Package palette matches the Show Bible core colours.'
    : 'Package palette does not match the Show Bible core colours.',
);

const result = {
  ok: checks.every((check) => check.pass),
  packageDir,
  packageJsonPath,
  configuredDependency,
  checks,
  buildResult,
  importResult,
  blockers: checks
    .filter((check) => !check.pass)
    .map((check) => `${check.name}: ${check.detail}`),
};

if (jsonMode) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log('C4Sight Design-System Package Check');
  console.log('===================================');

  for (const check of checks) {
    console.log(`${check.pass ? 'PASS' : 'FAIL'} ${check.name}`);
    console.log(`  ${check.detail}`);
  }

  if (buildResult.attempted) {
    console.log('\nPackage build output:');
    console.log(buildResult.stdout || '(no stdout)');

    if (buildResult.stderr) {
      console.log('\nPackage build stderr:');
      console.log(buildResult.stderr);
    }
  }

  if (importResult.paletteMismatches.length > 0) {
    console.log('\nPalette mismatches:');
    for (const mismatch of importResult.paletteMismatches) {
      console.log(
        `- ${mismatch.key}: expected ${mismatch.expected}, got ${mismatch.actual}`,
      );
    }
  }
}

if (!jsonMode && !result.ok) {
  process.exitCode = 1;
}
