import {useCurrentFrame} from 'remotion';
import {progress} from '../lib/timing';

export type Point = {
  x: number;
  y: number;
};

type ChalkTone = 'primary' | 'muted' | 'accent';

type ChalkLineProps = {
  d: string;
  startFrame: number;
  durationFrames: number;
  className?: string;
  strokeWidth?: number;
  tone?: ChalkTone;
};

type ChalkArrowProps = {
  from: Point;
  to: Point;
  startFrame: number;
  durationFrames: number;
  bend?: number;
  tone?: ChalkTone;
  strokeWidth?: number;
};

type ChalkBoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  startFrame: number;
  durationFrames: number;
  seed?: number;
  tone?: ChalkTone;
  strokeWidth?: number;
};

type ChalkCircleProps = {
  cx: number;
  cy: number;
  rx: number;
  ry?: number;
  startFrame: number;
  durationFrames: number;
  seed?: number;
  tone?: ChalkTone;
  strokeWidth?: number;
};

const organicOffset = (seed: number, step: number, amount: number) => {
  const raw = Math.sin(seed * 12.9898 + step * 78.233) * 43758.5453;
  return (raw - Math.floor(raw) - 0.5) * amount;
};

const format = (value: number) => value.toFixed(1);

const cleanBoxPath = (
  x: number,
  y: number,
  width: number,
  height: number,
  seed = 0,
) => {
  const corner = Math.min(24, width * 0.08, height * 0.24);
  const topA = organicOffset(seed, 1, 4);
  const topB = organicOffset(seed, 2, 4);
  const rightA = organicOffset(seed, 3, 5);
  const rightB = organicOffset(seed, 4, 5);
  const bottomA = organicOffset(seed, 5, 4);
  const bottomB = organicOffset(seed, 6, 4);
  const leftA = organicOffset(seed, 7, 5);
  const leftB = organicOffset(seed, 8, 5);

  return [
    `M ${format(x + corner)} ${format(y + topA)}`,
    `C ${format(x + width * 0.33)} ${format(y + topB)}, ${format(
      x + width * 0.66,
    )} ${format(y - topA)}, ${format(x + width - corner)} ${format(
      y + topB,
    )}`,
    `C ${format(x + width + rightA)} ${format(y + corner)}, ${format(
      x + width + rightB,
    )} ${format(y + height - corner)}, ${format(x + width - corner)} ${format(
      y + height + bottomA,
    )}`,
    `C ${format(x + width * 0.66)} ${format(y + height + bottomB)}, ${format(
      x + width * 0.33,
    )} ${format(y + height - bottomA)}, ${format(x + corner)} ${format(
      y + height + bottomB,
    )}`,
    `C ${format(x + leftA)} ${format(y + height - corner)}, ${format(
      x + leftB,
    )} ${format(y + corner)}, ${format(x + corner)} ${format(y + topA)}`,
  ].join(' ');
};

const circlePath = (
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  seed = 0,
) => {
  const k = 0.5522847498;
  const a = organicOffset(seed, 1, 3);
  const b = organicOffset(seed, 2, 3);
  const c = organicOffset(seed, 3, 3);
  const d = organicOffset(seed, 4, 3);

  return [
    `M ${format(cx + rx + a)} ${format(cy + b)}`,
    `C ${format(cx + rx + a)} ${format(cy + ry * k)}, ${format(
      cx + rx * k,
    )} ${format(cy + ry + c)}, ${format(cx + d)} ${format(cy + ry + c)}`,
    `C ${format(cx - rx * k)} ${format(cy + ry + c)}, ${format(
      cx - rx + b,
    )} ${format(cy + ry * k)}, ${format(cx - rx + b)} ${format(cy + d)}`,
    `C ${format(cx - rx + b)} ${format(cy - ry * k)}, ${format(
      cx - rx * k,
    )} ${format(cy - ry + a)}, ${format(cx + c)} ${format(cy - ry + a)}`,
    `C ${format(cx + rx * k)} ${format(cy - ry + a)}, ${format(
      cx + rx + a,
    )} ${format(cy - ry * k)}, ${format(cx + rx + a)} ${format(cy + b)}`,
  ].join(' ');
};

const arrowShaftPath = (from: Point, to: Point, bend = 0) => {
  const dx = to.x - from.x;
  const c1 = {x: from.x + dx * 0.36, y: from.y + bend};
  const c2 = {x: to.x - dx * 0.36, y: to.y - bend};

  return {
    d: `M ${format(from.x)} ${format(from.y)} C ${format(c1.x)} ${format(
      c1.y,
    )}, ${format(c2.x)} ${format(c2.y)}, ${format(to.x)} ${format(to.y)}`,
    c2,
  };
};

