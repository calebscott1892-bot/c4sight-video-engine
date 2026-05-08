import {Img, staticFile, useCurrentFrame} from 'remotion';
import {ChalkText} from '../components/ChalkText';
import type {LogoIntroScene as LogoIntroSceneData} from '../types/video';
import {progress} from '../lib/timing';

type LogoIntroSceneProps = {
  scene: LogoIntroSceneData;
};

export const LogoIntroScene = ({scene}: LogoIntroSceneProps) => {
  const frame = useCurrentFrame();
  const logoProgress = progress(frame, 8, 38);
  const logoClip = `${Math.max(0, 100 - logoProgress * 100).toFixed(3)}%`;

  return (
    <div className="scene scene--intro">
      <div
        className="logo-intro__mark"
        style={{
          clipPath: `inset(0 ${logoClip} 0 0)`,
        }}
      >
        {scene.logoAsset ? (
          <Img
            className="logo-intro__asset"
            src={staticFile(scene.logoAsset)}
          />
        ) : (
          <span>C4</span>
        )}
      </div>

      <ChalkText
        className="logo-intro__title"
        startFrame={38}
        durationFrames={34}
      >
        {scene.title}
      </ChalkText>

      <ChalkText
        className="logo-intro__subtitle"
        startFrame={64}
        durationFrames={30}
        settledOpacity={0.88}
      >
        {scene.subtitle}
      </ChalkText>
    </div>
  );
};
