import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import Tuner from '../components/Tuner/Tuner';
import './Tune.css';
import { TemperamentDBType } from '../engine/DB';

const Tune: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          {/*<IonTitle>Tune</IonTitle>*/}
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-align-items-center">
              <IonCol size="5" >
                <h1>TUNE</h1>
              </IonCol>
              <IonCol size="1" offset="5">
                <IonButton></IonButton>
              </IonCol>
            </IonRow>
            <div className="gradientBar"></div>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <Tuner />
      </IonContent>
    </IonPage>
  );
};

export default Tune;
