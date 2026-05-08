export function StyleRules() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Style Rules</h2>
        <p className="text-white/50">Visual guidelines for C4Sight production</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Color Palette */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Color Palette</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#1a1a1a] border border-white/20 rounded" />
              <div>
                <p className="text-white/90">Chalkboard</p>
                <p className="text-white/50 font-mono">#1a1a1a</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#f5f5f0] rounded" />
              <div>
                <p className="text-white/90">Chalk White</p>
                <p className="text-white/50 font-mono">#f5f5f0</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#7ec8e3] rounded" />
              <div>
                <p className="text-white/90">Accent Blue</p>
                <p className="text-white/50 font-mono">#7ec8e3</p>
                <p className="text-white/40">Communication</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#8fce00] rounded" />
              <div>
                <p className="text-white/90">Accent Green</p>
                <p className="text-white/50 font-mono">#8fce00</p>
                <p className="text-white/40">Creative tasks</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#f4d58d] rounded" />
              <div>
                <p className="text-white/90">Accent Amber</p>
                <p className="text-white/50 font-mono">#f4d58d</p>
                <p className="text-white/40">Work tasks</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#c297ff] rounded" />
              <div>
                <p className="text-white/90">Accent Purple</p>
                <p className="text-white/50 font-mono">#c297ff</p>
                <p className="text-white/40">Code/technical</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Typography</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white/90 mb-2">Titles</p>
              <div className="text-white/70 space-y-1">
                <p>System UI / Sans-serif</p>
                <p>Weight: 300-400 (Light/Regular)</p>
                <p>Hand-drawn feel via animation</p>
              </div>
            </div>
            <div>
              <p className="text-white/90 mb-2">Body Text</p>
              <div className="text-white/70 space-y-1">
                <p>System UI / Sans-serif</p>
                <p>Weight: 400 (Regular)</p>
                <p>Clean, readable for subtitles</p>
              </div>
            </div>
            <div>
              <p className="text-white/90 mb-2">Chalk Draw Effect</p>
              <div className="text-white/70 space-y-1">
                <p>Animate stroke-dasharray for text reveal</p>
                <p>Slight imperfection in line weight</p>
                <p>No perfect geometric precision</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Style */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Visual Style</h3>
          <div className="space-y-3 text-white/70">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#8fce00] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Do:</span> Hand-drawn, sketch-like quality
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#8fce00] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Do:</span> Simple geometric forms for characters
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#8fce00] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Do:</span> Expressive poses and clear personality
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#8fce00] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Do:</span> Clean spacing and composition
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#ff6b6b] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Don't:</span> Neon colors or gradients
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#ff6b6b] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Don't:</span> Corporate SaaS visual language
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#ff6b6b] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Don't:</span> Generic AI blobs or abstract shapes
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#ff6b6b] rounded-full mt-1.5 flex-shrink-0" />
              <div>
                <span className="text-white/90">Don't:</span> Childish or overly simplified
              </div>
            </div>
          </div>
        </div>

        {/* Export Guidelines */}
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Export for Animation</h3>
          <div className="space-y-3 text-white/70">
            <div>
              <p className="text-white/90 mb-1">File Format</p>
              <p>SVG for vector assets, PNG for composites</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Layering</p>
              <p>Separate layers for: characters, props, background, text</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Naming Convention</p>
              <p className="font-mono">c4s_ep01_character_confident.svg</p>
              <p className="font-mono">c4s_ep01_prop_wand.svg</p>
              <p className="font-mono">c4s_ep01_frame01_bg.png</p>
            </div>
            <div>
              <p className="text-white/90 mb-1">Remotion Integration</p>
              <p>Assets ready for React-based animation</p>
              <p>Clean SVG paths for motion control</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Principles */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Animation Principles</h3>
        <div className="grid grid-cols-3 gap-6 text-white/70">
          <div>
            <p className="text-white/90 mb-2">Timing</p>
            <p>3-4 seconds per keyframe</p>
            <p>Quick transitions (0.3-0.5s)</p>
            <p>Hold for emphasis (1-2s)</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Character Motion</p>
            <p>Bouncy, friendly easing</p>
            <p>Slight squash & stretch</p>
            <p>Clear entrance/exit staging</p>
          </div>
          <div>
            <p className="text-white/90 mb-2">Text Reveal</p>
            <p>Chalk-draw effect (stroke animation)</p>
            <p>Word-by-word or letter-by-letter</p>
            <p>Sync with voiceover pacing</p>
          </div>
        </div>
      </div>

      {/* Production Notes */}
      <div className="bg-[#2a2a2a]/50 border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-3">Production Notes</h3>
        <div className="space-y-2 text-white/60">
          <p>
            <span className="text-white/90">Target Audience:</span> Everyday people, students, professionals, small businesses — not developers or AI experts.
          </p>
          <p>
            <span className="text-white/90">Tone:</span> Educational but approachable. Premium production quality. Explain complex concepts simply without being condescending.
          </p>
          <p>
            <span className="text-white/90">Platform:</span> YouTube primary. Optimize for 1080p, 16:9. Consider mobile viewing for text sizing.
          </p>
          <p>
            <span className="text-white/90">Series Consistency:</span> Reuse character poses and props across episodes. Build visual language that viewers recognize.
          </p>
        </div>
      </div>
    </section>
  );
}
