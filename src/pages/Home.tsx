import React, { useEffect, useState } from "react";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import HomeContent from "../components/Home/HomeContent";
import ParameterModal from "../components/Home/ParameterModal";
import { TemperamentDBType } from "../engine/DB";
import { fetchTemperaments } from "../engine/DataAccessor";
import Settings from "../engine/Settings";

const Home: React.FC = () => {
  const [temperamentsList, setTemperamentsList] = useState<
    Array<TemperamentDBType>
  >([]);

  const fetchTemperamentsList = async () => {
    const temperaments = await fetchTemperaments();
    setTemperamentsList(temperaments);
  };

  useEffect(() => {
    fetchTemperamentsList();
  }, []);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol size="2" className="ColTemperApp"></IonCol>
              <IonCol className="ColTemperApp " size="8">
                <IonImg
                  src={
                    (Settings.darkTheme())
                      ? "../../assets/logotypes/temperapp_logo-dark.svg"
                      : "../../assets/logotypes/temperapp_logo.svg"
                  }
                  className="logo-home"
                />
              </IonCol>
              <IonCol size="2" className="ColTemperApp">
                <ParameterModal />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <HomeContent
          temperamentsList={temperamentsList}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
