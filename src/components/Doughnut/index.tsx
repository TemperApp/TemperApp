import React from 'react';
import { PI, vec2 } from '../../utils/maths';
import Sector from './Sector';
import './Doughnut.css';

type DoughnutSector = {
  fill?: string,
  label?: string,
};

type DoughnutProps = {
  data: DoughnutSector[],
  c: vec2,
  innerR: number,
  outerR: number,
  isTextHorizontal?: boolean,
  hasStroke?: boolean;
  attributes?: any,
};

const Doughnut: React.FC<DoughnutProps> = ({
  data,
  c,
  innerR,
  outerR,
  isTextHorizontal = false,
  hasStroke = true,
  attributes = {},
}) => (
  <g {...attributes}>
    {data.map(({fill, label}, idx) =>
      <Sector
        key={idx}
        idx={idx}
        c={c}
        angle={2*PI / data.length}
        offsetAngle={idx * 2*PI / data.length}
        innerR={innerR}
        outerR={outerR}
        fill={fill || 'transparent'}
        label={label || ''}
        isTextHorizontal={isTextHorizontal}
        hasStroke={hasStroke}
      />
    )}
  </g>
);

export default Doughnut;
