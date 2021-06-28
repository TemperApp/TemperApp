import React, { useEffect, useState } from 'react';
import { noteToStr, BpsCalc } from './functions/frequencies';
import { ActiveNotes, NoteStates } from './PitchCircleSVG';
import { NotesMap } from '../../model/Note';

//Styles
import "./CenterCircle.css";
import { isDarkTheme } from '../../model/Utils';

type PitchCircleSVGProps = {
  actives: ActiveNotes,
  frequencies: NotesMap<number>,
  darkTheme : boolean
}

const isBps = true;
const refOctave = 4;

const CenterCircle: React.FC<PitchCircleSVGProps> = ({ actives, frequencies, darkTheme }) => {

  useEffect(() => {
    console.log("raffraichissement");
    const cNote = document.getElementById("centerCircleNote")!;
    const cFreq = document.getElementById("centerCircleFrequency")!;

    const isIdle0 = actives[0].state === NoteStates.IDLE;
    const isIdle1 = actives[1].state === NoteStates.IDLE;
    const isOctave0 = actives[0].state === NoteStates.OCTAVE;
    const isOctave1 = actives[1].state === NoteStates.OCTAVE;

    if (isIdle0 && isIdle1) {
      cNote.innerHTML = "—";
      cFreq.innerHTML = "— Hz";
    }

    if (!isIdle0 && isIdle1) {
      cNote.innerHTML = noteToStr(actives[0].note!) + (refOctave + (isOctave0 ? -1 : 0));
      cFreq.innerHTML = (frequencies[actives[0].note!] * (isOctave0 ? 0.5 : 1)).toFixed(1) + " Hz";
    }

    if (!isIdle0 && !isIdle1) {
      cNote.innerHTML =
        noteToStr(actives[0].note!)
        + (refOctave + (isOctave0 ? -1 : 0))
        + " · "
        + noteToStr(actives[1].note!)
        + (refOctave + (isOctave1 ? -1 : 0));

      cFreq.innerHTML = BpsCalc(
        frequencies[actives[0].note!] * (isOctave0 ? 0.5 : 1),
        frequencies[actives[1].note!] * (isOctave1 ? 0.5 : 1)
      )
        + (isBps ? " bps" : "");
    }
  }, [actives, frequencies]);

  return (
    <g id="CenterCercleInformation">
      <circle className="st29" fill={(darkTheme)?("#233C3A"):"#F7FBFC"} cx="178.5" cy="178.5" r="77.13" />
      <text transform="matrix(1 0 0 1 178.5 178.5)" className="st25 st30">
        <tspan x="0" className="st30" textAnchor="middle" id="centerCircleNote"></tspan>
        <tspan x="0" className="st31" textAnchor="middle" id="centerCircleFrequency" dy="30"></tspan>
      </text>
    </g>
  );
};

export default CenterCircle;
