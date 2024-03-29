import React from 'react';
import { IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { ascendingOrder } from '../../utils/favorite';
import { FREQ_A4_MAX, FREQ_A4_MIN } from '../../model/Note/a4';
import { Temperament } from '../../model/Temperament/Temperament';

type TunerHeaderProps = {
  defaultTemperamentId: string;
  defaultFreqA4: number;
  temperamentsList: Temperament[];
  onTemperamentChange: (e: any) => void;
  onFreqA4Change: (e: any) => void;
};

const TunerHeaderInputs: React.FC<TunerHeaderProps> = ({
  defaultTemperamentId,
  defaultFreqA4,
  temperamentsList,
  onTemperamentChange,
  onFreqA4Change,
}) => {
  return (
    <div className="px-4 pt-2 w-full tune-header-select">
      <IonSelect
        className="flex-grow"
        value={defaultTemperamentId}
        placeholder="Tempérament"
        onIonChange={onTemperamentChange}
      >
        {temperamentsList
          .sort(ascendingOrder('name'))
          .map((temperament: Temperament) => (
            <IonSelectOption key={temperament.id} value={temperament.id}>
              {temperament.name}
            </IonSelectOption>
          ))}
      </IonSelect>
      <div className="ml-4 flex items-center flex-shrink-0">
        <span>A4 (Hz)</span>
        <IonInput
          id="input-a4"
          className="w-16 ml-1"
          type="number"
          value={defaultFreqA4}
          min={String(FREQ_A4_MIN)}
          max={String(FREQ_A4_MAX)}
          onIonChange={(e) => {
            const value = Number(e.detail.value);
            if (value >= FREQ_A4_MIN && value <= FREQ_A4_MAX)
              onFreqA4Change(value);
          }}
        ></IonInput>
      </div>
    </div>
  );
};

export default React.memo(
  TunerHeaderInputs,
  (prevProps, nextProps) =>
    prevProps.defaultTemperamentId === nextProps.defaultTemperamentId &&
    prevProps.defaultFreqA4 === nextProps.defaultFreqA4 &&
    prevProps.temperamentsList === nextProps.temperamentsList
);
