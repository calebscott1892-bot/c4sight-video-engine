# C4Sight Design System — Complete Package

## What's Included

This export package contains everything needed to integrate C4Sight assets into **Codex** or **Remotion** for video production.

### 📦 Package Structure

```
@c4sight/design-system/
├── src/
│   ├── characters/
│   │   ├── Wizard.tsx          # Tiny alien wizard component
│   │   └── Host.tsx            # Professional host component
│   ├── types/
│   │   └── manifest.ts         # Asset manifest definitions
│   ├── palette.ts              # Locked six-colour palette
│   └── index.ts                # Main exports
├── examples/
│   └── remotion-composition.tsx # Remotion integration examples
├── README.md                    # Usage documentation
├── INSTALLATION.md              # Quick start guide
├── CODEX_INTEGRATION.md         # Codex export workflow
├── EXPORT_MANIFEST.md           # Complete asset catalog (36 assets)
├── package.json                 # NPM package config
├── tsconfig.json                # TypeScript config
└── remotion.config.ts           # Remotion settings
```

## Quick Links

| Document | Purpose |
|----------|---------|
| **[INSTALLATION.md](./INSTALLATION.md)** | Get started: build, link, and import the package |
| **[README.md](./README.md)** | Component API reference and usage examples |
| **[CODEX_INTEGRATION.md](./CODEX_INTEGRATION.md)** | Step-by-step Codex export workflow |
| **[EXPORT_MANIFEST.md](./EXPORT_MANIFEST.md)** | Complete list of 36 production assets |
| **[examples/remotion-composition.tsx](./examples/remotion-composition.tsx)** | Working Remotion examples |

## Key Features

✅ **React/SVG Components**
- Wizard character (6 expressions, 4 views, 3 poses)
- Host character (5 expressions, 3 views, 4 poses, 2 variants)
- Fully typed with TypeScript
- Resolution-independent SVG rendering

✅ **Locked Palette**
- Six mandatory colours: PAPER, CHALK, SLATE, INK, LAVENDER, RED
- Exported as `C4SIGHT_PALETTE` constant

✅ **Production Ready**
- 36 catalogued assets across 7 categories
- Naming convention: `c4s-ep01-[category]-[id].[ext]`
- Layer structure documented for rigging
- Remotion integration examples

✅ **Codex Export**
- SVG for vector assets
- PNG for painterly/layered assets
- Lottie/PNG-seq for complex animation
- Paper grain overlay included

## Character Components

### Wizard
```tsx
<Wizard
  view="front"              // front | three-quarter-left | three-quarter-right | side
  expression="smug"         // neutral | sulking | panicked | smug | disappointed | shrug
  pose="credit"             // credit | debunked | stealing | null
  size={280}                // pixels
  hatTilt={-5}              // degrees (for animation)
  hatDrop={0}               // pixels (for animation)
  showWand={true}
/>
```

### Host
```tsx
<Host
  view="blackboard"         // front | blackboard | desk
  expression="raised-brow"  // dry | raised-brow | smile | exasperated | curious
  pose="two-tap-ready"      // gesture | two-tap-ready | brushing-dust | arms-crossed | null
  variant="a"               // a (warm skin) | b (cool skin)
  size={320}
  glasses={true}
  showChalk={true}
  showNotebook={false}
/>
```

## Installation

```bash
# 1. Build the package
cd c4sight-assets
npm install
npm run build

# 2. Link locally
npm link

# 3. Use in your project
cd /path/to/your/project
npm link @c4sight/design-system
```

## Usage

```tsx
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';

function MyScene() {
  return (
    <div style={{ background: C4SIGHT_PALETTE.PAPER }}>
      <Wizard view="front" expression="neutral" size={300} />
      <Host view="blackboard" pose="two-tap-ready" glasses={true} size={340} />
    </div>
  );
}
```

## Asset Categories

The package includes references to 36 production assets:

1. **Characters** (6) — Rigged bodies, pose sets, expression sheets
2. **Props** (6) — Wand, notebook, coffee cup, stamp, eraser, books
3. **Backgrounds** (5) — Workspace, blackboard, cafe, paper flat
4. **UI** (6) — Chat windows, prompts, cursors, highlights
5. **Type** (6) — Titles, wordmarks, chalk labels, claim cards
6. **Transitions** (3) — Eraser wipe, page turn, hard cuts
7. **Particles** (4) — Chalk dust, bursts, paper grain, fabric texture

See **[EXPORT_MANIFEST.md](./EXPORT_MANIFEST.md)** for the complete catalog.

## Remotion Integration

```tsx
import { Composition, useCurrentFrame, interpolate } from 'remotion';
import { Wizard, C4SIGHT_PALETTE } from '@c4sight/design-system';

const WizardScene = () => {
  const frame = useCurrentFrame();
  const hatTilt = interpolate(frame, [0, 30], [0, -10]);

  return (
    <div style={{ background: C4SIGHT_PALETTE.PAPER }}>
      <Wizard expression="smug" hatTilt={hatTilt} size={400} />
    </div>
  );
};

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

## Next Steps

1. ✅ Read **[INSTALLATION.md](./INSTALLATION.md)** to get started
2. ✅ Review **[README.md](./README.md)** for component APIs
3. ✅ Check **[examples/](./examples/)** for working code
4. ✅ Follow **[CODEX_INTEGRATION.md](./CODEX_INTEGRATION.md)** for export workflow
5. ✅ Import into Codex and start building Episode 1!

---

**C4Sight Design System v1.0.0**  
Ready for Codex/Remotion production • Episode 1 complete
