
import { IonRow } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { fetchTemperamentPropsById } from '../../engine/DataAccessor';
import { DivergenceEqual, fifthEqualQ, fifthQ, thirdEqualQ, thirdQ } from '../Tuner/functions/frequencies';

//Style

import './Comparator.css'
import ComparatorDivergence from './ComparatorDivergence';
import ComparatorFifthCircle from './ComparatorFifthCircle';
import ComparatorNotesCircle from './ComparatorNotesCircle';
import ComparatorThirdCircle from './ComparatorThirdCircle';

type ComparatorSVGProps = {
  nameTemperament1: string,
  nameTemperament2: string,
  idTemperament1: number,
  idTemperament2: number,
}

const ComparatorSVG: React.FC<ComparatorSVGProps> = ({nameTemperament1, nameTemperament2, idTemperament1, idTemperament2}) => {

  const [thirdQualityNote1, setThirdQualityNote1] = useState<{[key: string]: number | null}>(thirdEqualQ());
  const [fifthQualityNote1, setFifthQualityNote1] = useState<{[key: string]: number | null}>(fifthEqualQ());

  const [thirdQualityNote2, setThirdQualityNote2] = useState<{[key: string]: number | null}>(thirdEqualQ());
  const [fifthQualityNote2, setFifthQualityNote2] = useState<{[key: string]: number | null}>(fifthEqualQ());

  const [divergenceNote1, setDivergenceNote1] = useState<{[key: string]: number | null}>(DivergenceEqual());
  const [divergenceNote2, setDivergenceNote2] = useState<{[key: string]: number | null}>(DivergenceEqual());

  useEffect(() => {
    (async () => {
      const temp1 = await fetchTemperamentPropsById(idTemperament1);
      const temp2 = await fetchTemperamentPropsById(idTemperament2);
      setFifthQualityNote1(fifthQ(temp1.cpExp5th));
      setThirdQualityNote1(thirdQ(temp1.csExp3rd));
      setFifthQualityNote2(fifthQ(temp2.cpExp5th));
      setThirdQualityNote2(thirdQ(temp2.csExp3rd));
      setDivergenceNote1(temp1.deviation);
      setDivergenceNote2(temp2.deviation);
    })();
  }, [idTemperament1, idTemperament2]);

  return (
    <>
      <IonRow className="ion-padding-horizontal ion-justify-content-center">
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
      </IonRow>

      <ComparatorDivergence 
        nameTemperament1 = {nameTemperament1}
        nameTemperament2 = {nameTemperament2}
        divergenceTemperament1 = {divergenceNote1}
        divergenceTemperament2 = {divergenceNote2}
      />    

    </>
  );
};

export default ComparatorSVG;
