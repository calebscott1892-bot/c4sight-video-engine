# CLAUDE.md — C4Sight Video Engine

This file is your complete briefing. Read it fully before touching any code.

---

## What This Project Is

C4Sight is an animated educational YouTube series explaining AI clearly, practically, and without hype. It is produced by C4 Studios (Perth, WA). The production pipeline uses **Remotion** (React-based programmatic video). This repo is the video engine that renders the episodes.

**The show's editorial POV:** AI is more useful than the doomers say, less magical than the hypers say, and almost everyone outside the industry is getting both wrong.

**Episode 1 title:** "Is AI Actually Magic?"
**Central question:** Is AI actually magic, or are we just bad at understanding it?

---

## Your Role

You are the primary engineering agent for this repo. You operate with full creative and technical authority within the constraints of this file.

**Before writing any code in a session:**
1. Run `find . -type f \( -name "*.tsx" -o -name "*.ts" \) | grep -v node_modules | grep -v .next | sort` to see the current file tree.
2. Read all files in `src/design-system/`, `src/layout/`, `src/data/`, and `src/video/`.
3. Read `src/Root.tsx` to see what compositions are registered.
4. Check `reference/` for Figma Make source assets and character code.
5. Report the current state before making changes.

**Operating mode:** Audit → plan → confirm with user → execute. Never make sweeping changes without a plan review.

---

## The Creative Source of Truth (Show Bible v1.0)

### Palette — Six Colours. Locked. No Others.

| Token | Hex | Use |
|---|---|---|
| `slate` | `#1A1F1C` | Blackboard backgrounds, dark mode |
| `chalk` | `#F4EDE0` | Chalk text, primary type on dark |
| `paper` | `#EFE7D6` | Main world backgrounds |
| `verifyRed` | `#D7382C` | Verify stamp, warnings, emphasis |
| `wizardLavender` | `#B9A8C7` | Wizard mascot body |
| `ink` | `#221F1F` | Line art, type on light backgrounds |

**Hard rule:** If a colour outside these six exists in any component, flag it and remove it. Known violations to fix: `#E8C66B` (yellow/amber) and `#A5B89A` (green) appear in some Figma Make styleframe files — remove them. Yellow accent underlines on the blackboard become `chalk` at 65% opacity. Traffic light dots in UI mode: red stays `verifyRed`, yellow becomes `chalk`, green becomes `ink` at 35% opacity.

### Typography

```ts
titleFamily:     '"Fraunces", "Playfair Display", Georgia, serif'
bodyFamily:      '"DM Sans", "Plus Jakarta Sans", Inter, system-ui, sans-serif'
captionFamily:   '"DM Sans", Inter, system-ui, sans-serif'
chalkHandFamily: '"Caveat", "Patrick Hand", cursive'
```

**Critical:** All text rendered ON a blackboard uses `chalkHandFamily` (Caveat/Patrick Hand). Recoleta/Tiempos are show typography, not chalk typography. Any blackboard label in serif display font is wrong.

Install `@remotion/google-fonts` if not present. Load Fraunces, DM Sans, and Caveat in `src/Root.tsx`.

### The Four Visual Modes

Every scene in every episode belongs to exactly one mode. Modes are defined in `src/layout/c4sightSceneGrammar.ts`.

