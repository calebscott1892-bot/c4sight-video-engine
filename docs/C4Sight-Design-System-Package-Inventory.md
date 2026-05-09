# C4Sight Design-System Package Inventory

Package found at:

`figma/Prioritize Character Design Rules(1)/c4sight-assets/`

Copied into the Remotion project as:

`packages/c4sight-design-system/`

The package name is `@c4sight/design-system`.

## Package Structure

Important files:

- `package.json` — local package config for `@c4sight/design-system`.
- `INDEX.md` — package overview and quick links.
- `README.md` — component API reference and usage examples.
- `CODEX_INTEGRATION.md` — Codex/Remotion handoff workflow.
- `EXPORT_MANIFEST.md` — 36-asset Episode 1 export catalog.
- `INSTALLATION.md` — package build/link instructions.
- `remotion.config.ts` — package-level Remotion settings.
- `examples/remotion-composition.tsx` — example Remotion scenes.
- `src/index.ts` — main exports.
- `src/palette.ts` — locked C4Sight palette.
- `src/characters/Wizard.tsx` — Tiny Alien Wizard component.
- `src/characters/Host.tsx` — Host component.
- `src/characters/index.ts` — local barrel export added for subpath exports.
- `src/types/manifest.ts` — production manifest types.
- `dist/` — generated build output from `npm --prefix packages/c4sight-design-system run build`.

## Available Components

### `Wizard`

Source:

`packages/c4sight-design-system/src/characters/Wizard.tsx`

Props:

- `view`: `front`, `three-quarter-left`, `three-quarter-right`, `side`
- `expression`: `neutral`, `sulking`, `panicked`, `smug`, `disappointed`, `shrug`
- `pose`: `credit`, `debunked`, `stealing`, `null`
- `size`: number
- `showWand`: boolean
- `hatTilt`: number
- `hatDrop`: number

Useful for:

- Tiny Alien Wizard expression grids
- magic misunderstanding beats
- debunked/sulking beats
- hat tilt/drop timing tests

### `Host`

Source:

`packages/c4sight-design-system/src/characters/Host.tsx`

Props:

- `view`: `front`, `blackboard`, `desk`
- `expression`: `dry`, `raised-brow`, `smile`, `exasperated`, `curious`
- `pose`: `gesture`, `two-tap-ready`, `brushing-dust`, `arms-crossed`, `null`
- `variant`: `a`, `b`
- `size`: number
- `glasses`: boolean
- `showChalk`: boolean
- `showNotebook`: boolean

Useful for:

- host expression studies
- blackboard ritual/two-tap tests
- desk/thinking beats
- dry reaction poses

## Palette Exports

Export:

`C4SIGHT_PALETTE`

Tokens:

- `PAPER`: `#EFE7D6`
- `CHALK`: `#F4EDE0`
- `SLATE`: `#1A1F1C`
- `INK`: `#221F1F`
- `LAVENDER`: `#B9A8C7`
- `LAVENDER_SHADOW`: `#9D8AAE`
- `RED`: `#D7382C`

The package also exports `SKIN_VARIANTS` for the two Host variants.

## Remotion Examples

Example file:

`packages/c4sight-design-system/examples/remotion-composition.tsx`

Included examples:

- `WizardIntroComposition` — Wizard movement, expression change, hat tilt, Host entrance, and `NO.` punch.
- `BlackboardScene` — Host blackboard pose and two chalk tap marks.
- `WizardExpressionStudy` — six Wizard expressions in a grid.

These are examples only. They are not Episode 1 production scenes.

## Build Scripts

Package scripts:

- `npm --prefix packages/c4sight-design-system run build`
- `npm --prefix packages/c4sight-design-system run typecheck`
- `npm --prefix packages/c4sight-design-system run clean`
- `npm --prefix packages/c4sight-design-system run dev`

Build result:

- Initial build failed because the generated package used the classic JSX transform and package exports referenced files TypeScript did not emit.
- Local package config was adjusted to use `jsx: react-jsx`, package `type: module`, and emitted `dist/index.js`.
- Build now passes.

## Integration Method

Chosen method:

Local file dependency.

Root project dependency:

```json
"@c4sight/design-system": "file:packages/c4sight-design-system"
```

Reason:

- Less fragile than a TypeScript-only path alias.
- Keeps normal package resolution for Remotion and TypeScript.
- Does not require publishing to npm.
- Keeps the package isolated from the existing asset manifest/readiness system.

Import target:

```ts
import {Wizard, Host, C4SIGHT_PALETTE} from '@c4sight/design-system';
```

## Internal Adapters

Added stable Remotion-facing adapters:

- `src/design-system/external/C4SightWizard.tsx`
- `src/design-system/external/C4SightHost.tsx`
- `src/design-system/external/index.ts`

The adapters:

- import the external Wizard, Host, and palette
- normalize supported prop values
- expose stable internal prop names
- provide labelled fallback placeholders if an external component export is unavailable
- avoid recreating Wizard/Host art manually

## Missing Or Unclear Files

- No standalone exported PNG/SVG/Lottie/audio assets are included in the package.
- `src/types/manifest.ts` defines manifest types but its `EPISODE_1_MANIFEST.assets` array is empty; the full 36-asset catalog exists in `EXPORT_MANIFEST.md`.
- Recurring devices beyond Wizard/Host are not implemented as React components.
- No audio identity assets are present.
- No Cabinet of Caveats, Confidently Wrong Office Worker, Toolbox, or Scam Guru artwork is present.
- The package examples are useful but should not be treated as final Episode 1 animation.

## Recommended Integration Method Going Forward

Use `@c4sight/design-system` as the preferred source for:

- Wizard art
- Host art
- the C4Sight palette
- simple character timing previews

Keep using the existing Remotion asset manifest/readiness system for:

- exported production media files
- Episode 1 required asset readiness
- mode styleframes
- recurring device assets
- transition assets
- audio identity

Future updates should replace the package contents under `packages/c4sight-design-system/`, run the package build, then run root `npm install` if package metadata changed.
