import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
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
    </>
  );
};

export default Learn_sheet;