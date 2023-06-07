import React, { useContext } from 'react';
import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import collapseMotion from '../../utils/collapseMotion';
import { IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../App/Collapse.css';
import '../App/ButtonTemper.css';
import Waves from './Waves';
import ArrowCollapseSVG from '../Sheets/ArrowCollapseSVG';
import { fetchTemperaments } from '../../engine/DataAccessor';
import {
  ascendingOrder,
  descendingOrder,
  temperamentFavorite,
} from '../../utils/favorite';
import UserContext from '../../store/user-context';
import GlobalStatesContext from '../../store/global-states-context';
import { Temperament } from '../../model/Temperament/Temperament';

const HomeContent: React.FC = () => {
  const global = useContext(GlobalStatesContext);
  const user = useContext(UserContext);
  const [favoriteTemperaments, setMyTemperaments] = useState<Temperament[]>([]);
  const [famousTemperaments, setFamousTemperaments] = useState<Temperament[]>(
    []
  );
  const [temperamentsSort, setTemperamentsSort] = useState<
    'NAME_DESC' | 'NAME_ASC' | 'PERIOD_ASC' | 'PERIOD_DESC'
  >('NAME_ASC');
  const { t } = useTranslation();

  useEffect(() => {
    setMyTemperaments(fetchTemperaments(t));
    setFamousTemperaments(fetchTemperaments(t));
  }, [t]);

  const items = [
    {
      key: '0',
      label: t('favoriteTemperamentsLabel'),
      elements: favoriteTemperaments,
    },
    {
      key: '1',
      label: t('allTemperamentsLabel'),
      elements: famousTemperaments,
    },
  ];

  const sortTemperamentByName = (sort: 'NAME_DESC' | 'NAME_ASC') => () =>
    setTemperamentsSort(sort);
  const sortTemperamentByPeriod = (sort: 'PERIOD_DESC' | 'PERIOD_ASC') => () =>
    setTemperamentsSort(sort);

  return (
    <div className="home-content">
      <Waves />
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
                // .filter((t: Temperament) =>
                //   t.nameFR.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                // )
                .sort(ascendingOrder('name'))
                .filter(
                  (t: Temperament) =>
                    temperamentFavorite(t.id.toString(), user.favorite) === true
                )
                .map((t: Temperament) => (
                  <IonCol size="6" key={t.id}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      onClick={() => global.setTunerTemperamentId(t.id)}
                      routerLink={`/tune`}
                    >
                      {t.name}
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
            <IonRow class="ion-justify-content-around">
              <IonCol>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByName('NAME_ASC')}
                  size="small"
                >
                  {t('filters.nameAsc')}
                </IonButton>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByName('NAME_DESC')}
                  size="small"
                >
                  {t('filters.nameDesc')}
                </IonButton>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByPeriod('PERIOD_ASC')}
                  size="small"
                >
                  {t('filters.periodAsc')}
                </IonButton>
                <IonButton
                  className="btn-primary secondary"
                  color="temperapp"
                  onClick={sortTemperamentByPeriod('PERIOD_DESC')}
                  size="small"
                >
                  {t('filters.periodDesc')}
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              {items[1].elements
                // .filter((t: Temperament) =>
                //   t.nameFR.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
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
                .map((t: Temperament) => (
                  <IonCol size="6" key={t.id}>
                    <IonButton
                      className="btn-primary ion-text-wrap"
                      expand="block"
                      color="temperapp"
                      onClick={() => global.setTunerTemperamentId(t.id)}
                      routerLink={`/tune`}
                    >
                      {t.name}
                    </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>
      </Collapse>
    </div>
  );
};

export default HomeContent;
