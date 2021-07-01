/* eslint-disable eqeqeq */
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import motion from "../Home/_util/motionUtil";
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useEffect, useState } from "react";

import "../Home/Collapse.css";
import "../Home/ButtonTemper.css";
import { TemperamentDBType } from "../../engine/DB";
import ArrowCollapseSVG from "./ArrowCollapseSVG";

type SheetsMenuProps = {
  text: string,
  temperamentsList: Array<TemperamentDBType>
  setIdTemperament: (id: number) => void,
}

const SheetsMenu: React.FC<SheetsMenuProps> = ({text, temperamentsList, setIdTemperament}) => {
  const temperList = ["Rameau", "Vallotti", "Weimeister", "Back", "Egal"];

  const [firstUse, setFirstUse] = useState<boolean>(true);
  let activePanel = 2;

  const [statePanel1, setStatePanel1] = useState<boolean>(false);
  const [statePanel2, setStatePanel2] = useState<boolean>(false);
  const [statePanel3, setStatePanel3] = useState<boolean>(false);
  const [request, setRequest] = useState<RegExp>(RegExp("([A-z])\\w+", "i"));

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

      let regex = new RegExp('\\b(\\w*'+text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "")+'\\w*)\\b','i');
      setRequest(regex);

    }
    else{
      let regex = new RegExp('([A-z])\\w+','i')
      setRequest(regex);
    }
  }, [text]);

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
        <Panel
          key="2"
          header="Tous les tempéraments"
          headerClass="my-header-class"
        >
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
                    onClick={() => setIdTemperament(t.idTemperament)}
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
