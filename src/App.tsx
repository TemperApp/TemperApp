import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
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
import LearnSheet from './components/Learn/LearnSheet';
import Learn from './pages/Learn';
import SheetTemperament from './components/Sheets/SheetTemperament';
import StorageTest from './components/StorageTest';

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
            <Switch>
              <Route exact path="/:tab(tune)/:id" children={<Tune />} />
              <Redirect from="/:tab(tune)" to="/:tab(tune)/1" />

              <Route exact path="/:tab(compare)" children={<Compare />} />
              <Redirect from="/:tab(compare)" to="/:tab(compare)" />

              <Route exact path="/:tab(home)" children={<Home />} />
              <Redirect from="/:tab(home)" to="/:tab(home)" />

              <Route exact path="/:tab(sheets)" children={<Sheets />} />
              <Route path="/:tab(sheets)/temperament/:id" children={<SheetTemperament />} />
              <Redirect from="/:tab(sheets)" to="/:tab(sheets)" />

              <Route exact path="/:tab(learn)" children={<Learn />} />
              <Route path="/:tab(learn)/:id" children={<LearnSheet />} />
              <Redirect from="/:tab(learn)" to="/:tab(learn)" />

              <Route exact path="/storage" children={<StorageTest />} />

              <Redirect from="/" to="/home" />
            </Switch>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton className="ion-no-padding" tab="tune" href="/tune">
              <IonIcon
                src="/assets/logotypes/icon-diapason-grey.svg"
                className="icon-grey h-6 w-6"
              />
              <IonLabel>Accorder</IonLabel>
            </IonTabButton>
            <IonTabButton className="ion-no-padding" tab="compare" href="/compare">
              <IonIcon
                src="/assets/logotypes/icon-compare-grey.svg"
                className="icon-grey h-6 w-6"
              />
              <IonLabel>Comparer</IonLabel>
            </IonTabButton>
            <IonTabButton className="ion-no-padding" tab="home" href="/home">
              <IonIcon
                src="/assets/logotypes/icon-home-grey.svg"
                className="icon-grey h-6 w-6"
              ></IonIcon>
              <IonLabel>Accueil</IonLabel>
            </IonTabButton>
            <IonTabButton className="ion-no-padding" tab="sheets" href="/sheets">
              <IonIcon
                src="/assets/logotypes/icon-fiches-grey.svg"
                className="icon-grey h-6 w-6"
              />
              <IonLabel>Fiches</IonLabel>
            </IonTabButton>
            <IonTabButton className="ion-no-padding" tab="learn" href="/learn">
              <IonIcon
                src="/assets/logotypes/icon-apprendre-grey.svg"
                className="icon-grey h-6 w-6"
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
