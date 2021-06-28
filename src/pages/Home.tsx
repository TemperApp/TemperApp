import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonToolbar, IonIcon } from '@ionic/react';
import './Home.css';
import HomeContent from '../components/Home/HomeContent';
import {ellipsisVertical} from "ionicons/icons";

const Home: React.FC = () => {

  const change = (e : any) => {
    console.log(e.target.checked);
    document.body.classList.toggle('dark', e.target.checked);
  }

  return (
    <IonPage>
      <IonHeader>
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
        <IonList>
        <IonItem lines="full">
          <IonIcon slot="start" name="moon"></IonIcon>
          <IonLabel>
            Je suis les ombres
          </IonLabel>
          <IonToggle  id="themeToggle" slot="end" onClick={e => change(e)}></IonToggle>
        </IonItem>
      </IonList>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
