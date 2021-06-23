import React, { useEffect, useState } from 'react';
import { TemperamentDBType } from '../../engine/DB';

import PitchCircleSVG from './PitchCircleSVG';

type PitchCircleProps = {
  isHzMode: boolean,
  freqA4: number,
  temperament : TemperamentDBType
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  isHzMode, freqA4, temperament
}) => {

  const [tunerMode, setTunerMode] = useState("TuningFork");

  useEffect(() => {
    setTunerMode(isHzMode ? "TuningFork" : "Bpm");
  }, [isHzMode]);

  return (
    <PitchCircleSVG
      tunerMode = {tunerMode}
      freqA4 = {freqA4}
      temperament = {temperament}
    />
  );
};

export default PitchCircle;
