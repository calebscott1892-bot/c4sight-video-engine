import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {ChalkEraserWipe, ChalkUnderline} from '../components/ChalkAnnotations';
import {
  ChalkAlien,
  ChalkBurstTransition,
  ChalkExcitedReturn,
  ChalkFreezeMoment,
  ChalkMagicWand,
  ChalkPoof,
  ChalkSadExit,
  ChalkSaucepan,
  ChalkSpark,
} from '../components/ChalkCreativeBurst';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkText} from '../components/ChalkText';
import {c4SightBrand} from '../data/brand';
import {boardZones, videoLayout} from '../layout/blackboardLayout';
import {easeOut} from '../lib/timing';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const magicHookBurstDurationSeconds = 24;

const cameraKeyframes = {
  frame: [0, sec(4), sec(7.4), sec(12), sec(17.3), sec(24)],
  x: [0, -18, 18, -12, 16, 0],
  y: [0, -12, -24, 6, -10, 0],
  scale: [1.012, 1.03, 1.045, 1.022, 1.038, 1.02],
};

const freezeFrame = sec(7.35);

export const C4SightMagicHookBurst = () => {
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
      [sec(1.8), sec(3.4), sec(5.5), freezeFrame],
      [260, 610, 430, 720],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(1.8), sec(3.4), sec(5.5), freezeFrame],
      [520, 390, 610, 456],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(1.8), sec(3.4), sec(5.5), freezeFrame],
      [-10, 12, -18, 4],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const alienB = {
    x: interpolate(
      chaosFrame,
      [sec(2.2), sec(4.2), sec(6.2), freezeFrame],
      [1280, 930, 1300, 1100],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(2.2), sec(4.2), sec(6.2), freezeFrame],
      [340, 640, 470, 530],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(2.2), sec(4.2), sec(6.2), freezeFrame],
      [14, -10, 16, -6],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const panAlien = {
    x: interpolate(
      chaosFrame,
      [sec(2.8), sec(4.8), sec(6.6), freezeFrame],
      [1470, 1020, 1310, 1395],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    y: interpolate(
      chaosFrame,
      [sec(2.8), sec(4.8), sec(6.6), freezeFrame],
      [700, 515, 655, 676],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
    rotation: interpolate(
      chaosFrame,
      [sec(2.8), sec(4.8), sec(6.6), freezeFrame],
      [-8, 10, -4, 2],
      {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: easeOut},
    ),
  };
  const isFrozen = frame >= freezeFrame && frame < sec(12.1);
  const chaosVisible = frame < sec(10.65);

  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      <div
        className="magic-hook"
        style={{
          transform: `translate(${cameraX}px, ${cameraY}px) scale(${cameraScale})`,
        }}
      >
        <div
          className="magic-hook__watermark"
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

        {/* SFX placeholder 00:00.00: chalk scribble starts the question immediately */}
        <div className="magic-hook__question">
          <ChalkText startFrame={sec(-0.24)} durationFrames={sec(1.16)}>
            Is AI magic?
          </ChalkText>
        </div>

        <div
          className="magic-hook__chaos"
          style={{opacity: chaosVisible ? 1 : 0}}
        >
          {/* SFX placeholder 00:00.85: wand scribble and first tiny spark */}
          <ChalkMagicWand
            x={1095}
            y={176}
            startFrame={sec(0.85)}
            rotation={-14}
            emotion={isFrozen ? 'sad' : 'excited'}
          />
          <ChalkSpark x={1328} y={164} startFrame={sec(1.35)} scale={0.8} />

          {/* SFX placeholder 00:02.00: poof, poof, suspicious chalk activity */}
          <ChalkPoof x={390} y={405} startFrame={sec(2.0)} scale={0.94} />
          <ChalkPoof x={1182} y={582} startFrame={sec(2.55)} scale={1.1} />
          <ChalkSpark x={720} y={328} startFrame={sec(3.0)} scale={0.65} />
          <ChalkPoof x={1472} y={548} startFrame={sec(4.0)} scale={0.9} />
          <ChalkSpark x={536} y={704} startFrame={sec(5.1)} scale={0.75} />

          <ChalkAlien
            x={alienA.x}
            y={alienA.y}
            startFrame={sec(2.15)}
            emotion={isFrozen ? 'frozen' : 'surprised'}
            scale={0.86}
            rotation={alienA.rotation}
          />
          <ChalkAlien
            x={alienB.x}
            y={alienB.y}
            startFrame={sec(2.55)}
            emotion={isFrozen ? 'sad' : 'excited'}
            scale={0.72}
            rotation={alienB.rotation}
          />
          <ChalkSaucepan
            x={panAlien.x - 62}
            y={panAlien.y + 72}
            startFrame={sec(3.2)}
            scale={0.78}
            rotation={panAlien.rotation * 0.35}
          />
          <ChalkAlien
            x={panAlien.x}
            y={panAlien.y}
            startFrame={sec(3.25)}
            emotion={isFrozen ? 'sad' : 'surprised'}
            scale={0.58}
            rotation={panAlien.rotation}
          />
        </div>

        {/* SFX placeholder 00:07.20: hard freeze hit */}
        <ChalkFreezeMoment
          x={650}
          y={330}
          startFrame={sec(7.18)}
          durationFrames={sec(0.65)}
        />
        <div className="magic-hook__no">
          <ChalkText startFrame={sec(7.22)} durationFrames={sec(0.45)}>
            NO.
          </ChalkText>
        </div>

        {/* SFX placeholder 00:09.00: tiny sad trombone-style beat as the chalk gag exits */}
        <ChalkSadExit
          startFrame={sec(8.95)}
          durationFrames={sec(2.5)}
          from={{x: alienA.x, y: alienA.y}}
          to={{x: -240, y: 635}}
          rotation={-12}
        >
          <ChalkAlien
            x={0}
            y={0}
            startFrame={sec(7.55)}
            emotion="sad"
            scale={0.86}
          />
        </ChalkSadExit>
        <ChalkSadExit
          startFrame={sec(9.08)}
          durationFrames={sec(2.45)}
          from={{x: alienB.x, y: alienB.y}}
          to={{x: 1880, y: 670}}
          rotation={10}
        >
          <ChalkAlien
            x={0}
            y={0}
            startFrame={sec(7.6)}
            emotion="sad"
            scale={0.72}
          />
        </ChalkSadExit>
        <ChalkSadExit
          startFrame={sec(9.2)}
          durationFrames={sec(2.35)}
          from={{x: 1120, y: 200}}
          to={{x: 1840, y: 240}}
          rotation={14}
        >
          <ChalkMagicWand
            x={0}
            y={0}
            startFrame={sec(7.6)}
            emotion="sad"
            scale={0.9}
          />
        </ChalkSadExit>

        <ChalkEraserWipe
          x={560}
          y={320}
          width={820}
          height={300}
          startFrame={sec(10.9)}
          durationFrames={sec(0.62)}
        />

        <div className="magic-hook__actually">
          <ChalkText startFrame={sec(12.05)} durationFrames={sec(1.3)}>
            Well... actually, kinda?
          </ChalkText>
        </div>

        {/* SFX placeholder 00:14.00: re-entry excitement, little chalk whoosh */}
        <ChalkExcitedReturn
          startFrame={sec(14.0)}
          durationFrames={sec(2.25)}
          from={{x: -330, y: 475}}
          to={{x: 372, y: 516}}
        >
          <ChalkAlien
            x={0}
            y={0}
            startFrame={sec(13.85)}
            emotion="excited"
            scale={0.86}
          />
        </ChalkExcitedReturn>
        <ChalkExcitedReturn
          startFrame={sec(14.15)}
          durationFrames={sec(2.15)}
          from={{x: 1940, y: 320}}
          to={{x: 1194, y: 436}}
        >
          <ChalkAlien
            x={0}
            y={0}
            startFrame={sec(13.95)}
            emotion="excited"
            scale={0.74}
          />
        </ChalkExcitedReturn>
        <ChalkExcitedReturn
          startFrame={sec(14.3)}
          durationFrames={sec(2.05)}
          from={{x: 1940, y: 640}}
          to={{x: 1435, y: 654}}
        >
          <ChalkSaucepan
            x={-70}
            y={80}
            startFrame={sec(14.05)}
            scale={0.76}
          />
          <ChalkAlien
            x={0}
            y={0}
            startFrame={sec(14.1)}
            emotion="excited"
            scale={0.56}
          />
        </ChalkExcitedReturn>
        <ChalkSpark x={670} y={455} startFrame={sec(14.3)} scale={0.7} />
        <ChalkPoof x={1160} y={665} startFrame={sec(14.8)} scale={1.0} />
        <ChalkSpark x={1510} y={490} startFrame={sec(15.35)} scale={0.78} />

        {/* SFX placeholder 00:17.35: burst transition back to clean teaching mode */}
        <ChalkBurstTransition
          startFrame={sec(17.3)}
          durationFrames={sec(0.86)}
        />

        <div className="magic-hook__teaching-line">
          <ChalkText startFrame={sec(18.35)} durationFrames={sec(1.7)}>
            Some AI behaviour is still
          </ChalkText>
          <ChalkText startFrame={sec(20.4)} durationFrames={sec(1.08)}>
            hard to fully explain.
          </ChalkText>
        </div>
        <ChalkUnderline
          x={610}
          y={686}
          width={700}
          startFrame={sec(21.68)}
          durationFrames={sec(0.72)}
        />
      </div>
    </AbsoluteFill>
  );
};
