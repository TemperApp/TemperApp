import React from "react";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

import Card from "../Card";
import { Temperament } from "../../model/Temperament/Temperament";
import { FIFTHS } from "../../model/Note/sequences";

import "./Comparator.css";

type ComparatorDivergenceProps = {
  t1: Temperament,
  t2: Temperament,
};

const ComparatorDivergence: React.FC<ComparatorDivergenceProps> = ({
  t1, t2
}) => {
  return (
    <section className="px-6">
      <Card title='Déviations par rapport au tempérament égal'>
        <IonGrid>
          <IonRow className="justify-end items-end">
            <IonCol size="5.25" offset="1.25">
              <strong>{t1.nameFR}</strong>
            </IonCol>
            <IonCol size="5.25">
              <strong>{t2.nameFR}</strong>
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
    </section>
  );
};

export default ComparatorDivergence;
