import NotesMap, { mapNotesMap } from "../Note/NotesMap";

const EqualTemperament = {
  id: 'Equal',
  deviation: mapNotesMap(0),
  cpExp5th: mapNotesMap('-1/12'),
  csExp3rd: mapNotesMap('+7/11'),
  csExpMin3rd: mapNotesMap('-8/11'),
  periodNum: 1800,
  graph: {
    data: [
      { label: 'All Keys', x: -1/12, y: 7/11 },
    ],
    scaleX: ['','-1/6',' ','-1/8','  ','-1/12','   ','Pure','    '],
    scaleY: ['','+3/11 Cs', '5/11', '7/11', '9/11', '11/11', ' '],
  },
};

export const fifthEqualQ = (): NotesMap<number|null> => (mapNotesMap(-1));
export const thirdEqualQ = (): NotesMap<number|null> => (mapNotesMap(7));
export const DivergenceEqual = (): NotesMap<number> => (mapNotesMap(0));

export default EqualTemperament;
