import {useCurrentFrame} from 'remotion';
import type {CaptionCue} from '../types/video';
import {progress} from '../lib/timing';

type CaptionProps = {
  cue: CaptionCue;
};

export const Caption = ({cue}: CaptionProps) => {
  const frame = useCurrentFrame();
  const lineDraw = progress(frame, 0, 22);
  const textDraw = progress(frame, 18, 46);
  const clipRight = `${Math.max(0, 100 - textDraw * 100).toFixed(3)}%`;
  const revealClip = `inset(-24% ${clipRight} -42% 0)`;

  return (
    <div className="caption">
      <svg className="caption__rule" viewBox="0 0 760 22" aria-hidden="true">
        <path
          d="M 8 12 C 180 9, 332 14, 512 11 C 602 10, 682 13, 752 10"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - lineDraw}
        />
      </svg>
      <p>
        <span className="caption__spacer">{cue.text}</span>
        <span
          className="caption__written"
          style={{clipPath: revealClip}}
        >
          {cue.text}
        </span>
      </p>
    </div>
  );
};
