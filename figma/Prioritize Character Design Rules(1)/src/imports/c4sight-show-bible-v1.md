# C4Sight — Show Bible v1.0

A creative direction document. The single source of truth for the show. Every Figma Make prompt, every Codex build, every script revision should flow from this.

---

## 1. The One-Liner

**C4Sight is a YouTube channel that explains AI clearly, practically, and without hype — for everyone who's tired of being either talked down to or sold to.**

## 2. The Audience Promise

Every episode answers one real question about AI in 6–8 minutes. You leave knowing something specific, not just feeling vaguely informed. No course at the end. No cult energy. No "the future is now."

## 3. The Editorial POV

This is the show's spine. It runs through every episode and every visual choice.

> **AI is more useful than the doomers say, less magical than the hypers say, and almost everyone outside the industry is getting both wrong.**

Sub-positions, all derived from the spine:

- AI is a tool, not an oracle.
- "Useful and wrong at the same time" is the central truth about AI today.
- Verify anything that matters.
- Humans keep the responsibility, even when AI does the work.
- The interesting question isn't "will AI take my job?" — it's "which parts of my work change first?"
- Most "AI gurus" online are selling something. We're not.

If an episode doesn't visibly carry this POV, the episode is off-brand. Cut it.

## 4. The Host

C4Sight has a host. Not a disembodied narrator. The audience needs someone to attach to.

### Voice

- First-person. "I" not "we."
- Plain English. If a sentence sounds like it could open a LinkedIn post, rewrite it.
- Slightly Australian dryness — understated, observational, willing to be unimpressed.
- Curious, not breathless.
- Confident enough to hold a position without hedging it into mush.
- Self-aware. Acknowledges the genre. ("I know — yet another AI video.")
- Comfortable with silence and short sentences.

### Voice anti-patterns

