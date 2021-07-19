import React, { useCallback } from "react";

import PitchCircleFifths from "./Fifths";
import PitchCircleThirds from "./Thirds";
import PitchCircleBtn from "./Button";
import PitchCircleLabels from "./Labels";

import { Temperament } from '../../../model/Temperament/Temperament';
import { thirdQ, fifthQ } from '../../../model/Divergence';

import NotesMap from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { BtnActions, BtnStates } from "./utils/buttons";

import "./PitchCircle.css";


type PitchCircleViewProps = {
  temperament: Temperament,
  labels?: string[],
  btnStates?: NotesMap<BtnStates>,
  dispatchState?: (action: any) => void,
};

const PitchCircleView: React.FC<PitchCircleViewProps> = ({
  temperament,
  labels,
  btnStates,
  dispatchState
}) => {

  const onBtnClick = useCallback(( // useCallback for PitchCircleBtn memoizing
    note: Notes,
    state: BtnStates
  ) => {
    if (dispatchState)
      dispatchState({ type: BtnActions.SET, buttons: [{ note: note, state }] });
  }, [dispatchState]);

  // console.info('🔹 [PitchCircleView]: Render')
  return (
    <section className="px-4 pt-2 w-full max-w-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 357.06 357.06"
      >
        {Object.keys(Notes).map((note) => {
          const n = note as Notes;
          return (
            <PitchCircleBtn
              key={n}
              note={n}
              state={(btnStates) ? btnStates[n] : BtnStates.IDLE}
              onClick={onBtnClick}
            />)
        })}

        <PitchCircleThirds
          qualities={thirdQ(temperament.csExp3rd)}
        />
        <PitchCircleFifths
          qualities={fifthQ(temperament.cpExp5th)}
        />

        <PitchCircleLabels
          label1={(labels && labels[0]) || ''}
          label2={(labels && labels[1]) || ''}
        />

        <text className="pc-btn-labels" transform="translate(278.22 247.59)">E</text>
        <text className="pc-btn-labels" transform="translate(231.53 293.77)">B</text>
        <text className="pc-btn-labels" transform="translate(166.28 310.6)" >F<tspan x="13.12" y="0">♯</tspan></text>
        <text className="pc-btn-labels" transform="translate(104.23 293.77)">C<tspan x="15.2" y="0" >♯</tspan></text>
        <text className="pc-btn-labels" transform="translate(56.47 247.59)" >G<tspan x="16.25" y="0">♯</tspan></text>
        <text className="pc-btn-labels" transform="translate(48.05 185.52)" >E<tspan x="14.08" y="0">♭</tspan></text>
        <text className="pc-btn-labels" transform="translate(60.97 124.58)" >B<tspan x="15.55" y="0">♭</tspan></text>
        <text className="pc-btn-labels" transform="translate(106.28 80.52)" >F</text>
        <text className="pc-btn-labels" transform="translate(170.28 62.27)" >C</text>
        <text className="pc-btn-labels" transform="translate(231.53 80.52)" >G</text>
        <text className="pc-btn-labels" transform="translate(278.22 124.58)">D</text>
        <text className="pc-btn-labels" transform="translate(294.3 185.52)" >A</text>
      </svg>
    </section>
  );
};

export default React.memo(
  PitchCircleView,
  (prevProps, nextProps) =>
    prevProps.temperament === nextProps.temperament &&
    prevProps.labels === nextProps.labels &&
    prevProps.btnStates === nextProps.btnStates &&
    prevProps.dispatchState === nextProps.dispatchState
);
