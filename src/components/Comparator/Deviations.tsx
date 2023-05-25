import React from "react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { useTranslation } from 'react-i18next';


import Card from "../Card";
import { Temperament } from "../../model/Temperament/Temperament";
import { FIFTHS } from "../../model/Note/sequences";

import "./Comparator.css";

type DeviationsProps = {
  t1: Temperament,
  t2: Temperament,
};

const Deviations: React.FC<DeviationsProps> = ({
  t1, t2
}) => {
  const { t } = useTranslation('comparator');

  return (
    <div className="px-6 mx-auto max-w-lg">
      <Card title={t('deviationsFromEqual')}>
        <IonGrid>
          <IonRow className="justify-end items-end">
            <IonCol size="5.25" offset="1.25">
              <strong>{t1.name}</strong>
            </IonCol>
            <IonCol size="5.25">
              <strong>{t2.name}</strong>
            </IonCol>
          </IonRow>

          {FIFTHS.map((note, idx) => (
            <IonRow
              key={idx}
              className={`justify-end items-end ${idx % 2 && 'color-gradient-bg'}`}
            >
              <IonCol size="1.5">
                <strong>{note.string(true, false)}</strong>
              </IonCol>
              <IonCol size="5.25" className="text-right pr-12">
                <p>{t1.deviation[note.toNotes()].toFixed(2)}</p>
              </IonCol>
              <IonCol size="5.25" className="text-right pr-12">
                <p>{t2.deviation[note.toNotes()].toFixed(2)}</p>
              </IonCol>
            </IonRow>
          ))}

        </IonGrid>
      </Card>
    </div>
  );
};

export default Deviations;
