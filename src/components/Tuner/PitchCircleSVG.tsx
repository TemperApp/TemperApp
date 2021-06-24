import React, { useEffect, useState } from 'react';

//Components
import FifthCircleSVG from './FifthCircleSVG';
import ThirdCircleSVG from './ThirdCircleSVG';
import PitchCircleButtonSVG from './PitchCircleButtonSVG';
import CenterCircle from './CenterCircle';
import { Temperament } from '../../model/Temperament';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import { frequencies4, frequenciesEqual4, thirdQ, fifthQ, thirdEqualQ, fifthEqualQ } from './functions/frequencies';

//Types 
import { PitchCircleButtonSVGPos as btnPosition } from "./PitchCircleButtonSVGPos"

//Styles 
import "./PitchCircleSVG.css";
import { Notes } from '../../model/Note';
import SoundEngine from '../../engine/SoundEngine';

export enum NoteStates {
  IDLE, SELECTED, OCTAVE,
};

export type NotesOrEmptyStr = Notes | "";

export type ActiveNote = {
    note : NotesOrEmptyStr,
    state : NoteStates,
};

export type ActiveNotes = {
    note1 : ActiveNote,
    note2 : ActiveNote,
};

type PitchCircleSVGProps = {
  tunerMode: string,
  freqA4: number,
  idTemperament: number
}

const PitchCircleSVG: React.FC<PitchCircleSVGProps> = ({
  tunerMode, freqA4, idTemperament
}) => {

  const [currentNotes, setCurrentNotes] = useState<ActiveNotes>(
    {note1 : {note: "", state: NoteStates.IDLE},
     note2 : {note: "", state: NoteStates.IDLE}});

  const [temperament, setTemperament] = useState<Temperament>();
  const [thirdQuality, setThirdQuality] = useState<{[key: string]: number | null}>(thirdEqualQ());
  const [fifthQuality, setFifthQuality] = useState<{[key: string]: number | null}>(fifthEqualQ());

  const [frequencies, setFrequencies] = useState<{[key: string] : number}>(frequenciesEqual4(440));

  const [C       , setC      ] = useState<NoteStates>(NoteStates.IDLE);
  const [C_sharp , setC_sharp] = useState<NoteStates>(NoteStates.IDLE);
  const [D       , setD      ] = useState<NoteStates>(NoteStates.IDLE);
  const [E_flat  , setE_flat ] = useState<NoteStates>(NoteStates.IDLE);
  const [E       , setE      ] = useState<NoteStates>(NoteStates.IDLE);
  const [F       , setF      ] = useState<NoteStates>(NoteStates.IDLE);
  const [F_sharp , setF_sharp] = useState<NoteStates>(NoteStates.IDLE);
  const [G       , setG      ] = useState<NoteStates>(NoteStates.IDLE);
  const [G_sharp , setG_sharp] = useState<NoteStates>(NoteStates.IDLE);
  const [A       , setA      ] = useState<NoteStates>(NoteStates.IDLE);
  const [B_flat  , setB_flat ] = useState<NoteStates>(NoteStates.IDLE);
  const [B       , setB      ] = useState<NoteStates>(NoteStates.IDLE);

  const states = {C, C_sharp, D, E_flat, E, F, F_sharp, G, G_sharp, A, B_flat, B};
  
  const setStates = (note: Notes, state: NoteStates) => {
    switch (note) {
      case Notes.C:       return setC(state);
      case Notes.C_sharp: return setC_sharp(state);
      case Notes.D:       return setD(state);
      case Notes.E_flat:  return setE_flat(state);
      case Notes.E:       return setE(state);
      case Notes.F:       return setF(state);
      case Notes.F_sharp: return setF_sharp(state);
      case Notes.G:       return setG(state);
      case Notes.G_sharp: return setG_sharp(state);
      case Notes.A:       return setA(state);
      case Notes.B_flat:  return setB_flat(state);
      case Notes.B:       return setB(state);
    }
  };


  useEffect(() => {
    setCurrentNotes(
      {note1: {note: "", state: NoteStates.IDLE},
       note2: {note: "", state: NoteStates.IDLE}}
    );
  }, [tunerMode]);


  useEffect(() => {
    (async () => {
      const temp = await fetchTemperamentPropsById(idTemperament);
      setTemperament(temp);
      setFifthQuality(fifthQ(temp.cpExp5th));
      setThirdQuality(thirdQ(temp.csExp3rd));
      setFrequencies(frequencies4(freqA4, temp.deviation));
    })();
  }, [idTemperament]);


  useEffect(() => {
    (async () => {
      if (!temperament)
        return;
      setFrequencies(frequencies4(freqA4, temperament.deviation));
    })();
  }, [freqA4]);
  

  useEffect(() => {
    // Clean states
    for (const note in states) {
      const n = note as Notes;
      if (currentNotes.note1.note !== note
          && currentNotes.note2.note !== note
          && states[n] !== NoteStates.IDLE
      ) {
        setStates(n, NoteStates.IDLE);
      }
    }
    
  }, [currentNotes, states]);

  useEffect(() => {
    const freq1 = (currentNotes.note1.note === "")
    ? 0
    : frequencies[currentNotes.note1.note]
      * (currentNotes.note1.state === NoteStates.OCTAVE ? 2 : 1);

    const freq2 = (currentNotes.note2.note === "")
    ? 0
    : frequencies[currentNotes.note2.note]
      * (currentNotes.note2.state === NoteStates.OCTAVE ? 2 : 1);

    if (currentNotes.note1.note !== "")
      SoundEngine.stopAndPlay(freq1);
    else
      SoundEngine.stop();

    if (currentNotes.note2.note !== "")
      SoundEngine.setPulseBPS(Math.abs(freq1 - freq2));
    else
      SoundEngine.setPulseBPS(0);
    
  }, [currentNotes, frequencies]);


  return (
    <div id="Container_PitchCircleSVG">
      <svg id="PitchCircleSVG" xmlns="http://www.w3.org/2000/svg" width="370" height="370" viewBox="0 0 357.06 357.06">
        
      { Object.keys(states).map((note) => {
          const n = note as Notes;
          return (
            <PitchCircleButtonSVG
              key = {n}
              notesSymbol = {n}
              position = {btnPosition[n]}
              active = {states[n]}
              tunerMode = {tunerMode} 
              listNotes = {currentNotes}
              onChange = {(state: NoteStates) => setStates(n, state)} 
              setCurrentNotes = {setCurrentNotes}
            />);
        })}

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
