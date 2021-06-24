import React from 'react';

import {
  IonGrid, IonCol, IonRow,
  IonButton, IonIcon, IonSelect, IonSelectOption,
  IonInput, IonItem, IonLabel
} from '@ionic/react';

import './LearnMenu.css';

const LearnMenu: React.FC = () => {

  return (
    <>
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
    </>
  );
};

export default LearnMenu;
