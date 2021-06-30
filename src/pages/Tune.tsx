<<<<<<< HEAD
import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Tuner from "../components/Tuner/Tuner";
import "./Tune.css";
import { TemperamentDBType } from "../engine/DB";
import HeaderPage from "../components/Header/HeaderPage";
import TunerModal from "../components/Tuner/TunerModal";
=======
import React, { useState } from 'react';
import {IonContent, IonPage} from '@ionic/react';
import Tuner from '../components/Tuner/Tuner';
import './Tune.css';
import { TemperamentDBType } from '../engine/DB';
import HeaderPage from '../components/Header/HeaderPage';
import TunerModal from '../components/Tuner/TunerModal';
>>>>>>> e718b091309b07016d041acd585dd7a6fad1ca5d

type TuneProps = {
  darkTheme: boolean;
};

const Tune: React.FC<TuneProps> = ({ darkTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHzMode, setIsHzMode] = useState<boolean>(false);

  return (
    <IonPage>
<<<<<<< HEAD
      <HeaderPage
        doubleTitle={true}
        buttonModal={true}
        buttonModalsubText={`${isHzMode ? "Battements" : "Pitch pipe"}`}
        buttonModalText="Accordeur"
        setShowModal={setShowModal}
        darkTheme={darkTheme}
=======
      <HeaderPage 
        buttonModal = {true}
        buttonReturn={false}
        buttonModalText = "TUNER"
        setShowModal = {setShowModal}
        darkTheme = {darkTheme}
>>>>>>> e718b091309b07016d041acd585dd7a6fad1ca5d
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
