import Note from '../../../../model/Note/Note';
import NotesMap from '../../../../model/Note/NotesMap';
import { acousticBeat } from '../../../../model/AcousticBeat';
import TemperTone from '../../../../engine/TemperTone';

export const playSound = (
  freqA4: number,
  deviations: NotesMap<number>,
  notes: Note[],
) => {
  switch (notes.length) {
    case 1:
      TemperTone.setPulseBPS(0);
      TemperTone.stopAndPlay(notes[0].freq(freqA4, deviations));
      break;

    case 2:
      const { modulationFreq, carrierFreq } = acousticBeat(
        notes[0], notes[1], freqA4, deviations
      );

      if (modulationFreq === null || carrierFreq === null) {
        console.warn('[PitchCircleController]: playSound: unhandled notes:', notes, 'acoustic beat: ', modulationFreq, carrierFreq);
        return;
      }
      TemperTone.setPulseBPS(modulationFreq);
      let heardFreq = carrierFreq;
      while (heardFreq > 1000)
        heardFreq /= 2;
      TemperTone.stopAndPlay(heardFreq);
      break;

    default:
      TemperTone.stop();
  }
};
