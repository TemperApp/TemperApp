import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Learn.css';
import LearnMenu from '../components/Learn/LearnMenu';

const Learn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="title">Apprendre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <LearnMenu />
      </IonContent>
    </IonPage>
  );
};

export default Learn;
