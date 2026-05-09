# C4Sight Design System

Character design system and styleframe collection for **C4Sight**, an AI education show. Built for integration with **Codex** and **Remotion**.

## Overview

This package contains production-ready React/SVG components following the C4Sight show bible specifications:

- ✅ **Locked six-colour palette** (paper, chalk, slate, ink, lavender, red)
- ✅ **Two main characters**: Tiny alien wizard + professional host
- ✅ **Paper-grain aesthetic** throughout
- ✅ **Orthographic views** and expression studies
- ✅ **36 catalogued assets** across 7 categories

## Installation

```bash
npm install @c4sight/design-system
# or
pnpm add @c4sight/design-system
# or
yarn add @c4sight/design-system
```

## Quick Start

```tsx
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';

// Render the wizard
function Scene() {
  return (
    <div style={{ background: C4SIGHT_PALETTE.PAPER }}>
      <Wizard
        view="front"
        expression="neutral"
        pose={null}
        size={240}
      />
    </div>
  );
}
```

## Characters

### Wizard

The tiny alien wizard with lavender body, slate hat with three wonky stars, and stolen chalk wand.

**Props:**
- `view`: `"front"` | `"three-quarter-left"` | `"three-quarter-right"` | `"side"`
- `expression`: `"neutral"` | `"sulking"` | `"panicked"` | `"smug"` | `"disappointed"` | `"shrug"`
- `pose`: `"credit"` | `"debunked"` | `"stealing"` | `null`
- `size`: number (default: 180)
- `showWand`: boolean (default: true)
- `hatTilt`: number (degrees, for animation)
- `hatDrop`: number (pixels, for hat-fallen-forward effect)

**Example:**
```tsx
<Wizard
  view="three-quarter-left"
  expression="smug"
  pose="credit"
  size={200}
  hatTilt={-5}
/>
```

### Host

The professional host character with glasses, blazer, dry expressions. Late 20s–mid 30s read.

**Props:**
- `view`: `"front"` | `"blackboard"` | `"desk"`
- `expression`: `"dry"` | `"raised-brow"` | `"smile"` | `"exasperated"` | `"curious"`
- `pose`: `"gesture"` | `"two-tap-ready"` | `"brushing-dust"` | `"arms-crossed"` | `null`
- `variant`: `"a"` | `"b"` (skin/hair variant)
- `size`: number (default: 240)
- `glasses`: boolean (default: false)
- `showChalk`: boolean
- `showNotebook`: boolean

**Example:**
```tsx
<Host
  view="blackboard"
  expression="raised-brow"
  pose="two-tap-ready"
  variant="a"
  glasses={true}
  showChalk={true}
  size={280}
/>
```

## Palette

The locked six-colour palette:

```tsx
import { C4SIGHT_PALETTE } from '@c4sight/design-system';

const { PAPER, CHALK, SLATE, INK, LAVENDER, LAVENDER_SHADOW, RED } = C4SIGHT_PALETTE;
```

| Color | Hex | Usage |
|-------|-----|-------|
| `PAPER` | `#EFE7D6` | Warm paper background with grain |
| `CHALK` | `#F4EDE0` | Text, highlights, wand tip |
| `SLATE` | `#1A1F1C` | Blackboards, hat, dark surfaces |
| `INK` | `#221F1F` | Linework, type, outlines |
| `LAVENDER` | `#B9A8C7` | Wizard body, accent |
| `LAVENDER_SHADOW` | `#9D8AAE` | Depth, shadows |
| `RED` | `#D7382C` | Verify emphasis, warnings |

## Remotion Integration

### Basic Composition

```tsx
import { Composition } from 'remotion';
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';

export const RemotionRoot = () => {
  return (
    <Composition
      id="WizardIntro"
      component={WizardScene}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        wizardExpression: "neutral" as const,
      }}
    />
  );
};

const WizardScene = ({ wizardExpression }) => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: C4SIGHT_PALETTE.PAPER,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Wizard expression={wizardExpression} size={300} />
    </div>
  );
};
```

### Animated Expression Changes

```tsx
import { useCurrentFrame, interpolate } from 'remotion';
import { Wizard } from '@c4sight/design-system';

const AnimatedWizard = () => {
  const frame = useCurrentFrame();
  
  // Interpolate hat tilt over time
  const hatTilt = interpolate(
    frame,
    [0, 30, 60],
    [0, -8, 0],
    { extrapolateRight: 'clamp' }
  );

  return <Wizard hatTilt={hatTilt} expression="smug" />;
};
```

## Production Asset Manifest

The full manifest catalogues 36 assets across 7 categories:
- Characters (6 assets)
- Props (6 assets)
- Backgrounds (5 assets)
- UI (6 assets)
- Type (6 assets)
- Transitions (3 assets)
- Particles (4 assets)

See the [full manifest](./src/types/manifest.ts) for detailed specifications.

## Design Principles

From the C4Sight Show Bible:

1. **Structural decisions over surface texture** — linework refined in post-production
2. **Paper-grain aesthetic** — subtle texture overlay on all frames
3. **Locked palette** — no colour deviations
4. **Orthographic clarity** — clean front/side/three-quarter views
5. **Expression-driven storytelling** — character expressions carry narrative beats

## TypeScript Support

Full TypeScript definitions included:

```tsx
import type {
  WizardProps,
  WizardView,
  WizardExpression,
  WizardPose,
  HostProps,
  HostView,
  HostExpression,
  HostPose,
  HostVariant,
  PaletteColor,
  SkinVariant,
  AssetManifest,
  ProductionAsset,
} from '@c4sight/design-system';
```

## File Structure

```
c4sight-assets/
├── src/
│   ├── characters/
│   │   ├── Wizard.tsx      # Tiny alien wizard component
│   │   └── Host.tsx        # Professional host component
│   ├── types/
│   │   └── manifest.ts     # Asset manifest types
│   ├── palette.ts          # Locked six-colour palette
│   └── index.ts            # Main export
├── package.json
└── README.md
```

## License

MIT

## Credits

Built for **C4Sight** — AI made clear.

Character design and show bible specifications © 2026
