import React, { useCallback, useContext } from 'react';
import SettingsContext from '../../store/settings-context';

import Ring from './Ring';
import { Notes } from '../../model/Note/enums';
import { fifthQ, formatCpExp5thStr, formatCsExp3rdStr, thirdQ } from '../../model/Divergence';
import NotesMap, { notesMapToArray, OrderBy } from '../../model/Note/NotesMap';

import { convertFifthQualityToColor, convertThirdQualityToColor } from '../../utils/colorCircle';
import { vec2 } from '../../utils/maths';

type CommasRingProps = {
  commas: NotesMap<string>,
  is3rd: boolean,
  c: vec2,
  innerR: number,
  outerR: number,
  fontSize?: number,
  hasLabels?: boolean,
  hasStroke?: boolean;
  attributes?: any,
};

const CommasRing: React.FC<CommasRingProps> = ({
  commas,
  is3rd,
  c,
  innerR,
  outerR,
  fontSize,
  hasLabels = false,
  hasStroke = true,
  attributes = {},
}) => {
  const settings = useContext(SettingsContext);

  const formatData = useCallback((
    commas: NotesMap<string>,
    is3rd: boolean
  ) => {
    const qualities = is3rd ? thirdQ(commas) : fifthQ(commas);
    return (
      notesMapToArray(qualities, OrderBy.FIFTHS_CIRCLE)
        .map(({note}) => {
          const n = note as Notes;
          const label = !hasLabels
          ? ''
          : (is3rd
            ? formatCsExp3rdStr(commas[n])
            : formatCpExp5thStr(commas[n]));
          return ({
          label: label !== '0' ? label : '',
          fill: is3rd
            ? convertThirdQualityToColor(qualities[n], settings.darkTheme)
            : convertFifthQualityToColor(qualities[n], settings.darkTheme),
        })
      })
    )
  }, [hasLabels, settings.darkTheme]);

  return (
    <Ring innerR={innerR} outerR={outerR} c={c}
      data={formatData(commas, is3rd)}
      hasStroke={hasStroke}
      fontSize={fontSize}
      {...attributes} />
  );
};

export default React.memo(
  CommasRing,
  (prevProps, nextProps) => (
    prevProps.commas === nextProps.commas &&
    prevProps.is3rd === nextProps.is3rd &&
    prevProps.c === nextProps.c &&
    prevProps.innerR === nextProps.innerR &&
    prevProps.outerR === nextProps.outerR &&
    prevProps.hasStroke === nextProps.hasStroke &&
    prevProps.attributes === nextProps.attributes
  )
);
