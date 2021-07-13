import React from 'react';
import { IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { TemperamentDBType } from '../../engine/DB';

const TunerHeader: React.FC<any> = ({ // TODO Update any
  defaultTemperament,
  defaultFreqA4,
  temperamentsList,
  onTemperamentChange,
  onFreqA4Change,
}) => {
  console.info('🔹 [TunerHeader]: Render')
  return (
    <section className="pt-3 px-4 w-full flex items-center justify-between">
      <IonSelect
        className="flex-grow"
        value={defaultTemperament}
        placeholder="Tempérament"
        onIonChange={onTemperamentChange}
      >
        {temperamentsList.map((t: TemperamentDBType) => (
          <IonSelectOption key={t.idTemperament} value={t}>
            {t.nameFR}
          </IonSelectOption>
        ))}
      </IonSelect>
      <div className="ml-4 flex items-center flex-shrink-0">
        <span>A4 (Hz)</span>
        <IonInput
          id="input-a4"
          className="w-16 ml-1"
          type="number"
          min="300"
          max="500"
          value={defaultFreqA4}
          onIonChange={onFreqA4Change}
        ></IonInput>
      </div>
    </section>
  );
};

export default TunerHeader;
