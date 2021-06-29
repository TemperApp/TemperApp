import React from 'react';
import { IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import './Learn.css';
import { Route, RouteComponentProps } from 'react-router-dom';
import Learn_sheets from './Learn_sheets';
import Learn_sheet from './Learn_sheet';

type LearnProps = {
  match: RouteComponentProps,
  darkTheme : boolean,
}

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

const Learn: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <IonRouterOutlet>
      <Route exact path={match.url} component={Learn_sheets} />
      <Route path={`${match.url}/file/:id`} component={Learn_sheet} />
    </IonRouterOutlet>
  );
};

export default Learn;
