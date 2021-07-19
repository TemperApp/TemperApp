import React from 'react';
import { IonButton } from '@ionic/react';

import "../../pages/Learn.css"
import { DataSources } from '../../model/Temperament/Temperament';

type resourcesProps = {
  resourcesList: Array<DataSources>,
}

const ResourcesLearn: React.FC<resourcesProps> = ({ resourcesList }) => {

  const completeTitle = (r: DataSources) => {
    if({author: "Lindley, Mark", book: "A quest for Bach’s ideal style of organ temperament", title:"", other: " in M. Lustig, ed., Stimmungen im 17. und 18.Jahrhundert, Michaelstein, ", date: "1997", page: "", url:"https://www.academia.edu/1134176/A_quest_for_Bach_s_ideal_style_of_organ_temperament"})
    if(r.author !== "" || r.title !=="" || r.other !== "" || r.date !== "" || r.page !== ""){
      return [<p key={"learnRessourceTitle_"+r.book}><b>{r.author} </b><u>{r.title} </u><i>{r.book} </i>{r.other} ({r.date}) {r.page}</p>];
    }
    return "";
  }

  const buttonWithLink = (r: DataSources, idx: number) => {
    if(r.url !== ""){
      return(
        <IonButton
          key={idx}
          className="learn-resources-btn h-11"
          expand="block"
          color="light"
          href={r.url}
          >
          <span className="ion-text-left">
            {r.book}
          </span>
        </IonButton>
      );
    }
  }

  return (
    <div className="LearnResources">
      <h3 className="TitleParagraphLearn py-3">Ressources</h3>
      {resourcesList.map((r, idx) => {
        let longTitle = completeTitle(r);
        let btn = buttonWithLink(r,idx);
        return(
        <div key={"learnRessource_"+r.book}>
          {btn}
          <div className="learn-ressources-not-btn">
          {longTitle}
          </div>
        </div>  
        )
      }
        
      )}
    </div>
  )
};

export default ResourcesLearn;
