import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Comparator.css';
import PitchCircle from "../components/Tuner/PitchCircle"

const Comparator: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Comparator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Comparateur</IonTitle>
          </IonToolbar>
        </IonHeader>
        < PitchCircle/>
      </IonContent>
    </IonPage>
  );
};

export default Comparator;
