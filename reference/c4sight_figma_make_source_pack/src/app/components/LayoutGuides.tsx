export function LayoutGuides() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Layout System</h2>
        <p className="text-white/50">16:9 composition guide for YouTube animation</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Standard layout */}
        <div className="space-y-3">
          <div className="aspect-video bg-[#2a2a2a] rounded-lg border border-white/10 overflow-hidden relative">
            <LayoutDemo type="standard" />
          </div>
          <div>
            <p className="text-white/80 mb-1">Standard Layout</p>
            <p className="text-white/50">Title top, character center, teaching content below</p>
          </div>
        </div>

        {/* Character focus */}
        <div className="space-y-3">
          <div className="aspect-video bg-[#2a2a2a] rounded-lg border border-white/10 overflow-hidden relative">
            <LayoutDemo type="character" />
          </div>
          <div>
            <p className="text-white/80 mb-1">Character Focus</p>
            <p className="text-white/50">Large character interaction with task cards</p>
          </div>
        </div>

        {/* Split screen */}
        <div className="space-y-3">
          <div className="aspect-video bg-[#2a2a2a] rounded-lg border border-white/10 overflow-hidden relative">
            <LayoutDemo type="split" />
          </div>
          <div>
            <p className="text-white/80 mb-1">Split Screen</p>
            <p className="text-white/50">Comparison or before/after scenarios</p>
          </div>
        </div>

        {/* Text focus */}
        <div className="space-y-3">
          <div className="aspect-video bg-[#2a2a2a] rounded-lg border border-white/10 overflow-hidden relative">
            <LayoutDemo type="text" />
          </div>
          <div>
            <p className="text-white/80 mb-1">Text Focus</p>
            <p className="text-white/50">Key concepts or definitions</p>
          </div>
        </div>
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-6 space-y-4">
        <div>
          <h3 className="text-white/90 mb-2">Zone Specifications</h3>
          <div className="grid grid-cols-2 gap-4 text-white/60">
            <div>
              <span className="text-white/80">Title Zone:</span> Top 15% of frame, centered
            </div>
            <div>
              <span className="text-white/80">Character Zone:</span> Center 60%, flexible positioning
            </div>
            <div>
              <span className="text-white/80">Task Card Zone:</span> Right 25% or floating around character
            </div>
            <div>
              <span className="text-white/80">Subtitle Zone:</span> Bottom 12%, safe for mobile
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-white/90 mb-2">Safe Margins</h3>
          <p className="text-white/60">
            16px padding on all sides for mobile safety. Critical text and characters must stay within inner 90% for readability on small screens.
          </p>
        </div>
      </div>
    </section>
  );
}

function LayoutDemo({ type }: { type: string }) {
  const baseColor = "#f5f5f0";

  if (type === "standard") {
    return (
      <div className="w-full h-full bg-[#1a1a1a] relative">
        {/* Safe margins */}
        <div className="absolute inset-0 border-[12px] border-[#7ec8e3]/20" />

        {/* Title zone */}
        <div className="absolute top-0 left-0 right-0 h-[15%] border-b border-dashed border-white/20 flex items-center justify-center">
          <div className="w-32 h-3 bg-white/30 rounded" />
        </div>

        {/* Character zone */}
        <div className="absolute top-[15%] left-0 right-0 bottom-[12%] border-b border-dashed border-white/20 flex items-center justify-center">
          <svg viewBox="0 0 120 160" className="w-20 h-28">
            <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2" />
            <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2" />
            <circle cx="53" cy="43" r="3" fill={baseColor} />
            <circle cx="67" cy="43" r="3" fill={baseColor} />
            <line x1="60" y1="27" x2="60" y2="18" stroke={baseColor} strokeWidth="1.5" />
            <circle cx="60" cy="16" r="3" fill="none" stroke="#7ec8e3" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Subtitle zone */}
        <div className="absolute bottom-0 left-0 right-0 h-[12%] flex items-center justify-center">
          <div className="w-48 h-2 bg-white/20 rounded" />
        </div>

        {/* Labels */}
        <div className="absolute top-2 left-2 text-[10px] text-[#7ec8e3]">Title Zone</div>
        <div className="absolute top-1/2 left-2 text-[10px] text-[#7ec8e3]">Character Zone</div>
        <div className="absolute bottom-2 left-2 text-[10px] text-[#7ec8e3]">Subtitle</div>
      </div>
    );
  }

  if (type === "character") {
    return (
      <div className="w-full h-full bg-[#1a1a1a] relative">
        <div className="absolute inset-0 border-[12px] border-[#7ec8e3]/20" />

        {/* Large character left */}
        <div className="absolute left-[10%] top-[20%] bottom-[20%] w-[40%] flex items-center justify-center">
          <svg viewBox="0 0 120 160" className="w-32 h-44">
            <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="53" cy="43" r="3" fill={baseColor} />
            <circle cx="67" cy="43" r="3" fill={baseColor} />
          </svg>
        </div>

        {/* Task cards right */}
        <div className="absolute right-[8%] top-[25%] bottom-[25%] w-[25%] flex flex-col gap-3 justify-center">
          <div className="h-16 bg-[#7ec8e3]/20 border border-[#7ec8e3]/40 rounded" />
          <div className="h-16 bg-[#8fce00]/20 border border-[#8fce00]/40 rounded" />
          <div className="h-16 bg-[#c297ff]/20 border border-[#c297ff]/40 rounded" />
        </div>

        <div className="absolute top-2 left-2 text-[10px] text-[#7ec8e3]">Task Card Zone</div>
      </div>
    );
  }

  if (type === "split") {
    return (
      <div className="w-full h-full bg-[#1a1a1a] relative">
        <div className="absolute inset-0 border-[12px] border-[#7ec8e3]/20" />

        {/* Center divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/30" />

        {/* Left side */}
        <div className="absolute left-[15%] top-[30%] w-[25%]">
          <div className="w-full h-20 bg-white/10 border border-white/30 rounded" />
          <div className="mt-2 w-20 h-2 bg-white/20 rounded mx-auto" />
        </div>

        {/* Right side */}
        <div className="absolute right-[15%] top-[30%] w-[25%]">
          <div className="w-full h-20 bg-white/10 border border-white/30 rounded" />
          <div className="mt-2 w-20 h-2 bg-white/20 rounded mx-auto" />
        </div>

        <div className="absolute bottom-2 left-2 text-[10px] text-[#7ec8e3]">Split Comparison</div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="w-full h-full bg-[#1a1a1a] relative flex items-center justify-center">
        <div className="absolute inset-0 border-[12px] border-[#7ec8e3]/20" />

        {/* Large centered text area */}
        <div className="w-[70%] space-y-4">
          <div className="w-48 h-4 bg-white/40 rounded mx-auto" />
          <div className="w-64 h-3 bg-white/25 rounded mx-auto" />
          <div className="w-56 h-3 bg-white/25 rounded mx-auto" />
        </div>

        {/* Small character bottom right */}
        <div className="absolute bottom-8 right-8">
          <svg viewBox="0 0 80 100" className="w-12 h-16">
            <ellipse cx="40" cy="60" rx="15" ry="20" fill="none" stroke={baseColor} strokeWidth="1.5" />
            <circle cx="40" cy="30" r="12" fill="none" stroke={baseColor} strokeWidth="1.5" />
          </svg>
        </div>

        <div className="absolute top-2 left-2 text-[10px] text-[#7ec8e3]">Text Focus</div>
      </div>
    );
  }

  return null;
}
