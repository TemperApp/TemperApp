import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonIcon
} from "@ionic/react";
import PageHeader from "./Page/PageHeader";
import PageModal from "./Page/PageModal";
import Tuner from "../components/Tuner/Tuner";
import "./Tune.css"

const TuneModalContent: React.FC = () => (
  <>
    <h4 className="py-3">Qualité des quintes et des tierces</h4>

    <strong>Un nouveau visuel : pourquoi faire?</strong>

    <p className="p-long">
    A la fin de l’accord d’un clavecin, d’un orgue, etc. 
    il est habituel d’enchaîner les accords majeurs en progressant par quinte,  et d’en écouter la <strong>couleur</strong>. 
    Cette <i>arpeggiatta</i> de l’accordeur est la description la plus fidèle d’un tempérament : 
    on y perçoit la qualité de chaque accord, et la manière dont celle-ci progresse par tons voisins.
    Le visuel colorimétrique TemperApp a été développé pour reproduire ce geste de l’accordeur, 
    en permettant de percevoir le résultat d’un tempérament <strong>au clavier</strong>
    </p>

    <strong>Le visuel colorimétrique</strong>
    <p className="p-long">
    Le visuel TemperApp permet de prévoir en un coup d'œil la sonorité de tous les <strong>accords majeurs</strong> dans le tempérament sélectionné : 
    Chaque note du cycle des quintes représente la <strong>tonalité majeure</strong> correspondante. 
    La note C  représente donc l’accord de Do Majeur. Le visuel TemperApp <i>décrit</i> cet accord 

    </p>

    <p className="p-long">
      Pour chaque accord majeur, les qualités des quintes
      et des tierces sont représentées par une couleur. Les <strong>quintes</strong> sont représentées à <strong>l’extérieur</strong> du cycle, les <strong>tierces</strong> à <strong>l’intérieur.</strong>
    </p>

    <p className="p-long">
      Plus la couleur de l’intervalle est <strong>sombre</strong>, plus celui-ci est <strong>tempéré</strong>. 
    </p>

    <div className="flex justify-center items-center py-5">
      <div
        className="h-12 w-12 mr-4 rounded-full"
        style={{ border: "2px solid var(--color-contrast)" }} />
      <div
        className="mr-8"><h5>Quintes</h5></div>
      <div
        className="h-6 w-6 mr-4 rounded-full"
        style={{ border: "2px solid var(--color-contrast)" }} />
      <div
        className="mr-8"><h5>Tierces</h5></div>
    </div>

    <IonCard className="flex justify-center items-center w-full py-1">
      <IonCardContent className="w-full">
        <IonGrid>
          <IonRow className="flex justify-center items-center w-full">
            <IonCol size="5">
              <strong>Quintes</strong>
            </IonCol>
            <IonCol size="5">
              <strong>Tierces</strong>
            </IonCol>
          </IonRow>
          <IonRow className="flex justify-center items-center w-full">
            <IonCol size="1.5">
              <div className="h-12 mr-4 w-full"
                style={{ border: "2px solid var(--color-theme)",
                        height: "400px",
                        background: "var(--legend-gradient-fifth)"}}>
              </div>
            </IonCol>
            <IonCol size="4.5">
              <div className="w-full">
                <p className="p-legend">Excessivement tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Très tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Bien tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Tempérée égal</p>
                <div className="legend-line"></div>
                <p className="p-legend">PURE</p>
                <div className="legend-line"></div>
                <p className="p-legend">Grande quinte</p>
                <div className="legend-line"></div>
                <p className="p-legend">Loup</p>
              </div>
            </IonCol>            
            <IonCol size="1.5">
              <div className="h-12 w-full mr-4"
                style={{ border: "2px solid var(--color-theme)",
                        height: "400px",
                        background: "var(--legend-gradient-third)"}}>
              </div>
            </IonCol>
            <IonCol size="4.5">
              <div className="mr-4 w-full">
                <p className="p-legend">PURE</p>
                <div className="legend-line"></div>
                <p className="p-legend">Faiblement tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Bien tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Tempérée égal</p>
                <div className="legend-line"></div>
                <p className="p-legend">Très tempérée</p>
                <div className="legend-line"></div>
                <p className="p-legend">Pythagoricienne</p>
                <div className="legend-line"></div>
                <p className="p-legend">Loup</p>
              </div>
            </IonCol>  
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>

    <strong>Paramètres disponibles</strong>

    <p className="p-long">
    Le visuel TemperApp a deux paramètres possibles : 

    Aux <strong>thèmes</strong> clair ou sombre correspondent deux dégradés différents fonctionnant sur le même principe

    L’utilisateur a la possibilité de superposer au dégradé de couleur la valeur du tempérament 
    des intervalles en fraction de Commas (Pythagoricien pour les quintes, Syntonique pour les tierces). 
    Pour plus d’information sur les unités utilisées par TemperApp, voir @

    </p>

    <h4 className="py-3">Pitch pipe & battements</h4>
    <strong>TemperApp propose deux accordeurs.</strong>
    <IonGrid>
      <IonRow>
        <IonCol size="3" className="flex flex-wrap justify-center content-center">
        <IonIcon
            src="/assets/logotypes/icon-tuner-hz-mode.svg"
            style={{stroke:"var(--color-contrast)"}}
          ></IonIcon>
        </IonCol>
        <IonCol size="9">
          <p className="p-long">
            Le <strong>“pitch pipe”</strong> émet la fréquence 
            de la note à accorder. 
          </p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3" className="flex flex-wrap justify-center content-center">
          <IonIcon
            src="/assets/logotypes/icon-tuner-bpm-mode.svg"
            style={{stroke:"var(--color-contrast)"}}
          ></IonIcon>
        </IonCol>
        <IonCol size="9">
          <p className="p-long">
            L'accordeur <strong>“par battements”</strong> émet le battement prévu d’un 
            intervalle, de la même manière qu’il sonne à l’instrument : 
            un son à la hauteur du premier partiel commun et d’un battement égal à la différence entre les deux partiels. 
            <i>Un intervalle pur émet donc un son continu à la hauteur du premier partiel commun.</i> 
          </p>
        </IonCol>
      </IonRow>
    </IonGrid>
    <h4 className="py-3">SELECTION D’UN INTERVALLE</h4>
    
    <p className="p-long">
    Les intervalles disponibles dans TemperApp sont les quartes, les quintes et les tierces majeures. <br/><br/>

    Pour sélectionner un intervalle, appuyez sur les notes correspondantes en respectant leur octave : <br/><br/>

    une pression <strong>longue</strong> sélectionne la note à l’octave 3 (clé de fa) <br/>

    une pression <strong>courte</strong> sélectionne la note à l’octave 4 (clé de sol). <br/><br/>

    Lorsqu’une note est sélectionnée, l’application génère sa fréquence. Lorsqu’un intervalle est sélectionné, l’application génère immédiatement son battement !

    </p>

    <h4 className="py-3">Procédure d'accord</h4>
    <IonGrid>
      <IonRow>
        <IonCol size="3" className="flex flex-wrap justify-center content-center">
          <IonIcon
            src="/assets/logotypes/icon-tuning-procedure.svg"
            style={{background:"var(--color-button)", 
              width:"40px", 
              height:"40px", 
              borderRadius:"100px"}}
          ></IonIcon>
        </IonCol>
        <IonCol size="9">
          <p className="p-long">
            TemperApp vous accompagne dans l’accord de votre instrument. 
            Pour chaque tempérament, l’application vous propose une 
            procédure d’accord.  
          </p>
        </IonCol>
      </IonRow>
      </IonGrid>
      <p className="p-long">
        À chaque étape vous êtes invité·e à accorder une note qui <strong>clignotera</strong> sur un affichage clavier. 
      </p>
      <p className="p-long">
        Cette note sera accordée comme un intervalle sur une note déjà accordée.
      </p>
      <p className="p-long">
        Le battement de l’intervalle est affiché au centre du cercle et généré par 
        l’application.
      </p>
      <p className="p-long">
        A tout moment vous pouvez aller à l’étape précédente, suivante ou interrompre la procédure.
      </p>
      <div className="py-10"></div>
  </>
);

const Tune: React.FC = () => {
  const [_mainTitle, setMainTitle] = useState('');
  const [_subTitle, setSubTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={_mainTitle}
          subTitle={_subTitle}
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen page-header">
        <PageModal
          title="Aide · Accordeur"
          onQuit={() => setShowModal(false)}
        >
          <TuneModalContent />
        </PageModal>
      </IonModal>

      <IonContent scrollY={false}> {/* TODO Align self safe center when height is too small */}
        <Tuner
          setMainTitle={setMainTitle}
          setSubTitle={setSubTitle}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tune;
