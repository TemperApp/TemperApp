import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { createGesture } from '@ionic/react';
import './Pitch.css';
import SoundEngine from '../engine/SoundEngine';
import {NoteState, NotesCircleState} from './Types'

type DivOrNullType = HTMLDivElement | null;

type PitchNoteProps = {
  active: boolean,
  name: string,
  state: NoteState,
  frequency: number,
  onChange: (ncs: NotesCircleState) => void,
}

const PitchNote: React.FC<PitchNoteProps> = ({ active, name, state, frequency, onChange }) => {

  const pitchPlay = (f: number) => {
    SoundEngine.stopAndPlay(f);
  }

  const pitchStop = () => {
    SoundEngine.stop();
  }

  const note = useRef<DivOrNullType>(null);
  
  useEffect(() => {
    const c = note.current!;
    let beginPress: number;
    console.log(c);

    const gesture = createGesture({
      el: c,
      gestureName: "longpress",
      threshold: 0,
      onStart: () => { beginPress = Date.now()  },
      onEnd: () => {
        if(Date.now() - beginPress < 500){
          pitchPlay(frequency)
          onChange({note : name, state : NoteState.Normal});
        }
        else{
          onChange({note : name, state : NoteState.Octave});
          pitchPlay(frequency*2)
        };
      }
    });
    gesture.enable(true);
  }, []);


  return (
    <div id="note" className={(active) ? ((state == NoteState.Normal)? "PitchActive" : "OctaveActive" ) : ""} ref={note}> {name} : {frequency}</div>
  );
};

export default PitchNote;
