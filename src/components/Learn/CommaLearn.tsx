import React from 'react';
import { IonImg } from '@ionic/react';
import "../../pages/Learn.css"

type commaProps = {
  titreText: string,
  contentSVG: string
}

const CommaLearn: React.FC<commaProps> = ({ titreText, contentSVG }) => {
  return (
    <div className="learn-box">
      <h3>{titreText}</h3>
      <IonImg src={contentSVG} />
    </div>
  )
};

export default CommaLearn;
