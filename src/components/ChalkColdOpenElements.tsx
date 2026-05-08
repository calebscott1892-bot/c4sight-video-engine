import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {easeOut, progress} from '../lib/timing';
import {ChalkBox, ChalkCircle, ChalkLine} from './ChalkShapes';
import {ChalkText} from './ChalkText';

type Positioned = {
  x: number;
  y: number;
};

type Timed = {
  startFrame: number;
  durationFrames?: number;
};

type ChalkCardProps = Positioned &
  Timed & {
    width: number;
    height: number;
    label: ReactNode;
    seed?: number;
    tone?: 'primary' | 'muted' | 'accent';
    className?: string;
    style?: CSSProperties;
  };

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
  easing: easeOut,
};

export const ChalkExampleCard = ({
  x,
  y,
  width,
  height,
  label,
  startFrame,
  durationFrames = 24,
  seed = 0,
  tone = 'primary',
  className,
  style,
}: ChalkCardProps) => {
  const frame = useCurrentFrame();
  const appear = progress(frame, startFrame, Math.max(12, durationFrames));

  return (
    <div
      className={['chalk-example-card', className].filter(Boolean).join(' ')}
      style={{
        left: x,
        top: y,
        width,
        height,
        opacity: appear,
        transform: `translateY(${(1 - appear) * 12}px) rotate(${
          (1 - appear) * -1.5
        }deg)`,
        ...style,
      }}
    >
      <svg viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        <ChalkBox
          x={8}
          y={8}
          width={width - 16}
          height={height - 16}
          startFrame={startFrame}
          durationFrames={durationFrames}
          seed={seed}
          tone={tone}
          strokeWidth={5.8}
        />
      </svg>
    <ChalkText
      className="chalk-example-card__label"
      startFrame={startFrame + 3}
      durationFrames={Math.max(8, durationFrames - 6)}
    >
      {label}
    </ChalkText>
    </div>
  );
};

export const ChalkQuickNote = ({
  x,
  y,
  startFrame,
  text,
  width = 520,
  strike = false,
}: Positioned & {
  startFrame: number;
  text: string;
  width?: number;
  strike?: boolean;
}) => (
  <div className="chalk-quick-note" style={{left: x, top: y, width}}>
    <svg className="chalk-quick-note__mark" viewBox="0 0 58 48" aria-hidden="true">
      <ChalkLine
        d={strike ? 'M 10 12 L 42 36 M 42 12 L 10 36' : 'M 10 25 L 22 36 L 46 12'}
        startFrame={startFrame}
        durationFrames={18}
        strokeWidth={4.8}
        tone={strike ? 'accent' : 'muted'}
      />
    </svg>
    <ChalkText
      className="chalk-quick-note__text"
      startFrame={startFrame + 8}
      durationFrames={34}
    >
      {text}
    </ChalkText>
  </div>
);

export const ChalkAutocompleteLine = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-autocomplete-line" style={{left: x, top: y}}>
    <ChalkText startFrame={startFrame} durationFrames={32}>
      autocomplete:
    </ChalkText>
    <span className="chalk-autocomplete-line__ghost">
      <ChalkText startFrame={startFrame + 28} durationFrames={36}>
        {'The answer is...'}
      </ChalkText>
    </span>
  </div>
);

export const ChalkReasoningPlan = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-output-card chalk-output-card--plan" style={{left: x, top: y}}>
    <ChalkExampleCard
      x={0}
      y={0}
      width={350}
      height={168}
      label="Plan"
      startFrame={startFrame}
      durationFrames={24}
      seed={301}
      tone="muted"
    />
    <svg className="chalk-output-card__ink" viewBox="0 0 350 168" aria-hidden="true">
      <ChalkLine
        d="M 58 72 C 118 66, 178 76, 292 68"
        startFrame={startFrame + 20}
        durationFrames={16}
        strokeWidth={3.6}
      />
      <ChalkLine
        d="M 58 104 C 132 98, 194 108, 284 100"
        startFrame={startFrame + 30}
        durationFrames={16}
        strokeWidth={3.6}
      />
      <ChalkLine
        d="M 58 136 C 120 130, 188 140, 254 132"
        startFrame={startFrame + 40}
        durationFrames={16}
        strokeWidth={3.6}
        tone="accent"
      />
    </svg>
  </div>
);

