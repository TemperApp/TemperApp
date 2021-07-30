import React from 'react';
import { vec2 } from '../../../utils/maths';

type PitchCircleLabelsProps = {
  c: vec2,
  label1?: string,
  label2?: string,
  label3?: string
};

const PitchCircleLabels: React.FC<PitchCircleLabelsProps> = ({
  c,
  label1 = '',
  label2 = '',
  label3 = 'CHECK',
}) => {

  return (
    <g id="pc-centercircle">
      <text transform={`translate(${c.x} ${c.y})`}>
        <tspan
          className="pc-label-tertiary"
          x="0" y="-22" textAnchor="middle"
        >
          {label3}
        </tspan>
        <tspan
          className="pc-label-primary"
          x="0" y="0" textAnchor="middle"
        >
          {label1}
        </tspan>
        <tspan
          className="pc-label-secondary"
          x="0" y="18" textAnchor="middle"
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
    prevProps.label2 === nextProps.label2 &&
    prevProps.label3 === nextProps.label3
);
