import React from 'react';
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import './Home.css';
import HomeContent from '../components/Home/HomeContent';
import ParameterModal from '../components/Home/ParameterModal'; 
import { ellipsisVertical } from "ionicons/icons";

type HomeProps = {
  darkTheme : boolean,
  setDarkTheme: (color: boolean) => void,
}

const Home: React.FC<HomeProps> = ({darkTheme,setDarkTheme}) => {
  const change = (e : any) => {
    console.log(e.target.checked);
    document.body.classList.toggle('dark', e.target.checked);
    (e.target.checked === true)?setDarkTheme(true):setDarkTheme(false);
  }

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size='2' className="ColTemperApp">
              </IonCol>
              <IonCol className ="ColTemperApp " size='8'>
                <IonImg src={"../../assets/logotypes/temperapp_logo.svg"} />
              </IonCol>
              <IonCol size='2' className="ColTemperApp">
                <ParameterModal 
                  darkTheme = {darkTheme}
                  setDarkTheme = {setDarkTheme}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
        <HomeContent
          darkTheme = {darkTheme}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
