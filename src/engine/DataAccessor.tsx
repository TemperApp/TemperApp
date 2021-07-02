/* eslint-disable no-sequences */
import { Temperament } from '../model/Temperament/Temperament';
import { TemperamentDBType } from '../engine/DB';

// TODO Remove on production
import { defaultTemperaments } from '../model/Temperament/Temperament';


/**
 * @returns All known temperaments in database
 */
export const fetchTemperaments = async (): Promise<Array<TemperamentDBType>> => {
  // TODO Remove on production
  return defaultTemperaments.map((t) => ({
    idTemperament: t.idTemperament,
    name: t.name,
    nameFR: t.nameFR,
  }));
  /*
  return await DB.query("SELECT * FROM temperament");
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
    .filter((t) => t.idTemperament == id)
    .map((t) => ({
      idTemperament: t.idTemperament,
      name: t.name,
      nameFR: t.nameFR,
    }))[0];
  // TODO Handle id not found
  /*
  return (await DB.query("SELECT * FROM temperament WHERE idTemperament = ?;", [id]))[0];
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
    .filter((t) => t.idTemperament == id)[0];
  // TODO Handle id not found
  /*
  const tmpmt = await fetchTemperamentById(id) as TemperamentDBType;
  const divergence = await DB.query(
    "SELECT * FROM divergence WHERE idTemperament = ?", [id]);
  const deviation = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.deviation, acc), {});
  const cpExp5th  = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.cpExp5th, acc), {});
  const csExp3rd  = divergence.reduce((acc, d: DivergenceDBType) => (acc[d.noteSymbol] = d.csExp3rd, acc), {});
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
