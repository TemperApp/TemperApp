import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tuner.css';
import TempButton from '../components/Accueil/TempButton';

const Tuner: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Accordeur</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TempButton />
      </IonContent>
    </IonPage>
  );
};

export default Tuner;
