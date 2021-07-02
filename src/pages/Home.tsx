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
import { isDarkTheme } from "../model/Utils";
import { TemperamentDBType } from "../engine/DB";
import { fetchTemperaments } from "../engine/DataAccessor";

type HomeProps = {
  darkTheme: boolean;
  setDarkTheme: (color: boolean) => void;
};

const Home: React.FC<HomeProps> = ({ darkTheme, setDarkTheme }) => {
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

  const change = (e: any) => {
    console.log(e.target.checked);
    document.body.classList.toggle("dark", e.target.checked);
    e.target.checked === true ? setDarkTheme(true) : setDarkTheme(false);
  };

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
                    isDarkTheme()
                      ? "../../assets/logotypes/temperapp_logo-dark.svg"
                      : "../../assets/logotypes/temperapp_logo.svg"
                  }
                  className="logo-home"
                />
              </IonCol>
              <IonCol size="2" className="ColTemperApp">
                <ParameterModal
                  darkTheme={darkTheme}
                  setDarkTheme={setDarkTheme}
                />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen scrollY={true}>
        <HomeContent
          temperamentsList={temperamentsList}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