export const ChalkCodeBlock = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-output-card chalk-output-card--code" style={{left: x, top: y}}>
    <ChalkExampleCard
      x={0}
      y={0}
      width={360}
      height={178}
      label="Code"
      startFrame={startFrame}
      durationFrames={24}
      seed={302}
    />
    <svg className="chalk-output-card__ink" viewBox="0 0 360 178" aria-hidden="true">
      <ChalkLine
        d="M 64 80 L 38 100 L 64 120"
        startFrame={startFrame + 18}
        durationFrames={16}
        strokeWidth={4}
        tone="accent"
      />
      <ChalkLine
        d="M 296 80 L 322 100 L 296 120"
        startFrame={startFrame + 24}
        durationFrames={16}
        strokeWidth={4}
        tone="accent"
      />
      <ChalkLine
        d="M 92 84 C 144 78, 206 92, 258 84 M 92 114 C 134 108, 196 120, 246 112"
        startFrame={startFrame + 32}
        durationFrames={24}
        strokeWidth={3.5}
      />
    </svg>
  </div>
);

export const ChalkTinyDiagram = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-output-card chalk-output-card--diagram" style={{left: x, top: y}}>
    <ChalkExampleCard
      x={0}
      y={0}
      width={380}
      height={178}
      label="Diagram"
      startFrame={startFrame}
      durationFrames={24}
      seed={303}
      tone="muted"
    />
    <svg className="chalk-output-card__ink" viewBox="0 0 380 178" aria-hidden="true">
      <ChalkCircle
        cx={94}
        cy={112}
        rx={32}
        ry={28}
        startFrame={startFrame + 18}
        durationFrames={18}
        strokeWidth={4}
        tone="accent"
        seed={311}
      />
      <ChalkCircle
        cx={194}
        cy={92}
        rx={34}
        ry={30}
        startFrame={startFrame + 28}
        durationFrames={18}
        strokeWidth={4}
        seed={312}
      />
      <ChalkCircle
        cx={294}
        cy={112}
        rx={32}
        ry={28}
        startFrame={startFrame + 38}
        durationFrames={18}
        strokeWidth={4}
        tone="accent"
        seed={313}
      />
      <ChalkLine
        d="M 126 106 C 146 100, 158 98, 160 94 M 228 96 C 248 100, 260 104, 262 108"
        startFrame={startFrame + 48}
        durationFrames={18}
        strokeWidth={3.4}
      />
    </svg>
  </div>
);

export const ChalkTinyPersonMachine = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-tiny-machine" style={{left: x, top: y}}>
    <svg viewBox="0 0 360 300" aria-hidden="true">
      <ChalkBox
        x={28}
        y={34}
        width={292}
        height={226}
        startFrame={startFrame}
        durationFrames={22}
        seed={351}
        strokeWidth={6}
      />
      <ChalkLine
        d="M 156 76 C 132 78, 130 112, 156 116 C 184 116, 184 78, 156 76"
        startFrame={startFrame + 12}
        durationFrames={18}
        strokeWidth={4.8}
      />
      <ChalkLine
        d="M 156 118 L 156 172 M 126 144 C 146 136, 168 136, 190 144 M 142 172 L 124 220 M 170 172 L 190 220"
        startFrame={startFrame + 20}
        durationFrames={26}
        strokeWidth={4.6}
        tone="muted"
      />
      <ChalkLine
        d="M 224 86 L 254 86 M 224 116 L 282 116 M 224 146 L 268 146"
        startFrame={startFrame + 28}
        durationFrames={20}
        strokeWidth={3.5}
        tone="accent"
      />
    </svg>
  </div>
);

export const ChalkBrainIcon = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-brain-icon" style={{left: x, top: y}}>
    <svg viewBox="0 0 340 260" aria-hidden="true">
      <ChalkLine
        d="M 142 64 C 108 52, 76 74, 80 112 C 48 124, 48 172, 86 184 C 92 226, 146 220, 158 190 C 182 222, 238 218, 244 180 C 284 170, 282 118, 250 106 C 250 70, 204 48, 174 72 C 166 62, 154 60, 142 64"
        startFrame={startFrame}
        durationFrames={30}
        strokeWidth={6}
      />
      <ChalkLine
        d="M 126 98 C 150 116, 132 136, 158 152 M 188 96 C 168 116, 194 134, 172 158 M 114 162 C 140 154, 156 176, 188 166 M 210 128 C 236 132, 238 154, 216 166"
        startFrame={startFrame + 20}
        durationFrames={28}
        strokeWidth={3.8}
        tone="muted"
      />
    </svg>
  </div>
);

