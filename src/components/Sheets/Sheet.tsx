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
  children: React.ReactNode,
  id: string,
}

const Sheet: React.FC<SheetProps> = ({
  mainTitle = '',
  subTitle = '',
  children,
  id
}) => {

  const history = useHistory();
  const user = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState<Boolean>(temperamentFavorite(id.toString(), user.favorite));

  useEffect(() => {
    user.setFavorite([id]);
    //console.info("👤 : User Data");
    let temp = [""]; 
    temp = user.favorite;
    //console.info("⌚ user : " + user.favorite)
    //console.info("⌚ temp : " + temp)
    isFavorite?temp.push(id):(temp=temp.filter(e => (e !== id && e !== undefined && e!=="")));
    //console.info("🧭 temp : " + temp)
    //console.log(temp[0]);
    //console.log("taille temp : "+temp.length);
    if(temp.length === 0 && temp[0] === undefined){
      //console.log("empty");
      user.setFavorite([])
      //console.log("🔴 user favorite"+ user.favorite)
    }
    if(temp.length === 1 && temp[0] !== ""){
      //console.log("one");
      user.setFavorite(temp)
      //console.log("🟢 user favorite"+ user.favorite)
    }
    if(temp.length > 1){
      //console.log("multi");
      user.setFavorite(temp)
      //console.log("🔵 user favorite"+ user.favorite)
    }
    //console.info(user.favorite);
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
        <section>
         

          <div className="pt-3">
            {children}
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Sheet;
