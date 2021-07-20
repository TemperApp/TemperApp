import React, { useEffect, useState } from 'react';
import Sheet from './Sheet';
import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import { useParams } from "react-router";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonIcon, IonSlide, IonSlides } from '@ionic/react';
import ParagraphLearn from '../Learn/ParagraphLearn';
import VideoLearn from '../Learn/VideoLearn';
import ResourcesLearn from '../Learn/ResourcesLearn';
import PitchCircleView from '../Tuner/PitchCircle/View';
import FifthComaCircle from './FifthComaCircle';
import { fifthQ, thirdQ } from '../../model/Divergence';
import Toggler from '../inputs/Toggler';
import ThirdComaCircle from './ThirdComaCircle';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const SheetTemperament: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [isCpMode, setCpMode] = useState<boolean>(true);

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
            <h4>Qualité des quintes et des tierces</h4>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <PitchCircleView temperament={temperament} />
        </IonCardContent>
      </IonCard>

      <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <IonCard className="comma-card">
              <IonCardHeader className="py-1">
                <IonCardTitle className="px-4 text-left">
                  <h4>Fractions de commas affectant les quintes</h4>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="w-full flex justify-center">
                  <svg
                    className="comparator-comas"
                    viewBox="0 0 25 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <FifthComaCircle 
                      temperament={temperament}
                      qualityNote={fifthQ(temperament.cpExp5th)}
                      isCpMode={isCpMode}
                    >
                    </FifthComaCircle>
                  </svg>
                </div>
                <div className="comma-toggler">
                  <Toggler
                    typeContentText={true}
                    contentLeft="Cs"
                    contentRight="Cp"
                    conditionLeft={!isCpMode}
                    conditionRight={isCpMode}
                    onClickLeft={() => setCpMode(false)}
                    onClickRight={() => setCpMode(true)}
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard className="comma-card">
              <IonCardHeader>
                <IonCardTitle className="px-1 text-left">
                  <h4>Fractions de commas affectant les tierces</h4>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="w-100 flex justify-center">
                  <svg
                    className="comparator-comas"
                    viewBox="0 0 25 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ThirdComaCircle 
                      temperament={temperament}
                      qualityNote={thirdQ(temperament.csExp3rd)}
                    >
                    </ThirdComaCircle>
                  </svg>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>

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
        className="btn-round fixed right-4 bottom-20"
        routerLink={`/tune/${temperament.idTemperament}`}
      >
        <IonIcon
          style={{ fontSize: "3rem"} /* TODO Find a better way */}
          src="/assets/logotypes/button-tune.svg"
        /> 
      </IonButton>


    </Sheet>
  );
};

export default SheetTemperament;
