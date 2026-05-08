import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {Caption} from '../components/Caption';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkText} from '../components/ChalkText';
import {
  ChalkChecklist,
  ChalkCircleHighlight,
  ChalkCrossOut,
  ChalkEraserWipe,
  ChalkSideNote,
  ChalkUnderline,
} from '../components/ChalkAnnotations';
import {ChalkArrow, ChalkBox, ChalkLine} from '../components/ChalkShapes';
import {c4SightBrand} from '../data/brand';
import {boardZones, videoLayout} from '../layout/blackboardLayout';
import {easeOut} from '../lib/timing';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const teachingBeatDurationSeconds = 30;

const cameraKeyframes = {
  frame: [0, sec(5.4), sec(10.5), sec(16.4), sec(23.0), sec(30)],
  x: [0, -18, 16, -28, 18, 0],
  y: [0, -10, 4, -22, 8, -6],
  scale: [1, 1.018, 1.006, 1.024, 1.012, 1.018],
};

const diagram = {
  y: 430,
  input: {x: 270, y: 430, width: 280, height: 112},
  model: {x: 750, y: 430, width: 300, height: 112},
  output: {x: 1260, y: 430, width: 300, height: 112},
};

const example = {
  email: {x: 235, y: 612, width: 410, height: 102},
  reply: {x: 840, y: 612, width: 350, height: 102},
};

