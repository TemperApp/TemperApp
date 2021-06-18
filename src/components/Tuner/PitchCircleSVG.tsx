import React, { useEffect, useState } from 'react';

//Components
import FifthCircleSVG from './FifthCircleSVG';
import ThirdCircleSVG from './ThirdCircleSVG';
import PitchCircleButtonSVG from './PitchCircleButtonSVG';

//Types 
import { ActiveNote, ActiveNotes, ButtonPosition, StateList } from "./TunerTypes"
import { cpuUsage } from 'process';

type PitchCircleSVGProps = {
  tunerMode: string,
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({tunerMode}) => {

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

  const [currentNote, setCurrentNote] = useState<ActiveNotes>({note1 : {name: "", state: StateList.default}, note2 : {name: "", state: StateList.default}});

  let StateArray: {[key: string]: StateList} = {
    A: stateA,
    B: stateB,
    C: stateC,
    D: stateD,
    E: stateE,
    F: stateF,
    G: stateG,
    B_flat : stateB_flat,
    E_flat : stateE_flat,
    G_sharp : stateG_sharp,
    C_sharp : stateC_sharp,
    F_sharp : stateF_sharp
  }

  useEffect(() => {

    const cleanState = () =>{
      if(tunerMode === "TuningFork"){
        if(currentNote.note1.name !== "A" && stateA !== StateList.default)
          setStateA(StateList.default)
        if(currentNote.note1.name !== "B" && stateB !== StateList.default)
          setStateB(StateList.default)
        if(currentNote.note1.name !== "C" && stateC !== StateList.default)
          setStateC(StateList.default)
        if(currentNote.note1.name !== "D" && stateD !== StateList.default)
          setStateD(StateList.default)
        if(currentNote.note1.name !== "E" && stateE !== StateList.default)
          setStateE(StateList.default)
        if(currentNote.note1.name !== "F" && stateF !== StateList.default)
          setStateF(StateList.default)
        if(currentNote.note1.name !== "G" && stateG !== StateList.default)
          setStateG(StateList.default)
        if(currentNote.note1.name !== "B_flat" && stateB_flat !== StateList.default)
          setStateB_flat(StateList.default)
        if(currentNote.note1.name !== "E_flat" && stateE_flat !== StateList.default)
          setStateE_flat(StateList.default)
        if(currentNote.note1.name !== "G_sharp" && stateG_sharp !== StateList.default)
          setStateG_sharp(StateList.default)
        if(currentNote.note1.name !== "C_sharp" && stateC_sharp !== StateList.default)
          setStateC_sharp(StateList.default)
        if(currentNote.note1.name !== "F_sharp" && stateF_sharp !== StateList.default)
          setStateF_sharp(StateList.default)
      }
      else{

      }
    }
    
    if(tunerMode === "TuningFork"){
      console.log(currentNote);
      cleanState();
    }
    if(tunerMode === "Bpm"){
      console.log(currentNote);
      //cleanState();
    }
  
  }, [StateArray,currentNote]);


  return (
    
    <div id="Container_PitchCircleSVG">
      <svg xmlns="http://www.w3.org/2000/svg" width="361" height="360" fill="none" viewBox="0 0 361 360">
        
        {/* Les différents boutons de notes */}
        
        <PitchCircleButtonSVG 
          noteName = "A"
          position = {ButtonPosition.A}
          active = {StateArray.A}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateA(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "D"
          position = {ButtonPosition.D}
          active = {StateArray.D}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateD(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "G"
          position = {ButtonPosition.G}
          active = {StateArray.G}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateG(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "C"
          position = {ButtonPosition.C}
          active = {StateArray.C}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateC(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "F"
          position = {ButtonPosition.F}
          active = {StateArray.F}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateF(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "B_flat"
          position = {ButtonPosition.B_flat}
          active = {StateArray.B_flat}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateB_flat(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "E_flat"
          position = {ButtonPosition.E_flat}
          active = {StateArray.E_flat}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateE_flat(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG
          noteName = "G_sharp" 
          position = {ButtonPosition.G_sharp}
          active = {StateArray.G_sharp}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateG_sharp(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG 
          noteName = "C_sharp"
          position = {ButtonPosition.C_sharp}
          active = {StateArray.C_sharp}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateC_sharp(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG
          noteName = "F_sharp" 
          position = {ButtonPosition.F_sharp}
          active = {StateArray.F_sharp}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateF_sharp(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        <PitchCircleButtonSVG
          noteName = "B" 
          position = {ButtonPosition.B}
          active = {StateArray.B}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateB(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />
        
        <PitchCircleButtonSVG 
          noteName = "E"
          position = {ButtonPosition.E}
          active = {StateArray.E}
          tunerMode = {tunerMode} 
          onChange = { (state : StateList) => { setStateE(state)} } 
          currentNote = {({note1,note2}:ActiveNotes) => {setCurrentNote({note1,note2})}}
        />

        {/* Fin des notes  */}

        {/* Affichage des textes de notes */}
        {/* 
        <path fill="#233C3A" d="M178.786 68.112c.96 0 1.792.12 2.496.36a5.505 5.505 0 011.824.96c1.008.816 1.664 1.96 1.968 3.432l-3.024.552c-.256-.816-.656-1.472-1.2-1.968-.528-.512-1.192-.768-1.992-.768-1.088 0-1.968.456-2.64 1.368-.72.992-1.08 2.368-1.08 4.128 0 1.744.32 3.112.96 4.104.64.976 1.512 1.464 2.616 1.464s1.936-.264 2.496-.792c.56-.544.84-1.24.84-2.088h3.048c0 1.744-.56 3.096-1.68 4.056-1.104.944-2.624 1.416-4.56 1.416-2.064 0-3.704-.72-4.92-2.16-1.232-1.472-1.848-3.472-1.848-6 0-2.56.632-4.56 1.896-6 1.216-1.376 2.816-2.064 4.8-2.064zM234.163 95.528c-.672 1.872-1.96 2.808-3.864 2.808-1.952 0-3.56-.736-4.824-2.208-1.312-1.52-1.968-3.464-1.968-5.832 0-2.496.704-4.496 2.112-6 1.36-1.456 3.112-2.184 5.256-2.184 1.456 0 2.672.32 3.648.96.992.624 1.768 1.616 2.328 2.976l-2.904.672c-.848-1.36-1.92-2.04-3.216-2.04-1.184 0-2.168.504-2.952 1.512-.816 1.024-1.224 2.392-1.224 4.104 0 1.616.368 2.928 1.104 3.936.72.992 1.68 1.488 2.88 1.488 1.024 0 1.864-.328 2.52-.984.672-.672 1.008-1.592 1.008-2.76v-.096l-3.504-.072v-1.824h6.216V98h-2.304l-.312-2.472zM270.545 118.424c2.368 0 4.28.704 5.736 2.112 1.472 1.408 2.208 3.304 2.208 5.688 0 2.368-.736 4.256-2.208 5.664-1.456 1.408-3.368 2.112-5.736 2.112h-5.064v-15.576h5.064zm-2.208 13.008h2.208c1.472 0 2.664-.496 3.576-1.488.864-.96 1.296-2.2 1.296-3.72 0-1.552-.432-2.808-1.296-3.768-.896-.976-2.088-1.464-3.576-1.464h-2.208v10.44zM285.32 169.424h3.552L293.984 185h-3l-1.08-3.36h-5.784l-1.104 3.36h-3l5.304-15.576zm-.48 10.08h4.368l-2.16-6.696-2.208 6.696zM271.677 223.424h10.032v2.448h-7.2v4.104h6.744v2.448h-6.744v4.104h7.2V239h-10.032v-15.576zM231.451 262.424h6.288c1.728 0 3.064.408 4.008 1.224.896.752 1.344 1.72 1.344 2.904 0 .88-.248 1.632-.744 2.256-.48.624-1.16 1.064-2.04 1.32.88.176 1.608.576 2.184 1.2.576.608.864 1.392.864 2.352 0 1.92-.952 3.232-2.856 3.936-.72.256-1.632.384-2.736.384h-6.312v-15.576zm6.24 13.104c.912 0 1.568-.184 1.968-.552.416-.368.624-.856.624-1.464s-.216-1.096-.648-1.464c-.416-.384-1.064-.576-1.944-.576h-3.408v4.056h3.408zM234.283 269h3.336c.848 0 1.488-.184 1.92-.552.432-.368.648-.864.648-1.488 0-.64-.216-1.144-.648-1.512-.416-.384-1.048-.576-1.896-.576h-3.36V269zM168.537 279.424h9.816v2.448h-6.984v4.104h6.384v2.424h-6.384v6.6h-2.832v-15.576zm14.133 20.832v-3.216l-2.208 1.056v-2.904l2.208-1.032v-4.392l-2.208 1.056v-2.88l2.208-1.08v-3.768h2.088v2.856l2.616-1.272v-4.032h2.064v3.12l2.232-1.032v2.856l-2.232 1.056v4.416l2.232-.984v2.904l-2.232.96v4.104h-2.064v-3.192l-2.616 1.248v4.152h-2.088zm2.088-7.008l2.616-1.272v-4.392l-2.616 1.272v4.392zM118.086 260.112c.96 0 1.792.12 2.496.36a5.505 5.505 0 011.824.96c1.008.816 1.664 1.96 1.968 3.432l-3.024.552c-.256-.816-.656-1.472-1.2-1.968-.528-.512-1.192-.768-1.992-.768-1.088 0-1.968.456-2.64 1.368-.72.992-1.08 2.368-1.08 4.128 0 1.744.32 3.112.96 4.104.64.976 1.512 1.464 2.616 1.464s1.936-.264 2.496-.792c.56-.544.84-1.24.84-2.088h3.048c0 1.744-.56 3.096-1.68 4.056-1.104.944-2.624 1.416-4.56 1.416-2.064 0-3.704-.72-4.92-2.16-1.232-1.472-1.848-3.472-1.848-6 0-2.56.632-4.56 1.896-6 1.216-1.376 2.816-2.064 4.8-2.064zm10.627 21.144v-3.216l-2.208 1.056v-2.904l2.208-1.032v-4.392l-2.208 1.056v-2.88l2.208-1.08v-3.768h2.088v2.856l2.616-1.272v-4.032h2.064v3.12l2.232-1.032v2.856l-2.232 1.056v4.416l2.232-.984v2.904l-2.232.96v4.104h-2.064v-3.192l-2.616 1.248v4.152h-2.088zm2.088-7.008l2.616-1.272v-4.392l-2.616 1.272v4.392zM87.03 235.528c-.672 1.872-1.96 2.808-3.864 2.808-1.952 0-3.56-.736-4.824-2.208-1.312-1.52-1.968-3.464-1.968-5.832 0-2.496.704-4.496 2.112-6 1.36-1.456 3.112-2.184 5.256-2.184 1.456 0 2.672.32 3.648.96.992.624 1.768 1.616 2.328 2.976l-2.904.672c-.848-1.36-1.92-2.04-3.216-2.04-1.184 0-2.168.504-2.952 1.512-.816 1.024-1.224 2.392-1.224 4.104 0 1.616.368 2.928 1.104 3.936.72.992 1.68 1.488 2.88 1.488 1.024 0 1.864-.328 2.52-.984.672-.672 1.008-1.592 1.008-2.76v-.096l-3.504-.072v-1.824h6.216V238h-2.304l-.312-2.472zm7.698 7.728v-3.216l-2.208 1.056v-2.904l2.208-1.032v-4.392l-2.208 1.056v-2.88l2.208-1.08v-3.768h2.088v2.856l2.616-1.272v-4.032h2.064v3.12l2.232-1.032v2.856l-2.232 1.056v4.416l2.232-.984v2.904l-2.232.96v4.104h-2.064v-3.192l-2.616 1.248v4.152h-2.088zm2.088-7.008l2.616-1.272v-4.392l-2.616 1.272v4.392zM66.517 169.424h10.032v2.448h-7.2v4.104h6.744v2.448h-6.744v4.104h7.2V185H66.517v-15.576zm12.742 16.128v-14.856h1.872v8.4c.352-.432.744-.752 1.176-.96.448-.224.88-.336 1.296-.336.672 0 1.208.256 1.608.768.4.496.6 1.168.6 2.016 0 .992-.28 1.872-.84 2.64-.544.768-1.288 1.368-2.232 1.8a5.715 5.715 0 01-1.32.408c-.448.08-.928.12-1.44.12h-.72zm3.648-5.736c-.304 0-.616.12-.936.36-.32.24-.6.536-.84.888v2.784c.8-.176 1.416-.56 1.848-1.152.208-.256.36-.544.456-.864.112-.32.168-.64.168-.96 0-.384-.064-.656-.192-.816-.112-.16-.28-.24-.504-.24zM81.29 121.424h6.289c1.728 0 3.064.408 4.008 1.224.896.752 1.344 1.72 1.344 2.904 0 .88-.248 1.632-.744 2.256-.48.624-1.16 1.064-2.04 1.32.88.176 1.608.576 2.184 1.2.576.608.864 1.392.864 2.352 0 1.92-.952 3.232-2.856 3.936-.72.256-1.632.384-2.736.384H81.29v-15.576zm6.24 13.104c.913 0 1.569-.184 1.969-.552.416-.368.624-.856.624-1.464s-.216-1.096-.648-1.464c-.416-.384-1.064-.576-1.944-.576h-3.408v4.056h3.408zM84.124 128h3.336c.848 0 1.488-.184 1.92-.552.432-.368.648-.864.648-1.488 0-.64-.216-1.144-.648-1.512-.416-.384-1.048-.576-1.896-.576h-3.36V128zm11.386 9.552v-14.856h1.872v8.4c.352-.432.744-.752 1.176-.96.448-.224.88-.336 1.296-.336.672 0 1.208.256 1.608.768.4.496.6 1.168.6 2.016 0 .992-.28 1.872-.84 2.64-.544.768-1.288 1.368-2.232 1.8a5.715 5.715 0 01-1.32.408c-.448.08-.928.12-1.44.12h-.72zm3.648-5.736c-.304 0-.616.12-.936.36-.32.24-.6.536-.84.888v2.784c.8-.176 1.416-.56 1.848-1.152.208-.256.36-.544.456-.864.112-.32.168-.64.168-.96 0-.384-.064-.656-.192-.816-.112-.16-.28-.24-.504-.24zM122.67 83.424h9.816v2.448h-6.984v4.104h6.384V92.4h-6.384V99h-2.832V83.424z"/>
        */}
        <ThirdCircleSVG />
        <FifthCircleSVG />
      </svg>
    </div>
  );
};
export default PitchCircleSVG;