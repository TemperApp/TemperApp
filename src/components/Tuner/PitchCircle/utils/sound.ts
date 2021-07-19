import Note from '../../../../model/Note/Note';
import NotesMap from '../../../../model/Note/NotesMap';
import { acousticBeat } from '../../../../model/AcousticBeat';
import SoundEngine from '../../../../engine/SoundEngine';

export const playSound = (
  freqA4: number,
  deviations: NotesMap<number>,
  notes: Note[],
) => {
  switch (notes.length) {
    case 1:
      SoundEngine.setPulseBPS(0);
      SoundEngine.stopAndPlay(notes[0].freq(freqA4, deviations));
      break;

    case 2:
      const { modulationFreq, carrierFreq } = acousticBeat(
        notes[0], notes[1], freqA4, deviations
      );

      if (modulationFreq === null || carrierFreq === null) {
        console.warn('[PitchCircleController]: playSound: unhandled notes:', notes, 'acoustic beat: ', modulationFreq, carrierFreq);
        return;
      }
      SoundEngine.setPulseBPS(modulationFreq);
      let heardFreq = carrierFreq;
      while (heardFreq > 1000)
        heardFreq /= 2;
      SoundEngine.stopAndPlay(heardFreq);
      break;

    default:
      SoundEngine.stop();
  }
};
