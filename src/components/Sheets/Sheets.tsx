import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonPage,
  IonSearchbar,
} from "@ionic/react";

import HeaderPage from "../Header/HeaderPage";
import SheetsMenu from "./SheetsMenu";
import { fetchTemperaments } from "../../engine/DataAccessor";
import { TemperamentDBType } from "../../engine/DB";

type SheetsProps = {
  setIdTemperament : (id: number) => void,
}

const Sheets: React.FC<SheetsProps> = ({setIdTemperament}) => {
  const [searchText, setSearchText] = useState("");

  const [temperamentsList, setTemperamentsList] = useState<Array<TemperamentDBType>>([]);

  const fetchTemperamentsList = async () => {
    const temperaments = await fetchTemperaments();
    setTemperamentsList(temperaments);
  } 

  useEffect(() => {
    fetchTemperamentsList();
  }, []);

  return (
    <IonPage>
      <HeaderPage
        doubleTitle={false}
        buttonModal={false}
        buttonModalsubText=""
        buttonReturn={false}
        buttonModalText="Fiches"
        setShowModal={() => {}}
      />
      <IonContent fullscreen scrollY={true}>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>
        <SheetsMenu 
          text = {searchText}
          temperamentsList = {temperamentsList}
          setIdTemperament = {setIdTemperament}
        />
      </IonContent>
    </IonPage>
  );
};

export default Sheets;
