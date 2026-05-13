import type {CSSProperties, ReactNode} from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
} from 'remotion';
import {c4sightTokens} from '../design-system/c4sightTokens';
import {
  E1A1Timestamp,
  E1A2Growth,
  E1A3Timeline,
  E1A4Paper,
  E1A5Autocomplete,
  E1A6ModelInterior,
  E1A9Cards,
  E1A10Teal,
  E1A12Hype,
  E1A13TrainInfer,
  E1A14Emergence,
  E1A15LocalCloud,
  E1A16Correction,
  HYPE_CARD_COUNT,
  HallucinationFrame,
} from '../design-system/ep01Assets';
import {C4SightHost} from '../design-system/external/C4SightHost';
import {C4SightWizard} from '../design-system/external/C4SightWizard';

const fps = c4sightTokens.canvas.fps;
const toFrames = (seconds: number) => Math.round(seconds * fps);

export const episode01DurationSeconds = 840;
export const episode01DurationFrames = toFrames(episode01DurationSeconds);

const sequenceFrames = {
  coldOpen: toFrames(60),
  situating: toFrames(60),
  history: toFrames(150),
  mechanism: toFrames(100),
  trainingInference: toFrames(70),
  emergence: toFrames(90),
  hallucination: toFrames(75),
  localModels: toFrames(60),
  thesis: toFrames(80),
  seriesAhead: toFrames(95),
} as const;

const sequenceStarts = {
  coldOpen: toFrames(0),
  situating: toFrames(60),
  history: toFrames(120),
  mechanism: toFrames(270),
  trainingInference: toFrames(370),
  emergence: toFrames(440),
  hallucination: toFrames(530),
  localModels: toFrames(605),
  thesis: toFrames(665),
  seriesAhead: toFrames(745),
} as const;

const colors = c4sightTokens.colors;
const palette = c4sightTokens.palette;
const typography = c4sightTokens.typography;
const timing = c4sightTokens.timing;

const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};

const entranceEase = Easing.bezier(0.16, 1, 0.3, 1);
const exitEase = Easing.bezier(0.7, 0, 0.84, 0);

const fade = (
  frame: number,
  start: number,
  duration: number = timing.reaction,
) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    ...clamp,
    easing: entranceEase,
  });

const leave = (
  frame: number,
  start: number,
  duration: number = timing.transition,
) =>
  interpolate(frame, [start, start + duration], [1, 0], {
    ...clamp,
    easing: exitEase,
  });

const abs = (
  left: number,
  top: number,
  extra?: CSSProperties,
): CSSProperties => ({
  position: 'absolute',
  left,
  top,
  ...extra,
});

const baseFrame = (
  backgroundColor: string = palette.void,
  color: string = colors.chalk,
): CSSProperties => ({
  backgroundColor,
  color,
  overflow: 'hidden',
});

const centerStack: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};

const smallCaps: CSSProperties = {
  fontFamily: typography.captionFamily,
  fontSize: 28,
  fontWeight: 700,
  letterSpacing: 0,
  lineHeight: typography.lineHeight.tight,
  textTransform: 'uppercase',
};

const titleStyle = (
  size: number,
  extra?: CSSProperties,
): CSSProperties => ({
  color: colors.chalk,
  fontFamily: typography.titleFamily,
  fontSize: size,
  fontWeight: typography.weights.title,
  letterSpacing: 0,
  lineHeight: typography.lineHeight.tight,
  ...extra,
});

const bodyStyle = (
  size: number,
  extra?: CSSProperties,
): CSSProperties => ({
  color: colors.chalk,
  fontFamily: typography.bodyFamily,
  fontSize: size,
  fontWeight: typography.weights.body,
  letterSpacing: 0,
  lineHeight: typography.lineHeight.normal,
  ...extra,
});

const EpisodeFrame = ({
  children,
  backgroundColor = palette.void,
  style,
}: {
  children?: ReactNode;
  backgroundColor?: string;
  style?: CSSProperties;
}) => (
  <AbsoluteFill
    style={{
      ...baseFrame(backgroundColor),
      ...style,
    }}
  >
    {children}
  </AbsoluteFill>
);

