import React from 'react';

import SVG from '../SVG';
import CommasRing from '../Ring/CommasRing';
import LabelsRing from '../Ring/LabelsRing';

import { FIFTHS } from '../../model/Note/sequences';
import { Temperament } from '../../model/Temperament/Temperament';

import './Comparator.css'

type ComparatorQuadRingsProps = {
  t1: Temperament,
  t2: Temperament,
};

const ComparatorQuadRings: React.FC<ComparatorQuadRingsProps> = ({
  t1, t2,
}) => {
  const vbsize = { x: 200 + 5, y: 200 + 5};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const r = [34, 45, 56, 76, 88, 100];

  return (
    <section className="mt-16 mx-auto pt-2 px-6 justify-center max-w-lg">
      <SVG className="ring" viewBoxSize={vbsize} >
        <CommasRing innerR={r[0]} outerR={r[1]} c={center} is3rd commas={t2.csExp3rd} />
        <CommasRing innerR={r[1]} outerR={r[2]} c={center} is3rd={false} commas={t2.cpExp5th} />

        <LabelsRing innerR={r[2]} outerR={r[3]} c={center}
          labels={FIFTHS.map((f) => f.string(true, false))}
          fontSize={10}
        />

        <CommasRing innerR={r[3]} outerR={r[4]} c={center} is3rd commas={t1.csExp3rd} />
        <CommasRing innerR={r[4]} outerR={r[5]} c={center} is3rd={false} commas={t1.cpExp5th} />
      </SVG>
    </section>
  );
};

export default React.memo(
  ComparatorQuadRings,
  (prevProps, nextProps) => (
    prevProps.t1 === nextProps.t1 &&
    prevProps.t2 === nextProps.t2
  )
);
