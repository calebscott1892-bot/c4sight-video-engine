export function BrandBoard() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Series Art Direction / Brand Board</h2>
        <p className="text-white/50">Core visual identity for C4Sight series</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Brand Essence */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Brand Essence</h3>
          <div className="space-y-2 text-white/70">
            <p><span className="text-white/90">•</span> Clear, practical, balanced</p>
            <p><span className="text-white/90">•</span> No hype or fear-mongering</p>
            <p><span className="text-white/90">•</span> Educational but approachable</p>
            <p><span className="text-white/90">•</span> Intelligent without being condescending</p>
          </div>
        </div>

        {/* Tone */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Series Tone</h3>
          <div className="space-y-2 text-white/70">
            <p><span className="text-white/90">•</span> Educational</p>
            <p><span className="text-white/90">•</span> Playful but intelligent</p>
            <p><span className="text-white/90">•</span> Calm under pressure</p>
            <p><span className="text-white/90">•</span> Human and relatable</p>
          </div>
        </div>

        {/* Visual Keywords */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6 col-span-2">
          <h3 className="text-white/90 mb-4">Visual Keywords</h3>
          <div className="flex flex-wrap gap-3">
            {["Chalkboard", "Human", "Clever", "Expressive", "Controlled Chaos", "Teaching Clarity", "Premium", "Intentional"].map((keyword) => (
              <span key={keyword} className="px-4 py-2 bg-white/5 border border-white/20 rounded text-white/80">
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* What We Are NOT */}
        <div className="bg-[#2a2a2a] border border-[#ff6b6b]/30 rounded-lg p-6 col-span-2">
          <h3 className="text-white/90 mb-4">What C4Sight is NOT</h3>
          <div className="flex flex-wrap gap-3">
            {["Corporate SaaS", "Neon AI", "Glossy Gradients", "Abstract Blobs", "Childish Clipart", "Generic Tech", "Overhyped"].map((anti) => (
              <span key={anti} className="px-4 py-2 bg-[#ff6b6b]/10 border border-[#ff6b6b]/40 rounded text-[#ff6b6b]/90 line-through">
                {anti}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Chalk Palette */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Recommended Chalk Palette</h3>
        <div className="grid grid-cols-6 gap-6">
          <div className="space-y-2">
            <div className="aspect-square bg-[#f5f5f0] rounded border border-white/20" />
            <p className="text-white/90">Chalk White</p>
            <p className="text-white/50 font-mono text-sm">#f5f5f0</p>
            <p className="text-white/40 text-sm">Primary</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square bg-[#7ec8e3] rounded" />
            <p className="text-white/90">Sky Blue</p>
            <p className="text-white/50 font-mono text-sm">#7ec8e3</p>
            <p className="text-white/40 text-sm">Communication</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square bg-[#8fce00] rounded" />
            <p className="text-white/90">Lime Green</p>
            <p className="text-white/50 font-mono text-sm">#8fce00</p>
            <p className="text-white/40 text-sm">Creative</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square bg-[#f4d58d] rounded" />
            <p className="text-white/90">Amber</p>
            <p className="text-white/50 font-mono text-sm">#f4d58d</p>
            <p className="text-white/40 text-sm">Work</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square bg-[#c297ff] rounded" />
            <p className="text-white/90">Purple</p>
            <p className="text-white/50 font-mono text-sm">#c297ff</p>
            <p className="text-white/40 text-sm">Code</p>
          </div>
          <div className="space-y-2">
            <div className="aspect-square bg-[#1a1a1a] rounded border border-white/20" />
            <p className="text-white/90">Dark Board</p>
            <p className="text-white/50 font-mono text-sm">#1a1a1a</p>
            <p className="text-white/40 text-sm">Background</p>
          </div>
        </div>
      </div>

      {/* Typography Styles */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Typography Style Guidance</h3>
        <div className="space-y-4">
          <div className="border-b border-white/10 pb-4">
            <p className="text-white/90 mb-2">Title Style</p>
            <p className="text-white/80 text-3xl" style={{ fontWeight: 300 }}>What is AI?</p>
            <p className="text-white/50 text-sm mt-1">System UI, Weight 300-400, Large size</p>
          </div>
          <div className="border-b border-white/10 pb-4">
            <p className="text-white/90 mb-2">Subtitle Style</p>
            <p className="text-white/70 text-lg">Supporting explanation or voiceover text</p>
            <p className="text-white/50 text-sm mt-1">System UI, Weight 400, Medium size</p>
          </div>
          <div className="border-b border-white/10 pb-4">
            <p className="text-white/90 mb-2">Handwritten Annotation</p>
            <p className="text-white/60 italic">← key point here!</p>
            <p className="text-white/50 text-sm mt-1">Italic, casual, emphasis only</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Caption Style</p>
            <p className="text-white/50 text-sm">Small detail or credit text</p>
            <p className="text-white/50 text-sm mt-1">System UI, Weight 400, Small size</p>
          </div>
        </div>
      </div>

      {/* Line Quality */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Line Quality Guidance</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="h-20 flex items-center justify-center bg-[#1a1a1a] rounded">
              <svg viewBox="0 0 100 40" className="w-full h-8">
                <line x1="10" y1="20" x2="90" y2="20" stroke="#f5f5f0" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-white/80">Main Outline</p>
            <p className="text-white/50 text-sm">2.5-3px stroke</p>
          </div>
          <div className="space-y-3">
            <div className="h-20 flex items-center justify-center bg-[#1a1a1a] rounded">
              <svg viewBox="0 0 100 40" className="w-full h-8">
                <line x1="10" y1="20" x2="90" y2="20" stroke="#f5f5f0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
            <p className="text-white/80">Secondary Line</p>
            <p className="text-white/50 text-sm">1.5-2px stroke</p>
          </div>
          <div className="space-y-3">
            <div className="h-20 flex items-center justify-center bg-[#1a1a1a] rounded">
              <svg viewBox="0 0 100 40" className="w-full h-8">
                <line x1="10" y1="20" x2="90" y2="20" stroke="#7ec8e3" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" />
              </svg>
            </div>
            <p className="text-white/80">Annotation</p>
            <p className="text-white/50 text-sm">Dashed, colored</p>
          </div>
          <div className="space-y-3">
            <div className="h-20 flex items-center justify-center bg-[#1a1a1a] rounded">
              <svg viewBox="0 0 100 40" className="w-full h-8">
                <line x1="10" y1="15" x2="90" y2="15" stroke="#f4d58d" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="10" y1="25" x2="90" y2="25" stroke="#f4d58d" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="text-white/80">Emphasis</p>
            <p className="text-white/50 text-sm">Double underline</p>
          </div>
        </div>
      </div>

      {/* Texture & Grain */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Texture / Grain Guidance</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="space-y-3">
            <div className="h-24 bg-[#1a1a1a] rounded border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                backgroundSize: '200px 200px'
              }} />
            </div>
            <p className="text-white/80">Board Texture</p>
            <p className="text-white/50 text-sm">Subtle noise overlay</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-[#1a1a1a] rounded border border-white/10 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full blur-xl" />
            </div>
            <p className="text-white/80">Chalk Dust</p>
            <p className="text-white/50 text-sm">Soft blur accent</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-[#1a1a1a] rounded border border-white/10 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/4 w-12 h-8 bg-white/3 rounded-full blur-md transform -rotate-12" />
            </div>
            <p className="text-white/80">Eraser Smear</p>
            <p className="text-white/50 text-sm">Faint streak</p>
          </div>
          <div className="space-y-3">
            <div className="h-24 bg-[#1a1a1a] rounded border border-white/10 relative overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 60 60" className="w-16 h-16">
                <line x1="10" y1="30" x2="50" y2="30" stroke="#f5f5f0" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="10" y1="30.5" x2="50" y2="30.5" stroke="#f5f5f0" strokeWidth="0.5" opacity="0.3" />
              </svg>
            </div>
            <p className="text-white/80">Line Imperfection</p>
            <p className="text-white/50 text-sm">Slight variation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
