export function SeriesRoadmap() {
  const episodes = [
    { num: 1, title: "Everything You Need to Know About AI", status: "In Production", color: "#8fce00" },
    { num: 2, title: "What Can I Use AI For?", status: "Planned", color: "#7ec8e3" },
    { num: 3, title: "How to Use AI Better", status: "Planned", color: "#7ec8e3" },
    { num: 4, title: "AI Tools Explained Simply", status: "Planned", color: "#7ec8e3" },
    { num: 5, title: "AI Agents, Connectors, and MCP", status: "Planned", color: "#7ec8e3" },
    { num: 6, title: "Can AI Make You Money?", status: "Research", color: "#f4d58d" },
    { num: 7, title: "Will AI Replace Jobs?", status: "Research", color: "#f4d58d" },
    { num: 8, title: "How Businesses Should Integrate AI", status: "Research", color: "#f4d58d" },
    { num: 9, title: "How Lawyers Can Use AI", status: "Research", color: "#f4d58d" },
    { num: 10, title: "Human Judgement vs AI Output", status: "Concept", color: "#c297ff" }
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Series Roadmap Board</h2>
        <p className="text-white/50">C4Sight episode ecosystem</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {episodes.map((ep) => (
          <div key={ep.num} className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-white/90" style={{ backgroundColor: `${ep.color}20`, border: `2px solid ${ep.color}` }}>
                  {ep.num}
                </div>
                <div>
                  <div className="px-2 py-0.5 rounded text-xs mb-2" style={{ backgroundColor: `${ep.color}20`, color: ep.color }}>
                    {ep.status}
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-white/90 leading-tight">{ep.title}</h3>
          </div>
        ))}
      </div>

      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-3">Series Strategy</h3>
        <div className="grid grid-cols-2 gap-6 text-white/70">
          <div>
            <p className="text-white/90 mb-2">Target Audience</p>
            <p className="text-sm">Everyday people, students, professionals, small businesses. No prior AI knowledge assumed.</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Content Approach</p>
            <p className="text-sm">Start broad (what is AI), then narrow to practical use cases, then expand to implications.</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Visual Consistency</p>
            <p className="text-sm">Same character system, prop library, and scene archetypes across all episodes.</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Release Cadence</p>
            <p className="text-sm">Weekly or bi-weekly releases. Build audience through consistent quality and scheduling.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Future Episode Ideas</h3>
        <div className="grid grid-cols-3 gap-3">
          {["AI for Students", "AI for Writers", "AI for Designers", "Understanding LLMs", "AI Ethics Simply", "Local vs Cloud AI"].map((idea) => (
            <div key={idea} className="px-3 py-2 bg-white/5 border border-white/10 rounded text-white/70 text-sm text-center">
              {idea}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
