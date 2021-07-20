import React from "react";

//Style
import "./Comparator.css";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import { Temperament } from "../../model/Temperament/Temperament";
import { FIFTHS } from "../../model/Note/sequences";

type ComparatorDivergenceProps = {
  temperament1: Temperament,
  temperament2: Temperament,
};

const ComparatorDivergence: React.FC<ComparatorDivergenceProps> = ({
  temperament1, temperament2
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="px-2">
            <h3>Déviation</h3>
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid>
            <IonRow className="justify-end items-end">
              <IonCol size="5.25" offset="1.25">
                <strong>{temperament1.nameFR}</strong>
              </IonCol>
              <IonCol size="5.25">
                <strong>{temperament2.nameFR}</strong>
              </IonCol>
            </IonRow>

            {FIFTHS.map((note, idx) => (
              <IonRow
                key={idx}
                className={`justify-end items-end ${idx % 2 ? 'color-gradient-bg' : ''}`}
              >
                <IonCol size="1.5">
                  <strong>{note.string(true, false)}</strong>
                </IonCol>
                <IonCol size="5.25" className="text-right pr-12">
                  <p>{temperament1.deviation[note.toNotes()].toFixed(2)}</p>
                </IonCol>
                <IonCol size="5.25" className="text-right pr-12">
                  <p>{temperament2.deviation[note.toNotes()].toFixed(2)}</p>
                </IonCol>
              </IonRow>
            ))}

          </IonGrid>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ComparatorDivergence;
