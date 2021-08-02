import { mapNotesMap } from "./Note/NotesMap";
import Note from "./Note/Note";
import { PitchInterval } from './Note/enums';


type AcousticBeat = {
  carrierFreq: number | null,
  modulationFreq: number | null,
}


export const isValidIntervalForAcousticBeat = (
  noteX: Note, noteY: Note,
) => (
  acousticBeat(noteX, noteY).carrierFreq !== null
);


export const hasAcousticBeat = (
  noteX: Note, noteY: Note,
  deviations = mapNotesMap(0)
) => {
  const modFreq = acousticBeat(
    noteX, noteY, 440, deviations
  ).modulationFreq;
  return modFreq !== 0 && modFreq !== null;
}


export const acousticBeat = (
  noteX: Note, noteY: Note, freqA4 = 440,
  deviations = mapNotesMap(0)
): AcousticBeat => {

  const { lowest, highest } = Note.compare(noteX, noteY);
  const interval = Note.intervalBetween(lowest, highest);

  let beatFreqX, beatFreqY;
  if (interval === PitchInterval.MAJ3) {
    // Ratio between two notes is 5/4 for a major 3rd
    beatFreqX = 5 * lowest.freq(freqA4, deviations);
    beatFreqY = 4 * highest.freq(freqA4, deviations);
  } else if (interval === PitchInterval.FOURTH) {
    // Ratio between two notes is 4/3 for a 4th
    beatFreqX = 4 * lowest.freq(freqA4, deviations);
    beatFreqY = 3 * highest.freq(freqA4, deviations);
  } else if (interval === PitchInterval.FIFTH) {
    // Ratio between two notes is 3/2 for a 5th
    beatFreqX = 3 * lowest.freq(freqA4, deviations);
    beatFreqY = 2 * highest.freq(freqA4, deviations);
  } else if (interval === PitchInterval.OCTAVE) {
    // Ratio between two notes is 2 for an octave
    beatFreqX = 2 * lowest.freq(freqA4, deviations);
    beatFreqY = 1 * highest.freq(freqA4, deviations);
  } else {
    return {
      carrierFreq: null,
      modulationFreq: null,
    };
  }

  return {
    carrierFreq: (beatFreqX + beatFreqY) / 2,
    modulationFreq: Math.floor(Math.abs(beatFreqX - beatFreqY) * 100) / 100,
  };
}


export const acousticBeatToStr = (
  bps: number,
  isBps = false
) => {
  if (isBps) {
    return (bps > 9)
      ? '> 9 bps'
      : bps.toFixed(1) + ' bps';
  } else {
    const bpm = bps * 60;
    return (bpm > 600)
      ? '> 600 bpm'
      : (bpm > 200)
        ? '4 x ' + (bpm / 4).toFixed(0) + ' bpm'
        : bpm.toFixed(0) + ' bpm';
  }
};

export default AcousticBeat;
