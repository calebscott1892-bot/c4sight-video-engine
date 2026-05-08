export function CharacterSheet() {
  const poses = [
    { name: "Confident", id: "confident" },
    { name: "Confused", id: "confused" },
    { name: "Sad", id: "sad" },
    { name: "Overwhelmed", id: "overwhelmed" },
    { name: "Excited", id: "excited" },
    { name: "Walking Away", id: "walking" },
    { name: "Running Back", id: "running" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Character Sheet</h2>
        <p className="text-white/50">C4Sight Mascot — Chalk-style alien wizard</p>
      </div>

      <div className="grid grid-cols-7 gap-6">
        {poses.map((pose) => (
          <div key={pose.id} className="space-y-3">
            <div className="aspect-square bg-[#2a2a2a] rounded-lg border border-white/10 flex items-center justify-center p-6">
              <CharacterPose type={pose.id} />
            </div>
            <p className="text-center text-white/70">{pose.name}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-4 mt-6">
        <p className="text-white/60">
          <span className="text-white/90">Design notes:</span> Simple geometric forms, expressive eyes and antenna, minimal detail for clean animation export. Chalk texture implied through line weight variation.
        </p>
      </div>
    </section>
  );
}

function CharacterPose({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const accentBlue = "#7ec8e3";
  const accentYellow = "#f4d58d";

  // Confident
  if (type === "confident") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Body */}
        <ellipse cx="60" cy="75" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Head */}
        <circle cx="60" cy="35" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eyes - confident */}
        <circle cx="53" cy="33" r="3" fill={baseColor} />
        <circle cx="67" cy="33" r="3" fill={baseColor} />
        {/* Antenna */}
        <line x1="60" y1="17" x2="60" y2="8" stroke={baseColor} strokeWidth="2" />
        <circle cx="60" cy="6" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
        {/* Smile */}
        <path d="M 52 40 Q 60 44 68 40" stroke={baseColor} strokeWidth="2" fill="none" />
        {/* Arms - hands on hips */}
        <line x1="40" y1="62" x2="48" y2="70" stroke={baseColor} strokeWidth="2.5" />
        <line x1="80" y1="62" x2="72" y2="70" stroke={baseColor} strokeWidth="2.5" />
        {/* Legs */}
        <line x1="52" y1="100" x2="52" y2="110" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="100" x2="68" y2="110" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  // Confused
  if (type === "confused") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <ellipse cx="60" cy="75" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="35" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eyes - raised/asymmetric */}
        <circle cx="53" cy="31" r="2.5" fill={baseColor} />
        <circle cx="67" cy="34" r="2.5" fill={baseColor} />
        {/* Antenna - drooping */}
        <path d="M 60 17 Q 65 10 68 8" stroke={baseColor} strokeWidth="2" fill="none" />
        <circle cx="68" cy="7" r="3" fill="none" stroke={accentBlue} strokeWidth="2" opacity="0.6" />
        {/* Confused mouth */}
        <path d="M 52 42 Q 58 41 64 43" stroke={baseColor} strokeWidth="2" fill="none" />
        {/* Arms - questioning */}
        <line x1="38" y1="60" x2="35" y2="52" stroke={baseColor} strokeWidth="2.5" />
        <line x1="82" y1="65" x2="82" y2="72" stroke={baseColor} strokeWidth="2.5" />
        <line x1="52" y1="100" x2="52" y2="110" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="100" x2="68" y2="110" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  // Sad
  if (type === "sad") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <ellipse cx="60" cy="75" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="38" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eyes - downcast */}
        <line x1="50" y1="36" x2="54" y2="36" stroke={baseColor} strokeWidth="2" />
        <line x1="66" y1="36" x2="70" y2="36" stroke={baseColor} strokeWidth="2" />
        {/* Antenna - drooping low */}
        <path d="M 60 20 Q 52 18 48 20" stroke={baseColor} strokeWidth="2" fill="none" />
        <circle cx="47" cy="21" r="2.5" fill="none" stroke={accentBlue} strokeWidth="1.5" opacity="0.4" />
        {/* Frown */}
        <path d="M 52 46 Q 60 42 68 46" stroke={baseColor} strokeWidth="2" fill="none" />
        {/* Arms - hanging down */}
        <line x1="40" y1="68" x2="36" y2="80" stroke={baseColor} strokeWidth="2.5" />
        <line x1="80" y1="68" x2="84" y2="80" stroke={baseColor} strokeWidth="2.5" />
        <line x1="52" y1="100" x2="52" y2="110" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="100" x2="68" y2="110" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  // Overwhelmed
  if (type === "overwhelmed") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <ellipse cx="60" cy="75" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="35" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eyes - spiral/dizzy */}
        <circle cx="53" cy="33" r="4" fill="none" stroke={baseColor} strokeWidth="1.5" />
        <circle cx="53" cy="33" r="1.5" fill={baseColor} />
        <circle cx="67" cy="33" r="4" fill="none" stroke={baseColor} strokeWidth="1.5" />
        <circle cx="67" cy="33" r="1.5" fill={baseColor} />
        {/* Antenna - shaking */}
        <path d="M 60 17 L 58 10 L 62 8" stroke={baseColor} strokeWidth="2" fill="none" />
        <circle cx="62" cy="7" r="3" fill="none" stroke={accentYellow} strokeWidth="2" />
        <line x1="56" y1="8" x2="54" y2="6" stroke={accentYellow} strokeWidth="1.5" opacity="0.6" />
        <line x1="64" y1="6" x2="66" y2="4" stroke={accentYellow} strokeWidth="1.5" opacity="0.6" />
        {/* Overwhelmed mouth */}
        <circle cx="60" cy="42" r="3" fill="none" stroke={baseColor} strokeWidth="2" />
        {/* Arms - raised/stressed */}
        <line x1="38" y1="60" x2="32" y2="48" stroke={baseColor} strokeWidth="2.5" />
        <line x1="82" y1="60" x2="88" y2="48" stroke={baseColor} strokeWidth="2.5" />
        <line x1="52" y1="100" x2="52" y2="110" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="100" x2="68" y2="110" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  // Excited
  if (type === "excited") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <ellipse cx="60" cy="72" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="32" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eyes - wide and happy */}
        <circle cx="53" cy="30" r="4" fill={baseColor} />
        <circle cx="67" cy="30" r="4" fill={baseColor} />
        {/* Antenna - perked up with sparkles */}
        <line x1="60" y1="14" x2="60" y2="4" stroke={baseColor} strokeWidth="2" />
        <circle cx="60" cy="3" r="4" fill={accentYellow} stroke={accentYellow} strokeWidth="2" />
        <line x1="56" y1="6" x2="53" y2="3" stroke={accentYellow} strokeWidth="1.5" />
        <line x1="64" y1="6" x2="67" y2="3" stroke={accentYellow} strokeWidth="1.5" />
        {/* Big smile */}
        <path d="M 50 38 Q 60 44 70 38" stroke={baseColor} strokeWidth="2.5" fill="none" />
        {/* Arms - raised in excitement */}
        <line x1="38" y1="58" x2="30" y2="45" stroke={baseColor} strokeWidth="2.5" />
        <line x1="82" y1="58" x2="90" y2="45" stroke={baseColor} strokeWidth="2.5" />
        {/* Legs - bouncing */}
        <line x1="52" y1="97" x2="50" y2="108" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="97" x2="70" y2="108" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  // Walking Away
  if (type === "walking") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Body - side view */}
        <ellipse cx="55" cy="75" rx="20" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Head - profile */}
        <circle cx="55" cy="38" r="17" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eye - side view */}
        <circle cx="62" cy="36" r="2.5" fill={baseColor} />
        {/* Antenna - drooping back */}
        <path d="M 52 21 Q 45 18 42 22" stroke={baseColor} strokeWidth="2" fill="none" />
        <circle cx="41" cy="23" r="2.5" fill="none" stroke={accentBlue} strokeWidth="1.5" opacity="0.5" />
        {/* Small frown line */}
        <line x1="60" y1="44" x2="65" y2="45" stroke={baseColor} strokeWidth="1.5" />
        {/* Arms - walking */}
        <line x1="38" y1="68" x2="32" y2="78" stroke={baseColor} strokeWidth="2.5" />
        <line x1="72" y1="68" x2="78" y2="58" stroke={baseColor} strokeWidth="2.5" />
        {/* Legs - walking stride */}
        <line x1="48" y1="100" x2="42" y2="110" stroke={baseColor} strokeWidth="2.5" />
        <line x1="62" y1="100" x2="68" y2="108" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  // Running Back
  if (type === "running") {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Body - leaning forward */}
        <ellipse cx="65" cy="70" rx="22" ry="26" fill="none" stroke={baseColor} strokeWidth="2.5" transform="rotate(-15 65 70)" />
        {/* Head - excited forward lean */}
        <circle cx="62" cy="32" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        {/* Eyes - determined */}
        <circle cx="58" cy="30" r="3.5" fill={baseColor} />
        <circle cx="70" cy="30" r="3.5" fill={baseColor} />
        {/* Antenna - streaming back */}
        <path d="M 58 16 Q 50 12 45 14" stroke={baseColor} strokeWidth="2" fill="none" />
        <circle cx="44" cy="15" r="3.5" fill={accentYellow} stroke={accentYellow} strokeWidth="2" />
        {/* Motion lines */}
        <line x1="35" y1="18" x2="28" y2="16" stroke={accentYellow} strokeWidth="1.5" opacity="0.6" />
        <line x1="38" y1="24" x2="30" y2="24" stroke={accentYellow} strokeWidth="1.5" opacity="0.4" />
        {/* Smile */}
        <path d="M 54 38 Q 62 42 70 38" stroke={baseColor} strokeWidth="2" fill="none" />
        {/* Arms - running motion */}
        <line x1="45" y1="58" x2="38" y2="48" stroke={baseColor} strokeWidth="2.5" />
        <line x1="85" y1="65" x2="92" y2="75" stroke={baseColor} strokeWidth="2.5" />
        {/* Legs - running */}
        <line x1="58" y1="94" x2="54" y2="106" stroke={baseColor} strokeWidth="2.5" />
        <line x1="72" y1="94" x2="80" y2="102" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  return null;
}
