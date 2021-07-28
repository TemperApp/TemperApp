import React from 'react';
import { cos, sin, PI, epsilon } from '../maths';
import { vec2, toCartesian } from './utils';

type ArcProps = {
  id: string
  c: vec2,
  r: number,
  angle?: number,
  inverse?: boolean,
  attributes?: any,
};

const Arc: React.FC<ArcProps> = ({
  id,
  c,
  r,
  angle = 2*PI,
  inverse = false,
  attributes = {},
}) => (
  <path
    id={id}
    stroke="blue"
    strokeWidth={1}
    fill="transparent"
    {...attributes}
    d={`
      M ${c.x + r * cos(inverse ? angle : 0)}
        ${c.y + r * sin(inverse ? angle : 0) - epsilon}
      A ${r} ${r}
        0 
        ${(angle > PI) ? 1 : 0}
        ${((angle > 0) !== inverse) ? 1 : 0}
        ${c.x + r * cos(inverse ? 0 : angle)}
        ${c.y + r * sin(inverse ? 0 : angle) - epsilon}
    `}
  />
);


type SectorProps = {
  idx: number,
  c: vec2,
  angle: number,
  offsetAngle: number,
  fill: string,
  label: string,
  attributes?: any,
}

const Sector: React.FC<SectorProps> = ({
  idx,
  c,
  angle,
  offsetAngle,
  fill,
  label,
  attributes = {},
}) => {
  const innerR = 75;
  const outerR = 100;
  const middleR = (innerR + outerR)/2;
  const isTextPathInverted = (offsetAngle >= PI/2 && offsetAngle < 3*PI/2);
  const textPathR = middleR + (isTextPathInverted ? 3.5 : -4) ;
  
  return (
    <g transform={`
        rotate(-90, ${c.x}, ${c.y})
        rotate(${offsetAngle / 2/PI*360}, ${c.x}, ${c.y})`}
    >
      <defs>
        <Arc
          id={`text-path-outer-${idx}`}
          r={textPathR} c={c} angle={angle}
          inverse={isTextPathInverted}
        />
      </defs>

      <path
        fill={fill}
        {...attributes}
        d={`
          M ${toCartesian(0, c, outerR).x} ${toCartesian(0, c, outerR).y}

          A ${outerR} ${outerR} 0
            ${angle > PI ? 1 : 0}
            ${angle > 0 ? 1 : 0}
            ${toCartesian(angle, c, outerR).x}
            ${toCartesian(angle, c, outerR).y}

          L ${toCartesian(angle, c, innerR).x}
            ${toCartesian(angle, c, innerR).y}
            
          A ${innerR} ${innerR} 0
            ${angle > PI ? 1 : 0}
            ${angle < 0 ? 1 : 0}
            ${toCartesian(0, c, innerR).x}
            ${toCartesian(0, c, innerR).y}
          Z
        `}
      />
      
      <text
        x={textPathR * angle / 2}
        textAnchor='middle'
        fontSize={11}
        fill="black"
      >
        <textPath xlinkHref={`#text-path-outer-${idx}`}>
          {label}
        </textPath>
      </text>
    </g>
  );
}

type DoughnutSector = {
  fill: string,
  label: string,
};

type DoughnutProps = {
  data: DoughnutSector[],
}

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
        fill={fill}
        label={label}
      />
  )}
  </svg>
)};

export default Doughnut;
