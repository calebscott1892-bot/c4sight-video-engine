// The Host — structural SVG.
// Late 20s–mid 30s read. Henley/rolled-sleeve shirt, work trousers, sensible shoes.
// Default expression: dry, observant, slightly skeptical. Two skin/hair variants.

type View = "front" | "blackboard" | "desk";
type Expression =
  | "dry"
  | "raised-brow"
  | "smile"
  | "exasperated"
  | "curious";
type Pose = "gesture" | "two-tap-ready" | "brushing-dust" | "arms-crossed" | null;
type Variant = "a" | "b";

const PAPER = "#EFE7D6";
const CHALK = "#F4EDE0";
const SLATE = "#1A1F1C";
const INK = "#221F1F";
const LAVENDER = "#B9A8C7";

const variants: Record<Variant, { skin: string; skinShadow: string; hair: string; shirt: string; shirtShadow: string; trousers: string }> = {
  // Default — warm mid skin, dark hair, oatmeal henley, charcoal trousers
  a: {
    skin: "#D9B392",
    skinShadow: "#B98E6E",
    hair: "#2A1F1A",
    shirt: "#E6DCC4",
    shirtShadow: "#C8BB9A",
    trousers: "#3A3531",
  },
  // Variant — cooler skin, lighter auburn hair, slate-blue button-down, olive trousers
  b: {
    skin: "#E8C9AE",
    skinShadow: "#C7A487",
    hair: "#7A3A22",
    shirt: "#A9B1A8",
    shirtShadow: "#7E867D",
    trousers: "#4A4A36",
  },
};

interface HostProps {
  view?: View;
  expression?: Expression;
  pose?: Pose;
  variant?: Variant;
  size?: number;
  glasses?: boolean;
  showChalk?: boolean;
  showNotebook?: boolean;
}

function Eyes({
  expression,
  glasses,
}: {
  expression: Expression;
  glasses: boolean;
}) {
  // Eye centers in face frame (0,0) ≈ nose bridge
  const cfg: Record<Expression, { closed: boolean; pupilDx: number; squint: boolean }> = {
    dry: { closed: false, pupilDx: 0.3, squint: false },
    "raised-brow": { closed: false, pupilDx: 0.4, squint: false },
    smile: { closed: false, pupilDx: 0, squint: true },
    exasperated: { closed: true, pupilDx: 0, squint: false },
    curious: { closed: false, pupilDx: 0, squint: false },
  };
  const c = cfg[expression];

  return (
    <g>
      {[-1, 1].map((side) => {
        const cx = side * 4.6;
        const cy = 0;
        if (c.closed) {
          return (
            <path
              key={side}
              d={`M ${cx - 2.2} ${cy} Q ${cx} ${cy + 0.8} ${cx + 2.2} ${cy}`}
              stroke={INK}
              strokeWidth={0.9}
              fill="none"
              strokeLinecap="round"
            />
          );
        }
        if (c.squint) {
          return (
            <path
              key={side}
              d={`M ${cx - 2.0} ${cy + 0.4} Q ${cx} ${cy - 1.0} ${cx + 2.0} ${cy + 0.4}`}
              stroke={INK}
              strokeWidth={0.9}
              fill="none"
              strokeLinecap="round"
            />
          );
        }
        return (
          <g key={side}>
            <ellipse cx={cx} cy={cy} rx={1.6} ry={1.6} fill={CHALK} stroke={INK} strokeWidth={0.5} />
            <circle cx={cx + c.pupilDx} cy={cy + 0.2} r={0.85} fill={INK} />
          </g>
        );
      })}
      {glasses && (
        <g stroke={INK} strokeWidth={0.7} fill="none">
          <circle cx={-4.6} cy={0} r={2.6} />
          <circle cx={4.6} cy={0} r={2.6} />
          <path d="M -2.0 0 L 2.0 0" />
          <path d="M -7.2 -0.4 L -10 -1.0" />
          <path d="M 7.2 -0.4 L 10 -1.0" />
        </g>
      )}
    </g>
  );
}

