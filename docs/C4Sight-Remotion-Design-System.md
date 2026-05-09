# C4Sight Remotion Design System

This document explains how the C4Sight Show Bible maps into the Remotion implementation.

Creative source of truth:

`docs/C4Sight-Show-Bible.md`

The Remotion design system is an implementation layer. It should never invent the creative direction.

## Production Principle

C4Sight is a multi-mode animated educational show, not a chalkboard-only template.

Approved visual modes:

- Main Animated World
- Blackboard Teaching Mode
- Interface / Tool Mode
- Human Judgement / Real-World Mode

Blackboard Teaching Mode appears only when the presenter needs to explain something more deeply and should be entered through the ritual:

> “Let’s take it to the blackboard.”

## External Character Package

The Figma-generated package is now integrated locally as:

`packages/c4sight-design-system/`

Import name:

`@c4sight/design-system`

This package is the preferred source for:

- Tiny Alien Wizard artwork
- Host artwork
- C4Sight palette exports
- basic character timing previews

Internal adapter layer:

- `src/design-system/external/C4SightWizard.tsx`
- `src/design-system/external/C4SightHost.tsx`
- `src/design-system/external/index.ts`

Codex must not invent new Wizard or Host art in episode code. If the external package is unavailable or a prop is unsupported, the adapters should show labelled placeholders or normalize props rather than drawing replacement character art.

## Show Bible To Code Map

| Show Bible Area | Remotion Location | Purpose |
| --- | --- | --- |
| Palette and mode tokens | `src/design-system/c4sightTokens.ts` | Locked colours, mode tokens, type scale, spacing, and timing constants. |
| Figma character package | `packages/c4sight-design-system/` | Preferred Wizard, Host, and palette source. |
| External adapters | `src/design-system/external/` | Remotion-friendly wrappers around the Figma-generated package. |
| Asset requirements | `src/design-system/c4sightAssetManifest.ts` | Required production files and missing-asset reporting. |
| Character and recurring devices | `src/design-system/characters/`, `src/design-system/props/` | Render approved host, Tiny Alien Wizard, props, and recurring devices from manifest assets. |
| Scene grammar | `src/design-system/scenes/` | Approved scene archetypes and mode-aware layout wrappers. |
| Animation grammar | `src/design-system/animation/` | Timing helpers for holds, reactions, transitions, resets, and write/draw-on behaviour. |
| Production gates | `docs/C4Sight-Production-Gates.md` | Rules that block animation when styleframes or assets are missing. |
| Asset QA | `docs/C4Sight-Asset-QA-Checklist.md` | Review rules for imported files before they are considered production-ready. |

## Asset Manifest Categories

The manifest uses the Show Bible categories:

- `main_world`
- `blackboard_mode`
- `interface_mode`
- `human_judgement_mode`
- `recurring_devices`
- `mascot_wizard`
- `host`
- `transitions`
- `audio_identity`

These categories are production gates, not just folders.

## Required Recurring Devices

The Show Bible recurring devices are:

- Tiny Alien Wizard
- Verify Stamp
- Cabinet of Caveats
- Confidently Wrong Office Worker
- Toolbox
- Scam Guru

They should be imported as real designed assets through the manifest. Codex should not redraw them in episode files.

## Transition System

Required transition assets:

- `transition.blackboard_ritual_transition`
- `transition.take_to_blackboard_transition`
- `transition.board_roll_in`
- `transition.chalk_dust_wipe`
- `transition.mascot_points_to_board`
- `transition.world_to_board_zoom`
- `transition.eraser_wipe`
- `audio.two_chalk_taps`

These assets support motivated mode changes. Blackboard mode should not appear as a random cut.

## Token System

The locked Show Bible palette:

- Slate: `#1A1F1C`
- Chalk: `#F4EDE0`
- Paper: `#EFE7D6`
- Verify Red: `#D7382C`
- Wizard Lavender: `#B9A8C7`
- Ink: `#221F1F`

Named mode tokens in `c4sightTokens.ts`:

- `mainWorld`
- `blackboardMode`
- `interfaceMode`
- `humanJudgementMode`
- `verifyStamp`
- `wizard`

Use these tokens before adding new colours or spacing values.

## Approved Scene Archetypes

Current reusable scene archetypes:

- `HookQuestionScene`
- `ControlledChaosScene`
- `CorrectionScene`
- `WalkOffGagScene`
- `ReturnRevealScene`
- `OverwhelmScene`
- `SlowDownResetScene`
- `TeachingDiagramScene`
- `MythRealityScene`
- `WarningScene`
- `RoadmapScene`
- `OutroScene`

Each scene should declare or imply its visual mode. If a storyboard needs a new scene archetype, add the rule to the Show Bible/design docs before implementing it.

## What Codex Is No Longer Allowed To Invent

Codex must not invent:

- creative direction outside the Show Bible
- new Wizard or Host artwork outside `@c4sight/design-system`
- random characters, props, or recurring devices
- placeholder art treated as production art
- chalkboard-only episode language
- blackboard transitions that skip the ritual
- generic AI blobs
- glowing neural networks
- neon
- blue-purple gradients
- corporate SaaS visuals
- childish classroom clipart
- fake-profound endings

Codex may create:

- manifest entries
- type-safe wrappers
- readiness previews
- layout helpers
- timing helpers
- production documentation
- labelled placeholders for missing assets

## Episode Assembly Workflow

Future episode work must follow this order:

1. Confirm the Show Bible and production gates.
2. Lock the episode question.
3. Lock the script.
4. Approve styleframes for required visual modes.
5. Import required assets and update the manifest.
6. Run `npm run assets:scan`.
7. Build a voice-led animatic.
8. Approve the animatic.
9. Build final animation.
10. Render QA stills, contact sheets, and final exports.

## Episode 1 Direction

Episode 1 is centred around:

`Is AI actually magic, or are we just bad at understanding it?`

Target length: 6-8 minutes.

It should not become a 10-minute encyclopedia. The episode should establish the C4Sight point of view, explain why AI can feel magical, clarify what AI is not, and teach viewers how to start thinking clearly about it.

## Current Status

Animation is blocked until required assets and styleframes exist. `C4SightAssetReadinessPreview` should be used to check production readiness by mode and by Episode 1 minimum required assets.

Use `C4SightExternalDesignSystemPreview` to verify that the local Figma-generated character package is importable and rendering before using it in animatics.

## Production QA Harness

Before any animation work resumes, run:

```bash
npm run c4sight:qa
```

This generates:

`docs/generated/C4Sight-Production-QA-Report.md`

The harness checks:

- asset scan freshness
- manifest asset readiness
- missing required and Episode 1 minimum assets
- duplicate asset IDs and file paths
- empty asset folders and folder structure
- external `@c4sight/design-system` build/import health
- Wizard, Host, and palette exports
- TypeScript health
- Gate 1-8 production status

Focused commands:

- `npm run c4sight:qa:assets` - manifest and file-system asset validation
- `npm run c4sight:qa:design-system` - external package build/import validation
- `npm run c4sight:qa:gates` - production gate status

Passing TypeScript does not mean production is unblocked. Codex must not proceed to animation while the QA report says Gate 4 or Gate 5 is blocked.
