// Deliverable 5 — Production Asset Manifest for Episode 1.
// Organised for handoff to Codex / Remotion. Filterable by category and format.

import { useMemo, useState } from "react";

const PAPER = "#EFE7D6";
const SLATE = "#1A1F1C";
const INK = "#221F1F";
const CHALK = "#F4EDE0";
const RED = "#D7382C";

type Format = "SVG" | "PNG" | "Lottie" | "PNG-seq" | "video";
type Category =
  | "Characters"
  | "Props"
  | "Backgrounds"
  | "UI"
  | "Type"
  | "Transitions"
  | "Particles";

interface Asset {
  id: string;
  name: string;
  category: Category;
  format: Format;
  size: string;
  animates: boolean;
  layers?: string[];
  notes: string;
  usedIn: string[]; // frame ids e.g. "F02", "F07"
}

const ASSETS: Asset[] = [
  // ─── Characters ───
  {
    id: "char-host-body",
    name: "Host — body (rigged)",
    category: "Characters",
    format: "PNG",
    size: "1080×1920 @2x",
    animates: true,
    layers: ["torso", "left-arm", "right-arm", "left-leg", "right-leg", "head", "hair", "glasses"],
    notes:
      "Head, arms, legs delivered as separate layers with anchor points marked. Glasses on independent layer (toggle on/off).",
    usedIn: ["F01", "F04", "F05", "F06", "F07", "F08"],
  },
  {
    id: "char-host-poses",
    name: "Host — pose set",
    category: "Characters",
    format: "PNG",
    size: "1080×1920 @2x each",
    animates: false,
    notes:
      "Static pose deliveries: front-neutral, blackboard-tap, desk-thinking, arms-crossed, brushing-dust, gesture, walking-mid-stride. Used as keyframes.",
    usedIn: ["F04", "F05", "F06"],
  },
  {
    id: "char-host-mouths",
    name: "Host — mouth shapes",
    category: "Characters",
    format: "SVG",
    size: "vector",
    animates: true,
    layers: ["closed", "open-A", "open-E", "open-O", "smirk", "exhale"],
    notes: "Lip-sync set. Six shapes minimum. Swap-only, no in-betweens.",
    usedIn: ["F04", "F05", "F06"],
  },
  {
    id: "char-wizard-body",
    name: "Wizard — body (rigged)",
    category: "Characters",
    format: "PNG",
    size: "540×720 @2x",
    animates: true,
    layers: ["robe", "left-arm", "right-arm", "head", "hat", "wand"],
    notes:
      "Hat on independent layer for tilt/drop animation. Robe-puddle layer separate so it can drag/animate during walk-off.",
    usedIn: ["F01", "F02", "F03", "F04", "F05", "F10"],
  },
  {
    id: "char-wizard-back",
    name: "Wizard — rear view (walking)",
    category: "Characters",
    format: "PNG",
    size: "540×720 @2x",
    animates: true,
    layers: ["robe-back", "robe-drag", "hat-back"],
    notes: "Used in F04 sad walk-off. Robe-drag layer trails behind body.",
    usedIn: ["F04"],
  },
  {
    id: "char-wizard-expressions",
    name: "Wizard — expression sheet",
    category: "Characters",
    format: "PNG",
    size: "300×300 @2x each",
    animates: false,
    notes:
      "Six expressions: neutral, sulking, panicked, smug, disappointed, mid-shrug. Swap-in faces only.",
    usedIn: ["F02", "F03", "F05", "F10"],
  },
  {
    id: "char-cafe-owner",
    name: "Cafe owner (Mode 4 only)",
    category: "Characters",
    format: "PNG",
    size: "1080×1920 @2x",
    animates: true,
    layers: ["body", "left-arm", "right-arm", "head"],
    notes: "Host variant B with apron. Used in Mode 4 / human-judgement contexts.",
    usedIn: [],
  },

  // ─── Props ───
  {
    id: "prop-chalk-wand",
    name: "Chalk wand",
    category: "Props",
    format: "SVG",
    size: "vector",
    animates: false,
    notes: "Stolen by wizard, recovered by host. Two states: chalk-tip-fresh, chalk-tip-worn.",
    usedIn: ["F02", "F06", "F07"],
  },
  {
    id: "prop-notebook",
    name: "Host notebook",
    category: "Props",
    format: "SVG",
    size: "vector",
    animates: true,
    layers: ["cover", "spine", "page-left", "page-right"],
    notes: "Used as a 'let me check' beat. Page-flip animation needed (3-frame).",
    usedIn: ["F01", "F05"],
  },
  {
    id: "prop-coffee-cup",
    name: "Coffee / tea cup with steam",
    category: "Props",
    format: "PNG",
    size: "400×500 @2x",
    animates: true,
    layers: ["cup", "steam-1", "steam-2", "steam-3"],
    notes: "Steam wisps loop independently. Used in main-world & cafe scenes.",
    usedIn: ["F01"],
  },
  {
    id: "prop-verify-stamp",
    name: "Verify stamp",
    category: "Props",
    format: "PNG-seq",
    size: "800×600 @2x · 12 frames",
    animates: true,
    layers: ["handle", "rubber", "impact-paper"],
    notes:
      "Frame sequence for the thunk: descent (4 frames), impact (2 frames), recoil (4 frames), settle (2 frames). Audio sync mandatory at impact frame.",
    usedIn: ["F09"],
  },
  {
    id: "prop-eraser",
    name: "Eraser",
    category: "Props",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "Used in eraser-wipe transition. See Transitions row.",
    usedIn: ["F07"],
  },
  {
    id: "prop-books-stack",
    name: "Stack of books (wizard hides behind)",
    category: "Props",
    format: "SVG",
    size: "vector",
    animates: false,
    notes: "Three books, varied spines. No animation needed — wizard hat animates separately.",
    usedIn: [],
  },
  {
    id: "prop-cafe-set",
    name: "Cafe back-office props",
    category: "Props",
    format: "SVG",
    size: "vector",
    animates: false,
    notes: "Coffee bag, tin, clipboard with paperwork, phone face-down, hand-written sign.",
    usedIn: [],
  },

  // ─── Backgrounds ───
  {
    id: "bg-workspace",
    name: "Workspace (Mode 1 home base)",
    category: "Backgrounds",
    format: "PNG",
    size: "1920×1080 @2x",
    animates: false,
    layers: ["wall", "window", "floor", "desk", "shelf"],
    notes: "Layered for parallax-ready camera moves. Daylight cast on floor on its own layer.",
    usedIn: ["F01"],
  },
  {
    id: "bg-blackboard-clean",
    name: "Blackboard — clean",
    category: "Backgrounds",
    format: "PNG",
    size: "1920×1080 @2x",
    animates: false,
    notes: "Slate plus wood frame and ledge. Ledge layer separate for chalk pickup.",
    usedIn: ["F06"],
  },
  {
    id: "bg-blackboard-diagram",
    name: "Blackboard — Input/Model/Output diagram",
    category: "Backgrounds",
    format: "Lottie",
    size: "1920×1080",
    animates: true,
    layers: [
      "input-card-stroke",
      "input-text",
      "arrow-1",
      "model-box-stroke",
      "puzzle-pieces",
      "model-text",
      "arrow-2",
      "output-dashed-stroke",
      "output-text",
    ],
    notes:
      "Each chalk element draws on with stroke-dash animation. Text appears character-by-character with chalk-on-board sound trigger.",
    usedIn: ["F07"],
  },
  {
    id: "bg-cafe-office",
    name: "Cafe back office (Mode 4)",
    category: "Backgrounds",
    format: "PNG",
    size: "1920×1080 @2x",
    animates: false,
    layers: ["wall", "shelf", "desk", "props-on-shelf"],
    notes: "Slightly more saturated than workspace. Props removable for variant shots.",
    usedIn: [],
  },
  {
    id: "bg-paper-flat",
    name: "Paper flat (type-driven frames)",
    category: "Backgrounds",
    format: "PNG",
    size: "1920×1080 @2x",
    animates: false,
    notes: "Warm paper background with grain. Used as base for F01, F03, F05, F08, F10.",
    usedIn: ["F01", "F03", "F05", "F08", "F10"],
  },

  // ─── UI ───
  {
    id: "ui-chat-window",
    name: "AI chat window (Mode 3)",
    category: "UI",
    format: "SVG",
    size: "vector",
    animates: true,
    layers: ["window-frame", "chrome", "prompt-bubble", "reply-bubble", "input-bar"],
    notes: "Bubbles can be added/removed. Window chrome static.",
    usedIn: [],
  },
  {
    id: "ui-prompt-bubble",
    name: "Prompt bubble",
    category: "UI",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "Type-on animation for prompt text. Söhne 22pt body, ink fill.",
    usedIn: [],
  },
  {
    id: "ui-reply-stream",
    name: "Generated reply card (streaming)",
    category: "UI",
    format: "Lottie",
    size: "1320×460",
    animates: true,
    notes:
      "Text streams in word-by-word, ~3 words/second. Cursor blink at end of latest line. Verify-red highlight overlay separate layer.",
    usedIn: [],
  },
  {
    id: "ui-cursor",
    name: "Blinking cursor",
    category: "UI",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "1s loop, hard cut on/off. Sits inside reply card.",
    usedIn: [],
  },
  {
    id: "ui-verify-highlight",
    name: "Verify-red sentence highlight",
    category: "UI",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "Fades in over the hallucinated sentence. Plus margin-flag glyph.",
    usedIn: ["F08"],
  },
  {
    id: "ui-laptop-screen",
    name: "Laptop email draft (Mode 4)",
    category: "UI",
    format: "PNG",
    size: "1040×560 @2x",
    animates: false,
    notes: "Single static composition. Used inside the cafe-office scene.",
    usedIn: [],
  },

  // ─── Type ───
  {
    id: "type-is-ai-magic",
    name: '"Is AI magic?" — title type',
    category: "Type",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "Recoleta 220pt. Set as outlines (not live text) so it can be stroked/animated on.",
    usedIn: ["F01"],
  },
  {
    id: "type-no",
    name: '"NO." — type punch',
    category: "Type",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "Recoleta 520pt. Period in Verify Red. Single-frame slam-in (2-frame stretch then settle).",
    usedIn: ["F03"],
  },
  {
    id: "type-well-sort-of",
    name: '"Well… sort of." — type',
    category: "Type",
    format: "SVG",
    size: "vector",
    animates: true,
    notes: "Recoleta italic 180pt, two lines. Word-by-word reveal.",
    usedIn: ["F05"],
  },
  {
    id: "type-ai-made-clear",
    name: '"AI made clear." — wordmark',
    category: "Type",
    format: "SVG",
    size: "vector",
    animates: false,
    notes: "Channel sign-off. Lock-up final, do not edit.",
    usedIn: ["F10"],
  },
  {
    id: "type-chalk-labels",
    name: "Chalk labels (Input/Model/Output)",
    category: "Type",
    format: "SVG",
    size: "vector",
    animates: true,
    notes:
      "Caveat / Patrick Hand cursive set as outlines, drawn-on with chalk dust trigger per character.",
    usedIn: ["F07"],
  },
  {
    id: "type-claim-cards",
    name: "Claim cards (F02 chalk halo)",
    category: "Type",
    format: "SVG",
    size: "300×88 each",
    animates: true,
    notes: "Six cards on slate. Each pops in with subtle rotation jitter.",
    usedIn: ["F02"],
  },

  // ─── Transitions ───
  {
    id: "trans-eraser-wipe",
    name: "Eraser wipe (blackboard exit)",
    category: "Transitions",
    format: "PNG-seq",
    size: "1920×1080 · 18 frames",
    animates: true,
    notes:
      "Single horizontal sweep. Reserved for blackboard exit only — do not use elsewhere. Includes chalk-streak-residue layer.",
    usedIn: [],
  },
  {
    id: "trans-page-turn",
    name: "Page turn (notebook beats)",
    category: "Transitions",
    format: "PNG-seq",
    size: "1080×1080 · 8 frames",
    animates: true,
    notes: "Used between cold-open and setup. Optional.",
    usedIn: [],
  },
  {
    id: "trans-hard-cut-marker",
    name: "Hard-cut marker (no asset)",
    category: "Transitions",
    format: "SVG",
    size: "n/a",
    animates: false,
    notes: "Reminder: most mode-to-mode transitions are hard cuts. No asset required.",
    usedIn: [],
  },

  // ─── Particles ───
  {
    id: "part-chalk-dust",
    name: "Chalk dust",
    category: "Particles",
    format: "PNG-seq",
    size: "400×400 · 12 frames",
    animates: true,
    notes: "Loops at chalk-on-board contact and at stamp impact. Subtle, never decorative.",
    usedIn: ["F07", "F09"],
  },
  {
    id: "part-chalk-burst",
    name: "Chalk dust burst (one-shot)",
    category: "Particles",
    format: "PNG-seq",
    size: "600×600 · 14 frames",
    animates: true,
    notes: "Used at the verify-stamp impact and at the wizard's sad walk-off (F04).",
    usedIn: ["F04", "F09"],
  },
  {
    id: "part-paper-grain",
    name: "Paper grain overlay",
    category: "Particles",
    format: "PNG",
    size: "1920×1080 tile",
    animates: false,
    notes: "Multiply-blend overlay applied to every paper-mode frame. ~6% strength.",
    usedIn: ["F01", "F03", "F05", "F08", "F10"],
  },
  {
    id: "part-fabric-grain",
    name: "Fabric grain overlay",
    category: "Particles",
    format: "PNG",
    size: "1920×1080 tile",
    animates: false,
    notes: "Subtle weave underlay for blackboard mode.",
    usedIn: ["F02", "F06", "F07"],
  },
  {
    id: "part-ink-texture",
    name: "Ink line-art texture",
    category: "Particles",
    format: "PNG",
    size: "1920×1080 tile",
    animates: false,
    notes: "Edge-roughener applied to host & wizard outlines in post.",
    usedIn: [],
  },
];

