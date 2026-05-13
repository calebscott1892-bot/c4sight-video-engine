import type {CSSProperties} from 'react';
import {WizardMini} from '../ep01Assets';

export const externalC4SightPalette = {
  PAPER: '#EFE7D6',
  CHALK: '#F4EDE0',
  SLATE: '#1A1F1C',
  INK: '#221F1F',
  LAVENDER: '#B9A8C7',
  LAVENDER_SHADOW: '#9D8AAE',
  RED: '#D7382C',
};

export const externalC4SightWizardAvailable = true;
export const externalC4SightPaletteAvailable = true;

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
export type C4SightWizardSize = 'large' | 'medium' | 'small';

export type C4SightWizardProps = {
  view?: C4SightWizardView | string;
  expression?: C4SightWizardExpression | string;
  pose?: C4SightWizardPose | 'none' | string;
  size?: C4SightWizardSize | number;
  height?: number;
  showWand?: boolean;
  hatTilt?: number;
  hatDrop?: number;
  className?: string;
  style?: CSSProperties;
};

const sizeHeights: Record<C4SightWizardSize, number> = {
  large: 400,
  medium: 240,
  small: 140,
};

const resolveHeight = (
  size: C4SightWizardProps['size'],
  height: number | undefined,
) => {
  if (height !== undefined) {
    return height;
  }

  if (typeof size === 'number') {
    return size;
  }

  return sizeHeights[size ?? 'medium'];
};

export const C4SightWizard = ({
  size = 'medium',
  height,
  className,
  style,
}: C4SightWizardProps) => {
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
      <WizardMini height={resolveHeight(size, height)} />
    </span>
  );
};

export default C4SightWizard;
