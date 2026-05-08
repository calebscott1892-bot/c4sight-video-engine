import {videoLayout} from './blackboardLayout';

export const c4Safe = {
  outer: 120,
  inner: 180,
  titleTop: 120,
  titleHeight: 150,
  captionTop: 862,
  captionHeight: 140,
};

export const c4SceneZones = {
  title: {
    x: 180,
    y: 118,
    width: 1180,
    height: 150,
  },
  logo: {
    x: 1560,
    y: 100,
    width: 210,
    height: 86,
  },
  center: {
    x: 290,
    y: 300,
    width: 1340,
    height: 430,
  },
  left: {
    x: 210,
    y: 320,
    width: 690,
    height: 470,
  },
  right: {
    x: 1020,
    y: 320,
    width: 690,
    height: 470,
  },
  hookChaos: {
    x: 170,
    y: 280,
    width: 1580,
    height: 520,
  },
  diagram: {
    x: 270,
    y: 410,
    width: 1380,
    height: 230,
  },
  warning: {
    x: 330,
    y: 330,
    width: 1260,
    height: 460,
  },
  quote: {
    x: 240,
    y: 300,
    width: 1440,
    height: 360,
  },
  roadmap: {
    x: 260,
    y: 350,
    width: 1400,
    height: 360,
  },
  caption: {
    x: 240,
    y: 862,
    width: 1440,
    height: 140,
  },
};

export const c4SceneGrammar = {
  width: videoLayout.width,
  height: videoLayout.height,
  fps: videoLayout.fps,
  safe: c4Safe,
  zones: c4SceneZones,
  spacing: {
    group: 96,
    related: 52,
    label: 28,
    compact: 18,
  },
  camera: {
    stillScale: 1.015,
    teachingScale: 1.025,
    hookScale: 1.035,
  },
};

export type C4SceneArchetype =
  | 'centeredTeaching'
  | 'leftRightComparison'
  | 'hookChaos'
  | 'simpleDiagram'
  | 'warning'
  | 'quoteThesis'
  | 'roadmap';
