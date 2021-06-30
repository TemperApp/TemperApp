/* eslint-disable eqeqeq */
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import motion from "../Home/_util/motionUtil";
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useEffect, useRef, useState } from "react";

import "../Home/Collapse.css";
import "../Home/ButtonTemper.css";
import { TemperamentDBType } from "../../engine/DB";
import { text } from "ionicons/icons";

const arrowPath =
  "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88" +
  ".5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3." +
  "6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5." +
  "2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

type SheetsMenuProps = {
  text: string,
  temperamentsList: Array<TemperamentDBType>
}

const SheetsMenu: React.FC<SheetsMenuProps> = ({text, temperamentsList}) => {
  const temperList = ["Rameau", "Vallotti", "Weimeister", "Back", "Egal"];

  const [firstUse, setFirstUse] = useState<boolean>(true);
  let activePanel = 2;
  let expression = "/(?i)var\w+/s)"

  const [statePanel1, setStatePanel1] = useState<boolean>(false);
  const [statePanel2, setStatePanel2] = useState<boolean>(false);
  const [statePanel3, setStatePanel3] = useState<boolean>(false);
  const [request, setRequest] = useState<RegExp>(RegExp('([A-z])\\w+','i'));

  const isActive = (e: any) => {
    if (e == 0) {
      setStatePanel1(true);
      setStatePanel2(false);
      setStatePanel3(false);
    }
    if (e == 1) {
      setStatePanel1(false);
      setStatePanel2(true);
      setStatePanel3(false);
    }
    if (e == 2) {
      setStatePanel1(false);
      setStatePanel2(false);
      setStatePanel3(true);
    }
    if (e === undefined && statePanel1) {
      setStatePanel1(false);
    }
    if (e === undefined && statePanel2) {
      setStatePanel2(false);
    }
    if (e === undefined && statePanel3) {
      setStatePanel3(false);
    }
  };

  const expandIcon = (e: any) => {
    if (firstUse) {
      if (activePanel == 0) {
        setStatePanel1(true);
        setFirstUse(false);
      }
      if (activePanel == 1) {
        setStatePanel2(true);
        setFirstUse(false);
      }
      if (activePanel == 2) {
        setStatePanel3(true);
        setFirstUse(false);
      }
    }

    if (e.panelKey == 0) {
      return (
        <i style={{ marginRight: ".5rem" }}>
          <svg
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{
              verticalAlign: "-.125em",
              transition: "transform 0.2s",
              transform: `rotate(${statePanel1 ? 90 : 0}deg)`,
            }}
          >
            <path d={arrowPath} p-id="5827" />
          </svg>
        </i>
      );
    }
    if (e.panelKey == 1) {
      return (
        <i style={{ marginRight: ".5rem" }}>
          <svg
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{
              verticalAlign: "-.125em",
              transition: "transform 0.2s",
              transform: `rotate(${statePanel2 ? 90 : 0}deg)`,
            }}
          >
            <path d={arrowPath} p-id="5827" />
          </svg>
        </i>
      );
    }
    if (e.panelKey == 2) {
      return (
        <i style={{ marginRight: ".5rem" }}>
          <svg
            viewBox="0 0 1024 1024"
            width="1em"
            height="1em"
            fill="currentColor"
            style={{
              verticalAlign: "-.125em",
              transition: "transform 0.2s",
              transform: `rotate(${statePanel3 ? 90 : 0}deg)`,
            }}
          >
            <path d={arrowPath} p-id="5827" />
          </svg>
        </i>
      );
    }
  };

  useEffect(() => {
    
    let find = "Valotti";
    if(text !== ""){
      /* 
        Prévoir traitement si le text tappé contient des caractères interdits comme '(' ou '/'
      */
      text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      text = text.replace(/[^a-z0-9\s-]/g, "");
      let regex = new RegExp('\\b(\\w*'+text+'\\w*)\\b','i');
      setRequest(regex);

    }
    else{
      let regex = new RegExp('([A-z])\\w+','i')
      //console.log(find.search(regex));
      setRequest(regex);
    }
    
  }, [text])

  return (
    <div>
      <Collapse
        accordion={true}
        defaultActiveKey={activePanel}
        openMotion={motion}
        expandIcon={(e) => expandIcon(e)}
        onChange={(e) => isActive(e)}
      >
        <Panel key="0" header="Mes tempéraments" headerClass="my-header-class">
          <IonGrid>
            <IonRow>
              {temperList.map((t) => (
                <IonCol size="6">
                  <IonButton
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
        <Panel key="1" header="Les plus courants" headerClass="my-header-class">
          <IonGrid>
            <IonRow>
              {temperList.map((t) => (
                <IonCol size="6">
                  <IonButton
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
        <Panel key="2" header="Tous les tempéraments" headerClass="my-header-class">
          <IonGrid>
            <IonRow>
              {temperamentsList.filter((t: TemperamentDBType) => (t.nameFR.normalize("NFD").replace(/[\u0300-\u036f]/g, "").search(request) !== -1)).map((t: TemperamentDBType) =>
                <IonCol size="6">
                  <IonButton
                    key={t.idTemperament}
                    className="buttonType"
                    expand="block"
                    color="temperapp"
                    routerLink="/sheets/temperament"
                  >
                  {t.nameFR}
                  </IonButton>
              </IonCol>)}
            </IonRow>
          </IonGrid>
        </Panel>
      </Collapse>
    </div>
  );
};

export default SheetsMenu;
