import { TFunction } from 'i18next';

import {
  Temperament,
  DataSources,
  DataSound,
} from '../model/Temperament/Temperament';

import { defaultTemperaments } from '../model/Temperament/Temperament';

const transGetter = (
  t: TFunction<'temperaments'>,
  id: string,
  key: string
): unknown => {
  const translation = t(`temperaments:${id}.${key}` as any, {
    returnObjects: true,
  });
  return translation;
};

/**
 * @returns All known temperaments in database
 */
export const fetchTemperaments = (
  t: TFunction<'temperaments'>
): Array<Temperament> => {
  return defaultTemperaments.map(
    (temp) =>
      ({
        id: temp.id,
        deviation: temp.deviation,
        cpExp5th: temp.cpExp5th,
        csExp3rd: temp.csExp3rd,
        csExpMin3rd: temp.csExpMin3rd,
        periodNum: temp.periodNum,
        period: transGetter(t, temp.id, 'period') as string,
        name: transGetter(t, temp.id, 'name') as string,
        theorist: transGetter(t, temp.id, 'theorist') as string,
        geographicalArea: transGetter(t, temp.id, 'geographicalArea') as string,
        nature: transGetter(t, temp.id, 'nature') as string,
        structuralParticularity: transGetter(
          t,
          temp.id,
          'structuralParticularity'
        ) as string,
        sources: transGetter(t, temp.id, 'sources') as DataSources[],
        soundReferences: transGetter(
          t,
          temp.id,
          'soundReferences'
        ) as DataSound[],
        commentary: transGetter(t, temp.id, 'commentary') as string,
      } as Temperament)
  );
};

/**
 * @returns The temperament corresponding to
 * the given 'id' and its divergence
 * properties
 */
export const fetchTemperamentPropsById = (
  t: TFunction<'temperaments'>,
  id: string
): Temperament => {
  return fetchTemperaments(t).filter((t) => t.id === id)[0];
};
