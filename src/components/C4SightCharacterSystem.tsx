import type {CSSProperties, ReactNode} from 'react';
import {useCurrentFrame} from 'remotion';
import {
  ChalkChecklist,
  ChalkCircleHighlight,
  ChalkCrossOut,
  ChalkDustPuff,
  ChalkEraserWipe,
  ChalkUnderline,
} from './ChalkAnnotations';
import {
  ChalkExampleCard,
  ChalkMagnifier,
  ChalkMysteryModel,
  ChalkQuickNote,
} from './ChalkColdOpenElements';
import {
  ChalkAlien,
  ChalkExcitedReturn,
  ChalkFreezeMoment,
  ChalkMagicWand,
  ChalkPoof,
  ChalkSadExit,
  ChalkSaucepan,
  ChalkSpark,
} from './ChalkCreativeBurst';
import {ChalkBox, ChalkLine} from './ChalkShapes';
import {ChalkText} from './ChalkText';
import {ChalkMagnifyCheckIcon, ChalkWarningChecklistIcon} from './ChalkTeachingIcons';

type Emotion = 'happy' | 'confused' | 'sad' | 'freeze' | 'neutral';
type Pose = 'standing' | 'wizard' | 'saucepan' | 'peeking' | 'walking';
type ReactionState =
  | 'happy'
  | 'confused'
  | 'sad'
  | 'freeze'
  | 'walkingOff'
  | 'returningExcited';

type Positioned = {
  x: number;
  y: number;
};

type Timed = {
  startFrame: number;
  durationFrames?: number;
};

type CharacterProps = Positioned &
  Timed & {
    expression?: Emotion;
    pose?: Pose;
    scale?: number;
    rotation?: number;
    className?: string;
    style?: CSSProperties;
  };

const expressionMap = {
  happy: 'excited',
  confused: 'surprised',
  sad: 'sad',
  freeze: 'frozen',
  neutral: 'neutral',
} as const;

export const C4SightAlien = ({
  x,
  y,
  startFrame,
  durationFrames,
  expression = 'neutral',
  pose = 'standing',
  scale = 1,
  rotation = 0,
  className,
  style,
}: CharacterProps) => {
  const alienScale =
    pose === 'saucepan' ? scale * 0.48 : pose === 'wizard' ? scale * 0.62 : scale;
  const alienY = pose === 'saucepan' ? y - 36 * scale : y;

  return (
    <div
      className={['c4-character-rig', className].filter(Boolean).join(' ')}
      style={{left: x, top: y, ...style}}
    >
      {pose === 'wizard' ? (
        <C4SightWizardHat
          x={44 * scale}
          y={-24 * scale}
          startFrame={startFrame}
          scale={scale}
          rotation={rotation - 8}
        />
      ) : null}
      {pose === 'saucepan' ? (
        <C4SightSaucepanProp
          x={-74 * scale}
          y={92 * scale}
          startFrame={startFrame}
          scale={0.7 * scale}
          rotation={rotation * 0.35}
        />
      ) : null}
      <ChalkAlien
        x={0}
        y={alienY - y}
        startFrame={startFrame}
        durationFrames={durationFrames}
        emotion={expressionMap[expression]}
        scale={alienScale}
        rotation={rotation}
      />
      {pose === 'walking' ? (
        <svg className="c4-character-rig__motion-lines" viewBox="0 0 260 180" aria-hidden="true">
          <ChalkLine
            d="M 8 76 C 42 68, 76 72, 106 66 M 20 118 C 58 108, 88 114, 130 106"
            startFrame={startFrame + 18}
            durationFrames={22}
            strokeWidth={3.6}
            tone="muted"
          />
        </svg>
      ) : null}
    </div>
  );
};

export const C4SightWizardHat = ({
  x,
  y,
  startFrame,
  scale = 1,
  rotation = 0,
}: Positioned & {startFrame: number; scale?: number; rotation?: number}) => (
  <div
    className="c4-wizard-hat-prop"
    style={{
      left: x,
      top: y,
      transform: `rotate(${rotation}deg) scale(${scale})`,
    }}
  >
    <svg viewBox="0 0 150 118" aria-hidden="true">
      <ChalkLine
        d="M 18 96 C 46 82, 102 82, 132 96 M 52 86 L 76 18 L 100 86"
        startFrame={startFrame}
        durationFrames={24}
        strokeWidth={4.8}
        tone="accent"
      />
      <ChalkLine
        d="M 66 48 L 76 36 L 88 48 M 56 68 C 74 62, 92 66, 106 60"
        startFrame={startFrame + 16}
        durationFrames={20}
        strokeWidth={3.4}
        tone="muted"
      />
    </svg>
  </div>
);

export const C4SightWandProp = ({
  x,
  y,
  startFrame,
  scale = 1,
  rotation = -16,
  expression = 'happy',
}: Positioned & {
  startFrame: number;
  scale?: number;
  rotation?: number;
  expression?: Emotion;
}) => (
  <ChalkMagicWand
    x={x}
    y={y}
    startFrame={startFrame}
    scale={scale}
    rotation={rotation}
    emotion={expressionMap[expression]}
  />
);

export const C4SightSaucepanProp = ({
  x,
  y,
  startFrame,
  scale = 1,
  rotation = 0,
}: Positioned & {
  startFrame: number;
  scale?: number;
  rotation?: number;
}) => (
  <ChalkSaucepan
    x={x}
    y={y}
    startFrame={startFrame}
    scale={scale}
    rotation={rotation}
  />
);

