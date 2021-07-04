import React, { useState } from "react";
import { IonPage, IonContent, IonHeader, IonModal } from "@ionic/react";
import PageHeader from "./PageHeader";
import PageModal from "./PageModal";

type PageProps = {
  mainTitle?: string,
  subTitle?: string,
  modalTitle?: string,
  modalContent?: React.ReactNode,
  children?: React.ReactNode,
}

const Page: React.FC<PageProps> = ({
  mainTitle = '',
  subTitle = '',
  modalTitle = '',
  modalContent = null,
  children = null,
}) => {
  const [_mainTitle,] = useState(mainTitle);
  const [_subTitle,] = useState(subTitle);
  const [_modalTitle,] = useState(modalTitle);
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle={_mainTitle}
          subTitle={_subTitle}
          onShowModal={() => setShowModal(true)}
        />
      </IonHeader>

      <IonModal isOpen={showModal} cssClass="modal-fullscreen">
        <PageModal
          title={_modalTitle}
          onQuit={() => setShowModal(false)}
        >
          {modalContent}
        </PageModal>
      </IonModal>

      <IonContent>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Page;