const CATEGORIES: Category[] = [
  "Characters",
  "Props",
  "Backgrounds",
  "UI",
  "Type",
  "Transitions",
  "Particles",
];

const FORMATS: Format[] = ["SVG", "PNG", "Lottie", "PNG-seq", "video"];

const FORMAT_COLOR: Record<Format, string> = {
  SVG: "#4A5C44",
  PNG: "#7A4A3A",
  Lottie: "#3A4A6A",
  "PNG-seq": "#6A4A6A",
  video: "#5A3A2A",
};

function FormatPill({ f }: { f: Format }) {
  return (
    <span
      style={{
        background: FORMAT_COLOR[f],
        color: CHALK,
        padding: "2px 8px",
        fontSize: 10,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontFamily: "'Söhne','Inter',sans-serif",
      }}
    >
      {f}
    </span>
  );
}

function CategorySection({ category }: { category: Category }) {
  const rows = ASSETS.filter((a) => a.category === category);
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4 mb-3">
        <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 14, letterSpacing: "0.18em", opacity: 0.5 }}>
          {String(CATEGORIES.indexOf(category) + 1).padStart(2, "0")}
        </div>
        <h2 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 28, color: INK, lineHeight: 1.1 }}>
          {category}
        </h2>
        <div className="flex-1" style={{ borderBottom: `1px solid ${INK}`, opacity: 0.25, transform: "translateY(-6px)" }} />
        <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {rows.length} asset{rows.length === 1 ? "" : "s"}
        </div>
      </div>
      <div style={{ background: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#E5DAC1", borderBottom: `1px solid ${INK}` }}>
              <th style={th}>Asset</th>
              <th style={{ ...th, width: 90 }}>Format</th>
              <th style={{ ...th, width: 160 }}>Size</th>
              <th style={{ ...th, width: 80, textAlign: "center" }}>Anim.</th>
              <th style={th}>Notes / layers</th>
              <th style={{ ...th, width: 140 }}>Used in</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a, i) => (
              <tr key={a.id} style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(34,31,31,0.12)" : "none", verticalAlign: "top" }}>
                <td style={td}>
                  <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 16 }}>{a.name}</div>
                  <div style={{ opacity: 0.45, fontSize: 11, marginTop: 2 }}>{a.id}</div>
                </td>
                <td style={td}>
                  <FormatPill f={a.format} />
                </td>
                <td style={{ ...td, opacity: 0.75 }}>{a.size}</td>
                <td style={{ ...td, textAlign: "center" }}>
                  {a.animates ? (
                    <span style={{ color: RED, fontFamily: "'Recoleta','Tiempos',serif" }}>●</span>
                  ) : (
                    <span style={{ opacity: 0.3 }}>—</span>
                  )}
                </td>
                <td style={{ ...td, opacity: 0.85 }}>
                  <div>{a.notes}</div>
                  {a.layers && (
                    <div style={{ marginTop: 6, display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {a.layers.map((l) => (
                        <span
                          key={l}
                          style={{
                            background: "rgba(34,31,31,0.06)",
                            padding: "1px 6px",
                            fontSize: 10,
                            fontFamily: "'Söhne','Inter',sans-serif",
                            border: "1px solid rgba(34,31,31,0.18)",
                          }}
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  )}
                </td>
                <td style={{ ...td, fontSize: 11, opacity: 0.7 }}>
                  {a.usedIn.length === 0 ? <span style={{ opacity: 0.4 }}>—</span> : a.usedIn.join(" · ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "10px 14px",
  fontFamily: "'Söhne','Inter',sans-serif",
  fontSize: 11,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  opacity: 0.7,
};
const td: React.CSSProperties = {
  padding: "12px 14px",
};

export function Manifest() {
  const [filter, setFilter] = useState<Format | "all">("all");

  const counts = useMemo(() => {
    const c: Record<Format | "all", number> = { all: ASSETS.length, SVG: 0, PNG: 0, Lottie: 0, "PNG-seq": 0, video: 0 };
    ASSETS.forEach((a) => (c[a.format] += 1));
    return c;
  }, []);

  const animatedCount = ASSETS.filter((a) => a.animates).length;

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
      <div className="max-w-[1400px] mx-auto px-10 py-12">
        <div className="flex items-end justify-between mb-2 pb-6" style={{ borderBottom: `2px solid ${INK}` }}>
          <div>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", opacity: 0.55 }}>
              C4Sight · Show Bible v1.0 · Deliverable 5
            </div>
            <h1 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 56, lineHeight: 1.0, marginTop: 8 }}>
              Production Asset Manifest
            </h1>
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, marginTop: 8, opacity: 0.7, maxWidth: 780 }}>
              Every asset needed to ship Episode 1, organised for handoff to Codex / Remotion.
              Each row carries format, size, whether it animates, and the layered structure
              required for rigging or compositing.
            </div>
          </div>
          <div className="text-right" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <div>{ASSETS.length} assets total</div>
            <div>{animatedCount} animate</div>
            <div>Spans 7 categories · 4 formats</div>
          </div>
        </div>

        {/* Format legend / filter */}
        <div
          className="mb-10 p-4 flex items-center gap-4 flex-wrap"
          style={{ background: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}
        >
          <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55 }}>
            Format guidance
          </div>
          <div className="flex items-center gap-3 flex-wrap" style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 12 }}>
            {FORMATS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(filter === f ? "all" : f)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: filter === f ? INK : "transparent",
                  color: filter === f ? CHALK : INK,
                  border: `1px solid ${INK}`,
                  padding: "4px 10px",
                  cursor: "pointer",
                }}
              >
                <FormatPill f={f} />
                <span style={{ opacity: 0.75 }}>{counts[f]}</span>
                <span style={{ opacity: 0.55, fontSize: 11 }}>
                  {f === "SVG" && "scale/animate as one shape"}
                  {f === "PNG" && "painterly, layered for compositing"}
                  {f === "Lottie" && "complex vector animation"}
                  {f === "PNG-seq" && "frame-by-frame, non-procedural"}
                  {f === "video" && "live-action / footage only"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {filter === "all" ? (
          CATEGORIES.map((c) => <CategorySection key={c} category={c} />)
        ) : (
          <FilteredView format={filter} />
        )}

        {/* Handoff notes */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div
            className="p-5"
            style={{ background: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}
          >
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.55, marginBottom: 8 }}>
              Format rules (Show Bible §10)
            </div>
            <ul style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              <li>— Vector that scales/animates as one shape → <strong>SVG</strong></li>
              <li>— Painterly, multi-texture, layered → <strong>PNG</strong> with transparency</li>
              <li>— Frame-by-frame, non-procedural → <strong>Lottie</strong> or <strong>PNG-seq</strong></li>
              <li>— Don't rasterise what should stay vector</li>
              <li>— Don't SVG what needs painterly texture</li>
            </ul>
          </div>
          <div
            className="p-5"
            style={{ background: SLATE, color: CHALK, border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}
          >
            <div style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6, marginBottom: 8 }}>
              Handoff requirements
            </div>
            <ul style={{ fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              <li>— All PNGs delivered with transparency</li>
              <li>— Rigged characters: layers named, anchor points marked</li>
              <li>— Lottie files include source AE composition</li>
              <li>— Type set as outlines (not live text) for cross-machine reliability</li>
              <li>— Naming convention: <code>c4s-ep01-[category]-[id].[ext]</code></li>
              <li>— All assets locked to the six-colour palette — verify before export</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 flex items-center justify-between" style={{ borderTop: `1px solid ${INK}`, fontFamily: "'Söhne','Inter',sans-serif", fontSize: 11, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>Manifest is the contract for Codex / Remotion build.</span>
          <span>Episode 1 ready for production.</span>
        </div>
      </div>
    </div>
  );
}

