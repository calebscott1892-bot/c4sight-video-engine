import { Wizard } from "./Wizard";
import { Host } from "./Host";

const PAPER = "#EFE7D6";
const PAPER_WARM = "#E5DAC1";
const SLATE = "#1A1F1C";
const SLATE_LIGHT = "#252B27";
const CHALK = "#F4EDE0";
const INK = "#221F1F";
const RED = "#D7382C";
const LAVENDER = "#B9A8C7";

function Frame({
  number,
  title,
  caption,
  bg,
  children,
}: {
  number: number;
  title: string;
  caption: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline justify-between mb-3 gap-6">
        <div className="flex items-baseline gap-4">
          <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 14, letterSpacing: "0.18em", opacity: 0.5 }}>
            FRAME {String(number).padStart(2, "0")}
          </div>
          <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 24, color: INK }}>{title}</div>
        </div>
        <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55 }}>
          1920 × 1080
        </div>
      </div>
      <div
        className="relative w-full"
        style={{
          aspectRatio: "16/9",
          background: bg,
          border: `1px solid ${INK}`,
          boxShadow: "3px 4px 0 rgba(34,31,31,0.18)",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0">{children}</div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(34,31,31,0.05) 1px, transparent 1px), radial-gradient(rgba(34,31,31,0.03) 1px, transparent 1px)",
            backgroundSize: "4px 4px, 7px 7px",
            backgroundPosition: "0 0, 2px 3px",
            mixBlendMode: "multiply",
          }}
        />
      </div>
      <div className="mt-3 max-w-[820px]" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.5, opacity: 0.75 }}>
        {caption}
      </div>
    </div>
  );
}

// Wizard from behind — small purpose-built SVG for frame 04
function WizardFromBehind({ size = 220 }: { size?: number }) {
  return (
    <svg viewBox="-40 -50 80 110" width={size} height={(size * 110) / 80}>
      {/* robe back — the dragging hem trails to one side */}
      <path
        d="M -10 8 L 10 8 L 18 38 Q 16 41 12 41 L -12 41 Q -17 41 -19 38 Z M -19 38 Q -28 44 -22 46 L -8 46 L -12 41 Z"
        fill={LAVENDER}
        stroke={INK}
        strokeWidth={1}
        strokeLinejoin="round"
      />
      {/* dust puff behind */}
      <g fill={CHALK} opacity={0.65}>
        <circle cx={-22} cy={45} r={1.4} />
        <circle cx={-26} cy={43} r={1.0} />
        <circle cx={-20} cy={48} r={0.8} />
      </g>
      {/* head/back of head — hat hides most of it */}
      <ellipse cx={0} cy={0} rx={10} ry={9} fill={LAVENDER} stroke={INK} strokeWidth={1} />
      {/* hat — slightly tilted forward (sulking) */}
      <g transform="rotate(-12 0 -10)">
        <path d="M -11 -10 Q 0 -28 2 -36 Q 3 -36 3.5 -35 Q 0 -28 11 -10 Z" fill={SLATE} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        <ellipse cx={0} cy={-9.6} rx={13} ry={2.2} fill={SLATE} stroke={INK} strokeWidth={1} />
        {/* one star visible from back */}
        <path d="M -3 -16 L -1 -13 L -5 -13 Z" fill={CHALK} stroke={INK} strokeWidth={0.4} />
        <path d="M 1.4 -22 L 2.6 -19.6 L 4.4 -19.4 L 3.0 -18 L 3.4 -16 L 1.4 -17 L -0.4 -16.4 L 0.6 -18.2 L -0.8 -19.8 L 1.0 -20 Z" fill={CHALK} stroke={INK} strokeWidth={0.4} />
      </g>
    </svg>
  );
}

