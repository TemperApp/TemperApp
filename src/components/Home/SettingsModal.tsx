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
import { AllowedSettingValue } from "../../store/settings-context/settings";

import { lerp } from "../../utils/maths";
import { FilterRollOff } from "tone";


type SettingsModalProps = {
  onQuit: (e: any) => void,
};

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onQuit = (nextSettings: any) => { },
}) => {
  const settings = useContext(SettingsContext);
  
  const TemperTone = useTemperTone();
  const {clear, isAvailable} = useStorageSQLite();
  const store = {clear, isAvailable};

  const [nextSettings, setNextSettings] = useState({...settings});
  const [debugMode, setDebugMode] = useState(false);
  

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
  
  console.info('[SettingsModal]: Render');
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
            onChange={(e) =>
              set('freqA4', Number(e.detail.value))}
            classNameInput="max-w-20"
          />

          <SettingToggle
            name='Battements par seconde'
            checked={nextSettings.isBps}
            value="isBps"
            onClick={(e: any) => set('isBps', e.target.checked as boolean)}
          />

          <SettingToggle
            name="Forme d'onde triangle"
            checked={settings.waveTriangle}
            value="triangle"
            onClick={(e: any) => setImmediatly('waveTriangle', e.target.checked as boolean)}
          />


          <SettingsGroup
            title='Volume'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={() => TemperTone.trigger(440, 1)}
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
                TemperTone.amsynthGain.gain.rampTo(lerp(0, 10, 0, 1, e.detail.value));
              }}
              classNameIonRange="max-w-32"
            />
        
            <SettingRange
              name="Diapason"
              attributes={{ min: 0, max: 10, step: 1 }}
              value={nextSettings.forkVolume}
              onChange={(e) => {
                set('forkVolume', e.detail.value);
                TemperTone.forkGain.gain.rampTo(lerp(0, 10, 0, 1, e.detail.value));
              }}
              classNameIonRange="max-w-32"
            />

          </SettingsGroup>


          <SettingsGroup
            title='Filtre passe-bas'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={() => TemperTone.trigger(440, 1)}
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
                TemperTone.amsynthFilter.frequency.rampTo(e.detail.value, 0.1);
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
                console.log(rolloff)
                set('amSynthFilterRollOff', rolloff);
                TemperTone.amsynthFilter.set({ rolloff: rolloff});
              }}
              classNameSelect="w-20"
            />

          </SettingsGroup>


          <SettingsGroup
            title='Égaliseur audio'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={() => TemperTone.trigger(440, 1)}
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
                TemperTone.amsynthEQ.low.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingRange
              name="Mid (dB)"
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQMid}
              onChange={(e) => {
                set('amSynthEQMid', e.detail.value);
                TemperTone.amsynthEQ.mid.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingRange
              name="High (dB)"
              attributes={{ min: -96, max: 0, step: 3 }}
              value={nextSettings.amSynthEQHigh}
              onChange={(e) => {
                set('amSynthEQHigh', e.detail.value);
                TemperTone.amsynthEQ.high.rampTo(e.detail.value);
              }}
              classNameIonRange="max-w-40"
            />

            <SettingInput
              name="Low/Mid (Hz)"
              type="number"
              attributes={{ min: 100, max: 1000, step: 50 }}
              value={nextSettings.amSynthEQLowFrequency}
              onChange={(e) => {
                set('amSynthEQLowFrequency', e.detail.value);
                TemperTone.amsynthEQ.lowFrequency.rampTo(e.detail.value, 0.1);
              }}
              classNameInput="max-w-20"
            />

            <SettingInput
              name="Mid/High (Hz)"
              type="number"
              attributes={{ min: 100, max: 1000, step: 50 }}
              value={nextSettings.amSynthEQHighFrequency}
              onChange={(e) => {
                set('amSynthEQHighFrequency', e.detail.value);
                TemperTone.amsynthEQ.highFrequency.rampTo(e.detail.value, 0.1);
              }}
              classNameInput="max-w-20"
            />
          </SettingsGroup>


          <SettingsGroup
            title='Distortion audio'
            titleAside={
              <IonButton 
                size='small' fill='clear'
                onClick={() => TemperTone.trigger(440, 1)}
              >
                <IonIcon src={play} slot='icon-only' />
              </IonButton>
            }
          >
        
            <SettingRange
              name="Quantité"
              attributes={{ min: 0, max: 1, step: 0.05 }}
              value={nextSettings.amSynthDistortionAmount}
              onChange={(e) => {
                set('amSynthDistortionAmount', e.detail.value);
                TemperTone.amsynthDist.set({ distortion: e.detail.value });
              }}
              classNameIonRange="max-w-36"
            />

            <SettingInput
              name="Distortion max fréquence"
              type="number"
              attributes={{ min: 100, max: 500, step: 20 }}
              value={nextSettings.amSynthDistortionLowFrequency}
              onChange={(e) => {
                set('amSynthDistortionLowFrequency', e.detail.value);
                TemperTone.amsynthDist.set({ distortion: e.detail.value });
              }}
              classNameInput="max-w-20"
            />

            <SettingInput
              name="Distortion min fréquence"
              type="number"
              attributes={{ min: 100, max: 500, step: 20 }}
              value={nextSettings.amSynthDistortionHighFrequency}
              onChange={(e) => {
                set('amSynthDistortionHighFrequency', e.detail.value);
                TemperTone.amsynthDist.set({ distortion: e.detail.value });
              }}
              classNameInput="max-w-20"
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

          <h4 className="pt-6">Crédits et sources</h4>
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

          <ul>
            <li>Le Conservatoire National Supérieur de Musique et de Danse de Paris,</li>
            <li>le laboratoire "Lutheries - Acoustique - Musique" (LAM),            </li>
            <li>l'Institut Jean le Rond d’Alembert,                                 </li>
            <li>IReMus,                                                             </li>
            <li>Revue Musicorum,                                                    </li>
            <li>l’association ARTEMIDA,                                             </li>
            <li>et le Conservatoire du Grand-Avignon.                               </li>
          </ul>
        </section>

        <section className="my-4">
          <IonButton
            fill='clear'
            size='small'
            style={{ opacity: 0.35, color: 'var(--color-contrast' }}
            onClick={() => setDebugMode(!debugMode)}
          >
            <IonIcon className='mr-2' src={bug}/>
            <span>
              {debugMode ? 'Cacher' : 'Montrer'} les options de debug
            </span>
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
