import React, { useState } from "react";
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
import ButtonLearnSVG from "../components/Learn/ButtonLearnSVG";

import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Router, Switch } from "react-router";
import { Link } from "react-router-dom";
import HeaderPage from "../components/Header/HeaderPage";

const Learn: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage
        buttonModal={true}
        buttonModalText="Apprendre"
        setShowModal={setShowModal}
      />
      <IonList>
        <Link to="/learn/definition">
          <IonItem>
            <ButtonLearnSVG />
            <IonLabel>Définition</IonLabel>
          </IonItem>
        </Link>
        <Link to="/learn/caracteristics">
          <IonItem>
            <ButtonLearnSVG />
            <IonLabel>Caractéristiques</IonLabel>
          </IonItem>
        </Link>
      </IonList>
      <IonContent>
        <Switch>
          <Route path="/learn/definition" component={LearnPage} />
          <Route path="/learn/caracteristics" component={LearnPage} />
          <Route path="*">
            <Redirect to="/learn" />
          </Route>
        </Switch>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
