import NotesMap, { mapNotesMap } from "./Note/NotesMap";

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
  if (String(Number(match[0])) === '0')
    return 0;
  const [, sign, numerator, denominator] = match;
  return (
    (!sign ? -1 : (sign === '+' ? 1 : -1))
    * numerator / denominator * 12);
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
  if (String(Number(match[0])) === '0')
    return 0;
  const [, sign, numerator] = match;
  return (
    (!sign ? 1 : (sign === '+' ? 1 : -1))
    * numerator);
};


/**
 * Computes the frequencies of the 12 notes of the 4th
 * octave relative to the given A4 reference frequency
 * and deviation values
 * @param A4 Reference pitch frequency of A4 note
 * @param deviations Deviation tables for each note
 *                  relative to the equal temperament
 * @returns a NotesMap of frequencies for the 4th octave
 */
export const freqs4 = (
  A4 = 440,
  deviations = mapNotesMap(0)
): NotesMap<number> => ({
  C: A4 * Math.pow(2, -9 / 12) * Math.pow(2, (deviations.C / 1200)),
  C_sharp: A4 * Math.pow(2, -8 / 12) * Math.pow(2, (deviations.C_sharp / 1200)),
  D: A4 * Math.pow(2, -7 / 12) * Math.pow(2, (deviations.D / 1200)),
  E_flat: A4 * Math.pow(2, -6 / 12) * Math.pow(2, (deviations.E_flat / 1200)),
  E: A4 * Math.pow(2, -5 / 12) * Math.pow(2, (deviations.E / 1200)),
  F: A4 * Math.pow(2, -4 / 12) * Math.pow(2, (deviations.F / 1200)),
  F_sharp: A4 * Math.pow(2, -3 / 12) * Math.pow(2, (deviations.F_sharp / 1200)),
  G: A4 * Math.pow(2, -2 / 12) * Math.pow(2, (deviations.G / 1200)),
  G_sharp: A4 * Math.pow(2, -1 / 12) * Math.pow(2, (deviations.G_sharp / 1200)),
  A: A4 * Math.pow(2, (deviations.A / 1200)),
  B_flat: A4 * Math.pow(2, 1 / 12) * Math.pow(2, (deviations.B_flat / 1200)),
  B: A4 * Math.pow(2, 2 / 12) * Math.pow(2, (deviations.B / 1200)),
});


/**
 * @param csExp3rdMap a NotesMap of the syntonic comma exponent
 *                    with a common format of use.
 *                    (e.g.: +7/11, 0, -1/11, , 20/11).
 *                    No sign provided means 'plus' (+) by default
 * @returns thirds quality number value
 */
export const thirdQ = (csExp3rdMap: NotesMap<string>): NotesMap<number | null> => (
  mapNotesMap(csExp3rdMap, csExp3rdStrToNumber)
);


/**
 * @param cpExp5thMap a NotesMap of the pythagorean comma exponent
 *                    with a common format of use.
 *                    (e.g.: -1/12, 0, +1/4.36, 2/0.66).
 *                    No sign provided means 'minus' (-) by default
 * @returns fitfhs quality number value
 */
export const fifthQ = (cpExp5thMap: NotesMap<string>): NotesMap<number | null> => (
  mapNotesMap(cpExp5thMap, cpExp5thStrToNumber)
);
