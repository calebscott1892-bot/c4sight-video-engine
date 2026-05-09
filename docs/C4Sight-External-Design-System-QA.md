# C4Sight External Design System QA

Date: 2026-05-09

Scope: `C4SightExternalDesignSystemPreview` only. This QA does not approve Episode 1 animation.

Source of truth: `docs/C4Sight-Show-Bible.md`

Review materials:

- Preview MP4: `out/c4sight-external-design-system-preview.mp4`
- Contact sheet: `out/c4sight-external-design-system-preview-contact-sheet.png`
- QA stills: `out/qa-frames-external-design-system-preview/`

## Preview Coverage

The current preview contains eight objective review frames:

1. `01-palette-swatches.png` - Show Bible palette swatches plus package character usage
2. `02-wizard-expression-grid.png` - Tiny Alien Wizard expression grid
3. `03-wizard-pose-grid.png` - Tiny Alien Wizard pose and view grid
4. `04-host-expression-grid.png` - Host expression grid
5. `05-host-pose-grid.png` - Host pose and variant grid
6. `06-blackboard-two-tap.png` - blackboard/two-tap Remotion timing example
7. `07-package-usage-example.png` - imported component usage in a simple scene
8. `08-fallback-placeholder-check.png` - fallback and placeholder status check

## Scored QA

| Metric | Score | Pass/Fail | Evidence | Issue If Failing | Recommended Next Action |
| --- | ---: | --- | --- | --- | --- |
| Wizard consistency | 7/10 | Fail | The Wizard keeps consistent palette, body shape, hat, wand, and expression system across the expression and pose grids. | Poses are consistent, but the character still reads as a structural SVG asset rather than a locked production character. Line detail and silhouette polish are not final enough for a flagship show. | Get approved Wizard styleframes or production exports from the Figma source, then retest at small sizes and in staged scenes. |
| Wizard adult-friendliness / not childish | 6/10 | Fail | The Wizard is intentionally comic and restrained, and the preview avoids messy chaos. | The large eyes, pointed hat, and simple robe still risk reading young/mascot-heavy. The Show Bible says the Wizard is seasoning, not the whole show, so the asset needs more dry, clever restraint. | Ask design for a more adult, slightly drier Wizard pass with subtler facial acting and less toy-like proportions. |
| Host fit to Show Bible | 7/10 | Fail | The Host reads as practical, calm, and non-corporate in the expression and pose grids. | The host is usable for rough staging, but still looks like a generated structural character drawing. Hair, clothing, hands, and linework need final character design polish. | Request approved Host turnaround and pose exports before using the Host in production shots. |
| Expression readability | 7/10 | Fail | Wizard and Host expression grids show distinct expression labels and mostly readable facial changes. | Several expression differences are subtle at contact-sheet scale, especially dry/raised-brow/curious and neutral/shrug. They may not survive mobile viewing. | Strengthen expression silhouettes: brows, head tilt, mouth shape, hand pose, and body attitude should change more clearly. |
| Pose readability | 6/10 | Fail | Pose grids cover Wizard credit/debunked/stealing and Host gesture/two-tap/brushing-dust/arms-crossed. | Some poses are too similar or too small to read instantly. Host brushing-dust and arms-crossed need clearer action lines; Wizard debunked and sulking-like reads overlap. | Add pose-specific body language and test each pose at final video scale and mobile thumbnail scale. |
| Palette accuracy | 9/10 | Pass | The preview uses `C4SIGHT_PALETTE` from `@c4sight/design-system`: Paper `#EFE7D6`, Chalk `#F4EDE0`, Slate `#1A1F1C`, Ink `#221F1F`, Lavender `#B9A8C7`, Red `#D7382C`. | The package also exposes `LAVENDER_SHADOW #9D8AAE`, which is useful as a derived shade but should be documented as a support tone, not a new brand colour. | Keep the core Show Bible palette locked. Document any derived shades as controlled production support colours. |
| Animation readiness | 6/10 | Fail | The two-tap frame proves simple Remotion transforms and interpolation work without immediate layout breakage. | The components are mostly monolithic SVG character components. They are not yet proven for richer acting, walk cycles, prop handoffs, or staged scene blocking. | Define which parts need rigging or separate export layers before final animation: head, brows, arms, hands, props, and expression swaps. |
| Remotion integration cleanliness | 8/10 | Pass | The local file dependency imports through `@c4sight/design-system`; adapters expose stable Remotion-friendly props; typecheck passes. | Integration is clean enough for preview use, but package runtime exports needed ESM compatibility fixes and still depend on the package build output staying aligned. | Keep package build/typecheck in the update workflow and document adapter prop support when the package changes. |
| Fallback/placeholder absence | 10/10 | Pass | The fallback check frame reports Wizard, Host, and palette exports all loaded. No dashed `MISSING EXTERNAL` boxes appear in the eight stills. | None in this preview. Fallback components exist in code but are inactive. | Keep the fallback check panel in previews. Any visible fallback should block production animation. |
| Overall production readiness | 6/10 | Fail | The system is technically importable and useful for animatics and review. | It is not production-ready against the Show Bible. The art is still structural, recurring devices are missing, and character acting is not yet strong enough to lock the show language. | Treat this as a successful technical intake preview, not an approved production art system. Complete styleframe and asset approval first. |

## Average Scores

Wizard average: 6.5/10

- Wizard consistency: 7
- Wizard adult-friendliness / not childish: 6

Host average: 7/10

- Host fit to Show Bible: 7

If expression and pose readability are included in both character averages, the practical production average is lower:

- Wizard practical average: `(7 + 6 + 7 + 6) / 4 = 6.5`
- Host practical average: `(7 + 7 + 6) / 3 = 6.7`

## Hard Gate Decision

Production-ready status: Fail

Hard gate requirements:

| Requirement | Result |
| --- | --- |
| Wizard average score is 8+ | Fail |
| Host average score is 8+ | Fail |
| No placeholder/fallback art appears in preview | Pass |
| Palette matches Show Bible colours | Pass |
| Components can be animated in Remotion without breaking layout | Pass for simple transforms only; fail for final acting readiness |

Gate 4 - Styleframes approved: Fail

The external package is not yet strong enough to count as approved production styleframes. It is technically useful, but the Wizard and Host require art-direction approval and likely a refined export pass.

Gate 5 - Required assets present: Fail

The package currently covers Wizard, Host, and palette preview needs. It does not yet satisfy the broader Show Bible asset requirements for Episode 1, including recurring devices, mode-specific assets, transitions, interface/tool visuals, human judgement scenes, audio identity, and final production-ready character exports.

## Fallback / Placeholder Visibility

No fallback placeholder art is visible in the regenerated preview, contact sheet, or eight stills.

The fallback system still exists in:

- `src/design-system/external/C4SightWizard.tsx`
- `src/design-system/external/C4SightHost.tsx`

It would show labelled dashed boxes only if the package Wizard or Host export failed. The current preview shows the imported external package components instead.
