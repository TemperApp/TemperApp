import React, { useEffect } from 'react';
import { IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { TemperamentDBType } from '../../engine/DB';
import Note from '../../model/Note/Note';

type TunerHeaderPianoProps = {
  pianoColor: Array<string>,
  procStepIdx: number
}

const TunerHeaderPiano: React.FC<TunerHeaderPianoProps> = ({
  pianoColor, procStepIdx
}) => {
  //console.info('🔹 [TunerHeader]: Render')
  useEffect(() => {
    console.info(procStepIdx)
    console.info(pianoColor)
  }, [pianoColor, procStepIdx])

  const isColored = (note: string) => {
    for(let i = 0; i<procStepIdx; i++){
      if(pianoColor[i] === note){
        return "pianoKeysColored";
      }
    }
    return "pianoKeys"
  }

  const isBlackKeysColored = (note: string) => {
    for(let i = 0; i<procStepIdx; i++){
      if(pianoColor[i] === note){
        return "pianoKeysColored";
      }
    }
    return "pianoBlackKeys"
  }

  return (
    <section className="pt-3 px-4 w-full flex items-center justify-between testHeader">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 351.1 94.6">
        <rect id="C3" y="0.58"            className={isColored("C3")} width="25.08" height="94.62"/>
        <rect id="D3" x="25.08" y="0.58"  className={isColored("D3")} width="25.08" height="94.62"/>
        <rect id="E3" x="50.16" y="0.58"  className={isColored("E3")} width="25.08" height="94.62"/>
        <rect id="F3" x="75.24" y="0.58"  className={isColored("F3")} width="25.08" height="94.62"/>
        <rect id="G3" x="100.32" y="0.58" className={isColored("G3")} width="25.08" height="94.62"/>
        <rect id="A3" x="125.4" y="0.58"  className={isColored("A3")} width="25.08" height="94.62"/>
        <rect id="B3" x="150.48" y="0.58" className={isColored("B3")} width="25.08" height="94.62"/>
        <rect id="C4" x="175.56" y="0.58" className={isColored("C4")} width="25.08" height="94.62"/>
        <rect id="D4" x="200.64" y="0.58" className={isColored("D4")} width="25.08" height="94.62"/>
        <rect id="E4" x="225.72" y="0.58" className={isColored("E4")} width="25.08" height="94.62"/>
        <rect id="F4" x="250.8" y="0.58"  className={isColored("F4")} width="25.08" height="94.62"/>
        <rect id="G4" x="275.88" y="0.58" className={isColored("G4")} width="25.08" height="94.62"/>
        <rect id="A4" x="300.96" y="0.58" className={isColored("A4")} width="25.08" height="94.62"/>
        <rect id="B4" x="326.04" y="0.58" className={isColored("B4")} width="25.08" height="94.62"/>
        <rect id="G3_sharp" x="117.06" y="0.58" className={isBlackKeysColored("G♯3")} width="16.67" height="56"/>
        <rect id="G4_sharp" x="292.6" y="0.58" className={isBlackKeysColored("G♯4")} width="16.67" height="56"/>
        <rect id="E4_flat" x="219.93" y="0.58" className={isBlackKeysColored("E♭4")} width="16.67" height="56"/>
        <rect id="C4_sharp" x="189.41" y="0.58" className={isBlackKeysColored("C♯4")} width="16.67" height="56"/>
        <rect id="B3_flat" x="145.02" y="0.58" className={isBlackKeysColored("B♭3")} width="16.67" height="56"/>
        <rect id="F3_sharp" x="89.02" y="0.58" className={isBlackKeysColored("F♯3")} width="16.67" height="56"/>
        <rect id="B4_flat" x="320.63" y="0.58" className={isBlackKeysColored("b♭4")} width="16.67" height="56"/>
        <rect id="F4_sharp" x="264.63" y="0.58" className={isBlackKeysColored("F♯4")} width="16.67" height="56"/>
        <rect id="E3_flat" x="44.8" y="0.58" className={isBlackKeysColored("E♭3")} width="16.67" height="56"/>
        <rect id="C3_sharp" x="13.76" y="0.58" className={isBlackKeysColored("C♯3")} width="16.67" height="56"/>
        <text transform="matrix(1 0 0 1 3.5442 91.4545)" className="st3 st4">C3</text>
        <text transform="matrix(1 0 0 1 28.7934 91.4545)" className="st3 st4">D3</text>
        <text transform="matrix(1 0 0 1 54.1743 91.4545)" className="st3 st4">E3</text>
        <text transform="matrix(1 0 0 1 79.1915 91.4545)" className="st3 st4">F3</text>
        <text transform="matrix(1 0 0 1 104.3668 91.4545)" className="st3 st4">G3</text>
        <text transform="matrix(1 0 0 1 129.0335 91.4545)" className="st3 st4">A3</text>
        <text transform="matrix(1 0 0 1 154.1673 91.4545)" className="st3 st4">B3</text>
        <text transform="matrix(1 0 0 1 179.5006 91.4545)" className="st3 st4">C4</text>
        <text transform="matrix(1 0 0 1 204.8343 91.4545)" className="st3 st4">D4</text>
        <text transform="matrix(1 0 0 1 229.8711 91.4545)" className="st3 st4">E4</text>
        <text transform="matrix(1 0 0 1 254.4959 91.4545)" className="st3 st4">F4</text>
        <text transform="matrix(1 0 0 1 280.0529 91.4545)" className="st3 st4">G4</text>
        <text transform="matrix(1 0 0 1 305.1549 91.4545)" className="st3 st4">A4</text>
        <text transform="matrix(1 0 0 1 329.8343 91.4545)" className="st3 st4">B4</text>
      </svg>

    </section>
  );
};

export default React.memo(
  TunerHeaderPiano,
  (prevProps, nextProps) =>
    prevProps.procStepIdx === nextProps.procStepIdx 
);
