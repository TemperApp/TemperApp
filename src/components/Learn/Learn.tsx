import React from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRouterLink,
  IonRow,
} from "@ionic/react";
import { RouteComponentProps } from "react-router-dom";
import HeaderPage from "../../components/Header/HeaderPage";

const Learn: React.FC<RouteComponentProps> = ({ match, history }) => {
  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonReturn={false}
        buttonModalText="Apprendre"
        setShowModal={() => {}}
        darkTheme={false}
      />

      <IonContent fullscreen scrollY={true}>
        <IonGrid>
          <IonRouterLink routerLink="/learn/sheet/1">
            <IonRow className="ion-padding-top">
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Definition</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>

          <IonRouterLink routerLink="/learn/sheet/2">
            <IonRow className="ion-padding-top">
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Caractéristiques</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>

          <IonRouterLink routerLink="/learn/sheet/3">
            <IonRow className="ion-padding-top">
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Physique</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>

          <IonRouterLink routerLink="/learn/sheet/4">
            <IonRow className="ion-padding-top">
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Histoire</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
