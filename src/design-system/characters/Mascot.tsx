import type {CSSProperties, ReactNode} from 'react';
import {ManifestAsset} from '../assets';
import type {C4SightAssetId} from '../c4sightAssetManifest';
import {c4sightTokens} from '../c4sightTokens';
import {
  C4SightWizard,
  type C4SightWizardExpression,
  type C4SightWizardPose,
} from '../external/C4SightWizard';

export type C4SightMascotPose =
  | 'neutral'
  | 'confident'
  | 'confused'
  | 'sad'
  | 'overwhelmed'
  | 'excited'
  | 'walkingAway'
  | 'runningBack'
  | 'presenting'
  | 'pointing'
  | 'holdingProp';

type MascotProps = {
  pose?: C4SightMascotPose;
  x: number;
  y: number;
  startFrame: number;
  durationFrames?: number;
  scale?: number;
  rotation?: number;
  prop?: ReactNode;
  useSVG?: boolean;
  className?: string;
  style?: CSSProperties;
};

const poseAssetIds: Record<C4SightMascotPose, C4SightAssetId> = {
  neutral: 'character.mascot.neutral',
  confident: 'character.mascot.confident',
  confused: 'character.mascot.confused',
  sad: 'character.mascot.sad',
  overwhelmed: 'character.mascot.overwhelmed',
  excited: 'character.mascot.excited',
  walkingAway: 'character.mascot.walking-away',
  runningBack: 'character.mascot.running-back',
  presenting: 'character.mascot.presenting',
  pointing: 'character.mascot.pointing',
  holdingProp: 'character.mascot.holding-prop',
};

const poseWizardProps: Record<
  C4SightMascotPose,
  {
    expression: C4SightWizardExpression;
    pose?: Exclude<C4SightWizardPose, null>;
  }
> = {
  neutral: {expression: 'neutral'},
  confident: {expression: 'smug', pose: 'credit'},
  confused: {expression: 'panicked'},
  sad: {expression: 'sulking'},
  overwhelmed: {expression: 'panicked'},
  excited: {expression: 'smug'},
  walkingAway: {expression: 'disappointed', pose: 'debunked'},
  runningBack: {expression: 'neutral'},
  presenting: {expression: 'neutral', pose: 'credit'},
  pointing: {expression: 'smug', pose: 'credit'},
  holdingProp: {expression: 'panicked', pose: 'stealing'},
};

export const C4SightMascot = ({
  pose = 'neutral',
  x,
  y,
  scale = 1,
  rotation = 0,
  prop,
  useSVG = true,
  className,
  style,
}: MascotProps) => {
  const width = c4sightTokens.assetDimensions.mascot.width * scale;
  const height = c4sightTokens.assetDimensions.mascot.height * scale;
  const wizardSize = Math.min(width, (height * 64) / 92);
  const wizardProps = poseWizardProps[pose];

  return (
    <div
      className={['c4-ds-mascot', `c4-ds-mascot--${pose}`, className]
        .filter(Boolean)
        .join(' ')}
      style={{
        left: x,
        top: y,
        width,
        height,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
    >
      {useSVG ? (
        <C4SightWizard
          expression={wizardProps.expression}
          pose={wizardProps.pose ?? null}
          size={wizardSize}
          style={{
            width,
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      ) : (
        <ManifestAsset
          assetId={poseAssetIds[pose]}
          width={width}
          height={height}
          placeholderLabel={`Mascot: ${pose}`}
        />
      )}
      {pose === 'holdingProp' && prop ? (
        <div
          className="c4-ds-mascot__held-prop"
          style={{
            left: width * 0.64,
            top: height * 0.44,
          }}
        >
          {prop}
        </div>
      ) : null}
    </div>
  );
};
