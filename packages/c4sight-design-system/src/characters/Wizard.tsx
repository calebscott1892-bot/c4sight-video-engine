// Tiny Alien Wizard — structural SVG.
// Props control view (front/3-4-left/3-4-right/side), expression, and pose.
// Texture/linework refined in post; this nails proportions, palette, gesture.

type View = "front" | "three-quarter-left" | "three-quarter-right" | "side";
type Expression =
  | "neutral"
  | "sulking"
  | "panicked"
  | "smug"
  | "disappointed"
  | "shrug";
type Pose = "credit" | "debunked" | "stealing" | null;

const LAVENDER = "#B9A8C7";
const LAVENDER_SHADOW = "#9D8AAE";
const SLATE = "#1A1F1C";
const INK = "#221F1F";
const CHALK = "#F4EDE0";
const RED = "#D7382C";

interface WizardProps {
  view?: View;
  expression?: Expression;
  pose?: Pose;
  size?: number;
  showWand?: boolean;
  /** rotate hat slightly forward (e.g. for the 'NO.' beat) */
  hatTilt?: number;
  /** translate hat downward (hat-fallen-forward) */
  hatDrop?: number;
}

// Eyes for each expression. Coordinates are in the wizard's local face frame
// where the face center is approximately (0, 0). Y-up is negative.
function Eyes({
  expression,
  view,
}: {
  expression: Expression;
  view: View;
}) {
  // Base eye centers — large, slightly tired (lower lid pulled up)
  const isSide = view === "side";
  const isThreeQ = view.startsWith("three-quarter");
  const dir = view === "three-quarter-right" ? 1 : view === "three-quarter-left" ? -1 : 0;

  if (isSide) {
    // Side profile — single eye visible
    const cx = 7;
    const cy = 0;
    return (
      <g>
        <ellipse cx={cx} cy={cy} rx={3} ry={3.4} fill={CHALK} stroke={INK} strokeWidth={0.7} />
        <circle cx={cx + 0.6} cy={cy + 0.4} r={2.1} fill={INK} />
        <circle cx={cx + 0.9} cy={cy + 0.6} r={0.6} fill={SLATE} />
        {/* tired upper lid */}
        <path d={`M ${cx - 3} ${cy - 0.6} Q ${cx} ${cy - 2.4} ${cx + 3} ${cy - 0.6}`} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
      </g>
    );
  }

  // Two-eye configuration. Spacing tightens for 3/4 view.
  const spacing = isThreeQ ? 7 : 8;
  const offset = dir * 1.6;

  // Per-expression deltas
  // pupilDx: where the big pupil sits inside the eye
  // lidDrop: how much the upper lid covers the eye (tired-ness)
  // browAngle: degrees, applied to brow path
  // mouth: rendered separately
  const config: Record<Expression, { pupilDx: number; pupilDy: number; lidDrop: number; squint: boolean; tearStreak?: boolean }> = {
    neutral: { pupilDx: 0, pupilDy: 0.3, lidDrop: 1.0, squint: false },
    sulking: { pupilDx: 0, pupilDy: 1.4, lidDrop: 1.6, squint: false },
    panicked: { pupilDx: 0, pupilDy: -0.4, lidDrop: -0.6, squint: false },
    smug: { pupilDx: 0.6, pupilDy: 0.6, lidDrop: 1.8, squint: true },
    disappointed: { pupilDx: 0, pupilDy: 0.8, lidDrop: 1.4, squint: false },
    shrug: { pupilDx: 0, pupilDy: 0.4, lidDrop: 1.2, squint: false },
  };
  const c = config[expression];

  return (
    <g>
      {[-1, 1].map((side) => {
        const cx = side * spacing / 2 + offset * 0.4;
        const cy = 0;
        const rx = c.squint ? 2.6 : 3.0;
        const ry = c.squint ? 1.4 : 3.4;
        return (
          <g key={side}>
            {/* eye white */}
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={CHALK} stroke={INK} strokeWidth={0.7} />
            {/* big pupil, small iris — only if not squinting hard */}
            {!c.squint && (
              <>
                <circle cx={cx + c.pupilDx} cy={cy + c.pupilDy} r={2.1} fill={INK} />
                <circle cx={cx + c.pupilDx + 0.5} cy={cy + c.pupilDy - 0.4} r={0.55} fill={SLATE} opacity={0.85} />
              </>
            )}
            {c.squint && (
              <path d={`M ${cx - rx + 0.4} ${cy} Q ${cx} ${cy + 0.6} ${cx + rx - 0.4} ${cy}`} stroke={INK} strokeWidth={1.1} fill="none" strokeLinecap="round" />
            )}
            {/* tired upper lid */}
            <path
              d={`M ${cx - rx} ${cy - ry + c.lidDrop} Q ${cx} ${cy - ry + c.lidDrop - 1.4} ${cx + rx} ${cy - ry + c.lidDrop}`}
              fill={LAVENDER_SHADOW}
              stroke={INK}
              strokeWidth={0.7}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </g>
  );
}

function Brows({ expression }: { expression: Expression }) {
  // Drawn above eyes (negative y)
  const y = -5.8;
  const map: Record<Expression, { left: string; right: string }> = {
    neutral: {
      left: `M -7 ${y} Q -4 ${y - 0.4} -1.5 ${y + 0.2}`,
      right: `M 1.5 ${y + 0.2} Q 4 ${y - 0.4} 7 ${y}`,
    },
    sulking: {
      left: `M -7.2 ${y - 0.4} Q -4 ${y + 0.6} -1.4 ${y - 0.6}`,
      right: `M 1.4 ${y - 0.6} Q 4 ${y + 0.6} 7.2 ${y - 0.4}`,
    },
    panicked: {
      left: `M -7 ${y - 1.6} Q -4 ${y - 2.4} -1.6 ${y - 1.4}`,
      right: `M 1.6 ${y - 1.4} Q 4 ${y - 2.4} 7 ${y - 1.6}`,
    },
    smug: {
      left: `M -7 ${y + 0.2} Q -4 ${y - 1.0} -1.4 ${y - 0.4}`,
      right: `M 1.4 ${y - 0.4} Q 4 ${y - 1.0} 7 ${y + 0.2}`,
    },
    disappointed: {
      left: `M -7 ${y - 0.6} Q -4 ${y + 0.4} -1.4 ${y + 0.6}`,
      right: `M 1.4 ${y + 0.6} Q 4 ${y + 0.4} 7 ${y - 0.6}`,
    },
    shrug: {
      left: `M -7 ${y} Q -4 ${y - 0.6} -1.6 ${y + 0.4}`,
      right: `M 1.6 ${y + 0.4} Q 4 ${y - 0.6} 7 ${y}`,
    },
  };
  const b = map[expression];
  return (
    <g stroke={INK} strokeWidth={1.1} fill="none" strokeLinecap="round">
      <path d={b.left} />
      <path d={b.right} />
    </g>
  );
}

function Mouth({ expression, view }: { expression: Expression; view: View }) {
  const y = 5.5;
  const cx = view === "side" ? 6 : 0;
  const map: Record<Expression, string> = {
    neutral: `M ${cx - 2.2} ${y} L ${cx + 2.2} ${y}`,
    sulking: `M ${cx - 2.4} ${y + 0.6} Q ${cx} ${y - 1.0} ${cx + 2.4} ${y + 0.6}`,
    panicked: `M ${cx - 2.4} ${y} Q ${cx} ${y + 2.4} ${cx + 2.4} ${y}`,
    smug: `M ${cx - 3.0} ${y + 0.2} Q ${cx - 0.4} ${y - 1.6} ${cx + 3.0} ${y + 0.4}`,
    disappointed: `M ${cx - 2.6} ${y + 0.4} Q ${cx} ${y - 0.6} ${cx + 2.6} ${y + 0.4}`,
    shrug: `M ${cx - 2.0} ${y} Q ${cx} ${y + 0.6} ${cx + 2.0} ${y}`,
  };
  return (
    <path
      d={map[expression]}
      stroke={INK}
      strokeWidth={1.1}
      fill={expression === "panicked" ? SLATE : "none"}
      strokeLinecap="round"
    />
  );
}

function Hat({
  view,
  tilt = 0,
  drop = 0,
}: {
  view: View;
  tilt?: number;
  drop?: number;
}) {
  // Hat sits above face. Pointy, slate, three almost-right stars.
  // Local frame: face center at (0,0). Hat base ~ y = -10. Tip ~ y = -38.
  const isSide = view === "side";
  const skew = view === "three-quarter-left" ? -2 : view === "three-quarter-right" ? 2 : 0;

  // The hat shape — slightly bent tip, droops sideways for asymmetry
  const tipX = skew + (isSide ? -8 : 0);
  const tipY = -36 + drop;
  const baseY = -10 + drop;

  return (
    <g transform={`rotate(${tilt} 0 ${baseY})`}>
      {/* hat body */}
      <path
        d={`M -11 ${baseY} Q ${skew * 1.5} ${baseY - 18} ${tipX} ${tipY} Q ${tipX + 1.5} ${tipY + 1.5} ${tipX + 2} ${tipY + 0.4} Q ${skew * 1.5 + 4} ${baseY - 16} 11 ${baseY} Z`}
        fill={SLATE}
        stroke={INK}
        strokeWidth={1.0}
        strokeLinejoin="round"
      />
      {/* hat brim — a soft elliptical band */}
      <ellipse cx={0} cy={baseY + 0.4} rx={13} ry={2.2} fill={SLATE} stroke={INK} strokeWidth={1.0} />
      {/* almost-right stars */}
      {/* triangle */}
      <path d={`M ${-4 + skew} ${baseY - 7} L ${-2 + skew} ${baseY - 4} L ${-6 + skew} ${baseY - 4} Z`} fill={CHALK} stroke={INK} strokeWidth={0.5} />
      {/* wonky pentagon */}
      <path
        d={`M ${2 + skew * 0.6} ${baseY - 13} L ${4.4 + skew * 0.6} ${baseY - 11.4} L ${3.6 + skew * 0.6} ${baseY - 9} L ${0.6 + skew * 0.6} ${baseY - 9.2} L ${-0.2 + skew * 0.6} ${baseY - 11.6} Z`}
        fill={CHALK}
        stroke={INK}
        strokeWidth={0.5}
      />
      {/* uneven 5-point star */}
      <path
        d={`M ${tipX - 1} ${tipY + 8} L ${tipX - 0.2} ${tipY + 9.8} L ${tipX + 1.6} ${tipY + 10.2} L ${tipX + 0.4} ${tipY + 11.4} L ${tipX + 0.7} ${tipY + 13.4} L ${tipX - 0.9} ${tipY + 12.2} L ${tipX - 2.4} ${tipY + 13.0} L ${tipX - 1.8} ${tipY + 11.0} L ${tipX - 3.2} ${tipY + 9.8} L ${tipX - 1.4} ${tipY + 9.6} Z`}
        fill={CHALK}
        stroke={INK}
        strokeWidth={0.5}
      />
    </g>
  );
}

function Wand({
  x,
  y,
  rot = 0,
}: {
  x: number;
  y: number;
  rot?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      {/* shaft */}
      <rect x={-0.6} y={-9} width={1.4} height={11} fill={INK} stroke={INK} strokeWidth={0.3} />
      {/* chalk tip */}
      <rect x={-1.0} y={-11} width={2.2} height={2.4} fill={CHALK} stroke={INK} strokeWidth={0.3} />
      {/* small dust */}
      <circle cx={0.2} cy={-12} r={0.4} fill={CHALK} opacity={0.7} />
      <circle cx={1.2} cy={-12.6} r={0.3} fill={CHALK} opacity={0.5} />
    </g>
  );
}

function Body({
  view,
  expression,
  pose,
}: {
  view: View;
  expression: Expression;
  pose: Pose;
}) {
  // The wizard's body is mostly robe + sleeves. Translucent lavender.
  // Local frame: face center at (0,0). Robe top ~ y = 8. Robe puddle ~ y = 38.
  // Robe drags slightly — uneven hem.
  const armConfig = (() => {
    if (pose === "credit") {
      // Chest puffed, hands gesturing outward and up
      return {
        leftHand: { x: -16, y: 14 },
        rightHand: { x: 16, y: 14 },
        leftCtrl: { x: -14, y: 8 },
        rightCtrl: { x: 14, y: 8 },
      };
    }
    if (pose === "debunked") {
      // Slumped — hands hang low, shoulders down
      return {
        leftHand: { x: -7, y: 30 },
        rightHand: { x: 7, y: 30 },
        leftCtrl: { x: -8, y: 22 },
        rightCtrl: { x: 8, y: 22 },
      };
    }
    if (pose === "stealing") {
      // Sneaky — leaning, one hand reaching forward holding wand
      return {
        leftHand: { x: -9, y: 24 },
        rightHand: { x: 14, y: 18 },
        leftCtrl: { x: -10, y: 18 },
        rightCtrl: { x: 10, y: 16 },
      };
    }
    if (expression === "shrug") {
      return {
        leftHand: { x: -13, y: 16 },
        rightHand: { x: 13, y: 16 },
        leftCtrl: { x: -13, y: 12 },
        rightCtrl: { x: 13, y: 12 },
      };
    }
    if (expression === "panicked") {
      return {
        leftHand: { x: -14, y: 12 },
        rightHand: { x: 14, y: 12 },
        leftCtrl: { x: -12, y: 10 },
        rightCtrl: { x: 12, y: 10 },
      };
    }
    // Default — hands tucked at sides
    return {
      leftHand: { x: -8, y: 26 },
      rightHand: { x: 8, y: 26 },
      leftCtrl: { x: -9, y: 18 },
      rightCtrl: { x: 9, y: 18 },
    };
  })();

  // Tilt body slightly for 3/4
  const bodyTilt =
    view === "three-quarter-left" ? -3 : view === "three-quarter-right" ? 3 : 0;
  const bodyShift = view === "side" ? 1.5 : 0;

  return (
    <g transform={`translate(${bodyShift} 0)`} opacity={0.96}>
      {/* robe — uneven trapezoid that puddles. Drag side depends on view. */}
      <path
        d={`
          M -10 8
          L 10 8
          L 18 38
          Q 16 41 12 41
          L -12 41
          Q -17 41 -19 38
          Z
        `}
        transform={`rotate(${bodyTilt} 0 24)`}
        fill={LAVENDER}
        stroke={INK}
        strokeWidth={1.0}
        strokeLinejoin="round"
      />
      {/* puddle drag — robe pools to one side */}
      <path
        d={`M -19 38 Q -24 42 -22 44 L -8 44 L -12 41 Z`}
        transform={`rotate(${bodyTilt} 0 24)`}
        fill={LAVENDER_SHADOW}
        stroke={INK}
        strokeWidth={0.9}
      />
      {/* worn cuffs — tear marks at hem */}
      <path d={`M -14 41 L -13 43 M -8 41 L -7 43 M 0 41 L 1 43 M 7 41 L 8 43 M 13 41 L 14 43`} stroke={INK} strokeWidth={0.6} fill="none" />

      {/* sleeves — quadratic curves to hand positions */}
      <path
        d={`M -9 10 Q ${armConfig.leftCtrl.x} ${armConfig.leftCtrl.y} ${armConfig.leftHand.x} ${armConfig.leftHand.y}`}
        stroke={INK}
        strokeWidth={3.2}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M -9 10 Q ${armConfig.leftCtrl.x} ${armConfig.leftCtrl.y} ${armConfig.leftHand.x} ${armConfig.leftHand.y}`}
        stroke={LAVENDER}
        strokeWidth={2.4}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M 9 10 Q ${armConfig.rightCtrl.x} ${armConfig.rightCtrl.y} ${armConfig.rightHand.x} ${armConfig.rightHand.y}`}
        stroke={INK}
        strokeWidth={3.2}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d={`M 9 10 Q ${armConfig.rightCtrl.x} ${armConfig.rightCtrl.y} ${armConfig.rightHand.x} ${armConfig.rightHand.y}`}
        stroke={LAVENDER}
        strokeWidth={2.4}
        strokeLinecap="round"
        fill="none"
      />

      {/* hands — tiny lavender dots */}
      <circle cx={armConfig.leftHand.x} cy={armConfig.leftHand.y} r={1.6} fill={LAVENDER} stroke={INK} strokeWidth={0.7} />
      <circle cx={armConfig.rightHand.x} cy={armConfig.rightHand.y} r={1.6} fill={LAVENDER} stroke={INK} strokeWidth={0.7} />

      {/* the wand stays with the right hand for default & stealing pose */}
      {pose === "stealing" && (
        <g>
          <Wand x={armConfig.rightHand.x + 1} y={armConfig.rightHand.y - 1} rot={-30} />
        </g>
      )}
    </g>
  );
}

function Head({
  view,
  expression,
}: {
  view: View;
  expression: Expression;
}) {
  // Head is the lavender face area visible under the hat. Slightly oval.
  return (
    <g>
      <ellipse
        cx={0}
        cy={0}
        rx={view === "side" ? 9 : 11}
        ry={10}
        fill={LAVENDER}
        stroke={INK}
        strokeWidth={1.0}
      />
      {/* shadow under hat brim */}
      <path d={`M -11 -8.6 Q 0 -6 11 -8.6 L 11 -10 L -11 -10 Z`} fill={LAVENDER_SHADOW} opacity={0.6} />
      <Eyes expression={expression} view={view} />
      <Brows expression={expression} />
      <Mouth expression={expression} view={view} />
      {/* tear streak for sulking/disappointed */}
      {(expression === "sulking" || expression === "disappointed") && (
        <path d={`M ${view === "side" ? 8 : -3} 3 Q ${view === "side" ? 8 : -3} 6 ${view === "side" ? 7.5 : -3.5} 8`} stroke={INK} strokeWidth={0.5} fill="none" opacity={0.55} />
      )}
    </g>
  );
}

export function Wizard({
  view = "front",
  expression = "neutral",
  pose = null,
  size = 180,
  showWand = true,
  hatTilt = 0,
  hatDrop = 0,
}: WizardProps) {
  // Whole wizard fits inside a viewBox where origin is the face center.
  // Total height ~ 90 (hat tip -38 to robe puddle 44).
  return (
    <svg
      viewBox="-32 -42 64 92"
      width={size}
      height={(size * 92) / 64}
      style={{ overflow: "visible" }}
    >
      <Body view={view} expression={expression} pose={pose} />
      <Head view={view} expression={expression} />
      <Hat view={view} tilt={hatTilt} drop={hatDrop} />
      {/* Wand held in default pose (right hand-side, near body) */}
      {showWand && pose !== "stealing" && pose !== "credit" && (
        <Wand x={pose === "debunked" ? 7 : 9} y={pose === "debunked" ? 30 : 26} rot={pose === "debunked" ? 80 : 10} />
      )}
      {pose === "credit" && (
        // Wand floats next to puffed pose
        <Wand x={17} y={14} rot={-10} />
      )}
    </svg>
  );
}

export type { View as WizardView, Expression as WizardExpression, Pose as WizardPose, WizardProps };
export const wizardPalette = { LAVENDER, LAVENDER_SHADOW, SLATE, INK, CHALK, RED };
