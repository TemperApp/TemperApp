import React, { useEffect, useState } from 'react';

import NonClickablePitchCircleSVG from './nonClickable/NonClickablePitchCircleSVG';
import PitchCircleSVG from './clickable/PitchCircleSVG';

export enum TunerMode{
  HZ, BPM
}

type PitchCircleProps = {
  isHzMode: boolean,
  freqA4: number,
  idTemperament : number
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  isHzMode, freqA4, idTemperament
}) => {

  const [tunerMode, setTunerMode] = useState(TunerMode.HZ);

  useEffect(() => {
    setTunerMode(isHzMode ? TunerMode.HZ : TunerMode.BPM);
  }, [isHzMode]);

  return (
    <div className="flex justify-center">
      <PitchCircleSVG
        tunerMode = {tunerMode}
        freqA4 = {freqA4}
        idTemperament = {idTemperament}
      />
    </div>
    /*
    <NonClickablePitchCircleSVG 
      tunerMode = {tunerMode}
      freqA4 = {freqA4}
      idTemperament = {idTemperament}
      centerCircle = {false}
    />
    */
  );
};

export default PitchCircle;
