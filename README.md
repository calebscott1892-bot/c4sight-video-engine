# C4Sight Video Engine

Reusable Remotion prototype for C4Sight blackboard-style educational videos.

This first pass is a 15-20 second motion test, not a finished YouTube episode. It establishes a code-based system for future faceless AI explainer videos.

## Prototype

Composition: `C4SightMotionTest`

Style lab composition: `C4SightStyleLab`

Teaching beat test composition: `C4SightTeachingBeatTest`

Teaching beat V2 composition: `C4SightTeachingBeatTestV2`

Creative hook burst composition: `C4SightMagicHookBurst`

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
```

`npm run start` opens Remotion Studio.

`npm run render` exports:

```text
out/c4sight-motion-test.mp4
```

## Project Structure

```text
public/brand/
  c4sight-placeholder.svg     Placeholder logo asset

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
  Caption.tsx                 Bottom subtitle/caption treatment
  ChalkFilters.tsx            Shared chalk roughness filter

src/layout/
  blackboardLayout.ts         Safe margins and named board zones

src/scenes/
  LogoIntroScene.tsx          Placeholder intro scene
  ChalkDiagramScene.tsx       Title plus diagram scene

src/video/
  C4SightVideo.tsx            Video renderer that maps data to scenes
```

## Creating Future Videos

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
