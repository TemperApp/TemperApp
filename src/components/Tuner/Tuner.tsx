import React, { useState, useEffect, useContext, useCallback } from "react";
import { IonGrid, IonRow } from "@ionic/react";

import SettingsContext from "../../store/settings-context";
import GlobalStatesContext from "../../store/global-states-context";
import useTemperTone from "../../hooks/useTemperTone";

import TunerHeaderInputs from "./TunerHeaderInputs";
import TunerHeaderKeyboard from "./TunerHeaderKeyboard";
import TunerFooter from "./TunerFooter";
import PitchCircle from "./PitchCircle";

import EqualTemperament from "../../model/Temperament/Equal";
import { Temperament } from "../../model/Temperament/Temperament";
import { ProcAction, Procedure } from "../../model/Procedure";

import { fetchTemperamentPropsById, fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";

import "./Tuner.css";

export enum TuneMode {
  BEATS = 'Battements', // TODO Find a better way to print text
  PITCHPIPE = 'Pitch pipe',
  PROCEDURE = 'Procédure',
}

type TunerProps = {
  setMainTitle: (t: string) => void,
  setSubTitle: (t: string) => void,
}

const Tuner: React.FC<TunerProps> = ({
  setMainTitle,
  setSubTitle,
}) => {

  const settings = useContext(SettingsContext);
  const global = useContext(GlobalStatesContext);
  const TemperTone = useTemperTone();

  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [tuneMode, setTuneMode] = useState(TuneMode.BEATS);
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [temperamentsList, setTemperamentsList] = useState<TemperamentDBType[]>([]);
  const [freqA4, setFreqA4] = useState<number>(settings.freqA4);
  const [proc, setProc] = useState<Procedure | null>(null);
  const [procStepIdx, setProcStepIdx] = useState<number>(0);
  const [procRepeatCount, setProcRepeatCount] = useState<number>(0);
  const [keyboardColor, setKeyboardColor] = useState<Array<string>>([]);


  useEffect(() => {
    setFreqA4(settings.freqA4)
  }, [settings.freqA4]);

  useEffect(() => {
    TemperTone.toggleMute(isMuted);
  }, [TemperTone, isMuted]);

  useEffect(() => {
    if (tuneMode === TuneMode.PROCEDURE) {
      setSubTitle("Procédure d'accord");
      setMainTitle(temperament.nameFR);
    }
    else {
      setSubTitle("Accordeur");
      setMainTitle(tuneMode);
    }
  }, [tuneMode, setSubTitle, setMainTitle, temperament.nameFR]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(global.tunerTemperamentId));
    })();
  }, [global.tunerTemperamentId]);

  useEffect(() => {
    if (tuneMode === TuneMode.PROCEDURE)
      setTuneMode(TuneMode.BEATS)
    setProc(
      (temperament.procedure !== '')
      ? Procedure.parse(temperament.procedure)!
      : null
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperament]);

  useEffect(() => {
    let i = 0;
    let Keyboard = [];
    while(proc?.hasNext(i-1)){
      const temp = proc.steps[i];
      if(temp.action === ProcAction.TUNE_UNIQUE)
        Keyboard.push(temp.noteX.string());
      else {
        if(temp.action === ProcAction.TUNE_OCTAVE || temp.action === ProcAction.TUNE_PAIR )
          Keyboard.push(temp.noteY.string());
        else{
          Keyboard.push("");
        }
      }
      i++;
    }
    setKeyboardColor(Keyboard);
  }, [proc]);

  const onProcedureNext = useCallback(() => { // useCallback for TuneFooter memoizing
    setProcStepIdx(procStepIdx + 1);
    setProcRepeatCount(0);
  }, [procStepIdx]);

  const onProcedurePrev = useCallback(() => { // useCallback for TuneFooter memoizing
    setProcStepIdx(procStepIdx - 1);
    setProcRepeatCount(0);
  }, [procStepIdx]);

  return (
    <div className="h-full flex content-around justify-center flex-wrap">
      
      { tuneMode === TuneMode.PROCEDURE
        ? <TunerHeaderKeyboard
            keyboardColor = {keyboardColor}
            procStepIdx = {procStepIdx}
          />
          
        : <TunerHeaderInputs
            defaultTemperamentId={global.tunerTemperamentId}
            defaultFreqA4={freqA4}
            temperamentsList={temperamentsList}
            onTemperamentChange={(e: any) => {
              setProcStepIdx(0);
              setProcRepeatCount(0);
              global.setTunerTemperamentId(e.detail.value);
            }}
            onFreqA4Change={(inputFreqA4: number) => {
              setProcStepIdx(0);
              setProcRepeatCount(0);
              setFreqA4(inputFreqA4);
            }}
          />
      }

      <PitchCircle
        tuneMode={tuneMode}
        freqA4={freqA4}
        temperament={temperament}
        proc={proc}
        procStepIdx={procStepIdx}
        procRepeatCount={procRepeatCount}
      />
      
      <IonGrid className="w-full">
        <IonRow >
          <TunerFooter
            isMuted={isMuted}
            tuneMode={tuneMode}
            enableEnterProcedure={proc !== null}
            enableProcedurePrev={proc && proc.hasPrev(procStepIdx)}
            enableProcedureNext={proc && proc.hasNext(procStepIdx)}
            onClickMute={() => setIsMuted(!isMuted)}
            onClickBeats={() => setTuneMode(TuneMode.BEATS)}
            onClickPitchPipe={() => setTuneMode(TuneMode.PITCHPIPE)}
            onEnterProcedure={() => setTuneMode(TuneMode.PROCEDURE)}
            onExitProcedure={() => setTuneMode(TuneMode.BEATS)}
            onProcedureNext={onProcedureNext}
            onProcedurePrev={onProcedurePrev}
            onProcedureRepeatStep={() => setProcRepeatCount(procRepeatCount + 1)}
          />
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default React.memo(
  Tuner,
  (prevProps, nextProps) => (
    prevProps.setMainTitle === nextProps.setMainTitle &&
    prevProps.setSubTitle === nextProps.setSubTitle
  )
);
