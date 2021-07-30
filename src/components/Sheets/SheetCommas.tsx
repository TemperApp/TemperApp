import React, { useState } from "react";
import { IonSlides, IonSlide } from "@ionic/react";

import Toggler from "../inputs/Toggler";
import Card from "../Card";
import CommasRing from "../Ring/CommasRing";
import LabelsRing from "../Ring/LabelsRing";
import SVG from "../SVG";

import { Temperament } from "../../model/Temperament/Temperament";
import { cpExp5thToCsExp5th } from "../../model/Divergence";
import { FIFTHS } from "../../model/Note/sequences";
import { mapNotesMap } from "../../model/Note/NotesMap";

type SheetCommasProps = {
  temperament: Temperament;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const SheetCommas: React.FC<SheetCommasProps> = ({
  temperament
}) => {
  const [isCpMode, setCpMode] = useState<boolean>(true);
  const vbsize = { x: 200 + 5, y: 200 + 5};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const r = [57, 70, 80, 100];

  return (
    <>
      <IonSlides
        pager={true}
        options={slideOpts}
        className="px-5 max-w-lg"
      >
        <IonSlide className="px-1">
          <Card
            title="Fractions de commas affectant les quintes"
            classNameContent='pb-16'
            className='pb-4'
          >
            <div className="max-w-lg max-h-lg">
              <SVG className="ring" viewBoxSize={vbsize}>
                <CommasRing innerR={r[0]} outerR={r[1]} c={center}
                  hasLabels is3rd={false} fill={false} hasStroke={false}
                  commas={isCpMode ? temperament.cpExp5th : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)}
                  fontSize={9}
                />
                <CommasRing innerR={r[1]} outerR={r[2]} c={center}
                  hasLabels={false} is3rd={false}
                  commas={isCpMode ? temperament.cpExp5th : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)}
                  fontSize={9}
                />
                <LabelsRing innerR={r[2]} outerR={r[3]} c={center}
                  labels={FIFTHS.map((f) => f.string(true, false))}
                  fontSize={10}
                />
              </SVG>
            </div>
            <div className="absolute right-4">
              <Toggler
                typeContentText={true}
                contentLeft="Cs"
                contentRight="Cp"
                conditionLeft={!isCpMode}
                conditionRight={isCpMode}
                onClickLeft={() => setCpMode(false)}
                onClickRight={() => setCpMode(true)}
              />
            </div>
          </Card>
        </IonSlide>

        <IonSlide className="px-1">
          <Card
            title="Fractions de commas affectant les tierces"
            classNameContent='pb-16'
            className='pb-4'
          >
            <div className="max-w-lg max-h-lg">
              <SVG className="ring" viewBoxSize={vbsize}>
                <CommasRing innerR={r[0]} outerR={r[1]} c={center}
                  hasLabels is3rd fill={false} hasStroke={false}
                  commas={temperament.csExp3rd}
                  fontSize={9}
                />
                <CommasRing innerR={r[1]} outerR={r[2]} c={center}
                  hasLabels={false} is3rd
                  commas={temperament.csExp3rd}
                  fontSize={9}
                />
                <LabelsRing innerR={r[2]} outerR={r[3]} c={center}
                  labels={FIFTHS.map((f) => f.string(true, false))}
                  fontSize={10}
                />
              </SVG>
            </div>
          </Card>
        </IonSlide>
      </IonSlides>
    </>
  );
};

export default SheetCommas;
