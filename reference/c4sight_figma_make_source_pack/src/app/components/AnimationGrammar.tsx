export function AnimationGrammar() {
  const motions = [
    { name: "Write-on Text", id: "write-text" },
    { name: "Draw-on Shapes", id: "draw-shape" },
    { name: "Underline", id: "underline" },
    { name: "Circle Highlight", id: "circle" },
    { name: "Cross-out", id: "crossout" },
    { name: "Eraser Wipe", id: "erase" },
    { name: "Pop-in Prop", id: "popin" },
    { name: "Wobble Reaction", id: "wobble" },
    { name: "Freeze Beat", id: "freeze" },
    { name: "Pause / Hold", id: "pause" },
    { name: "Burst Chaos", id: "burst" },
    { name: "Calm Reset", id: "calm" },
    { name: "Character Enter", id: "enter" },
    { name: "Character Exit", id: "exit" },
    { name: "Prop Spill", id: "spill" },
    { name: "Stacked Overwhelm", id: "stack" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Animation Grammar Board</h2>
        <p className="text-white/50">Visual language for how this world moves</p>
      </div>

      <div className="grid grid-cols-8 gap-4">
        {motions.map((motion) => (
          <div key={motion.id} className="space-y-2">
            <div className="aspect-square bg-[#2a2a2a] rounded border border-white/10 flex items-center justify-center p-2">
              <AnimationExample type={motion.id} />
            </div>
            <p className="text-center text-white/70 text-xs">{motion.name}</p>
          </div>
        ))}
      </div>

      {/* Motion Philosophy */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Motion Philosophy</h3>
        <div className="grid grid-cols-2 gap-6 text-white/70">
          <div className="space-y-2">
            <p><span className="text-white/90">•</span> Not every word needs animation</p>
            <p><span className="text-white/90">•</span> Voiceover leads, visuals support</p>
            <p><span className="text-white/90">•</span> Some frames should hold still</p>
          </div>
          <div className="space-y-2">
            <p><span className="text-white/90">•</span> Use movement for emphasis and humor</p>
            <p><span className="text-white/90">•</span> Avoid over-animating everything</p>
            <p><span className="text-white/90">•</span> Timing creates personality</p>
          </div>
        </div>
      </div>

      {/* Timing Guide */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Animation Timing Reference</h3>
        <div className="space-y-3 text-white/70">
          <div className="flex justify-between items-center">
            <span className="text-white/90">Quick transition</span>
            <span className="font-mono text-sm">0.3-0.5s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/90">Character pose change</span>
            <span className="font-mono text-sm">0.6-0.8s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/90">Text write-on per word</span>
            <span className="font-mono text-sm">0.4-0.6s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/90">Hold for emphasis</span>
            <span className="font-mono text-sm">1-2s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/90">Comedic beat hold</span>
            <span className="font-mono text-sm">2-3s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-white/90">Scene duration average</span>
            <span className="font-mono text-sm">3-5s</span>
          </div>
        </div>
      </div>

      {/* Easing Reference */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Easing / Feel</h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-white/90 mb-2">Character Motion</p>
            <p className="text-white/60 text-sm">Bouncy, friendly easing</p>
            <p className="text-white/50 text-xs font-mono mt-1">easeOutBack, easeOutElastic</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Text & Props</p>
            <p className="text-white/60 text-sm">Smooth, controlled</p>
            <p className="text-white/50 text-xs font-mono mt-1">easeOut, easeInOut</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Emphasis & Shock</p>
            <p className="text-white/60 text-sm">Sharp, immediate</p>
            <p className="text-white/50 text-xs font-mono mt-1">easeOutQuad, linear</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimationExample({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";
  const red = "#ff6b6b";

  const svgProps = { viewBox: "0 0 60 60", className: "w-full h-full" };

  const examples: Record<string, JSX.Element> = {
    "write-text": <svg {...svgProps}><line x1="10" y1="30" x2="50" y2="30" stroke={baseColor} strokeWidth="2" strokeDasharray="40 40" strokeDashoffset="40"><animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" repeatCount="indefinite"/></line></svg>,
    "draw-shape": <svg {...svgProps}><circle cx="30" cy="30" r="15" fill="none" stroke={baseColor} strokeWidth="2" strokeDasharray="94" strokeDashoffset="94"><animate attributeName="stroke-dashoffset" from="94" to="0" dur="1.2s" repeatCount="indefinite"/></circle></svg>,
    "underline": <svg {...svgProps}><rect x="15" y="22" width="30" height="8" fill={baseColor} opacity="0.2"/><line x1="15" y1="32" x2="45" y2="32" stroke={blue} strokeWidth="2"/></svg>,
    "circle": <svg {...svgProps}><rect x="20" y="24" width="20" height="12" fill={baseColor} opacity="0.15"/><circle cx="30" cy="30" r="18" fill="none" stroke={green} strokeWidth="2"/></svg>,
    "crossout": <svg {...svgProps}><rect x="15" y="24" width="30" height="12" fill={baseColor} opacity="0.1"/><line x1="12" y1="22" x2="48" y2="38" stroke={red} strokeWidth="2.5"/><line x1="48" y1="22" x2="12" y2="38" stroke={red} strokeWidth="2.5"/></svg>,
    "erase": <svg {...svgProps}><rect x="15" y="25" width="30" height="10" fill={baseColor} opacity="0.15"/><rect x="15" y="25" width="15" height="10" fill="#1a1a1a"/></svg>,
    "popin": <svg {...svgProps}><circle cx="30" cy="30" r="12" fill="none" stroke={baseColor} strokeWidth="2"/><circle cx="30" cy="30" r="18" fill="none" stroke={baseColor} strokeWidth="1" opacity="0.3"/></svg>,
    "wobble": <svg {...svgProps}><rect x="22" y="22" width="16" height="16" fill="none" stroke={baseColor} strokeWidth="2" transform="rotate(-5 30 30)"/><path d="M 18 30 Q 16 28 18 26" stroke={baseColor} strokeWidth="1" opacity="0.5"/></svg>,
    "freeze": <svg {...svgProps}><circle cx="30" cy="30" r="12" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="24" y1="20" x2="22" y2="16" stroke={blue} strokeWidth="1.5"/><line x1="30" y1="18" x2="30" y2="14" stroke={blue} strokeWidth="1.5"/><line x1="36" y1="20" x2="38" y2="16" stroke={blue} strokeWidth="1.5"/></svg>,
    "pause": <svg {...svgProps}><rect x="22" y="20" width="6" height="20" fill={baseColor}/><rect x="32" y="20" width="6" height="20" fill={baseColor}/></svg>,
    "burst": <svg {...svgProps}><circle cx="30" cy="30" r="4" fill={baseColor}/><line x1="30" y1="18" x2="30" y2="22" stroke={baseColor} strokeWidth="2"/><line x1="30" y1="38" x2="30" y2="42" stroke={baseColor} strokeWidth="2"/><line x1="18" y1="30" x2="22" y2="30" stroke={baseColor} strokeWidth="2"/><line x1="38" y1="30" x2="42" y2="30" stroke={baseColor} strokeWidth="2"/></svg>,
    "calm": <svg {...svgProps}><path d="M 15 30 Q 22 26 30 30 Q 38 34 45 30" stroke={baseColor} strokeWidth="2" fill="none"/><path d="M 15 38 Q 22 34 30 38 Q 38 42 45 38" stroke={baseColor} strokeWidth="1.5" fill="none" opacity="0.5"/></svg>,
    "enter": <svg {...svgProps}><circle cx="40" cy="30" r="10" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="10" y1="30" x2="25" y2="30" stroke={baseColor} strokeWidth="2"/><path d="M 25 30 L 20 27 M 25 30 L 20 33" stroke={baseColor} strokeWidth="2"/></svg>,
    "exit": <svg {...svgProps}><circle cx="20" cy="30" r="10" fill="none" stroke={baseColor} strokeWidth="2" opacity="0.5"/><line x1="35" y1="30" x2="50" y2="30" stroke={baseColor} strokeWidth="2"/><path d="M 50 30 L 45 27 M 50 30 L 45 33" stroke={baseColor} strokeWidth="2"/></svg>,
    "spill": <svg {...svgProps}><rect x="22" y="18" width="16" height="12" fill="none" stroke={baseColor} strokeWidth="2" transform="rotate(45 30 24)"/><rect x="18" y="35" width="8" height="6" fill={baseColor} opacity="0.3" transform="rotate(-10 22 38)"/><rect x="30" y="38" width="8" height="6" fill={baseColor} opacity="0.3" transform="rotate(15 34 41)"/></svg>,
    "stack": <svg {...svgProps}><rect x="20" y="35" width="20" height="12" fill="none" stroke={baseColor} strokeWidth="1.5"/><rect x="18" y="30" width="20" height="12" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.7"/><rect x="16" y="25" width="20" height="12" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.5"/></svg>
  };

  return examples[type] || <svg {...svgProps}><circle cx="30" cy="30" r="12" fill="none" stroke={baseColor} strokeWidth="2"/></svg>;
}
