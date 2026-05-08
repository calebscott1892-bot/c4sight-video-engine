export function ExportSpec() {
  const assetTypes = [
    { type: "Characters", format: "SVG", structure: "Layered", naming: "mascot_[pose]" },
    { type: "Props", format: "SVG", structure: "Individual", naming: "prop_[name]" },
    { type: "Icons", format: "SVG", structure: "Individual", naming: "icon_[function]" },
    { type: "Scenes", format: "PNG/SVG", structure: "Composite", naming: "scene_[type]" },
    { type: "Backgrounds", format: "PNG", structure: "Flat", naming: "bg_[variant]" },
    { type: "Effects", format: "SVG", structure: "Individual", naming: "fx_[effect]" }
  ];

  const characterExamples = [
    "mascot_confident.svg",
    "mascot_overwhelmed.svg",
    "mascot_teaching.svg",
    "mascot_walking.svg",
    "mascot_excited.svg"
  ];

  const propExamples = [
    "prop_wand.svg",
    "prop_email_card.svg",
    "prop_laptop.svg",
    "prop_bucket.svg",
    "prop_warning_icon.svg"
  ];

  const sceneExamples = [
    "scene_hook_question.svg",
    "scene_chaos_montage.svg",
    "scene_teaching_calm.svg",
    "scene_warning_hallucination.svg",
    "scene_comparison_split.svg"
  ];

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-white/95 mb-1">Export / Handoff Specification</h2>
        <p className="text-white/50">Production-ready asset structure for Remotion</p>
      </div>

      {/* Asset Type Table */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-white/90">Asset Type</th>
              <th className="text-left p-4 text-white/90">Format</th>
              <th className="text-left p-4 text-white/90">Structure</th>
              <th className="text-left p-4 text-white/90">Naming Convention</th>
            </tr>
          </thead>
          <tbody>
            {assetTypes.map((asset, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                <td className="p-4 text-white/80">{asset.type}</td>
                <td className="p-4 text-white/70 font-mono text-sm">{asset.format}</td>
                <td className="p-4 text-white/70">{asset.structure}</td>
                <td className="p-4 text-white/60 font-mono text-sm">{asset.naming}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Naming Examples */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Character Naming</h3>
          <div className="space-y-2 font-mono text-sm">
            {characterExamples.map((name) => (
              <div key={name} className="text-white/70 flex items-center gap-2">
                <div className="w-2 h-2 bg-green/60 rounded-full flex-shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Prop Naming</h3>
          <div className="space-y-2 font-mono text-sm">
            {propExamples.map((name) => (
              <div key={name} className="text-white/70 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue/60 rounded-full flex-shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
          <h3 className="text-white/90 mb-4">Scene Naming</h3>
          <div className="space-y-2 font-mono text-sm">
            {sceneExamples.map((name) => (
              <div key={name} className="text-white/70 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber/60 rounded-full flex-shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layered Asset Structure */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Layered Asset Structure</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-white/80 mb-3">Character Components</p>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Body (ellipse)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Head (circle)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Eyes (separate layer)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Antenna (separate layer)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Mouth (separate layer)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Arms/Legs (separate lines)</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white/80 mb-3">Scene Components</p>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Background layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Character layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Props layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Text/subtitle layer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-white/30" />
                <span>Effects layer (optional)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Guidelines */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Export Guidelines for Remotion</h3>
        <div className="space-y-3 text-white/70">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green/60 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <span className="text-white/90">SVG Optimization:</span> Clean paths, no unnecessary groups, maintain viewBox consistency
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green/60 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <span className="text-white/90">Grouped Elements:</span> Keep related elements grouped for easier animation control
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green/60 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <span className="text-white/90">Component Naming:</span> Use descriptive IDs for paths and groups (e.g., id="antenna", id="left-arm")
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green/60 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <span className="text-white/90">Consistent Dimensions:</span> Character assets at 120×160px, Props at 60×60px, Scenes at 1920×1080px
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green/60 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <span className="text-white/90">Stroke-based:</span> Use strokes not fills for chalk-draw animations (strokeDasharray/strokeDashoffset)
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green/60 rounded-full mt-1.5 flex-shrink-0" />
            <div>
              <span className="text-white/90">Color Variables:</span> Reference CSS variables for colors to maintain brand consistency
            </div>
          </div>
        </div>
      </div>

      {/* File Organization */}
      <div className="bg-[#2a2a2a] border border-white/10 rounded-lg p-6">
        <h3 className="text-white/90 mb-4">Recommended File Organization</h3>
        <div className="font-mono text-sm space-y-1 text-white/70">
          <div>/assets</div>
          <div className="pl-4">/characters</div>
          <div className="pl-8">mascot_confident.svg</div>
          <div className="pl-8">mascot_confused.svg</div>
          <div className="pl-8">...</div>
          <div className="pl-4">/props</div>
          <div className="pl-8">/everyday</div>
          <div className="pl-12">prop_email_card.svg</div>
          <div className="pl-8">/comedic</div>
          <div className="pl-12">prop_wand.svg</div>
          <div className="pl-8">/teaching</div>
          <div className="pl-12">prop_data_card.svg</div>
          <div className="pl-4">/icons</div>
          <div className="pl-8">icon_writing.svg</div>
          <div className="pl-8">icon_coding.svg</div>
          <div className="pl-4">/scenes</div>
          <div className="pl-8">scene_hook_question.svg</div>
          <div className="pl-8">scene_teaching_calm.svg</div>
          <div className="pl-4">/backgrounds</div>
          <div className="pl-8">bg_chalkboard.png</div>
        </div>
      </div>
    </section>
  );
}
