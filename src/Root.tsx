import {Composition} from 'remotion';
import {motionTestVideo} from './data/motionTest';
import {C4SightVideo} from './video/C4SightVideo';
import {C4SightStyleLab, styleLabDurationSeconds} from './video/C4SightStyleLab';
import {
  ChalkTextDescenderPreview,
  descenderPreviewDurationSeconds,
} from './video/ChalkTextDescenderPreview';
import {
  C4SightTeachingBeatTest,
  teachingBeatDurationSeconds,
} from './video/C4SightTeachingBeatTest';
import {
  C4SightTeachingBeatTestV2,
  teachingBeatV2DurationSeconds,
} from './video/C4SightTeachingBeatTestV2';
import {
  C4SightMagicHookBurst,
  magicHookBurstDurationSeconds,
} from './video/C4SightMagicHookBurst';
import {secondsToFrames} from './lib/timing';
import {videoLayout} from './layout/blackboardLayout';
import './styles.css';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id={motionTestVideo.id}
        component={C4SightVideo}
        durationInFrames={secondsToFrames(
          motionTestVideo.durationSeconds,
          motionTestVideo.fps,
        )}
        fps={motionTestVideo.fps}
        width={motionTestVideo.width}
        height={motionTestVideo.height}
        defaultProps={{
          video: motionTestVideo,
        }}
      />
      <Composition
        id="C4SightStyleLab"
        component={C4SightStyleLab}
        durationInFrames={secondsToFrames(
          styleLabDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="ChalkTextDescenderPreview"
        component={ChalkTextDescenderPreview}
        durationInFrames={secondsToFrames(
          descenderPreviewDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightTeachingBeatTest"
        component={C4SightTeachingBeatTest}
        durationInFrames={secondsToFrames(
          teachingBeatDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightTeachingBeatTestV2"
        component={C4SightTeachingBeatTestV2}
        durationInFrames={secondsToFrames(
          teachingBeatV2DurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightMagicHookBurst"
        component={C4SightMagicHookBurst}
        durationInFrames={secondsToFrames(
          magicHookBurstDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
    </>
  );
};
