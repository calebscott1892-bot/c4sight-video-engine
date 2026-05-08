import {AbsoluteFill} from 'remotion';
import {BlackboardBackground} from '../components/BlackboardBackground';
import {ChalkFilters} from '../components/ChalkFilters';
import {ChalkUnderline} from '../components/ChalkAnnotations';
import {ChalkText} from '../components/ChalkText';

export const descenderPreviewDurationSeconds = 4;

export const ChalkTextDescenderPreview = () => {
  return (
    <AbsoluteFill>
      <ChalkFilters />
      <BlackboardBackground />
      <div className="descender-preview">
        <ChalkText
          className="descender-preview__phrase"
          startFrame={0}
          durationFrames={70}
        >
          AI can help you grow your business quickly
        </ChalkText>
        <ChalkUnderline
          x={245}
          y={650}
          width={1390}
          startFrame={72}
          durationFrames={24}
        />
      </div>
    </AbsoluteFill>
  );
};
