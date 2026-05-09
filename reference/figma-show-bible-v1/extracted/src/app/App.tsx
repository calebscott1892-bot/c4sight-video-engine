import { useState } from "react";
import { CharacterSheet } from "./components/CharacterSheet";
import { HostSheet } from "./components/HostSheet";
import { Styleframes } from "./components/Styleframes";
import { Episode1 } from "./components/Episode1";
import { Manifest } from "./components/Manifest";

const INK = "#221F1F";
const PAPER = "#EFE7D6";

type Sheet = "wizard" | "host" | "modes" | "ep1" | "manifest";

export default function App() {
  const [sheet, setSheet] = useState<Sheet>("manifest");

  return (
    <div className="relative">
      <div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-1"
        style={{
          background: PAPER,
          border: `1px solid ${INK}`,
          boxShadow: "2px 3px 0 rgba(34,31,31,0.18)",
        }}
      >
        {(
          [
            ["wizard", "01 · Wizard"],
            ["host", "02 · Host"],
            ["modes", "03 · Modes"],
            ["ep1", "04 · Episode 1"],
            ["manifest", "05 · Manifest"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSheet(key)}
            style={{
              padding: "6px 14px",
              background: sheet === key ? INK : "transparent",
              color: sheet === key ? "#F4EDE0" : INK,
              fontFamily: "'Söhne','Inter',sans-serif",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {sheet === "wizard" && <CharacterSheet />}
      {sheet === "host" && <HostSheet />}
      {sheet === "modes" && <Styleframes />}
      {sheet === "ep1" && <Episode1 />}
      {sheet === "manifest" && <Manifest />}
    </div>
  );
}
