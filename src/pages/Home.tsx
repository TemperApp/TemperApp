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
import { ellipsisVertical } from "ionicons/icons";

const Home: React.FC = () => {
  const settings = useContext(SettingsContext);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <div className="px-6">
          <IonImg
            src={(settings.darkTheme)
                ? "../../assets/logotypes/temperapp_logo-dark.svg"
                : "../../assets/logotypes/temperapp_logo.svg"}
            className="logo-home"
          />
        </div>
        <IonIcon
          className="absolute top-0 right-0 mt-4 p-5 h-7 w-7"
          onClick={() => setShowModal(true)}
          icon={ellipsisVertical}
        />
      </IonHeader>

      <IonModal 
        isOpen={showModal}
        cssClass="modal-fullscreen"
        swipeToClose={true}
        backdrop-dismiss={true}
      >
        <SettingsModal onQuit={() => setShowModal(false)} />
      </IonModal>
      
      <IonContent fullscreen scrollY={true}>
        <HomeContent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
