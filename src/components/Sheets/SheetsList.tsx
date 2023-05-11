/* eslint-disable eqeqeq */
import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import collapseMotion from '../../utils/collapseMotion';
import { IonButton, IonGrid, IonRow, IonCol, IonSearchbar } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';

import '../App/Collapse.css';
import '../App/ButtonTemper.css';
import { Temperament } from '../../model/Temperament/Temperament';
import ArrowCollapseSVG from './ArrowCollapseSVG';
import { fetchTemperaments } from '../../engine/DataAccessor';
import UserContext from '../../store/user-context';
import {
  ascendingOrder,
  descendingOrder,
  temperamentFavorite,
} from '../../utils/favorite';
import { useTranslation } from 'react-i18next';

const sort = (tmpmts: Temperament[]) => {
  return tmpmts.sort((t1, t2) => {
    const name1 = t1.name;
    const name2 = t2.name;
    return name1 < name2 ? -1 : name1 > name2 ? 1 : 0;
  });
};

const SheetsMenu: React.FC = () => {
  const user = useContext(UserContext);
  const [favoriteTemperaments, setMyTemperaments] = useState<Temperament[]>([]);
  const [temperamentsList, setTemperamentsList] = useState<Temperament[]>([]);
  const [temperamentsSort, setTemperamentsSort] = useState<
    'NAME_DESC' | 'NAME_ASC' | 'PERIOD_ASC' | 'PERIOD_DESC'
  >('NAME_ASC');

  const [searchText, setSearchText] = useState('');
  const [request, setRequest] = useState<RegExp>(RegExp('([A-z])\\w+', 'i'));
  const { t } = useTranslation();

  const sortTemperamentByName = (sort: 'NAME_DESC' | 'NAME_ASC') => () =>
    setTemperamentsSort(sort);
  const sortTemperamentByPeriod = (sort: 'PERIOD_DESC' | 'PERIOD_ASC') => () =>
    setTemperamentsSort(sort);

  useEffect(() => {
    const temperaments = sort(fetchTemperaments(t));
    // 🤔 why dupes?
    setMyTemperaments(temperaments);
    setTemperamentsList(temperaments);
  }, [t]);

  useEffect(() => {
    if (searchText !== '') {
      setRequest(
        new RegExp(
          '\\b(\\w*' +
            searchText
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[^a-z0-9\s-]/g, '') +
            '\\w*)\\b',
          'i'
        )
      );
    } else {
      setRequest(new RegExp('([A-z])\\w+', 'i'));
    }
  }, [searchText]);

  const items = [
    {
      key: '0',
      label: 'Mes Favoris',
      elements: favoriteTemperaments,
    },
    {
      key: '1',
      label: 'Tous les tempéraments',
      elements: temperamentsList,
    },
  ];

  return (
    <>
      <IonSearchbar
        className="px-8 pb-2 pt-4"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
      />
      <Collapse
        accordion={true}
        defaultActiveKey={items[1].key}
        openMotion={collapseMotion}
        expandIcon={(e: any) => <ArrowCollapseSVG isActive={e.isActive} />}
      >
        <Panel
          key={items[0].key}
          header={items[0].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              {items[0].elements
                // .filter(
                //   (t: Temperament) =>
                //     t.nameFR
                //       .normalize('NFD')
                //       .replace(/[\u0300-\u036f]/g, '')
                //       .search(request) !== -1
                // )
                .sort(ascendingOrder('name'))
                .filter(
                  (temperament: Temperament) =>
                    temperamentFavorite(temperament.id, user.favorite) === true
                )
                .map((temperament: Temperament) => (
                  <IonCol size="6" key={temperament.id}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      routerLink={`/sheets/temperament/${temperament.id}`}
                    >
                      {temperament.name}
                    </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>

        <Panel
          key={items[1].key}
          header={items[1].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByName('NAME_ASC')}
                  size="small"
                >
                  A-Z ⬆
                </IonButton>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByName('NAME_DESC')}
                  size="small"
                >
                  A-Z ⬇
                </IonButton>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByPeriod('PERIOD_ASC')}
                  size="small"
                >
                  Période ⬆
                </IonButton>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByPeriod('PERIOD_DESC')}
                  size="small"
                >
                  Période ⬇
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              {items[1].elements
                // .filter(
                //   (t: Temperament) =>
                //     t.nameFR
                //       .normalize('NFD')
                //       .replace(/[\u0300-\u036f]/g, '')
                //       .search(request) !== -1
                // )
                .sort((a, b) => {
                  switch (temperamentsSort) {
                    case 'PERIOD_DESC':
                      return descendingOrder('periodNum')(a, b);
                    case 'PERIOD_ASC':
                      return ascendingOrder('periodNum')(a, b);
                    case 'NAME_DESC':
                      return descendingOrder('name')(a, b);
                    case 'NAME_ASC':
                    default:
                      return ascendingOrder('name')(a, b);
                  }
                })
                .map((temperament: Temperament) => (
                  <IonCol size="6" key={temperament.id}>
                    <IonButton
                      className="btn-primary ion-text-wrap"
                      expand="block"
                      color="temperapp"
                      routerLink={`/sheets/temperament/${temperament.id}`}
                    >
                      {temperament.name}
                    </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>
      </Collapse>
    </>
  );
};

export default SheetsMenu;
