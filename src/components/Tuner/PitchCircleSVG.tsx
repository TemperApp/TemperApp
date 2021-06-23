import React, { useEffect, useState } from 'react';

//Components
import FifthCircleSVG from './FifthCircleSVG';
import ThirdCircleSVG from './ThirdCircleSVG';
import PitchCircleButtonSVG from './PitchCircleButtonSVG';
import CenterCircle from './CenterCircle';
import { TemperamentDBType } from '../../engine/DB';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import { frequencies4, frequenciesEqual4, thirdQ, fifthQ, thirdEqualQ, fifthEqualQ } from './functions/frequencies';

//Types 
import { ActiveNotes, ButtonPosition, StateList } from "./TunerTypes"

//Styles 
import "./PitchCircleSVG.css";

type PitchCircleSVGProps = {
  tunerMode: string,
  freqA4: number,
  temperament: TemperamentDBType
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({
  tunerMode, freqA4, temperament
}) => {

  const [stateA, setStateA] = useState(StateList.default);
  const [stateB, setStateB] = useState(StateList.default);
  const [stateC, setStateC] = useState(StateList.default);
  const [stateD, setStateD] = useState(StateList.default);
  const [stateE, setStateE] = useState(StateList.default);
  const [stateF, setStateF] = useState(StateList.default);
  const [stateG, setStateG] = useState(StateList.default);
  const [stateB_flat, setStateB_flat] = useState(StateList.default);
  const [stateE_flat, setStateE_flat] = useState(StateList.default);
  const [stateG_sharp, setStateG_sharp] = useState(StateList.default);
  const [stateC_sharp, setStateC_sharp] = useState(StateList.default);
  const [stateF_sharp, setStateF_sharp] = useState(StateList.default);

  const states: {[key: string]: StateList} = {
    A: stateA, B: stateB, C: stateC, D: stateD,
    E: stateE, F: stateF, G: stateG, B_flat : stateB_flat,
    E_flat : stateE_flat, G_sharp : stateG_sharp, C_sharp : stateC_sharp, F_sharp : stateF_sharp,
  };

  const [currentNotes, setCurrentNotes] = useState<ActiveNotes>(
    {note1 : {name: "", state: StateList.default},
     note2 : {name: "", state: StateList.default}});
  const [currentTunerMode, setCurrentTunerMode] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentFreq, setCurrentFreq] = useState(0);
  const [thirdQuality, setThirdQuality] = useState<{[key: string]: number | null}>(thirdEqualQ());
  const [fifthQuality, setFifthQuality] = useState<{[key: string]: number | null}>(fifthEqualQ());

  const [frequencies, setFrequencies] = useState<{[key: string] : number}>(frequenciesEqual4(440));

  useEffect(() => {

    const temperamentProps = async () =>{
      const temp = await fetchTemperamentPropsById(temperament.idTemperament);
      if (frequencies !== frequencies4(freqA4, temp.deviation)){
        setFrequencies(frequencies4(freqA4, temp.deviation));
        setFifthQuality(fifthQ(temp.cpExp5th));
        setThirdQuality(thirdQ(temp.csExp3rd));
      }
    }

    const cleanState = () =>{
      if (currentTunerMode !== tunerMode){
        setCurrentTunerMode(tunerMode);
        setCurrentNotes(
          {note1: {name: "", state: StateList.default},
           note2: {name: "", state: StateList.default}});
      }

      if (tunerMode === "TuningFork"){
        if (currentNotes.note1.name !== "A" && stateA !== StateList.default)
          setStateA(StateList.default)
        if (currentNotes.note1.name !== "B" && stateB !== StateList.default)
          setStateB(StateList.default)
        if (currentNotes.note1.name !== "C" && stateC !== StateList.default)
          setStateC(StateList.default)
        if (currentNotes.note1.name !== "D" && stateD !== StateList.default)
          setStateD(StateList.default)
        if (currentNotes.note1.name !== "E" && stateE !== StateList.default)
          setStateE(StateList.default)
        if (currentNotes.note1.name !== "F" && stateF !== StateList.default)
          setStateF(StateList.default)
        if (currentNotes.note1.name !== "G" && stateG !== StateList.default)
          setStateG(StateList.default)
        if (currentNotes.note1.name !== "B_flat" && stateB_flat !== StateList.default)
          setStateB_flat(StateList.default)
        if (currentNotes.note1.name !== "E_flat" && stateE_flat !== StateList.default)
          setStateE_flat(StateList.default)
        if (currentNotes.note1.name !== "G_sharp" && stateG_sharp !== StateList.default)
          setStateG_sharp(StateList.default)
        if (currentNotes.note1.name !== "C_sharp" && stateC_sharp !== StateList.default)
          setStateC_sharp(StateList.default)
        if (currentNotes.note1.name !== "F_sharp" && stateF_sharp !== StateList.default)
          setStateF_sharp(StateList.default)
      }
      else{
        if ( (currentNotes.note1.name !== "A" && currentNotes.note2.name !== "A" ) && stateA !== StateList.default)
          setStateA(StateList.default)
        if ( (currentNotes.note1.name !== "B" && currentNotes.note2.name !== "B" ) && stateB !== StateList.default)
          setStateB(StateList.default)
        if ( (currentNotes.note1.name !== "C" && currentNotes.note2.name !== "C" ) && stateC !== StateList.default)
          setStateC(StateList.default)
        if ( (currentNotes.note1.name !== "D" && currentNotes.note2.name !== "D" ) && stateD !== StateList.default)
          setStateD(StateList.default)
        if ( (currentNotes.note1.name !== "E" && currentNotes.note2.name !== "E" ) && stateE !== StateList.default)
          setStateE(StateList.default)
        if ( (currentNotes.note1.name !== "F" && currentNotes.note2.name !== "F" ) && stateF !== StateList.default)
          setStateF(StateList.default)
        if ( (currentNotes.note1.name !== "G" && currentNotes.note2.name !== "G" ) && stateG !== StateList.default)
          setStateG(StateList.default)
        if ( (currentNotes.note1.name !== "B_flat" && currentNotes.note2.name !== "B_flat" ) && stateB_flat !== StateList.default)
          setStateB_flat(StateList.default)
        if ( (currentNotes.note1.name !== "E_flat" && currentNotes.note2.name !== "E_flat" ) && stateE_flat !== StateList.default)
          setStateE_flat(StateList.default)
        if ( (currentNotes.note1.name !== "G_sharp" && currentNotes.note2.name !== "G_sharp" ) && stateG_sharp !== StateList.default)
          setStateG_sharp(StateList.default)
        if ( (currentNotes.note1.name !== "C_sharp" && currentNotes.note2.name !== "C_sharp" ) && stateC_sharp !== StateList.default)
          setStateC_sharp(StateList.default)
        if ( (currentNotes.note1.name !== "F_sharp" && currentNotes.note2.name !== "F_sharp" ) && stateF_sharp !== StateList.default)
          setStateF_sharp(StateList.default)
      }
    }

    cleanState();

    // Prevent refresh /20
    if (currentTemp !== temperament.name){
      temperamentProps();
      setCurrentTemp(temperament.name);
    }
    if (currentFreq !== freqA4){
      temperamentProps();
      setCurrentFreq(freqA4);
    }
    
  }, [currentNotes, currentTemp, currentFreq, currentTunerMode,
    temperament, freqA4, frequencies, tunerMode, stateA, stateB, stateC,
    stateD, stateE, stateF, stateG, stateB_flat, stateE_flat, stateG_sharp,
    stateC_sharp, stateF_sharp,]);


  return (
    <div id="Container_PitchCircleSVG">
      <svg id="PitchCircleSVG" xmlns="http://www.w3.org/2000/svg" width="370" height="370" viewBox="0 0 357.06 357.06">
        <PitchCircleButtonSVG 
          notesSymbol = "A"
          position = {ButtonPosition.A}
          active = {states.A}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateA} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "D"
          position = {ButtonPosition.D}
          active = {states.D}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateD} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "G"
          position = {ButtonPosition.G}
          active = {states.G}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateG} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "C"
          position = {ButtonPosition.C}
          active = {states.C}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateC} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "F"
          position = {ButtonPosition.F}
          active = {states.F}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateF} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "B_flat"
          position = {ButtonPosition.B_flat}
          active = {states.B_flat}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateB_flat} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "E_flat"
          position = {ButtonPosition.E_flat}
          active = {states.E_flat}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateE_flat} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG
          notesSymbol = "G_sharp" 
          position = {ButtonPosition.G_sharp}
          active = {states.G_sharp}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateG_sharp} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG 
          notesSymbol = "C_sharp"
          position = {ButtonPosition.C_sharp}
          active = {states.C_sharp}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateC_sharp} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG
          notesSymbol = "F_sharp" 
          position = {ButtonPosition.F_sharp}
          active = {states.F_sharp}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateF_sharp} 
          setCurrentNotes = {setCurrentNotes}
        />

        <PitchCircleButtonSVG
          notesSymbol = "B" 
          position = {ButtonPosition.B}
          active = {states.B}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateB} 
          setCurrentNotes = {setCurrentNotes}
        />
        
        <PitchCircleButtonSVG 
          notesSymbol = "E"
          position = {ButtonPosition.E}
          active = {states.E}
          tunerMode = {tunerMode} 
          listNotes = {currentNotes}
          onChange = {setStateE} 
          setCurrentNotes = {setCurrentNotes}
        />

        <text className="cls-3" transform="translate(278.22 247.59)">E</text>
        <text className="cls-3" transform="translate(231.53 293.77)">B</text>
        <text className="cls-3" transform="translate(166.28 310.6)">F<tspan className="cls-4" x="13.12" y="0">♯</tspan></text>
        <text className="cls-3" transform="translate(104.23 293.77)">C<tspan className="cls-4" x="15.2" y="0">♯</tspan></text>
        <text className="cls-3" transform="translate(56.47 247.59)">G<tspan className="cls-4" x="16.25" y="0">♯</tspan></text>
        <text className="cls-3" transform="translate(48.05 185.52)"><tspan className="cls-6">E</tspan><tspan className="cls-7" x="14.08" y="0">♭</tspan></text>
        <text className="cls-3" transform="translate(60.97 124.58)"><tspan className="cls-6">B</tspan><tspan className="cls-7" x="15.55" y="0">♭</tspan></text>
        <text className="cls-3" transform="translate(106.28 80.52)">F</text>
        <text className="cls-3" transform="translate(170.28 62.27)">C</text>
        <text className="cls-3" transform="translate(231.53 80.52)">G</text>
        <text className="cls-3" transform="translate(278.22 124.58)">D</text>
        <text className="cls-3" transform="translate(294.3 185.52)">A</text>

        <ThirdCircleSVG 
          quality = {thirdQuality}
        />
        <FifthCircleSVG 
          quality = {fifthQuality}
        />
        <CenterCircle 
          notes = {currentNotes}
          frequencies = {frequencies}
        />
      </svg>
    </div>
  );
};

export default PitchCircleSVG;
