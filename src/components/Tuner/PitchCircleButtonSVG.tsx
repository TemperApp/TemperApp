import React, { useRef } from 'react';
import { ActiveNotes, StateList } from './TunerTypes';
import useLongPress from "./functions/useLongPress";

type DivOrNullType = SVGPathElement | null;

const colorButton = (state: StateList) => {
  switch (state) {
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

type PitchCircleButtonSVGProps = {
  notesSymbol: string,
  position: string,
  active: StateList,
  tunerMode: string,
  listNotes: ActiveNotes
  onChange: (state: StateList) => void,
  setCurrentNotes: (notesSymbol: ActiveNotes) => void,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({
  notesSymbol, position, active, tunerMode,
  listNotes, onChange, setCurrentNotes
}) => {

  const note = useRef<DivOrNullType>(null);

  function activateNote(){ 
    console.log("pip pap poup")
    setCurrentNotes(
      {note1: {name: notesSymbol, state: StateList.selected},
       note2: {name: "", state: StateList.default}});

    onChange(StateList.selected);
  }

  function activateNoteBpm(){ 
    if (listNotes.note1.state === StateList.default && listNotes.note2.state === StateList.default){
      setCurrentNotes(
        {note1: {name: notesSymbol, state: StateList.selected},
         note2: {name: "", state: StateList.default}});
    }
    else {
      if (listNotes.note1.state !== StateList.default && listNotes.note2.state === StateList.default){
        setCurrentNotes(
          {note1: {name: listNotes.note1.name, state: listNotes.note1.state},
           note2: {name: notesSymbol, state: StateList.selected}});
      }
      else {
        setCurrentNotes(
          {note1: {name: notesSymbol, state: StateList.selected},
           note2: {name: "", state: StateList.default}});
      }
    }
    onChange(StateList.selected);
  }

  const activateNoteOctave = () => { 
    setCurrentNotes(
      {note1: {name: notesSymbol, state: StateList.octave},
       note2: {name: "", state: StateList.default} });
    onChange(StateList.octave);
  }

  function activateNoteOctaveBpm(){ 
    if (listNotes.note1.state === StateList.default && listNotes.note2.state === StateList.default){
      setCurrentNotes(
        {note1: {name: notesSymbol, state: StateList.octave},
         note2: {name: "", state: StateList.default}});
    }
    else {
      if (listNotes.note1.state !== StateList.default && listNotes.note2.state === StateList.default){
        setCurrentNotes(
          {note1: {name: listNotes.note1.name, state: listNotes.note1.state},
           note2: {name: notesSymbol, state: StateList.octave}});
      }
      else {
        setCurrentNotes(
          {note1: {name: notesSymbol, state: StateList.octave},
           note2: {name: "", state: StateList.default}});
      }
    }
    onChange(StateList.octave);
  }

  const disableNote = () => {
    setCurrentNotes(
      {note1: {name: "", state: StateList.default},
       note2: {name: "", state: StateList.default}});
    onChange(StateList.default);
  }

  const onLongPress = () =>{
    if (tunerMode === "TuningFork"){
      (active === StateList.default)
      ? activateNoteOctave()
      : ((active === StateList.selected)
        ? activateNoteOctave()
        : ((active === StateList.octave)
          ? activateNote()
          : disableNote()));
    }
    else {
      (active === StateList.default)
      ? activateNoteOctaveBpm()
      : ((active === StateList.selected)
        ? activateNoteOctaveBpm()
        : ((active === StateList.octave)
          ? activateNoteBpm()
          : disableNote()));
    }
  } 
  
  const onClick = () => {
    if (tunerMode === "TuningFork")
      (active === StateList.default) ? activateNote() : disableNote();
    else
      (active === StateList.default) ? activateNoteBpm() : disableNote();
  }

  const defaultLongPressOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };

  const longPressEvent = useLongPress(onLongPress, onClick, defaultLongPressOptions);

  return (
    <path 
      fill={colorButton(active)} stroke="#A7C5C3"
      strokeMiterlimit="10" strokeOpacity="1" strokeWidth="0.5"
      transform="translate(-2.04 -1.82)" d={position}
      ref={note}
      {...longPressEvent}
    />
  );
};

export default PitchCircleButtonSVG;
