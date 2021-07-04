import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonModal
} from "@ionic/react";
import PageHeader from "./Page/PageHeader";
import PageModal from "./Page/PageModal";
import Tuner from "../components/Tuner/Tuner";

const TuneModalContent: React.FC = () => (
  <>
    <h2>Qualité des quintes et des tierces</h2>
    <p>
      Le visuel TemperApp vous permet de prévoir en un coup
      d’oeil la sonorité de tous les accords majeurs dans
      le tempérament sélectionné. Chaque note du cycle des
      quintes représente la tonalité majeur correspondantes.
    </p>
    <p>
      Pour chaque accord majeur, les qualités des quintes
      et des tierces sont représentées par une couleur. Les
      tierces sont représentées à l’extérieur du cycle, les
      quintes à l’intérieur.
    </p>
    <div className="flex justify-center items-center">
      <div
        className="h-12 w-12 mr-4 rounded-full"
        style={{ border: "2px solid var(--color-contrast)" }} />
      <div
        className="mr-8">Tierce</div>
      <div
        className="h-6 w-6 mr-4 rounded-full"
        style={{ border: "2px solid var(--color-contrast)" }} />
      <div
        className="">Quinte</div>
    </div>
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
