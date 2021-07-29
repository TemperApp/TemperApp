import React, { useEffect, useState } from 'react';

import ComparatorComma from './Comma';
import ComparatorDivergence from './ComparatorDivergence';

import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import EqualTemperament from '../../model/Temperament/Equal';
import { Temperament } from '../../model/Temperament/Temperament';

import './Comparator.css'
import ComparatorQuadRings from './QuadRings';

type ComparatorSVGProps = {
  idTemperament1: number,
  idTemperament2: number,
}

const ComparatorSVG: React.FC<ComparatorSVGProps> = ({
  idTemperament1, idTemperament2,
}) => {

  const [temperament1, setTemperament1] = useState<Temperament>(EqualTemperament);
  const [temperament2, setTemperament2] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    (async () => {
      setTemperament1(await fetchTemperamentPropsById(idTemperament1));
    })();
  }, [idTemperament1]);

  useEffect(() => {
    (async () => {
      setTemperament2(await fetchTemperamentPropsById(idTemperament2));
    })();
  }, [idTemperament2]);

  return (
    <>
      <div className="pt-2 px-6 justify-center max-w-lg comparator-svg">
        <ComparatorQuadRings
          t1={temperament1}
          t2={temperament2}
        />
      </div>
    
      <ComparatorComma
        temperamentInner={temperament2}
        temperamentOuter={temperament1}
      />

      <div className="px-6 py-1">
        <ComparatorDivergence
          temperament1={temperament1}
          temperament2={temperament2}
        />
      </div>
    </>
  );
};

export default ComparatorSVG;
