# C4Sight Required Asset Checklist

This checklist follows `docs/C4Sight-Show-Bible.md`, the current creative source of truth.

Do not resume Episode 1 animation until the required assets and approved styleframes are present. Place files at the exact manifest paths, then run `npm run assets:scan`.

Asset root:

`/public/c4sight/assets/`

## Visual Mode Foundations

Main Animated World in `/main-world/`:

- `style-frame.png`
- `environment-base.png`
- `episode01-magic-question-styleframe.png`
- `character-scale-reference.png`
- `metaphor-stage.png`

Blackboard Teaching Mode in `/blackboard-mode/`:

- `style-frame.png`
- `board-background.png`
- `teaching-layout-reference.png`
- `chalk-dust-overlay.png`
- `model-box.svg`
- `data-patterns-output-diagram.svg`

Interface / Tool Mode in `/interface-mode/`:

- `style-frame.png`
- `tool-window.svg`
- `cursor-and-selection.svg`
- `prompt-card.svg`
- `output-card.svg`
- `stylised-document-panel.svg`
- `workflow-nodes.svg`

Human Judgement / Real-World Mode in `/human-judgement-mode/`:

- `style-frame.png`
- `decision-scene-keyframe.png`
- `everyday-background.png`
- `business-background.png`
- `classroom-background.png`
- `risk-choice-scene.png`

## Host Character

Host assets in `/host/`:

- `host-base.svg`
- `expression-neutral.svg`
- `expression-curious.svg`
- `expression-sceptical.svg`
- `expression-concerned.svg`
- `expression-reassuring.svg`
- `blackboard-pointing.svg`
- `blackboard-writing.svg`
- `blackboard-listening.svg`

The host should work across the Main Animated World and Blackboard Teaching Mode without looking like a separate character pack.

## Mascot / Tiny Alien Wizard

Tiny Alien Wizard assets in `/characters/alien-wizard/`:

- `neutral.svg`
- `confident.svg`
- `confused.svg`
- `sad.svg`
- `overwhelmed.svg`
- `excited.svg`
- `freeze.svg`
- `walking-away.svg`
- `running-back.svg`
- `peeking.svg`
- `holding-wand.svg`

Wizard prop in `/recurring-devices/`:

- `wizard-chalk-wand.svg`

The Tiny Alien Wizard represents the feeling that AI seems magical. It should be charming and contained, not childish or dominant.

## Recurring Devices

Recurring device assets in `/recurring-devices/`:

- `verify-stamp.svg`
- `cabinet-of-caveats.svg`
- `toolbox.svg`
- `confidently-wrong-office-worker.svg`
- `scam-guru.svg`
- `tiny-person-machine.svg`
- `brain-thinking-crossout.svg`
- `blind-trust-crossout.svg`

These assets are required before Episode 1 production because they define the recurring C4Sight language for trust, nuance, tool use, hype, and misunderstanding.

## Transitions

Transition assets in `/transitions/`:

- `blackboard-ritual-transition.svg`
- `take_to_blackboard_transition.svg`
- `board_roll_in.svg`
- `chalk_dust_wipe.png`
- `world_to_board_zoom.png`
- `mascot_points_to_board.svg`
- `eraser_wipe.png`

Audio identity in `/audio-identity/`:

- `two-chalk-taps.wav`

Blackboard Teaching Mode should be entered through the ritual “Let’s take it to the blackboard.” These transitions make that mode shift feel motivated.

## Interface / Tool Assets

Interface assets in `/interface-mode/`:

- `interface-ui-cards.svg`
- `stylised-document-panel.svg`
- `workflow-nodes.svg`
- `toolbox-workflow.svg`
- `verification-ui-state.svg`
- `draft-output-card.svg`

These are required before practical tool demonstrations. Interface mode must feel useful and readable, not like generic SaaS marketing.

## Cards

Cards in `/cards/`:

- `email.svg`
- `website.svg`
- `assignment.svg`
- `code.svg`
- `image.svg`
- `summary.svg`
- `business-idea.svg`
- `writing.svg`
- `summarising.svg`
- `coding.svg`
- `explaining.svg`
- `planning.svg`
- `documents.svg`
- `tools.svg`
- `workflows.svg`

Cards can be used in Main Animated World, Interface / Tool Mode, or Blackboard Teaching Mode only when their styleframe supports that mode.

## Icons

Icons in `/icons/`:

- `magnifying-glass.svg`
- `warning.svg`
- `checklist.svg`
- `verification.svg`
- `judgement.svg`
- `trust-risk.svg`
- `roadmap.svg`
- `writing.svg`
- `summarising.svg`
- `coding.svg`
- `explaining.svg`
- `planning.svg`
- `image-generation.svg`
- `documents.svg`
- `tools.svg`
- `workflows.svg`

Icons should be simple, recognisable, and mode-compatible.

## Effects

Effects in `/effects/`:

- `poof.svg`
- `spark.svg`
- `freeze-burst.svg`
- `circle-highlight.svg`
- `underline.svg`
- `cross-out.svg`
- `eraser-smear.png`

Effects are not a substitute for approved characters and scene compositions. They should support timing, not hide weak staging.

## Scene Keyframes

Scene keyframes in `/scene-keyframes/`:

- `episode01-magic-misunderstanding.png`
- `episode01-not-magic-correction.png`
- `episode01-autocomplete-expansion.png`
- `episode01-overwhelm-beat.png`
- `episode01-blackboard-ritual.png`
- `episode01-what-is-ai.png`
- `episode01-verify-warning.png`
- `episode01-roadmap.png`

Episode keyframes should identify their visual mode and approved recurring devices.

## Episode 1 Minimum Required Assets

Episode 1 is centred around:

`Is AI actually magic, or are we just bad at understanding it?`

Minimum production assets before animation resumes:

- Main Animated World styleframe
- Host base and core expressions
- Tiny Alien Wizard core poses
- Wizard chalk wand
- Verify Stamp
- Cabinet of Caveats
- Toolbox
- Confidently Wrong Office Worker
- Scam Guru
- Blackboard Teaching Mode styleframe
- Blackboard ritual transition
- Two chalk taps
- Interface UI cards
- Stylised document panel
- Workflow nodes
- Real-world scene backgrounds
- Episode 1 scene keyframes

## Production Gate

Required asset readiness should be treated as a gate, not a suggestion. If a required file is missing, Remotion may show a labelled placeholder for planning, but Codex must not proceed to final animation.
