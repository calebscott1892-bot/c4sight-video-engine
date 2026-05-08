import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {easeOut, progress} from '../lib/timing';
import {ChalkEraserWipe} from './ChalkAnnotations';
import {ChalkCircle, ChalkLine} from './ChalkShapes';

type Positioned = {
  x: number;
  y: number;
};

type Timed = {
  startFrame: number;
  durationFrames?: number;
};

type Emotion = 'neutral' | 'surprised' | 'sad' | 'excited' | 'frozen';

type MotionPoint = {
  x: number;
  y: number;
};

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
  easing: easeOut,
};

export const ChalkEmotionFace = ({
  x,
  y,
  emotion,
  startFrame,
  scale = 1,
}: Positioned & {
  emotion: Emotion;
  startFrame: number;
  scale?: number;
}) => {
  const eyeY = y;
  const mouthY = y + 30 * scale;
  const eyeGap = 26 * scale;
  const eyeSize = emotion === 'excited' ? 6 * scale : 5 * scale;

  const mouth =
    emotion === 'sad'
      ? `M ${x - 22 * scale} ${mouthY + 12 * scale} C ${x - 8 * scale} ${
          mouthY - 4 * scale
        }, ${x + 8 * scale} ${mouthY - 4 * scale}, ${x + 22 * scale} ${
          mouthY + 12 * scale
        }`
      : emotion === 'surprised' || emotion === 'frozen'
        ? `M ${x - 9 * scale} ${mouthY} C ${x - 8 * scale} ${
            mouthY - 10 * scale
          }, ${x + 8 * scale} ${mouthY - 10 * scale}, ${
            x + 9 * scale
          } ${mouthY} C ${x + 8 * scale} ${mouthY + 11 * scale}, ${
            x - 8 * scale
          } ${mouthY + 11 * scale}, ${x - 9 * scale} ${mouthY}`
        : emotion === 'excited'
          ? `M ${x - 28 * scale} ${mouthY - 2 * scale} C ${x - 8 * scale} ${
              mouthY + 18 * scale
            }, ${x + 12 * scale} ${mouthY + 18 * scale}, ${
              x + 30 * scale
            } ${mouthY - 4 * scale}`
          : `M ${x - 24 * scale} ${mouthY} C ${x - 6 * scale} ${
              mouthY + 8 * scale
            }, ${x + 10 * scale} ${mouthY + 8 * scale}, ${
              x + 24 * scale
            } ${mouthY}`;

  return (
    <g className={`chalk-emotion-face chalk-emotion-face--${emotion}`}>
      {emotion === 'frozen' ? (
        <>
          <ChalkLine
            d={`M ${x - eyeGap - 7 * scale} ${eyeY - 7 * scale} L ${
              x - eyeGap + 7 * scale
            } ${eyeY + 7 * scale} M ${x - eyeGap + 7 * scale} ${
              eyeY - 7 * scale
            } L ${x - eyeGap - 7 * scale} ${eyeY + 7 * scale}`}
            startFrame={startFrame}
            durationFrames={12}
            strokeWidth={3.2 * scale}
          />
          <ChalkLine
            d={`M ${x + eyeGap - 7 * scale} ${eyeY - 7 * scale} L ${
              x + eyeGap + 7 * scale
            } ${eyeY + 7 * scale} M ${x + eyeGap + 7 * scale} ${
              eyeY - 7 * scale
            } L ${x + eyeGap - 7 * scale} ${eyeY + 7 * scale}`}
            startFrame={startFrame + 3}
            durationFrames={12}
            strokeWidth={3.2 * scale}
          />
        </>
      ) : (
        <>
          <ChalkCircle
            cx={x - eyeGap}
            cy={eyeY}
            rx={eyeSize}
            ry={eyeSize}
            startFrame={startFrame}
            durationFrames={12}
            strokeWidth={2.8 * scale}
            seed={211}
          />
          <ChalkCircle
            cx={x + eyeGap}
            cy={eyeY}
            rx={eyeSize}
            ry={eyeSize}
            startFrame={startFrame + 2}
            durationFrames={12}
            strokeWidth={2.8 * scale}
            seed={212}
          />
        </>
      )}
      <ChalkLine
        d={mouth}
        startFrame={startFrame + 7}
        durationFrames={18}
        strokeWidth={3.8 * scale}
        tone={emotion === 'sad' ? 'muted' : 'primary'}
      />
    </g>
  );
};

