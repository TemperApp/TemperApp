import { createGesture } from '@ionic/react';
import React, { useEffect, useRef } from 'react';
import { ActiveNote, ActiveNotes, StateList } from './TunerTypes';
import useLongPress from "./functions/useLongPress";

type DivOrNullType = SVGPathElement | null;

type PitchCircleButtonSVGProps = {
  noteName: string,
  position: string,
  active: StateList,
  tunerMode: string,
  onChange : (state: StateList) => void,
  currentNote : (noteName : ActiveNotes) => void,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({noteName, position, active, tunerMode, onChange, currentNote}) => {

  const note = useRef<DivOrNullType>(null);

  function activeNote(){ 
    console.log("clic court sans octave en mode : ");
    console.log(tunerMode);
    currentNote( { note1 : {name : noteName, state: StateList.selected}, note2 : {name : "", state: StateList.default} });
    onChange(StateList.selected);
  }

  const activeNoteOctave = () => { 
    currentNote( { note1 : {name : noteName, state: StateList.octave}, note2 : {name : "", state: StateList.default} });
    onChange(StateList.octave);
  }

  const disableNote = () => { 
    currentNote( { note1 : {name : "", state: StateList.default}, note2 : {name : "", state: StateList.default} });
    onChange(StateList.default);
  }

  
  const handleClick = () => {
    console.log(tunerMode);
  }

  const onLongPress = () =>{
    if(tunerMode === "TuningFork"){
      (active === StateList.default) ? activeNoteOctave() : ((active === StateList.selected) ? activeNoteOctave() : ((active === StateList.octave)? activeNote() :disableNote()) );
    }
    else{

    }  
  } 
  
  const onClick = () => {
    if(tunerMode === "TuningFork"){
      (active === StateList.default) ? activeNote() :  disableNote() ;
    }
    else{

    }  
  }

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);  

  const colorButton = () => {
    switch (active) {
      case StateList.default: //bouton déactivé
        return "#F5FBFB";
      case StateList.selected: // bouton activé 
        return "#A7C5C3";
      case StateList.octave: // bouton activé à l'octave supérieur
        return "#F75D4E";
      default:
        return "#F5FBFB";
    }
  }
  
  useEffect(() => {
    const c = note.current!;
    let beginPress: number;

/*
    console.log("-----------------------------------------");
    console.log(tunerMode);
    
    const gesture = createGesture({
      el: c,
      gestureName: "longpress",
      threshold: 0,
      onStart: () => {beginPress = Date.now(); },
      onEnd: () => {
        if(Date.now() - beginPress < 300){
          (active === StateList.default) ? activeNote() : disableNote();
        }
        else{
          (active === StateList.default) ? activeNoteOctave() : disableNote();
        };
      }
    });

    if(tunerMode === "Bpm"){
      console.log("destrunction gesture");
      console.log(gesture);
      gesture.destroy();

    }
    

    console.log("-----------------------------------------");

    gesture.enable(true);
*/    
  }, [tunerMode]);


  
  return (
    <path fill={colorButton()} stroke="#A7C5C3" stroke-miterlimit="10" strokeOpacity="1" strokeWidth="0.5" transform="translate(-2.04 -1.82)" d={position} ref={note} {...longPressEvent} />
  );
};

export default PitchCircleButtonSVG;