export const ChalkImageOutputCard = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-output-card chalk-output-card--image" style={{left: x, top: y}}>
    <ChalkExampleCard
      x={0}
      y={0}
      width={360}
      height={178}
      label="Image"
      startFrame={startFrame}
      durationFrames={22}
      seed={304}
      tone="muted"
    />
    <svg className="chalk-output-card__ink" viewBox="0 0 360 178" aria-hidden="true">
      <ChalkCircle
        cx={252}
        cy={78}
        rx={18}
        ry={17}
        startFrame={startFrame + 18}
        durationFrames={16}
        strokeWidth={3.6}
        tone="accent"
        seed={321}
      />
      <ChalkLine
        d="M 58 134 C 98 98, 116 98, 154 132 C 190 88, 222 88, 304 134"
        startFrame={startFrame + 26}
        durationFrames={24}
        strokeWidth={4}
      />
      <ChalkLine
        d="M 70 146 C 128 140, 220 152, 294 142"
        startFrame={startFrame + 42}
        durationFrames={16}
        strokeWidth={3.2}
        tone="muted"
      />
    </svg>
  </div>
);

export const ChalkMagnifier = ({
  x,
  y,
  startFrame,
  scale = 1,
}: Positioned & {startFrame: number; scale?: number}) => (
  <div
    className="chalk-magnifier"
    style={{left: x, top: y, transform: `scale(${scale})`}}
  >
    <svg viewBox="0 0 260 220" aria-hidden="true">
      <ChalkCircle
        cx={92}
        cy={82}
        rx={56}
        ry={52}
        startFrame={startFrame}
        durationFrames={28}
        seed={331}
      />
      <ChalkLine
        d="M 134 124 C 156 146, 178 166, 202 188"
        startFrame={startFrame + 24}
        durationFrames={18}
        strokeWidth={7}
      />
      <ChalkLine
        d="M 68 78 C 84 68, 104 68, 118 82 M 74 104 C 94 110, 112 106, 124 92"
        startFrame={startFrame + 38}
        durationFrames={20}
        strokeWidth={3.6}
        tone="muted"
      />
    </svg>
  </div>
);

export const ChalkMysteryModel = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => (
  <div className="chalk-mystery-model" style={{left: x, top: y}}>
    <svg viewBox="0 0 620 300" aria-hidden="true">
      <ChalkBox
        x={32}
        y={42}
        width={540}
        height={206}
        startFrame={startFrame}
        durationFrames={34}
        seed={341}
        strokeWidth={7}
      />
      <ChalkLine
        d="M 92 112 C 148 70, 206 150, 258 104 C 322 50, 368 160, 438 108 C 486 72, 510 96, 540 84"
        startFrame={startFrame + 24}
        durationFrames={36}
        strokeWidth={4.4}
        tone="muted"
      />
      <ChalkLine
        d="M 102 178 C 174 140, 236 216, 314 170 C 388 128, 452 202, 522 158"
        startFrame={startFrame + 42}
        durationFrames={34}
        strokeWidth={4.4}
        tone="accent"
      />
      <ChalkLine
        d="M 176 86 C 182 52, 234 58, 216 98 C 206 120, 190 122, 190 146 M 190 176 L 190 178"
        startFrame={startFrame + 58}
        durationFrames={34}
        strokeWidth={5.6}
      />
      <ChalkLine
        d="M 424 90 C 430 60, 480 68, 462 106 C 452 128, 438 128, 438 150 M 438 180 L 438 182"
        startFrame={startFrame + 66}
        durationFrames={34}
        strokeWidth={5.6}
      />
    </svg>
    <ChalkText
      className="chalk-mystery-model__label"
      startFrame={startFrame + 10}
      durationFrames={28}
    >
      model
    </ChalkText>
  </div>
);

export const ChalkColdOpenCaption = ({
  startFrame,
  endFrame,
  text,
}: {
  startFrame: number;
  endFrame: number;
  text: string;
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= endFrame) {
    return null;
  }

  const rule = progress(frame, startFrame, 14);
  const opacity = progress(frame, startFrame + 8, 8);

  return (
    <div className="cold-open-caption">
      <svg className="cold-open-caption__rule" viewBox="0 0 760 22" aria-hidden="true">
        <path
          d="M 8 12 C 180 9, 332 14, 512 11 C 602 10, 682 13, 752 10"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - rule}
        />
      </svg>
      <p style={{opacity}}>{text}</p>
    </div>
  );
};

export const useDrift = ({
  frame,
  startFrame,
  endFrame,
  from,
  to,
}: {
  frame: number;
  startFrame: number;
  endFrame: number;
  from: {x: number; y: number; rotation: number};
  to: {x: number; y: number; rotation: number};
}) => {
  const amount = progress(frame, startFrame, endFrame - startFrame);

  return {
    x: interpolate(amount, [0, 1], [from.x, to.x], clamp),
    y: interpolate(amount, [0, 1], [from.y, to.y], clamp),
    rotation: interpolate(amount, [0, 1], [from.rotation, to.rotation], clamp),
  };
};
