import { IonCol, IonContent, IonGrid, IonHeader, IonModal, IonRow, IonToolbar } from '@ionic/react';
import React from 'react';

type tunerModalProps = {
  showModal: boolean,
  setShowModal: (state: boolean) => void, 
}

const TunerModal: React.FC<tunerModalProps> = ({showModal, setShowModal}) => {

  return(
    <>
      {/* MODAL EXPLICATION*/}
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonGrid className="ion-padding-horizontal headerPages">
              <IonRow className="ion-align-items-center">
                <IonCol size="8" >
                  <h1>EXPLICATIONS</h1>
                </IonCol>
                <IonCol size="1" offset="2">
                  <div className = "btn-header-modal" onClick={() => setShowModal(false)}> 
                    <span>X</span>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
          <div className="gradientBar"></div>
        </IonHeader>
        <IonContent>
          <IonGrid className="ion-padding-horizontal headerPages">
            <h2>Qualité des quintes et des tierces</h2>
            <p>Le visuel TemperApp vous permet de prévoir en un coup d’oeil la sonorité de tous les accords majeurs 
              dans le tempérament sélectionné. Chaque note du cycle des quintes représente la tonalité majeur correspondantes.</p> 
            <p>Pour chaque accord majeur, les qualités des quintes et des tierces sont représentées par une couleur. 
              Les tierces sont représentées à l’extérieur du cycle, les quintes à l’intérieur.</p>
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
  )
};

export default TunerModal;
