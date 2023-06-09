import NotesMap from '../Note/NotesMap';
import EqualTemperament from './Equal';

export type TemperamentData = {
  id: string;
  deviation: NotesMap<number>;
  cpExp5th: NotesMap<string>;
  csExp3rd: NotesMap<string>;
  csExpMin3rd?: NotesMap<string>;
  graph?: {
    data: { label: string; x: string; y: string }[];
    scaleX: string[];
    scaleY: string[];
  };
  periodNum: number;
};

export type TemperamentTexts = {
  name: string;
  procedure: string;
  period: string;
  theorist: string;
  geographicalArea: string;
  nature: string;
  structuralParticularity: string;
  sources: Array<DataSources>;
  soundReferences: Array<DataSound>;
  commentary: string;
};

export type Temperament = TemperamentData & TemperamentTexts;

export type DataSources = {
  author: string;
  book: string;
  title: string;
  other: string;
  date: string;
  page: string;
  url: string;
};

export type DataSound = {
  img?: string;
  title: string;
  url: string;
};

export const defaultTemperaments: Array<TemperamentData> = [
  EqualTemperament,
  {
    id: 'Vallotti',
    periodNum: 1722,
    deviation: {
      C: 5.865,
      C_sharp: 0.0,
      D: 1.955,
      E_flat: 3.91,
      E: -1.955,
      F: 7.82,
      F_sharp: -1.955,
      G: 3.91,
      G_sharp: 1.955,
      A: 0.0,
      B_flat: 5.865,
      B: -3.91,
    },
    cpExp5th: {
      F_sharp: '0',
      C_sharp: '0',
      G_sharp: '0',
      E_flat: '0',
      B_flat: '0',
      F: '-1/6',
      C: '-1/6',
      G: '-1/6',
      D: '-1/6',
      A: '-1/6',
      E: '-1/6',
      B: '0',
    },
    csExp3rd: {
      F_sharp: '+11/11',
      C_sharp: '+11/11',
      G_sharp: '+9/11',
      E_flat: '+7/11',
      B_flat: '+5/11',
      F: '+3/11',
      C: '+3/11',
      G: '+3/11',
      D: '+5/11',
      A: '+7/11',
      E: '+9/11',
      B: '+11/11',
    },
    csExpMin3rd: {
      F_sharp: '-7/11',
      C_sharp: '-9/11',
      G_sharp: '-11/11',
      E_flat: '-11/11',
      B_flat: '-11/11',
      F: '-11/11',
      C: '-9/11',
      G: '-7/11',
      D: '-5/11',
      A: '-5/11',
      E: '-5/11',
      B: '-5/11',
    },
    graph: {
      data: [
        { label: 'F C G', x: '-1/6', y: '+3/11 Cs' },
        { label: 'D', x: '-1/6', y: '5/11' },
        { label: 'A', x: '-1/6', y: '7/11' },
        { label: 'E', x: '-1/6', y: '9/11' },
        { label: 'H F# C#', x: 'Pure', y: '11/11' },
        { label: 'G#', x: 'Pure', y: '9/11' },
        { label: 'Eb', x: 'Pure', y: '7/11' },
        { label: 'Bb', x: 'Pure', y: '5/11' },
        { label: '', x: '-1/6', y: '+3/11 Cs' },
      ],
      scaleX: ['','-1/6',' ','-1/8','  ','-1/12 Cp','   ','Pure','    '],
      scaleY: ['','+3/11 Cs', '5/11', '7/11', '9/11', '11/11', ' '],
    },
  },
  {
    id: 'Meantone',
    periodNum: 1500,
    deviation: {
      C: 10.263,
      C_sharp: -13.686,
      D: 3.42,
      E_flat: 20.528,
      E: -3.422,
      F: 13.685,
      F_sharp: -10.265,
      G: 6.842,
      G_sharp: -17.108,
      A: 0.0,
      B_flat: 17.106,
      B: -6.843,
    },
    cpExp5th: {
      F_sharp: '-1/4.36',
      C_sharp: '-1/4.36',
      G_sharp: '+1/0.66',
      E_flat: '-1/4.36',
      B_flat: '-1/4.36',
      F: '-1/4.36',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.36',
      E: '-1/4.36',
      B: '-1/4.36',
    },
    csExp3rd: {
      F_sharp: '21/11',
      C_sharp: '21/11',
      G_sharp: '21/11',
      E_flat: '0',
      B_flat: '0',
      F: '0',
      C: '0',
      G: '0',
      D: '0',
      A: '0',
      E: '0',
      B: '21/11',
    },
    csExpMin3rd: {
      F_sharp: '-3/11',
      C_sharp: '-3/11',
      G_sharp: '-3/11',
      E_flat: '-24/11',
      B_flat: '-24/11',
      F: '-3/11',
      C: '-3/11',
      G: '-3/11',
      D: '-3/11',
      A: '-3/11',
      E: '-3/11',
      B: '-3/11',
    },
    graph: {
      data: [
        { label: 'Eb Bb F C G D A E', x: '-1/4 Cs', y: '' },
        { label: 'B F# C#', x: '-1/4 Cs', y: '21/11' },
        { label: 'G#', x: '+1,65 Cs', y: '21/11' },
      ],
      scaleX: ['','-1/4 Cs','   ','Pure','    ','+1,65 Cs'],
      scaleY: ['','7/11 = TE', '11/11 = Pyth.', '21/11', ' '],
    },
  },
  {
    id: 'RameauSiB',
    periodNum: 1720,
    deviation: {
      C: 10.265,
      C_sharp: 0.578,
      D: 3.422,
      E_flat: 13.375,
      E: -3.422,
      F: 13.686,
      F_sharp: -8.487,
      G: 6.843,
      G_sharp: 7.865,
      A: 0.0,
      B_flat: 17.108,
      B: -6.843,
    },
    cpExp5th: {
      F_sharp: '+1/3.3',
      C_sharp: '+1/4.4',
      G_sharp: '+1/6.6',
      E_flat: '+1/13.19',
      B_flat: '-1/4.36',
      F: '-1/4.36',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.36',
      E: '-1/4.36',
      B: '-1/6.52',
    },
    csExp3rd: {
      F_sharp: '20/11',
      C_sharp: '14/11',
      G_sharp: '8/11',
      E_flat: '4/11',
      B_flat: '0',
      F: '0',
      C: '0',
      G: '0',
      D: '1/11',
      A: '7/11',
      E: '13/11',
      B: '17/11',
    },
    csExpMin3rd: {
      F_sharp: '-4/11',
      C_sharp: '-10/11',
      G_sharp: '-16/11',
      E_flat: '-19/11',
      B_flat: '-16/11',
      F: '-11/11',
      C: '-6/11',
      G: '-3/11',
      D: '-3/11',
      A: '-3/11',
      E: '-3/11',
      B: '-3/11',
    },
    graph: {
      data: [
        { label: 'Bb F C G', x: '-1/4', y: '' },
        { label: 'D', x: '-1/4', y: '+1/11 Cs' },
        { label: 'A', x: '-1/4', y: '7/11' },
        { label: 'E', x: '-1/4', y: '13/11' },
        { label: 'B', x: '-1/6', y: '17/11' },
        { label: 'F#', x: '+1/3', y: '20/11' },
        { label: 'C#', x: '+1/4', y: '14/11' },
        { label: 'G#', x: '+1/6', y: '8/11' }, 
        { label: 'Eb', x: '+1/12', y: '4/11' },
        { label: '', x: '-1/4', y: '' },
      ],
      scaleX: ['a','-1/4','b','-1/6','c','Pure','d','+1/12','e','+1/6','f','+1/4','+1/3','      '],
      scaleY: ['','+1/11 Cs',' ','  ', '4/11','   ','    ', '7/11', '8/11', '     ','13/11', '14/11','       ', '17/11','          ','20/11'],
    },
  },
  {
    id: 'RameauDo',
    periodNum: 1720,
    deviation: {
      C: 10.265,
      C_sharp: -13.686,
      D: 3.422,
      E_flat: -6.265,
      E: -3.422,
      F: 6.532,
      F_sharp: -10.265,
      G: 6.843,
      G_sharp: -15.33,
      A: 0.0,
      B_flat: 1.022,
      B: -6.843,
    },
    cpExp5th: {
      F_sharp: '-1/4.36',
      C_sharp: '-1/6.52',
      G_sharp: '+1/3.3',
      E_flat: '+1/4.4',
      B_flat: '+1/6.6',
      F: '+1/13.19',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.36',
      E: '-1/4.36',
      B: '-1/4.36',
    },
    csExp3rd: {
      F_sharp: '13/11',
      C_sharp: '17/11',
      G_sharp: '20/11',
      E_flat: '14/11',
      B_flat: '8/11',
      F: '4/11',
      C: '0',
      G: '0',
      D: '0',
      A: '0',
      E: '1/11',
      B: '7/11',
    },
    csExpMin3rd: {
      F_sharp: '-3/11',
      C_sharp: '-3/11',
      G_sharp: '-4/11',
      E_flat: '-10/11',
      B_flat: '-16/11',
      F: '-19/11',
      C: '-16/11',
      G: '-11/11',
      D: '-6/11',
      A: '-3/11',
      E: '-3/11',
      B: '-3/11',
    },
    graph: {
      data: [
        { label: 'C G D A', x: '-1/4', y: '' },
        { label: 'E', x: '-1/4', y: '+1/11 Cs' },
        { label: 'B', x: '-1/4', y: '7/11' },
        { label: 'F#', x: '-1/4', y: '13/11' },
        { label: 'C#', x: '-1/6', y: '17/11' },
        { label: 'G#', x: '+1/3', y: '20/11' },
        { label: 'Eb', x: '+1/4', y: '14/11' },
        { label: 'Bb', x: '+1/6', y: '8/11' }, 
        { label: 'F', x: '+1/12', y: '4/11' },
        { label: '', x: '-1/4', y: '' },
      ],
      scaleX: ['a','-1/4','b','-1/6','c','Pure','d','+1/12','e','+1/6','f','+1/4','+1/3','      '],
      scaleY: ['','+1/11 Cs',' ','  ', '4/11','   ','    ', '7/11', '8/11', '     ','13/11', '14/11','       ', '17/11','          ','20/11'],
    },
  },
  {
    id: 'BachKellner',
    periodNum: 1730,
    deviation: {
      C: 8.211,
      C_sharp: -1.564,
      D: 2.737,
      E_flat: 2.346,
      E: -2.737,
      F: 6.256,
      F_sharp: -3.519,
      G: 5.474,
      G_sharp: 0.391,
      A: 0.0,
      B_flat: 4.301,
      B: -0.782,
    },
    cpExp5th: {
      F_sharp: '0',
      C_sharp: '0',
      G_sharp: '0',
      E_flat: '0',
      B_flat: '0',
      F: '0',
      C: '-1/5',
      G: '-1/5',
      D: '-1/5',
      A: '-1/5',
      E: '0',
      B: '-1/5',
    },
    csExp3rd: {
      F_sharp: '11/11',
      C_sharp: '11/11',
      G_sharp: '11/11',
      E_flat: '9/11',
      B_flat: '6/11',
      F: '4/11',
      C: '1/11',
      G: '4/11',
      D: '4/11',
      A: '6/11',
      E: '9/11',
      B: '9/11',
    },
    csExpMin3rd: {
      F_sharp: '-6/11',
      C_sharp: '-9/11',
      G_sharp: '-9/11',
      E_flat: '-11/11',
      B_flat: '-11/11',
      F: '-11/11',
      C: '-11/11',
      G: '-9/11',
      D: '-6/11',
      A: '-4/11',
      E: '-4/11',
      B: '-6/11',
    },
    graph: {
      data: [
        { label: 'F# C# G#', x: 'Pure', y: '11/11' },
        { label: 'Eb', x: 'Pure', y: '9/11' },
        { label: 'Bb', x: 'Pure', y: '6/11' },
        { label: 'F', x: 'Pure', y: '4/11' },
        { label: 'C', x: '-1/5 Cp', y: '+1/11 Cs' },
        { label: 'G D', x: '-1/5 Cp', y: '4/11' },
        { label: 'A', x: '-1/5 Cp', y: '6/11' },
        { label: 'E', x: 'Pure', y: '9/11' },
        { label: 'B', x: '-1/5 Cp', y: '9/11' },  { label: '', x: 'Pure', y: '11/11' },
      ],
      scaleX: ['','-1/5 Cp','a','Pure','b'],
      scaleY: ['','+1/11 Cs',' ','  ', '4/11','   ', '6/11','    ','      ', '9/11','       ', '11/11', ' '],
    },
  },
  {
    id: 'WerckmeisterIII',
    periodNum: 1691,
    deviation: {
      C: 11.73,
      C_sharp: 1.955,
      D: 3.91,
      E_flat: 5.865,
      E: 1.955,
      F: 9.775,
      F_sharp: 0.0,
      G: 7.82,
      G_sharp: 3.91,
      A: 0.0,
      B_flat: 7.82,
      B: 3.91,
    },
    cpExp5th: {
      F_sharp: '0',
      C_sharp: '0',
      G_sharp: '0',
      E_flat: '0',
      B_flat: '0',
      F: '0',
      C: '-1/4',
      G: '-1/4',
      D: '-1/4',
      A: '0',
      E: '0',
      B: '-1/4',
    },
    csExp3rd: {
      F_sharp: '11/11',
      C_sharp: '11/11',
      G_sharp: '11/11',
      E_flat: '8/11',
      B_flat: '5/11',
      F: '2/11',
      C: '2/11',
      G: '5/11',
      D: '5/11',
      A: '8/11',
      E: '8/11',
      B: '8/11',
    },
    csExpMin3rd: {
      F_sharp: '-8/11',
      C_sharp: '-8/11',
      G_sharp: '-8/11',
      E_flat: '-11/11',
      B_flat: '-11/11',
      F: '-11/11',
      C: '-11/11',
      G: '-8/11',
      D: '-5/11',
      A: '-2/11',
      E: '-5/11',
      B: '-8/11',
    },
    graph: {
      data: [
        { label: 'C', x: '-1/4 Cp', y: '+2/11 Cs' },
        { label: 'G D', x: '-1/4 Cp', y: '5/11' },
        { label: 'A E Eb', x: 'Pure', y: '8/11' },
        { label: 'B', x: '-1/4 Cp', y: '8/11' },
        { label: 'F# C# G#', x: 'Pure', y: '11/11' },
        { label: ' ', x: 'Pure', y: '8/11' },
        { label: 'Bb', x: 'Pure', y: '5/11' },
        { label: 'F', x: 'Pure', y: '2/11' },
        { label: '', x: '-1/4 Cp', y: '+2/11 Cs' },
      ],
      scaleX: ['','-1/4 Cp','a','Pure','b'],
      scaleY: ['','+2/11 Cs', '5/11', '8/11','11/11', ' '],
    },
  },
  {
    id: 'WerckmeisterV',
    periodNum: 1691,
    deviation: {
      C: 0.0,
      C_sharp: -3.91,
      D: 3.91,
      E_flat: 0.0,
      E: -3.91,
      F: 3.91,
      F_sharp: 0.0,
      G: 1.955,
      G_sharp: -7.82,
      A: 0.0,
      B_flat: 1.955,
      B: -1.955,
    },
    cpExp5th: {
      F_sharp: '-1/4',
      C_sharp: '-1/4',
      G_sharp: '+1/4',
      E_flat: '0',
      B_flat: '0',
      F: '-1/4',
      C: '0',
      G: '0',
      D: '-1/4',
      A: '-1/4',
      E: '0',
      B: '0',
    },
    csExp3rd: {
      F_sharp: '8/11',
      C_sharp: '11/11',
      G_sharp: '11/11',
      E_flat: '8/11',
      B_flat: '8/11',
      F: '5/11',
      C: '5/11',
      G: '5/11',
      D: '5/11',
      A: '5/11',
      E: '5/11',
      B: '8/11',
    },
    csExpMin3rd: {
      F_sharp: '-8/11',
      C_sharp: '-8/11',
      G_sharp: '-5/11',
      E_flat: '-8/11',
      B_flat: '-11/11',
      F: '-14/11',
      C: '-8/11',
      G: '-8/11',
      D: '-8/11',
      A: '-8/11',
      E: '-5/11',
      B: '-5/11',
    },
    graph: {
      data: [
        { label: 'FaM RéM LaM', x: '-1/4 Cp', y: '5/11 Cs' },
        { label: 'DoM SolM MiM', x: 'Pure', y: '5/11' },
        { label: 'SiM', x: 'Pure', y: '8/11' },
        { label: 'B', x: '-1/4 Cp', y: '8/11' },
        { label: 'Fa#M', x: '-1/4 Cp', y: '8/11' },
        { label: 'RébM', x: '-1/4 Cp', y: '11/11' }, 
        { label: 'LabM', x: '+1/4', y: '11/11' }, 
        { label: '', x: '-1/4 Cp', y: '+2/11 Cs' },
      ],
      scaleX: ['','-1/4 Cp','a','Pure','b','+1/4'],
      scaleY: ['','+2/11 Cs', '5/11', '8/11','Π', ' '],
    },
  },
  {
    id: 'Pythagorean',
    periodNum: 1400,
    deviation: {
      C: -5.865,
      C_sharp: 7.82,
      D: -1.955,
      E_flat: -11.73,
      E: 1.955,
      F: -7.82,
      F_sharp: 5.865,
      G: -3.91,
      G_sharp: 9.775,
      A: 0.0,
      B_flat: -9.775,
      B: 3.91,
    },
    cpExp5th: {
      F_sharp: '0',
      C_sharp: '0',
      G_sharp: '-1/1',
      E_flat: '0',
      B_flat: '0',
      F: '0',
      C: '0',
      G: '0',
      D: '0',
      A: '0',
      E: '0',
      B: '0',
    },
    csExp3rd: {
      F_sharp: '-1/11',
      C_sharp: '-1/11',
      G_sharp: '-1/11',
      E_flat: '11/11',
      B_flat: '11/11',
      F: '11/11',
      C: '11/11',
      G: '11/11',
      D: '11/11',
      A: '11/11',
      E: '11/11',
      B: '-1/11',
    },
    csExpMin3rd: {
      F_sharp: '-11/11',
      C_sharp: '-11/11',
      G_sharp: '-11/11',
      E_flat: '1/11',
      B_flat: '1/11',
      F: '1/11',
      C: '-11/11',
      G: '-11/11',
      D: '-11/11',
      A: '-11/11',
      E: '-11/11',
      B: '-11/11',
    },
  },
  {
    id: 'Kirnberger',
    periodNum: 1779,
    deviation: {
      C: 10.264,
      C_sharp: 0.489,
      D: 3.421,
      E_flat: 4.399,
      E: -3.422,
      F: 8.309,
      F_sharp: 0.488,
      G: 6.842,
      G_sharp: 2.444,
      A: 0.0,
      B_flat: 6.354,
      B: -1.467,
    },
    cpExp5th: {
      F_sharp: '-1/12',
      C_sharp: '0',
      G_sharp: '0',
      E_flat: '0',
      B_flat: '0',
      F: '0',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.36',
      E: '0',
      B: '0',
    },
    csExp3rd: {
      F_sharp: '10/11',
      C_sharp: '11/11',
      G_sharp: '11/11',
      E_flat: '8/11',
      B_flat: '5/11',
      F: '3/11',
      C: '0',
      G: '3/11',
      D: '5/11',
      A: '7/11',
      E: '10/11',
      B: '10/11',
    },
    csExpMin3rd: {
      F_sharp: '-8/11',
      C_sharp: '-10/11',
      G_sharp: '-10/11',
      E_flat: '-10/11',
      B_flat: '-11/11',
      F: '-11/11',
      C: '-11/11',
      G: '-8/11',
      D: '-5/11',
      A: '-3/11',
      E: '-3/11',
      B: '-5/11',
    },
  },
  {
    id: 'Bertier Elliptique',
    periodNum: 1740,
    deviation: {
      C: 5.341,
      C_sharp: 0.0,
      D: 1.955,
      E_flat: 3.91,
      E: -1.431,
      F: 5.865,
      F_sharp: -1.431,
      G: 3.91,
      G_sharp: 1.955,
      A: 0.0,
      B_flat: 5.341,
      B: -1.955,
    },
    cpExp5th: {
      F_sharp: '-1/44.77',
      C_sharp: '0',
      G_sharp: '0',
      E_flat: '-1/44.77',
      B_flat: '-1/16.39',
      F: '-1/9.46',
      C: '-1/6.93',
      G: '-1/6',
      D: '-1/6',
      A: '-1/6.93',
      E: '-1/9.46',
      B: '-1/16.39',
    },
    csExp3rd: {
      F_sharp: '10/11',
      C_sharp: '10/11',
      G_sharp: '9/11',
      E_flat: '7/11',
      B_flat: '5/11',
      F: '4/11',
      C: '4/11',
      G: '4/11',
      D: '5/11',
      A: '7/11',
      E: '9/11',
      B: '10/11',
    },
    csExpMin3rd: {
      F_sharp: '-7/11',
      C_sharp: '-9/11',
      G_sharp: '-10/11',
      E_flat: '-11/11',
      B_flat: '-11/11',
      F: '-10/11',
      C: '-9/11',
      G: '-7/11',
      D: '-6/11',
      A: '-5/11',
      E: '-5/11',
      B: '-6/11',
    },
  },
  {
    id: 'Neidhardt',
    periodNum: 1732,
    deviation: {
      C: 5.865,
      C_sharp: 1.955,
      D: 1.955,
      E_flat: 3.91,
      E: 0.0,
      F: 5.865,
      F_sharp: 1.955,
      G: 3.91,
      G_sharp: 1.955,
      A: 0.0,
      B_flat: 5.865,
      B: 1.955,
    },
    cpExp5th: {
      F_sharp: '-1/12',
      C_sharp: '-1/12',
      G_sharp: '0',
      E_flat: '0',
      B_flat: '-1/12',
      F: '-1/12',
      C: '-1/6',
      G: '-1/6',
      D: '-1/6',
      A: '-1/12',
      E: '0',
      B: '-1/12',
    },
    csExp3rd: {
      F_sharp: '9/11',
      C_sharp: '9/11',
      G_sharp: '9/11',
      E_flat: '7/11',
      B_flat: '5/11',
      F: '4/11',
      C: '4/11',
      G: '6/11',
      D: '7/11',
      A: '8/11',
      E: '8/11',
      B: '8/11',
    },
    csExpMin3rd: {
      F_sharp: '-9/11',
      C_sharp: '-9/11',
      G_sharp: '-8/11',
      E_flat: '-9/11',
      B_flat: '-10/11',
      F: '-10/11',
      C: '-9/11',
      G: '-7/11',
      D: '-6/11',
      A: '-5/11',
      E: '-6/11',
      B: '-8/11',
    },
  },
  {
    id: 'Bach/Jobin',
    periodNum: 1750,
    deviation: {
      C: 10.263,
      C_sharp: -2.933,
      D: 3.42,
      E_flat: 2.117,
      E: -3.422,
      F: 8.308,
      F_sharp: -4.888,
      G: 6.842,
      G_sharp: -0.978,
      A: 0.0,
      B_flat: 5.213,
      B: -6.843,
    },
    cpExp5th: {
      F_sharp: '0',
      C_sharp: '0',
      G_sharp: '+1/20.6',
      E_flat: '+1/20.6',
      B_flat: '+1/20.6',
      F: '0',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.36',
      E: '-1/4.36',
      B: '0',
    },
    csExp3rd: {
      F_sharp: '12/11',
      C_sharp: '13/11',
      G_sharp: '13/11',
      E_flat: '9/11',
      B_flat: '6/11',
      F: '3/11',
      C: '0',
      G: '0',
      D: '3/11',
      A: '5/11',
      E: '8/11',
      B: '12/11',
    },
    csExpMin3rd: {
      F_sharp: '-5/11',
      C_sharp: '-8/11',
      G_sharp: '-11/11',
      E_flat: '-12/11',
      B_flat: '-12/11',
      F: '-13/11',
      C: '-12/11',
      G: '-9/11',
      D: '-5/11',
      A: '-3/11',
      E: '-3/11',
      B: '-3/11',
    },
  },

  {
    id: 'Marpurg',
    periodNum: 1756,
    deviation: {
      C: 10.264,
      C_sharp: -5.474,
      D: 3.421,
      E_flat: 4.105,
      E: -3.421,
      F: 13.685,
      F_sharp: -10.264,
      G: 6.843,
      G_sharp: -0.684,
      A: 0.0,
      B_flat: 8.895,
      B: -6.843,
    },
    cpExp5th: {
      F_sharp: '+1/8.28',
      C_sharp: '+1/8.28',
      G_sharp: '+1/8.28',
      E_flat: '+1/8.28',
      B_flat: '+1/8.28',
      F: '-1/4.36',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.36',
      E: '-1/4.36',
      B: '-1/4.36',
    },
    csExp3rd: {
      F_sharp: '17/11',
      C_sharp: '17/11',
      G_sharp: '13/11',
      E_flat: '8/11',
      B_flat: '4/11',
      F: '0',
      C: '0',
      G: '0',
      D: '0',
      A: '4/11',
      E: '8/11',
      B: '13/11',
    },
    csExpMin3rd: {
      F_sharp: '-3/11',
      C_sharp: '-7/11',
      G_sharp: '-11/11',
      E_flat: '-15/11',
      B_flat: '-15/11',
      F: '-15/11',
      C: '-11/11',
      G: '-7/11',
      D: '-3/11',
      A: '-3/11',
      E: '-3/11',
      B: '-3/11',
    },
  },
  {
    id: 'Chaumont',
    periodNum: 1695,
    deviation: {
      C: 7.037,
      C_sharp: -9.385,
      D: 2.346,
      E_flat: 0,
      E: -2.346,
      F: 9.385,
      F_sharp: -7.037,
      G: 4.693,
      G_sharp: -11.731,
      A: 0.0,
      B_flat: 4.693,
      B: -4.693,
    },
    cpExp5th: {
      F_sharp: '-1/5.45',
      C_sharp: '-1/5.45',
      G_sharp: '+1/2.4',
      E_flat: '+1/8.57',
      B_flat: '+1/8.57',
      F: '-1/5.45',
      C: '-1/5.46',
      G: '-1/5.45',
      D: '-1/5.45',
      A: '-1/5.45',
      E: '-1/5.45',
      B: '-1/5.46',
    },
    csExp3rd: {
      F_sharp: '13/11',
      C_sharp: '17/11',
      G_sharp: '17/11',
      E_flat: '9/11',
      B_flat: '6/11',
      F: '2/11',
      C: '2/11',
      G: '2/11',
      D: '2/11',
      A: '2/11',
      E: '2/11',
      B: '9/11',
    },
    csExpMin3rd: {
      F_sharp: '-4/11',
      C_sharp: '-4/11',
      G_sharp: '-4/11',
      E_flat: '-12/11',
      B_flat: '-15/11',
      F: '-19/11',
      C: '-12/11',
      G: '-8/11',
      D: '-4/11',
      A: '-4/11',
      E: '-4/11',
      B: '-4/11',
    },
  },
  {
    id: 'Martini',
    periodNum: 1750,
    deviation: {
      C: 10.264,
      C_sharp: 6.842,
      D: 3.421,
      E_flat: 0,
      E: -3.421,
      F: 13.685,
      F_sharp: 10.264,
      G: 6.843,
      G_sharp: 3.421,
      A: 0.0,
      B_flat: -3.421,
      B: -6.843,
    },
    cpExp5th: {
      F_sharp: '-1/4.36',
      C_sharp: '-1/4.36',
      G_sharp: '-1/4.36',
      E_flat: '-1/4.36',
      B_flat: '+1/1.55',
      F: '-1/4.36',
      C: '-1/4.36',
      G: '-1/4.36',
      D: '-1/4.36',
      A: '-1/4.37',
      E: '-1/4.36',
      B: '+1/1.55',
    },
    csExp3rd: {
      F_sharp: '0',
      C_sharp: '11/11',
      G_sharp: '11/11',
      E_flat: '11/11',
      B_flat: '10/11',
      F: '0',
      C: '0',
      G: '0',
      D: '11/11',
      A: '10/11',
      E: '10/11',
      B: '11/11',
    },
    csExpMin3rd: undefined,
  },
  {
    id: 'Riccati',
    periodNum: 1750,
    deviation: {
      C: 5.521,
      C_sharp: -3.681,
      D: 1.84,
      E_flat: 7.361,
      E: -1.84,
      F: 7.361,
      F_sharp: -3.681,
      G: 3.68,
      G_sharp: -3.681,
      A: 0.0,
      B_flat: 7.361,
      B: -3.68,
    },
    cpExp5th: {
      F_sharp: '-1/12',
      C_sharp: '-1/12',
      G_sharp: '+1/2.58',
      E_flat: '-1/12',
      B_flat: '-1/12',
      F: '-1/6.18',
      C: '-1/6.18',
      G: '-1/6.18',
      D: '-1/6.18',
      A: '-1/6.18',
      E: '-1/6.18',
      B: '-1/12',
    },
    csExp3rd: {
      F_sharp: '13/11',
      C_sharp: '13/11',
      G_sharp: '12/11',
      E_flat: '5/11',
      B_flat: '4/11',
      F: '3/11',
      C: '3/11',
      G: '3/11',
      D: '4/11',
      A: '5/11',
      E: '6/11',
      B: '13/11',
    },
    csExpMin3rd: undefined,
  },
  {
    id: 'Bendeler',
    periodNum: 1690,
    deviation: {
      C: 9.775,
      C_sharp: 0,
      D: -1.955,
      E_flat: 3.91,
      E: 1.955,
      F: 7.82,
      F_sharp: -1.955,
      G: 3.91,
      G_sharp: -1.955,
      A: 0.0,
      B_flat: 5.865,
      B: 3.91,
    },
    cpExp5th: {
      F_sharp: '-0',
      C_sharp: '0',
      G_sharp: '0',
      E_flat: '0',
      B_flat: '0',
      F: '0',
      C: '-1/3',
      G: '-1/3',
      D: '0',
      A: '0',
      E: '0',
      B: '-1/3',
    },
    csExp3rd: {
      F_sharp: '11/11',
      C_sharp: '11/11',
      G_sharp: '11/11',
      E_flat: '7/11',
      B_flat: '3/11',
      F: '3/11',
      C: '3/11',
      G: '7/11',
      D: '7/11',
      A: '7/11',
      E: '7/11',
      B: '7/11',
    },
    csExpMin3rd: undefined,
  },
];
