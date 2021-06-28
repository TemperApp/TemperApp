import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { fetchTemperaments } from '../../engine/DataAccessor';
import { TemperamentDBType } from '../../engine/DB';

//Style

import './Comparator.css'
import ComparatorDivergence from './ComparatorDivergence';
import ComparatorFifthCircle from './ComparatorFifthCircle';
import ComparatorNotesCircle from './ComparatorNotesCircle';
import ComparatorSVG from './ComparatorSVG';
import ComparatorThirdCircle from './ComparatorThirdCircle';

const Comparator: React.FC = () => {

  const [temperament, setTemperament] = useState<TemperamentDBType>({idTemperament: 1, name: "Equal", nameFR: "Égal"});
  const [temperament2, setTemperament2] = useState<TemperamentDBType>({idTemperament: 1, name: "Equal", nameFR: "Égal"});
  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);

  const fetchTemperamentsList = async () => {
    const temperaments = await fetchTemperaments();
    setTemperamentsList(temperaments);
  } 

  useEffect(() => {
    fetchTemperamentsList();
  }, []);

  return (
    <>
      <IonGrid className="ion-padding-horizontal">
        <IonRow className="ion-justify-content-between ion-align-items-end">
          <IonCol size="6">
            <IonSelect
              value={temperament} placeholder="Tempérament"
              onIonChange={e => setTemperament(e.detail.value)}>
              {temperamentsList.map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>
          <IonCol size="6">
            <IonSelect
              value={temperament2} placeholder="Tempérament"
              onIonChange={e => setTemperament2(e.detail.value)}>
              {temperamentsList.map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>
        </IonRow>
      </IonGrid>

      
      <ComparatorSVG 
        nameTemperament1 = {temperament.nameFR}
        nameTemperament2 = {temperament2.nameFR}
        idTemperament1 = {temperament.idTemperament}
        idTemperament2 = {temperament2.idTemperament}
      />
      

    </>
    
  );
};

export default Comparator;
