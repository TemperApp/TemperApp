import { Temperament } from '../model/Temperament';
//import Deviation from '../model/Deviation';
import DB from '../engine/DB';

export const fetchTemperamentsAllProps = async (): Promise<Array<Temperament>> => {
  const temperaments = await DB.queryAndKeepAlive("SELECT * FROM temperament");
  const res = Promise.all(temperaments.map(async (t: any) => {
    const deviations = await DB.queryAndKeepAlive(
      "SELECT * FROM deviation WHERE idTemperament = ?", [t.idTemperament]);
    const cpExp5th = deviations?.map((d: any) => (d.cpExp5th));
    const csExp3rd = deviations?.map((d: any) => (d.cpExp3rd));
    return {...t, cpExp5th, csExp3rd}
  }));
  DB.close();
  return await res;
};

export const fetchTemperaments = async (): Promise<Array<Temperament>> => {
  return await DB.query("SELECT * FROM temperament");
};

export {};