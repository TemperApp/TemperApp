import React, { useState } from "react";
import { IonSlides, IonSlide } from "@ionic/react";

import Toggler from "../inputs/Toggler";
import ComparatorThirdComaCircle from "./ComparatorThirdComaCircle";
import ComparatorFifthComaCircle from "./ComparatorFifthComaCircle";
import Card from "../Card";

import { Temperament } from "../../model/Temperament/Temperament";
import { fifthQ, thirdQ } from "../../model/Divergence";

import "./Comparator.css";

type ComparatorComaProps = {
  temperamentInner: Temperament;
  temperamentOuter: Temperament;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const ComparatorComa: React.FC<ComparatorComaProps> = ({
  temperamentInner,
  temperamentOuter,
}) => {
  const [isCpMode, setCpMode] = useState<boolean>(true);

  return (
    <>
      <IonSlides pager={true} options={slideOpts} className="max-w-lg max-h-lg">
        <IonSlide className="px-6">
          <Card title="Fractions de commas affectant les quintes">
            <div className="max-w-lg max-h-lg">
              <svg
                className="comparator-comas"
                viewBox="2.5 2 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ComparatorFifthComaCircle
                  temperamentInner={temperamentInner}
                  temperamentOuter={temperamentOuter}
                  qualityNoteInner={fifthQ(temperamentInner.cpExp5th)}
                  qualityNoteOuter={fifthQ(temperamentOuter.cpExp5th)}
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
          </Card>
        </IonSlide>

        <IonSlide className="px-6">
          <Card title="Fractions de commas affectant les tierces">
            <div className="max-w-lg max-h-lg">
              <svg
                className="comparator-comas"
                viewBox="2.5 2 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ComparatorThirdComaCircle
                  temperamentInner={temperamentInner}
                  temperamentOuter={temperamentOuter}
                  qualityNoteInner={thirdQ(temperamentInner.csExp3rd)}
                  qualityNoteOuter={thirdQ(temperamentOuter.csExp3rd)}
                />
              </svg>
            </div>
          </Card>
        </IonSlide>
      </IonSlides>
    </>
  );
};

export default ComparatorComa;
