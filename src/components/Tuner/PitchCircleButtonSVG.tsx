import React, { useRef } from 'react';
import { ActiveNotes, NotesOrEmptyStr, NoteStates } from './PitchCircleSVG';
import useLongPress from "./functions/useLongPress";

type DivOrNullType = SVGPathElement | null;

const colorButton = (state: NoteStates) => {
  switch (state) {
    case NoteStates.IDLE: //bouton déactivé
      return "#F5FBFB";
    case NoteStates.SELECTED: // bouton activé 
      return "#A7C5C3";
    case NoteStates.OCTAVE: // bouton activé à l'octave supérieur
      return "#F75D4E";
    default:
      return "#F5FBFB";
  }
}

type PitchCircleButtonSVGProps = {
  notesSymbol: NotesOrEmptyStr,
  position: string,
  active: NoteStates,
  tunerMode: string,
  listNotes: ActiveNotes
  onChange: (state: NoteStates) => void,
  setCurrentNotes: (notesSymbol: ActiveNotes) => void,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({
  notesSymbol, position, active, tunerMode,
  listNotes, onChange, setCurrentNotes
}) => {

  const note = useRef<DivOrNullType>(null);

  function activateNote(){ 
    setCurrentNotes(
      {note1: {note: notesSymbol, state: NoteStates.SELECTED},
       note2: {note: "", state: NoteStates.IDLE}});

    onChange(NoteStates.SELECTED);
  }

  function activateNoteBpm(){ 
    if (listNotes.note1.state === NoteStates.IDLE && listNotes.note2.state === NoteStates.IDLE){
      setCurrentNotes(
        {note1: {note: notesSymbol, state: NoteStates.SELECTED},
         note2: {note: "", state: NoteStates.IDLE}});
    }
    else {
      if (listNotes.note1.state !== NoteStates.IDLE && listNotes.note2.state === NoteStates.IDLE){
        setCurrentNotes(
          {note1: {note: listNotes.note1.note, state: listNotes.note1.state},
           note2: {note: notesSymbol, state: NoteStates.SELECTED}});
      }
      else {
        setCurrentNotes(
          {note1: {note: notesSymbol, state: NoteStates.SELECTED},
           note2: {note: "", state: NoteStates.IDLE}});
      }
    }
    onChange(NoteStates.SELECTED);
  }

  const activateNoteOctave = () => { 
    setCurrentNotes(
      {note1: {note: notesSymbol, state: NoteStates.OCTAVE},
       note2: {note: "", state: NoteStates.IDLE} });
    onChange(NoteStates.OCTAVE);
  }

  function activateNoteOctaveBpm(){ 
    if (listNotes.note1.state === NoteStates.IDLE && listNotes.note2.state === NoteStates.IDLE){
      setCurrentNotes(
        {note1: {note: notesSymbol, state: NoteStates.OCTAVE},
         note2: {note: "", state: NoteStates.IDLE}});
    }
    else {
      if (listNotes.note1.state !== NoteStates.IDLE && listNotes.note2.state === NoteStates.IDLE){
        setCurrentNotes(
          {note1: {note: listNotes.note1.note, state: listNotes.note1.state},
           note2: {note: notesSymbol, state: NoteStates.OCTAVE}});
      }
      else {
        setCurrentNotes(
          {note1: {note: notesSymbol, state: NoteStates.OCTAVE},
           note2: {note: "", state: NoteStates.IDLE}});
      }
    }
    onChange(NoteStates.OCTAVE);
  }

  const disableNote = () => {
    setCurrentNotes(
      {note1: {note: "", state: NoteStates.IDLE},
       note2: {note: "", state: NoteStates.IDLE}});
    onChange(NoteStates.IDLE);
  }

  const onLongPress = () =>{
    if (tunerMode === "TuningFork"){
      (active === NoteStates.IDLE)
      ? activateNoteOctave()
      : ((active === NoteStates.SELECTED)
        ? activateNoteOctave()
        : ((active === NoteStates.OCTAVE)
          ? activateNote()
          : disableNote()));
    }
    else {
      (active === NoteStates.IDLE)
      ? activateNoteOctaveBpm()
      : ((active === NoteStates.SELECTED)
        ? activateNoteOctaveBpm()
        : ((active === NoteStates.OCTAVE)
          ? activateNoteBpm()
          : disableNote()));
    }
  } 
  
  const onClick = () => {
    if (tunerMode === "TuningFork")
      (active === NoteStates.IDLE) ? activateNote() : disableNote();
    else
      (active === NoteStates.IDLE) ? activateNoteBpm() : disableNote();
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

export default React.memo(PitchCircleButtonSVG, 
  (prevProps, nextProps) => {
    if(prevProps.active === nextProps.active && prevProps.tunerMode === nextProps.tunerMode && prevProps.tunerMode === "TuningFork")
    {
      return true;
    }
    return false
  }
);
