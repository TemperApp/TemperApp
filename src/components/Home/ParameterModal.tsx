import React, { useState } from "react";
import {
  IonModal,
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import { ellipsisVertical, arrowBackOutline } from "ionicons/icons";
import Settings from "../../engine/Settings";

import "../App/Modal.css";

export const ParameterModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState<number>(440);

  return (
    <>
      <IonModal
        isOpen={showModal}
        cssClass="ParameterModal"
        swipeToClose={true}
        onDidDismiss={() => setShowModal(false)}
        backdrop-dismiss={true}
      >
        <IonHeader>
          <IonToolbar>
            <IonGrid className="parameterContent">
              <IonRow>
                <IonCol size="6" className="ColTemperApp">
                  <h3>Paramètres</h3>
                </IonCol>
                <IonCol size="6" className="ColTemperApp-right">
                  <IonIcon
                    onClick={() => setShowModal(false)}
                    src="../../assets/logotypes/icon-back.svg"
                    size="large"
                  ></IonIcon>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen scrollY={true}>
          <IonGrid className="parameterContent">
            <div className="parameter-options">
              <IonRow>
                <IonCol size="8">
                  <p>{Settings.darkTheme() ? "Thème sombre" : "Thème clair"}</p>
                </IonCol>
                <IonCol size="2" className="ColTemperApp" offset="1">
                  <IonToggle
                    checked={Settings.darkTheme()}
                    value="dark"
                    id="themeToggle"
                    onClick={(e: any) => { Settings.darkTheme(e.target.checked) }}
                  ></IonToggle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="4">
                  <p>Langue</p>
                </IonCol>
                <IonCol size="6" className="ColTemperApp" offset="1">
                  <IonSelect
                    placeholder="language"
                    okText="Valider"
                    cancelText="Annuler"
                  >
                    <IonSelectOption value="french">Français</IonSelectOption>
                    <IonSelectOption value="english">English</IonSelectOption>
                    <IonSelectOption value="german">Deutsch</IonSelectOption>
                    <IonSelectOption value="spanish">Español</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="4">
                  <p>LA défault</p>
                </IonCol>
                <IonCol size="3.5" className="ColTemperApp" offset="4">
                  <IonInput
                    type="number"
                    value={number}
                    placeholder="Enter Number"
                    onIonChange={(e) =>
                      setNumber(parseInt(e.detail.value!, 10))
                    }
                  ></IonInput>
                </IonCol>
              </IonRow>
            </div>
          </IonGrid>
          <IonGrid className="parameterContent">
            <IonRow>
              <IonCol size="12" className="ColTemperApp">
                <IonHeader>
                  <h3>Présentation</h3>
                </IonHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <p className="p-long">
                  TemperApp est une application à destination des musicien·ne·s,
                  qui a pour vocation la réactualisation de la pratique de
                  l’accord et des tempéraments anciens. Elle constitue un outil
                  scientifique et pédagogique favorisant l’apprentissage de
                  l’accord à l’oreille, dont le principe se base sur la notion
                  de rapport intervallaire.
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      <IonIcon
        className="parameter-button"
        onClick={() => setShowModal(true)}
        icon={ellipsisVertical}
      ></IonIcon>
    </>
  );
};

export default ParameterModal;
