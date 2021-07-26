import React, { useState, useEffect, useContext, useCallback } from "react";
import "./Tuner.css";
import SettingsContext from "../../store/settings-context";

import { fetchTemperamentPropsById, fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";
import EqualTemperament from "../../model/Temperament/Equal";

import PitchCircle from "./PitchCircle";

import TunerHeaderSelect from "./TunerHeaderSelect";
import TunerFooter from "./TunerFooter";
import { Temperament } from "../../model/Temperament/Temperament";
import { ProcAction, Procedure } from "../../model/Procedure";
import TunerHeaderPiano from "./TunerHeaderPiano";
import { useHistory, useParams } from "react-router";
import useTemperTone from "../../hooks/useTemperTone";
import { IonGrid, IonRow } from "@ionic/react";

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

  const history = useHistory();
  const {id} = useParams<{ id: string }>(); // TODO Fix multiple rerender

  const TemperTone = useTemperTone();

  const settings = useContext(SettingsContext);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [tuneMode, setTuneMode] = useState(TuneMode.BEATS);
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [selectedTemperamentId, setSelectedTemperamentId] = useState<number>(1);
  const [temperamentsList, setTemperamentsList] = useState<TemperamentDBType[]>([]);
  const [freqA4, setFreqA4] = useState<number>(settings.freqA4);
  const [proc, setProc] = useState<Procedure | null>(null);
  const [procStepIdx, setProcStepIdx] = useState<number>(0);
  const [procRepeatCount, setProcRepeatCount] = useState<number>(0);
  const [pianoColor, setPianoColor] = useState<Array<string>>([]);


  useEffect(() => {
    setFreqA4(settings.freqA4)
  }, [settings.freqA4]);

  useEffect(() => {
    TemperTone.toggleMute(isMuted);
  }, [TemperTone, isMuted]);

  useEffect(() => {
    tuneMode === TuneMode.PROCEDURE ? 
    setSubTitle("Procédure d'accord")
    : setSubTitle("Accordeur")
  }, [tuneMode, setSubTitle, setMainTitle]);

  useEffect(() => {
    tuneMode === TuneMode.PROCEDURE ? 
     setMainTitle(temperament.nameFR)
    : setMainTitle(tuneMode)
  }, [tuneMode, setMainTitle, temperament.nameFR]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  useEffect(() => {
    setSelectedTemperamentId(Number(id) || 1);
  }, [id]);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(selectedTemperamentId));
    })();
  }, [selectedTemperamentId]);

  useEffect(() => {
    if (tuneMode === TuneMode.PROCEDURE)
      setTuneMode(TuneMode.BEATS)
    setProc(
      (temperament.procedure !== '')
      ? Procedure.parse(temperament.procedure)!
      : null
    );
  }, [temperament, tuneMode]);

  useEffect(() => {
    let i = 0;
    let Piano = [];
    while(proc?.hasNext(i-1)){
      const temp = proc.steps[i];
      if(temp.action === ProcAction.TUNE_UNIQUE)
        Piano.push(temp.noteX.string());
      else {
        if(temp.action === ProcAction.TUNE_OCTAVE || temp.action === ProcAction.TUNE_PAIR )
          Piano.push(temp.noteY.string());
        else{
          Piano.push("");
        }
      }
      i++;
    }
    setPianoColor(Piano);
  }, [proc]);

  const onProcedureNext = useCallback(() => { // useCallback for TuneFooter memoizing
    setProcStepIdx(procStepIdx + 1);
    setProcRepeatCount(0);
  }, [procStepIdx]);

  const onProcedurePrev = useCallback(() => { // useCallback for TuneFooter memoizing
    setProcStepIdx(procStepIdx - 1);
    setProcRepeatCount(0);
  }, [procStepIdx]);

  // console.info('⬜ [Tuner]: Render: list fetched:', temperamentsList.length > 0, ', temperament fetched:', (temperament.idTemperament === selectedTemperamentId && temperament.deviation !== undefined))

  const headerSelect = (
    <TunerHeaderSelect
        defaultTemperamentId={selectedTemperamentId}
        defaultFreqA4={freqA4}
        temperamentsList={temperamentsList}
        onTemperamentChange={(e: any) => {
          setProcStepIdx(0);
          setProcRepeatCount(0);
          setSelectedTemperamentId(e.detail.value)
          history.push(`/tune/${e.detail.value}`);
        }}
        onFreqA4Change={(e: any) => {
          setProcStepIdx(0);
          setProcRepeatCount(0);
          setFreqA4(Number(e.detail.value));
        }}
    />
  );

  const headerPiano = (
    <TunerHeaderPiano
      pianoColor = {pianoColor}
      procStepIdx = {procStepIdx}
    />
  )

  return (
    <div className="h-full flex content-around justify-center flex-wrap">
      
      {
        tuneMode === TuneMode.PROCEDURE ? headerPiano : headerSelect
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

export default Tuner;
