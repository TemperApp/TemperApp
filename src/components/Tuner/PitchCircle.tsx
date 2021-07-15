import React, { useCallback, useEffect, useReducer } from 'react';
import { TuneMode } from './Tuner';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';
import { mapNotesMap } from '../../model/Note/NotesMap';
import { BtnActions, btnStatesReducer, BtnStates } from './PitchCircleController';

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
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const statesReducer = useCallback(btnStatesReducer(tuneMode), [tuneMode]);
  const [btnStates, dispatchState] = useReducer(statesReducer, mapNotesMap(BtnStates.IDLE));

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
