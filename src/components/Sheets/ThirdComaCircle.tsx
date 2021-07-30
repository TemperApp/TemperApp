import React from "react";
import { Temperament } from "../../model/Temperament/Temperament";
import "../../components/Comparator/Comparator.css"
import SVG from "../SVG";
import CommasRing from "../Ring/CommasRing";
import { FIFTHS } from "../../model/Note/sequences";
import LabelsRing from "../Ring/LabelsRing";

type ThirdComaCircleProps = {
  temperament: Temperament;
};

const ThirdComaCircle: React.FC<ThirdComaCircleProps> = ({
  temperament,
}) => {

  const vbsize = { x: 200 + 5, y: 200 + 5};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const r = [57, 70, 80, 85, 100];

  return (
    <>
      <SVG className="ring" viewBoxSize={vbsize}>
        <CommasRing innerR={r[1]} outerR={r[2]} c={center}
          hasLabels={false} is3rd
          commas={temperament.csExp3rd}
          fontSize={9}
        />
        <LabelsRing innerR={r[3]} outerR={r[4]} c={center}
          labels={FIFTHS.map((f) => f.string(true, false))}
          fontSize={10}
        />
        <CommasRing innerR={r[0]} outerR={r[1]} c={center}
          hasLabels={true} is3rd fill={false} hasStroke={false}
          commas={temperament.csExp3rd}
          fontSize={9}
        />
      </SVG>
    </>
  );
};

export default ThirdComaCircle;
