/* eslint-disable no-sequences */
import { Temperament } from '../model/Temperament/Temperament';
import { TemperamentDBType } from './DB';
import { LearnSheet } from '../model/Learn/learnSheets';

// TODO Remove on production
import { defaultTemperaments } from '../model/Temperament/Temperament';
import { learnSheets } from '../model/Learn/learnSheets';

/**
 * @returns All known temperaments in database
 */
export const fetchTemperaments = async (): Promise<Array<TemperamentDBType>> => {
  // TODO Remove on production
  return defaultTemperaments.map((t) => ({
    idTemperament: t.idTemperament,
    name: t.name,
    nameFR: t.nameFR,
    period: t.period,
    periodNum: t.periodNum,
    theorist: t.theorist,
    geographicalArea: t.geographicalArea,
    nature: t.nature,
    structuralParticularity: t.structuralParticularity,
    sources: t.sources,
    soundReferences: t.soundReferences,
    commentary: t.commentary,
  }));
  /*
  return await DB.query("SELECT * FROM temperament");
  */
};

/**
 * @returns All known learnSheets in database
 */
export const fetchLearnSheets = async (): Promise<Array<LearnSheet>> => {
  // TODO Remove on production
  return learnSheets.map((t) => ({
    id: t.id,
    label: t.label,
    content: t.content,
  }));
  /*
  return await DB.query("SELECT * FROM learnSheets");
  */
};


/**
 * @returns The temperament corresponding to
 * the given 'idTemperament'
 */
export const fetchTemperamentById = async (
  id: number | string
): Promise<TemperamentDBType> => {
  // TODO Remove on production
  return defaultTemperaments
    // eslint-disable-next-line eqeqeq
    .filter((t) => t.idTemperament == id)
    .map((t) => ({
      idTemperament: t.idTemperament,
      name: t.name,
      nameFR: t.nameFR,
      period: t.period,
      periodNum: t.periodNum,
      theorist: t.theorist,
      geographicalArea: t.geographicalArea,
      nature: t.nature,
      structuralParticularity: t.structuralParticularity,
      sources: t.sources,
      soundReferences: t.soundReferences,
      commentary: t.commentary,
    }))[0];
  // TODO Handle id not found
  /*
  return (await DB.query("SELECT * FROM temperament WHERE idTemperament = ?;", [id]))[0];
  */
};

/**
 * @returns The learnSheet corresponding to
 * the given 'id'
 */
export const fetchLearnSheetById = async (
  id: number | string
): Promise<LearnSheet> => {
  // TODO Remove on production
  return learnSheets
    // eslint-disable-next-line eqeqeq
    .filter((t) => t.id == id)
    .map((t) => ({
      id: t.id,
      label: t.label,
      content: t.content,
    }))[0];
  // TODO Handle id not found
  /*
  return (await DB.query("SELECT * FROM learnSheet WHERE idTemperament = ?;", [id]))[0];
  */
};


/**
 * @returns The temperament corresponding to
 * the given 'idTemperament' and its divergence
 * properties
 */
export const fetchTemperamentPropsById = async (
  id: number | string
): Promise<Temperament> => {
  // TODO Remove on production
  return defaultTemperaments
    // eslint-disable-next-line eqeqeq
    .filter((t) => t.idTemperament == id)[0];
  // TODO Handle id not found
  /*
  const tmpmt = await fetchTemperamentById(id) as TemperamentDBType;
  const divergence = await DB.query(
    "SELECT * FROM divergence WHERE idTemperament = ?", [id]);
  const deviation = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.deviation, acc), {});
  const cpExp5th  = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.cpExp5th, acc), {});
  const csExp3rd  = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.csExp3rd, acc), {});
  const procedure  = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.procedure, acc), {});
  return { ...tmpmt, deviation, cpExp5th, csExp3rd };
  */
};


/**
 * @returns All known temperaments in database
 * and their divergence properties
 */
export const fetchAllTemperamentsProps = async (
): Promise<Array<Temperament>> => {
  // TODO Remove on production
  return defaultTemperaments;
  /*
  const temperaments = await fetchTemperaments();
  const res = Promise.all(temperaments.map(async (tmpmt: TemperamentDBType) => {
    return await fetchTemperamentPropsById(tmpmt.idTemperament);
  }));
  DB.close();
  return await res;
  */
};
