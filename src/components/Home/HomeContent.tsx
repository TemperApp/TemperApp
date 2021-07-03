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
import { fetchTemperaments } from "../../engine/DataAccessor";

let statePanel1: boolean = false;
let statePanel2: boolean = false;
let firstUse: boolean = true;

const HomeContent: React.FC = () => {

  const [favoriteTemperaments, setMyTemperaments] = useState<TemperamentDBType[]>([]);
  const [famousTemperaments, setFamousTemperaments] = useState<TemperamentDBType[]>([]);

  useEffect(() => {
    (async () => {
      setMyTemperaments(await fetchTemperaments());
    })();
    (async () => {
      setFamousTemperaments(await fetchTemperaments());
    })();
  }, []);

  let activePanelKey = 1;

  const isActive = (e: any) => {
    if (e == 0) {
      statePanel1 = true;
      statePanel2 = false;
    }
    if (e == 1) {
      statePanel1 = false;
      statePanel2 = true;
    }
    if (e === undefined && statePanel1) {
      statePanel1 = false;
    }
    if (e === undefined && statePanel2) {
      statePanel2 = false;
    }
  };

  const expandIcon = (e: any) => {
    if (firstUse) {
      if (activePanelKey == 0) {
        statePanel1 = true;
        firstUse = false
      }
      if (activePanelKey == 1) {
        statePanel2 = true;
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
      <Waves />
      <Collapse
        accordion={true}
        defaultActiveKey={1}
        openMotion={collapseMotion}
        expandIcon={(e) => expandIcon(e)}
        onChange={(e) => isActive(e)}
      >
        <Panel
          key="0"
          header="Mes tempéraments"
          headerClass="my-header-class"
        >
          <IonGrid>
            <IonRow>
              {favoriteTemperaments.map((t: TemperamentDBType) => (
                <IonCol size="6" key={`favorite-tmpmts-${t.idTemperament}`}>
                  <IonButton
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
        <Panel
          key="1"
          header="Les plus courants"
          headerClass="my-header-class"
        >
          <IonGrid>
            <IonRow>
              {famousTemperaments.map((t: TemperamentDBType) => (
                <IonCol size="6" key={`famous-tmpmts-${t.idTemperament}`}>
                  <IonButton
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
      </Collapse>
    </div>
  );
};

export default HomeContent;
