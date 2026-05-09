/**
 * Example Remotion Composition using C4Sight characters
 * Shows how to animate the Wizard and Host with Remotion
 */

import { useCurrentFrame, interpolate, spring, AbsoluteFill } from 'remotion';
import { Wizard, Host, C4SIGHT_PALETTE } from '@c4sight/design-system';

interface WizardIntroProps {
  titleText?: string;
}

export const WizardIntroComposition: React.FC<WizardIntroProps> = ({
  titleText = "Is AI magic?",
}) => {
  const frame = useCurrentFrame();
  const fps = 30;

  // Wizard enters from right, slides to center
  const wizardX = interpolate(frame, [0, 45], [800, 0], {
    extrapolateRight: 'clamp',
  });

  // Hat tilts forward on the beat at frame 60
  const hatTilt = interpolate(frame, [55, 60, 70], [0, 12, 0], {
    extrapolateRight: 'clamp',
  });

  // Expression changes: neutral → smug → disappointed
  const wizardExpression = frame < 60 ? 'neutral' : frame < 90 ? 'smug' : 'disappointed';

  // Host enters from left at frame 90
  const hostOpacity = interpolate(frame, [85, 100], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const hostX = interpolate(frame, [85, 105], [-600, -200], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: C4SIGHT_PALETTE.PAPER,
        backgroundImage:
          'radial-gradient(rgba(34,31,31,0.05) 1px, transparent 1px), radial-gradient(rgba(34,31,31,0.03) 1px, transparent 1px)',
        backgroundSize: '4px 4px, 7px 7px',
        backgroundPosition: '0 0, 2px 3px',
      }}
    >
      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 120,
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Recoleta, serif',
          fontSize: 72,
          color: C4SIGHT_PALETTE.INK,
          opacity: interpolate(frame, [15, 30], [0, 1], { extrapolateRight: 'clamp' }),
        }}
      >
        {titleText}
      </div>

      {/* Wizard */}
      <div
        style={{
          position: 'absolute',
          bottom: 180,
          left: '50%',
          transform: `translateX(calc(-50% + ${wizardX}px))`,
        }}
      >
        <Wizard
          view="front"
          expression={wizardExpression as any}
          pose={null}
          size={280}
          hatTilt={hatTilt}
        />
      </div>

      {/* Host */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: '50%',
          transform: `translateX(calc(-50% + ${hostX}px))`,
          opacity: hostOpacity,
        }}
      >
        <Host
          view="front"
          expression="raised-brow"
          pose={null}
          variant="a"
          glasses={true}
          size={320}
        />
      </div>

      {/* "NO." text punch at frame 120 */}
      {frame >= 120 && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${interpolate(
              frame,
              [120, 122, 125],
              [0.8, 1.15, 1.0],
              { extrapolateRight: 'clamp' }
            )})`,
            fontFamily: 'Recoleta, serif',
            fontSize: 220,
            fontWeight: 700,
            color: C4SIGHT_PALETTE.INK,
          }}
        >
          NO
          <span style={{ color: C4SIGHT_PALETTE.RED }}>.</span>
        </div>
      )}
    </AbsoluteFill>
  );
};

/**
 * Blackboard scene example
 */
export const BlackboardScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Host taps chalk twice
  const tapFrame1 = 30;
  const tapFrame2 = 45;

  const chalkY = interpolate(
    frame,
    [tapFrame1 - 3, tapFrame1, tapFrame1 + 2],
    [0, 8, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill style={{ background: C4SIGHT_PALETTE.SLATE }}>
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          right: 200,
        }}
      >
        <Host
          view="blackboard"
          expression="dry"
          pose="two-tap-ready"
          variant="a"
          glasses={true}
          showChalk={true}
          size={340}
        />
      </div>

      {/* Chalk marks appear on blackboard after taps */}
      {frame > tapFrame1 && (
        <circle
          cx={600}
          cy={300}
          r={4}
          fill={C4SIGHT_PALETTE.CHALK}
          opacity={0.8}
        />
      )}
      {frame > tapFrame2 && (
        <circle
          cx={650}
          cy={300}
          r={4}
          fill={C4SIGHT_PALETTE.CHALK}
          opacity={0.8}
        />
      )}
    </AbsoluteFill>
  );
};

/**
 * Expression study example
 */
export const WizardExpressionStudy: React.FC = () => {
  const expressions = ['neutral', 'sulking', 'panicked', 'smug', 'disappointed', 'shrug'] as const;

  return (
    <AbsoluteFill
      style={{
        background: C4SIGHT_PALETTE.PAPER,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 60,
        padding: 80,
      }}
    >
      {expressions.map((expr) => (
        <div
          key={expr}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <Wizard expression={expr} size={200} />
          <div
            style={{
              fontFamily: 'Söhne, sans-serif',
              fontSize: 18,
              color: C4SIGHT_PALETTE.INK,
              textTransform: 'capitalize',
            }}
          >
            {expr}
          </div>
        </div>
      ))}
    </AbsoluteFill>
  );
};