function Brows({ expression }: { expression: Expression }) {
  const y = -3.6;
  const map: Record<Expression, { left: string; right: string }> = {
    dry: {
      left: `M -7 ${y} L -2.5 ${y - 0.2}`,
      right: `M 2.5 ${y - 0.2} L 7 ${y}`,
    },
    "raised-brow": {
      left: `M -7 ${y + 0.2} L -2.5 ${y}`,
      right: `M 2.5 ${y - 1.4} L 7 ${y - 0.6}`,
    },
    smile: {
      left: `M -7 ${y - 0.2} Q -4.5 ${y - 0.6} -2.5 ${y}`,
      right: `M 2.5 ${y} Q 4.5 ${y - 0.6} 7 ${y - 0.2}`,
    },
    exasperated: {
      left: `M -7 ${y - 0.1} L -2.5 ${y + 0.2}`,
      right: `M 2.5 ${y + 0.2} L 7 ${y - 0.1}`,
    },
    curious: {
      left: `M -7 ${y - 0.2} Q -4.5 ${y - 1.0} -2.5 ${y - 0.4}`,
      right: `M 2.5 ${y - 0.4} Q 4.5 ${y - 1.0} 7 ${y - 0.2}`,
    },
  };
  const b = map[expression];
  return (
    <g stroke={INK} strokeWidth={0.9} fill="none" strokeLinecap="round">
      <path d={b.left} />
      <path d={b.right} />
    </g>
  );
}

function Mouth({ expression }: { expression: Expression }) {
  const y = 5;
  const map: Record<Expression, string> = {
    dry: `M -2.4 ${y} L 2.4 ${y}`,
    "raised-brow": `M -2.0 ${y} L 2.4 ${y + 0.2}`,
    smile: `M -2.6 ${y - 0.2} Q 0 ${y - 1.6} 2.6 ${y - 0.2}`,
    exasperated: `M -2.4 ${y + 0.4} Q 0 ${y - 0.2} 2.4 ${y + 0.4}`,
    curious: `M -1.8 ${y} Q 0 ${y + 0.6} 1.8 ${y}`,
  };
  return (
    <path d={map[expression]} stroke={INK} strokeWidth={0.9} fill="none" strokeLinecap="round" />
  );
}

function Head({
  expression,
  variant,
  glasses,
  tilt = 0,
  hair = "default",
}: {
  expression: Expression;
  variant: Variant;
  glasses: boolean;
  tilt?: number;
  hair?: "default";
}) {
  const v = variants[variant];
  return (
    <g transform={`rotate(${tilt} 0 6)`}>
      {/* neck */}
      <path d="M -3 12 L -3 18 L 3 18 L 3 12 Z" fill={v.skin} stroke={INK} strokeWidth={0.7} />
      {/* shadow under jaw */}
      <path d="M -3 12 L 3 12 L 2.8 13.4 L -2.8 13.4 Z" fill={v.skinShadow} opacity={0.7} />
      {/* face */}
      <path
        d="M -8.5 0 Q -8.5 -10 0 -10 Q 8.5 -10 8.5 0 Q 8.5 8 5 11 Q 0 13 -5 11 Q -8.5 8 -8.5 0 Z"
        fill={v.skin}
        stroke={INK}
        strokeWidth={0.9}
      />
      {/* ear */}
      <path d="M -8.5 0 Q -10 1 -9.5 4 Q -9 5 -8.5 5" fill={v.skin} stroke={INK} strokeWidth={0.7} />
      <path d="M 8.5 0 Q 10 1 9.5 4 Q 9 5 8.5 5" fill={v.skin} stroke={INK} strokeWidth={0.7} />
      {/* hair — slightly shaped, deliberately not a helmet */}
      <path
        d={
          variant === "a"
            ? "M -8.6 -2 Q -10 -10 -2 -11 Q 6 -12 8.6 -7 Q 9 -3 8.6 -2 Q 6 -7 -2 -7 Q -7 -7 -8.6 -2 Z"
            : "M -8.6 -2 Q -11 -8 -3 -11 Q 5 -12 8.6 -6 Q 9 -3 8.6 -2 Q 6 -8 -1 -8 Q -6 -8 -8.6 -2 Z"
        }
        fill={v.hair}
      />
      {/* nose */}
      <path d="M 0 -1 L -1 4 Q 0 5 1 4 Z" fill={v.skinShadow} opacity={0.7} stroke={INK} strokeWidth={0.5} strokeLinecap="round" fillRule="evenodd" />
      <Brows expression={expression} />
      <Eyes expression={expression} glasses={glasses} />
      <Mouth expression={expression} />
      {/* slight stubble shadow for read of "adult, late 20s" */}
      <path d="M -5 8 Q 0 9.5 5 8" stroke={v.skinShadow} strokeWidth={0.4} fill="none" opacity={0.45} />
    </g>
  );
}

