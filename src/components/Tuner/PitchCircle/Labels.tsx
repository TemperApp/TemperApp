import React from 'react';

type PitchCircleLabelsProps = {
  label1?: string,
  label2?: string,
};

const PitchCircleLabels: React.FC<PitchCircleLabelsProps> = ({
  label1 = '',
  label2 = '',
}) => {

  // console.info('🔹 [PitchCircleLabels]: Render')
  return (
    <g id="pc-centercircle">
      <text transform="matrix(1 0 0 1 178.5 178.5)">
        <tspan
          className="pc-label-primary"
          x="0" dy="0" textAnchor="middle"
        >
          {label1}
        </tspan>
        <tspan
          className="pc-label-secondary"
          x="0" dy="35" textAnchor="middle"
        >
          {label2}
        </tspan>
      </text>
    </g>
  );
};

export default React.memo(
  PitchCircleLabels,
  (prevProps, nextProps) =>
    prevProps.label1 === nextProps.label1 &&
    prevProps.label2 === nextProps.label2
);
