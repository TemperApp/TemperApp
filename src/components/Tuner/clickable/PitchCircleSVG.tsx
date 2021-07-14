import React, { useCallback, useEffect, useReducer, useState } from "react";

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
import NotesMap, { mapNotesMap } from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { TuneMode } from "../Tuner";
import Note from "../../../model/Note/Note";
import { isValidIntervalForAcousticBeat } from "../../../model/AcousticBeat";

//Styles 
import "../common/PitchCircleSVG.css";

export enum NoteStates {
  IDLE,
  SELECTED,
  OCTAVE,
}

export type ButtonState = {
  note: Notes;
  state: NoteStates;
};

enum Actions {
  SET, SET_ALL_IDLE,
}

const getActiveBtns = (
  btnStates: NotesMap<NoteStates>
): ButtonState[] => (
  Object.entries(btnStates)
    .filter(([, state]) => state !== NoteStates.IDLE)
    .map((entry) => ({note: entry[0] as Notes, state: entry[1]}))
);


type PitchCircleSVGProps = {
  tuneMode: TuneMode,
  freqA4: number,
  idTemperament: number,
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({
  tuneMode, freqA4, idTemperament
}) => {
  
  const statesReducer = useCallback((
    btnStates: NotesMap<NoteStates>,
    action: any // TODO Type this
  ) => {
    let res = {...btnStates};
    
    if (action.type === Actions.SET_ALL_IDLE)
      return mapNotesMap(NoteStates.IDLE);
      
    if (action.type === Actions.SET
      && action.state === NoteStates.IDLE
    ) {
      return mapNotesMap(NoteStates.IDLE);
    }

    if (action.type === Actions.SET) {
      const actives = getActiveBtns(btnStates);
      
      if (actives.length === 2) {
        res[actives[0].note] = NoteStates.IDLE;
        res[actives[1].note] = NoteStates.IDLE;
      }
      
      if (actives.length === 1) {
        if (tuneMode === TuneMode.PITCHPIPE
          || !isValidIntervalForAcousticBeat(
              Note.create(actives[0].note, (actives[0].state === NoteStates.OCTAVE ? 3 : 4)),
              Note.create(action.note, (action.state === NoteStates.OCTAVE ? 3 : 4))
            )
        ) {
          res[actives[0].note] = NoteStates.IDLE;
        }
      }
      return {...res, [action.note]: action.state};
    }

    console.warn(`[PitchCircleSVG]: Unknown action type: ${action.type}`)
    return btnStates;
  }, [tuneMode]);


  const [btnStates, dispatchState] = useReducer(statesReducer, mapNotesMap(NoteStates.IDLE));
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [thirdQualities, setThirdQualities] = useState<NotesMap<number | null>>(thirdEqualQ());
  const [fifthQualities, setFifthQualities] = useState<NotesMap<number | null>>(fifthEqualQ());
  const [frequencies, setFrequencies] = useState<NotesMap<number>>(freqs4(440));


  useEffect(() => {
    dispatchState({type: Actions.SET_ALL_IDLE});
  }, [tuneMode]);

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
                dispatchState({type: Actions.SET, note: n, state})
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
    prevProps.tuneMode === nextProps.tuneMode &&
    prevProps.idTemperament === nextProps.idTemperament &&
    prevProps.freqA4 === nextProps.freqA4
);
