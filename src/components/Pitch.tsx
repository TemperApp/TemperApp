import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider } from '@ionic/react';
import SoundEngine from '../engine/SoundEngine';

import './Pitch.css';
import PitchNote from './PitchNote';

const Pitch: React.FC = () => {

  const [testDisplay, updateTestDisplay] = useState("Default");
  const [A_note, setA_Note] = useState<number>(440);

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
          name="A3"
          frequency={A_note}
        />
        <PitchNote
          name="B3"
          frequency={A_note}
        />
        <PitchNote
          name="B4"
          frequency={A_note}
        />
        <PitchNote
          name="C4"
          frequency={A_note}
        />
        <PitchNote
          name="D4"
          frequency={A_note}
        />
      </div>
    </div>
  );
};

export default Pitch;
