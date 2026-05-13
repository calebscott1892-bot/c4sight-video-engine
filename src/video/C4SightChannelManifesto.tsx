import type {CSSProperties, ReactNode} from 'react';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
} from 'remotion';
import {C4SightMascot} from '../design-system/characters/Mascot';
import {c4sightTokens} from '../design-system/c4sightTokens';
import {C4SightHost} from '../design-system/external/C4SightHost';
import {C4SightWizard} from '../design-system/external/C4SightWizard';
import {videoLayout} from '../layout/blackboardLayout';
import {easeOut} from '../lib/timing';

export const channelManifestoDurationSeconds = 60;

const beatFrames = {
  title: 300,
  hostIntro: 450,
  wizardDebunk: 300,
  modesPreview: 450,
  close: 300,
} as const;

const modeCutFrames = {
  one: 112,
  two: 112,
  three: 113,
  four: 113,
} as const;

const width = videoLayout.width;
const height = videoLayout.height;
const colors = c4sightTokens.colors;
const palette = c4sightTokens.palette;
const typography = c4sightTokens.typography;
const timing = c4sightTokens.timing;

const fill = (backgroundColor: string): CSSProperties => ({
  backgroundColor,
  color: colors.ink,
  overflow: 'hidden',
});

const centerStack: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const smallCaps: CSSProperties = {
  fontFamily: typography.captionFamily,
  fontWeight: typography.weights.caption,
  fontSize: typography.sizes.label,
  lineHeight: typography.lineHeight.tight,
  textTransform: 'uppercase',
  letterSpacing: 0,
};

const makeAbsolute = (
  left: number,
  top: number,
  extra?: CSSProperties,
): CSSProperties => ({
  position: 'absolute',
  left,
  top,
  ...extra,
});

const C4Mark = () => (
  <div
    style={{
      position: 'absolute',
      right: 96,
      bottom: 78,
      width: 92,
      height: 92,
      borderRadius: '50%',
      backgroundColor: colors.verifyRed,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.paper,
      fontFamily: typography.captionFamily,
      fontWeight: typography.weights.body,
      fontSize: typography.sizes.caption,
      lineHeight: 1,
    }}
  >
    C4
  </div>
);

const PaperWatermark = ({tone = colors.ink}: {tone?: string}) => (
  <div
    style={{
      position: 'absolute',
      top: 88,
      right: 120,
      color: tone,
      opacity: 0.34,
      fontFamily: typography.chalkHandFamily,
      fontSize: typography.sizes.caption,
      fontWeight: typography.weights.annotation,
      lineHeight: 1,
    }}
  >
    C4Sight
  </div>
);

