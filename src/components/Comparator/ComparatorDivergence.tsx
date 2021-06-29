import React from 'react';

//Style
import './Comparator.css'
import { convertFifthQualityToColor } from '../Tuner/utils/colorCircle';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';

type ComparatorDivergenceProps = {
  nameTemperament1 : string,
  nameTemperament2 : string,
  divergenceTemperament1: {[key: string]: number|null}
  divergenceTemperament2: {[key: string]: number|null}
}

const ComparatorDivergence: React.FC<ComparatorDivergenceProps> = ({nameTemperament1, nameTemperament2 ,divergenceTemperament1, divergenceTemperament2}) => {

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>DEVIATION</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid className="ion-padding-horizontal">
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="5"> {nameTemperament1} </IonCol>
              <IonCol size="5"> {nameTemperament2} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2"> F♯ </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F_sharp} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F_sharp} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2"> C♯ </IonCol>
              <IonCol size="5"> {divergenceTemperament1.C_sharp} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.C_sharp} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2"> G♯ </IonCol>
              <IonCol size="5"> {divergenceTemperament1.G_sharp} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.G_sharp} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2"> E♭ </IonCol>
              <IonCol size="5"> {divergenceTemperament1.E_flat} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.E_flat} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2"> B♭ </IonCol>
              <IonCol size="5"> {divergenceTemperament1.E} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.E} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2"> F </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2"> C </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2"> G </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2"> D </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2"> A </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end divergenceColorOdd">
              <IonCol size="2"> E </IonCol>
              <IonCol size="5"> {divergenceTemperament1.F} </IonCol>
              <IonCol size="5"> {divergenceTemperament2.F} </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-end ion-align-items-end">
              <IonCol size="2"> B </IonCol>
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