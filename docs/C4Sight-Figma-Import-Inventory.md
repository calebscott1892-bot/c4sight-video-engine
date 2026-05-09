# C4Sight Figma / Claude Design Import Inventory

Reference source:

`reference/figma-show-bible-v1/Prioritize Character Design Rules.zip`

Extracted to:

`reference/figma-show-bible-v1/extracted/`

This is an inventory-only intake pass. No production assets have been moved, mapped, or animated.

Update: a later Figma-generated package named `c4sight-assets` was copied into `packages/c4sight-design-system/` and integrated as the local `@c4sight/design-system` dependency. See `docs/C4Sight-Design-System-Package-Inventory.md` for the package-specific inventory.

## 1. File Tree Summary

Important root files:

- `README.md` — generated Figma Make project README with the original Figma design URL.
- `ATTRIBUTIONS.md` — notes shadcn/ui and Unsplash attribution.
- `package.json` — Vite/React project with many UI dependencies.
- `index.html`, `vite.config.ts`, `postcss.config.mjs`, `pnpm-workspace.yaml` — app scaffolding.
- `default_shadcn_theme.css` — generic shadcn theme.
- `guidelines/Guidelines.md` — default placeholder guidelines, not C4Sight-specific.

Important source files:

- `src/app/App.tsx` — navigation wrapper with five sheets: wizard, host, modes, Episode 1, manifest.
- `src/app/components/CharacterSheet.tsx` — Tiny Alien Wizard sheet and scale references.
- `src/app/components/Wizard.tsx` — reusable inline SVG Tiny Alien Wizard component.
- `src/app/components/HostSheet.tsx` — host views, expressions, poses, variants, and design rules.
- `src/app/components/Host.tsx` — reusable inline SVG host component.
- `src/app/components/Styleframes.tsx` — four visual mode styleframes as inline SVG scenes.
- `src/app/components/Episode1.tsx` — ten Episode 1 styleframes as inline SVG scenes.
- `src/app/components/Manifest.tsx` — production asset manifest table for Episode 1.
- `src/app/components/ui/` — generic shadcn/Radix support components.
- `src/app/components/figma/ImageWithFallback.tsx` — generic image fallback component.
- `src/imports/c4sight-show-bible-v1.md` — full C4Sight Show Bible v1.0 text.
- `src/imports/c4sight-figma-make-master-prompt.md` — Figma Make prompt used to generate the design board.
- `src/styles/theme.css` — generic shadcn CSS variables.
- `src/styles/index.css`, `tailwind.css` — minimal app CSS imports.
- `src/styles/fonts.css`, `globals.css` — empty.

React components identified:

- Bespoke C4Sight components: `App`, `CharacterSheet`, `Wizard`, `HostSheet`, `Host`, `Styleframes`, `Episode1`, `Manifest`.
- Generic UI components: accordion, dialog, button, card, tabs, tooltip, sidebar, table, etc.

Style/theme files identified:

- `default_shadcn_theme.css`
- `src/styles/theme.css`
- `src/styles/index.css`
- `src/styles/tailwind.css`
- `src/styles/fonts.css`
- `src/styles/globals.css`

Image/SVG/media assets:

- No standalone `.png`, `.jpg`, `.svg`, `.webp`, `.mp4`, `.wav`, `.mp3`, `.lottie`, or Lottie JSON files were included.
- The usable artwork is embedded as inline SVG inside React components.
- Inline SVG occurrences appear in `Wizard.tsx`, `Host.tsx`, `CharacterSheet.tsx`, `Styleframes.tsx`, and `Episode1.tsx`.
- The Figma manifest describes assets that should exist later, but those files are not exported in this zip.

Useful design text/markdown:

- `src/imports/c4sight-show-bible-v1.md` is the strongest creative source in the export.
- `src/imports/c4sight-figma-make-master-prompt.md` documents the generation brief and deliverable expectations.
- Captions embedded in `CharacterSheet.tsx`, `HostSheet.tsx`, `Styleframes.tsx`, `Episode1.tsx`, and `Manifest.tsx` are useful production notes.

## 2. Design Content Summary

Show Bible / brand board:

- Present as `src/imports/c4sight-show-bible-v1.md`.
- Includes one-liner, audience promise, editorial POV, host, mascot, four visual modes, blackboard ritual, recurring devices, tone rules, palette, typography, line weight, motion principles, audio identity, episode anatomy, roadmap, forbidden zones, and references.
- The locked palette is present: Slate, Chalk, Paper, Verify Red, Wizard Lavender, Ink.
- There is not a separate visual “BrandBoard” component, but the Show Bible and generated sheets cover the brand system.

Four visual mode styleframes:

- Present in `Styleframes.tsx`.
- Mode 1 Main Animated World: host workspace with desk, window, cup, notebook, books, and hidden wizard hat.
- Mode 2 Blackboard Teaching Mode: slate board, wand on ledge, partial Input → Model → Output diagram, host at board.
- Mode 3 Interface / Tool Mode: stylised AI chat window, prompt, generated reply, verify-red highlight, cursor.
- Mode 4 Human Judgement / Real-World Mode: small cafe back-office, laptop email draft, paperwork, phone, coffee cup, cafe owner.

