import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Compare.css';
import PitchCircle from "../components/Tuner/PitchCircle"

const Compare: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Compare</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Comparateur</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*}
        < PitchCircle
          isHzMode = {true}
          freqA4 = {440}
        />
        */}
      </IonContent>
    </IonPage>
  );
};

export default Compare;
