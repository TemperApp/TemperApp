import React, { useEffect, useState } from 'react';
import { TemperamentDBType } from '../../engine/DB';

import PitchCircleSVG from './PitchCircleSVG';

type PitchCircle = {
  isHzMode: boolean,
  freqA4: number,
  temperament : TemperamentDBType
}



const PitchCircle: React.FC<PitchCircle> = ({isHzMode, freqA4, temperament}) => {

  const [tunerMode, setTunerMode] = useState("TuningFork");

  useEffect(() => {
    console.log(temperament);
    if(isHzMode){
      setTunerMode("TuningFork");  
    }
    else{
      setTunerMode("Bpm");  
    }
    
  }, [isHzMode, temperament]);

  return (
    <PitchCircleSVG 
      tunerMode = {tunerMode}
      freqA4 = {freqA4}
      temperament = {temperament}
    />
  );
};
export default PitchCircle;