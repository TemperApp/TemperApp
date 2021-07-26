
import React, { useContext } from 'react';
import "../../pages/Learn.css"
import SettingsContext from '../../store/settings-context';

type videoProps = {
  titreText: string,
  videoLink: string,
  thumbnail: string,
}

const VideoLearn: React.FC<videoProps> = ({ titreText, videoLink }) => {
  const settings = useContext(SettingsContext);

  return (
    <div className="learn-box">
      <h4>{titreText}</h4>
      <a href={videoLink}>
        <img 
          src={(settings.darkTheme)
            ? "/assets/logotypes/thumbnail-dark.svg" 
            : "/assets/logotypes/thumbnail.svg" }
          alt="ressource sonore du tempérament " 
          className="w-full"
        /></a>
      {/* 
      <iframe name="soundReference" src={videoLink.replace("/watch?v=","/embed/")} title="Référence Sonnore" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      */}
    </div>
  )
};

export default VideoLearn;
