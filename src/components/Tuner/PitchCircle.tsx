import React, { useEffect, useReducer } from 'react';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';
import { TuneMode } from './Tuner';
import { mapNotesMap } from '../../model/Note/NotesMap';
import { BtnActions, btnStatesReducer, BtnStates, playSound } from './PitchCircleController';
import { Temperament } from '../../model/Temperament/Temperament';

type PitchCircleProps = {
  tuneMode: TuneMode,
  freqA4: number,
  temperament: Temperament,
  stepProcedure?: number,
  procedure?: Array<string>,
  stepTune?: number,
  setStepTune?: (step: number) => void;
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  tuneMode, freqA4, temperament, stepProcedure, procedure, stepTune, setStepTune
}) => {

  const [btnStates, dispatchState] = useReducer(
    btnStatesReducer(tuneMode),
    mapNotesMap(BtnStates.IDLE)
  );

  useEffect(() => {
    dispatchState({ type: BtnActions.SET_ALL_IDLE });
  }, [tuneMode]);

  useEffect(() => {
    playSound(btnStates, freqA4, temperament.deviation)
  }, [btnStates, freqA4, temperament.deviation]);

  console.info('🟣 [PitchCircle]: Render')
  return (
    <section className="flex justify-center">
      {(tuneMode === TuneMode.PROCEDURE)
        ? (<NonClickableProcedure
          freqA4={freqA4}
          idTemperament={temperament.idTemperament}
          centerCircle={true}
          stepProcedure={stepProcedure}
          procedure={procedure}
          stepTune={stepTune}
          setStepTune={setStepTune}
        />)
        : (<PitchCircleSVG
          freqA4={freqA4}
          temperament={temperament}
          btnStates={btnStates}
          dispatchState={dispatchState}
        />)}
    </section>
  );
};

export default React.memo(
  PitchCircle,
  (prevProps, nextProps) =>
    prevProps.tuneMode === nextProps.tuneMode &&
    prevProps.freqA4 === nextProps.freqA4 &&
    prevProps.temperament === nextProps.temperament &&
    prevProps.stepProcedure === nextProps.stepProcedure &&
    prevProps.procedure === nextProps.procedure &&
    prevProps.stepTune === nextProps.stepTune &&
    prevProps.setStepTune === nextProps.setStepTune
);
