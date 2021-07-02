import React from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRouterLink,
  IonRow,
} from "@ionic/react";
import HeaderPage from "../../components/Header/HeaderPage";

const Learn: React.FC = () => {
  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonReturn={false}
        buttonModalText="Apprendre"
        setShowModal={() => {}}
      />

      <IonContent fullscreen scrollY={true} className="ion-padding-top">
        <IonRouterLink routerLink="/learn/definition">
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Definition</h3>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRouterLink>

        <IonRouterLink routerLink="/learn/characteristics">
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Caractéristiques</h3>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRouterLink>

        <IonRouterLink routerLink="/learn/physics">
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Physique</h3>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRouterLink>

        <IonRouterLink routerLink="/learn/history">
          <IonGrid>
            <IonRow>
              <IonCol size="4" className="ColPictoLearn">
                <div className="button-learn" />
              </IonCol>
              <IonCol size="8" className="ColChapiterLearn">
                <h3>Histoire</h3>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
