/* eslint-disable eqeqeq */
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import collapseMotion from "../../utils/collapseMotion";
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useEffect, useState } from "react";

import "../Home/Collapse.css";
import "../Home/ButtonTemper.css";
import { TemperamentDBType } from "../../engine/DB";
import ArrowCollapseSVG from "./ArrowCollapseSVG";

type SheetsMenuProps = {
  text: string;
  temperamentsList: Array<TemperamentDBType>;
};

let statePanel1: boolean = false;
let statePanel2: boolean = false;
let statePanel3: boolean = false;
let firstUse: boolean = false;

const SheetsMenu: React.FC<SheetsMenuProps> = ({
  text,
  temperamentsList,
}) => {
  const temperList = ["Rameau", "Vallotti", "Werckmeister", "Bach", "Egal"];

  //const [firstUse, setFirstUse] = useState<boolean>(true);
  let activePanel = 2;

  //const [statePanel1, setStatePanel1] = useState<boolean>(false);
  //const [statePanel2, setStatePanel2] = useState<boolean>(false);
  //const [statePanel3, setStatePanel3] = useState<boolean>(false);
  const [request, setRequest] = useState<RegExp>(RegExp("([A-z])\\w+", "i"));

  const isActive = (e: any) => {
    if (e == 0) {
      //setStatePanel1(true);
      //setStatePanel2(false);
      //setStatePanel3(false);
      statePanel1 = true;
      statePanel2 = false;
      statePanel3 = false;
    }
    if (e == 1) {
      //setStatePanel1(false);
      //setStatePanel2(true);
      //setStatePanel3(false);
      statePanel1 = false;
      statePanel2 = true;
      statePanel3 = false;
    }
    if (e == 2) {
      //setStatePanel1(false);
      //setStatePanel2(false);
      //setStatePanel3(true);
      statePanel1 = false;
      statePanel2 = false;
      statePanel3 = true;
    }
    if (e === undefined && statePanel1) {
      //setStatePanel1(false);
      statePanel1 = false;
    }
    if (e === undefined && statePanel2) {
      //setStatePanel2(false);
      statePanel2 = false;
    }
    if (e === undefined && statePanel3) {
      //setStatePanel3(false);
      statePanel3 = false;
    }
  };

  const expandIcon = (e: any) => {
    if (firstUse) {
      if (activePanel == 0) {
        //setStatePanel1(true);
        //setFirstUse(false);
        statePanel1 = true;
      }
      if (activePanel == 1) {
        //setStatePanel2(true);
        //setFirstUse(false);
        statePanel2 = true;
      }
      if (activePanel == 2) {
        //setStatePanel3(true);
        //setFirstUse(false);
        statePanel3 = true;
      }
      firstUse = false;
    }

    if (e.panelKey == 0) {
      return <ArrowCollapseSVG statePanel={statePanel1} />;
    }
    if (e.panelKey == 1) {
      return <ArrowCollapseSVG statePanel={statePanel2} />;
    }
    if (e.panelKey == 2) {
      return <ArrowCollapseSVG statePanel={statePanel3} />;
    }
  };

  useEffect(() => {
    if (text !== "") {
      let regex = new RegExp(
        "\\b(\\w*" +
          text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s-]/g, "") +
          "\\w*)\\b",
        "i"
      );
      setRequest(regex);
    } else {
      let regex = new RegExp("([A-z])\\w+", "i");
      setRequest(regex);
    }
  }, [text]);

  return (
    <>
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
              {temperList.map((t) => (
                <IonCol size="6" key={"col_sheet_my_temperament_" + t}>
                  <IonButton
                    className="buttonType"
                    expand="block"
                    color="temperapp"
                    key={"sheet_my_temperament_" + t}
                  >
                    {t}
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
                <IonCol size="6" key={"col_sheet_top_" + t}>
                  <IonButton
                    className="buttonType"
                    expand="block"
                    color="temperapp"
                    key={"sheet_top_" + t}
                  >
                    {t}
                  </IonButton>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </Panel>
        <Panel
          key="2"
          header="Tous les tempéraments"
          headerClass="my-header-class"
        >
          <IonGrid>
            <IonRow>
              {temperamentsList
                .filter(
                  (t: TemperamentDBType) =>
                    t.nameFR
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .search(request) !== -1
                )
                .map((t: TemperamentDBType) => (
                  <IonCol size="6" key={"col_sheet_all_" + t.idTemperament}>
                      <IonButton
                        key={"sheet_all_" + t.idTemperament}
                        className="buttonType"
                        expand="block"
                        color="temperapp"
                        routerLink={`/sheets/temperament/${t.idTemperament}`}
                      >
                        {t.nameFR}
                      </IonButton>
                  </IonCol>
                ))}
            </IonRow>
          </IonGrid>
        </Panel>
      </Collapse>
    </>
  );
};

export default SheetsMenu;
