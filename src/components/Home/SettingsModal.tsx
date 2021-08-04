import React, { useContext, useState } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { play, bug } from 'ionicons/icons';

import PageModal from "../../pages/Page/PageModal";
import SettingToggle from "../inputs/SettingToggle";
import SettingSelect from "../inputs/SettingSelect";
import SettingInput from "../inputs/SettingInput";
import SettingsGroup from "./SettingsGroup";
import SettingRange from "../inputs/SettingRange";

import useTemperTone from "../../hooks/useTemperTone";
import { useStorageSQLite } from "react-data-storage-sqlite-hook/dist";

import SettingsContext from "../../store/settings-context";
import GlobalStatesContext from "../../store/global-states-context";
import { AllowedSettingValue, KeyboardLabels } from "../../store/settings-context/settings";

import { lerp } from "../../utils/maths";
import { FilterRollOff } from "tone";
import { FREQ_A4_MAX, FREQ_A4_MIN } from "../../model/Note/a4";


type SettingsModalProps = {
  onQuit: (e: any) => void,
};

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onQuit = (nextSettings: any) => { },
}) => {
  const settings = useContext(SettingsContext);
  const global = useContext(GlobalStatesContext);
  
  const TemperTone = useTemperTone();
  const {clear, isAvailable} = useStorageSQLite();
  const store = {clear, isAvailable};

  const [nextSettings, setNextSettings] = useState({...settings});
  const [debugMode, setDebugMode] = useState(false);
  
  const playDemoSound = () => {
    global.setIsTemperToneMute(false);
    TemperTone.trigger(nextSettings.freqA4, 1);
  }

  const set = (name: string, value: AllowedSettingValue) => {
    if (settings[name] === undefined) {
      console.error('[SettingsModal]: Cannot update settings: unknown setting name:', name);
      return;
    }
    setNextSettings((prevNextSettings: any) => ({
      ...prevNextSettings, [name]: value,
    }));
  };
  
  const setImmediatly = (name: string, value: AllowedSettingValue) => {
    if (settings[name] === undefined) {
      console.error('[SettingsModal]: Cannot update settings: unknown setting name:', name);
      return;
    }
    const settingSetter = settings[`set${name.charAt(0).toUpperCase()}${name.slice(1)}`]; // e.g.: settings.setDarkTheme
    settingSetter(value);
    set(name, value);
  };
  
  return (
    <>
      <PageModal
        title="Paramètres"
        onQuit={() => onQuit(nextSettings)}
      >
        <section className="mt-3">

          <SettingToggle
            name='Thème sombre'
            checked={settings.darkTheme}
            value="darktheme"
            onClick={(e: any) => setImmediatly('darkTheme', e.target.checked as boolean)}
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
              max: String(FREQ_A4_MAX)
            }}
            onChange={(e) => {
              const value = Number(e.detail.value);
              if (value >= FREQ_A4_MIN && value <= FREQ_A4_MAX)
                set('freqA4', value);
            }}
            classNameInput="max-w-20"
          />

          <SettingToggle
            name='Battements par seconde'
            checked={nextSettings.isBps}
            value="isBps"
            onClick={(e: any) => set('isBps', e.target.checked as boolean)}
          />

          <SettingToggle
            name='Accordeur afficher commas'
            checked={nextSettings.tunerShowCommas}
            value="tunerShowCommas"
            onClick={(e: any) => set('tunerShowCommas', e.target.checked as boolean)}
          />

          <SettingToggle
            name="Forme d'onde triangle"
            checked={nextSettings.waveTriangle}
            value="triangle"
            onClick={(e: any) => {
              const waveTriangle = e.target.checked as boolean;
              set('waveTriangle', waveTriangle);
              TemperTone.get().amsynth.oscillator.type = (waveTriangle) ? 'triangle' : 'sine';
            }}
          />


          <SettingsGroup
            title='Volume'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={playDemoSound}
              >
                <IonIcon src={play} slot='icon-only' />
              </IonButton>
            }
          >
            <SettingRange
              name="Onde périodique"
              attributes={{ min: 0, max: 10, step: 1 }}
              value={nextSettings.amSynthVolume}
              onChange={(e) => {
                set('amSynthVolume', e.detail.value);
                TemperTone.get().amsynthGain.gain.rampTo(lerp(0, 10, 0, 1, e.detail.value));
              }}
              classNameIonRange="max-w-32"
            />
        
            <SettingRange
              name="Diapason"
              attributes={{ min: 0, max: 10, step: 1 }}
              value={nextSettings.forkVolume}
              onChange={(e) => {
                set('forkVolume', e.detail.value);
                TemperTone.get().forkGain.gain.rampTo(lerp(0, 10, 0, 1, e.detail.value));
              }}
              classNameIonRange="max-w-32"
            />

          </SettingsGroup>

          
          <SettingsGroup title="Procédure d'accord">

            <SettingSelect
              name="Nom des notes du clavier"
              placeholder="Selectionner..."
              options={[
                {value: String(KeyboardLabels.NONE), label: "Aucune"},
                {value: String(KeyboardLabels.C3C4), label: "C3 et C4"},
                {value: String(KeyboardLabels.A3A4), label: "A3 et A4"},
                {value: String(KeyboardLabels.ALL), label: "Toutes"},
              ]}
              value={String(nextSettings.procedurekeyboardLabels)}
              onChange={(e: any) => {
                set('procedurekeyboardLabels', Number(e.detail.value));
              }}
              classNameSelect="min-w-24 max-w-24"
            />

            <SettingToggle
              name="Afficher les bulles d'info"
              checked={nextSettings.procedureShowPopover}
              value="procedureShowPopover"
              onClick={(e: any) => set('procedureShowPopover', e.target.checked as boolean)}
            />

            <p className="pt-2 pb-2 bold"><b>Durées d'émission du son</b></p>

            <SettingInput
              name="Pause entre les notes"
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
              name="Note (accord unique)"
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
              name="Note (accord paire)"
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
              name="Note (accord octave)"
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
              name="Battement"
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
              name="Absence de battement"
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
            title='Filtre passe-bas'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={playDemoSound}
              >
                <IonIcon src={play} slot='icon-only' />
              </IonButton>
            }
          >
            <SettingRange
              name="Fréquence"
              attributes={{ min: 100, max: 4000, step: 50 }}
              value={nextSettings.amSynthFilterFrequency}
              onChange={(e) => {
                set('amSynthFilterFrequency', e.detail.value);
                TemperTone.get().amsynthFilter.frequency.rampTo(e.detail.value, 0.1);
              }}
              classNameIonRange="max-w-44"
            />

            <SettingSelect
              name="Rolloff (dB/octave)"
              placeholder="Selectionner..."
              options={[
                {value: "-12", label: "-12"},
                {value: "-24", label: "-24"},
                {value: "-48", label: "-48"},
                {value: "-96", label: "-96"},
              ]}
              value={String(nextSettings.amSynthFilterRollOff)}
              onChange={(e) => {
                const rolloff = Number(e.detail.value) as FilterRollOff;
                set('amSynthFilterRollOff', rolloff);
                TemperTone.get().amsynthFilter.set({ rolloff: rolloff});
              }}
              classNameSelect="min-w-16 max-w-16"
            />

          </SettingsGroup>


          <SettingsGroup
            title='Égaliseur audio'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={playDemoSound}
              >
                <IonIcon src={play} slot='icon-only' />
              </IonButton>
            }
          >

            <SettingRange
              name="Low (dB)"
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQLow}
              onChange={(e) => {
                set('amSynthEQLow', e.detail.value);
                TemperTone.get().amsynthEQ.low.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingRange
              name="Mid (dB)"
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQMid}
              onChange={(e) => {
                set('amSynthEQMid', e.detail.value);
                TemperTone.get().amsynthEQ.mid.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingRange
              name="High (dB)"
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQHigh}
              onChange={(e) => {
                set('amSynthEQHigh', e.detail.value);
                TemperTone.get().amsynthEQ.high.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingInput
              name="Low/Mid (Hz)"
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthEQLowFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 10 && value <= 22000) {
                  set('amSynthEQLowFrequency', value);
                  TemperTone.get().amsynthEQ.lowFrequency.rampTo(value, 0.1);
                }}}
              classNameInput="max-w-16 min-w-16"
            />

            <SettingInput
              name="Mid/High (Hz)"
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthEQHighFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 10 && value <= 22000) {
                  set('amSynthEQHighFrequency', value);
                  TemperTone.get().amsynthEQ.highFrequency.rampTo(value, 0.1);
                }}}
              classNameInput="max-w-16 min-w-16"
            />
          </SettingsGroup>


          <SettingsGroup
            title='Distorsion audio'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={playDemoSound}
              >
                <IonIcon src={play} slot='icon-only' />
              </IonButton>
            }
          >
        
            <SettingRange
              name="Quantité"
              attributes={{ min: 0, max: 1, step: 0.05, pin: false }}
              value={nextSettings.amSynthDistortionAmount}
              onChange={(e) => {
                set('amSynthDistortionAmount', e.detail.value);
                TemperTone.get().amsynthDist.set({ distortion: e.detail.value });
              }}
              classNameIonRange="max-w-36"
            />

            <SettingInput
              name="Distortion max fréquence"
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthDistortionLowFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 100 && value <= 500) {
                  set('amSynthDistortionLowFrequency', value);
                  TemperTone.get().amsynthDist.set({ distortion: value });
                }}}
              classNameInput="max-w-20 min-w-10"
            />

            <SettingInput
              name="Distortion min fréquence"
              type="number"
              attributes={{ min: 10, max: 22000, step: 1 }}
              value={nextSettings.amSynthDistortionHighFrequency}
              onChange={(e) => {
                const value = Number(e.detail.value);
                if (value >= 100 && value <= 500) {
                  set('amSynthDistortionHighFrequency', e.detail.value);
                  TemperTone.get().amsynthDist.set({ distortion: e.detail.value });
              }}}
              classNameInput="max-w-20 min-w-10"
            />
          </SettingsGroup>

        </section>

        <section className="overflow-x-hidden">
          <h4 className="pt-6">Présentation</h4>
          <hr className="my-5" />

          <p className="p-long">
            TemperApp est une application à destination des musicien·ne·s,
            qui a pour vocation la réactualisation de la pratique de
            l’accord et des tempéraments anciens. Elle constitue un outil
            scientifique et pédagogique favorisant l’apprentissage de
            l’accord à l’oreille, dont le principe se base sur la notion
            de rapport intervallaire.
          </p>


          <h4 className="pt-6">Groupe de recherche</h4>
          <hr className="my-5" />

          <p className="p-long">
            TemperApp est issue du travail de recherche réalisé par :
          </p>
          <p className="p-long">
            <strong>Elisa Barbessi</strong>, professeur de clavecin et histoire de la musique au CRR du Grand-Avignon,
            à l’initiative du projet. Doctorante à l’université Sorbonne, membre d’IReMus, Elisa est
            directrice artistique d’ARTEMIDA.
          </p>
          <p className="p-long">
            <strong>Jérôme Bertier</strong>, pianiste, claveciniste et organiste, professeur au conservatoire d’Auxerre.
          </p>
          <p className="p-long">
            <strong>Pierre Cazes</strong>, claveciniste. Il enseigne au CNSMDP l'histoire, la théorie et la pratique des tempéraments ainsi que la basse continue. Il est professeur de clavecin au CRR93 (Aubervilliers/La Courneuve).
          </p>
          <p className="p-long">
            <strong>Franck Jedrzejewski</strong>, chercheur au CEA, docteur habilité en musicologie et philosophie. Ancien Vice-président du Collège International de Philosophie, a publié une vingtaine d'ouvrages.
          </p>
          <p className="p-long">
            <strong>Théodora Psychoyou</strong>, IReMus - Sorbonne Université.
          </p>

          <p className="p-long">
            Le projet bénéficie de nombreux soutiens sous la forme de ressources humaines et techniques :
          </p>
          <ul className="mb-0">
            <li className="mb-2">
              le Conservatoire National Supérieur de Musique et de Danse de Paris,
            </li>
            <li className="mb-2">
              le LAM-Institut Jean le Rond d’Alembert,
            </li>
            <li className="mb-2">
              l'Institut Collegium Musicae,
            </li>
            <li className="mb-2">
              l'Institut de recherche en Musicologie (IReMus),
            </li>
            <li>
              et l’association ARTEMIDA.
            </li>
          </ul>


          <h4 className="pt-6">Conception et réalisation</h4>
          <hr className="my-5" />

          <p className="p-long">
            TemperApp a été développée par cinq étudiant·e·s en formation d'ingénieur IMAC (Image, multimédia, audiovisuel et communication) de l'École Supérieure d'Ingénieurs Paris-Est :
          </p>
          <ul className="my-0">
            <li className="mb-1"><strong>Fabian Adam</strong></li>
            <li className="mb-1"><strong>Benjamin Briere</strong></li>
            <li className="mb-1"><strong>Daphné Chamot-Rooke</strong></li>
            <li className="mb-1"><strong>Ludwig Chieng</strong></li>
            <li className="mb-1"><strong>Sterenn Fonseca</strong></li>
          </ul>
        </section>

        <section>
          <IonButton
            className="h-8 w-full"
            fill='clear'
            size='small'
            style={{ opacity: 0.35, color: 'var(--color-contrast' }}
            onClick={() => setDebugMode(!debugMode)}
          >
            {debugMode && 
              <div className="w-full text-left">
                <IonIcon className='mr-2' src={bug}/>
                <span>
                  Options de debug
                </span>
              </div>
            }
          </IonButton>

          { debugMode && store.isAvailable 
            && <>
              <IonButton
                fill='clear' color='danger'
                onClick={() => store.clear()}
              >
                Réinitialiser le stockage local
              </IonButton>
              <IonButton
                fill='clear' color='danger'
                routerLink={'/storage'}
                onClick={onQuit}
              >
                Accéder au StorageTest
              </IonButton>
          </>}

        </section>

      </PageModal>
    </>
  );
};

export default SettingsModal;
