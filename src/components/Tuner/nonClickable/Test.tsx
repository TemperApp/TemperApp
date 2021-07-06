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



type TestProps = {
  stepTune: number,
  stepProcedure: number,
}

const Test: React.FC<TestProps> = ({
  stepTune, stepProcedure
}) => {

  console.log('--- composant stepTune : '+stepTune);

  return(
    <>
    <div>
      <p>Procédure n° {stepProcedure}</p>
      <p>n° {stepTune}</p>
    </div>
    </>
  );

};

export default Test;
