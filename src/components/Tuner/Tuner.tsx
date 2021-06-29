import React from "react";
import { useState, useEffect } from "react";

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
import { playCircle, volumeMute, volumeHigh } from "ionicons/icons";

import "./Tuner.css";
import { fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";
import PitchCircle from "./PitchCircle";
import SoundEngine from "../../engine/SoundEngine";

type TunerProps = {
  darkTheme : boolean,
}

const Tuner: React.FC<TunerProps> = ({darkTheme}) => {

  const [temperament, setTemperament] = useState<TemperamentDBType>({idTemperament: 1, name: "Equal", nameFR: "Égal"});
  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);
  const [freqA4, setFreqA4] = useState<number>(440);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isHzMode, setIsHzMode] = useState<boolean>(true);

  const fetchTemperamentsList = async () => {
    const temperaments = await fetchTemperaments();
    setTemperamentsList(temperaments);
  };

  useEffect(() => {
    SoundEngine.volume(isMuted ? -128 : -24);
  }, [isMuted]);

  useEffect(() => {
    fetchTemperamentsList();
  }, []);

  return (
    <>
      <IonGrid className="ion-padding-horizontal">
        <IonRow className="ion-justify-content-between ion-align-items-end">
          <IonCol size="8">
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
          <IonCol size="4">
            <IonItem>
              <IonLabel position="stacked">A4 (Hz)</IonLabel>
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

      <IonRow className="ion-padding-horizontal ion-justify-content-center">
        <PitchCircle
          isHzMode = {isHzMode}
          freqA4 = {freqA4}
          idTemperament = {temperament.idTemperament}
          darkTheme = {darkTheme}
        />   
      </IonRow>

      <IonGrid className="ion-padding-horizontal">
        <IonRow className="ion-justify-content-between ion-align-items-center">
          <IonCol>
            <IonButton
              className="btn-start-procedure"
              fill="clear"
              size="large"
            >
              <IonIcon
                slot="icon-only"
                src="/assets/logotypes/button-procedure.svg"
              />
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton
              color="dark"
              fill="clear"
              size="large"
              onClick={() => setIsMuted(!isMuted)}
            >
              <IonIcon
                src={` ${
                  isMuted
                    ? "/assets/logotypes/icon-mute.svg"
                    : "/assets/logotypes/icon-sound.svg"
                }`}
                slot="icon-only"
              />
            </IonButton>
          </IonCol>
          <IonCol className="btn-mode">
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
    </>
  );
};

export default Tuner;
