import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';

import "../../pages/Sheets.css"
import PitchCircle from '../Tuner/PitchCircle';

type circleProps = {
    idTemp: number,

  }

const CircleSheet : React.FC<circleProps> = ({idTemp}) => {

return (
    <div className ="LearnBox">
        <h3>Qualité des quintes et des tierces</h3>
        <IonGrid>
            <IonRow className="ion-padding-horizontal ion-justify-content-center">        
                    <PitchCircle
                    isHzMode={true}
                    freqA4={440}
                    idTemperament={idTemp}
                    darkTheme={false}
                    />
            </IonRow>
            <IonRow>
                <IonCol size="6">
                    <h5>ici des cercles</h5>
                </IonCol>
                <IonCol size="6">
                    <h5>ici une modal</h5>
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>
)
}; 

export default CircleSheet;