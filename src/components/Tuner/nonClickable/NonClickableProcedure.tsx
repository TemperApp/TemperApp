import React, { useEffect, useState } from "react";

//Components
import { Temperament } from '../../../model/Temperament/Temperament';
import EqualTemperament, { thirdEqualQ, fifthEqualQ } from '../../../model/Temperament/Equal';
import { freqs4, thirdQ, fifthQ } from '../../../model/Divergence';
import SoundEngine from '../../../engine/SoundEngine';
import { fetchTemperamentPropsById } from '../../../engine/DataAccessor';
import Note from '../../../model/Note/Note';

//Types 
import NotesMap from '../../../model/Note/NotesMap';
import { Notes } from '../../../model/Note/enums';
import { TunerMode } from '../PitchCircle';

//Styles 
import "../common/PitchCircleSVG.css";
import NonClickableProcedurePitchCircleSVG from "./NonClickableProcedurePitchCircleSVG";
import { IonPopover } from "@ionic/react";

export enum NoteStates {
  IDLE,
  SELECTED,
  OCTAVE,
}

export type ActiveNote = {
  note: Notes | null;
  state: NoteStates;
};

export type ActiveNotes = [ActiveNote, ActiveNote];

type NonClickableProcedureProps = {
  tunerMode: TunerMode,
  freqA4: number,
  idTemperament: number,
  centerCircle : boolean,
  stepProcedure?: number,
  procedure?: Array<string>,
  stepTune?: number,
  setStepTune?: (step: number) => void,
}

