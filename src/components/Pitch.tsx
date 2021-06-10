
import * as Tone from 'tone'
import { useState, useRef, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider} from '@ionic/react';

import './Pitch.css';
import PitchNote from './PitchNote';

const Pitch: React.FC = () => {

    const [testDisplay, updateTestDisplay] = useState("Default");
    const [A_note, setA_Note] = useState<number>(440);

    const osc = new Tone.Oscillator({
        type: "sine",
        frequency: A_note,
        volume: -16
    }).toDestination();
    
    const pitchPlay = () => {
        updateTestDisplay("play");
        Tone.Transport.scheduleRepeat((time) => {
            console.log(time);
            osc.start(time).stop(time+0.3);
        }, '8n');
        Tone.Transport.start();
    }    

    const pitchStop = () => {
        updateTestDisplay("stop");        
        Tone.Transport.stop();
        Tone.Transport.cancel();
    }

    return (
    <div id="TunerContainer">
        <div>
            <p><strong>{testDisplay}</strong></p>
            <IonButton id="play" onClick={pitchPlay}> Play </IonButton>
            <IonButton id="stop" onClick={pitchStop}> Stop </IonButton>
        </div>
        <div>
            <IonItemDivider>Number type input</IonItemDivider>
            <IonInput 
                min="0" 
                max="44100" 
                type="number" 
                value={A_note} 
                placeholder="Enter Number" 
                onIonChange={(e) => {
                    if(e.detail.value !== A_note.toString()){
                        (e.detail.value !== undefined && e.detail.value !== null && e.detail.value !== "")?
                        setA_Note(parseFloat(e.detail.value!)):
                        setA_Note(0);
                    }
                }}>
            </IonInput>
            <p><strong>{A_note}</strong></p>
        </div>
        
        <div id="PitchContainer">
            <PitchNote 
              name = "A3"
              frequency = {A_note}
            />
            <PitchNote 
              name = "B3"
              frequency = {A_note}
            />
            <PitchNote 
              name = "B4"
              frequency = {A_note}
            />
            <PitchNote 
              name = "C4"
              frequency = {A_note}
            />
            <PitchNote 
              name = "D4"
              frequency = {A_note}
            />
        </div> 
    </div>
  );
};

export default Pitch;
