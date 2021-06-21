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
  listNotes : ActiveNotes
  onChange : (state: StateList) => void,
  currentNote : (noteName : ActiveNotes) => void,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({noteName, position, active, tunerMode, listNotes, onChange, currentNote}) => {

  const note = useRef<DivOrNullType>(null);

  function activeNote(){ 
    currentNote( { note1 : {name : noteName, state: StateList.selected}, note2 : {name : "", state: StateList.default} });
    onChange(StateList.selected);
  }

  function activeNoteBpm(){ 
    if(listNotes.note1.state === StateList.default && listNotes.note2.state === StateList.default){
      currentNote( { note1 : {name : noteName, state: StateList.selected}, note2 : {name : "", state: StateList.default} });
    }
    else{
      if(listNotes.note1.state !== StateList.default && listNotes.note2.state === StateList.default){
        currentNote( { note1 : {name : listNotes.note1.name, state: listNotes.note1.state}, note2 : {name : noteName, state: StateList.selected} });
      }
      else{
        currentNote( { note1 : {name : noteName, state: StateList.selected}, note2 : {name : "", state: StateList.default} });
      }
    }
    onChange(StateList.selected);
  }

  const activeNoteOctave = () => { 
    currentNote( { note1 : {name : noteName, state: StateList.octave}, note2 : {name : "", state: StateList.default} });
    onChange(StateList.octave);
  }

  function activeNoteOctaveBpm(){ 
    if(listNotes.note1.state === StateList.default && listNotes.note2.state === StateList.default){
      currentNote( { note1 : {name : noteName, state: StateList.octave}, note2 : {name : "", state: StateList.default} });
    }
    else{
      if(listNotes.note1.state !== StateList.default && listNotes.note2.state === StateList.default){
        currentNote( { note1 : {name : listNotes.note1.name, state: listNotes.note1.state}, note2 : {name : noteName, state: StateList.octave} });
      }
      else{
        currentNote( { note1 : {name : noteName, state: StateList.octave}, note2 : {name : "", state: StateList.default} });
      }
    }
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
      (active === StateList.default) ? activeNoteOctaveBpm() : ((active === StateList.selected) ? activeNoteOctaveBpm() : ((active === StateList.octave)? activeNoteBpm() :disableNote()) );
    }  
  } 
  
  const onClick = () => {
    if(tunerMode === "TuningFork"){
      (active === StateList.default) ? activeNote() :  disableNote() ;
    }
    else{
      (active === StateList.default) ? activeNoteBpm() :  disableNote() ;
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
    <path fill={colorButton()} stroke="#A7C5C3" strokeMiterlimit="10" strokeOpacity="1" strokeWidth="0.5" transform="translate(-2.04 -1.82)" d={position} ref={note} {...longPressEvent} />
  );
};

export default PitchCircleButtonSVG;