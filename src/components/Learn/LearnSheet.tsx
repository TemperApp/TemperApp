import React from "react";
import { IonContent } from "@ionic/react";
import { RouteComponentProps } from "react-router-dom";
import HeaderPage from "../Header/HeaderPage";
import ParagraphLearn from "./ParagraphLearn";
import DiagramLearn from "./DiagramLearn";
import CommaLearn from "./CommaLearn";
import VideoLearn from "./VideoLearn";
import ResourcesLearn from "./ResourcesLearn";
import FormulaLearn from "./FormulaLearn";

const LearnSheet: React.FC<RouteComponentProps> = ({ match, history }) => {
  console.log("il y a quelqu'un ? ");
  console.log(match);
  console.log(history);

  return (
    <>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonReturn={true}
        buttonModalText={match.path}
        setShowModal={() => {}}
        darkTheme={false}
      />

      <IonContent >
        <div className="LearnContent" >
        
          <ParagraphLearn 
            titreExist = {true}
            titreText = "Titre de paragraphe"
            contentText = "Cette phrase est généréré ici."
            darkTheme = {false}
          />

          <DiagramLearn
            titreText="Titre du diagramme"
            contentImg="../assets/icon/imageType.png"
            darkTheme={false}
          />

          <FormulaLearn 
            mathsFormula = "f_{i+1} = \frac{3}{2} f_{i}"
          />

          <CommaLearn
            titreText="Titre de diagramme"
            contentSVG="../assets/icon/commaType.png"
            darkTheme={false}
          />

          <VideoLearn
            titreText="Titre de la vidéo"
            videoLink="../assets/icon/videoType.png"
            darkTheme={false}
          />

          <ResourcesLearn
            resourcesList={[
              "Wikipedia",
              "TemperamentWiki",
              "Rapport de fréquence",
            ]}
            darkTheme={false}
          />

        </div>

      </IonContent>
    </>
  );
};

export default React.memo(
  LearnSheet,
  (prevProps, nextProps) =>
    prevProps.history.location.key === nextProps.history.location.key &&
    prevProps.match.path === nextProps.match.path
);
