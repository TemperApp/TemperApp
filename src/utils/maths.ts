export const cos = Math.cos;
export const sin = Math.sin;
export const PI = Math.PI;
export const epsilon = 0.00001;


export type vec2 = {
  x: number,
  y: number,
};

export type vec3 = {
  x: number,
  y: number,
  z: number,
};


/**
 * @param x angle in radians
 * @returns the angle in degrees
 */
export const toDegrees = (x: number) => (x / (2*PI) * 360);


/**
 * @param x angle in degrees
 * @returns the angle in radians
 */
export const toRad = (x: number) => (x / 360 * 2*PI);


/**
 * Performs conversion from polar
 * to cartesian coordinate system
 * @param angle 
 * @param c center
 * @param r radius
 */
export const toCartesian = (
  angle: number,
  c={ x:0, y:0 },
  r = 1
): vec2 => ({
  x: r * cos(angle) + c.x,
  y: r * sin(angle) + c.y
});


/**
 * Performs linear interpolation
 * @param xmin 
 * @param xmax 
 * @param ymin 
 * @param ymax 
 * @param x 
 * @returns 
 */
export const lerp = (
  xmin: number,
  xmax: number,
  ymin: number,
  ymax: number,
  x: number,
): number => (
  (ymax - ymin) / (xmax - xmin) // dy/dx
  * (x - xmin) + ymin
);


/**
 * Constraints value to stay between
 * given min and max values
 * @param min 
 * @param max 
 * @param x
 */
export const bound = (
  min: number,
  max: number,
  x: number,
) => (
  Math.min(max, Math.max(min, x))
);


/**
 * @param min 
 * @param max 
 * @returns a random float between given min and max
 */
export const random = (
  min = 0,
  max = 1,
) => (
  Math.random() * (max - min) + min
);


/**
 * @param set set of possible values
 * @param x value to magnet
 * @returns the nearest value of the set
 * corresponding to 'x'
 */
export const magnet = (
  set: number[],
  x: number,
): typeof set[number] => {
  if (set.length === 0) {
    console.error('[maths] magnets invalid set: ', set, x);
    return 0;
  }
  if (set.length === 1)
    return set[0];

  const _set = set.sort((a, b) => a - b);

  if (x < _set[0])
    return _set[0];

  if (x > _set[_set.length-1])
    return _set[_set.length-1];

  do {
    if (_set[0] === x)
      return _set[0];
    if (_set[1] === x)
      return _set[1];
    if (_set[0] < x && x < _set[1])
      return (x - _set[0] <= _set[1] - x) ? _set[0] : _set[1];
    _set.shift();
  } while (_set.length >= 2);
  
  console.error('[maths] magnets failed: ', set, x);
  return 0;
}
