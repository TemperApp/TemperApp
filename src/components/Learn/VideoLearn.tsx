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
      
      <iframe name="soundReference" src={videoLink.replace("/watch?v=","/embed/")} title="Référence Sonnore" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
    </div>
  )
};

export default VideoLearn;
