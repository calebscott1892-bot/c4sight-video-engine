import type {CSSProperties} from 'react';
import {HostFigure} from '../ep01Assets';

export const externalC4SightHostAvailable = true;

export const c4SightHostViews = ['front', 'blackboard', 'desk'] as const;

export const c4SightHostExpressions = [
  'dry',
  'raised-brow',
  'smile',
  'exasperated',
  'curious',
] as const;

export const c4SightHostPoses = [
  'gesture',
  'two-tap-ready',
  'brushing-dust',
  'arms-crossed',
] as const;

export const c4SightHostVariants = ['a', 'b'] as const;

export type C4SightHostView = (typeof c4SightHostViews)[number];
export type C4SightHostExpression = (typeof c4SightHostExpressions)[number];
export type C4SightHostPose = (typeof c4SightHostPoses)[number] | null;
export type C4SightHostVariant = (typeof c4SightHostVariants)[number];

export type C4SightHostProps = {
  view?: C4SightHostView | 'full' | 'waist' | 'head' | string;
  expression?: C4SightHostExpression | 'raised' | 'surprised' | string;
  pose?: C4SightHostPose | 'none' | string;
  variant?: C4SightHostVariant | string;
  size?: number;
  glasses?: boolean;
  showChalk?: boolean;
  showNotebook?: boolean;
  className?: string;
  style?: CSSProperties;
};

type HostFigureView = 'full' | 'waist' | 'head';
type HostFigureExpression =
  | 'dry'
  | 'browraise'
  | 'smile'
  | 'surprised'
  | 'open';

const expressionMap: Record<string, HostFigureExpression> = {
  dry: 'dry',
  raised: 'browraise',
  'raised-brow': 'browraise',
  smile: 'smile',
  surprised: 'surprised',
  curious: 'browraise',
  exasperated: 'dry',
  open: 'open',
};

const normalizeView = (view: C4SightHostProps['view']): HostFigureView => {
  if (view === 'waist' || view === 'head' || view === 'full') {
    return view;
  }

  return 'full';
};

const normalizeExpression = (
  expression: C4SightHostProps['expression'],
): HostFigureExpression => {
  return expressionMap[expression ?? 'dry'] ?? 'dry';
};

export const C4SightHost = ({
  view = 'full',
  expression = 'dry',
  size = 240,
  className,
  style,
}: C4SightHostProps) => {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <HostFigure
        view={normalizeView(view)}
        expression={normalizeExpression(expression)}
        height={size}
      />
    </span>
  );
};

export default C4SightHost;
