# Codex Integration Guide

This guide shows how to export C4Sight assets into **Anthropic Codex** for video production.

## Overview

The C4Sight design system provides:
- React/SVG character components (Wizard, Host)
- Locked six-colour palette
- TypeScript definitions
- Remotion-ready compositions

## Step 1: Export Package

Build the NPM package for use in Codex:

```bash
cd c4sight-assets
pnpm install
pnpm build  # or tsc if you have TypeScript configured
```

This creates a `dist/` directory with compiled JavaScript, type definitions, and source maps.

## Step 2: Link Locally (Development)

For local development with Codex:

```bash
# In c4sight-assets directory
pnpm link

# In your Codex project
pnpm link @c4sight/design-system
```

## Step 3: Import in Codex

```tsx
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';

// Use in your Codex compositions
const MyScene = () => {
  return (
    <div style={{ background: C4SIGHT_PALETTE.PAPER }}>
      <Wizard view="front" expression="smug" size={300} />
    </div>
  );
};
```

## Step 4: Asset Export Formats

Based on the production manifest, assets are delivered in these formats:

### SVG Assets
Vector components that scale/animate as one shape:
- Wizard character (rigged)
- Host character (rigged)
- Props (wand, notebook, eraser)
- UI elements (chat windows, prompts)
- Type assets (titles, labels)

**Usage in Codex:**
```tsx
import { Wizard } from '@c4sight/design-system';

// SVG renders at any resolution
<Wizard size={600} expression="panicked" />
```

### PNG Assets (when needed)
For painterly textures or multi-layer compositing:
- Export character poses as PNG sequences
- Background layers with grain texture
- Particle effects (chalk dust, paper grain overlays)

**Export from React component:**
```tsx
// Use Remotion or Puppeteer to render React → PNG
import { renderToStaticMarkup } from 'react-dom/server';
import { Wizard } from '@c4sight/design-system';

const svg = renderToStaticMarkup(<Wizard size={1080} />);
// Convert SVG to PNG using sharp, canvas, or similar
```

### Lottie/PNG-seq
For complex frame-by-frame animation:
- Blackboard diagram draw-on (chalk stroke animation)
- Stamp impact sequence
- Eraser wipe transition

**Export workflow:**
1. Create keyframes in React/Remotion
2. Export frame sequence as PNG
3. Compile to Lottie in After Effects (if needed)

## Step 5: Remotion Integration

The characters work seamlessly with Remotion:

```tsx
import { Composition, useCurrentFrame, interpolate } from 'remotion';
import { Wizard, C4SIGHT_PALETTE } from '@c4sight/design-system';

export const WizardScene = () => {
  const frame = useCurrentFrame();
  
  const hatTilt = interpolate(frame, [0, 30], [0, -10]);
  
  return (
    <div style={{ background: C4SIGHT_PALETTE.PAPER }}>
      <Wizard
        expression={frame > 60 ? 'disappointed' : 'smug'}
        hatTilt={hatTilt}
        size={400}
      />
    </div>
  );
};

// Register composition
export const RemotionRoot = () => (
  <Composition
    id="Wizard"
    component={WizardScene}
    durationInFrames={150}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

## Step 6: Codex Video Export

Once your Remotion compositions are ready:

```bash
# Render individual scenes
npx remotion render WizardScene output/wizard.mp4

# Render all compositions
npx remotion render --concurrency=2

# Export with specific codec
npx remotion render WizardScene out.mp4 --codec=h264 --crf=18
```

## Asset Naming Convention

Follow the manifest naming pattern for exported assets:

```
c4s-ep01-[category]-[id].[ext]

Examples:
- c4s-ep01-char-wizard-body.svg
- c4s-ep01-char-host-rigged.png
- c4s-ep01-prop-chalk-wand.svg
- c4s-ep01-bg-workspace.png
- c4s-ep01-type-no-punch.svg
```

## Rigged Character Export

Characters are delivered with separate layers for rigging in Codex:

**Wizard layers:**
- `robe` — body/sleeves
- `left-arm` — separate for IK
- `right-arm` — separate for IK
- `head` — independent rotation
- `hat` — tilt/drop animation
- `wand` — held prop

**Host layers:**
- `torso` — shirt/trousers
- `left-arm`, `right-arm` — IK rigging
- `left-leg`, `right-leg` — walk cycles
- `head` — head tilt
- `hair` — separate layer
- `glasses` — toggle on/off

**Export rigged layers:**
```tsx
// Render each layer separately for compositing
<Wizard view="front" />
// → Export: wizard-robe.png, wizard-head.png, wizard-hat.png, etc.
```

## Palette Lock

All assets MUST use the locked six-colour palette. Verify before export:

```tsx
import { C4SIGHT_PALETTE } from '@c4sight/design-system';

// Every color in every asset should map to one of these:
const ALLOWED = [
  C4SIGHT_PALETTE.PAPER,      // #EFE7D6
  C4SIGHT_PALETTE.CHALK,      // #F4EDE0
  C4SIGHT_PALETTE.SLATE,      // #1A1F1C
  C4SIGHT_PALETTE.INK,        // #221F1F
  C4SIGHT_PALETTE.LAVENDER,   // #B9A8C7
  C4SIGHT_PALETTE.LAVENDER_SHADOW, // #9D8AAE
  C4SIGHT_PALETTE.RED,        // #D7382C
];
```

## Production Checklist

- [ ] All characters render at 1080p+ resolution
- [ ] Palette locked to six colours
- [ ] Rigged layers exported with anchor points marked
- [ ] PNG assets delivered with transparency
- [ ] Lottie files include source AE composition (if applicable)
- [ ] Type set as outlines (not live text)
- [ ] Naming convention: `c4s-ep01-[category]-[id].[ext]`
- [ ] Paper grain overlay applied to all frames (6% multiply blend)
- [ ] Manifest updated with all used-in frame IDs

## Troubleshooting

### "Module not found: @c4sight/design-system"
Ensure you've linked or installed the package:
```bash
pnpm link @c4sight/design-system
```

### SVG not scaling correctly
SVG components use `viewBox` for resolution-independent rendering. Set `size` prop to control render dimensions.

### Colors look different in export
Verify color profile is sRGB and no color management is applied during render. Use exact hex values from `C4SIGHT_PALETTE`.

### Character layers not separating
Export each layer by rendering the component multiple times with visibility toggles. See rigged export examples above.

## Support

For questions or issues with Codex integration, refer to:
- [Full Asset Manifest](./src/types/manifest.ts)
- [Remotion Examples](./examples/remotion-composition.tsx)
- [Character Component Source](./src/characters/)

---

**Manifest is the contract for Codex build. Episode 1 ready for production.**
