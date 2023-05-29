import React, { useEffect, useState } from 'react';
import { IonSlides, IonSlide } from '@ionic/react';
import { useTranslation } from 'react-i18next';

import Toggler from '../inputs/Toggler';
import Card from '../Card';
import CommasRing from '../Ring/CommasRing';
import LabelsRing from '../Ring/LabelsRing';
import SVG from '../SVG';

import { Temperament } from '../../model/Temperament/Temperament';
import { cpExp5thToCsExp5th } from '../../model/Divergence';
import { FIFTHS } from '../../model/Note/sequences';
import { mapNotesMap } from '../../model/Note/NotesMap';

type SheetCommasProps = {
  temperament: Temperament;
};

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const SheetCommas: React.FC<SheetCommasProps> = ({ temperament }) => {
  const { t } = useTranslation('temper');
  const [isCpMode, setCpMode] = useState<boolean>(true);
  const vbsize = { x: 200 + 5, y: 200 + 5 };
  const center = { x: vbsize.x / 2, y: vbsize.y / 2 };
  const r = [57, 70, 80, 100];

  useEffect(() => {
    setCpMode(Boolean(!temperament.nature.match(/comma synto/gi)));
  }, [temperament]);

  return (
    <>
      <IonSlides pager={true} options={slideOpts} className="px-5 max-w-lg">
        <IonSlide className="px-1">
          <Card
            title={t('fifthCommas')}
            classNameContent="pb-16"
            className="pb-4"
          >
            <div className="max-w-lg max-h-lg">
              <SVG className="ring" viewBoxSize={vbsize}>
                <CommasRing
                  innerR={r[0]}
                  outerR={r[1]}
                  c={center}
                  hasLabels
                  is3rd={false}
                  fill={false}
                  hasStroke={false}
                  fontSize={9}
                  isCp={isCpMode}
                  commas={
                    isCpMode
                      ? temperament.cpExp5th
                      : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)
                  }
                />
                <CommasRing
                  innerR={r[1]}
                  outerR={r[2]}
                  c={center}
                  hasLabels={false}
                  is3rd={false}
                  fontSize={9}
                  isCp={isCpMode}
                  commas={
                    isCpMode
                      ? temperament.cpExp5th
                      : mapNotesMap(temperament.cpExp5th, cpExp5thToCsExp5th)
                  }
                />
                <LabelsRing
                  innerR={r[2]}
                  outerR={r[3]}
                  c={center}
                  labels={FIFTHS.map((f) => f.string(true, false))}
                  fontSize={10}
                />
              </SVG>
            </div>
            <div className="absolute flex right-4">
              <div className="toggle-name">{t('fifthsUnit')} :</div>
              <Toggler
                typeContentText={true}
                contentLeft="Cs"
                contentRight="Cp"
                conditionLeft={!isCpMode}
                conditionRight={isCpMode}
                onClickLeft={() => setCpMode(false)}
                onClickRight={() => setCpMode(true)}
              />
            </div>
          </Card>
        </IonSlide>

        <IonSlide className="px-1">
          <Card
            title={t('thirdsCommas')}
            classNameContent="pb-16"
            className="pb-4"
          >
            <div className="max-w-lg max-h-lg">
              <SVG className="ring" viewBoxSize={vbsize}>
                <CommasRing
                  innerR={r[0]}
                  outerR={r[1]}
                  c={center}
                  hasLabels
                  is3rd
                  fill={false}
                  hasStroke={false}
                  commas={temperament.csExp3rd}
                  fontSize={9}
                  isCp={isCpMode}
                />
                <CommasRing
                  innerR={r[1]}
                  outerR={r[2]}
                  c={center}
                  hasLabels={false}
                  is3rd
                  commas={temperament.csExp3rd}
                  fontSize={9}
                  isCp={isCpMode}
                />
                <LabelsRing
                  innerR={r[2]}
                  outerR={r[3]}
                  c={center}
                  labels={FIFTHS.map((f) => f.string(true, false))}
                  fontSize={10}
                />
              </SVG>
            </div>
          </Card>
        </IonSlide>

        {temperament.csExpMin3rd && (
          <IonSlide className="px-1">
            <Card
              title={t('minorThirdsCommas')}
              classNameContent="pb-16"
              className="pb-4"
            >
              <div className="max-w-lg max-h-lg">
                <SVG className="ring" viewBoxSize={vbsize}>
                  <CommasRing
                    innerR={r[0]}
                    outerR={r[1]}
                    c={center}
                    hasLabels
                    isMin3rd
                    fill={false}
                    hasStroke={false}
                    commas={temperament.csExpMin3rd as any}
                    fontSize={9}
                    isCp={isCpMode}
                  />
                  <CommasRing
                    innerR={r[1]}
                    outerR={r[2]}
                    c={center}
                    hasLabels={false}
                    isMin3rd
                    commas={temperament.csExpMin3rd as any}
                    fontSize={9}
                    isCp={isCpMode}
                  />
                  <LabelsRing
                    innerR={r[2]}
                    outerR={r[3]}
                    c={center}
                    labels={FIFTHS.map((f) => f.string(true, false))}
                    fontSize={10}
                  />
                </SVG>
              </div>
            </Card>
          </IonSlide>
        )}
      </IonSlides>
    </>
  );
};

export default SheetCommas;
