import React from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Compare.css';
import Comparator from '../components/Comparator/Comparator';

const Compare: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
      <IonToolbar>
          {/*<IonTitle>Tune</IonTitle>*/}
          <IonGrid className="ion-padding-horizontal headerPages">
            <IonRow className="ion-align-items-center">
              <IonCol size="8" >
                <h1>COMPARATOR</h1>
              </IonCol>
              <IonCol size="1" offset="2">
                <IonButton></IonButton>
              </IonCol>
            </IonRow>
            <div className="gradientBar"></div>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <Comparator /> 
      </IonContent>
    </IonPage>
  );
};

export default Compare;
