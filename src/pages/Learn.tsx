import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Learn.css';
import SQLiteTest from '../components/SQLiteTest' //TODO only for testing

const Learn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apprendre</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SQLiteTest></SQLiteTest>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