const WordBuild = ({
  children,
  startFrame,
  style,
}: {
  children: string;
  startFrame: number;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const words = children.split(' ');

  return (
    <div style={style}>
      {words.map((word, index) => {
        const wordStart = startFrame + index * timing.writeNormal;
        const opacity = interpolate(frame, [wordStart, wordStart + 10], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: easeOut,
        });
        const y = interpolate(frame, [wordStart, wordStart + 12], [18, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: easeOut,
        });

        return (
          <span
            key={`${word}-${index}`}
            style={{
              display: 'inline-block',
              opacity,
              transform: `translateY(${y}px)`,
              marginRight: 14,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

const TitleBeat = () => {
  const frame = useCurrentFrame();
  const entryProgress = interpolate(frame, [180, 230], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const nod = interpolate(frame, [238, 252, 268], [0, 8, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill style={fill(palette.void)}>
      <div style={centerStack}>
        <div
          style={{
            fontFamily: typography.titleFamily,
            fontSize: 168,
            fontWeight: typography.weights.title,
            lineHeight: typography.lineHeight.tight,
            color: colors.ink,
          }}
        >
          C4Sight
        </div>
        <div
          style={{
            ...smallCaps,
            marginTop: 28,
            color: colors.ink,
            opacity: 0.55,
            fontSize: typography.sizes.caption,
          }}
        >
          AI made clear.
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          right: interpolate(entryProgress, [0, 1], [-210, 108], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          bottom: interpolate(entryProgress, [0, 1], [-230, 88], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          transform: `rotate(${nod - 5}deg)`,
        }}
      >
        <C4SightMascot
          pose="confident"
          x={0}
          y={0}
          startFrame={180}
          scale={2.1}
        />
      </div>
    </AbsoluteFill>
  );
};

const HostIntroBeat = () => {
  const frame = useCurrentFrame();
  const wizardY = interpolate(frame, [42, 86, 128, 170], [26, -12, 12, -4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const wizardRotate = interpolate(frame, [42, 86, 128, 170], [-8, 6, -6, 4], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill style={fill(palette.void)}>
      <PaperWatermark />
      <div style={makeAbsolute(300, 265)}>
        <C4SightHost
          expression="dry"
          pose="gesture"
          size={345}
          showChalk
          glasses
        />
      </div>
      <div
        style={{
          ...makeAbsolute(632, 460),
          transform: `translateY(${wizardY}px) rotate(${wizardRotate}deg)`,
        }}
      >
        <C4SightWizard
          expression="smug"
          pose="credit"
          size={178}
          hatTilt={-5}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 840,
          top: 252,
          width: 850,
          color: colors.ink,
          fontFamily: typography.titleFamily,
          fontWeight: typography.weights.title,
          fontSize: 78,
          lineHeight: typography.lineHeight.normal,
        }}
      >
        <WordBuild startFrame={40}>
          AI is more useful than the doomers say,
        </WordBuild>
        <WordBuild startFrame={282} style={{marginTop: 48}}>
          less magical than the hypers say.
        </WordBuild>
      </div>
    </AbsoluteFill>
  );
};

const ChalkCard = ({
  label,
  x,
  y,
  rotation,
}: {
  label: string;
  x: number;
  y: number;
  rotation: number;
}) => (
  <div
    style={{
      ...makeAbsolute(x, y),
      width: 330,
      minHeight: 86,
      padding: '16px 24px',
      backgroundColor: palette.voidSurface,
      border: `3px solid ${colors.chalk}`,
      color: colors.chalk,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: typography.chalkHandFamily,
      fontSize: typography.sizes.caption,
      fontWeight: typography.weights.annotation,
      lineHeight: typography.lineHeight.tight,
      transform: `rotate(${rotation}deg)`,
    }}
  >
    {label}
  </div>
);

const WizardCreditOrbit = () => {
  const frame = useCurrentFrame();
  const bob = interpolate(frame, [0, 48, 96, 120], [0, -18, 10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill style={fill(palette.void)}>
      <PaperWatermark />
      <div style={makeAbsolute(728, 250, {transform: `translateY(${bob}px)`})}>
        <C4SightWizard
          expression="smug"
          pose="credit"
          size={430}
          hatTilt={-5}
        />
      </div>
      <ChalkCard label="writes your emails" x={342} y={238} rotation={-4} />
      <ChalkCard label="knows everything" x={1206} y={300} rotation={5} />
      <ChalkCard label="is conscious" x={795} y={728} rotation={-2} />
    </AbsoluteFill>
  );
};

const NoBeat = () => {
  const frame = useCurrentFrame();
  const hatDrop = interpolate(frame, [2, 22], [0, 64], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill
      style={fill(palette.void)}
    >
      <div style={centerStack}>
        <div
          style={{
            color: colors.ink,
            fontFamily: typography.titleFamily,
            fontSize: 184,
            fontWeight: typography.weights.title,
            lineHeight: typography.lineHeight.tight,
          }}
        >
          NO
          <span style={{color: colors.verifyRed}}>.</span>
        </div>
      </div>
      <div style={makeAbsolute(1210, 450)}>
        <C4SightWizard
          expression="panicked"
          pose="debunked"
          size={260}
          hatDrop={hatDrop}
        />
      </div>
    </AbsoluteFill>
  );
};

const DustTrail = () => (
  <>
    {[0, 1, 2, 3, 4].map((index) => (
      <div
        key={index}
        style={{
          position: 'absolute',
          left: 600 + index * 82,
          top: 738 + (index % 2) * 22,
          width: 32 + index * 3,
          height: 22 + index * 2,
          borderRadius: '50%',
          border: `3px solid ${colors.ink}`,
          opacity: 0.16,
        }}
      />
    ))}
  </>
);

const WalkOffBeat = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [0, 60], [760, -230], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill style={fill(palette.void)}>
      <DustTrail />
      <div style={makeAbsolute(x, 520, {transform: 'rotate(-8deg)'})}>
        <C4SightMascot
          pose="walkingAway"
          x={0}
          y={0}
          startFrame={0}
          scale={2.2}
        />
      </div>
      <div style={makeAbsolute(1260, 262)}>
        <C4SightHost
          expression="dry"
          pose="arms-crossed"
          size={360}
          glasses
        />
      </div>
    </AbsoluteFill>
  );
};

const SortOfBeat = () => (
  <AbsoluteFill style={fill(palette.void)}>
    <div style={centerStack}>
      <div
        style={{
          color: colors.ink,
          fontFamily: typography.titleFamily,
          fontSize: 112,
          fontStyle: 'italic',
          fontWeight: typography.weights.title,
          lineHeight: typography.lineHeight.tight,
        }}
      >
        Well... sort of.
      </div>
    </div>
    <div
      style={{
        ...makeAbsolute(1776, 382),
        width: 220,
        height: 340,
        overflow: 'hidden',
      }}
    >
      <div style={{transform: 'translateX(104px) rotate(-8deg)'}}>
        <C4SightWizard
          expression="neutral"
          pose={null}
          size={250}
          hatTilt={-12}
        />
      </div>
    </div>
  </AbsoluteFill>
);

const WizardDebunkBeat = () => (
  <AbsoluteFill style={fill(palette.void)}>
    <Sequence name="Wizard credit orbit" from={0} durationInFrames={120}>
      <WizardCreditOrbit />
    </Sequence>
    <Sequence name="Hard NO" from={120} durationInFrames={30}>
      <NoBeat />
    </Sequence>
    <Sequence name="Wizard walks off" from={150} durationInFrames={60}>
      <WalkOffBeat />
    </Sequence>
    <Sequence name="Well sort of" from={210} durationInFrames={90}>
      <SortOfBeat />
    </Sequence>
  </AbsoluteFill>
);

type ModeCutProps = {
  backgroundColor: string;
  foregroundColor: string;
  label: string;
  labelFamily?: string;
  hostExpression: 'dry' | 'raised-brow' | 'smile' | 'exasperated' | 'curious';
  hostPose: 'gesture' | 'two-tap-ready' | 'brushing-dust' | 'arms-crossed';
  wizardExpression: 'neutral' | 'sulking' | 'panicked' | 'smug' | 'disappointed';
  wizardPose?: 'credit' | 'debunked' | 'stealing' | null;
  children?: ReactNode;
};

const ModeCut = ({
  backgroundColor,
  foregroundColor,
  label,
  labelFamily = typography.captionFamily,
  hostExpression,
  hostPose,
  wizardExpression,
  wizardPose = null,
  children,
}: ModeCutProps) => {
  const frame = useCurrentFrame();
  const labelY = interpolate(frame, [0, 18], [22, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const characterX = interpolate(frame, [0, 24], [-34, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill style={fill(backgroundColor)}>
      <div
        style={{
          ...smallCaps,
          position: 'absolute',
          top: 104,
          left: 120,
          color: foregroundColor,
          transform: `translateY(${labelY}px)`,
        }}
      >
        <span style={{fontFamily: labelFamily}}>{label}</span>
      </div>
      <div
        style={{
          ...makeAbsolute(270 + characterX, 278),
          color: foregroundColor,
        }}
      >
        <C4SightHost
          expression={hostExpression}
          pose={hostPose}
          size={330}
          showChalk={hostPose === 'two-tap-ready'}
          showNotebook={hostPose === 'arms-crossed'}
          glasses
        />
      </div>
      <div style={makeAbsolute(1230 - characterX, 365)}>
        <C4SightWizard
          expression={wizardExpression}
          pose={wizardPose}
          size={255}
          hatTilt={wizardExpression === 'disappointed' ? 14 : -6}
        />
      </div>
      {children}
    </AbsoluteFill>
  );
};

const ModesPreviewBeat = () => (
  <AbsoluteFill>
    <Sequence name="Mode preview - mainWorld" from={0} durationInFrames={modeCutFrames.one}>
      <ModeCut
        backgroundColor={c4sightTokens.mainWorld.background}
        foregroundColor={c4sightTokens.mainWorld.foreground}
        label="Main World"
        hostExpression="smile"
        hostPose="gesture"
        wizardExpression="smug"
        wizardPose="credit"
      />
    </Sequence>
    <Sequence
      name="Mode preview - blackboard"
      from={modeCutFrames.one}
      durationInFrames={modeCutFrames.two}
    >
      <ModeCut
        backgroundColor={c4sightTokens.blackboardMode.background}
        foregroundColor={c4sightTokens.blackboardMode.foreground}
        label="Blackboard"
        labelFamily={typography.chalkHandFamily}
        hostExpression="raised-brow"
        hostPose="two-tap-ready"
        wizardExpression="panicked"
        wizardPose="stealing"
      />
    </Sequence>
    <Sequence
      name="Mode preview - interfaceTool"
      from={modeCutFrames.one + modeCutFrames.two}
      durationInFrames={modeCutFrames.three}
    >
      <ModeCut
        backgroundColor={c4sightTokens.interfaceMode.background}
        foregroundColor={c4sightTokens.interfaceMode.foreground}
        label="Interface / Tool"
        hostExpression="curious"
        hostPose="gesture"
        wizardExpression="neutral"
        wizardPose={null}
      />
    </Sequence>
    <Sequence
      name="Mode preview - humanJudgement"
      from={modeCutFrames.one + modeCutFrames.two + modeCutFrames.three}
      durationInFrames={modeCutFrames.four}
    >
      <ModeCut
        backgroundColor={c4sightTokens.humanJudgementMode.background}
        foregroundColor={c4sightTokens.humanJudgementMode.foreground}
        label="Human Judgement"
        hostExpression="exasperated"
        hostPose="arms-crossed"
        wizardExpression="disappointed"
        wizardPose="debunked"
      />
    </Sequence>
  </AbsoluteFill>
);

const CloseBeat = () => (
  <AbsoluteFill style={fill(palette.void)}>
    <div style={centerStack}>
      <div
        style={{
          color: colors.ink,
          fontFamily: typography.titleFamily,
          fontSize: typography.sizes.title,
          fontWeight: typography.weights.title,
          lineHeight: typography.lineHeight.tight,
        }}
      >
        AI made clear.
      </div>
      <div
        style={{
          ...smallCaps,
          marginTop: 30,
          color: colors.ink,
          opacity: 0.55,
          fontSize: typography.sizes.caption,
        }}
      >
        C4SIGHT
      </div>
    </div>
    <div style={makeAbsolute(1188, 616, {transform: 'rotate(5deg)'})}>
      <C4SightWizard
        expression="disappointed"
        pose="debunked"
        size={246}
        hatTilt={15}
        hatDrop={18}
        showWand={false}
      />
    </div>
    <C4Mark />
  </AbsoluteFill>
);

export const C4SightChannelManifesto = () => (
  <AbsoluteFill>
    <Sequence name="Beat 1 - Title" from={0} durationInFrames={beatFrames.title}>
      <TitleBeat />
    </Sequence>
    <Sequence
      name="Beat 2 - Host intro"
      from={beatFrames.title}
      durationInFrames={beatFrames.hostIntro}
    >
      <HostIntroBeat />
    </Sequence>
    <Sequence
      name="Beat 3 - Wizard debunk"
      from={beatFrames.title + beatFrames.hostIntro}
      durationInFrames={beatFrames.wizardDebunk}
    >
      <WizardDebunkBeat />
    </Sequence>
    <Sequence
      name="Beat 4 - Four modes preview"
      from={beatFrames.title + beatFrames.hostIntro + beatFrames.wizardDebunk}
      durationInFrames={beatFrames.modesPreview}
    >
      <ModesPreviewBeat />
    </Sequence>
    <Sequence
      name="Beat 5 - Close"
      from={
        beatFrames.title +
        beatFrames.hostIntro +
        beatFrames.wizardDebunk +
        beatFrames.modesPreview
      }
      durationInFrames={beatFrames.close}
    >
      <CloseBeat />
    </Sequence>
  </AbsoluteFill>
);
