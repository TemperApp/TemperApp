import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRouterOutlet,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./Learn.css";
import LearnPage from "./LearnPage";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Router } from "react-router";
import { Link } from "react-router-dom";

const Learn: React.FC = () => (
  <>
    <IonReactRouter>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle class="title">Apprendre</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Route exact path="/learn/definition" component={LearnPage} />
          <Route exact path="/learn/caracteristics" component={LearnPage} />
          <IonList>
            <Link to="/learn/definition">
              <IonItem>
                <IonButton class="learn-button"></IonButton>
                <IonLabel>Définition</IonLabel>
              </IonItem>
            </Link>
            <Link to="/learn/caracteristics">
              <IonItem>
                <IonButton class="learn-button"></IonButton>
                <IonLabel>Caractéristiques</IonLabel>
              </IonItem>
            </Link>
          </IonList>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </>
);

export default Learn;
