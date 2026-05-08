import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkBox, ChalkLine} from '../components/ChalkShapes';
import {ChalkText} from '../components/ChalkText';
import {
  C4SightFreezeBurst,
  C4SightUnderline,
} from '../components/C4SightCharacterSystem';
import {
  chaosToCalmReset,
  holdFrame,
  reactionBeat,
  writeOnText,
} from '../design-system/animation';
import {C4SightMascot} from '../design-system/characters';
import {c4sightTokens} from '../design-system/c4sightTokens';
import {C4SightCardProp, C4SightProp} from '../design-system/props';
import {RoadmapScene, TeachingDiagramScene} from '../design-system/scenes';
import {videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const c4SightDesignSystemPreviewDurationSeconds = 36;

const PreviewTitle = ({
  children,
  startFrame,
}: {
  children: string;
  startFrame: number;
}) => (
  <div className="c4-ds-preview-title">
    <ChalkText {...writeOnText(startFrame, 22)}>{children}</ChalkText>
  </div>
);

const CharacterPanel = () => {
  const poses = [
    'neutral',
    'confident',
    'confused',
    'sad',
    'overwhelmed',
    'excited',
    'presenting',
    'holdingProp',
  ] as const;

  return (
    <section className="c4-ds-preview-panel" style={holdFrame(useCurrentFrame(), 0, sec(7))}>
      <PreviewTitle startFrame={0}>CharacterBible → Mascot poses</PreviewTitle>
      <div className="c4-ds-preview-pose-row">
        {poses.map((pose, index) => (
          <div className="c4-ds-preview-pose" key={pose}>
            <C4SightMascot
              pose={pose}
              x={0}
              y={0}
              startFrame={8 + index * 4}
              scale={0.44}
              prop={
                pose === 'holdingProp' ? (
                  <C4SightProp kind="wand" x={0} y={0} startFrame={32} scale={0.32} />
                ) : undefined
              }
            />
            <span>{pose}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const PropPanel = () => (
  <section className="c4-ds-preview-panel" style={holdFrame(useCurrentFrame(), sec(7), sec(14))}>
    <PreviewTitle startFrame={sec(7)}>PropLibrary + IconSystem</PreviewTitle>
    <C4SightProp kind="wand" x={170} y={280} startFrame={sec(7.4)} scale={0.62} rotation={-18} />
    <C4SightProp kind="saucepan" x={410} y={286} startFrame={sec(7.7)} scale={0.74} />
    <C4SightProp kind="bucket" x={690} y={270} startFrame={sec(8.0)} scale={0.62} />
    <C4SightProp kind="laptop" x={970} y={278} startFrame={sec(8.3)} scale={0.82} />
    <C4SightProp kind="magnifyingGlass" x={1330} y={282} startFrame={sec(8.6)} scale={0.9} />
    <C4SightProp kind="warningIcon" x={1532} y={305} startFrame={sec(8.9)} scale={0.8} />
    <C4SightProp kind="eraser" x={1560} y={530} startFrame={sec(9.2)} scale={0.72} />
    {[
      ['emailCard', 180, 620],
      ['websiteCard', 410, 620],
      ['assignmentCard', 650, 620],
      ['codeCard', 920, 620],
      ['imageCard', 1150, 620],
      ['summaryCard', 1380, 620],
      ['businessIdeaCard', 1560, 620],
    ].map(([kind, x, y], index) => (
      <C4SightProp
        key={kind}
        kind={kind as Parameters<typeof C4SightProp>[0]['kind']}
        x={Number(x)}
        y={Number(y)}
        startFrame={sec(9.4) + index * 5}
      />
    ))}
  </section>
);

const SceneSystemPanel = () => {
  const scenes = [
    'HookQuestionScene',
    'ControlledChaosScene',
    'CorrectionScene',
    'WalkOffGagScene',
    'ReturnRevealScene',
    'OverwhelmScene',
    'SlowDownResetScene',
    'TeachingDiagramScene',
    'MythRealityScene',
    'WarningScene',
    'RoadmapScene',
    'OutroScene',
  ];

  return (
    <section className="c4-ds-preview-panel" style={holdFrame(useCurrentFrame(), sec(14), sec(22))}>
      <PreviewTitle startFrame={sec(14)}>SceneSystem → approved archetypes</PreviewTitle>
      <div className="c4-ds-preview-scene-grid">
        {scenes.map((scene, index) => (
          <div className="c4-ds-preview-scene-card" key={scene}>
            <svg viewBox="0 0 360 118" aria-hidden="true">
              <ChalkBox
                x={8}
                y={8}
                width={344}
                height={96}
                startFrame={sec(14.6) + index * 3}
                durationFrames={18}
                seed={2300 + index}
                tone={index % 2 === 0 ? 'primary' : 'muted'}
                strokeWidth={5}
              />
            </svg>
            <ChalkText startFrame={sec(14.8) + index * 3} durationFrames={14}>
              {scene}
            </ChalkText>
          </div>
        ))}
      </div>
    </section>
  );
};

const AnimationGrammarPanel = () => {
  const frame = useCurrentFrame();
  const reaction = reactionBeat(frame, sec(23.8));
  const reset = chaosToCalmReset(frame, sec(27.2));

  return (
    <section className="c4-ds-preview-panel" style={holdFrame(frame, sec(22), sec(30))}>
      <PreviewTitle startFrame={sec(22)}>AnimationGrammar → timing helpers</PreviewTitle>
      <div className="c4-ds-preview-grammar-row">
        <div>
          <ChalkText startFrame={sec(22.7)} durationFrames={24}>writeOnText</ChalkText>
          <C4SightUnderline x={238} y={420} width={250} startFrame={sec(23.3)} durationFrames={18} />
        </div>
        <svg viewBox="0 0 420 180" aria-hidden="true">
          <ChalkLine
            d="M 36 92 C 118 54, 226 130, 368 78"
            startFrame={sec(23.0)}
            durationFrames={28}
            strokeWidth={6}
            tone="accent"
          />
        </svg>
        <div style={{transform: `translateY(${reaction.y}px) rotate(${reaction.rotation}deg)`}}>
          <C4SightMascot pose="excited" x={0} y={0} startFrame={sec(23.7)} scale={0.5} />
        </div>
        <C4SightFreezeBurst x={1190} y={350} startFrame={sec(24.8)} />
      </div>
      <div className="c4-ds-preview-reset-demo" style={{opacity: reset.chaosOpacity}}>
        <ChalkText startFrame={sec(25.8)} durationFrames={22}>chaos</ChalkText>
        <C4SightProp kind="poof" x={900} y={690} startFrame={sec(26.4)} />
      </div>
      <div className="c4-ds-preview-calm-demo" style={{opacity: reset.calmOpacity}}>
        <ChalkText startFrame={sec(27.4)} durationFrames={18}>calm reset</ChalkText>
      </div>
    </section>
  );
};

export const C4SightDesignSystemPreview = () => (
  <AbsoluteFill>
    <ChalkFilters />
    <BlackboardBackground />
    <div className="c4-ds-preview-watermark">
      Figma Make governed · {c4sightTokens.source.figmaMakeFileKey}
    </div>
    <CharacterPanel />
    <PropPanel />
    <SceneSystemPanel />
    <AnimationGrammarPanel />
    <TeachingDiagramScene startFrame={sec(30)} endFrame={sec(33)} />
    <RoadmapScene startFrame={sec(33)} endFrame={sec(36)} />
  </AbsoluteFill>
);
