import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import { fetchTemperamentPropsById, fetchTemperaments } from '../../engine/DataAccessor';
import { TemperamentDBType } from '../../engine/DB';

//Style
import './Comparator.css'
import ComparatorSVG from './ComparatorSVG';
import EqualTemperament from '../../model/Temperament/Equal';
import { Temperament } from '../../model/Temperament/Temperament';
import ComparatorComa from './ComparatorComa';
import ComparatorDivergence from './ComparatorDivergence';

const Comparator: React.FC = () => {
  
  const [tmpmt1, setTmpmt1] = useState<Temperament>(EqualTemperament);
  const [tmpmt2, setTmpmt2] = useState<Temperament>(EqualTemperament);
  const [temperament1, setTemperament1] = useState<TemperamentDBType>(EqualTemperament);
  const [temperament2, setTemperament2] = useState<TemperamentDBType>(EqualTemperament);
  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTmpmt1(await fetchTemperamentPropsById(temperament1.idTemperament));
    })();
  }, [tmpmt1]);

  useEffect(() => {
    (async () => {
      setTmpmt2(await fetchTemperamentPropsById(temperament2.idTemperament));
    })();
  }, [tmpmt2]);

  return (
    <>
      <IonGrid className="px-6">
        <IonRow>
          <IonCol size="5.25">
            <span className="select-label pb-1">
              Anneaux internes
            </span>
            <IonSelect className="w-full"
              value={temperament1} placeholder="Tempérament"
              onIonChange={e => setTemperament1(e.detail.value)}>
              {temperamentsList.map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>
          <IonCol size="1.5">
            <IonButton
            fill="clear"
            onClick={() => {
              if(temperament1.name !== temperament2.name){
                console.log("switch possible");
                let temp = temperament1;
                setTemperament1(temperament2);
                setTemperament2(temp);
              }
            }}>
              <IonIcon className="flex items-end"
                src="assets/logotypes/icon-exchange.svg"
                style={{stroke:"var(--color-contrast)"}}
              ></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol size="5.25">
            <span className="select-label pb-1">
              Anneaux externes
            </span>
            <IonSelect className="w-full"
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

      <div className="px-6">
        <ComparatorSVG
          idTemperament1={temperament1.idTemperament}
          idTemperament2={temperament2.idTemperament}
        />
      </div>

      <ComparatorComa
        temperament1={tmpmt1}
        temperament2={tmpmt2}
      />

      <div className="px-6">
        <ComparatorDivergence
          temperament1={tmpmt1}
          temperament2={tmpmt2}
        />
      </div>
    </>
  );
};

export default Comparator;
