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
import Note from '../../../model/Note/Note';

//Types 
import { PitchCircleButtonSVGPos as btnPosition, PitchCircleSVGLabels } from "../common/PitchCircleButtonSVGPos"
import NotesMap from '../../../model/Note/NotesMap';
import { NoteAlter, Notes } from '../../../model/Note/enums';
import { TunerMode } from '../PitchCircle';

//Styles 
import "../common/PitchCircleSVG.css";
import * as Tone from 'tone';


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

type NonClickableProcedurePitchCircleSVGProps = {
  tunerMode: TunerMode,
  freqA4: number,
  idTemperament: number,
  centerCircle : boolean,
  stepProcedure?: number,
  procedure?: Array<string>,
  thirdQualities: NotesMap<number | null>
  fifthQualities: NotesMap<number | null>
  frequencies?: NotesMap<number>
  temperament?: Temperament
}

const NonClickableProcedurePitchCircleSVG: React.FC<NonClickableProcedurePitchCircleSVGProps> = ({
  tunerMode, freqA4, idTemperament, centerCircle, stepProcedure, 
  procedure, thirdQualities, fifthQualities,
  frequencies, temperament
}) => {

  const [actives, setActives] = useState<ActiveNotes>([
    { note: null, state: NoteStates.IDLE },
    { note: null, state: NoteStates.IDLE },
  ]);

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

  const cleanActive= () => {
    if(actives[0] != null){
      setStates(actives[0].note!, NoteStates.IDLE);
    }
    if(actives[1] != null){
      setStates(actives[1].note!, NoteStates.IDLE);
    }
    if(!(actives[0] === null || actives[1] === null)){
      setActives(
      [
        { note: null, state: NoteStates.IDLE },
        { note: null, state: NoteStates.IDLE }
      ])
    }
  }

  useEffect(() => {
    // Deactivate notes
    setActives([
      { note: null, state: NoteStates.IDLE },
      { note: null, state: NoteStates.IDLE },
    ]);
  }, [tunerMode]);

 
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
            frequencies={frequencies!}
            freqA4={freqA4}
            deviations={temperament!.deviation}
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

export default NonClickableProcedurePitchCircleSVG;
