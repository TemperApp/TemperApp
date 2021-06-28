import { cpExp5thStrToNumber, csExp3rdStrToNumber } from '../../../model/Divergence';
import NotesMap, { mapNotesMap } from "../../../model/Note/NotesMap";
import Note from "../../../model/Note/Note";
import { PitchInterval } from '../../../model/Note/enums';


/**
 * Computes the frequencies of the 12 notes of the 4th
 * octave relative to the given A4 reference frequency
 * and deviation values
 * @param A4 Reference pitch frequency of A4 note
 * @param deviations Deviation tables for each note
 *                  relative to the equal temperament
 * @returns a NotesMap of frequencies for the 4th octave
 */
export const frequencies4 = (
  A4 = 440,
  deviations = DivergenceEqual()
): NotesMap<number> => ({
  C       : A4 * Math.pow(2, -9/12) * Math.pow(2, (deviations.C       / 1200)),
  C_sharp : A4 * Math.pow(2, -8/12) * Math.pow(2, (deviations.C_sharp / 1200)),
  D       : A4 * Math.pow(2, -7/12) * Math.pow(2, (deviations.D       / 1200)),
  E_flat  : A4 * Math.pow(2, -6/12) * Math.pow(2, (deviations.E_flat  / 1200)),
  E       : A4 * Math.pow(2, -5/12) * Math.pow(2, (deviations.E       / 1200)),
  F       : A4 * Math.pow(2, -4/12) * Math.pow(2, (deviations.F       / 1200)),
  F_sharp : A4 * Math.pow(2, -3/12) * Math.pow(2, (deviations.F_sharp / 1200)),
  G       : A4 * Math.pow(2, -2/12) * Math.pow(2, (deviations.G       / 1200)),
  G_sharp : A4 * Math.pow(2, -1/12) * Math.pow(2, (deviations.G_sharp / 1200)),
  A       : A4                      * Math.pow(2, (deviations.A       / 1200)),
  B_flat  : A4 * Math.pow(2,  1/12) * Math.pow(2, (deviations.B_flat  / 1200)),
  B       : A4 * Math.pow(2,  2/12) * Math.pow(2, (deviations.B       / 1200)),
});


/**
 * @param csExp3rdMap a NotesMap of the syntonic comma exponent
 *                    with a common format of use.
 *                    (e.g.: +7/11, 0, -1/11, , 20/11).
 *                    No sign provided means 'plus' (+) by default
 * @returns thirds quality number value
 */
export const thirdQ = (csExp3rdMap: NotesMap<string>): NotesMap<number|null> => (
  mapNotesMap(csExp3rdMap, csExp3rdStrToNumber)
);


/**
 * @param cpExp5thMap a NotesMap of the pythagorean comma exponent
 *                    with a common format of use.
 *                    (e.g.: -1/12, 0, +1/4.36, 2/0.66).
 *                    No sign provided means 'minus' (-) by default
 * @returns fitfhs quality number value
 */
export const fifthQ = (cpExp5thMap: NotesMap<string>): NotesMap<number|null> => (
  mapNotesMap(cpExp5thMap, cpExp5thStrToNumber)
);


export const fifthEqualQ = (): NotesMap<number|null> => (mapNotesMap(-1));
export const thirdEqualQ = (): NotesMap<number|null> => (mapNotesMap(7));
export const DivergenceEqual = (): NotesMap<number> => (mapNotesMap(0));

export type AcousticBeat = {
  carrierFreq: number | null,
  modulationFreq: number | null,
}


export const processAcousticBeat = (
  noteX: Note, noteY: Note, freqA4: number,
  deviations = mapNotesMap(0)
): AcousticBeat => {

  const lowest = (noteX.isHigherThan(noteY)) ? noteY : noteX;
  const highest = (noteX.isHigherThan(noteY)) ? noteX : noteY;

  let beatFreqX, beatFreqY;
  if (Note.isInterval(lowest, highest, PitchInterval.MAJ3)) {
    // Ratio between two notes is 5/4 for a major 3rd
    beatFreqX = 5*lowest.freq(freqA4, deviations);
    beatFreqY = 4*highest.freq(freqA4, deviations);
  } else if (Note.isInterval(lowest, highest, PitchInterval.FIFTH)) {
    // Ratio between two notes is 3/2 for a 5th
    beatFreqX = 3*lowest.freq(freqA4, deviations);
    beatFreqY = 2*highest.freq(freqA4, deviations);
  } else {
    return {
      carrierFreq: null,
      modulationFreq: null,
    };
  }

  return {
    carrierFreq: (beatFreqX + beatFreqY) / 2,
    modulationFreq: Math.abs(beatFreqX - beatFreqY),
  };
}

export const BpsCalc = (note1: number, note2: number) => {
  if(note1>note2){
    let temp = note2;
    note2 =  note1;
    note1 = temp;
  }
  let bps = Math.floor(note2-note1);
  if(bps*60>=200){
    if(bps*60>=600){
      return "//"
    }
    else{
      return Math.floor(bps)
    }
  }
  else{
    return Math.floor(bps)
  }
    
};

export const BpmCalc = (note1: number, note2: number) => {
  if(note1>note2){
    let temp = note2;
    note2 =  note1;
    note1 = temp;
  }
  let bps = Math.floor(note2-note1);
  if(bps*60>=200){
    if(bps*60>=600){
      return "//"
    }
    else{
      return ("4 x "+15*bps);
    }
  }
  else{
    return Math.floor(60*bps) + " Bpm"
  }
};
