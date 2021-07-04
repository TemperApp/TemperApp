import React from "react";
import { useState, useEffect } from "react";
import "../App/Modal.css";

import {
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  IonIcon,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";

import "./Tuner.css";
import { fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";
import PitchCircle from "./PitchCircle";
import SoundEngine from "../../engine/SoundEngine";
import EqualTemperament from "../../model/Temperament/Equal";

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
        <IonGrid className="px-5">
          <IonRow className="pt-3">
            <IonCol size="6">
              <IonSelect
                value={temperament}
                placeholder="Tempérament"
                onIonChange={(e) => setTemperament(e.detail.value)}
              >
                {temperamentsList.map((t: TemperamentDBType) => (
                  <IonSelectOption key={t.idTemperament} value={t}>
                    {t.nameFR}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonCol>
            <IonCol size="6" className="frequency-selector">
              <IonItem>
                <IonLabel className="input-label">
                  <h5>A4 (Hz)</h5>
                </IonLabel>
                <IonInput
                  type="number"
                  min="300"
                  max="500"
                  value={freqA4}
                  onIonChange={(e) => setFreqA4(Number(e.detail.value))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <section className="w-full">
          <PitchCircle
            isHzMode={isHzMode}
            freqA4={freqA4}
            idTemperament={temperament.idTemperament}
          />
        </section>

        <IonGrid>
          <IonRow className="items-center">
            <IonCol size="2" offset="1">
              <IonButton className="buttonFixed">
                <IonIcon
                  style={{fontSize: "3rem"} /* TODO Find a better way */}
                  src="/assets/logotypes/icon-tuning-procedure.svg"
                />
              </IonButton>
            </IonCol>
            <IonCol size="2" offset="1.5">
              <IonButton
                size="large"
                fill="clear"
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
            </IonCol>
            <IonCol className="btn-mode" offset="2">
              <IonButton
                onClick={() => setIsHzMode(false)}
                className={`btn-mode-bpm ion-no-margin ion-text-lowercase
                  ${!isHzMode ? "btn-mode-activated" : ""}`}
              >
                bpm
              </IonButton>
              <IonButton
                onClick={() => setIsHzMode(true)}
                className={`btn-mode-tuningfork ion-no-margin ion-text-capitalize
                  ${isHzMode ? "btn-mode-activated" : ""}`}
              >
                Hz
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
    </div>
  );
};

export default Tuner;
