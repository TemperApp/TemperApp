import React, { useEffect, useState } from 'react';
import { IonRow } from '@ionic/react';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import EqualTemperament from '../../model/Temperament/Equal';
import { fifthQ, thirdQ } from '../../model/Divergence';

//Style

import './Comparator.css'
import ComparatorDivergence from './ComparatorDivergence';
import ComparatorFifthCircle from './ComparatorFifthCircle';
import ComparatorNotesCircle from './ComparatorNotesCircle';
import ComparatorThirdCircle from './ComparatorThirdCircle';
import { Temperament } from '../../model/Temperament/Temperament';

type ComparatorSVGProps = {
  idTemperament1: number,
  idTemperament2: number,
}

const ComparatorSVG: React.FC<ComparatorSVGProps> = ({
  idTemperament1, idTemperament2
}) => {

  const [tmpmt1, setTmpmt1] = useState<Temperament>(EqualTemperament);
  const [tmpmt2, setTmpmt2] = useState<Temperament>(EqualTemperament);

  useEffect(() => {
    (async () => {
      setTmpmt1(await fetchTemperamentPropsById(idTemperament1));
    })();
  }, [idTemperament1]);

  useEffect(() => {
    (async () => {
      setTmpmt2(await fetchTemperamentPropsById(idTemperament2));
    })();
  }, [idTemperament2]);

  return (
    <>
      <div className="px-4 pt-2 justify-center">
        <svg id="comparator" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 400 400">
          <ComparatorThirdCircle
            qualityNote1={thirdQ(tmpmt1.csExp3rd)}
            qualityNote2={thirdQ(tmpmt2.csExp3rd)}
          />
          <ComparatorNotesCircle />
          <ComparatorFifthCircle
            qualityNote1={fifthQ(tmpmt1.cpExp5th)}
            qualityNote2={fifthQ(tmpmt2.cpExp5th)}
          />
        </svg>
      </div>

      <ComparatorDivergence
        temperament1={tmpmt1}
        temperament2={tmpmt2}
      />

    </>
  );
};

export default ComparatorSVG;
