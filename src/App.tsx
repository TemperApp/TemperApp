import React, { useContext, useEffect } from 'react';
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
import LearnSheet from './components/Learn/LearnSheet';
import Learn from './pages/Learn';
import SheetTemperament from './components/Sheets/SheetTemperament';
import StorageTest from './components/StorageTest';
import Doughnut from './components/Doughnut';
import { cpExp5thStrToNumber, formatCpExp5thStr } from './model/Divergence';
import { convertFifthQualityToColor } from './utils/colorCircle';
import SettingsContext from './store/settings-context';

/* SQLite */
export let sqlite: any; // singleton

const App: React.FC = () => {

  const settings = useContext(SettingsContext);

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

  const doughnutData = [
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("+1/3.3"), settings.darkTheme), label: formatCpExp5thStr("+1/3.3")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("+1/4.4"), settings.darkTheme), label: formatCpExp5thStr("+1/4.4")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("+1/6.6"), settings.darkTheme), label: formatCpExp5thStr("+1/6.6")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("+1/13.19"), settings.darkTheme), label: formatCpExp5thStr("+1/13.19")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/4.36"), settings.darkTheme), label: formatCpExp5thStr("-1/4.36")!},
    { fill: convertFifthQualityToColor(cpExp5thStrToNumber("-1/6.52"), settings.darkTheme), label: formatCpExp5thStr("-1/6.52")!},
  ]

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/*
              Using the render method prop cuts down the number of renders your components will have due to route changes.
              Use the component prop when your component depends on the RouterComponentProps passed in automatically.
              https://github.com/ionic-team/ionic-react-conference-app/blob/master/src/pages/MainTabs.tsx#L20-L24
            */}
            <Route exact path="/tune" render={() => <Tune />} />
            <Route exact path="/compare" render={() => <Compare />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/sheets" render={() => <Sheets />} />
            <Route exact path="/learn" render={() => <Learn />} />

            <Route path="/sheets/temperament/:id" component={SheetTemperament} />
            <Route path="/learn/:id" component={LearnSheet} />

            <Route exact path="/storage" render={() => <StorageTest />} />
            <Route exact path="/doughnut" render={() => <Doughnut data={doughnutData} />} />

            <Redirect exact from="/" to="/home" />
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
