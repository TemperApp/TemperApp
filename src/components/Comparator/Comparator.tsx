import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import { fetchTemperaments } from '../../engine/DataAccessor';
import { TemperamentDBType } from '../../engine/DB';

//Style
import './Comparator.css'
import ComparatorSVG from './ComparatorSVG';
import EqualTemperament from '../../model/Temperament/Equal';

const Comparator: React.FC = () => {

  const [temperament1, setTemperament1] = useState<TemperamentDBType>(EqualTemperament);
  const [temperament2, setTemperament2] = useState<TemperamentDBType>(EqualTemperament);
  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  return (
    <>
      <IonGrid className="px-5">
        <IonRow>
          <IonCol size="5">
            <span className="select-label pb-1">
              Anneaux internes
            </span>
            <IonSelect
              value={temperament1} placeholder="Tempérament"
              onIonChange={e => setTemperament1(e.detail.value)}>
              {temperamentsList.map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>
          <IonCol size="2">
            <IonButton onClick={() => {
              if(temperament1.name !== temperament2.name){
                console.log("switch possible");
                let temp = temperament1;
                setTemperament1(temperament2);
                setTemperament2(temp);
              }
            }}>Switch</IonButton>
          </IonCol>
          <IonCol size="5">
            <span className="select-label pb-1">
              Anneaux externes
            </span>
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
        idTemperament1={temperament1.idTemperament}
        idTemperament2={temperament2.idTemperament}
      />
    </>
  );
};

export default Comparator;
