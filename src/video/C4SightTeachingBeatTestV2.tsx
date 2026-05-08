import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {
  ChalkChecklist,
  ChalkCircleHighlight,
  ChalkCrossOut,
  ChalkDustPuff,
  ChalkEraserWipe,
  ChalkUnderline,
} from '../components/ChalkAnnotations';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkArrow, ChalkBox, ChalkLine} from '../components/ChalkShapes';
import {
  ChalkDraftReplyCard,
  ChalkEmailCard,
  ChalkMagicWandIcon,
  ChalkMagnifyCheckIcon,
  ChalkPatternIcon,
  ChalkWarningChecklistIcon,
} from '../components/ChalkTeachingIcons';
import {ChalkText} from '../components/ChalkText';
import {c4SightBrand} from '../data/brand';
import {boardZones, videoLayout} from '../layout/blackboardLayout';
import {easeOut, progress} from '../lib/timing';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const teachingBeatV2DurationSeconds = 30;

const cameraKeyframes = {
  frame: [0, sec(4), sec(9), sec(15), sec(21), sec(26), sec(30)],
  x: [0, -18, 10, -30, 18, 0, -10],
  y: [0, -8, 4, -18, -8, 10, 0],
  scale: [1.012, 1.03, 1.014, 1.03, 1.024, 1.04, 1.035],
};

const diagram = {
  y: 470,
  input: {x: 260, y: 470, width: 270, height: 112},
  model: {x: 810, y: 458, width: 300, height: 136},
  output: {x: 1370, y: 470, width: 280, height: 112},
};

const frameStyle = (
  frame: number,
  hiddenAfterFrame: number,
): {opacity: number; pointerEvents: 'none'} => ({
  opacity: frame >= hiddenAfterFrame ? 0 : 1,
  pointerEvents: 'none',
});

