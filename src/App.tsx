import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';

import Tune from './pages/Tune';
import Compare from './pages/Compare';
import Home from './pages/Home';
import Sheets from './pages/Sheets';
import Learn from './pages/Learn';

import LearnSheet from './components/Learn/LearnSheet';
import SheetTemperament from './components/Sheets/SheetTemperament';
import StorageTest from './components/StorageTest';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';
import './theme/layout/index.css';
import './App.css';

import { isPlatform } from '@ionic/react';

import isMobile from 'ismobilejs';
import * as Tone from 'tone';


const App: React.FC = () => {
  const [isIos, setIos] = useState<boolean>(false);
  const [warningHidden, hideWarning] = useState<boolean>(false);


  useEffect(() => {
    const mobiles = ['android', 'iphone', 'ipad'];

    if (isPlatform('desktop') || !mobiles.includes(navigator.platform.trim())) {
      document.body.classList.add('plateform-desktop');
    }

    if (isMobile(window.navigator).apple.device === true) {
      setIos(true);
    }
    
    console.log("THIS UPDATE IS WORKING");
  }, []);

  return (
    <>
      {isIos && !warningHidden && (
        <button
          onClick={() => { Tone.start(); hideWarning(true); }}
          style={{
            zIndex: 3000,
            position: 'absolute',
            fontSize: '2em',
            width: '100vw',
            height: '100vh',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.8)',
          }}>
          Avant toute chose, merci de cliquer ici afin d'autoriser le son sur votre appareil.
        </button>
      )}
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/tune" render={() => <Tune />} />
              <Route exact path="/compare" render={() => <Compare />} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/sheets" render={() => <Sheets />} />
              <Route exact path="/learn" render={() => <Learn />} />

              <Route
                path="/sheets/temperament/:id"
                component={SheetTemperament}
              />
              <Route path="/learn/:id" component={LearnSheet} />

              <Route exact path="/storage" children={<StorageTest />} />

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
              <IonTabButton
                className="ion-no-padding"
                tab="compare"
                href="/compare">
                <IonIcon
                  src="/assets/logotypes/icon-compare-grey.svg"
                  className="icon-grey h-6 w-6"
                />
                <IonLabel>Comparer</IonLabel>
              </IonTabButton>
              <IonTabButton className="ion-no-padding" tab="home" href="/home">
                <IonIcon
                  src="/assets/logotypes/icon-home-grey.svg"
                  className="icon-grey h-6 w-6"></IonIcon>
                <IonLabel>Accueil</IonLabel>
              </IonTabButton>
              <IonTabButton
                className="ion-no-padding"
                tab="sheets"
                href="/sheets">
                <IonIcon
                  src="/assets/logotypes/icon-fiches-grey.svg"
                  className="icon-grey h-6 w-6"
                />
                <IonLabel>Fiches</IonLabel>
              </IonTabButton>
              <IonTabButton
                className="ion-no-padding"
                tab="learn"
                href="/learn">
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
    </>
  );
};

export default App;
