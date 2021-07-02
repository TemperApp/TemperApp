import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import Tuner from "../components/Tuner/Tuner";
import "./Tune.css";
import { TemperamentDBType } from "../engine/DB";
import HeaderPage from "../components/Header/HeaderPage";
import TunerModal from "../components/Tuner/TunerModal";

const Tune: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isHzMode, setIsHzMode] = useState<boolean>(false);

  return (
    <IonPage>
      <Tuner />
    </IonPage>
  );
};

export default Tune;
