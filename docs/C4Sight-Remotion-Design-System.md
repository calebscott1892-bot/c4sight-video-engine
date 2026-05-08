# C4Sight Remotion Design System

This document defines how the Figma Make production board maps into the Remotion implementation.

Figma Make source:
https://www.figma.com/make/dkTT6PWK7M5s2GvUF9GZcs/C4Sight-Animated-Explainer-Board?t=0cRPeIg5uW01zKTo-1

The Remotion design system is not a replacement for the Figma board. It is the code implementation layer for it.

## Board To Code Map

| Figma Board Section | Remotion Location | Purpose |
| --- | --- | --- |
| `BrandBoard` | `src/design-system/c4sightTokens.ts` | Board colours, chalk accents, typography scale, safe margins, timing constants. |
| `CharacterBible` | `src/design-system/characters/` | Mascot component and approved pose names. |
| `PropLibrary` | `src/design-system/props/` | Wand, saucepan, bucket, laptop, cards, eraser, poofs, sparks, and utility icons. |
| `IconSystem` | `src/design-system/props/` | Magnifying glass, warning, checklist, and utility symbols. |
| `SceneSystem` | `src/design-system/scenes/` | Approved scene archetype components. |
| `AnimationGrammar` | `src/design-system/animation/` | Timing helpers for write-on, draw-on, freezes, reactions, erasing, holds, and chaos-to-calm resets. |
| `EpisodeStoryboard` | Episode files under `src/video/` | Episodes assemble scenes; they should not create new visual language. |
| `SeriesRoadmap` | Docs and episode data | Defines future episode structure before animation work begins. |
| `ExportSpec` | Remotion compositions and render scripts | 1920x1080, 30fps, H.264 MP4 outputs plus QA contact sheets. |

## Approved Import Surface

Future episode code should prefer these imports:

```ts
import {c4sightTokens} from '../design-system/c4sightTokens';
import {C4SightMascot} from '../design-system/characters';
import {C4SightProp, C4SightCardProp} from '../design-system/props';
import {
  HookQuestionScene,
  ControlledChaosScene,
  CorrectionScene,
  OverwhelmScene,
  SlowDownResetScene,
  TeachingDiagramScene,
  RoadmapScene,
} from '../design-system/scenes';
import {writeOnText, drawOnStroke, holdFrame} from '../design-system/animation';
```

Older files in `src/components/` are now implementation primitives. New episode scenes should not reach into them unless extending the design system itself.

## Mascot Poses

Approved poses:

- `neutral`
- `confident`
- `confused`
- `sad`
- `overwhelmed`
- `excited`
- `walkingAway`
- `runningBack`
- `presenting`
- `pointing`
- `holdingProp`

Character acting should be readable at contact-sheet size. Use the mascot as punctuation, not decoration.

## Props And Icons

Approved prop kinds:

- `wand`
- `saucepan`
- `bucket`
- `laptop`
- `emailCard`
- `websiteCard`
- `assignmentCard`
- `codeCard`
- `imageCard`
- `summaryCard`
- `businessIdeaCard`
- `magnifyingGlass`
- `warningIcon`
- `checklist`
- `eraser`
- `poof`
- `spark`
- `burst`

Do not add one-off chalk props inside episode files. Add them to `src/design-system/props/` only after they exist in the Figma board or are explicitly approved.

## Scene Archetypes

Approved scene components:

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

Episodes should be assembled from these archetypes first. If a storyboard seems to need a new scene type, add it to the Figma board before implementing it in Remotion.

## Naming Conventions

- Design-system exports use `C4Sight...` for reusable objects and exact archetype names for scenes.
- Props use `kind` names that match the Figma production board language.
- Episode-only timing may live in an episode file, but reusable timing behaviour belongs in `src/design-system/animation/`.
- Scene components should accept `startFrame` and `endFrame`.
- All timing should be in frames at the composition boundary.

## What Codex Is No Longer Allowed To Invent

Codex should not invent:

- Random chalk/SVG assets inside episode files.
- New mascot expressions or poses outside `CharacterBible`.
- New prop types outside `PropLibrary`.
- New icons outside `IconSystem`.
- New scene patterns outside `SceneSystem`.
- New motion grammar outside `AnimationGrammar`.
- Generic AI visuals, blobs, neon, gradients, SaaS cards, or stock explainer motion.

Codex may create code adapters, wrappers, and timing utilities that implement the Figma board in Remotion.

## Episode Assembly Workflow

1. Start from the Figma storyboard and animation grammar.
2. Choose approved scene archetypes.
3. Use `c4sightTokens` for spacing, colour, type size, and timing.
4. Use approved mascot poses and props.
5. Build an animatic before final polish.
6. Render QA stills and a contact sheet.
7. Review pacing, readability, and clutter before adding detail.

The production rule is simple: Figma defines the language; Remotion performs it.

## Current Integration Note

The local Figma Make source pack in `reference/c4sight_figma_make_source_pack/` is now the active source reference. The V2 Remotion components derive mascot proportions, prop/icon SVG paths, palette, scene zones, timing grammar, and export rules from that pack rather than the earlier placeholder SVG system.

If the live Figma board changes, update the source pack first, then sync those changes into `src/design-system/` before touching episode files.
