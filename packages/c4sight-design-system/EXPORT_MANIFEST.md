# C4Sight Export Manifest

Complete export package for Codex/Remotion integration.

## Package Contents

### React Components (SVG)

#### Characters
- **Wizard** (`src/characters/Wizard.tsx`)
  - Views: front, three-quarter-left, three-quarter-right, side
  - Expressions: neutral, sulking, panicked, smug, disappointed, shrug
  - Poses: credit, debunked, stealing, null
  - Props: hatTilt, hatDrop, showWand, size

- **Host** (`src/characters/Host.tsx`)
  - Views: front, blackboard, desk
  - Expressions: dry, raised-brow, smile, exasperated, curious
  - Poses: gesture, two-tap-ready, brushing-dust, arms-crossed, null
  - Variants: a (warm skin), b (cool skin)
  - Props: glasses, showChalk, showNotebook, size

### Design Tokens
- **Palette** (`src/palette.ts`)
  - 6 locked colours: PAPER, CHALK, SLATE, INK, LAVENDER, LAVENDER_SHADOW, RED
  - Skin variants for Host character (warm/cool)

### Type Definitions
- **Manifest Types** (`src/types/manifest.ts`)
  - AssetFormat, AssetCategory, ProductionAsset, AssetManifest
  - Full Episode 1 asset catalog (36 assets)

### Examples
- **Remotion Compositions** (`examples/remotion-composition.tsx`)
  - WizardIntroComposition — full intro sequence
  - BlackboardScene — chalk tapping animation
  - WizardExpressionStudy — all 6 expressions

### Documentation
- **README.md** — Installation and usage guide
- **CODEX_INTEGRATION.md** — Codex-specific export workflow
- **EXPORT_MANIFEST.md** — This file

## Asset Categories (36 total)

### Characters (6 assets)
1. `char-host-body` — Host rigged (PNG, 1080×1920, 8 layers)
2. `char-host-poses` — Pose set (PNG, static keyframes)
3. `char-host-mouths` — Lip-sync shapes (SVG, 6 shapes)
4. `char-wizard-body` — Wizard rigged (PNG, 540×720, 6 layers)
5. `char-wizard-back` — Rear view for walk-off (PNG, animates)
6. `char-wizard-expressions` — Expression sheet (PNG, 6 faces)

### Props (6 assets)
7. `prop-chalk-wand` — Stolen wand (SVG, 2 states)
8. `prop-notebook` — Host notebook (SVG, 4 layers, page-flip)
9. `prop-coffee-cup` — Cup with steam (PNG, 4 layers, loops)
10. `prop-verify-stamp` — Stamp sequence (PNG-seq, 12 frames)
11. `prop-eraser` — Blackboard eraser (SVG, wipe transition)
12. `prop-books-stack` — Stack of books (SVG, static)

### Backgrounds (5 assets)
13. `bg-workspace` — Mode 1 home base (PNG, 1920×1080, 5 layers)
14. `bg-blackboard-clean` — Clean slate (PNG, 2 layers)
15. `bg-blackboard-diagram` — Input/Model/Output (Lottie, 9 layers)
16. `bg-cafe-office` — Mode 4 setting (PNG, 4 layers)
17. `bg-paper-flat` — Type-driven frames (PNG, grain texture)

### UI (6 assets)
18. `ui-chat-window` — AI chat (SVG, 5 layers)
19. `ui-prompt-bubble` — User prompt (SVG, type-on)
20. `ui-reply-stream` — Streaming reply (Lottie, word-by-word)
21. `ui-cursor` — Blinking cursor (SVG, 1s loop)
22. `ui-verify-highlight` — Red sentence highlight (SVG, fade-in)
23. `ui-laptop-screen` — Email draft (PNG, static)

### Type (6 assets)
24. `type-is-ai-magic` — Title (SVG, Recoleta 220pt)
25. `type-no` — Punch (SVG, Recoleta 520pt, slam-in)
26. `type-well-sort-of` — Follow-up (SVG, Recoleta italic 180pt)
27. `type-ai-made-clear` — Wordmark (SVG, lock-up final)
28. `type-chalk-labels` — Input/Model/Output (SVG, cursive, drawn-on)
29. `type-claim-cards` — Slate cards (SVG, 6 cards, jitter)

### Transitions (3 assets)
30. `trans-eraser-wipe` — Blackboard exit (PNG-seq, 18 frames)
31. `trans-page-turn` — Notebook beat (PNG-seq, 8 frames)
32. `trans-hard-cut-marker` — No asset (reminder: use hard cuts)

