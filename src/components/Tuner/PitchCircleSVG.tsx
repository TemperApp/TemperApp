import React from 'react';
import FifthCircleSVG from './FifthCircleSVG';
import ThirdCircleSVG from './ThirdCircleSVG';
import PitchCircleButtonSVG from './PitchCircleButtonSVG';

const PitchCircleSVG: React.FC = () => {
  return (
    <div id="Container_PïtchCircleSVG">
      <svg xmlns="http://www.w3.org/2000/svg" width="361" height="360" fill="none" viewBox="0 0 361 360">
        <ThirdCircleSVG />
        <FifthCircleSVG />
      </svg>
    </div>
  );
};
export default PitchCircleSVG;