import { cos, sin } from "../maths";

export type vec2 = {
  x: number,
  y: number
};


export const rotateMat = (a: number) => (
  `matrix(${cos(a)} ${sin(a)} ${-sin(a)} ${cos(a)} 0 0)`
);


export const toCartesian = (angle: number, c={ x:0, y:0 }, r = 1) => ({
  x: r * cos(angle) + c.x,
  y: r * sin(angle) + c.y
})

