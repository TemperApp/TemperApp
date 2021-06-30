import { IonButton, IonImg } from '@ionic/react';
import React from 'react';

import "../../pages/Learn.css"


type resourcesProps = {
    resourcesList : Array<string>, 
    darkTheme: boolean,
  }


const ResourcesLearn : React.FC<resourcesProps> = ({resourcesList, darkTheme}) => {

return (
    <div className ="LearnResources">
      <h3 className="TitleParagraphLearn">Ressources</h3>
      {resourcesList.map((r) => (
        <IonButton className="LearnResourcesBox" expand="block" color="light">
        {r}
        </IonButton>
      ))}
    </div>
)


}; 


export default ResourcesLearn;