export const ChalkFilters = () => {
  return (
    <svg className="chalk-filters" aria-hidden="true">
      <defs>
        <filter id="board-noise" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            seed="19"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0.86 0 0 0 0 0.84 0 0 0 0 0.72 0 0 0 0.22 0"
          />
        </filter>
        <filter id="chalk-rough-line" x="-4%" y="-12%" width="108%" height="124%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.037"
            numOctaves="3"
            seed="7"
            result="rough"
          />
          <feDisplacementMap in="SourceGraphic" in2="rough" scale="2.4" />
        </filter>
        <filter id="chalk-rough-text" x="-3%" y="-10%" width="106%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.055"
            numOctaves="2"
            seed="11"
            result="rough"
          />
          <feDisplacementMap in="SourceGraphic" in2="rough" scale="1.15" />
        </filter>
      </defs>
    </svg>
  );
};
