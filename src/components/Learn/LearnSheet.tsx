import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useParams } from "react-router";
import ParagraphLearn from "./ParagraphLearn";
import DiagramLearn from "./DiagramLearn";
import CommaLearn from "./CommaLearn";
import VideoLearn from "./VideoLearn";
import ResourcesLearn from "./ResourcesLearn";
import FormulaLearn from "./FormulaLearn";
import PageHeader from "../../pages/Page/PageHeader";

import { learnSheets } from "../../model/Learn/learnSheets";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

const LearnSheet: React.FC = () => {
  let { id } = useParams<any>();

  const [md, setMd] = useState('')

  useEffect(() => {
    setMd(learnSheets[1].content);
    console.log(md)
  }, [])

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={id}
          canGoBack={true}
        />
      </IonHeader>

      <IonContent className="learn">
        <div className="px-6">

          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            children={md}
          />

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
              {author: "", book: "Wikipedie Gammes et tempéraments (FR)", title:"", other: "", date: "", page: "", url:"https://fr.wikipedia.org/wiki/Gammes_et_temp%C3%A9raments_dans_la_musique_occidentale"},
              {author: "", book: "Acustica accordatura e temperamento nell'illuminismo veneto. Insituto di Paleografia Musicale,", title:"", other: "Torre d'Orfeo, Roma", date: "1987", page: "", url:""},
              {author: "Barbieri, Patrizio,", book: "Acustica accordatura e temperamento nell'illuminismo veneto. Insituto di Paleografia Musicale,", title:"", other: "Torre d'Orfeo, Roma", date: "1987", page: "", url:""},
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
