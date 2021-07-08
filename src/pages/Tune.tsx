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

const TuneModalContent: React.FC = () => (
  <>
    <h4 className="py-3">Qualité des quintes et des tierces</h4>
    <p className="p-long">
      Le visuel TemperApp vous permet de prévoir en un coup
      d’oeil la sonorité de tous les accords majeurs dans
      le tempérament sélectionné. Chaque note du cycle des
      quintes représente la tonalité majeur correspondantes.
    </p>
    <p className="p-long">
      Pour chaque accord majeur, les qualités des quintes
      et des tierces sont représentées par une couleur. Les
      tierces sont représentées à l’extérieur du cycle, les
      quintes à l’intérieur.
    </p>
    <div className="flex justify-center items-center py-5">
      <div
        className="h-12 w-12 mr-4 rounded-full"
        style={{ border: "2px solid var(--color-contrast)" }} />
      <div
        className="mr-8"><h5>Tierce</h5></div>
      <div
        className="h-6 w-6 mr-4 rounded-full"
        style={{ border: "2px solid var(--color-contrast)" }} />
      <div
        className="mr-8"><h5>Quinte</h5></div>
    </div>
    <p className="p-long">
      Plus la couleur de l’intervalle est sombre, plus celui-ci est tempéré. 
      Les intervalles au tempérament égal sont représentés avec la même couleur. 
      Seuls les intervalles purs sont colorés en bleu. Les intervalles aux tempéraments 
      exceptionnels (quintes élargies, tierces plus grandes que pythagorienne) 
      sont colorés en nuances de gris. 
    </p>
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
                        background: "linear-gradient(0.01deg, #000000 0.02%, #161616 2.41%, #333333 5.96%, #7E7E7E 17.2%, #9F9F9F 20.82%, #B9B9B9 25.48%, #60CFC5 29.36%, #FFE5BB 32.73%, #FFD592 37.91%, #FFBB75 43.09%, #FF9960 49.82%, #FF764A 54.48%, #FF5435 60.17%, #FF321F 66.39%, #FF0D08 72.08%, #DC0000 79.07%, #E00000 79.86%, #AE0000 85.29%, #7B0000 94.09%, #4F0000 99.6%, #161616 102.63%)"}}>
              </div>
            </IonCol>
            <IonCol size="4.5">
              <div className="mr-4 w-full">
                <p className="p-legend">Excessivement tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Très tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Bien tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Tempérée égal</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">PURE</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Grande quinte</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "30px"
                }}></div>
                <p className="p-legend">Loup</p>
              </div>
            </IonCol>            
            <IonCol size="1.5">
              <div className="h-12 w-full mr-4"
                style={{ border: "2px solid var(--color-theme)",
                        height: "60vh",
                        background: "linear-gradient(180deg, #60CFC5 0%, #FFE5BB 8.12%, #FFD592 19.6%, #FFBB75 29.57%, #FF9960 42.99%, #FF764A 51.43%, #FF5435 57.95%, #FF321F 65.62%, #FF0D08 73.29%, #E00000 82.11%, #DC0000 89.01%, #AE0000 94.76%, #7B0000 100%)"}}>
              </div>
            </IonCol>
            <IonCol size="4.5">
              <div className="mr-4 w-full">
                <p className="p-legend">PURE</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Faiblement tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Bien tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Tempérée égal</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Très tempérée</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Pythagoricienne</p>
                <div style={{ 
                  borderLeft: "2px solid var(--color-contrast)",
                  height: "20px"
                }}></div>
                <p className="p-legend">Loup</p>
              </div>
            </IonCol>  
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
    <h4 className="py-3">Pitch pipe & battements</h4>
    <strong>TemperApp propose deux accordeurs.</strong>
    <IonGrid>
      <IonRow>
        <IonCol size="3">
          <strong>Hz</strong>
        </IonCol>
        <IonCol size="9">
          <p className="p-long">
            Le <strong>“pitch pipe”</strong> émet la fréquence 
            de la note à accorder. 
          </p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol size="3">
          <strong>bpm</strong>
        </IonCol>
        <IonCol size="9">
          <p className="p-long">
            L'accordeur <strong>“par battements”</strong> émet le battement prévu d’un 
            intervalle, sur le même principe que celui émis par 
            l’instrument : les fréquences des harmoniques  les plus 
            proches sont émises simultanément.
          </p>
        </IonCol>
      </IonRow>
    </IonGrid>
    <h4 className="py-3">Procédure d'accord</h4>
    <IonGrid>
      <IonRow>
        <IonCol size="3">
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
        A chaque étape vous êtes invité à accorder une note qui <strong>clignotera</strong> sur le cycle des quintes. 
      </p>
      <p className="p-long">
        Cette note sera accordée comme un intervalle sur une note indiquée en <strong>surbrillance</strong>.
      </p>
      <p className="p-long">
        Le battement de l’intervalle est affiché au centre du cercle et généré par 
        l’application.
      </p>
      <p className="p-long">
        Toucher le centre du cercle permet de générer la note à accorder. A tout moment, vous pouvez aller à l’étape précédente, suivante ou interrompre la procédure. 
      </p>
      <div className="py-10"></div>
  </>
);

const Tune: React.FC = () => {
  const [_mainTitle, setMainTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle={_mainTitle}
          subTitle="Accordeur"
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen">
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
        />
      </IonContent>
    </IonPage>
  );
};

export default Tune;
