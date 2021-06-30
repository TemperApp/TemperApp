import React, { useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterLink,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Learn.css";
import { Route, RouteComponentProps } from "react-router-dom";
import HeaderPage from "../components/Header/HeaderPage";


type LearnProps = {
  match: RouteComponentProps;
  darkTheme: boolean;
};

/*
const Learn: React.FC<LearnProps> = ({darkTheme}) => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={false}>
      </IonContent>
    </IonPage>
  );
};
*/



const Learn_sheets: React.FC<RouteComponentProps> = ({ match, history }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonReturn={false}
        buttonModalText="Apprendre"
        setShowModal={setShowModal}
        darkTheme={false}
      />

      <IonContent fullscreen scrollY={true}> 
        <IonGrid>
          <IonRouterLink routerLink="/learn/sheet/1">
            <IonRow className="ion-padding-top">
              <IonCol size='4' className="ColPictoLearn">
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35.5" cy="35.5" r="35.5" fill="url(#paint0_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="59.6844" y1="35.5" x2="-25.5062" y2="31.9786" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFE0B1"/>
                  <stop offset="0.480556" stop-color="#FFC09F"/>
                  <stop offset="1" stop-color="#F88F8F"/>
                  </linearGradient>
                  </defs>
                </svg>
              </IonCol>
              <IonCol size ="8" className="ColChapiterLearn">
                <h3>Definition</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>


          <IonRouterLink routerLink="/learn/sheet/2">
            <IonRow className="ion-padding-top">
              <IonCol size='4' className="ColPictoLearn">
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35.5" cy="35.5" r="35.5" fill="url(#paint0_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="59.6844" y1="35.5" x2="-25.5062" y2="31.9786" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFE0B1"/>
                  <stop offset="0.480556" stop-color="#FFC09F"/>
                  <stop offset="1" stop-color="#F88F8F"/>
                  </linearGradient>
                  </defs>
                </svg>
              </IonCol>
              <IonCol size ="8" className="ColChapiterLearn">
                <h3>Caractéristiques</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>

          <IonRouterLink routerLink="/learn/sheet/3">
            <IonRow className="ion-padding-top">
              <IonCol size='4' className="ColPictoLearn">
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35.5" cy="35.5" r="35.5" fill="url(#paint0_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="59.6844" y1="35.5" x2="-25.5062" y2="31.9786" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFE0B1"/>
                  <stop offset="0.480556" stop-color="#FFC09F"/>
                  <stop offset="1" stop-color="#F88F8F"/>
                  </linearGradient>
                  </defs>
                </svg>
              </IonCol>
              <IonCol size ="8" className="ColChapiterLearn">
                <h3>Physique</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>

          <IonRouterLink routerLink="/learn/sheet/4">
            <IonRow className="ion-padding-top">
              <IonCol size='4' className="ColPictoLearn">
                <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35.5" cy="35.5" r="35.5" fill="url(#paint0_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="59.6844" y1="35.5" x2="-25.5062" y2="31.9786" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFE0B1"/>
                  <stop offset="0.480556" stop-color="#FFC09F"/>
                  <stop offset="1" stop-color="#F88F8F"/>
                  </linearGradient>
                  </defs>
                </svg>
              </IonCol>
              <IonCol size ="8" className="ColChapiterLearn">
                <h3>Histoire</h3>
              </IonCol>
            </IonRow>
          </IonRouterLink>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Learn_sheets;
