import {AbsoluteFill, Sequence} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {Caption} from '../components/Caption';
import {ChalkFilters} from '../components/ChalkFilters';
import {LogoIntroScene} from '../scenes/LogoIntroScene';
import {ChalkDiagramScene} from '../scenes/ChalkDiagramScene';
import {secondsToFrames} from '../lib/timing';
import type {SceneDefinition, VideoDefinition} from '../types/video';

type C4SightVideoProps = {
  video: VideoDefinition;
};

const SceneRenderer = ({scene}: {scene: SceneDefinition}) => {
  switch (scene.type) {
    case 'logoIntro':
      return <LogoIntroScene scene={scene} />;
    case 'chalkDiagram':
      return <ChalkDiagramScene scene={scene} />;
    default:
      return null;
  }
};

export const C4SightVideo = ({video}: C4SightVideoProps) => {
  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />

      {video.scenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={secondsToFrames(scene.start, video.fps)}
          durationInFrames={secondsToFrames(scene.duration, video.fps)}
        >
          <SceneRenderer scene={scene} />
        </Sequence>
      ))}

      {video.captions.map((cue) => (
        <Sequence
          key={cue.id}
          from={secondsToFrames(cue.start, video.fps)}
          durationInFrames={secondsToFrames(cue.duration, video.fps)}
        >
          <Caption cue={cue} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
