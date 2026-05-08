export function CharacterBible() {
  const bodyPoses = [
    { name: "Default Full Body", id: "default" },
    { name: "3/4 Pose", id: "three-quarter" },
    { name: "Front Pose", id: "front" },
    { name: "Slight Side", id: "side" },
    { name: "Sitting / Leaning", id: "sitting" },
    { name: "Presenting", id: "presenting" }
  ];

  const actingPoses = [
    { name: "Confident", id: "confident" },
    { name: "Excited", id: "excited" },
    { name: "Curious", id: "curious" },
    { name: "Confused", id: "confused" },
    { name: "Sceptical", id: "sceptical" },
    { name: "Overwhelmed", id: "overwhelmed" },
    { name: "Disappointed", id: "disappointed" },
    { name: "Embarrassed", id: "embarrassed" },
    { name: "Thinking", id: "thinking" },
    { name: "Teaching", id: "teaching" },
    { name: "Pointing", id: "pointing" },
    { name: "Chaos Reaction", id: "chaos" },
    { name: "Walking Away", id: "walking" },
    { name: "Running Back", id: "running" },
    { name: "Shrugging", id: "shrugging" },
    { name: "Holding Props", id: "holding" }
  ];

  const expressions = [
    "Happy", "Smile", "Grin", "Surprised", "Worried", "Overloaded",
    "Thoughtful", "Deadpan", "Mischievous", "Serious", "I Told You So", "Wait What", "Relieved"
  ];

  const gagPoses = [
    { name: "Kicking Bucket", id: "kick" },
    { name: "Dragging Wand", id: "drag" },
    { name: "Peeking Back", id: "peek" },
    { name: "Celebrating", id: "celebrate" },
    { name: "Frozen in Shock", id: "frozen" },
    { name: "Collapsing", id: "collapse" }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-white/95 mb-1">Character Bible</h2>
        <p className="text-white/50">Reusable mascot system for series consistency</p>
      </div>

      {/* Main Body Poses */}
      <div className="space-y-4">
        <h3 className="text-white/90">A. Main Mascot Body Poses</h3>
        <div className="grid grid-cols-6 gap-4">
          {bodyPoses.map((pose) => (
            <div key={pose.id} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded-lg border border-white/10 flex items-center justify-center p-4">
                <MascotBodyPose type={pose.id} />
              </div>
              <p className="text-center text-white/70 text-sm">{pose.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Acting Poses */}
      <div className="space-y-4">
        <h3 className="text-white/90">B. Core Acting Poses</h3>
        <div className="grid grid-cols-8 gap-4">
          {actingPoses.map((pose) => (
            <div key={pose.id} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded-lg border border-white/10 flex items-center justify-center p-3">
                <ActingPose type={pose.id} />
              </div>
              <p className="text-center text-white/70 text-sm">{pose.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expression Sheet */}
      <div className="space-y-4">
        <h3 className="text-white/90">C. Expression Sheet</h3>
        <div className="grid grid-cols-13 gap-3">
          {expressions.map((expr) => (
            <div key={expr} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded-lg border border-white/10 flex items-center justify-center p-2">
                <FaceExpression type={expr.toLowerCase().replace(/\s+/g, '-')} />
              </div>
              <p className="text-center text-white/70 text-xs">{expr}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Small Gag Poses */}
      <div className="space-y-4">
        <h3 className="text-white/90">D. Small Acting Moments / Gag Poses</h3>
        <div className="grid grid-cols-6 gap-4">
          {gagPoses.map((pose) => (
            <div key={pose.id} className="space-y-2">
              <div className="aspect-square bg-[#2a2a2a] rounded-lg border border-white/10 flex items-center justify-center p-4">
                <GagPose type={pose.id} />
              </div>
              <p className="text-center text-white/70 text-sm">{pose.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Character Consistency Rules */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">E. Character Consistency Rules</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3 text-white/70">
            <div>
              <p className="text-white/90 mb-1">Body Proportions</p>
              <p className="text-sm">Head: 18px radius, Body: 22×28px ellipse (approx 1:1.5 ratio)</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Line Weight</p>
              <p className="text-sm">Main outline: 2.5px, Inner details: 1.5-2px</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Face Placement</p>
              <p className="text-sm">Eyes centered horizontally, slightly above vertical center</p>
            </div>
          </div>
          <div className="space-y-3 text-white/70">
            <div>
              <p className="text-white/90 mb-1">Eye Placement</p>
              <p className="text-sm">Spacing: 14px apart, Size: 3-4px radius for dots, larger for expressions</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Chalk Detailing</p>
              <p className="text-sm">Minimal interior detail, rely on silhouette and pose</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Simplification Level</p>
              <p className="text-sm">No fingers, simple limbs, expressive through posture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MascotBodyPose({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const accentBlue = "#7ec8e3";

  if (type === "default") {
    return (
      <svg viewBox="0 0 120 160" className="w-full h-full">
        <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="53" cy="43" r="3" fill={baseColor} />
        <circle cx="67" cy="43" r="3" fill={baseColor} />
        <line x1="60" y1="27" x2="60" y2="18" stroke={baseColor} strokeWidth="2" />
        <circle cx="60" cy="16" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
        <path d="M 52 50 Q 60 53 68 50" stroke={baseColor} strokeWidth="2" fill="none" />
        <line x1="40" y1="82" x2="48" y2="90" stroke={baseColor} strokeWidth="2.5" />
        <line x1="80" y1="82" x2="72" y2="90" stroke={baseColor} strokeWidth="2.5" />
        <line x1="52" y1="120" x2="52" y2="135" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="120" x2="68" y2="135" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "three-quarter") {
    return (
      <svg viewBox="0 0 120 160" className="w-full h-full">
        <ellipse cx="65" cy="95" rx="20" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="62" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="58" cy="43" r="3" fill={baseColor} />
        <circle cx="70" cy="44" r="2.5" fill={baseColor} />
        <line x1="60" y1="27" x2="58" y2="18" stroke={baseColor} strokeWidth="2" />
        <circle cx="58" cy="16" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
        <path d="M 54 50 Q 62 53 68 51" stroke={baseColor} strokeWidth="2" fill="none" />
        <line x1="45" y1="82" x2="50" y2="90" stroke={baseColor} strokeWidth="2.5" />
        <line x1="82" y1="82" x2="77" y2="90" stroke={baseColor} strokeWidth="2.5" />
        <line x1="57" y1="120" x2="55" y2="135" stroke={baseColor} strokeWidth="2.5" />
        <line x1="72" y1="120" x2="73" y2="135" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "front") {
    return (
      <svg viewBox="0 0 120 160" className="w-full h-full">
        <ellipse cx="60" cy="95" rx="24" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="42" r="19" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="52" cy="40" r="3.5" fill={baseColor} />
        <circle cx="68" cy="40" r="3.5" fill={baseColor} />
        <line x1="60" y1="23" x2="60" y2="14" stroke={baseColor} strokeWidth="2" />
        <circle cx="60" cy="11" r="4" fill="none" stroke={accentBlue} strokeWidth="2" />
        <path d="M 52 48 Q 60 52 68 48" stroke={baseColor} strokeWidth="2" fill="none" />
        <line x1="38" y1="85" x2="44" y2="95" stroke={baseColor} strokeWidth="2.5" />
        <line x1="82" y1="85" x2="76" y2="95" stroke={baseColor} strokeWidth="2.5" />
        <line x1="52" y1="120" x2="52" y2="135" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="120" x2="68" y2="135" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "side") {
    return (
      <svg viewBox="0 0 120 160" className="w-full h-full">
        <ellipse cx="55" cy="95" rx="20" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="58" cy="42" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="65" cy="40" r="3" fill={baseColor} />
        <line x1="55" y1="24" x2="52" y2="16" stroke={baseColor} strokeWidth="2" />
        <circle cx="51" cy="14" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
        <line x1="62" y1="48" x2="68" y2="49" stroke={baseColor} strokeWidth="2" />
        <line x1="35" y1="82" x2="40" y2="92" stroke={baseColor} strokeWidth="2.5" />
        <line x1="72" y1="82" x2="78" y2="90" stroke={baseColor} strokeWidth="2.5" />
        <line x1="48" y1="120" x2="45" y2="135" stroke={baseColor} strokeWidth="2.5" />
        <line x1="62" y1="120" x2="65" y2="135" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "sitting") {
    return (
      <svg viewBox="0 0 120 160" className="w-full h-full">
        <ellipse cx="60" cy="105" rx="24" ry="20" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="55" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="53" cy="53" r="3" fill={baseColor} />
        <circle cx="67" cy="53" r="3" fill={baseColor} />
        <line x1="60" y1="37" x2="60" y2="28" stroke={baseColor} strokeWidth="2" />
        <circle cx="60" cy="26" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
        <path d="M 52 60 Q 60 63 68 60" stroke={baseColor} strokeWidth="2" fill="none" />
        <line x1="38" y1="92" x2="42" y2="102" stroke={baseColor} strokeWidth="2.5" />
        <line x1="82" y1="92" x2="78" y2="102" stroke={baseColor} strokeWidth="2.5" />
        <line x1="50" y1="125" x2="40" y2="130" stroke={baseColor} strokeWidth="2.5" />
        <line x1="70" y1="125" x2="80" y2="130" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  if (type === "presenting") {
    return (
      <svg viewBox="0 0 120 160" className="w-full h-full">
        <ellipse cx="60" cy="95" rx="22" ry="28" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="60" cy="45" r="18" fill="none" stroke={baseColor} strokeWidth="2.5" />
        <circle cx="53" cy="43" r="3" fill={baseColor} />
        <circle cx="67" cy="43" r="3" fill={baseColor} />
        <line x1="60" y1="27" x2="60" y2="18" stroke={baseColor} strokeWidth="2" />
        <circle cx="60" cy="16" r="3.5" fill="none" stroke={accentBlue} strokeWidth="2" />
        <path d="M 52 50 Q 60 53 68 50" stroke={baseColor} strokeWidth="2" fill="none" />
        <line x1="40" y1="80" x2="25" y2="75" stroke={baseColor} strokeWidth="2.5" />
        <line x1="80" y1="80" x2="95" y2="70" stroke={baseColor} strokeWidth="2.5" />
        <line x1="52" y1="120" x2="52" y2="135" stroke={baseColor} strokeWidth="2.5" />
        <line x1="68" y1="120" x2="68" y2="135" stroke={baseColor} strokeWidth="2.5" />
      </svg>
    );
  }

  return null;
}

function ActingPose({ type }: { type: string }) {
  const baseColor = "#f5f5f0";
  const accentBlue = "#7ec8e3";

  // Simplified versions for smaller display
  const commonHead = (cx: number, cy: number, eyeLeft?: number, eyeRight?: number) => (
    <>
      <circle cx={cx} cy={cy} r="14" fill="none" stroke={baseColor} strokeWidth="2" />
      {eyeLeft && <circle cx={eyeLeft} cy={cy} r="2" fill={baseColor} />}
      {eyeRight && <circle cx={eyeRight} cy={cy} r="2" fill={baseColor} />}
      <line x1={cx} y1={cy - 14} x2={cx} y2={cy - 20} stroke={baseColor} strokeWidth="1.5" />
      <circle cx={cx} cy={cy - 22} r="2.5" fill="none" stroke={accentBlue} strokeWidth="1.5" />
    </>
  );

  return (
    <svg viewBox="0 0 100 120" className="w-full h-full">
      {type === "confident" && (
        <>
          {commonHead(50, 30, 44, 56)}
          <path d="M 42 35 Q 50 38 58 35" stroke={baseColor} strokeWidth="1.5" fill="none" />
          <ellipse cx="50" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="34" y1="60" x2="40" y2="65" stroke={baseColor} strokeWidth="2" />
          <line x1="66" y1="60" x2="60" y2="65" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {type === "excited" && (
        <>
          {commonHead(50, 28, 44, 56)}
          <path d="M 40 33 Q 50 38 60 33" stroke={baseColor} strokeWidth="2" fill="none" />
          <ellipse cx="50" cy="68" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="34" y1="55" x2="28" y2="45" stroke={baseColor} strokeWidth="2" />
          <line x1="66" y1="55" x2="72" y2="45" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {type === "curious" && (
        <>
          {commonHead(50, 30, 44, 56)}
          <circle cx="50" cy="35" r="2" fill="none" stroke={baseColor} strokeWidth="1.5" />
          <ellipse cx="50" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="34" y1="58" x2="30" y2="52" stroke={baseColor} strokeWidth="2" />
          <line x1="66" y1="62" x2="62" y2="68" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {(type === "confused" || type === "sceptical" || type === "thinking") && (
        <>
          {commonHead(50, 30, 44, 56)}
          <path d="M 42 36 Q 48 35 54 37" stroke={baseColor} strokeWidth="1.5" fill="none" />
          <ellipse cx="50" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {(type === "overwhelmed" || type === "disappointed" || type === "embarrassed") && (
        <>
          <circle cx="50" cy="32" r="14" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="44" cy="30" r="3" fill="none" stroke={baseColor} strokeWidth="1.5" />
          <circle cx="56" cy="30" r="3" fill="none" stroke={baseColor} strokeWidth="1.5" />
          <ellipse cx="50" cy="72" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {(type === "teaching" || type === "pointing") && (
        <>
          {commonHead(50, 30, 44, 56)}
          <path d="M 42 35 Q 50 37 58 35" stroke={baseColor} strokeWidth="1.5" fill="none" />
          <ellipse cx="50" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="66" y1="60" x2="80" y2="50" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {(type === "chaos" || type === "shrugging") && (
        <>
          {commonHead(50, 30, 44, 56)}
          <ellipse cx="50" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="34" y1="55" x2="28" y2="50" stroke={baseColor} strokeWidth="2" />
          <line x1="66" y1="55" x2="72" y2="50" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {(type === "walking" || type === "running" || type === "holding") && (
        <>
          {commonHead(48, 30, 42, 54)}
          <ellipse cx="48" cy="70" rx="16" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

function FaceExpression({ type }: { type: string }) {
  const baseColor = "#f5f5f0";

  return (
    <svg viewBox="0 0 60 60" className="w-full h-full">
      <circle cx="30" cy="30" r="24" fill="none" stroke={baseColor} strokeWidth="2" />
      {type === "happy" && (
        <>
          <circle cx="23" cy="26" r="2.5" fill={baseColor} />
          <circle cx="37" cy="26" r="2.5" fill={baseColor} />
          <path d="M 20 34 Q 30 40 40 34" stroke={baseColor} strokeWidth="2" fill="none" />
        </>
      )}
      {type === "smile" && (
        <>
          <circle cx="23" cy="27" r="2" fill={baseColor} />
          <circle cx="37" cy="27" r="2" fill={baseColor} />
          <path d="M 22 35 Q 30 38 38 35" stroke={baseColor} strokeWidth="1.5" fill="none" />
        </>
      )}
      {type === "grin" && (
        <>
          <circle cx="23" cy="26" r="3" fill={baseColor} />
          <circle cx="37" cy="26" r="3" fill={baseColor} />
          <path d="M 18 34 Q 30 42 42 34" stroke={baseColor} strokeWidth="2.5" fill="none" />
        </>
      )}
      {type === "surprised" && (
        <>
          <circle cx="23" cy="26" r="3" fill={baseColor} />
          <circle cx="37" cy="26" r="3" fill={baseColor} />
          <circle cx="30" cy="36" r="4" fill="none" stroke={baseColor} strokeWidth="2" />
        </>
      )}
      {(type === "worried" || type === "overloaded") && (
        <>
          <circle cx="23" cy="28" r="2.5" fill="none" stroke={baseColor} strokeWidth="1.5" />
          <circle cx="37" cy="28" r="2.5" fill="none" stroke={baseColor} strokeWidth="1.5" />
          <path d="M 22 38 Q 30 35 38 38" stroke={baseColor} strokeWidth="2" fill="none" />
        </>
      )}
      {(type === "thoughtful" || type === "deadpan" || type === "serious") && (
        <>
          <circle cx="23" cy="28" r="2" fill={baseColor} />
          <circle cx="37" cy="28" r="2" fill={baseColor} />
          <line x1="22" y1="36" x2="38" y2="36" stroke={baseColor} strokeWidth="1.5" />
        </>
      )}
      {type === "mischievous" && (
        <>
          <path d="M 20 28 L 26 26" stroke={baseColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M 34 26 L 40 28" stroke={baseColor} strokeWidth="2" strokeLinecap="round" />
          <path d="M 22 34 Q 26 38 30 37 Q 34 38 38 34" stroke={baseColor} strokeWidth="2" fill="none" />
        </>
      )}
      {(type === "i-told-you-so" || type === "wait-what" || type === "relieved") && (
        <>
          <circle cx="23" cy="27" r="2.5" fill={baseColor} />
          <circle cx="37" cy="27" r="2.5" fill={baseColor} />
          <path d="M 24 35 Q 30 37 36 35" stroke={baseColor} strokeWidth="1.5" fill="none" />
        </>
      )}
    </svg>
  );
}

function GagPose({ type }: { type: string }) {
  const baseColor = "#f5f5f0";

  return (
    <svg viewBox="0 0 120 120" className="w-full h-full">
      {type === "kick" && (
        <>
          <ellipse cx="40" cy="60" rx="16" ry="20" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="40" cy="35" r="14" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="52" y1="68" x2="70" y2="75" stroke={baseColor} strokeWidth="2.5" />
          <path d="M 75 70 L 70 95 Q 70 98 73 98 L 90 98 Q 93 98 93 95 L 88 70 Z" fill="none" stroke={baseColor} strokeWidth="2" transform="rotate(25 80 85)" />
        </>
      )}
      {type === "drag" && (
        <>
          <ellipse cx="50" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="50" cy="38" r="14" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="30" y1="65" x2="15" y2="75" stroke={baseColor} strokeWidth="2" />
          <line x1="15" y1="75" x2="10" y2="90" stroke={baseColor} strokeWidth="2.5" opacity="0.6" />
          <circle cx="10" cy="92" r="3" fill="none" stroke="#f4d58d" strokeWidth="2" opacity="0.5" />
        </>
      )}
      {type === "peek" && (
        <>
          <rect x="70" y="20" width="40" height="80" fill="#2a2a2a" stroke={baseColor} strokeWidth="2" />
          <ellipse cx="60" cy="55" rx="14" ry="18" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="60" cy="35" r="12" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="66" cy="34" r="2" fill={baseColor} />
        </>
      )}
      {type === "celebrate" && (
        <>
          <ellipse cx="60" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="60" cy="35" r="14" fill="none" stroke={baseColor} strokeWidth="2" />
          <line x1="45" y1="55" x2="35" y2="40" stroke={baseColor} strokeWidth="2" />
          <line x1="75" y1="55" x2="85" y2="40" stroke={baseColor} strokeWidth="2" />
          <line x1="30" y1="30" x2="25" y2="25" stroke="#8fce00" strokeWidth="2" />
          <line x1="90" y1="30" x2="95" y2="25" stroke="#8fce00" strokeWidth="2" />
        </>
      )}
      {type === "frozen" && (
        <>
          <ellipse cx="60" cy="70" rx="18" ry="22" fill="none" stroke={baseColor} strokeWidth="2.5" />
          <circle cx="60" cy="35" r="14" fill="none" stroke={baseColor} strokeWidth="2.5" />
          <circle cx="54" cy="33" r="3.5" fill={baseColor} />
          <circle cx="66" cy="33" r="3.5" fill={baseColor} />
          <line x1="50" y1="25" x2="48" y2="18" stroke="#7ec8e3" strokeWidth="1.5" />
          <line x1="60" y1="23" x2="60" y2="15" stroke="#7ec8e3" strokeWidth="1.5" />
          <line x1="70" y1="25" x2="72" y2="18" stroke="#7ec8e3" strokeWidth="1.5" />
        </>
      )}
      {type === "collapse" && (
        <>
          <ellipse cx="60" cy="85" rx="25" ry="15" fill="none" stroke={baseColor} strokeWidth="2" />
          <circle cx="60" cy="70" r="12" fill="none" stroke={baseColor} strokeWidth="2" />
          <rect x="50" y="50" width="15" height="10" fill="#7ec8e3" opacity="0.3" stroke="#7ec8e3" strokeWidth="1" />
          <rect x="58" y="42" width="15" height="10" fill="#8fce00" opacity="0.3" stroke="#8fce00" strokeWidth="1" />
          <rect x="54" y="34" width="15" height="10" fill="#c297ff" opacity="0.3" stroke="#c297ff" strokeWidth="1" />
        </>
      )}
    </svg>
  );
}
