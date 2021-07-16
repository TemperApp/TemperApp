import React, { useState, useEffect, useContext, useCallback } from "react";
import "./Tuner.css";
import SettingsContext from "../../store/settings-context";

import { fetchTemperamentPropsById, fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";
import EqualTemperament from "../../model/Temperament/Equal";

import PitchCircle from "./PitchCircle";
import SoundEngine from "../../engine/SoundEngine";

import { splitProcedure } from "./nonClickable/NonClickableUtils";
import TunerHeader from "./TunerHeader";
import TunerFooter from "./TunerFooter";
import { Temperament } from "../../model/Temperament/Temperament";

export enum TuneMode {
  BEATS = 'Battements', // TODO Find a better way to print text
  PITCHPIPE = 'Pitch pipe',
  PROCEDURE = 'Procédure',
}

type TunerProps = {
  setMainTitle: (t: string) => void,
}

const Tuner: React.FC<TunerProps> = ({
  setMainTitle,
}) => {

  const settings = useContext(SettingsContext);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [tuneMode, setTuneMode] = useState(TuneMode.BEATS);
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [selectedTemperamentId, setSelectedTemperamentId] = useState<number>(temperament.idTemperament);
  const [temperamentsList, setTemperamentsList] = useState<TemperamentDBType[]>([]);
  const [freqA4, setFreqA4] = useState<number>(settings.freqA4);
  const [stepProcedure, setStepProcedure] = useState<number>(0);
  const [stepTune, setStepTune] = useState<number>(0);

  useEffect(() => {
    setFreqA4(settings.freqA4)
  }, [settings.freqA4]);

  useEffect(() => {
    SoundEngine.volume(isMuted ? -128 : -24);
  }, [isMuted]);

  useEffect(() => {
    setMainTitle(tuneMode)
  }, [tuneMode, setMainTitle]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(selectedTemperamentId));
    })();
  }, [selectedTemperamentId]);

  const onProcedureNext = useCallback(() => { // useCallback for TuneFooter memoizing
    if (stepProcedure < (splitProcedure(temperament.procedure).length - 1))
      setStepProcedure(stepProcedure + 1);
    setStepTune(0);
  }, [stepProcedure, temperament.procedure]);

  const onProcedurePrev = useCallback(() => { // useCallback for TuneFooter memoizing
    if (stepProcedure >= 1)
      setStepProcedure(stepProcedure - 1);
    setStepTune(0);
  }, [stepProcedure]);

  console.info('⬜ [Tuner]: Render: list fetched:', temperamentsList.length > 0, ', temperament fetched:', (temperament.idTemperament === selectedTemperamentId && temperament.deviation !== undefined))

  return (
    <div className="h-full flex content-around flex-wrap">
      <TunerHeader
        defaultTemperamentId={selectedTemperamentId}
        defaultFreqA4={freqA4}
        temperamentsList={temperamentsList}
        onTemperamentChange={(e: any) => {
          setStepProcedure(0);
          setSelectedTemperamentId(e.detail.value)
        }}
        onFreqA4Change={(e: any) => {
          setStepProcedure(0);
          setFreqA4(Number(e.detail.value));
        }}
      />

      <section className="w-full">
        <PitchCircle
          tuneMode={tuneMode}
          freqA4={freqA4}
          temperament={temperament}
          stepProcedure={stepProcedure}
          procedure={splitProcedure(temperament.procedure)}
          stepTune={stepTune}
          setStepTune={setStepTune}
        />
      </section>

      <TunerFooter
        isMuted={isMuted}
        tuneMode={tuneMode}
        canEnterProcedure={temperament.procedure !== ''}
        isProcedureFirstStep={stepProcedure === 0}
        isProcedureLastStep={stepProcedure === splitProcedure(temperament.procedure).length - 1}
        onClickMute={() => setIsMuted(!isMuted)}
        onClickBeats={() => setTuneMode(TuneMode.BEATS)}
        onClickPitchPipe={() => setTuneMode(TuneMode.PITCHPIPE)}
        onEnterProcedure={() => setTuneMode(TuneMode.PROCEDURE)}
        onExitProcedure={() => setTuneMode(TuneMode.BEATS)}
        onProcedureNext={onProcedureNext}
        onProcedurePrev={onProcedurePrev}
        onProcedureRepeatStep={() => setStepTune(0)}
      />
    </div>
  );
};

export default React.memo(
  Tuner,
  (prevProps, nextProps) =>
    prevProps.setMainTitle === nextProps.setMainTitle
);
