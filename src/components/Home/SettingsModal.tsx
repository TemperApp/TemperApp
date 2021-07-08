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
  IonToolbar,
} from "@ionic/react";
import { ellipsisVertical } from "ionicons/icons";
import Settings from "../../engine/Settings";

import "../App/Modal.css";

export const SettingsModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState<number>(440);

  return (
    <>
      <IonIcon
        className="mt-3 p-3 h-6 w-6"
        onClick={() => setShowModal(true)}
        icon={ellipsisVertical}
      />

      <IonModal
        isOpen={showModal}
        cssClass="modal-fullscreen"
        swipeToClose={true}
        onDidDismiss={() => setShowModal(false)}
        backdrop-dismiss={true}
      >
        <IonToolbar>
          <IonGrid className="px-6 pt-3">
            <IonRow className="ion-align-items-center">
              <IonCol size="6">
                <h3 className="m-0">Paramètres</h3>
              </IonCol>
              <IonCol size="6" className="text-right pt-2">
                <IonIcon
                  onClick={() => setShowModal(false)}
                  src="../../assets/logotypes/icon-back.svg"
                  size="large"
                ></IonIcon>
              </IonCol>
            </IonRow>
          </IonGrid>
          <hr />
        </IonToolbar>

        <IonContent fullscreen scrollY={true}>
          <IonGrid className="px-6 py-2">
            <div className="mt-3">
              <IonRow>
                <IonCol size="8">
                  <p>{Settings.darkTheme() ? "Thème sompe" : "Thème clair"}</p>
                </IonCol>
                <IonCol size="2" className="text-center" offset="1">
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
                <IonCol size="6" className="text-center" offset="1">
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
                  <p>LA défaut</p>
                </IonCol>
                <IonCol size="3.5" className="text-center" offset="4">
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

          <IonGrid className="px-6 py-2">
            <IonRow>
              <IonCol size="12">
                <h3 className="py-5">Présentation</h3>
                <hr />
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
            <IonRow>
              <IonCol size="12">
                <h3 className="py-5">Crédits et sources</h3>
                <hr />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <p className="p-long">
                  TemperApp est issue du travail de recherche réalisé par :
                </p>
                <p className="p-long">
                  <strong>Elisa Barbessi</strong>, professeur de clavecin et histoire de la musique au CRR du Grand-Avignon, 
                  à l’initiative du projet. Doctorante à l’université Sorbonne, membre d’IReMus, Elisa est 
                  directrice artistique d’ARTEMIDA. 
                </p>
                <p className="p-long">
                  <strong>Jérôme Bertier</strong>, pianiste, claveciniste et organiste, professeur au conservatoire d’Auxerre. 
                </p>
                <p className="p-long">
                  <strong>Pierre Cazes</strong>, claveciniste. Il enseigne au CNSMDP l'histoire, la théorie et la pratique des tempéraments ainsi que la basse continue. Il est professeur de clavecin au CRR93 (Aubervilliers/La Courneuve).
                </p>
                <p className="p-long">
                  <strong>Franck Jedrzejewski</strong>, chercheur au CEA, docteur habilité en musicologie et philosophie. Ancien Vice-président du Collège International de Philosophie, a publié une vingtaine d'ouvrages.
                </p>
                <p className="p-long">
                  <strong>Théodora Psychoyou</strong>, IReMus - Sorbonne Université.
                </p>

                <p className="p-long">
                  Le projet bénéficie de nombreux soutiens sous la forme de ressources humaines et techniques :
                  <ul>
                    <li>Le Conservatoire National Supérieur de Musique et de Danse de Paris,</li>
                    <li>le laboratoire "Lutheries - Acoustique - Musique" (LAM),            </li>
                    <li>l'Institut Jean le Rond d’Alembert,                                 </li>
                    <li>IReMus,                                                             </li>
                    <li>Revue Musicorum,                                                    </li>
                    <li>l’association ARTEMIDA,                                             </li>
                    <li>et le Conservatoire du Grand-Avignon.                               </li>
                  </ul>
                </p>
              </IonCol>
            </IonRow>
          </IonGrid>
          <div className="py-10"></div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default SettingsModal;
