import React from 'react';

import { IonButton, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import HomeContent from './HomeContent';

const temperList = ["Rameau", "Vallotti", "Weimeister", "Back", "Egal"];


const TempButton: React.FC = () => {

  return (
  <IonContent>
    <HomeContent />
    <h2> Mes marque-pages </h2>
    <IonGrid>
      <IonRow >
        {temperList.map((t) => 
          <IonCol size='6'>
            <IonButton expand="block" color="primary">{t}</IonButton>
          </IonCol >
        )}
      </IonRow>
      </IonGrid>
  </IonContent>
  )
  
  };

export default TempButton;