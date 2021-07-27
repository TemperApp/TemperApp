import React, { useEffect, useState } from 'react';
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import { fetchTemperaments } from '../../engine/DataAccessor';
import { TemperamentDBType } from '../../engine/DB';

//Style
import './Comparator.css'
import ComparatorSVG from './ComparatorSVG';
import EqualTemperament from '../../model/Temperament/Equal';
import { ascendingOrder } from '../../utils/favorite';

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
      <IonGrid className="px-6">
        <IonRow>
          <IonCol size="5.25">
            <IonSelect className="w-full"
              value={temperament1} placeholder="Tempérament"
              onIonChange={e => setTemperament1(e.detail.value)}
              >
              {temperamentsList.sort(ascendingOrder).map((t: TemperamentDBType) =>
                <IonSelectOption key={t.idTemperament} value={t}>
                  {t.nameFR}
                </IonSelectOption>
              )}
            </IonSelect>
          </IonCol>

          <IonCol size="1.5">
            <IonButton className="switch-inputs-btn"
            fill="clear"
            onClick={() => {
              if(temperament1.name !== temperament2.name){
                const aux = temperament1;
                setTemperament1(temperament2);
                setTemperament2(aux);
              }
            }}>
              <IonIcon className="flex items-end justify-end"
                src="assets/logotypes/icon-exchange.svg"
                style={{stroke:"var(--color-button)"}}
              ></IonIcon>
            </IonButton>
          </IonCol>

          <IonCol size="5.25">
            <IonSelect className="w-full"
              value={temperament2} placeholder="Tempérament"
              onIonChange={e => setTemperament2(e.detail.value)}
            >
              {temperamentsList.sort(ascendingOrder).map((t: TemperamentDBType) =>
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
