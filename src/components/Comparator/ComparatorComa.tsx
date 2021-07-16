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
import Toggler from "../inputs/Toggler";

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
        <IonSlides pager={true} options={slideOpts}>
          <IonSlide className="px-6">
            <IonCard>
              <IonCardHeader className="py-1">
                <IonCardTitle className="px-4 text-left">
                  <h3>Fractions de comas affectant les quintes</h3>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent> 
                <div className="w-full flex justify-center">
                  <svg className="comparator-comas" viewBox="15 0 350 351" fill="none" xmlns="http://www.w3.org/2000/svg">                <ComparatorFifthComaCircle
                      temperament1={temperament1}
                      temperament2={temperament2}
                      qualityNote1={fifthQ(temperament1.cpExp5th)}
                      qualityNote2={fifthQ(temperament2.cpExp5th)}
                      isCpMode={isCpMode}
                  /></svg>
                </div>
                <Toggler 
                  typeContentText={true}
                  contentLeft = 'Cs'
                  contentRight = 'Cp'
                  conditionLeft = {!isCpMode }
                  conditionRight = {isCpMode}
                  onClickLeft = {() => setCpMode(false)} 
                  onClickRight = {() => setCpMode(true)}

                />
             </IonCardContent>
           </IonCard>
          </IonSlide>
          <IonSlide className="px-6">
            <IonCard>
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