export const ChalkMagicWand = ({
  x,
  y,
  startFrame,
  durationFrames = 42,
  rotation = -18,
  scale = 1,
  emotion = 'neutral',
  className,
  style,
}: Positioned &
  Timed & {
    rotation?: number;
    scale?: number;
    emotion?: Emotion;
    className?: string;
    style?: CSSProperties;
  }) => {
  const frame = useCurrentFrame();
  const draw = progress(frame, startFrame, durationFrames);

  return (
    <div
      className={['chalk-creative-object', 'chalk-magic-wand-object', className]
        .filter(Boolean)
        .join(' ')}
      style={{
        left: x,
        top: y,
        opacity: draw,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        ...style,
      }}
    >
      <svg viewBox="0 0 300 210" aria-hidden="true">
        <ChalkLine
          d="M 66 162 C 104 124, 142 88, 196 42"
          startFrame={startFrame}
          durationFrames={durationFrames * 0.58}
          strokeWidth={7}
        />
        <ChalkLine
          d="M 86 140 L 108 162"
          startFrame={startFrame + 14}
          durationFrames={12}
          strokeWidth={4}
          tone="muted"
        />
        <ChalkLine
          d="M 178 26 L 196 42 L 222 30 M 198 8 L 196 42 L 212 70 M 160 58 L 196 42"
          startFrame={startFrame + 18}
          durationFrames={24}
          strokeWidth={4.8}
          tone="accent"
        />
        <ChalkEmotionFace
          x={214}
          y={112}
          emotion={emotion}
          startFrame={startFrame + 24}
          scale={0.82}
        />
      </svg>
    </div>
  );
};

export const ChalkSpark = ({
  x,
  y,
  startFrame,
  durationFrames = 24,
  scale = 1,
}: Positioned & Timed & {scale?: number}) => {
  const frame = useCurrentFrame();
  const draw = progress(frame, startFrame, durationFrames);

  return (
    <div
      className="chalk-creative-object chalk-spark"
      style={{
        left: x,
        top: y,
        opacity: Math.max(0, 1 - draw * 0.25),
        transform: `scale(${0.5 + draw * 0.5}) scale(${scale})`,
      }}
    >
      <svg viewBox="0 0 130 130" aria-hidden="true">
        <ChalkLine
          d="M 64 10 L 64 48 M 64 82 L 64 120"
          startFrame={startFrame}
          durationFrames={durationFrames}
          strokeWidth={4.5}
          tone="accent"
        />
        <ChalkLine
          d="M 10 66 L 48 66 M 82 66 L 120 66"
          startFrame={startFrame + 3}
          durationFrames={durationFrames}
          strokeWidth={4.5}
        />
        <ChalkLine
          d="M 28 28 L 50 50 M 80 80 L 102 102 M 100 30 L 80 50 M 50 80 L 30 102"
          startFrame={startFrame + 6}
          durationFrames={durationFrames}
          strokeWidth={3.5}
          tone="muted"
        />
      </svg>
    </div>
  );
};

export const ChalkPoof = ({
  x,
  y,
  startFrame,
  durationFrames = 30,
  scale = 1,
}: Positioned & Timed & {scale?: number}) => {
  const frame = useCurrentFrame();
  const puff = progress(frame, startFrame, durationFrames);

  return (
    <div
      className="chalk-creative-object chalk-poof"
      style={{
        left: x,
        top: y,
        opacity: Math.max(0, 1 - puff),
        transform: `scale(${scale * (0.45 + puff * 0.95)})`,
      }}
    >
      <svg viewBox="0 0 180 150" aria-hidden="true">
        {Array.from({length: 13}, (_, index) => {
          const angle = (Math.PI * 2 * index) / 13;
          const distance = 18 + puff * (18 + (index % 5) * 7);
          const cx = 90 + Math.cos(angle) * distance;
          const cy = 75 + Math.sin(angle) * distance * 0.72;

          return (
            <circle
              key={`poof-dot-${index}`}
              cx={cx}
              cy={cy}
              r={3.4 + (index % 4) * 1.1}
            />
          );
        })}
        <path
          d="M 48 74 C 54 48, 78 44, 88 58 C 104 34, 134 48, 126 74 C 152 86, 132 112, 108 102 C 92 128, 58 116, 66 94 C 42 98, 28 82, 48 74"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - puff}
        />
      </svg>
    </div>
  );
};

