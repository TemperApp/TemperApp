import React, { useEffect, useState } from 'react';

import SVG from '../SVG';
import CommasRing from '../Ring/CommasRing';
import LabelsRing from '../Ring/LabelsRing';

import { FIFTHS } from '../../model/Note/sequences';
import { Temperament } from '../../model/Temperament/Temperament';
import Toggler from '../inputs/Toggler';
import { mapNotesMap } from '../../model/Note/NotesMap';
import { cpExp5thToCsExp5th } from '../../model/Divergence';

type SheetoubleRingsProps = {
  temperament: Temperament,
};

const SheetoubleRings: React.FC<SheetoubleRingsProps> = ({
  temperament,
}) => {
  const [isCpMode, setCpMode] = useState<boolean>(true);
  const [isMaj3, setMaj3] = useState<boolean>(false);

  const vbsize = { x: 200 + 2, y: 200 + 2};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const r = [56, 70, 86, 100];

  useEffect(() => {
    setCpMode(Boolean(!temperament.nature.match(/comma synto/gi)))
  }, [temperament]);

  return (
    <>
      <SVG className="ring" viewBoxSize={vbsize} >
        <CommasRing innerR={r[0]} outerR={r[1]} c={center}
          is3rd commas={!isMaj3 ? temperament.csExp3rd : temperament.csExpMin3rd as any}
          hasLabels isCp={isCpMode}
        />

        <LabelsRing innerR={r[1]} outerR={r[2]} c={center}
          labels={FIFTHS.map((f) => f.string(true, false))}
          fontSize={9}
        />

        <CommasRing innerR={r[2]} outerR={r[3]} c={center}
          is3rd={false} hasLabels isCp={isCpMode}
          commas={
            isCpMode
            ? temperament.cpExp5th
            : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)}
        />
      </SVG>
      <div className="flex ion-justify-content-between">
        <Toggler
          typeContentText={true}
          contentLeft="Cs"
          contentRight="Cp"
          conditionLeft={!isCpMode}
          conditionRight={isCpMode}
          onClickLeft={() => setCpMode(false)}
          onClickRight={() => setCpMode(true)}
        />
        <Toggler
          typeContentText={true}
          contentLeft="M3"
          contentRight="m3"
          conditionLeft={!isMaj3}
          conditionRight={isMaj3}
          onClickLeft={() => setMaj3(false)}
          onClickRight={() => setMaj3(true)}
        />
      </div>
    </>
  );
};

export default React.memo(
  SheetoubleRings,
  (prevProps, nextProps) => (
    prevProps.temperament === nextProps.temperament
  )
);
