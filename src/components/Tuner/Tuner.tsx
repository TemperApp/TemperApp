import React, { useState, useEffect, useContext } from "react";
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
  const [temperament, setTemperament] = useState<TemperamentDBType>(EqualTemperament);
  const [temperamentsList, setTemperamentsList] = useState<TemperamentDBType[]>([]);
  const [freqA4, setFreqA4] = useState<number>(settings.freqA4);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isClickable, setIsClickable] = useState<boolean>(true);
  const [stepProcedure, setStepProcedure] = useState<number>(0);
  const [procedure, setProcedure] = useState<string>("");
  const [splitedProcedure, setSplitedProcedure] = useState<Array<string>>([""]);
  const [stepTune, setStepTune] = useState<number>(0);

  const [tuneMode, setTuneMode] = useState(TuneMode.BEATS);

  useEffect(() => {
    setMainTitle(tuneMode)
  }, [tuneMode, setMainTitle]);

  useEffect(() => {
    SoundEngine.volume(isMuted ? -128 : -24);
  }, [isMuted]);

  useEffect(() => {
    setFreqA4(settings.freqA4)
  }, [settings.freqA4]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  useEffect(() => {
    // console.log(temperament);
    (async () => {
      const temp = await fetchTemperamentPropsById(temperament.idTemperament);
      setProcedure(temp.procedure);
    })();
  },[temperament])

  useEffect(() => {
    setSplitedProcedure(splitProcedure(procedure));
  },[procedure])

  useEffect(() => {
    // console.log(" procedure : n° "+stepProcedure);
  },[stepProcedure])

  console.info('⬜ [Tuner]: Render')

  return (
    <div className="h-full flex content-around flex-wrap">
      {/* Temperament and A4 freq inputs */}
      <TunerHeader 
        defaultTemperament={temperament}
        defaultFreqA4={freqA4}
        temperamentsList={temperamentsList}
        onTemperamentChange={(e: any) => {
          setStepProcedure(0);
          setTemperament(e.detail.value)
        }}
        onFreqA4Change={(e: any) => {
          setStepProcedure(0);
          setFreqA4(Number(e.detail.value));
        }}
      />

      {/* Pitch circle buttons and wheels */}
      <section className="w-full">
        <PitchCircle
          tuneMode={tuneMode} 
          isClickable={isClickable}
          freqA4={freqA4}
          idTemperament={temperament.idTemperament}
          stepProcedure={stepProcedure}
          procedure={splitedProcedure}
          stepTune={stepTune}
          setStepTune={setStepTune}
        />
      </section>

      {/* Buttons at the bottom */}
      <TunerFooter
        isMuted={isMuted}
        tuneMode={tuneMode}
        canEnterProcedure={procedure !== ''}
        isProcedureFirstStep={stepProcedure === 0}
        isProcedureLastStep={stepProcedure === splitedProcedure.length-1}
        onClickMute={() => setIsMuted(!isMuted)}
        onClickBeats={() => setTuneMode(TuneMode.BEATS)}
        onClickPitchPipe={() => setTuneMode(TuneMode.PITCHPIPE)}
        onEnterProcedure={() => {
          setIsClickable(false);
          setTuneMode(TuneMode.PROCEDURE);
        }}
        onExitProcedure={() => {
          setIsClickable(true);
          setTuneMode(TuneMode.BEATS);
        }}
        onProcedureNext={() => {
          if(stepProcedure < (splitedProcedure.length-1) )
            setStepProcedure(stepProcedure+1);
          setStepTune(0);
        }}
        onProcedurePrev={() => {
          if(stepProcedure >= 1 )
            setStepProcedure(stepProcedure-1);
          setStepTune(0);
        }}
        onProcedureRepeatStep={() => {
          setStepTune(0);
        }}
      />
    </div>
  );
};

export default Tuner;
