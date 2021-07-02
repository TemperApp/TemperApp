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
  IonImg,
} from "@ionic/react";

import "./Tuner.css";
import { fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";
import PitchCircle from "./PitchCircle";
import SoundEngine from "../../engine/SoundEngine";

const Tuner: React.FC = () => {
  const [temperament, setTemperament] = useState<TemperamentDBType>({
    idTemperament: 1,
    name: "Equal",
    nameFR: "Égal",
  });
  const [temperamentsList, setTemperamentsList] = useState<
    Array<TemperamentDBType>
  >([]);
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

      <IonRow className="ion-padding-horizontal ion-justify-content-center">
        <PitchCircle
          isHzMode={isHzMode}
          freqA4={freqA4}
          idTemperament={temperament.idTemperament}
        />
      </IonRow>

      <IonGrid className="ion-padding-horizontal">
        <IonRow className="grid-button-bottom">
          <IonCol size="2" offset="1">
            <IonButton className="buttonFixed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                height="100mm"
                width="100mm"
              >
                <circle
                  cx="50.271"
                  cy="54.051"
                  r="34.059"
                  fill="var(--color-button)"
                />
                <g
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#f5fbfb"
                  stroke-width="11.67"
                >
                  <path
                    d="M44.911 49.544l4.845.364M44.806 49.432l-.09-4.858"
                    stroke-width="2.8386108"
                  />
                </g>
                <g
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="var(--color-inner-button)"
                  stroke-width="11.67"
                >
                  <path
                    d="M45.467 67.584l.11-4.857M45.361 67.695l-4.846.346"
                    stroke-width="2.8386108"
                  />
                </g>
                <ellipse
                  cy="39.433"
                  cx="-57.186"
                  rx="5.541"
                  ry="5.542"
                  transform="scale(-1 1)"
                  fill="none"
                  stroke="var(--color-inner-button)"
                  stroke-width="3.715"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M53.642 69.085l3.475 5.11 7.113-9.322"
                  fill="none"
                  stroke="var(--color-inner-button)"
                  stroke-width="3.649"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="-34.924"
                  cy="57.141"
                  r="5.641"
                  transform="scale(-1 1)"
                  fill="none"
                  stroke="var(--color-inner-button)"
                  stroke-width="3.649"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IonButton>
          </IonCol>
          <IonCol size="2" offset="1.5">
            <IonButton
              size="large"
              fill="clear"
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
    </>
  );
};

export default Tuner;
