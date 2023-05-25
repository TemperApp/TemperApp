import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
} from "@ionic/react";
import { useTranslation } from 'react-i18next';

import PageHeader from "./Page/PageHeader";
import SheetsList from "../components/Sheets/SheetsList";

const Sheets: React.FC = () => {
  const { t } = useTranslation('sheets');

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={t('pageTitle')}
        />
      </IonHeader>

      <IonContent scrollY={true}>
        <SheetsList />
      </IonContent>
    </IonPage>
  );
};

export default Sheets;
