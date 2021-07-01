import React, { useEffect, useState } from 'react';
import NonClickablePitchCircleSVG from './nonClickable/NonClickablePitchCircleSVG';

import PitchCircleSVG from './PitchCircleSVG';

export enum TunerMode{
  HZ, BPM
}

type PitchCircleProps = {
  isHzMode: boolean,
  freqA4: number,
  idTemperament : number
  darkTheme : boolean
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  isHzMode, freqA4, idTemperament, darkTheme
}) => {

  const [tunerMode, setTunerMode] = useState(TunerMode.HZ);

  useEffect(() => {
    setTunerMode(isHzMode ? TunerMode.HZ : TunerMode.BPM);
  }, [isHzMode]);

  return (
    
    <PitchCircleSVG
      tunerMode = {tunerMode}
      freqA4 = {freqA4}
      idTemperament = {idTemperament}
      darkTheme = {darkTheme}
    />
    /*
    <NonClickablePitchCircleSVG 
      tunerMode = {tunerMode}
      freqA4 = {freqA4}
      idTemperament = {idTemperament}
      darkTheme = {darkTheme}
      centerCircle = {false}
    />
    */
  );
};

export default PitchCircle;
