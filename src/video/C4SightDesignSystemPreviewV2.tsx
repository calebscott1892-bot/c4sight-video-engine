import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {ChalkFilters} from '../components/ChalkFilters';
import {
  ChalkCircleHighlight,
  ChalkCrossOut,
  ChalkUnderline,
} from '../components/ChalkAnnotations';
import {ChalkArrow, ChalkBox, ChalkLine} from '../components/ChalkShapes';
import {
  chaosToCalmReset,
  holdFrame,
  popInProp,
  stackedOverwhelm,
} from '../design-system/animation';
import {C4SightMascot, type C4SightMascotPose} from '../design-system/characters';
import {c4sightTokens} from '../design-system/c4sightTokens';
import {
  C4SightCardProp,
  C4SightIconSymbol,
  C4SightProp,
  type C4SightIconKind,
  type C4SightPropKind,
} from '../design-system/props';
import {videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const c4SightDesignSystemPreviewV2DurationSeconds = 40;

const SectionHeader = ({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) => (
  <>
    <div className="c4-ds-v2-kicker">{kicker}</div>
    <div className="c4-ds-v2-title">{title}</div>
    <div className="c4-ds-v2-subtitle">{subtitle}</div>
  </>
);

const CharacterPanel = () => {
  const frame = useCurrentFrame();
  const poses: Array<{pose: C4SightMascotPose; label: string; x: number; y: number; scale: number}> = [
    {pose: 'confident', label: 'confident', x: 54, y: 28, scale: 1.02},
    {pose: 'confused', label: 'confused', x: 52, y: 32, scale: 1.02},
    {pose: 'sad', label: 'sad', x: 52, y: 30, scale: 1.02},
    {pose: 'overwhelmed', label: 'overwhelmed', x: 48, y: 22, scale: 1.04},
    {pose: 'excited', label: 'excited', x: 52, y: 26, scale: 1.04},
    {pose: 'presenting', label: 'presenting', x: 50, y: 28, scale: 1.02},
  ];

  return (
    <section className="c4-ds-v2-panel" style={holdFrame(frame, 0, sec(7))}>
      <SectionHeader
        kicker="CharacterBible"
        title="Mascot acting system from the Figma source"
        subtitle="120×160 chalk character, simple silhouette, expressive eyes/antenna, no random one-off poses."
      />
      <div className="c4-ds-v2-pose-stage">
        {poses.map((item, index) => {
          const itemStart = -18 + index * 2;
          const beat = popInProp(frame, itemStart, 10);

          return (
            <div
              className="c4-ds-v2-pose-tile"
              key={item.pose}
              style={{
                opacity: beat.opacity,
                transform: `scale(${beat.scale}) rotate(${beat.rotation}deg)`,
              }}
            >
              <C4SightMascot
                pose={item.pose}
                x={item.x}
                y={item.y}
                startFrame={itemStart}
                scale={item.scale}
              />
              {item.pose === 'overwhelmed' ? (
                <>
                  <C4SightCardProp kind="codeCard" x={0} y={20} width={128} label="Code" startFrame={18} rotation={-9} scale={0.72} />
                  <C4SightCardProp kind="summaryCard" x={104} y={42} width={142} label="Docs" startFrame={20} rotation={8} scale={0.72} />
                </>
              ) : null}
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
      <div className="c4-ds-v2-caption-zone">
        Source rules: head radius 18, body 22×28, main outline 2.5–3px, details 1.5–2px.
      </div>
    </section>
  );
};

const PropPanel = () => {
  const frame = useCurrentFrame();
  const props: Array<{kind: C4SightPropKind; label: string; x?: number; y?: number; scale?: number; rotation?: number}> = [
    {kind: 'wand', label: 'Magic wand', scale: 1.05, rotation: -18},
    {kind: 'saucepan', label: 'Saucepan gag', scale: 1.08},
    {kind: 'bucket', label: 'Bucket gag', scale: 1.08},
    {kind: 'laptop', label: 'Laptop', scale: 1.1},
    {kind: 'magnifyingGlass', label: 'Verification', scale: 1.08},
    {kind: 'emailCard', label: 'Email card'},
    {kind: 'websiteCard', label: 'Website card'},
    {kind: 'assignmentCard', label: 'Assignment card'},
    {kind: 'codeCard', label: 'Code card'},
    {kind: 'businessIdeaCard', label: 'Business idea'},
  ];

  return (
    <section className="c4-ds-v2-panel" style={holdFrame(frame, sec(7), sec(14))}>
      <SectionHeader
        kicker="PropLibrary + IconSystem"
        title="Reusable chalk props, not ad hoc SVG doodles"
        subtitle="Cards use Figma colour coding: blue communication, green creative, amber work, purple code."
      />
      <div className="c4-ds-v2-prop-grid">
        {props.map((item, index) => {
          const tileStart = sec(7) + index * 4;

          return (
            <div className="c4-ds-v2-prop-tile" key={`${item.kind}-${item.label}`}>
              <C4SightProp
                kind={item.kind}
                x={item.kind.endsWith('Card') ? 34 : 102}
                y={item.kind.endsWith('Card') ? 38 : 18}
                startFrame={tileStart}
                scale={item.kind.endsWith('Card') ? 0.78 : item.scale ?? 1}
                rotation={item.rotation ?? 0}
              />
              <div className="c4-ds-v2-prop-tile-label">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const SceneThumb = ({type}: {type: 'hook' | 'chaos' | 'correction' | 'flow' | 'warning' | 'roadmap' | 'myth' | 'outro'}) => {
  const commonStart = sec(14.2);

  return (
    <div className="c4-ds-v2-scene-thumb">
      <div className="c4-ds-v2-layout-guide" />
      {type === 'hook' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Hook / Opening</div>
          <C4SightMascot pose="confident" x={160} y={76} startFrame={commonStart} scale={0.5} />
          <C4SightProp kind="wand" x={256} y={74} startFrame={commonStart + 4} scale={0.48} rotation={-16} />
          <C4SightProp kind="spark" x={316} y={54} startFrame={commonStart + 8} scale={0.4} />
          <svg viewBox="0 0 430 236" className="c4-ds-scene-ink" aria-hidden="true">
            <ChalkLine d="M 52 78 C 108 70, 158 76, 205 72" startFrame={commonStart} durationFrames={18} strokeWidth={3} tone="accent" />
          </svg>
        </>
      ) : null}
      {type === 'chaos' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Controlled Chaos</div>
          <C4SightMascot pose="overwhelmed" x={158} y={76} startFrame={commonStart} scale={0.48} />
          <C4SightCardProp kind="emailCard" x={26} y={74} width={128} label="Email" startFrame={commonStart + 4} rotation={-8} scale={0.78} />
          <C4SightCardProp kind="codeCard" x={286} y={80} width={126} label="Code" startFrame={commonStart + 8} rotation={7} scale={0.78} />
          <C4SightCardProp kind="imageCard" x={86} y={148} width={128} label="Image" startFrame={commonStart + 12} rotation={4} scale={0.74} />
        </>
      ) : null}
      {type === 'correction' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Correction</div>
          <C4SightProp kind="wand" x={150} y={80} startFrame={commonStart} scale={0.52} rotation={18} />
          <ChalkCrossOut x={142} y={66} width={140} height={110} startFrame={commonStart + 8} durationFrames={16} />
          <C4SightMascot pose="confused" x={302} y={96} startFrame={commonStart + 6} scale={0.34} />
        </>
      ) : null}
      {type === 'flow' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Flow Diagram</div>
          <svg viewBox="0 0 430 236" className="c4-ds-scene-ink" aria-hidden="true">
            <ChalkBox x={34} y={94} width={86} height={48} startFrame={commonStart} durationFrames={18} seed={5101} strokeWidth={3} />
            <ChalkArrow from={{x: 132, y: 118}} to={{x: 180, y: 118}} startFrame={commonStart + 8} durationFrames={14} strokeWidth={3} />
            <ChalkBox x={196} y={86} width={90} height={64} startFrame={commonStart + 14} durationFrames={18} seed={5102} strokeWidth={3} tone="muted" />
            <ChalkArrow from={{x: 298, y: 118}} to={{x: 344, y: 118}} startFrame={commonStart + 22} durationFrames={14} strokeWidth={3} />
            <ChalkBox x={354} y={94} width={58} height={48} startFrame={commonStart + 28} durationFrames={18} seed={5103} strokeWidth={3} />
          </svg>
        </>
      ) : null}
      {type === 'warning' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Warning / Caution</div>
          <C4SightProp kind="magnifyingGlass" x={96} y={72} startFrame={commonStart} scale={0.62} />
          <C4SightProp kind="warningIcon" x={236} y={74} startFrame={commonStart + 6} scale={0.62} />
          <C4SightProp kind="checklist" x={314} y={102} startFrame={commonStart + 12} scale={0.4} />
        </>
      ) : null}
      {type === 'roadmap' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Roadmap</div>
          {['1', '2', '3', '4'].map((label, index) => (
            <C4SightCardProp
              key={label}
              kind="summaryCard"
              x={30 + index * 94}
              y={106}
              width={72}
              label={label}
              startFrame={commonStart + index * 5}
              scale={0.78}
            />
          ))}
        </>
      ) : null}
      {type === 'myth' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Myth vs Reality</div>
          <C4SightCardProp kind="summaryCard" x={46} y={104} width={128} label="Myth" startFrame={commonStart} scale={0.76} />
          <C4SightCardProp kind="summaryCard" x={250} y={104} width={128} label="Reality" startFrame={commonStart + 8} scale={0.76} />
          <ChalkCrossOut x={50} y={102} width={100} height={54} startFrame={commonStart + 16} durationFrames={16} />
          <ChalkCircleHighlight cx={300} cy={128} rx={60} ry={35} startFrame={commonStart + 20} durationFrames={16} />
        </>
      ) : null}
      {type === 'outro' ? (
        <>
          <div className="c4-ds-v2-scene-thumb-title">Outro / Signoff</div>
          <div style={{position: 'absolute', left: 118, top: 78, color: 'var(--chalk)', fontSize: 46, fontWeight: 850, filter: 'url(#chalk-rough-text)'}}>C4Sight</div>
          <svg viewBox="0 0 430 236" className="c4-ds-scene-ink" aria-hidden="true">
            <ChalkLine d="M 116 144 C 174 136, 248 152, 314 142" startFrame={commonStart + 8} durationFrames={18} strokeWidth={3} tone="accent" />
          </svg>
        </>
      ) : null}
    </div>
  );
};

const SceneSystemPanel = () => {
  const frame = useCurrentFrame();

  return (
    <section className="c4-ds-v2-panel" style={holdFrame(frame, sec(14), sec(22))}>
      <SectionHeader
        kicker="SceneSystem"
        title="Scene archetypes with clear zones and hierarchy"
        subtitle="Title zone, character zone, prop zone, subtitle zone, and inner 90% safe area are visible in every thumbnail."
      />
      <div className="c4-ds-v2-scene-grid">
        {(['hook', 'chaos', 'correction', 'flow', 'warning', 'roadmap', 'myth', 'outro'] as const).map((type) => (
          <SceneThumb key={type} type={type} />
        ))}
      </div>
    </section>
  );
};

const GrammarPanel = () => {
  const frame = useCurrentFrame();
  const reset = chaosToCalmReset(frame, sec(28.4), 30);
  const grammarStart = sec(22);
  const iconKinds: C4SightIconKind[] = ['writing', 'summarising', 'coding', 'researching'];

  return (
    <section className="c4-ds-v2-panel" style={holdFrame(frame, sec(22), sec(30))}>
      <SectionHeader
        kicker="AnimationGrammar"
        title="Movement is used for emphasis, not constant noise"
        subtitle="Draw-on strokes, reaction beats, stacked overwhelm, and calm reset are codified helpers."
      />
      <div className="c4-ds-v2-grammar-row">
        <div className="c4-ds-v2-grammar-tile">
          <svg viewBox="0 0 360 260" className="c4-ds-scene-ink" aria-hidden="true">
            <ChalkLine d="M 58 94 C 128 72, 224 124, 300 88" startFrame={grammarStart + 6} durationFrames={26} strokeWidth={5} />
            <ChalkUnderline x={72} y={135} width={210} startFrame={grammarStart + 24} durationFrames={18} />
          </svg>
          <div className="c4-ds-v2-grammar-label">draw-on + underline</div>
        </div>
        <div className="c4-ds-v2-grammar-tile">
          <C4SightMascot pose="confused" x={124} y={52} startFrame={grammarStart + 8} scale={0.78} />
          <ChalkCircleHighlight cx={180} cy={96} rx={72} ry={58} startFrame={grammarStart + 22} durationFrames={18} />
          <div className="c4-ds-v2-grammar-label">circle focus</div>
        </div>
        <div className="c4-ds-v2-grammar-tile">
          <C4SightProp kind="wand" x={128} y={56} startFrame={grammarStart + 8} scale={0.76} rotation={14} />
          <ChalkCrossOut x={110} y={52} width={150} height={120} startFrame={grammarStart + 22} durationFrames={16} />
          <div className="c4-ds-v2-grammar-label">cross-out correction</div>
        </div>
        <div className="c4-ds-v2-grammar-tile">
          {iconKinds.map((kind, index) => {
            const stack = stackedOverwhelm(frame, grammarStart + 10, index);

            return (
              <div
                key={kind}
                style={{
                  position: 'absolute',
                  left: 82 + index * 52,
                  top: 58 + index * 16 + stack.y,
                  width: 74,
                  height: 74,
                  opacity: stack.opacity,
                  transform: `rotate(${stack.rotation}deg)`,
                }}
              >
                <C4SightIconSymbol kind={kind} startFrame={grammarStart + 10 + index * 5} size={74} />
              </div>
            );
          })}
          <div className="c4-ds-v2-grammar-label">stacked overwhelm</div>
        </div>
      </div>
      <div className="c4-ds-v2-reset-word" style={{opacity: reset.calmOpacity}}>
        calm reset
      </div>
    </section>
  );
};

const OverwhelmResetPanel = () => {
  const frame = useCurrentFrame();
  const panelStart = sec(30);
  const reset = chaosToCalmReset(frame, sec(35), 28);
  const cards = [
    {kind: 'emailCard' as const, label: 'Writing', x: 210, y: 96, rotation: -8},
    {kind: 'summaryCard' as const, label: 'Summaries', x: 425, y: 170, rotation: 5},
    {kind: 'codeCard' as const, label: 'Coding', x: 620, y: 88, rotation: 7},
    {kind: 'imageCard' as const, label: 'Images', x: 835, y: 172, rotation: -5},
    {kind: 'assignmentCard' as const, label: 'Planning', x: 1010, y: 98, rotation: 6},
    {kind: 'businessIdeaCard' as const, label: 'Workflows', x: 1170, y: 190, rotation: -4},
  ];

  return (
    <section className="c4-ds-v2-panel" style={holdFrame(frame, sec(30), sec(37))}>
      <SectionHeader
        kicker="OverwhelmScene → SlowDownResetScene"
        title="Escalate, then deliberately drop the energy"
        subtitle="The mascot gets buried by capability cards; the reset clears the board and returns to one question."
      />
      <div className="c4-ds-v2-overwhelm-stage" style={{opacity: reset.chaosOpacity}}>
        <C4SightMascot pose="overwhelmed" x={730} y={140} startFrame={panelStart - 8} scale={1.15} />
        {cards.map((card, index) => {
          const cardStart = panelStart - 6 + index * 3;
          const stack = stackedOverwhelm(frame, panelStart - 6, index, 12);

          return (
            <div
              key={card.label}
              style={{
                position: 'absolute',
                left: card.x,
                top: card.y + stack.y,
                opacity: stack.opacity,
                transform: `rotate(${card.rotation + stack.rotation * 0.4}deg)`,
              }}
            >
              <C4SightCardProp
                kind={card.kind}
                x={0}
                y={0}
                width={220}
                label={card.label}
                startFrame={cardStart}
              />
            </div>
          );
        })}
      </div>
      <div className="c4-ds-v2-reset-word" style={{opacity: reset.calmOpacity}}>
        What actually is AI?
      </div>
      <div style={{opacity: reset.calmOpacity}}>
        <ChalkUnderline x={580} y={590} width={760} startFrame={sec(35.4)} durationFrames={18} />
      </div>
    </section>
  );
};

const RoadmapPanel = () => {
  const frame = useCurrentFrame();
  const panelStart = sec(37);
  const items = [
    'What AI is',
    'Why now',
    'What it can do',
    "What it can't do",
    'Use it wisely',
  ];

  return (
    <section className="c4-ds-v2-panel" style={holdFrame(frame, sec(37), sec(40))}>
      <SectionHeader
        kicker="ExportSpec"
        title="Episode code now assembles approved assets"
        subtitle="Figma defines the language; Remotion performs it at 1920×1080, 30fps, stroke-based and QA-ready."
      />
      <div className="c4-ds-v2-roadmap">
        {items.map((item, index) => (
          <C4SightCardProp
            key={item}
            kind="summaryCard"
            x={index * 300}
            y={0}
            width={270}
            label={`${index + 1}. ${item}`}
            startFrame={panelStart + index * 5}
          />
        ))}
      </div>
      <C4SightMascot pose="presenting" x={870} y={650} startFrame={panelStart + 8} scale={0.74} />
      <div className="c4-ds-v2-caption-zone">
        Next episode work should start from these components before any scene-specific invention.
      </div>
    </section>
  );
};

export const C4SightDesignSystemPreviewV2 = () => (
  <AbsoluteFill>
    <ChalkFilters />
    <BlackboardBackground />
    <div className="c4-ds-v2">
      <div className="c4-ds-v2-watermark">
        Figma Make source pack · {c4sightTokens.source.localSourcePack}
      </div>
      <CharacterPanel />
      <PropPanel />
      <SceneSystemPanel />
      <GrammarPanel />
      <OverwhelmResetPanel />
      <RoadmapPanel />
    </div>
  </AbsoluteFill>
);
