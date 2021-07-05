import React from "react";
import {
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
      <IonHeader className="ion-no-border">
        <PageHeader
          mainTitle={mainTitle}
          subTitle={subTitle}
          canGoBack={true}
        />
      </IonHeader>

      <IonContent className="sheet">
        <section className="px-6">
          <div className="fixed h-10 w-10 right-4">
            <IonIcon
              className="icon-grey"
              style={{ fontSize: "2.8rem" } /* TODO Find a better way */}
              src="/assets/logotypes/bookmark.svg"
            />
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
