
import React, { useEffect, useState } from 'react';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import { fifthEqualQ, fifthQ, thirdEqualQ, thirdQ } from '../Tuner/functions/frequencies';

//Style

import './Comparator.css'
import ComparatorFifthCircle from './ComparatorFifthCircle';
import ComparatorNotesCircle from './ComparatorNotesCircle';
import ComparatorThirdCircle from './ComparatorThirdCircle';

type ComparatorSVGProps = {
  idTemperament1: number,
  idTemperament2: number,
}

const ComparatorSVG: React.FC<ComparatorSVGProps> = ({idTemperament1, idTemperament2}) => {

  const [thirdQualityNote1, setThirdQualityNote1] = useState<{[key: string]: number | null}>(thirdEqualQ());
  const [fifthQualityNote1, setFifthQualityNote1] = useState<{[key: string]: number | null}>(fifthEqualQ());

  const [thirdQualityNote2, setThirdQualityNote2] = useState<{[key: string]: number | null}>(thirdEqualQ());
  const [fifthQualityNote2, setFifthQualityNote2] = useState<{[key: string]: number | null}>(fifthEqualQ());

  useEffect(() => {
    (async () => {
      const temp1 = await fetchTemperamentPropsById(idTemperament1);
      const temp2 = await fetchTemperamentPropsById(idTemperament2);
      setFifthQualityNote1(fifthQ(temp1.cpExp5th));
      setThirdQualityNote1(thirdQ(temp1.csExp3rd));
      setFifthQualityNote2(fifthQ(temp2.cpExp5th));
      setThirdQualityNote2(thirdQ(temp2.csExp3rd));

    })();
  }, [idTemperament1, idTemperament2]);

  return (
    <>
        <svg id="comparator" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 400 400">
          <ComparatorThirdCircle 
            qualityNote1 = {thirdQualityNote1}
            qualityNote2 = {thirdQualityNote2}
          />
          <ComparatorNotesCircle />
          <ComparatorFifthCircle 
            qualityNote1 = {fifthQualityNote1}
            qualityNote2 = {fifthQualityNote2}
          />    
        </svg>
    </>
  );
};

export default ComparatorSVG;
