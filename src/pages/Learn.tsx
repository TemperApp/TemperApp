import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';
import PageHeader from './Page/PageHeader';
import './Learn.css';

const Learn: React.FC = () => {
  const { t } = useTranslation('learn');
  const items = [
    {
      label: t('categories.definitions'),
      routerLink: '/learn/definition',
      src: '/assets/logotypes/logo-def.svg',
    },
    {
      label: t('categories.maths'),
      routerLink: '/learn/mathematics',
      src: '/assets/logotypes/logo-maths.svg',
    },
    {
      label: t('categories.physics'),
      routerLink: '/learn/physics',
      src: '/assets/logotypes/logo-phys.svg',
    },
    {
      label: t('categories.tips'),
      routerLink: '/learn/advices',
      src: '/assets/logotypes/logo-conseil.svg',
    },
    {
      label: t('categories.glossary'),
      routerLink: '/learn/glossary',
      src: '/assets/logotypes/logo-glossaire.svg',
    },
  ];

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader mainTitle={(() => t('pageTitle'))()} />
      </IonHeader>

      <IonContent scrollY={true}>
        {items.map(({ label, routerLink, src }, idx) => (
          <IonButton
            key={idx}
            className="h-28 item-btn"
            expand="full"
            fill="clear"
            style={{ '--ripple-color': 'var(--color-contrast)' }}
            routerLink={routerLink}
          >
            <div className="flex w-full items-center justify-start">
              <IonIcon className="ml-8 item-icon" src={src} />
              <IonLabel className="pl-6 item-label">
                <h3>{label}</h3>
              </IonLabel>
            </div>
          </IonButton>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Learn;