const MotionFrame = ({
  children,
  offset = 0,
  revealDuration = 36,
  drift = 10,
  scaleTo = 1.014,
  scaleDuration = 720,
  backgroundColor = palette.void,
  initialOpacity = 0.72,
}: {
  children: ReactNode;
  offset?: number;
  revealDuration?: number;
  drift?: number;
  scaleTo?: number;
  scaleDuration?: number;
  backgroundColor?: string;
  initialOpacity?: number;
}) => {
  const frame = Math.max(0, useCurrentFrame() - offset);
  const opacity = interpolate(frame, [0, revealDuration], [initialOpacity, 1], {
    ...clamp,
    easing: entranceEase,
  });
  const y = interpolate(frame, [0, revealDuration], [drift, 0], {
    ...clamp,
    easing: entranceEase,
  });
  const scale = interpolate(frame, [0, scaleDuration], [1, scaleTo], clamp);

  return (
    <EpisodeFrame backgroundColor={backgroundColor}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity,
          transform: `translateY(${y}px) scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </EpisodeFrame>
  );
};

const TitleCard = ({
  title,
  subtitle,
  eyebrow,
  size = 126,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: ReactNode;
  size?: number;
}) => {
  const frame = useCurrentFrame();
  const opacity = fade(frame, 6, 34);
  const y = interpolate(frame, [0, 38], [26, 0], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <EpisodeFrame>
      <div style={{...centerStack, opacity, transform: `translateY(${y}px)`}}>
        {eyebrow ? (
          <div style={{...smallCaps, opacity: 0.58, marginBottom: 32}}>
            {eyebrow}
          </div>
        ) : null}
        <div style={titleStyle(size)}>{title}</div>
        {subtitle ? (
          <div
            style={{
              ...bodyStyle(34, {
                fontStyle: 'italic',
                fontWeight: 600,
                marginTop: 32,
                opacity: 0.62,
              }),
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </EpisodeFrame>
  );
};

const ClaimCard = ({
  label,
  x,
  y,
  delay,
  rotation,
  groupOpacity = 1,
}: {
  label: string;
  x: number;
  y: number;
  delay: number;
  rotation: number;
  groupOpacity?: number;
}) => {
  const frame = useCurrentFrame();
  const opacity = fade(frame, delay, timing.quick) * groupOpacity;
  const lift = interpolate(frame, [delay, delay + timing.quick], [24, 0], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <div
      style={{
        ...abs(x, y),
        width: 390,
        minHeight: 92,
        alignItems: 'center',
        backgroundColor: palette.voidSurface,
        border: `3px solid ${colors.chalk}`,
        borderRadius: 6,
        color: colors.chalk,
        display: 'flex',
        fontFamily: typography.chalkHandFamily,
        fontSize: typography.sizes.annotation,
        fontWeight: typography.weights.annotation,
        justifyContent: 'center',
        lineHeight: typography.lineHeight.tight,
        opacity,
        padding: '16px 22px',
        textAlign: 'center',
        transform: `translateY(${lift}px) rotate(${rotation}deg)`,
      }}
    >
      {label}
    </div>
  );
};

const Dust = ({
  startX,
  startY,
  count = 5,
}: {
  startX: number;
  startY: number;
  count?: number;
}) => (
  <>
    {Array.from({length: count}).map((_, index) => (
      <div
        key={index}
        style={{
          ...abs(startX + index * 66, startY + (index % 2) * 18),
          width: 26 + index * 4,
          height: 18 + index * 3,
          border: `3px solid ${colors.chalk}`,
          borderRadius: '50%',
          opacity: 0.18,
        }}
      />
    ))}
  </>
);

const HypeCycler = () => {
  const frame = useCurrentFrame();
  const index = Math.floor(frame / 18) % HYPE_CARD_COUNT;
  const cardFrame = frame % 18;
  const opacity =
    interpolate(cardFrame, [0, 4], [0.74, 1], {
      ...clamp,
      easing: entranceEase,
    }) *
    interpolate(cardFrame, [14, 18], [1, 0.72], {
      ...clamp,
      easing: exitEase,
    });
  const scale = interpolate(cardFrame, [0, 6], [0.97, 1], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <EpisodeFrame>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <E1A12Hype index={index} />
      </div>
    </EpisodeFrame>
  );
};

const TimelineNow = () => {
  const frame = useCurrentFrame();
  const lineWidth = interpolate(frame, [35, 110], [0, 1280], {
    ...clamp,
    easing: entranceEase,
  });
  const markerOpacity = fade(frame, 112, 24);

  return (
    <EpisodeFrame>
      <div style={abs(260, 530, {width: 1400})}>
        <div
          style={{
            width: lineWidth,
            height: 5,
            backgroundColor: colors.chalk,
            borderRadius: 999,
            opacity: 0.9,
          }}
        />
        <div
          style={{
            ...abs(1268, -46),
            opacity: markerOpacity,
            transform: `translateY(${interpolate(
              frame,
              [112, 140],
              [20, 0],
              {...clamp, easing: entranceEase},
            )}px)`,
          }}
        >
          <div
            style={{
              width: 24,
              height: 96,
              backgroundColor: colors.verifyRed,
              margin: '0 auto 20px',
            }}
          />
          <div style={{...smallCaps, color: colors.chalk}}>NOW -&gt;</div>
        </div>
      </div>
      <div
        style={{
          ...abs(270, 248),
          ...titleStyle(86),
          opacity: fade(frame, 6, 32),
        }}
      >
        This is a 2026 series.
      </div>
      <div
        style={{
          ...abs(274, 370, {width: 940}),
          ...bodyStyle(42, {opacity: fade(frame, 55, 28)}),
        }}
      >
        In AI, that date matters. The ground is moving under everyone.
      </div>
    </EpisodeFrame>
  );
};

const HistoryTimeline = () => {
  const frame = useCurrentFrame();
  const years = [
    {year: '1950', note: 'Can machines think?', x: 210, delay: 60},
    {year: '1997', note: 'Deep Blue beats Kasparov', x: 520, delay: 210},
    {year: '2012', note: 'Deep learning breaks through', x: 900, delay: 450},
    {year: '2017', note: 'Transformers arrive', x: 1240, delay: 630},
    {year: '2022', note: 'ChatGPT goes public', x: 1540, delay: 810},
  ];
  const lineWidth = interpolate(frame, [40, 920], [0, 1540], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <EpisodeFrame>
      <div style={abs(190, 510)}>
        <div
          style={{
            width: lineWidth,
            height: 5,
            backgroundColor: colors.chalk,
            borderRadius: 999,
          }}
        />
      </div>
      {years.map((marker) => (
        <div
          key={marker.year}
          style={{
            ...abs(marker.x, 408, {width: 250}),
            opacity: fade(frame, marker.delay, 24),
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              backgroundColor:
                marker.year === '2022' ? colors.verifyRed : colors.chalk,
              margin: '84px auto 26px',
            }}
          />
          <div style={titleStyle(54)}>{marker.year}</div>
          <div
            style={{
              ...bodyStyle(25, {fontWeight: 600, opacity: 0.68, marginTop: 14}),
            }}
          >
            {marker.note}
          </div>
        </div>
      ))}
      <div style={abs(1280, 664, {opacity: fade(frame, 860, 28)})}>
        <C4SightWizard size={210} />
      </div>
    </EpisodeFrame>
  );
};

const EmptyStretch = () => {
  const frame = Math.max(0, useCurrentFrame() - 1360);
  const wizardBob = interpolate(frame, [0, 120, 240, 420, 580], [0, -8, 5, -5, 0], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <EpisodeFrame>
      <div style={{...centerStack}}>
        <div
          style={{
            ...titleStyle(220, {fontFamily: typography.bodyFamily}),
            opacity: 0.26,
          }}
        >
          ...
        </div>
        <div
          style={{
            ...bodyStyle(40, {fontStyle: 'italic', opacity: fade(frame, 45, 28)}),
            marginTop: 52,
          }}
        >
          basically nothing happened for a while
        </div>
      </div>
      <div
        style={{
          ...abs(1500, 690),
          opacity: fade(frame, 80, 24) * 0.82,
          transform: `translateY(${wizardBob}px) rotate(8deg)`,
        }}
      >
        <C4SightWizard size={190} />
      </div>
    </EpisodeFrame>
  );
};

const HundredMillion = () => (
  <EpisodeFrame>
    <div style={centerStack}>
      <div style={titleStyle(156)}>100M USERS</div>
      <div
        style={{
          ...titleStyle(96, {color: colors.verifyRed, marginTop: 18}),
        }}
      >
        60 DAYS
      </div>
      <div
        style={{
          ...bodyStyle(36, {fontStyle: 'italic', opacity: 0.62, marginTop: 42}),
        }}
      >
        faster than almost anything before it
      </div>
    </div>
    <div style={abs(1220, 610, {transform: 'rotate(-6deg)'})}>
      <C4SightWizard size={260} />
    </div>
  </EpisodeFrame>
);

const DiagramBox = ({
  title,
  body,
  x,
  y,
  width,
  delay,
  dashed = false,
}: {
  title: string;
  body?: string;
  x: number;
  y: number;
  width: number;
  delay: number;
  dashed?: boolean;
}) => {
  const frame = useCurrentFrame();
  const opacity = fade(frame, delay, timing.drawNormal);
  const scale = interpolate(frame, [delay, delay + timing.drawNormal], [0.96, 1], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <div
      style={{
        ...abs(x, y),
        width,
        height: 220,
        border: `4px ${dashed ? 'dashed' : 'solid'} ${colors.chalk}`,
        borderRadius: 6,
        boxSizing: 'border-box',
        color: colors.chalk,
        opacity,
        padding: '34px 38px',
        transform: `scale(${scale})`,
      }}
    >
      <div style={bodyStyle(43)}>{title}</div>
      {body ? (
        <div style={bodyStyle(31, {fontWeight: 600, marginTop: 30, opacity: 0.7})}>
          {body}
        </div>
      ) : null}
    </div>
  );
};

const Arrow = ({x, y, delay}: {x: number; y: number; delay: number}) => {
  const frame = useCurrentFrame();
  const progress = fade(frame, delay, timing.drawNormal);

  return (
    <svg
      style={{...abs(x, y), width: 190, height: 72, opacity: progress}}
      viewBox="0 0 190 72"
      aria-hidden="true"
    >
      <path
        d="M 8 36 L 156 36 M 132 14 L 164 36 L 132 58"
        fill="none"
        stroke={colors.chalk}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={6}
      />
    </svg>
  );
};

const InputModelOutput = () => {
  const frame = useCurrentFrame();
  const patternOpacity = fade(frame, 760, 45);

  return (
    <EpisodeFrame>
      <div style={abs(118, 90, titleStyle(58))}>how it actually works</div>
      <DiagramBox
        title="Input"
        body="Write a polite email"
        x={150}
        y={390}
        width={420}
        delay={120}
      />
      <Arrow x={598} y={462} delay={280} />
      <DiagramBox title="Model" x={790} y={350} width={420} delay={430} />
      <Arrow x={1242} y={462} delay={620} />
      <DiagramBox
        title="Output"
        body="Hi Sarah..."
        x={1440}
        y={390}
        width={330}
        delay={780}
        dashed
      />
      <div
        style={{
          ...abs(858, 465, {width: 290, opacity: patternOpacity}),
          textAlign: 'center',
        }}
      >
        <div style={titleStyle(54, {fontFamily: typography.bodyFamily})}>
          PATTERNS
        </div>
        {[0, 1, 2].map((line) => (
          <div
            key={line}
            style={{
              width: `${74 + line * 8}%`,
              height: 6,
              backgroundColor: colors.chalk,
              borderRadius: 999,
              margin: '20px auto 0',
              opacity: 0.52,
            }}
          />
        ))}
      </div>
      <div style={abs(760, 650, {opacity: fade(frame, 920, 28)})}>
        <C4SightHost expression="dry" size={260} />
      </div>
      <div style={abs(1110, 676, {opacity: fade(frame, 960, 28)})}>
        <C4SightWizard size={210} />
      </div>
    </EpisodeFrame>
  );
};

const TrainingNotes = () => {
  const frame = useCurrentFrame();
  const notes = [
    {
      title: 'Training',
      body: 'Months of examples. Millions in compute. The model changes itself before you ever touch it.',
      x: 180,
      delay: 30,
    },
    {
      title: 'Inference',
      body: 'Your prompt goes in. A response comes out. It applies what it already learned.',
      x: 1020,
      delay: 260,
    },
  ];

  return (
    <EpisodeFrame>
      {notes.map((note) => (
        <div
          key={note.title}
          style={{
            ...abs(note.x, 265, {width: 720, opacity: fade(frame, note.delay, 34)}),
            border: `3px solid ${colors.chalk}`,
            borderRadius: 6,
            boxSizing: 'border-box',
            minHeight: 430,
            padding: 48,
          }}
        >
          <div style={titleStyle(78)}>{note.title}</div>
          <div style={bodyStyle(38, {marginTop: 42, opacity: 0.76})}>
            {note.body}
          </div>
        </div>
      ))}
    </EpisodeFrame>
  );
};

const EmergenceDebate = () => (
  <EpisodeFrame>
    <div style={abs(172, 186, {width: 700})}>
      <div style={smallCaps}>IS THIS...</div>
      <div style={titleStyle(72, {marginTop: 36})}>
        genuine intelligence appearing spontaneously?
      </div>
    </div>
    <div style={abs(1048, 186, {width: 700})}>
      <div style={{...smallCaps, color: colors.verifyRed}}>OR IS THIS...</div>
      <div style={titleStyle(72, {marginTop: 36})}>
        pattern matching good enough to look intelligent?
      </div>
    </div>
    <div style={abs(822, 690, {opacity: 0.86})}>
      <C4SightHost expression="raised" size={250} />
    </div>
    <div style={abs(1040, 710, {opacity: 0.86})}>
      <C4SightWizard size={210} />
    </div>
  </EpisodeFrame>
);

const UnsettledCharacters = () => (
  <EpisodeFrame>
    <div style={centerStack}>
      <div style={titleStyle(104)}>That is not nothing.</div>
      <div
        style={bodyStyle(38, {
          fontStyle: 'italic',
          marginTop: 32,
          opacity: 0.62,
        })}
      >
        That is actually quite significant.
      </div>
    </div>
    <div style={abs(570, 620)}>
      <C4SightHost expression="surprised" size={290} />
    </div>
    <div style={abs(1120, 655)}>
      <C4SightWizard size={230} />
    </div>
  </EpisodeFrame>
);

const VerificationJob = () => {
  const frame = Math.max(0, useCurrentFrame() - 1000);
  const hostBob = interpolate(frame, [0, 80, 160, 260], [0, -6, 4, 0], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <EpisodeFrame>
      <div
        style={{
          ...abs(260, 248),
          opacity: fade(frame, 20, 26),
          transform: `translateY(${hostBob}px)`,
        }}
      >
        <C4SightHost expression="dry" size={390} />
      </div>
      <div
        style={{
          ...abs(760, 230, {width: 920}),
          ...titleStyle(78, {
            opacity: fade(frame, 45, 30),
            transform: `translateY(${interpolate(frame, [45, 76], [24, 0], {
              ...clamp,
              easing: entranceEase,
            })}px)`,
          }),
        }}
      >
        It generates.
        <br />
        Verification is your job.
      </div>
      <div
        style={{
          ...abs(766, 628, {width: 820}),
          borderLeft: `6px solid ${colors.verifyRed}`,
          boxSizing: 'border-box',
          opacity: fade(frame, 130, 32),
          padding: '10px 0 10px 34px',
        }}
      >
        <div style={bodyStyle(34, {opacity: 0.72})}>
          The people who get burned are almost always the ones who forget that.
        </div>
      </div>
    </EpisodeFrame>
  );
};

const LocalModelNote = () => (
  <EpisodeFrame>
    <div style={abs(160, 150, {width: 760})}>
      <div style={titleStyle(92)}>Local models are real.</div>
      <div style={bodyStyle(40, {marginTop: 44, opacity: 0.72})}>
        Smaller today. Less capable than frontier systems. But private,
        offline, cheaper, and closing the gap.
      </div>
    </div>
    <div style={abs(1120, 292)}>
      <C4SightHost expression="curious" size={360} />
    </div>
    <div style={abs(1370, 624)}>
      <C4SightWizard size={210} />
    </div>
  </EpisodeFrame>
);

const ThesisMarkTeal = () => (
  <AbsoluteFill style={baseFrame(colors.thesisTeal)}>
    <E1A10Teal />
    <div style={{...centerStack, position: 'absolute'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 82}}>
        <svg width={250} height={330} viewBox="0 0 250 330" aria-hidden="true">
          <circle cx={125} cy={64} r={52} fill={colors.hostWhite} />
          <path
            d="M 54 166 Q 54 130 91 130 L 159 130 Q 196 130 196 166 L 188 312 L 62 312 Z"
            fill={colors.hostWhite}
          />
        </svg>
        <div style={titleStyle(190, {color: colors.hostWhite})}>+</div>
        <svg width={310} height={310} viewBox="-155 -155 310 310" aria-hidden="true">
          <rect
            x={-104}
            y={-104}
            width={208}
            height={208}
            rx={34}
            fill="none"
            stroke={colors.hostWhite}
            strokeWidth={8}
          />
          <rect
            x={-54}
            y={-54}
            width={108}
            height={108}
            rx={14}
            fill={colors.hostWhite}
          />
          {[-58, 0, 58].map((offset) => (
            <g key={offset}>
              <line
                x1={offset}
                y1={-104}
                x2={offset}
                y2={-144}
                stroke={colors.hostWhite}
                strokeLinecap="round"
                strokeWidth={8}
              />
              <line
                x1={offset}
                y1={104}
                x2={offset}
                y2={144}
                stroke={colors.hostWhite}
                strokeLinecap="round"
                strokeWidth={8}
              />
              <line
                x1={-104}
                y1={offset}
                x2={-144}
                y2={offset}
                stroke={colors.hostWhite}
                strokeLinecap="round"
                strokeWidth={8}
              />
              <line
                x1={104}
                y1={offset}
                x2={144}
                y2={offset}
                stroke={colors.hostWhite}
                strokeLinecap="round"
                strokeWidth={8}
              />
            </g>
          ))}
        </svg>
      </div>
      <div
        style={titleStyle(92, {
          color: colors.hostWhite,
          marginTop: 72,
          textTransform: 'uppercase',
        })}
      >
        Better than either alone.
      </div>
    </div>
  </AbsoluteFill>
);

const ThesisComparison = () => {
  const frame = Math.max(0, useCurrentFrame() - 620);
  const good = ['draft', 'research', 'summarise', 'translate', 'iterate', 'scale'];
  const not = ['your brain', 'your taste', 'your judgement', 'your responsibility'];

  return (
    <EpisodeFrame backgroundColor={colors.thesisTeal}>
      <div style={{display: 'flex', gap: 100, padding: '126px 150px'}}>
        {[
          {heading: 'AI IS GOOD AT:', items: good, accent: colors.hostWhite},
          {heading: 'AI IS NOT:', items: not, accent: colors.verifyRed},
        ].map((column) => (
          <div key={column.heading} style={{flex: 1}}>
            <div
              style={{
                ...smallCaps,
                color: column.accent,
                borderBottom: `4px solid ${column.accent}`,
                paddingBottom: 24,
              }}
            >
              {column.heading}
            </div>
            <div style={{marginTop: 48, display: 'flex', flexDirection: 'column', gap: 28}}>
              {column.items.map((item) => (
                <div
                  key={item}
                  style={bodyStyle(48, {
                    color: colors.hostWhite,
                    opacity: fade(
                      frame,
                      80 +
                        (column.heading === 'AI IS GOOD AT:'
                          ? good.indexOf(item) * 54
                          : 160 + not.indexOf(item) * 70),
                      26,
                    ),
                    transform: `translateY(${interpolate(
                      frame,
                      [
                        80 +
                          (column.heading === 'AI IS GOOD AT:'
                            ? good.indexOf(item) * 54
                            : 160 + not.indexOf(item) * 70),
                        108 +
                          (column.heading === 'AI IS GOOD AT:'
                            ? good.indexOf(item) * 54
                            : 160 + not.indexOf(item) * 70),
                      ],
                      [22, 0],
                      {...clamp, easing: entranceEase},
                    )}px)`,
                    textTransform: 'uppercase',
                  })}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </EpisodeFrame>
  );
};

const SeriesCardsBuild = () => {
  const frame = Math.max(0, useCurrentFrame() - 1320);
  const cards = [
    'Why AI confidently gets things wrong',
    'How to actually talk to AI',
    'ChatGPT vs Claude vs Gemini',
    'Is AI going to take your job?',
    'What are AI agents?',
    'And more. No hype.',
  ];

  return (
    <EpisodeFrame>
      <div style={abs(130, 94, titleStyle(84))}>What&apos;s coming</div>
      {cards.map((card, index) => {
        const opacity = fade(frame, 120 + index * 150, 30);
        const x = interpolate(frame, [120 + index * 150, 160 + index * 150], [90, 0], {
          ...clamp,
          easing: entranceEase,
        });

        return (
          <div
            key={card}
            style={{
              ...abs(280 + (index % 2) * 700 + x, 250 + Math.floor(index / 2) * 205),
              width: 620,
              height: 150,
              backgroundColor: palette.voidSurface,
              border: `1px solid rgba(244,237,224,0.28)`,
              borderRadius: 6,
              boxSizing: 'border-box',
              color: colors.chalk,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              opacity,
              padding: '28px 34px',
            }}
          >
            <div style={{...smallCaps, color: colors.verifyRed, fontSize: 20}}>
              EP {String(index + 2).padStart(2, '0')}
            </div>
            <div style={bodyStyle(34, {lineHeight: 1.08, marginTop: 14})}>{card}</div>
          </div>
        );
      })}
    </EpisodeFrame>
  );
};

const SeriesRoadmapAsset = () => (
  <MotionFrame offset={360} revealDuration={42} scaleTo={1.01}>
    <div
      style={{
        ...abs(96, 54),
        transform: 'scale(0.9)',
        transformOrigin: 'top left',
      }}
    >
      <E1A9Cards />
    </div>
  </MotionFrame>
);

const FinalEndCard = () => (
  <EpisodeFrame>
    <div style={abs(510, 352)}>
      <C4SightHost expression="smile" size={360} />
    </div>
    <div style={abs(980, 512, {transform: 'rotate(-3deg)'})}>
      <C4SightWizard size={230} />
    </div>
    <div style={abs(1210, 326, {width: 500})}>
      <div style={titleStyle(94)}>C4Sight</div>
      <div style={bodyStyle(36, {fontStyle: 'italic', opacity: 0.62, marginTop: 24})}>
        AI made clear.
      </div>
      <div style={{...smallCaps, marginTop: 54, color: colors.verifyRed}}>
        with Caleb
      </div>
    </div>
  </EpisodeFrame>
);

const ColdOpen = () => {
  const frame = useCurrentFrame();

  if (frame < 90) {
    return <EpisodeFrame />;
  }

  if (frame >= 1500) {
    const scale = interpolate(frame, [1500, 1530, 1600], [0.88, 1.08, 1], {
      ...clamp,
      easing: entranceEase,
    });

    return (
      <EpisodeFrame>
        <div style={abs(0, 170, {width: '100%', textAlign: 'center'})}>
          <div style={titleStyle(250, {transform: `scale(${scale})`})}>NO.</div>
        </div>
        <div
          style={{
            ...abs(0, 700),
            display: 'flex',
            justifyContent: 'center',
            transform: 'scaleY(0.7) rotate(-8deg)',
            width: '100%',
          }}
        >
          <C4SightWizard size={190} />
        </div>
      </EpisodeFrame>
    );
  }

  const titleOpacity = fade(frame, 110, 55);
  const titleY = interpolate(frame, [110, 160], [28, 0], {
    ...clamp,
    easing: entranceEase,
  });
  const wizardY = interpolate(frame, [210, 420], [320, 0], {
    ...clamp,
    easing: entranceEase,
  });
  const wizardScale = frame < 510 ? 0.72 : 1;
  const claimOpacity = frame < 1040 ? 1 : leave(frame, 1040, 48);
  const wizardOpacity = frame < 1080 ? 1 : interpolate(frame, [1080, 1130], [1, 0.38], {
    ...clamp,
    easing: exitEase,
  });
  const wizardBob = interpolate(frame, [510, 720, 930, 1160, 1450], [0, -10, 8, -5, 0], {
    ...clamp,
    easing: entranceEase,
  });

  return (
    <EpisodeFrame>
      <div
        style={{
          ...centerStack,
          opacity: frame < 650 ? titleOpacity : leave(frame, 650, 40),
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div style={titleStyle(154)}>Is AI magic?</div>
      </div>
      <div
        style={{
          ...abs(frame < 510 ? 1320 : 730, frame < 510 ? 560 : 270),
          opacity: wizardOpacity,
          transform: `translateY(${wizardY + (frame < 510 ? 0 : wizardBob)}px) scale(${wizardScale})`,
        }}
      >
        <C4SightWizard size={frame < 510 ? 290 : 430} />
      </div>
      {frame >= 510 ? (
        <>
          <ClaimCard label="writes your emails" x={150} y={225} rotation={-4} delay={540} groupOpacity={claimOpacity} />
          <ClaimCard label="passes your exams" x={1340} y={230} rotation={5} delay={620} groupOpacity={claimOpacity} />
          <ClaimCard label="generates websites" x={190} y={575} rotation={3} delay={700} groupOpacity={claimOpacity} />
          <ClaimCard label="makes art that wins competitions" x={1308} y={590} rotation={-5} delay={780} groupOpacity={claimOpacity} />
          <ClaimCard label="fakes your voice" x={730} y={742} rotation={-2} delay={860} groupOpacity={claimOpacity} />
          <ClaimCard label="talks to your customers" x={760} y={160} rotation={2} delay={940} groupOpacity={claimOpacity} />
        </>
      ) : null}
      {frame >= 1080 ? (
        <div
          style={{
            ...abs(290, 800, {width: 1340}),
            backgroundColor: palette.void,
            borderTop: `2px solid rgba(244,237,224,0.28)`,
            ...bodyStyle(42, {
              opacity: fade(frame, 1080, 40),
              paddingTop: 28,
              textAlign: 'center',
            }),
          }}
        >
          Impressive is not the same thing as magic.
        </div>
      ) : null}
    </EpisodeFrame>
  );
};

const SituatingMoment = () => {
  const frame = useCurrentFrame();

  if (frame < 480) {
    return (
      <MotionFrame scaleTo={1.01}>
        <E1A1Timestamp />
      </MotionFrame>
    );
  }

  if (frame < 940) {
    return <TimelineNow />;
  }

  return (
    <MotionFrame offset={940} scaleTo={1.012}>
      <E1A2Growth />
    </MotionFrame>
  );
};

const BriefHistory = () => {
  const frame = useCurrentFrame();

  if (frame < 360) {
    return <TitleCard title="A BRIEF HISTORY." subtitle="briefer than you'd expect." />;
  }

  if (frame < 1360) {
    return <HistoryTimeline />;
  }

  if (frame < 1940) {
    return <EmptyStretch />;
  }

  if (frame < 2860) {
    return (
      <MotionFrame offset={1940} scaleTo={1.012}>
        <E1A3Timeline />
      </MotionFrame>
    );
  }

  if (frame < 3480) {
    return (
      <MotionFrame offset={2860} scaleTo={1.012}>
        <E1A4Paper />
      </MotionFrame>
    );
  }

  if (frame < 3900) {
    return <HundredMillion />;
  }

  return <HypeCycler />;
};

const Mechanism = () => {
  const frame = useCurrentFrame();

  if (frame < 360) {
    return (
      <TitleCard
        title={
          <>
            HOW IT ACTUALLY
            <br />
            WORKS.
          </>
        }
        subtitle="no, really."
        size={112}
      />
    );
  }

  if (frame < 1340) {
    return <InputModelOutput />;
  }

  if (frame < 2220) {
    return (
      <MotionFrame offset={1340} scaleTo={1.012}>
        <E1A5Autocomplete />
      </MotionFrame>
    );
  }

  return (
    <MotionFrame offset={2220} scaleTo={1.012}>
      <E1A6ModelInterior />
    </MotionFrame>
  );
};

const TrainingInference = () => {
  const frame = useCurrentFrame();

  if (frame < 820) {
    return (
      <MotionFrame scaleTo={1.012}>
        <E1A13TrainInfer />
      </MotionFrame>
    );
  }

  if (frame < 1480) {
    return <TrainingNotes />;
  }

  return (
    <MotionFrame offset={1480} scaleTo={1.012}>
      <E1A16Correction />
    </MotionFrame>
  );
};

const Emergence = () => {
  const frame = useCurrentFrame();

  if (frame < 360) {
    return (
      <TitleCard
        title="EMERGENCE."
        subtitle="the part that keeps researchers up at night."
      />
    );
  }

  if (frame < 1500) {
    return (
      <MotionFrame offset={360} scaleTo={1.012}>
        <E1A14Emergence />
      </MotionFrame>
    );
  }

  if (frame < 2240) {
    return <EmergenceDebate />;
  }

  return <UnsettledCharacters />;
};

const HallucinationProblem = () => {
  const frame = useCurrentFrame();

  if (frame < 300) {
    return (
      <TitleCard
        title={
          <>
            THE PART NOBODY
            <br />
            TELLS YOU.
          </>
        }
        subtitle={<span style={{color: colors.verifyRed}}>?</span>}
        size={104}
      />
    );
  }

  if (frame < 1000) {
    const stage = frame < 520 ? 'before' : frame < 700 ? 'during' : 'after';
    const offset = frame < 520 ? 300 : frame < 700 ? 520 : 700;

    return (
      <MotionFrame offset={offset} scaleTo={1.008} revealDuration={24}>
        <HallucinationFrame stage={stage} />
      </MotionFrame>
    );
  }

  return <VerificationJob />;
};

const LocalModels = () => {
  const frame = useCurrentFrame();

  if (frame < 900) {
    return (
      <MotionFrame scaleTo={1.012}>
        <E1A15LocalCloud />
      </MotionFrame>
    );
  }

  return <LocalModelNote />;
};

const Thesis = () => {
  const frame = useCurrentFrame();

  if (frame < 620) {
    return <ThesisMarkTeal />;
  }

  if (frame < 1560) {
    return <ThesisComparison />;
  }

  return (
    <EpisodeFrame backgroundColor={colors.thesisTeal}>
      <div style={abs(270, 245)}>
        <C4SightHost expression="smile" size={410} />
      </div>
      <div style={abs(790, 260, {width: 900})}>
        <div style={titleStyle(88, {color: colors.hostWhite})}>
          Clear beats clever.
        </div>
        <div style={bodyStyle(42, {color: colors.hostWhite, marginTop: 44, opacity: 0.82})}>
          Use AI for speed. Keep judgement, taste, and responsibility human.
        </div>
      </div>
    </EpisodeFrame>
  );
};

const SeriesAhead = () => {
  const frame = useCurrentFrame();

  if (frame < 360) {
    return <TitleCard title="WHAT'S COMING." subtitle="ten episodes. no fluff." />;
  }

  if (frame < 1320) {
    return <SeriesRoadmapAsset />;
  }

  if (frame < 2320) {
    return <SeriesCardsBuild />;
  }

  return <FinalEndCard />;
};

export const C4SightEpisode01 = () => (
  <AbsoluteFill>
    <Sequence
      name="01 Cold Open - Is AI magic?"
      from={sequenceStarts.coldOpen}
      durationInFrames={sequenceFrames.coldOpen}
    >
      <ColdOpen />
    </Sequence>
    <Sequence
      name="02 Situating the moment"
      from={sequenceStarts.situating}
      durationInFrames={sequenceFrames.situating}
    >
      <SituatingMoment />
    </Sequence>
    <Sequence
      name="03 A brief history of AI"
      from={sequenceStarts.history}
      durationInFrames={sequenceFrames.history}
    >
      <BriefHistory />
    </Sequence>
    <Sequence
      name="04 What AI actually is"
      from={sequenceStarts.mechanism}
      durationInFrames={sequenceFrames.mechanism}
    >
      <Mechanism />
    </Sequence>
    <Sequence
      name="05 Training vs inference"
      from={sequenceStarts.trainingInference}
      durationInFrames={sequenceFrames.trainingInference}
    >
      <TrainingInference />
    </Sequence>
    <Sequence
      name="06 Emergence"
      from={sequenceStarts.emergence}
      durationInFrames={sequenceFrames.emergence}
    >
      <Emergence />
    </Sequence>
    <Sequence
      name="07 The hallucination problem"
      from={sequenceStarts.hallucination}
      durationInFrames={sequenceFrames.hallucination}
    >
      <HallucinationProblem />
    </Sequence>
    <Sequence
      name="08 Local models"
      from={sequenceStarts.localModels}
      durationInFrames={sequenceFrames.localModels}
    >
      <LocalModels />
    </Sequence>
    <Sequence
      name="09 Thesis - Better than either alone"
      from={sequenceStarts.thesis}
      durationInFrames={sequenceFrames.thesis}
    >
      <Thesis />
    </Sequence>
    <Sequence
      name="10 Series ahead"
      from={sequenceStarts.seriesAhead}
      durationInFrames={sequenceFrames.seriesAhead}
    >
      <SeriesAhead />
    </Sequence>
  </AbsoluteFill>
);
