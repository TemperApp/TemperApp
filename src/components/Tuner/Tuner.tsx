import React, { useState, useEffect, useContext, useCallback } from 'react';
import { IonGrid, IonRow } from '@ionic/react';

import SettingsContext from '../../store/settings-context';
import GlobalStatesContext from '../../store/global-states-context';

import TunerHeaderInputs from './TunerHeaderInputs';
import TunerHeaderKeyboard from './TunerHeaderKeyboard';
import TunerFooter from './TunerFooter';
import PitchCircle from './PitchCircle';

import { Temperament } from '../../model/Temperament/Temperament';
import { Procedure } from '../../model/Procedure';

import {
  fetchTemperamentPropsById,
  fetchTemperaments,
} from '../../engine/DataAccessor';

import './Tuner.css';
import { useTranslation } from 'react-i18next';

export enum TuneMode {
  BEATS = 'Beats', // TODO Find a better way to print text
  PITCHPIPE = 'Pitch pipe',
  PROCEDURE = 'Procedure',
}

type TunerProps = {
  setMainTitle: (t: string) => void;
  setSubTitle: (t: string) => void;
};

const Tuner: React.FC<TunerProps> = ({ setMainTitle, setSubTitle }) => {
  const settings = useContext(SettingsContext);
  const global = useContext(GlobalStatesContext);
  const { t } = useTranslation(['temperaments', 'tuner']);

  const [tuneMode, setTuneMode] = useState(TuneMode.BEATS);
  const [temperament, setTemperament] = useState<Temperament>(
    fetchTemperamentPropsById(t, 'Equal')
  );
  const [temperamentsList, setTemperamentsList] = useState<Temperament[]>([]);
  const [freqA4, setFreqA4] = useState<number>(settings.freqA4);
  const [proc, setProc] = useState<Procedure | null>(null);
  const [procStepIdx, setProcStepIdx] = useState<number>(0);
  const [procRepeatCount, setProcRepeatCount] = useState<number>(0);

  useEffect(() => {
    setFreqA4(settings.freqA4);
  }, [settings.freqA4]);

  useEffect(() => {
    if (tuneMode === TuneMode.PROCEDURE) {
      setSubTitle(t('procedureTitle', { ns: 'tuner' }));
      setMainTitle(temperament.name);
    } else {
      setSubTitle(t('beatsTitle', { ns: 'tuner' }));
      setMainTitle(tuneMode);
    }
  }, [t, tuneMode, setSubTitle, setMainTitle, temperament.name]);

  useEffect(() => {
    setTemperamentsList(fetchTemperaments(t));
  }, [t]);

  useEffect(() => {
    setTemperament(fetchTemperamentPropsById(t, global.tunerTemperamentId));
  }, [t, global.tunerTemperamentId]);

  useEffect(() => {
    if (tuneMode === TuneMode.PROCEDURE) setTuneMode(TuneMode.BEATS);
    setProc(
      temperament.procedure !== ''
        ? Procedure.parse(temperament.procedure)!
        : null
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [temperament]);

  const onProcedureNext = useCallback(() => {
    // useCallback for TuneFooter memoizing
    setProcStepIdx(procStepIdx + 1);
    setProcRepeatCount(0);
  }, [procStepIdx]);

  const onProcedurePrev = useCallback(() => {
    // useCallback for TuneFooter memoizing
    setProcStepIdx(procStepIdx - 1);
    setProcRepeatCount(0);
  }, [procStepIdx]);

  return (
    <div className="h-full flex content-around justify-center flex-wrap">
      {tuneMode === TuneMode.PROCEDURE ? (
        <TunerHeaderKeyboard
          tunedNotes={proc ? proc.getTunedNotesAtStep(procStepIdx) : []}
          noteToTune={proc ? proc.getNoteToTuneAtStep(procStepIdx) : null}
        />
      ) : (
        <TunerHeaderInputs
          defaultTemperamentId={global.tunerTemperamentId}
          defaultFreqA4={freqA4}
          temperamentsList={temperamentsList}
          onTemperamentChange={(e: any) => {
            setProcStepIdx(0);
            setProcRepeatCount(0);
            global.setTunerTemperamentId(e.detail.value);
          }}
          onFreqA4Change={(inputFreqA4: number) => {
            setProcStepIdx(0);
            setProcRepeatCount(0);
            setFreqA4(inputFreqA4);
          }}
        />
      )}

      <PitchCircle
        tuneMode={tuneMode}
        freqA4={freqA4}
        temperament={temperament}
        proc={proc}
        procStepIdx={procStepIdx}
        procRepeatCount={procRepeatCount}
      />

      <IonGrid className="w-full">
        <IonRow>
          <TunerFooter
            isMute={global.isTemperToneMute}
            tuneMode={tuneMode}
            enableEnterProcedure={proc !== null}
            enableProcedurePrev={proc && proc.hasPrev(procStepIdx)}
            enableProcedureNext={proc && proc.hasNext(procStepIdx)}
            onClickMute={() =>
              global.setIsTemperToneMute(!global.isTemperToneMute)
            }
            onClickBeats={() => setTuneMode(TuneMode.BEATS)}
            onClickPitchPipe={() => setTuneMode(TuneMode.PITCHPIPE)}
            onEnterProcedure={() => setTuneMode(TuneMode.PROCEDURE)}
            onExitProcedure={() => setTuneMode(TuneMode.BEATS)}
            onProcedureNext={onProcedureNext}
            onProcedurePrev={onProcedurePrev}
            onProcedureRepeatStep={() =>
              setProcRepeatCount(procRepeatCount + 1)
            }
          />
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default React.memo(
  Tuner,
  (prevProps, nextProps) =>
    prevProps.setMainTitle === nextProps.setMainTitle &&
    prevProps.setSubTitle === nextProps.setSubTitle
);
