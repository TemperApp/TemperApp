import React from 'react';
import { TuneMode } from './Tuner';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';

type PitchCircleProps = {
  tuneMode: TuneMode,
  isClickable: boolean,
  freqA4: number,
  idTemperament: number,
  stepProcedure?: number,
  procedure?: Array<string>,
  stepTune?: number,
  setStepTune?: (step: number) => void;
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  tuneMode, isClickable, freqA4, idTemperament, stepProcedure, procedure, stepTune, setStepTune
}) => {
  return (
    <div className="flex justify-center">
      {
        (isClickable)
        ? (<PitchCircleSVG
            tuneMode={tuneMode}
            freqA4={freqA4}
            idTemperament={idTemperament}
          />)
        : (<NonClickableProcedure
            freqA4={freqA4}
            idTemperament={idTemperament}
            centerCircle={true}
            stepProcedure={stepProcedure}
            procedure={procedure}
            stepTune={stepTune}
            setStepTune={setStepTune}
          />)
      }
    </div>
  );
};

export default PitchCircle;
