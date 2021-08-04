import React, { useContext, useEffect, useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
} from "@ionic/react";
import './Sheet.css'
import PageHeader from "../../pages/Page/PageHeader";
import UserContext from "../../store/user-context";
import { temperamentFavorite } from "../../utils/favorite";
import { useHistory } from "react-router";

type SheetProps = {
  mainTitle?: string,
  subTitle?: string,
  id: string,
}

const Sheet: React.FC<SheetProps> = ({
  children,
  mainTitle = '',
  subTitle = '',
  id
}) => {

  const history = useHistory();
  const user = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState<Boolean>(temperamentFavorite(id.toString(), user.favorite));

  useEffect(() => {
    user.setFavorite([id]);
    let temp = [""]; 
    temp = user.favorite;
    isFavorite?temp.push(id):(temp=temp.filter(e => (e !== id && e !== undefined && e!=="")));
    if(temp.length === 0 && temp[0] === undefined){
      user.setFavorite([])
    }
    if(temp.length === 1 && temp[0] !== ""){
      user.setFavorite(temp)
    }
    if(temp.length > 1){
      user.setFavorite(temp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <IonPage>
      <IonHeader className="ion-no-border page-header">
        <PageHeader
          mainTitle={mainTitle}
          subTitle={subTitle}
          canGoBack={true}
          onGoBack={() => history.push('/sheets/')}
        />
         <div className="absolute h-9 w-9 right-20 top-3">
            <IonButton
              fill="clear"
              onClick={() => {setIsFavorite(!isFavorite)}}
            >
              <IonIcon
                className={isFavorite?
                  "h-9 w-9 fav-btn-click"
                : "h-9 w-9 fav-btn"}
                style={isFavorite? 
                  { fontSize: "2.8rem", fill:"var(--color-sec)" } /* TODO Find a better way */
                : { fontSize: "2.8rem", fill:"var(--color-light-grey)"}}
                src={"/assets/logotypes/icon-fav.svg"}
              />
            </IonButton>
          </div>
      </IonHeader>

      <IonContent className="sheet">
        <div className="pt-3">
          {children}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Sheet;
