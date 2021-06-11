import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { createGesture } from '@ionic/react';
import './Pitch.css';

type DivOrNullType = HTMLDivElement | null;

type PitchNoteProps = {
  active: boolean,
  name: string,
  frequency: number,
  onChange: (name: string) => void,
}

const PitchNote: React.FC<PitchNoteProps> = ({ active, name, frequency, onChange }) => {

  const note = useRef<DivOrNullType>(null);
  
  useEffect(() => {
    const c = note.current!;
    let beginPress: number;
    console.log(c);

    const gesture = createGesture({
      el: c,
      gestureName: "longpress",
      threshold: 0,
      onStart: () => { beginPress = Date.now() },
      onEnd: () => {
        if (Date.now() - beginPress < 500)
          return;

        onChange(name);
      }
    });
    gesture.enable(true);
  }, []);


  return (
    <div id="note" className={(active) ? "PitchActive" : ""} ref={note}> {name} : {frequency}</div>
  );
};

export default PitchNote;
