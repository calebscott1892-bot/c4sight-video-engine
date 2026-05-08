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
  ChalkBrainIcon,
  ChalkCodeBlock,
  ChalkColdOpenCaption,
  ChalkExampleCard,
  ChalkImageOutputCard,
  ChalkMagnifier,
  ChalkMysteryModel,
  ChalkQuickNote,
  ChalkReasoningPlan,
  ChalkTinyDiagram,
  ChalkTinyPersonMachine,
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

export const episode01ColdOpenV2DurationSeconds = 40;

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
  x: [0, -10, 14, -8, 12, -12, 4, 0],
  y: [0, -8, -18, 2, -8, 0, -4, 0],
  scale: [1.018, 1.034, 1.042, 1.026, 1.034, 1.028, 1.02, 1.012],
};

const freezeFrame = sec(9.28);
const sadExitFrame = sec(11.05);

const visible = (frame: number, startFrame: number, endFrame: number) => ({
  opacity: frame >= startFrame && frame < endFrame ? 1 : 0,
  pointerEvents: 'none' as const,
});

const hookCards = [
  {label: 'Email', x: 182, y: 384, width: 184, start: 3.58, seed: 510},
  {label: 'Assignment', x: 314, y: 516, width: 270, start: 3.78, seed: 511},
  {label: 'Website', x: 782, y: 286, width: 220, start: 3.98, seed: 512},
  {label: 'Image', x: 1032, y: 674, width: 188, start: 4.14, seed: 513},
  {label: 'Code', x: 1326, y: 408, width: 176, start: 4.3, seed: 514},
  {label: 'Summary', x: 1412, y: 558, width: 218, start: 4.42, seed: 515},
  {label: 'Business idea', x: 250, y: 684, width: 306, start: 4.52, seed: 516},
];

