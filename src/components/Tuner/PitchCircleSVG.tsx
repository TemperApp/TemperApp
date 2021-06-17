import React from 'react';

//Components
import FifthCircleSVG from './FifthCircleSVG';
import ThirdCircleSVG from './ThirdCircleSVG';
import PitchCircleButtonSVG from './PitchCircleButtonSVG';

//Types 
import { ButtonPosition } from "./TunerTypes"

const PitchCircleSVG: React.FC = () => {
  return (
    <div id="Container_PïtchCircleSVG">
      <svg xmlns="http://www.w3.org/2000/svg" width="361" height="360" fill="none" viewBox="0 0 361 360">
        
        {/* Les différents boutons */}
        
        <PitchCircleButtonSVG 
          position = {ButtonPosition.A}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.D}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.G}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.C}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.F}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.B_flat}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.E_flat}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.G_sharp}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.C_sharp}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.F_sharp}
        />

        <PitchCircleButtonSVG 
          position = {ButtonPosition.B}
        />
        


        <PitchCircleButtonSVG 
          position = {ButtonPosition.E}
        />


        <ThirdCircleSVG />
        <FifthCircleSVG />
      </svg>
    </div>
  );
};
export default PitchCircleSVG;