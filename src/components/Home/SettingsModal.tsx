import React, { useContext, useState } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { useTranslation } from 'react-i18next';
import { play, bug } from 'ionicons/icons';

import PageModal from '../../pages/Page/PageModal';
import SettingToggle from '../inputs/SettingToggle';
import SettingSelect from '../inputs/SettingSelect';
import SettingInput from '../inputs/SettingInput';
import SettingsGroup from './SettingsGroup';
import SettingRange from '../inputs/SettingRange';

import useTemperTone from '../../hooks/useTemperTone';
import { useStorageSQLite } from 'react-data-storage-sqlite-hook/dist';

import SettingsContext from '../../store/settings-context';
import GlobalStatesContext from '../../store/global-states-context';
import {
  AllowedSettingValue,
  KeyboardLabels,
} from '../../store/settings-context/settings';

import { lerp } from '../../utils/maths';
import { FilterRollOff } from 'tone';
import { FREQ_A4_MAX, FREQ_A4_MIN } from '../../model/Note/a4';

type SettingsModalProps = {
  onQuit: (e: any) => void;
};

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onQuit = (nextSettings: any) => {},
}) => {
  const settings = useContext(SettingsContext);
  const global = useContext(GlobalStatesContext);
  const { t } = useTranslation('settings');

  const TemperTone = useTemperTone();
  const { clear, isAvailable } = useStorageSQLite();
  const store = { clear, isAvailable };

  const [nextSettings, setNextSettings] = useState({ ...settings });
  const [debugMode, setDebugMode] = useState(false);

  const playDemoSound = () => {
    global.setIsTemperToneMute(false);
    TemperTone.trigger(nextSettings.freqA4, 3);
  };

  const set = (name: string, value: AllowedSettingValue) => {
    if (settings[name] === undefined) {
      console.error(
        '[SettingsModal]: Cannot update settings: unknown setting name:',
        name
      );
      return;
    }
    setNextSettings((prevNextSettings: any) => ({
      ...prevNextSettings,
      [name]: value,
    }));
  };

  const setImmediatly = (name: string, value: AllowedSettingValue) => {
    if (settings[name] === undefined) {
      console.error(
        '[SettingsModal]: Cannot update settings: unknown setting name:',
        name
      );
      return;
    }
    const settingSetter =
      settings[`set${name.charAt(0).toUpperCase()}${name.slice(1)}`]; // e.g.: settings.setDarkTheme
    settingSetter(value);
    set(name, value);
  };

  return (
    <>
      <PageModal title={t('pageTitle')} onQuit={() => onQuit(nextSettings)}>
        <div className="mt-3">
          <SettingToggle
            name={t('theme')}
            checked={settings.darkTheme}
            value="darktheme"
            onClick={(e: any) =>
              setImmediatly('darkTheme', e.target.checked as boolean)
            }
          />

          {/*
          <SettingSelect
            name='Langue'
            placeholder="Selectionner..."
            options={[
              {value: "fr", label: 'Français'},
            ]}
            value="fr"
            classNameSelect="w-40"
          />
          */}

          <SettingInput
            name="A4 (Hz)"
            type="number"
            value={nextSettings.freqA4}
            attributes={{
              min: String(FREQ_A4_MIN),
              max: String(FREQ_A4_MAX),
            }}
            onChange={(e) => {
              const value = Number(e.detail.value);
              if (value >= FREQ_A4_MIN && value <= FREQ_A4_MAX)
                set('freqA4', value);
            }}
            classNameInput="max-w-20"
          />

          <SettingToggle
            name={t('beatsPerSecond')}
            checked={nextSettings.isBps}
            value="isBps"
            onClick={(e: any) => set('isBps', e.target.checked as boolean)}
          />

          <SettingToggle
            name={t('showCommasInTuner')}
            checked={nextSettings.tunerShowCommas}
            value="tunerShowCommas"
            onClick={(e: any) =>
              set('tunerShowCommas', e.target.checked as boolean)
            }
          />

          <SettingToggle
            name={t('triangleSoundwave')}
            checked={nextSettings.waveTriangle}
            value="triangle"
            onClick={(e: any) => {
              const waveTriangle = e.target.checked as boolean;
              set('waveTriangle', waveTriangle);
              TemperTone.get().amsynth.oscillator.type = waveTriangle
                ? 'triangle'
                : 'sine';
            }}
          />

          <SettingsGroup
            title={t('volume')}
            titleAside={
              <IonButton size="small" fill="clear" onClick={playDemoSound}>
                <IonIcon src={play} slot="icon-only" />
              </IonButton>
            }
          >
            <SettingRange
              name={t('periodicWave')}
              attributes={{ min: 0, max: 10, step: 1 }}
              value={nextSettings.amSynthVolume}
              onChange={(e) => {
                set('amSynthVolume', e.detail.value);
                TemperTone.get().amsynthGain.gain.rampTo(
                  lerp(0, 10, 0, 1, e.detail.value)
                );
              }}
              classNameIonRange="max-w-32"
            />

            <SettingRange
              name={t('diapason')}
              attributes={{ min: 0, max: 10, step: 1 }}
              value={nextSettings.forkVolume}
              onChange={(e) => {
                set('forkVolume', e.detail.value);
                TemperTone.get().forkGain.gain.rampTo(
                  lerp(0, 10, 0, 1, e.detail.value)
                );
              }}
              classNameIonRange="max-w-32"
            />
          </SettingsGroup>

          <SettingsGroup title={t('chordProcedure')}>
            <SettingSelect
              name={t('keyboardNoteNames')}
              placeholder={t('select')}
              options={[
                { value: String(KeyboardLabels.NONE), label: t('none') },
                { value: String(KeyboardLabels.C3C4), label: t('C3C4') },
                { value: String(KeyboardLabels.A3A4), label: t('A3A4') },
                { value: String(KeyboardLabels.ALL), label: t('all') },
              ]}
              value={String(nextSettings.procedurekeyboardLabels)}
              onChange={(e: any) => {
                set('procedurekeyboardLabels', Number(e.detail.value));
              }}
              classNameSelect="min-w-24 max-w-24"
            />

            <SettingToggle
              name={t('showTooltips')}
              checked={nextSettings.procedureShowPopover}
              value="procedureShowPopover"
              onClick={(e: any) =>
                set('procedureShowPopover', e.target.checked as boolean)
              }
            />

            <p className="pt-2 pb-2 bold">
              <b>{t('soundEmissionDuration')}</b>
            </p>

            <SettingInput
              name={t('pauseBetweenNotes')}
              type="number"
              value={nextSettings.procedureSubStepDurationPause}
              attributes={{ min: 0, max: 60, step: 0.1 }}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 0 && value <= 60)
                  set('procedureSubStepDurationPause', value);
              }}
              classNameInput="max-w-12 min-w-10"
            />

            <SettingInput
              name={t('noteSingleChord')}
              type="number"
              value={nextSettings.procedureSubStepDurationUnique}
              attributes={{ min: 0, max: 60, step: 0.1 }}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 0 && value <= 60)
                  set('procedureSubStepDurationUnique', value);
              }}
              classNameInput="max-w-12 min-w-10"
            />

            <SettingInput
              name={t('noteDoubleChord')}
              type="number"
              value={nextSettings.procedureSubStepDurationPair}
              attributes={{ min: 0, max: 60, step: 0.1 }}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 0 && value <= 60)
                  set('procedureSubStepDurationPair', value);
              }}
              classNameInput="max-w-12 min-w-10"
            />

            <SettingInput
              name={t('noteOctaveChord')}
              type="number"
              value={nextSettings.procedureSubStepDurationOctave}
              attributes={{ min: 0, max: 60, step: 0.1 }}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 0 && value <= 60)
                  set('procedureSubStepDurationOctave', value);
              }}
              classNameInput="max-w-12 min-w-10"
            />

            <SettingInput
              name={t('beat')}
              type="number"
              value={nextSettings.procedureSubStepDurationBeat}
              attributes={{ min: 0, max: 60, step: 0.1 }}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 0 && value <= 60)
                  set('procedureSubStepDurationBeat', value);
              }}
              classNameInput="max-w-12 min-w-10"
            />

            <SettingInput
              name={t('noBeat')}
              type="number"
              value={nextSettings.procedureSubStepDurationNoBeat}
              attributes={{ min: 0, max: 60, step: 0.1 }}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 0 && value <= 60)
                  set('procedureSubStepDurationNoBeat', value);
              }}
              classNameInput="max-w-12 min-w-10"
            />
          </SettingsGroup>

          <SettingsGroup
            title={t('lowPassFilter')}
            titleAside={
              <IonButton size="small" fill="clear" onClick={playDemoSound}>
                <IonIcon src={play} slot="icon-only" />
              </IonButton>
            }
          >
            <SettingRange
              name={t('frequency')}
              attributes={{ min: 100, max: 4000, step: 50 }}
              value={nextSettings.amSynthFilterFrequency}
              onChange={(e) => {
                set('amSynthFilterFrequency', e.detail.value);
                TemperTone.get().amsynthFilter.frequency.rampTo(
                  e.detail.value,
                  0.1
                );
              }}
              classNameIonRange="max-w-44"
            />

            <SettingSelect
              name={t('rolloff')}
              placeholder={t('select')}
              options={[
                { value: '-12', label: '-12' },
                { value: '-24', label: '-24' },
                { value: '-48', label: '-48' },
                { value: '-96', label: '-96' },
              ]}
              value={String(nextSettings.amSynthFilterRollOff)}
              onChange={(e) => {
                const rolloff = Number(e.detail.value) as FilterRollOff;
                set('amSynthFilterRollOff', rolloff);
                TemperTone.get().amsynthFilter.set({ rolloff: rolloff });
              }}
              classNameSelect="min-w-16 max-w-16"
            />
          </SettingsGroup>

          <SettingsGroup
            title={t('equalizer')}
            titleAside={
              <IonButton size="small" fill="clear" onClick={playDemoSound}>
                <IonIcon src={play} slot="icon-only" />
              </IonButton>
            }
          >
            <SettingRange
              name={t('lowFrequencies')}
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQLow}
              onChange={(e) => {
                set('amSynthEQLow', e.detail.value);
                TemperTone.get().amsynthEQ.low.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingRange
              name={t('midFrequencies')}
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQMid}
              onChange={(e) => {
                set('amSynthEQMid', e.detail.value);
                TemperTone.get().amsynthEQ.mid.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingRange
              name={t('highFrequencies')}
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQHigh}
              onChange={(e) => {
                set('amSynthEQHigh', e.detail.value);
                TemperTone.get().amsynthEQ.high.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingInput
              name={t('lowMidBreakpoint')}
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthEQLowFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 10 && value <= 22000) {
                  set('amSynthEQLowFrequency', value);
                  TemperTone.get().amsynthEQ.lowFrequency.rampTo(value, 0.1);
                }
              }}
              classNameInput="max-w-16 min-w-16"
            />

            <SettingInput
              name={t('midHighbreakpoint')}
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthEQHighFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 10 && value <= 22000) {
                  set('amSynthEQHighFrequency', value);
                  TemperTone.get().amsynthEQ.highFrequency.rampTo(value, 0.1);
                }
              }}
              classNameInput="max-w-16 min-w-16"
            />
          </SettingsGroup>

          <SettingsGroup
            title={t('audioDistortion')}
            titleAside={
              <IonButton size="small" fill="clear" onClick={playDemoSound}>
                <IonIcon src={play} slot="icon-only" />
              </IonButton>
            }
          >
            <SettingRange
              name={t('quantity')}
              attributes={{ min: 0, max: 1, step: 0.05, pin: false }}
              value={nextSettings.amSynthDistortionAmount}
              onChange={(e) => {
                set('amSynthDistortionAmount', e.detail.value);
                TemperTone.get().amsynthDist.set({
                  distortion: e.detail.value,
                });
              }}
              classNameIonRange="max-w-36"
            />

            <SettingInput
              name={t('maxFrequencyDistortion')}
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthDistortionLowFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 100 && value <= 500) {
                  set('amSynthDistortionLowFrequency', value);
                  TemperTone.get().amsynthDist.set({ distortion: value });
                }
              }}
              classNameInput="max-w-20 min-w-10"
            />

            <SettingInput
              name={t('minFrequencyDistortion')}
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthDistortionHighFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 100 && value <= 500) {
                  set('amSynthDistortionHighFrequency', e.detail.value);
                  TemperTone.get().amsynthDist.set({
                    distortion: e.detail.value,
                  });
                }
              }}
              classNameInput="max-w-20 min-w-10"
            />
          </SettingsGroup>
        </div>

        <div className="overflow-x-hidden">
          <h4 className="pt-6">{t('presentation')}</h4>
          <hr className="my-5" />

          <p className="p-long">{t('presentationContent')}</p>

          <h4 className="pt-6">{t('researchGroup')}</h4>
          <hr className="my-5" />
          <p
            dangerouslySetInnerHTML={{
              __html: t('researchGroupContent', { escape: false }),
            }}
          ></p>

          <h4 className="pt-6">{t('conception')}</h4>
          <hr className="my-5" />
          <p
            dangerouslySetInnerHTML={{
              __html: t('conceptionContent', { escape: false }),
            }}
          ></p>

          <h4 className="pt-6">{t('helpUs')}</h4>
          <hr className="my-5" />
          <p
            dangerouslySetInnerHTML={{
              __html: t('helpUsContent', { escape: false }),
            }}
          ></p>
        </div>

        <div>
          <IonButton
            className="h-8 w-full"
            fill="clear"
            size="small"
            style={{ opacity: 0.35, color: 'var(--color-contrast' }}
            onClick={() => setDebugMode(!debugMode)}
          >
            {debugMode && (
              <div className="w-full text-left">
                <IonIcon className="mr-2" src={bug} />
                <span>Options de debug</span>
              </div>
            )}
          </IonButton>

          {debugMode && store.isAvailable && (
            <>
              <IonButton
                fill="clear"
                color="danger"
                onClick={() => store.clear()}
              >
                Réinitialiser le stockage local
              </IonButton>
              <IonButton
                fill="clear"
                color="danger"
                routerLink={'/storage'}
                onClick={onQuit}
              >
                Accéder au StorageTest
              </IonButton>
            </>
          )}
        </div>
      </PageModal>
    </>
  );
};

export default SettingsModal;
