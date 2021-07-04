import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
} from "@ionic/react";
import PageHeader from "./Page/PageHeader";
import SheetsContent from "../components/Sheets/SheetsContent";

const Sheets: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle="Fiches"
        />
      </IonHeader>

      <IonContent fullscreen scrollY={true}>
        <SheetsContent />
      </IonContent>
    </IonPage>
  );
};

export default Sheets;
