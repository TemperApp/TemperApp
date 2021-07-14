import React from 'react';
import { TuneMode } from './Tuner';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';

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
            tuneMode={tuneMode}
            freqA4={freqA4}
            idTemperament={idTemperament}
          />)}
    </section>
  );
};

export default PitchCircle;
