import React, { useCallback, useContext } from 'react';
import { fifthQ, thirdQ } from '../../model/Divergence';
import { Notes } from '../../model/Note/enums';
import NotesMap, { notesMapToArray, OrderBy } from '../../model/Note/NotesMap';
import SettingsContext from '../../store/settings-context';
import { convertFifthQualityToColor, convertThirdQualityToColor } from '../../utils/colorCircle';
import { vec2 } from '../../utils/maths';
import Ring from './Ring';

type CommasRingProps = {
  commas: NotesMap<string>,
  is3rd?: boolean,
  c: vec2,
  innerR: number,
  outerR: number,
  hasStroke?: boolean;
  attributes?: any,
};

const CommasRing: React.FC<CommasRingProps> = ({
  commas,
  is3rd = false,
  c,
  innerR,
  outerR,
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
        .map((note) => ({
          label: '',
          fill: is3rd
            ? convertThirdQualityToColor(qualities[note.note as Notes], settings.darkTheme)
            : convertFifthQualityToColor(qualities[note.note as Notes], settings.darkTheme),
        }))
    )
  }, [settings.darkTheme]);

  return (
    <Ring innerR={innerR} outerR={outerR} c={c}
      data={formatData(commas, is3rd)}
      hasStroke={hasStroke}
      isTextHorizontal
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
