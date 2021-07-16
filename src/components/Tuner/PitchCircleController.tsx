import SoundEngine from '../../engine/SoundEngine';
import { isValidIntervalForAcousticBeat, processAcousticBeat } from '../../model/AcousticBeat';
import { Notes } from '../../model/Note/enums';
import Note from '../../model/Note/Note';
import NotesMap, { mapNotesMap } from '../../model/Note/NotesMap';
import { TuneMode } from './Tuner';

export enum BtnStates {
  IDLE, SELECTED, OCTAVE,
};

export type ActiveBtn = {
  note: Notes,
  state: Exclude<BtnStates, BtnStates.IDLE>,
};


export const getActiveBtns = (
  btnStates: NotesMap<BtnStates>
): ActiveBtn[] => (
  Object.entries(btnStates)
    .filter(([, state]) => state !== BtnStates.IDLE)
    .map((entry) => ({
      note: entry[0] as Notes,
      state: entry[1]
    } as ActiveBtn))
);


export const createNoteFromActive = (activeBtn: ActiveBtn) => (
  Note.create(
    activeBtn.note,
    (activeBtn.state === BtnStates.OCTAVE ? 3 : 4))
);


export enum BtnActions {
  SET, SET_ALL_IDLE,
};

type BtnActionType = {
  type: BtnActions.SET,
  note: Notes,
  state: BtnStates,
} | {
  type: BtnActions.SET_ALL_IDLE,
};

/**
 * @param tuneMode 
 * @returns reducer function for 'useReducer' React hook
 */
export const btnStatesReducer = (tuneMode: TuneMode) => {
  return (
    btnStates: NotesMap<BtnStates>,
    action: BtnActionType
  ) => {
    let res = { ...btnStates };

    if (action.type === BtnActions.SET_ALL_IDLE)
      return mapNotesMap(BtnStates.IDLE);

    if (action.type === BtnActions.SET
      && action.state === BtnStates.IDLE
    ) {
      return mapNotesMap(BtnStates.IDLE);
    }

    if (action.type === BtnActions.SET) {
      const actives = getActiveBtns(btnStates);
      const triggered: ActiveBtn = {
        note: action.note,
        state: action.state as Exclude<BtnStates, BtnStates.IDLE>
      };

      if (actives.length === 2) {
        res[actives[0].note] = BtnStates.IDLE;
        res[actives[1].note] = BtnStates.IDLE;
      }

      if (actives.length === 1) {
        if (tuneMode === TuneMode.PITCHPIPE
          || !isValidIntervalForAcousticBeat(
            createNoteFromActive(actives[0]),
            createNoteFromActive(triggered)
          )
        ) {
          res[actives[0].note] = BtnStates.IDLE;
        }
      }
      return { ...res, [action.note]: action.state };
    }

    console.warn('[PitchCircleSVG]: Could not handle action: ', action);
    return btnStates;
  }
};


export const playSound = (
  btnStates: NotesMap<BtnStates>,
  freqA4: number,
  deviations: NotesMap<number>
) => {
  const [activeX, activeY] = getActiveBtns(btnStates);
  const noteX = (activeX) && createNoteFromActive(activeX);
  const noteY = (activeY) && createNoteFromActive(activeY);

  if (!noteX && !noteY) {
    SoundEngine.stop();
  }

  if (noteX && !noteY) {
    SoundEngine.setPulseBPS(0);
    SoundEngine.stopAndPlay(noteX.freq(freqA4, deviations));
  }

  if (noteX && noteY) {
    const { modulationFreq, carrierFreq } = processAcousticBeat(
      noteX, noteY, freqA4, deviations
    );

    if (modulationFreq && carrierFreq) {
      SoundEngine.setPulseBPS(modulationFreq);
      let heardFreq = carrierFreq;
      while (heardFreq > 1000)
        heardFreq /= 2;
      SoundEngine.stopAndPlay(heardFreq);
    }
  }
}
