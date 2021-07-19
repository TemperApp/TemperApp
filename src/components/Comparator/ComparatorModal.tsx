import React from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonRow,
  IonToolbar,
} from "@ionic/react";

type comparatorModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
};

const ComparatorModal: React.FC<comparatorModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <>
      {/* MODAL EXPLICATION*/}
      <IonModal isOpen={showModal} cssClass="modal-fullscreen">

        <IonContent>
          <IonGrid className="px-6 py-2">
            <h4>COMMENT COMPARER ?</h4>
            <p className="p-long">
              Il est possible de comparer deux tempéraments pour visualiser
              rapidement la différence de pureté des tierces et des quintes. Les
              quintes sont représentées à l'intérieur et les tierces à
              l'extérieur.
            </p>
            <p className="p-long">
              Le 1er tempérament entoure la roue des notes :{" "}
            </p>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
};

export default ComparatorModal;
