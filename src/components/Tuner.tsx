import React from 'react';
import { useState } from 'react';
import {
  IonGrid, IonCol, IonRow,
  IonButton, IonIcon, IonSelect, IonSelectOption,
  IonInput, IonItem, IonLabel, IonToggle
} from '@ionic/react';
import { play, pause, swapHorizontal, playCircle, volumeOff, volumeHigh } from 'ionicons/icons'
import { TEMPERAMENTS_NAME } from '../model/Temperament';
import './Tuner.css';

const Tuner: React.FC = () => {

  const [temperament, setTemperament] = useState<number>(440);
  const [freqA4, setFreqA4] = useState<number>(440);

  return (
    <>
      <div className="ion-padding-horizontal">
        <IonButton>
          <IonIcon icon={play} />
        </IonButton>
        <IonButton>
          <IonIcon icon={pause} />
        </IonButton>
        <IonButton>
          <IonIcon icon={swapHorizontal} />
        </IonButton>
      </div>

      <IonGrid className="ion-padding-horizontal">
        <IonRow className="ion-justify-content-between ion-align-items-end">
          <IonCol size="8">
            <IonSelect
              value={temperament} placeholder="Tempérament"
              onIonChange={e => setTemperament(e.detail.value)}>
              {TEMPERAMENTS_NAME.map((t: { name: string, slugName: string }) =>
                <IonSelectOption key={t.slugName} value={t.slugName}>{t.name}</IonSelectOption>
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

      <IonGrid className="ion-padding-horizontal">
        <IonRow className="ion-justify-content-between ion-align-items-center">
          <IonCol size="3">
            <IonButton>
              <IonIcon icon={playCircle} />
            </IonButton>
          </IonCol>
          <IonCol size="3">
            <IonButton>
              <IonIcon icon={volumeOff} />
            </IonButton>
          </IonCol>
          <IonCol size="6" className="tuner-mode-toggle-btn">
            <IonItem>
              <IonLabel>bpm</IonLabel>
              <IonToggle color="primary" />
              <IonLabel>Hz</IonLabel>
            </IonItem>
            {/*
            <IonButton className="btn-option-bpm">bpm</IonButton>
            <IonButton className="btn-option-tuningfork">Hz</IonButton>
            */}
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default Tuner;
