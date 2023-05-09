import NotesMap, { mapNotesMap } from "../Note/NotesMap";

const EqualTemperament = {
  idTemperament: 1,
  name: "Equal",
  nameFR: "Égal",
  deviation: mapNotesMap(0),
  cpExp5th: mapNotesMap('-1/12'),
  csExp3rd: mapNotesMap('+7/11'),
  procedure: "A4;A4-A3;A3-F3;F3-F4;A3-C#4;C#4:F4;A3-E4;E4-B3;B3-F#4;F#4:C#4;C#4-G#4;G#4-Eb4;Eb4-Bb3;Bb3:F4;F4-C4;C4-G4;G4-G3;G3-D4;D4:A4",
  externalLinks:[
    {name: "", url: ""},
  ],
  theorist : "",
  wikipedia: [
    {name: "", url: ""},
    {name: "", url: ""},
  ],
  period : "",
  periodNum: -1,
  geographicalArea: "",
  nature: "",
  structuralParticularity: "",
  sources: [
    {author: "", book: "", title:"", other: "", date: "", page: "", url:""}
  ],
  references: [
    {author: "", book: "", title:"", other: "", date: "", page: "", url: ""},
  ],
  soundReferences: [
    {title: "", url: "",}],
  commentary: "",
};

export const fifthEqualQ = (): NotesMap<number|null> => (mapNotesMap(-1));
export const thirdEqualQ = (): NotesMap<number|null> => (mapNotesMap(7));
export const DivergenceEqual = (): NotesMap<number> => (mapNotesMap(0));

export default EqualTemperament;
