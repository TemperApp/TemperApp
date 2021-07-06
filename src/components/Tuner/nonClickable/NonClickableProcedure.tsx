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
import { render } from "react-dom";
import NonClickablePitchCircleSVG from "./NonClickablePitchCircleSVG";
import Test from "./Test";


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

type NonClickableProcedureProps = {
  tunerMode: TunerMode,
  freqA4: number,
  idTemperament: number,
  centerCircle : boolean,
  stepProcedure?: number,
  procedure?: Array<string>,
}

const NonClickableProcedure: React.FC<NonClickableProcedureProps> = ({
  tunerMode, freqA4, idTemperament, centerCircle, stepProcedure, procedure
}) => {

  const [stepTune, setStepTune] = useState<number>(0);

  useEffect( () => {
    setStepTune(0);
  }, [idTemperament, stepProcedure])

  useEffect( () => {
    if(stepTune < 3){
      console.log("stepTune : "+stepTune)
      const timer = setTimeout(() => {
        setStepTune(stepTune+1);
        console.log('This will run after 1 second!');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stepTune])


  return(
    <>

    <Test
      stepTune = {stepTune}
      stepProcedure = {stepProcedure!}
    />

    </>
  );

};

export default NonClickableProcedure;
