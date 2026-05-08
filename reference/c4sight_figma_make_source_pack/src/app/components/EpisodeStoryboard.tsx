export function EpisodeStoryboard() {
  const storyboard = [
    { frame: 1, scene: "Hook", desc: "What is AI?", metaphor: "Simple centered question", mascot: "None", energy: "Still" },
    { frame: 2, scene: "Statement", desc: "It can feel like magic", metaphor: "Confident wizard with props", mascot: "Confident", energy: "Lively" },
    { frame: 3, scene: "Chaos Montage", desc: "Email, code, images flying", metaphor: "Task cards everywhere", mascot: "Confident", energy: "Lively" },
    { frame: 4, scene: "Correction", desc: "Truth is, it's not magic", metaphor: "Cross-out text", mascot: "Confused", energy: "Still" },
    { frame: 5, scene: "Disappointment", desc: "Wand drops, props fall", metaphor: "Deflated moment", mascot: "Disappointed", energy: "Still" },
    { frame: 6, scene: "Walk-off Gag", desc: "Alien kicks bucket sadly", metaphor: "Visual humor beat", mascot: "Walking", energy: "Lively" },
    { frame: 7, scene: "Return", desc: "Well… actually, kind of", metaphor: "Running back excited", mascot: "Excited", energy: "Lively" },
    { frame: 8, scene: "Nuance", desc: "Emergence is surprising", metaphor: "Sparkles return carefully", mascot: "Curious", energy: "Still" },
    { frame: 9, scene: "Reset", desc: "So let's slow down", metaphor: "Calm pause icon", mascot: "Teaching", energy: "Still" },
    { frame: 10, scene: "Teaching", desc: "What AI broadly is", metaphor: "Clean definition text", mascot: "Presenting", energy: "Still" },
    { frame: 11, scene: "Teaching", desc: "Generative AI explained", metaphor: "Input → output visual", mascot: "Teaching", energy: "Still" },
    { frame: 12, scene: "Flow", desc: "Data → patterns → output", metaphor: "Flow diagram boxes", mascot: "Pointing", energy: "Still" },
    { frame: 13, scene: "Capabilities", desc: "What AI can do today", metaphor: "Task cards appear neatly", mascot: "Confident", energy: "Lively" },
    { frame: 14, scene: "Overwhelm", desc: "Too many tasks appearing", metaphor: "Cards pile up fast", mascot: "Overwhelmed", energy: "Lively" },
    { frame: 15, scene: "Reset", desc: "So let's slow down", metaphor: "Stop sign / calm frame", mascot: "Teaching", energy: "Still" },
    { frame: 16, scene: "Warning", desc: "What it cannot safely do", metaphor: "Warning triangle", mascot: "Serious", energy: "Still" },
    { frame: 17, scene: "Teaching", desc: "Why human judgment matters", metaphor: "Character + checklist", mascot: "Thoughtful", energy: "Still" },
    { frame: 18, scene: "Roadmap", desc: "What tools/companies matter", metaphor: "Icon grid layout", mascot: "Presenting", energy: "Still" },
    { frame: 19, scene: "Teaching", desc: "AI agents & connectors intro", metaphor: "Connected nodes visual", mascot: "Teaching", energy: "Still" },
    { frame: 20, scene: "Teaching", desc: "What MCP is", metaphor: "MCP icon + definition", mascot: "Explaining", energy: "Still" },
    { frame: 21, scene: "Roadmap", desc: "What beginners should learn", metaphor: "Step markers 1-2-3", mascot: "Pointing", energy: "Still" },
    { frame: 22, scene: "Tease", desc: "Future episode preview", metaphor: "Episode cards appear", mascot: "Excited", energy: "Lively" },
    { frame: 23, scene: "Outro", desc: "C4Sight branding", metaphor: "Logo + tagline", mascot: "Confident", energy: "Still" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Episode 01 Storyboard</h2>
        <p className="text-white/50">"Everything You Need to Know About AI — Explained Simply"</p>
      </div>

      <div className="space-y-3">
        {storyboard.map((panel) => (
          <div key={panel.frame} className="bg-[#2a2a2a] border border-white/10 rounded-lg p-4 grid grid-cols-[60px_1fr_120px_100px_100px_80px] gap-4 items-center">
            <div className="text-white/90 font-mono">#{panel.frame.toString().padStart(2, '0')}</div>
            <div>
              <p className="text-white/90 mb-1">{panel.desc}</p>
              <p className="text-white/50 text-sm">{panel.metaphor}</p>
            </div>
            <div className="text-white/70 text-sm">{panel.scene}</div>
            <div className="text-white/70 text-sm">{panel.mascot}</div>
            <div className={`text-sm px-2 py-1 rounded text-center ${panel.energy === 'Lively' ? 'bg-green/20 text-green' : 'bg-blue/20 text-blue'}`}>
              {panel.energy}
            </div>
            <div className="aspect-video bg-[#1a1a1a] rounded border border-white/5 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-4">
        <p className="text-white/60">
          <span className="text-white/90">Production notes:</span> Episode runtime ~8-12 minutes. Each panel represents 3-5 seconds of content. "Lively" scenes have movement; "Still" scenes hold for voiceover. Subtitle zone active for all teaching frames.
        </p>
      </div>
    </section>
  );
}
