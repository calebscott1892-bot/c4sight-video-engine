export function PropSheet() {
  const props = [
    { name: "Magic Wand", id: "wand" },
    { name: "Saucepan", id: "saucepan" },
    { name: "Bucket", id: "bucket" },
    { name: "Laptop", id: "laptop" },
    { name: "Email Card", id: "email" },
    { name: "Website Card", id: "website" },
    { name: "Assignment Card", id: "assignment" },
    { name: "Code Card", id: "code" },
    { name: "Image Card", id: "image" },
    { name: "Doc Summary", id: "document" },
    { name: "Business Idea", id: "business" },
    { name: "Magnifying Glass", id: "magnifier" },
    { name: "Warning Icon", id: "warning" },
    { name: "Checklist", id: "checklist" },
    { name: "Eraser", id: "eraser" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Prop Sheet</h2>
        <p className="text-white/50">Chalk-style educational props</p>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {props.map((prop) => (
          <div key={prop.id} className="space-y-3">
            <div className="aspect-square bg-[#2a2a2a] rounded-lg border border-white/10 flex items-center justify-center p-8">
              <PropIcon type={prop.id} />
            </div>
            <p className="text-center text-white/70">{prop.name}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-4 mt-6">
        <p className="text-white/60">
          <span className="text-white/90">Design notes:</span> Task cards use color-coded accents (blue: communication, green: creative, amber: work, purple: code). Props maintain chalk aesthetic with sketch-like quality.
        </p>
      </div>
    </section>
  );
}

function PropIcon({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const blue = "#7ec8e3";
  const green = "#8fce00";
  const amber = "#f4d58d";
  const purple = "#c297ff";
  const red = "#ff6b6b";

  if (type === "wand") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <line x1="15" y1="65" x2="55" y2="25" stroke={baseColor} strokeWidth="3" strokeLinecap="round" />
        <circle cx="55" cy="25" r="6" fill="none" stroke={amber} strokeWidth="2.5" />
        <line x1="58" y1="18" x2="62" y2="14" stroke={amber} strokeWidth="2" />
        <line x1="62" y1="25" x2="68" y2="25" stroke={amber} strokeWidth="2" />
        <line x1="58" y1="32" x2="62" y2="36" stroke={amber} strokeWidth="2" />
      </svg>
    );
  }

  if (type === "saucepan") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="22" y="35" width="36" height="24" rx="3" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <line x1="58" y1="47" x2="72" y2="47" stroke={baseColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="25" y="59" x2="55" y="59" stroke={baseColor} strokeWidth="2" />
      </svg>
    );
  }

  if (type === "bucket") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path d="M 25 30 L 20 55 Q 20 60 25 60 L 55 60 Q 60 60 60 55 L 55 30 Z" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <path d="M 28 30 Q 40 25 52 30" stroke={baseColor} strokeWidth="2" fill="none" />
        <line x1="25" y1="30" x2="55" y2="30" stroke={baseColor} strokeWidth="2" />
      </svg>
    );
  }

  if (type === "laptop") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="20" y="28" width="40" height="26" rx="2" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <line x1="12" y1="54" x2="68" y2="54" stroke={baseColor} strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="54" x2="20" y2="56" stroke={baseColor} strokeWidth="2.5" />
        <line x1="60" y1="54" x2="60" y2="56" stroke={baseColor} strokeWidth="2.5" />
        <rect x="24" y="32" width="32" height="18" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.5" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="15" y="25" width="50" height="35" rx="3" fill="none" stroke={blue} strokeWidth="2.5" />
        <path d="M 15 28 L 40 45 L 65 28" stroke={blue} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        <line x1="20" y1="35" x2="28" y2="40" stroke={blue} strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="35" x2="52" y2="40" stroke={blue} strokeWidth="1.5" opacity="0.6" />
      </svg>
    );
  }

  if (type === "website") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="12" y="20" width="56" height="40" rx="3" fill="none" stroke={blue} strokeWidth="2.5" />
        <line x1="12" y1="30" x2="68" y2="30" stroke={blue} strokeWidth="2" />
        <circle cx="18" cy="25" r="1.5" fill={blue} />
        <circle cx="24" cy="25" r="1.5" fill={blue} />
        <circle cx="30" cy="25" r="1.5" fill={blue} />
        <rect x="18" y="36" width="44" height="4" rx="1" fill={blue} opacity="0.3" />
        <rect x="18" y="44" width="32" height="3" rx="1" fill={blue} opacity="0.3" />
        <rect x="18" y="50" width="38" height="3" rx="1" fill={blue} opacity="0.3" />
      </svg>
    );
  }

  if (type === "assignment") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="20" y="18" width="40" height="50" rx="3" fill="none" stroke={amber} strokeWidth="2.5" />
        <line x1="28" y1="28" x2="52" y2="28" stroke={amber} strokeWidth="2" opacity="0.6" />
        <line x1="28" y1="36" x2="52" y2="36" stroke={amber} strokeWidth="2" opacity="0.6" />
        <line x1="28" y1="44" x2="48" y2="44" stroke={amber} strokeWidth="2" opacity="0.6" />
        <line x1="28" y1="52" x2="50" y2="52" stroke={amber} strokeWidth="2" opacity="0.6" />
        <circle cx="40" cy="40" r="12" fill={amber} opacity="0.15" />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="18" y="20" width="44" height="40" rx="3" fill="none" stroke={purple} strokeWidth="2.5" />
        <path d="M 28 35 L 22 40 L 28 45" stroke={purple} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 52 35 L 58 40 L 52 45" stroke={purple} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="42" y1="33" x2="38" y2="47" stroke={purple} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "image") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="18" y="22" width="44" height="36" rx="3" fill="none" stroke={green} strokeWidth="2.5" />
        <circle cx="32" cy="34" r="5" fill="none" stroke={green} strokeWidth="2" />
        <path d="M 18 50 L 30 38 L 42 48 L 54 36 L 62 44 L 62 58 L 18 58 Z" fill={green} opacity="0.2" stroke="none" />
        <path d="M 18 50 L 30 38 L 42 48 L 54 36 L 62 44" stroke={green} strokeWidth="2" fill="none" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path d="M 22 15 L 22 65 L 58 65 L 58 25 L 48 15 Z" fill="none" stroke={baseColor} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M 48 15 L 48 25 L 58 25" fill="none" stroke={baseColor} strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="28" y1="32" x2="48" y2="32" stroke={baseColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="28" y1="38" x2="52" y2="38" stroke={baseColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="28" y1="44" x2="50" y2="44" stroke={baseColor} strokeWidth="1.5" opacity="0.6" />
        <line x1="28" y1="50" x2="46" y2="50" stroke={baseColor} strokeWidth="1.5" opacity="0.6" />
      </svg>
    );
  }

  if (type === "business") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="20" y="25" width="40" height="42" rx="3" fill="none" stroke={amber} strokeWidth="2.5" />
        <path d="M 30 25 L 30 18 Q 30 15 33 15 L 47 15 Q 50 15 50 18 L 50 25" fill="none" stroke={amber} strokeWidth="2.5" />
        <circle cx="40" cy="25" r="3" fill={amber} />
        <circle cx="32" cy="42" r="8" fill="none" stroke={amber} strokeWidth="2" />
        <path d="M 32 50 L 32 58" stroke={amber} strokeWidth="2" />
        <path d="M 28 54 L 36 54" stroke={amber} strokeWidth="2" />
        <circle cx="52" cy="42" r="1.5" fill={amber} />
        <circle cx="52" cy="48" r="1.5" fill={amber} />
        <circle cx="52" cy="54" r="1.5" fill={amber} />
      </svg>
    );
  }

  if (type === "magnifier") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <circle cx="35" cy="35" r="18" fill="none" stroke={baseColor} strokeWidth="3" />
        <line x1="48" y1="48" x2="65" y2="65" stroke={baseColor} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="35" cy="35" r="12" fill="none" stroke={baseColor} strokeWidth="1.5" opacity="0.3" />
      </svg>
    );
  }

  if (type === "warning") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path d="M 40 15 L 65 60 L 15 60 Z" fill="none" stroke={red} strokeWidth="3" strokeLinejoin="round" />
        <line x1="40" y1="32" x2="40" y2="46" stroke={red} strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="52" r="2" fill={red} />
      </svg>
    );
  }

  if (type === "checklist") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="18" y="18" width="44" height="48" rx="3" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <path d="M 26 32 L 30 36 L 38 28" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="44" y1="32" x2="54" y2="32" stroke={baseColor} strokeWidth="2" opacity="0.5" />
        <path d="M 26 46 L 30 50 L 38 42" stroke={green} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="44" y1="46" x2="54" y2="46" stroke={baseColor} strokeWidth="2" opacity="0.5" />
        <circle cx="30" cy="56" r="3" fill="none" stroke={baseColor} strokeWidth="2" />
        <line x1="44" y1="56" x2="54" y2="56" stroke={baseColor} strokeWidth="2" opacity="0.5" />
      </svg>
    );
  }

  if (type === "eraser") {
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect x="25" y="30" width="35" height="18" rx="2" fill="none" stroke={baseColor} strokeWidth="2.5" transform="rotate(-25 42.5 39)" />
        <rect x="28" y="33" width="29" height="12" rx="1" fill={baseColor} opacity="0.15" transform="rotate(-25 42.5 39)" />
        <line x1="35" y1="52" x2="52" y2="52" stroke={baseColor} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    );
  }

  return null;
}
