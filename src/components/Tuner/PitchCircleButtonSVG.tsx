import React, { useRef } from 'react';
import useLongPress from "./functions/useLongPress";
import { ActiveNotes, NoteStates } from './PitchCircleSVG';
import { TunerMode } from './PitchCircle';
import { Notes } from '../../model/Note';

type SVGPathElementOrNull = SVGPathElement | null;

const colorButton = (state: NoteStates) => {
  switch (state) {
    case NoteStates.SELECTED: // bouton activé 
      return "#A7C5C3";
    case NoteStates.OCTAVE: // bouton activé à l'octave supérieur
      return "#F75D4E";
    default: //bouton déactivé
      return "#F5FBFB";
  }
}

type PitchCircleButtonSVGProps = {
  notesSymbol: Notes | null,
  position: string,
  state: NoteStates,
  tunerMode: TunerMode,
  actives: ActiveNotes
  onChange: (state: NoteStates) => void,
  setActives: (notesSymbol: ActiveNotes) => void,
}

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({
  notesSymbol, position, state, tunerMode,
  actives, onChange, setActives
}) => {

  const note = useRef<SVGPathElementOrNull>(null);

  const onLongPress = useLongPress(() => {
    // onLongPress
    switch (state) {
      case NoteStates.IDLE:
      case NoteStates.SELECTED:
        setNoteState(NoteStates.OCTAVE);
        break;
      case NoteStates.OCTAVE:
        setNoteState(NoteStates.SELECTED);
        break;
      default:
        deactivateNotes();
    }
  }, () => {
    // onClick
    (state === NoteStates.IDLE) ? setNoteState(NoteStates.SELECTED) : deactivateNotes();
  }, {
    // options
    shouldPreventDefault: true,
    delay: 500,
  });


  const setNoteState = (nState: NoteStates) => {
    if (tunerMode === TunerMode.HZ) {
      setActives(
        [{note: notesSymbol, state: nState},
         {note: null, state: NoteStates.IDLE}]);
    }
    else {
      // Tuner Mode is BPM
      if (actives[0].state === NoteStates.IDLE && actives[1].state === NoteStates.IDLE) {
        setActives(
          [{note: notesSymbol, state: nState},
           {note: null, state: NoteStates.IDLE}]);
      }
      else {
        if (actives[0].state !== NoteStates.IDLE && actives[1].state === NoteStates.IDLE)
          setActives(
            [{note: actives[0].note, state: actives[0].state},
             {note: notesSymbol, state: nState}]);
        else
          setActives(
            [{note: notesSymbol, state: nState},
             {note: null, state: NoteStates.IDLE}]);
      }
    }
    onChange(nState);
  }

  const deactivateNotes = () => {
    setActives(
      [{note: null, state: NoteStates.IDLE},
       {note: null, state: NoteStates.IDLE}]);
    onChange(NoteStates.IDLE);
  };

  return (
    <path
      fill={colorButton(state)} stroke="#A7C5C3"
      strokeMiterlimit="10" strokeOpacity="1" strokeWidth="0.5"
      transform="translate(-2.04 -1.82)" d={position}
      ref={note}
      {...onLongPress}
    />
  );
};

export default React.memo(
  PitchCircleButtonSVG,
  (prevProps, nextProps) => (
    prevProps.state === nextProps.state
    && prevProps.tunerMode === nextProps.tunerMode
    && prevProps.tunerMode === TunerMode.HZ)
    // TODO TunerMode.BPM
);
