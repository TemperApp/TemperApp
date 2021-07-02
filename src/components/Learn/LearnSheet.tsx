import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router-dom";
import HeaderPage from "../Header/HeaderPage";
import ParagraphLearn from "./ParagraphLearn";
import DiagramLearn from "./DiagramLearn";
import CommaLearn from "./CommaLearn";
import VideoLearn from "./VideoLearn";
import ResourcesLearn from "./ResourcesLearn";
import FormulaLearn from "./FormulaLearn";

const LearnSheet: React.FC = () => {
  let { id } = useParams<any>();
  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonReturn={true}
        buttonModalText={id}
        setShowModal={() => {}}
      />

      <IonContent >
        <div className="LearnContent" >
        
          <ParagraphLearn 
            titreExist = {true}
            titreText = "Titre de paragraphe"
            contentText = "Cette phrase est généréré ici."
          />

          <DiagramLearn
            titreText="Titre du diagramme"
            contentImg="../assets/icon/imageType.png"
          />

          <FormulaLearn 
            mathsFormula = "f_{i+1} = \frac{3}{2} f_{i}"
          />

          <CommaLearn
            titreText="Titre de diagramme"
            contentSVG="../assets/icon/commaType.png"
          />

          <VideoLearn
            titreText="Titre de la vidéo"
            videoLink="../assets/icon/videoType.png"
          />

          <ResourcesLearn
            resourcesList={[
              "Wikipedia",
              "TemperamentWiki",
              "Rapport de fréquence",
            ]}
          />

        </div>

      </IonContent>
    </IonPage>
  );
};
/*
export default React.memo(
  LearnSheet,
  (prevProps, nextProps) =>
    prevProps.history.location.key === nextProps.history.location.key &&
    prevProps.match.path === nextProps.match.path
);
*/
export default LearnSheet;
