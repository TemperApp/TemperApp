import React, { useCallback, useContext } from "react";

import PitchCircleLabels from "./Labels";
import PitchCircleButton from "./Button";
import CommasRing from "../../Ring/CommasRing";
import SVG from "../../SVG";

import { Temperament } from '../../../model/Temperament/Temperament';
import NotesMap, { mapNotesMap } from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { FIFTHS } from "../../../model/Note/sequences";

import { BtnActions, BtnStates } from "./utils/buttons";

import "./PitchCircle.css";
import { cpExp5thToCsExp5th } from "../../../model/Divergence";
import SettingsContext from "../../../store/settings-context";


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
  dispatchState,
}) => {

  const settings = useContext(SettingsContext);

  const onBtnClick = useCallback(( // useCallback for PitchCircleBtn memoizing
    note: Notes,
    state: BtnStates
  ) => {
    if (dispatchState)
      dispatchState({ type: BtnActions.SET, buttons: [{ note: note, state }] });
  }, [dispatchState]);

  const vbsize = { x: 200 + 2, y: 200 + 2 };
  const center = { x: vbsize.x / 2, y: vbsize.y / 2 };
  const r = [46, 59, 85, 100];

  return (
    <section className="px-6 pt-2 w-full">
      <section id="pitch-circle" className="max-w-lg">
        <SVG className="ring" viewBoxSize={vbsize} >

          <CommasRing innerR={r[0]} outerR={r[1]} is3rd
            commas={temperament.csExp3rd} c={center}
            hasLabels={settings.tunerShowCommas}
          />
          <CommasRing innerR={r[2]} outerR={r[3]} is3rd={false}
            commas={
              !temperament.nature.match(/comma synto/gi)
              ? temperament.cpExp5th
              : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)
            }
            c={center}
            hasLabels={settings.tunerShowCommas}
          />

          {FIFTHS.map((f, idx) => {
            return (
              <PitchCircleButton
                key={idx}
                idx={idx}
                c={center}
                innerR={r[1]}
                outerR={r[2]}
                note={f.toNotes()}
                state={(btnStates) ? btnStates[f.toNotes()] : BtnStates.IDLE}
                onClick={onBtnClick}
              />)
          })}

          <PitchCircleLabels
            c={center}
            label1={(labels && labels[0]) ?? ''}
            label2={(labels && labels[1]) ?? ''}
            label3={(labels && labels[2]) ?? ''}
          />

        </SVG>
      </section>
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
