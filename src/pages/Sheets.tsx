import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
} from "@ionic/react";
import PageHeader from "./Page/PageHeader";
import SheetsList from "../components/Sheets/SheetsList";

const Sheets: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle="Fiches"
        />
      </IonHeader>

      <IonContent scrollY={true}>
        <SheetsList />
      </IonContent>
    </IonPage>
  );
};

export default Sheets;