function FilteredView({ format }: { format: Format }) {
  const rows = ASSETS.filter((a) => a.format === format);
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4 mb-3">
        <h2 style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 28, color: INK, lineHeight: 1.1 }}>
          {format} · {rows.length} asset{rows.length === 1 ? "" : "s"}
        </h2>
        <div className="flex-1" style={{ borderBottom: `1px solid ${INK}`, opacity: 0.25, transform: "translateY(-6px)" }} />
      </div>
      <div style={{ background: "#F4EDE0", border: `1px solid ${INK}`, boxShadow: "2px 3px 0 rgba(34,31,31,0.18)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Söhne','Inter',sans-serif", fontSize: 13 }}>
          <thead>
            <tr style={{ background: "#E5DAC1", borderBottom: `1px solid ${INK}` }}>
              <th style={th}>Asset</th>
              <th style={{ ...th, width: 120 }}>Category</th>
              <th style={{ ...th, width: 160 }}>Size</th>
              <th style={{ ...th, width: 80, textAlign: "center" }}>Anim.</th>
              <th style={th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a, i) => (
              <tr key={a.id} style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(34,31,31,0.12)" : "none", verticalAlign: "top" }}>
                <td style={td}>
                  <div style={{ fontFamily: "'Recoleta','Tiempos',serif", fontSize: 16 }}>{a.name}</div>
                  <div style={{ opacity: 0.45, fontSize: 11, marginTop: 2 }}>{a.id}</div>
                </td>
                <td style={{ ...td, opacity: 0.75 }}>{a.category}</td>
                <td style={{ ...td, opacity: 0.75 }}>{a.size}</td>
                <td style={{ ...td, textAlign: "center" }}>
                  {a.animates ? <span style={{ color: RED }}>●</span> : <span style={{ opacity: 0.3 }}>—</span>}
                </td>
                <td style={{ ...td, opacity: 0.85 }}>{a.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
