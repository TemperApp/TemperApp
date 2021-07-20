import React, { useState } from "react";
import { IonContent, IonHeader, IonModal, IonPage } from "@ionic/react";
import "./Compare.css";
import Comparator from "../components/Comparator/Comparator";
import PageHeader from "./Page/PageHeader";
import PageModal from "./Page/PageModal";

const CompareModalContent: React.FC = () => (
  <>
    <h4>Comment comparer ?</h4>
    <p className="p-long">
      Il est possible de comparer deux tempéraments pour visualiser
      rapidement la différence de pureté des tierces et des quintes. Les
      quintes sont représentées à l'extérieur et les tierces à
      l'intérieur.
    </p>
    <p className="p-long">
      Le premier tempérament choisi est situé à l'intérieur et le deuxième à l'extérieur, 
      les deux pouvant être échangés à tout moment. 
    </p>
    <p className="p-long">
      On peut comparer les fractions de commas affectant les quintes en changeant l'unité 
      entre comma syntonique et comma pythagoricien, ainsi que celles affectant les tierces. 
    </p>
    <p className="p-long">
      Le tableau de déviation permet de visualiser le nombre de divergence. 
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

      <IonModal isOpen={showModal} cssClass="modal-fullscreen page-header">
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
