export function IconSystem() {
  const icons = [
    { name: "Writing", id: "writing" },
    { name: "Summarising", id: "summarising" },
    { name: "Coding", id: "coding" },
    { name: "Explaining", id: "explaining" },
    { name: "Researching", id: "researching" },
    { name: "Automating", id: "automating" },
    { name: "Image Gen", id: "image-gen" },
    { name: "Video Gen", id: "video-gen" },
    { name: "Voice/Audio", id: "voice" },
    { name: "Planning", id: "planning" },
    { name: "Tutoring", id: "tutoring" },
    { name: "Business", id: "business" },
    { name: "Verification", id: "verification" },
    { name: "Hallucination", id: "hallucination" },
    { name: "Creativity", id: "creativity" },
    { name: "Judgement", id: "judgement" },
    { name: "Trust/Risk", id: "trust" },
    { name: "Local AI", id: "local" },
    { name: "Cloud AI", id: "cloud" },
    { name: "Agents", id: "agents" },
    { name: "Connectors", id: "connectors" },
    { name: "MCP", id: "mcp" },
    { name: "Data Privacy", id: "privacy" },
    { name: "Jobs/Work", id: "jobs" },
    { name: "Money", id: "money" },
    { name: "Roadmap", id: "roadmap" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Icon / Symbol System</h2>
        <p className="text-white/50">Reusable symbols for series consistency</p>
      </div>

      <div className="grid grid-cols-13 gap-3">
        {icons.map((icon) => (
          <div key={icon.id} className="space-y-2">
            <div className="aspect-square bg-[#2a2a2a] rounded border border-white/10 flex items-center justify-center p-2">
              <IconSymbol type={icon.id} />
            </div>
            <p className="text-center text-white/70 text-xs">{icon.name}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-4">
        <p className="text-white/60">
          <span className="text-white/90">Usage:</span> These symbols are designed for reuse across all episodes. Use them consistently to build visual language viewers recognize. Combine with color coding for context clarity.
        </p>
      </div>
    </section>
  );
}

function IconSymbol({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";
  const amber = "#f4d58d";
  const purple = "#c297ff";
  const red = "#ff6b6b";

  const svgProps = { viewBox: "0 0 48 48", className: "w-full h-full" };

  const symbols: Record<string, JSX.Element> = {
    "writing": <svg {...svgProps}><path d="M 12 36 L 12 40 L 16 40 L 36 20 L 32 16 Z" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="28" y1="20" x2="32" y2="24" stroke={baseColor} strokeWidth="1.5"/></svg>,
    "summarising": <svg {...svgProps}><line x1="12" y1="16" x2="36" y2="16" stroke={baseColor} strokeWidth="2"/><line x1="12" y1="24" x2="32" y2="24" stroke={baseColor} strokeWidth="2"/><line x1="12" y1="32" x2="28" y2="32" stroke={baseColor} strokeWidth="2"/></svg>,
    "coding": <svg {...svgProps}><path d="M 16 18 L 10 24 L 16 30" stroke={purple} strokeWidth="2.5" fill="none"/><path d="M 32 18 L 38 24 L 32 30" stroke={purple} strokeWidth="2.5" fill="none"/><line x1="26" y1="16" x2="22" y2="32" stroke={purple} strokeWidth="2"/></svg>,
    "explaining": <svg {...svgProps}><circle cx="24" cy="18" r="6" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="24" y1="24" x2="24" y2="28" stroke={baseColor} strokeWidth="2"/><line x1="18" y1="28" x2="30" y2="28" stroke={baseColor} strokeWidth="2"/><line x1="20" y1="32" x2="28" y2="32" stroke={baseColor} strokeWidth="2"/><line x1="14" y1="36" x2="34" y2="36" stroke={baseColor} strokeWidth="2"/></svg>,
    "researching": <svg {...svgProps}><circle cx="20" cy="20" r="10" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="27" y1="27" x2="36" y2="36" stroke={baseColor} strokeWidth="2.5"/><line x1="16" y1="20" x2="24" y2="20" stroke={baseColor} strokeWidth="1.5" opacity="0.5"/><line x1="20" y1="16" x2="20" y2="24" stroke={baseColor} strokeWidth="1.5" opacity="0.5"/></svg>,
    "automating": <svg {...svgProps}><circle cx="24" cy="24" r="12" fill="none" stroke={blue} strokeWidth="2"/><path d="M 24 14 L 27 20 L 24 18 L 21 20 Z" fill={blue}/><path d="M 34 24 L 28 27 L 30 24 L 28 21 Z" fill={blue}/><path d="M 24 34 L 21 28 L 24 30 L 27 28 Z" fill={blue}/><path d="M 14 24 L 20 21 L 18 24 L 20 27 Z" fill={blue}/></svg>,
    "image-gen": <svg {...svgProps}><rect x="10" y="14" width="28" height="22" rx="2" fill="none" stroke={green} strokeWidth="2"/><circle cx="18" cy="22" r="3" fill="none" stroke={green} strokeWidth="1.5"/><path d="M 10 30 L 18 22 L 26 28 L 32 22 L 38 28 L 38 36 L 10 36 Z" fill={green} fillOpacity="0.2"/></svg>,
    "video-gen": <svg {...svgProps}><rect x="10" y="16" width="28" height="18" rx="2" fill="none" stroke={green} strokeWidth="2"/><path d="M 38 20 L 44 17 L 44 31 L 38 28 Z" fill="none" stroke={green} strokeWidth="2"/></svg>,
    "voice": <svg {...svgProps}><rect x="20" y="12" width="8" height="16" rx="4" fill="none" stroke={blue} strokeWidth="2"/><path d="M 16 24 Q 16 32 24 32 Q 32 32 32 24" fill="none" stroke={blue} strokeWidth="2"/><line x1="24" y1="32" x2="24" y2="38" stroke={blue} strokeWidth="2"/><line x1="18" y1="38" x2="30" y2="38" stroke={blue} strokeWidth="2"/></svg>,
    "planning": <svg {...svgProps}><rect x="14" y="12" width="20" height="24" rx="2" fill="none" stroke={amber} strokeWidth="2"/><line x1="20" y1="8" x2="20" y2="16" stroke={amber} strokeWidth="2"/><line x1="28" y1="8" x2="28" y2="16" stroke={amber} strokeWidth="2"/><line x1="14" y1="20" x2="34" y2="20" stroke={amber} strokeWidth="1.5"/></svg>,
    "tutoring": <svg {...svgProps}><circle cx="24" cy="18" r="6" fill="none" stroke={baseColor} strokeWidth="2"/><path d="M 14 36 Q 14 28 24 28 Q 34 28 34 36" fill="none" stroke={baseColor} strokeWidth="2"/><rect x="18" y="12" width="12" height="6" rx="3" fill="none" stroke={baseColor} strokeWidth="2"/></svg>,
    "business": <svg {...svgProps}><rect x="14" y="18" width="20" height="20" rx="2" fill="none" stroke={amber} strokeWidth="2"/><path d="M 20 18 L 20 14 Q 20 12 22 12 L 26 12 Q 28 12 28 14 L 28 18" fill="none" stroke={amber} strokeWidth="2"/></svg>,
    "verification": <svg {...svgProps}><circle cx="24" cy="24" r="12" fill="none" stroke={green} strokeWidth="2"/><path d="M 18 24 L 22 28 L 30 20" stroke={green} strokeWidth="2.5" fill="none"/></svg>,
    "hallucination": <svg {...svgProps}><circle cx="24" cy="24" r="12" fill="none" stroke={red} strokeWidth="2"/><line x1="24" y1="18" x2="24" y2="26" stroke={red} strokeWidth="2"/><circle cx="24" cy="30" r="1.5" fill={red}/></svg>,
    "creativity": <svg {...svgProps}><path d="M 24 12 L 26 20 L 34 22 L 26 24 L 24 32 L 22 24 L 14 22 L 22 20 Z" fill="none" stroke={green} strokeWidth="2"/></svg>,
    "judgement": <svg {...svgProps}><circle cx="24" cy="20" r="8" fill="none" stroke={baseColor} strokeWidth="2"/><circle cx="21" cy="19" r="2" fill={baseColor}/><circle cx="27" cy="19" r="2" fill={baseColor}/><path d="M 18 32 L 24 28 L 30 32" stroke={baseColor} strokeWidth="2" fill="none"/></svg>,
    "trust": <svg {...svgProps}><path d="M 24 14 L 34 18 L 34 26 Q 34 34 24 38 Q 14 34 14 26 L 14 18 Z" fill="none" stroke={amber} strokeWidth="2"/><path d="M 20 24 L 22 26 L 28 20" stroke={amber} strokeWidth="2" fill="none"/></svg>,
    "local": <svg {...svgProps}><rect x="16" y="18" width="16" height="14" rx="2" fill="none" stroke={purple} strokeWidth="2"/><rect x="20" y="32" width="8" height="2" fill="none" stroke={purple} strokeWidth="1.5"/><line x1="24" y1="34" x2="24" y2="36" stroke={purple} strokeWidth="1.5"/><line x1="20" y1="36" x2="28" y2="36" stroke={purple} strokeWidth="1.5"/></svg>,
    "cloud": <svg {...svgProps}><path d="M 16 28 Q 10 28 10 22 Q 10 18 14 16 Q 14 12 20 12 Q 24 12 26 16 Q 30 16 33 19 Q 36 22 36 26 Q 36 30 32 30 L 16 30 Q 10 30 10 24 Z" fill="none" stroke={blue} strokeWidth="2"/></svg>,
    "agents": <svg {...svgProps}><circle cx="24" cy="18" r="6" fill="none" stroke={purple} strokeWidth="2"/><circle cx="14" cy="32" r="4" fill="none" stroke={purple} strokeWidth="1.5"/><circle cx="34" cy="32" r="4" fill="none" stroke={purple} strokeWidth="1.5"/><line x1="24" y1="24" x2="14" y2="28" stroke={purple} strokeWidth="1.5"/><line x1="24" y1="24" x2="34" y2="28" stroke={purple} strokeWidth="1.5"/></svg>,
    "connectors": <svg {...svgProps}><circle cx="14" cy="24" r="4" fill="none" stroke={blue} strokeWidth="2"/><circle cx="34" cy="24" r="4" fill="none" stroke={blue} strokeWidth="2"/><line x1="18" y1="24" x2="30" y2="24" stroke={blue} strokeWidth="2"/><circle cx="24" cy="24" r="2" fill={blue}/></svg>,
    "mcp": <svg {...svgProps}><rect x="12" y="18" width="24" height="14" rx="2" fill="none" stroke={purple} strokeWidth="2"/><circle cx="18" cy="25" r="2" fill={purple}/><circle cx="24" cy="25" r="2" fill={purple}/><circle cx="30" cy="25" r="2" fill={purple}/></svg>,
    "privacy": <svg {...svgProps}><rect x="16" y="22" width="16" height="14" rx="2" fill="none" stroke={amber} strokeWidth="2"/><path d="M 20 22 L 20 18 Q 20 14 24 14 Q 28 14 28 18 L 28 22" fill="none" stroke={amber} strokeWidth="2"/><circle cx="24" cy="29" r="2" fill={amber}/></svg>,
    "jobs": <svg {...svgProps}><rect x="14" y="20" width="20" height="16" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><path d="M 20 20 L 20 16 Q 20 14 22 14 L 26 14 Q 28 14 28 16 L 28 20" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="14" y1="26" x2="34" y2="26" stroke={baseColor} strokeWidth="1.5"/></svg>,
    "money": <svg {...svgProps}><circle cx="24" cy="24" r="12" fill="none" stroke={green} strokeWidth="2"/><line x1="24" y1="16" x2="24" y2="32" stroke={green} strokeWidth="2"/><path d="M 20 20 L 26 20 Q 28 20 28 22 Q 28 24 26 24 L 22 24 Q 20 24 20 26 Q 20 28 22 28 L 28 28" fill="none" stroke={green} strokeWidth="2"/></svg>,
    "roadmap": <svg {...svgProps}><circle cx="14" cy="24" r="3" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="17" y1="24" x2="27" y2="24" stroke={baseColor} strokeWidth="1.5"/><circle cx="30" cy="24" r="3" fill={baseColor}/><line x1="33" y1="24" x2="38" y2="24" stroke={baseColor} strokeWidth="1.5" strokeDasharray="2 2"/></svg>
  };

  return symbols[type] || <svg {...svgProps}><circle cx="24" cy="24" r="10" fill="none" stroke={baseColor} strokeWidth="2"/></svg>;
}
