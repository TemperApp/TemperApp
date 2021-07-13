import React, { useState } from "react";
import { IonSlides, IonSlide, IonContent } from '@ionic/react';

//Style
import "./Comparator.css";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import { Temperament } from "../../model/Temperament/Temperament";
import { fifthQ, thirdQ } from "../../model/Divergence";
import ComparatorThirdComaCircle from "./ComparatorThirdComaCircle";
import ComparatorFifthComaCircle from "./ComparatorFifthComaCircle";

type ComparatorComaProps = {
  temperament1: Temperament,
  temperament2: Temperament,
};

const slideOpts = {
  initialSlide: 0,
  speed: 400
};


const ComparatorComa: React.FC<ComparatorComaProps> = ({
  temperament1, temperament2,
}) => {

  const [isCpMode, setCpMode] = useState<boolean>(true);

  return (
    <>
      <IonContent scroll-y="false">
        <IonSlides pager={true} options={slideOpts} className="h-100">
          <IonSlide>
            <IonCard className = "commaCard">
              <IonCardHeader className="py-1">
                <IonCardTitle className="px-1 text-left">
                  <h3>Fractions de comas affectant les quintes</h3>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent> 
                <div className="w-100 flex justify-center">
                  <svg className="comparator-comas" viewBox="15 0 350 351" fill="none" xmlns="http://www.w3.org/2000/svg">                <ComparatorFifthComaCircle
                      temperament1={temperament1}
                      temperament2={temperament2}
                      qualityNote1={fifthQ(temperament1.cpExp5th)}
                      qualityNote2={fifthQ(temperament2.cpExp5th)}
                      isCpMode={isCpMode}
                  /></svg>
                </div>
                <div className="w-20 btn-mode">
                  <IonButton
                    onClick={() => setCpMode(false)}
                    className={`btn-mode-bpm m-0
                      ${!isCpMode ? " btn-mode-activated" : ""}`} 
                  >
                    cs
                  </IonButton>
                  <IonButton
                    onClick={() => setCpMode(true)}
                    className={`btn-mode-hz m-0
                      ${isCpMode ? " btn-mode-activated" : ""}`}
                  >
                    cp
                  </IonButton>
                </div>
             </IonCardContent>
           </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className = "commaCard">
              <IonCardHeader>
                <IonCardTitle className="px-1 text-left">
                  <h3>Fractions de comas affectant les tierces</h3>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="w-100 flex justify-center">
                  <svg className="comparator-comas" viewBox="15 0 375 351" fill="none" xmlns="http://www.w3.org/2000/svg">                
                    <ComparatorThirdComaCircle
                      temperament1={temperament1}
                      temperament2={temperament2}
                      qualityNote1={thirdQ(temperament1.csExp3rd)}
                      qualityNote2={thirdQ(temperament2.csExp3rd)}
                  /></svg>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </>
  );
};

export default ComparatorComa;
