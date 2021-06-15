import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider } from '@ionic/react';
import SoundEngine from '../engine/SoundEngine';

import './Pitch.css';
import PitchNote from './PitchNote';
import {NoteState, NotesCircleState, TunerMode, Note} from './Types'

const Pitch: React.FC = () => {

  const [testDisplay, updateTestDisplay] = useState("Default");
  const [A_note, setA_Note] = useState<number>(440);
  const [selected, setSelected] = useState<NotesCircleState>({note: {name: "", octave: 0}, state: NoteState.Unselected, noteBpm1:{name: "", octave: 0}, noteBpm2:{name: "", octave: 0}} );
  const [tunerMode, setTunerMode] = useState<TunerMode>(TunerMode.TuningFork);

  const pitchPlay = () => {
    updateTestDisplay("play");
    SoundEngine.stopAndPlay(440);
  }

  const pitchStop = () => {
    updateTestDisplay("stop");
    SoundEngine.stop();
  }

  const switchTunerMode = () => {
    (tunerMode===TunerMode.TuningFork)?setTunerMode(TunerMode.Bpm):setTunerMode(TunerMode.TuningFork)
  }

  const displaySelected = () => {
    console.log(selected)
  }

  return (
    <div id="TunerContainer">
      <div>
        <p><strong>{testDisplay}</strong></p>
        <IonButton id="play" onClick={pitchPlay}>Play</IonButton>
        <IonButton id="stop" onClick={pitchStop}>Stop</IonButton>
        <IonButton id="switch" onClick={switchTunerMode}>Switch</IonButton>
        <IonButton id="play" onClick={displaySelected}>Note selectionné </IonButton>
        <p><strong>Mode : {tunerMode}</strong></p>
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
          active={selected.note.name === "A" && selected.note.octave === 3}
          name = {{name: "A", octave: 3}}
          state = {selected.state}
          frequency={A_note}
          mode = {tunerMode}
          noteBpm1 = {selected.noteBpm1}
          noteBpm2 = {selected.noteBpm2}
          onChange={({note, state, noteBpm1, noteBpm2}:NotesCircleState) => {setSelected({note,state,noteBpm1,noteBpm2})}}
        />
        <PitchNote
          active={selected.note.name === "B" && selected.note.octave === 3}
          name = {{name: "B", octave: 3}}
          state = {selected.state}
          frequency={A_note*0.95}
          mode = {tunerMode}
          noteBpm1 = {selected.noteBpm1}
          noteBpm2 = {selected.noteBpm2}
          onChange={({note, state, noteBpm1, noteBpm2}:NotesCircleState) => {setSelected({note,state,noteBpm1,noteBpm2})}}
        />
        <PitchNote
          active={selected.note.name === "C" && selected.note.octave === 3}
          name = {{name: "C", octave: 3}}
          state = {selected.state}
          frequency={A_note*0.90}
          mode = {tunerMode}
          noteBpm1 = {selected.noteBpm1}
          noteBpm2 = {selected.noteBpm2}
          onChange={({note, state, noteBpm1, noteBpm2}:NotesCircleState) => {setSelected({note,state,noteBpm1,noteBpm2})}}
        />
        <PitchNote
          active={selected.note.name === "D" && selected.note.octave === 3}
          name = {{name: "D", octave: 3}}
          state = {selected.state}
          frequency={A_note*0.85}
          mode = {tunerMode}
          noteBpm1 = {selected.noteBpm1}
          noteBpm2 = {selected.noteBpm2}
          onChange={({note, state, noteBpm1, noteBpm2}:NotesCircleState) => {setSelected({note,state,noteBpm1,noteBpm2})}}
        />
        <PitchNote
          active={selected.note.name === "E" && selected.note.octave === 3}
          name = {{name: "E", octave: 3}}
          state = {selected.state}
          frequency={A_note*0.80}
          mode = {tunerMode}
          noteBpm1 = {selected.noteBpm1}
          noteBpm2 = {selected.noteBpm2}
          onChange={({note, state, noteBpm1, noteBpm2}:NotesCircleState) => {setSelected({note,state,noteBpm1,noteBpm2})}}
        />
      </div>
    </div>
  );
};

export default Pitch;
