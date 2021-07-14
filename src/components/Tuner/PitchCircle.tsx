import React, { useCallback, useEffect, useReducer } from 'react';
import { TuneMode } from './Tuner';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';
import { isValidIntervalForAcousticBeat } from '../../model/AcousticBeat';
import Note from '../../model/Note/Note';
import NotesMap, { mapNotesMap } from '../../model/Note/NotesMap';
import { Notes } from '../../model/Note/enums';

export enum NoteStates {
  IDLE,
  SELECTED,
  OCTAVE,
}

export type BtnState = {
  note: Notes;
  state: NoteStates;
};

export enum BtnActions {
  SET, SET_ALL_IDLE,
}

export const getActiveBtns = (
  btnStates: NotesMap<NoteStates>
): BtnState[] => (
  Object.entries(btnStates)
    .filter(([, state]) => state !== NoteStates.IDLE)
    .map((entry) => ({note: entry[0] as Notes, state: entry[1]}))
);


type PitchCircleProps = {
  tuneMode: TuneMode,
  freqA4: number,
  idTemperament: number,
  stepProcedure?: number,
  procedure?: Array<string>,
  stepTune?: number,
  setStepTune?: (step: number) => void;
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  tuneMode, freqA4, idTemperament, stepProcedure, procedure, stepTune, setStepTune
}) => {
  
  const statesReducer = useCallback((
    btnStates: NotesMap<NoteStates>,
    action: any // TODO Type this
  ) => {
    let res = {...btnStates};
    
    if (action.type === BtnActions.SET_ALL_IDLE)
      return mapNotesMap(NoteStates.IDLE);
      
    if (action.type === BtnActions.SET
      && action.state === NoteStates.IDLE
    ) {
      return mapNotesMap(NoteStates.IDLE);
    }

    if (action.type === BtnActions.SET) {
      const actives = getActiveBtns(btnStates);
      
      if (actives.length === 2) {
        res[actives[0].note] = NoteStates.IDLE;
        res[actives[1].note] = NoteStates.IDLE;
      }
      
      if (actives.length === 1) {
        if (tuneMode === TuneMode.PITCHPIPE
          || !isValidIntervalForAcousticBeat(
              Note.create(actives[0].note, (actives[0].state === NoteStates.OCTAVE ? 3 : 4)),
              Note.create(action.note, (action.state === NoteStates.OCTAVE ? 3 : 4))
            )
        ) {
          res[actives[0].note] = NoteStates.IDLE;
        }
      }
      return {...res, [action.note]: action.state};
    }

    console.warn(`[PitchCircleSVG]: Unknown action type: ${action.type}`)
    return btnStates;
  }, [tuneMode]);

  const [btnStates, dispatchState] = useReducer(statesReducer, mapNotesMap(NoteStates.IDLE));


  useEffect(() => {
    dispatchState({type: BtnActions.SET_ALL_IDLE});
  }, [tuneMode]);
  
  console.info('🟣 [PitchCircle]: Render')
  return (
    <section className="flex justify-center">
      {(tuneMode === TuneMode.PROCEDURE)
        ? (<NonClickableProcedure
            freqA4={freqA4}
            idTemperament={idTemperament}
            centerCircle={true}
            stepProcedure={stepProcedure}
            procedure={procedure}
            stepTune={stepTune}
            setStepTune={setStepTune}
          />)
        : (<PitchCircleSVG
            freqA4={freqA4}
            idTemperament={idTemperament}
            btnStates={btnStates}
            dispatchState={dispatchState}
          />)}
    </section>
  );
};

export default PitchCircle;
