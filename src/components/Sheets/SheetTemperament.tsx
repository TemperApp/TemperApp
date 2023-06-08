import React, { useContext, useEffect, useState } from 'react';
import Sheet from './Sheet';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import { Temperament } from '../../model/Temperament/Temperament';
import { useParams } from 'react-router';
import { IonButton, IonIcon } from '@ionic/react';
import VideoLearn from '../Learn/VideoLearn';
import ResourcesLearn from '../Learn/ResourcesLearn';
import GlobalStatesContext from '../../store/global-states-context';
import Card from '../Card';
import Commas from './SheetCommas';
import Graph from './SheetGraph';
import SheetDoubleRings from './SheetDoubleRings';
import { useTranslation } from 'react-i18next';

const SheetTemperament: React.FC = () => {
  const { t } = useTranslation(['temperaments', 'temper']);
  const global = useContext(GlobalStatesContext);
  const { id } = useParams<{ id: string }>();
  const [temperament, setTemperament] = useState<Temperament>(
    fetchTemperamentPropsById(t, 'Equal')
  );

  useEffect(() => {
    setTemperament(fetchTemperamentPropsById(t, id));
  }, [t, id]);

  return (
    <Sheet
      mainTitle={temperament.name}
      subTitle={t('pageTitle', { ns: 'temper' })}
      id={id}
    >
      <div className="px-6">
        {temperament.theorist !== '' ? (
          <p className="p-long">
            <b>{t('theorist', { ns: 'temper' })}</b> : {temperament.theorist}{' '}
          </p>
        ) : (
          ''
        )}
        {temperament.period !== '' ? (
          <p className="p-long">
            <b>{t('period', { ns: 'temper' })}</b> : {temperament.period}{' '}
          </p>
        ) : (
          ''
        )}
        {temperament.geographicalArea !== '' ? (
          <p className="p-long">
            <b>{t('geographicalArea', { ns: 'temper' })}</b> :{' '}
            {temperament.geographicalArea}{' '}
          </p>
        ) : (
          ''
        )}
        {temperament.nature !== '' ? (
          <p className="p-long">
            <b>{t('nature', { ns: 'temper' })}</b> : {temperament.nature}{' '}
          </p>
        ) : (
          ''
        )}
        {temperament.structuralParticularity !== '' ? (
          <p className="p-long">
            <b>{t('structuralParticularity', { ns: 'temper' })}</b> :{' '}
            {temperament.structuralParticularity}{' '}
          </p>
        ) : (
          ''
        )}
        {temperament.commentary !== '' && (
          <>
            <h4>{t('commentary', { ns: 'temper' })}</h4>
            <p className="p-long">{temperament.commentary}</p>
          </>
        )}
      </div>

      <div className="px-6 mx-auto max-w-lg">
        <Card
          title={t('fifthsAndThirdsQuality', { ns: 'temper' })}
          classNameContent="pb-14"
        >
          <SheetDoubleRings temperament={temperament} />
        </Card>
      </div>

      <div className="mx-auto max-w-lg">
        <Commas temperament={temperament} />
      </div>

      <div className="mx-auto max-w-lg">
        <Graph temperament={temperament} />
      </div>
      <div className="px-6 mx-auto max-w-lg">
        {temperament.soundReferences[0].url !== ''
          ? temperament.soundReferences.map((e) => {
              return (
                <VideoLearn
                  titreText={e.title}
                  videoLink={e.url}
                  thumbnail={
                    e.img !== undefined ? e.img : 'assets/icon/thumbnail.png'
                  }
                  key={e.url}
                />
              );
            })
          : ''}
        <ResourcesLearn
          resourcesList={temperament.sources}
          title={t('resources', { ns: 'temper' })}
        />
      </div>

      <div className="relative flex justify-end right-4 pb-16">
        <IonButton
          id="btn-goto-tune"
          className="btn-round fixed"
          onClick={() => global.setTunerTemperamentId(temperament.id)}
          routerLink={`/tune`}
        >
          <IonIcon
            style={{ fontSize: '3rem' } /* TODO Find a better way */}
            src="/assets/logotypes/button-tune.svg"
          />
        </IonButton>
      </div>
    </Sheet>
  );
};

export default SheetTemperament;
