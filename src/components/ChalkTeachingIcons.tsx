import type {CSSProperties, ReactNode} from 'react';
import {useCurrentFrame} from 'remotion';
import {progress} from '../lib/timing';
import {ChalkBox, ChalkCircle, ChalkLine} from './ChalkShapes';
import {ChalkText} from './ChalkText';

type Positioned = {
  x: number;
  y: number;
};

type Timed = {
  startFrame: number;
};

type IconProps = Positioned &
  Timed & {
    className?: string;
    style?: CSSProperties;
  };

type CardProps = IconProps & {
  width: number;
  height: number;
  children: ReactNode;
};

const delayedOpacity = (
  frame: number,
  startFrame: number,
  durationFrames = 16,
) => progress(frame, startFrame, durationFrames);

export const ChalkMagicWandIcon = ({
  x,
  y,
  startFrame,
  className,
  style,
}: IconProps) => {
  const frame = useCurrentFrame();
  const opacity = delayedOpacity(frame, startFrame, 10);

  return (
    <div
      className={['chalk-teaching-icon', 'chalk-magic-wand', className]
        .filter(Boolean)
        .join(' ')}
      style={{left: x, top: y, opacity, ...style}}
    >
      <svg viewBox="0 0 360 230" aria-hidden="true">
        <ChalkLine
          d="M 76 172 C 110 136, 142 106, 186 62"
          startFrame={startFrame}
          durationFrames={24}
          strokeWidth={7}
        />
        <ChalkLine
          d="M 92 150 L 112 170"
          startFrame={startFrame + 20}
          durationFrames={10}
          strokeWidth={5}
          tone="muted"
        />
        <ChalkLine
          d="M 166 46 L 186 62 L 211 50 M 188 28 L 186 62 L 204 87 M 148 78 L 186 62"
          startFrame={startFrame + 22}
          durationFrames={26}
          strokeWidth={5}
          tone="accent"
        />
      </svg>
      <ChalkText
        className="chalk-magic-wand__label"
        startFrame={startFrame + 18}
        durationFrames={22}
      >
        Magic?
      </ChalkText>
    </div>
  );
};

export const ChalkPatternIcon = ({
  x,
  y,
  startFrame,
  className,
  style,
}: IconProps) => (
  <div
    className={['chalk-teaching-icon', 'chalk-pattern-icon', className]
      .filter(Boolean)
      .join(' ')}
    style={{left: x, top: y, ...style}}
  >
    <svg viewBox="0 0 430 190" aria-hidden="true">
      <ChalkCircle
        cx={58}
        cy={88}
        rx={28}
        ry={26}
        startFrame={startFrame}
        durationFrames={20}
        tone="accent"
        strokeWidth={5}
        seed={81}
      />
      <ChalkBox
        x={112}
        y={62}
        width={54}
        height={52}
        startFrame={startFrame + 12}
        durationFrames={20}
        tone="muted"
        strokeWidth={5}
        seed={82}
      />
      <ChalkCircle
        cx={220}
        cy={88}
        rx={28}
        ry={26}
        startFrame={startFrame + 24}
        durationFrames={20}
        tone="accent"
        strokeWidth={5}
        seed={83}
      />
      <ChalkBox
        x={274}
        y={62}
        width={54}
        height={52}
        startFrame={startFrame + 36}
        durationFrames={20}
        tone="muted"
        strokeWidth={5}
        seed={84}
      />
      <ChalkLine
        d="M 350 86 C 366 72, 386 72, 400 88 C 386 104, 366 104, 350 86"
        startFrame={startFrame + 52}
        durationFrames={22}
        strokeWidth={5}
        tone="accent"
      />
      <ChalkLine
        d="M 38 142 C 134 130, 246 154, 386 136"
        startFrame={startFrame + 62}
        durationFrames={28}
        strokeWidth={4}
        tone="muted"
      />
    </svg>
  </div>
);

export const ChalkEmailCard = ({
  x,
  y,
  width,
  height,
  startFrame,
  children,
  className,
  style,
}: CardProps) => (
  <div
    className={['chalk-teaching-card', 'chalk-email-card', className]
      .filter(Boolean)
      .join(' ')}
    style={{left: x, top: y, width, height, ...style}}
  >
    <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <ChalkBox
        x={8}
        y={8}
        width={width - 16}
        height={height - 16}
        startFrame={startFrame}
        durationFrames={24}
        seed={91}
        tone="muted"
        strokeWidth={6}
      />
      <ChalkLine
        d={`M 34 ${height * 0.35} C ${width * 0.28} ${height * 0.58}, ${
          width * 0.62
        } ${height * 0.58}, ${width - 34} ${height * 0.35}`}
        startFrame={startFrame + 8}
        durationFrames={18}
        strokeWidth={4.5}
      />
      <ChalkLine
        d={`M 34 ${height * 0.35} L ${width * 0.5} ${height * 0.62} L ${
          width - 34
        } ${height * 0.35}`}
        startFrame={startFrame + 16}
        durationFrames={18}
        strokeWidth={4.5}
        tone="accent"
      />
    </svg>
    <ChalkText
      className="chalk-teaching-card__label"
      startFrame={startFrame + 3}
      durationFrames={22}
    >
      {children}
    </ChalkText>
  </div>
);

