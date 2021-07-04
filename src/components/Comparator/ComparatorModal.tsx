import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

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
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonGrid className="px-6 py-2">
              <IonRow className="ion-align-items-center">
                <IonCol size="8">
                  <h3>Explications</h3>
                </IonCol>
                <IonCol size="1" offset="2">
                  <div
                    className="btn-header-modal"
                    onClick={() => setShowModal(false)}
                  >
                    <span>X</span>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
          <hr />
        </IonHeader>
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
