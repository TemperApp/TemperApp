import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Sheets.css";
import HeaderPage from "../components/Header/HeaderPage";
import SheetsMenu from "../components/Sheets/SheetsMenu";

const Sheets: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <HeaderPage
        buttonModal={false}
        buttonModalText="Fiches"
        setShowModal={setShowModal}
      />
      <IonContent fullscreen scrollY={false}>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <SheetsMenu />
      </IonContent>
    </IonPage>
  );
};

export default Sheets;
