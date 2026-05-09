# Quick Installation Guide

## Step 1: Build the Package

```bash
cd c4sight-assets
npm install
npm run build
```

This creates the `dist/` folder with compiled JavaScript and TypeScript definitions.

## Step 2: Link Locally (for development)

```bash
# In c4sight-assets directory
npm link

# In your Codex/Remotion project
npm link @c4sight/design-system
```

## Step 3: Use in Your Project

```tsx
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';

function MyScene() {
  return (
    <div style={{ background: C4SIGHT_PALETTE.PAPER }}>
      <Wizard view="front" expression="smug" size={300} />
      <Host view="blackboard" pose="two-tap-ready" glasses={true} />
    </div>
  );
}
```

## Alternative: Direct Import (without npm link)

If you prefer to skip the npm link step, you can import directly from source:

```tsx
// Point to the source files
import { Wizard } from './c4sight-assets/src/characters/Wizard';
import { Host } from './c4sight-assets/src/characters/Host';
import { C4SIGHT_PALETTE } from './c4sight-assets/src/palette';
```

## Verify Installation

```bash
# Check TypeScript compilation
npm run typecheck

# Build and watch for changes
npm run dev
```

## Next Steps

- Read [README.md](./README.md) for full component documentation
- Check [CODEX_INTEGRATION.md](./CODEX_INTEGRATION.md) for Codex-specific workflows
- Explore [examples/](./examples/) for Remotion composition examples
- Review [EXPORT_MANIFEST.md](./EXPORT_MANIFEST.md) for the complete asset list
