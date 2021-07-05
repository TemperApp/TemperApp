import { IonImg } from '@ionic/react';
import React from 'react';
import "../../pages/Learn.css"

type videoProps = {
  titreText: string,
  videoLink: string
}

const VideoLearn: React.FC<videoProps> = ({ titreText, videoLink }) => {
  return (
    <div className="learn-box">
      <h3>{titreText}</h3>
      <IonImg src={videoLink} />
    </div>
  )
};

export default VideoLearn;
