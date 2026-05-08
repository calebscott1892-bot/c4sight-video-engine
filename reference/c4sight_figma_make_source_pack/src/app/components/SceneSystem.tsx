export function SceneSystem() {
  const scenes = [
    { name: "Hook / Opening", id: "hook", desc: "Centered question, minimal elements" },
    { name: "Controlled Chaos", id: "chaos", desc: "Multiple props flying, character reacting" },
    { name: "Correction", id: "correction", desc: "Cross-out and reveal truth" },
    { name: "Comedic Reaction", id: "comedic", desc: "Character beat, hold for humor" },
    { name: "Walk-off Gag", id: "walkoff", desc: "Character exits with prop" },
    { name: "Return / Reveal", id: "return", desc: "Character returns excited" },
    { name: "Calm Teaching", id: "teaching", desc: "Clean layout, focus on explanation" },
    { name: "Flow Diagram", id: "flow", desc: "Boxes and arrows, step-by-step" },
    { name: "Comparison", id: "comparison", desc: "Split screen, side-by-side" },
    { name: "Myth vs Reality", id: "myth", desc: "Cross-out myth, reveal reality" },
    { name: "Warning / Caution", id: "warning", desc: "Triangle alert, careful framing" },
    { name: "Overwhelm", id: "overwhelm", desc: "Character buried in tasks" },
    { name: "Reset / Slow Down", id: "reset", desc: "Clear frame, pause beat" },
    { name: "Section Divider", id: "divider", desc: "Title card between topics" },
    { name: "Roadmap / Next", id: "roadmap", desc: "Preview upcoming topics" },
    { name: "Outro / Signoff", id: "outro", desc: "Branded ending card" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Shot / Scene System</h2>
        <p className="text-white/50">Reusable 16:9 scene archetypes for production</p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {scenes.map((scene) => (
          <div key={scene.id} className="space-y-3">
            <div className="aspect-video bg-[#2a2a2a] rounded-lg border border-white/10 overflow-hidden">
              <SceneArchetype type={scene.id} />
            </div>
            <div>
              <p className="text-white/80 text-sm mb-1">{scene.name}</p>
              <p className="text-white/50 text-xs">{scene.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-3">Scene Layout Principles</h3>
        <div className="grid grid-cols-2 gap-6 text-white/70">
          <div className="space-y-2">
            <p><span className="text-white/90">•</span> Title zone: Top 15%, centered</p>
            <p><span className="text-white/90">•</span> Character zone: Center 60%, flexible</p>
            <p><span className="text-white/90">•</span> Safe margins: 16px all sides for mobile</p>
            <p><span className="text-white/90">•</span> Subtitle zone: Bottom 12%, always visible</p>
          </div>
          <div className="space-y-2">
            <p><span className="text-white/90">•</span> Focus area: Inner 90% for critical content</p>
            <p><span className="text-white/90">•</span> Prop zone: Right 25% or floating</p>
            <p><span className="text-white/90">•</span> Animation focus: Track eye movement</p>
            <p><span className="text-white/90">•</span> Hold space: Let moments breathe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneArchetype({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";
  const amber = "#f4d58d";
  const red = "#ff6b6b";

  return (
    <div className="w-full h-full bg-[#1a1a1a] relative flex items-center justify-center">
      <div className="absolute inset-0 border-[8px] border-white/5" />

      {type === "hook" && (
        <div className="text-center px-12">
          <div className="w-48 h-2 bg-white/40 rounded mx-auto mb-2" />
          <div className="w-32 h-1.5 bg-white/25 rounded mx-auto" />
        </div>
      )}

      {type === "chaos" && (
        <div className="relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-16 h-16">
            <ellipse cx="40" cy="45" rx="14" ry="18" fill="none" stroke={baseColor} strokeWidth="2"/>
            <circle cx="40" cy="25" r="12" fill="none" stroke={baseColor} strokeWidth="2"/>
          </svg>
          <div className="absolute top-4 right-8 w-8 h-6 bg-blue/20 border border-blue/40 rounded rotate-12" />
          <div className="absolute top-8 left-6 w-8 h-6 bg-green/20 border border-green/40 rounded -rotate-12" />
          <div className="absolute bottom-8 right-12 w-8 h-6 bg-amber/20 border border-amber/40 rounded rotate-6" />
        </div>
      )}

      {type === "correction" && (
        <div className="relative">
          <div className="w-32 h-2 bg-white/30 rounded line-through decoration-red/80 decoration-2" />
          <div className="w-24 h-2 bg-green/40 rounded mt-3" />
        </div>
      )}

      {type === "comedic" && (
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 80 80" className="w-20 h-20">
            <ellipse cx="40" cy="48" rx="14" ry="18" fill="none" stroke={baseColor} strokeWidth="2"/>
            <circle cx="40" cy="26" r="12" fill="none" stroke={baseColor} strokeWidth="2"/>
            <circle cx="35" cy="25" r="2.5" fill={baseColor}/>
            <circle cx="45" cy="25" r="2.5" fill={baseColor}/>
          </svg>
        </div>
      )}

      {type === "walkoff" && (
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 60 80" className="w-12 h-16 opacity-70">
            <ellipse cx="30" cy="48" rx="12" ry="16" fill="none" stroke={baseColor} strokeWidth="1.5"/>
            <circle cx="30" cy="22" r="10" fill="none" stroke={baseColor} strokeWidth="1.5"/>
          </svg>
          <div className="w-1 h-8 bg-white/20" />
        </div>
      )}

      {type === "return" && (
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-white/20" />
          <svg viewBox="0 0 60 80" className="w-14 h-18">
            <ellipse cx="32" cy="46" rx="13" ry="17" fill="none" stroke={baseColor} strokeWidth="2" transform="rotate(-10 32 46)"/>
            <circle cx="30" cy="22" r="11" fill="none" stroke={baseColor} strokeWidth="2"/>
          </svg>
        </div>
      )}

      {type === "teaching" && (
        <div className="text-center px-12">
          <div className="w-40 h-1.5 bg-white/35 rounded mx-auto mb-4" />
          <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto mb-3">
            <ellipse cx="30" cy="35" rx="11" ry="14" fill="none" stroke={baseColor} strokeWidth="1.5"/>
            <circle cx="30" cy="18" r="9" fill="none" stroke={baseColor} strokeWidth="1.5"/>
          </svg>
          <div className="w-32 h-1 bg-white/20 rounded mx-auto" />
        </div>
      )}

      {type === "flow" && (
        <div className="flex items-center gap-2">
          <div className="w-12 h-10 bg-white/10 border border-white/30 rounded flex items-center justify-center text-white/40 text-xs">1</div>
          <svg viewBox="0 0 20 10" className="w-4 h-2">
            <line x1="0" y1="5" x2="16" y2="5" stroke={baseColor} strokeWidth="1.5"/>
            <path d="M 16 5 L 12 3 M 16 5 L 12 7" stroke={baseColor} strokeWidth="1.5"/>
          </svg>
          <div className="w-12 h-10 bg-white/10 border border-white/30 rounded flex items-center justify-center text-white/40 text-xs">2</div>
          <svg viewBox="0 0 20 10" className="w-4 h-2">
            <line x1="0" y1="5" x2="16" y2="5" stroke={baseColor} strokeWidth="1.5"/>
            <path d="M 16 5 L 12 3 M 16 5 L 12 7" stroke={baseColor} strokeWidth="1.5"/>
          </svg>
          <div className="w-12 h-10 bg-white/10 border border-white/30 rounded flex items-center justify-center text-white/40 text-xs">3</div>
        </div>
      )}

      {type === "comparison" && (
        <div className="flex gap-1 h-full w-full p-4">
          <div className="flex-1 border border-white/20 rounded flex items-center justify-center">
            <div className="w-8 h-8 bg-blue/20 border border-blue/40 rounded" />
          </div>
          <div className="w-px bg-white/30" />
          <div className="flex-1 border border-white/20 rounded flex items-center justify-center">
            <div className="w-8 h-8 bg-green/20 border border-green/40 rounded" />
          </div>
        </div>
      )}

      {type === "myth" && (
        <div className="space-y-3">
          <div className="relative">
            <div className="w-32 h-2 bg-red/30 rounded" />
            <svg viewBox="0 0 100 20" className="absolute inset-0 w-full h-full">
              <line x1="0" y1="0" x2="100" y2="20" stroke={red} strokeWidth="2"/>
              <line x1="100" y1="0" x2="0" y2="20" stroke={red} strokeWidth="2"/>
            </svg>
          </div>
          <div className="w-28 h-2 bg-green/40 rounded" />
        </div>
      )}

      {type === "warning" && (
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="w-8 h-8">
            <path d="M 20 6 L 34 32 L 6 32 Z" fill="none" stroke={amber} strokeWidth="2"/>
            <line x1="20" y1="16" x2="20" y2="24" stroke={amber} strokeWidth="2"/>
            <circle cx="20" cy="28" r="1" fill={amber}/>
          </svg>
          <div className="w-24 h-1.5 bg-amber/40 rounded" />
        </div>
      )}

      {type === "overwhelm" && (
        <div className="relative">
          <svg viewBox="0 0 60 70" className="w-12 h-14">
            <ellipse cx="30" cy="50" rx="13" ry="10" fill="none" stroke={baseColor} strokeWidth="1.5"/>
            <circle cx="30" cy="35" r="9" fill="none" stroke={baseColor} strokeWidth="1.5"/>
          </svg>
          <div className="absolute -top-1 left-0 w-6 h-5 bg-blue/20 border border-blue/40 rounded rotate-12" />
          <div className="absolute -top-1 right-0 w-6 h-5 bg-green/20 border border-green/40 rounded -rotate-12" />
          <div className="absolute top-6 left-1 w-6 h-5 bg-amber/20 border border-amber/40 rounded rotate-6" />
        </div>
      )}

      {type === "reset" && (
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 50 50" className="w-10 h-10">
            <circle cx="25" cy="25" r="18" fill="none" stroke={red} strokeWidth="2.5"/>
            <line x1="15" y1="25" x2="35" y2="25" stroke={red} strokeWidth="2.5"/>
          </svg>
        </div>
      )}

      {type === "divider" && (
        <div className="text-center">
          <div className="w-40 h-2 bg-white/40 rounded mb-3" />
          <div className="w-full h-px bg-white/20" />
        </div>
      )}

      {type === "roadmap" && (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40" />
          <div className="w-8 h-px bg-white/30" />
          <div className="w-6 h-6 rounded-full bg-white/10 border border-white/30" />
          <div className="w-8 h-px bg-white/20 border-dashed border-t border-white/30" />
        </div>
      )}

      {type === "outro" && (
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 mx-auto mb-2 flex items-center justify-center text-white/50 text-xs">C4S</div>
          <div className="w-24 h-1.5 bg-white/25 rounded" />
        </div>
      )}
    </div>
  );
}
