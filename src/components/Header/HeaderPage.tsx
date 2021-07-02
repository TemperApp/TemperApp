import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRouterLink,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import React from "react";


type headerProps = {
  doubleTitle: boolean;
  buttonModal: boolean;
  buttonModalsubText: string;
  buttonReturn: boolean;
  buttonModalText: string;
  setShowModal: (state: boolean) => void;
};

const HeaderPage: React.FC<headerProps> = ({
  doubleTitle,
  buttonModal,
  buttonModalsubText,
  buttonReturn,
  buttonModalText,
  setShowModal,
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
              <IonCol className="header-title" size="8">
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
              <IonCol className="header-title" size="8">
                <h2>{buttonModalText}</h2>
              </IonCol>
              <IonCol className="ColTemperApp-right" size="4">
                <IonRouterLink              
                  routerDirection="root"
                  routerLink="/learn"
                >
                  <IonIcon icon={arrowBackOutline} size="large"></IonIcon>
                </IonRouterLink>
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
              <IonCol className="header-title" size="8">
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