function Body({
  variant,
  pose,
  view,
  showChalk,
  showNotebook,
}: {
  variant: Variant;
  pose: Pose;
  view: View;
  showChalk: boolean;
  showNotebook: boolean;
}) {
  const v = variants[variant];

  // Arm geometry — depends on pose
  const arms = (() => {
    if (pose === "gesture") {
      return {
        left: { hand: { x: -22, y: 32 }, ctrl: { x: -22, y: 22 } },
        right: { hand: { x: 17, y: 26 }, ctrl: { x: 16, y: 22 } },
      };
    }
    if (pose === "two-tap-ready") {
      // chalk-up at shoulder, ready to tap
      return {
        left: { hand: { x: -14, y: 36 }, ctrl: { x: -14, y: 28 } },
        right: { hand: { x: 16, y: 20 }, ctrl: { x: 18, y: 22 } },
      };
    }
    if (pose === "arms-crossed") {
      // Forearms fold horizontally across chest. Hands rest on opposite upper arms.
      // Right arm crosses on top (slightly higher), left arm tucked underneath.
      return {
        left: { hand: { x: 9, y: 35 }, ctrl: { x: -6, y: 36 } },
        right: { hand: { x: -9, y: 30 }, ctrl: { x: 6, y: 31 } },
      };
    }
    if (pose === "brushing-dust") {
      // both hands near each other in front, brushing
      return {
        left: { hand: { x: -2, y: 30 }, ctrl: { x: -8, y: 24 } },
        right: { hand: { x: 6, y: 28 }, ctrl: { x: 10, y: 22 } },
      };
    }
    if (view === "blackboard") {
      // chalk hand up at board, other hand at side
      return {
        left: { hand: { x: -14, y: 38 }, ctrl: { x: -14, y: 28 } },
        right: { hand: { x: 22, y: 14 }, ctrl: { x: 20, y: 18 } },
      };
    }
    if (view === "desk") {
      // both forward — leaning into notebook
      return {
        left: { hand: { x: -8, y: 30 }, ctrl: { x: -10, y: 24 } },
        right: { hand: { x: 8, y: 30 }, ctrl: { x: 10, y: 24 } },
      };
    }
    // default front — relaxed at sides, notebook in left hand
    return {
      left: { hand: { x: -14, y: 38 }, ctrl: { x: -14, y: 28 } },
      right: { hand: { x: 14, y: 38 }, ctrl: { x: 14, y: 28 } },
    };
  })();

  return (
    <g>
      {/* trousers */}
      <path
        d="M -10 56 L -12 96 L -3 96 L -1 70 L 1 70 L 3 96 L 12 96 L 10 56 Z"
        fill={v.trousers}
        stroke={INK}
        strokeWidth={0.9}
        strokeLinejoin="round"
      />
      {/* shoes */}
      <path d="M -13 96 L -14 100 L -2 100 L -3 96 Z" fill={INK} stroke={INK} strokeWidth={0.6} />
      <path d="M 13 96 L 14 100 L 2 100 L 3 96 Z" fill={INK} stroke={INK} strokeWidth={0.6} />
      {/* shirt — henley with rolled sleeves, slightly worn */}
      <path
        d="M -14 22 Q -8 18 0 18 Q 8 18 14 22 L 16 56 L -16 56 Z"
        fill={v.shirt}
        stroke={INK}
        strokeWidth={0.9}
        strokeLinejoin="round"
      />
      {/* placket */}
      <path d="M 0 18 L 0 32" stroke={INK} strokeWidth={0.7} />
      <circle cx={0} cy={22} r={0.6} fill={INK} />
      <circle cx={0} cy={26} r={0.6} fill={INK} />
      <circle cx={0} cy={30} r={0.6} fill={INK} />
      {/* shadow fold */}
      <path d="M -16 56 L 16 56 L 14 50 L -14 50 Z" fill={v.shirtShadow} opacity={0.4} />

      {/* sleeves — drawn as thick strokes from shoulder to hand */}
      {(["left", "right"] as const).map((side) => {
        const a = arms[side];
        const sx = side === "left" ? -13 : 13;
        // Right hand becomes a closed fist when holding chalk.
        const isFist = side === "right" && showChalk;
        // Approximate forearm angle so palm orients along the arm.
        const dx = a.hand.x - a.ctrl.x;
        const dy = a.hand.y - a.ctrl.y;
        const armAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
        // Palm faces forward (perpendicular to forearm), fingers point along arm direction.
        const palmRot = armAngle - 90;
        return (
          <g key={side}>
            <path
              d={`M ${sx} 22 Q ${a.ctrl.x} ${a.ctrl.y} ${a.hand.x} ${a.hand.y}`}
              stroke={INK}
              strokeWidth={5.4}
              strokeLinecap="round"
              fill="none"
            />
            <path
              d={`M ${sx} 22 Q ${a.ctrl.x} ${a.ctrl.y} ${a.hand.x} ${a.hand.y}`}
              stroke={v.shirt}
              strokeWidth={4.2}
              strokeLinecap="round"
              fill="none"
            />
            {/* rolled cuff — small notch where sleeve ends */}
            <circle cx={a.hand.x - dx * 0.15} cy={a.hand.y - dy * 0.15} r={1.0} fill={v.shirtShadow} stroke={INK} strokeWidth={0.4} />
            {/* hand — palm + fingers, or closed fist if holding chalk */}
            <g transform={`translate(${a.hand.x} ${a.hand.y}) rotate(${palmRot})`}>
              {/* palm: flattened oval, ~4.5 wide x 3 tall */}
              <ellipse cx={0} cy={0} rx={2.25} ry={1.5} fill={v.skin} stroke={INK} strokeWidth={0.6} />
              {!isFist && (
                <g stroke={INK} strokeWidth={0.5} strokeLinecap="round" fill="none">
                  {/* three short finger lines from upper edge, slight fan */}
                  <path d="M -1.2 -1.4 L -1.5 -2.9" />
                  <path d="M 0 -1.5 L 0 -3.0" />
                  <path d="M 1.2 -1.4 L 1.5 -2.9" />
                </g>
              )}
              {isFist && (
                // Knuckle indication on the closed fist
                <path d="M -1.6 -1.0 Q 0 -1.6 1.6 -1.0" stroke={INK} strokeWidth={0.4} fill="none" opacity={0.6} />
              )}
            </g>
          </g>
        );
      })}

      {/* chalk in right hand — sits above the closed fist */}
      {showChalk && (
        <g transform={`translate(${arms.right.hand.x} ${arms.right.hand.y - 1.6})`}>
          <rect x={-0.45} y={-3.4} width={0.9} height={3.6} fill={CHALK} stroke={INK} strokeWidth={0.3} />
        </g>
      )}

      {/* notebook in left hand (front view default) */}
      {showNotebook && (
        <g transform={`translate(${arms.left.hand.x - 4} ${arms.left.hand.y - 4})`}>
          <rect x={0} y={0} width={6} height={8} fill={CHALK} stroke={INK} strokeWidth={0.6} />
          <path d="M 1 2 L 5 2 M 1 4 L 5 4 M 1 6 L 4 6" stroke={INK} strokeWidth={0.3} />
          {/* bound spine */}
          <rect x={-0.4} y={0} width={0.6} height={8} fill={INK} />
        </g>
      )}

      {/* dust puff for brushing-dust pose */}
      {pose === "brushing-dust" && (
        <g opacity={0.7}>
          <circle cx={2} cy={26} r={0.6} fill={CHALK} />
          <circle cx={5} cy={24} r={0.5} fill={CHALK} />
          <circle cx={8} cy={26} r={0.4} fill={CHALK} />
          <circle cx={-2} cy={28} r={0.5} fill={CHALK} />
        </g>
      )}
    </g>
  );
}