export const C4SightTeachingBeatTestV2 = () => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, cameraKeyframes.frame, cameraKeyframes.x, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const y = interpolate(frame, cameraKeyframes.frame, cameraKeyframes.y, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const scale = interpolate(frame, cameraKeyframes.frame, cameraKeyframes.scale, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  const emailX = interpolate(frame, [sec(15.35), sec(18.3)], [245, 760], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const emailY = interpolate(frame, [sec(15.35), sec(18.3)], [678, 625], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const emailScale = interpolate(frame, [sec(15.35), sec(18.3)], [1, 0.78], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      <div
        className="teaching-v2"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }}
      >
        <div
          className="teaching-v2__watermark"
          style={{
            left: boardZones.logo.x,
            top: boardZones.logo.y,
            width: boardZones.logo.width,
            height: boardZones.logo.height,
          }}
        >
          <Img src={staticFile(c4SightBrand.logoAsset ?? '')} />
          <span>C4Sight</span>
        </div>

        {/* SFX placeholder 00:00.00: chalk tap, first question strokes, soft board push-in */}
        <ChalkDustPuff
          x={220}
          y={205}
          startFrame={sec(0)}
          durationFrames={sec(0.7)}
        />

        <div
          className="teaching-v2__opening"
          style={frameStyle(frame, sec(21.78))}
        >
          <div className="teaching-v2__question">
            <ChalkText startFrame={sec(-0.5)} durationFrames={sec(1.35)}>
              Is AI magic?
            </ChalkText>
          </div>

          {/* SFX placeholder 00:00.70: wand sketch scratches in */}
          <ChalkMagicWandIcon x={1110} y={142} startFrame={sec(0.7)} />

          {/* SFX placeholder 00:02.10: chalk circle catches the word magic */}
          <ChalkCircleHighlight
            cx={615}
            cy={204}
            rx={142}
            ry={56}
            startFrame={sec(2.1)}
            durationFrames={sec(0.65)}
          />

          {/* SFX placeholder 00:03.05: teacher rejects the magic framing */}
          <ChalkCrossOut
            x={488}
            y={152}
            width={270}
            height={102}
            startFrame={sec(3.05)}
            durationFrames={sec(0.48)}
          />
          <ChalkCrossOut
            x={1160}
            y={172}
            width={210}
            height={98}
            startFrame={sec(3.2)}
            durationFrames={sec(0.44)}
          />

          {/* SFX placeholder 00:04.15: quick eraser swipe removes the wand emphasis */}
          <TimedEraserWipe
            x={1055}
            y={118}
            width={420}
            height={230}
            startFrame={sec(4.15)}
            durationFrames={sec(0.55)}
          />

          <div className="teaching-v2__correction">
            <ChalkText startFrame={sec(4.0)} durationFrames={sec(0.9)}>
              {'Not magic \u2014 pattern prediction.'}
            </ChalkText>
          </div>

          {/* SFX placeholder 00:06.25: underline lands under pattern prediction */}
          <ChalkUnderline
            x={720}
            y={344}
            width={575}
            startFrame={sec(5.6)}
            durationFrames={sec(0.68)}
          />
          <ChalkPatternIcon x={1305} y={252} startFrame={sec(5.55)} />
        </div>

        <div
          className="teaching-v2__diagram"
          style={frameStyle(frame, sec(21.78))}
        >
          <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
            {/* SFX placeholder 00:09.05: input/model/output boxes draw with labels close behind */}
            <ChalkBox
              {...diagram.input}
              startFrame={sec(9.05)}
              durationFrames={sec(0.52)}
              seed={131}
              strokeWidth={6.5}
            />
            <ChalkBox
              {...diagram.model}
              startFrame={sec(9.75)}
              durationFrames={sec(0.52)}
              seed={132}
              strokeWidth={6.5}
            />
            <ChalkBox
              {...diagram.output}
              startFrame={sec(10.45)}
              durationFrames={sec(0.52)}
              seed={133}
              strokeWidth={6.5}
            />
            {/* SFX placeholder 00:11.30: chalk arrows connect the teaching model */}
            <ChalkArrow
              from={{x: diagram.input.x + diagram.input.width + 48, y: diagram.y + 56}}
              to={{x: diagram.model.x - 48, y: diagram.y + 56}}
              startFrame={sec(11.3)}
              durationFrames={sec(0.62)}
              bend={-6}
              strokeWidth={6.5}
            />
            <ChalkArrow
              from={{x: diagram.model.x + diagram.model.width + 48, y: diagram.y + 56}}
              to={{x: diagram.output.x - 48, y: diagram.y + 56}}
              startFrame={sec(12.05)}
              durationFrames={sec(0.62)}
              bend={7}
              strokeWidth={6.5}
            />
            <ChalkLine
              d="M 350 632 C 630 652, 975 650, 1540 630"
              startFrame={sec(13.55)}
              durationFrames={sec(0.7)}
              strokeWidth={4}
              tone="muted"
            />
          </svg>

          <DiagramLabel
            {...diagram.input}
            startFrame={sec(9.18)}
            text="Input"
          />
          <DiagramLabel
            {...diagram.model}
            startFrame={sec(9.88)}
            text="Model"
          />
          <DiagramLabel
            {...diagram.output}
            startFrame={sec(10.58)}
            text="Output"
          />

          <ChalkCircleHighlight
            cx={diagram.model.x + diagram.model.width / 2}
            cy={diagram.model.y + diagram.model.height / 2}
            rx={196}
            ry={88}
            startFrame={sec(14.2)}
            durationFrames={sec(0.56)}
          />
        </div>

        <div
          className="teaching-v2__example"
          style={frameStyle(frame, sec(21.78))}
        >
          {/* SFX placeholder 00:15.20: email card is drawn and slides into the model */}
          <ChalkEmailCard
            x={0}
            y={0}
            width={360}
            height={126}
            startFrame={sec(15.2)}
            style={{
              transform: `translate(${emailX}px, ${emailY}px) scale(${emailScale})`,
              transformOrigin: '50% 50%',
            }}
          >
            Customer email
          </ChalkEmailCard>

          {/* SFX placeholder 00:18.35: draft reply appears as the model's useful output */}
          <ChalkDraftReplyCard
            x={1215}
            y={646}
            width={350}
            height={128}
            startFrame={sec(18.35)}
          >
            Draft reply
          </ChalkDraftReplyCard>

          <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
            <ChalkArrow
              from={{x: 1116, y: 704}}
              to={{x: 1204, y: 704}}
              startFrame={sec(18.75)}
              durationFrames={sec(0.58)}
              bend={3}
              tone="accent"
              strokeWidth={6}
            />
            <ChalkLine
              d="M 274 836 C 640 850, 1050 842, 1588 828"
              startFrame={sec(19.8)}
              durationFrames={sec(0.65)}
              strokeWidth={3.8}
              tone="muted"
            />
          </svg>
        </div>

        {/* SFX placeholder 00:20.85: erase diagram clutter before the warning beat */}
        <TimedEraserWipe
          x={160}
          y={395}
          width={1620}
          height={520}
          startFrame={sec(20.85)}
          durationFrames={sec(0.78)}
        />
        <TimedEraserWipe
          x={130}
          y={112}
          width={1660}
          height={260}
          startFrame={sec(20.72)}
          durationFrames={sec(0.7)}
        />

        <div
          className="teaching-v2__warning"
          style={frameStyle(frame, sec(26.62))}
        >
          {/* SFX placeholder 00:21.40: magnifying glass/checking icon appears */}
          <ChalkMagnifyCheckIcon x={285} y={450} startFrame={sec(21.4)} />
          <div className="teaching-v2__warning-title">
            <ChalkText startFrame={sec(21.65)} durationFrames={sec(1.0)}>
              {'Useful \u2014 but check it.'}
            </ChalkText>
          </div>
          <ChalkCircleHighlight
            cx={1000}
            cy={522}
            rx={132}
            ry={54}
            startFrame={sec(22.75)}
            durationFrames={sec(0.5)}
          />

          {/* SFX placeholder 00:23.10: checklist draws as teacher talks through safe uses */}
          <ChalkChecklist
            x={560}
            y={646}
            startFrame={sec(22.0)}
            items={['Drafts', 'Summaries', 'Ideas']}
          />
          <ChalkWarningChecklistIcon
            x={1190}
            y={548}
            startFrame={sec(23.35)}
          />
          <div className="teaching-v2__facts-warning">
            <ChalkText startFrame={sec(24.15)} durationFrames={sec(0.9)}>
              Facts need checking.
            </ChalkText>
          </div>
          <ChalkUnderline
            x={1045}
            y={824}
            width={410}
            startFrame={sec(24.95)}
            durationFrames={sec(0.46)}
          />
        </div>

        {/* SFX placeholder 00:25.95: broad eraser clears most clutter for the takeaway */}
        <TimedEraserWipe
          x={130}
          y={125}
          width={1660}
          height={780}
          startFrame={sec(25.95)}
          durationFrames={sec(0.82)}
        />

        <div className="teaching-v2__final">
          {/* SFX placeholder 00:26.80: final sentence writes large */}
          <ChalkText startFrame={sec(26.8)} durationFrames={sec(1.75)}>
            Use AI as an assistant.
          </ChalkText>
        </div>
        <ChalkUnderline
          x={438}
          y={578}
          width={1045}
          startFrame={sec(28.35)}
          durationFrames={sec(0.68)}
        />
      </div>

      <PhraseCaption
        startFrame={sec(0.8)}
        endFrame={sec(4.5)}
        text="A useful question starts by removing the mystique."
      />
      <PhraseCaption
        startFrame={sec(9.4)}
        endFrame={sec(15.0)}
        text="Think in three parts: input, model, output."
      />
      <PhraseCaption
        startFrame={sec(15.8)}
        endFrame={sec(21.1)}
        text="For example: an email can become a first draft."
      />
      <PhraseCaption
        startFrame={sec(21.8)}
        endFrame={sec(26.1)}
        text="Useful does not mean automatically correct."
      />
      <PhraseCaption
        startFrame={sec(26.8)}
        endFrame={sec(30)}
        text="Not an expert you blindly trust."
      />
    </AbsoluteFill>
  );
};

const DiagramLabel = ({
  x,
  y,
  width,
  height,
  startFrame,
  text,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  startFrame: number;
  text: string;
}) => (
  <ChalkText
    className="teaching-v2__diagram-label"
    startFrame={startFrame}
    durationFrames={sec(0.38)}
    style={{left: x, top: y, width, height}}
  >
    {text}
  </ChalkText>
);

const TimedEraserWipe = ({
  x,
  y,
  width,
  height,
  startFrame,
  durationFrames,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  startFrame: number;
  durationFrames: number;
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame > startFrame + durationFrames + 10) {
    return null;
  }

  return (
    <ChalkEraserWipe
      x={x}
      y={y}
      width={width}
      height={height}
      startFrame={startFrame}
      durationFrames={durationFrames}
    />
  );
};

const PhraseCaption = ({
  startFrame,
  endFrame,
  text,
}: {
  startFrame: number;
  endFrame: number;
  text: string;
}) => {
  const frame = useCurrentFrame();

  if (frame < startFrame || frame >= endFrame) {
    return null;
  }

  const ruleDraw = progress(frame, startFrame, sec(0.42));
  const textOpacity = progress(frame, startFrame + sec(0.24), sec(0.18));

  return (
    <div className="teaching-v2-caption">
      <svg className="teaching-v2-caption__rule" viewBox="0 0 760 22" aria-hidden="true">
        <path
          d="M 8 12 C 180 9, 332 14, 512 11 C 602 10, 682 13, 752 10"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - ruleDraw}
        />
      </svg>
      <p style={{opacity: textOpacity}}>{text}</p>
    </div>
  );
};
