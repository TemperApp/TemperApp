import { isValidIntervalForAcousticBeat } from '../../model/AcousticBeat';
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
}


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

/**
 * @param tuneMode 
 * @returns reducer function for 'useReducer' React hook
 */
export const btnStatesReducer = (tuneMode: TuneMode) => {
  return (
    btnStates: NotesMap<BtnStates>,
    action: any // TODO Type this
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

      if (actives.length === 2) {
        res[actives[0].note] = BtnStates.IDLE;
        res[actives[1].note] = BtnStates.IDLE;
      }

      if (actives.length === 1) {
        if (tuneMode === TuneMode.PITCHPIPE
          || !isValidIntervalForAcousticBeat(
            Note.create(actives[0].note, (actives[0].state === BtnStates.OCTAVE ? 3 : 4)),
            Note.create(action.note, (action.state === BtnStates.OCTAVE ? 3 : 4))
          )
        ) {
          res[actives[0].note] = BtnStates.IDLE;
        }
      }
      return { ...res, [action.note]: action.state };
    }

    console.warn(`[PitchCircleSVG]: Unknown action type: ${action.type}`)
    return btnStates;
  }
};