Host concepts:

- Present in `Host.tsx` and `HostSheet.tsx`.
- Includes front, blackboard, and desk views.
- Expressions: dry, raised-brow, smile, exasperated, curious.
- Poses: gesture, two-tap-ready, brushing-dust, arms-crossed.
- Includes two variants: A with dark hair/oatmeal henley; B with auburn hair/slate-blue button-down.
- Strong design rules are included, including what the host must and must not read as.

Tiny Alien Wizard concepts:

- Present in `Wizard.tsx` and `CharacterSheet.tsx`.
- Views: front, three-quarter-left, three-quarter-right, side.
- Expressions: neutral, sulking, panicked, smug, disappointed, shrug.
- Poses: credit, debunked, stealing.
- Design rules match the Show Bible: pale lavender body, slate hat, three almost-right stars, dragging robe, tired eyes, stolen chalk wand, silent acting.

Blackboard ritual frames:

- Partially present.
- `Episode1.tsx` frame 06 shows “Let’s take it to the blackboard”: host walking toward a clean board with chalk.
- `Styleframes.tsx` and `Episode1.tsx` include blackboard teaching frames.
- Missing as actual production assets: dedicated two-chalk-tap close-up, tap audio, board roll-in/ritual transition layers, and exit wipe sequence.

Recurring devices:

- Present in writing via the Show Bible: Verify Stamp, Cabinet of Caveats, Confidently Wrong Office Worker, Toolbox, Scam Guru.
- Visually present: Verify Stamp in `Episode1.tsx` frame 09 and `Manifest.tsx`.
- Not visually designed as full assets in this export: Cabinet of Caveats, Confidently Wrong Office Worker, Toolbox, Scam Guru.
- The Tiny Alien Wizard is extensively designed.

Episode 1 styleframes:

- Present in `Episode1.tsx`.
- Ten frames:
  1. “Is AI magic?”
  2. Wizard takes credit
  3. “NO.”
  4. Wizard sad walk-off
  5. “Well… sort of.”
  6. “Let’s take it to the blackboard”
  7. Input → Model → Output
  8. “Useful and wrong at the same time”
  9. Verify Stamp
  10. “AI made clear.”

Production/export notes:

- Present in `Manifest.tsx` and the master prompt.
- The manifest includes 39 asset rows across Characters, Props, Backgrounds, UI, Type, Transitions, and Particles.
- Format guidance includes SVG, PNG, Lottie, PNG sequences, transparency, named layers, anchor points, and naming convention `c4s-ep01-[category]-[id].[ext]`.
- The export itself does not include the actual production files described by the manifest.

## 3. Asset Extraction Plan

Main Animated World:

- Map workspace/home-base background, paper flat background, books stack, coffee/tea cup, notebook, and Episode 1 paper/type frames to `public/c4sight/assets/main-world/`.
- Likely source components: `Styleframes.tsx` Mode 1, `Episode1.tsx` frames 01-05 and 10, `Manifest.tsx` rows `bg-workspace`, `bg-paper-flat`, `prop-books-stack`, `prop-coffee-cup`, `prop-notebook`.
- Needed extraction method: export full-frame PNG styleframes and separate layered PNG/SVG assets from Figma/Claude Design, not from production Remotion code yet.

Blackboard Teaching Mode:

- Map slate board backgrounds, clean blackboard, Input/Model/Output diagram, chalk labels, chalk dust, eraser, and blackboard teaching keyframes to `public/c4sight/assets/blackboard-mode/`.
- Likely source components: `Styleframes.tsx` Mode 2, `Episode1.tsx` frames 06-07, `Manifest.tsx` rows `bg-blackboard-clean`, `bg-blackboard-diagram`, `type-chalk-labels`, `part-chalk-dust`, `prop-eraser`.
- Needed extraction method: full-frame PNGs for backgrounds/styleframes; Lottie or SVG/layered exports for the drawn diagram and chalk labels.

Interface / Tool Mode:

- Map chat window, prompt bubble, reply stream, cursor, verify highlight, laptop email draft, and UI styleframe to `public/c4sight/assets/interface-mode/`.
- Likely source components: `Styleframes.tsx` Mode 3, `Episode1.tsx` frame 08, `Manifest.tsx` rows `ui-chat-window`, `ui-prompt-bubble`, `ui-reply-stream`, `ui-cursor`, `ui-verify-highlight`, `ui-laptop-screen`.
- Needed extraction method: SVG for static UI containers and cursor/highlight; Lottie or layered SVG/PNG sequence for generated reply streaming.

Human Judgement / Real-World Mode:

- Map cafe office background, cafe owner/Mode 4 figure, laptop-in-context, paperwork, phone, cafe props, and real-world scene keyframes to `public/c4sight/assets/human-judgement-mode/`.
- Likely source components: `Styleframes.tsx` Mode 4, `Manifest.tsx` rows `bg-cafe-office`, `char-cafe-owner`, `prop-cafe-set`, `ui-laptop-screen`.
- Needed extraction method: layered PNG background and separate prop/character layers for compositing.

