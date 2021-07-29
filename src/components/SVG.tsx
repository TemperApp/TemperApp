import React from 'react';
import { vec2 } from '../utils/maths';

type SVGProps = {
  viewBoxSize?: vec2,
  className?: string,
  classNameDefault?: string,
  attributes?: any,
};

const SVG: React.FC<SVGProps> = ({
  children,
  viewBoxSize = { x:300, y:300 },
  className = "",
  classNameDefault = "block mx-auto",
  attributes = {},
}) => (
  <svg
    className={`${classNameDefault} ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${viewBoxSize.x} ${viewBoxSize.y}`}
    {...attributes}
  >
    {children}
  </svg>
);

export default SVG;
