import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useHistory, useParams } from "react-router";
import PageHeader from "../../pages/Page/PageHeader";

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you
import { fetchLearnSheetById } from "../../engine/DataAccessor";

const LearnSheet: React.FC = () => {
  let { id } = useParams<any>();

  const history = useHistory();
  const [md, setMd] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    (async () => {
      console.log(id);
      const temp = await fetchLearnSheetById(id);
      setMd(temp.content);
      setTitle(temp.label);
    })();
  }, [id])

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={title}
          canGoBack={true}
          onGoBack={() => history.push('/learn/')}
        />
      </IonHeader>

      <IonContent className="learn">
        <div className="px-6 py-2 markdown-content">

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


