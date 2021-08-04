import { IonIcon } from "@ionic/react";
import React from "react";
import './PageModal.css'

type PageModalProps = {
  title?: string,
  onQuit: (e: any) => void,
};

const PageModal: React.FC<PageModalProps> = ({
  children = null,
  title = '',
  onQuit,
}) => {
  return (
    <>
      <div>
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
      </div>
      <div className="pm-content h-full px-6 pt-3">
        {children}
      </div>
    </>
  );
};

export default PageModal;
