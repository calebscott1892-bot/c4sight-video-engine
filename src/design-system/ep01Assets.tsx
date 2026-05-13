/**
 * C4Sight Episode 1 — Visual Asset Components
 * Converted from Claude Design JSX to Remotion-compatible TypeScript.
 * All components render at 1920×1080. No className dependencies — pure inline styles.
 */

import React from 'react';

// ─── Palette ─────────────────────────────────────────────────────────────────
const E1 = {
  stage:   '#0F1011',
  chalk:   '#F4EDE0',
  red:     '#D7382C',
  teal:    '#1A6B5C',
  panel:   '#1A1B1E',
  panelHi: '#23252A',
  muted:   'rgba(244, 237, 224, 0.5)',
  faint:   'rgba(244, 237, 224, 0.18)',
} as const;

// ─── Shared frame style ───────────────────────────────────────────────────────
const FRAME: React.CSSProperties = {
  position: 'relative',
  width: 1920,
  height: 1080,
  overflow: 'hidden',
  background: E1.stage,
  color: E1.chalk,
  fontFamily: "'Archivo', sans-serif",
};

// ─── Reusable primitives ──────────────────────────────────────────────────────
function Arrow({ w = 120 }: { w?: number }) {
  return (
    <svg width={w} height={36} viewBox={`0 0 ${w} 36`}>
      <path
        d={`M 0 18 L ${w - 22} 18 M ${w - 32} 6 L ${w - 4} 18 L ${w - 32} 30`}
        stroke={E1.chalk} strokeWidth={5} strokeLinecap="round"
        strokeLinejoin="round" fill="none"
      />
    </svg>
  );
}

