export type Episode01VisualMode =
  | 'main_world'
  | 'blackboard_mode'
  | 'interface_mode'
  | 'human_judgement_mode';

export type Episode01ScriptBlock = {
  id: string;
  title: string;
  approximateDurationSeconds: number;
  voiceoverDraft: string;
  purpose: string;
  mode: Episode01VisualMode;
  notes: string;
};

export const episode01CentralQuestion =
  'Is AI actually magic, or are we just bad at understanding it?';

export const episode01TargetLengthSeconds = {
  min: 360,
  max: 480,
  planned: 420,
} as const;

export const episode01ScriptBlocks = [
  {
    id: 'cold-open',
    title: 'Cold Open - The Alien Wizard Misunderstanding',
    approximateDurationSeconds: 70,
    mode: 'main_world',
    purpose:
      'Open with the central question and use the Tiny Alien Wizard as a contained joke about why AI can feel magical.',
    voiceoverDraft: `People talk about AI like there is some tiny alien wizard tucked inside your laptop, waiting for the right moment to write your email, build your website, finish your assignment, make a logo, fix your code, and somehow start a business for you while you make a coffee.

And honestly, fair enough.

The first time you use these tools properly, it can feel a bit ridiculous. You type one ordinary sentence, and the machine comes back with something that looks like work. Not always good work, obviously. Sometimes it is the confident kind of nonsense that deserves its own tiny office. But still, it feels like something happened.

So that is the question for this episode:

Is AI actually magic, or are we just bad at understanding it?`,
    notes:
      'Keep the humour staged and contained. The Wizard should be a misunderstanding device, not the lead character of the show.',
  },
  {
    id: 'setup',
    title: 'Setup - What AI Is Not',
    approximateDurationSeconds: 70,
    mode: 'main_world',
    purpose:
      'Clear away the two bad mental models: magic creature and boring autocomplete.',
    voiceoverDraft: `Let me spoil the obvious bit first.

AI is not magic.

It is not human. It is not a tiny person in the machine. It is not thinking exactly like you. And it is definitely not something you should blindly trust with every decision in your life.

But it is also not just boring autocomplete anymore.

That is where people get stuck. One side talks about AI like it is about to become an all-knowing digital genius. The other side talks about it like it is just guessing the next word and we can all go home.

Neither version is very useful.

So let us slow it down and build a better picture. Let's take it to the blackboard.`,
    notes:
      'This block earns the move into Blackboard Teaching Mode. The blackboard ritual phrase must stay here or at the start of the next block.',
  },
  {
    id: 'blackboard-explanation',
    title: 'Blackboard Explanation - Patterns To Useful Output',
    approximateDurationSeconds: 105,
    mode: 'blackboard_mode',
    purpose:
      'Define modern AI in plain English without pretending the simplified model explains every internal detail.',
    voiceoverDraft: `Let's take it to the blackboard.

At the simplest level, a lot of modern AI works by learning patterns from huge amounts of data, then using those patterns to produce useful outputs.

That sounds dry, so here is the less dry version.

It has seen enough examples of language, images, code, documents, and tasks that it can make a very educated prediction about what should come next, what belongs together, or what kind of answer would be useful in this situation.

That does not mean it understands the world the way you do. It does not have a little lived experience cupboard where it keeps memories of being late to the dentist.

But it can learn statistical patterns so deeply that the result feels surprisingly capable.

Input goes in. The model uses learned patterns. A useful output comes out.

That is the simple version. Useful, not complete. Which is basically the polite way of saying: do not turn this diagram into a religion.`,
    notes:
      'Use one calm diagram and held explanation. Blackboard mode should clarify, not become a wall of animated notes.',
  },
  {
    id: 'useful-and-wrong-example',
    title: 'Useful And Wrong - A Practical Email Example',
    approximateDurationSeconds: 70,
    mode: 'interface_mode',
    purpose:
      'Show the practical power of AI while introducing the difference between a useful draft and a trustworthy final answer.',
    voiceoverDraft: `Here is where it gets practical.

Say a customer emails your business with a complaint. You can ask an AI tool to draft a calm reply, summarise the issue, suggest next steps, and turn the whole thing into a tidy little checklist.

That is genuinely useful.

It can save time. It can help you sound less annoyed than you currently feel. It can give you a first draft when your brain is running on two biscuits and a vague sense of duty.

But useful does not mean correct.

The tool might miss a detail. It might invent a policy you never had. It might sound confident about something that needs a human to check the actual facts.`,
    notes:
      'Interface Mode should look practical and grounded, not like glossy SaaS advertising.',
  },
  {
    id: 'caveat-verify-moment',
    title: 'Caveat / Verify Moment - The Human Judgement Layer',
    approximateDurationSeconds: 65,
    mode: 'human_judgement_mode',
    purpose:
      'Explain the show’s practical trust rule: use AI for acceleration, not blind authority.',
    voiceoverDraft: `This is where the human judgement part matters.

If AI gives you a draft, great. Edit it.

If it gives you a summary, useful. Compare it with the original.

If it gives you a fact, a legal claim, a medical suggestion, a financial recommendation, or anything that could cause real trouble, check it properly.

This is the part people sometimes skip because the answer looks finished. It has paragraphs. It has confidence. It may even have bullet points, which are legally recognised as looking serious.

But the question is not, "Did the AI say something smoothly?"

The question is, "Can I verify this before I act on it?"`,
    notes:
      'Use Verify Stamp and Cabinet of Caveats if assets exist. Keep the tone practical, not fear-based.',
  },
  {
    id: 'close-next-episode-bridge',
    title: 'Close - Clear Mental Model And Series Promise',
    approximateDurationSeconds: 40,
    mode: 'main_world',
    purpose:
      'Land the episode with a useful mental model and bridge into the next episode without becoming grandiose.',
    voiceoverDraft: `So no, AI is not magic.

But if you do not understand what is happening, it can absolutely feel like magic.

A better way to think about it is this: AI is a powerful pattern tool. It can help you draft, explore, summarise, plan, create, and check your thinking. But it still needs human judgement around it.

That is what C4Sight is here to make clearer.

Next, we will look at why AI suddenly seemed to arrive everywhere at once, and why that timing matters more than most people realise.`,
    notes:
      'End plainly. No fake-profound closing. Do not make the final line sound like a trailer voice.',
  },
] as const satisfies readonly Episode01ScriptBlock[];

export const episode01PlannedDurationSeconds =
  episode01ScriptBlocks.reduce(
    (total, block) => total + block.approximateDurationSeconds,
    0,
  );
