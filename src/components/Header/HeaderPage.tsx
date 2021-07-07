import React from "react";
import {
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRouterLink,
  IonRow,
  IonToolbar,
} from "@ionic/react";

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
  if (doubleTitle && buttonModal) {
    return (
      <>
      <IonHeader className="ion-no-border">
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
                  <IonIcon
                    style={{ fontSize: "3rem" } /* TODO Find a better way */}
                    src={"/assets/logotypes/button-help.svg"}
                  ></IonIcon>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <hr />
      </>
    );
  }

  if (doubleTitle && buttonReturn) {
    return (
      <>
      <IonHeader className="ion-no-border">
        <IonToolbar className="headerPages">
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-align-items-center">
              <IonCol size="8">
                <h3>{buttonModalText}</h3>
                <h2>{buttonModalsubText}</h2>
              </IonCol>
              <IonCol size="1" offset="2">
                <IonRouterLink routerDirection="root" routerLink="/sheets">
                  <IonIcon
                    src="../../assets/logotypes/icon-back.svg"
                    size="large"
                  ></IonIcon>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <hr />
      </>
    );
  }

  if (buttonModal) {
    return (
      <>
      <IonHeader className="ion-no-border">
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
                  <IonIcon
                    style={{ fontSize: "3rem" } /* TODO Find a better way */}
                    src={"/assets/logotypes/button-help.svg"}
                  ></IonIcon>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <hr />
      </>
    );
  }

  if (buttonReturn) {
    return (
      <>
      <IonHeader className="ion-no-border">
        <IonToolbar className="headerPages">
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-align-items-center">
              <IonCol className="header-title" size="8">
                <h2>{buttonModalText}</h2>
              </IonCol>
              <IonCol className="text-right" size="4">
                <IonRouterLink routerDirection="root" routerLink="/learn">
                  <IonIcon
                    src="../../assets/logotypes/icon-back.svg"
                    size="large"
                  ></IonIcon>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <hr />
      </>
    );
  }

  return (
    <>
      <IonHeader className="ion-no-border">
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
      <hr />
    </>
  );
};

export default HeaderPage;
