import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
<<<<<<< HEAD:src/pages/Compare.tsx
import './Compare.css';
=======
import './Comparator.css';
import PitchCircle from "../components/Tuner/PitchCircle"
>>>>>>> benjamin:src/pages/Comparator.tsx

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
        < PitchCircle/>
      </IonContent>
    </IonPage>
  );
};

export default Compare;
