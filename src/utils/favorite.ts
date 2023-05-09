import { TemperamentDBType } from '../engine/DB';

export const temperamentFavorite = (id: string, user: string[]) => {
  return user.includes(id);
};

export const ascendingOrder =
  (property: 'periodNum' | 'name') =>
  (a: TemperamentDBType, b: TemperamentDBType) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  };

export const descendingOrder =
  (property: 'periodNum' | 'name') =>
  (a: TemperamentDBType, b: TemperamentDBType) => {
    return ascendingOrder(property)(a, b) * -1;
  };
