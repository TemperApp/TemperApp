import React, { useEffect } from 'react';
import { selectedNoteFrequency, convertNoteToString, BpsCalc, BpmCalc } from './functions/frequencies';
import { ActiveNotes, NoteStates } from './PitchCircleSVG';

//Styles
import "./CenterCircle.css";

type PitchCircleSVGProps = {
  notes: ActiveNotes,
  frequencies : {[key: string] : number},
}

const isBps = true;
const refOctave = 4;

const CenterCircle: React.FC<PitchCircleSVGProps> = ({notes, frequencies}) => {

  useEffect(() => {

    const cNote = document.getElementById("centerCircleNote")!;
    const cFreq = document.getElementById("centerCircleFrequency")!;

    if(notes[0].state !== NoteStates.IDLE && notes[1].state === NoteStates.IDLE){
      cNote.innerHTML = (notes[0].state === NoteStates.SELECTED)
      ? convertNoteToString(notes[0].note!)+refOctave
      : convertNoteToString(notes[0].note!)+(refOctave-1);
      cFreq.innerHTML = selectedNoteFrequency(frequencies, notes[0])+" Hz";
    }
    else{
      if(notes[0].state !== NoteStates.IDLE && notes[1].state !== NoteStates.IDLE){
        if(notes[0].state === NoteStates.SELECTED){
          if(notes[1].state === NoteStates.SELECTED){
            cNote.innerHTML = convertNoteToString(notes[0].note!)+refOctave+" - "+convertNoteToString(notes[1].note!)+refOctave;
          }
          else{
            cNote.innerHTML = convertNoteToString(notes[0].note!)+refOctave+" - "+convertNoteToString(notes[1].note!)+(refOctave-1);
          }
        }
        else{
          if(notes[1].state === NoteStates.SELECTED){
            cNote.innerHTML = convertNoteToString(notes[0].note!)+(refOctave-1)+" - "+convertNoteToString(notes[1].note!)+refOctave;
          }
          else{
            cNote.innerHTML = convertNoteToString(notes[0].note!)+(refOctave-1)+" - "+convertNoteToString(notes[1].note!)+(refOctave-1);
          }
        }
        if(cFreq !== null)
          if(isBps){
            cFreq.innerHTML = BpsCalc(selectedNoteFrequency(frequencies, notes[0]),selectedNoteFrequency(frequencies, notes[1]))+" Bps";
          }
          else{
            cFreq.innerHTML = BpmCalc(selectedNoteFrequency(frequencies, notes[0]),selectedNoteFrequency(frequencies, notes[1]));
          }
          
      }
      else{
        cNote.innerHTML = "---";
        if(cFreq !== null)
        cFreq.innerHTML = "--- Hz"
      }
    }
  }, [notes, frequencies]);

  return (
    <g id="CenterCercleInformation">
      <circle className="st29" fill="#F7FBFC" cx="178.5" cy="178.5" r="77.13"/>
      <text transform="matrix(1 0 0 1 178.5 178.5)" className="st25 st30">
        <tspan x="0" className="st30" textAnchor="middle" id="centerCircleNote"></tspan>
        <tspan x="0" className="st31" textAnchor="middle" id="centerCircleFrequency" dy="30"></tspan>
      </text>
    </g>
  );
};

export default CenterCircle;
