import React, { useContext, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonPage,
} from "@ionic/react";
import "./Home.css";
import HomeContent from "../components/Home/HomeContent";
import SettingsModal from "../components/Home/SettingsModal";
import SettingsContext from "../store/settings-context";
import { updateSettings } from "../store/settings-context/utils";

const Home: React.FC = () => {
  const settings = useContext(SettingsContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <div className="px-12">
          <IonImg
            src={(settings.darkTheme)
                ? "../../assets/logotypes/temperapp_logo-dark.svg"
                : "../../assets/logotypes/temperapp_logo.svg"}
            className="logo-home"
          />
        </div>
        <IonIcon
          className="absolute top-0 right-0 mt-4 px-5 h-9 w-9 cover"
          onClick={() => setShowModal(true)}
          src="assets/logotypes/icon-settings.svg"
        />
        <IonIcon
          className="absolute top-12 right-0 mt-4 px-5 w-9"
          onClick={() => setShowModal(true)}
          src="assets/logotypes/flag.svg"
        />
      </IonHeader>

      <IonModal 
        isOpen={showModal}
        cssClass="modal-fullscreen page-header"
        backdrop-dismiss={true}
        onDidDismiss= {() => setShowModal(false)}
      >
        <SettingsModal
          onQuit={(nextSettings) => {
            setShowModal(false);
            updateSettings(settings, nextSettings);
          }}
        />
      </IonModal>
      
      <IonContent fullscreen scrollY={true}>
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
