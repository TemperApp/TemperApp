import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonModal,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";

type tunerModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  darkTheme: boolean;
};

const TunerModal: React.FC<tunerModalProps> = ({
  showModal,
  setShowModal,
  darkTheme,
}) => {
  return (
    <>
      {/* MODAL EXPLICATION*/}
      <IonModal isOpen={showModal} cssClass="ParameterModal">
        <IonHeader>
          <IonToolbar>
            <IonGrid className="parameterContent">
              <IonRow className="ion-align-items-center">
                <IonCol size="8">
                  <h3>EXPLICATIONS</h3>
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
        </IonHeader>
        <IonContent>
          <IonGrid className="parameterContent">
            <h4>Qualité des quintes et des tierces</h4>
            <p className="p-long">
              Le visuel TemperApp vous permet de prévoir en un coup d’oeil la
              sonorité de tous les accords majeurs dans le tempérament
              sélectionné. Chaque note du cycle des quintes représente la
              tonalité majeur correspondantes.
            </p>
            <p className="p-long">
              Pour chaque accord majeur, les qualités des quintes et des tierces
              sont représentées par une couleur. Les tierces sont représentées à
              l’extérieur du cycle, les quintes à l’intérieur.
            </p>
            <IonRow className="ion-align-items-center ion-justify-content-evenly">
              <IonCol size="5" className="tunerModalCircleContainer">
                <div id="tunerModalThirdCircle"></div>
                <p>TIERCE</p>
              </IonCol>
              <IonCol size="5" className="tunerModalCircleContainer">
                <div id="tunerModalFifthCircle"></div>
                <p>QUINTE</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
};

export default TunerModal;
