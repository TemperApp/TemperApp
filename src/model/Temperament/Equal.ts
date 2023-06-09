import NotesMap, { mapNotesMap } from "../Note/NotesMap";

const EqualTemperament = {
  id: 'Equal',
  deviation: mapNotesMap(0),
  cpExp5th: mapNotesMap('-1/12'),
  csExp3rd: mapNotesMap('+7/11'),
  csExpMin3rd: mapNotesMap('-8/11'),
  periodNum: 1800,
};

export const fifthEqualQ = (): NotesMap<number|null> => (mapNotesMap(-1));
export const thirdEqualQ = (): NotesMap<number|null> => (mapNotesMap(7));
export const DivergenceEqual = (): NotesMap<number> => (mapNotesMap(0));

export default EqualTemperament;
