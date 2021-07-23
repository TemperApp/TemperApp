import React, { useEffect, useState } from 'react';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import EqualTemperament from '../../model/Temperament/Equal';
import { fifthQ, thirdQ } from '../../model/Divergence';

//Style

import './Comparator.css'
import ComparatorNotesCircle from './ComparatorNotesCircle';
import { Temperament } from '../../model/Temperament/Temperament';
import ComparatorComa from './ComparatorComa';
import ComparatorDivergence from './ComparatorDivergence';
import ComparatorTemp1Circle from './ComparatorTemp1Circle';
import ComparatorTemp2Circle from './ComparatorTemp2Circle';

type ComparatorSVGProps = {
  idTemperament1: number,
  idTemperament2: number,
}

const ComparatorSVG: React.FC<ComparatorSVGProps> = ({
  idTemperament1, idTemperament2,
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
      <div className="pt-2 px-6 justify-center max-w-lg comparator-svg">
        <svg id="comparator" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 400 400">
          <ComparatorTemp2Circle
            qualityNoteQ={fifthQ(tmpmt2.cpExp5th)}
            qualityNoteT={thirdQ(tmpmt2.csExp3rd)}
          />
          <ComparatorNotesCircle />
          <ComparatorTemp1Circle
            qualityNoteQ={fifthQ(tmpmt1.cpExp5th)}
            qualityNoteT={thirdQ(tmpmt1.csExp3rd)}
          />
        </svg>
      </div>
    
      <ComparatorComa
        temperament1={tmpmt1}
        temperament2={tmpmt2}
      />

      <div className="px-6 py-1">
        <ComparatorDivergence
          temperament1={tmpmt1}
          temperament2={tmpmt2}
        />
      </div>
    </>
  );
};

export default ComparatorSVG;
