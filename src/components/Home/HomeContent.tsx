import React from "react";
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

  const items = [
    {
      key: "0",
      label: "Mes tempéraments",
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

        {items.map(({ key, label, elements }) =>
          <Panel
            key={key}
            header={label}
            headerClass="rc-collapse-header"
          >
            <IonGrid>
              <IonRow>
                {elements.map((t: TemperamentDBType) => (
                  <IonCol size="6" key={t.idTemperament}>
                    <IonButton
                      className="btn-primary"
                      expand="block"
                      color="temperapp"
                      routerLink={`/tune/${t.idTemperament}`}
                    >
                      {t.nameFR}
                    </IonButton>
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </Panel>
        )}

      </Collapse>
    </div>
  );
};

export default HomeContent;
