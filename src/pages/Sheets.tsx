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

type SheetsProps = {
  darkTheme : boolean,
}

const Sheets: React.FC<SheetsProps> = ({darkTheme}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <HeaderPage
        buttonModal={false}
        buttonModalText="Fiches"
        setShowModal={setShowModal}
        darkTheme={darkTheme}
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
