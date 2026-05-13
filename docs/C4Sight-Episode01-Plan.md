# C4Sight Episode 1 Plan

Status: planning draft only. This document does not approve Gate 3.

Do not animate Episode 1 from this plan yet. Gate 4 styleframes and Gate 5 required assets remain blocked.

## Episode Premise

Episode 1 asks:

> Is AI actually magic, or are we just bad at understanding it?

The episode should establish the C4Sight point of view: AI can feel magical because the behaviour is surprising, but the useful mental model is not magic, not human thinking, and not boring autocomplete either.

Target length: 6-8 minutes.

Current planned script length: about 7 minutes.

## Structure

### 1. Cold Open

Mode: Main Animated World

Purpose: stage the Tiny Alien Wizard misunderstanding in a controlled, clever way.

Key idea: people talk about AI like there is a tiny alien wizard inside the laptop because the first real use can feel ridiculous.

Visual direction: lively but contained. Capability cards appear around the Wizard without becoming messy.

### 2. Setup

Mode: Main Animated World moving toward Interface Mode

Purpose: clear away two bad mental models:

- AI is magic or a tiny person in the machine.
- AI is only boring autocomplete.

This section earns the blackboard ritual:

> Let's take it to the blackboard.

### 3. Blackboard Explanation

Mode: Blackboard Teaching Mode

Purpose: define the simple model:

> modern AI learns patterns from data and uses those patterns to produce useful outputs.

This section should be calm. It should use one strong diagram and intentional held frames. The caveat is explicit: the model is useful, not complete.

### 4. Useful And Wrong Example

Mode: Interface / Tool Mode

Purpose: show practical usefulness through a customer email example.

The AI drafts a calm reply, summarises the problem, and suggests a checklist. The point is not that the tool is bad. The point is that a useful draft is not the same as a verified answer.

### 5. Caveat / Verify Moment

Mode: Human Judgement / Real-World Mode

Purpose: teach the trust rule:

> use AI for acceleration, not blind authority.

The Verify Stamp and Cabinet of Caveats should make checking feel practical and satisfying, not scary.

### 6. Close / Next Episode Bridge

Mode: Main Animated World

Purpose: land the mental model and bridge to the next episode.

Closing idea:

AI is a powerful pattern tool. It can help with drafts, summaries, plans, documents, and thinking, but it still needs human judgement around it.

Next episode bridge:

Why AI suddenly seemed to arrive everywhere at once.

## What Gets Cut From The Old "Everything About AI" Approach

Episode 1 is not a full encyclopedia. It cuts:

- detailed AI history
- every model type
- deep neural-network architecture
- long tool comparisons
- exhaustive prompt engineering
- legal/privacy deep dives
- business automation playbooks
- agent/MCP/connectors explanations
- speculative AGI arguments
- future-of-work grandstanding

Those topics can become later episodes. Episode 1 only needs to establish a clear mental model and the C4Sight promise.

## Data Files

Structured planning data now lives in:

- `src/episodes/episode01/episode01.script.ts`
- `src/episodes/episode01/episode01.beats.ts`
- `src/episodes/episode01/episode01.assetNeeds.ts`

Validation:

```bash
npm run c4sight:qa:episode01
```

This checks references and planning rules only. It does not approve the script.

## Required Assets

Episode 1 needs approved assets in these groups before animation can resume.

### Main World

- main world style frame
- environment base
- Episode 1 magic question styleframe
- character scale reference
- metaphor stage
- laptop prop
- not-magic correction keyframe
- roadmap keyframe

### Host

- host base
- neutral, curious, sceptical, reassuring expressions
- blackboard pointing, writing, and listening poses

### Wizard

- neutral, confident, confused, freeze, overwhelmed poses
- wand prop
- optional sad and excited reactions

### Blackboard

- blackboard style frame
- board background
- teaching layout reference
- data to patterns to output diagram
- model box
- optional chalk dust overlay

### Recurring Devices

- Verify Stamp
- Cabinet of Caveats
- Toolbox
- Confidently Wrong Office Worker
- tiny person in machine cross-out
- brain/thinking cross-out
- blind-trust cross-out

### Interface Mode

- interface style frame
- tool window
- prompt card
- output card
- draft output card
- stylised document panel
- workflow nodes
- verification UI state
- autocomplete line
- capability cards for email, website, assignment, image/logo, code, summary, business idea, and planning

### Human Judgement Mode

- human judgement style frame
- decision scene keyframe
- risk choice scene
- magnifying glass
- warning icon
- checklist
- verification, judgement, and trust/risk icons

### Transitions

- blackboard ritual transition
- take-to-blackboard transition
- optional chalk dust wipe
- optional eraser wipe

### Audio

- two chalk taps
- optional verify-stamp hit
- optional blackboard scribble cue

## Production Risks

- The Tiny Alien Wizard could become too dominant if the cold open is not restrained.
- The blackboard section could turn into animated notes instead of one clear teaching idea.
- Interface Mode could drift into glossy SaaS design if styleframes are not locked.
- The useful-and-wrong example could sound anti-AI if the Verify moment is too severe.
- The close could become fake-profound if it tries to summarise the whole AI era instead of landing one practical mental model.
- Current required assets are missing, so production animation remains blocked.

## Next Decisions Needed

1. Approve or revise the script draft tone and section structure.
2. Confirm whether the customer email example is the right practical example for Episode 1.
3. Confirm which recurring devices must appear in Episode 1 versus later episodes.
4. Wait for Character System v2 and approved styleframes.
5. Export real assets into the manifest paths.
6. Rerun `npm run c4sight:qa`.
7. Only after Gates 3, 4, and 5 are resolved, build the animatic.