// ─── Frame 01 — "Is AI magic?" ───
function Frame01() {
  return (
    <Frame
      number={1}
      title='"Is AI magic?"'
      caption="Cold open. Bold display type, generous negative space, paper-warm background. The wizard peeks in from the bottom-right corner, only his hat and one eye visible — hopeful. The frame doesn't answer the question yet; it just asks."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* type — large humanist serif, multi-line for breathing */}
        <text x={180} y={460} fontFamily="'Recoleta','Tiempos',serif" fontSize={220} fill={INK} fontWeight={500}>
          Is AI
        </text>
        <text x={180} y={680} fontFamily="'Recoleta','Tiempos',serif" fontSize={220} fill={INK} fontStyle="italic" fontWeight={500}>
          magic?
        </text>
        {/* small sub-line */}
        <text x={184} y={760} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK} opacity={0.55} letterSpacing={4}>
          C4SIGHT · EPISODE ONE
        </text>

        {/* Wizard peeking from bottom-right corner — just hat tip and one eye visible */}
        <g transform="translate(1660 880)">
          {/* hat */}
          <g transform="rotate(-8)">
            <path d="M -120 100 Q 0 -40 60 80 Q 64 84 70 80 Q 14 -32 130 100 Z" fill={SLATE} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
            <ellipse cx={0} cy={104} rx={150} ry={22} fill={SLATE} stroke={INK} strokeWidth={4} />
            {/* stars */}
            <path d="M -40 60 L -20 80 L -60 80 Z" fill={CHALK} stroke={INK} strokeWidth={2} />
            <path d="M 30 0 L 56 22 L 70 14 L 60 38 L 16 30 L 36 18 Z" fill={CHALK} stroke={INK} strokeWidth={2} />
            <path d="M 50 -30 L 56 -16 L 70 -14 L 60 -2 L 64 14 L 50 6 L 36 14 L 40 -2 L 30 -14 L 44 -16 Z" fill={CHALK} stroke={INK} strokeWidth={2} />
          </g>
          {/* one eye visible just below the hat brim */}
          <g transform="translate(40 130)">
            <ellipse cx={0} cy={0} rx={28} ry={32} fill={CHALK} stroke={INK} strokeWidth={3} />
            <circle cx={4} cy={4} r={20} fill={INK} />
            <circle cx={8} cy={-2} r={4} fill={SLATE} opacity={0.85} />
            {/* tired upper lid */}
            <path d="M -28 -12 Q 0 -28 28 -12" stroke={INK} strokeWidth={3} fill={LAVENDER} />
          </g>
        </g>
      </svg>
    </Frame>
  );
}