const NonClickableProcedure: React.FC<NonClickableProcedureProps> = ({
  tunerMode, freqA4, idTemperament, centerCircle, stepProcedure, procedure, stepTune, setStepTune
}) => {

  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [thirdQualities, setThirdQualities] = useState<NotesMap<number | null>>(thirdEqualQ());
  const [fifthQualities, setFifthQualities] = useState<NotesMap<number | null>>(fifthEqualQ());
  const [frequencies, setFrequencies] = useState<NotesMap<number>>(freqs4(440));
  const [noteDisplay, setNoteDisplay] = useState<ActiveNotes>([
    { note: null, state: NoteStates.IDLE },
    { note: null, state: NoteStates.IDLE },
  ]);

  const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined, text: "" });


  useEffect(() => {
    (async () => {
      const temp = await fetchTemperamentPropsById(idTemperament);
      setTemperament(temp);
      setFifthQualities(fifthQ(temp.cpExp5th));
      setThirdQualities(thirdQ(temp.csExp3rd));
      setFrequencies(freqs4(freqA4, temp.deviation));
    })();
  }, [idTemperament, freqA4]);

  useEffect(() => {
    // Update frequencies
    (async () => {
      if (!temperament)
        return;
      setFrequencies(freqs4(freqA4, temperament.deviation));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freqA4]);

  useEffect( () => {
    setStepTune!(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTemperament])

  useEffect( () => {
    if( (procedure![stepProcedure!].length) === 2){
      if(procedure![stepProcedure!][1] === "explanation"){
        setNoteDisplay([
          { note: null, state: NoteStates.IDLE },
          { note: null, state: NoteStates.IDLE },
        ])
        SoundEngine.stop();
        setShowPopover({ showPopover: true, event: undefined, text: procedure![stepProcedure!][0] })
      }
      else{
        let note1 = (Note.parse(procedure![stepProcedure!][0]))?.toNotes();
      let note1_octave = ((Note.parse(procedure![stepProcedure!][0]))?.octave === 4)? NoteStates.SELECTED : NoteStates.OCTAVE;
      setNoteDisplay([
        { note: note1!, state: note1_octave },
        { note: null, state: NoteStates.IDLE },
      ])
      const freq1 = (note1 === null)
        ? 0
        : frequencies[note1!]
          * (note1_octave === NoteStates.OCTAVE ? 2 : 1);
      (note1 !== null)
        ? SoundEngine.stopAndPlay(freq1)
        : SoundEngine.stop();
      }
    }
    else{
      if(stepTune! < 3){
        if(procedure![stepProcedure!][2] === "tune"){
          SoundEngine.setPulseBPS(0);
          if(stepTune === 0 || stepTune === 1){
            let note1 = (Note.parse(procedure![stepProcedure!][stepTune]))?.toNotes();
            let note1_octave = ((Note.parse(procedure![stepProcedure!][stepTune]))?.octave === 4)? NoteStates.SELECTED : NoteStates.OCTAVE;
            setNoteDisplay([
              { note: note1!, state: note1_octave },
              { note: null, state: NoteStates.IDLE },
            ])
            const freq1 = (note1 === null)
              ? 0
              : frequencies[note1!]
                * (note1_octave === NoteStates.OCTAVE ? 2 : 1);
            (note1 !== null)
              ? SoundEngine.stopAndPlay(freq1)
              : SoundEngine.stop();
            const timer = setTimeout(() => {
              SoundEngine.stop();
              setStepTune!(stepTune+1);
            }, 1000);
            return () => clearTimeout(timer);
          }
          else{
            let note1 = (Note.parse(procedure![stepProcedure!][0]))?.toNotes();
            let note1_octave = ((Note.parse(procedure![stepProcedure!][0]))?.octave === 4)? NoteStates.SELECTED : NoteStates.OCTAVE;
            let note2 = (Note.parse(procedure![stepProcedure!][1]))?.toNotes();
            let note2_octave = ((Note.parse(procedure![stepProcedure!][1]))?.octave === 4)? NoteStates.SELECTED : NoteStates.OCTAVE;
            setNoteDisplay([
              { note: note1!, state: note1_octave },
              { note: note2!, state: note2_octave },
            ])
            const freq1 = (note1 === null)
              ? 0
              : frequencies[note1!]
                * (note1_octave === NoteStates.OCTAVE ? 2 : 1);
            const freq2 = (note2 === null)
              ? 0
              : frequencies[note2!]
                * (note2_octave === NoteStates.OCTAVE ? 2 : 1);
            (note1 !== null)
              ? SoundEngine.stopAndPlay(freq1)
              : SoundEngine.stop();
            (note2 !== null)
              ? SoundEngine.stopAndPlay(freq2)
              : SoundEngine.stop();
            (freq1 !== null && freq2 !== null)
              ? (freq1>freq2)? SoundEngine.setPulseBPS(freq1-freq2): SoundEngine.setPulseBPS(freq2-freq1)
              : SoundEngine.setPulseBPS(0);
            const timer = setTimeout(() => {
              setStepTune!(stepTune!+1);
              SoundEngine.stop()
              SoundEngine.setPulseBPS(0);
            }, 5000);
            return () => clearTimeout(timer);
          }
        }
        else{
          console.log("CHECK !");
          let note1 = (Note.parse(procedure![stepProcedure!][0]))?.toNotes();
          let note1_octave = ((Note.parse(procedure![stepProcedure!][0]))?.octave === 4)? NoteStates.SELECTED : NoteStates.OCTAVE;
          let note2 = (Note.parse(procedure![stepProcedure!][1]))?.toNotes();
          let note2_octave = ((Note.parse(procedure![stepProcedure!][1]))?.octave === 4)? NoteStates.SELECTED : NoteStates.OCTAVE;
          setNoteDisplay([
            { note: note1!, state: note1_octave },
            { note: note2!, state: note2_octave },
          ])
          const freq1 = (note1 === null)
            ? 0
            : frequencies[note1!]
              * (note1_octave === NoteStates.OCTAVE ? 2 : 1);
          const freq2 = (note2 === null)
            ? 0
            : frequencies[note2!]
              * (note2_octave === NoteStates.OCTAVE ? 2 : 1);
          (note1 !== null)
            ? SoundEngine.stopAndPlay(freq1)
            : SoundEngine.stop();
          (note2 !== null)
            ? SoundEngine.stopAndPlay(freq2)
            : SoundEngine.stop();
          (freq1 !== null && freq2 !== null)
            ? (freq1>freq2)? SoundEngine.setPulseBPS(freq1-freq2): SoundEngine.setPulseBPS(freq2-freq1)
            : SoundEngine.setPulseBPS(0);
          const timer = setTimeout(() => {
            setStepTune!(3);
            SoundEngine.stop()
            SoundEngine.setPulseBPS(0);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepTune, stepProcedure])

  return(

    <>
      <IonPopover
        cssClass='my-custom-class'
        event={popoverState.event}
        isOpen={popoverState.showPopover}
        onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined, text: "" })}
      >
        <p>{popoverState.text}</p>
      </IonPopover>

      <NonClickableProcedurePitchCircleSVG
        tunerMode = {tunerMode}
        freqA4 = {freqA4}
        centerCircle  = {centerCircle}
        thirdQualities = {thirdQualities}
        fifthQualities = {fifthQualities}
        frequencies = {frequencies}
        temperament = {temperament}
        actives = {noteDisplay}
      />
    </>
  );

};

export default NonClickableProcedure;
