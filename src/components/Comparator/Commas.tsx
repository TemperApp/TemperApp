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

import "./Comparator.css";

type ComparatorCommaProps = {
  t1: Temperament;
  t2: Temperament;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const ComparatorComma: React.FC<ComparatorCommaProps> = ({
  t1,
  t2,
}) => {
  const [isCpMode, setCpMode] = useState<boolean>(true);
  const vbsize = { x: 200 + 5, y: 200 + 5};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};

  const r = [40, 65, 80, 85, 100];

  return (
    <>
      <IonSlides pager={true} options={slideOpts} className="px-5 max-w-lg max-h-lg">
        <IonSlide className="px-1">
          <Card
            title="Fractions de commas affectant les quintes"
            classNameContent='pb-16'
            className='pb-4'
          >
            <div className="max-w-lg max-h-lg">
              <SVG className="ring" viewBoxSize={vbsize}>
                <LabelsRing innerR={r[0]} outerR={r[1]} c={center}
                  labels={FIFTHS.map((f) => f.string(true, false))}
                  fontSize={10}
                />
                <CommasRing innerR={r[1]} outerR={r[2]} c={center}
                  hasLabels is3rd={false}
                  commas={isCpMode ? t2.cpExp5th : mapNotesMap(t2.cpExp5th, cpExp5thToCsExp5th)}
                  fontSize={9}
                />
                <CommasRing innerR={r[3]} outerR={r[4]} c={center}
                  hasLabels is3rd={false}
                  commas={isCpMode ? t1.cpExp5th : mapNotesMap(t1.cpExp5th, cpExp5thToCsExp5th)}
                  fontSize={9}
                />
              </SVG>
            </div>
            <div className="absolute flex right-4">
              <div className="toggle-name">
                unité des quintes : 
              </div>
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
                <LabelsRing innerR={r[0]} outerR={r[1]} c={center}
                  labels={FIFTHS.map((f) => f.string(true, false))}
                  fontSize={10}
                />
                <CommasRing innerR={r[1]} outerR={r[2]} c={center}
                  hasLabels is3rd
                  commas={t2.csExp3rd}
                  fontSize={9}
                />
                <CommasRing innerR={r[3]} outerR={r[4]} c={center}
                  hasLabels is3rd
                  commas={t1.csExp3rd}
                  fontSize={9}
                />
              </SVG>
            </div>
          </Card>
        </IonSlide>
      </IonSlides>
    </>
  );
};

export default ComparatorComma;
