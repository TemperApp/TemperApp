import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
} from "@ionic/react";
import './Sheet.css'
import PageHeader from "../../pages/Page/PageHeader";

type SheetProps = {
  mainTitle?: string,
  subTitle?: string,
  children: React.ReactNode,
}

const Sheet: React.FC<SheetProps> = ({
  mainTitle = '',
  subTitle = '',
  children,
}) => {

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={mainTitle}
          subTitle={subTitle}
          canGoBack={true}
        />
      </IonHeader>

      <IonContent className="sheet">
        <section className="px-6">
          <div className="absolute h-10 w-10 right-4">
            <IonButton
              fill="clear">
              <IonIcon
                className="h-full p-0 m-0"
                style={{ fontSize: "2.8rem" } /* TODO Find a better way */}
                src="/assets/logotypes/icon-bookmark.svg"
              />
            </IonButton>
          </div>

          <div className="pt-3">
            {children}
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Sheet;
