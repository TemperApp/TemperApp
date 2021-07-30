import { PI, toDegrees, toCartesian, vec2 } from "../../utils/maths";
import Arc from './Arc';
import './Sector.css'

type SectorProps = {
  idx: number,
  c: vec2,
  angle: number,
  offsetAngle: number,
  offsetAngle2?: number,
  innerR: number,
  outerR: number,
  fill?: string,
  label?: string,
  isTextHorizontal?: boolean,
  fontSize?: number,
  hasStroke?: boolean;
  attributesText?: any,
  attributesPath?: any,
};

const Sector: React.FC<SectorProps> = ({
  idx,
  c,
  angle,
  offsetAngle,
  offsetAngle2 = -PI/2 - angle/2,
  innerR,
  outerR,
  fill = 'transparent',
  label = '',
  isTextHorizontal = false,
  fontSize = Math.max(6, (outerR - innerR) / 1.6),
  hasStroke = true,
  attributesText = {},
  attributesPath = {},
}) => {
  const offsetAngles = offsetAngle + offsetAngle2;
  const middleR = (innerR + outerR)/2;
  const isTextPathInverted = (offsetAngles >= 0 && offsetAngles < PI-angle/2);
  const textPathR = middleR + (isTextHorizontal ? 0 : (isTextPathInverted ? 3.5 : -4));

  return (
    <g 
      transform={`
        rotate(${toDegrees(offsetAngles)}, ${c.x}, ${c.y})`}
      className='sector'
    >
      { label && !isTextHorizontal
        &&
        <defs>
          <Arc
            id={`text-path-${innerR}-${outerR}-${idx}`}
            r={textPathR} c={c} angle={angle}
            inverse={isTextPathInverted}
          />
        </defs>
      }

      <path
        fill={fill}
        stroke="var(--color-hover)"
        strokeWidth={hasStroke ? '0.5px' : '0'}
        {...attributesPath}
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
      
      { label !== ''
        && (
          !isTextHorizontal
          ? <text
              x={textPathR * angle / 2}
              textAnchor='middle'
              fontSize={fontSize}
              {...attributesText}
            >
              <textPath xlinkHref={`#text-path-${innerR}-${outerR}-${idx}`}>
                {label}
              </textPath>
            </text>
            
          : <text
              x={toCartesian((angle)/2, c, textPathR).x}
              y={toCartesian((angle)/2, c, textPathR).y + fontSize/3}
              transform={`
                rotate(
                  ${-toDegrees(offsetAngles)},
                  ${toCartesian((angle)/2, c, textPathR).x},
                  ${toCartesian((angle)/2, c, textPathR).y})`}
              textAnchor='middle'
              fontSize={fontSize}
              fill="black"
              {...attributesText}
            >
              {label}
            </text>
        )
      }
    </g>
)};

export default Sector;
