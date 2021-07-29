import { PI, cos, sin, epsilon } from "../../utils/maths";
import { vec2 } from "../../utils/maths";

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
    strokeWidth={0}
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

export default Arc;
