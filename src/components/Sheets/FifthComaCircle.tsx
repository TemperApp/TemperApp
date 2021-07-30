import React from "react";
import { Temperament } from "../../model/Temperament/Temperament";
import "../../components/Comparator/Comparator.css"
import { cpExp5thToCsExp5th} from "../../model/Divergence";
import SVG from "../SVG";
import LabelsRing from "../Ring/LabelsRing";
import CommasRing from "../Ring/CommasRing";
import { FIFTHS } from "../../model/Note/sequences";
import { mapNotesMap} from "../../model/Note/NotesMap";

type FifthComaCircleProps = {
  temperament: Temperament;
  isCpMode: boolean;
};

const FifthComaCircle: React.FC<FifthComaCircleProps> = ({
  temperament,
  isCpMode,
}) => {

  const vbsize = { x: 200 + 5, y: 200 + 5};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const r = [57, 70, 80, 85, 100];

  return (
    <>
      <SVG className="ring" viewBoxSize={vbsize}>
        <CommasRing innerR={r[1]} outerR={r[2]} c={center}
          hasLabels={false} is3rd={false}
          commas={isCpMode ? temperament.cpExp5th : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)}
          fontSize={9}
        />
        <LabelsRing innerR={r[3]} outerR={r[4]} c={center}
          labels={FIFTHS.map((f) => f.string(true, false))}
          fontSize={10}
        />
        <CommasRing innerR={r[0]} outerR={r[1]} c={center}
          hasLabels={true} is3rd={false} fill={false} hasStroke={false}
          commas={isCpMode ? temperament.cpExp5th : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)}
          fontSize={9}
        />
      </SVG>
    </>
  );
};

export default FifthComaCircle;
