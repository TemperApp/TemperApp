import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider } from '@ionic/react';
import SoundEngine from '../engine/SoundEngine';

import './Pitch.css';
import PitchNote from './PitchNote';
import {NoteState, NotesCircleState} from './Types'

const Pitch: React.FC = () => {

  const [testDisplay, updateTestDisplay] = useState("Default");
  const [A_note, setA_Note] = useState<number>(440);
  const [selected, setSelected] = useState<NotesCircleState>({note: "", state: NoteState.Unselected} );

  const pitchPlay = () => {
    updateTestDisplay("play");
    SoundEngine.stopAndPlay(440);
  }

  const pitchStop = () => {
    updateTestDisplay("stop");
    SoundEngine.stop();
  }

  return (
    <div id="TunerContainer">
      <div>
        <p><strong>{testDisplay}</strong></p>
        <IonButton id="play" onClick={pitchPlay}>Play</IonButton>
        <IonButton id="stop" onClick={pitchStop}>Stop</IonButton>
      </div>
      <div>
        <IonItemDivider>Number type input</IonItemDivider>
        <IonInput
          min="0"
          max="22050"
          type="number"
          value={A_note}
          placeholder="Enter Number"
          onIonChange={(e) => setA_Note(Number(e.detail.value))}>
        </IonInput>
        <p><strong>{A_note}</strong></p>
      </div>

      <div id="PitchContainer">
        <PitchNote
          active={"A3" === selected.note}
          name="A3"
          state = {selected.state}
          frequency={A_note}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={"B3" === selected.note}
          name="B3"
          state = {selected.state}
          frequency={A_note}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={"B4" === selected.note}
          name="B4"
          state = {selected.state}
          frequency={A_note}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={"C4" === selected.note}
          name="C4"
          state = {selected.state}
          frequency={A_note}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
        <PitchNote
          active={"D4" === selected.note}
          name="D4"
          state = {selected.state}
          frequency={A_note}
          onChange={({note, state}:NotesCircleState) => {setSelected({note,state})}}
        />
      </div>
    </div>
  );
};

export default Pitch;
