import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import Tuner from "../components/Tuner/Tuner";
import "./Tune.css";
import HeaderPage from "../components/Header/HeaderPage";
import TunerModal from "../components/Tuner/TunerModal";

type TuneProps = {
  darkTheme: boolean;
};

const Tune: React.FC<TuneProps> = ({ darkTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHzMode, setIsHzMode] = useState<boolean>(false);

  return (
    <IonPage>
      <HeaderPage
        doubleTitle={true}
        buttonModal={true}
        buttonModalsubText={`${isHzMode ? "Battements" : "Pitch pipe"}`}
        buttonReturn={false}
        buttonModalText="Accordeur"
        setShowModal={setShowModal}
        darkTheme={darkTheme}
      />
      <IonContent fullscreen scrollY={false}>
        <TunerModal
          showModal={showModal}
          setShowModal={setShowModal}
          darkTheme={darkTheme}
        />

        <Tuner darkTheme={darkTheme} />
      </IonContent>
    </IonPage>
  );
};

export default Tune;
