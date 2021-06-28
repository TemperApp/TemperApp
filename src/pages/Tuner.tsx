import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tuner.css';
import HomeContent from '../components/Accueil/HomeContent';

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
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Tuner;