// ─── Frame 02 — Wizard takes credit ───
function Frame02() {
  // Floating chalk cards with claims
  const claims = [
    { x: 220, y: 260, r: -8, t: "writes your emails" },
    { x: 1480, y: 220, r: 6, t: "builds websites" },
    { x: 180, y: 720, r: 10, t: "does your homework" },
    { x: 1500, y: 700, r: -6, t: "thinks for you" },
    { x: 320, y: 480, r: -4, t: "knows everything" },
    { x: 1380, y: 460, r: 8, t: "is conscious" },
  ];
  return (
    <Frame
      number={2}
      title="The wizard takes credit"
      caption="Wizard centre frame, chest puffed, hands gesturing outward at a halo of chalk-card claims floating around him — every magical-thinking thing people attribute to AI. The cards are chalky, hand-drawn, slightly askew. He looks pleased with himself."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* slight floor shadow */}
        <ellipse cx={960} cy={920} rx={300} ry={14} fill={INK} opacity={0.18} />
        {/* claim cards */}
        {claims.map((c, i) => (
          <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.r})`}>
            <rect x={-150} y={-44} width={300} height={88} fill={SLATE} stroke={INK} strokeWidth={3} />
            <text x={0} y={10} fontFamily="'Recoleta','Tiempos',serif" fontSize={28} fill={CHALK} textAnchor="middle">
              {c.t}
            </text>
            {/* chalk underline */}
            <path d="M -110 28 L 110 28" stroke={CHALK} strokeWidth={2} opacity={0.75} />
          </g>
        ))}
        {/* connecting dotted lines from cards to wizard */}
        <g stroke={INK} strokeWidth={2} opacity={0.3} strokeDasharray="6 8" fill="none">
          <path d="M 400 280 Q 700 500 920 660" />
          <path d="M 1400 240 Q 1100 480 980 640" />
          <path d="M 360 700 Q 700 720 920 700" />
          <path d="M 1420 720 Q 1140 720 1000 700" />
        </g>
        {/* wizard centre, pose=credit, smug */}
        <g transform="translate(900 320) scale(8)">
          <Wizard pose="credit" expression="smug" size={1} />
        </g>
      </svg>
    </Frame>
  );
}

// ─── Frame 03 — "NO." ───
function Frame03() {
  return (
    <Frame
      number={3}
      title='"NO."'
      caption="Type-driven. Single word, enormous, dead-centred but with the period landing slightly off-axis for tension. The wizard sits below it, hat fallen forward over his eyes, a small puff of dust around his shoulders. The frame is the joke."
      bg={PAPER}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER} />
        {/* huge NO. */}
        <text x={960} y={620} fontFamily="'Recoleta','Tiempos',serif" fontSize={520} fill={INK} textAnchor="middle" fontWeight={600} letterSpacing={-12}>
          NO
        </text>
        <text x={1290} y={620} fontFamily="'Recoleta','Tiempos',serif" fontSize={520} fill={RED} textAnchor="middle" fontWeight={600}>
          .
        </text>
        {/* wizard, hat fallen forward */}
        <g transform="translate(960 800) scale(5)">
          <Wizard expression="sulking" hatDrop={6} hatTilt={-14} size={1} />
        </g>
        {/* dust puff */}
        <g fill={INK} opacity={0.18}>
          <circle cx={870} cy={920} r={6} />
          <circle cx={1050} cy={930} r={5} />
          <circle cx={910} cy={950} r={4} />
          <circle cx={1010} cy={945} r={4} />
        </g>
      </svg>
    </Frame>
  );
}

// ─── Frame 04 — Wizard's sad walk-off ───
function Frame04() {
  return (
    <Frame
      number={4}
      title="The wizard's sad walk-off"
      caption="Wizard from behind, walking left, robe dragging, hat slightly tilted, leaving a small puff of dust. The host stands to the right, arms crossed, unbothered, watching him go. Comedy of restraint — the host doesn't stop him."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* floor line */}
        <path d="M 0 880 L 1920 880" stroke={INK} strokeWidth={2} opacity={0.4} />
        {/* horizon shading */}
        <rect x={0} y={880} width={1920} height={200} fill="#C9B591" />
        {/* dust trail */}
        <g fill={INK} opacity={0.2}>
          <circle cx={680} cy={870} r={6} />
          <circle cx={620} cy={880} r={5} />
          <circle cx={560} cy={874} r={4} />
          <circle cx={500} cy={882} r={3} />
          <circle cx={450} cy={876} r={2.5} />
        </g>
        {/* wizard from behind, walking left */}
        <g transform="translate(560 540) scale(7)">
          <WizardFromBehind size={1} />
        </g>
        {/* host on right, arms crossed, watching, dry expression */}
        <g transform="translate(1380 480) scale(7)">
          <Host expression="dry" pose="arms-crossed" glasses size={1} />
        </g>
        {/* slight host shadow */}
        <ellipse cx={1490} cy={870} rx={140} ry={6} fill={INK} opacity={0.18} />
      </svg>
    </Frame>
  );
}

// ─── Frame 05 — "Well… sort of." ───
function Frame05() {
  return (
    <Frame
      number={5}
      title='"Well… sort of."'
      caption="Display type carries the beat. The host appears thoughtful at the desk — chin in hand, looking up. The wizard peeks back in from the right edge of the frame, hopeful again. The honest concession: maybe a little magic, just not the kind he thinks."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* type, italic, generous */}
        <text x={180} y={420} fontFamily="'Recoleta','Tiempos',serif" fontSize={180} fill={INK} fontStyle="italic" fontWeight={500}>
          Well…
        </text>
        <text x={180} y={620} fontFamily="'Recoleta','Tiempos',serif" fontSize={180} fill={INK} fontStyle="italic" fontWeight={500}>
          sort of.
        </text>

        {/* host thoughtful, mid frame-left */}
        <g transform="translate(640 540) scale(6)">
          <Host expression="curious" glasses size={1} />
        </g>

        {/* wizard peeks from right edge — only half visible */}
        <g transform="translate(1820 720)">
          <g transform="rotate(-4)">
            <path d="M -100 80 Q 0 -40 60 60 Q 64 64 70 60 Q 14 -28 110 80 Z" fill={SLATE} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
            <ellipse cx={0} cy={84} rx={130} ry={20} fill={SLATE} stroke={INK} strokeWidth={3} />
            <path d="M -30 50 L -10 70 L -50 70 Z" fill={CHALK} stroke={INK} strokeWidth={2} />
            <path d="M 40 -10 L 56 16 L 70 8 L 60 28 L 16 22 L 36 10 Z" fill={CHALK} stroke={INK} strokeWidth={2} />
          </g>
          <g transform="translate(20 110)">
            <ellipse cx={0} cy={0} rx={26} ry={30} fill={CHALK} stroke={INK} strokeWidth={3} />
            <circle cx={2} cy={4} r={18} fill={INK} />
            <circle cx={6} cy={-2} r={3.6} fill={SLATE} opacity={0.85} />
            <path d="M -26 -10 Q 0 -24 26 -10" stroke={INK} strokeWidth={3} fill={LAVENDER} />
          </g>
        </g>
      </svg>
    </Frame>
  );
}

// ─── Frame 06 — "Let's take it to the blackboard" ───
function Frame06() {
  return (
    <Frame
      number={6}
      title={`"Let's take it to the blackboard"`}
      caption="Mid-stride. The host walks toward the blackboard, sleeves being rolled, chalk in hand. The board sits dark and clean, ready. The ritual hasn't started yet — this is the moment before the two taps."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* upper wall */}
        <rect x={0} y={0} width={1920} height={680} fill="#EFE2C8" />
        {/* floor */}
        <rect x={0} y={680} width={1920} height={400} fill="#C9B591" />
        <path d="M 0 680 L 1920 680" stroke={INK} strokeWidth={1.4} opacity={0.6} />

        {/* the blackboard — clean, ready, on the right */}
        <g>
          <rect x={1080} y={140} width={780} height={560} fill="#5A4634" stroke={INK} strokeWidth={3} />
          <rect x={1100} y={160} width={740} height={520} fill={SLATE} stroke={INK} strokeWidth={2} />
          {/* chalk ledge with a single piece of chalk */}
          <rect x={1080} y={690} width={780} height={20} fill="#6B5440" stroke={INK} strokeWidth={2} />
          <rect x={1300} y={684} width={36} height={10} fill={CHALK} stroke={INK} strokeWidth={1.5} />
        </g>

        {/* host mid-stride toward the blackboard, walking right */}
        <g transform="translate(440 360) scale(8)">
          <Host pose="two-tap-ready" expression="dry" glasses showChalk size={1} />
        </g>

        {/* small motion lines behind host, dry-comedy understatement */}
        <g stroke={INK} strokeWidth={2} opacity={0.4} fill="none">
          <path d="M 240 540 L 320 540" />
          <path d="M 260 580 L 320 580" />
          <path d="M 250 620 L 320 620" />
        </g>

        {/* floor shadow */}
        <ellipse cx={520} cy={1010} rx={140} ry={8} fill={INK} opacity={0.18} />
      </svg>
    </Frame>
  );
}

// ─── Frame 07 — Input → Model → Output ───
function Frame07() {
  return (
    <Frame
      number={7}
      title="Input → Model → Output"
      caption="Full blackboard frame. Diagram drawn in chalk, partially complete. Input card on the left holds 'Write a polite email'; the Model box in the middle has small puzzle pieces inside; Output is forming on the right, partially dashed. Hand-feel chalk wobble throughout."
      bg={SLATE}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={SLATE} />
        {/* slate texture */}
        <g stroke="#2A302C" strokeWidth={1} opacity={0.5}>
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1={i * 70} y1={0} x2={i * 70 - 80} y2={1080} />
          ))}
        </g>
        {/* board frame top + ledge bottom */}
        <rect x={0} y={0} width={1920} height={20} fill="#5A4634" />
        <rect x={0} y={1010} width={1920} height={70} fill="#5A4634" stroke={INK} strokeWidth={2} />
        <rect x={0} y={1010} width={1920} height={20} fill="#6B5440" />

        {/* big chalk title */}
        <text x={960} y={140} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={84} fill={CHALK} textAnchor="middle">
          how it actually works
        </text>
        <path d="M 540 168 L 1380 168" stroke="#E8C66B" strokeWidth={3} opacity={0.85} />

        {/* Input card */}
        <g stroke={CHALK} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 200 320 L 540 318 L 546 620 L 198 624 Z" />
        </g>
        <text x={370} y={290} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={56} fill={CHALK} textAnchor="middle">Input</text>
        <g fontFamily="'Caveat','Patrick Hand',cursive" fill={CHALK}>
          <text x={230} y={420} fontSize={34}>"Write a polite</text>
          <text x={230} y={460} fontSize={34}>email to a</text>
          <text x={230} y={500} fontSize={34}>client."</text>
        </g>

        {/* Model box with puzzle pieces */}
        <g stroke={CHALK} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 740 320 L 1180 322 L 1176 620 L 738 618 Z" />
        </g>
        <text x={958} y={290} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={56} fill={CHALK} textAnchor="middle">Model</text>
        {/* puzzle pieces — interlocking shapes */}
        <g stroke={CHALK} strokeWidth={3.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 800 380 L 880 382 Q 894 382 894 396 Q 894 410 908 410 Q 922 410 922 396 Q 922 382 936 382 L 1010 384" />
          <path d="M 800 460 L 850 462 Q 850 448 864 448 Q 878 448 878 462 L 950 464" />
          <path d="M 800 540 L 880 542 Q 894 542 894 528 Q 894 514 908 514 Q 922 514 922 528 Q 922 542 936 542 L 1010 544" />
        </g>

        {/* arrows */}
        <g stroke={CHALK} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 546 470 L 738 470" />
          <path d="M 738 470 L 718 458 M 738 470 L 718 482" />
          <path d="M 1180 470 L 1380 470" />
          <path d="M 1380 470 L 1360 458 M 1380 470 L 1360 482" />
        </g>

        {/* Output card — forming, dashed */}
        <g stroke={CHALK} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="14 18">
          <path d="M 1380 320 L 1720 320 L 1726 620 L 1378 624 Z" />
        </g>
        <text x={1554} y={290} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={56} fill={CHALK} textAnchor="middle" opacity={0.7}>Output</text>
        <g fontFamily="'Caveat','Patrick Hand',cursive" fill={CHALK} opacity={0.6}>
          <text x={1410} y={420} fontSize={34}>"Hi Sarah,</text>
          <text x={1410} y={460} fontSize={34}>thanks for…"</text>
        </g>

        {/* chalk dust */}
        <g fill={CHALK}>
          <circle cx={1280} cy={260} r={3} opacity={0.5} />
          <circle cx={1340} cy={300} r={2.4} opacity={0.4} />
          <circle cx={1180} cy={250} r={2} opacity={0.55} />
        </g>

        {/* yellow accent — emphasising "Model" */}
        <path d="M 800 670 L 1120 670" stroke="#E8C66B" strokeWidth={4} opacity={0.85} />

        {/* wand on ledge, lower-left */}
        <g transform="translate(120 1014) rotate(-6)">
          <rect x={0} y={0} width={130} height={6} fill={INK} />
          <rect x={124} y={-2} width={18} height={10} fill={CHALK} stroke={INK} strokeWidth={1} />
        </g>
      </svg>
    </Frame>
  );
}

// ─── Frame 08 — "Useful and wrong at the same time" ───
function Frame08() {
  return (
    <Frame
      number={8}
      title='"Useful and wrong at the same time"'
      caption="Split frame. Left: the AI's polished email — looks helpful, formatted neatly. Right: the same email with the hallucinated client name circled hard in Verify Red, with a brief annotation. The central truth of the show, made visual."
      bg={PAPER}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER} />
        {/* divider */}
        <path d="M 960 80 L 960 1000" stroke={INK} strokeWidth={2} opacity={0.5} strokeDasharray="14 12" />

        {/* labels */}
        <text x={480} y={120} fontFamily="'Söhne','Inter',sans-serif" fontSize={20} fill={INK} textAnchor="middle" opacity={0.55} letterSpacing={4}>
          USEFUL
        </text>
        <text x={1440} y={120} fontFamily="'Söhne','Inter',sans-serif" fontSize={20} fill={RED} textAnchor="middle" letterSpacing={4}>
          AND WRONG
        </text>

        {/* Left email — clean */}
        <g transform="translate(140 180)">
          <rect x={0} y={0} width={680} height={780} fill={CHALK} stroke={INK} strokeWidth={3} />
          <rect x={0} y={0} width={680} height={56} fill="#E5DAC1" stroke={INK} strokeWidth={3} />
          <text x={20} y={38} fontFamily="'Söhne','Inter',sans-serif" fontSize={18} fill={INK} opacity={0.6}>To: Margaret Chen · Subject: Re: proposal</text>
          <g fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            <text x={32} y={120}>Hi Margaret,</text>
            <text x={32} y={180}>Thanks for your patience while we sorted</text>
            <text x={32} y={210}>out the proposal — I've attached the</text>
            <text x={32} y={240}>updated draft below.</text>
            <text x={32} y={310}>As discussed in our call last Thursday,</text>
            <text x={32} y={340}>the timeline now lands on the 14th of</text>
            <text x={32} y={370}>June, with deliverables sequenced</text>
            <text x={32} y={400}>through the month.</text>
            <text x={32} y={470}>Let me know if anything needs adjusting</text>
            <text x={32} y={500}>before then.</text>
            <text x={32} y={580}>Best,</text>
            <text x={32} y={620}>Alex</text>
          </g>
        </g>

        {/* Right email — same content, red circle on the wrong name */}
        <g transform="translate(1100 180)">
          <rect x={0} y={0} width={680} height={780} fill={CHALK} stroke={INK} strokeWidth={3} />
          <rect x={0} y={0} width={680} height={56} fill="#E5DAC1" stroke={INK} strokeWidth={3} />
          <text x={20} y={38} fontFamily="'Söhne','Inter',sans-serif" fontSize={18} fill={INK} opacity={0.6}>To: Margaret Chen · Subject: Re: proposal</text>
          <g fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            <text x={32} y={120}>Hi Margaret,</text>
            <text x={32} y={180}>Thanks for your patience while we sorted</text>
            <text x={32} y={210}>out the proposal — I've attached the</text>
            <text x={32} y={240}>updated draft below.</text>
            <text x={32} y={310}>As discussed in our call last Thursday,</text>
            <text x={32} y={340}>the timeline now lands on the 14th of</text>
            <text x={32} y={370}>June, with deliverables sequenced</text>
            <text x={32} y={400}>through the month.</text>
            <text x={32} y={470}>Let me know if anything needs adjusting</text>
            <text x={32} y={500}>before then.</text>
            <text x={32} y={580}>Best,</text>
            <text x={32} y={620}>Alex</text>
          </g>
          {/* hand-drawn red circle around "Margaret" in the To: line */}
          <ellipse cx={88} cy={36} rx={72} ry={24} fill="none" stroke={RED} strokeWidth={4} transform="rotate(-2 88 36)" />
          {/* and around "Margaret" in the salutation */}
          <ellipse cx={130} cy={114} rx={92} ry={26} fill="none" stroke={RED} strokeWidth={4} transform="rotate(-2 130 114)" />
          {/* annotation arrow + note */}
          <path d="M 240 114 Q 360 80 460 100" stroke={RED} strokeWidth={3} fill="none" strokeLinecap="round" />
          <path d="M 460 100 L 446 92 M 460 100 L 446 110" stroke={RED} strokeWidth={3} fill="none" strokeLinecap="round" />
          <text x={300} y={70} fontFamily="'Recoleta','Tiempos',serif" fontStyle="italic" fontSize={26} fill={RED}>
            client's name is Marina.
          </text>
        </g>

        {/* small caption running across bottom */}
        <text x={960} y={1030} fontFamily="'Recoleta','Tiempos',serif" fontStyle="italic" fontSize={28} fill={INK} textAnchor="middle" opacity={0.7}>
          the AI doesn't know it's wrong. that's your job.
        </text>
      </svg>
    </Frame>
  );
}

// ─── Frame 09 — Verify Stamp moment ───
function Frame09() {
  return (
    <Frame
      number={9}
      title="The Verify Stamp"
      caption="Stamp coming down hard. Mid-thunk, slight motion blur on the descent, dust kicked up at the base, the paper underneath beginning to deform. Below it, a confident-looking AI answer about to be marked. The stamp itself is wood-and-rubber, satisfying, mechanical."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* desk surface */}
        <rect x={0} y={780} width={1920} height={300} fill="#B89A6E" />
        <path d="M 0 780 L 1920 780" stroke={INK} strokeWidth={3} />

        {/* paper with confident AI answer */}
        <g transform="translate(420 580)">
          <path d="M 0 0 L 1080 -10 L 1100 360 L 20 380 Z" fill={CHALK} stroke={INK} strokeWidth={3} transform="rotate(-2)" />
          <g transform="rotate(-2)" fontFamily="'Söhne','Inter',sans-serif" fill={INK}>
            <text x={40} y={56} fontSize={22} opacity={0.55}>According to my analysis:</text>
            <text x={40} y={120} fontSize={28} fontFamily="'Recoleta','Tiempos',serif">The capital of Australia</text>
            <text x={40} y={160} fontSize={28} fontFamily="'Recoleta','Tiempos',serif">is Sydney.</text>
            <text x={40} y={230} fontSize={20} opacity={0.6}>Confidence: very high.</text>
            <text x={40} y={290} fontSize={18} opacity={0.45}>(Sources: 14 web results consulted)</text>
          </g>
        </g>

        {/* stamp coming down — wooden handle, rubber base */}
        <g transform="translate(960 280)">
          {/* motion blur ghosts */}
          <g opacity={0.18}>
            <rect x={-90} y={-220} width={180} height={120} rx={12} fill={INK} />
            <rect x={-90} y={-160} width={180} height={120} rx={12} fill={INK} opacity={0.5} />
          </g>
          {/* handle */}
          <rect x={-50} y={-60} width={100} height={180} fill="#7A4A3A" stroke={INK} strokeWidth={4} />
          <rect x={-70} y={-80} width={140} height={36} fill="#5A3A2A" stroke={INK} strokeWidth={4} />
          <rect x={-30} y={-110} width={60} height={36} fill="#7A4A3A" stroke={INK} strokeWidth={4} />
          {/* rubber base */}
          <rect x={-110} y={120} width={220} height={50} fill="#3A2A22" stroke={INK} strokeWidth={4} />
          <rect x={-110} y={160} width={220} height={26} fill={RED} stroke={INK} strokeWidth={4} />
          {/* impact */}
          <text x={0} y={244} fontFamily="'Recoleta','Tiempos',serif" fontSize={60} fill={CHALK} textAnchor="middle" fontWeight={700} letterSpacing={4}>VERIFY</text>
          <rect x={-110} y={186} width={220} height={20} fill={RED} stroke={INK} strokeWidth={4} />
        </g>

        {/* impact dust kicked up */}
        <g fill={INK} opacity={0.25}>
          <circle cx={780} cy={490} r={8} />
          <circle cx={1140} cy={490} r={9} />
          <circle cx={720} cy={510} r={6} />
          <circle cx={1200} cy={510} r={7} />
          <circle cx={680} cy={540} r={5} />
          <circle cx={1240} cy={540} r={5} />
        </g>
        {/* impact lines radiating */}
        <g stroke={INK} strokeWidth={3} opacity={0.5} strokeLinecap="round">
          <path d="M 780 470 L 700 420" />
          <path d="M 1140 470 L 1220 420" />
          <path d="M 740 490 L 660 480" />
          <path d="M 1180 490 L 1260 480" />
        </g>

        {/* THUNK sound onomatopoeia, type-driven */}
        <text x={1500} y={380} fontFamily="'Recoleta','Tiempos',serif" fontSize={88} fill={RED} fontStyle="italic" fontWeight={700} transform="rotate(-8 1500 380)">
          THUNK.
        </text>
      </svg>
    </Frame>
  );
}

// ─── Frame 10 — "AI made clear." ───
function Frame10() {
  return (
    <Frame
      number={10}
      title='"AI made clear."'
      caption="Closing tag. Wordmark large on paper background. The wizard sits on top of the dot of the 'i' in 'AI', defeated but content — legs dangling, hat a little crooked. Subtle channel mark in the corner. The episode ends on his expression, not the type."
      bg={PAPER}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER} />

        {/* wordmark */}
        <text x={960} y={580} fontFamily="'Recoleta','Tiempos',serif" fontSize={200} fill={INK} textAnchor="middle" fontWeight={500}>
          AI made clear.
        </text>
        {/* tagline */}
        <text x={960} y={680} fontFamily="'Söhne','Inter',sans-serif" fontSize={28} fill={INK} textAnchor="middle" opacity={0.6} letterSpacing={6}>
          C 4 S I G H T
        </text>
        {/* small underline */}
        <path d="M 760 720 L 1160 720" stroke={INK} strokeWidth={2} opacity={0.4} />

        {/* wizard sits on dot of the 'i' in AI — find a position above the wordmark */}
        {/* the 'i' in 'AI' sits roughly at x ≈ 685; its dot would be around y ≈ 420 */}
        <g transform="translate(700 380) scale(3.6)">
          <Wizard expression="disappointed" pose="debunked" size={1} hatTilt={-8} />
        </g>

        {/* small channel mark — bottom right */}
        <g transform="translate(1820 1020)">
          <circle cx={0} cy={0} r={28} fill={RED} stroke={INK} strokeWidth={2.5} />
          <text x={0} y={10} fontFamily="'Recoleta','Tiempos',serif" fontSize={28} fill={CHALK} textAnchor="middle" fontWeight={700}>C4</text>
        </g>
        {/* small footer */}
        <text x={100} y={1040} fontFamily="'Söhne','Inter',sans-serif" fontSize={14} fill={INK} opacity={0.45} letterSpacing={3}>
          EPISODE 01 · IS AI ACTUALLY MAGIC?
        </text>
      </svg>
    </Frame>
  );
}

export function Episode1() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: PAPER,
        backgroundImage:
          "radial-gradient(rgba(34,31,31,0.05) 1px, transparent 1px), radial-gradient(rgba(34,31,31,0.03) 1px, transparent 1px)",
        backgroundSize: "4px 4px, 7px 7px",
        backgroundPosition: "0 0, 2px 3px",
        color: INK,
      }}
    >
      <div className="max-w-[1480px] mx-auto px-10 py-12">
        <div className="flex items-end justify-between mb-2 pb-6" style={{ borderBottom: `2px solid ${INK}` }}>
          <div>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", opacity: 0.55 }}>
              C4Sight · Show Bible v1.0 · Deliverable 4
            </div>
            <h1 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 56, lineHeight: 1.0, marginTop: 8 }}>
              Episode 1 — Is AI actually magic?
            </h1>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, marginTop: 8, opacity: 0.7, maxWidth: 780 }}>
              Ten styleframes in narrative order. The arc: the wizard takes credit, gets debunked,
              sulks off, the host steps in, the blackboard explains it, the verify stamp lands,
              and we close on a defeated-but-content wizard.
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <div>Format: 1920 × 1080 each</div>
            <div>Order: narrative</div>
            <div>Mode: mixed (1, 2, 3, 4)</div>
          </div>
        </div>

        <Frame01 />
        <Frame02 />
        <Frame03 />
        <Frame04 />
        <Frame05 />
        <Frame06 />
        <Frame07 />
        <Frame08 />
        <Frame09 />
        <Frame10 />

        <div className="mt-2 pt-6 flex items-center justify-between" style={{ borderTop: `1px solid ${INK}`, fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>Texture &amp; linework — refined in post.</span>
          <span>Next: Deliverable 5 — production asset manifest.</span>
        </div>
      </div>
    </div>
  );
}
