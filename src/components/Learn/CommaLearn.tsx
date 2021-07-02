import { IonImg } from '@ionic/react';
import React from 'react';

import "../../pages/Learn.css"


type commaProps = {
    titreText:string,
    contentSVG: string
  }


const CommaLearn : React.FC<commaProps> = ({titreText, contentSVG}) => {

return (
    <div className ="LearnBox">
        <h3>{titreText}</h3>
        <IonImg src={contentSVG} />
    </div>
)


}; 


export default CommaLearn;