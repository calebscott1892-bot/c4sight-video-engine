import type {ReactNode} from 'react';
import {useCurrentFrame} from 'remotion';
import {progress} from '../lib/timing';
import {
  ChalkArrow,
  ChalkBox,
  ChalkCircle,
  ChalkLine,
  type Point,
} from './ChalkShapes';
import {ChalkText} from './ChalkText';

type Timed = {
  startFrame: number;
  durationFrames: number;
};

type Positioned = {
  x: number;
  y: number;
};

export const ChalkUnderline = ({
  x,
  y,
  width,
  startFrame,
  durationFrames,
}: Positioned & Timed & {width: number}) => {
  const d = `M ${x} ${y} C ${x + width * 0.28} ${y + 6}, ${
    x + width * 0.64
  } ${y - 4}, ${x + width} ${y + 2}`;

  return (
    <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
      <ChalkLine
        d={d}
        startFrame={startFrame}
        durationFrames={durationFrames}
        strokeWidth={5}
        tone="accent"
      />
    </svg>
  );
};

export const ChalkCircleHighlight = ({
  cx,
  cy,
  rx,
  ry,
  startFrame,
  durationFrames,
}: Timed & {cx: number; cy: number; rx: number; ry?: number}) => (
  <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
    <ChalkCircle
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      startFrame={startFrame}
      durationFrames={durationFrames}
      tone="accent"
      strokeWidth={5}
      seed={12}
    />
  </svg>
);

export const ChalkCrossOut = ({
  x,
  y,
  width,
  height,
  startFrame,
  durationFrames,
}: Positioned & Timed & {width: number; height: number}) => {
  const first = `M ${x + 10} ${y + height * 0.24} C ${x + width * 0.32} ${
    y + height * 0.5
  }, ${x + width * 0.68} ${y + height * 0.52}, ${x + width - 10} ${
    y + height * 0.76
  }`;
  const second = `M ${x + 14} ${y + height * 0.76} C ${x + width * 0.3} ${
    y + height * 0.52
  }, ${x + width * 0.7} ${y + height * 0.48}, ${x + width - 14} ${
    y + height * 0.25
  }`;

  return (
    <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
      <ChalkLine
        d={first}
        startFrame={startFrame}
        durationFrames={durationFrames}
        strokeWidth={6}
        tone="accent"
      />
      <ChalkLine
        d={second}
        startFrame={startFrame + 10}
        durationFrames={durationFrames}
        strokeWidth={6}
        tone="accent"
      />
    </svg>
  );
};

export const ChalkEraserWipe = ({
  x,
  y,
  width,
  height,
  startFrame,
  durationFrames,
}: Positioned & Timed & {width: number; height: number}) => {
  const frame = useCurrentFrame();
  const wipe = progress(frame, startFrame, durationFrames);
  const edgeX = x + width * wipe;
  const clipRight = `${Math.max(0, 100 - wipe * 100).toFixed(3)}%`;

  return (
    <>
      <div
        className="chalk-eraser-wipe"
        style={{
          left: x,
          top: y,
          width,
          height,
          clipPath: `inset(0 ${clipRight} 0 0)`,
        }}
      />
      {wipe > 0 && wipe < 1 ? (
        <svg
          className="chalk-eraser-dust"
          viewBox="0 0 1920 1080"
          aria-hidden="true"
        >
          {Array.from({length: 16}, (_, index) => (
            <circle
              key={`wipe-dust-${index}`}
              cx={edgeX + ((index * 19) % 38) - 18}
              cy={y + 18 + ((index * 43) % Math.max(24, height - 34))}
              r={1.4 + (index % 4) * 0.45}
              opacity={0.18 - (index % 5) * 0.018}
            />
          ))}
        </svg>
      ) : null}
    </>
  );
};

export const ChalkDustPuff = ({
  x,
  y,
  startFrame,
  durationFrames,
}: Positioned & Timed) => {
  const frame = useCurrentFrame();
  const puff = progress(frame, startFrame, durationFrames);
  const opacity = Math.max(0, 1 - puff);

  return (
    <svg
      className="chalk-dust-puff"
      viewBox="0 0 1920 1080"
      aria-hidden="true"
      style={{opacity}}
    >
      {Array.from({length: 18}, (_, index) => {
        const angle = (Math.PI * 2 * index) / 18;
        const distance = 10 + puff * (28 + (index % 5) * 7);

        return (
          <circle
            key={`puff-${index}`}
            cx={x + Math.cos(angle) * distance}
            cy={y + Math.sin(angle) * distance * 0.68}
            r={1.2 + (index % 4) * 0.65}
          />
        );
      })}
    </svg>
  );
};