const arrowHeadPath = (to: Point, control: Point) => {
  const angle = Math.atan2(to.y - control.y, to.x - control.x);
  const length = 34;
  const spread = 0.52;
  const sideA = {
    x: to.x - Math.cos(angle - spread) * length,
    y: to.y - Math.sin(angle - spread) * length,
  };
  const sideB = {
    x: to.x - Math.cos(angle + spread) * length,
    y: to.y - Math.sin(angle + spread) * length,
  };

  return `M ${format(sideA.x)} ${format(sideA.y)} L ${format(to.x)} ${format(
    to.y,
  )} L ${format(sideB.x)} ${format(sideB.y)}`;
};

export const ChalkLine = ({
  d,
  startFrame,
  durationFrames,
  className,
  strokeWidth = 7,
  tone = 'primary',
}: ChalkLineProps) => {
  const frame = useCurrentFrame();
  const draw = progress(frame, startFrame, durationFrames);
  const dashOffset = 1 - draw;

  return (
    <g
      className={['chalk-line', `chalk-line--${tone}`, className]
        .filter(Boolean)
        .join(' ')}
    >
      <path
        className="chalk-line__drag"
        d={d}
        pathLength="1"
        strokeWidth={strokeWidth + 2.2}
        strokeDasharray="1"
        strokeDashoffset={dashOffset}
      />
      <path
        className="chalk-line__main"
        d={d}
        pathLength="1"
        strokeWidth={strokeWidth}
        strokeDasharray="1"
        strokeDashoffset={dashOffset}
      />
      <path
        className="chalk-line__grain"
        d={d}
        pathLength="1"
        strokeWidth={Math.max(2.4, strokeWidth * 0.38)}
        strokeDasharray="1"
        strokeDashoffset={dashOffset}
      />
    </g>
  );
};

export const ChalkBox = ({
  x,
  y,
  width,
  height,
  startFrame,
  durationFrames,
  seed = 0,
  tone = 'primary',
  strokeWidth = 7,
}: ChalkBoxProps) => {
  const mainPath = cleanBoxPath(x, y, width, height, seed);
  const echoPath = cleanBoxPath(x + 4, y + 4, width - 8, height - 8, seed + 4);

  return (
    <g className="chalk-box">
      <ChalkLine
        d={mainPath}
        startFrame={startFrame}
        durationFrames={durationFrames}
        strokeWidth={strokeWidth}
        tone={tone}
      />
      <ChalkLine
        d={echoPath}
        startFrame={startFrame + 6}
        durationFrames={durationFrames + 8}
        strokeWidth={Math.max(2.2, strokeWidth * 0.4)}
        tone={tone === 'primary' ? 'muted' : tone}
      />
    </g>
  );
};

export const ChalkCircle = ({
  cx,
  cy,
  rx,
  ry = rx,
  startFrame,
  durationFrames,
  seed = 0,
  tone = 'primary',
  strokeWidth = 7,
}: ChalkCircleProps) => {
  const mainPath = circlePath(cx, cy, rx, ry, seed);
  const echoPath = circlePath(cx + 3, cy + 2, rx - 3, ry - 2, seed + 5);

  return (
    <g className="chalk-circle">
      <ChalkLine
        d={mainPath}
        startFrame={startFrame}
        durationFrames={durationFrames}
        strokeWidth={strokeWidth}
        tone={tone}
      />
      <ChalkLine
        d={echoPath}
        startFrame={startFrame + 7}
        durationFrames={durationFrames + 6}
        strokeWidth={Math.max(2.4, strokeWidth * 0.34)}
        tone={tone === 'primary' ? 'muted' : tone}
      />
    </g>
  );
};

export const ChalkArrow = ({
  from,
  to,
  startFrame,
  durationFrames,
  bend = 0,
  tone = 'primary',
  strokeWidth = 7,
}: ChalkArrowProps) => {
  const lineDuration = Math.max(20, durationFrames - 12);
  const shaft = arrowShaftPath(from, to, bend);
  const head = arrowHeadPath(to, shaft.c2);

  return (
    <g className="chalk-arrow">
      <ChalkLine
        d={shaft.d}
        startFrame={startFrame}
        durationFrames={lineDuration}
        strokeWidth={strokeWidth}
        tone={tone}
      />
      <ChalkLine
        d={head}
        startFrame={startFrame + lineDuration - 1}
        durationFrames={14}
        strokeWidth={strokeWidth}
        tone={tone}
      />
    </g>
  );
};
