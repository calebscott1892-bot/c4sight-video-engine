import type {CSSProperties, ComponentType} from 'react';
import {
  C4SIGHT_PALETTE as importedPalette,
  Wizard as ImportedWizard,
  type WizardExpression as ImportedWizardExpression,
  type WizardPose as ImportedWizardPose,
  type WizardProps as ImportedWizardProps,
  type WizardView as ImportedWizardView,
} from '@c4sight/design-system';

export const externalC4SightPalette = importedPalette ?? {
  PAPER: '#EFE7D6',
  CHALK: '#F4EDE0',
  SLATE: '#1A1F1C',
  INK: '#221F1F',
  LAVENDER: '#B9A8C7',
  LAVENDER_SHADOW: '#9D8AAE',
  RED: '#D7382C',
};

export const externalC4SightWizardAvailable = Boolean(ImportedWizard);
export const externalC4SightPaletteAvailable = Boolean(importedPalette);

export const c4SightWizardViews = [
  'front',
  'three-quarter-left',
  'three-quarter-right',
  'side',
] as const;

export const c4SightWizardExpressions = [
  'neutral',
  'sulking',
  'panicked',
  'smug',
  'disappointed',
  'shrug',
] as const;

export const c4SightWizardPoses = ['credit', 'debunked', 'stealing'] as const;

export type C4SightWizardView = (typeof c4SightWizardViews)[number];
export type C4SightWizardExpression =
  (typeof c4SightWizardExpressions)[number];
export type C4SightWizardPose = (typeof c4SightWizardPoses)[number] | null;

export type C4SightWizardProps = {
  view?: C4SightWizardView | string;
  expression?: C4SightWizardExpression | string;
  pose?: C4SightWizardPose | 'none' | string;
  size?: number;
  showWand?: boolean;
  hatTilt?: number;
  hatDrop?: number;
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

const normalizePose = (
  pose: C4SightWizardProps['pose'],
): C4SightWizardPose => {
  if (pose === null || pose === undefined || pose === 'none') {
    return null;
  }

  return c4SightWizardPoses.includes(pose as (typeof c4SightWizardPoses)[number])
    ? (pose as C4SightWizardPose)
    : null;
};

const MissingExternalWizard = ({
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
      minHeight: size * 1.1,
      border: `2px dashed ${externalC4SightPalette.RED}`,
      background: externalC4SightPalette.PAPER,
      color: externalC4SightPalette.INK,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'Avenir Next, Inter, system-ui, sans-serif',
      fontSize: Math.max(12, Math.round(size * 0.06)),
      padding: 12,
      ...style,
    }}
  >
    MISSING EXTERNAL WIZARD
  </div>
);

export const C4SightWizard = ({
  view,
  expression,
  pose,
  size = 180,
  showWand = true,
  hatTilt = 0,
  hatDrop = 0,
  className,
  style,
}: C4SightWizardProps) => {
  const WizardComponent = ImportedWizard as
    | ComponentType<ImportedWizardProps>
    | undefined;

  if (!WizardComponent) {
    return (
      <MissingExternalWizard
        className={className}
        size={size}
        style={style}
      />
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
      <WizardComponent
        view={
          normalizeChoice(
            view,
            c4SightWizardViews,
            'front',
          ) as ImportedWizardView
        }
        expression={
          normalizeChoice(
            expression,
            c4SightWizardExpressions,
            'neutral',
          ) as ImportedWizardExpression
        }
        pose={normalizePose(pose) as ImportedWizardPose}
        size={size}
        showWand={showWand}
        hatTilt={hatTilt}
        hatDrop={hatDrop}
      />
    </span>
  );
};
