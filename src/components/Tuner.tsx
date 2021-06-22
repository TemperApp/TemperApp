import React from 'react';
import { useState, useEffect } from 'react';

import {
  IonFooter, IonGrid, IonCol, IonRow,
  IonButton, IonIcon, IonSelect, IonSelectOption,
  IonInput, IonItem, IonLabel
} from '@ionic/react';
import {
  play, pause, swapHorizontal, playCircle,
  volumeMute, volumeHigh
} from 'ionicons/icons'

import './Tuner.css';
import { fetchTemperamentById, fetchTemperaments } from '../engine/DataAccessor';
import { TemperamentDBType } from '../engine/DB';
import PitchCircle from './Tuner/PitchCircle';

const Tuner: React.FC = () => {

  const [temperament, setTemperament] = useState<TemperamentDBType>({idTemperament: 1, name: "Equal", nameFR: "Égal"});
  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);
  const [freqA4, setFreqA4] = useState<number>(440);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isHzMode, setIsHzMode] = useState<boolean>(true);

  const fetchTemperamentsList = async () => {
    const temperaments = await fetchTemperaments()
    setTemperamentsList(temperaments);
    console.log(temperamentsList);
    //setTemperament(await fetchTemperamentById(temperaments[0].idTemperament));
  } 

  useEffect(() => {
    fetchTemperamentsList();
  }, []);

  return (
    <>
      { /* TODO remove */}
      <IonRow className="ion-padding-horizontal ion-justify-content-center">
        <IonButton color="dark" fill="clear">
          <IonIcon slot="icon-only" icon={play} />
        </IonButton>
        <IonButton color="dark" fill="clear">
          <IonIcon slot="icon-only" icon={pause} />
        </IonButton>
        <IonButton color="dark" fill="clear">
          <IonIcon slot="icon-only" icon={swapHorizontal} />
        </IonButton>
      </IonRow>

      <IonGrid className="ion-padding-horizontal">
        <IonRow className="ion-justify-content-between ion-align-items-end">
          <IonCol size="8">
            <IonSelect
              value={temperament} placeholder="Tempérament"
              onIonChange={e => setTemperament(e.detail.value)}>
              {temperamentsList.map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>
          <IonCol size="4">
            <IonItem>
              <IonLabel position="stacked">A4 (Hz)</IonLabel>
              <IonInput
                type="number" min="300" max="500" value={freqA4}
                onIonChange={(e) => setFreqA4(Number(e.detail.value))}>
              </IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>

      {/* PitchCircle */}
      <IonRow className="ion-padding-horizontal ion-justify-content-center">
        <PitchCircle
          isHzMode = {isHzMode}
          freqA4 = {freqA4}
          temperament = {temperament}
        />   
      </IonRow>
             
      <IonFooter>
        <IonGrid className="ion-padding-horizontal">
          <IonRow className="ion-justify-content-between ion-align-items-center">
            <IonCol>
              <IonButton className="btn-start-procedure" size="large">
                <IonIcon slot="icon-only" icon={playCircle} />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                color="dark" fill="clear" size="large"
                onClick={() => setIsMuted(!isMuted)}>
                <IonIcon slot="icon-only" icon={(isMuted) ? volumeMute : volumeHigh} />
              </IonButton>
            </IonCol>
            <IonCol className="btn-mode">
              <IonButton
                onClick={() => setIsHzMode(false)}
                className={`btn-mode-bpm ion-no-margin ion-text-lowercase
                    ${(!isHzMode) ? "btn-mode-activated" : ""}`}>bpm
              </IonButton>
              <IonButton
                onClick={() => setIsHzMode(true)}
                className={`btn-mode-tuningfork ion-no-margin ion-text-capitalize
                    ${(isHzMode) ? "btn-mode-activated" : ""}`}>Hz
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonFooter>
    </>
  );
};

export default Tuner;
