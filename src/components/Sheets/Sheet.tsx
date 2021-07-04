import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
} from "@ionic/react";

import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import './Sheet.css'
import { useParams } from "react-router";
import PageHeader from "../../pages/Page/PageHeader";

type SheetProps = {
  children: React.ReactNode,
}

const Sheet: React.FC<SheetProps> = ({
  children,
}) => {
  
  const {id} = useParams<{id: string}>();
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    (async () => {
      setTemperament(await fetchTemperamentPropsById(id));
    })();
  }, [id]);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle={temperament.nameFR}
          subTitle="Tempérament"
          canGoBack={true}
        />
      </IonHeader>

      <IonContent className="sheet">
        <section className="px-6">
          <div className="fixed h-10 w-10 right-4">
            <IonIcon
              className="icon-grey"
              style={{ fontSize: "2.8rem" } /* TODO Find a better way */}
              src="/assets/logotypes/bookmark.svg"
            />
          </div>
          
          <div className="pt-3">
            {children}
          </div>

          <IonButton
            className="btn-round absolute right-4 bottom-4"
            routerLink={`/tune/`}
          >
            <IonIcon
              style={{ fontSize: "3rem" } /* TODO Find a better way */}
              src="/assets/logotypes/button-tune.svg"
            />
          </IonButton>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Sheet;