export const ChalkAlien = ({
  x,
  y,
  startFrame,
  durationFrames = 46,
  emotion = 'neutral',
  scale = 1,
  rotation = 0,
  className,
  style,
}: Positioned &
  Timed & {
    emotion?: Emotion;
    scale?: number;
    rotation?: number;
    className?: string;
    style?: CSSProperties;
  }) => {
  const frame = useCurrentFrame();
  const appear = progress(frame, startFrame, durationFrames);

  return (
    <div
      className={['chalk-creative-object', 'chalk-alien', className]
        .filter(Boolean)
        .join(' ')}
      style={{
        left: x,
        top: y,
        opacity: appear,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        ...style,
      }}
    >
      <svg viewBox="0 0 240 210" aria-hidden="true">
        <ChalkLine
          d="M 94 48 C 88 28, 76 20, 58 15 M 146 48 C 154 28, 168 20, 188 16"
          startFrame={startFrame}
          durationFrames={22}
          strokeWidth={4.8}
          tone="muted"
        />
        <ChalkCircle
          cx={58}
          cy={15}
          rx={8}
          ry={7}
          startFrame={startFrame + 12}
          durationFrames={14}
          strokeWidth={3.4}
          seed={231}
          tone="accent"
        />
        <ChalkCircle
          cx={188}
          cy={16}
          rx={8}
          ry={7}
          startFrame={startFrame + 15}
          durationFrames={14}
          strokeWidth={3.4}
          seed={232}
          tone="accent"
        />
        <ChalkCircle
          cx={120}
          cy={92}
          rx={70}
          ry={58}
          startFrame={startFrame + 8}
          durationFrames={durationFrames}
          strokeWidth={6.4}
          seed={233}
        />
        <ChalkLine
          d="M 62 106 C 42 110, 34 124, 38 140 M 178 106 C 202 114, 208 128, 202 146"
          startFrame={startFrame + 28}
          durationFrames={20}
          strokeWidth={4.4}
          tone="muted"
        />
        <ChalkLine
          d="M 84 148 C 72 166, 66 178, 58 194 M 114 152 C 112 170, 110 184, 108 198 M 150 148 C 164 164, 172 178, 184 194"
          startFrame={startFrame + 34}
          durationFrames={24}
          strokeWidth={4.2}
          tone="muted"
        />
        <ChalkEmotionFace
          x={120}
          y={78}
          emotion={emotion}
          startFrame={startFrame + 22}
        />
      </svg>
    </div>
  );
};

export const ChalkSaucepan = ({
  x,
  y,
  startFrame,
  durationFrames = 42,
  scale = 1,
  rotation = 0,
  className,
  style,
}: Positioned &
  Timed & {
    scale?: number;
    rotation?: number;
    className?: string;
    style?: CSSProperties;
  }) => {
  const frame = useCurrentFrame();
  const appear = progress(frame, startFrame, durationFrames);

  return (
    <div
      className={['chalk-creative-object', 'chalk-saucepan', className]
        .filter(Boolean)
        .join(' ')}
      style={{
        left: x,
        top: y,
        opacity: appear,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        ...style,
      }}
    >
      <svg viewBox="0 0 320 190" aria-hidden="true">
        <ChalkLine
          d="M 54 76 C 98 54, 190 54, 234 76 C 216 142, 78 142, 54 76"
          startFrame={startFrame}
          durationFrames={durationFrames}
          strokeWidth={7}
        />
        <ChalkLine
          d="M 62 76 C 112 92, 184 92, 230 76"
          startFrame={startFrame + 10}
          durationFrames={20}
          strokeWidth={4.5}
          tone="muted"
        />
        <ChalkLine
          d="M 232 78 C 260 72, 290 78, 306 96"
          startFrame={startFrame + 18}
          durationFrames={22}
          strokeWidth={6}
        />
        <ChalkLine
          d="M 92 140 L 82 170 M 196 140 L 206 170"
          startFrame={startFrame + 24}
          durationFrames={16}
          strokeWidth={4.4}
          tone="muted"
        />
      </svg>
    </div>
  );
};

