import { DeepPartial } from './types';

const mergeDeepTogether = <T,>(target: T, source: DeepPartial<T>) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    const k = key as keyof T;
    if (source[k] && typeof source[k] === 'object')
      Object.assign(
        source[k] as any,
        mergeDeep(target[k], source[k]!)
      )
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
};


export const mergeDeep = <T,>(first: T, second: DeepPartial<T>) => {
  const firstCopy = {...first};
  return mergeDeepTogether(firstCopy, second);
};


export const equalsDeep = (a: any, b: any): boolean => {
  if (a === b) return true;
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equalsDeep(a[k], b[k]));
};
