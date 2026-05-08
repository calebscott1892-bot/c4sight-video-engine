import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {
  ChalkCrossOut,
  ChalkDustPuff,
  ChalkEraserWipe,
  ChalkUnderline,
} from '../components/ChalkAnnotations';
import {
  ChalkAutocompleteLine,
  ChalkCodeBlock,
  ChalkColdOpenCaption,
  ChalkExampleCard,
  ChalkMagnifier,
  ChalkMysteryModel,
  ChalkQuickNote,
  ChalkReasoningPlan,
  ChalkTinyDiagram,
} from '../components/ChalkColdOpenElements';
import {
  ChalkAlien,
  ChalkFreezeMoment,
  ChalkMagicWand,
  ChalkPoof,
  ChalkSadExit,
  ChalkSaucepan,
  ChalkSpark,
} from '../components/ChalkCreativeBurst';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkLine} from '../components/ChalkShapes';
import {ChalkText} from '../components/ChalkText';
import {c4SightBrand} from '../data/brand';
import {boardZones, videoLayout} from '../layout/blackboardLayout';
import {easeOut} from '../lib/timing';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const episode01ColdOpenDurationSeconds = 40;

const cameraKeyframes = {
  frame: [
    0,
    sec(4),
    sec(10),
    sec(15),
    sec(22),
    sec(29),
    sec(35),
    sec(40),
  ],
  x: [0, -18, 20, -10, 18, -16, 8, 0],
  y: [0, -10, -28, 8, -12, 6, -6, 0],
  scale: [1.01, 1.028, 1.04, 1.02, 1.032, 1.024, 1.02, 1.012],
};

const freezeFrame = sec(9.6);

const visible = (frame: number, startFrame: number, endFrame: number) => ({
  opacity: frame >= startFrame && frame < endFrame ? 1 : 0,
  pointerEvents: 'none' as const,
});

const exampleCards = [
  {label: 'Email', x: 205, y: 428, width: 184, start: 4.0, seed: 410},
  {label: 'Assignment', x: 430, y: 510, width: 258, start: 4.28, seed: 411},
  {label: 'Website', x: 764, y: 404, width: 218, start: 4.56, seed: 412},
  {label: 'Image', x: 1058, y: 518, width: 182, start: 4.84, seed: 413},
  {label: 'Code', x: 1305, y: 388, width: 176, start: 5.12, seed: 414},
  {label: 'Summary', x: 1460, y: 640, width: 220, start: 5.42, seed: 415},
  {label: 'Business idea', x: 520, y: 712, width: 296, start: 5.72, seed: 416},
];

