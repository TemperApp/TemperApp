import { PI, toDegrees, toCartesian, vec2 } from "../../utils/maths";
import Arc from './Arc';


type SectorProps = {
  idx: number,
  c: vec2,
  angle: number,
  offsetAngle: number,
  fill: string,
  label: string,
  isTextHorizontal?: boolean,
  attributes?: any,
};

const Sector: React.FC<SectorProps> = ({
  idx,
  c,
  angle,
  offsetAngle,
  fill,
  label,
  isTextHorizontal = false,
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
        rotate(${toDegrees(offsetAngle)}, ${c.x}, ${c.y})`}
    >
      { !isTextHorizontal
        &&
        <defs>
          <Arc
            id={`text-path-outer-${idx}`}
            r={textPathR} c={c} angle={angle}
            inverse={isTextPathInverted}
          />
        </defs>
      }

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
      
      { !isTextHorizontal
        ? <text
            x={textPathR * angle / 2}
            textAnchor='middle'
            fontSize={11}
            fill="black"
          >
            <textPath xlinkHref={`#text-path-outer-${idx}`}>
              {label}
            </textPath>
          </text>
          
        : <text
            x={toCartesian((angle)/2, c, textPathR).x}
            y={toCartesian((angle)/2, c, textPathR).y}
            transform={`
              rotate(
                ${toDegrees(PI/2-offsetAngle)},
                ${toCartesian((angle)/2, c, textPathR).x},
                ${toCartesian((angle)/2, c, textPathR).y})`}
            textAnchor='middle'
            fontSize={11}
            fill="black"
          >
            {label}
          </text>
      }
    </g>
)};

export default Sector;
