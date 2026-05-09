import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import type {ReactNode} from 'react';
import {
  C4SightHost,
  C4SightWizard,
  c4SightHostExpressions,
  c4SightHostPoses,
  c4SightHostVariants,
  c4SightWizardExpressions,
  c4SightWizardPoses,
  c4SightWizardViews,
  externalC4SightHostAvailable,
  externalC4SightPalette,
  externalC4SightPaletteAvailable,
  externalC4SightWizardAvailable,
} from '../design-system/external';
import {videoLayout} from '../layout/blackboardLayout';

const fps = videoLayout.fps;
const sec = (value: number) => Math.round(value * fps);

export const c4SightExternalDesignSystemPreviewDurationSeconds = 32;

const sectionOpacity = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, start + 8, end - 8, end], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

const paperGrain = {
  backgroundImage:
    'radial-gradient(rgba(34,31,31,0.05) 1px, transparent 1px), radial-gradient(rgba(34,31,31,0.03) 1px, transparent 1px)',
  backgroundSize: '4px 4px, 7px 7px',
  backgroundPosition: '0 0, 2px 3px',
};

const fontSans = 'Avenir Next, Inter, system-ui, sans-serif';
const fontSerif = 'Georgia, Times New Roman, serif';

const Panel = ({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) => (
  <AbsoluteFill
    style={{
      background: dark
        ? externalC4SightPalette.SLATE
        : externalC4SightPalette.PAPER,
      ...paperGrain,
    }}
  >
    {children}
  </AbsoluteFill>
);

const Heading = ({
  eyebrow,
  title,
  note,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  note: string;
  dark?: boolean;
}) => (
  <div style={{position: 'absolute', left: 88, top: 58, right: 88}}>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 18,
        letterSpacing: 4,
        textTransform: 'uppercase',
        color: dark ? externalC4SightPalette.CHALK : externalC4SightPalette.INK,
        opacity: 0.58,
      }}
    >
      {eyebrow}
    </div>
    <div
      style={{
        marginTop: 8,
        fontFamily: fontSerif,
        fontSize: 60,
        lineHeight: 1.02,
        color: dark ? externalC4SightPalette.CHALK : externalC4SightPalette.INK,
      }}
    >
      {title}
    </div>
    <div
      style={{
        marginTop: 12,
        maxWidth: 1120,
        fontFamily: fontSans,
        fontSize: 23,
        lineHeight: 1.34,
        color: dark ? externalC4SightPalette.CHALK : externalC4SightPalette.INK,
        opacity: 0.68,
      }}
    >
      {note}
    </div>
  </div>
);

const Section = ({
  opacity,
  children,
}: {
  opacity: number;
  children: ReactNode;
}) => <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;

