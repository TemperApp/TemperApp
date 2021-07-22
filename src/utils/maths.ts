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


export const bound = (
  min: number,
  max: number,
  x: number,
) => (
  Math.min(max, Math.max(min, x))
);


export const random = (
  min = 0,
  max = 1,
) => (
  Math.random() * (max - min) + min
);

export const magnet = (
  set: [number, ...number[]], // non empty array
  x: number,
): typeof set[number] => {
  if (set.length === 1)
    return set[0];

  set = set.sort((a, b) => a - b);

  if (x < set[0])
    return set[0];

  if (x > set[set.length-1])
    return set[set.length-1];

  do {
    if (set[0] === x)
      return set[0];
    if (set[0] < x && x < set[1])
      return (x - set[0] <= set[1] - x) ? set[0] : set[1];
    set.shift();
  } while (set.length >= 2);
  
  console.error('[maths] magnets failed: ', set, x);
  return 0;
}
