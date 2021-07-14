import React, { useEffect, useState } from "react";

//Components
import FifthCircleSVG from "../common/FifthCircleSVG";
import ThirdCircleSVG from "../common/ThirdCircleSVG";
import PitchCircleButtonSVG from "./PitchCircleButtonSVG";
import CenterCircle from "../common/CenterCircle";
import { Temperament } from '../../../model/Temperament/Temperament';
import EqualTemperament, { thirdEqualQ, fifthEqualQ } from '../../../model/Temperament/Equal';
import { freqs4, thirdQ, fifthQ } from '../../../model/Divergence';
import SoundEngine from '../../../engine/SoundEngine';
import { fetchTemperamentPropsById } from '../../../engine/DataAccessor';

//Types 
import { PitchCircleButtonSVGPos as btnPosition, PitchCircleSVGLabels } from "../common/PitchCircleButtonSVGPos"
import NotesMap from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { BtnActions, getActiveBtns, NoteStates } from "../PitchCircle";

//Styles 
import "../common/PitchCircleSVG.css";


type PitchCircleSVGProps = {
  freqA4: number,
  idTemperament: number,
  btnStates: NotesMap<NoteStates>,
  dispatchState: (action: any) => void,
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({
  freqA4, idTemperament, btnStates, dispatchState
}) => {

  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [thirdQualities, setThirdQualities] = useState<NotesMap<number | null>>(thirdEqualQ());
  const [fifthQualities, setFifthQualities] = useState<NotesMap<number | null>>(fifthEqualQ());
  const [frequencies, setFrequencies] = useState<NotesMap<number>>(freqs4(440));


  useEffect(() => {
    // Update fitfhs and thirds circles and frequencies
    (async () => {
      const temp = await fetchTemperamentPropsById(idTemperament);
      setTemperament(temp);
      setFifthQualities(fifthQ(temp.cpExp5th));
      setThirdQualities(thirdQ(temp.csExp3rd));
      setFrequencies(freqs4(freqA4, temp.deviation));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTemperament]);

  useEffect(() => {
    // Update frequencies
    (async () => {
      if (!temperament)
        return;
      setFrequencies(freqs4(freqA4, temperament.deviation));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freqA4]);

  useEffect(() => {
    // Play sound
    const actives = getActiveBtns(btnStates);
    const freq1 = (!actives[0])
      ? 0
      : frequencies[actives[0].note]
        * (actives[0].state === NoteStates.OCTAVE ? 0.5 : 1);

    const freq2 = (!actives[1])
      ? 0
      : frequencies[actives[1].note]
        * (actives[1].state === NoteStates.OCTAVE ? 0.5 : 1);

    (actives[0])
      ? SoundEngine.stopAndPlay(freq1)
      : SoundEngine.stop();

    (actives[1])
      ? SoundEngine.setPulseBPS(Math.abs(freq1 - freq2))
      : SoundEngine.setPulseBPS(0);
  }, [btnStates, frequencies]);

  console.info('🔹 [PitchCircleSVG]: Render')
  return (
    <div id="Container_PitchCircleSVG">
      <svg
        id="PitchCircleSVG"
        xmlns="http://www.w3.org/2000/svg"
        width="370"
        height="370"
        viewBox="0 0 357.06 357.06"
      >
        {Object.keys(btnStates).map((note) => {
          const n = note as Notes;
          return (
            <PitchCircleButtonSVG
              key={n}
              position={btnPosition[n]}
              state={btnStates[n]}
              onClick={(state: NoteStates) => {
                dispatchState({type: BtnActions.SET, note: n, state})
              }}
            />);
        })}

        <PitchCircleSVGLabels />

        <ThirdCircleSVG
          qualities={thirdQualities}
        />
        <FifthCircleSVG
          qualities={fifthQualities}
        />
        <CenterCircle
          actives={getActiveBtns(btnStates)}
          frequencies={frequencies}
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
