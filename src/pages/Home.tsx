import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonToolbar, IonIcon, useIonModal } from '@ionic/react';
import './Home.css';
import HomeContent from '../components/Home/HomeContent';

import ParameterModal from '../components/Home/ParameterModal'; 

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid>
                <IonRow>
                    <IonCol size='2' className="ColTemperApp">
                    </IonCol>
                    <IonCol className ="ColTemperApp " size='8'>
                       <IonImg src={"../../assets/icon/Logo_TemperApp.png"} />
                    </IonCol>
                    <IonCol size='2' className="ColTemperApp">
                      <ParameterModal />
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