export const C4SightTeachingBeatTest = () => {
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
  const scale = interpolate(
    frame,
    cameraKeyframes.frame,
    cameraKeyframes.scale,
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: easeOut,
    },
  );

  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      <div
        className="teaching-board"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }}
      >
        <div
          className="teaching-board__watermark"
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

        {/* SFX placeholder 00:00.30: chalk writing begins */}
        <div className="teaching-board__question">
          <ChalkText startFrame={sec(0.3)} durationFrames={sec(1.35)}>
            Is AI magic?
          </ChalkText>
        </div>

        {/* SFX placeholder 00:02.10: single chalk word lands */}
        <div className="teaching-board__magic-word">
          <ChalkText startFrame={sec(2.1)} durationFrames={sec(0.8)}>
            Magic
          </ChalkText>
        </div>
        <ChalkCircleHighlight
          cx={965}
          cy={382}
          rx={178}
          ry={78}
          startFrame={sec(3.0)}
          durationFrames={sec(0.7)}
        />

        {/* SFX placeholder 00:04.15: chalk cross-out swipe */}
        <ChalkCrossOut
          x={780}
          y={320}
          width={370}
          height={124}
          startFrame={sec(4.15)}
          durationFrames={sec(0.55)}
        />

        {/* SFX placeholder 00:05.20: short eraser wipe clears emphasis */}
        <ChalkEraserWipe
          x={720}
          y={294}
          width={510}
          height={190}
          startFrame={sec(5.2)}
          durationFrames={sec(0.65)}
        />

        <div className="teaching-board__phrase">
          <ChalkText startFrame={sec(5.95)} durationFrames={sec(1.7)}>
            {'Not magic \u2014 pattern prediction.'}
          </ChalkText>
        </div>
        <ChalkUnderline
          x={420}
          y={336}
          width={760}
          startFrame={sec(7.65)}
          durationFrames={sec(0.75)}
        />

        <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
          {/* SFX placeholder 00:10.20: box outlines draw */}
          <ChalkBox
            {...diagram.input}
            startFrame={sec(10.2)}
            durationFrames={sec(0.75)}
            seed={51}
          />
          <ChalkBox
            {...diagram.model}
            startFrame={sec(11.0)}
            durationFrames={sec(0.75)}
            seed={52}
          />
          <ChalkBox
            {...diagram.output}
            startFrame={sec(11.8)}
            durationFrames={sec(0.75)}
            seed={53}
          />
          {/* SFX placeholder 00:12.85: arrow strokes draw between ideas */}
          <ChalkArrow
            from={{x: diagram.input.x + diagram.input.width + 34, y: diagram.y + 56}}
            to={{x: diagram.model.x - 34, y: diagram.y + 56}}
            startFrame={sec(12.85)}
            durationFrames={sec(0.75)}
            bend={-8}
          />
          <ChalkArrow
            from={{x: diagram.model.x + diagram.model.width + 34, y: diagram.y + 56}}
            to={{x: diagram.output.x - 34, y: diagram.y + 56}}
            startFrame={sec(13.55)}
            durationFrames={sec(0.75)}
            bend={8}
          />
          <ChalkLine
            d="M 410 570 C 650 586, 905 584, 1210 570"
            startFrame={sec(14.8)}
            durationFrames={sec(0.65)}
            strokeWidth={4}
            tone="muted"
          />
        </svg>

        <ChalkText
          className="teaching-board__diagram-label"
          startFrame={sec(10.8)}
          durationFrames={sec(0.55)}
          style={{
            left: diagram.input.x,
            top: diagram.input.y,
            width: diagram.input.width,
            height: diagram.input.height,
          }}
        >
          Input
        </ChalkText>
        <ChalkText
          className="teaching-board__diagram-label"
          startFrame={sec(11.6)}
          durationFrames={sec(0.55)}
          style={{
            left: diagram.model.x,
            top: diagram.model.y,
            width: diagram.model.width,
            height: diagram.model.height,
          }}
        >
          Model
        </ChalkText>
        <ChalkText
          className="teaching-board__diagram-label"
          startFrame={sec(12.4)}
          durationFrames={sec(0.6)}
          style={{
            left: diagram.output.x,
            top: diagram.output.y,
            width: diagram.output.width,
            height: diagram.output.height,
          }}
        >
          Output
        </ChalkText>

        <svg className="chalk-overlay" viewBox="0 0 1920 1080" aria-hidden="true">
          {/* SFX placeholder 00:16.25: real-world example boxes draw */}
          <ChalkBox
            {...example.email}
            startFrame={sec(16.25)}
            durationFrames={sec(0.7)}
            seed={61}
            tone="muted"
          />
          <ChalkBox
            {...example.reply}
            startFrame={sec(17.1)}
            durationFrames={sec(0.7)}
            seed={62}
          />
          <ChalkArrow
            from={{x: example.email.x + example.email.width + 36, y: example.email.y + 52}}
            to={{x: example.reply.x - 38, y: example.reply.y + 52}}
            startFrame={sec(18.0)}
            durationFrames={sec(0.85)}
            bend={6}
          />
        </svg>

        <ChalkText
          className="teaching-board__example-label"
          startFrame={sec(16.9)}
          durationFrames={sec(0.7)}
          style={{
            left: example.email.x,
            top: example.email.y,
            width: example.email.width,
            height: example.email.height,
          }}
        >
          Customer email
        </ChalkText>
        <ChalkText
          className="teaching-board__example-label"
          startFrame={sec(17.75)}
          durationFrames={sec(0.7)}
          style={{
            left: example.reply.x,
            top: example.reply.y,
            width: example.reply.width,
            height: example.reply.height,
          }}
        >
          Draft reply
        </ChalkText>

        {/* SFX placeholder 00:19.20: small side-note box draw */}
        <ChalkSideNote
          x={1246}
          y={594}
          width={430}
          height={286}
          startFrame={sec(19.2)}
          title="Note"
        >
          Useful, but not always correct.
        </ChalkSideNote>

        <ChalkChecklist
          x={280}
          y={760}
          startFrame={sec(22.0)}
          items={['Great for drafts', 'Great for summaries', 'Risky for facts']}
        />

        {/* SFX placeholder 00:25.05: broad eraser wipe clears space for the takeaway */}
        <ChalkEraserWipe
          x={190}
          y={568}
          width={1520}
          height={386}
          startFrame={sec(25.05)}
          durationFrames={sec(0.8)}
        />

        {/* SFX placeholder 00:25.80: final takeaway writes and underline resolves */}
        <div className="teaching-board__takeaway">
          <ChalkText startFrame={sec(25.8)} durationFrames={sec(2.0)}>
            Use AI as an assistant, not an expert.
          </ChalkText>
        </div>
        <ChalkUnderline
          x={430}
          y={884}
          width={1060}
          startFrame={sec(28.05)}
          durationFrames={sec(0.75)}
        />
      </div>

      <SequenceCaption
        fromSeconds={0.5}
        durationSeconds={5.7}
        text="The first mistake is treating AI like magic."
      />
      <SequenceCaption
        fromSeconds={10.4}
        durationSeconds={6.0}
        text="A simple way to explain it: input, model, output."
      />
      <SequenceCaption
        fromSeconds={19.3}
        durationSeconds={6.4}
        text="It can be useful and still need checking."
      />
      <SequenceCaption
        fromSeconds={26.0}
        durationSeconds={4.0}
        text="Use AI as an assistant, not an expert."
      />
    </AbsoluteFill>
  );
};

const SequenceCaption = ({
  fromSeconds,
  durationSeconds,
  text,
}: {
  fromSeconds: number;
  durationSeconds: number;
  text: string;
}) => {
  return (
    <Sequence
      from={sec(fromSeconds)}
      durationInFrames={sec(durationSeconds)}
      className="teaching-board__caption-sequence"
    >
      <Caption
        cue={{
          id: `caption-${fromSeconds}`,
          start: 0,
          duration: durationSeconds,
          text,
        }}
      />
    </Sequence>
  );
};
