import React, { useRef } from "react";
import useLongPress from "../../../hooks/useLongPress";
import { ActiveNotes, NoteStates } from "./PitchCircleSVG";
import { Notes } from "../../../model/Note/enums";
import { TuneMode } from "../Tuner";

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
  notesSymbol: Notes | null;
  position: string;
  state: NoteStates;
  tuneMode: TuneMode;
  actives: ActiveNotes;
  onChange: (state: NoteStates) => void;
  setActives: (notesSymbol: ActiveNotes) => void;
};

const PitchCircleButtonSVG: React.FC<PitchCircleButtonSVGProps> = ({
  notesSymbol,
  position,
  state,
  tuneMode,
  actives,
  onChange,
  setActives,
}) => {
  const note = useRef<SVGPathElementOrNull>(null);

  const onLongPress = useLongPress(
    () => {
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
    },
    () => {
      // onClick
      state === NoteStates.IDLE
        ? setNoteState(NoteStates.SELECTED)
        : deactivateNotes();
    },
    {
      // options
      shouldPreventDefault: true,
      delay: 500,
    }
  );

  const setNoteState = (nState: NoteStates) => {
    if (tuneMode === TuneMode.PITCHPIPE) {
      setActives([
        { note: notesSymbol, state: nState },
        { note: null, state: NoteStates.IDLE },
      ]);
    } else {
      // Tuner Mode is BPM
      if (
        actives[0].state === NoteStates.IDLE &&
        actives[1].state === NoteStates.IDLE
      ) {
        setActives([
          { note: notesSymbol, state: nState },
          { note: null, state: NoteStates.IDLE },
        ]);
      } else {
        if (
          actives[0].state !== NoteStates.IDLE &&
          actives[1].state === NoteStates.IDLE
        ) {
          if (nState !== NoteStates.IDLE && notesSymbol === actives[0].note)
            return; // Prevent selecting two octave notes

          setActives([
            { note: actives[0].note, state: actives[0].state },
            { note: notesSymbol, state: nState },
          ]);
        } else {
          setActives([
            { note: notesSymbol, state: nState },
            { note: null, state: NoteStates.IDLE },
          ]);
        }
      }
    }
    onChange(nState);
  };

  const deactivateNotes = () => {
    setActives([
      { note: null, state: NoteStates.IDLE },
      { note: null, state: NoteStates.IDLE },
    ]);
    onChange(NoteStates.IDLE);
  };

  return (
    <path
      fill={colorButton(state)}
      stroke="var(--color-light-grey)"
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
    prevProps.state === nextProps.state &&
    prevProps.tuneMode === nextProps.tuneMode &&
    prevProps.tuneMode === TuneMode.PITCHPIPE
  // TODO TuneMode.BEATS
);
