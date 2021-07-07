import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/react";
import "./Tuner.css";
import { fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";
import PitchCircle from "./PitchCircle";
import SoundEngine from "../../engine/SoundEngine";
import EqualTemperament from "../../model/Temperament/Equal";
import { arrowForward, arrowBack, play } from "ionicons/icons";

type TunerProps = {
  setMainTitle: (t: string) => void,
}

const Tuner: React.FC<TunerProps> = ({
  setMainTitle,
}) => {

  const [temperament, setTemperament] = useState<TemperamentDBType>(EqualTemperament);
  const [temperamentsList, setTemperamentsList] = useState<TemperamentDBType[]>([]);
  const [freqA4, setFreqA4] = useState<number>(440);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isHzMode, setIsHzMode] = useState<boolean>(true);
  const [isClickable, setIsClickable] = useState<boolean>(true);
  const [stepProcedure, setStepProcedure] = useState<number>(0);

  useEffect(() => {
    setMainTitle(isHzMode ? "Pitch pipe" : "Battements")
  }, [isHzMode, setMainTitle]);

  useEffect(() => {
    SoundEngine.volume(isMuted ? -128 : -24);
  }, [isMuted]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  return (
    <div className="h-full flex content-around flex-wrap">
      {/* Temperament and A4 freq inputs */}
      <div className="pt-3 px-4 w-full flex items-center justify-between">
        <IonSelect
          className="flex-grow"
          value={temperament}
          placeholder="Tempérament"
          onIonChange={(e) => {
            setStepProcedure(0);
            setTemperament(e.detail.value)
          }}
        >
          {temperamentsList.map((t: TemperamentDBType) => (
            <IonSelectOption key={t.idTemperament} value={t}>
              {t.nameFR}
            </IonSelectOption>
          ))}
        </IonSelect>
        <div className="ml-4 flex items-center flex-shrink-0">
          <span>A4 (Hz)</span>
          <IonInput
            id="input-a4"
            className="w-16 ml-1"
            type="number"
            min="300"
            max="500"
            value={freqA4}
            onIonChange={(e) => {
              setStepProcedure(0);
              setFreqA4(Number(e.detail.value));
            }}
          ></IonInput>
        </div>
      </div>

      {/* Pitch circle buttons and wheels */}
      <section className="w-full">
        <PitchCircle
          isHzMode={isHzMode}
          isClickable={isClickable}
          freqA4={freqA4}
          idTemperament={temperament.idTemperament}
          stepProcedure={stepProcedure}
        />
        <div className="procedure-nav w-full px-5 flex justify-center">
          {!isClickable
            ? 
            <>
            <IonButton
            fill="clear"
            style={{ "--ripple-color": "transparent" }}
            onClick={() => setStepProcedure(stepProcedure-1)}
            >
            <IonIcon
              slot='icon-only'
              icon={arrowBack}
            />
            </IonButton>
            <IonButton
              fill="clear"
              style={{ "--ripple-color": "transparent" }}
              onClick={() => setStepProcedure(stepProcedure+1)}
            >
            <IonIcon
              slot='icon-only'
              icon={arrowForward}
            />
            </IonButton>
          </>
            : <></>
          }
        </div>
      </section>

      {/* Buttons at the bottom */}
      <section className="w-full px-5 flex justify-between items-center">
        <div className="w-20">
          <IonButton 
            className="btn-round" 
            onClick={() => {
              isClickable
                ? setIsClickable(false)
                : setIsClickable(true)
                setMainTitle(
                  isClickable 
                    ? "Procédure" 
                    : "Pitch pipe"
                )
              } 
            }>
            <IonIcon
              style={{ fontSize: "3rem" } /* TODO Find a better way */}
              src={
                isClickable
                  ? "/assets/logotypes/icon-tuning-procedure.svg"
                  : "/assets/logotypes/icon-tuning-procedure-TEMP.svg"
              }
            />
          </IonButton>
        </div>
    
        <div>
          <IonButton
            size="large"
            fill="clear"
            style={{ "--ripple-color": "transparent" }}
            onClick={() => setIsMuted(!isMuted)}
          >
            <IonIcon
              src={
                isMuted
                  ? "/assets/logotypes/icon-mute.svg"
                  : "/assets/logotypes/icon-sound.svg"
              }
              slot="icon-only"
            />
          </IonButton>
        </div>
 
        <div className="w-20 btn-mode">
        {isClickable
        ?
        <>
          <IonButton
            onClick={() => setIsHzMode(false)}
            className={`btn-mode-bpm m-0
              ${!isHzMode ? " btn-mode-activated" : ""}`}
          >
            bpm
          </IonButton>
          <IonButton
            onClick={() => setIsHzMode(true)}
            className={`btn-mode-hz m-0
              ${isHzMode ? " btn-mode-activated" : ""}`}
          >
            Hz
          </IonButton>
        </>
        :
          <IonButton fill="clear">
            <IonIcon
              slot='icon-only'
              icon={play}>
            </IonIcon>
          </IonButton>
        }
        </div>
      </section>
    </div>
  );
};

export default Tuner;