export const C4SightEpisode01ColdOpenV2 = () => {
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
      [sec(4.0), sec(6.2), sec(8.1), freezeFrame],
      [600, 722, 625, 700],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(4.0), sec(6.2), sec(8.1), freezeFrame],
      [636, 540, 690, 650],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(4.0), sec(6.2), sec(8.1), freezeFrame],
      [-8, 7, -9, 0],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const alienWizard = {
    x: interpolate(
      chaosFrame,
      [sec(4.25), sec(6.2), sec(8.5), freezeFrame],
      [1145, 1068, 1228, 1192],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(4.25), sec(6.2), sec(8.5), freezeFrame],
      [470, 526, 430, 462],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(4.25), sec(6.2), sec(8.5), freezeFrame],
      [6, -5, 8, -4],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const saucepanAlien = {
    x: interpolate(
      chaosFrame,
      [sec(4.72), sec(6.5), sec(8.6), freezeFrame],
      [1460, 1370, 1508, 1438],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(4.72), sec(6.5), sec(8.6), freezeFrame],
      [746, 704, 754, 718],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(4.72), sec(6.5), sec(8.6), freezeFrame],
      [-4, 5, -3, 2],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const isFrozen = frame >= freezeFrame && frame < sec(14.1);
  const showBaseCharacters = frame < sadExitFrame;

  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      <div
        className="episode-cold-open episode-cold-open-v2"
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
          {/* SFX placeholder 00:00.00: fast chalk scribble already resolving into the hook */}
          <ChalkDustPuff
            x={212}
            y={188}
            startFrame={sec(0)}
            durationFrames={sec(0.55)}
          />
          <div className="episode-cold-open__question episode-cold-open-v2__question">
            <ChalkText startFrame={sec(-0.58)} durationFrames={sec(0.44)}>
              Is AI magic?
            </ChalkText>
          </div>
          <svg
            className="episode-cold-open-v2__magic-circle"
            viewBox="0 0 420 180"
            aria-hidden="true"
          >
            <ChalkLine
              d="M 208 18 C 326 26, 386 92, 332 138 C 244 196, 48 150, 44 86 C 42 36, 108 12, 208 18"
              startFrame={sec(0.45)}
              durationFrames={sec(0.52)}
              strokeWidth={5}
              tone="muted"
            />
          </svg>

          {/* SFX placeholder 00:01.10: poof/spark as the wand enters */}
          <ChalkPoof x={984} y={224} startFrame={sec(1.05)} scale={0.9} />
          <ChalkSpark x={1200} y={172} startFrame={sec(1.34)} scale={0.72} />
          {showBaseCharacters && (
            <ChalkMagicWand
              x={1128}
              y={180}
              startFrame={sec(1.18)}
              rotation={isFrozen ? 16 : -16}
              emotion={isFrozen ? 'sad' : 'excited'}
              scale={0.92}
            />
          )}

          {/* SFX placeholder 00:04.00: chaos build, controlled chalk card taps around the board */}
          <div className="episode-cold-open-v2__cards">
            {hookCards.map((card, index) => (
              <ChalkExampleCard
                key={card.label}
                x={card.x}
                y={card.y}
                width={card.width}
                height={78}
                label={card.label}
                startFrame={sec(card.start)}
                durationFrames={16}
                seed={card.seed}
                tone={index % 3 === 1 ? 'muted' : 'primary'}
                style={{transform: `rotate(${index % 2 === 0 ? -0.8 : 0.7}deg)`}}
              />
            ))}
          </div>

          <ChalkPoof x={574} y={604} startFrame={sec(4.15)} scale={0.82} />
          <ChalkPoof x={1262} y={510} startFrame={sec(4.65)} scale={0.8} />
          <ChalkSpark x={995} y={602} startFrame={sec(5.15)} scale={0.62} />
          <ChalkSpark x={674} y={778} startFrame={sec(5.95)} scale={0.64} />

          {showBaseCharacters && (
            <>
              <ChalkAlien
                x={alienA.x}
                y={alienA.y}
                startFrame={sec(4.05)}
                emotion={isFrozen ? 'frozen' : 'surprised'}
                scale={0.62}
                rotation={alienA.rotation}
              />
              <div
                className="episode-cold-open__wizard-hat episode-cold-open-v2__wizard-hat"
                style={{
                  left: alienWizard.x + 34,
                  top: alienWizard.y - 18,
                  transform: `rotate(${alienWizard.rotation - 6}deg)`,
                }}
              >
                <svg viewBox="0 0 150 118" aria-hidden="true">
                  <ChalkLine
                    d="M 18 96 C 46 82, 102 82, 132 96 M 52 86 L 76 18 L 100 86"
                    startFrame={sec(4.3)}
                    durationFrames={24}
                    strokeWidth={4.8}
                    tone="accent"
                  />
                </svg>
              </div>
              <ChalkAlien
                x={alienWizard.x}
                y={alienWizard.y}
                startFrame={sec(4.28)}
                emotion={isFrozen ? 'sad' : 'excited'}
                scale={0.56}
                rotation={alienWizard.rotation}
              />
              <ChalkSaucepan
                x={saucepanAlien.x - 72}
                y={saucepanAlien.y + 72}
                startFrame={sec(4.72)}
                scale={0.58}
                rotation={saucepanAlien.rotation * 0.4}
              />
              <ChalkAlien
                x={saucepanAlien.x}
                y={saucepanAlien.y}
                startFrame={sec(4.8)}
                emotion={isFrozen ? 'sad' : 'surprised'}
                scale={0.42}
                rotation={saucepanAlien.rotation}
              />
            </>
          )}

          {/* SFX placeholder 00:09.28: freeze hit */}
          <ChalkFreezeMoment
            x={650}
            y={318}
            startFrame={sec(9.18)}
            durationFrames={sec(0.58)}
          />
          <div className="episode-cold-open__no episode-cold-open-v2__no">
            <ChalkText startFrame={sec(9.18)} durationFrames={sec(0.28)}>
              NO.
            </ChalkText>
          </div>

          {/* SFX placeholder 00:11.05: sad alien exit and drooping wand */}
          <ChalkSadExit
            startFrame={sadExitFrame}
            durationFrames={sec(2.35)}
            from={{x: alienA.x, y: alienA.y}}
            to={{x: -250, y: 730}}
            rotation={-12}
          >
            <ChalkAlien
              x={0}
              y={0}
              startFrame={sec(9.5)}
              emotion="sad"
              scale={0.62}
            />
          </ChalkSadExit>
          <ChalkSadExit
            startFrame={sec(11.18)}
            durationFrames={sec(2.25)}
            from={{x: alienWizard.x, y: alienWizard.y}}
            to={{x: 1900, y: 522}}
            rotation={9}
          >
            <ChalkAlien
              x={0}
              y={0}
              startFrame={sec(9.5)}
              emotion="sad"
              scale={0.56}
            />
          </ChalkSadExit>
          <ChalkSadExit
            startFrame={sec(11.28)}
            durationFrames={sec(2.28)}
            from={{x: 1134, y: 186}}
            to={{x: 1880, y: 252}}
            rotation={15}
          >
            <ChalkMagicWand
              x={0}
              y={0}
              startFrame={sec(9.5)}
              emotion="sad"
              scale={0.86}
              rotation={18}
            />
          </ChalkSadExit>
        </section>

        {/* SFX placeholder 00:14.00: eraser wipe clears chaos into clean teaching mode */}
        <ChalkEraserWipe
          x={116}
          y={120}
          width={1690}
          height={824}
          startFrame={sec(13.98)}
          durationFrames={sec(0.62)}
        />

        <section
          className="episode-cold-open__not-magic episode-cold-open-v2__not-magic"
          style={visible(frame, sec(14.42), sec(21.56))}
        >
          <div className="episode-cold-open__not-magic-title episode-cold-open-v2__teaching-title">
            <ChalkText startFrame={sec(13.92)} durationFrames={sec(0.38)}>
              AI is not magic.
            </ChalkText>
          </div>
          <ChalkUnderline
            x={520}
            y={330}
            width={880}
            startFrame={sec(14.3)}
            durationFrames={sec(0.36)}
          />
          <ChalkTinyPersonMachine x={250} y={405} startFrame={sec(13.74)} />
          <ChalkCrossOut
            x={274}
            y={424}
            width={300}
            height={244}
            startFrame={sec(14.38)}
            durationFrames={sec(0.36)}
          />
          <ChalkBrainIcon x={800} y={418} startFrame={sec(13.82)} />
          <ChalkCrossOut
            x={808}
            y={428}
            width={300}
            height={214}
            startFrame={sec(14.5)}
            durationFrames={sec(0.36)}
          />
          <ChalkQuickNote
            x={230}
            y={722}
            startFrame={sec(13.48)}
            text="Not a tiny person"
            width={420}
            strike
          />
          <ChalkQuickNote
            x={740}
            y={722}
            startFrame={sec(13.58)}
            text="Not human thinking"
            width={420}
            strike
          />
          <ChalkQuickNote
            x={1190}
            y={722}
            startFrame={sec(13.68)}
            text="Do not blindly trust it"
            width={500}
            strike
          />
        </section>

        <ChalkEraserWipe
          x={166}
          y={234}
          width={1600}
          height={654}
          startFrame={sec(21.06)}
          durationFrames={sec(0.58)}
        />

        <section
          className="episode-cold-open__autocomplete episode-cold-open-v2__autocomplete"
          style={visible(frame, sec(21.28), sec(28.72))}
        >
          <div className="episode-cold-open__autocomplete-title episode-cold-open-v2__teaching-title">
            <ChalkText startFrame={sec(20.72)} durationFrames={sec(0.42)}>
              But not just autocomplete.
            </ChalkText>
          </div>
          <ChalkAutocompleteLine x={276} y={388} startFrame={sec(19.86)} />
          <ChalkLine
            d="M 425 506 C 530 552, 630 574, 748 578"
            startFrame={sec(21.82)}
            durationFrames={sec(0.42)}
            strokeWidth={5}
            tone="accent"
          />
          <ChalkReasoningPlan x={790} y={360} startFrame={sec(20.5)} />
          <ChalkCodeBlock x={356} y={632} startFrame={sec(23.8)} />
          <ChalkImageOutputCard x={1130} y={628} startFrame={sec(25.15)} />
          <ChalkTinyDiagram x={1110} y={396} startFrame={sec(26.06)} />
        </section>

        <ChalkEraserWipe
          x={154}
          y={230}
          width={1620}
          height={690}
          startFrame={sec(28.32)}
          durationFrames={sec(0.52)}
        />

        <section
          className="episode-cold-open__surprising episode-cold-open-v2__surprising"
          style={visible(frame, sec(28.48), sec(35.28))}
        >
          <div className="episode-cold-open__surprising-title episode-cold-open-v2__teaching-title">
            <ChalkText startFrame={sec(27.92)} durationFrames={sec(0.42)}>
              {'Surprising \u2260 magical'}
            </ChalkText>
          </div>
          <ChalkUnderline
            x={525}
            y={330}
            width={860}
            startFrame={sec(28.38)}
            durationFrames={sec(0.36)}
          />
          <ChalkMysteryModel x={652} y={418} startFrame={sec(27.54)} />
          <ChalkMagnifier x={388} y={484} startFrame={sec(27.64)} scale={0.88} />
          <div className="episode-cold-open__unknown-notes episode-cold-open-v2__unknown-notes">
            <ChalkText startFrame={sec(27.98)} durationFrames={sec(0.35)}>
              hard to trace
            </ChalkText>
          </div>
          <ChalkLine
            d="M 1288 462 C 1306 426, 1358 438, 1340 486 C 1330 516, 1306 516, 1306 548 M 1306 584 L 1306 586"
            startFrame={sec(28.12)}
            durationFrames={sec(0.54)}
            strokeWidth={7}
            tone="muted"
          />
          <ChalkLine
            d="M 492 802 C 746 822, 1038 824, 1406 800"
            startFrame={sec(30.6)}
            durationFrames={sec(0.62)}
            strokeWidth={4}
            tone="muted"
          />
        </section>

        {/* SFX placeholder 00:34.35: eraser wipe clears for final logo/title settle */}
        <ChalkEraserWipe
          x={126}
          y={124}
          width={1668}
          height={824}
          startFrame={sec(34.35)}
          durationFrames={sec(0.58)}
        />

        <section
          className="episode-cold-open__final episode-cold-open-v2__final"
          style={visible(frame, sec(34.72), sec(40.1))}
        >
          <div className="episode-cold-open__final-logo episode-cold-open-v2__final-logo">
            <Img src={staticFile(c4SightBrand.logoAsset ?? '')} />
            <span>C4Sight</span>
          </div>
          <div className="episode-cold-open__final-line">
            <ChalkText startFrame={sec(34.18)} durationFrames={sec(0.38)}>
              AI explained clearly.
            </ChalkText>
          </div>
          <div className="episode-cold-open__final-subtitle">
            <ChalkText startFrame={sec(35.18)} durationFrames={sec(0.52)}>
              Practical. Balanced. No hype.
            </ChalkText>
          </div>
          <svg
            className="episode-cold-open-v2__final-rule"
            viewBox="0 0 720 34"
            aria-hidden="true"
          >
            <ChalkLine
              d="M 10 17 C 178 10, 312 23, 486 16 C 574 12, 642 16, 710 14"
              startFrame={sec(35.9)}
              durationFrames={sec(0.48)}
              strokeWidth={4.5}
              tone="muted"
            />
          </svg>
        </section>
      </div>

      <ChalkColdOpenCaption
        startFrame={sec(0.4)}
        endFrame={sec(4.0)}
        text="Sometimes it really does feel like magic."
      />
      <ChalkColdOpenCaption
        startFrame={sec(4.08)}
        endFrame={sec(9.75)}
        text="One sentence can suddenly become a lot of useful work."
      />
      <ChalkColdOpenCaption
        startFrame={sec(10.0)}
        endFrame={sec(14.2)}
        text="But the honest answer starts with no."
      />
      <ChalkColdOpenCaption
        startFrame={sec(15.0)}
        endFrame={sec(21.0)}
        text="It is software, not a tiny thinker in the machine."
      />
      <ChalkColdOpenCaption
        startFrame={sec(22.0)}
        endFrame={sec(28.18)}
        text="Modern AI is more capable than simple autocomplete."
      />
      <ChalkColdOpenCaption
        startFrame={sec(29.05)}
        endFrame={sec(34.7)}
        text="Hard to explain is not the same as magical."
      />
      <ChalkColdOpenCaption
        startFrame={sec(36.5)}
        endFrame={sec(40)}
        text="Clear, practical AI education. No hype."
      />
    </AbsoluteFill>
  );
};
