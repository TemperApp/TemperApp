import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Tuner from '../components/Tuner';
import './Tune.css';

const Tune: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tune</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accordeur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Tuner></Tuner>
      </IonContent>
    </IonPage>
  );
};

export default Tune;
