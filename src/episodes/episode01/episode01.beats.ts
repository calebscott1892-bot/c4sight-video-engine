import type {Episode01VisualMode} from './episode01.script';

export type Episode01RecurringDevice =
  | 'Tiny Alien Wizard'
  | 'Verify Stamp'
  | 'Cabinet of Caveats'
  | 'Confidently Wrong Office Worker'
  | 'Toolbox'
  | 'Scam Guru';

export type Episode01MotionEnergy = 'lively' | 'held_still';

export type Episode01VisualBeat = {
  id: string;
  scriptBlockId: string;
  visualMode: Episode01VisualMode;
  visualDescription: string;
  requiredAssets: readonly string[];
  recurringDevices: readonly Episode01RecurringDevice[];
  motionEnergy: Episode01MotionEnergy;
  transitionIn: string;
  transitionOut: string;
};

export const episode01VisualBeats = [
  {
    id: 'beat-001-laptop-myth',
    scriptBlockId: 'cold-open',
    visualMode: 'main_world',
    visualDescription:
      'Open in Main Animated World with the laptop metaphor staged cleanly. The Tiny Alien Wizard is present but contained, looking ready to help in a slightly overconfident way.',
    requiredAssets: [
      'main_world.style_frame',
      'main_world.environment_base',
      'main_world.metaphor_stage',
      'host.base',
      'mascot_wizard.confident',
      'prop.laptop',
      'mascot_wizard.wizard_chalk_wand',
    ],
    recurringDevices: ['Tiny Alien Wizard'],
    motionEnergy: 'lively',
    transitionIn: 'cold_open_start',
    transitionOut: 'capability_cards_accumulate',
  },
  {
    id: 'beat-002-capability-cards',
    scriptBlockId: 'cold-open',
    visualMode: 'main_world',
    visualDescription:
      'Capability cards appear around the staged gag: email, website, assignment, logo/image, code, summary, and business idea. Keep the composition readable, not chaotic.',
    requiredAssets: [
      'card.email',
      'card.website',
      'card.assignment',
      'card.image',
      'card.code',
      'card.summary',
      'card.business-idea',
      'mascot_wizard.overwhelmed',
    ],
    recurringDevices: ['Tiny Alien Wizard'],
    motionEnergy: 'lively',
    transitionIn: 'capability_cards_accumulate',
    transitionOut: 'held_question',
  },
  {
    id: 'beat-003-central-question-hold',
    scriptBlockId: 'cold-open',
    visualMode: 'main_world',
    visualDescription:
      'Hold the central question clearly on screen. The Wizard pauses rather than continuing to perform.',
    requiredAssets: [
      'main_world.episode01_magic_question_styleframe',
      'mascot_wizard.neutral',
    ],
    recurringDevices: ['Tiny Alien Wizard'],
    motionEnergy: 'held_still',
    transitionIn: 'held_question',
    transitionOut: 'correction_freeze',
  },
  {
    id: 'beat-004-not-magic-correction',
    scriptBlockId: 'setup',
    visualMode: 'main_world',
    visualDescription:
      'Correction beat: AI is not magic. The Wizard freezes, then becomes confused. Cross out the wand, tiny person in machine, and blind-trust idea without overcrowding.',
    requiredAssets: [
      'scene.not-magic-correction',
      'mascot_wizard.freeze',
      'mascot_wizard.confused',
      'recurring.tiny_person_machine',
      'recurring.blind_trust_crossout',
      'recurring.brain_thinking_crossout',
      'mascot_wizard.wizard_chalk_wand',
    ],
    recurringDevices: ['Tiny Alien Wizard'],
    motionEnergy: 'lively',
    transitionIn: 'correction_freeze',
    transitionOut: 'autocomplete_comparison',
  },
  {
    id: 'beat-005-not-boring-autocomplete',
    scriptBlockId: 'setup',
    visualMode: 'interface_mode',
    visualDescription:
      'A simple autocomplete line expands into richer outputs: plan card, code card, and document summary. This should feel useful, not glossy.',
    requiredAssets: [
      'interface_mode.style_frame',
      'prop.autocomplete-line',
      'interface_mode.output_card',
      'interface_mode.workflow_nodes',
      'card.code',
      'card.summary',
      'card.planning',
    ],
    recurringDevices: [],
    motionEnergy: 'lively',
    transitionIn: 'autocomplete_comparison',
    transitionOut: 'blackboard_ritual_transition',
  },
  {
    id: 'beat-006-ritual-to-blackboard',
    scriptBlockId: 'setup',
    visualMode: 'main_world',
    visualDescription:
      'The host cues the ritual line, "Let us take it to the blackboard." Two chalk taps motivate the board mode rather than cutting there randomly.',
    requiredAssets: [
      'host.blackboard.pointing',
      'transition.blackboard_ritual_transition',
      'transition.take_to_blackboard_transition',
      'audio.two_chalk_taps',
    ],
    recurringDevices: [],
    motionEnergy: 'lively',
    transitionIn: 'blackboard_ritual_setup',
    transitionOut: 'blackboard_ritual_transition',
  },
  {
    id: 'beat-007-pattern-definition',
    scriptBlockId: 'blackboard-explanation',
    visualMode: 'blackboard_mode',
    visualDescription:
      'Blackboard mode begins after the ritual. The board holds a single sentence definition before the diagram builds.',
    requiredAssets: [
      'blackboard_mode.style_frame',
      'blackboard_mode.board_background',
      'blackboard_mode.teaching_layout_reference',
      'host.blackboard.writing',
    ],
    recurringDevices: [],
    motionEnergy: 'held_still',
    transitionIn: 'blackboard_ritual_transition',
    transitionOut: 'diagram_build',
  },
  {
    id: 'beat-008-data-patterns-output',
    scriptBlockId: 'blackboard-explanation',
    visualMode: 'blackboard_mode',
    visualDescription:
      'Build the core diagram: Input/Data -> Learned Patterns/Model -> Useful Output. Keep it calm and large enough for mobile.',
    requiredAssets: [
      'blackboard_mode.data_patterns_output_diagram',
      'blackboard_mode.model_box',
      'blackboard_mode.chalk_dust_overlay',
      'host.blackboard.pointing',
    ],
    recurringDevices: [],
    motionEnergy: 'lively',
    transitionIn: 'diagram_build',
    transitionOut: 'definition_hold',
  },
  {
    id: 'beat-009-simple-model-caveat',
    scriptBlockId: 'blackboard-explanation',
    visualMode: 'blackboard_mode',
    visualDescription:
      'Hold on the simple model and add one caveat note: useful, not complete. This should slow down rather than add more animation.',
    requiredAssets: [
      'blackboard_mode.model_box',
      'recurring.cabinet_of_caveats',
      'host.blackboard.listening',
    ],
    recurringDevices: ['Cabinet of Caveats'],
    motionEnergy: 'held_still',
    transitionIn: 'definition_hold',
    transitionOut: 'interface_example_shift',
  },
  {
    id: 'beat-010-customer-email-example',
    scriptBlockId: 'useful-and-wrong-example',
    visualMode: 'interface_mode',
    visualDescription:
      'Switch to Interface Mode. Customer email becomes a draft reply, summary, and checklist. The example should feel like a normal business workflow.',
    requiredAssets: [
      'interface_mode.tool_window',
      'interface_mode.prompt_card',
      'interface_mode.draft_output_card',
      'interface_mode.stylised_document_panel',
      'card.email',
      'prop.checklist',
    ],
    recurringDevices: ['Toolbox'],
    motionEnergy: 'lively',
    transitionIn: 'interface_example_shift',
    transitionOut: 'useful_not_correct_hold',
  },
  {
    id: 'beat-011-useful-not-correct',
    scriptBlockId: 'useful-and-wrong-example',
    visualMode: 'interface_mode',
    visualDescription:
      'Hold the draft output beside small warning flags: possible missed detail, invented policy, confident tone. No panic, just a practical pause.',
    requiredAssets: [
      'interface_mode.verification_ui_state',
      'prop.warning',
      'recurring.confidently_wrong_office_worker',
    ],
    recurringDevices: ['Confidently Wrong Office Worker'],
    motionEnergy: 'held_still',
    transitionIn: 'useful_not_correct_hold',
    transitionOut: 'verify_stamp_shift',
  },
  {
    id: 'beat-012-verify-rule',
    scriptBlockId: 'caveat-verify-moment',
    visualMode: 'human_judgement_mode',
    visualDescription:
      'Human Judgement Mode. Verify Stamp marks facts, claims, and high-stakes decisions. The host points to the difference between draft, summary, and decision.',
    requiredAssets: [
      'human_judgement_mode.style_frame',
      'human_judgement_mode.decision_scene_keyframe',
      'recurring.verify_stamp',
      'prop.magnifying-glass',
      'icon.verification',
      'icon.judgement',
    ],
    recurringDevices: ['Verify Stamp'],
    motionEnergy: 'lively',
    transitionIn: 'verify_stamp_shift',
    transitionOut: 'caveat_cabinet_hold',
  },
  {
    id: 'beat-013-cabinet-of-caveats',
    scriptBlockId: 'caveat-verify-moment',
    visualMode: 'human_judgement_mode',
    visualDescription:
      'A restrained Cabinet of Caveats moment: facts, legal, medical, financial, business risk. The gag is organised nuance, not noise.',
    requiredAssets: [
      'recurring.cabinet_of_caveats',
      'human_judgement_mode.risk_choice_scene',
      'icon.trust-risk',
      'prop.warning',
    ],
    recurringDevices: ['Cabinet of Caveats', 'Verify Stamp'],
    motionEnergy: 'held_still',
    transitionIn: 'caveat_cabinet_hold',
    transitionOut: 'main_world_reset',
  },
  {
    id: 'beat-014-clear-mental-model',
    scriptBlockId: 'close-next-episode-bridge',
    visualMode: 'main_world',
    visualDescription:
      'Return to Main Animated World. The final mental model lands: powerful pattern tool plus human judgement. Keep the frame calm and confident.',
    requiredAssets: [
      'main_world.environment_base',
      'main_world.character_scale_reference',
      'host.expression.reassuring',
      'recurring.toolbox',
      'icon.roadmap',
    ],
    recurringDevices: ['Toolbox'],
    motionEnergy: 'held_still',
    transitionIn: 'main_world_reset',
    transitionOut: 'next_episode_bridge',
  },
  {
    id: 'beat-015-next-episode-bridge',
    scriptBlockId: 'close-next-episode-bridge',
    visualMode: 'main_world',
    visualDescription:
      'Simple series bridge to why AI arrived everywhere at once. Do not create a grand trailer ending.',
    requiredAssets: [
      'scene.roadmap',
      'main_world.style_frame',
      'host.expression.neutral',
    ],
    recurringDevices: [],
    motionEnergy: 'held_still',
    transitionIn: 'next_episode_bridge',
    transitionOut: 'end_card_hold',
  },
] as const satisfies readonly Episode01VisualBeat[];