function DiagramBox({
  label, children, big = false,
}: { label?: string; children?: React.ReactNode; big?: boolean }) {
  return (
    <div style={{
      width: big ? 480 : 320, height: big ? 480 : 220,
      border: `4px solid ${E1.chalk}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 18, position: 'relative',
    }}>
      {children ?? (
        <div style={{ fontSize: 64, fontWeight: 900, letterSpacing: '0.04em', color: E1.chalk }}>
          {label}
        </div>
      )}
    </div>
  );
}

// ─── Character mini-figures ───────────────────────────────────────────────────

/** Flat near-white host figure — used in model interior scene. */
export function HostMini({ height = 220, lean = 'right' as 'left' | 'right' }) {
  const skew = lean === 'right' ? 'rotate(6deg)' : 'rotate(-6deg)';
  const w = Math.round(height * 220 / 280);
  return (
    <svg width={w} height={height} viewBox="0 0 220 280"
         style={{ display: 'block' }}>
      <g style={{ transform: skew, transformOrigin: '110px 230px' }}>
        <path d="M 62 112 Q 48 154 56 200"
              stroke="#F0EDE4" strokeWidth={22} strokeLinecap="round" fill="none"/>
        <path d="M 68 100 L 152 100 Q 166 100 166 114 L 152 200 Q 152 210 142 210 L 78 210 Q 68 210 68 200 L 54 114 Q 54 100 68 100 Z"
              fill="#F0EDE4"/>
        <path d="M 158 112 Q 200 130 198 76"
              stroke="#F0EDE4" strokeWidth={22} strokeLinecap="round" fill="none"/>
        <rect x={82}  y={204} width={24} height={70} rx={10} fill="#F0EDE4"/>
        <rect x={114} y={204} width={24} height={70} rx={10} fill="#F0EDE4"/>
        <path d="M 104 100 L 116 100 L 114 116 L 110 122 L 106 116 Z" fill="#D7382C"/>
        <path d="M 78 56 C 78 28 82 21 110 21 C 138 21 142 28 142 56 C 142 84 138 91 110 91 C 82 91 78 84 78 56 Z"
              fill="#F0EDE4"/>
        <circle cx={98}  cy={56} r={4.2} fill="#0F1011"/>
        <circle cx={122} cy={56} r={4.2} fill="#0F1011"/>
        <line x1={102} y1={76} x2={118} y2={76}
              stroke="#0F1011" strokeWidth={2.5} strokeLinecap="round"/>
      </g>
    </svg>
  );
}

/** Flat lavender wizard figure — used in model interior scene. */
export function WizardMini({ height = 240 }: { height?: number }) {
  const w = Math.round(height * 220 / 300);
  return (
    <svg width={w} height={height} viewBox="0 0 220 300" style={{ display: 'block' }}>
      <path d="M 88 132 L 132 132 L 168 268 Q 168 274 162 274 L 58 274 Q 52 274 52 268 Z"
            fill="#B49FCC"/>
      <path d="M 88 134 Q 60 168 64 200"
            stroke="#B49FCC" strokeWidth={20} strokeLinecap="round" fill="none"/>
      <path d="M 132 134 Q 160 168 156 200"
            stroke="#B49FCC" strokeWidth={20} strokeLinecap="round" fill="none"/>
      <circle cx={110} cy={100} r={32} fill="#B49FCC"/>
      <path d="M 110 18 L 76 80 L 144 80 Z" fill="#1F1A29"/>
      <circle cx={100} cy={98} r={3.6} fill="#0F1011"/>
      <circle cx={120} cy={98} r={3.6} fill="#0F1011"/>
      <line x1={103} y1={114} x2={117} y2={114}
            stroke="#0F1011" strokeWidth={2.2} strokeLinecap="round"/>
    </svg>
  );
}

// ─── Full host figure with expression support ─────────────────────────────────

type HostExpression = 'dry' | 'browraise' | 'smile' | 'surprised' | 'open';
type HostView = 'full' | 'waist' | 'head';

function HostFace({ expression = 'dry' as HostExpression }) {
  return (
    <g>
      <circle cx={98}  cy={56} r={4.2} fill="#0F1011"/>
      <circle cx={122} cy={56} r={4.2} fill="#0F1011"/>
      {(expression === 'browraise' || expression === 'surprised') && (
        <line x1={91} y1={46} x2={105} y2={46}
              stroke="#0F1011" strokeWidth={2.5} strokeLinecap="round"/>
      )}
      {expression === 'surprised' && (
        <line x1={115} y1={46} x2={129} y2={46}
              stroke="#0F1011" strokeWidth={2.5} strokeLinecap="round"/>
      )}
      {expression === 'smile' ? (
        <path d="M 102 76 Q 110 73.5 118 76"
              stroke="#0F1011" strokeWidth={2.5} strokeLinecap="round" fill="none"/>
      ) : expression === 'surprised' || expression === 'open' ? (
        <ellipse cx={110} cy={76} rx={6} ry={4} fill="#0F1011"/>
      ) : (
        <line x1={102} y1={76} x2={118} y2={76}
              stroke="#0F1011" strokeWidth={2.5} strokeLinecap="round"/>
      )}
    </g>
  );
}

export function HostFigure({
  view = 'full',
  expression = 'dry',
  height = 240,
}: {
  view?: HostView;
  expression?: HostExpression;
  height?: number;
}) {
  const views: Record<HostView, { vb: string; aspect: number }> = {
    full:  { vb: '0 0 220 280',   aspect: 220 / 280 },
    waist: { vb: '0 0 220 168',   aspect: 220 / 168 },
    head:  { vb: '64 8 92 100',   aspect: 92  / 100 },
  };
  const { vb, aspect } = views[view];
  const width = Math.round(height * aspect);

  return (
    <svg width={width} height={height} viewBox={vb}
         style={{ display: 'block', shapeRendering: 'geometricPrecision' }}>
      {view !== 'head' && (
        <path d="M 62 112 Q 48 154 56 200"
              stroke="#F0EDE4" strokeWidth={22} strokeLinecap="round" fill="none"/>
      )}
      {view !== 'head' && (
        <path d="M 68 100 L 152 100 Q 166 100 166 114 L 152 200 Q 152 210 142 210 L 78 210 Q 68 210 68 200 L 54 114 Q 54 100 68 100 Z"
              fill="#F0EDE4"/>
      )}
      {view !== 'head' && (
        <path d="M 158 112 Q 200 130 198 76"
              stroke="#F0EDE4" strokeWidth={22} strokeLinecap="round" fill="none"/>
      )}
      {view === 'full' && (
        <>
          <rect x={82}  y={204} width={24} height={70} rx={10} fill="#F0EDE4"/>
          <rect x={114} y={204} width={24} height={70} rx={10} fill="#F0EDE4"/>
        </>
      )}
      {view !== 'head' && (
        <path d="M 104 100 L 116 100 L 114 116 L 110 122 L 106 116 Z" fill="#D7382C"/>
      )}
      <path d="M 78 56 C 78 28 82 21 110 21 C 138 21 142 28 142 56 C 142 84 138 91 110 91 C 82 91 78 84 78 56 Z"
            fill="#F0EDE4"/>
      <HostFace expression={expression}/>
    </svg>
  );
}

// ─── Asset 1 — 2026 Timestamp ─────────────────────────────────────────────────
export function E1A1Timestamp() {
  return (
    <div style={{ ...FRAME, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <div style={{
        fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 720,
        lineHeight: 0.9, letterSpacing: '-0.04em', color: E1.chalk,
      }}>2026.</div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontStyle: 'italic',
        fontWeight: 400, fontSize: 56, color: E1.muted,
      }}>things have moved fast.</div>
    </div>
  );
}

// ─── Asset 2 — User growth chart ──────────────────────────────────────────────
export function E1A2Growth() {
  const days = { Netflix: 3.5 * 365, Instagram: 2.5 * 365, ChatGPT: 60 };
  const max = days.Netflix;
  const maxBarPx = 1280;
  const barH = 86;
  const rows = [
    { name: 'Netflix',   t: '3.5 years', d: days.Netflix,   red: false },
    { name: 'Instagram', t: '2.5 years', d: days.Instagram, red: false },
    { name: 'ChatGPT',   t: '60 days',   d: days.ChatGPT,   red: true  },
  ];
  return (
    <div style={{ ...FRAME, padding: '120px 240px', boxSizing: 'border-box' }}>
      <div style={{ fontSize: 38, color: E1.muted, letterSpacing: '0.06em',
                    textTransform: 'uppercase', marginBottom: 56 }}>
        Time to reach 100M users
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {rows.map((r) => {
          const w = Math.max(40, (r.d / max) * maxBarPx);
          return (
            <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <div style={{ width: 280, fontSize: 52, fontWeight: 900,
                            color: r.red ? E1.red : E1.chalk }}>{r.name}</div>
              <div style={{
                width: w, height: barH,
                background: r.red ? E1.red : 'transparent',
                boxShadow: r.red ? 'none' : `inset 0 0 0 4px ${E1.chalk}`,
              }}/>
              <div style={{ fontSize: 42, fontWeight: 500,
                            color: r.red ? E1.red : E1.chalk,
                            fontStyle: r.red ? 'italic' : 'normal' }}>{r.t}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Asset 3 — AI history timeline ───────────────────────────────────────────
export function E1A3Timeline() {
  const markers = [
    { y: 1950, icon: 'q' as const },
    { y: 1997, icon: 'chess' as const },
    { y: 2012, icon: 'net' as const },
    { y: 2017, icon: 'paper' as const },
    { y: 2022, icon: 'speech' as const },
  ];
  const x0 = 220, x1 = 1700;
  const xFor = (_yr: number, i: number, n: number) => x0 + (i / (n - 1)) * (x1 - x0);
  const baseY = 540;
  const s = { stroke: E1.chalk, strokeWidth: 4, strokeLinecap: 'round' as const,
              strokeLinejoin: 'round' as const, fill: 'none' };

  const Icon = ({ kind }: { kind: typeof markers[0]['icon'] }) => {
    switch (kind) {
      case 'q': return (
        <svg width={60} height={60} viewBox="-30 -30 60 60">
          <path d="M -10 -16 Q -10 -24 0 -24 Q 12 -24 11 -14 Q 10 -6 1 -2 L 0 6" {...s}/>
          <circle cx={0} cy={18} r={3} fill={E1.chalk}/>
        </svg>
      );
      case 'chess': return (
        <svg width={60} height={60} viewBox="-30 -30 60 60">
          <circle cx={0} cy={-14} r={7} {...s}/>
          <path d="M -6 -6 L 6 -6 L 4 4 L -4 4 Z" {...s}/>
          <path d="M -10 6 L 10 6 L 12 18 L -12 18 Z" {...s}/>
        </svg>
      );
      case 'net': return (
        <svg width={60} height={60} viewBox="-30 -30 60 60">
          <line x1={-18} y1={-12} x2={0} y2={0} {...s}/>
          <line x1={18}  y1={-12} x2={0} y2={0} {...s}/>
          <line x1={-18} y1={14}  x2={0} y2={0} {...s}/>
          <line x1={18}  y1={14}  x2={0} y2={0} {...s}/>
          {[-18, 18, -18, 18, 0].map((cx, i) => (
            <circle key={i} cx={cx} cy={i < 2 ? -12 : i < 4 ? 14 : 0}
                    r={i === 4 ? 5 : 4} fill={E1.chalk}/>
          ))}
        </svg>
      );
      case 'paper': return (
        <svg width={60} height={60} viewBox="-30 -30 60 60">
          <path d="M -14 -20 L 10 -20 L 16 -14 L 16 22 L -14 22 Z" {...s}/>
          <line x1={-8} y1={-8} x2={10} y2={-8} {...s}/>
          <line x1={-8} y1={0}  x2={10} y2={0} {...s}/>
          <line x1={-8} y1={8}  x2={6}  y2={8} {...s}/>
        </svg>
      );
      case 'speech': return (
        <svg width={60} height={60} viewBox="-30 -30 60 60">
          <path d="M -20 -14 Q -22 -18 -16 -18 L 16 -18 Q 22 -18 22 -12 L 22 6 Q 22 12 16 12 L 0 12 L -8 22 L -8 12 L -16 12 Q -22 12 -22 6 Z" {...s}/>
        </svg>
      );
      default: return null;
    }
  };

  return (
    <div style={FRAME}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080"
           style={{ position: 'absolute', inset: 0 }}>
        <path d={`M ${x0} ${baseY} Q ${(x0+x1)/2} ${baseY-2} ${x1} ${baseY+1}`}
              stroke={E1.chalk} strokeWidth={4} strokeLinecap="round" fill="none"/>
      </svg>
      {markers.map((m, i) => {
        const x = xFor(m.y, i, markers.length);
        return (
          <div key={m.y} style={{
            position: 'absolute', left: x, top: baseY,
            transform: 'translate(-50%, -50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <div style={{ height: 110, marginBottom: -16 }}><Icon kind={m.icon}/></div>
            <div style={{ width: 4, height: 36, background: E1.chalk, marginTop: 30 }}/>
            <div style={{ marginTop: 24, fontSize: 56, fontWeight: 900,
                          color: E1.chalk, letterSpacing: '-0.02em' }}>{m.y}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Asset 4 — Attention Is All You Need paper ────────────────────────────────
export function E1A4Paper() {
  return (
    <div style={{ ...FRAME, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        position: 'absolute', width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244,237,224,0.10) 0%, rgba(244,237,224,0) 70%)',
      }}/>
      <div style={{
        position: 'relative', width: 620, height: 800,
        background: '#F4EDE0', color: '#2A2620',
        padding: '80px 70px', boxSizing: 'border-box',
        transform: 'rotate(-2deg)', fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.05,
                      letterSpacing: '-0.02em', marginBottom: 18 }}>
          Attention Is All You Need
        </div>
        <div style={{ fontSize: 16, color: '#6a615a', marginBottom: 32, fontStyle: 'italic' }}>
          Vaswani et al. · 2017
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[100,98,92,100,86,100,94,72,100,96,40].map((w, i) => (
            <div key={i} style={{ height: 8, width: `${w}%`, background: '#cfc6b8', borderRadius: 2 }}/>
          ))}
        </div>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[100,90,100,80].map((w, i) => (
            <div key={i} style={{ height: 8, width: `${w}%`, background: '#cfc6b8', borderRadius: 2 }}/>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Asset 5 — Autocomplete scale comparison ──────────────────────────────────
export function E1A5Autocomplete({ showCursor = true }: { showCursor?: boolean }) {
  const cursor = showCursor
    ? <span style={{ display: 'inline-block', width: 3, height: 28,
                     background: E1.chalk, marginLeft: 4, verticalAlign: 'middle' }}/>
    : null;
  return (
    <div style={{ ...FRAME, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 80, padding: '0 120px' }}>
      {/* Phone */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        <div style={{
          width: 380, height: 760, background: E1.panel, borderRadius: 48,
          padding: 24, boxSizing: 'border-box', position: 'relative',
        }}>
          <div style={{ background: E1.panelHi, borderRadius: 20, padding: 28,
                        height: 'calc(100% - 220px)', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 32, color: E1.chalk, fontFamily: "'DM Sans'", lineHeight: 1.4 }}>
              the quick{cursor}
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 184, left: 24, right: 24, display: 'flex', gap: 8 }}>
            {['brown', 'way', 'fox'].map((s, i) => (
              <div key={s} style={{
                flex: 1, padding: '14px 0', textAlign: 'center',
                background: i === 0 ? E1.chalk : E1.panelHi,
                color: i === 0 ? E1.stage : E1.chalk,
                fontSize: 22, fontFamily: "'DM Sans'", borderRadius: 10,
              }}>{s}</div>
            ))}
          </div>
          <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24,
                        height: 152, background: E1.panelHi, borderRadius: 16 }}/>
        </div>
        <div style={{ fontSize: 28, color: E1.muted, letterSpacing: '0.08em',
                      textTransform: 'uppercase' }}>autocomplete</div>
      </div>

      <div style={{ fontSize: 100, fontWeight: 900, color: E1.faint }}>×</div>

      {/* AI scale */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, flex: 1 }}>
        <div style={{ width: '100%', maxWidth: 940, background: E1.panel,
                      borderRadius: 28, padding: 56, boxSizing: 'border-box' }}>
          <div style={{ background: E1.panelHi, borderRadius: 16, padding: 24,
                        marginBottom: 28, fontSize: 30, fontFamily: "'DM Sans'", color: E1.muted }}>
            the quick
          </div>
          <div style={{ fontSize: 36, fontFamily: "'DM Sans'", color: E1.chalk, lineHeight: 1.4 }}>
            brown fox jumps over the lazy dog. The phrase, used since the
            late nineteenth century to test typewriters and fonts, contains
            every letter of the English alphabet{cursor}
          </div>
        </div>
        <div style={{ fontSize: 28, color: E1.muted, letterSpacing: '0.08em',
                      textTransform: 'uppercase' }}>autocomplete · at scale</div>
      </div>
    </div>
  );
}

// ─── Asset 6 — Model interior with question mark ──────────────────────────────
export function E1A6ModelInterior() {
  return (
    <div style={{ ...FRAME, display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 36 }}>
      <DiagramBox label="INPUT"/>
      <Arrow/>
      <div style={{ position: 'relative' }}>
        <DiagramBox big>
          <div style={{
            fontFamily: "'Fraunces', serif", fontWeight: 900, fontStyle: 'italic',
            fontSize: 360, lineHeight: 0.85, color: E1.chalk,
          }}>?</div>
          <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: '0.04em',
                        color: E1.chalk, position: 'absolute', top: 28, left: 28 }}>
            MODEL
          </div>
        </DiagramBox>
        <div style={{ position: 'absolute', left: -150, bottom: -40 }}>
          <HostMini height={260} lean="right"/>
        </div>
        <div style={{ position: 'absolute', right: -160, bottom: -40, transform: 'scaleX(-1)' }}>
          <WizardMini height={280}/>
        </div>
      </div>
      <Arrow/>
      <DiagramBox label="OUTPUT"/>
    </div>
  );
}

// ─── Asset 7 — Thesis mark ────────────────────────────────────────────────────
export function E1A7ThesisMark() {
  return (
    <div style={{ ...FRAME, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 80 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 80 }}>
        {/* Human silhouette */}
        <svg width={260} height={340} viewBox="0 0 260 340">
          <circle cx={130} cy={68} r={54} fill={E1.chalk}/>
          <path d="M 56 168 Q 56 134 92 134 L 168 134 Q 204 134 204 168 L 196 320 L 64 320 Z"
                fill={E1.chalk}/>
        </svg>
        <div style={{ fontSize: 220, fontWeight: 900, color: E1.chalk, lineHeight: 1 }}>+</div>
        {/* AI/circuit icon */}
        <svg width={320} height={320} viewBox="-160 -160 320 320">
          <rect x={-110} y={-110} width={220} height={220} rx={36}
                fill="none" stroke={E1.chalk} strokeWidth={8}/>
          <rect x={-58} y={-58} width={116} height={116} rx={14} fill={E1.chalk}/>
          {[-60, 0, 60].map((o) => (
            <g key={o}>
              <line x1={o} y1={-110} x2={o} y2={-150} stroke={E1.chalk} strokeWidth={8} strokeLinecap="round"/>
              <line x1={o} y1={110}  x2={o} y2={150}  stroke={E1.chalk} strokeWidth={8} strokeLinecap="round"/>
              <line x1={-110} y1={o} x2={-150} y2={o} stroke={E1.chalk} strokeWidth={8} strokeLinecap="round"/>
              <line x1={110}  y1={o} x2={150}  y2={o} stroke={E1.chalk} strokeWidth={8} strokeLinecap="round"/>
            </g>
          ))}
        </svg>
      </div>
      <div style={{ fontWeight: 900, fontSize: 96, letterSpacing: '0.02em',
                    color: E1.chalk, textAlign: 'center', lineHeight: 1 }}>
        BETTER THAN<br/>EITHER ALONE.
      </div>
    </div>
  );
}

// ─── Asset 8 — Two-column comparison ─────────────────────────────────────────
export function E1A8Comparison() {
  const good = [
    'Recognising patterns', 'Generating fluent text',
    'Summarising long material', 'Translation, transcription',
    'Drafting code & first passes',
  ];
  const notGood = [
    'Knowing what is true', 'Citing real sources',
    'Genuinely novel reasoning', "Knowing what it doesn't know",
    'Telling you when to stop',
  ];
  const Col = ({ heading, items, accent }: { heading: string; items: string[]; accent: string }) => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 56 }}>
      <div style={{ fontSize: 84, fontWeight: 900, letterSpacing: '-0.02em', color: accent,
                    borderBottom: `4px solid ${accent}`, paddingBottom: 24 }}>{heading}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0,
                   display: 'flex', flexDirection: 'column', gap: 28 }}>
        {items.map((t) => (
          <li key={t} style={{ display: 'flex', gap: 24, alignItems: 'baseline',
                               fontSize: 44, fontFamily: "'DM Sans'", color: E1.chalk }}>
            <span style={{ color: accent, fontWeight: 900, fontSize: 32 }}>—</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <div style={{ ...FRAME, padding: '120px 140px', boxSizing: 'border-box',
        display: 'flex', gap: 120 }}>
      <Col heading="AI IS GOOD AT" items={good}    accent={E1.chalk}/>
      <Col heading="AI IS NOT"     items={notGood} accent={E1.red}/>
    </div>
  );
}

// ─── Asset 9 — Series preview cards ──────────────────────────────────────────
function SeriesCard({ ep, title, icon }: { ep: string; title: React.ReactNode; icon: React.ReactNode }) {
  return (
    <div style={{
      width: 640, height: 360, background: '#15171A',
      border: `1px solid ${E1.faint}`,
      padding: 36, boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      fontFamily: 'Archivo, sans-serif', color: E1.chalk,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ fontSize: 18, color: E1.muted, letterSpacing: '0.18em' }}>EP {ep}</div>
        <div>{icon}</div>
      </div>
      <div style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em' }}>
        {title}
      </div>
    </div>
  );
}

export function E1A9Cards() {
  const spark = (
    <svg width={56} height={56} viewBox="-30 -30 60 60">
      <path d="M 0 -26 C 3 -8 8 -3 26 0 C 8 3 3 8 0 26 C -3 8 -8 3 -26 0 C -8 -3 -3 -8 0 -26 Z"
            fill={E1.chalk}/>
    </svg>
  );
  const eps = [
    { ep: '01', title: ['What AI', 'Can Do'],              icon: spark },
    { ep: '02', title: ['How It', 'Actually Works'],       icon: <div style={{ display:'flex', gap:8 }}>{[0,1,2].map(i=><div key={i} style={{width:14,height:14,background:E1.chalk}}/>)}</div> },
    { ep: '03', title: ['The Part Nobody', 'Tells You'],   icon: <div style={{fontSize:56,fontWeight:900,fontStyle:'italic',color:E1.red,lineHeight:0.8}}>?</div> },
    { ep: '04', title: ['Working', 'With AI'],             icon: null },
    { ep: '05', title: ['Where This', 'Is Going'],         icon: null },
    { ep: '06', title: ['Better Than', 'Either Alone'],    icon: null },
  ];
  return (
    <div style={{ ...FRAME, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
        gridAutoRows: '1fr', gap: 36, padding: 100, boxSizing: 'border-box' }}>
      {eps.map(e => (
        <div key={e.ep} style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ transform: 'scale(0.85)' }}>
            <SeriesCard ep={e.ep} title={e.title.map((l,i)=><div key={i}>{l}</div>)} icon={e.icon}/>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Asset 10 — Teal mode background ─────────────────────────────────────────
export function E1A10Teal() {
  return <div style={{ ...FRAME, background: E1.teal }}/>;
}

// ─── Asset 11 — Hallucination sequence ───────────────────────────────────────
export type HallucinationStage = 'before' | 'during' | 'after';

export function HallucinationFrame({ stage }: { stage: HallucinationStage }) {
  return (
    <div style={FRAME}>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1180, background: E1.panel, borderRadius: 28,
        padding: 56, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', gap: 28,
      }}>
        <div style={{ alignSelf: 'flex-start', background: E1.panelHi, borderRadius: 16,
                      padding: '22px 32px', fontSize: 30, color: E1.muted, fontFamily: "'DM Sans'" }}>
          What's the capital of Australia?
        </div>
        <div style={{ background: E1.panelHi, borderRadius: 16, padding: '32px 36px',
                      fontSize: 44, color: E1.chalk, fontFamily: "'DM Sans'",
                      position: 'relative', minHeight: 120 }}>
          <span style={{
            textDecoration: stage === 'after' ? 'line-through' : 'none',
            textDecorationColor: E1.red,
            textDecorationThickness: '5px',
            opacity: stage === 'after' ? 0.5 : 1,
          }}>
            The capital of Australia is Sydney.
          </span>
          {stage === 'after' && (
            <div style={{
              position: 'absolute', right: -40, top: -40,
              width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: E1.red, fontSize: 80, fontWeight: 900, color: '#fff',
              transform: 'rotate(8deg)', fontFamily: 'Archivo',
            }}>×</div>
          )}
        </div>
      </div>

      {stage === 'during' && (
        <>
          <div style={{
            position: 'absolute', left: '50%', top: '52%',
            transform: 'translate(-50%, -50%) rotate(-8deg) scale(1.15)',
            width: 720, height: 200, background: E1.red,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 60px 120px rgba(215,56,44,0.3)',
          }}>
            <span style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: 148,
                           letterSpacing: '0.03em', color: '#fff' }}>VERIFY</span>
          </div>
          <svg width={1920} height={1080} viewBox="0 0 1920 1080"
               style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {([
              [380,200],[220,540],[380,880],
              [1540,200],[1700,540],[1540,880],
              [800,140],[1120,140],[800,940],[1120,940],
            ] as [number,number][]).map(([x, y], i) => {
              const cx = 960, cy = 540;
              const dx = x - cx, dy = y - cy;
              const len = Math.hypot(dx, dy);
              const ux = dx/len, uy = dy/len;
              return (
                <line key={i}
                      x1={cx + ux * 480} y1={cy + uy * 480}
                      x2={cx + ux * 720} y2={cy + uy * 720}
                      stroke={E1.chalk} strokeWidth={6} strokeLinecap="round"/>
              );
            })}
          </svg>
        </>
      )}
    </div>
  );
}

// ─── Asset 12 — Rapid-fire hype cards ────────────────────────────────────────
const HYPE_CARDS = [
  { text: ['AI WILL', 'SAVE US.'],            fontSize: 360, align: 'center' as const },
  { text: ['AI WILL', 'END US.'],             fontSize: 360, align: 'center' as const, color: '#D7382C' },
  { text: ['AI WILL TAKE', 'YOUR JOB.'],      fontSize: 280, align: 'left' as const },
  { text: ['AI IS ALREADY', 'YOUR THERAPIST.'], fontSize: 220, align: 'right' as const },
  { text: ['AI WROTE', 'THIS ARTICLE.'],      fontSize: 260, align: 'center' as const, italic: true },
  { text: ['AI IS', 'OVERHYPED.'],            fontSize: 380, align: 'left' as const },
  { text: ['AI IS', 'UNDERHYPED.'],           fontSize: 380, align: 'right' as const },
];

export function E1A12Hype({ index }: { index: number }) {
  const c = HYPE_CARDS[index];
  if (!c) return null;
  return (
    <div style={{
      ...FRAME,
      display: 'flex', alignItems: 'center',
      justifyContent: c.align === 'left' ? 'flex-start' : c.align === 'right' ? 'flex-end' : 'center',
      padding: '0 160px',
    }}>
      <div style={{
        fontFamily: 'Archivo, sans-serif', fontWeight: 900,
        fontStyle: c.italic ? 'italic' : 'normal',
        fontSize: c.fontSize, lineHeight: 0.9, letterSpacing: '-0.03em',
        color: c.color ?? E1.chalk, textAlign: c.align,
      }}>
        {c.text.map((line, i) => <div key={i}>{line}</div>)}
      </div>
    </div>
  );
}

export const HYPE_CARD_COUNT = HYPE_CARDS.length;

// ─── Asset 13 — Training vs Inference ────────────────────────────────────────
export function E1A13TrainInfer() {
  const DataStack = () => (
    <svg width={220} height={260} viewBox="0 0 220 260">
      {[40,60,80,100,120,140,160,180,200].map((y, i) => (
        <line key={i} x1={20} y1={y} x2={180 - (i % 3) * 30} y2={y}
              stroke={E1.chalk} strokeWidth={3} strokeLinecap="round"/>
      ))}
    </svg>
  );
  const Funnel = () => (
    <svg width={200} height={180} viewBox="0 0 200 180">
      <path d="M 10 20 L 190 20 L 130 110 L 130 170 L 70 170 L 70 110 Z"
            stroke={E1.chalk} strokeWidth={4} fill="none" strokeLinejoin="round"/>
    </svg>
  );
  const SmBox = ({ label }: { label: string }) => (
    <div style={{ width: 240, height: 200, border: `4px solid ${E1.chalk}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 44, fontWeight: 900, letterSpacing: '0.04em' }}>{label}</div>
  );

  return (
    <div style={FRAME}>
      {(['TRAINING', 'INFERENCE'] as const).map((label, i) => (
        <div key={label} style={{
          position: 'absolute', top: 100, left: i === 0 ? 0 : '50%', width: '50%',
          textAlign: 'center', fontSize: 56, fontWeight: 900,
          letterSpacing: '0.06em', color: E1.chalk,
        }}>{label}</div>
      ))}
      <div style={{ position: 'absolute', left: '50%', top: 220, bottom: 120, width: 0,
                    borderLeft: `2px dashed ${E1.faint}`, transform: 'translateX(-50%)' }}/>
      <div style={{ position: 'absolute', left: 0, top: 240, width: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
        <DataStack/><Funnel/><Arrow w={80}/><SmBox label="MODEL"/>
      </div>
      <div style={{ position: 'absolute', right: 0, top: 280, width: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, height: 200 }}>
        <Arrow w={140}/><SmBox label="MODEL"/><Arrow w={140}/>
      </div>
      {['slow, expensive, once.', 'fast, cheap, every time.'].map((t, i) => (
        <div key={t} style={{ position: 'absolute', bottom: 120,
                              left: i === 0 ? 0 : undefined, right: i === 1 ? 0 : undefined,
                              width: '50%', textAlign: 'center',
                              fontSize: 30, color: E1.muted, fontStyle: 'italic',
                              fontFamily: "'DM Sans'" }}>{t}</div>
      ))}
    </div>
  );
}

// ─── Asset 14 — Emergence ────────────────────────────────────────────────────
export function E1A14Emergence() {
  const cols = 26, rows = 14, cell = 56;
  const offsetX = (1920 - (cols - 1) * cell) / 2;
  const offsetY = 240;

  const lines: { x1:number;y1:number;x2:number;y2:number }[] = [];
  for (let i = 0; i < 70; i++) {
    lines.push({
      x1: (i * 7) % cols, y1: (i * 11) % rows,
      x2: ((i * 7) % cols + ((i % 3) + 1)) % cols,
      y2: ((i * 11) % rows + ((i % 2) + 1)) % rows,
    });
  }

  const sx = 19, sy = 7;
  const starPts = Array.from({ length: 5 }, (_, k) => {
    const ang = -Math.PI/2 + k * (2*Math.PI/5);
    return [sx + Math.cos(ang) * 3, sy + Math.sin(ang) * 3];
  });
  const order = [0, 2, 4, 1, 3, 0];

  return (
    <div style={FRAME}>
      <svg width={1920} height={1080} viewBox="0 0 1920 1080">
        {lines.map((l, i) => (
          <line key={i}
                x1={offsetX + l.x1 * cell} y1={offsetY + l.y1 * cell}
                x2={offsetX + l.x2 * cell} y2={offsetY + l.y2 * cell}
                stroke={E1.chalk} strokeOpacity={0.18} strokeWidth={1.5}/>
        ))}
        {order.slice(0, 5).map((idx, i) => {
          const [x1, y1] = starPts[idx];
          const [x2, y2] = starPts[order[i + 1]];
          return (
            <line key={`s-${i}`}
                  x1={offsetX + x1 * cell} y1={offsetY + y1 * cell}
                  x2={offsetX + x2 * cell} y2={offsetY + y2 * cell}
                  stroke={E1.red} strokeWidth={3} strokeLinecap="round"/>
          );
        })}
        {Array.from({ length: rows }).flatMap((_, r) =>
          Array.from({ length: cols }).map((__, c) => {
            const isStar = starPts.some(([px, py]) => Math.round(px) === c && Math.round(py) === r);
            return (
              <circle key={`${r}-${c}`}
                      cx={offsetX + c * cell} cy={offsetY + r * cell}
                      r={isStar ? 6 : 3.5} fill={isStar ? E1.red : E1.chalk}
                      opacity={isStar ? 1 : 0.55}/>
            );
          })
        )}
      </svg>
      <div style={{ position: 'absolute', bottom: 90, left: 0, right: 0, textAlign: 'center' }}>
        <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: '0.04em', color: E1.chalk, marginBottom: 14 }}>
          EMERGENT CAPABILITY
        </div>
        <div style={{ fontSize: 30, fontStyle: 'italic', color: E1.muted, fontFamily: "'DM Sans'" }}>
          nobody programmed this.
        </div>
      </div>
    </div>
  );
}

