import type {CSSProperties, ComponentType} from 'react';
import {
  Host as ImportedHost,
  type HostExpression as ImportedHostExpression,
  type HostPose as ImportedHostPose,
  type HostProps as ImportedHostProps,
  type HostVariant as ImportedHostVariant,
  type HostView as ImportedHostView,
} from '@c4sight/design-system';
import {externalC4SightPalette} from './C4SightWizard';

export const externalC4SightHostAvailable = Boolean(ImportedHost);

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
  view?: C4SightHostView | string;
  expression?: C4SightHostExpression | string;
  pose?: C4SightHostPose | 'none' | string;
  variant?: C4SightHostVariant | string;
  size?: number;
  glasses?: boolean;
  showChalk?: boolean;
  showNotebook?: boolean;
  className?: string;
  style?: CSSProperties;
};

const normalizeChoice = <T extends readonly string[]>(
  value: string | undefined,
  allowed: T,
  fallback: T[number],
): T[number] => {
  return allowed.includes(value ?? '') ? (value as T[number]) : fallback;
};

const normalizePose = (pose: C4SightHostProps['pose']): C4SightHostPose => {
  if (pose === null || pose === undefined || pose === 'none') {
    return null;
  }

  return c4SightHostPoses.includes(pose as (typeof c4SightHostPoses)[number])
    ? (pose as C4SightHostPose)
    : null;
};

const MissingExternalHost = ({
  size,
  style,
  className,
}: {
  size: number;
  style?: CSSProperties;
  className?: string;
}) => (
  <div
    className={className}
    style={{
      width: size,
      minHeight: size * 1.45,
      border: `2px dashed ${externalC4SightPalette.RED}`,
      background: externalC4SightPalette.PAPER,
      color: externalC4SightPalette.INK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'Avenir Next, Inter, system-ui, sans-serif',
      fontSize: Math.max(12, Math.round(size * 0.05)),
      padding: 12,
      ...style,
    }}
  >
    MISSING EXTERNAL HOST
  </div>
);

export const C4SightHost = ({
  view,
  expression,
  pose,
  variant,
  size = 240,
  glasses = false,
  showChalk = false,
  showNotebook = false,
  className,
  style,
}: C4SightHostProps) => {
  const HostComponent = ImportedHost as
    | ComponentType<ImportedHostProps>
    | undefined;

  if (!HostComponent) {
    return (
      <MissingExternalHost className={className} size={size} style={style} />
    );
  }

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
      <HostComponent
        view={
          normalizeChoice(view, c4SightHostViews, 'front') as ImportedHostView
        }
        expression={
          normalizeChoice(
            expression,
            c4SightHostExpressions,
            'dry',
          ) as ImportedHostExpression
        }
        pose={normalizePose(pose) as ImportedHostPose}
        variant={
          normalizeChoice(
            variant,
            c4SightHostVariants,
            'a',
          ) as ImportedHostVariant
        }
        size={size}
        glasses={glasses}
        showChalk={showChalk}
        showNotebook={showNotebook}
      />
    </span>
  );
};
