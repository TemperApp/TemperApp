import React, { useEffect, useState } from 'react';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';

export enum TunerMode {
  HZ, BPM
}

type PitchCircleProps = {
  isHzMode: boolean,
  isClickable: boolean,
  freqA4: number,
  idTemperament: number,
  stepProcedure?: number,
  procedure?: Array<string>,
  stepTune?: number,
  setStepTune?: (step: number) => void;
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  isHzMode, isClickable, freqA4, idTemperament, stepProcedure, procedure, stepTune, setStepTune
}) => {

  const [tunerMode, setTunerMode] = useState(TunerMode.HZ);

  const renderClickablePitchCircle = () =>{
    return(
    <PitchCircleSVG
      tunerMode={tunerMode}
      freqA4={freqA4}
      idTemperament={idTemperament}
    />)
  }

  const renderNonClickablePitchCircle = () =>{
    return(
    /*
    <NonClickablePitchCircleSVG
      tunerMode={tunerMode}
      freqA4={freqA4}
      idTemperament={idTemperament}
      centerCircle={false}
      stepProcedure={stepProced&ure}
      procedure={procedure}
    />)
    */
    <NonClickableProcedure 
      tunerMode={tunerMode}
      freqA4={freqA4}
      idTemperament={idTemperament}
      centerCircle={true}
      stepProcedure={stepProcedure}
      procedure={procedure}
      stepTune={stepTune}
      setStepTune={setStepTune}
    />)
  }

  useEffect(() => {
    setTunerMode(isHzMode ? TunerMode.HZ : TunerMode.BPM);
  }, [isHzMode]);

  return (
    <div className="flex justify-center">
      {isClickable
        ? renderClickablePitchCircle()
        : renderNonClickablePitchCircle()
      }
    </div>
  );
};

export default PitchCircle;


