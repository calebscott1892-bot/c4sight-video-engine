# C4Sight Video Engine

Reusable Remotion prototype for C4Sight blackboard-style educational videos.

This first pass is a 15-20 second motion test, not a finished YouTube episode. It establishes a code-based system for future faceless AI explainer videos.

Current production direction: animation work is paused until real designed assets are imported. Remotion now reads from an asset manifest and shows labelled missing placeholders instead of treating coded placeholder art as final.

## Prototype

Composition: `C4SightMotionTest`

Style lab composition: `C4SightStyleLab`

Teaching beat test composition: `C4SightTeachingBeatTest`

Teaching beat V2 composition: `C4SightTeachingBeatTestV2`

Creative hook burst composition: `C4SightMagicHookBurst`

Episode 01 cold open composition: `C4SightEpisode01ColdOpen`

Episode 01 cold open V2 composition: `C4SightEpisode01ColdOpenV2`

Episode 01 foundation animatic component: `C4SightEpisode01_Animatic`

Episode 01 foundation animatic Remotion ID: `C4SightEpisode01-Animatic`

Asset readiness composition: `C4SightAssetReadinessPreview`

Animation bible: `docs/C4Sight-Animation-Bible.md`

Asset intake docs:

- `docs/C4Sight-Required-Asset-Checklist.md`
- `docs/C4Sight-Asset-QA-Checklist.md`

Title: `What AI Actually Is`

Resolution: `1920x1080`

Duration: `18s`

Scene flow:

1. Placeholder C4Sight logo intro
2. Chalk title write-on: `What is AI actually doing?`
3. Diagram reveal: `Input -> Pattern Matching -> Useful Output`
4. Bottom caption: `AI is not magic. It's software that predicts useful patterns from data.`

## Commands

```bash
npm install
npm run start
npm run render:preview
npm run render
npm run render:stylelab
npm run render:teaching-beat
npm run render:teaching-beat-v2
npm run render:magic-hook-burst
npm run render:episode01-cold-open
npm run render:episode01-cold-open-v2
npm run render:episode01-animatic
npm run assets:scan
npm run render:asset-readiness-preview
```

`npm run start` opens Remotion Studio.

Run `npm run assets:scan` after adding or removing files in `public/c4sight/assets/`. The scan updates Remotion's generated readiness map.

`npm run render` exports:

```text
out/c4sight-motion-test.mp4
```

## Project Structure

```text
public/brand/
  c4sight-placeholder.svg     Placeholder logo asset

public/c4sight/assets/
  characters/mascot/          Real mascot pose exports
  characters/alien-wizard/    Real alien wizard gag exports
  props/                      Designed prop SVGs
  icons/                      Reusable icon SVGs
  scene-keyframes/            Full-frame PNG keyframes
  textures/                   Blackboard and chalk textures
  cards/                      Task and capability card SVGs
  effects/                    Poofs, sparks, wipes, highlights

scripts/
  update-c4sight-asset-readiness.mjs

src/data/
  brand.ts                    C4Sight brand settings
  motionTest.ts               Scene data for this prototype

src/components/
  BlackboardBackground.tsx    Chalkboard texture and frame
  ChalkText.tsx               Reusable write-on chalk text
  ChalkDiagram.tsx            Reusable boxes and arrows diagram
  ChalkShapes.tsx             Controlled chalk line, box, arrow, circle
  ChalkAnnotations.tsx        Underlines, highlights, notes, formulas, checks
  ChalkTeachingIcons.tsx      Chalk metaphor icons and teaching cards
  ChalkCreativeBurst.tsx      Reusable metaphor burst gags and transitions
  ChalkColdOpenElements.tsx   Cold-open cards, notes, captions, and model visuals
  C4SightCharacterSystem.tsx  Reusable C4Sight character, prop, reaction, and icon wrappers
  C4SightSceneLayouts.tsx     Production scene archetype layout helpers
  Caption.tsx                 Bottom subtitle/caption treatment
  ChalkFilters.tsx            Shared chalk roughness filter

src/layout/
  blackboardLayout.ts         Safe margins and named board zones
  c4sightSceneGrammar.ts      C4Sight production-safe zones and scene grammar constants

src/scenes/
  LogoIntroScene.tsx          Placeholder intro scene
  ChalkDiagramScene.tsx       Title plus diagram scene

src/video/
  C4SightVideo.tsx            Video renderer that maps data to scenes
  C4SightAssetReadinessPreview.tsx

src/design-system/
  c4sightAssetManifest.ts     Source of truth for required production assets
  c4sightAssetAvailability.generated.ts
```

## Asset Intake Workflow

1. Export approved assets from Figma, Canva, or another design tool.
2. Place each file at the exact path listed in `src/design-system/c4sightAssetManifest.ts`.
3. Run `npm run assets:scan`.
4. Render `C4SightAssetReadinessPreview`.
5. Review `out/c4sight-asset-readiness-contact-sheet.png`.
6. Only resume Episode 1 animation once the required asset readiness score is production-ready.

The design-system components now prefer manifest assets. If an asset exists, Remotion renders it. If it is missing, Remotion renders a clearly labelled missing placeholder.

## Creating Future Videos

The production workflow is now foundation-first:

1. Write the voiceover and lesson promise.
2. Build a rough animatic using approved scene archetypes.
3. Review pacing with contact sheets and QA stills.
4. Lock shot order, holds, and humour beats.
5. Polish only after the animatic works.
6. Reuse C4Sight character poses, props, icons, and layout helpers before inventing new scene-specific motion.

Use `docs/C4Sight-Animation-Bible.md` as the source of truth for pacing, stillness, character acting, visual humour, and banned behaviours.

Start by copying `src/data/motionTest.ts` and changing the exported video definition:

- `id`: Remotion composition ID
- `title`: internal video title
- `durationSeconds`: total runtime
- `scenes`: scene timeline and content
- `captions`: subtitle/caption cue list

The current renderer expects scene objects with `start` and `duration` in seconds. Reusable components handle the animation timing inside each scene.

Example scene shape:

```ts
{
  id: 'ai-diagram',
  type: 'chalkDiagram',
  start: 3.25,
  duration: 14.75,
  title: 'What is AI actually doing?',
  titleWriteStart: 0.25,
  titleWriteDuration: 2.4,
  diagramStart: 4,
  diagram: {
    nodes: [
      {id: 'input', label: 'Input', x: 270, y: 560, width: 320, height: 120},
    ],
    arrows: [
      {id: 'input-to-output', from: 'input', to: 'output'},
    ],
  },
}
```

## Brand Assets

Final logo files should live in `public/brand`.

The prototype uses:

```ts
logoAsset: 'brand/c4sight-placeholder.svg'
```

When final C4/C4Sight logo artwork is available, replace that value in `src/data/brand.ts` or point individual intro scenes to a different file. The future `C4 -> Studios -> Sight` logo animation should be added as a new intro scene without changing the video data model.

## Design Direction

The visual system is intentionally restrained:

- dark chalkboard texture
- warm chalk text
- simple hand-drawn boxes and arrows
- readable, calm pacing
- no neon, cyberpunk, or glossy tech styling