const GridLabel = ({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) => (
  <div
    style={{
      marginTop: 10,
      fontFamily: fontSans,
      fontSize: 18,
      color: dark ? externalC4SightPalette.CHALK : externalC4SightPalette.INK,
      textTransform: 'capitalize',
      opacity: 0.76,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

const StatusLine = ({
  label,
  pass,
  detail,
}: {
  label: string;
  pass: boolean;
  detail: string;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '116px 1fr',
      gap: 16,
      alignItems: 'center',
      padding: '16px 18px',
      border: `2px solid ${externalC4SightPalette.INK}`,
      background: externalC4SightPalette.CHALK,
      boxShadow: '5px 6px 0 rgba(34,31,31,0.18)',
    }}
  >
    <div
      style={{
        border: `2px solid ${
          pass ? externalC4SightPalette.SLATE : externalC4SightPalette.RED
        }`,
        background: pass
          ? externalC4SightPalette.SLATE
          : externalC4SightPalette.RED,
        color: externalC4SightPalette.CHALK,
        fontFamily: fontSans,
        fontSize: 19,
        fontWeight: 800,
        textAlign: 'center',
        padding: '7px 0',
      }}
    >
      {pass ? 'PASS' : 'FAIL'}
    </div>
    <div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 22,
          color: externalC4SightPalette.INK,
          fontWeight: 800,
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 4,
          fontFamily: fontSans,
          fontSize: 18,
          color: externalC4SightPalette.INK,
          opacity: 0.68,
        }}
      >
        {detail}
      </div>
    </div>
  </div>
);

const Swatch = ({name, value}: {name: string; value: string}) => (
  <div
    style={{
      width: 212,
      height: 162,
      border: `2px solid ${externalC4SightPalette.INK}`,
      background: externalC4SightPalette.CHALK,
      boxShadow: '5px 6px 0 rgba(34,31,31,0.18)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}
  >
    <div style={{height: 86, background: value}} />
    <div style={{padding: 14}}>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 17,
          color: externalC4SightPalette.INK,
          fontWeight: 800,
        }}
      >
        {name}
      </div>
      <div
        style={{
          marginTop: 5,
          fontFamily: fontSans,
          fontSize: 14,
          letterSpacing: 1.4,
          color: externalC4SightPalette.INK,
          opacity: 0.62,
        }}
      >
        {value}
      </div>
    </div>
  </div>
);

const CharacterCard = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => (
  <div
    style={{
      display: 'grid',
      placeItems: 'center',
      minHeight: 238,
      padding: 16,
      border: `2px solid ${externalC4SightPalette.INK}`,
      background: 'rgba(244,237,224,0.64)',
      boxShadow: '4px 5px 0 rgba(34,31,31,0.16)',
    }}
  >
    {children}
    <GridLabel>{label}</GridLabel>
  </div>
);

const PalettePanel = ({opacity}: {opacity: number}) => (
  <Section opacity={opacity}>
    <Panel>
      <Heading
        eyebrow="01 Palette"
        title="Show Bible Colours"
        note="Locked package palette is visible here before any production scene uses it."
      />
      <div
        style={{
          position: 'absolute',
          left: 90,
          right: 90,
          top: 270,
          display: 'flex',
          gap: 22,
          flexWrap: 'wrap',
        }}
      >
        {Object.entries(externalC4SightPalette).map(([name, value]) => (
          <Swatch key={name} name={name} value={value} />
        ))}
      </div>
      <div style={{position: 'absolute', right: 226, bottom: 96}}>
        <C4SightWizard expression="smug" pose="credit" size={250} />
      </div>
      <div style={{position: 'absolute', right: 430, bottom: 76}}>
        <C4SightHost
          expression="raised-brow"
          pose="arms-crossed"
          glasses
          size={250}
        />
      </div>
    </Panel>
  </Section>
);

const WizardExpressionPanel = ({opacity}: {opacity: number}) => (
  <Section opacity={opacity}>
    <Panel>
      <Heading
        eyebrow="02 Wizard expressions"
        title="Tiny Alien Wizard"
        note="Expression readability check. This should feel like comic misunderstanding, not the whole show."
      />
      <div
        style={{
          position: 'absolute',
          left: 92,
          right: 92,
          top: 286,
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 22,
        }}
      >
        {c4SightWizardExpressions.map((expression) => (
          <CharacterCard key={expression} label={expression}>
            <C4SightWizard expression={expression} size={172} />
          </CharacterCard>
        ))}
      </div>
    </Panel>
  </Section>
);

const WizardPosePanel = ({opacity}: {opacity: number}) => (
  <Section opacity={opacity}>
    <Panel>
      <Heading
        eyebrow="03 Wizard poses"
        title="Gesture And View Tests"
        note="Pose and view consistency check. The adapter uses package variants only."
      />
      <div
        style={{
          position: 'absolute',
          left: 180,
          right: 180,
          top: 270,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 34,
        }}
      >
        {c4SightWizardPoses.map((pose) => (
          <CharacterCard key={pose} label={pose}>
            <C4SightWizard
              expression={
                pose === 'credit'
                  ? 'smug'
                  : pose === 'stealing'
                    ? 'panicked'
                    : 'disappointed'
              }
              pose={pose}
              size={232}
            />
          </CharacterCard>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 260,
          right: 260,
          bottom: 62,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 28,
        }}
      >
        {c4SightWizardViews.map((view) => (
          <div key={view} style={{display: 'grid', placeItems: 'center'}}>
            <C4SightWizard
              view={view}
              expression="neutral"
              size={112}
              showWand={false}
            />
            <GridLabel>{view}</GridLabel>
          </div>
        ))}
      </div>
    </Panel>
  </Section>
);

const HostExpressionPanel = ({opacity}: {opacity: number}) => (
  <Section opacity={opacity}>
    <Panel>
      <Heading
        eyebrow="04 Host expressions"
        title="Presenter Readability"
        note="The host should read as practical, observant, and adult rather than corporate or childish."
      />
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 276,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 24,
        }}
      >
        {c4SightHostExpressions.map((expression) => (
          <CharacterCard key={expression} label={expression}>
            <C4SightHost expression={expression} glasses size={178} />
          </CharacterCard>
        ))}
      </div>
    </Panel>
  </Section>
);

