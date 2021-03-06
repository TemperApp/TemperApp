import React, { useContext } from "react";
import "rc-collapse/assets/index.css";
import Collapse, { Panel } from "rc-collapse";
import collapseMotion from "../../utils/collapseMotion";
import { IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useEffect, useState } from "react";

import "../App/Collapse.css";
import "../App/ButtonTemper.css";
import Waves from "./Waves";
import { TemperamentDBType } from "../../engine/DB";
import ArrowCollapseSVG from "../Sheets/ArrowCollapseSVG";
import { fetchTemperaments } from "../../engine/DataAccessor";
import { ascendingOrder, temperamentFavorite } from "../../utils/favorite";
import UserContext from "../../store/user-context";
import GlobalStatesContext from "../../store/global-states-context";

const HomeContent: React.FC = () => {

  const global = useContext(GlobalStatesContext);
  const user = useContext(UserContext);
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

  const items = [
    {
      key: "0",
      label: "Mes favoris",
      elements: favoriteTemperaments
    }, {
      key: "1",
      label: "Les plus courants",
      elements: famousTemperaments
    }
  ];

  return (
    <div className="home-content">
      <Waves />
      <Collapse
        accordion={true}
        defaultActiveKey={items[1].key}
        openMotion={collapseMotion}
        expandIcon={(e: any) => <ArrowCollapseSVG isActive={e.isActive} />}
      >

        <Panel
          key={items[0].key}
          header={items[0].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              {items[0].elements
                .filter(
                  (t: TemperamentDBType) =>
                    t.nameFR
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                )
                .sort(ascendingOrder)
                .filter(
                  (t: TemperamentDBType) =>
                  temperamentFavorite(t.idTemperament.toString(), user.favorite) === true
                )
                .map((t: TemperamentDBType) => (
                  <IonCol size="6" key={t.idTemperament}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      onClick={() => global.setTunerTemperamentId(t.idTemperament)}
                      routerLink={`/tune`}
                    >
                      {t.nameFR}
                    </IonButton>
                  </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </Panel>

        <Panel
          key={items[1].key}
          header={items[1].label}
          headerClass="rc-collapse-header"
        >
          <IonGrid>
            <IonRow>
              {items[1].elements
                .filter(
                  (t: TemperamentDBType) =>
                    t.nameFR
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                )
                .sort(ascendingOrder)
                .map((t: TemperamentDBType) => (
                  <IonCol size="6" key={t.idTemperament}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      onClick={() => global.setTunerTemperamentId(t.idTemperament)}
                      routerLink={`/tune`}
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
