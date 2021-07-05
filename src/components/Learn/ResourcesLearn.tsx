import React from 'react';
import { IonButton } from '@ionic/react';

import "../../pages/Learn.css"

type resourcesProps = {
  resourcesList: Array<string>,
}

const ResourcesLearn: React.FC<resourcesProps> = ({ resourcesList }) => {
  return (
    <div className="LearnResources">
      <h3 className="TitleParagraphLearn">Ressources</h3>
      {resourcesList.map((r, idx) => (
        <IonButton
          key={idx}
          className="learn-resources-btn"
          expand="block"
          color="light"
        >
          {r}
        </IonButton>
      ))}
    </div>
  )
};

export default ResourcesLearn;
