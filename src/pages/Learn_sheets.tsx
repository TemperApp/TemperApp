import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Learn.css";
import { Route, RouteComponentProps } from "react-router-dom";
import HeaderPage from "../components/Header/HeaderPage";

type LearnProps = {
  match: RouteComponentProps;
  darkTheme: boolean;
};

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

const Learn_sheets: React.FC<RouteComponentProps> = ({ match, history }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonModalText="LEARN"
        setShowModal={setShowModal}
        darkTheme={false}
      />

      <IonContent fullscreen scrollY={true}>
        <IonList>
          <IonItem routerLink="/learn/sheet/1">
            <IonLabel>Page 1</IonLabel>
          </IonItem>
          <IonItem routerLink="/learn/sheet/2">
            <IonLabel>Page 2</IonLabel>
          </IonItem>
          <IonItem routerLink="/learn/sheet/3">
            <IonLabel>Page 3</IonLabel>
          </IonItem>
          <IonButton
            onClick={(e) => {
              console.log("action on");
              e.preventDefault();
              history.push("/learn/sheet/4");
            }}
          >
            Page 4
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Learn_sheets;
