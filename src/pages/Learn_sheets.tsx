import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import './Learn.css';
import { Route, RouteComponentProps } from 'react-router-dom';
import HeaderPage from '../components/Header/HeaderPage';

type LearnProps = {
  match: RouteComponentProps,
  darkTheme : boolean,
}

/*
const Learn: React.FC<LearnProps> = ({darkTheme}) => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
      </IonContent>
    </IonPage>
  );
};
*/

const Learn_sheets: React.FC<RouteComponentProps> = ({match, history}) => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage 
        buttonModal = {false}
        buttonReturn = {false}
        buttonModalText = "Apprendre"
        setShowModal = {setShowModal}
        darkTheme = {false}
      />

      <IonContent fullscreen scrollY={true}>
        <IonList>
          <IonItem routerLink="/learn/sheet/1">
            <IonLabel>Definition</IonLabel>
          </IonItem>
          <IonItem routerLink="/learn/sheet/2">
            <IonLabel>Physique</IonLabel>
          </IonItem>
          <IonItem routerLink="/learn/sheet/3">
            <IonLabel>Caractéristiques</IonLabel>
          </IonItem>
          <IonItem routerLink="/learn/sheet/4">
            <IonLabel>Histoire</IonLabel>
          </IonItem>
        </IonList>  
      </IonContent>
    </IonPage>
  );
};

export default Learn_sheets;