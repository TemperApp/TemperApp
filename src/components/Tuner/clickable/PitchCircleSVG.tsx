import React from "react";

//Components
import FifthCircleSVG from "../common/FifthCircleSVG";
import ThirdCircleSVG from "../common/ThirdCircleSVG";
import PitchCircleButtonSVG from "./PitchCircleButtonSVG";
import CenterCircle from "../common/CenterCircle";

import { Temperament } from '../../../model/Temperament/Temperament';
import { thirdQ, fifthQ } from '../../../model/Divergence';

//Types 
import { PitchCircleButtonSVGPos as btnPosition, PitchCircleSVGLabels } from "../common/PitchCircleButtonSVGPos"
import NotesMap from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { BtnActions, getActiveBtns, BtnStates } from "../PitchCircleController";

//Styles 
import "../common/PitchCircleSVG.css";


type PitchCircleSVGProps = {
  freqA4: number,
  temperament: Temperament,
  btnStates: NotesMap<BtnStates>,
  dispatchState: (action: any) => void,
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({
  freqA4, temperament, btnStates, dispatchState
}) => {

  console.info('🔹 [PitchCircleSVG]: Render')
  return (
    <div className="px-4 max-w-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 357.06 357.06"
      >
        {Object.keys(btnStates).map((note) => {
          const n = note as Notes;
          return (
            <PitchCircleButtonSVG
              key={n}
              position={btnPosition[n]}
              state={btnStates[n]}
              onClick={(state: BtnStates) => {
                dispatchState({ type: BtnActions.SET, note: n, state })
              }}
            />);
        })}

        <PitchCircleSVGLabels />

        <ThirdCircleSVG
          qualities={thirdQ(temperament.csExp3rd)}
        />
        <FifthCircleSVG
          qualities={fifthQ(temperament.cpExp5th)}
        />
        <CenterCircle
          actives={getActiveBtns(btnStates)}
          freqA4={freqA4}
          deviations={temperament.deviation}
        />

      </svg>
    </div>
  );
};

export default React.memo(
  PitchCircleSVG,
  (prevProps, nextProps) =>
    prevProps.temperament === nextProps.temperament &&
    prevProps.freqA4 === nextProps.freqA4 &&
    prevProps.btnStates === nextProps.btnStates &&
    prevProps.dispatchState === nextProps.dispatchState
);
