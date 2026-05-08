export function Keyframes() {
  const frames = [
    {
      title: "Frame 1",
      text: "What is AI?",
      description: "Opening question — simple, centered"
    },
    {
      title: "Frame 2",
      text: "It can feel like magic",
      description: "Alien wizard confidently doing AI tasks"
    },
    {
      title: "Frame 3",
      text: "Truth is, it's not magic",
      description: "Alien/wand/props confused and disappointed"
    },
    {
      title: "Frame 4",
      text: "",
      description: "Sad walk-off gag — alien kicks bucket or drags wand"
    },
    {
      title: "Frame 5",
      text: "Well… actually, kind of",
      description: "Aliens excitedly return"
    },
    {
      title: "Frame 6",
      text: "So let's slow down — what actually is AI?",
      description: "Clean reset into teaching mode"
    }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Keyframe Storyboard</h2>
        <p className="text-white/50">Episode 1 Opening — 16:9 animated sequence</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {frames.map((frame, idx) => (
          <div key={idx} className="space-y-3">
            <div className="aspect-video bg-[#2a2a2a] rounded-lg border border-white/10 overflow-hidden">
              <KeyframeScene frameNumber={idx + 1} text={frame.text} />
            </div>
            <div>
              <p className="text-white/80 mb-1">{frame.title}</p>
              <p className="text-white/50">{frame.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-4 mt-6">
        <p className="text-white/60">
          <span className="text-white/90">Animation notes:</span> Each frame is 16:9 for YouTube. Text animates in chalk-draw style. Characters enter/exit with personality. Frame 4 is a visual gag beat with no text overlay. Timing: ~3-4 seconds per frame.
        </p>
      </div>
    </section>
  );
}

function KeyframeScene({ frameNumber, text }: { frameNumber: number; text: string }) {
  const baseColor = "#f5f5f0";
  const accentBlue = "#7ec8e3";
  const accentYellow = "#f4d58d";

  return (
    <div className="w-full h-full bg-[#1a1a1a] relative flex items-center justify-center p-8">
      {/* Safe margins indicator */}
      <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none" />

      {frameNumber === 1 && (
        <div className="text-center">
          <svg viewBox="0 0 400 120" className="w-full max-w-md mx-auto">
            <text x="200" y="70" textAnchor="middle" fill={baseColor} fontSize="42" fontWeight="300" style={{ fontFamily: 'system-ui' }}>
              What is AI?
            </text>
          </svg>
        </div>
      )}

      {frameNumber === 2 && (
        <div className="flex items-center justify-center gap-16">
          {/* Confident alien with wand */}
          <svg viewBox="0 0 120 160" className="w-24 h-32">
            <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="53" cy="43" r="3" fill={baseColor} />
            <circle cx="67" cy="43" r="3" fill={baseColor} />
            <line x1="60" y1="27" x2="60" y2="18" stroke={baseColor} strokeWidth="2" />
            <circle cx="60" cy="16" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
            <path d="M 52 50 Q 60 54 68 50" stroke={baseColor} strokeWidth="2" fill="none" />
            {/* Wand in hand */}
            <line x1="85" y1="75" x2="105" y2="55" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="105" cy="55" r="5" fill={accentYellow} stroke={accentYellow} strokeWidth="2" />
            <line x1="108" y1="48" x2="112" y2="44" stroke={accentYellow} strokeWidth="1.5" />
            <line x1="112" y1="55" x2="118" y2="55" stroke={accentYellow} strokeWidth="1.5" />
            <line x1="40" y1="82" x2="48" y2="90" stroke={baseColor} strokeWidth="2.5" />
            <line x1="80" y1="82" x2="85" y2="75" stroke={baseColor} strokeWidth="2.5" />
            <line x1="52" y1="120" x2="52" y2="130" stroke={baseColor} strokeWidth="2.5" />
            <line x1="68" y1="120" x2="68" y2="130" stroke={baseColor} strokeWidth="2.5" />
          </svg>

          {/* Task cards floating */}
          <div className="flex flex-col gap-3">
            <div className="w-16 h-10 bg-[#7ec8e3]/20 border border-[#7ec8e3]/60 rounded" />
            <div className="w-16 h-10 bg-[#8fce00]/20 border border-[#8fce00]/60 rounded" />
            <div className="w-16 h-10 bg-[#c297ff]/20 border border-[#c297ff]/60 rounded" />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white/90 italic">It can feel like magic</p>
          </div>
        </div>
      )}

      {frameNumber === 3 && (
        <div className="flex items-center justify-center gap-12">
          {/* Confused alien */}
          <svg viewBox="0 0 120 160" className="w-24 h-32">
            <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="53" cy="41" r="2.5" fill={baseColor} />
            <circle cx="67" cy="44" r="2.5" fill={baseColor} />
            <path d="M 60 27 Q 65 20 68 18" stroke={baseColor} strokeWidth="2" fill="none" />
            <circle cx="68" cy="17" r="3" fill="none" stroke={accentBlue} strokeWidth="2" opacity="0.6" />
            <path d="M 52 52 Q 58 51 64 53" stroke={baseColor} strokeWidth="2" fill="none" />
            <line x1="38" y1="80" x2="35" y2="72" stroke={baseColor} strokeWidth="2.5" />
            <line x1="82" y1="85" x2="82" y2="92" stroke={baseColor} strokeWidth="2.5" />
            <line x1="52" y1="120" x2="52" y2="130" stroke={baseColor} strokeWidth="2.5" />
            <line x1="68" y1="120" x2="68" y2="130" stroke={baseColor} strokeWidth="2.5" />
          </svg>

          {/* Wand on ground */}
          <svg viewBox="0 0 60 60" className="w-12 h-12 opacity-60">
            <line x1="10" y1="45" x2="40" y2="25" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="40" cy="25" r="4" fill="none" stroke={accentYellow} strokeWidth="2" opacity="0.4" />
          </svg>

          {/* Confused props */}
          <div className="flex gap-2 opacity-40">
            <div className="w-10 h-10 border border-white/40 rounded rotate-12" />
            <div className="w-10 h-10 border border-white/40 rounded -rotate-6" />
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white/90">Truth is, it's not magic</p>
          </div>
        </div>
      )}

      {frameNumber === 4 && (
        <div className="flex items-center justify-center gap-8">
          {/* Sad alien walking away (smaller, side view) */}
          <svg viewBox="0 0 120 160" className="w-20 h-28 opacity-80">
            <ellipse cx="55" cy="95" rx="20" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="55" cy="48" r="17" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="62" cy="46" r="2.5" fill={baseColor} />
            <path d="M 52 31 Q 45 28 42 32" stroke={baseColor} strokeWidth="2" fill="none" />
            <circle cx="41" cy="33" r="2.5" fill="none" stroke={accentBlue} strokeWidth="1.5" opacity="0.5" />
            <line x1="60" y1="54" x2="65" y2="55" stroke={baseColor} strokeWidth="1.5" />
            <line x1="38" y1="88" x2="32" y2="98" stroke={baseColor} strokeWidth="2.5" />
            <line x1="72" y1="88" x2="78" y2="78" stroke={baseColor} strokeWidth="2.5" />
            <line x1="48" y1="120" x2="42" y2="130" stroke={baseColor} strokeWidth="2.5" />
            <line x1="62" y1="120" x2="68" y2="128" stroke={baseColor} strokeWidth="2.5" />
          </svg>

          {/* Kicked bucket */}
          <svg viewBox="0 0 80 80" className="w-16 h-16 rotate-45 opacity-60">
            <path d="M 25 30 L 20 55 Q 20 60 25 60 L 55 60 Q 60 60 60 55 L 55 30 Z" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <path d="M 28 30 Q 40 25 52 30" stroke={baseColor} strokeWidth="2" fill="none" />
          </svg>

          {/* Motion line */}
          <div className="absolute right-1/3 top-1/2">
            <svg viewBox="0 0 40 4" className="w-10 opacity-40">
              <line x1="0" y1="2" x2="40" y2="2" stroke={baseColor} strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>
        </div>
      )}

      {frameNumber === 5 && (
        <div className="flex items-center justify-center gap-8">
          {/* Excited alien running back */}
          <svg viewBox="0 0 120 160" className="w-24 h-32">
            <ellipse cx="65" cy="90" rx="22" ry="26" fill="none" stroke={baseColor} strokeWidth="2.5" transform="rotate(-15 65 90)" />
            <circle cx="62" cy="42" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
            <circle cx="58" cy="40" r="3.5" fill={baseColor} />
            <circle cx="70" cy="40" r="3.5" fill={baseColor} />
            <path d="M 58 26 Q 50 22 45 24" stroke={baseColor} strokeWidth="2" fill="none" />
            <circle cx="44" cy="25" r="3.5" fill={accentYellow} stroke={accentYellow} strokeWidth="2" />
            <line x1="35" y1="28" x2="28" y2="26" stroke={accentYellow} strokeWidth="1.5" opacity="0.6" />
            <path d="M 54 48 Q 62 52 70 48" stroke={baseColor} strokeWidth="2" fill="none" />
            <line x1="45" y1="78" x2="38" y2="68" stroke={baseColor} strokeWidth="2.5" />
            <line x1="85" y1="85" x2="92" y2="95" stroke={baseColor} strokeWidth="2.5" />
            <line x1="58" y1="114" x2="54" y2="126" stroke={baseColor} strokeWidth="2.5" />
            <line x1="72" y1="114" x2="80" y2="122" stroke={baseColor} strokeWidth="2.5" />
          </svg>

          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white/90 italic">Well… actually, kind of</p>
          </div>
        </div>
      )}

      {frameNumber === 6 && (
        <div className="text-center max-w-2xl">
          <p className="text-white/90 mb-8">So let's slow down —</p>
          <svg viewBox="0 0 500 80" className="w-full max-w-lg mx-auto">
            <text x="250" y="50" textAnchor="middle" fill={baseColor} fontSize="36" fontWeight="300" style={{ fontFamily: 'system-ui' }}>
              what actually is AI?
            </text>
          </svg>

          {/* Small centered character ready to teach */}
          <div className="mt-8 flex justify-center">
            <svg viewBox="0 0 120 160" className="w-16 h-20">
              <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
              <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
              <circle cx="53" cy="43" r="3" fill={baseColor} />
              <circle cx="67" cy="43" r="3" fill={baseColor} />
              <line x1="60" y1="27" x2="60" y2="18" stroke={baseColor} strokeWidth="2" />
              <circle cx="60" cy="16" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
              <path d="M 52 50 Q 60 53 68 50" stroke={baseColor} strokeWidth="2" fill="none" />
              <line x1="40" y1="82" x2="48" y2="90" stroke={baseColor} strokeWidth="2.5" />
              <line x1="80" y1="82" x2="72" y2="90" stroke={baseColor} strokeWidth="2.5" />
              <line x1="52" y1="120" x2="52" y2="130" stroke={baseColor} strokeWidth="2.5" />
              <line x1="68" y1="120" x2="68" y2="130" stroke={baseColor} strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
