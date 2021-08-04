import React, { useContext, useEffect, useState } from 'react';
import Sheet from './Sheet';
import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import { useParams } from "react-router";
import { IonButton, IonIcon } from '@ionic/react';
import VideoLearn from '../Learn/VideoLearn';
import ResourcesLearn from '../Learn/ResourcesLearn';
import GlobalStatesContext from '../../store/global-states-context';
import Card from '../Card';
import Commas from './SheetCommas';
import SheetDoubleRings from './SheetDoubleRings';

const SheetTemperament: React.FC = () => {

  const global = useContext(GlobalStatesContext);
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
      id = {id}
    >
      <div className="px-6">
        {(temperament.theorist !== "")? (<p className="p-long"><b>Théoricien</b> : {temperament.theorist} </p>) : ("")}
        {(temperament.period !== "")? (<p className="p-long"><b>Époque</b> : {temperament.period} </p>) : ("")}
        {(temperament.geographicalArea !== "")? (<p className="p-long"><b>Aire géographique</b> : {temperament.geographicalArea} </p>) : ("")}
        {(temperament.nature !== "")? (<p className="p-long"><b>Nature</b> : {temperament.nature} </p>) : ("")}
        {(temperament.structuralParticularity !== "")? (<p className="p-long"><b>Particularité structurelle</b> : {temperament.structuralParticularity} </p>) : ("")}
        {(temperament.commentary !== "")
          && <>
            <h4>Commentaires</h4>
            <p className="p-long">{temperament.commentary}</p>
          </>
        }
      </div>

      <div className="px-6 mx-auto max-w-lg">
        <Card
          title="Qualité des quintes et des tierces"
          classNameContent='pb-14'
        >
          <SheetDoubleRings temperament={temperament} />
        </Card>
      </div>
            
      <div className="mx-auto max-w-lg">
        <Commas temperament={temperament} />
      </div>

      <div className="px-6 mx-auto max-w-lg">
        {((temperament.soundReferences[0].url !== "")
          ? (temperament.soundReferences.map(e => {
            return(<VideoLearn 
              titreText = {e.title}
              videoLink = {e.url}
              thumbnail = {e.img !== undefined ? e.img : "assets/icon/thumbnail.png"}
              key={e.url}
            />)
            })
          ) 
          : "")
        }
        <ResourcesLearn 
          resourcesList={temperament.sources}
        />
      </div>

      <div className="relative flex justify-end right-4 pb-16">
        <IonButton
          id="btn-goto-tune"
          className="btn-round fixed"
          onClick={() => global.setTunerTemperamentId(temperament.idTemperament)}
          routerLink={`/tune`}
        >
          <IonIcon
            style={{ fontSize: "3rem"} /* TODO Find a better way */}
            src="/assets/logotypes/button-tune.svg"
          /> 
        </IonButton>
      </div>
    </Sheet>
  );
};

export default SheetTemperament;
