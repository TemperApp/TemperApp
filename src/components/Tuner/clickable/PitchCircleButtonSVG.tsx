import React, { useRef } from "react";
import useLongPress from "../../../hooks/useLongPress";
import { BtnStates } from "../PitchCircleController";

type SVGPathElementOrNull = SVGPathElement | null;

const colorButton = (state: BtnStates) => {
  let temp: string;
  temp = "var(--color-theme)";
  switch (state) {
    case BtnStates.SELECTED: // bouton activé
      return "var(--color-light-grey)";
    case BtnStates.OCTAVE: // bouton activé à l'octave supérieur
      return "var(--color-hover)";
    default:
      //bouton déactivé
      return temp;
  }
};

type PitchCircleButtonSVGProps = {
  position: string;
  state: BtnStates;
  onClick: (state: BtnStates) => void;
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
        case BtnStates.IDLE:
        case BtnStates.SELECTED:
          onClick(BtnStates.OCTAVE);
          break;
        case BtnStates.OCTAVE:
          onClick(BtnStates.SELECTED);
          break;
      }
    },
    () => {
      // onClick
      state === BtnStates.IDLE
        ? onClick(BtnStates.SELECTED)
        : onClick(BtnStates.IDLE);
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
