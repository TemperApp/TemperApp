import React, { useEffect, useState } from "react";

//Components
import FifthCircleSVG from "../common/FifthCircleSVG";
import ThirdCircleSVG from "../common/ThirdCircleSVG";
import PitchCircleButtonSVG from "./PitchCircleButtonSVG";
import CenterCircle from "../common/CenterCircle";

import { Temperament } from '../../../model/Temperament/Temperament';
import EqualTemperament from '../../../model/Temperament/Equal';
import { thirdQ, fifthQ } from '../../../model/Divergence';
import { fetchTemperamentPropsById } from '../../../engine/DataAccessor';
import { processAcousticBeat } from "../../../model/AcousticBeat";

import SoundEngine from '../../../engine/SoundEngine';

//Types 
import { PitchCircleButtonSVGPos as btnPosition, PitchCircleSVGLabels } from "../common/PitchCircleButtonSVGPos"
import NotesMap from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { BtnActions, getActiveBtns, BtnStates, createNoteFromActive } from "../PitchCircleController";

//Styles 
import "../common/PitchCircleSVG.css";


type PitchCircleSVGProps = {
  freqA4: number,
  idTemperament: number,
  btnStates: NotesMap<BtnStates>,
  dispatchState: (action: any) => void,
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({
  freqA4, idTemperament, btnStates, dispatchState
}) => {

  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(idTemperament));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTemperament]);

  const actives = getActiveBtns(btnStates);
  
  const noteX = (actives[0]) && createNoteFromActive(actives[0]);
  const noteY = (actives[1]) && createNoteFromActive(actives[1]);

  if (!noteX && !noteY) {
    SoundEngine.stop();
  }

  if (noteX && !noteY) {
    SoundEngine.setPulseBPS(0);
    SoundEngine.stopAndPlay(noteX.freq(freqA4, temperament.deviation));
  }

  if (noteX && noteY) {
    const { modulationFreq, carrierFreq } = processAcousticBeat(
      noteX, noteY, freqA4, temperament.deviation
    );

    if (modulationFreq && carrierFreq) {
      SoundEngine.setPulseBPS(modulationFreq);
      let heardFreq = carrierFreq;
      while (heardFreq > 1000)
        heardFreq /= 2;
      SoundEngine.stopAndPlay(heardFreq);
    }
  }

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
          actives={actives}
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
    prevProps.idTemperament === nextProps.idTemperament &&
    prevProps.freqA4 === nextProps.freqA4 &&
    prevProps.btnStates === nextProps.btnStates &&
    prevProps.dispatchState === nextProps.dispatchState
);
