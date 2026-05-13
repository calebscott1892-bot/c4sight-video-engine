import {loadFont as loadArchivo} from '@remotion/google-fonts/Archivo';
import {loadFont as loadCaveat} from '@remotion/google-fonts/Caveat';
import {loadFont as loadDMSans} from '@remotion/google-fonts/DMSans';
import {loadFont as loadFraunces} from '@remotion/google-fonts/Fraunces';
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
import {
  C4SightChannelManifesto,
  channelManifestoDurationSeconds,
} from './video/C4SightChannelManifesto';
import {
  C4SightEpisode01ColdOpen,
  episode01ColdOpenDurationSeconds,
} from './video/C4SightEpisode01ColdOpen';
import {
  C4SightEpisode01,
  episode01DurationSeconds,
} from './video/C4SightEpisode01';
import {
  C4SightEpisode01ColdOpenV2,
  episode01ColdOpenV2DurationSeconds,
} from './video/C4SightEpisode01ColdOpenV2';
import {
  C4SightEpisode01_Animatic,
  episode01AnimaticDurationSeconds,
} from './video/C4SightEpisode01_Animatic';
import {
  C4SightDesignSystemPreview,
  c4SightDesignSystemPreviewDurationSeconds,
} from './video/C4SightDesignSystemPreview';
import {
  C4SightDesignSystemPreviewV2,
  c4SightDesignSystemPreviewV2DurationSeconds,
} from './video/C4SightDesignSystemPreviewV2';
import {
  C4SightAssetReadinessPreview,
  c4SightAssetReadinessPreviewDurationSeconds,
} from './video/C4SightAssetReadinessPreview';
import {
  C4SightExternalDesignSystemPreview,
  c4SightExternalDesignSystemPreviewDurationSeconds,
} from './video/C4SightExternalDesignSystemPreview';
import {secondsToFrames} from './lib/timing';
import {videoLayout} from './layout/blackboardLayout';
import './styles.css';

loadFraunces('normal', {weights: ['800'], subsets: ['latin']});
loadDMSans('normal', {weights: ['600', '700'], subsets: ['latin']});
loadArchivo('normal', {weights: ['400', '700', '900'], subsets: ['latin']});
loadArchivo('italic', {weights: ['500', '900'], subsets: ['latin']});
loadCaveat('normal', {
  weights: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

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
      <Composition
        id="ChannelManifesto"
        component={C4SightChannelManifesto}
        durationInFrames={secondsToFrames(
          channelManifestoDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightEpisode01ColdOpen"
        component={C4SightEpisode01ColdOpen}
        durationInFrames={secondsToFrames(
          episode01ColdOpenDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="Episode01"
        component={C4SightEpisode01}
        durationInFrames={secondsToFrames(
          episode01DurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightEpisode01ColdOpenV2"
        component={C4SightEpisode01ColdOpenV2}
        durationInFrames={secondsToFrames(
          episode01ColdOpenV2DurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightEpisode01-Animatic"
        component={C4SightEpisode01_Animatic}
        durationInFrames={secondsToFrames(
          episode01AnimaticDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightDesignSystemPreview"
        component={C4SightDesignSystemPreview}
        durationInFrames={secondsToFrames(
          c4SightDesignSystemPreviewDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightDesignSystemPreviewV2"
        component={C4SightDesignSystemPreviewV2}
        durationInFrames={secondsToFrames(
          c4SightDesignSystemPreviewV2DurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightAssetReadinessPreview"
        component={C4SightAssetReadinessPreview}
        durationInFrames={secondsToFrames(
          c4SightAssetReadinessPreviewDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
      <Composition
        id="C4SightExternalDesignSystemPreview"
        component={C4SightExternalDesignSystemPreview}
        durationInFrames={secondsToFrames(
          c4SightExternalDesignSystemPreviewDurationSeconds,
          videoLayout.fps,
        )}
        fps={videoLayout.fps}
        width={videoLayout.width}
        height={videoLayout.height}
      />
    </>
  );
};