export const ChalkDraftReplyCard = ({
  x,
  y,
  width,
  height,
  startFrame,
  children,
  className,
  style,
}: CardProps) => (
  <div
    className={['chalk-teaching-card', 'chalk-draft-card', className]
      .filter(Boolean)
      .join(' ')}
    style={{left: x, top: y, width, height, ...style}}
  >
    <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <ChalkBox
        x={8}
        y={8}
        width={width - 16}
        height={height - 16}
        startFrame={startFrame}
        durationFrames={24}
        seed={94}
        strokeWidth={6}
      />
      <ChalkLine
        d={`M 44 ${height * 0.43} C ${width * 0.34} ${height * 0.38}, ${
          width * 0.56
        } ${height * 0.44}, ${width - 52} ${height * 0.4}`}
        startFrame={startFrame + 10}
        durationFrames={18}
        strokeWidth={4}
        tone="muted"
      />
      <ChalkLine
        d={`M 44 ${height * 0.58} C ${width * 0.32} ${height * 0.54}, ${
          width * 0.54
        } ${height * 0.61}, ${width - 80} ${height * 0.56}`}
        startFrame={startFrame + 18}
        durationFrames={18}
        strokeWidth={4}
        tone="muted"
      />
      <ChalkLine
        d={`M ${width - 62} ${height * 0.64} L ${width - 48} ${
          height * 0.76
        } L ${width - 22} ${height * 0.44}`}
        startFrame={startFrame + 28}
        durationFrames={18}
        strokeWidth={5}
        tone="accent"
      />
    </svg>
    <ChalkText
      className="chalk-teaching-card__label"
      startFrame={startFrame + 3}
      durationFrames={22}
    >
      {children}
    </ChalkText>
  </div>
);

export const ChalkMagnifyCheckIcon = ({
  x,
  y,
  startFrame,
  className,
  style,
}: IconProps) => (
  <div
    className={['chalk-teaching-icon', 'chalk-magnify-check', className]
      .filter(Boolean)
      .join(' ')}
    style={{left: x, top: y, ...style}}
  >
    <svg viewBox="0 0 260 230" aria-hidden="true">
      <ChalkCircle
        cx={98}
        cy={88}
        rx={58}
        ry={54}
        startFrame={startFrame}
        durationFrames={28}
        seed={101}
      />
      <ChalkLine
        d="M 140 132 C 160 150, 176 168, 198 188"
        startFrame={startFrame + 24}
        durationFrames={18}
        strokeWidth={7}
      />
      <ChalkLine
        d="M 68 92 L 88 112 L 126 70"
        startFrame={startFrame + 38}
        durationFrames={22}
        strokeWidth={6}
        tone="accent"
      />
    </svg>
  </div>
);

export const ChalkWarningChecklistIcon = ({
  x,
  y,
  startFrame,
  className,
  style,
}: IconProps) => (
  <div
    className={['chalk-teaching-icon', 'chalk-warning-checklist', className]
      .filter(Boolean)
      .join(' ')}
    style={{left: x, top: y, ...style}}
  >
    <svg viewBox="0 0 280 260" aria-hidden="true">
      <ChalkLine
        d="M 82 42 L 142 146 L 24 146 Z"
        startFrame={startFrame}
        durationFrames={30}
        strokeWidth={6}
        tone="accent"
      />
      <ChalkLine
        d="M 82 76 L 82 112 M 82 128 L 82 130"
        startFrame={startFrame + 26}
        durationFrames={18}
        strokeWidth={5}
      />
      <ChalkBox
        x={162}
        y={50}
        width={26}
        height={24}
        startFrame={startFrame + 20}
        durationFrames={14}
        seed={111}
        tone="muted"
        strokeWidth={4}
      />
      <ChalkLine
        d="M 198 64 C 220 58, 238 66, 256 62"
        startFrame={startFrame + 28}
        durationFrames={16}
        strokeWidth={4}
      />
      <ChalkBox
        x={162}
        y={100}
        width={26}
        height={24}
        startFrame={startFrame + 38}
        durationFrames={14}
        seed={112}
        tone="muted"
        strokeWidth={4}
      />
      <ChalkLine
        d="M 198 114 C 220 108, 238 116, 256 112"
        startFrame={startFrame + 46}
        durationFrames={16}
        strokeWidth={4}
      />
    </svg>
  </div>
);
