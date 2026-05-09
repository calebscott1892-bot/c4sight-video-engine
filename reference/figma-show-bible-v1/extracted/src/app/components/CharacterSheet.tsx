import { Wizard } from "./Wizard";

const PAPER = "#EFE7D6";
const SLATE = "#1A1F1C";
const INK = "#221F1F";

function Cell({
  label,
  caption,
  children,
  dark = false,
  wide = false,
}: {
  label: string;
  caption?: string;
  children: React.ReactNode;
  dark?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col ${wide ? "col-span-2" : ""}`}
      style={{
        background: dark ? SLATE : "#F4EDE0",
        border: `1px solid ${INK}`,
        boxShadow: "2px 3px 0 rgba(34,31,31,0.18)",
        minHeight: 240,
      }}
    >
      <div
        className="px-3 py-2 flex items-baseline justify-between"
        style={{
          borderBottom: `1px solid ${dark ? "#2c322f" : INK}`,
          color: dark ? "#F4EDE0" : INK,
          fontFamily: "'Söhne','GT America','Inter',sans-serif",
          letterSpacing: "0.08em",
          fontSize: 11,
          textTransform: "uppercase",
        }}
      >
        <span>{label}</span>
        {caption && <span style={{ opacity: 0.55 }}>{caption}</span>}
      </div>
      <div
        className="flex-1 flex items-end justify-center pb-4 pt-6 px-3"
        style={{
          backgroundImage: dark
            ? "radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)"
            : "radial-gradient(rgba(34,31,31,0.06) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SectionHeader({ index, title, sub }: { index: string; title: string; sub: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-4 mt-10 first:mt-0">
      <div
        style={{
          fontFamily: "'Recoleta','Domaine Display','Tiempos',serif",
          fontSize: 14,
          letterSpacing: "0.18em",
          color: INK,
          opacity: 0.5,
        }}
      >
        {index}
      </div>
      <h2
        style={{
          fontFamily: "'Recoleta','Domaine Display','Tiempos',serif",
          fontSize: 28,
          color: INK,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <div
        className="flex-1"
        style={{ borderBottom: `1px solid ${INK}`, opacity: 0.25, transform: "translateY(-6px)" }}
      />
      <div
        style={{
          fontFamily: "'Söhne','Inter',sans-serif",
          fontSize: 11,
          color: INK,
          opacity: 0.6,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {sub}
      </div>
    </div>
  );
}

// Coffee cup, hand, host silhouettes for scale reference.
function CoffeeCup() {
  return (
    <svg viewBox="0 0 60 80" width={70} height={94}>
      <path d="M 8 22 L 12 70 Q 12 76 18 76 L 42 76 Q 48 76 48 70 L 52 22 Z" fill="#F4EDE0" stroke={INK} strokeWidth={1.4} />
      <path d="M 48 32 Q 58 32 58 44 Q 58 56 48 56" fill="none" stroke={INK} strokeWidth={1.4} />
      <path d="M 8 22 L 52 22" stroke={INK} strokeWidth={1.4} fill="none" />
      <path d="M 22 8 Q 24 14 22 18 M 30 6 Q 32 12 30 16 M 38 8 Q 40 14 38 18" stroke={INK} strokeWidth={1} fill="none" opacity={0.5} />
    </svg>
  );
}
function HandSilhouette() {
  return (
    <svg viewBox="0 0 80 110" width={90} height={124}>
      <path
        d="M 24 100 L 22 60 Q 22 56 26 56 Q 30 56 30 60 L 30 40 Q 30 36 34 36 Q 38 36 38 40 L 38 32 Q 38 28 42 28 Q 46 28 46 32 L 46 42 Q 46 38 50 38 Q 54 38 54 42 L 54 60 Q 58 56 62 60 L 62 80 Q 62 100 50 100 Z"
        fill="#EFE7D6"
        stroke={INK}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </svg>
  );
}
function HostSilhouette() {
  return (
    <svg viewBox="0 0 80 200" width={88} height={220}>
      {/* head */}
      <ellipse cx={40} cy={22} rx={13} ry={15} fill="#EFE7D6" stroke={INK} strokeWidth={1.4} />
      {/* hair */}
      <path d="M 28 16 Q 40 4 52 16 Q 52 10 40 8 Q 28 10 28 16 Z" fill={INK} />
      {/* neck */}
      <rect x={36} y={36} width={8} height={6} fill="#EFE7D6" stroke={INK} strokeWidth={1.2} />
      {/* shirt — henley with rolled sleeves */}
      <path
        d="M 18 50 Q 30 42 40 42 Q 50 42 62 50 L 60 110 L 20 110 Z"
        fill="#EFE7D6"
        stroke={INK}
        strokeWidth={1.4}
      />
      {/* placket */}
      <path d="M 40 42 L 40 60" stroke={INK} strokeWidth={1} />
      <circle cx={40} cy={50} r={0.8} fill={INK} />
      <circle cx={40} cy={56} r={0.8} fill={INK} />
      {/* arms */}
      <path d="M 18 50 L 8 100" stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />
      <path d="M 62 50 L 72 100" stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />
      {/* trousers */}
      <path d="M 20 110 L 22 188 L 38 188 L 40 130 L 42 188 L 58 188 L 60 110 Z" fill={INK} />
      {/* shoes */}
      <rect x={20} y={188} width={20} height={6} fill={INK} />
      <rect x={40} y={188} width={20} height={6} fill={INK} />
      {/* notebook in hand */}
      <rect x={2} y={94} width={14} height={18} fill="#F4EDE0" stroke={INK} strokeWidth={1.2} />
      <path d="M 4 100 L 14 100 M 4 104 L 14 104" stroke={INK} strokeWidth={0.6} />
    </svg>
  );
}

export function CharacterSheet() {
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
      <div className="max-w-[1280px] mx-auto px-10 py-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-2 pb-6" style={{ borderBottom: `2px solid ${INK}` }}>
          <div>
            <div
              style={{
                fontFamily: "'Söhne','Inter',sans-serif",
                fontSize: 11,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                opacity: 0.55,
              }}
            >
              C4Sight · Show Bible v1.0 · Deliverable 1
            </div>
            <h1
              style={{
                fontFamily: "'Recoleta','Domaine Display','Tiempos',serif",
                fontSize: 56,
                lineHeight: 1.0,
                marginTop: 8,
              }}
            >
              The Tiny Alien Wizard
            </h1>
            <div
              style={{
                fontFamily: "'Söhne','Inter',sans-serif",
                fontSize: 13,
                marginTop: 8,
                opacity: 0.7,
                maxWidth: 640,
              }}
            >
              Mascot character sheet. Pale lavender, slate hat, three almost-right stars, robe that drags. Reads through gesture and expression — never speaks.
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <div>Scale: fits inside a coffee cup</div>
            <div>Voice: silent</div>
            <div>Register: New Yorker / Edward Gorey</div>
          </div>
        </div>

        {/* 1. Views */}
        <SectionHeader index="01" title="Orthographic Views" sub="Front · 3/4 L · 3/4 R · Side" />
        <div className="grid grid-cols-4 gap-4">
          <Cell label="Front" caption="0°">
            <Wizard view="front" expression="neutral" size={150} />
          </Cell>
          <Cell label="3/4 Left" caption="-30°">
            <Wizard view="three-quarter-left" expression="neutral" size={150} />
          </Cell>
          <Cell label="3/4 Right" caption="+30°">
            <Wizard view="three-quarter-right" expression="neutral" size={150} />
          </Cell>
          <Cell label="Side" caption="90°">
            <Wizard view="side" expression="neutral" size={150} />
          </Cell>
        </div>

        {/* 2. Expressions */}
        <SectionHeader index="02" title="Expression Studies" sub="Six beats — read silently" />
        <div className="grid grid-cols-3 gap-4">
          <Cell label="Neutral" caption="resting tired">
            <Wizard expression="neutral" size={130} />
          </Cell>
          <Cell label="Sulking" caption="walked off">
            <Wizard expression="sulking" size={130} />
          </Cell>
          <Cell label="Panicked" caption="being debunked">
            <Wizard expression="panicked" size={130} />
          </Cell>
          <Cell label="Smug" caption="told you so">
            <Wizard expression="smug" size={130} />
          </Cell>
          <Cell label="Disappointed" caption="not magic after all">
            <Wizard expression="disappointed" size={130} />
          </Cell>
          <Cell label="Mid-shrug" caption="oh well">
            <Wizard expression="shrug" size={130} />
          </Cell>
        </div>

        {/* 3. Poses */}
        <SectionHeader index="03" title="Pose Studies" sub="Three recurring beats" />
        <div className="grid grid-cols-3 gap-4">
          <Cell label="Taking Credit" caption="chest puffed">
            <Wizard pose="credit" expression="smug" size={150} />
          </Cell>
          <Cell label="Being Debunked" caption="slumped">
            <Wizard pose="debunked" expression="disappointed" size={150} />
          </Cell>
          <Cell label="Stealing the Chalk" caption="sneaky">
            <Wizard pose="stealing" expression="panicked" size={150} />
          </Cell>
        </div>

        {/* 4. Scale */}
        <SectionHeader index="04" title="Scale Reference" sub="He is small. The smallness is the joke." />
        <div className="grid grid-cols-3 gap-4">
          <Cell label="Vs. Coffee Cup" caption="fits inside">
            <div className="flex items-end gap-6">
              <CoffeeCup />
              <Wizard size={70} />
            </div>
          </Cell>
          <Cell label="Vs. Human Hand" caption="palm-sized">
            <div className="flex items-end gap-6">
              <HandSilhouette />
              <Wizard size={75} />
            </div>
          </Cell>
          <Cell label="Vs. The Host" caption="knee-high at most">
            <div className="flex items-end gap-8">
              <HostSilhouette />
              <Wizard size={90} />
            </div>
          </Cell>
        </div>

        {/* 5. Rules */}
        <SectionHeader index="05" title="Design Rules" sub="Locked. Hard avoid list at right." />
        <div className="grid grid-cols-2 gap-4">
          <div
            className="p-5"
            style={{ background: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}
          >
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55, marginBottom: 8 }}>
              Must read as
            </div>
            <ul style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              <li>— Pale lavender body (#B9A8C7), slightly translucent</li>
              <li>— Slate hat, three almost-right stars (triangle, wonky pentagon, uneven 5-point)</li>
              <li>— Robe too long, drags, worn cuffs at the hem</li>
              <li>— Eyes large &amp; tired: big pupils, small irises</li>
              <li>— Carries a stolen chalk wand</li>
              <li>— Never speaks: gesture and expression carry everything</li>
            </ul>
          </div>
          <div
            className="p-5"
            style={{ background: SLATE, color: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}
          >
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6, marginBottom: 8 }}>
              Must not read as
            </div>
            <ul style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              <li>— Disney / Pixar character</li>
              <li>— Big-headed chibi</li>
              <li>— Minion</li>
              <li>— Children's mascot</li>
              <li>— Anime</li>
              <li>— Discord emoji</li>
            </ul>
            <div
              style={{
                marginTop: 14,
                paddingTop: 14,
                borderTop: "1px solid rgba(244,237,224,0.2)",
                fontStyle: "italic",
                opacity: 0.8,
                fontSize: 12,
              }}
            >
              Pass / fail: he should look at home in a New Yorker cartoon. Out of place in a children's textbook.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-10 pt-6 flex items-center justify-between"
          style={{ borderTop: `1px solid ${INK}`, fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          <span>Texture &amp; linework — refined in post.</span>
          <span>Next: Host character sheet → four mode styleframes.</span>
        </div>
      </div>
    </div>
  );
}