const HostPosePanel = ({opacity}: {opacity: number}) => (
  <Section opacity={opacity}>
    <Panel>
      <Heading
        eyebrow="05 Host poses"
        title="Teaching Pose System"
        note="Pose readiness check for gesture, two-tap ritual, brushing dust, and arms-crossed beats."
      />
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 272,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 28,
        }}
      >
        {c4SightHostPoses.map((pose) => (
          <CharacterCard key={pose} label={pose}>
            <C4SightHost
              expression={pose === 'brushing-dust' ? 'smile' : 'raised-brow'}
              pose={pose}
              glasses
              showChalk={pose === 'two-tap-ready'}
              showNotebook={pose === 'gesture'}
              size={204}
            />
          </CharacterCard>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          left: 710,
          bottom: 66,
          display: 'flex',
          gap: 48,
          alignItems: 'end',
        }}
      >
        {c4SightHostVariants.map((variant) => (
          <div key={variant} style={{display: 'grid', placeItems: 'center'}}>
            <C4SightHost variant={variant} expression="dry" glasses size={116} />
            <GridLabel>{`variant ${variant}`}</GridLabel>
          </div>
        ))}
      </div>
    </Panel>
  </Section>
);

const BlackboardTimingPanel = ({
  opacity,
  startFrame,
}: {
  opacity: number;
  startFrame: number;
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;
  const tapY = interpolate(
    localFrame,
    [10, 16, 22, 34, 40, 46],
    [0, 10, 0, 0, 10, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  const hatTilt = interpolate(localFrame, [0, 32, 64, 112], [0, 8, -8, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const underlineWidth = interpolate(localFrame, [42, 95], [0, 420], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <Section opacity={opacity}>
      <Panel dark>
        <Heading
          eyebrow="06 Blackboard ritual"
          title="Two taps, then teach"
          note="A simple Remotion interpolation test using the external host and wizard components."
          dark
        />
        <div
          style={{
            position: 'absolute',
            left: 140,
            right: 140,
            top: 250,
            bottom: 110,
            border: `4px solid ${externalC4SightPalette.INK}`,
            background: externalC4SightPalette.SLATE,
            boxShadow: '8px 10px 0 rgba(0,0,0,0.22)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 130,
              top: 110,
              fontFamily: fontSerif,
              fontSize: 82,
              color: externalC4SightPalette.CHALK,
            }}
          >
            Let&apos;s take it to the blackboard.
          </div>
          <div
            style={{
              position: 'absolute',
              left: 134,
              top: 216,
              width: underlineWidth,
              height: 5,
              background: externalC4SightPalette.CHALK,
              opacity: 0.9,
            }}
          />
          <div style={{position: 'absolute', right: 170, bottom: 0}}>
            <C4SightHost
              view="blackboard"
              expression="dry"
              pose="two-tap-ready"
              glasses
              showChalk
              size={330}
              style={{transform: `translateY(${tapY}px)`}}
            />
          </div>
          <div style={{position: 'absolute', left: 180, bottom: 62}}>
            <C4SightWizard
              expression="shrug"
              size={156}
              hatTilt={hatTilt}
              showWand={false}
            />
          </div>
          {localFrame > 16 ? (
            <div
              style={{
                position: 'absolute',
                left: 560,
                top: 418,
                width: 16,
                height: 16,
                borderRadius: 999,
                background: externalC4SightPalette.CHALK,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ) : null}
          {localFrame > 40 ? (
            <div
              style={{
                position: 'absolute',
                left: 612,
                top: 418,
                width: 16,
                height: 16,
                borderRadius: 999,
                background: externalC4SightPalette.CHALK,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ) : null}
        </div>
      </Panel>
    </Section>
  );
};

const PackageUsagePanel = ({opacity}: {opacity: number}) => (
  <Section opacity={opacity}>
    <Panel>
      <Heading
        eyebrow="07 Package usage"
        title="Imported Components In A Scene"
        note="This checks basic composition, sizing, layering, and stable props in Remotion."
      />
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 275,
          bottom: 100,
          border: `3px solid ${externalC4SightPalette.INK}`,
          background: externalC4SightPalette.CHALK,
          boxShadow: '8px 10px 0 rgba(34,31,31,0.2)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 74,
            top: 74,
            width: 510,
            height: 310,
            border: `4px solid ${externalC4SightPalette.INK}`,
            background: externalC4SightPalette.SLATE,
            color: externalC4SightPalette.CHALK,
            fontFamily: fontSerif,
            fontSize: 54,
            padding: 42,
          }}
        >
          Show, then explain.
          <div
            style={{
              marginTop: 20,
              width: 270,
              height: 5,
              background: externalC4SightPalette.CHALK,
            }}
          />
        </div>
        <div style={{position: 'absolute', left: 610, bottom: 28}}>
          <C4SightHost
            expression="curious"
            pose="gesture"
            glasses
            showNotebook
            size={350}
          />
        </div>
        <div style={{position: 'absolute', right: 165, bottom: 58}}>
          <C4SightWizard expression="smug" pose="credit" size={192} />
        </div>
        {['Wizard', 'Host', 'C4SIGHT_PALETTE'].map((label, index) => (
          <div
            key={label}
            style={{
              position: 'absolute',
              right: 70,
              top: 84 + index * 72,
              width: 360,
              padding: '18px 22px',
              border: `2px solid ${externalC4SightPalette.INK}`,
              background: externalC4SightPalette.PAPER,
              fontFamily: fontSans,
              fontSize: 25,
              fontWeight: 800,
              color: externalC4SightPalette.INK,
            }}
          >
            import {label}
          </div>
        ))}
      </div>
    </Panel>
  </Section>
);

const FallbackCheckPanel = ({opacity}: {opacity: number}) => {
  const allLoaded =
    externalC4SightWizardAvailable &&
    externalC4SightHostAvailable &&
    externalC4SightPaletteAvailable;

  return (
    <Section opacity={opacity}>
      <Panel>
        <Heading
          eyebrow="08 Fallback check"
          title={allLoaded ? 'External Package Loaded' : 'Fallback Is Active'}
          note="This frame exists so QA can verify whether fallback placeholder art is visible."
        />
        <div
          style={{
            position: 'absolute',
            left: 150,
            top: 292,
            width: 710,
            display: 'grid',
            gap: 18,
          }}
        >
          <StatusLine
            label="Wizard export"
            pass={externalC4SightWizardAvailable}
            detail="Adapter can render the package Wizard component."
          />
          <StatusLine
            label="Host export"
            pass={externalC4SightHostAvailable}
            detail="Adapter can render the package Host component."
          />
          <StatusLine
            label="Palette export"
            pass={externalC4SightPaletteAvailable}
            detail="Adapter is using C4SIGHT_PALETTE from the package."
          />
          <StatusLine
            label="Preview fallback art"
            pass={allLoaded}
            detail={
              allLoaded
                ? 'No dashed MISSING EXTERNAL boxes are rendered.'
                : 'A labelled fallback placeholder is visible elsewhere.'
            }
          />
        </div>
        <div style={{position: 'absolute', right: 330, bottom: 110}}>
          <C4SightHost
            expression="dry"
            pose="arms-crossed"
            glasses
            size={300}
          />
        </div>
        <div style={{position: 'absolute', right: 170, bottom: 146}}>
          <C4SightWizard
            expression="neutral"
            size={190}
            showWand={false}
          />
        </div>
      </Panel>
    </Section>
  );
};

export const C4SightExternalDesignSystemPreview = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <PalettePanel opacity={sectionOpacity(frame, sec(0), sec(4))} />
      <WizardExpressionPanel
        opacity={sectionOpacity(frame, sec(4), sec(8))}
      />
      <WizardPosePanel opacity={sectionOpacity(frame, sec(8), sec(12))} />
      <HostExpressionPanel
        opacity={sectionOpacity(frame, sec(12), sec(16))}
      />
      <HostPosePanel opacity={sectionOpacity(frame, sec(16), sec(20))} />
      <BlackboardTimingPanel
        opacity={sectionOpacity(frame, sec(20), sec(24))}
        startFrame={sec(20)}
      />
      <PackageUsagePanel opacity={sectionOpacity(frame, sec(24), sec(28))} />
      <FallbackCheckPanel opacity={sectionOpacity(frame, sec(28), sec(32))} />
    </AbsoluteFill>
  );
};
