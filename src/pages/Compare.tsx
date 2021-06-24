import React from 'react';
import { IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Compare.css';
import Comparator from '../components/Comparator/Comparator';

const Compare: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Compare</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <Comparator /> 
      </IonContent>
    </IonPage>
  );
};

export default Compare;
