import React from 'react';
import { NoteStates } from './NonClickablePitchCircleSVG';

const colorButton = (state: NoteStates) => {
  let temp: string;
  temp = "var(--color-theme)";
  switch (state) {
    case NoteStates.SELECTED: // bouton activé
      return "var(--color-light-grey)";
    case NoteStates.OCTAVE: // bouton activé à l'octave supérieur
      return "var(--color-hover)";
    default:
      //bouton déactivé
      return temp;
  }
};

type NonClickablePitchCircleButtonSVGProps = {
  position: string,
  state: NoteStates,
}

const NonClickablePitchCircleButtonSVG: React.FC<NonClickablePitchCircleButtonSVGProps> = ({
  position, state
}) => {

  console.info('🔹 [NonClickablePitchCircleButtonSVG]: Render')
  return (
    <path
      fill={colorButton(state)} stroke="var(--color-hover)"
      strokeMiterlimit="10" strokeOpacity="1" strokeWidth="0.5"
      transform="translate(-2.04 -1.82)" d={position} key={position}
    />
  );
};

export default React.memo(
  NonClickablePitchCircleButtonSVG,
  (prevProps, nextProps) => (
    prevProps.state === nextProps.state)
    // TODO TuneMode.BEATS
);