export const ChalkIcon = ({
  x,
  y,
  startFrame,
}: Positioned & {startFrame: number}) => {
  const handleStart: Point = {x: x + 112, y: y + 112};
  const handleEnd: Point = {x: x + 152, y: y + 152};

  return (
    <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
      <ChalkCircle
        cx={x + 78}
        cy={y + 76}
        rx={48}
        ry={44}
        startFrame={startFrame}
        durationFrames={30}
        seed={18}
      />
      <ChalkLine
        d={`M ${handleStart.x} ${handleStart.y} L ${handleEnd.x} ${handleEnd.y}`}
        startFrame={startFrame + 28}
        durationFrames={18}
        strokeWidth={7}
      />
      <ChalkLine
        d={`M ${x + 55} ${y + 76} C ${x + 72} ${y + 64}, ${x + 93} ${
          y + 66
        }, ${x + 103} ${y + 82}`}
        startFrame={startFrame + 46}
        durationFrames={22}
        strokeWidth={4}
        tone="accent"
      />
    </svg>
  );
};

export const ChalkSideNote = ({
  x,
  y,
  width,
  height,
  startFrame,
  title,
  children,
}: Positioned & {
  width: number;
  height: number;
  startFrame: number;
  title: string;
  children: ReactNode;
}) => (
  <div className="chalk-side-note" style={{left: x, top: y, width, height}}>
    <svg className="chalk-side-note__ink" viewBox="0 0 420 320">
      <ChalkBox
        x={10}
        y={12}
        width={width - 20}
        height={height - 24}
        startFrame={startFrame}
        durationFrames={34}
        seed={24}
        tone="muted"
      />
    </svg>
    <ChalkText
      className="chalk-side-note__title"
      startFrame={startFrame + 28}
      durationFrames={28}
    >
      {title}
    </ChalkText>
    <ChalkText
      className="chalk-side-note__body"
      startFrame={startFrame + 54}
      durationFrames={44}
      settledOpacity={0.9}
    >
      {children}
    </ChalkText>
  </div>
);

export const ChalkFormula = ({
  x,
  y,
  startFrame,
  text,
}: Positioned & {startFrame: number; text: string}) => (
  <div className="chalk-formula" style={{left: x, top: y}}>
    <ChalkText startFrame={startFrame} durationFrames={62}>
      {text}
    </ChalkText>
  </div>
);

export const ChalkChecklist = ({
  x,
  y,
  startFrame,
  items,
}: Positioned & {startFrame: number; items: string[]}) => (
  <div className="chalk-checklist" style={{left: x, top: y}}>
    {items.map((item, index) => {
      const itemStart = startFrame + index * 28;
      return (
        <div className="chalk-checklist__item" key={item}>
          <svg className="chalk-checklist__box" viewBox="0 0 44 44">
            <ChalkBox
              x={6}
              y={7}
              width={30}
              height={28}
              startFrame={itemStart}
              durationFrames={18}
              seed={32 + index}
              tone="muted"
            />
            <ChalkLine
              d="M 13 22 L 20 29 L 33 14"
              startFrame={itemStart + 16}
              durationFrames={16}
              strokeWidth={4}
              tone="accent"
            />
          </svg>
          <ChalkText
            className="chalk-checklist__label"
            startFrame={itemStart + 12}
            durationFrames={34}
            settledOpacity={0.9}
          >
            {item}
          </ChalkText>
        </div>
      );
    })}
  </div>
);

export const ChalkComparison = ({
  x,
  y,
  width,
  height,
  startFrame,
}: Positioned & {width: number; height: number; startFrame: number}) => {
  const columnGap = 52;
  const columnWidth = (width - columnGap) / 2;
  const mythX = x;
  const realityX = x + columnWidth + columnGap;

  return (
    <div className="chalk-comparison">
      <svg className="chalk-comparison__ink" viewBox="0 0 1920 1080">
        <ChalkBox
          x={mythX}
          y={y}
          width={columnWidth}
          height={height}
          startFrame={startFrame}
          durationFrames={36}
          seed={40}
          tone="muted"
        />
        <ChalkBox
          x={realityX}
          y={y}
          width={columnWidth}
          height={height}
          startFrame={startFrame + 16}
          durationFrames={36}
          seed={42}
        />
      </svg>

      <div
        className="chalk-comparison__column"
        style={{left: mythX, top: y, width: columnWidth, height}}
      >
        <ChalkText
          className="chalk-comparison__heading"
          startFrame={startFrame + 28}
          durationFrames={24}
        >
          Myth
        </ChalkText>
        <ChalkText
          className="chalk-comparison__statement"
          startFrame={startFrame + 52}
          durationFrames={44}
        >
          AI is magic
        </ChalkText>
      </div>

      <div
        className="chalk-comparison__column"
        style={{left: realityX, top: y, width: columnWidth, height}}
      >
        <ChalkText
          className="chalk-comparison__heading"
          startFrame={startFrame + 44}
          durationFrames={32}
        >
          Reality
        </ChalkText>
        <ChalkText
          className="chalk-comparison__statement"
          startFrame={startFrame + 74}
          durationFrames={58}
        >
          AI predicts useful patterns
        </ChalkText>
      </div>

      <ChalkCrossOut
        x={mythX + 120}
        y={y + 122}
        width={columnWidth - 240}
        height={94}
        startFrame={startFrame + 102}
        durationFrames={22}
      />
      <ChalkCircleHighlight
        cx={realityX + columnWidth * 0.52}
        cy={y + 172}
        rx={columnWidth * 0.38}
        ry={70}
        startFrame={startFrame + 128}
        durationFrames={32}
      />
    </div>
  );
};
