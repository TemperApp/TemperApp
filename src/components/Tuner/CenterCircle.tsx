import { relative } from 'path';
import React, { useEffect, useRef } from 'react';

//Styles 
import "./CenterCircle.css";
import { ActiveNotes, StateList } from './TunerTypes';

type PitchCircleSVGProps = {
  notes: ActiveNotes,
}

type DivOrNullType = SVGPathElement | null;


const CenterCircle: React.FC<PitchCircleSVGProps> = ({notes}) => {

  const centerCircleNote = useRef<DivOrNullType>(null);
  const centerCircleFrequency = useRef<DivOrNullType>(null);

  useEffect(() => {
    const cNote = document.getElementById("centerCircleNote");
    const cFreq = document.getElementById("centerCircleFrequency");
    
    console.log("------------ partie centrale");
    if(cNote !== null){
      if(notes.note1.state !== StateList.default && notes.note2.state === StateList.default){
        if(notes.note1.state === StateList.selected){
          cNote.innerHTML = notes.note1.name+"3";
        }
        else{
          cNote.innerHTML = notes.note1.name+"4";
        }
      }
      else{
        if(notes.note1.state !== StateList.default && notes.note2.state !== StateList.default){
          if(notes.note1.state === StateList.selected){
            if(notes.note2.state === StateList.selected){
              cNote.innerHTML = notes.note1.name+"3 - "+notes.note2.name+"3";
            }
            else{
              cNote.innerHTML = notes.note1.name+"3 - "+notes.note2.name+"4";
            }
          }
          else{
            if(notes.note2.state === StateList.selected){
              cNote.innerHTML = notes.note1.name+"4 - "+notes.note2.name+"3";
            }
            else{
              cNote.innerHTML = notes.note1.name+"4 - "+notes.note2.name+"4";
            }
          }
        }
        else{
          cNote.innerHTML = "---";
        }
      }
    }
    if(cFreq !== null){
      cFreq.innerHTML = "2018 Hz";
    }
    console.log("------------");

  }, [notes]);

  return (
    <g id="CenterCercleInformation">
      <circle className="st29" fill="#F7FBFC" cx="178.5" cy="178.5" r="77.13"/>
      <text transform="matrix(1 0 0 1 178.5 178.5)" className="st25 st30">
        <tspan x="0" className="st30" text-anchor="middle" id="centerCircleNote"></tspan>
        <tspan x="0" className="st31" text-anchor="middle" id="centerCircleFrequency" dy="30"></tspan>
      </text>
      {/* 
      <text transform="matrix(1 0 0 1 151.1624 205.4129)" className="st25 st31">420 Hz</text>
      */}
      
    </g>
  );
};
export default CenterCircle;