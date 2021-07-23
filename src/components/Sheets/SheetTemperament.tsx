import React, { useEffect, useState } from 'react';
import Sheet from './Sheet';
import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import { useParams } from "react-router";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonSlide, IonSlides } from '@ionic/react';
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
      <div className="px-6">
        {(temperament.theorist !== "")? (<p className="p-long"><b>Théoricien</b> : {temperament.theorist} </p>) : ("")}
        {(temperament.period !== "")? (<p className="p-long"><b>Époque</b> : {temperament.period} </p>) : ("")}
        {(temperament.geographicalArea !== "")? (<p className="p-long"><b>Aire géographique</b> : {temperament.geographicalArea} </p>) : ("")}
        {(temperament.nature !== "")? (<p className="p-long"><b>Nature</b> : {temperament.nature} </p>) : ("")}
        {(temperament.structuralParticularity !== "")? (<p className="p-long"><b>Particularité scruturelle</b> : {temperament.structuralParticularity} </p>) : ("")}
        {((temperament.commentary !== "")
          ? (<ParagraphLearn 
            titreText = "Commentaires"
            contentText = {temperament.commentary}
          />) 
          : (""))
        }
      </div>

      <div className="px-6">
        <IonCard className="quality-card">
          <IonCardHeader className="py-2">
            <IonCardTitle className="px-1">
              <h4>Qualité des quintes et des tierces</h4>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent className="quality-wheel py-6">
            <PitchCircleView temperament={temperament} />
          </IonCardContent>
        </IonCard>
      </div>

      <IonSlides pager={true} options={slideOpts} className="max-w-lg max-h-lg">
          <IonSlide className="px-6">
            <IonCard className="comma-card h-full">
              <IonCardHeader className="py-2">
                <IonCardTitle className="px-1 text-left">
                  <h4>Fractions de commas affectant les quintes</h4>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="max-w-lg max-h-lg">
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
          <IonSlide className="px-6">
            <IonCard className="comma-card h-full">
              <IonCardHeader className="py-2">
                <IonCardTitle className="px-1 text-left">
                  <h4>Fractions de commas affectant les tierces</h4>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="max-w-lg max-h-lg">
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
      
      <div className="px-6">
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
