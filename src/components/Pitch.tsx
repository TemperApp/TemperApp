
import * as Tone from 'tone'
import { useState } from 'react';
import { IonButton, IonInput, IonItem, IonItemDivider } from '@ionic/react';

const Pitch: React.FC = () => {

    const [testDisplay, updateTestDisplay] = useState("Default");
    const [number, setNumber] = useState<number>(440);
    //const [endTime, updateEndTime] = useState(1); 

    const osc = new Tone.Oscillator({
        type: "sine",
        frequency: number,
        volume: -32
    }).toDestination();
    
/*
    document.querySelector('button')?.addEventListener('click', async () => {
        await Tone.start()
        console.log('audio is ready')
        updateTestDisplay("INIT");
    })
*/
/*
    const pitchInit = () => {
        Tone.start()
        updateTestDisplay("INIT");
    }
*/
    const pitchPlay = () => {
        updateTestDisplay("play");
        Tone.Transport.scheduleRepeat((time) => {
            console.log(time);
            osc.start(time).stop(time+0.25);
        }, '8n');
        Tone.Transport.start();
    }    

    const pitchStop = () => {
        updateTestDisplay("stop");        
        Tone.Transport.stop();
        //osc.stop();
        Tone.Transport.cancel();
    }

    const setNote = (n: string) => {
        console.log(n)
        if(n !== undefined){
            setNumber(parseFloat(n))
        }
    }
  
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
                value={number} 
                placeholder="Enter Number" 
                onIonChange={(e) => {
                    if(e.detail.value !== number.toString()){
                        (e.detail.value !== undefined && e.detail.value !== null && e.detail.value !== "")?
                        setNote(e.detail.value!):
                        setNote('0');
                    }
                }}>
            </IonInput>
            <p><strong>{number}</strong></p>
          </IonItem>
    </div>
  );
};

export default Pitch;