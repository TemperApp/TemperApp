import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Learn.css';

type LearnProps = {
  darkTheme : boolean,
}

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

export default Learn;
