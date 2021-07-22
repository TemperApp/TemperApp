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
