# C4Sight Video Engine

Reusable Remotion production system for C4Sight, a multi-mode animated AI education show from C4 Studios.

C4Sight is no longer a chalkboard-only animation project. Blackboard Teaching Mode is one recurring device inside a broader show language.

## Source Of Truth

The creative source of truth is:

`docs/C4Sight-Show-Bible.md`

Codex should not invent creative direction, characters, props, visual modes, or episode structure outside the Show Bible and approved production assets. If any older doc or prototype conflicts with the Show Bible, the Show Bible wins.

## Visual Modes

C4Sight uses four production modes:

- Main Animated World: default world for hooks, metaphors, humour, and connective narration.
- Blackboard Teaching Mode: deeper explanation mode entered through the ritual “Let’s take it to the blackboard.”
- Interface / Tool Mode: prompts, AI outputs, workflows, documents, tools, and practical demonstrations.
- Human Judgement / Real-World Mode: grounded scenes about trust, consequences, decisions, and responsible use.

## Production Flow

The C4Sight pipeline is:

1. Show Bible
2. Script
3. Styleframes/assets
4. Manifest
5. Animatic
6. Final animation
7. QA/export

Animation should not resume until required styleframes and assets are present and the production gates are satisfied.

See:

- `docs/C4Sight-Production-Gates.md`
- `docs/C4Sight-Required-Asset-Checklist.md`
- `docs/C4Sight-Asset-QA-Checklist.md`
- `docs/C4Sight-Remotion-Design-System.md`

## Current Status

Animation production is paused. The Remotion design system now reads from an asset manifest and reports missing production assets clearly instead of treating coded placeholder art as final.

The Figma-generated character package is now available locally as `@c4sight/design-system` from `packages/c4sight-design-system/`. It is the preferred source for Wizard, Host, and palette assets. Older coded placeholder art remains fallback only.

Current Episode 1 direction:

`Is AI actually magic, or are we just bad at understanding it?`

Target length: 6-8 minutes.

## Commands

```bash
npm install
npm run start
npm run c4sight:qa
npm run assets:scan
npm run c4sight:qa:assets
npm run c4sight:qa:design-system
npm run c4sight:qa:gates
npm run typecheck
npm run render:external-design-system-preview
npm run render:asset-readiness-preview
```

`npm run start` opens Remotion Studio.

`npm run c4sight:qa` is the master production guard. It runs the asset scan, external design-system package check, TypeScript check, asset validation, and production gate check, then writes:

`docs/generated/C4Sight-Production-QA-Report.md`

This command may exit non-zero while the project is intentionally blocked. That is expected when Gate 4 styleframes or Gate 5 required assets are missing. A blocked QA result means Codex must not continue into production animation.

Run `npm run assets:scan` after adding or removing files in `public/c4sight/assets/`. The scan updates Remotion's generated readiness map.

`npm run c4sight:qa:assets` checks manifest paths, required/optional asset readiness, duplicate IDs, duplicate file paths, empty folders, extension mismatches, and folder structure.

`npm run c4sight:qa:design-system` checks the local `@c4sight/design-system` package, runs its build script if present, and verifies the Wizard, Host, and `C4SIGHT_PALETTE` exports.

`npm run c4sight:qa:gates` reads the production gates, manifest, and generated asset availability map. It reports the current Gate 1-8 status and blocks animation until Gate 4 and Gate 5 pass.

## Main Compositions

- `C4SightAssetReadinessPreview`
- `C4SightEpisode01-Animatic`
- `C4SightDesignSystemPreview`
- `C4SightDesignSystemPreviewV2`

Older prototype compositions remain in the repo as historical tests, not locked production language.

## Asset Intake

Asset root:

```text
public/c4sight/assets/
  main-world/
  blackboard-mode/
  interface-mode/
  human-judgement-mode/
  recurring-devices/
  host/
  transitions/
  audio-identity/
  characters/
  props/
  icons/
  cards/
  effects/
  scene-keyframes/
  textures/
```

Manifest:

`src/design-system/c4sightAssetManifest.ts`

Workflow:

1. Export approved assets from Figma, Canva, or another design tool.
2. Place each file at the exact path listed in the manifest.
3. Run `npm run assets:scan`.
4. Render or inspect `C4SightAssetReadinessPreview`.
5. Do not proceed to episode animation while required assets are missing.

## Design System

Core files:

```text
packages/c4sight-design-system/
src/design-system/c4sightTokens.ts
src/design-system/c4sightAssetManifest.ts
src/design-system/external/
src/design-system/characters/
src/design-system/props/
src/design-system/scenes/
src/design-system/animation/
```

The design system is an implementation layer. It does not define the creative direction. It maps the Show Bible and approved assets into Remotion.

Preview the imported Figma-generated package with:

```bash
npm run render:external-design-system-preview
```

To update the package in future, replace `packages/c4sight-design-system/`, run `npm --prefix packages/c4sight-design-system run build`, then run the root `npm run typecheck`.

## Historical Prototypes

The repo still contains earlier blackboard/chalk prototype components and videos. They are useful technical references for Remotion timing, contact sheets, and QA, but they are not the current C4Sight show direction.
