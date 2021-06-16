import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { createGesture } from '@ionic/react';
import './Pitch.css';
import SoundEngine from '../engine/SoundEngine';
import {NoteState, NotesCircleState, TunerMode, Note, NotesCircleStateBuffer} from './Types'
import Tuner from '../pages/Tuner';

type DivOrNullType = HTMLDivElement | null;

type PitchNoteProps = {
  active: boolean,
  name: Note,
  state: NotesCircleState,
  frequency: number,
  mode : TunerMode,
  noteBuffer : NotesCircleStateBuffer,
  onSetBuffer :(ncsb: NotesCircleStateBuffer) => void,
  onChange: (ncs: NotesCircleState) => void,
}

const PitchNote: React.FC<PitchNoteProps> = ({ active, name, state, frequency, mode, noteBuffer, onSetBuffer, onChange }) => {

  const pitchPlay = (f: number) => {
    SoundEngine.stopAndPlay(f);
  }

  const pitchStop = () => {
    SoundEngine.stop();
  }

  const NoteClassName = () => {

    console.log("note en cours : ")
    console.log(name)
    console.log(state);
    console.log(noteBuffer);
    /*
    console.log("note stockée 1 : ")
    console.log(noteBpm1);
    console.log("note stockée 2 : ")
    console.log(noteBpm2);
    */
    if(state.note.name === name.name && state.note.octave === name.octave){
      if(mode === TunerMode.TuningFork){
        if(state.state === NoteState.Normal){
          return "PitchActive"
        }
        else
          if(state.state === NoteState.Octave){
            return "OctaveActive"
          }
          else{
            return " "
          }
      }
      else{
        if(mode === TunerMode.Bpm){
          if(state.state === NoteState.Normal){
            if(noteBuffer.noteBpm1.octave === 0 && noteBuffer.noteBpm2.octave  === 0) // buffer vide
            {
              console.log("buffer vide");
              onSetBuffer({noteBpm1: {name:name.name,octave:name.octave}, noteBpm2: {name:"",octave:0}});
              return "BpmPitchActive"
            }
            else if(noteBuffer.noteBpm1.octave !== 0 && noteBuffer.noteBpm2.octave  === 0) // buffer contient déjà une valeur
            {
              console.log("buffer 1 - note");
              //let buffer = {noteBpm1: {name: noteBuffer.noteBpm1.name,octave: noteBuffer.noteBpm1.octave}, noteBpm2: {name:name.name,octave:name.octave}}
              onSetBuffer({noteBpm1: {name: noteBuffer.noteBpm1.name,octave: noteBuffer.noteBpm1.octave}, noteBpm2: {name:name.name,octave:name.octave}});
              return "BpmPitchActive"
            }
            else // buffer plein (on le vide et on remplace par la valeur de la note 
                // c'est la meme étape que le buffer vide mais peut etre qu'on souhaitera un fonctionnement différent à l'avenir)
            {
              console.log("buffer 2 - notes");
              onSetBuffer({noteBpm1: {name:name.name,octave:name.octave}, noteBpm2: {name:"",octave:0}});
              return "BpmPitchActive"
            }
          }
          else
            if(state.state === NoteState.Octave){
              if(noteBuffer.noteBpm1.octave === 0 && noteBuffer.noteBpm2.octave  === 0) // buffer vide
              {
                onSetBuffer({noteBpm1: {name:name.name,octave:4}, noteBpm2: {name:"",octave:0}});
                return "BpmPitchActive"
              }
              else if(noteBuffer.noteBpm1.octave !== 0 && noteBuffer.noteBpm2.octave  === 0) // buffer contient déjà une valeur
              {
                //let buffer = {noteBpm1: {name: noteBuffer.noteBpm1.name,octave: noteBuffer.noteBpm1.octave}, noteBpm2: {name:name.name,octave:name.octave}}
                onSetBuffer({noteBpm1: {name: noteBuffer.noteBpm1.name,octave: noteBuffer.noteBpm1.octave}, noteBpm2: {name:name.name,octave:4}});
                return "BpmPitchActive"
              }
              else // buffer plein (on le vide et on remplace par la valeur de la note 
                  // c'est la meme étape que le buffer vide mais peut etre qu'on souhaitera un fonctionnement différent à l'avenir)
              {
                onSetBuffer({noteBpm1: {name:name.name,octave:4}, noteBpm2: {name:"",octave:0}});
                return "BpmPitchActive"
              }
            }
            else{
              return " "
            }
        }
        else{
          return "";
        }
      }
    }
    else{
      return "";
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
      onStart: () => {beginPress = Date.now(); },
      onEnd: () => {
        if(Date.now() - beginPress < 500){
          console.log("clic court");
          onChange({note: name, state: NoteState.Normal});
        }
        else{
          //  onChange({note : name, state : NoteState.Octave, noteBpm1 : {name: name.name, octave: 4}, noteBpm2 : {name: "", octave: 0} });
          onChange({note: name, state: NoteState.Octave});
          console.log("clic long");
        };
      }
    });

    gesture.enable(true);
    
  }, []);


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
