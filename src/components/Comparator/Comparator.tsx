import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import { fetchTemperamentPropsById, fetchTemperaments } from '../../engine/DataAccessor';
import { TemperamentDBType } from '../../engine/DB';

import ComparatorQuadRings from './QuadRings';
import ComparatorComma from './Comma';
import ComparatorDivergence from './ComparatorDivergence';

import EqualTemperament from '../../model/Temperament/Equal';
import { Temperament } from '../../model/Temperament/Temperament';
import { ascendingOrder } from '../../utils/favorite';

import './Comparator.css';

const Comparator: React.FC = () => {
  
  const [idTemperament1, setIdTemperament1] = useState<number>(1);
  const [idTemperament2, setIdTemperament2] = useState<number>(1);
  const [temperament1, setTemperament1] = useState<Temperament>(EqualTemperament);
  const [temperament2, setTemperament2] = useState<Temperament>(EqualTemperament);
  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);

  useEffect(() => {
    (async () => {
      setTemperamentsList(await fetchTemperaments());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setTemperament1(await fetchTemperamentPropsById(idTemperament1));
    })();
  }, [idTemperament1]);

  useEffect(() => {
    (async () => {
      setTemperament2(await fetchTemperamentPropsById(idTemperament2));
    })();
  }, [idTemperament2]);

  return (
    <>
      <IonGrid id="comparator-inputs" className="px-6 w-full fixed">
        <IonRow className="items-center">
          <IonCol size="5.25">
            <IonSelect className="w-full"
              value={idTemperament1} placeholder="Tempérament"
              onIonChange={e => setIdTemperament1(e.detail.value)}
              >
              {temperamentsList.sort(ascendingOrder).map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t.idTemperament}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>

          <IonCol size="1.5">
            <IonButton className="switch-inputs-btn h-6"
            fill="clear"
            onClick={() => {
              const aux = idTemperament1;
              setIdTemperament1(idTemperament2);
              setIdTemperament2(aux);
            }}>
              <IonIcon className="flex items-end justify-end"
                src="assets/logotypes/icon-exchange.svg"
                style={{stroke:"var(--color-button)"}}
              ></IonIcon>
            </IonButton>
          </IonCol>

          <IonCol size="5.25">
            <IonSelect className="w-full"
              value={idTemperament2} placeholder="Tempérament"
              onIonChange={e => setIdTemperament2(e.detail.value)}
            >
              {temperamentsList.sort(ascendingOrder).map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t.idTemperament}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>
        </IonRow>
      </IonGrid>

      <ComparatorQuadRings
        t1={temperament1}
        t2={temperament2}
      />
    
      <ComparatorComma
        t1={temperament1}
        t2={temperament2}
      />

      <ComparatorDivergence
        t1={temperament1}
        t2={temperament2}
      />
    </>
  );
};

export default Comparator;
