/* eslint-disable eqeqeq */
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import collapseMotion from "../../utils/collapseMotion";
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useEffect, useState } from "react";

import "./Collapse.css";
import "./ButtonTemper.css";
import Waves from "./Waves";
import { TemperamentDBType } from "../../engine/DB";
import ArrowCollapseSVG from "../Sheets/ArrowCollapseSVG";

type HomeMenuProps = {
  temperamentsList: Array<TemperamentDBType>;
  darkTheme: boolean;
  setDarkTheme: (color: boolean) => void;
};

let statePanel1: boolean = false;
let statePanel2: boolean = false;
let firstUse: boolean = true;

const HomeContent: React.FC<HomeMenuProps> = ({
  temperamentsList,
  darkTheme,
  setDarkTheme,
}) => {
  const temperList = ["Rameau", "Vallotti", "Werckmeister", "Bach", "Egal"];

  //const [firstUse, setFirstUse] = useState<boolean>(true);
  let activePanel = 1;

  //const [statePanel1, setStatePanel1] = useState<boolean>(false);
  //const [statePanel2, setStatePanel2] = useState<boolean>(false);

  

  const isActive = (e: any) => {
    if (e == 0) {
      //setStatePanel1(true);
      //setStatePanel2(false);
      statePanel1 = true;
      statePanel2 = false;
    }
    if (e == 1) {
      //setStatePanel1(false);
      //setStatePanel2(true);
      statePanel1 = false;
      statePanel2 = true;
    }
    if (e === undefined && statePanel1) {
      //setStatePanel1(false);
      statePanel1 = false;
    }
    if (e === undefined && statePanel2) {
      //setStatePanel2(false);
      statePanel2 = false;
    }
  };

  const expandIcon = (e: any) => {
    if (firstUse) {
      if (activePanel == 0) {
        //setStatePanel1(true);
        statePanel1 = true;
        //setFirstUse(false);
        firstUse = false
      }
      if (activePanel == 1) {
        //setStatePanel2(true);
        statePanel2 = true;
        //setFirstUse(false);
        firstUse = false;
      }
    }

    if (e.panelKey == 0) {
      return <ArrowCollapseSVG statePanel={statePanel1} />;
    }
    if (e.panelKey == 1) {
      return <ArrowCollapseSVG statePanel={statePanel2} />;
    }
  };


  return (
    <div className="home-content">
      <Waves darkTheme={darkTheme} />
      <Collapse
        accordion={true}
        defaultActiveKey={activePanel}
        openMotion={collapseMotion}
        expandIcon={(e) => expandIcon(e)}
        onChange={(e) => isActive(e)}
      >
        <Panel key="0" header="Mes tempéraments" headerClass="my-header-class">
          <IonGrid>
            <IonRow>
              {temperamentsList.map((t: TemperamentDBType) => (
                <IonCol size="6" key={"col_my_temperament_home_"+t.idTemperament}>
                  <IonButton
                    key={"my_temperament_home_"+t.idTemperament}
                    className="buttonType"
                    expand="block"
                    color="temperapp"
                  >
                    {t.nameFR}
                  </IonButton>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </Panel>
        <Panel key="1" header="Les plus courants" headerClass="my-header-class">
          <IonGrid>
            <IonRow>
              {temperList.map((t) => (
                <IonCol size="6" key={"col_top_home_"+t}>
                  <IonButton
                    key={'top_home_'+t}
                    className="buttonType"
                    expand="block"
                    color="temperapp"
                  >
                    {t}
                  </IonButton>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </Panel>
      </Collapse>
    </div>
  );
};

export default HomeContent;