export const C4SightBucketProp = ({
  x,
  y,
  startFrame,
  scale = 1,
  rotation = 0,
}: Positioned & {
  startFrame: number;
  scale?: number;
  rotation?: number;
}) => (
  <div
    className="c4-bucket-prop"
    style={{left: x, top: y, transform: `rotate(${rotation}deg) scale(${scale})`}}
  >
    <svg viewBox="0 0 260 220" aria-hidden="true">
      <ChalkLine
        d="M 50 62 C 92 46, 168 46, 210 62 C 198 156, 70 156, 50 62"
        startFrame={startFrame}
        durationFrames={28}
        strokeWidth={6.5}
      />
      <ChalkLine
        d="M 58 62 C 94 80, 166 80, 202 62"
        startFrame={startFrame + 12}
        durationFrames={18}
        strokeWidth={4.4}
        tone="muted"
      />
      <ChalkLine
        d="M 76 58 C 82 18, 174 18, 184 58"
        startFrame={startFrame + 20}
        durationFrames={22}
        strokeWidth={4.6}
        tone="accent"
      />
    </svg>
  </div>
);

export const C4SightAlienReaction = ({
  state,
  startFrame,
  durationFrames = 72,
  from,
  to,
  children,
}: {
  state: ReactionState;
  startFrame: number;
  durationFrames?: number;
  from: {x: number; y: number};
  to?: {x: number; y: number};
  children?: ReactNode;
}) => {
  if (state === 'walkingOff') {
    return (
      <ChalkSadExit
        startFrame={startFrame}
        durationFrames={durationFrames}
        from={from}
        to={to ?? {x: from.x - 520, y: from.y + 90}}
        rotation={-10}
      >
        {children ?? (
          <C4SightAlien x={0} y={0} startFrame={startFrame} expression="sad" pose="walking" />
        )}
      </ChalkSadExit>
    );
  }

  if (state === 'returningExcited') {
    return (
      <ChalkExcitedReturn
        startFrame={startFrame}
        durationFrames={durationFrames}
        from={from}
        to={to ?? {x: from.x + 520, y: from.y - 60}}
      >
        {children ?? (
          <C4SightAlien x={0} y={0} startFrame={startFrame} expression="happy" />
        )}
      </ChalkExcitedReturn>
    );
  }

  return (
    <C4SightAlien
      x={from.x}
      y={from.y}
      startFrame={startFrame}
      expression={state === 'freeze' ? 'freeze' : state}
      pose={state === 'happy' ? 'wizard' : 'standing'}
    />
  );
};

export const C4SightChalkCard = ({
  x,
  y,
  width,
  height = 78,
  label,
  startFrame,
  tone = 'primary',
  seed = 0,
}: Positioned & {
  width: number;
  height?: number;
  label: ReactNode;
  startFrame: number;
  tone?: 'primary' | 'muted' | 'accent';
  seed?: number;
}) => (
  <ChalkExampleCard
    x={x}
    y={y}
    width={width}
    height={height}
    label={label}
    startFrame={startFrame}
    durationFrames={18}
    tone={tone}
    seed={seed}
  />
);

export const C4SightPoof = ChalkPoof;
export const C4SightSpark = ChalkSpark;
export const C4SightFreezeBurst = ChalkFreezeMoment;
export const C4SightEraserWipe = ChalkEraserWipe;
export const C4SightDustPuff = ChalkDustPuff;
export const C4SightUnderline = ChalkUnderline;
export const C4SightCircleHighlight = ChalkCircleHighlight;
export const C4SightCrossOut = ChalkCrossOut;
export const C4SightChecklist = ChalkChecklist;
export const C4SightModelBox = ChalkMysteryModel;
export const C4SightMagnifyingGlass = ChalkMagnifier;
export const C4SightMagnifyCheckIcon = ChalkMagnifyCheckIcon;
export const C4SightWarningIcon = ChalkWarningChecklistIcon;

export const C4SightThoughtIcon = ({
  x,
  y,
  startFrame,
  text = '?',
}: Positioned & {startFrame: number; text?: string}) => (
  <div className="c4-thought-icon" style={{left: x, top: y}}>
    <svg viewBox="0 0 280 220" aria-hidden="true">
      <ChalkLine
        d="M 70 104 C 42 68, 78 28, 120 48 C 146 10, 206 28, 200 76 C 244 88, 238 142, 192 144 C 166 184, 104 170, 100 134 C 74 136, 58 124, 70 104"
        startFrame={startFrame}
        durationFrames={34}
        strokeWidth={5.5}
        tone="muted"
      />
      <ChalkLine
        d="M 82 154 C 66 160, 58 172, 54 188 M 42 198 L 42 200"
        startFrame={startFrame + 28}
        durationFrames={16}
        strokeWidth={4}
      />
    </svg>
    <ChalkText
      className="c4-thought-icon__text"
      startFrame={startFrame + 18}
      durationFrames={24}
    >
      {text}
    </ChalkText>
  </div>
);

export const C4SightNoteIcon = ({
  x,
  y,
  startFrame,
  text,
}: Positioned & {startFrame: number; text: string}) => (
  <ChalkQuickNote x={x} y={y} startFrame={startFrame} text={text} width={520} />
);

export const C4SightWarningLabel = ({
  x,
  y,
  startFrame,
  children,
}: Positioned & {startFrame: number; children: ReactNode}) => {
  const frame = useCurrentFrame();
  const active = frame >= startFrame;

  return (
    <div className="c4-warning-label" style={{left: x, top: y, opacity: active ? 1 : 0}}>
      <svg viewBox="0 0 420 120" aria-hidden="true">
        <ChalkBox
          x={8}
          y={8}
          width={404}
          height={96}
          startFrame={startFrame}
          durationFrames={22}
          seed={701}
          tone="accent"
          strokeWidth={5.5}
        />
      </svg>
      <ChalkText
        className="c4-warning-label__text"
        startFrame={startFrame + 8}
        durationFrames={24}
      >
        {children}
      </ChalkText>
    </div>
  );
};