- TED-talk cadence
- Tech-bro enthusiasm
- "Buckle up, because we're about to..."
- "The truth is..." (almost always followed by something that isn't)
- Anything that ends in "...and that's a good thing."
- Pretending to be impressed when something is normal

### On-screen presence (Phase 1)

The host appears as an illustrated character in the main animated world — same illustration style as the rest of the show. They are visible at the blackboard, in the workshop, at a desk. Not photorealistic, not a head-and-shoulders cutout — a character.

Whether the host is voiced by you or someone else is a separate decision. The *character* exists either way.

### Host design notes (for Figma Make)

- Adult, late 20s to mid 30s read.
- Clothing: practical, slightly worn. Henley or button-down with sleeves rolled, work trousers. Nothing fashion-forward, nothing nerdy-stereotype.
- Glasses optional but useful for "thinking" beats.
- Always carries a small notebook or tablet — used as a prop for "let me look that up" / "let me check" beats.
- Expressions: dry, raised eyebrow, slight smile when something is genuinely funny. Rarely surprised. Frequently unimpressed.

## 5. The Mascot — Tiny Alien Wizard

The show's antagonist, mascot, and best joke. He represents the magical-thinking version of AI — the wizard people *think* lives inside their laptop.

### Character rules

- He is small. He fits inside a coffee cup. The smallness is part of the joke.
- He is not bright-coloured. Pale lavender (#B9A8C7), slightly translucent.
- His hat is pointy, dark blue or slate, with stars that are *almost right* — a triangle, a wonky pentagon, a star with five points but uneven. Three stars max. Implies he's *trying* to look magical.
- His robe is too long, drags slightly. Worn cuffs.
- His eyes are large and tired. Big pupils, small irises. He's been doing this a while.
- He carries a chalk wand he stole from the host's blackboard. Recurring conflict: the host wants it back.
- **He never speaks.** He gestures, mimes, panics, sulks, takes credit, gets disappointed.

### What he represents

- Magical thinking about AI
- The "AI is conscious" assumption
- The "AI is going to take over" assumption
- The "AI just *gets* me" assumption
- Anyone who attributes intelligence, agency, or wisdom to AI without evidence

### How he's used

- He appears whenever someone (in script or in stock footage) over-attributes magic to AI.
- He tries to take credit for things AI didn't actually do, gets caught, sulks off.
- He sometimes tries to stop the host from explaining how AI actually works — he prefers the mystery.
- He has a recurring "I told you so" moment when AI does something genuinely surprising — and a recurring "this isn't going well for me" moment when AI is debunked.
- He is *never* the show's mouthpiece. He is the thing the show debunks. But he is lovable.

### Anti-patterns

- Not Disney-cute. Not big-headed-chibi. Not a Pixar minion.
- Not wise. Not the host's helper. Not the audience's friend.
- Not a meme. Not winking at the camera. Not making peace signs.

### Figma test

If the wizard could appear in a New Yorker cartoon or an Edward Gorey illustration without looking out of place, he's right. If he could appear in a children's textbook, he's wrong.

## 6. The Four Visual Modes

The show has exactly four visual modes. Locked. Each mode has clear triggers, distinct visual language, and a defined transition style.

### Mode 1 — Main Animated World

**Used for:** cold opens, hooks, comedic beats, metaphors, story flow, everyday examples, the host's home base.

**Visual language:**
- Slightly textural illustrated world — looks hand-drawn, but tight.
- Limited colour palette (see §10).
- Backgrounds soft, low-detail. Foreground characters and props carry the weight.
- Slight paper or fabric grain underneath everything.
- Animation: 2D character animation, prop animation, light camera moves. Not motion-graphics-y.

This is the show's home. Episodes start and end here.

### Mode 2 — Blackboard Teaching Mode

**Used for:** definitions, mechanisms, frameworks, diagrams, anything that benefits from being *drawn out.*

**Visual language:**
- Real-feeling chalk on dark slate.
- Hand-drawn chalk linework, not perfect vector. Wobble is fine. Chalk dust is mandatory.
- Two chalk colours max: white primary, one accent (yellow or pale orange).
- Diagrams build progressively, not all at once.
- The host appears at the board.

Triggered by the ritual (see §7). Never just "switches on."

### Mode 3 — Interface / Tool Mode

**Used for:** showing AI tools, agents, prompts, documents, dashboards, workflows, automations, MCP, anything where we're looking at a *thing on a screen.*

**Visual language:**
- Stylised UI. Not pixel-perfect screenshots. Flat, slightly chunky, low-fi.
- Dim background, foreground UI element pops.
- Browsers, chat windows, code editors, dashboards rendered in our palette, not their real brand colours.
- Cursor and typing animations are deliberately slow — readable, not fast-cut.

Used briefly, never as a long static section. Two to ten seconds at a time.

### Mode 4 — Human Judgement / Real-World Mode

**Used for:** stakes, ethics, jobs, business, creativity, trust, responsibility, real-life examples.

**Visual language:**
- Same illustration style as the main world, but grounded in *places* — kitchens, offices, cars, classrooms, courtrooms, building sites.
- Real-feeling props: kettles, paperwork, business cards, contracts, sandwiches.
- Slightly more saturated than main world to signal "this matters."

Used to make abstractions concrete. When the script says "businesses can use AI for X," we don't show floating UI — we show a small business owner in a real shop.

---

The four modes do *different jobs.* They are not stylistic flavours of the same idea. Cuts between modes should feel deliberate, almost editorial — like a magazine moving between feature, infographic, photo essay, and interview.

## 7. The Blackboard Ritual

"Take it to the blackboard" is the show's recurring teaching device. It must be earned, not casual.

### The ritual (full version, used in early episodes to establish the device)

1. The host says the line: *"Let's take it to the blackboard."* Or the longer form: *"To properly understand this, we need to pay a visit to the blackboard."*
2. Cut to the host walking toward the blackboard. They roll up their sleeves.
3. They pick up the chalk. **Two taps** on the board, at the top-left, before writing. This is the signature.
4. The blackboard segment plays out.
5. Exit ritual: the host puts the chalk down, brushes chalk dust off their hands, and we eraser-wipe back to the main world.

### The ritual (compressed, used after audiences know the device)

- Host says the line, smash cut to two chalk taps already happening.
- Or: host doesn't say the line — we just hear the two taps, and the audience knows.

### Comedic uses of the ritual

- The wizard tries to grab the chalk. Host swats him away.
- Host can't find the chalk. Eventually finds it behind their ear.
- Eraser leaves a streak, host has to wipe again.
- Host says the line and we cut — but they're already mid-sentence at the board, no transition. (Once audiences know the device.)

### Forbidden

- Using the line without the ritual.
- Cutting to the blackboard for a one-second beat. The blackboard is for *teaching*, not asides.
- Using the blackboard as a default. It must be earned by the script.

## 8. Recurring Devices

Devices that appear across episodes and become part of the show's vocabulary.

**The Verify Stamp.** A red rubber stamp that thunks down whenever AI sounds confident but is wrong (or about to be checked). Eventually lands as a comedic punchline before AI has even said anything wrong, and the host has to wave it off.

**The Cabinet of Caveats.** A wooden filing cabinet drawer where boring-but-important disclaimers live. The host opens it reluctantly when nuance is needed.

**The Confidently Wrong Office Worker.** A friendly desk-job character (necktie, coffee cup, professional smile) who delivers wrong answers with total polish. Cousin to the wizard but represents *corporate AI product confidence* rather than magical thinking. Used sparingly.

**The Toolbox.** A literal physical toolbox containing AI tools as physical objects — wrench labelled "research," hammer labelled "draft," weird tangled cable labelled "MCP." Used in tool-overview episodes.

**The Scam Guru.** Sunglasses indoors, in front of a rented sports car. Used only when debunking "make money with AI" content. Gets crossed out with a chalk X.

Don't add more devices until these have shipped at least three times each. Restraint is part of the brand.

## 9. Tone Rules

**Always:**
- Specific over general. ("I asked it to write a wedding speech for a friend named Dave" beats "AI can produce content.")
- Honest about limits. The verify stamp exists because we mean it.
- Curious, not breathless.
- The funniest version of a true sentence is better than the truest version of a funny one.

**Never:**
- "The future is now."
- "Buckle up."
- "What if I told you..."
- "Here's the crazy part."
- Fake-profound closing lines. ("In a world where machines think...") Cut every time.
- Punching down at the audience. ("Most people don't understand this, but...") Always punch up at the technology, the hype, or yourself.
- Ending sentences in upspeak.

## 10. Visual Identity Specification

This section is what Figma Make and Codex consume directly.

### Palette (locked)

| Token | Hex | Use |
|---|---|---|
| Slate | `#1A1F1C` | Blackboard backgrounds, dark mode |
| Chalk | `#F4EDE0` | Chalk text, primary type on dark |
| Paper | `#EFE7D6` | Main world backgrounds, warm fills |
| Verify Red | `#D7382C` | Verify stamp, warnings, emphasis |
| Wizard Lavender | `#B9A8C7` | Tiny alien wizard body |
| Ink | `#221F1F` | Line art, host on light backgrounds |

That's six colours. No others. No gradients. No glows.

### Typography

- Primary display: a humanist slab or strong editorial serif (Recoleta, Domaine Display, Tiempos family). Used for episode titles, key on-screen lines, big text moments.
- Secondary body: a grounded geometric sans (Söhne, GT America, Inter). Used for subtitles, captions, UI mode text.
- Chalk text: hand-lettered illustration, not a chalk-effect font.

### Line weight

- Main world line art: 2.5–3pt at 1080p, slightly variable.
- Blackboard chalk: hand-illustrated, no consistent vector weight.
- UI mode: 1.5pt clean vector.

### Motion principles

- Eases that *settle.* No bouncy springs, no overshoot. Things land.
- Holds. Static frames are fine for 1–2 seconds. The audience can read.
- Camera moves are small. No swooping.
- Transitions between modes: hard cuts most of the time. The eraser wipe is reserved for the blackboard exit. Don't dilute it.

## 11. Audio Identity

### Music

- One signature musical motif (a few seconds, identifiable). Used at episode open, episode close, and as a sting before "take it to the blackboard."
- Underscore through episodes is sparse and instrumental — single acoustic guitar, upright piano, soft synth pad. No drums in most sections.
- No royalty-free corporate explainer tracks. Either custom or carefully licensed.

### Sound design

- Chalk on board (real recorded sound).
- Two-tap signature (chalk against slate, twice). This is the show's audio fingerprint.
- Eraser wipe (real).
- The verify stamp is a *chunky* mechanical thunk.
- Wizard sounds: small puffs of magical effort that don't quite work.

### Voice

- Recorded in a quiet, slightly intimate space. Not booth-dry. Some room.
- Pace varies — slower for blackboard sections, faster for cold open.

## 12. Episode Anatomy

**Length:** 6–8 minutes for standard episodes. 10 minutes maximum and only if earned. Channel manifesto: 60 seconds.

**Structure:**

1. **Cold open** (45–75 seconds) — the question, the hook, the wizard, the host. Promise the answer.
2. **The setup** (60–90 seconds) — why this question matters, what's at stake.
3. **The body** (3–4 minutes) — the actual answer, with at least one blackboard segment.
4. **The honest caveat** (45–60 seconds) — what we got right, what's still uncertain, where to verify.
5. **The bridge** (15–30 seconds) — tease the next episode, end on a clean line.

**Ending line conventions:**

- *"This is C4Sight. AI made clear."*
- Or, occasionally: *"AI made clear-ish. We'll keep working on it."*
- Or simply: *"Made clear."*

**Never end on:**
- "Subscribe and hit the bell"
- "Let me know what you think in the comments"
- "If you liked this video..."

The audience knows where the buttons are.

## 13. Series Roadmap (Episodes 1–8)

Each is a single question. Each has a clear answer. Each carries the POV.

1. **Is AI actually magic?** *(Cold-open episode, establishes the brand.)*
2. **How to actually use AI without being annoying about it.** *(Practical prompting, with caveats.)*
3. **Why your AI is wrong about half the time you don't notice.** *(Verification, hallucination, real examples.)*
4. **Tools: which ones matter, which ones are noise.** *(Current tools, with a six-month expiry warning.)*
5. **Agents: what they are when the marketing isn't lying.** *(Agents, MCP, connectors at beginner level.)*
6. **Will AI take my job? The actual answer.** *(Jobs, tasks, the honest framing.)*
7. **How small businesses can use AI without burning their reputation.** *(Real use cases.)*
8. **AI in [law / education / finance / etc.] — pick one for first round.** *(Industry deep-dive, then rotate.)*

## 14. The Forbidden Zones

Non-negotiable.

- Never recommend a product the host hasn't used.
- Never imply AI has consciousness, feelings, or wants. (The wizard is a *joke about people who do this.*)
- Never use the words "revolutionary," "game-changing," "paradigm shift," or "disrupting."
- Never use neon, blue gradients, glowing neural networks, or floating UI cards.
- Never make the wizard cute in a Disney sense.
- Never end an episode with a fake-profound line.
- Never run a sponsorship for an "AI tool" without doing the work.
- Never speak down to the audience.
- Never be the channel that gets quoted approvingly by Twitter rationalists *or* hype merchants. Both groups are off-brand.

## 15. Reference Touchstones

For visual and tonal calibration. Not to copy — to *triangulate.*

**Visual touchstones:**
- Kurzgesagt — the discipline of a tight palette and consistent iconography (but warmer, more textured, less corporate).
- *Vox* / Patriot Act-era editorial graphics — wit, bold typography, confidence.
- Edward Gorey illustration — slight unease, dry comedy, texture.
- *The New Yorker* cartoons — the visual register of the wizard.
- Late-20th-century educational TV (early *Sesame Street* sketches before they got too soft) — unselfconscious blend of serious teaching and absurd humour.

**Tonal touchstones:**
- John Oliver / Patrick Boyle — dry, well-researched register.
- Tom Scott — the plain-English explainer ethic.
- Adam Conover — willingness to debunk.
- Hank Green — but with the corporate-friendly edges sanded off.

**Anti-touchstones (do not look like):**
- Generic LinkedIn-style explainers
- TED talks
- Crypto/tech-bro YouTube
- AI startup landing pages
- Hustle-culture YouTube
- Children's educational content

---

*This bible is v1.0. It will evolve. Changes are versioned. Don't ship anything that contradicts the current version.*
