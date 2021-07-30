import React from "react";
import useLongPress from "../../../hooks/useLongPress";

import Sector from "../../Ring/Sector";

import Note from "../../../model/Note/Note";
import { Notes } from "../../../model/Note/enums";
import { BtnStates } from "./utils/buttons";
import { PI, vec2 } from "../../../utils/maths";

const fillColor = (state: BtnStates) => {
  switch (state) {
    case BtnStates.SELECTED:
      return 'var(--color-light-grey)';
    case BtnStates.OCTAVE:
      return 'var(--color-hover)';
    default:
      return 'var(--color-theme)';
  }
};

type PitchCircleBtnProps = {
  idx: number,
  c: vec2,
  innerR: number,
  outerR: number,
  note: Notes,
  state: BtnStates,
  onClick?: (note: Notes, state: BtnStates) => void,
};

const PitchCircleBtn: React.FC<PitchCircleBtnProps> = ({
  idx,
  c,
  innerR,
  outerR,
  note,
  state,
  onClick,
}) => {
  const onPress = useLongPress(
    () => {
      // onLongPress
      console.log('long press', idx)
      switch (state) {
        case BtnStates.IDLE:
        case BtnStates.SELECTED:
          (onClick) && onClick(note, BtnStates.OCTAVE);
          break;
        case BtnStates.OCTAVE:
          (onClick) && onClick(note, BtnStates.SELECTED);
          break;
      }
    },
    () => {
      // onClick
      state === BtnStates.IDLE
        ? (onClick) && onClick(note, BtnStates.SELECTED)
        : (onClick) && onClick(note, BtnStates.IDLE);
    },
    {
      // options
      shouldPreventDefault: true,
      delay: 500,
    }
  );

  return (
    <Sector
      idx={idx}
      c={c}
      angle={PI/6}
      offsetAngle={PI/6 * idx}
      innerR={innerR}
      outerR={outerR}
      fill={fillColor(state)}
      label={Note.create(note).string(true, false)}
      fontSize={10}
      isTextHorizontal
      attributesPath={{
        ...onPress
      }}
    />
  );
};

export default React.memo(
  PitchCircleBtn,
  (prevProps, nextProps) =>
    prevProps.idx === nextProps.idx &&
    prevProps.c === nextProps.c &&
    prevProps.innerR === nextProps.innerR &&
    prevProps.outerR === nextProps.outerR &&
    prevProps.note === nextProps.note &&
    prevProps.state === nextProps.state &&
    prevProps.onClick === nextProps.onClick
);
