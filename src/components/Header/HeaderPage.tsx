import {
  IonButton,
  IonCol,
  IonGrid,
  IonHeader,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import isHzMode from "../Tuner/Tuner";

type headerProps = {
  doubleTitle: boolean;
  buttonModal: boolean;
  buttonModalsubText: string;
  buttonReturn: boolean;
  buttonModalText: string;
  setShowModal: (state: boolean) => void;
  darkTheme: boolean;
};

const HeaderPage: React.FC<headerProps> = ({
  doubleTitle,
  buttonModal,
  buttonModalsubText,
  buttonReturn,
  buttonModalText,
  setShowModal,
  darkTheme,
}) => {
  if (doubleTitle) {
    return (
      <IonHeader>
        <IonToolbar className="headerPages">
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-align-items-center">
              <IonCol size="8">
                <h3>{buttonModalText}</h3>
                <h2>{buttonModalsubText}</h2>
              </IonCol>
              <IonCol size="1" offset="2">
                <div
                  className="btn-header-modal"
                  onClick={() => setShowModal(true)}
                >
                  <span>?</span>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
  if (buttonModal) {
    return (
      <IonHeader>
        <IonToolbar className="headerPages">
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-align-items-center">
              <IonCol size="8">
                <h2>{buttonModalText}</h2>
              </IonCol>
              <IonCol size="1" offset="2">
                <div
                  className="btn-header-modal"
                  onClick={() => setShowModal(true)}
                >
                  <span>?</span>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }

  if (buttonReturn) {
    return (
      <IonHeader>
        <IonToolbar className="headerPages">
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-align-items-center">
              <IonCol size="8">
                <h2>{buttonModalText}</h2>
              </IonCol>
              <IonCol size="1" offset="2">
                <IonButton
                  color="primary"
                  routerDirection="root"
                  routerLink="/learn"
                >
                  Back
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonGrid className="ion-padding-horizontal headerPages">
            <IonRow className="ion-align-items-center">
              <IonCol size="8">
                <h2>{buttonModalText}</h2>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default HeaderPage;
