import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { home, triangle, ellipse, square, bookmarks } from 'ionicons/icons';
import Tuner from './pages/Tuner';
import Comparator from './pages/Comparator';
import Home from './pages/Home';
import Sheets from './pages/Sheets';
import Learn from './pages/Learn';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Fonction Engine */
import SoundEngine from './engine/SoundEngine';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs onIonTabsWillChange={(e) => SoundEngine.stop()} >
        <IonRouterOutlet>
          <Route exact path="/tuner">
            <Tuner />
          </Route>
          <Route exact path="/comparator">
            <Comparator />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/sheets">
            <Sheets />
          </Route>
          <Route exact path="/learn">
            <Learn />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tuner" href="/tuner">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="comparator" href="/comparator">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="sheets" href="/sheets">
            <IonIcon icon={square} />
            <IonLabel>Tab 4</IonLabel>
          </IonTabButton>
          <IonTabButton tab="learn" href="/learn">
            <IonIcon icon={bookmarks} />
            <IonLabel>Tab 5</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
