import type {CSSProperties} from 'react';
import {Easing, interpolate} from 'remotion';
import {easeOut, progress} from '../../lib/timing';
import {c4sightTokens} from '../c4sightTokens';

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
  easing: easeOut,
};

const characterClamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
  easing: Easing.bezier(0.18, 1.25, 0.32, 1),
};

export type TimedAnimation = {
  startFrame: number;
  durationFrames: number;
};

export const writeOnText = (
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.writeNormal,
): TimedAnimation => ({
  startFrame,
  durationFrames,
});

export const drawOnStroke = (
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.drawNormal,
): TimedAnimation => ({
  startFrame,
  durationFrames,
});

export const holdFrame = (
  frame: number,
  startFrame: number,
  endFrame: number,
): CSSProperties => ({
  opacity: frame >= startFrame && frame < endFrame ? 1 : 0,
  pointerEvents: 'none',
});

export const freezeBeat = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.freeze,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    scale: interpolate(amount, [0, 0.5, 1], [0.92, 1.04, 1], clamp),
    opacity: amount,
  };
};

export const reactionBeat = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.reaction,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    y: interpolate(amount, [0, 0.45, 1], [0, -16, 0], clamp),
    rotation: interpolate(amount, [0, 0.35, 1], [0, -4, 0], clamp),
  };
};

export const popInProp = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.quick,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    opacity: amount,
    scale: interpolate(amount, [0, 0.72, 1], [0.84, 1.08, 1], characterClamp),
    rotation: interpolate(amount, [0, 0.55, 1], [-4, 2, 0], characterClamp),
  };
};

export const characterEntrance = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.poseChange,
  distance = 120,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    opacity: amount,
    x: interpolate(amount, [0, 1], [distance, 0], characterClamp),
    y: interpolate(amount, [0, 0.65, 1], [18, -8, 0], characterClamp),
  };
};

export const characterExit = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.poseChange,
  distance = -140,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    opacity: interpolate(amount, [0, 0.65, 1], [1, 0.72, 0], clamp),
    x: interpolate(amount, [0, 1], [0, distance], clamp),
    rotation: interpolate(amount, [0, 1], [0, -7], clamp),
  };
};

export const stackedOverwhelm = (
  frame: number,
  startFrame: number,
  index: number,
  durationFrames: number = c4sightTokens.timing.quick,
) => {
  const amount = progress(frame, startFrame + index * 5, durationFrames);

  return {
    amount,
    opacity: amount,
    y: interpolate(amount, [0, 1], [-28, 0], characterClamp),
    rotation: interpolate(amount, [0, 1], [index % 2 === 0 ? -8 : 8, 0], characterClamp),
  };
};

export const eraserWipe = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.eraser,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    clipPath: `inset(0 ${Math.max(0, 100 - amount * 100).toFixed(3)}% 0 0)`,
  };
};

export const chaosToCalmReset = (
  frame: number,
  startFrame: number,
  durationFrames: number = c4sightTokens.timing.transition,
) => {
  const amount = progress(frame, startFrame, durationFrames);

  return {
    amount,
    chaosOpacity: interpolate(amount, [0, 0.68, 1], [1, 0.24, 0], clamp),
    calmOpacity: interpolate(amount, [0, 0.46, 1], [0, 0.2, 1], clamp),
    cameraScale: interpolate(amount, [0, 1], [1.018, 1], clamp),
  };
};

export const animationGrammar = {
  writeOnText,
  drawOnStroke,
  freezeBeat,
  reactionBeat,
  popInProp,
  characterEntrance,
  characterExit,
  stackedOverwhelm,
  eraserWipe,
  chaosToCalmReset,
  holdFrame,
};
