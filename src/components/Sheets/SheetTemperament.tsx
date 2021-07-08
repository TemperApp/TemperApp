import React, { useEffect, useState } from 'react';
import Sheet from './Sheet';
import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import { useParams } from "react-router";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import NonClickablePitchCircleSVG from '../Tuner/nonClickable/NonClickablePitchCircleSVG';
import ParagraphLearn from '../Learn/ParagraphLearn';
import VideoLearn from '../Learn/VideoLearn';
import ResourcesLearn from '../Learn/ResourcesLearn';

const SheetTemperament: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(id));
    })();
  }, [id]);

  return (
    <Sheet
      mainTitle={temperament.nameFR}
      subTitle="Tempérament"
    >
      <div>
        {(temperament.theorist !== "")? (<p className="p-long"><b>Théoricien</b> : {temperament.theorist} </p>) : ("")}
        {(temperament.period !== "")? (<p className="p-long"><b>Époque</b> : {temperament.period} </p>) : ("")}
        {(temperament.geographicalArea !== "")? (<p className="p-long"><b>Aire géographique</b> : {temperament.geographicalArea} </p>) : ("")}
        {(temperament.nature !== "")? (<p className="p-long"><b>Nature</b> : {temperament.nature} </p>) : ("")}
        {(temperament.structuralParticularity !== "")? (<p className="p-long"><b>Particularité scruturelle</b> : {temperament.structuralParticularity} </p>) : ("")}
      </div>

      {((temperament.commentary !== "")
        ? (<ParagraphLearn 
          titreText = "Commentaires"
          contentText = {temperament.commentary}
        />) 
        : (""))
      }

      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="px-4">
            <h3>Qualité des quintes et des tierces</h3>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <NonClickablePitchCircleSVG
            freqA4 = {440}
            idTemperament={parseInt(id)}
            centerCircle={false}
          />
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="px-4">
            <h3>Commas</h3>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </IonCard> 

      {((temperament.soundReferences[0] !== "")
        ? (temperament.soundReferences.map(e => {
          return(<VideoLearn 
            titreText = "Références sonores"
            videoLink = {e}
            key={e}
          />)
          })
        ) 
        : "")
      }

      <ResourcesLearn 
        resourcesList={temperament.sources}
      />

      <IonButton
        className="btn-round absolute right-4 bottom-4"
        routerLink={`/tune/`}
      >
        <IonIcon
          style={{ fontSize: "3rem" } /* TODO Find a better way */}
          src="/assets/logotypes/button-tune.svg"
        />
        
      </IonButton>
    </Sheet>
  );
};

export default SheetTemperament;
