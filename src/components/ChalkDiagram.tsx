import {useCurrentFrame, useVideoConfig} from 'remotion';
import {ChalkArrow, ChalkBox} from './ChalkShapes';
import {ChalkText} from './ChalkText';
import type {DiagramSpec} from '../types/video';
import {secondsToFrames} from '../lib/timing';

type ChalkDiagramProps = {
  diagram: DiagramSpec;
  startSeconds?: number;
};

const getNodeCenter = (
  diagram: DiagramSpec,
  id: string,
  side: 'left' | 'right',
) => {
  const node = diagram.nodes.find((item) => item.id === id);

  if (!node) {
    throw new Error(`Diagram node "${id}" was not found.`);
  }

  return {
    x: side === 'left' ? node.x : node.x + node.width,
    y: node.y + node.height / 2,
  };
};

export const ChalkDiagram = ({diagram, startSeconds = 0}: ChalkDiagramProps) => {
  useCurrentFrame();
  const {fps} = useVideoConfig();
  const startFrame = secondsToFrames(startSeconds, fps);
  const nodeStepFrames = 58;
  const boxDurationFrames = 28;
  const labelDurationFrames = 30;
  const arrowDurationFrames = 30;

  const nodeBuildStart = (index: number) => startFrame + index * nodeStepFrames;

  return (
    <div className="diagram">
      <svg
        className="diagram__ink"
        viewBox="0 0 1920 1080"
        aria-hidden="true"
      >
        {diagram.nodes.map((node, index) => (
          <ChalkBox
            key={node.id}
            x={node.x}
            y={node.y}
            width={node.width}
            height={node.height}
            seed={index + 1}
            startFrame={nodeBuildStart(index)}
            durationFrames={boxDurationFrames}
          />
        ))}

        {diagram.arrows.map((arrow, index) => {
          const from = getNodeCenter(diagram, arrow.from, 'right');
          const to = getNodeCenter(diagram, arrow.to, 'left');
          const bend = index % 2 === 0 ? -8 : 8;
          const targetIndex = diagram.nodes.findIndex(
            (node) => node.id === arrow.to,
          );
          const arrowStart =
            nodeBuildStart(targetIndex) +
            boxDurationFrames +
            labelDurationFrames +
            8;

          return (
            <ChalkArrow
              key={arrow.id}
              from={{x: from.x + 24, y: from.y + bend}}
              to={{x: to.x - 24, y: to.y - bend}}
              bend={bend}
              startFrame={arrowStart}
              durationFrames={arrowDurationFrames}
            />
          );
        })}
      </svg>

      {diagram.nodes.map((node, index) => (
        <ChalkText
          key={node.id}
          className="diagram__label"
          startFrame={nodeBuildStart(index) + boxDurationFrames + 4}
          durationFrames={labelDurationFrames}
          style={{
            left: node.x,
            top: node.y,
            width: node.width,
            height: node.height,
          }}
        >
          {node.label}
        </ChalkText>
      ))}
    </div>
  );
};
