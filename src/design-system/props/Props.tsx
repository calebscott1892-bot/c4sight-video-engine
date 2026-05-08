import type {ReactNode} from 'react';
import {ManifestAsset} from '../assets';
import type {C4SightAssetId} from '../c4sightAssetManifest';

export type C4SightPropKind =
  | 'wand'
  | 'saucepan'
  | 'bucket'
  | 'laptop'
  | 'emailCard'
  | 'websiteCard'
  | 'assignmentCard'
  | 'codeCard'
  | 'imageCard'
  | 'summaryCard'
  | 'businessIdeaCard'
  | 'magnifyingGlass'
  | 'warningIcon'
  | 'checklist'
  | 'eraser'
  | 'poof'
  | 'spark'
  | 'burst';

export type C4SightIconKind =
  | 'writing'
  | 'summarising'
  | 'coding'
  | 'explaining'
  | 'researching'
  | 'automating'
  | 'image-gen'
  | 'video-gen'
  | 'voice'
  | 'planning'
  | 'tutoring'
  | 'business'
  | 'verification'
  | 'hallucination'
  | 'creativity'
  | 'judgement'
  | 'trust'
  | 'local'
  | 'cloud'
  | 'agents'
  | 'connectors'
  | 'mcp'
  | 'privacy'
  | 'jobs'
  | 'money'
  | 'roadmap';

type BasePropProps = {
  x: number;
  y: number;
  startFrame: number;
  durationFrames?: number;
  scale?: number;
  rotation?: number;
};

type CardKind =
  | 'emailCard'
  | 'websiteCard'
  | 'assignmentCard'
  | 'codeCard'
  | 'imageCard'
  | 'summaryCard'
  | 'businessIdeaCard';

const propAssetIds: Record<C4SightPropKind, C4SightAssetId> = {
  wand: 'prop.wand',
  saucepan: 'prop.saucepan',
  bucket: 'prop.bucket',
  laptop: 'prop.laptop',
  emailCard: 'card.email',
  websiteCard: 'card.website',
  assignmentCard: 'card.assignment',
  codeCard: 'card.code',
  imageCard: 'card.image',
  summaryCard: 'card.summary',
  businessIdeaCard: 'card.business-idea',
  magnifyingGlass: 'prop.magnifying-glass',
  warningIcon: 'prop.warning',
  checklist: 'prop.checklist',
  eraser: 'prop.eraser',
  poof: 'effect.poof',
  spark: 'effect.spark',
  burst: 'effect.freeze-burst',
};

const iconAssetIds: Partial<Record<C4SightIconKind, C4SightAssetId>> = {
  writing: 'icon.writing',
  summarising: 'icon.summarising',
  coding: 'icon.coding',
  explaining: 'icon.explaining',
  researching: 'icon.researching',
  automating: 'icon.automating',
  'image-gen': 'icon.image-generation',
  planning: 'icon.planning',
  verification: 'icon.verification',
  hallucination: 'icon.hallucination',
  judgement: 'icon.judgement',
  trust: 'icon.trust-risk',
  agents: 'icon.agents',
  connectors: 'icon.connectors',
  mcp: 'icon.mcp',
  privacy: 'icon.privacy',
  roadmap: 'icon.roadmap',
};

const cardLabels: Record<CardKind, string> = {
  emailCard: 'Email',
  websiteCard: 'Website',
  assignmentCard: 'Assignment',
  codeCard: 'Code',
  imageCard: 'Image',
  summaryCard: 'Summary',
  businessIdeaCard: 'Business idea',
};

const propSize = (kind: C4SightPropKind) => {
  if (
    kind === 'emailCard' ||
    kind === 'websiteCard' ||
    kind === 'assignmentCard' ||
    kind === 'codeCard' ||
    kind === 'imageCard' ||
    kind === 'summaryCard' ||
    kind === 'businessIdeaCard'
  ) {
    return {width: kind === 'businessIdeaCard' ? 280 : 230, height: 92};
  }

  if (kind === 'laptop') {
    return {width: 190, height: 130};
  }

  if (kind === 'poof' || kind === 'burst') {
    return {width: 150, height: 130};
  }

  return {width: 120, height: 120};
};

export const C4SightCardProp = ({
  kind,
  x,
  y,
  width,
  label,
  scale = 1,
  rotation = 0,
}: {
  kind: CardKind;
  x: number;
  y: number;
  startFrame: number;
  width?: number;
  label?: ReactNode;
  scale?: number;
  rotation?: number;
}) => {
  const size = propSize(kind);
  const cardWidth = width ?? size.width;
  const cardHeight = size.height;

  return (
    <div
      className="c4-ds-card-prop"
      style={{
        left: x,
        top: y,
        width: cardWidth,
        height: cardHeight,
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    >
      <ManifestAsset
        assetId={propAssetIds[kind]}
        width={cardWidth}
        height={cardHeight}
        placeholderLabel={`Card: ${label ?? cardLabels[kind]}`}
      />
      {label ? <div className="c4-asset-card-label">{label}</div> : null}
    </div>
  );
};

export const C4SightIconSymbol = ({
  kind,
  size = 72,
}: {
  kind: C4SightIconKind;
  startFrame: number;
  size?: number;
  color?: string;
  strokeWidth?: number;
}) => {
  const assetId = iconAssetIds[kind];

  if (!assetId) {
    return (
      <div className="c4-asset-placeholder c4-asset-placeholder--icon" style={{width: size, height: size}}>
        <div className="c4-asset-placeholder__status">MISSING ICON</div>
        <div className="c4-asset-placeholder__name">{kind}</div>
      </div>
    );
  }

  return (
    <ManifestAsset
      assetId={assetId}
      width={size}
      height={size}
      placeholderLabel={`Icon: ${kind}`}
      className="c4-ds-icon-symbol"
    />
  );
};

export const C4SightProp = ({
  kind,
  x,
  y,
  scale = 1,
  rotation = 0,
}: BasePropProps & {kind: C4SightPropKind}) => {
  if (
    kind === 'emailCard' ||
    kind === 'websiteCard' ||
    kind === 'assignmentCard' ||
    kind === 'codeCard' ||
    kind === 'imageCard' ||
    kind === 'summaryCard' ||
    kind === 'businessIdeaCard'
  ) {
    return (
      <C4SightCardProp
        kind={kind}
        x={x}
        y={y}
        startFrame={0}
        scale={scale}
        rotation={rotation}
      />
    );
  }

  const size = propSize(kind);

  return (
    <div
      className={['c4-ds-prop', `c4-ds-prop--${kind}`].join(' ')}
      style={{
        left: x,
        top: y,
        width: size.width,
        height: size.height,
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    >
      <ManifestAsset
        assetId={propAssetIds[kind]}
        width={size.width}
        height={size.height}
        placeholderLabel={`Prop: ${kind}`}
      />
    </div>
  );
};

export const C4SightEraserWipeEffect = ({
  x,
  y,
  width,
  height,
  startFrame,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  startFrame: number;
  durationFrames?: number;
}) => (
  <ManifestAsset
    assetId="effect.eraser-smear"
    className="c4-ds-eraser-wipe"
    width={width}
    height={height}
    style={{left: x, top: y}}
    fit="cover"
    placeholderLabel={`Eraser wipe effect (${startFrame})`}
  />
);

export const C4SightPropLabel = ({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  startFrame: number;
  children: ReactNode;
}) => (
  <div className="c4-ds-prop-label" style={{left: x, top: y}}>
    {children}
  </div>
);
