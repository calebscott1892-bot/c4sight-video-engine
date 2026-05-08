export type BrandConfig = {
  name: string;
  parentBrand: string;
  tagline: string;
  logoAsset?: string;
};

export type CaptionCue = {
  id: string;
  start: number;
  duration: number;
  text: string;
};

export type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type DiagramArrow = {
  id: string;
  from: string;
  to: string;
  label?: string;
};

export type DiagramSpec = {
  nodes: DiagramNode[];
  arrows: DiagramArrow[];
};

export type BaseScene = {
  id: string;
  start: number;
  duration: number;
};

export type LogoIntroScene = BaseScene & {
  type: 'logoIntro';
  logoAsset?: string;
  title: string;
  subtitle: string;
};

export type ChalkDiagramScene = BaseScene & {
  type: 'chalkDiagram';
  title: string;
  titleWriteStart: number;
  titleWriteDuration: number;
  diagramStart: number;
  diagram: DiagramSpec;
};

export type SceneDefinition = LogoIntroScene | ChalkDiagramScene;

export type VideoDefinition = {
  id: string;
  title: string;
  width: number;
  height: number;
  fps: number;
  durationSeconds: number;
  brand: BrandConfig;
  scenes: SceneDefinition[];
  captions: CaptionCue[];
};
