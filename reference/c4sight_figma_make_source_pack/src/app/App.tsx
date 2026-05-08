import { BrandBoard } from "./components/BrandBoard";
import { CharacterBible } from "./components/CharacterBible";
import { PropLibrary } from "./components/PropLibrary";
import { IconSystem } from "./components/IconSystem";
import { SceneSystem } from "./components/SceneSystem";
import { AnimationGrammar } from "./components/AnimationGrammar";
import { EpisodeStoryboard } from "./components/EpisodeStoryboard";
import { SeriesRoadmap } from "./components/SeriesRoadmap";
import { ExportSpec } from "./components/ExportSpec";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] p-8">
      <div className="max-w-[1920px] mx-auto space-y-16">
        {/* Header */}
        <header className="border-b border-white/20 pb-6">
          <h1 className="text-white/95 mb-2">C4Sight Production Design System</h1>
          <p className="text-white/60">Premium Educational AI YouTube Series — Complete Animation Package</p>
        </header>

        {/* 1. Series Art Direction / Brand Board */}
        <BrandBoard />

        {/* 2. Character Bible */}
        <CharacterBible />

        {/* 3. Prop / Object Library */}
        <PropLibrary />

        {/* 4. Icon / Symbol System */}
        <IconSystem />

        {/* 5. Shot / Scene System */}
        <SceneSystem />

        {/* 6. Animation Grammar Board */}
        <AnimationGrammar />

        {/* 7. Episode 01 Storyboard */}
        <EpisodeStoryboard />

        {/* 8. Series Roadmap Board */}
        <SeriesRoadmap />

        {/* 9. Export / Handoff Spec */}
        <ExportSpec />

        {/* Footer */}
        <footer className="border-t border-white/20 pt-6 pb-8 text-center">
          <p className="text-white/50 text-sm">C4Sight Production Board • Premium Educational Animation System</p>
          <p className="text-white/40 text-xs mt-2">Ready for Remotion animation export</p>
        </footer>
      </div>
    </div>
  );
}