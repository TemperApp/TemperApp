import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import {
  fetchTemperamentPropsById,
  fetchTemperaments,
} from '../../engine/DataAccessor';

import ComparatorQuadRings from './QuadRings';
import ComparatorCommas from './Commas';
import ComparatorDeviations from './Deviations';
import ComparatorGraph from './CompareGraph'
import SheetGraph from '../Sheets/SheetGraph';

import EqualTemperament from '../../model/Temperament/Equal';
import { Temperament } from '../../model/Temperament/Temperament';
import { ascendingOrder } from '../../utils/favorite';

import './Comparator.css';

const Comparator: React.FC = () => {
  const [idTemperament1, setIdTemperament1] = useState<string>('Equal');
  const [idTemperament2, setIdTemperament2] = useState<string>('Equal');
  const [temperament1, setTemperament1] = useState<Temperament>(
    EqualTemperament as Temperament
  );
  const [temperament2, setTemperament2] = useState<Temperament>(
    EqualTemperament as Temperament
  );
  const [temperamentsList, setTemperamentsList] = useState<Array<Temperament>>(
    []
  );
  const { t } = useTranslation(['temperaments', 'comparator']);

  useEffect(() => {
    const temperaments = fetchTemperaments(t);
    setTemperamentsList(temperaments);
  }, [t]);

  useEffect(() => {
    setTemperament1(fetchTemperamentPropsById(t, idTemperament1));
  }, [t, idTemperament1]);

  useEffect(() => {
    setTemperament2(fetchTemperamentPropsById(t, idTemperament2));
  }, [t, idTemperament2]);

  return (
    <>
      <IonGrid id="comparator-inputs" className="px-6 w-full fixed">
        <IonRow className="items-center">
          <IonCol size="5.25">
            <IonSelect
              className="w-full"
              value={idTemperament1}
              placeholder="Tempérament"
              onIonChange={(e) => setIdTemperament1(e.detail.value)}
            >
              {temperamentsList
                .sort(ascendingOrder('name'))
                .map((temperament: Temperament) => (
                  <IonSelectOption key={temperament.id} value={temperament.id}>
                    {temperament.name}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonCol>

          <IonCol size="1.5">
            <IonButton
              className="flex my-0 mx-auto h-6"
              fill="clear"
              onClick={() => {
                const aux = idTemperament1;
                setIdTemperament1(idTemperament2);
                setIdTemperament2(aux);
              }}
            >
              <IonIcon
                className="flex items-end justify-end"
                src="assets/logotypes/icon-exchange.svg"
                style={{ stroke: 'var(--color-button)' }}
              ></IonIcon>
            </IonButton>
          </IonCol>

          <IonCol size="5.25">
            <IonSelect
              className="w-full"
              value={idTemperament2}
              placeholder={t('temper', {ns: 'comparator'})}
              onIonChange={(e) => setIdTemperament2(e.detail.value)}
            >
              {temperamentsList
                .sort(ascendingOrder('name'))
                .map((temperament: Temperament) => (
                  <IonSelectOption key={temperament.id} value={temperament.id}>
                    {temperament.name}
                  </IonSelectOption>
                ))}
            </IonSelect>
          </IonCol>
        </IonRow>
      </IonGrid>

      <ComparatorQuadRings t1={temperament1} t2={temperament2} />

      <ComparatorCommas t1={temperament1} t2={temperament2} />

      <ComparatorDeviations t1={temperament1} t2={temperament2} />
      {idTemperament1 === idTemperament2 ? (<SheetGraph temperament={temperament1}/>) : 

      (<ComparatorGraph t1={temperament1} t2={temperament2} />)
      }
      
    </>
  );
};

export default Comparator;
