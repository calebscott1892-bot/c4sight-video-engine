# C4Sight Asset QA Checklist

Use this checklist before marking any imported C4Sight asset as production-ready.

The authority for this checklist is `docs/C4Sight-Show-Bible.md`.

## Source And Mode Fit

Every asset must declare its visual mode:

- Main Animated World
- Blackboard Teaching Mode
- Interface / Tool Mode
- Human Judgement / Real-World Mode
- Recurring Device
- Transition
- Audio Identity

Blackboard/chalk style is not the whole show. Do not force every asset into chalkboard language.

## Technical Export

- Asset has a transparent background unless it is a full-frame texture, styleframe, background, or scene keyframe.
- Preferred export is SVG for characters, props, recurring devices, cards, icons, interface components, and transition layers.
- Preferred export is PNG for textures, styleframes, real-world backgrounds, and full-frame scene keyframes.
- Audio identity files use clean WAV exports unless the manifest says otherwise.
- SVGs have clean groups/layers with useful names.
- SVGs avoid unnecessary hidden layers, masks, clipping paths, and embedded raster junk.
- PNGs are exported at adequate resolution for 1920x1080 delivery.
- File names match the manifest exactly.
- Files are placed under `/public/c4sight/assets/` in the correct folder.

## Cross-Mode Consistency

- The four modes feel like one C4Sight universe, not four unrelated asset packs.
- Host and recurring character proportions stay consistent across modes.
- Icons retain recognisable silhouettes across modes.
- Colour, shape, and texture changes are intentional by mode.
- Transitions explain why the visual language changes.
- No asset introduces a random style mismatch.

## Mode-Specific QA

Main Animated World:

- Clear focal hierarchy.
- Enough production richness to carry non-board narration.
- Playful but not childish.
- Original C4Sight look, not generic AI explainer visuals.

Blackboard Teaching Mode:

- Used only when an idea needs deeper explanation.
- Entered through “Let’s take it to the blackboard.”
- Board elements remain readable at 1080p and on mobile.
- Chalk/marker texture is controlled, not messy.
- Safe margins leave room for captions and presenter/host action.

Interface / Tool Mode:

- UI is readable without tiny text.
- Tool windows, prompts, selections, outputs, and workflow nodes feel practical.
- Interface elements are stylised for C4Sight, not copied from generic SaaS templates.
- Demonstrations clarify workflows instead of decorating them.

Human Judgement / Real-World Mode:

- Human stakes are clear and grounded.
- Scenes avoid fear-mongering or fake profundity.
- Real-world examples feel practical for everyday people and businesses.
- Risk and trust visuals remain calm and balanced.

Recurring Devices:

- Tiny Alien Wizard is expressive, contained, and not childish.
- Verify Stamp reads instantly and feels decisive.
- Cabinet of Caveats is organised, not visually cluttered.
- Confidently Wrong Office Worker is funny without mocking the audience.
- Toolbox communicates practical usefulness.
- Scam Guru communicates hype without becoming too broad.

Transitions:

- Transition assets clearly bridge one mode to another.
- The viewer understands why Blackboard Teaching Mode appears.
- Required board transitions do not feel like random wipes.
- Transition assets survive simple transforms, masks, and timing changes.

## General Visual Quality

- Readable at 1920x1080.
- Readable when viewed on a mobile screen.
- Stroke weight, edge treatment, and detail level are consistent within each mode.
- Character expressions read clearly without text labels.
- Props and cards share one coherent mode-specific style.
- Icons are simple enough to read quickly.
- Scene keyframes have clear focal hierarchy.
- Cards and text do not rely on tiny detail.
- Assets do not require zooming in to understand their purpose.

## Forbidden Zones

C4Sight assets must avoid:

- neon
- blue-purple gradients
- glowing neural networks
- generic AI blobs
- corporate SaaS look
- childish classroom clipart
- stock-video explainer style
- cyberpunk visual language
- glossy fake product UI
- fake-profound episode endings
- random placeholder art treated as production art

## Animation Readiness

- Characters are exported in pose variants that can be swapped cleanly.
- Props are separate assets, not baked into character drawings unless specifically intended.
- Effects can be layered over scenes without visible background boxes.
- Scene keyframes leave room for captions and safe margins.
- Important silhouettes remain clear after scaling and movement.
- Assets can survive simple transforms: scale, rotate, translate, opacity.
- No asset depends on awkward partial text reveal to read correctly.

## Production Gate

If an asset looks acceptable only when viewed large in the design tool, it is not ready. It must read clearly in the Remotion readiness preview and contact sheet.

If required assets or styleframes are missing, Codex must not proceed to animation.
