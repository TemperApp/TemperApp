import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Learn.css';
import SQLiteTest from '../components/SQLiteTest' //TODO only for testing

const Learn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="title">Apprendre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apprendre</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow class="learn-item">
            <IonButton class="learn-button"></IonButton>
            <IonButton class="learn-button-text">Définition</IonButton>
          </IonRow>
          <IonRow class="learn-item">
            <IonButton class="learn-button"></IonButton>
            <IonButton class="learn-button-text">Caractéristiques</IonButton>
          </IonRow>
          <IonRow class="learn-item">
            <IonButton class="learn-button"></IonButton>
            <IonButton class="learn-button-text">Physique</IonButton>
          </IonRow>
          <IonRow class="learn-item">
            <IonButton class="learn-button"></IonButton>
            <IonButton class="learn-button-text">Histoire</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
