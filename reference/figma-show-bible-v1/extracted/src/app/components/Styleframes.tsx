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

// 1920×1080 styleframe wrapper. Scales down responsively.
function Frame({
  title,
  caption,
  bg,
  children,
}: {
  title: string;
  caption: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline justify-between mb-3">
        <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 22, color: INK }}>
          {title}
        </div>
        <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55 }}>
          1920 × 1080 · final-quality reference
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
        {/* paper / fabric grain overlay */}
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
      <div
        className="mt-3 max-w-[820px]"
        style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.5, opacity: 0.75 }}
      >
        {caption}
      </div>
    </div>
  );
}

// ─── Mode 1 — Main Animated World ───
function Mode1MainWorld() {
  return (
    <Frame
      title="Mode 1 · Main Animated World"
      caption="The host's home base. Late-afternoon light through a window, tea cup steaming, a notebook mid-page. The host pauses, eyes on something off-frame. Behind a small stack of books, only the tip of the wizard's hat is visible — he thinks he's hidden."
      bg={PAPER_WARM}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {/* warm wall band */}
        <rect x={0} y={0} width={1920} height={1080} fill={PAPER_WARM} />
        {/* far wall lighter */}
        <rect x={0} y={0} width={1920} height={680} fill="#EFE2C8" />
        {/* floor */}
        <rect x={0} y={680} width={1920} height={400} fill="#C9B591" />
        <path d="M 0 680 L 1920 680" stroke={INK} strokeWidth={1.4} opacity={0.6} />

        {/* window left — daylight slab */}
        <g>
          <rect x={120} y={140} width={420} height={420} fill="#F4EDE0" stroke={INK} strokeWidth={3} />
          <path d="M 330 140 L 330 560 M 120 350 L 540 350" stroke={INK} strokeWidth={3} />
          {/* soft daylight cast on floor */}
          <path d="M 540 560 L 720 680 L 280 680 L 120 560 Z" fill="#F4EDE0" opacity={0.35} />
          {/* small sill plant */}
          <g transform="translate(440 540)">
            <rect x={0} y={0} width={60} height={36} fill="#9C8A6E" stroke={INK} strokeWidth={2} />
            <path d="M 30 0 Q 18 -28 8 -10 M 30 0 Q 30 -42 36 -22 M 30 0 Q 50 -22 56 -2" stroke="#4A5C44" strokeWidth={3} fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* desk */}
        <g>
          <path d="M 700 780 L 1820 780 L 1820 830 L 700 830 Z" fill="#9C8A6E" stroke={INK} strokeWidth={3} />
          <path d="M 720 830 L 740 1020 L 760 1020 L 750 830 Z" fill="#7A6B53" stroke={INK} strokeWidth={2.5} />
          <path d="M 1780 830 L 1800 1020 L 1820 1020 L 1810 830 Z" fill="#7A6B53" stroke={INK} strokeWidth={2.5} />
          {/* notebook open */}
          <g transform="translate(1100 720)">
            <path d="M 0 0 L 240 0 L 248 60 L -8 60 Z" fill={CHALK} stroke={INK} strokeWidth={2.5} />
            <path d="M 124 0 L 120 60" stroke={INK} strokeWidth={1.5} />
            <path d="M 14 14 L 110 14 M 14 24 L 100 24 M 14 34 L 108 34 M 14 44 L 80 44" stroke={INK} strokeWidth={1.2} opacity={0.6} />
            <path d="M 134 14 L 220 14 M 134 24 L 215 24 M 134 34 L 210 34" stroke={INK} strokeWidth={1.2} opacity={0.6} />
          </g>
          {/* tea cup with steam */}
          <g transform="translate(900 700)">
            <path d="M 0 20 L 6 78 Q 6 88 16 88 L 56 88 Q 66 88 66 78 L 72 20 Z" fill={CHALK} stroke={INK} strokeWidth={2.5} />
            <path d="M 66 36 Q 88 36 88 56 Q 88 76 66 76" fill="none" stroke={INK} strokeWidth={2.5} />
            <path d="M 18 8 Q 22 -4 18 -16 M 36 4 Q 40 -8 36 -22 M 54 8 Q 58 -4 54 -18" stroke={INK} strokeWidth={1.6} fill="none" opacity={0.45} strokeLinecap="round" />
          </g>
          {/* stack of books — wizard hiding behind */}
          <g transform="translate(1500 660)">
            <rect x={0} y={80} width={150} height={40} fill="#7A4A3A" stroke={INK} strokeWidth={2.5} />
            <rect x={6} y={42} width={138} height={38} fill="#4A5C44" stroke={INK} strokeWidth={2.5} />
            <rect x={12} y={6} width={126} height={36} fill="#B98E6E" stroke={INK} strokeWidth={2.5} />
            {/* spines */}
            <path d="M 8 90 L 142 90 M 14 52 L 138 52 M 20 16 L 130 16" stroke={INK} strokeWidth={1} opacity={0.4} />
            {/* wizard hat poking out behind books, tilted, his head is hidden */}
            <g transform="translate(80 -56)">
              <path d="M -22 18 Q 6 -22 14 6 Q 16 8 18 6 Q 8 -16 22 18 Z" fill={SLATE} stroke={INK} strokeWidth={2.2} strokeLinejoin="round" />
              <ellipse cx={0} cy={20} rx={26} ry={4.4} fill={SLATE} stroke={INK} strokeWidth={2.2} />
              {/* one wonky star visible */}
              <path d="M -4 8 L 0 12 L -8 12 Z" fill={CHALK} stroke={INK} strokeWidth={1} />
              {/* tip uneven star */}
              <path d="M 12 -14 L 14 -10 L 18 -10 L 15 -7 L 16 -3 L 12 -5 L 8 -3 L 9 -7 L 6 -10 L 11 -10 Z" fill={CHALK} stroke={INK} strokeWidth={0.8} />
            </g>
          </g>
        </g>

        {/* host at desk */}
        <g transform="translate(820 540) scale(7)">
          <Host view="desk" expression="curious" glasses showNotebook={false} size={1} />
        </g>

        {/* slight floor shadow under host & desk */}
        <ellipse cx={1260} cy={1020} rx={420} ry={14} fill={INK} opacity={0.18} />
      </svg>
    </Frame>
  );
}

