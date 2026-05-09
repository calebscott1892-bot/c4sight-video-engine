import { Host } from "./Host";

const PAPER = "#EFE7D6";
const SLATE = "#1A1F1C";
const INK = "#221F1F";

function Cell({
  label,
  caption,
  children,
  dark = false,
}: {
  label: string;
  caption?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col"
      style={{
        background: dark ? SLATE : "#F4EDE0",
        border: `1px solid ${INK}`,
        boxShadow: "2px 3px 0 rgba(34,31,31,0.18)",
        minHeight: 280,
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
      <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 14, letterSpacing: "0.18em", color: INK, opacity: 0.5 }}>
        {index}
      </div>
      <h2 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 28, color: INK, lineHeight: 1.1 }}>
        {title}
      </h2>
      <div className="flex-1" style={{ borderBottom: `1px solid ${INK}`, opacity: 0.25, transform: "translateY(-6px)" }} />
      <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, color: INK, opacity: 0.6, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        {sub}
      </div>
    </div>
  );
}

export function HostSheet() {
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
        <div className="flex items-end justify-between mb-2 pb-6" style={{ borderBottom: `2px solid ${INK}` }}>
          <div>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", opacity: 0.55 }}>
              C4Sight · Show Bible v1.0 · Deliverable 2
            </div>
            <h1 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 56, lineHeight: 1.0, marginTop: 8 }}>
              The Host
            </h1>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, marginTop: 8, opacity: 0.7, maxWidth: 640 }}>
              Adult, late 20s–mid 30s read. Dry, observant, slightly skeptical. Henley or rolled-sleeve button-down, work trousers. Always near chalk or a notebook.
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <div>Default register: dry</div>
            <div>Anti-register: warm-host / stern-teacher</div>
            <div>Two variants — choose later</div>
          </div>
        </div>

        {/* 1. Views */}
        <SectionHeader index="01" title="Three Views" sub="Front · Blackboard · Desk" />
        <div className="grid grid-cols-3 gap-4">
          <Cell label="Front, neutral" caption="full body">
            <Host view="front" expression="dry" glasses showNotebook size={170} />
          </Cell>
          <Cell label="At the blackboard" caption="3/4, mid-explanation" dark>
            <Host view="blackboard" expression="raised-brow" pose="two-tap-ready" glasses size={170} />
          </Cell>
          <Cell label="At the desk" caption="3/4, mid-thought">
            <Host view="desk" expression="curious" glasses showNotebook size={170} />
          </Cell>
        </div>

        {/* 2. Expressions */}
        <SectionHeader index="02" title="Expression Studies" sub="Five reads, all dry-leaning" />
        <div className="grid grid-cols-5 gap-3">
          <Cell label="Dry" caption="default">
            <Host expression="dry" glasses size={130} />
          </Cell>
          <Cell label="Raised brow" caption="skeptical">
            <Host expression="raised-brow" glasses size={130} />
          </Cell>
          <Cell label="Slight smile" caption="genuine">
            <Host expression="smile" glasses size={130} />
          </Cell>
          <Cell label="Exasperated" caption="eyes closed, sigh">
            <Host expression="exasperated" glasses size={130} />
          </Cell>
          <Cell label="Curious" caption="head tilt">
            <Host expression="curious" glasses size={130} />
          </Cell>
        </div>

        {/* 3. Poses */}
        <SectionHeader index="03" title="Pose Studies" sub="Three recurring beats" />
        <div className="grid grid-cols-3 gap-4">
          <Cell label="Mid-sentence gesture" caption="open hand">
            <Host pose="gesture" expression="raised-brow" glasses size={170} />
          </Cell>
          <Cell label="Two-tap ready" caption="chalk up, before the taps">
            <Host pose="two-tap-ready" expression="dry" glasses showChalk size={170} />
          </Cell>
          <Cell label="Brushing chalk dust" caption="exit ritual">
            <Host pose="brushing-dust" expression="smile" glasses size={170} />
          </Cell>
        </div>

        {/* 4. Variants */}
        <SectionHeader index="04" title="Variants" sub="Default A, alternate B — pick one" />
        <div className="grid grid-cols-2 gap-4">
          <Cell label="Variant A" caption="default · dark hair · oatmeal henley">
            <div className="flex items-end gap-6">
              <Host variant="a" expression="dry" glasses showNotebook size={170} />
              <Host variant="a" view="blackboard" pose="two-tap-ready" expression="raised-brow" glasses size={170} />
            </div>
          </Cell>
          <Cell label="Variant B" caption="alternate · auburn · slate-blue button-down">
            <div className="flex items-end gap-6">
              <Host variant="b" expression="dry" glasses={false} showNotebook size={170} />
              <Host variant="b" view="blackboard" pose="two-tap-ready" expression="raised-brow" glasses={false} size={170} />
            </div>
          </Cell>
        </div>

        {/* 5. Rules */}
        <SectionHeader index="05" title="Design Rules" sub="What the host is — and isn't" />
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5" style={{ background: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55, marginBottom: 8 }}>
              Must read as
            </div>
            <ul style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              <li>— Adult, late 20s–mid 30s</li>
              <li>— Henley or rolled-sleeve button-down, practical trousers, sensible shoes</li>
              <li>— Wire-frame glasses optional — useful for thinking beats</li>
              <li>— Always with chalk, notebook, or tablet in frame</li>
              <li>— Default expression: dry, observant, slightly skeptical</li>
              <li>— Comfortable with silence and short sentences</li>
            </ul>
          </div>
          <div className="p-5" style={{ background: SLATE, color: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6, marginBottom: 8 }}>
              Must not read as
            </div>
            <ul style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              <li>— Warm-host / breakfast-TV presenter</li>
              <li>— Stern teacher / lecturer</li>
              <li>— Tech-bro / hoodie-and-AirPods</li>
              <li>— Fashion-forward or nerdy-stereotype</li>
              <li>— Frequently surprised or breathless</li>
              <li>— Smiling by default</li>
            </ul>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(244,237,224,0.2)", fontStyle: "italic", opacity: 0.8, fontSize: 12 }}>
              Pass / fail: could plausibly be the kind of person who says "I know — yet another AI video" without irony.
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 flex items-center justify-between" style={{ borderTop: `1px solid ${INK}`, fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>Texture &amp; linework — refined in post.</span>
          <span>Next: four mode styleframes.</span>
        </div>
      </div>
    </div>
  );
}
