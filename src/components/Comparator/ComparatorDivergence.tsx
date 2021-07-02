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

type ComparatorDivergenceProps = {
  nameTemperament1: string;
  nameTemperament2: string;
  divergenceTemperament1: { [key: string]: number | null };
  divergenceTemperament2: { [key: string]: number | null };
};

const ComparatorDivergence: React.FC<ComparatorDivergenceProps> = ({
  nameTemperament1,
  nameTemperament2,
  divergenceTemperament1,
  divergenceTemperament2,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <h3>Déviation</h3>
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="6">
                <strong> {nameTemperament1} </strong>
              </IonCol>
              <IonCol size="6">
                <strong>{nameTemperament2}</strong>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2">
                <strong> F♯ </strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F_sharp} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F_sharp} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2">
                <strong> C♯ </strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.C_sharp} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.C_sharp} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2">
                <strong> G♯ </strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.G_sharp} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.G_sharp} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2">
                <strong>E♭</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.E_flat} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.E_flat} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2">
                <strong>B♭</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.E} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.E} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2">
                <strong>F</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2">
                <strong>C</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2">
                <strong>G</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2">
                <strong>D</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2">
                <strong>A</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2">
                <strong>E</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2">
                <strong>B</strong>
              </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ComparatorDivergence;
