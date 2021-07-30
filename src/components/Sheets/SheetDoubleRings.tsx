import React from 'react';

import SVG from '../SVG';
import CommasRing from '../Ring/CommasRing';
import LabelsRing from '../Ring/LabelsRing';

import { FIFTHS } from '../../model/Note/sequences';
import { Temperament } from '../../model/Temperament/Temperament';

type SheetoubleRingsProps = {
  temperament: Temperament,
};

const SheetoubleRings: React.FC<SheetoubleRingsProps> = ({
  temperament,
}) => {
  const vbsize = { x: 200 + 2, y: 200 + 2};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const r = [56, 70, 86, 100];

  return (
    <SVG className="ring" viewBoxSize={vbsize} >
      <CommasRing innerR={r[0]} outerR={r[1]} c={center}
        is3rd={false} commas={temperament.cpExp5th}
        hasLabels
      />

      <LabelsRing innerR={r[1]} outerR={r[2]} c={center}
        labels={FIFTHS.map((f) => f.string(true, false))}
        fontSize={9}
      />

      <CommasRing innerR={r[2]} outerR={r[3]} c={center}
        is3rd commas={temperament.csExp3rd}
        hasLabels
      />
    </SVG>
  );
};

export default React.memo(
  SheetoubleRings,
  (prevProps, nextProps) => (
    prevProps.temperament === nextProps.temperament
  )
);
