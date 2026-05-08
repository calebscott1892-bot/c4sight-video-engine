import {c4SightBrand} from './brand';
import type {VideoDefinition} from '../types/video';

export const motionTestVideo: VideoDefinition = {
  id: 'C4SightMotionTest',
  title: 'What AI Actually Is',
  width: 1920,
  height: 1080,
  fps: 30,
  durationSeconds: 18,
  brand: c4SightBrand,
  scenes: [
    {
      id: 'placeholder-logo-intro',
      type: 'logoIntro',
      start: 0,
      duration: 3.4,
      logoAsset: c4SightBrand.logoAsset,
      title: 'C4Sight',
      subtitle: 'AI education from C4 Studios',
    },
    {
      id: 'ai-diagram',
      type: 'chalkDiagram',
      start: 3.25,
      duration: 14.75,
      title: 'What is AI actually doing?',
      titleWriteStart: 0.25,
      titleWriteDuration: 2.4,
      diagramStart: 4,
      diagram: {
        nodes: [
          {id: 'input', label: 'Input', x: 270, y: 560, width: 320, height: 120},
          {
            id: 'patterns',
            label: 'Pattern Matching',
            x: 735,
            y: 560,
            width: 450,
            height: 120,
          },
          {
            id: 'output',
            label: 'Useful Output',
            x: 1330,
            y: 560,
            width: 360,
            height: 120,
          },
        ],
        arrows: [
          {id: 'input-to-patterns', from: 'input', to: 'patterns'},
          {id: 'patterns-to-output', from: 'patterns', to: 'output'},
        ],
      },
    },
  ],
  captions: [
    {
      id: 'plain-language-definition',
      start: 9,
      duration: 7.75,
      text: "AI is not magic. It's software that predicts useful patterns from data.",
    },
  ],
};
