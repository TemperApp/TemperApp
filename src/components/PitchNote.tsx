
import * as Tone from 'tone'
import { useState, useRef, useEffect } from 'react';
import { createGesture } from '@ionic/react';

import './Pitch.css';

const PitchNote: React.FC< {name:string, frequency:number} > = ({name, frequency}) => {

    const note = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
        let c = note.current!;
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
                console.log(c.classList);
                (c.classList.contains("PitchActive"))?c.classList.remove("PitchActive"):c.classList.add("PitchActive"); 
            }
        } 
        
        gesture.enable(true);

      }, []);


    return (
        <div id="note" ref={note}> {name} : {frequency}</div>
    );
};

export default PitchNote;