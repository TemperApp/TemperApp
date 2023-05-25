import React, { useState } from 'react';
import { IonContent, IonHeader, IonModal, IonPage } from '@ionic/react';
import { useTranslation } from 'react-i18next';

import './Compare.css';
import Comparator from '../components/Comparator';
import PageHeader from './Page/PageHeader';
import PageModal from './Page/PageModal';
import ComparatorModalLegendSVG from '../components/Comparator/ComparatorModalLegendSVG';

const CompareModalContent: React.FC = () => {
  const { t } = useTranslation('comparator');
  return (
    <>
      <h4 className="py-3">{t('modalSubTitle')}</h4>
      <p
        className="p-long"
        dangerouslySetInnerHTML={{ __html: t('howToCompareTop') }}
      />
      <ComparatorModalLegendSVG />
      <p
        className="p-long"
        dangerouslySetInnerHTML={{ __html: t('howToCompareBottom') }}
      />
    </>
  );
};

const Compare: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation('comparator');

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={t('pageTitle')}
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen page-header">
        <PageModal title={t('modalTitle')} onQuit={() => setShowModal(false)}>
          <CompareModalContent />
        </PageModal>
      </IonModal>

      <IonContent fullscreen scrollY={true}>
        <Comparator />
      </IonContent>
    </IonPage>
  );
};

export default Compare;
