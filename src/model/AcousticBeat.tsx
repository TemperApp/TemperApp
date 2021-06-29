import { mapNotesMap } from "./Note/NotesMap";
import Note from "./Note/Note";
import { PitchInterval } from './Note/enums';


type AcousticBeat = {
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
  } else if (Note.isInterval(lowest, highest, PitchInterval.FOURTH)) {
    // Ratio between two notes is 4/3 for a 4th
    beatFreqX = 4*lowest.freq(freqA4, deviations);
    beatFreqY = 3*highest.freq(freqA4, deviations);
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

export default AcousticBeat;
