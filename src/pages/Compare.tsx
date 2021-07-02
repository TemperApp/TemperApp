import React, { useState } from "react";
import { IonContent, IonPage } from "@ionic/react";
import "./Compare.css";
import Comparator from "../components/Comparator/Comparator";
import ComparatorModal from "../components/Comparator/ComparatorModal";
import HeaderPage from "../components/Header/HeaderPage";

const Compare: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={true}
        buttonReturn={false}
        buttonModalsubText=""
        buttonModalText="COMPARATOR"
        setShowModal={setShowModal}
      />

      <IonContent fullscreen scrollY={true}>
        <ComparatorModal showModal={showModal} setShowModal={setShowModal} />

        <Comparator />
      </IonContent>
    </IonPage>
  );
};

export default Compare;
