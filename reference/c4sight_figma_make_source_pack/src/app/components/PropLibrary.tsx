export function PropLibrary() {
  const aiUseProps = [
    "Email", "Website", "Assignment", "Code", "Image", "Summary", "Business Idea",
    "Research", "Schedule", "Document", "Spreadsheet", "Chatbot", "Folder",
    "Checklist", "Magnifier", "Warning", "Thumbs Up", "Thumbs Down", "Cloud", "Server", "Local Model"
  ];

  const comedicProps = [
    "Wand", "Saucepan", "Bucket", "Poof Cloud", "Spark Burst", "Swirls",
    "Wobble Lines", "Sweat Marks", "Question Cloud", "Confusion Stars"
  ];

  const teachingProps = [
    "Data Card", "Patterns Card", "Model Box", "Output Card", "Comparison",
    "Myth Card", "Reality Card", "Roadmap", "Timeline", "Input Arrow",
    "Output Arrow", "Flow Box", "Caution Box", "Slow Down"
  ];

  const propStates = [
    { name: "Clean", id: "clean" },
    { name: "Highlighted", id: "highlighted" },
    { name: "Crossed Out", id: "crossed" },
    { name: "Circled", id: "circled" },
    { name: "Checked", id: "checked" },
    { name: "Erased", id: "erased" },
    { name: "Stacked", id: "stacked" },
    { name: "Flying Chaos", id: "chaos" },
    { name: "Pinned Neatly", id: "pinned" }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-white/95 mb-1">Prop / Object Library</h2>
        <p className="text-white/50">Reusable props for episode production</p>
      </div>

      {/* Everyday AI Use Props */}
      <div className="space-y-4">
        <h3 className="text-white/90">A. Everyday AI Use Props</h3>
        <div className="grid grid-cols-7 gap-3">
          {aiUseProps.map((prop) => (
            <div key={prop} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded border border-white/10 flex items-center justify-center p-2">
                <AIUseProp type={prop.toLowerCase().replace(/\s+/g, '-')} />
              </div>
              <p className="text-center text-white/70 text-xs">{prop}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comedic Props */}
      <div className="space-y-4">
        <h3 className="text-white/90">B. Comedic Props</h3>
        <div className="grid grid-cols-10 gap-3">
          {comedicProps.map((prop) => (
            <div key={prop} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded border border-white/10 flex items-center justify-center p-2">
                <ComedicProp type={prop.toLowerCase().replace(/\s+/g, '-')} />
              </div>
              <p className="text-center text-white/70 text-xs">{prop}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Props */}
      <div className="space-y-4">
        <h3 className="text-white/90">C. Teaching Props</h3>
        <div className="grid grid-cols-7 gap-3">
          {teachingProps.map((prop) => (
            <div key={prop} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded border border-white/10 flex items-center justify-center p-2">
                <TeachingProp type={prop.toLowerCase().replace(/\s+/g, '-')} />
              </div>
              <p className="text-center text-white/70 text-xs">{prop}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prop States */}
      <div className="space-y-4">
        <h3 className="text-white/90">D. Prop States</h3>
        <p className="text-white/60 text-sm">Example: Email card in different states</p>
        <div className="grid grid-cols-9 gap-4">
          {propStates.map((state) => (
            <div key={state.id} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded border border-white/10 flex items-center justify-center p-3">
                <PropState state={state.id} />
              </div>
              <p className="text-center text-white/70 text-xs">{state.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIUseProp({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";
  const amber = "#f4d58d";
  const purple = "#c297ff";

  const svgProps = { viewBox: "0 0 60 60", className: "w-full h-full" };

  const props: Record<string, JSX.Element> = {
    "email": <svg {...svgProps}><rect x="10" y="18" width="40" height="28" rx="2" fill="none" stroke={blue} strokeWidth="2"/><path d="M 10 20 L 30 32 L 50 20" stroke={blue} strokeWidth="2" fill="none"/></svg>,
    "website": <svg {...svgProps}><rect x="8" y="15" width="44" height="32" rx="2" fill="none" stroke={blue} strokeWidth="2"/><line x1="8" y1="22" x2="52" y2="22" stroke={blue} strokeWidth="1.5"/><circle cx="13" cy="18.5" r="1" fill={blue}/></svg>,
    "assignment": <svg {...svgProps}><rect x="15" y="12" width="30" height="38" rx="2" fill="none" stroke={amber} strokeWidth="2"/><line x1="20" y1="20" x2="40" y2="20" stroke={amber} strokeWidth="1.5" opacity="0.5"/><line x1="20" y1="26" x2="40" y2="26" stroke={amber} strokeWidth="1.5" opacity="0.5"/></svg>,
    "code": <svg {...svgProps}><rect x="12" y="15" width="36" height="30" rx="2" fill="none" stroke={purple} strokeWidth="2"/><path d="M 20 27 L 16 30 L 20 33" stroke={purple} strokeWidth="2" fill="none"/><path d="M 40 27 L 44 30 L 40 33" stroke={purple} strokeWidth="2" fill="none"/></svg>,
    "image": <svg {...svgProps}><rect x="12" y="16" width="36" height="28" rx="2" fill="none" stroke={green} strokeWidth="2"/><circle cx="22" cy="26" r="4" fill="none" stroke={green} strokeWidth="1.5"/><path d="M 12 38 L 22 28 L 32 36 L 42 26 L 48 32" stroke={green} strokeWidth="2" fill="none"/></svg>,
    "summary": <svg {...svgProps}><path d="M 18 10 L 18 50 L 42 50 L 42 18 L 34 10 Z" fill="none" stroke={baseColor} strokeWidth="2"/><path d="M 34 10 L 34 18 L 42 18" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="22" y1="26" x2="36" y2="26" stroke={baseColor} strokeWidth="1.5" opacity="0.5"/></svg>,
    "business-idea": <svg {...svgProps}><rect x="15" y="20" width="30" height="28" rx="2" fill="none" stroke={amber} strokeWidth="2"/><path d="M 22 20 L 22 15 Q 22 12 25 12 L 35 12 Q 38 12 38 15 L 38 20" fill="none" stroke={amber} strokeWidth="2"/><circle cx="30" cy="32" r="6" fill="none" stroke={amber} strokeWidth="1.5"/></svg>,
    "research": <svg {...svgProps}><circle cx="26" cy="26" r="14" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="36" y1="36" x2="48" y2="48" stroke={baseColor} strokeWidth="2.5" strokeLinecap="round"/></svg>,
    "schedule": <svg {...svgProps}><rect x="14" y="16" width="32" height="32" rx="2" fill="none" stroke={amber} strokeWidth="2"/><line x1="22" y1="12" x2="22" y2="20" stroke={amber} strokeWidth="2"/><line x1="38" y1="12" x2="38" y2="20" stroke={amber} strokeWidth="2"/><line x1="14" y1="24" x2="46" y2="24" stroke={amber} strokeWidth="1.5"/></svg>,
    "document": <svg {...svgProps}><path d="M 18 10 L 18 50 L 42 50 L 42 18 L 34 10 Z" fill="none" stroke={baseColor} strokeWidth="2"/><path d="M 34 10 L 34 18 L 42 18" fill="none" stroke={baseColor} strokeWidth="2"/></svg>,
    "spreadsheet": <svg {...svgProps}><rect x="12" y="16" width="36" height="28" rx="2" fill="none" stroke={green} strokeWidth="2"/><line x1="12" y1="24" x2="48" y2="24" stroke={green} strokeWidth="1.5"/><line x1="12" y1="32" x2="48" y2="32" stroke={green} strokeWidth="1.5"/><line x1="24" y1="16" x2="24" y2="44" stroke={green} strokeWidth="1.5"/><line x1="36" y1="16" x2="36" y2="44" stroke={green} strokeWidth="1.5"/></svg>,
    "chatbot": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="3" fill="none" stroke={blue} strokeWidth="2"/><path d="M 24 44 L 30 50 L 30 44" fill="none" stroke={blue} strokeWidth="2"/><circle cx="24" cy="28" r="2" fill={blue}/><circle cx="30" cy="28" r="2" fill={blue}/><circle cx="36" cy="28" r="2" fill={blue}/></svg>,
    "folder": <svg {...svgProps}><path d="M 10 22 L 10 44 L 50 44 L 50 22 Z" fill="none" stroke={amber} strokeWidth="2"/><path d="M 10 22 L 10 18 L 26 18 L 30 22 L 50 22" fill="none" stroke={amber} strokeWidth="2"/></svg>,
    "checklist": <svg {...svgProps}><rect x="14" y="14" width="32" height="36" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><path d="M 20 24 L 23 27 L 28 22" stroke={green} strokeWidth="2" fill="none" strokeLinecap="round"/><path d="M 20 34 L 23 37 L 28 32" stroke={green} strokeWidth="2" fill="none" strokeLinecap="round"/></svg>,
    "magnifier": <svg {...svgProps}><circle cx="26" cy="26" r="14" fill="none" stroke={baseColor} strokeWidth="2.5"/><line x1="36" y1="36" x2="48" y2="48" stroke={baseColor} strokeWidth="3" strokeLinecap="round"/></svg>,
    "warning": <svg {...svgProps}><path d="M 30 12 L 50 46 L 10 46 Z" fill="none" stroke="#ff6b6b" strokeWidth="2.5"/><line x1="30" y1="24" x2="30" y2="34" stroke="#ff6b6b" strokeWidth="2.5" strokeLinecap="round"/><circle cx="30" cy="40" r="2" fill="#ff6b6b"/></svg>,
    "thumbs-up": <svg {...svgProps}><path d="M 26 36 L 26 48 L 42 48 L 42 32 L 36 32 L 36 22 Q 36 18 32 18 Q 28 18 28 22 L 28 32" fill="none" stroke={green} strokeWidth="2"/><rect x="18" y="36" width="8" height="12" fill="none" stroke={green} strokeWidth="2"/></svg>,
    "thumbs-down": <svg {...svgProps}><path d="M 26 24 L 26 12 L 42 12 L 42 28 L 36 28 L 36 38 Q 36 42 32 42 Q 28 42 28 38 L 28 28" fill="none" stroke="#ff6b6b" strokeWidth="2"/><rect x="18" y="12" width="8" height="12" fill="none" stroke="#ff6b6b" strokeWidth="2"/></svg>,
    "cloud": <svg {...svgProps}><path d="M 20 32 Q 12 32 12 24 Q 12 18 18 16 Q 18 10 26 10 Q 32 10 34 16 Q 40 16 44 20 Q 48 24 48 30 Q 48 36 42 36 L 20 36 Q 12 36 12 28 Z" fill="none" stroke={blue} strokeWidth="2"/></svg>,
    "server": <svg {...svgProps}><rect x="14" y="16" width="32" height="10" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><rect x="14" y="30" width="32" height="10" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><circle cx="20" cy="21" r="1.5" fill={baseColor}/><circle cx="20" cy="35" r="1.5" fill={baseColor}/></svg>,
    "local-model": <svg {...svgProps}><rect x="16" y="20" width="28" height="22" rx="2" fill="none" stroke={purple} strokeWidth="2"/><rect x="20" y="42" width="20" height="4" fill="none" stroke={purple} strokeWidth="2"/><line x1="30" y1="46" x2="30" y2="50" stroke={purple} strokeWidth="2"/><line x1="24" y1="50" x2="36" y2="50" stroke={purple} strokeWidth="2"/><circle cx="30" cy="30" r="5" fill="none" stroke={purple} strokeWidth="2"/></svg>
  };

  return props[type] || <svg {...svgProps}><rect x="15" y="15" width="30" height="30" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/></svg>;
}

function ComedicProp({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const amber = "#f4d58d";
  const svgProps = { viewBox: "0 0 60 60", className: "w-full h-full" };

  const props: Record<string, JSX.Element> = {
    "wand": <svg {...svgProps}><line x1="12" y1="48" x2="40" y2="20" stroke={baseColor} strokeWidth="2.5"/><circle cx="40" cy="20" r="5" fill="none" stroke={amber} strokeWidth="2"/><line x1="43" y1="14" x2="47" y2="10" stroke={amber} strokeWidth="1.5"/></svg>,
    "saucepan": <svg {...svgProps}><rect x="18" y="26" width="28" height="18" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="46" y1="35" x2="56" y2="35" stroke={baseColor} strokeWidth="2.5"/></svg>,
    "bucket": <svg {...svgProps}><path d="M 20 24 L 16 42 Q 16 46 20 46 L 40 46 Q 44 46 44 42 L 40 24 Z" fill="none" stroke={baseColor} strokeWidth="2"/><path d="M 22 24 Q 30 20 38 24" stroke={baseColor} strokeWidth="1.5" fill="none"/></svg>,
    "poof-cloud": <svg {...svgProps}><path d="M 15 32 Q 15 28 18 26 Q 20 22 24 22 Q 28 22 30 24 Q 34 22 38 24 Q 42 22 44 26 Q 47 28 47 32 Q 47 36 44 38 Q 42 42 38 42 Q 34 42 32 40 Q 28 42 24 40 Q 20 42 18 38 Q 15 36 15 32 Z" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.6"/></svg>,
    "spark-burst": <svg {...svgProps}><line x1="30" y1="20" x2="30" y2="28" stroke={amber} strokeWidth="2"/><line x1="30" y1="32" x2="30" y2="40" stroke={amber} strokeWidth="2"/><line x1="20" y1="30" x2="28" y2="30" stroke={amber} strokeWidth="2"/><line x1="32" y1="30" x2="40" y2="30" stroke={amber} strokeWidth="2"/><line x1="23" y1="23" x2="28" y2="28" stroke={amber} strokeWidth="1.5"/><line x1="37" y1="23" x2="32" y2="28" stroke={amber} strokeWidth="1.5"/></svg>,
    "swirls": <svg {...svgProps}><path d="M 20 25 Q 22 20 28 22 Q 32 24 30 28" stroke={baseColor} strokeWidth="1.5" fill="none"/><path d="M 32 30 Q 34 26 38 28 Q 42 30 40 34" stroke={baseColor} strokeWidth="1.5" fill="none" opacity="0.7"/></svg>,
    "wobble-lines": <svg {...svgProps}><path d="M 18 25 Q 22 22 26 25 Q 30 28 34 25" stroke={baseColor} strokeWidth="1.5" fill="none"/><path d="M 18 32 Q 22 29 26 32 Q 30 35 34 32" stroke={baseColor} strokeWidth="1.5" fill="none" opacity="0.7"/></svg>,
    "sweat-marks": <svg {...svgProps}><ellipse cx="24" cy="28" rx="3" ry="5" fill="none" stroke="#7ec8e3" strokeWidth="1.5"/><ellipse cx="36" cy="26" rx="2.5" ry="4" fill="none" stroke="#7ec8e3" strokeWidth="1.5" opacity="0.7"/></svg>,
    "question-cloud": <svg {...svgProps}><path d="M 20 35 Q 16 35 16 30 Q 16 26 20 24 Q 22 20 28 20 Q 34 20 36 24 Q 40 26 40 30 Q 40 35 36 35" fill="none" stroke={baseColor} strokeWidth="1.5"/><text x="28" y="32" textAnchor="middle" fill={baseColor} fontSize="14">?</text></svg>,
    "confusion-stars": <svg {...svgProps}><path d="M 22 26 L 24 30 L 28 30 L 25 33 L 26 37 L 22 34 L 18 37 L 19 33 L 16 30 L 20 30 Z" fill="none" stroke={baseColor} strokeWidth="1.5"/><path d="M 38 24 L 39 27 L 42 27 L 40 29 L 41 32 L 38 30 L 35 32 L 36 29 L 34 27 L 37 27 Z" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.7"/></svg>
  };

  return props[type] || <svg {...svgProps}><circle cx="30" cy="30" r="12" fill="none" stroke={baseColor} strokeWidth="2"/></svg>;
}

function TeachingProp({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";
  const amber = "#f4d58d";
  const red = "#ff6b6b";
  const svgProps = { viewBox: "0 0 60 60", className: "w-full h-full" };

  const props: Record<string, JSX.Element> = {
    "data-card": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="2" fill="none" stroke={blue} strokeWidth="2"/><rect x="18" y="26" width="6" height="12" fill={blue} opacity="0.3"/><rect x="27" y="22" width="6" height="16" fill={blue} opacity="0.3"/><rect x="36" y="28" width="6" height="10" fill={blue} opacity="0.3"/></svg>,
    "patterns-card": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="2" fill="none" stroke={green} strokeWidth="2"/><circle cx="22" cy="28" r="3" fill={green} opacity="0.3"/><circle cx="30" cy="28" r="3" fill={green} opacity="0.3"/><circle cx="38" cy="28" r="3" fill={green} opacity="0.3"/><circle cx="22" cy="36" r="3" fill={green} opacity="0.3"/><circle cx="30" cy="36" r="3" fill={green} opacity="0.3"/></svg>,
    "model-box": <svg {...svgProps}><rect x="16" y="20" width="28" height="22" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><circle cx="30" cy="31" r="6" fill="none" stroke={baseColor} strokeWidth="1.5"/><path d="M 24 31 L 36 31" stroke={baseColor} strokeWidth="1" opacity="0.5"/><path d="M 30 25 L 30 37" stroke={baseColor} strokeWidth="1" opacity="0.5"/></svg>,
    "output-card": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="2" fill="none" stroke={amber} strokeWidth="2"/><path d="M 20 28 L 26 28 L 28 32 L 30 24 L 32 32 L 36 26 L 40 26" stroke={amber} strokeWidth="2" fill="none"/></svg>,
    "comparison": <svg {...svgProps}><rect x="12" y="18" width="16" height="26" rx="2" fill="none" stroke={blue} strokeWidth="1.5"/><rect x="32" y="18" width="16" height="26" rx="2" fill="none" stroke={green} strokeWidth="1.5"/></svg>,
    "myth-card": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="2" fill="none" stroke={red} strokeWidth="2"/><line x1="20" y1="24" x2="40" y2="38" stroke={red} strokeWidth="2.5"/><line x1="40" y1="24" x2="20" y2="38" stroke={red} strokeWidth="2.5"/></svg>,
    "reality-card": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="2" fill="none" stroke={green} strokeWidth="2"/><path d="M 22 30 L 27 35 L 38 24" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round"/></svg>,
    "roadmap": <svg {...svgProps}><circle cx="18" cy="30" r="4" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="22" y1="30" x2="32" y2="30" stroke={baseColor} strokeWidth="1.5"/><circle cx="36" cy="30" r="4" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="40" y1="30" x2="46" y2="30" stroke={baseColor} strokeWidth="1.5" strokeDasharray="2 2"/></svg>,
    "timeline": <svg {...svgProps}><line x1="14" y1="30" x2="46" y2="30" stroke={baseColor} strokeWidth="2"/><circle cx="20" cy="30" r="3" fill={baseColor}/><circle cx="30" cy="30" r="3" fill={baseColor}/><circle cx="40" cy="30" r="3" fill="none" stroke={baseColor} strokeWidth="1.5"/></svg>,
    "input-arrow": <svg {...svgProps}><line x1="14" y1="30" x2="42" y2="30" stroke={blue} strokeWidth="2.5"/><path d="M 42 30 L 36 26 M 42 30 L 36 34" stroke={blue} strokeWidth="2.5" strokeLinecap="round"/></svg>,
    "output-arrow": <svg {...svgProps}><line x1="18" y1="30" x2="46" y2="30" stroke={amber} strokeWidth="2.5"/><path d="M 46 30 L 40 26 M 46 30 L 40 34" stroke={amber} strokeWidth="2.5" strokeLinecap="round"/></svg>,
    "flow-box": <svg {...svgProps}><rect x="16" y="22" width="28" height="16" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/><line x1="30" y1="38" x2="30" y2="44" stroke={baseColor} strokeWidth="1.5"/><path d="M 30 44 L 27 40 M 30 44 L 33 40" stroke={baseColor} strokeWidth="1.5"/></svg>,
    "caution-box": <svg {...svgProps}><rect x="14" y="18" width="32" height="26" rx="2" fill="none" stroke={amber} strokeWidth="2"/><path d="M 30 24 L 34 32 L 26 32 Z" fill="none" stroke={amber} strokeWidth="1.5"/><line x1="30" y1="27" x2="30" y2="29" stroke={amber} strokeWidth="1.5"/><circle cx="30" cy="30.5" r="0.5" fill={amber}/></svg>,
    "slow-down": <svg {...svgProps}><circle cx="30" cy="30" r="16" fill="none" stroke={red} strokeWidth="2.5"/><line x1="22" y1="30" x2="38" y2="30" stroke={red} strokeWidth="2.5"/></svg>
  };

  return props[type] || <svg {...svgProps}><rect x="18" y="20" width="24" height="20" rx="2" fill="none" stroke={baseColor} strokeWidth="2"/></svg>;
}

function PropState({ state }: { state: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";

  return (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      {state === "clean" && (
        <rect x="15" y="20" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2"/>
      )}
      {state === "highlighted" && (
        <>
          <rect x="15" y="20" width="30" height="22" rx="2" fill={blue} fillOpacity="0.2" stroke={blue} strokeWidth="2.5"/>
          <rect x="12" y="17" width="36" height="28" rx="3" fill="none" stroke={blue} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6"/>
        </>
      )}
      {state === "crossed" && (
        <>
          <rect x="15" y="20" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2" opacity="0.4"/>
          <line x1="12" y1="18" x2="48" y2="44" stroke="#ff6b6b" strokeWidth="2.5"/>
          <line x1="48" y1="18" x2="12" y2="44" stroke="#ff6b6b" strokeWidth="2.5"/>
        </>
      )}
      {state === "circled" && (
        <>
          <rect x="15" y="20" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2"/>
          <circle cx="30" cy="31" r="20" fill="none" stroke={green} strokeWidth="2"/>
        </>
      )}
      {state === "checked" && (
        <>
          <rect x="15" y="20" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2"/>
          <path d="M 20 30 L 26 36 L 40 22" stroke={green} strokeWidth="3" fill="none" strokeLinecap="round"/>
        </>
      )}
      {state === "erased" && (
        <>
          <rect x="15" y="20" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2" opacity="0.2" strokeDasharray="4 2"/>
        </>
      )}
      {state === "stacked" && (
        <>
          <rect x="20" y="26" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2"/>
          <rect x="17" y="23" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="1.5" opacity="0.6"/>
          <rect x="14" y="20" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="1.5" opacity="0.3"/>
        </>
      )}
      {state === "chaos" && (
        <>
          <rect x="20" y="25" width="24" height="18" rx="2" fill="none" stroke={blue} strokeWidth="2" transform="rotate(-15 32 34)"/>
          <rect x="16" y="22" width="24" height="18" rx="2" fill="none" stroke={blue} strokeWidth="1.5" opacity="0.6" transform="rotate(12 28 31)"/>
          <line x1="35" y1="20" x2="38" y2="16" stroke={baseColor} strokeWidth="1" opacity="0.5"/>
          <line x1="25" y1="42" x2="22" y2="46" stroke={baseColor} strokeWidth="1" opacity="0.5"/>
        </>
      )}
      {state === "pinned" && (
        <>
          <rect x="15" y="24" width="30" height="22" rx="2" fill="none" stroke={blue} strokeWidth="2"/>
          <circle cx="30" cy="18" r="3" fill="#ff6b6b"/>
          <line x1="30" y1="18" x2="30" y2="24" stroke="#ff6b6b" strokeWidth="1.5"/>
        </>
      )}
    </svg>
  );
}
