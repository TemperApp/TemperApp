import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonIcon,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import PageHeader from './Page/PageHeader';
import PageModal from './Page/PageModal';
import Tuner from '../components/Tuner/Tuner';
import './Tune.css';

const TuneModalContent: React.FC = () => {
  const { t } = useTranslation('tuner');

  return (
    <>
      <h4 className="py-3">{t('modalSubTitle1')}</h4>

      <strong>{t('modalIncipit1')}</strong>
      <div dangerouslySetInnerHTML={{__html: t('modalContent1')}} />

      <strong>{t('modalIncipit1.5')}</strong>
      <div dangerouslySetInnerHTML={{__html: t('modalContent1.5')}} />

      <div className="max-w-64 mx-auto py-5 flex justify-between">
        <div className="flex items-center mr-3">
          <div
            className="h-12 w-12 mr-2 rounded-full flex-shrink-0"
            style={{ border: '2px solid var(--color-contrast)' }}
          />
          <span className="block m-0">{t('fifths')}</span>
        </div>

        <div className="flex items-center">
          <div
            className="h-6 w-6 mr-2 rounded-full flex-shrink-0"
            style={{ border: '2px solid var(--color-contrast)' }}
          />
          <span className="block m-0">{t('thirds')}</span>
        </div>
      </div>

      {/* Central Card */}
      <IonCard className="flex justify-center items-center w-full py-1">
        <IonCardContent className="w-full">
          <IonGrid>
            <IonRow className="flex justify-center items-center w-full">
              <IonCol size="5">
                <strong>{t('fifths')}</strong>
              </IonCol>
              <IonCol size="5">
                <strong>{t('thirds')}</strong>
              </IonCol>
            </IonRow>
            <IonRow className="flex justify-center items-center w-full">
              <IonCol size="1.5">
                <div
                  className="h-12 mr-4 w-full"
                  style={{
                    border: '2px solid var(--color-theme)',
                    height: '400px',
                    background: 'var(--legend-gradient-fifth)',
                  }}
                ></div>
              </IonCol>
              <IonCol size="4.5">
                <div className="w-full">
                  <p className="p-legend">{t('centralCard.excessivelyTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.veryTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.tempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.wellTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.equallyTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.pure')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.bigFifth')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.loup')}</p>
                </div>
              </IonCol>
              <IonCol size="1.5">
                <div
                  className="h-12 w-full mr-4"
                  style={{
                    border: '2px solid var(--color-theme)',
                    height: '400px',
                    background: 'var(--legend-gradient-third)',
                  }}
                ></div>
              </IonCol>
              <IonCol size="4.5">
                <div className="mr-4 w-full">
                  <p className="p-legend">{t('centralCard.pure')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.lightlyTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.wellTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.tempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.equallyTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.veryTempered')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.pythagorean')}</p>
                  <div className="legend-line"></div>
                  <p className="p-legend">{t('centralCard.loup')}</p>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>

      <strong>{t('modalIncipit2')}</strong>
      <div dangerouslySetInnerHTML={{__html: t('modalContent2')}} />

      <h4 className="py-3">{t('modalSubTitle3')}</h4>
      <strong>{t('modalIncipit3')}</strong>
      <IonGrid>
        <IonRow>
          <IonCol
            size="3"
            className="flex flex-wrap justify-center content-center"
          >
            <IonIcon
              src="/assets/logotypes/icon-tuner-hz-mode.svg"
              style={{ stroke: 'var(--color-contrast)' }}
            ></IonIcon>
          </IonCol>
          <IonCol size="9" >
            <p className="p-long" dangerouslySetInnerHTML={{__html: t('modalContent3')}} />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol
            size="3"
            className="flex flex-wrap justify-center content-center"
          >
            <IonIcon
              src="/assets/logotypes/icon-tuner-bpm-mode.svg"
              style={{ stroke: 'var(--color-contrast)' }}
            ></IonIcon>
          </IonCol>
          <IonCol size="9">
            <p className="p-long" dangerouslySetInnerHTML={{__html: t('modalContent3.5')}} />
          </IonCol>
        </IonRow>
      </IonGrid>
      <h4 className="py-3">{t('modalSubTitle4')}</h4>

      <p className="p-long" dangerouslySetInnerHTML={{__html: t('modalContent4')}} />

      <h4 className="py-3">{t('modalSubTitle5')}</h4>
      <IonGrid>
        <IonRow>
          <IonCol
            size="3"
            className="flex flex-wrap justify-center content-center"
          >
            <IonIcon
              src="/assets/logotypes/icon-tuning-procedure.svg"
              style={{
                background: 'var(--color-button)',
                width: '40px',
                height: '40px',
                borderRadius: '100px',
              }}
            ></IonIcon>
          </IonCol>
          <IonCol size="9">
            <p className="p-long" dangerouslySetInnerHTML={{__html: t('modalContent5')}} />
          </IonCol>
        </IonRow>
      </IonGrid>
      <div dangerouslySetInnerHTML={{__html: t('modalContent5.5')}} />
      <div className="py-10"></div>
    </>
  );
};

const Tune: React.FC = () => {
  const [_mainTitle, setMainTitle] = useState('');
  const [_subTitle, setSubTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { t } = useTranslation('tuner');

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={_mainTitle}
          subTitle={_subTitle}
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen page-header">
        <PageModal title={t('modalTitle')} onQuit={() => setShowModal(false)}>
          <TuneModalContent />
        </PageModal>
      </IonModal>

      <IonContent scrollY={false}>
        {' '}
        {/* TODO Align self safe center when height is too small */}
        <Tuner setMainTitle={setMainTitle} setSubTitle={setSubTitle} />
      </IonContent>
    </IonPage>
  );
};

export default Tune;