export const C4SightEpisode01ColdOpen = () => {
  const frame = useCurrentFrame();
  const cameraX = interpolate(frame, cameraKeyframes.frame, cameraKeyframes.x, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const cameraY = interpolate(frame, cameraKeyframes.frame, cameraKeyframes.y, {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const cameraScale = interpolate(
    frame,
    cameraKeyframes.frame,
    cameraKeyframes.scale,
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: easeOut,
    },
  );

  const chaosFrame = Math.min(frame, freezeFrame);
  const alienA = {
    x: interpolate(
      chaosFrame,
      [sec(4.1), sec(6.1), sec(8.0), freezeFrame],
      [270, 730, 520, 695],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(4.1), sec(6.1), sec(8.0), freezeFrame],
      [640, 454, 690, 560],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(4.1), sec(6.1), sec(8.0), freezeFrame],
      [-12, 14, -16, 2],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const alienWizard = {
    x: interpolate(
      chaosFrame,
      [sec(4.4), sec(6.4), sec(8.6), freezeFrame],
      [1325, 1040, 1240, 1115],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(4.4), sec(6.4), sec(8.6), freezeFrame],
      [262, 592, 428, 464],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(4.4), sec(6.4), sec(8.6), freezeFrame],
      [10, -10, 16, -5],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const saucepanAlien = {
    x: interpolate(
      chaosFrame,
      [sec(4.8), sec(6.8), sec(8.7), freezeFrame],
      [1510, 1020, 1400, 1460],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(4.8), sec(6.8), sec(8.7), freezeFrame],
      [700, 640, 734, 690],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(4.8), sec(6.8), sec(8.7), freezeFrame],
      [-8, 12, -4, 3],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };

  const isFrozen = frame >= freezeFrame && frame < sec(14.2);

  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      <div
        className="episode-cold-open"
        style={{
          transform: `translate(${cameraX}px, ${cameraY}px) scale(${cameraScale})`,
        }}
      >
        <div
          className="episode-cold-open__watermark"
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

        <section
          className="episode-cold-open__hook"
          style={visible(frame, 0, sec(14.35))}
        >
          {/* SFX placeholder 00:00.00: chalk scribble starts immediately */}
          <ChalkDustPuff
            x={225}
            y={204}
            startFrame={sec(0)}
            durationFrames={sec(0.6)}
          />
          <div className="episode-cold-open__question">
            <ChalkText startFrame={sec(-0.22)} durationFrames={sec(1.25)}>
              Is AI magic?
            </ChalkText>
          </div>

          {/* SFX placeholder 00:01.25: poof/spark as the wand enters */}
          <ChalkPoof x={952} y={226} startFrame={sec(1.15)} scale={0.92} />
          <ChalkSpark x={1170} y={170} startFrame={sec(1.45)} scale={0.74} />
          <ChalkMagicWand
            x={1095}
            y={188}
            startFrame={sec(1.35)}
            rotation={-15}
            emotion={isFrozen ? 'sad' : 'excited'}
            scale={0.96}
          />

          {/* SFX placeholder 00:04.00: chaos build, fast chalk card taps around the board */}
          <div className="episode-cold-open__cards">
            {exampleCards.map((card) => (
              <ChalkExampleCard
                key={card.label}
                x={card.x}
                y={card.y}
                width={card.width}
                height={78}
                label={card.label}
                startFrame={sec(card.start)}
                durationFrames={20}
                seed={card.seed}
                tone={card.label === 'Business idea' ? 'accent' : 'primary'}
              />
            ))}
          </div>

          <ChalkPoof x={360} y={492} startFrame={sec(4.25)} scale={0.88} />
          <ChalkPoof x={970} y={642} startFrame={sec(5.0)} scale={1.0} />
          <ChalkSpark x={1242} y={348} startFrame={sec(5.6)} scale={0.66} />
          <ChalkSpark x={735} y={792} startFrame={sec(6.5)} scale={0.72} />

          <ChalkAlien
            x={alienA.x}
            y={alienA.y}
            startFrame={sec(4.15)}
            emotion={isFrozen ? 'frozen' : 'surprised'}
            scale={0.78}
            rotation={alienA.rotation}
          />
          <div
            className="episode-cold-open__wizard-hat"
            style={{
              left: alienWizard.x + 46,
              top: alienWizard.y - 20,
              transform: `rotate(${alienWizard.rotation - 8}deg)`,
            }}
          >
            <svg viewBox="0 0 150 118" aria-hidden="true">
              <ChalkLine
                d="M 18 96 C 46 82, 102 82, 132 96 M 52 86 L 76 18 L 100 86"
                startFrame={sec(4.55)}
                durationFrames={28}
                strokeWidth={4.8}
                tone="accent"
              />
            </svg>
          </div>
          <ChalkAlien
            x={alienWizard.x}
            y={alienWizard.y}
            startFrame={sec(4.45)}
            emotion={isFrozen ? 'sad' : 'excited'}
            scale={0.68}
            rotation={alienWizard.rotation}
          />
          <ChalkSaucepan
            x={saucepanAlien.x - 74}
            y={saucepanAlien.y + 74}
            startFrame={sec(4.95)}
            scale={0.7}
            rotation={saucepanAlien.rotation * 0.4}
          />
          <ChalkAlien
            x={saucepanAlien.x}
            y={saucepanAlien.y}
            startFrame={sec(5.0)}
            emotion={isFrozen ? 'sad' : 'surprised'}
            scale={0.5}
            rotation={saucepanAlien.rotation}
          />

          {/* SFX placeholder 00:09.60: freeze hit */}
          <ChalkFreezeMoment
            x={650}
            y={320}
            startFrame={sec(9.52)}
            durationFrames={sec(0.62)}
          />
          <div className="episode-cold-open__no">
            <ChalkText startFrame={sec(9.62)} durationFrames={sec(0.42)}>
              NO.
            </ChalkText>
          </div>

          {/* SFX placeholder 00:11.20: sad alien exit and drooping wand */}
          <ChalkSadExit
            startFrame={sec(11.15)}
            durationFrames={sec(2.6)}
            from={{x: alienA.x, y: alienA.y}}
            to={{x: -260, y: 725}}
            rotation={-14}
          >
            <ChalkAlien
              x={0}
              y={0}
              startFrame={sec(9.7)}
              emotion="sad"
              scale={0.78}
            />
          </ChalkSadExit>
          <ChalkSadExit
            startFrame={sec(11.25)}
            durationFrames={sec(2.45)}
            from={{x: alienWizard.x, y: alienWizard.y}}
            to={{x: 1900, y: 560}}
            rotation={12}
          >
            <ChalkAlien
              x={0}
              y={0}
              startFrame={sec(9.8)}
              emotion="sad"
              scale={0.68}
            />
          </ChalkSadExit>
          <ChalkSadExit
            startFrame={sec(11.38)}
            durationFrames={sec(2.5)}
            from={{x: 1100, y: 195}}
            to={{x: 1850, y: 255}}
            rotation={17}
          >
            <ChalkMagicWand
              x={0}
              y={0}
              startFrame={sec(9.8)}
              emotion="sad"
              scale={0.9}
              rotation={16}
            />
          </ChalkSadExit>
        </section>

        {/* SFX placeholder 00:14.25: eraser wipe clears chaos into clean teaching mode */}
        <ChalkEraserWipe
          x={120}
          y={126}
          width={1680}
          height={812}
          startFrame={sec(14.25)}
          durationFrames={sec(0.65)}
        />

        <section
          className="episode-cold-open__not-magic"
          style={visible(frame, sec(14.42), sec(21.72))}
        >
          <div className="episode-cold-open__not-magic-title">
            <ChalkText startFrame={sec(14.05)} durationFrames={sec(0.55)}>
              AI is not magic.
            </ChalkText>
          </div>
          <ChalkUnderline
            x={520}
            y={338}
            width={880}
            startFrame={sec(15.52)}
            durationFrames={sec(0.56)}
          />
          <ChalkQuickNote
            x={420}
            y={432}
            startFrame={sec(16.05)}
            text="Not a tiny person"
            strike
          />
          <ChalkQuickNote
            x={420}
            y={540}
            startFrame={sec(17.18)}
            text="Not human thinking"
            strike
          />
          <ChalkQuickNote
            x={420}
            y={648}
            startFrame={sec(18.3)}
            text="Do not blindly trust it"
            strike
          />
          <ChalkCrossOut
            x={1168}
            y={442}
            width={250}
            height={200}
            startFrame={sec(18.7)}
            durationFrames={sec(0.5)}
          />
          <div className="episode-cold-open__tiny-person">
            <svg viewBox="0 0 260 260" aria-hidden="true">
              <ChalkLine
                d="M 128 62 C 96 64, 92 106, 126 112 C 162 110, 162 64, 128 62"
                startFrame={sec(16.5)}
                durationFrames={26}
                strokeWidth={5}
              />
              <ChalkLine
                d="M 126 112 L 126 182 M 86 142 C 112 132, 142 132, 170 144 M 108 182 L 82 232 M 144 182 L 174 232"
                startFrame={sec(16.9)}
                durationFrames={34}
                strokeWidth={5}
                tone="muted"
              />
            </svg>
          </div>
        </section>

        <ChalkEraserWipe
          x={180}
          y={256}
          width={1560}
          height={610}
          startFrame={sec(21.2)}
          durationFrames={sec(0.62)}
        />

        <section
          className="episode-cold-open__autocomplete"
          style={visible(frame, sec(21.52), sec(28.72))}
        >
          <div className="episode-cold-open__autocomplete-title">
            <ChalkText startFrame={sec(21.08)} durationFrames={sec(0.82)}>
              But not just autocomplete.
            </ChalkText>
          </div>
          <ChalkAutocompleteLine x={300} y={396} startFrame={sec(22.28)} />
          <ChalkLine
            d="M 426 508 C 520 568, 616 592, 748 598"
            startFrame={sec(23.22)}
            durationFrames={sec(0.62)}
            strokeWidth={5}
            tone="accent"
          />
          <ChalkReasoningPlan x={790} y={370} startFrame={sec(24.0)} />
          <ChalkCodeBlock x={370} y={640} startFrame={sec(25.1)} />
          <ChalkTinyDiagram x={1110} y={628} startFrame={sec(26.15)} />
        </section>

        <ChalkEraserWipe
          x={160}
          y={244}
          width={1600}
          height={666}
          startFrame={sec(28.45)}
          durationFrames={sec(0.6)}
        />

        <section
          className="episode-cold-open__surprising"
          style={visible(frame, sec(28.72), sec(34.84))}
        >
          <div className="episode-cold-open__surprising-title">
            <ChalkText startFrame={sec(28.28)} durationFrames={sec(0.72)}>
              {'Surprising \u2260 magical'}
            </ChalkText>
          </div>
          <ChalkUnderline
            x={525}
            y={338}
            width={860}
            startFrame={sec(29.18)}
            durationFrames={sec(0.52)}
          />
          <ChalkMysteryModel x={665} y={438} startFrame={sec(29.7)} />
          <ChalkMagnifier x={392} y={505} startFrame={sec(30.4)} scale={0.92} />
          <div className="episode-cold-open__unknown-notes">
            <ChalkText startFrame={sec(31.4)} durationFrames={sec(0.8)}>
              hard to trace
            </ChalkText>
          </div>
          <ChalkLine
            d="M 1264 482 C 1284 448, 1330 460, 1314 504 C 1304 530, 1284 532, 1284 558 M 1284 596 L 1284 598"
            startFrame={sec(32.1)}
            durationFrames={sec(0.88)}
            strokeWidth={7}
            tone="muted"
          />
          <ChalkLine
            d="M 478 792 C 736 814, 1038 816, 1406 790"
            startFrame={sec(33.1)}
            durationFrames={sec(0.7)}
            strokeWidth={4}
            tone="muted"
          />
        </section>

        {/* SFX placeholder 00:35.00: eraser wipe clears for final logo/title settle */}
        <ChalkEraserWipe
          x={126}
          y={128}
          width={1668}
          height={820}
          startFrame={sec(34.72)}
          durationFrames={sec(0.88)}
        />

        <section
          className="episode-cold-open__final"
          style={visible(frame, sec(35.82), sec(40.1))}
        >
          <div className="episode-cold-open__final-logo">
            <Img src={staticFile(c4SightBrand.logoAsset ?? '')} />
            <span>C4Sight</span>
          </div>
          <div className="episode-cold-open__final-line">
            <ChalkText startFrame={sec(36.12)} durationFrames={sec(1.0)}>
              AI explained clearly.
            </ChalkText>
          </div>
          <div className="episode-cold-open__final-subtitle">
            <ChalkText startFrame={sec(37.18)} durationFrames={sec(0.9)}>
              Practical. Balanced. No hype.
            </ChalkText>
          </div>
        </section>
      </div>

      <ChalkColdOpenCaption
        startFrame={sec(0.65)}
        endFrame={sec(4.1)}
        text="Sometimes it really does feel like magic."
      />
      <ChalkColdOpenCaption
        startFrame={sec(4.45)}
        endFrame={sec(9.8)}
        text="One sentence can suddenly become a lot of useful work."
      />
      <ChalkColdOpenCaption
        startFrame={sec(10.2)}
        endFrame={sec(14.2)}
        text="But the honest answer starts with no."
      />
      <ChalkColdOpenCaption
        startFrame={sec(15.6)}
        endFrame={sec(21.1)}
        text="It is software, not a tiny thinker in the machine."
      />
      <ChalkColdOpenCaption
        startFrame={sec(22.2)}
        endFrame={sec(28.4)}
        text="And modern AI is more capable than simple autocomplete."
      />
      <ChalkColdOpenCaption
        startFrame={sec(29.4)}
        endFrame={sec(34.8)}
        text="Hard to explain is not the same as magical."
      />
      <ChalkColdOpenCaption
        startFrame={sec(36.8)}
        endFrame={sec(40)}
        text="Clear, practical AI education. No hype."
      />
    </AbsoluteFill>
  );
};
