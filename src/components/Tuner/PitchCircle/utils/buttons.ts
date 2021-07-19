import Note from "../../../../model/Note/Note";
import NotesMap, { mapNotesMap } from "../../../../model/Note/NotesMap";
import { Notes } from "../../../../model/Note/enums";
import { isValidIntervalForAcousticBeat } from "../../../../model/AcousticBeat";
import { TuneMode } from "../../Tuner";


export enum BtnStates {
  IDLE, SELECTED, OCTAVE,
};

export type Btn = {
  note: Notes,
  state: BtnStates,
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


export const createNotesFromActive = (activeBtns: ActiveBtn[]) => (
  activeBtns.map((abtn) => createNoteFromActive(abtn))
);


export const createActiveBtnsFromNote = (notes: Note[]) => (
  notes.map((n: Note) => ({
    note: n.toNotes(),
    state: (n.octave === 4) ? BtnStates.SELECTED : BtnStates.OCTAVE
  }))
);


export enum BtnActions {
  SET, SET_ALL_IDLE,
};

type BtnActionType = {
  type: BtnActions.SET,
  buttons: Btn[],
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

    if (action.type === BtnActions.SET) {
      for (const btn of action.buttons) {

        const actives = getActiveBtns(btnStates);

        if (btn.state !== BtnStates.IDLE) {
          const triggered: ActiveBtn = {
            note: btn.note,
            state: btn.state as Exclude<BtnStates, BtnStates.IDLE>
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
        } else {
          for (const active of actives)
            res[active.note] = BtnStates.IDLE;
        }

        res = { ...res, [btn.note]: btn.state };

      }
      return res;
    }

    console.warn('[PitchCircleView]: Could not handle action: ', action);
    return btnStates;
  }
};
