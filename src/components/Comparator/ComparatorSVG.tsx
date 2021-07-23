import React, { useEffect, useState } from 'react';

import ComparatorComa from './ComparatorComa';
import ComparatorDivergence from './ComparatorDivergence';
import ComparatorTemp2Circle from './ComparatorTemp2Circle';

import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import EqualTemperament from '../../model/Temperament/Equal';
import { fifthQ, thirdQ } from '../../model/Divergence';
import { Temperament } from '../../model/Temperament/Temperament';

import './Comparator.css'

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
        <ComparatorTemp2Circle
          t1FifthsQ={fifthQ(temperament1.cpExp5th)}
          t1ThirdsQ={thirdQ(temperament1.csExp3rd)}
          t2FifthsQ={fifthQ(temperament2.cpExp5th)}
          t2ThirdsQ={thirdQ(temperament2.csExp3rd)}
        />
      </div>
    
      <ComparatorComa
        temperament1={temperament1}
        temperament2={temperament2}
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
