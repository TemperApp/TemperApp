import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonToolbar, IonIcon } from '@ionic/react';
import './Home.css';
import HomeContent from '../components/Home/HomeContent';
import {ellipsisVertical} from "ionicons/icons";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid>
                <IonRow>
                    <IonCol size='2' className="Col1">
                    </IonCol>
                    <IonCol className ="Col2" size='8'>
                       <IonImg src={"../../assets/icon/Logo_TemperApp.png"} />
                    </IonCol>
                    <IonCol size='2' className="Col3">
                      <IonIcon icon={ellipsisVertical} size="large"></IonIcon>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
