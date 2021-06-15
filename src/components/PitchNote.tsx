import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { createGesture } from '@ionic/react';
import './Pitch.css';
import SoundEngine from '../engine/SoundEngine';
import {NoteState, NotesCircleState, TunerMode, Note} from './Types'
import Tuner from '../pages/Tuner';

type DivOrNullType = HTMLDivElement | null;

type PitchNoteProps = {
  active: boolean,
  name: Note,
  state: NoteState,
  frequency: number,
  mode : TunerMode,
  noteBpm1 : Note,
  noteBpm2 : Note,
  onChange: (ncs: NotesCircleState) => void,
}

const PitchNote: React.FC<PitchNoteProps> = ({ active, name, state, frequency, mode, noteBpm1, noteBpm2, onChange }) => {

  const pitchPlay = (f: number) => {
    SoundEngine.stopAndPlay(f);
  }

  const pitchStop = () => {
    SoundEngine.stop();
  }

  const NoteClassName = () => {
    console.log(" Note traitée "+name.name+name.octave+"  en mode : "+mode);
    if(mode === TunerMode.Bpm){
      console.log(noteBpm1);
      console.log(noteBpm2);
      console.log(name);
      if(noteBpm1 == name){
        if(noteBpm1.octave === 3){
          console.log("PA1");
          return "PitchActive"
        }
        else{
          console.log("OA1");
          return "OctaveActive"
        }
      }
      else{
        if(noteBpm2 === name){
          if(noteBpm2.octave === 3){
            console.log("PA2");
            return "PitchActive"
          }
          else{
            console.log("OA2");
            return "OctaveActive"
          }
        }
        else{
         console.log("Nothing1");
          return ""
        }
      }
    }
    else{
      if(mode === TunerMode.TuningFork){
        if(active){
          if(state == NoteState.Normal){
//            console.log("PA3");
            return "PitchActive"
          }
          else{
//            console.log("OA3");
            return "OctaveActive"
          }
        }
        else{
//          console.log("Nothing2");
          return ""
        }
      }else{
//        console.log("Nothing3");
        return ""
      }
    }
  }

  const note = useRef<DivOrNullType>(null);
  
  useEffect(() => {
    const c = note.current!;
    let beginPress: number;

    const gesture = createGesture({
      el: c,
      gestureName: "longpress",
      threshold: 0,
      onStart: () => { beginPress = Date.now(); console.log(noteBpm1); console.log(noteBpm2)  },
      onEnd: () => {
        if(Date.now() - beginPress < 500){
          pitchPlay(frequency)
          if(noteBpm1.octave === 0){
            console.log("première note");
            console.log(noteBpm1.octave);
            onChange({note : name, state : NoteState.Normal, noteBpm1 : {name: name.name, octave: name.octave}, noteBpm2 : {name: "", octave: 0} });
          }
          else{
            console.log("deuxième note")
            onChange({note : name, state : NoteState.Normal, noteBpm1 : {name: noteBpm1.name, octave: noteBpm1.octave}, noteBpm2 : {name: name.name, octave: name.octave} });
          }
        }
        else{
          pitchPlay(frequency*2)
          if(noteBpm1.octave === 0){
            onChange({note : name, state : NoteState.Octave, noteBpm1 : {name: name.name, octave: 4}, noteBpm2 : {name: "", octave: 0} });
          }
          else{
            onChange({note : name, state : NoteState.Octave, noteBpm1 : {name: noteBpm1.name, octave: noteBpm1.octave}, noteBpm2 : {name: name.name, octave: 4} });
          }
        };
      }
    });

    gesture.enable(true);
    
  }, [noteBpm1,noteBpm2]);


  return (

    <div id="note" 
      /*className={(active) ? ((state == NoteState.Normal)? "PitchActive" : "OctaveActive" ) : ""} ref={note}>
         {name} : {frequency}
      */
      className={NoteClassName()} ref={note}> {name.name.concat(name.octave.toString()) } : {frequency}   
    </div>
  );
};




export default PitchNote;
