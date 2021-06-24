import React, { useEffect } from 'react';

//Styles
import "./CenterCircle.css";
import { selectedNoteFrequency, convertNoteToString, BpsCalc, BpmCalc } from './functions/frequencies';
import { ActiveNotes, NoteStates } from './PitchCircleSVG';

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

    if(notes.note1.state !== NoteStates.IDLE && notes.note2.state === NoteStates.IDLE){
      cNote.innerHTML = (notes.note1.state === NoteStates.SELECTED)
      ? convertNoteToString(notes.note1.note)+refOctave
      : convertNoteToString(notes.note1.note)+(refOctave+1);
      cFreq.innerHTML = selectedNoteFrequency(frequencies, notes.note1)+" Hz";
    }
    else{
      if(notes.note1.state !== NoteStates.IDLE && notes.note2.state !== NoteStates.IDLE){
        if(notes.note1.state === NoteStates.SELECTED){
          if(notes.note2.state === NoteStates.SELECTED){
            cNote.innerHTML = convertNoteToString(notes.note1.note)+refOctave+" - "+convertNoteToString(notes.note2.note)+refOctave;
          }
          else{
            cNote.innerHTML = convertNoteToString(notes.note1.note)+refOctave+" - "+convertNoteToString(notes.note2.note)+(refOctave+1);
          }
        }
        else{
          if(notes.note2.state === NoteStates.SELECTED){
            cNote.innerHTML = convertNoteToString(notes.note1.note)+(refOctave+1)+" - "+convertNoteToString(notes.note2.note)+refOctave;
          }
          else{
            cNote.innerHTML = convertNoteToString(notes.note1.note)+(refOctave+1)+" - "+convertNoteToString(notes.note2.note)+(refOctave+1);
          }
        }
        if(cFreq !== null)
          if(isBps){
            cFreq.innerHTML = BpsCalc(selectedNoteFrequency(frequencies, notes.note1),selectedNoteFrequency(frequencies, notes.note2))+" Bps";
          }
          else{
            cFreq.innerHTML = BpmCalc(selectedNoteFrequency(frequencies, notes.note1),selectedNoteFrequency(frequencies, notes.note2));
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
