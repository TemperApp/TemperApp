import React, { useEffect, useState } from "react";

//Components
import FifthCircleSVG from "../common/FifthCircleSVG";
import ThirdCircleSVG from "../common/ThirdCircleSVG";
import NonClickablePitchCircleButtonSVG from "./NonClickablePitchCircleButtonSVG";
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
import { TunerMode } from '../PitchCircle';

//Styles 
import "../PitchCircleSVG.css";

export enum NoteStates {
  IDLE,
  SELECTED,
  OCTAVE,
}

export type ActiveNote = {
  note: Notes | null;
  state: NoteStates;
};

export type ActiveNotes = [ActiveNote, ActiveNote];

type NonClickablePitchCircleSVGProps = {
  tunerMode: TunerMode,
  freqA4: number,
  idTemperament: number,
  centerCircle : boolean,
}

const NonClickablePitchCircleSVG: React.FC<NonClickablePitchCircleSVGProps> = ({
  tunerMode, freqA4, idTemperament, centerCircle
}) => {
  const [actives, setActives] = useState<ActiveNotes>([
    { note: null, state: NoteStates.IDLE },
    { note: null, state: NoteStates.IDLE },
  ]);

  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [thirdQualities, setThirdQualities] = useState<NotesMap<number | null>>(thirdEqualQ());
  const [fifthQualities, setFifthQualities] = useState<NotesMap<number | null>>(fifthEqualQ());

  const [frequencies, setFrequencies] = useState<NotesMap<number>>(freqs4(440));

  const [C       , setC      ] = useState<NoteStates>(NoteStates.IDLE);
  const [C_sharp , setC_sharp] = useState<NoteStates>(NoteStates.IDLE);
  const [D       , setD      ] = useState<NoteStates>(NoteStates.IDLE);
  const [E_flat  , setE_flat ] = useState<NoteStates>(NoteStates.IDLE);
  const [E       , setE      ] = useState<NoteStates>(NoteStates.IDLE);
  const [F       , setF      ] = useState<NoteStates>(NoteStates.IDLE);
  const [F_sharp , setF_sharp] = useState<NoteStates>(NoteStates.IDLE);
  const [G       , setG      ] = useState<NoteStates>(NoteStates.IDLE);
  const [G_sharp , setG_sharp] = useState<NoteStates>(NoteStates.IDLE);
  const [A       , setA      ] = useState<NoteStates>(NoteStates.IDLE);
  const [B_flat  , setB_flat ] = useState<NoteStates>(NoteStates.IDLE);
  const [B       , setB      ] = useState<NoteStates>(NoteStates.IDLE);

  const states = { C, C_sharp, D, E_flat, E, F, F_sharp, G, G_sharp, A, B_flat, B };

  const setStates = (note: Notes, state: NoteStates) => {
    switch (note) {
      case Notes.C:
        return setC(state);
      case Notes.C_sharp:
        return setC_sharp(state);
      case Notes.D:
        return setD(state);
      case Notes.E_flat:
        return setE_flat(state);
      case Notes.E:
        return setE(state);
      case Notes.F:
        return setF(state);
      case Notes.F_sharp:
        return setF_sharp(state);
      case Notes.G:
        return setG(state);
      case Notes.G_sharp:
        return setG_sharp(state);
      case Notes.A:
        return setA(state);
      case Notes.B_flat:
        return setB_flat(state);
      case Notes.B:
        return setB(state);
    }
  };

  useEffect(() => {
    // Deactivate notes
    setActives([
      { note: null, state: NoteStates.IDLE },
      { note: null, state: NoteStates.IDLE },
    ]);
  }, [tunerMode]);

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
    const freq1 = (actives[0].note === null)
      ? 0
      : frequencies[actives[0].note]
        * (actives[0].state === NoteStates.OCTAVE ? 2 : 1);

    const freq2 = (actives[1].note === null)
      ? 0
      : frequencies[actives[1].note]
        * (actives[1].state === NoteStates.OCTAVE ? 2 : 1);

    (actives[0].note !== null)
      ? SoundEngine.stopAndPlay(freq1)
      : SoundEngine.stop();

    actives[1].note !== null
      ? SoundEngine.setPulseBPS(Math.abs(freq1 - freq2))
      : SoundEngine.setPulseBPS(0);
  }, [actives, frequencies]);

  // Clean states
  for (const note in states) {
    const n = note as Notes;
    if (
      actives[0].note !== note &&
      actives[1].note !== note &&
      states[n] !== NoteStates.IDLE
    ) {
      setStates(n, NoteStates.IDLE);
    }
  }

  const displayCenterCircle = () => {
    if(centerCircle){
      console.log("cercle central")
      console.log(centerCircle)
      return(
        <CenterCircle
            actives={actives}
            frequencies={frequencies}
            freqA4={freqA4}
            deviations={temperament.deviation}
          />
      );
    }
  }

  return (
    <div id="Container_PitchCircleSVG">
      <svg
        id="PitchCircleSVG"
        xmlns="http://www.w3.org/2000/svg"
        width="370"
        height="370"
        viewBox="0 0 357.06 357.06"
      >
        {Object.keys(states).map((note) => {
          const n = note as Notes;
          return (
            <NonClickablePitchCircleButtonSVG
              key={n}
              notesSymbol={n}
              position={btnPosition[n]}
              state={states[n]}
              tunerMode={tunerMode}
              actives={actives}
              onChange={(state: NoteStates) => setStates(n, state)}
              setActives={setActives}
            />);
        })}

        <PitchCircleSVGLabels />

        <ThirdCircleSVG
          qualities={thirdQualities}
        />
        <FifthCircleSVG
          qualities={fifthQualities}
        />


        {
          displayCenterCircle()
        }

      </svg>
    </div>
  );
};

export default NonClickablePitchCircleSVG;