// ─── Mode 2 — Blackboard ───
function Mode2Blackboard() {
  return (
    <Frame
      title="Mode 2 · Blackboard Teaching Mode"
      caption="Real-feeling slate, hand-drawn chalk. Top-left, the wizard's stolen wand rests on the ledge — the host hasn't noticed yet. Centre, a partial Input → Model → Output diagram. The host stands to the right, sleeves rolled, chalk in hand, mid-explanation. Chalk dust hangs in the air."
      bg={SLATE}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {/* dark room beyond the slate */}
        <rect x={0} y={0} width={1920} height={1080} fill="#0F1311" />
        {/* slate panel */}
        <rect x={120} y={80} width={1680} height={880} fill={SLATE} stroke={INK} strokeWidth={3} />
        {/* board frame — wood */}
        <rect x={100} y={60} width={1720} height={20} fill="#5A4634" stroke={INK} strokeWidth={2} />
        <rect x={100} y={960} width={1720} height={40} fill="#5A4634" stroke={INK} strokeWidth={2} />
        {/* chalk ledge */}
        <path d="M 100 960 L 1820 960 L 1820 980 L 100 980 Z" fill="#6B5440" stroke={INK} strokeWidth={2} />

        {/* slight slate texture — diagonal strokes */}
        <g stroke="#2A302C" strokeWidth={1} opacity={0.5}>
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={i} x1={120 + i * 60} y1={80} x2={120 + i * 60 - 80} y2={960} />
          ))}
        </g>

        {/* wand on ledge top-left */}
        <g transform="translate(220 944) rotate(-8)">
          <rect x={0} y={0} width={140} height={6} fill={INK} />
          <rect x={134} y={-2} width={18} height={10} fill={CHALK} stroke={INK} strokeWidth={1} />
          {/* dust */}
          <circle cx={148} cy={-4} r={2} fill={CHALK} opacity={0.7} />
          <circle cx={154} cy={-7} r={1.5} fill={CHALK} opacity={0.5} />
        </g>

        {/* partial diagram, hand-drawn chalk */}
        <g stroke={CHALK} strokeWidth={3.2} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.95}>
          {/* Input card */}
          <path d="M 360 380 L 620 376 L 624 540 L 358 544 Z" />
          {/* Model box */}
          <path d="M 800 360 L 1140 364 L 1136 560 L 798 556 Z" />
          {/* puzzle pieces inside model */}
          <path d="M 850 420 L 920 422 Q 930 422 930 432 Q 930 442 940 442 Q 950 442 950 432 Q 950 422 960 422 L 1020 424" />
          <path d="M 850 480 L 900 482 Q 900 472 910 472 Q 920 472 920 482 L 990 484" />
          {/* Output (forming) — partial dashed */}
          <path d="M 1320 380 L 1560 380" strokeDasharray="14 18" />
          <path d="M 1320 380 L 1320 540" strokeDasharray="14 18" />
          <path d="M 1560 380 L 1560 540" strokeDasharray="14 18" />
          {/* arrows */}
          <path d="M 624 460 L 798 460 M 1136 460 L 1316 460" />
          <path d="M 798 460 L 778 450 M 798 460 L 778 470" />
          <path d="M 1316 460 L 1296 450 M 1316 460 L 1296 470" />
        </g>
        {/* labels — hand-lettered chalk */}
        <g fill={CHALK} fontFamily="'Caveat','Patrick Hand',cursive" opacity={0.95}>
          <text x={490} y={350} fontSize={36} textAnchor="middle">Input</text>
          <text x={968} y={336} fontSize={36} textAnchor="middle">Model</text>
          <text x={1440} y={350} fontSize={36} textAnchor="middle" opacity={0.7}>Output</text>
          <text x={490} y={470} fontSize={22} textAnchor="middle" opacity={0.85}>"Write a polite</text>
          <text x={490} y={500} fontSize={22} textAnchor="middle" opacity={0.85}>email"</text>
        </g>
        {/* yellow accent — a small underline */}
        <path d="M 410 526 L 570 526" stroke="#E8C66B" strokeWidth={3} opacity={0.85} />

        {/* chalk dust in air */}
        <g fill={CHALK}>
          <circle cx={1240} cy={300} r={3} opacity={0.5} />
          <circle cx={1280} cy={340} r={2.4} opacity={0.4} />
          <circle cx={1180} cy={250} r={2} opacity={0.55} />
          <circle cx={1340} cy={420} r={2.6} opacity={0.4} />
          <circle cx={1410} cy={300} r={2} opacity={0.45} />
        </g>

        {/* host on the right, mid-explanation, two-tap-ready pose with chalk */}
        <g transform="translate(1620 380) scale(6)">
          <Host pose="two-tap-ready" expression="raised-brow" glasses size={1} />
        </g>
      </svg>
    </Frame>
  );
}

