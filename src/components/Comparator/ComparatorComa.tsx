import React, { useEffect, useState } from "react";

//Style
import "./Comparator.css";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonItemOptions,
  IonItemSliding,
} from "@ionic/react";
import { Temperament } from "../../model/Temperament/Temperament";
import { fifthQ, thirdQ } from "../../model/Divergence";
import ComparatorThirdComaCircle from "./ComparatorThirdComaCircle";
import ComparatorFifthComaCircle from "./ComparatorFifthComaCircle";

type ComparatorComaProps = {
  temperament1: Temperament,
  temperament2: Temperament,
};

const ComparatorComa: React.FC<ComparatorComaProps> = ({
  temperament1, temperament2,
}) => {

  const [isCpMode, setIsCpMode] = useState<boolean>(true);

  return (
    <>
      <IonItemSliding id="item100">
        <IonItem>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="px-4">
                <h3>Fractions de comas affectant les quintes</h3>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <svg className="comparator-comas" width="375" height="351" viewBox="50 0 375 351" fill="none" xmlns="http://www.w3.org/2000/svg">                <ComparatorFifthComaCircle
                  temperament1={temperament1}
                  temperament2={temperament2}
                  qualityNote1={fifthQ(temperament1.cpExp5th)}
                  qualityNote2={fifthQ(temperament2.cpExp5th)}
                />
              </svg>
              <div className="w-20 btn-mode">
                <IonButton
                  onClick={() => setIsCpMode(false)}
                  className={`btn-mode-bpm m-0
                    ${!isCpMode ? " btn-mode-activated" : ""}`} 
                >
                  cs
                </IonButton>
                <IonButton
                  onClick={() => setIsCpMode(true)}
                  className={`btn-mode-hz m-0
                    ${isCpMode ? " btn-mode-activated" : ""}`}
                >
                  cp
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </IonItem> 
        <IonItemOptions side="start">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className="px-4">
                <h3>Fractions de comas affectant les tierces</h3>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <svg className="comparator-comas" width="375" height="351" viewBox="50 0 375 351" fill="none" xmlns="http://www.w3.org/2000/svg">                
                <ComparatorThirdComaCircle
                  temperament1={temperament1}
                  temperament2={temperament2}
                  qualityNote1={thirdQ(temperament1.csExp3rd)}
                  qualityNote2={thirdQ(temperament2.csExp3rd)}
                />
              </svg>
            </IonCardContent>
          </IonCard>
        </IonItemOptions>
      </IonItemSliding>
    </>
  );
};

export default ComparatorComa;
