import {AbsoluteFill} from 'remotion';

const chalkDust = Array.from({length: 220}, (_, index) => {
  const x = (index * 137.31) % 1920;
  const y = (index * 271.79) % 1080;
  const radius = 0.55 + ((index * 11) % 7) * 0.16;
  const opacity = 0.035 + ((index * 17) % 10) * 0.006;

  return {x, y, radius, opacity};
});

const chalkScuffs = Array.from({length: 34}, (_, index) => {
  const x = 70 + ((index * 191.7) % 1780);
  const y = 62 + ((index * 83.9) % 950);
  const width = 34 + ((index * 19) % 86);
  const drift = ((index * 13) % 23) - 11;
  const opacity = 0.028 + ((index * 7) % 7) * 0.008;

  return {
    id: `scuff-${index}`,
    d: `M ${x.toFixed(1)} ${y.toFixed(1)} C ${(x + width * 0.34).toFixed(
      1,
    )} ${(y + drift).toFixed(1)}, ${(x + width * 0.72).toFixed(1)} ${(
      y - drift * 0.6
    ).toFixed(1)}, ${(x + width).toFixed(1)} ${(y + drift * 0.2).toFixed(1)}`,
    opacity,
  };
});

export const BlackboardBackground = () => {
  return (
    <AbsoluteFill className="blackboard">
      <svg
        className="blackboard__texture"
        viewBox="0 0 1920 1080"
        aria-hidden="true"
      >
        <rect
          className="blackboard__noise"
          x="0"
          y="0"
          width="1920"
          height="1080"
        />
        <g className="blackboard__dust">
          {chalkDust.map((dot, index) => (
            <circle
              key={`dust-${index}`}
              cx={dot.x}
              cy={dot.y}
              r={dot.radius}
              opacity={dot.opacity}
            />
          ))}
        </g>
        <g className="blackboard__scuffs">
          {chalkScuffs.map((scuff) => (
            <path key={scuff.id} d={scuff.d} opacity={scuff.opacity} />
          ))}
        </g>
      </svg>
      <div className="blackboard__edge" />
    </AbsoluteFill>
  );
};
