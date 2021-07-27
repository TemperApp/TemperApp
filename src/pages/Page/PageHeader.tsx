import { IonIcon } from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import './PageHeader.css'

type PageHeaderProps = {
  mainTitle?: string,
  subTitle?: string,
  onShowModal?: (event: any) => void,
  canGoBack?: boolean,
  onGoBack?: (event: any) => void,
  children?: React.ReactNode,
}

const PageHeader: React.FC<PageHeaderProps> = ({
  mainTitle = '',
  subTitle = '',
  onShowModal,
  canGoBack = false,
  onGoBack = null,
  children = null,
}) => {
  const history = useHistory();

  const btnShowModal = (onShowModal !== undefined)
    ? (<button
        className="btn-show-modal h-9 w-9 p-0"
        onClick={onShowModal}
      >
        <IonIcon
          className="h-9 w-9"
          style={{ width: "1.8rem" } /* TODO Find a better way */}
          src={"/assets/logotypes/button-help.svg"}
        ></IonIcon>
      </button>
      )
    : null;

  const btnGoBack = (canGoBack)
      ? (<button
          className="btn-go-back h-9 w-9"
          onClick={(onGoBack) ? onGoBack : () => history.goBack()}
        >
          <IonIcon
            src="../../assets/logotypes/icon-back.svg"
            size="large"
          ></IonIcon>
        </button>)
      : null;

  return (
    <>
      <div className="ph-content h-17 px-6 pb-1">
        <div className="ph-titles">
          <h3>{subTitle}</h3>
          <h2>{mainTitle}</h2>
        </div>
        {btnShowModal}
        {btnGoBack}
        {children}
      </div>
      <hr className="ph-hr" />
    </>
  )
};

export default PageHeader;
