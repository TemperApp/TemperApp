import React, { useCallback, useContext } from 'react';
import './Comparator.css'
import { convertFifthQualityToColor, convertThirdQualityToColor } from '../../utils/colorCircle';
import SettingsContext from '../../store/settings-context';
import Doughnut from '../Doughnut';
import NotesMap, { notesMapToArray, OrderBy } from '../../model/Note/NotesMap';
import SVG from '../SVG';
import { FIFTHS } from '../../model/Note/sequences';

type ComparatorQuadRingsProps = {
  t1FifthsQ: NotesMap<number>,
  t1ThirdsQ: NotesMap<number>,
  t2FifthsQ: NotesMap<number>,
  t2ThirdsQ: NotesMap<number>,
};

const ComparatorQuadRings: React.FC<ComparatorQuadRingsProps> = ({
  t1FifthsQ,
  t1ThirdsQ,
  t2FifthsQ,
  t2ThirdsQ,
}) => {
  const settings = useContext(SettingsContext);

  const formatData = useCallback((
    notesMap: NotesMap<number>,
    is5th: boolean
  ) => (
    notesMapToArray(notesMap, OrderBy.FIFTHS_CIRCLE)
      .map((note) => ({
        label: '',
        fill: is5th
          ? convertFifthQualityToColor(note.value, settings.darkTheme)
          : convertThirdQualityToColor(note.value, settings.darkTheme),
      }))
  ), [settings.darkTheme]);
  
  const vbsize = { x: 200 + 5, y: 200 + 5};
  const center = { x: vbsize.x / 2, y: vbsize.y / 2};
  const radius = [34, 45, 56, 76, 88, 100];

  return (
    <SVG className="doughnut" viewBoxSize={vbsize} >
      <Doughnut innerR={radius[0]} outerR={radius[1]} c={center}
        data={formatData(t2ThirdsQ, false)}
        isTextHorizontal />
      
      <Doughnut innerR={radius[1]} outerR={radius[2]} c={center}
        data={formatData(t2FifthsQ, true)}
        isTextHorizontal />
      
      <Doughnut innerR={radius[2]} outerR={radius[3]} c={center}
        data={FIFTHS.map((f) => ({ label: f.string(true, false) }))}
        isTextHorizontal hasStroke={false} />
      
      <Doughnut innerR={radius[3]} outerR={radius[4]} c={center}
        data={formatData(t1ThirdsQ, false)}
        isTextHorizontal />
      
      <Doughnut innerR={radius[4]} outerR={radius[5]} c={center}
        data={formatData(t1FifthsQ, true)}
        isTextHorizontal />
      
    </SVG>
  );
};

export default React.memo(
  ComparatorQuadRings,
  (prevProps, nextProps) => (
    prevProps.t1FifthsQ === nextProps.t1FifthsQ &&
    prevProps.t1ThirdsQ === nextProps.t1ThirdsQ &&
    prevProps.t2FifthsQ === nextProps.t2FifthsQ &&
    prevProps.t2ThirdsQ === nextProps.t2ThirdsQ
  )
);
