import React, { useEffect, useState } from 'react';
import PitchCircleSVG from './clickable/PitchCircleSVG';
import NonClickableProcedure from './nonClickable/NonClickableProcedure';

export enum TunerMode {
  HZ, BPM
}

type PitchCircleProps = {
  isHzMode: boolean,
  isClickable: boolean,
  freqA4: number,
  idTemperament: number
  stepProcedure?: number
};

const PitchCircle: React.FC<PitchCircleProps> = ({
  isHzMode, isClickable, freqA4, idTemperament, stepProcedure
}) => {

  const[procedure, setProcedure] = useState<Array<string>>([]);

  useEffect(() => {
    console.log(stepProcedure);
    if(stepProcedure === 0){
      let chaine = "A4;A4-F3;F3-C4;C4-G3;G3-D4;D4:A3;A3-E4;E4:C4;E4-B3;B3:G3;B3-F#4;F#4:D3;F3-Bb3;Bb3:D4;Bb3-Eb4;Eb4-G#3;G#3-C#4;C#4:A3;C#4:F4;F4-F3;G3-G4;G#3-G#4"
      console.log(chaine);
      let tabChaine = chaine.split(";");
      let tempProcedure = new Array;
      console.log(tabChaine);
      tabChaine.forEach(element => {
        if(element.includes(":")){
          let temp = element.split(":")
          tempProcedure.push([temp[0],temp[1],'control'])
        }
        else{
          if(element.includes("-")){
            let temp = element.split("-")
            tempProcedure.push([temp[0],temp[1],'tune'])
          }
          else{
            tempProcedure.push([element,"tune"]);
          }
        }
      })
      console.log(tempProcedure);
      setProcedure(tempProcedure);
      console.log(procedure);
    }
  },[stepProcedure])

  const [tunerMode, setTunerMode] = useState(TunerMode.HZ);

  const renderClickablePitchCircle = () =>{
    return(
    <PitchCircleSVG
      tunerMode={tunerMode}
      freqA4={freqA4}
      idTemperament={idTemperament}
    />)
  }

  const renderNonClickablePitchCircle = () =>{
    return(
    /*
    <NonClickablePitchCircleSVG
      tunerMode={tunerMode}
      freqA4={freqA4}
      idTemperament={idTemperament}
      centerCircle={false}
      stepProcedure={stepProcedure}
      procedure={procedure}
    />)
    */
    <NonClickableProcedure 
      tunerMode={tunerMode}
      freqA4={freqA4}
      idTemperament={idTemperament}
      centerCircle={true}
      stepProcedure={stepProcedure}
      procedure={procedure}
    />)
  }

  useEffect(() => {
    setTunerMode(isHzMode ? TunerMode.HZ : TunerMode.BPM);
  }, [isHzMode]);

  return (
    <div className="flex justify-center">
      {isClickable
        ? renderClickablePitchCircle()
        : renderNonClickablePitchCircle()
      }
    </div>
  );
};

export default PitchCircle;
function setStepProcedure(arg0: number): void {
  throw new Error('Function not implemented.');
}

