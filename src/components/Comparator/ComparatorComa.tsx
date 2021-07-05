import React from "react";

//Style
import "./Comparator.css";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { Temperament } from "../../model/Temperament/Temperament";
import { FIFTHS } from "../../model/Note/sequences";
import ComparatorFifthCircle from "./ComparatorFifthCircle";
import { fifthQ } from "../../model/Divergence";

type ComparatorComaProps = {
  temperament1: Temperament,
  temperament2: Temperament,
};

const ComparatorComa: React.FC<ComparatorComaProps> = ({
  temperament1, temperament2
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="px-4">
            <h3>Fractions de comas affectant les quintes</h3>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <svg id="comparator" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 400 400">
            <ComparatorFifthCircle
              qualityNote1={fifthQ(temperament1.cpExp5th)}
              qualityNote2={fifthQ(temperament2.cpExp5th)}
            />
          </svg>
          </IonCardContent>
      </IonCard>
    </>
  );
};

export default ComparatorComa;
