import React from "react";
import { IonButton, IonIcon } from "@ionic/react";

type TogglerProps = {
  typeContentText?: boolean,
  sizeSVG?: string,
  contentLeft?: string,
  contentRight?: string,
  classNameStyle?: string,
  classNameActivated?: string,
  conditionLeft?: boolean, 
  conditionRight?: boolean,
  onClickLeft?: (e: any) => void,
  onClickRight?: (e: any) => void,
}

const Toggler: React.FC<TogglerProps> = ({
  typeContentText,
  sizeSVG = '',
  contentLeft = '',
  contentRight = '',
  classNameStyle ='m-0 p-0',
  classNameActivated = 'btn-mode-activated',
  conditionLeft, 
  conditionRight,
  onClickLeft = () => {}, 
  onClickRight = () => {},
}) => {
  return (
    <div className="w-20 btn-mode">
      <IonButton
      onClick={onClickLeft}
      className={`btn-mode-bpm ${classNameStyle}
        ${conditionLeft ? classNameActivated : ""}`}
      >
      {typeContentText ? 
        contentLeft : 
        <IonIcon
          style={{ fontSize: sizeSVG }}
          src={contentLeft}
        ></IonIcon>}
      </IonButton>


      <IonButton
        onClick={onClickRight}
        className={`btn-mode-hz ${classNameStyle}
          ${conditionRight ? classNameActivated :""}`}
      >
        {typeContentText ? 
        contentRight : 
        <IonIcon
          style={{ fontSize: sizeSVG}}
          src={contentRight}
        ></IonIcon>}
      </IonButton>
    </div>
  );
};

export default Toggler;
