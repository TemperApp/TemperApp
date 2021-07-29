import NotesMap, { mapNotesMap } from "./Note/NotesMap";


export const isCpExp5thValid = (cpExp5th: string): boolean => {
  return Boolean(cpExp5thRegexMatch(cpExp5th)); 
}


export const isCsExp3rdValid = (csExp3rd: string): boolean => {
  return Boolean(csExp3rdRegexMatch(csExp3rd)); 
}


export const cpExp5thRegexMatch = (cpExp5th: string): RegExpMatchArray | null => {
  return cpExp5th.trim()
    .match(/^[+-]?0+$|^([+-])?([0-9]+)\/((?:[0-9]*)[.]?[0-9]?[0-9]+)$/);
}


export const csExp3rdRegexMatch = (csExp3rd: string): RegExpMatchArray | null => {
  return csExp3rd.trim()
    .match(/^[+-]?0+$|^([+-])?([0-9]+)\/11$/);
}


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
  const match = cpExp5thRegexMatch(cpExp5th); 
  if (!match) {
    console.warn('[Divergence]: Cannot parse cpExp5th string:', cpExp5th);
    return null;
  }
  if (String(Number(match[0])) === '0')
    return 0;
  const [, sign, numerator, denominator] = match;

  return (
    (!sign ? -1 : (sign === '+' ? 1 : -1))
    * Number(numerator) / Number(denominator) * 12);
};


/**
 * @param cpExp5th the pythagorean comma exponent as string
 *                 with a common format of use.
 *                 (e.g.: -1/12, 0, +1/4.36, 2/0.66).
 *                 No sign provided means 'minus' (-) by default
 * @returns a formated CpExp5th string with two decimal places
 * @returns null, if parsing fails
 */
export const formatCpExp5thStr = (cpExp5th: string): string | null => {
  const match = cpExp5thRegexMatch(cpExp5th);
  if (!match) {
    console.warn(`[Model]: Cannot parse cpExp5th string: ${cpExp5th}`);
    return null;
  }
  
  if (String(Number(match[0])) === '0')
    return '0';
  const [, sign, numerator, denominator] = match;
  return (
    (sign === "+" ? "+" : "")
    + numerator
    + "/"
    + (String(Number(denominator)) === Number(denominator).toFixed(0)
      ? Number(denominator)
      : Number(denominator).toFixed(1))
  );
};


/**
 * @param cpExp5th the pythagorean comma exponent as string
 *                 with a common format of use.
 *                 (e.g.: -1/12, 0, +1/4.36).
 *                 No sign provided means 'minus' (-) by default
 * @returns the corresponding CsExp5th according to:
 * "denominator(cpExp5th) * (11/12) = denominator(csExp5th)"
 * @returns null, if parsing fails
 */
export const cpExp5thToCsExp5th = (cpExp5th : string): string | null => {
  const match = cpExp5thRegexMatch(cpExp5th);
  if (!match) {
    console.warn(`[Model]: Cannot parse cpExp5th string: ${cpExp5th}`);
    return null;
  }

  if (String(Number(match[0])) === '0')
    return '0';

  const sign = (match[1] === "+" ? "+" : "");
  const numerator = Number(match[2]);
  const denominator = Number(match[3]) * 11/12 / numerator;

  return (
    sign + "1/"
    + (Math.abs(denominator - Math.round(denominator)) < 0.01
        ? (denominator).toFixed(0)
        : (denominator).toFixed(1)
      )
  );
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
  const match = csExp3rdRegexMatch(csExp3rd);
  if (!match) {
    console.warn('[Divergence]: Cannot parse csExp3rd string:', csExp3rd);
    return null;
  }
  if (String(Number(match[0])) === '0')
    return 0;
  const [, sign, numerator] = match;
  return (
    (!sign ? 1 : (sign === '+' ? 1 : -1))
    * Number(numerator));
};


export const formatCsExp3rdStr = (csExp3rd: string): string | null => {
  const match = csExp3rdRegexMatch(csExp3rd);
  if (!match) {
    console.warn('[Divergence]: Cannot parse csExp3rd string:', csExp3rd);
    return null;
  }
  if (String(Number(match[0])) === '0')
    return "0";

  const [, sign, numerator] = match;
  return (
    (sign === "-" ? "-" : "")
    + numerator + "/11"
  )};
  

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
 * @param fallbackValue value to return if parsing fails
 * @returns thirds quality number value
 */
export const thirdQ = (
  csExp3rdMap: NotesMap<string>,
  fallbackValue: number = -99999
): NotesMap<number> => (
  mapNotesMap(csExp3rdMap, csExp3rdStrToNumber, fallbackValue)
);


/**
 * @param cpExp5thMap a NotesMap of the pythagorean comma exponent
 *                    with a common format of use.
 *                    (e.g.: -1/12, 0, +1/4.36, 2/0.66).
 *                    No sign provided means 'minus' (-) by default
 * @param fallbackValue value to return if parsing fails
 * @returns fitfhs quality number value
 */
export const fifthQ = (
  cpExp5thMap: NotesMap<string>,
  fallbackValue: number = -99999
): NotesMap<number> => (
  mapNotesMap(cpExp5thMap, cpExp5thStrToNumber, fallbackValue)
);