// ─── Mode 3 — Interface / Tool ───
function Mode3Interface() {
  return (
    <Frame
      title="Mode 3 · Interface / Tool Mode"
      caption="Stylised AI chat — invented, not a real product. Paper-coloured window against dim slate. A typed prompt at the top; below, a generated reply mid-stream, cursor blinking. One sentence is highlighted in Verify Red — the part to check."
      bg={SLATE_LIGHT}
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect x={0} y={0} width={1920} height={1080} fill={SLATE_LIGHT} />
        {/* dim grid hint */}
        <g stroke="#2C322F" strokeWidth={1} opacity={0.5}>
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 160} y1={0} x2={i * 160} y2={1080} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i * 140} x2={1920} y2={i * 140} />
          ))}
        </g>

        {/* chat window — paper on slate, slight offset shadow */}
        <g>
          <rect x={244} y={140} width={1432} height={800} fill="#0E1210" opacity={0.5} transform="translate(8 10)" />
          <rect x={240} y={130} width={1432} height={800} fill={CHALK} stroke={INK} strokeWidth={3} />
          {/* window chrome */}
          <rect x={240} y={130} width={1432} height={56} fill="#E5DAC1" stroke={INK} strokeWidth={3} />
          <circle cx={278} cy={158} r={9} fill="#D7382C" stroke={INK} strokeWidth={2} />
          <circle cx={310} cy={158} r={9} fill="#E8C66B" stroke={INK} strokeWidth={2} />
          <circle cx={342} cy={158} r={9} fill="#A5B89A" stroke={INK} strokeWidth={2} />
          <text x={956} y={166} fontFamily="'Söhne','Inter',sans-serif" fontSize={18} fill={INK} textAnchor="middle" opacity={0.6}>
            assistant — new conversation
          </text>
        </g>

        {/* prompt bubble */}
        <g transform="translate(300 230)">
          <rect x={0} y={0} width={760} height={88} fill="#E5DAC1" stroke={INK} strokeWidth={2.5} />
          <text x={24} y={36} fontFamily="'Söhne','Inter',sans-serif" fontSize={16} fill={INK} opacity={0.55}>You</text>
          <text x={24} y={68} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            Write a polite email to a client.
          </text>
        </g>

        {/* generated reply */}
        <g transform="translate(300 360)">
          <rect x={0} y={0} width={1320} height={460} fill={CHALK} stroke={INK} strokeWidth={2.5} />
          <text x={24} y={36} fontFamily="'Söhne','Inter',sans-serif" fontSize={16} fill={INK} opacity={0.55}>Assistant</text>
          {/* greeting */}
          <text x={24} y={80} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>Hi Sarah,</text>
          <text x={24} y={120} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            Thanks for your patience while we sorted out the proposal — I've attached the
          </text>
          <text x={24} y={150} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            updated draft below.
          </text>
          {/* highlighted sentence */}
          <rect x={20} y={172} width={1280} height={64} fill={RED} opacity={0.18} stroke={RED} strokeWidth={2} />
          <text x={24} y={200} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            As discussed in our call last Thursday, the timeline now lands on the 14th of
          </text>
          <text x={24} y={228} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            June, with deliverables sequenced through the month.
          </text>
          {/* margin verify red flag */}
          <g transform="translate(1340 188)">
            <path d="M 0 0 L 18 0 L 12 12 L 18 24 L 0 24 Z" fill={RED} stroke={INK} strokeWidth={1.5} />
          </g>
          {/* continuing text */}
          <text x={24} y={284} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            Let me know if anything needs adjusting before then. Happy to jump on a quick
          </text>
          <text x={24} y={314} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            call if it's easier.
          </text>
          <text x={24} y={368} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>Best,</text>
          {/* mid-stream — partial line + cursor */}
          <text x={24} y={408} fontFamily="'Söhne','Inter',sans-serif" fontSize={22} fill={INK}>
            Alex
          </text>
          <rect x={86} y={388} width={3} height={26} fill={INK}>
            <animate attributeName="opacity" values="1;1;0;0" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* prompt input bar at bottom */}
        <g transform="translate(300 860)">
          <rect x={0} y={0} width={1320} height={56} fill="#E5DAC1" stroke={INK} strokeWidth={2.5} />
          <text x={24} y={36} fontFamily="'Söhne','Inter',sans-serif" fontSize={18} fill={INK} opacity={0.5}>
            Reply…
          </text>
        </g>

        {/* annotation in margin: "this is the part to check" */}
        <g transform="translate(1700 540)">
          <text x={0} y={0} fontFamily="'Recoleta','Tiempos',serif" fontSize={22} fill={CHALK}>
            check
          </text>
          <text x={0} y={28} fontFamily="'Recoleta','Tiempos',serif" fontSize={22} fill={CHALK}>
            this bit
          </text>
          <path d="M -10 12 Q -50 28 -80 14" stroke={RED} strokeWidth={3} fill="none" strokeLinecap="round" />
          <path d="M -80 14 L -68 8 M -80 14 L -72 22" stroke={RED} strokeWidth={3} fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </Frame>
  );
}