// ─── Asset 15 — Local vs Cloud ────────────────────────────────────────────────
export function E1A15LocalCloud() {
  const Laptop = ({ glow = false }: { glow?: boolean }) => (
    <svg width={280} height={200} viewBox="0 0 280 200">
      <rect x={40} y={20} width={200} height={130} rx={6}
            stroke={E1.chalk} strokeWidth={4} fill="none"/>
      <path d="M 14 168 L 266 168 L 254 184 L 26 184 Z"
            stroke={E1.chalk} strokeWidth={4} strokeLinejoin="round" fill="none"/>
      {glow && (
        <g transform="translate(140 85)">
          <circle r={42} fill={E1.chalk} opacity={0.10}/>
          <rect x={-26} y={-26} width={52} height={52} rx={8} fill={E1.chalk}/>
          <rect x={-12} y={-12} width={24} height={24} fill={E1.stage}/>
        </g>
      )}
    </svg>
  );
  const Servers = () => (
    <svg width={240} height={320} viewBox="0 0 240 320">
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(0 ${i * 96})`}>
          <rect x={20} y={20} width={200} height={84} rx={4}
                stroke={E1.chalk} strokeWidth={4} fill="none"/>
          <circle cx={42} cy={62} r={4} fill={E1.chalk}/>
          <circle cx={60} cy={62} r={4} fill={E1.chalk}/>
          <line x1={86} y1={56} x2={200} y2={56} stroke={E1.chalk} strokeWidth={2} opacity={0.5}/>
          <line x1={86} y1={68} x2={180} y2={68} stroke={E1.chalk} strokeWidth={2} opacity={0.5}/>
        </g>
      ))}
    </svg>
  );
  const Pipeline = () => (
    <svg width={320} height={40} viewBox="0 0 320 40">
      <line x1={10} y1={20} x2={310} y2={20}
            stroke={E1.chalk} strokeWidth={3} strokeDasharray="6 8" strokeOpacity={0.7}/>
      {[80, 180, 260].map((cx, i) => (
        <rect key={i} x={cx-12} y={12} width={24} height={16} rx={3} fill={E1.chalk}/>
      ))}
    </svg>
  );
  const Half = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div style={{ flex:1, height:'100%', display:'flex', flexDirection:'column',
                  alignItems:'center', justifyContent:'center', gap: 56 }}>
      <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '0.06em', color: E1.chalk }}>{label}</div>
      <div style={{ display:'flex', alignItems:'center', gap: 24 }}>{children}</div>
    </div>
  );
  return (
    <div style={{ ...FRAME, display:'flex' }}>
      <Half label="CLOUD AI"><Laptop/><Pipeline/><Servers/></Half>
      <div style={{ width:0, alignSelf:'stretch', borderLeft:`2px dashed ${E1.faint}`,
                    marginTop:200, marginBottom:200 }}/>
      <Half label="LOCAL AI"><Laptop glow/></Half>
    </div>
  );
}

// ─── Asset 16 — Correction pull-quote ────────────────────────────────────────
export function E1A16Correction() {
  return (
    <div style={{ ...FRAME, display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        padding:'0 200px', boxSizing:'border-box', gap: 60 }}>
      <div style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:900, fontSize:200,
                    lineHeight:0.92, letterSpacing:'-0.025em', color:E1.chalk, textAlign:'center' }}>
        CORRECTING IT<br/>DOESN'T TEACH IT.
      </div>
      <div style={{ fontFamily:"'DM Sans',sans-serif", fontStyle:'italic', fontWeight:400,
                    fontSize:56, color:E1.muted, textAlign:'center' }}>
        next conversation — fresh slate.
      </div>
    </div>
  );
}
