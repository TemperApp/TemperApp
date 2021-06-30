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
import ButtonLearnSVG from "../components/Learn/ButtonLearnSVG";
import { Route, RouteComponentProps } from "react-router-dom";
import Learn_sheets from "./Learn_sheets";
import Learn_sheet from "./Learn_sheet";

import { IonReactRouter } from "@ionic/react-router";
import { Link } from "react-router-dom";
import HeaderPage from "../components/Header/HeaderPage";

type LearnProps = {
  match: RouteComponentProps;
  darkTheme: boolean;
};

const Learn: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={Learn_sheets} />
      <Route path={`${match.url}/file/:id`} component={Learn_sheet} />
    </IonRouterOutlet>
  );
};

export default Learn;
