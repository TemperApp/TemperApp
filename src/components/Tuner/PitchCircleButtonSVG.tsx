import React, { useRef } from 'react';

type DivOrNullType = SVGPathElement | null;

type PitchCircleButtonSVGProps = {
  position: string,
  active: boolean
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({position, active}) => {

  const note = useRef<DivOrNullType>(null);

  const handleClick = () => {
    console.log("click");
  }

  
  return (
    <path fill={(active)?"#A7C5C3":"#F5FBFB"} stroke="#A7C5C3" strokeOpacity=".5" strokeWidth="2" d={position} ref={note} onClick={handleClick}/>
  );
};

export default PitchCircleButtonSVG;