| Mode | Background | Used For |
|---|---|---|
| `mainWorld` | paper (#EFE7D6), warm | Hooks, humour, story, host home base |
| `blackboard` | slate (#1A1F1C) | Teaching, definitions, diagrams |
| `interfaceTool` | dark (#252B27) | AI tools, agents, prompts, workflows |
| `humanJudgement` | paper, more saturated | Ethics, jobs, real-world stakes |

Mode cuts between scenes are **hard cuts**. The eraser wipe transition is reserved exclusively for exiting the blackboard. Do not dilute it.

### The Mascot — Tiny Alien Wizard

He represents magical thinking about AI. Lovable, slightly desperate, always wrong.

- Body: wizard lavender (#B9A8C7), slightly translucent
- Hat: slate, three almost-right stars (triangle, wonky pentagon, uneven 5-point)
- Robe: too long, drags, worn cuffs
- Eyes: large and tired. Big pupils, small irises.
- Wand: chalk wand stolen from the host's blackboard
- **He never speaks.** No speech bubbles. No text attributed to him. Gesture and expression only.

The wizard SVG component lives in `reference/c4sight_figma_make_source_pack/src/app/components/Wizard.tsx`. It is production-ready pure SVG React. If not already ported to `src/design-system/characters/WizardSVG.tsx`, do this before building any composition.

### The Host

Adult, late 20s–mid 30s. Henley or rolled-sleeve button-down, work trousers. Wire-frame glasses optional. Default expression: dry and unimpressed. Always has chalk or a notebook.

**Expressions:** dry (default), raised-brow, smile (genuine), exasperated, curious.
**Key poses:** gesture, two-tap-ready (chalk raised before the board taps), brushing-dust (exit ritual).

Two variants: A (dark hair, oatmeal henley) and B (auburn, slate-blue button-down). The host SVG lives in `reference/c4sight_figma_make_source_pack/src/app/components/Host.tsx`.

### The Blackboard Ritual

This is the show's signature device. It must be built with the correct beat structure:

1. Host says: *"Let's take it to the blackboard."*
2. Host walks toward board, rolls sleeves.
3. Host picks up chalk. **Two taps against the board.** This is the audio fingerprint — non-negotiable.
4. Teaching segment proceeds.
5. Exit: host puts chalk down, brushes dust off hands, eraser wipe back to main world.

The two-tap moment uses `timing.ritual` (60 frames) from the token system. Build a `BlackboardRitual` sequence component that handles this beat cleanly and can be reused across episodes.

### Recurring Devices

- **Verify Stamp** — red rubber stamp, chunky mechanical thunk. Slams down on confident AI answers. Build as a reusable `VerifyStamp` component.
- **Wizard walk-off** — wizard from behind, robe dragging, dust puffs. The `WizardFromBehind` SVG exists in the Figma Make source. Port it.
- **Chalk cards** — small slate boxes with chalk text, slightly askew. Used for "wizard takes credit" floating claims.

---

## Current Build Priorities

Execute in this order. Do not skip ahead.

### Priority 1 — Design system alignment
- Ensure `src/design-system/c4sightTokens.ts` has the correct six-colour palette and correct typography (see above).
- Port `Wizard.tsx` from `reference/` to `src/design-system/characters/WizardSVG.tsx` if not done.
- Port `Host.tsx` from `reference/` to `src/design-system/characters/HostSVG.tsx` if not done.
- Update `src/design-system/characters/Mascot.tsx` to use `WizardSVG` by default.
- Remove all palette violations from any existing files.

### Priority 2 — Channel Manifesto (60 seconds)
File: `src/video/C4SightChannelManifesto.tsx`
Registered in Root.tsx as `'ChannelManifesto'`, 1920×1080, 30fps, 1800 frames.

Five beats:
1. Title (0–300f): "C4Sight" wordmark on paper. Wizard peeks in at 6s.
2. Host intro (300–750f): host + the show's POV in display text.
3. Wizard debunk (750–1050f): wizard takes credit → "NO." → wizard walks off → "Well… sort of."
4. Four modes preview (1050–1500f): 3–4 second cut to each mode.
5. Close (1500–1800f): "AI made clear." with wizard sitting on the wordmark.

This ships before Episode 1. It proves the pipeline.

### Priority 3 — Episode 1 Full Composition
File: `src/video/C4SightEpisode01.tsx`
Registered as `'Episode01'`, 1920×1080, 30fps, 13500 frames (7.5 min).

Ten main sequences (from styleframes in `reference/` or repo):
1. "Is AI magic?" — paper bg, display text, wizard peeks
2. Wizard takes credit — chalk cards orbiting wizard
3. "NO." — type-driven, red period, wizard hat drops
4. Wizard walk-off — behind view, dust, host watches
5. "Well… sort of." — host thoughtful, wizard peeks back
6. Blackboard ritual — host walks to board, two taps
7. Input → Model → Output — blackboard diagram builds progressively
8. Useful and wrong — interface mode, Verify Red highlight
9. Verify Stamp — stamp coming down on confident AI answer
10. "AI made clear." — close, wizard on wordmark

Build sequences 1–5 first. Render. Then 6–10.

### Priority 4 — Reusable component library
After the above work, extract recurring elements into reusable components:
- `VerifyStamp.tsx` — animated stamp, configurable text
- `ChalkCard.tsx` — slate box, chalk text, slight rotation prop
- `BlackboardRitual.tsx` — the full two-tap sequence as a Sequence component
- `ChalkDiagram.tsx` — arrow-connected box diagram (Input→Model→Output pattern)

---

## Build Commands

```bash
npm run dev              # Remotion preview (hot reload)
npx remotion preview     # Alternative preview
npx remotion render ChannelManifesto --output out/manifesto.mp4
npx remotion render Episode01 --output out/episode01.mp4
npm run build            # TypeScript check
```

Always run `npm run build` before declaring a task complete. No TypeScript errors.

---

## Hard Rules

1. **Palette is law.** Six colours. No others. Audit with: `grep -r "#" src/ | grep -v "node_modules" | grep -v ".git"` and check for any hex not in the six.
2. **No new npm dependencies** without asking first. Remotion + React + TypeScript is the stack.
3. **Read before writing.** Always audit the existing file before editing it.
4. **No hardcoded colours in components.** All colours from `c4sightTokens.colors`.
5. **No hardcoded frame counts in components.** All timing from `c4sightTokens.timing`.
6. **The blackboard two-tap ritual is non-negotiable.** Every blackboard entry must include it.
7. **The wizard never speaks.** No text attributed to him anywhere.
8. **Chalk text on blackboards uses Caveat.** Never Recoleta or any serif on slate backgrounds.
9. **The eraser wipe is reserved for exiting the blackboard.** Not used for any other transition.
10. **Preview renders before marking tasks done.** `npx remotion preview` must open cleanly.

---

## Key File Locations

```
src/design-system/c4sightTokens.ts        # Design tokens (palette, type, timing, layout)
src/design-system/characters/Mascot.tsx   # Wizard component (update to use WizardSVG)
src/layout/c4sightSceneGrammar.ts         # Scene zones, archetypes, visual mode types
src/data/brand.ts                         # Show name, tagline, meta
src/Root.tsx                              # Remotion composition registry

reference/c4sight_figma_make_source_pack/ # Figma Make outputs
  src/app/components/Wizard.tsx           # ← port this to WizardSVG.tsx
  src/app/components/Host.tsx             # ← port this to HostSVG.tsx
  src/app/components/CharacterSheet.tsx   # Reference only
  src/app/components/HostSheet.tsx        # Reference only
```

---

## What Not to Touch Without Asking

- `reference/` — read-only source material, do not modify
- Any existing video file that is rendering correctly — don't refactor working code
- `remotion.config.ts` — don't modify without a clear reason

---

## Session Start Checklist

Every Claude Code session begins with:

- [ ] Read this file fully
- [ ] Run the find command to see current file tree
- [ ] Read all files in `src/design-system/`
- [ ] Read `src/Root.tsx`
- [ ] Report what's complete, what's broken, what's missing
- [ ] Propose a plan for this session
- [ ] Wait for confirmation before executing

---

*Show Bible v1.0 · C4 Studios · Perth, WA*
*This file is maintained by the creative director. Changes to creative direction come through here, not through code comments.*