Recurring Devices:

- Map Verify Stamp, Cabinet of Caveats, Toolbox, Confidently Wrong Office Worker, Scam Guru, and misconception devices to `public/c4sight/assets/recurring-devices/`.
- Likely source components: `Episode1.tsx` frame 09 and `Manifest.tsx` row `prop-verify-stamp` for Verify Stamp.
- Show Bible includes descriptions for Cabinet, Toolbox, Confidently Wrong Office Worker, and Scam Guru, but this export does not include finished visual assets for them.
- Needed extraction method: manual export for Verify Stamp; additional design generation or Figma work for the other recurring devices.

Transitions:

- Map eraser wipe, page turn, blackboard ritual transition, board roll-in, chalk dust wipe, world-to-board zoom, and mascot/host board cue assets to `public/c4sight/assets/transitions/`.
- Likely source components: `Episode1.tsx` frame 06 for ritual staging; `Manifest.tsx` rows `trans-eraser-wipe`, `trans-page-turn`, `trans-hard-cut-marker`.
- Needed extraction method: PNG sequence or Lottie for eraser wipe/page turn; additional design/export pass for the blackboard ritual transition variants.

Host:

- Map host rigged body, pose set, mouth shapes, expressions, blackboard pose, desk pose, and variants to `public/c4sight/assets/host/`.
- Likely source components: `Host.tsx`, `HostSheet.tsx`, `Manifest.tsx` rows `char-host-body`, `char-host-poses`, `char-host-mouths`.
- Needed extraction method: layered PNG or SVG exports with anchor points marked; final choice of host variant A or B required.

Mascot Wizard:

- Map Tiny Alien Wizard body rig, rear view, expression sheet, views, poses, hat, robe, arms, and wand layers to `public/c4sight/assets/mascot-wizard/`.
- Current repo has `public/c4sight/assets/characters/alien-wizard/`; consider whether to keep that existing folder or add the requested `mascot-wizard/` folder before production mapping.
- Likely source components: `Wizard.tsx`, `CharacterSheet.tsx`, `Episode1.tsx` frames 01-05 and 10, `Manifest.tsx` rows `char-wizard-body`, `char-wizard-back`, `char-wizard-expressions`, `prop-chalk-wand`.
- Needed extraction method: layered PNG/SVG exports; hat must remain separate for tilt/drop animation.

## 4. Missing Asset List Before Episode 1 Animation

The export is missing actual standalone production files. Before Episode 1 can be animated, production still needs:

- Full exported 1920x1080 PNG styleframes for the four visual modes.
- Full exported 1920x1080 PNG styleframes for the ten Episode 1 frames.
- Layered host production exports, including chosen variant, expressions, body parts, arms, legs, head, hair, glasses, mouth shapes, and blackboard/desk poses.
- Layered Tiny Alien Wizard exports, including body, hat, robe, arms, wand, rear view, expressions, and pose set.
- Blackboard ritual assets: two-tap close-up, board roll-in or motivated transition, chalk tap visual layer, chalk tap audio.
- Audio identity files: two chalk taps, eraser wipe, verify stamp thunk, wizard puffs, optional music sting.
- Transition assets: eraser wipe PNG sequence/Lottie, page turn if used, chalk dust wipe, world-to-board transition.
- Interface assets: chat window, prompt bubble, generated reply stream, cursor, verify highlight, laptop email draft, workflow/document panels.
- Human Judgement assets: cafe office layered background, cafe owner, cafe props, paperwork, phone, coffee cup, laptop screen.
- Verify Stamp production animation as layered PNG sequence/Lottie.
- Recurring device production designs for Cabinet of Caveats, Confidently Wrong Office Worker, Toolbox, and Scam Guru.
- Paper grain, fabric grain, ink texture, chalk dust loop, chalk burst one-shot.
- Final C4Sight logo/wordmark export if the `AI made clear` frame is not the final brand lockup.

## 5. Next Recommended Step

Recommendation: **B. needs manual screenshots/exports first.**

Reason:

- The export is strong enough as a design reference and production brief.
- It includes usable inline SVG structure for host/wizard/styleframes, but those are embedded in React components, not exported production assets.
- It includes a helpful Episode 1 production manifest, but the files described by that manifest are not present.
- It should not be mapped into the Remotion manifest yet because doing so would create paths to assets that do not exist.

After manual exports, a limited mapping pass can begin. However, some areas also need a targeted design pass before Episode 1 is fully production-ready:

- Cabinet of Caveats
- Confidently Wrong Office Worker
- Toolbox
- Scam Guru
- blackboard ritual transition variants
- audio identity files

So the practical next step is:

1. Open the extracted React/Figma Make project or original Figma file.
2. Export the four visual mode styleframes and ten Episode 1 styleframes as PNGs.
3. Export host and wizard as layered assets according to `Manifest.tsx`.
4. Export Verify Stamp, UI elements, blackboard assets, grains, particles, and transitions.
5. Run another inventory/QA pass on the exported media files.
6. Only then map assets into `src/design-system/c4sightAssetManifest.ts`.
