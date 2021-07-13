import React, { useState } from "react";
import { IonContent, IonHeader, IonModal, IonPage } from "@ionic/react";
import "./Compare.css";
import Comparator from "../components/Comparator/Comparator";
import PageHeader from "./Page/PageHeader";
import PageModal from "./Page/PageModal";

const CompareModalContent: React.FC = () => (
  <>
    <h3>Comment comparer ?</h3>
    <p className="p-long">
      Il est possible de comparer deux tempéraments pour visualiser
      rapidement la différence de pureté des tierces et des quintes. Les
      quintes sont représentées à l'intérieur et les tierces à
      l'extérieur.
    </p>
    <p className="p-long">
      Le 1er tempérament entoure la roue des notes :
    </p>
  </>
);

const Compare: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage >
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle="Comparateur"
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen">
        <PageModal
          title="Aide · Comparateur"
          onQuit={() => setShowModal(false)}
        >
          <CompareModalContent />
        </PageModal>
      </IonModal>

      <IonContent fullscreen scrollY={true}>
        <Comparator />
      </IonContent>
    </IonPage>
  );
};

export default Compare;
