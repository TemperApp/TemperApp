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
import { fetchLearnSheetById } from "../../engine/DataAccessor";

const LearnSheet: React.FC = () => {
  let { id } = useParams<any>();

  const [md, setMd] = useState('')

  useEffect(() => {
    (async () => {
      console.log(id);
      const temp = await fetchLearnSheetById(id);
      setMd(temp.content);
    })();
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
function fetchLearnSheetPropsById(id: any) {
  throw new Error("Function not implemented.");
}

