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
          <IonCardTitle className="px-4">
            Déviation
          </IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonGrid className="px-4">
            <IonRow className="justify-end items-end">
              <IonCol size="5" offset="2">
                <strong>{temperament1.nameFR}</strong>
              </IonCol>
              <IonCol size="5">
                <strong>{temperament2.nameFR}</strong>
              </IonCol>
            </IonRow>

            {FIFTHS.map((note, index) => (
              <IonRow className={`justify-end items-end ${index % 2 ? 'color-gradient-bg' : ''}`}>
                <IonCol size="2">
                  <strong>{note.string(true, false)}</strong>
                </IonCol>
                <IonCol size="5" className="text-right pr-12">
                  {temperament1.deviation[note.toNotes()].toFixed(2)}
                </IonCol>
                <IonCol size="5" className="text-right pr-12">
                  {temperament2.deviation[note.toNotes()].toFixed(2)}
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
