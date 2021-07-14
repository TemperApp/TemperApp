import React, { useRef } from "react";
import useLongPress from "../../../hooks/useLongPress";
import { NoteStates } from "../PitchCircle";

type SVGPathElementOrNull = SVGPathElement | null;

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

type PitchCircleButtonSVGProps = {
  position: string;
  state: NoteStates;
  onClick: (state: NoteStates) => void;
};

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({
  position,
  state,
  onClick,
}) => {
  const note = useRef<SVGPathElementOrNull>(null);

  const onLongPress = useLongPress(
    () => {
      // onLongPress
      switch (state) {
        case NoteStates.IDLE:
        case NoteStates.SELECTED:
          onClick(NoteStates.OCTAVE);
          break;
        case NoteStates.OCTAVE:
          onClick(NoteStates.SELECTED);
          break;
      }
    },
    () => {
      // onClick
      state === NoteStates.IDLE
        ? onClick(NoteStates.SELECTED)
        : onClick(NoteStates.IDLE);
    },
    {
      // options
      shouldPreventDefault: true,
      delay: 500,
    }
  );

  console.info('🔹 [PitchCircleButtonSVG]: Render')
  return (
    <path
      fill={colorButton(state)}
      stroke="var(--color-hover)"
      strokeMiterlimit="10"
      strokeOpacity="1"
      strokeWidth="0.5"
      transform="translate(-2.04 -1.82)"
      d={position}
      ref={note}
      {...onLongPress}
    />
  );
};

export default React.memo(
  PitchCircleButtonSVG,
  (prevProps, nextProps) =>
  prevProps.state === nextProps.state 
);
