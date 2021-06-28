import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Sheets.css";
import HeaderPage from "../components/Header/HeaderPage";

const Sheets: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage
        buttonModal={true}
        buttonModalText="Sheets"
        setShowModal={setShowModal}
      />
      <IonContent fullscreen scrollY={false}></IonContent>
    </IonPage>
  );
};

export default Sheets;
