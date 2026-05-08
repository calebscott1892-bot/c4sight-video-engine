import {useVideoConfig} from 'remotion';
import {ChalkDiagram} from '../components/ChalkDiagram';
import {ChalkText} from '../components/ChalkText';
import {secondsToFrames} from '../lib/timing';
import type {ChalkDiagramScene as ChalkDiagramSceneData} from '../types/video';

type ChalkDiagramSceneProps = {
  scene: ChalkDiagramSceneData;
};

export const ChalkDiagramScene = ({scene}: ChalkDiagramSceneProps) => {
  const {fps} = useVideoConfig();

  return (
    <div className="scene scene--diagram">
      <ChalkText
        className="scene-title"
        startFrame={secondsToFrames(scene.titleWriteStart, fps)}
        durationFrames={secondsToFrames(scene.titleWriteDuration, fps)}
      >
        {scene.title}
      </ChalkText>
      <ChalkDiagram diagram={scene.diagram} startSeconds={scene.diagramStart} />
    </div>
  );
};
