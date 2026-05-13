export type Episode01AssetNeed = {
  assetId: string;
  purpose: string;
  priority: 'minimum' | 'supporting';
};

export type Episode01AssetNeedGroup =
  | 'mainWorld'
  | 'host'
  | 'wizard'
  | 'blackboard'
  | 'recurringDevices'
  | 'interfaceMode'
  | 'humanJudgementMode'
  | 'transitions'
  | 'audio';

export const episode01AssetNeeds = {
  mainWorld: [
    {
      assetId: 'main_world.style_frame',
      purpose: 'Approved default visual world for hooks and connective tissue.',
      priority: 'minimum',
    },
    {
      assetId: 'main_world.environment_base',
      purpose: 'Base environment for non-blackboard sections.',
      priority: 'minimum',
    },
    {
      assetId: 'main_world.episode01_magic_question_styleframe',
      purpose: 'Central question and opening misconception styleframe.',
      priority: 'minimum',
    },
    {
      assetId: 'main_world.character_scale_reference',
      purpose: 'Scale reference for Host, Wizard, cards, and text hierarchy.',
      priority: 'minimum',
    },
    {
      assetId: 'main_world.metaphor_stage',
      purpose: 'Contained stage for the Tiny Alien Wizard misunderstanding.',
      priority: 'minimum',
    },
    {
      assetId: 'prop.laptop',
      purpose: 'Opening laptop metaphor prop.',
      priority: 'minimum',
    },
    {
      assetId: 'scene.not-magic-correction',
      purpose: 'Correction keyframe for the "AI is not magic" beat.',
      priority: 'minimum',
    },
    {
      assetId: 'scene.roadmap',
      purpose: 'Next episode bridge and series roadmap beat.',
      priority: 'minimum',
    },
    {
      assetId: 'icon.roadmap',
      purpose: 'Simple roadmap marker for the close and next episode bridge.',
      priority: 'minimum',
    },
  ],
  host: [
    {
      assetId: 'host.base',
      purpose: 'Baseline presenter for Main Animated World and final mental model.',
      priority: 'minimum',
    },
    {
      assetId: 'host.expression.neutral',
      purpose: 'Neutral held explanation and bridge beats.',
      priority: 'minimum',
    },
    {
      assetId: 'host.expression.curious',
      purpose: 'Question-led opening and setup moments.',
      priority: 'minimum',
    },
    {
      assetId: 'host.expression.sceptical',
      purpose: 'Hype correction and "not magic" beats.',
      priority: 'minimum',
    },
    {
      assetId: 'host.expression.reassuring',
      purpose: 'Closing mental model and practical reset.',
      priority: 'minimum',
    },
    {
      assetId: 'host.blackboard.pointing',
      purpose: 'Blackboard ritual and diagram emphasis.',
      priority: 'minimum',
    },
    {
      assetId: 'host.blackboard.writing',
      purpose: 'Board definition and diagram setup.',
      priority: 'minimum',
    },
    {
      assetId: 'host.blackboard.listening',
      purpose: 'Held blackboard caveat moments.',
      priority: 'minimum',
    },
  ],
  wizard: [
    {
      assetId: 'mascot_wizard.neutral',
      purpose: 'Baseline Tiny Alien Wizard reaction.',
      priority: 'minimum',
    },
    {
      assetId: 'mascot_wizard.confident',
      purpose: 'Opening overconfident magic-helper gag.',
      priority: 'minimum',
    },
    {
      assetId: 'mascot_wizard.confused',
      purpose: 'Reaction after "AI is not magic."',
      priority: 'minimum',
    },
    {
      assetId: 'mascot_wizard.freeze',
      purpose: 'Hard correction freeze beat.',
      priority: 'minimum',
    },
    {
      assetId: 'mascot_wizard.overwhelmed',
      purpose: 'Capability-card accumulation beat.',
      priority: 'minimum',
    },
    {
      assetId: 'mascot_wizard.wizard_chalk_wand',
      purpose: 'Opening misunderstanding prop and cross-out target.',
      priority: 'minimum',
    },
    {
      assetId: 'mascot_wizard.sad',
      purpose: 'Optional disappointment reaction if the animatic needs it.',
      priority: 'supporting',
    },
    {
      assetId: 'mascot_wizard.excited',
      purpose: 'Optional curious return when nuance appears.',
      priority: 'supporting',
    },
  ],
  blackboard: [
    {
      assetId: 'blackboard_mode.style_frame',
      purpose: 'Approved visual look for Blackboard Teaching Mode.',
      priority: 'minimum',
    },
    {
      assetId: 'blackboard_mode.board_background',
      purpose: 'Board surface for teaching beats.',
      priority: 'minimum',
    },
    {
      assetId: 'blackboard_mode.teaching_layout_reference',
      purpose: 'Safe-margin and hierarchy guide for board scenes.',
      priority: 'minimum',
    },
    {
      assetId: 'blackboard_mode.data_patterns_output_diagram',
      purpose: 'Core Input/Data -> Patterns/Model -> Useful Output diagram.',
      priority: 'minimum',
    },
    {
      assetId: 'blackboard_mode.model_box',
      purpose: 'Reusable simplified model visual.',
      priority: 'minimum',
    },
    {
      assetId: 'blackboard_mode.chalk_dust_overlay',
      purpose: 'Subtle texture support for board scenes.',
      priority: 'supporting',
    },
  ],
  recurringDevices: [
    {
      assetId: 'recurring.verify_stamp',
      purpose: 'Marks claims and facts that need checking.',
      priority: 'minimum',
    },
    {
      assetId: 'recurring.cabinet_of_caveats',
      purpose: 'Organised nuance for limitations and high-stakes caveats.',
      priority: 'minimum',
    },
    {
      assetId: 'recurring.toolbox',
      purpose: 'Represents AI as a practical collection of tools.',
      priority: 'minimum',
    },
    {
      assetId: 'recurring.confidently_wrong_office_worker',
      purpose: 'Represents polished but wrong output.',
      priority: 'minimum',
    },
    {
      assetId: 'recurring.tiny_person_machine',
      purpose: 'Misconception cross-out: not a tiny person inside the machine.',
      priority: 'minimum',
    },
    {
      assetId: 'recurring.brain_thinking_crossout',
      purpose: 'Misconception cross-out: not human-style thinking.',
      priority: 'minimum',
    },
    {
      assetId: 'recurring.blind_trust_crossout',
      purpose: 'Misconception cross-out: do not blindly trust AI.',
      priority: 'minimum',
    },
  ],
  interfaceMode: [
    {
      assetId: 'interface_mode.style_frame',
      purpose: 'Approved visual look for prompts, outputs, tools, and documents.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.tool_window',
      purpose: 'Primary frame for practical AI workflow examples.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.prompt_card',
      purpose: 'Input/prompt side of the customer email example.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.output_card',
      purpose: 'Generic output support for not-autocomplete comparison.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.draft_output_card',
      purpose: 'Draft reply output in the customer email example.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.stylised_document_panel',
      purpose: 'Summary and document-analysis support.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.workflow_nodes',
      purpose: 'Workflow/plan expansion from autocomplete.',
      priority: 'minimum',
    },
    {
      assetId: 'interface_mode.verification_ui_state',
      purpose: 'Interface evidence for checking a generated answer.',
      priority: 'minimum',
    },
    {
      assetId: 'prop.autocomplete-line',
      purpose: 'Simple autocomplete visual before it expands.',
      priority: 'minimum',
    },
    {
      assetId: 'card.email',
      purpose: 'Customer email input card.',
      priority: 'minimum',
    },
    {
      assetId: 'card.website',
      purpose: 'Opening capability card.',
      priority: 'supporting',
    },
    {
      assetId: 'card.assignment',
      purpose: 'Opening capability card.',
      priority: 'supporting',
    },
    {
      assetId: 'card.code',
      purpose: 'Opening and not-autocomplete capability card.',
      priority: 'minimum',
    },
    {
      assetId: 'card.image',
      purpose: 'Opening capability card for image/logo creation.',
      priority: 'supporting',
    },
    {
      assetId: 'card.summary',
      purpose: 'Opening and not-autocomplete capability card.',
      priority: 'minimum',
    },
    {
      assetId: 'card.business-idea',
      purpose: 'Opening capability card.',
      priority: 'supporting',
    },
    {
      assetId: 'card.planning',
      purpose: 'Plan output in the not-autocomplete comparison.',
      priority: 'minimum',
    },
  ],
  humanJudgementMode: [
    {
      assetId: 'human_judgement_mode.style_frame',
      purpose: 'Approved grounded visual mode for trust and decisions.',
      priority: 'minimum',
    },
    {
      assetId: 'human_judgement_mode.decision_scene_keyframe',
      purpose: 'Human checking before action.',
      priority: 'minimum',
    },
    {
      assetId: 'human_judgement_mode.risk_choice_scene',
      purpose: 'Risk and caveat decision frame.',
      priority: 'minimum',
    },
    {
      assetId: 'prop.magnifying-glass',
      purpose: 'Checking/verification prop.',
      priority: 'minimum',
    },
    {
      assetId: 'prop.warning',
      purpose: 'Risk warning marker.',
      priority: 'minimum',
    },
    {
      assetId: 'prop.checklist',
      purpose: 'Checklist from the customer email workflow.',
      priority: 'minimum',
    },
    {
      assetId: 'icon.verification',
      purpose: 'Verification concept icon.',
      priority: 'minimum',
    },
    {
      assetId: 'icon.judgement',
      purpose: 'Human judgement concept icon.',
      priority: 'minimum',
    },
    {
      assetId: 'icon.trust-risk',
      purpose: 'Trust/risk concept icon.',
      priority: 'minimum',
    },
  ],
  transitions: [
    {
      assetId: 'transition.blackboard_ritual_transition',
      purpose: 'Primary mode switch into blackboard teaching.',
      priority: 'minimum',
    },
    {
      assetId: 'transition.take_to_blackboard_transition',
      purpose: 'Transition support for the ritual line.',
      priority: 'minimum',
    },
    {
      assetId: 'transition.chalk_dust_wipe',
      purpose: 'Board reset/soft transition support.',
      priority: 'supporting',
    },
    {
      assetId: 'transition.eraser_wipe',
      purpose: 'Optional blackboard reset.',
      priority: 'supporting',
    },
  ],
  audio: [
    {
      assetId: 'audio.two_chalk_taps',
      purpose: 'Audio identity for the blackboard ritual.',
      priority: 'minimum',
    },
    {
      assetId: 'audio.verify_stamp_hit',
      purpose: 'Optional satisfying verification cue.',
      priority: 'supporting',
    },
    {
      assetId: 'audio.blackboard_transition_scribble',
      purpose: 'Optional blackboard texture cue.',
      priority: 'supporting',
    },
  ],
} as const satisfies Record<
  Episode01AssetNeedGroup,
  readonly Episode01AssetNeed[]
>;

export const episode01RequiredAssetIds = [
  ...new Set(
    Object.values(episode01AssetNeeds)
      .flat()
      .filter((asset) => asset.priority === 'minimum')
      .map((asset) => asset.assetId),
  ),
].sort();
