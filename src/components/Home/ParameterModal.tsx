import React, { useState } from 'react';
import { IonModal, IonContent, IonIcon, IonGrid, IonRow, IonCol, IonToggle, IonSelect, IonSelectOption, IonInput } from '@ionic/react';
import {ellipsisVertical, arrowBackOutline} from "ionicons/icons";

import './ParameterModal.css';

export const ParameterModal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState<number>(440);

  return (
    <IonContent >
        <IonModal isOpen={showModal} cssClass='ParameterModal' swipeToClose={true}
        onDidDismiss={() => setShowModal(false)} backdrop-dismiss={true}>
            <div>
                <IonContent  fullscreen scrollY={true}>
                    <IonGrid className="parameterContent">
                        <IonRow>
                            <IonCol size='6' className="ColTemperApp">
                                <h3>Paramètres</h3>
                            </IonCol>
                            <IonCol size='6' className="ColTemperApp-right">
                                <IonIcon onClick={() => setShowModal(false)} icon={arrowBackOutline} size="large"></IonIcon>
                            </IonCol>
                        </IonRow>
                        <div className="gradientBar"></div>
                        <IonRow>
                            <IonCol size='8'>
                                <p>Thème sombre</p>
                            </IonCol>
                            <IonCol size='4' className="ColTemperApp">
                                <IonToggle value="dark" />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <p>Langue</p>
                            </IonCol>
                            <IonCol size='8' className="ColTemperApp">
                                <IonSelect okText="Valider" cancelText="Annuler">
                                    <IonSelectOption value="french">Français</IonSelectOption>
                                    <IonSelectOption value="english">English</IonSelectOption>
                                    <IonSelectOption value="german">Allemand</IonSelectOption>
                                    <IonSelectOption value="spanish">Espagnol</IonSelectOption>
                                </IonSelect>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol size='4'>
                                <p>LA défault</p>
                            </IonCol>
                            <IonCol size='8' className="ColTemperApp">
                                <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
                            </IonCol>
                        </IonRow>
                        </IonGrid>
                        <IonGrid className="parameterContent">
                        <IonRow>
                            <IonCol size='6' className="ColTemperApp">
                                <h3>Présentation</h3>
                            </IonCol>
                            <IonCol size='6'className="ColTemperApp">
                            </IonCol>
                        </IonRow>
                        <div className="gradientBar"></div>
                        <IonRow>
                        <IonCol size='12'>
                                <p>TemperApp est une application à destination des musicien·ne·s, qui a pour vocation la réactualisation de la pratique de l’accord et des tempéraments anciens. Elle constitue un outil scientifique et pédagogique favorisant l’apprentissage de l’accord à l’oreille, dont le principe se base sur la notion de rapport intervallaire. 
                                </p>
                        </IonCol>
                        </IonRow>
                        
                    </IonGrid>
                </IonContent>
            </div>
        </IonModal>
        <IonIcon onClick={() => setShowModal(true)} icon={ellipsisVertical} size="large"></IonIcon>
    </IonContent>
  );
};

export default ParameterModal;