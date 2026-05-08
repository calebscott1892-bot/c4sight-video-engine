import {Easing, interpolate} from 'remotion';

export const secondsToFrames = (seconds: number, fps: number) =>
  Math.round(seconds * fps);

export const easeOut = Easing.bezier(0.22, 1, 0.36, 1);

export const progress = (
  frame: number,
  startFrame: number,
  durationFrames: number,
) =>
  interpolate(frame, [startFrame, startFrame + durationFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

export const fadeInOut = (
  frame: number,
  durationFrames: number,
  fadeFrames = 12,
) => {
  const fadeIn = interpolate(frame, [0, fadeFrames], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });

  const fadeOut = interpolate(
    frame,
    [durationFrames - fadeFrames, durationFrames],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: easeOut,
    },
  );

  return Math.min(fadeIn, fadeOut);
};
