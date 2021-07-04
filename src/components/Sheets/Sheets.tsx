import React, { useState } from "react";
import {
  IonSearchbar,
} from "@ionic/react";
import SheetsMenu from "./SheetsMenu";

const Sheets: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        />
        <SheetsMenu 
          text = {searchText}
        />
    </>
  );
};

export default Sheets;
