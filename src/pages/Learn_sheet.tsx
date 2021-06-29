import React from 'react';
import {IonContent, IonImg} from '@ionic/react';
import './Learn.css';
import {RouteComponentProps} from 'react-router-dom';
import HeaderPage from '../components/Header/HeaderPage';
import { isDarkTheme } from '../model/Utils';
import ParagraphLearn from '../components/Learn/ParagraphLearn';
import DiagramLearn from '../components/Learn/DiagramLearn';
import CommaLearn from '../components/Learn/CommaLearn';
import VideoLearn from '../components/Learn/VideoLearn';
import ResourcesLearn from '../components/Learn/ResourcesLearn';

interface UserDetailPageProps extends RouteComponentProps<{
  id: string;
}> {}


const Learn_sheet: React.FC<RouteComponentProps> = ({match, history}) => {

  console.log("il y a quelqu'un ? ");
  console.log(match);
  console.log(history);


  return (
    <>
      <HeaderPage 
        buttonModal = {false}
        buttonReturn={true}
        buttonModalText = {match.path}
        setShowModal = {() => {}}
        darkTheme = {false} />

      <IonContent >
        <div className="LearnContent" >
        
          <ParagraphLearn 
            titreText = "Titre de paragraphe"
            contentText = "Cette phrase est généréré ici."
            darkTheme = {false}
          />

          <DiagramLearn 
            titreText = "Titre du diagramme"
            contentImg= "../assets/icon/imageType.png"
            darkTheme = {false}
          />

          <CommaLearn 
            titreText = "Titre de diagramme"
            contentSVG= "../assets/icon/commaType.png"
            darkTheme = {false}
          />

          <VideoLearn 
            titreText = "Titre de la vidéo"
            videoLink = "../assets/icon/videoType.png"
            darkTheme = {false}
          />

          <ResourcesLearn 
            resourcesList = {["Wikipedia", "TemperamentWiki","Rapport de fréquence"]}
            darkTheme = {false}
          />


        </div>







      </IonContent>
    </>
  );
};

export default React.memo(
  Learn_sheet,
  (prevProps, nextProps) => (
    prevProps.history.location.key === nextProps.history.location.key
    && prevProps.match.path === nextProps.match.path)
);