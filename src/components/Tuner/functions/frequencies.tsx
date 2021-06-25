import { cpExp5thStrToNumber, csExp3rdStrToNumber} from '../../../model/Divergence';
import { NotesMap, mapNotesMap } from "../../../model/Note";


/**
 * Computes the frequencies of the 12 notes of the 4th
 * octave relative to the given A4 reference frequency
 * and deviation values
 * @param A4 Reference frequency of A4 note
 * @param deviation Deviation tables for each note
 *                  relative to the equal temperament
 * @returns a NotesMap of frequencies for the 4th octave
 */
export const frequencies4 = (A4 = 440, deviation = DivergenceEqual()): NotesMap<number> => 
({
    C       : A4 * Math.pow(2, -9/12) * Math.pow(2, (deviation.C       / 1200)),
    C_sharp : A4 * Math.pow(2, -8/12) * Math.pow(2, (deviation.C_sharp / 1200)),
    D       : A4 * Math.pow(2, -7/12) * Math.pow(2, (deviation.D       / 1200)),
    E_flat  : A4 * Math.pow(2, -6/12) * Math.pow(2, (deviation.E_flat  / 1200)),
    E       : A4 * Math.pow(2, -5/12) * Math.pow(2, (deviation.E       / 1200)),
    F       : A4 * Math.pow(2, -4/12) * Math.pow(2, (deviation.F       / 1200)),
    F_sharp : A4 * Math.pow(2, -3/12) * Math.pow(2, (deviation.F_sharp / 1200)),
    G       : A4 * Math.pow(2, -2/12) * Math.pow(2, (deviation.G       / 1200)),
    G_sharp : A4 * Math.pow(2, -1/12) * Math.pow(2, (deviation.G_sharp / 1200)),
    A       : A4                      * Math.pow(2, (deviation.A       / 1200)),
    B_flat  : A4 * Math.pow(2,  1/12) * Math.pow(2, (deviation.B_flat  / 1200)),
    B       : A4 * Math.pow(2,  2/12) * Math.pow(2, (deviation.B       / 1200)),
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


export const noteToStr = (note : string) => {
  switch (note) {
    case "B_flat": return "B♭";
    case "E_flat": return "E♭";
    case "G_sharp": return "G♯";
    case "C_sharp": return "C♯";
    case "F_sharp": return "F♯" ;  
    default: return note;
  }
};

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
