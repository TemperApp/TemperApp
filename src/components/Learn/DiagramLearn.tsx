import { IonImg } from '@ionic/react';
import React from 'react';
import "../../pages/Learn.css"

type diagramProps = {
  titreText: string,
  contentImg: string
}

const DiagramLearn: React.FC<diagramProps> = ({
  titreText, contentImg
}) => {
  return (
    <div className="learn-box">
      <h3>{titreText}</h3>
      <IonImg className="learn-element" src={"../assets/icon/imageType.png"} />
    </div>
  )
};

export default DiagramLearn;
