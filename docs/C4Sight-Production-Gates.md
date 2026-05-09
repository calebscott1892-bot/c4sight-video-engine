# C4Sight Production Gates

These gates prevent C4Sight from drifting back into improvised prototype production.

Codex must not proceed to animation if required assets or approved styleframes are missing.

## Automated Gate Checks

Run the production QA harness before any future animation work:

```bash
npm run c4sight:qa
```

The command writes:

`docs/generated/C4Sight-Production-QA-Report.md`

It orchestrates:

- `npm run assets:scan`
- external design-system package build/import checks
- `npm run typecheck`
- manifest asset validation
- Gate 1-8 status checks

The command is allowed to exit non-zero when production gates fail. That is not a tool failure; it is the guard doing its job.

Focused checks:

```bash
npm run c4sight:qa:assets
npm run c4sight:qa:design-system
npm run c4sight:qa:gates
```

Current rule: animation is blocked until Gate 4 and Gate 5 pass.

## Gate 1 — Show Bible Locked

Required before any episode work:

- `docs/C4Sight-Show-Bible.md` is present.
- The episode direction does not conflict with the Show Bible.
- The visual mode plan is clear.
- Any older blackboard-only assumptions are treated as historical, not current.

## Gate 2 — Episode Question Locked

Required before scripting:

- The central episode question is written in one sentence.
- The episode is scoped to one clear viewer problem.
- Episode 1 uses: “Is AI actually magic, or are we just bad at understanding it?”
- Runtime target is defined.

## Gate 3 — Script Locked

Required before styleframe-dependent animation planning:

- Voiceover script is approved.
- Intro, teaching sections, examples, caveats, and ending are structured.
- Blackboard ritual moments are explicitly marked.
- Interface/tool and human judgement moments are explicitly marked.

## Gate 4 — Styleframes Approved

Required before final animation:

- Main Animated World styleframes are approved.
- Blackboard Teaching Mode styleframes are approved.
- Interface / Tool Mode styleframes are approved.
- Human Judgement / Real-World Mode styleframes are approved.
- Recurring device styleframes are approved.
- Transition styleframes are approved.
- The Figma-generated `@c4sight/design-system` package has been reviewed for Wizard, Host, and palette usage.

## Gate 5 — Required Assets Present

Required before Remotion scene production:

- Manifest paths match exported files.
- Character imports from `@c4sight/design-system` are buildable and previewed.
- `npm run assets:scan` has been run.
- Required asset readiness is production-ready.
- Missing placeholders are not treated as final art.
- Episode 1 minimum required assets are present.

Automated status:

- `npm run c4sight:qa:assets` checks manifest paths, duplicates, missing required assets, empty folders, and format mismatches.
- Gate 5 remains blocked when any required manifest asset is missing, even if technical placeholders or old prototype components still render.

## Gate 6 — Animatic Approved

Required before final polish:

- Animatic is voice-led.
- Scene order is locked.
- Mode switches are motivated.
- Holds and stillness are intentional.
- Humour beats are staged, readable, and not overcrowded.
- Contact sheet has been reviewed.

## Gate 7 — Final Animation

Required before export QA:

- Final scenes use approved assets.
- Motion grammar follows the Show Bible.
- Blackboard Teaching Mode only appears when justified.
- Interface scenes are readable.
- Human judgement scenes are grounded.
- No forbidden visual zones appear.

## Gate 8 — QA/Export

Required before publication:

- 1920x1080 render completed.
- Contact sheet reviewed.
- QA stills reviewed on desktop and mobile scale.
- Captions are readable and do not duplicate board text awkwardly.
- No placeholder assets remain in production scenes.
- Audio cue plan is present if sound design is part of the delivery.
