import React, { useEffect, useState } from 'react';

import PitchCircleSVG from './PitchCircleSVG';

const PitchCircle: React.FC = () => {

  const [tunerMode, setTunerMode] = useState("TuningFork");

  useEffect(() => {
    //setTunerMode("Bpm");  
  }, []);

  console.log("pitch circle render");

  return (
    <PitchCircleSVG 
      tunerMode = {tunerMode}
    />
  );
};
export default PitchCircle;