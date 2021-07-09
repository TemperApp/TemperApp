import React, { useContext } from "react";
import SettingsContext from "../../store/settings-context";
import PageModal from "../../pages/Page/PageModal";
import SettingToggle from "../inputs/SettingToggle";
//import SettingSelect from "../inputs/SettingSelect";
import SettingInput from "../inputs/SettingInput";

type SettingsModalProps = {
  onQuit: (e: any) => void,
};

export const SettingsModal: React.FC<SettingsModalProps> = ({
  onQuit = () => {},
}) => {
  const settings = useContext(SettingsContext);

  return (
    <>
      <PageModal
        title="Paramètres"
        onQuit={onQuit}
      >
        <section className="mt-3">
          <SettingToggle
            name={settings.darkTheme ? 'Thème sombre' : 'Thème clair'}
            checked={settings.darkTheme}
            value="darktheme"
            onClick={(e: any) => settings.setDarkTheme(e.target.checked)}
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
            value={settings.freqA4}
            onChange={(e) =>
              settings.setFreqA4(parseInt(e.detail.value!, 10))}
            classNameInput="max-w-20"
          />
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
      </PageModal>
    </>
  );
};

export default SettingsModal;
