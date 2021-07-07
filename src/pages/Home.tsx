import React, { useEffect } from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import HomeContent from "../components/Home/HomeContent";
import SettingsModal from "../components/Home/SettingsModal";
import Settings from "../engine/Settings";
import useSettings from "../hooks/useSettings";

const Home: React.FC = () => {
  console.log('début')

  const settings = useSettings();
  
  useEffect(() => {
    (async () => {
      console.log('useEffect 1', settings.pitchRef)
      settings.setPitchRef(450);
    })().then(() => {
      console.log('useEffect 2', settings.pitchRef)
    });
  }, [])
  
  console.log('gotta render', settings.pitchRef)

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="2" className="text-center"></IonCol>
              <IonCol className="text-center " size="8">
                <IonImg
                  src={
                    (Settings.darkTheme())
                      ? "../../assets/logotypes/temperapp_logo-dark.svg"
                      : "../../assets/logotypes/temperapp_logo.svg"
                  }
                  className="logo-home"
                />
              </IonCol>
              <IonCol size="2" className="text-center">
                <SettingsModal />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
