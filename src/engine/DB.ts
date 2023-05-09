import { DataSound, DataSources } from '../model/Temperament/Temperament';

export type TemperamentDBType = {
  idTemperament: number,
  name: string,
  nameFR: string,
  period : string,
  periodNum: number,
  theorist : string,
  geographicalArea: string,
  nature: string,
  structuralParticularity: string,
  sources: Array<DataSources>,
  soundReferences: Array<DataSound>,
  commentary: string,
};

export type NoteDBType = {
  noteSymbol: string,
};

export type DivergenceDBType = {
  idTemperament: number,
  noteSymbol: string,
  deviation: string,
  cpExp5th: string,
  csExp3rd: string,
  procedure: string,
};