export function Host({
  view = "front",
  expression = "dry",
  pose = null,
  variant = "a",
  size = 240,
  glasses = false,
  showChalk = false,
  showNotebook = false,
}: HostProps) {
  // viewBox: head extends from y=-12 to y=18, body from 18 to 100. Center at x=0.
  // So total height ~ 116 (-14 to 102), width ~ 50 (-25 to 25).
  const isBlackboard = view === "blackboard";
  const isDesk = view === "desk";

  return (
    <svg
      viewBox="-28 -16 56 122"
      width={size}
      height={(size * 122) / 56}
      style={{ overflow: "visible" }}
    >
      {/* if blackboard view, draw a slate panel behind */}
      {isBlackboard && (
        <g>
          <rect x={-2} y={-14} width={32} height={70} fill={SLATE} stroke={INK} strokeWidth={0.6} />
          <rect x={-2} y={56} width={32} height={2.4} fill="#3A332C" stroke={INK} strokeWidth={0.4} />
          {/* a partial chalk diagram */}
          <g stroke={CHALK} strokeWidth={0.6} fill="none" opacity={0.85}>
            <rect x={3} y={-6} width={7} height={5} />
            <rect x={14} y={-6} width={7} height={5} />
            <path d="M 10 -3.5 L 14 -3.5" />
            <path d="M 21 -3.5 L 24 -3.5" />
            <text x={3} y={-8} fill={CHALK} fontSize={2.2} fontFamily="serif">Input</text>
            <text x={14} y={-8} fill={CHALK} fontSize={2.2} fontFamily="serif">Model</text>
          </g>
          {/* chalk dust in air */}
          <g fill={CHALK} opacity={0.5}>
            <circle cx={20} cy={4} r={0.4} />
            <circle cx={22} cy={6} r={0.3} />
            <circle cx={18} cy={8} r={0.3} />
          </g>
        </g>
      )}

      {/* if desk view, draw a desk surface */}
      {isDesk && (
        <g>
          <path d="M -28 80 L 28 80 L 28 84 L -28 84 Z" fill="#9C8A6E" stroke={INK} strokeWidth={0.7} />
          {/* notebook on desk */}
          <rect x={2} y={70} width={14} height={10} fill={CHALK} stroke={INK} strokeWidth={0.6} />
          <path d="M 4 73 L 14 73 M 4 75 L 14 75 M 4 77 L 12 77" stroke={INK} strokeWidth={0.3} />
          {/* coffee cup */}
          <g transform="translate(-18 64)">
            <path d="M 0 0 L 1.4 14 Q 1.4 16 3 16 L 9 16 Q 11 16 11 14 L 12 0 Z" fill={CHALK} stroke={INK} strokeWidth={0.6} />
            <path d="M 11 4 Q 14 4 14 8 Q 14 12 11 12" fill="none" stroke={INK} strokeWidth={0.6} />
          </g>
        </g>
      )}

      <Body
        variant={variant}
        pose={pose}
        view={view}
        showChalk={showChalk || view === "blackboard" || pose === "two-tap-ready"}
        showNotebook={showNotebook || (view === "front" && pose === null)}
      />
      {/* head positioned above body */}
      <g transform="translate(0 0)">
        <Head
          expression={expression}
          variant={variant}
          glasses={glasses}
          tilt={
            expression === "curious" ? -6 :
            view === "desk" ? 12 :
            view === "blackboard" ? -2 : 0
          }
        />
      </g>
    </svg>
  );
}

export const hostVariants = variants;
