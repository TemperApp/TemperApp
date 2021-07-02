import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRouterLink,
  IonRow,
  IonToolbar,
} from "@ionic/react";

import { fetchTemperamentPropsById } from "../../engine/DataAccessor";
import { Temperament } from "../../model/Temperament/Temperament";
import EqualTemperament from "../../model/Temperament/Equal";
import "../../pages/Sheets.css";
import DescriptionSheet from "./DescriptionSheet";
import HeaderPage from "../Header/HeaderPage";
import { useParams } from "react-router";

const SheetsTemperament: React.FC = () => {
  
  const { id } = useParams<any>();
  const [temperament, setTemperament] = useState<Temperament>(EqualTemperament);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Update fitfhs and thirds circles and frequencies
    (async () => {
      const temp = await fetchTemperamentPropsById(id);
      setTemperament(temp);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="headerPages">
          <HeaderPage
            doubleTitle={true}
            buttonModal={false}
            buttonModalsubText={temperament.nameFR}
            buttonReturn={true}
            buttonModalText="Tempérament"
            setShowModal={setShowModal}
          />
          <IonRouterLink routerDirection="root" routerLink="/sheets">
            <IonIcon
              src="../../assets/logotypes/icon-back.svg"
              size="large"
            ></IonIcon>
          </IonRouterLink>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="SheetContent">
          <div className="SheetMarquePage">
            <svg
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="23.5102" height="32" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0"
                    transform="translate(0 -0.0357143) scale(0.00833333 0.00612245)"
                  />
                </pattern>
                <image
                  id="image0"
                  width="120"
                  height="175"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>

          <DescriptionSheet
            period="XIXe siècle"
            geographicalArea="Europe"
            commaticNature="1/12 de comma pythagoricien"
            particularity="Dans le tempérament égal, les douze quintes sont diminuées d’une douzième de comma pythagoricien. Les notes enharmoniques ont la même fréquence. L’intervalle séparant deux notes est constant."
          />
          <IonGrid>
            <IonRow className="grid-button-bottom">
              <IonCol size="2" offset="10">
                <IonRouterLink routerDirection="root" routerLink="/tune">
                  <IonButton className="buttonFixed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100mm"
                      height="100mm"
                      viewBox="0 0 100 100"
                    >
                      <g transform="translate(395.22 -364.78) scale(1.17688)">
                        <circle
                          r="41.996"
                          cy="352.631"
                          cx="-293.073"
                          fill="var(--color-button)"
                        />
                        <g
                          stroke="var(--color-inner-button)"
                          fill="none"
                          stroke-linecap="round"
                        >
                          <path
                            d="M-264.473 342.941s-2.485 6.64-6.662 6.546c-5.084-.114-3.92-13.16-10.712-13.346-4.205-.114-7.761 9.446-7.761 9.446"
                            stroke-width="4"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M-298.391 358.049c-5.382 2.621-6.943-.13-8.878-2.355m-.146-.22l4.103-24.562m5.141 26.99l4.568-24.653m-11.71 41.1l2.518-14.322"
                            stroke-width="5"
                          />
                        </g>
                      </g>
                    </svg>
                  </IonButton>
                </IonRouterLink>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

/*
export default React.memo(
  SheetsTemperament,
  (prevProps, nextProps) => (
    prevProps.history.location.key === nextProps.history.location.key
    && prevProps.match.path === nextProps.match.path)
);
*/

export default SheetsTemperament;
