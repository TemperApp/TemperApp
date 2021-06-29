import { IonImg } from '@ionic/react';
import React from 'react';

import "../../pages/Learn.css"


type videoProps = {
    titreText:string,
    videoLink: string
    darkTheme: boolean,
  }


const VideoLearn : React.FC<videoProps> = ({titreText, videoLink, darkTheme}) => {

return (
    <div className ="LearnBox">
        <h3>{titreText}</h3>
        <IonImg src={videoLink} />
    </div>
)


}; 


export default VideoLearn;