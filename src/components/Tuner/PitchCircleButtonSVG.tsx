import React from 'react';

type PitchCircleButtonSVGProps = {
  position: string,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({position}) => {
  return (
    <path fill="#F5FBFB" stroke="#A7C5C3" strokeOpacity=".5" strokeWidth="2" d={position}/>
  );
};

export default PitchCircleButtonSVG;