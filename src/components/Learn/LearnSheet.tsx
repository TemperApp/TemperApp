import React from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useParams } from "react-router";
import ParagraphLearn from "./ParagraphLearn";
import DiagramLearn from "./DiagramLearn";
import CommaLearn from "./CommaLearn";
import VideoLearn from "./VideoLearn";
import ResourcesLearn from "./ResourcesLearn";
import FormulaLearn from "./FormulaLearn";
import PageHeader from "../../pages/Page/PageHeader";

const LearnSheet: React.FC = () => {
  let { id } = useParams<any>();
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle={id}
          canGoBack={true}
        />
      </IonHeader>

      <IonContent className="learn">
        <div className="px-6">

          <ParagraphLearn
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
