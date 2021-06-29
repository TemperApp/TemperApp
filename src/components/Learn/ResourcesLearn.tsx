import { IonImg } from '@ionic/react';
import React from 'react';

import "../../pages/Learn.css"


type resourcesProps = {
    resourcesList : Array<string>, 
    darkTheme: boolean,
  }


const ResourcesLearn : React.FC<resourcesProps> = ({resourcesList, darkTheme}) => {

return (
    <div className ="LearnResources">
      <h3>Ressources</h3>
      {resourcesList.map((r) => (
        <div className ="LearnResourcesBox">
          <p>{r}</p>
        </div>
      ))}
    </div>
)


}; 


export default ResourcesLearn;