### Particles (4 assets)
33. `part-chalk-dust` — Loop dust (PNG-seq, 12 frames)
34. `part-chalk-burst` — One-shot burst (PNG-seq, 14 frames)
35. `part-paper-grain` — Overlay tile (PNG, 1920×1080, multiply 6%)
36. `part-fabric-grain` — Blackboard weave (PNG, 1920×1080)

## Export Workflow

### 1. Install Package
```bash
npm install @c4sight/design-system
```

### 2. Import Components
```tsx
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';
```

### 3. Use in Remotion
```tsx
import { Composition } from 'remotion';
import { Wizard } from '@c4sight/design-system';

export const RemotionRoot = () => (
  <Composition
    id="Scene"
    component={() => <Wizard size={400} expression="smug" />}
    durationInFrames={90}
    fps={30}
    width={1920}
    height={1080}
  />
);
```

### 4. Render Video
```bash
npx remotion render Scene output.mp4
```

## File Naming Convention

All exported assets follow this pattern:
```
c4s-ep01-[category]-[id].[ext]
```

Examples:
- `c4s-ep01-char-wizard-body.svg`
- `c4s-ep01-prop-chalk-wand.svg`
- `c4s-ep01-bg-workspace.png`
- `c4s-ep01-type-no-punch.svg`

## Layer Structure

### Wizard (rigged)
- `robe` — main body
- `left-arm`, `right-arm` — IK bones
- `head` — rotation point
- `hat` — tilt/drop params
- `wand` — held prop

### Host (rigged)
- `torso` — shirt/trousers
- `left-arm`, `right-arm` — IK bones
- `left-leg`, `right-leg` — walk cycles
- `head` — tilt
- `hair` — separate layer
- `glasses` — toggle visibility

## Colour Palette (locked)

| Swatch | Name | Hex | Usage |
|--------|------|-----|-------|
| ![#EFE7D6](https://via.placeholder.com/15/EFE7D6/000000?text=+) | PAPER | `#EFE7D6` | Background, warm base |
| ![#F4EDE0](https://via.placeholder.com/15/F4EDE0/000000?text=+) | CHALK | `#F4EDE0` | Text, highlights, wand |
| ![#1A1F1C](https://via.placeholder.com/15/1A1F1C/000000?text=+) | SLATE | `#1A1F1C` | Blackboard, hat |
| ![#221F1F](https://via.placeholder.com/15/221F1F/000000?text=+) | INK | `#221F1F` | Linework, outlines |
| ![#B9A8C7](https://via.placeholder.com/15/B9A8C7/000000?text=+) | LAVENDER | `#B9A8C7` | Wizard body |
| ![#9D8AAE](https://via.placeholder.com/15/9D8AAE/000000?text=+) | LAVENDER_SHADOW | `#9D8AAE` | Wizard depth |
| ![#D7382C](https://via.placeholder.com/15/D7382C/000000?text=+) | RED | `#D7382C` | Verify emphasis |

## Production Requirements

- ✅ All PNGs with transparency
- ✅ Rigged characters: layers named, anchors marked
- ✅ Lottie includes source AE composition
- ✅ Type set as outlines (not live text)
- ✅ Naming: `c4s-ep01-[category]-[id].[ext]`
- ✅ Palette locked to six colours
- ✅ Paper grain overlay (6% multiply) on all frames
- ✅ 1920×1080 @ 30fps target

## Package Structure

```
@c4sight/design-system/
├── dist/                    # Compiled output
│   ├── index.js
│   ├── index.mjs
│   ├── index.d.ts
│   ├── characters.js
│   ├── characters.d.ts
│   └── palette.js
├── src/                     # Source files
│   ├── characters/
│   │   ├── Wizard.tsx
│   │   └── Host.tsx
│   ├── types/
│   │   └── manifest.ts
│   ├── palette.ts
│   └── index.ts
├── examples/
│   └── remotion-composition.tsx
├── package.json
├── tsconfig.json
├── README.md
├── CODEX_INTEGRATION.md
└── EXPORT_MANIFEST.md (this file)
```

## Version History

- **v1.0.0** — Initial release
  - Wizard character (6 expressions, 4 views, 3 poses)
  - Host character (5 expressions, 3 views, 4 poses, 2 variants)
  - Locked six-colour palette
  - Full TypeScript definitions
  - Remotion examples
  - 36-asset manifest

## Next Steps

1. Install the package: `npm install @c4sight/design-system`
2. Review the [README](./README.md) for usage examples
3. Check [CODEX_INTEGRATION](./CODEX_INTEGRATION.md) for export workflow
4. Explore [examples](./examples/) for Remotion compositions
5. Import into your Codex project and start building!

---

**Ready for Codex/Remotion production. Episode 1 complete.**
