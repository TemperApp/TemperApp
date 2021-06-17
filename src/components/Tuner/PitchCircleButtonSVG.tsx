import React, { useRef } from 'react';

type DivOrNullType = SVGPathElement | null;

type PitchCircleButtonSVGProps = {
  noteName: string,
  position: string,
  active: boolean,
  onChange : (state: boolean) => void,
  currentNote : (noteName : string) => void,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({noteName, position, active, onChange, currentNote}) => {

  const note = useRef<DivOrNullType>(null);

  const activeNote = () => { 
    onChange(true);
    currentNote(noteName);
  }

  const disableNote = () => { 
    onChange(false);
    currentNote('');
  }

  const handleClick = () => {
    (active === false) ? activeNote() : disableNote();
  }

  
  return (
    <path fill={(active)?"#A7C5C3":"#F5FBFB"} stroke="#A7C5C3" strokeOpacity=".5" strokeWidth="2" d={position} ref={note} onClick={handleClick}/>
  );
};

export default PitchCircleButtonSVG;