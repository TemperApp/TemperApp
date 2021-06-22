/**
 * @param cpExp5th the pythagorean comma exponent as string
 *                 with a common format of use.
 *                 (e.g.: -1/12, 0, +1/4.36, 2/0.66).
 *                 No sign provided means 'minus' (-) by default
 * @returns a number representing the divergence of the fifth
 * of the corresponding major chord. '0' is the pure interval
 * @returns null, if parsing fails
 */
export const cpExp5thStrToNumber = (cpExp5th: string): number | null => {
  const match = cpExp5th.trim()
      .match(/^[+-]?0+$|^([+-])?([0-9]+)\/(([0-9]*[.])?[0-9]+)$/) as any[];
  if (!match) {
    console.warn(`[Model]: Cannot parse cpExp5th string: ${cpExp5th}`);
    return null;
  }
  if (match[0] == 0)
    return 0;
  const [, sign, numerator, denominator] = match;
  return (
    (!sign ? -1 : (sign == '+' ? 1 : -1 ))
    * numerator/denominator * 12);
};


/**
 * @param csExp3rd the syntonic comma exponent as string
 *                 with a common format of use.
 *                 (e.g.: +7/11, 0, -1/11, , 20/11).
 *                 No sign provided means 'plus' (+) by default
 * @returns a number representing the divergence of the third
 * of the corresponding major chord. '0' is the pure interval
 * @returns null, if parsing fails
 */
export const csExp3rdStrToNumber = (csExp3rd: string): number | null => {
  const match = csExp3rd.trim()
      .match(/^[+-]?0+$|^([+-])?([0-9]+)\/11$/) as any[];

  if (!match) {
    console.warn(`[Model]: Cannot parse csExp3rd string: ${csExp3rd}`);
    return null;
  }
  if (match[0] == 0)
    return 0;
  const [, sign, numerator] = match;
  return (
    (!sign ? 1 : (sign == '+' ? 1 : -1 ))
    * numerator);
};
