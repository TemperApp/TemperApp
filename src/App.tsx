import React, { useEffect, useState } from 'react';
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";

import { useSQLite } from "react-sqlite-hook/dist";

import Tune from "./pages/Tune";
import Compare from "./pages/Compare";
import Home from "./pages/Home";

import {
  HomeSVG,
  TuneSVG,
  CompareSVG,
  SheetsSVG,
  LearnSVG,
} from "./components/App/Icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./App.css";

/* Fonction Engine */
import DB from './engine/DB';
import LearnBis from './pages/LearnBis';
import SheetsRoute from './pages/SheetsRoute';

/* SQLite */
export let sqlite: any; // singleton

const App: React.FC = () => {

  const [darkTheme, setDarkTheme] = useState(false);
  
  const {echo, getPlatform, createConnection, closeConnection,
    retrieveConnection, retrieveAllConnections, closeAllConnections,
    addUpgradeStatement, importFromJson, getDatabaseList, isDatabase, isJsonValid, copyFromAssets,
    isAvailable} = useSQLite();

  useEffect(() => {
    sqlite = {
      echo,
      getPlatform,
      createConnection,
      closeConnection,
      retrieveConnection,
      retrieveAllConnections,
      closeAllConnections,
      addUpgradeStatement,
      importFromJson,
      getDatabaseList,
      isDatabase,
      isJsonValid,
      copyFromAssets,
      isAvailable,
    };

    if (DB.isAvailable())
      // TODO Remove on production
      DB.init(); // TODO Add loading state to prevent user actions app during initialization
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet animated={false}>
            <Route exact path="/Tune">
              <Tune 
                darkTheme = {darkTheme}
              />
            </Route>
            <Route exact path="/compare">
              <Compare 
                darkTheme = {darkTheme}
              />
            </Route>
            <Route exact path="/home">
              <Home 
                darkTheme = {darkTheme}
                setDarkTheme = {setDarkTheme}
              />
            </Route>
            <Route exact path="/sheets">
              <SheetsRoute />
            </Route>
            <Route exact path="/learn" /*render={props => <Learn {...props}/>}*/>
              <LearnBis />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tune" href="/tune" >
              <IonIcon
                src="/assets/logotypes/icon-diapason-grey.svg"
                class="icon-light"
              />
              <IonLabel>Accorder</IonLabel>
            </IonTabButton>
            <IonTabButton tab="compare" href="/compare">
              <IonIcon
                src="/assets/logotypes/icon-compare-grey.svg"
                class="icon-light"
              />
              <IonLabel>Comparer</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonIcon
                src="/assets/logotypes/icon-home-grey.svg"
                class="icon-light"
              ></IonIcon>
              <IonLabel>Accueil</IonLabel>
            </IonTabButton>
            <IonTabButton tab="sheets" href="/sheets">
              <IonIcon
                src="/assets/logotypes/icon-fiches-grey.svg"
                class="icon-light"
              />
              <IonLabel>Fiches</IonLabel>
            </IonTabButton>
            <IonTabButton tab="learn" href="/learn">
              <IonIcon
                src="/assets/logotypes/icon-apprendre-grey.svg"
                class="icon-light"
              />
              <IonLabel>Apprendre</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
