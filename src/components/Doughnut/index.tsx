import React from 'react';
import { PI } from '../../utils/maths';
import Sector from './Sector';

type DoughnutSector = {
  fill?: string,
  label?: string,
};

type DoughnutProps = {
  data: DoughnutSector[],
};

const Doughnut: React.FC<DoughnutProps> = ({
  data,
}) => {
  const size = { x: 200 + 5, y: 200 + 5};
  const c = { x: size.x / 2, y: size.y / 2};

  return (
  <svg className="doughnut block mx-auto"
    width="300" height="300"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${size.x} ${size.y}`}
  >
    {data.map(({fill, label}, idx) =>
      <Sector
        key={idx}
        idx={idx}
        c={c}
        angle={2*PI / data.length}
        offsetAngle={idx * 2*PI / data.length}
        fill={fill || 'transparent'}
        label={label || ''}
      />
  )}
  </svg>
)};

export default Doughnut;
