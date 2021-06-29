import React, { useState } from 'react';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import './Learn.css';
import { Route, RouteComponentProps } from 'react-router-dom';
import HeaderPage from '../components/Header/HeaderPage';

interface UserDetailPageProps extends RouteComponentProps<{
  id: string;
}> {}

const Learn_sheet: React.FC<RouteComponentProps> = ({match, history}) => {

  console.log("il y a quelqu'un ? ");
  console.log(match);
  console.log(history);

  return (
    <>
      <HeaderPage 
        buttonModal = {false}
        buttonModalText = {match.path}
        setShowModal = {() => {}}
        darkTheme = {false}
      />
      <IonContent>
      <IonButton color="primary" onClick={e => {
        console.log("action")
        e.preventDefault();
        history.replace('/learn')}}>Back</IonButton>
      </IonContent>
    </>
  );
};

export default React.memo(
  Learn_sheet,
  (prevProps, nextProps) => (
    prevProps.history.location.key === nextProps.history.location.key
    && prevProps.match.path === nextProps.match.path)
);