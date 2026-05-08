import type {CSSProperties, ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {easeOut} from '../lib/timing';
import {c4SceneGrammar} from '../layout/c4sightSceneGrammar';

type SceneShellProps = {
  startFrame: number;
  endFrame: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  camera?: {
    x?: number;
    y?: number;
    scale?: number;
  };
};

const visibleStyle = (frame: number, startFrame: number, endFrame: number) => ({
  opacity: frame >= startFrame && frame < endFrame ? 1 : 0,
  pointerEvents: 'none' as const,
});

export const C4SceneShell = ({
  startFrame,
  endFrame,
  children,
  className,
  style,
  camera,
}: SceneShellProps) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [startFrame, startFrame + 28], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easeOut,
  });
  const x = (camera?.x ?? 0) * enter;
  const y = (camera?.y ?? 0) * enter;
  const scale = 1 + ((camera?.scale ?? 1) - 1) * enter;

  return (
    <section
      className={['c4-scene-shell', className].filter(Boolean).join(' ')}
      style={{
        ...visibleStyle(frame, startFrame, endFrame),
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </section>
  );
};

export const CenteredTeachingScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--centered-teaching', props.className]
      .filter(Boolean)
      .join(' ')}
    camera={props.camera ?? {scale: c4SceneGrammar.camera.teachingScale}}
  />
);

export const LeftRightComparisonScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--left-right', props.className].filter(Boolean).join(' ')}
    camera={props.camera ?? {x: -10, scale: c4SceneGrammar.camera.teachingScale}}
  />
);

export const HookChaosScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--hook-chaos', props.className].filter(Boolean).join(' ')}
    camera={props.camera ?? {x: -12, y: -8, scale: c4SceneGrammar.camera.hookScale}}
  />
);

export const SimpleDiagramScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--simple-diagram', props.className]
      .filter(Boolean)
      .join(' ')}
    camera={props.camera ?? {y: -8, scale: c4SceneGrammar.camera.teachingScale}}
  />
);

export const WarningScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--warning', props.className].filter(Boolean).join(' ')}
    camera={props.camera ?? {scale: c4SceneGrammar.camera.teachingScale}}
  />
);

export const QuoteThesisScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--quote-thesis', props.className]
      .filter(Boolean)
      .join(' ')}
    camera={props.camera ?? {scale: c4SceneGrammar.camera.stillScale}}
  />
);

export const RoadmapScene = (props: SceneShellProps) => (
  <C4SceneShell
    {...props}
    className={['c4-scene--roadmap', props.className].filter(Boolean).join(' ')}
    camera={props.camera ?? {y: -6, scale: c4SceneGrammar.camera.teachingScale}}
  />
);

export const C4Zone = ({
  zone,
  children,
  className,
  style,
}: {
  zone: keyof typeof c4SceneGrammar.zones;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  const target = c4SceneGrammar.zones[zone];

  return (
    <div
      className={['c4-scene-zone', `c4-scene-zone--${zone}`, className]
        .filter(Boolean)
        .join(' ')}
      style={{
        left: target.x,
        top: target.y,
        width: target.width,
        height: target.height,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
