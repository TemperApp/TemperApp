import React, { useEffect } from 'react';
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
import "./theme/layout/index.css";
import "./App.css";

/* Fonction Engine */
import DB from './engine/DB';
import Sheets from './pages/Sheets';
import SheetsTemperament from './components/Sheets/SheetsTemperament';
import LearnSheet from './components/Learn/LearnSheet';
import Learn from './components/Learn/Learn';

/* SQLite */
export let sqlite: any; // singleton

const App: React.FC = () => {

  const { echo, getPlatform, createConnection, closeConnection,
    retrieveConnection, retrieveAllConnections, closeAllConnections,
    addUpgradeStatement, importFromJson, getDatabaseList, isDatabase, isJsonValid, copyFromAssets,
    isAvailable } = useSQLite();

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
          <IonRouterOutlet>
            <Route exact path="/tune" children={<Tune />} />
            <Route exact path="/compare" children={<Compare />} />
            <Route exact path="/home" children={<Home />} />
            <Route exact path="/sheets" children={<Sheets />} />
            <Route exact path="/learn" children={<Learn />} />

            <Route path="/sheets/temperament/:id" children={<SheetsTemperament />} />
            <Route path="/learn/:id" children={<LearnSheet />} />

            <Route exact path="/" children={<Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tune" href="/tune">
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
