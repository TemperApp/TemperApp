import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import PitchCircle from '../Tuner/PitchCircle';

type circleProps = {
  idTemp: number,
}

const CircleSheet: React.FC<circleProps> = ({ idTemp }) => {
  return (
    <div className="learn-box">
      <h3>Qualité des quintes et des tierces</h3>
      <IonGrid>
        <IonRow className="ion-padding-horizontal ion-justify-content-center">
          <PitchCircle
            isHzMode={true}
            isClickable={false}
            freqA4={440}
            idTemperament={idTemp}
          />
        </IonRow>
        <IonRow>
          <IonCol size="6">
            <p>ici des cercles</p>
          </IonCol>
          <IonCol size="6">
            <p>ici une modal</p>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  )
};

export default CircleSheet;
