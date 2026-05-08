# C4Sight Asset QA Checklist

Use this checklist before marking any imported C4Sight asset as production-ready.

## Technical Export

- Asset has a transparent background unless it is a full-frame texture or scene keyframe.
- Preferred export is SVG for characters, props, cards, icons, and effects.
- Preferred export is PNG for textures and full-frame scene keyframes.
- SVGs have clean groups/layers with useful names.
- SVGs avoid unnecessary hidden layers, masks, clipping paths, and embedded raster junk.
- PNGs are exported at adequate resolution for 1920x1080 delivery.
- File names match the manifest exactly.
- Files are placed under `/public/c4sight/assets/` in the correct category folder.

## Visual Quality

- Readable at 1920x1080.
- Readable when viewed on a mobile screen.
- Stroke weight is consistent across the asset set.
- Character proportions match the character bible.
- Character expressions read clearly without needing text labels.
- Props and cards share one coherent chalk style.
- Icons are simple enough to read quickly.
- Scene keyframes have clear focal hierarchy.
- Cards and text do not rely on tiny detail.

## Style Rules

- Blackboard/chalk world only.
- No gradients.
- No neon or cyberpunk glow.
- No glossy SaaS visuals.
- No generic AI blobs.
- No stock-video or template-explainer style.
- No random style mismatch between mascot, props, icons, and cards.
- Humour should feel clever and restrained, not childish.

## Animation Readiness

- Characters are exported in pose variants that can be swapped cleanly.
- Props are separate assets, not baked into character drawings unless specifically intended.
- Effects can be layered over scenes without visible background boxes.
- Scene keyframes leave room for captions and safe margins.
- Important silhouettes remain clear after scaling and movement.
- Assets can survive simple transforms: scale, rotate, translate, opacity.

## Review Rule

If an asset looks acceptable only when viewed large in the design tool, it is not ready. It must read clearly in the Remotion readiness preview and contact sheet.
