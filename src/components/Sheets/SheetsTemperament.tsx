import React, { useEffect, useState } from 'react';
import {IonButton, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonToolbar} from '@ionic/react';

import {RouteComponentProps} from 'react-router-dom';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import { Temperament } from '../../model/Temperament/Temperament';
import EqualTemperament from '../../model/Temperament/Equal';

const SheetsTemperament: React.FC<{id : number}> = ({id}) => {

  console.log("il y a quelqu'un ? ");
  //console.log(match);
  //console.log(history);
  console.log(id);

  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    // Update fitfhs and thirds circles and frequencies
    (async () => {
      const temp = await fetchTemperamentPropsById(id);
      setTemperament(temp);
      console.log(temperament)
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
        <IonHeader>
          <IonToolbar className="headerPages">
            <IonGrid className="ion-padding-horizontal">
              <IonRow className="ion-align-items-center">
                <IonCol size="8">
                  <h2>{temperament.nameFR}</h2>
                </IonCol>
                <IonCol size="1" offset="2">
                  <IonButton color="primary" routerDirection="root" routerLink="/sheets" >Back</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div>{temperament.nameFR}</div>
          <div>{temperament.idTemperament}</div>
        </IonContent>
    </>
  );
};

/*
export default React.memo(
  SheetsTemperament,
  (prevProps, nextProps) => (
    prevProps.history.location.key === nextProps.history.location.key
    && prevProps.match.path === nextProps.match.path)
);
*/

export default SheetsTemperament;