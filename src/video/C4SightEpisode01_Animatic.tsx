import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {
  C4SightAlien,
  C4SightChalkCard,
  C4SightCircleHighlight,
  C4SightCrossOut,
  C4SightDustPuff,
  C4SightEraserWipe,
  C4SightFreezeBurst,
  C4SightPoof,
  C4SightSpark,
  C4SightThoughtIcon,
  C4SightUnderline,
  C4SightWandProp,
  C4SightWarningLabel,
} from '../components/C4SightCharacterSystem';
import {
  CenteredTeachingScene,
  C4Zone,
  HookChaosScene,
  RoadmapScene,
  SimpleDiagramScene,
} from '../components/C4SightSceneLayouts';
import {
  ChalkAutocompleteLine,
  ChalkColdOpenCaption,
  ChalkReasoningPlan,
  ChalkTinyDiagram,
  ChalkTinyPersonMachine,
} from '../components/ChalkColdOpenElements';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkArrow, ChalkBox, ChalkCircle, ChalkLine} from '../components/ChalkShapes';
import {ChalkText} from '../components/ChalkText';
import {c4SightBrand} from '../data/brand';
import {videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const episode01AnimaticDurationSeconds = 90;

const visible = (frame: number, startFrame: number, endFrame: number) => ({
  opacity: frame >= startFrame && frame < endFrame ? 1 : 0,
  pointerEvents: 'none' as const,
});

const AnimaticWatermark = () => (
  <div className="c4-animatic-watermark">
    <Img src={staticFile(c4SightBrand.logoAsset ?? '')} />
    <span>C4Sight</span>
  </div>
);

const BoardTitle = ({
  children,
  startFrame,
  className,
}: {
  children: string;
  startFrame: number;
  className?: string;
}) => (
  <C4Zone zone="title" className={className}>
    <ChalkText className="c4-animatic-title" startFrame={startFrame} durationFrames={20}>
      {children}
    </ChalkText>
  </C4Zone>
);

const HookCard = ({
  label,
  x,
  y,
  width,
  start,
  seed,
}: {
  label: string;
  x: number;
  y: number;
  width: number;
  start: number;
  seed: number;
}) => (
  <C4SightChalkCard
    x={x}
    y={y}
    width={width}
    label={label}
    startFrame={sec(start)}
    seed={seed}
    tone={label === 'Business' ? 'muted' : 'primary'}
  />
);

const ExampleCard = ({
  label,
  x,
  y,
  start,
  seed,
  width = 202,
}: {
  label: string;
  x: number;
  y: number;
  start: number;
  seed: number;
  width?: number;
}) => (
  <C4SightChalkCard
    x={x}
    y={y}
    width={width}
    height={66}
    label={label}
    startFrame={sec(start)}
    seed={seed}
    tone={seed % 2 === 0 ? 'muted' : 'primary'}
  />
);

type CapabilityIconKind =
  | 'writing'
  | 'summarising'
  | 'coding'
  | 'explaining'
  | 'planning'
  | 'images'
  | 'documents'
  | 'tools'
  | 'workflows';

const clampInterpolate = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const CapabilityIcon = ({
  kind,
  startFrame,
}: {
  kind: CapabilityIconKind;
  startFrame: number;
}) => {
  const iconStart = startFrame + 9;

  if (kind === 'writing') {
    return (
      <>
        <ChalkLine d="M 34 54 C 78 48, 118 56, 158 50" startFrame={iconStart} durationFrames={14} strokeWidth={3.2} />
        <ChalkLine d="M 132 34 L 166 66 M 160 60 L 176 72" startFrame={iconStart + 6} durationFrames={14} strokeWidth={3.4} tone="accent" />
      </>
    );
  }

  if (kind === 'summarising') {
    return (
      <>
        <ChalkLine d="M 36 36 C 78 32, 124 38, 164 34" startFrame={iconStart} durationFrames={12} strokeWidth={3.1} />
        <ChalkLine d="M 36 58 C 72 54, 116 62, 154 56" startFrame={iconStart + 5} durationFrames={12} strokeWidth={3.1} />
        <ChalkLine d="M 36 82 C 74 78, 110 84, 132 80" startFrame={iconStart + 10} durationFrames={12} strokeWidth={3.1} tone="muted" />
      </>
    );
  }

  if (kind === 'coding') {
    return (
      <>
        <ChalkLine d="M 54 44 L 30 66 L 54 88" startFrame={iconStart} durationFrames={13} strokeWidth={3.8} tone="accent" />
        <ChalkLine d="M 150 44 L 176 66 L 150 88" startFrame={iconStart + 5} durationFrames={13} strokeWidth={3.8} tone="accent" />
        <ChalkLine d="M 80 46 C 100 42, 116 50, 136 46 M 76 74 C 104 68, 122 80, 146 74" startFrame={iconStart + 11} durationFrames={16} strokeWidth={3.1} />
      </>
    );
  }

  if (kind === 'explaining') {
    return (
      <>
        <ChalkLine d="M 40 40 C 76 18, 140 24, 160 58 C 142 90, 86 94, 54 76 L 36 88" startFrame={iconStart} durationFrames={20} strokeWidth={3.4} />
        <ChalkLine d="M 68 56 C 88 52, 110 58, 132 54 M 74 72 C 94 68, 110 74, 126 70" startFrame={iconStart + 14} durationFrames={16} strokeWidth={2.9} tone="muted" />
      </>
    );
  }

  if (kind === 'planning') {
    return (
      <>
        <ChalkLine d="M 42 42 L 52 52 L 72 30 M 88 42 C 112 38, 132 44, 154 40" startFrame={iconStart} durationFrames={16} strokeWidth={3.4} tone="accent" />
        <ChalkLine d="M 42 76 L 52 86 L 72 64 M 88 76 C 116 72, 132 80, 166 74" startFrame={iconStart + 12} durationFrames={16} strokeWidth={3.4} />
      </>
    );
  }

  if (kind === 'images') {
    return (
      <>
        <ChalkBox x={38} y={30} width={126} height={74} startFrame={iconStart} durationFrames={16} seed={611} strokeWidth={3.5} tone="muted" />
        <ChalkCircle cx={132} cy={50} rx={12} ry={11} startFrame={iconStart + 12} durationFrames={12} seed={612} strokeWidth={2.8} tone="accent" />
        <ChalkLine d="M 52 90 C 76 60, 88 62, 110 90 C 128 70, 140 70, 154 90" startFrame={iconStart + 18} durationFrames={16} strokeWidth={3.1} />
      </>
    );
  }

  if (kind === 'documents') {
    return (
      <>
        <ChalkBox x={52} y={28} width={86} height={92} startFrame={iconStart} durationFrames={16} seed={621} strokeWidth={3.2} />
        <ChalkLine d="M 74 54 C 96 50, 112 56, 130 52 M 74 76 C 100 70, 112 82, 130 76 M 74 98 C 94 94, 108 100, 122 96" startFrame={iconStart + 14} durationFrames={18} strokeWidth={2.8} tone="muted" />
        <ChalkLine d="M 38 42 C 36 70, 36 98, 42 124 C 58 126, 82 126, 98 122" startFrame={iconStart + 8} durationFrames={16} strokeWidth={2.8} tone="accent" />
      </>
    );
  }

  if (kind === 'tools') {
    return (
      <>
        <ChalkLine d="M 54 88 L 124 28 M 118 26 C 140 30, 150 44, 144 64 M 66 86 C 66 106, 84 120, 104 114" startFrame={iconStart} durationFrames={22} strokeWidth={4} />
        <ChalkLine d="M 132 78 L 166 112 M 156 108 L 174 126" startFrame={iconStart + 12} durationFrames={14} strokeWidth={3.3} tone="accent" />
      </>
    );
  }

  return (
    <>
      <ChalkCircle cx={58} cy={56} rx={16} startFrame={iconStart} durationFrames={12} seed={631} strokeWidth={3.2} />
      <ChalkCircle cx={144} cy={46} rx={16} startFrame={iconStart + 5} durationFrames={12} seed={632} strokeWidth={3.2} tone="muted" />
      <ChalkCircle cx={126} cy={100} rx={16} startFrame={iconStart + 10} durationFrames={12} seed={633} strokeWidth={3.2} tone="accent" />
      <ChalkLine d="M 74 54 C 92 48, 108 48, 128 48 M 136 62 C 134 76, 132 86, 128 94" startFrame={iconStart + 16} durationFrames={16} strokeWidth={3} />
    </>
  );
};

const CapabilityTaskCard = ({
  label,
  kind,
  x,
  y,
  width,
  start,
  seed,
  rotation = 0,
  pile = {x: 0, y: 0, rotation: 0},
}: {
  label: string;
  kind: CapabilityIconKind;
  x: number;
  y: number;
  width: number;
  start: number;
  seed: number;
  rotation?: number;
  pile?: {x: number; y: number; rotation: number};
}) => {
  const frame = useCurrentFrame();
  const startFrame = sec(start);
  const appear = interpolate(frame, [startFrame, startFrame + 14], [0, 1], clampInterpolate);
  const gather = interpolate(frame, [sec(63.2), sec(66.4)], [0, 0.58], clampInterpolate);
  const wobble = Math.sin((frame + seed * 9) / 5) * 0.45;
  const moveX = pile.x * gather;
  const moveY = pile.y * gather;
  const rotate = rotation + pile.rotation * gather + wobble * appear;

  return (
    <div
      className="c4-animatic-capability-card"
      style={{
        left: x,
        top: y,
        width,
        opacity: appear,
        transform: `translate(${moveX}px, ${(1 - appear) * 18 + moveY}px) rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox={`0 0 ${width} 118`} aria-hidden="true">
        <ChalkBox
          x={8}
          y={8}
          width={width - 16}
          height={102}
          startFrame={startFrame}
          durationFrames={18}
          seed={seed}
          tone={seed % 2 === 0 ? 'muted' : 'primary'}
          strokeWidth={5}
        />
        <g transform="translate(8 26) scale(0.44)">
          <CapabilityIcon kind={kind} startFrame={startFrame} />
        </g>
      </svg>
      <ChalkText
        className="c4-animatic-capability-card__label"
        startFrame={startFrame + 5}
        durationFrames={16}
      >
        {label}
      </ChalkText>
    </div>
  );
};

const OverwhelmThought = ({startFrame}: {startFrame: number}) => (
  <div className="c4-animatic-overwhelm-thought">
    <svg viewBox="0 0 500 260" aria-hidden="true">
      <ChalkLine
        d="M 58 116 C 18 70, 70 28, 132 52 C 172 8, 260 22, 270 80 C 348 70, 396 120, 354 166 C 310 214, 184 212, 132 180 C 94 198, 58 176, 58 116"
        startFrame={startFrame}
        durationFrames={30}
        strokeWidth={5.2}
        tone="muted"
      />
      <ChalkLine
        d="M 108 190 C 92 208, 82 224, 78 244"
        startFrame={startFrame + 24}
        durationFrames={14}
        strokeWidth={3.6}
      />
    </svg>
    <ChalkText
      className="c4-animatic-overwhelm-thought__text"
      startFrame={startFrame + 10}
      durationFrames={22}
    >
      Right. Okay.
      <br />
      This is a lot.
    </ChalkText>
  </div>
);

const OverwhelmStressLines = ({startFrame}: {startFrame: number}) => (
  <svg className="c4-animatic-overwhelm-stress" viewBox="0 0 540 360" aria-hidden="true">
    <ChalkLine d="M 72 78 C 42 58, 30 38, 20 18 M 142 54 C 136 30, 132 18, 130 4 M 414 72 C 444 48, 458 30, 470 10" startFrame={startFrame} durationFrames={24} strokeWidth={4.4} tone="accent" />
    <ChalkLine d="M 64 260 C 34 280, 24 296, 12 324 M 456 256 C 486 280, 498 298, 516 326" startFrame={startFrame + 9} durationFrames={20} strokeWidth={4.2} tone="muted" />
  </svg>
);

export const C4SightEpisode01_Animatic = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />
      <AnimaticWatermark />

      <HookChaosScene startFrame={0} endFrame={sec(19.8)}>
        <BoardTitle startFrame={sec(-1.2)}>Tiny alien wizard?</BoardTitle>
        <C4SightDustPuff x={226} y={188} startFrame={0} durationFrames={sec(0.5)} />

        <div className="c4-animatic-laptop">
          <svg viewBox="0 0 420 260" aria-hidden="true">
            <ChalkBox
              x={62}
              y={36}
              width={296}
              height={160}
              startFrame={sec(-1.4)}
              durationFrames={24}
              seed={1201}
              tone="muted"
              strokeWidth={5.6}
            />
            <ChalkLine
              d="M 34 214 C 126 226, 286 226, 386 214"
              startFrame={sec(-0.8)}
              durationFrames={20}
              strokeWidth={5.2}
            />
          </svg>
        </div>

        <C4SightAlien
          x={820}
          y={388}
          startFrame={sec(-1.6)}
          expression="happy"
          pose="wizard"
          scale={0.9}
          rotation={-2}
        />
        <C4SightWandProp
          x={1064}
          y={300}
          startFrame={sec(-0.8)}
          scale={0.78}
          expression="happy"
          rotation={-18}
        />
        <C4SightPoof x={1110} y={310} startFrame={sec(1.15)} scale={0.82} />
        <C4SightSpark x={1242} y={246} startFrame={sec(1.6)} scale={0.64} />
        <C4SightThoughtIcon x={998} y={610} startFrame={sec(3.2)} text="I got this" />

        <HookCard label="Email" x={212} y={352} width={178} start={4.2} seed={1301} />
        <HookCard label="Website" x={328} y={518} width={224} start={5.2} seed={1302} />
        <HookCard label="Assignment" x={640} y={646} width={274} start={6.2} seed={1303} />
        <HookCard label="Logo" x={1210} y={392} width={170} start={7.2} seed={1304} />
        <HookCard label="Code" x={1398} y={548} width={174} start={8.2} seed={1305} />
        <HookCard label="Business" x={1160} y={716} width={242} start={9.2} seed={1306} />

        <svg className="c4-animatic-coffee" viewBox="0 0 260 170" aria-hidden="true">
          <ChalkLine
            d="M 64 74 C 94 88, 150 88, 180 74 C 174 126, 72 126, 64 74"
            startFrame={sec(11.0)}
            durationFrames={24}
            strokeWidth={5}
            tone="muted"
          />
          <ChalkLine
            d="M 178 82 C 214 80, 220 116, 184 118"
            startFrame={sec(11.6)}
            durationFrames={18}
            strokeWidth={4.4}
          />
          <ChalkLine
            d="M 98 46 C 88 26, 118 24, 108 8 M 142 48 C 132 28, 162 26, 152 10"
            startFrame={sec(12.2)}
            durationFrames={22}
            strokeWidth={3.8}
            tone="accent"
          />
        </svg>

        <C4SightCircleHighlight
          cx={604}
          cy={180}
          rx={292}
          ry={76}
          startFrame={sec(15.0)}
          durationFrames={sec(0.7)}
        />
        {/* Intentional hold 15s-20s: the joke sits while the narration says it feels ridiculous. */}
      </HookChaosScene>

      <CenteredTeachingScene startFrame={sec(19.8)} endFrame={sec(34.0)}>
        <div className="c4-animatic-magic-correction">
          <ChalkText startFrame={sec(19.35)} durationFrames={14}>
            AI is not magic.
          </ChalkText>
        </div>
        <C4SightFreezeBurst x={650} y={318} startFrame={sec(19.7)} durationFrames={sec(0.55)} />
        <C4SightAlien
          x={358}
          y={554}
          startFrame={sec(19.0)}
          expression="freeze"
          pose="wizard"
          scale={0.64}
          rotation={-4}
        />
        <C4SightWandProp
          x={1138}
          y={456}
          startFrame={sec(19.0)}
          scale={0.62}
          expression="sad"
          rotation={24}
        />
        <C4SightCrossOut x={1128} y={456} width={260} height={200} startFrame={sec(22.0)} durationFrames={sec(0.48)} />

        <ChalkTinyPersonMachine x={528} y={478} startFrame={sec(22.6)} />
        <C4SightCrossOut x={552} y={498} width={298} height={226} startFrame={sec(24.0)} durationFrames={sec(0.5)} />

        <C4SightWarningLabel x={1018} y={650} startFrame={sec(25.4)}>
          Blind trust
        </C4SightWarningLabel>
        <C4SightCrossOut x={1018} y={650} width={420} height={120} startFrame={sec(26.8)} durationFrames={sec(0.5)} />

        <div className="c4-animatic-correction-note">
          <ChalkText startFrame={sec(28.2)} durationFrames={18}>
            Not human. Not a tiny person. Not blindly trusted.
          </ChalkText>
        </div>
        {/* Intentional hold 29s-34s: the correction stays still while voiceover lists what AI is not. */}
      </CenteredTeachingScene>

      <SimpleDiagramScene startFrame={sec(34.0)} endFrame={sec(42.3)}>
        <BoardTitle startFrame={sec(33.55)}>Not just autocomplete.</BoardTitle>
        <ChalkAutocompleteLine x={292} y={420} startFrame={sec(34.6)} />
        <ChalkArrow
          from={{x: 642, y: 540}}
          to={{x: 828, y: 540}}
          startFrame={sec(36.6)}
          durationFrames={24}
          bend={-10}
          tone="accent"
        />
        <ChalkReasoningPlan x={880} y={382} startFrame={sec(37.4)} />
        <ChalkTinyDiagram x={1180} y={622} startFrame={sec(38.6)} />
        <div className="c4-animatic-autocomplete-note">
          <ChalkText startFrame={sec(39.0)} durationFrames={18}>
            That is where people get confused.
          </ChalkText>
        </div>
      </SimpleDiagramScene>

      <SimpleDiagramScene startFrame={sec(42.0)} endFrame={sec(51.4)}>
        <BoardTitle startFrame={sec(41.5)}>A simple way to think about it</BoardTitle>
        <svg className="c4-animatic-diagram-ink" viewBox="0 0 1920 1080" aria-hidden="true">
          <ChalkBox x={250} y={412} width={320} height={126} startFrame={sec(41.8)} durationFrames={20} seed={1401} />
          <ChalkArrow
            from={{x: 604, y: 475}}
            to={{x: 770, y: 475}}
            startFrame={sec(42.5)}
            durationFrames={20}
            bend={-6}
            tone="accent"
          />
          <ChalkBox x={804} y={392} width={340} height={166} startFrame={sec(42.9)} durationFrames={20} seed={1402} tone="muted" />
          <ChalkArrow
            from={{x: 1176, y: 475}}
            to={{x: 1340, y: 475}}
            startFrame={sec(43.5)}
            durationFrames={20}
            bend={6}
            tone="accent"
          />
          <ChalkBox x={1374} y={412} width={330} height={126} startFrame={sec(43.9)} durationFrames={20} seed={1403} />
          <ChalkLine
            d="M 860 462 C 902 428, 946 502, 986 462 C 1030 422, 1080 500, 1118 462"
            startFrame={sec(44.4)}
            durationFrames={26}
            strokeWidth={4.4}
            tone="accent"
          />
        </svg>
        <div className="c4-animatic-diagram-label c4-animatic-diagram-label--data">
          <ChalkText startFrame={sec(42.0)} durationFrames={12}>
            Data
          </ChalkText>
        </div>
        <div className="c4-animatic-diagram-label c4-animatic-diagram-label--patterns">
          <ChalkText startFrame={sec(43.1)} durationFrames={12}>
            Patterns
          </ChalkText>
        </div>
        <div className="c4-animatic-diagram-label c4-animatic-diagram-label--useful-output">
          <ChalkText startFrame={sec(44.1)} durationFrames={12}>
            Useful output
          </ChalkText>
        </div>
        <div className="c4-animatic-diagram-note c4-animatic-diagram-note--teaching">
          <ChalkText startFrame={sec(45.2)} durationFrames={18}>
            learning patterns from huge amounts of data
          </ChalkText>
        </div>
        {/* Intentional hold 46s-51s: the model stays calm before the capability list starts to expand. */}
      </SimpleDiagramScene>

      <HookChaosScene
        startFrame={sec(50.8)}
        endFrame={sec(70.8)}
        className="c4-animatic-overwhelm-scene"
        camera={{x: -18, y: -10, scale: 1.012}}
      >
        <BoardTitle startFrame={sec(50.35)}>Then the list gets long.</BoardTitle>
        <div
          className="c4-animatic-overwhelm-subtitle"
          style={visible(frame, sec(51.4), sec(63.8))}
        >
          <ChalkText startFrame={sec(51.6)} durationFrames={18}>
            One tool. Too many useful tricks.
          </ChalkText>
        </div>

        <C4SightAlien
          x={820}
          y={454}
          startFrame={sec(50.8)}
          expression={frame < sec(57.5) ? 'happy' : frame < sec(63.5) ? 'confused' : 'sad'}
          pose="wizard"
          scale={frame < sec(63.5) ? 0.82 : 0.76}
          rotation={frame < sec(57.5) ? -3 : frame < sec(63.5) ? 5 : -7}
        />
        <C4SightWandProp
          x={1072}
          y={396}
          startFrame={sec(51.0)}
          scale={0.66}
          expression={frame < sec(63.5) ? 'happy' : 'sad'}
          rotation={frame < sec(63.5) ? -22 : 20}
        />
        <C4SightSpark x={1162} y={360} startFrame={sec(52.0)} scale={0.55} />
        <C4SightPoof x={1020} y={650} startFrame={sec(58.4)} scale={0.62} />
        <C4SightDustPuff x={792} y={700} startFrame={sec(63.4)} durationFrames={sec(0.7)} />

        <CapabilityTaskCard
          label="Writing"
          kind="writing"
          x={214}
          y={330}
          width={226}
          start={52.0}
          seed={1501}
          rotation={-2}
          pile={{x: 430, y: 120, rotation: 7}}
        />
        <CapabilityTaskCard
          label="Summarising"
          kind="summarising"
          x={256}
          y={520}
          width={272}
          start={53.2}
          seed={1502}
          rotation={2}
          pile={{x: 366, y: -10, rotation: -8}}
        />
        <CapabilityTaskCard
          label="Coding"
          kind="coding"
          x={480}
          y={704}
          width={224}
          start={54.4}
          seed={1503}
          rotation={-3}
          pile={{x: 224, y: -164, rotation: 9}}
        />
        <CapabilityTaskCard
          label="Explaining"
          kind="explaining"
          x={802}
          y={296}
          width={256}
          start={55.6}
          seed={1504}
          rotation={1}
          pile={{x: 14, y: 196, rotation: -4}}
        />
        <CapabilityTaskCard
          label="Planning"
          kind="planning"
          x={1114}
          y={324}
          width={238}
          start={56.8}
          seed={1505}
          rotation={-2}
          pile={{x: -238, y: 166, rotation: 8}}
        />
        <CapabilityTaskCard
          label="Images"
          kind="images"
          x={1338}
          y={506}
          width={220}
          start={58.0}
          seed={1506}
          rotation={3}
          pile={{x: -430, y: -10, rotation: -9}}
        />
        <CapabilityTaskCard
          label="Documents"
          kind="documents"
          x={1184}
          y={704}
          width={266}
          start={59.2}
          seed={1507}
          rotation={-1}
          pile={{x: -304, y: -166, rotation: 6}}
        />
        <CapabilityTaskCard
          label="Tools"
          kind="tools"
          x={690}
          y={742}
          width={216}
          start={60.4}
          seed={1508}
          rotation={2}
          pile={{x: 90, y: -202, rotation: -7}}
        />
        <CapabilityTaskCard
          label={'Automating\nworkflows'}
          kind="workflows"
          x={1320}
          y={330}
          width={304}
          start={61.6}
          seed={1509}
          rotation={-3}
          pile={{x: -472, y: 168, rotation: 10}}
        />

        <svg className="c4-animatic-overwhelm-chart" viewBox="0 0 320 220" aria-hidden="true">
          <ChalkBox x={28} y={32} width={244} height={138} startFrame={sec(57.3)} durationFrames={20} seed={1518} tone="muted" strokeWidth={4.6} />
          <ChalkLine d="M 62 138 L 62 104 M 114 138 L 114 76 M 166 138 L 166 92 M 218 138 L 218 58" startFrame={sec(58.0)} durationFrames={20} strokeWidth={4} tone="accent" />
          <ChalkLine d="M 54 146 C 104 150, 180 146, 240 146" startFrame={sec(58.6)} durationFrames={14} strokeWidth={3.2} />
        </svg>

        <OverwhelmStressLines startFrame={sec(62.8)} />
        <OverwhelmThought startFrame={sec(64.2)} />
        {/* SFX placeholder 00:52-01:04: controlled chalk card taps building into a busy pile. */}
        {/* SFX placeholder 01:04.20: small comic overload beat, then the board takes a breath. */}
      </HookChaosScene>

      <CenteredTeachingScene
        startFrame={sec(68.6)}
        endFrame={sec(78.8)}
        className="c4-animatic-reset-scene"
        camera={{scale: 1.004}}
      >
        <C4SightEraserWipe x={124} y={110} width={1688} height={830} startFrame={sec(68.8)} durationFrames={sec(0.9)} />
        <div className="c4-animatic-reset-small">
          <ChalkText startFrame={sec(70.4)} durationFrames={16}>
            So let&apos;s slow down.
          </ChalkText>
        </div>
        <div className="c4-animatic-reset-question">
          <ChalkText startFrame={sec(72.0)} durationFrames={18}>
            What actually is AI?
          </ChalkText>
        </div>
        <C4SightUnderline x={548} y={580} width={824} startFrame={sec(73.4)} durationFrames={sec(0.55)} />
        <div className="c4-animatic-reset-note">
          <ChalkText startFrame={sec(74.4)} durationFrames={18}>
            Reset the board. Start with the basics.
          </ChalkText>
        </div>
        <C4SightAlien
          x={1520}
          y={720}
          startFrame={sec(74.8)}
          expression="confused"
          pose="peeking"
          scale={0.42}
          rotation={-6}
        />
        {/* SFX placeholder 01:08.80: eraser wipe into the calm teaching reset. */}
      </CenteredTeachingScene>

      <RoadmapScene startFrame={sec(78.0)} endFrame={sec(90.5)}>
        <C4SightEraserWipe x={126} y={128} width={1668} height={820} startFrame={sec(77.6)} durationFrames={sec(0.72)} />
        <div className="c4-animatic-final-logo">
          <Img src={staticFile(c4SightBrand.logoAsset ?? '')} />
          <span>C4Sight</span>
        </div>
        <div className="c4-animatic-final-title">
          <ChalkText startFrame={sec(78.3)} durationFrames={18}>
            AI explained clearly.
          </ChalkText>
        </div>
        <div className="c4-animatic-final-subtitle">
          <ChalkText startFrame={sec(80.2)} durationFrames={18}>
            Practical. Balanced. No hype.
          </ChalkText>
        </div>
        <C4SightUnderline x={610} y={560} width={700} startFrame={sec(81.3)} durationFrames={sec(0.5)} />

        <div className="c4-animatic-roadmap c4-animatic-roadmap--five">
          {[
            'What AI is',
            'Why now',
            'What it can do',
            "What it can't do",
            'Use it wisely',
          ].map((item, index) => (
            <div className="c4-animatic-roadmap__item c4-animatic-roadmap__item--compact" key={item}>
              <svg viewBox="0 0 286 150" aria-hidden="true">
                <ChalkBox
                  x={8}
                  y={8}
                  width={266}
                  height={122}
                  startFrame={sec(82.0 + index * 0.32)}
                  durationFrames={20}
                  seed={1600 + index}
                  tone={index % 2 === 0 ? 'primary' : 'muted'}
                  strokeWidth={5.2}
                />
              </svg>
              <span className="c4-animatic-roadmap__number">{index + 1}</span>
              <ChalkText
                className="c4-animatic-roadmap__label"
                startFrame={sec(82.2 + index * 0.32)}
                durationFrames={18}
              >
                {item}
              </ChalkText>
            </div>
          ))}
        </div>
      </RoadmapScene>

      <ChalkColdOpenCaption
        startFrame={sec(0.6)}
        endFrame={sec(8.6)}
        text="People talk about AI like there is a tiny alien wizard in your laptop."
      />
      <ChalkColdOpenCaption
        startFrame={sec(8.8)}
        endFrame={sec(20.0)}
        text="Emails, websites, assignments, logos, code, and business ideas."
      />
      <ChalkColdOpenCaption
        startFrame={sec(20.8)}
        endFrame={sec(33.8)}
        text="That is not really what is happening. AI is not magic."
      />
      <ChalkColdOpenCaption
        startFrame={sec(34.6)}
        endFrame={sec(41.8)}
        text="But it is also not just boring autocomplete anymore."
      />
      <ChalkColdOpenCaption
        startFrame={sec(43.0)}
        endFrame={sec(50.8)}
        text="At the simplest level: data, patterns, useful output."
      />
      <ChalkColdOpenCaption
        startFrame={sec(51.2)}
        endFrame={sec(57.6)}
        text="In practice, the list gets long very quickly."
      />
      <ChalkColdOpenCaption
        startFrame={sec(58.0)}
        endFrame={sec(65.2)}
        text="Writing, summarising, coding, explaining, planning, images, documents, tools, workflows."
      />
      <ChalkColdOpenCaption
        startFrame={sec(65.5)}
        endFrame={sec(71.5)}
        text="Right. Okay. This is a lot."
      />
      <ChalkColdOpenCaption
        startFrame={sec(71.8)}
        endFrame={sec(78.0)}
        text="So let us slow down. What actually is AI?"
      />
      <ChalkColdOpenCaption
        startFrame={sec(78.2)}
        endFrame={sec(84.8)}
        text="C4Sight: AI explained clearly, practically, and without the hype."
      />
      <ChalkColdOpenCaption
        startFrame={sec(85.0)}
        endFrame={sec(90.0)}
        text="What it is, why now, what it can do, what it cannot do, and how to use it wisely."
      />

      <div className="c4-animatic-label" style={visible(frame, 0, sec(90))}>
        Production animatic · voice-led pacing and shot grammar
      </div>
    </AbsoluteFill>
  );
};
