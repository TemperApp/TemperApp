import React from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import PageHeader from "./Page/PageHeader";
import './Learn.css'

const Learn: React.FC = () => {

  const items = [
    {
      label: "Definition",
      routerLink: "/learn/definition",
    }, {
      label: "Caractéristiques",
      routerLink: "/learn/characteristics",
    }, {
      label: "Physique",
      routerLink: "/learn/physics",
    }, {
      label: "Histoire",
      routerLink: "/learn/history",
    }
  ]
  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle="Apprendre"
        />
      </IonHeader>

      <IonContent fullscreen scrollY={true}>

        {items.map(({label, routerLink}) => (
          <IonButton
            className="h-28 item-btn"
            expand="full"
            fill="clear"
            style={{ "--ripple-color": "var(--color-contrast)" }}
            routerLink={routerLink}
          >
            <div className="flex w-full items-center justify-start">
              <IonIcon className="ml-8 item-icon" />
              <IonLabel className="pl-6 item-label">
                {label}
              </IonLabel>
            </div>
          </IonButton>
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Learn;
