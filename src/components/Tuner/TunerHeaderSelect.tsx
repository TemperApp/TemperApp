import React, { useEffect } from 'react';
import { IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { TemperamentDBType } from '../../engine/DB';

type TunerHeaderProps = {
  defaultTemperamentId: number,
  defaultFreqA4: number,
  temperamentsList: TemperamentDBType[],
  onTemperamentChange: (e: any) => void,
  onFreqA4Change: (e: any) => void,
}

const TunerHeaderSelect: React.FC<TunerHeaderProps> = ({
  defaultTemperamentId,
  defaultFreqA4,
  temperamentsList,
  onTemperamentChange,
  onFreqA4Change,
}) => {
  //console.info('🔹 [TunerHeader]: Render')

  return (
    <section className="pt-3 px-4 w-full flex items-center justify-between testHeader">
      <IonSelect
        className="flex-grow"
        value={defaultTemperamentId}
        placeholder="Tempérament"
        onIonChange={onTemperamentChange}
      >
        {temperamentsList.map((t: TemperamentDBType) => (
          <IonSelectOption key={t.idTemperament} value={t.idTemperament}>
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

export default React.memo(
  TunerHeaderSelect,
  (prevProps, nextProps) =>
    prevProps.defaultTemperamentId === nextProps.defaultTemperamentId &&
    prevProps.defaultFreqA4 === nextProps.defaultFreqA4 &&
    prevProps.temperamentsList === nextProps.temperamentsList
);