// ─── Mode 4 — Human Judgement ───
function Mode4HumanJudgement() {
  return (
    <Frame
      title="Mode 4 · Human Judgement / Real-World Mode"
      caption="The back office of a small Perth-style cafe. Owner at a laptop reviewing an AI-drafted email. A coffee cup, a clipboard of paperwork, a phone face-down. Slightly more saturated than the main world. Reads as: real life, real stakes — a real person about to send a real thing."
      bg="#E8D6B6"
    >
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {/* warm wall */}
        <rect x={0} y={0} width={1920} height={1080} fill="#E8D6B6" />
        {/* upper wall — slightly cooler */}
        <rect x={0} y={0} width={1920} height={620} fill="#D9C49E" />
        {/* shelf with cafe stuff */}
        <rect x={0} y={210} width={1920} height={10} fill="#7A6B53" stroke={INK} strokeWidth={2} />
        {/* coffee bag */}
        <g transform="translate(180 100)">
          <path d="M 0 0 L 120 0 L 130 110 L -10 110 Z" fill="#3A2A22" stroke={INK} strokeWidth={2.5} />
          <rect x={20} y={30} width={80} height={40} fill={CHALK} stroke={INK} strokeWidth={1.5} />
          <text x={60} y={56} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={22} fill={INK} textAnchor="middle">SINGLE O</text>
        </g>
        {/* tin */}
        <g transform="translate(420 130)">
          <rect x={0} y={0} width={90} height={80} fill="#A5B89A" stroke={INK} strokeWidth={2.5} />
          <rect x={0} y={0} width={90} height={14} fill="#7E867D" stroke={INK} strokeWidth={2} />
        </g>
        {/* a framed hand-written sign */}
        <g transform="translate(620 80)">
          <rect x={0} y={0} width={260} height={130} fill={CHALK} stroke={INK} strokeWidth={3} />
          <text x={130} y={54} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={28} fill={INK} textAnchor="middle">be kind</text>
          <text x={130} y={90} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={28} fill={INK} textAnchor="middle">or be quick</text>
          <text x={130} y={118} fontFamily="'Caveat','Patrick Hand',cursive" fontSize={20} fill={INK} textAnchor="middle" opacity={0.6}>— preferably both</text>
        </g>

        {/* desk */}
        <rect x={0} y={680} width={1920} height={400} fill="#B89A6E" />
        <path d="M 0 680 L 1920 680" stroke={INK} strokeWidth={3} />
        {/* desk grain */}
        <g stroke={INK} strokeWidth={1} opacity={0.18}>
          <path d="M 0 720 L 1920 718" />
          <path d="M 0 780 L 1920 786" />
          <path d="M 0 860 L 1920 856" />
        </g>

        {/* laptop (left-of-centre) */}
        <g transform="translate(580 540)">
          {/* screen */}
          <path d="M 0 0 L 520 0 L 520 280 L 0 280 Z" fill={SLATE} stroke={INK} strokeWidth={3} />
          <rect x={14} y={14} width={492} height={252} fill={CHALK} />
          {/* email draft on screen */}
          <text x={32} y={50} fontFamily="'Söhne','Inter',sans-serif" fontSize={14} fill={INK} opacity={0.5}>To: Sarah</text>
          <text x={32} y={70} fontFamily="'Söhne','Inter',sans-serif" fontSize={14} fill={INK} opacity={0.5}>Subject: This week's order</text>
          <line x1={28} y1={86} x2={500} y2={86} stroke={INK} strokeWidth={1} opacity={0.3} />
          <g fontFamily="'Söhne','Inter',sans-serif" fontSize={14} fill={INK}>
            <text x={32} y={114}>Hi Sarah,</text>
            <text x={32} y={142}>Thanks for the catch-up yesterday.</text>
            <text x={32} y={166}>The roast for this week's order will</text>
            <text x={32} y={190}>be ready Thursday morning — happy</text>
            <text x={32} y={214}>to drop it round if that helps.</text>
            <text x={32} y={252}>Cheers,</text>
          </g>
          {/* base */}
          <path d="M -40 280 L 560 280 L 540 304 L -20 304 Z" fill="#3A332C" stroke={INK} strokeWidth={3} />
          <rect x={232} y={280} width={56} height={6} fill={INK} />
        </g>

        {/* coffee cup beside laptop */}
        <g transform="translate(1180 700)">
          <path d="M 0 30 L 12 156 Q 12 176 32 176 L 112 176 Q 132 176 132 156 L 144 30 Z" fill={CHALK} stroke={INK} strokeWidth={3} />
          <path d="M 132 64 Q 176 64 176 110 Q 176 156 132 156" fill="none" stroke={INK} strokeWidth={3} />
          <path d="M 36 14 Q 42 -6 36 -22 M 72 8 Q 80 -10 72 -30 M 108 14 Q 114 -6 108 -22" stroke={INK} strokeWidth={2} fill="none" opacity={0.5} strokeLinecap="round" />
        </g>

        {/* clipboard with paperwork */}
        <g transform="translate(1380 740)">
          <rect x={0} y={0} width={280} height={340} fill="#5A4634" stroke={INK} strokeWidth={3} />
          <rect x={14} y={26} width={252} height={300} fill={CHALK} stroke={INK} strokeWidth={2} />
          {/* clip */}
          <rect x={110} y={-14} width={60} height={34} fill="#A8A8A8" stroke={INK} strokeWidth={2} />
          {/* lines */}
          <g stroke={INK} strokeWidth={1.4} opacity={0.5}>
            <line x1={28} y1={64} x2={250} y2={64} />
            <line x1={28} y1={92} x2={230} y2={92} />
            <line x1={28} y1={120} x2={250} y2={120} />
            <line x1={28} y1={148} x2={210} y2={148} />
            <line x1={28} y1={186} x2={250} y2={186} />
            <line x1={28} y1={214} x2={244} y2={214} />
          </g>
          {/* a verify-red checkmark */}
          <path d="M 200 250 L 220 270 L 250 230" stroke={RED} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* phone face-down */}
        <g transform="translate(960 880)">
          <rect x={0} y={0} width={130} height={70} rx={10} fill="#3A332C" stroke={INK} strokeWidth={3} />
          <rect x={6} y={6} width={118} height={58} rx={6} fill="#2A2422" stroke={INK} strokeWidth={1} opacity={0.7} />
        </g>

        {/* small business owner — host-style figure, slightly different palette */}
        <g transform="translate(420 480) scale(7)">
          {/* override: use Host with variant b for warmer skin/hair, casual */}
          <Host variant="b" view="desk" expression="dry" glasses={false} showNotebook={false} size={1} />
        </g>

        {/* slight floor shadow */}
        <ellipse cx={960} cy={1050} rx={760} ry={14} fill={INK} opacity={0.18} />
      </svg>
    </Frame>
  );
}

export function Styleframes() {
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
              C4Sight · Show Bible v1.0 · Deliverable 3
            </div>
            <h1 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 56, lineHeight: 1.0, marginTop: 8 }}>
              Four Mode Styleframes
            </h1>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, marginTop: 8, opacity: 0.7, maxWidth: 720 }}>
              One representative shot per visual mode. Each frame establishes the mode's
              full visual language — palette, line weight, texture register, character
              integration. Composition is editorial, not slide-deck.
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <div>Format: 1920 × 1080</div>
            <div>Mode cuts: hard, editorial</div>
            <div>Eraser wipe reserved for blackboard exit</div>
          </div>
        </div>

        <Mode1MainWorld />
        <Mode2Blackboard />
        <Mode3Interface />
        <Mode4HumanJudgement />

        <div className="mt-2 pt-6 flex items-center justify-between" style={{ borderTop: `1px solid ${INK}`, fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>Texture &amp; linework — refined in post.</span>
          <span>Next: Episode 1 styleframes (10 frames).</span>
        </div>
      </div>
    </div>
  );
}
