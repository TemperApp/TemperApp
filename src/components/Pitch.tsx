
import * as Tone from 'tone'
import { useState, useRef, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider, createGesture } from '@ionic/react';

import './Pitch.css';

const Pitch: React.FC = () => {

    const A3 = useRef<HTMLDivElement | null>(null);

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
  
    useEffect(() => {
        let c = A3.current!;
        console.log(c);
        
        const gesture = createGesture({
          el: c,
          gestureName: "longpress",
          threshold:0,
          onStart: event => { onStart();},
          onEnd: event => { onEnd();}
        });
    
        let beginPress : number;
        // enable the gesture for the item
        

        const onStart = () => {
            console.log("Debut");
            beginPress = Date.now();
            console.log("Begin : "+beginPress);
        } 

        const onEnd = () => {
            let endPress = Date.now();
            console.log("End : "+beginPress);
            console.log(endPress-beginPress);
            if(endPress-beginPress>500){
                c.style.setProperty("background",switchColor());
            }
        } 

        const switchColor = () => {
            return((c.style.getPropertyValue("background") === "red")?"green":"red");
        }

        gesture.enable(true);

      }, []);


    return (
    <div className="container">
      <p><strong>{testDisplay}</strong></p>
      {/*
      <IonButton onClick={pitchInit}> Init </IonButton>
      */}
      <IonButton id="play" onClick={pitchPlay}> Play </IonButton>
      <IonButton id="stop" onClick={pitchStop}> Stop </IonButton>
      <IonItemDivider>Number type input</IonItemDivider>
          <IonItem>
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
          </IonItem>
          <div id="rectangle">
              <div id="A3" ref={A3}> A3 </div>
              <IonButton id="B3"> B3 </IonButton>
              <IonButton id="C3"> C3 </IonButton>
              <IonButton id="D3"> D3 </IonButton>
          </div>
    </div>
  );
};

export default Pitch;