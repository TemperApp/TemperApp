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
  IonCardContent
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
    <IonCard className="flex justify-center items-center w-full py-5">
      <IonCardContent className="w-full">
        <IonGrid>
          <IonRow className="justify-end items-end">
            <IonCol size="5" offset="2">
              <strong>Quintes</strong>
              <div className="h-12 w-12 mr-4"
                style={{ border: "2px solid var(--color-contrast)",
                        height: "70vh",
                        background: "linear-gradient(180deg, #000000 0%, #161616 6.98%, #333333 12.45%, #7E7E7E 16.74%, #9F9F9F 20.27%, #B9B9B9 24.81%, #60CFC5 28.6%, #FFE5BB 31.88%, #FFD592 36.92%, #FFBB75 41.97%, #FF9960 48.53%, #FF764A 53.07%, #FF5435 58.62%, #FF321F 64.68%, #FF0D08 70.23%, #DC0000 77.04%, #E00000 77.81%, #AE0000 83.1%, #7B0000 88.15%, #4F0000 93.45%, #161616 100%)"}}>
              </div>
            </IonCol>
            <IonCol size="5">
              <strong>Tierces</strong>
              <div className="h-12 w-12 mr-4"
                style={{ border: "2px solid var(--color-contrast)",
                        height: "70vh",
                        background: "linear-gradient(180deg, #000000 0%, #161616 6.98%, #333333 12.45%, #7E7E7E 16.74%, #9F9F9F 20.27%, #B9B9B9 24.81%, #60CFC5 28.6%, #FFE5BB 31.88%, #FFD592 36.92%, #FFBB75 41.97%, #FF9960 48.53%, #FF764A 53.07%, #FF5435 58.62%, #FF321F 64.68%, #FF0D08 70.23%, #DC0000 77.04%, #E00000 77.81%, #AE0000 83.1%, #7B0000 88.15%, #4F0000 93.45%, #161616 100%)"}}>
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
          <strong>but</strong>
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
