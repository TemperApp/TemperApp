
import React from 'react';
import "../../pages/Learn.css"

type videoProps = {
  titreText: string,
  videoLink: string,
  thumbnail: string,
}

const VideoLearn: React.FC<videoProps> = ({ titreText, videoLink,thumbnail }) => {
  return (
    <div className="learn-box">
      <h4>{titreText}</h4>
      
      <a href={videoLink}><img src={thumbnail} alt="ressource sonore du tempérament " /></a>
      {/* 
      <iframe name="soundReference" src={videoLink.replace("/watch?v=","/embed/")} title="Référence Sonnore" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      */}
    </div>
  )
};

export default VideoLearn;
