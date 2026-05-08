import type {CSSProperties, ReactNode} from 'react';
import {useCurrentFrame} from 'remotion';
import {progress} from '../lib/timing';

type ChalkTextProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  startFrame?: number;
  durationFrames?: number;
  settledOpacity?: number;
};

export const ChalkText = ({
  children,
  className,
  style,
  startFrame = 0,
  durationFrames = 40,
  settledOpacity = 1,
}: ChalkTextProps) => {
  const frame = useCurrentFrame();
  const reveal = progress(frame, startFrame, durationFrames);
  const clipRight = `${Math.max(0, 100 - reveal * 100).toFixed(3)}%`;
  const revealClip = `inset(-32% ${clipRight} -46% 0)`;

  return (
    <span
      className={['chalk-text', className].filter(Boolean).join(' ')}
      style={style}
    >
      <span className="chalk-text__spacer">{children}</span>
      <span
        className="chalk-text__powder"
        style={{
          clipPath: revealClip,
          opacity: settledOpacity * 0.55,
        }}
      >
        {children}
      </span>
      <span
        className="chalk-text__written"
        style={{
          clipPath: revealClip,
          opacity: settledOpacity,
        }}
      >
        {children}
      </span>
    </span>
  );
};
