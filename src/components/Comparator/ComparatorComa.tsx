import React, { useState } from "react";
import {
  IonSlides, IonSlide, IonCard,
  IonCardContent, IonCardHeader, IonCardTitle,
} from "@ionic/react";

import Toggler from "../inputs/Toggler";
import ComparatorThirdComaCircle from "./ComparatorThirdComaCircle";
import ComparatorFifthComaCircle from "./ComparatorFifthComaCircle";

import { Temperament } from "../../model/Temperament/Temperament";
import { fifthQ, thirdQ } from "../../model/Divergence";

import "./Comparator.css";

type ComparatorComaProps = {
  temperament1: Temperament;
  temperament2: Temperament;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const ComparatorComa: React.FC<ComparatorComaProps> = ({
  temperament1,
  temperament2,
}) => {
  const [isCpMode, setCpMode] = useState<boolean>(true);

  return (
    <>
      <IonSlides pager={true} options={slideOpts} className="max-w-lg max-h-lg">
        <IonSlide className="px-6">
          <IonCard className="comma-card h-full">
            <IonCardHeader className="py-2">
              <IonCardTitle className="px-1 text-left">
                <h4>Fractions de commas affectant les quintes</h4>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="max-w-lg max-h-lg">
                <svg
                  className="comparator-comas"
                  viewBox="2.5 2 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ComparatorFifthComaCircle
                    temperament1={temperament1}
                    temperament2={temperament2}
                    qualityNote1={fifthQ(temperament1.cpExp5th)}
                    qualityNote2={fifthQ(temperament2.cpExp5th)}
                    isCpMode={isCpMode}
                  />
                </svg>
              </div>
              <div className="comma-toggler">
                <Toggler
                  typeContentText={true}
                  contentLeft="Cs"
                  contentRight="Cp"
                  conditionLeft={!isCpMode}
                  conditionRight={isCpMode}
                  onClickLeft={() => setCpMode(false)}
                  onClickRight={() => setCpMode(true)}
                />
              </div>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide className="px-6">
          <IonCard className="comma-card h-full">
            <IonCardHeader className="py-2">
              <IonCardTitle className="px-1 text-left">
                <h4>Fractions de commas affectant les tierces</h4>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div className="max-w-lg max-h-lg">
                <svg
                  className="comparator-comas"
                  viewBox="2.5 2 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ComparatorThirdComaCircle
                    temperament1={temperament1}
                    temperament2={temperament2}
                    qualityNote1={thirdQ(temperament1.csExp3rd)}
                    qualityNote2={thirdQ(temperament2.csExp3rd)}
                  />
                </svg>
              </div>
            </IonCardContent>
          </IonCard>
        </IonSlide>
      </IonSlides>
    </>
  );
};

export default ComparatorComa;
