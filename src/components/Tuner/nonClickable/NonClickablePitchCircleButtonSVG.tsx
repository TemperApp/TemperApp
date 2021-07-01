import React from 'react';
import { ActiveNotes, NoteStates } from './NonClickablePitchCircleSVG';
import { TunerMode } from '../PitchCircle';
import { Notes } from '../../../model/Note/enums';

const colorButton = (state: NoteStates, darkTheme: boolean) => {
  let temp: string;
  console.log(darkTheme);
  (darkTheme)?
    temp = "#233C3A"
    : temp = "#F7FBFC"
  switch (state) {
    case NoteStates.SELECTED: // bouton activé 
      return "#A7C5C3";
    case NoteStates.OCTAVE: // bouton activé à l'octave supérieur
      return "#F75D4E";
    default: //bouton déactivé
      return temp;
  }
}

type NonClickablePitchCircleButtonSVGProps = {
  notesSymbol: Notes | null,
  position: string,
  state: NoteStates,
  tunerMode: TunerMode,
  actives: ActiveNotes
  onChange: (state: NoteStates) => void,
  setActives: (notesSymbol: ActiveNotes) => void,
  darkTheme: boolean
}

const NonClickablePitchCircleButtonSVG: React.FC<NonClickablePitchCircleButtonSVGProps> = ({
  notesSymbol, position, state, tunerMode,
  actives, onChange, setActives, darkTheme
}) => {

  return (
    <path
      fill={colorButton(state, darkTheme)} stroke="#A7C5C3"
      strokeMiterlimit="10" strokeOpacity="1" strokeWidth="0.5"
      transform="translate(-2.04 -1.82)" d={position}
    />
  );
};

export default React.memo(
  NonClickablePitchCircleButtonSVG,
  (prevProps, nextProps) => (
    prevProps.state === nextProps.state
    && prevProps.tunerMode === nextProps.tunerMode
    && prevProps.tunerMode === TunerMode.HZ
    && prevProps.darkTheme === nextProps.darkTheme)
    // TODO TunerMode.BPM
);
