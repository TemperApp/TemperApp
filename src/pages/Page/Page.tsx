import React, { useState } from "react";
import { IonPage, IonContent, IonHeader, IonModal } from "@ionic/react";
import PageHeader from "./PageHeader";
import './Page.css'
import PitchCircle from "../../components/Tuner/PitchCircle";
import PageModal from "./PageModal";

const Page: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle="Temperament"
          subTitle="Werckmeister III(V)"
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen">
        <PageModal
          title='Aide · Accordeur'
          onQuit={() => setShowModal(false)}
        >
          <h2>Cras non nibh ac dolor mollis</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean eget ultricies eros. In hac habitasse
            platea dictumst.
          </p>
          <p>
            Sed nunc justo, rutrum id finibus at, volutpat ac
            mi. Donec eros neque, finibus sit amet molestie
            vitae, ornare at leo. Phasellus efficitur dapibus
            molestie.
          </p>
          <h3>Aliquam quis porttitor lectus, a efficitur diam</h3>
          <p>
            Morbi eu orci risus. Ut tellus risus, auctor a quam
            at, pulvinar vehicula quam. Etiam ipsum erat,
            sodales vitae porttitor a, vestibulum nec mi.
            Curabitur in ipsum bibendum leo sollicitudin
            egestas. Aenean tortor est, pretium non posuere
            id, vehicula eget nibh.
          </p>
        </PageModal>
      </IonModal>

      <IonContent>
        <PitchCircle
          isHzMode={true}
          freqA4={440}
          idTemperament={4}
        />
      </IonContent>
    </IonPage>
  );
};

export default Page;
