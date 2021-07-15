import { IonButton, IonIcon } from "@ionic/react";
import React from "react";
import './PageModal.css'

type PageModalProps = {
  title?: string,
  onQuit: (e: any) => void,
  children?: React.ReactNode,
};

const PageModal: React.FC<PageModalProps> = ({
  title = '',
  onQuit,
  children = null,
}) => {
  return (
    <>
      <section>
        <div className="pm-header h-16 px-6">
          <div className="pm-titles pb-1">
            <h3>{title}</h3>
          </div>
          <button
            className="btn-quit h-9 w-9"
            onClick={onQuit}>
            <IonIcon
              className="btn-quit h-9 w-9"
              src="assets/logotypes/icon-arrow-back.svg">
            </IonIcon>
          </button>
        </div>
        <hr />
      </section>
      <section className="pm-content h-full px-6 pt-3">
        {children}
      </section>
    </>
  );
};

export default PageModal;