export const ChalkFreezeMoment = ({
  startFrame,
  durationFrames = 34,
  x,
  y,
}: Positioned & Timed) => {
  const frame = useCurrentFrame();
  const show = progress(frame, startFrame, durationFrames);

  return (
    <div
      className="chalk-creative-freeze"
      style={{
        left: x,
        top: y,
        opacity: show,
        transform: `scale(${0.88 + show * 0.12})`,
      }}
    >
      <svg viewBox="0 0 620 380" aria-hidden="true">
        <ChalkLine
          d="M 310 20 L 310 96 M 310 284 L 310 356 M 34 190 L 120 190 M 500 190 L 588 190"
          startFrame={startFrame}
          durationFrames={durationFrames}
          strokeWidth={5}
          tone="accent"
        />
        <ChalkLine
          d="M 100 62 L 164 126 M 456 254 L 522 320 M 520 60 L 454 124 M 164 256 L 96 324"
          startFrame={startFrame + 4}
          durationFrames={durationFrames}
          strokeWidth={4}
          tone="muted"
        />
      </svg>
    </div>
  );
};

export const ChalkSadExit = ({
  startFrame,
  durationFrames = 78,
  from,
  to,
  rotation = -8,
  children,
  className,
  style,
}: {
  startFrame: number;
  durationFrames?: number;
  from: MotionPoint;
  to: MotionPoint;
  rotation?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame) {
    return null;
  }

  const move = progress(frame, startFrame, durationFrames);
  const x = interpolate(move, [0, 1], [from.x, to.x], clamp);
  const y = interpolate(move, [0, 1], [from.y, to.y], clamp);
  const opacity = interpolate(move, [0, 0.82, 1], [1, 0.78, 0], clamp);

  return (
    <div
      className={['chalk-sad-exit', className].filter(Boolean).join(' ')}
      style={{
        opacity,
        transform: `translate(${x}px, ${y}px) rotate(${rotation * move}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const ChalkExcitedReturn = ({
  startFrame,
  durationFrames = 72,
  from,
  to,
  children,
  className,
  style,
}: {
  startFrame: number;
  durationFrames?: number;
  from: MotionPoint;
  to: MotionPoint;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const move = progress(frame, startFrame, durationFrames);
  const overshoot = Math.sin(move * Math.PI) * (1 - move) * 18;
  const x = interpolate(move, [0, 1], [from.x, to.x], clamp);
  const y = interpolate(move, [0, 1], [from.y, to.y], clamp) - overshoot;
  const opacity = progress(frame, startFrame, 16);

  return (
    <div
      className={['chalk-excited-return', className].filter(Boolean).join(' ')}
      style={{
        opacity,
        transform: `translate(${x}px, ${y}px) rotate(${
          Math.sin(move * Math.PI * 2) * 4
        }deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const ChalkBurstTransition = ({
  startFrame,
  durationFrames = 34,
}: Timed) => (
  <>
    <ChalkEraserWipe
      x={130}
      y={145}
      width={1660}
      height={760}
      startFrame={startFrame}
      durationFrames={durationFrames}
    />
    <ChalkPoof
      x={486}
      y={372}
      startFrame={startFrame + 4}
      durationFrames={28}
      scale={1.25}
    />
    <ChalkPoof
      x={1140}
      y={484}
      startFrame={startFrame + 10}
      durationFrames={30}
      scale={1.05}
    />
    <ChalkSpark
      x={884}
      y={240}
      startFrame={startFrame + 6}
      durationFrames={24}
      scale={0.78}
    />
  </>
);
