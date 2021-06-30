import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Compare.css";
import Comparator from "../components/Comparator/Comparator";
import { playCircle } from "ionicons/icons";
import ComparatorModal from "../components/Comparator/ComparatorModal";
import HeaderPage from "../components/Header/HeaderPage";

type CompareProps = {
  darkTheme: boolean;
};

const Compare: React.FC<CompareProps> = ({ darkTheme }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={true}
        buttonModalsubText=""
        buttonModalText="COMPARATOR"
        setShowModal={setShowModal}
        darkTheme={darkTheme}
      />

      <IonContent fullscreen scrollY={true}>
        <ComparatorModal showModal={showModal} setShowModal={setShowModal} />

        <Comparator />
      </IonContent>
    </IonPage>
  );
};

export default Compare;
